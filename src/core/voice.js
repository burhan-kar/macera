// Seslendirme: önce insan tınılı hazır klipler, yoksa cihazın konuşma sentezi
import { store } from './store.js';
import { duck } from './music.js';
import { getCtx, getMaster } from './audio.js';

const synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
let voices = [];
const listeners = new Set();

function loadVoices() {
  if (!synth) return;
  voices = synth.getVoices() || [];
}
if (synth) {
  loadVoices();
  synth.addEventListener?.('voiceschanged', loadVoices);
}

const QUALITY = /premium|enhanced|siri|natural|neural|google/i;
const AVOID = /compact|eloquence|novelty|bells|bad news|boing|bubbles|cellos|jester|organ|trinoids|whisper|zarvox|albert|fred|junior|ralph|superstar|bahh/i;

function pickVoice(lang) {
  const prefs = lang === 'tr' ? ['tr-tr', 'tr'] : ['en-us', 'en-gb', 'en-au', 'en'];
  for (const p of prefs) {
    const list = voices.filter(v => v.lang.replace('_', '-').toLowerCase().startsWith(p) && !AVOID.test(v.name));
    if (list.length) return list.find(v => QUALITY.test(v.name)) || list.find(v => v.localService) || list[0];
  }
  return null;
}

/** Dil moduna göre seslendirilecek parçalar. word: sadece hedef kelime ({tr,en}). */
export function lines(sentence, word) {
  const mode = store.settings.lang;
  if (mode === 'tr') return [{ lang: 'tr', text: sentence.tr }];
  if (mode === 'en') return [{ lang: 'en', text: sentence.en }];
  return [{ lang: 'tr', text: sentence.tr }, { lang: 'en', text: word ? word.en : sentence.en }];
}

/** Ekranda gösterilecek metin */
export function label(obj) {
  const mode = store.settings.lang;
  return mode === 'en' ? obj.en : obj.tr;
}
export function subLabel(obj) {
  return store.settings.lang === 'both' ? obj.en : '';
}

/** Klip anahtarı: metinden sadeleştirilmiş, dosya adı olarak kullanılabilir kimlik */
export function clipKey(lang, text) {
  const t = text.toLocaleLowerCase('tr').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const slug = t.replace(/ı/g, 'i').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 48);
  let h = 0;
  for (let i = 0; i < text.length; i++) h = (Math.imul(h, 31) + text.charCodeAt(i)) | 0;
  return `${lang}-${slug}-${(h >>> 0).toString(36)}`;
}

// ---------- Klip bankası ----------
const clips = new Map();      // anahtar → AudioBuffer
let clipIndex = null;         // Set: üretilmiş klip anahtarları
let indexReady = null;
const pending = new Map();

function loadIndex() {
  if (indexReady) return indexReady;
  indexReady = fetch('voice/index.json')
    .then(r => (r.ok ? r.json() : []))
    .then(list => { clipIndex = new Set(list); })
    .catch(() => { clipIndex = new Set(); });
  return indexReady;
}
if (typeof window !== 'undefined') loadIndex();

/** Klibi (gerekirse indirerek) hazırlar; yoksa null döner. */
async function getClip(key) {
  if (!clipIndex) await loadIndex();
  if (!clipIndex.has(key)) return null;
  if (clips.has(key)) return clips.get(key);
  if (pending.has(key)) return pending.get(key);
  const ctx = getCtx();
  if (!ctx) return null;
  const job = fetch(`voice/${key}.mp3`)
    .then(r => (r.ok ? r.arrayBuffer() : Promise.reject()))
    .then(b => ctx.decodeAudioData(b))
    .then(buf => { clips.set(key, buf); pending.delete(key); return buf; })
    .catch(() => { pending.delete(key); clipIndex.delete(key); return null; });
  pending.set(key, job);
  return job;
}

/** Klibi çalar; biten Promise döner. */
function playClip(buf) {
  const ctx = getCtx();
  const dest = getMaster();
  if (!ctx || !dest) return null;
  const src = ctx.createBufferSource();
  src.buffer = buf;
  const g = ctx.createGain();
  g.gain.value = 1;
  src.connect(g).connect(dest);
  src.start();
  return { src, done: new Promise(r => { src.onended = r; }) };
}

/** Arka planda tüm klipleri önbelleğe çeker (çevrimdışı kullanım için) */
export function prefetchClips(delay = 6000) {
  setTimeout(async () => {
    await loadIndex();
    if (!clipIndex) return;
    const keys = [...clipIndex];
    for (let i = 0; i < keys.length; i += 6) {
      await Promise.all(keys.slice(i, i + 6).map(k => fetch(`voice/${k}.mp3`).catch(() => {})));
      await new Promise(r => setTimeout(r, 120));
    }
  }, delay);
}

let token = 0;

/** Parçaları sırayla söyler; bitince çözülen Promise döner. */
export function speak(parts) {
  stop();
  const my = ++token;
  if (typeof window !== 'undefined' && window.__collectVoice) {
    parts.forEach(p => window.__collectVoice({ lang: p.lang, text: p.text, key: clipKey(p.lang, p.text) }));
  }
  if (!store.settings.voice || !parts.length) return Promise.resolve();
  emit(true);
  return (async () => {
    for (const part of parts) {
      if (my !== token) return;
      const key = clipKey(part.lang, part.text);
      let buf = null;
      try { buf = await getClip(key); } catch { buf = null; }
      if (my !== token) return;
      if (buf) {
        const p = playClip(buf);
        if (p) {
          current = p.src;
          await p.done;
          if (my !== token) return;
          await new Promise(r => setTimeout(r, 90));
          continue;
        }
      }
      await speakNative(part, () => my === token);
      if (my !== token) return;
    }
    if (my === token) emit(false);
  })();
}

/** Cihazın konuşma sentezi (klip yoksa yedek) */
function speakNative(part, alive) {
  if (!synth) return Promise.resolve();
  return new Promise(resolve => {
    const u = new SpeechSynthesisUtterance(part.text);
    u.lang = part.lang === 'tr' ? 'tr-TR' : 'en-US';
    const v = pickVoice(part.lang);
    if (v) u.voice = v;
    u.rate = store.settings.rate * (part.lang === 'en' ? 0.95 : 1);
    u.pitch = 1.1;
    const guard = setTimeout(done, 1200 + part.text.length * 110);
    function done() { clearTimeout(guard); resolve(); }
    u.onend = u.onerror = () => setTimeout(done, 100);
    if (!alive()) return resolve();
    synth.speak(u);
  });
}

export function say(sentence, word) {
  return speak(lines(sentence, word));
}

let current = null;

export function stop() {
  token++;
  emit(false);
  try { current && current.stop(); } catch { /* yok say */ }
  current = null;
  try { synth && synth.cancel(); } catch { /* yok say */ }
}

/** iOS: ilk dokunuşta konuşmayı aç */
export function unlockVoice() {
  if (!synth) return;
  try {
    const u = new SpeechSynthesisUtterance(' ');
    u.volume = 0;
    synth.speak(u);
  } catch { /* yok say */ }
}

export function onTalking(fn) { listeners.add(fn); return () => listeners.delete(fn); }
function emit(on) { duck(on); listeners.forEach(fn => fn(on)); }
