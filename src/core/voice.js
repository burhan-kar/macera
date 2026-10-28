// Seslendirme: cihazın konuşma sentezi, TR/EN/İkisi dil modu
import { store } from './store.js';
import { duck } from './music.js';

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

let token = 0;

/** Parçaları sırayla söyler; bitince çözülen Promise döner. */
export function speak(parts) {
  stop();
  const my = ++token;
  if (!synth || !store.settings.voice || !parts.length) return Promise.resolve();
  emit(true);
  return new Promise(resolve => {
    let i = 0;
    const finish = () => { if (my === token) emit(false); resolve(); };
    const next = () => {
      if (my !== token) return resolve();
      if (i >= parts.length) return finish();
      const { lang, text } = parts[i++];
      const u = new SpeechSynthesisUtterance(text);
      u.lang = lang === 'tr' ? 'tr-TR' : 'en-US';
      const v = pickVoice(lang);
      if (v) u.voice = v;
      u.rate = store.settings.rate * (lang === 'en' ? 0.95 : 1);
      u.pitch = 1.1;
      // Bazı tarayıcılar onend tetiklemez: süreye dayalı yedek
      const guard = setTimeout(next, 1200 + text.length * 110);
      u.onend = u.onerror = () => { clearTimeout(guard); setTimeout(next, 120); };
      synth.speak(u);
    };
    next();
  });
}

export function say(sentence, word) {
  return speak(lines(sentence, word));
}

export function stop() {
  token++;
  emit(false);
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
