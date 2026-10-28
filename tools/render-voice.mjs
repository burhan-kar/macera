// Toplanan cümleleri MBROLA ile seslendirir, cilalar ve voice/ klasörüne mp3 yazar.
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync, readdirSync, unlinkSync } from 'fs';
import { execFileSync } from 'child_process';

const [, , linesFile, trVoice = 'tr-kadin', enVoice = 'en-kadin'] = process.argv;
const OUT = 'voice';
const TMP = (process.env.SCRATCH || '/tmp') + '/voice-tmp';
mkdirSync(OUT, { recursive: true });
mkdirSync(TMP, { recursive: true });

const lines = JSON.parse(readFileSync(linesFile, 'utf8'));
const want = new Set(lines.map(l => l.key));

// Artık kullanılmayan klipleri sil
for (const f of readdirSync(OUT)) {
  if (f.endsWith('.mp3') && !want.has(f.slice(0, -4))) unlinkSync(`${OUT}/${f}`);
}

// Konuşma cilası: gürültü temizliği, parlaklık, kompresyon, çok hafif oda, ses eşitleme
const POLISH = 'highpass=f=85,treble=g=4:f=3800,acompressor=threshold=-18dB:ratio=3:attack=5:release=90,'
  + 'aecho=0.9:0.25:26:0.10,loudnorm=I=-16:TP=-1.5:LRA=11,'
  + 'silenceremove=start_periods=1:start_threshold=-50dB:start_silence=0.02,areverse,'
  + 'silenceremove=start_periods=1:start_threshold=-50dB:start_silence=0.06,areverse';

let made = 0, skipped = 0, failed = [];
for (const { lang, text, key } of lines) {
  const mp3 = `${OUT}/${key}.mp3`;
  if (existsSync(mp3) && statSync(mp3).size > 400) { skipped++; continue; }
  const wav = `${TMP}/${key}.wav`;
  try {
    execFileSync('python3', ['tools/tts.py', text, wav, lang === 'tr' ? trVoice : enVoice],
      { stdio: 'pipe', timeout: 60000 });
    execFileSync('ffmpeg', ['-y', '-i', wav, '-af', POLISH,
      '-codec:a', 'libmp3lame', '-b:a', '28k', '-ar', '32000', '-ac', '1', mp3], { stdio: 'pipe' });
    made++;
  } catch (e) {
    failed.push(key);
  }
  if ((made + skipped) % 40 === 0) process.stdout.write('.');
}

const files = readdirSync(OUT).filter(f => f.endsWith('.mp3'));
const total = files.reduce((a, f) => a + statSync(`${OUT}/${f}`).size, 0);
writeFileSync(`${OUT}/index.json`, JSON.stringify(files.map(f => f.slice(0, -4))));
console.log(`\nüretildi ${made}, atlandı ${skipped}, hatalı ${failed.length}`);
if (failed.length) console.log('hatalı:', failed.slice(0, 5));
console.log(`toplam ${files.length} klip, ${(total / 1024 / 1024).toFixed(2)} MB`);
