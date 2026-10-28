// Ses efektlerini Tone.js ile Chromium'da offline render eder, WAV yazar, ffmpeg ile sıkıştırır.
import { chromium } from 'playwright';
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'fs';
import { execFileSync } from 'child_process';
import { SOUNDS, SCALE_NOTES, noteRecipe, MUSIC_ISLAND, MUSIC_PLAY } from './sounds.js';

const OUT = 'audio';
const TMP = process.env.SCRATCH || '/tmp/claude-0/audio-tmp';
mkdirSync(OUT, { recursive: true });
mkdirSync(TMP, { recursive: true });

// Render edilecek işler: [dosyaAdı, tarif, stereoMu, kbps]
const jobs = [];
for (const [name, rec] of Object.entries(SOUNDS)) jobs.push([name, rec, false, 40]);
SCALE_NOTES.forEach((n, i) => jobs.push([`note${i}`, noteRecipe(n), false, 48]));
jobs.push(['music-island', MUSIC_ISLAND, true, 72]);
jobs.push(['music-play', MUSIC_PLAY, true, 64]);

const toneSrc = readFileSync('node_modules/tone/build/Tone.js', 'utf8');

// Kısa metot sözdizimini ("render(T, out) {...}") geçerli bir ifadeye çevirir
function fnSource(fn) {
  const src = fn.toString().trim();
  const alreadyExpr = /^(function\b|async\b|\()/.test(src) || /^[\w$]+\s*=>/.test(src);
  return alreadyExpr ? src : 'function ' + src;
}

const browser = await chromium.launch({ args: ['--autoplay-policy=no-user-gesture-required'] });
const page = await browser.newPage();
page.on('pageerror', e => console.log('PAGEERR', e.message));
page.on('console', m => m.type() === 'error' && console.log('CONSOLE', m.text()));
await page.goto('http://localhost:8080/favicon-blank.html').catch(() => page.goto('http://localhost:8080/'));
await page.addScriptTag({ content: toneSrc });
await page.waitForFunction(() => !!window.Tone);

const results = [];
for (const [name, rec, stereo, kbps] of jobs) {
  const wavB64 = await page.evaluate(async ({ src, dur, verb, stereo, arg }) => {
    const T = window.Tone;
    const fn = new Function('T', 'out', 'arg', `(${src})(T, out, arg)`);
    const buf = await T.Offline(async (ctx) => {
      const limiter = new T.Limiter(-1).toDestination();
      const comp = new T.Compressor({ threshold: -16, ratio: 3, attack: 0.004, release: 0.12 }).connect(limiter);
      const dry = new T.Gain(1).connect(comp);
      let out = dry;
      if (verb > 0) {
        const rv = new T.Reverb({ decay: Math.max(0.3, verb * 4), preDelay: 0.012, wet: verb }).connect(comp);
        await rv.generate();
        out = new T.Gain(1);
        out.connect(dry);
        out.connect(rv);
      }
      fn(T, out, arg);
    }, dur, stereo ? 2 : 1, 44100);

    // AudioBuffer → WAV (16-bit PCM)
    const ch = buf.numberOfChannels, len = buf.length, rate = buf.sampleRate;
    const data = [];
    for (let c = 0; c < ch; c++) data.push(buf.getChannelData(c));
    // tepe normalize
    let peak = 0;
    for (const d of data) for (let i = 0; i < len; i++) { const a = Math.abs(d[i]); if (a > peak) peak = a; }
    const g = peak > 0.0001 ? 0.92 / peak : 1;

    const bytes = 44 + len * ch * 2;
    const ab = new ArrayBuffer(bytes);
    const v = new DataView(ab);
    const str = (o, s) => { for (let i = 0; i < s.length; i++) v.setUint8(o + i, s.charCodeAt(i)); };
    str(0, 'RIFF'); v.setUint32(4, bytes - 8, true); str(8, 'WAVE'); str(12, 'fmt ');
    v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, ch, true);
    v.setUint32(24, rate, true); v.setUint32(28, rate * ch * 2, true);
    v.setUint16(32, ch * 2, true); v.setUint16(34, 16, true);
    str(36, 'data'); v.setUint32(40, len * ch * 2, true);
    let o = 44;
    for (let i = 0; i < len; i++) for (let c = 0; c < ch; c++) {
      let s = Math.max(-1, Math.min(1, data[c][i] * g));
      v.setInt16(o, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
      o += 2;
    }
    let bin = '';
    const u8 = new Uint8Array(ab);
    const CH = 0x8000;
    for (let i = 0; i < u8.length; i += CH) bin += String.fromCharCode.apply(null, u8.subarray(i, i + CH));
    return btoa(bin);
  }, { src: fnSource(rec.render), dur: rec.dur, verb: rec.verb || 0, stereo, arg: rec.arg ?? null });

  const wav = `${TMP}/${name}.wav`;
  writeFileSync(wav, Buffer.from(wavB64, 'base64'));

  // Sessizliği kırp (müzik döngüsünde kırpma yok: döngü hizası bozulmasın)
  const isMusic = name.startsWith('music-');
  const mp3 = `${OUT}/${name}.mp3`;
  const args = ['-y', '-i', wav];
  if (!isMusic) args.push('-af', 'silenceremove=start_periods=1:start_threshold=-55dB:start_silence=0.004,areverse,silenceremove=start_periods=1:start_threshold=-60dB,areverse');
  else args.push('-t', String(rec.loopEnd.toFixed(4)));
  args.push('-codec:a', 'libmp3lame', '-b:a', `${kbps}k`, '-ar', '44100', '-ac', stereo ? '2' : '1', mp3);
  execFileSync('ffmpeg', args, { stdio: 'pipe' });

  const kb = statSync(mp3).size / 1024;
  results.push([name, kb]);
  process.stdout.write(`${name} ${kb.toFixed(1)}KB  `);
}
await browser.close();

const total = results.reduce((a, [, k]) => a + k, 0);
console.log(`\nToplam ${results.length} dosya, ${total.toFixed(0)} KB`);
