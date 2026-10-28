// Ses bankası: Tone.js ile önceden üretilmiş mp3'leri yükler ve çalar.
// Dosyalar hazır değilken sfx.js'teki sentez yedeği devreye girer.
import { store } from './store.js';

let ctx = null;
let master = null;
let musicBus = null;
let sfxBus = null;
const bank = new Map();     // ad → AudioBuffer
let loading = null;
let ready = false;

export const isReady = () => ready;
export const getCtx = () => ctx;
export const getMaster = () => sfxBus;

export function unlockAudio() {
  try {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = 0.85;
      const comp = ctx.createDynamicsCompressor();
      comp.threshold.value = -14;
      comp.ratio.value = 3;
      comp.attack.value = 0.004;
      comp.release.value = 0.16;
      master.connect(comp).connect(ctx.destination);
      sfxBus = ctx.createGain();
      sfxBus.gain.value = 0.9;
      sfxBus.connect(master);
      musicBus = ctx.createGain();
      musicBus.gain.value = 0;
      musicBus.connect(master);
      load();
    }
    if (ctx.state === 'suspended') ctx.resume();
  } catch { /* ses yok */ }
}

const FILES = [
  'tap', 'pop', 'correct', 'wrong', 'star', 'flip', 'whoosh', 'snap',
  'fanfare', 'paint', 'chomp', 'boing', 'rise', 'chirp',
  'note0', 'note1', 'note2', 'note3', 'note4', 'note5', 'note6', 'note7',
  'music-island', 'music-play',
];

function load() {
  if (loading) return loading;
  loading = Promise.all(FILES.map(async name => {
    try {
      const res = await fetch(`audio/${name}.mp3`);
      if (!res.ok) throw new Error(String(res.status));
      const buf = await ctx.decodeAudioData(await res.arrayBuffer());
      bank.set(name, buf);
    } catch { /* bu ses için sentez yedeği kullanılır */ }
  })).then(() => {
    ready = bank.size > 0;
    if (pendingMusic) playMusic(pendingMusic, true);
  });
  return loading;
}

export const has = name => bank.has(name);

/** Örnek çalar. rate: hız/perde, vol: 0–1, delay: saniye */
export function play(name, { vol = 1, rate = 1, delay = 0 } = {}) {
  if (!ctx || !sfxBus || !store.settings.sound) return false;
  const buf = bank.get(name);
  if (!buf) return false;
  const src = ctx.createBufferSource();
  src.buffer = buf;
  src.playbackRate.value = rate;
  const g = ctx.createGain();
  g.gain.value = vol;
  src.connect(g).connect(sfxBus);
  src.start(ctx.currentTime + delay);
  return true;
}

// ---------- Müzik ----------
let musicSrc = null;
let currentTrack = null;
let pendingMusic = null;
const TRACK_VOL = { 'music-island': 0.34, 'music-play': 0.22 };

/** Döngülü parçayı yumuşak geçişle başlatır. name: 'music-island' | 'music-play' | null */
export function playMusic(name, force = false) {
  if (!ctx) { pendingMusic = name; return; }
  if (name === currentTrack && !force) return;
  currentTrack = name;
  pendingMusic = null;
  const now = ctx.currentTime;

  if (musicSrc) {
    const old = musicSrc;
    const og = old._gain;
    og.gain.cancelScheduledValues(now);
    og.gain.setValueAtTime(og.gain.value, now);
    og.gain.linearRampToValueAtTime(0, now + 0.5);
    try { old.stop(now + 0.55); } catch { /* yok say */ }
    musicSrc = null;
  }
  if (!name || !store.settings.music) {
    musicBus.gain.cancelScheduledValues(now);
    musicBus.gain.setTargetAtTime(0, now, 0.2);
    return;
  }
  const buf = bank.get(name);
  if (!buf) { pendingMusic = name; return; }

  musicBus.gain.cancelScheduledValues(now);
  musicBus.gain.setValueAtTime(1, now);

  const src = ctx.createBufferSource();
  src.buffer = buf;
  src.loop = true;
  const g = ctx.createGain();
  g.gain.setValueAtTime(0, now);
  g.gain.linearRampToValueAtTime(TRACK_VOL[name] ?? 0.3, now + 0.9);
  src._gain = g;
  src.connect(g).connect(musicBus);
  src.start(now);
  musicSrc = src;
}

export function refreshMusic() {
  const t = currentTrack;
  currentTrack = null;
  playMusic(t);
}

/** Konuşurken müziği kıs */
export function duck(on) {
  if (!ctx || !musicBus || !currentTrack || !store.settings.music) return;
  musicBus.gain.cancelScheduledValues(ctx.currentTime);
  musicBus.gain.setTargetAtTime(on ? 0.34 : 1, ctx.currentTime, 0.18);
}

// ---------- Ambiyans: ara sıra kuş sesi ----------
let ambTimer = null;
export function startAmbience() {
  stopAmbience();
  const tick = () => {
    if (store.settings.sound) play('chirp', { vol: 0.5, rate: 0.9 + Math.random() * 0.3 });
    ambTimer = setTimeout(tick, 7000 + Math.random() * 11000);
  };
  ambTimer = setTimeout(tick, 4000);
}
export function stopAmbience() { clearTimeout(ambTimer); ambTimer = null; }

// ---------- Titreşim ----------
export function buzz(pattern) {
  if (!store.settings.haptics) return;
  try { navigator.vibrate && navigator.vibrate(pattern); } catch { /* desteklemiyor */ }
}
export const HAPTIC = { tap: 10, good: [0, 18, 40, 24], bad: [0, 50], pop: 12, big: [0, 25, 50, 25, 50, 45] };
