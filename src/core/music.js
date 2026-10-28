// Arka plan müziği ve ambiyans: tamamı WebAudio ile anlık üretilir (dosya yok, telifsiz)
import { store } from './store.js';
import { getCtx, getMaster } from './sfx.js';

let bus = null;        // müzik için ayrı ses yolu
let timer = 0;         // bir sonraki ölçüyü planlayan zamanlayıcı
let nextTime = 0;      // bir sonraki notanın zamanı
let step = 0;          // 16'lık adım sayacı
let current = null;    // çalan parçanın adı
let ambience = null;   // ambiyans (kuş sesi vb.) zamanlayıcısı

const BPM = 104;
const SPB = 60 / BPM / 4; // 16'lık nota süresi

// Nota adı → frekans
const N = (name) => {
  const map = { C: 0, 'C#': 1, D: 2, 'D#': 3, E: 4, F: 5, 'F#': 6, G: 7, 'G#': 8, A: 9, 'A#': 10, B: 11 };
  const m = /^([A-G]#?)(\d)$/.exec(name);
  return 440 * Math.pow(2, (map[m[1]] + (+m[2] - 4) * 12 - 9) / 12);
};

// Akor ilerleyişleri ve ezgiler — hepsi özgün, basit ve neşeli
const TRACKS = {
  // Ada: ferah, ukulele hissi
  island: {
    gain: 0.3,
    chords: [['C3', 'E4', 'G4'], ['A2', 'C4', 'E4'], ['F2', 'A3', 'C4'], ['G2', 'B3', 'D4']],
    melody: ['E5', null, 'G5', null, 'A5', null, 'G5', null, 'E5', null, 'D5', null, 'C5', null, null, null,
      'D5', null, 'E5', null, 'G5', null, 'E5', null, 'D5', null, 'C5', null, 'A4', null, null, null],
    pluck: true,
  },
  // Oyun içi: sakin, karışmayan
  play: {
    gain: 0.17,
    chords: [['C3', 'G3', 'E4'], ['F2', 'C4', 'A3'], ['A2', 'E4', 'C4'], ['G2', 'D4', 'B3']],
    melody: ['C5', null, null, 'E5', null, null, 'G5', null, null, null, 'E5', null, null, null, null, null,
      'A4', null, null, 'C5', null, null, 'E5', null, null, null, 'D5', null, null, null, null, null],
    pluck: false,
  },
};

function ensureBus() {
  const ctx = getCtx();
  const master = getMaster();
  if (!ctx || !master) return null;
  if (!bus) {
    bus = ctx.createGain();
    bus.gain.value = 0;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 5200;
    bus.connect(lp).connect(master);
  }
  return ctx;
}

function blip(ctx, freq, t, dur, vol, type = 'triangle', detune = 0) {
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  if (detune) o.detune.setValueAtTime(detune, t);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(bus);
  o.start(t);
  o.stop(t + dur + 0.04);
}

function scheduleBar(ctx, track) {
  // 16'lık adımlarla ilerler; her ölçüde bir akor
  while (nextTime < ctx.currentTime + 0.35) {
    const s = step % 32;
    const chord = track.chords[(step >> 4) % track.chords.length];
    // Bas: her vuruşta
    if (s % 8 === 0) blip(ctx, N(chord[0]), nextTime, 0.5, 0.2, 'sine');
    // Akor: 8'liklerde kısa tıngırtı
    if (s % 4 === 2) chord.slice(1).forEach((c, i) => blip(ctx, N(c), nextTime, 0.28, track.pluck ? 0.08 : 0.05, 'triangle', i * 4));
    // Ezgi
    const m = track.melody[s];
    if (m) blip(ctx, N(m), nextTime, 0.42, 0.1, 'sine');
    // Hafif ritim (yalnız ada parçasında)
    if (track.pluck && s % 8 === 4) blip(ctx, 1800, nextTime, 0.05, 0.02, 'triangle');
    nextTime += SPB;
    step++;
  }
  timer = setTimeout(() => scheduleBar(ctx, track), 90);
}

/** Parçayı yumuşak geçişle çalmaya başlar. name: 'island' | 'play' | null (durdur) */
export function playMusic(name) {
  if (name === current) return;
  const ctx = ensureBus();
  if (!ctx) { current = name; return; }
  current = name;
  clearTimeout(timer);
  if (!name || !store.settings.music) {
    bus.gain.cancelScheduledValues(ctx.currentTime);
    bus.gain.setTargetAtTime(0, ctx.currentTime, 0.25);
    return;
  }
  const track = TRACKS[name];
  nextTime = Math.max(ctx.currentTime + 0.1, nextTime);
  step = 0;
  bus.gain.cancelScheduledValues(ctx.currentTime);
  bus.gain.setTargetAtTime(track.gain, ctx.currentTime, 0.5);
  scheduleBar(ctx, track);
}

export function refreshMusic() {
  const name = current;
  current = null;
  playMusic(name);
}

/** Müziği geçici olarak kısar (konuşma sırasında) */
export function duck(on) {
  const ctx = getCtx();
  if (!ctx || !bus || !current || !store.settings.music) return;
  const base = TRACKS[current].gain;
  bus.gain.cancelScheduledValues(ctx.currentTime);
  bus.gain.setTargetAtTime(on ? base * 0.35 : base, ctx.currentTime, 0.2);
}

// ---------- Ambiyans: ara sıra kuş cıvıltısı, dalga ----------
function chirp(ctx, master) {
  const t = ctx.currentTime + 0.05;
  const n = 2 + ((Math.random() * 3) | 0);
  for (let i = 0; i < n; i++) {
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    const f = 2200 + Math.random() * 1400;
    o.type = 'sine';
    o.frequency.setValueAtTime(f, t + i * 0.09);
    o.frequency.exponentialRampToValueAtTime(f * (1.3 + Math.random() * 0.5), t + i * 0.09 + 0.05);
    g.gain.setValueAtTime(0.0001, t + i * 0.09);
    g.gain.exponentialRampToValueAtTime(0.04, t + i * 0.09 + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.09 + 0.07);
    o.connect(g).connect(master);
    o.start(t + i * 0.09);
    o.stop(t + i * 0.09 + 0.12);
  }
}

export function startAmbience() {
  stopAmbience();
  const tick = () => {
    const ctx = getCtx();
    const master = getMaster();
    if (ctx && master && store.settings.sound) chirp(ctx, master);
    ambience = setTimeout(tick, 5000 + Math.random() * 9000);
  };
  ambience = setTimeout(tick, 3000);
}

export function stopAmbience() {
  clearTimeout(ambience);
  ambience = null;
}

// ---------- Titreşim (haptik) ----------
export function buzz(pattern) {
  if (!store.settings.haptics) return;
  try { navigator.vibrate && navigator.vibrate(pattern); } catch { /* desteklemiyor */ }
}
export const HAPTIC = { tap: 10, good: [0, 18, 40, 24], bad: [0, 50], pop: 12, big: [0, 25, 50, 25, 50, 45] };
