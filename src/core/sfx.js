// Ses efektleri: tamamı WebAudio ile anlık üretilir (dosya/telif yok, internetsiz çalışır)
import { store } from './store.js';

let ctx = null;
let master = null;

export function unlockAudio() {
  try {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = 0.55;
      const comp = ctx.createDynamicsCompressor();
      master.connect(comp).connect(ctx.destination);
    }
    if (ctx.state === 'suspended') ctx.resume();
  } catch { /* ses yok */ }
}

const on = () => ctx && master && store.settings.sound;

function tone(freq, { type = 'sine', at = 0, dur = 0.2, vol = 0.4, attack = 0.005, slideTo = null } = {}) {
  const t = ctx.currentTime + at;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + attack);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(master);
  o.start(t);
  o.stop(t + dur + 0.05);
}

let noiseBuf = null;
function noise({ at = 0, dur = 0.15, vol = 0.3, freq = 1200, q = 1, sweepTo = null, type = 'bandpass' } = {}) {
  if (!noiseBuf) {
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 0.6, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  }
  const t = ctx.currentTime + at;
  const s = ctx.createBufferSource();
  s.buffer = noiseBuf;
  const f = ctx.createBiquadFilter();
  f.type = type;
  f.frequency.setValueAtTime(freq, t);
  if (sweepTo) f.frequency.exponentialRampToValueAtTime(sweepTo, t + dur);
  f.Q.value = q;
  const g = ctx.createGain();
  g.gain.setValueAtTime(vol, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  s.connect(f).connect(g).connect(master);
  s.start(t);
  s.stop(t + dur + 0.05);
}

// C majör, ksilofon için (C5'ten C6'ya)
export const SCALE = [523.25, 587.33, 659.25, 698.46, 783.99, 880.0, 987.77, 1046.5];

export const sfx = {
  tap() { if (!on()) return; tone(720, { dur: 0.07, vol: 0.18, type: 'triangle' }); },
  pop() {
    if (!on()) return;
    noise({ dur: 0.12, vol: 0.5, freq: 1800, q: 0.8, sweepTo: 400 });
    tone(900, { dur: 0.1, vol: 0.2, slideTo: 300 });
  },
  correct() {
    if (!on()) return;
    [783.99, 987.77, 1318.5].forEach((f, i) => tone(f, { type: 'triangle', at: i * 0.08, dur: 0.28, vol: 0.28 }));
  },
  wrong() {
    if (!on()) return;
    tone(330, { type: 'sine', dur: 0.32, vol: 0.3, slideTo: 196 });
  },
  star() {
    if (!on()) return;
    [1568, 2093, 2637].forEach((f, i) => tone(f, { at: i * 0.05, dur: 0.35, vol: 0.12 }));
  },
  flip() { if (!on()) return; noise({ dur: 0.1, vol: 0.18, freq: 2600, q: 0.6, sweepTo: 5000, type: 'highpass' }); },
  whoosh() { if (!on()) return; noise({ dur: 0.45, vol: 0.22, freq: 300, q: 0.9, sweepTo: 2400 }); },
  snap() { if (!on()) return; tone(520, { dur: 0.06, vol: 0.3, type: 'square' }); tone(1040, { at: 0.04, dur: 0.12, vol: 0.18, type: 'triangle' }); },
  fanfare() {
    if (!on()) return;
    const n = [523.25, 659.25, 783.99, 1046.5];
    n.forEach((f, i) => tone(f, { type: 'triangle', at: i * 0.12, dur: 0.35, vol: 0.28 }));
    [523.25, 659.25, 783.99, 1046.5].forEach(f => tone(f, { type: 'triangle', at: 0.5, dur: 1.1, vol: 0.14 }));
  },
  note(freq) {
    if (!on()) return;
    tone(freq, { type: 'sine', dur: 0.9, vol: 0.45, attack: 0.003 });
    tone(freq * 4, { type: 'sine', dur: 0.12, vol: 0.12, attack: 0.002 });
    tone(freq * 2, { type: 'triangle', dur: 0.35, vol: 0.08 });
  },
};
