// Ses efektleri: öncelik Tone.js ile üretilmiş örneklerde; yoksa anlık sentez yedeği
import { store } from './store.js';
import { play as playSample, has as hasSample, unlockAudio as unlockBank, getCtx as bankCtx, getMaster as bankMaster } from './audio.js';

let ctx = null;
let master = null;

export function unlockAudio() {
  unlockBank();
  ctx = bankCtx();
  master = bankMaster();
}

const on = () => store.settings.sound;

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

// Her efekt: önce örnek, yoksa sentez
const synth = {
  tap() { tone(720, { dur: 0.07, vol: 0.18, type: 'triangle' }); },
  pop() { noise({ dur: 0.12, vol: 0.5, freq: 1800, q: 0.8, sweepTo: 400 }); tone(900, { dur: 0.1, vol: 0.2, slideTo: 300 }); },
  correct() { [783.99, 987.77, 1318.5].forEach((f, i) => tone(f, { type: 'triangle', at: i * 0.08, dur: 0.28, vol: 0.28 })); },
  wrong() { tone(330, { type: 'sine', dur: 0.32, vol: 0.3, slideTo: 196 }); },
  star() { [1568, 2093, 2637].forEach((f, i) => tone(f, { at: i * 0.05, dur: 0.35, vol: 0.12 })); },
  flip() { noise({ dur: 0.1, vol: 0.18, freq: 2600, q: 0.6, sweepTo: 5000, type: 'highpass' }); },
  whoosh() { noise({ dur: 0.45, vol: 0.22, freq: 300, q: 0.9, sweepTo: 2400 }); },
  snap() { tone(520, { dur: 0.06, vol: 0.3, type: 'square' }); tone(1040, { at: 0.04, dur: 0.12, vol: 0.18, type: 'triangle' }); },
  fanfare() {
    const n = [523.25, 659.25, 783.99, 1046.5];
    n.forEach((f, i) => tone(f, { type: 'triangle', at: i * 0.12, dur: 0.35, vol: 0.28 }));
    n.forEach(f => tone(f, { type: 'triangle', at: 0.5, dur: 1.1, vol: 0.14 }));
  },
  paint() { noise({ dur: 0.2, vol: 0.4, freq: 700, q: 0.7, sweepTo: 180, type: 'lowpass' }); tone(420, { dur: 0.14, vol: 0.12, slideTo: 760 }); },
  chomp() { [0, 0.13, 0.26].forEach(at => noise({ at, dur: 0.08, vol: 0.4, freq: 900, q: 1.2, sweepTo: 300 })); },
  boing() { tone(260, { type: 'triangle', dur: 0.3, vol: 0.3, slideTo: 720 }); },
  rise() { tone(330, { type: 'sine', dur: 0.12, vol: 0.08, slideTo: 520 }); },
};

const vary = () => 0.97 + Math.random() * 0.06;

function fire(name, opts) {
  if (!on()) return;
  if (hasSample(name)) { playSample(name, opts); return; }
  synth[name] && synth[name]();
}

export const sfx = {
  tap: () => fire('tap', { vol: 0.75, rate: vary() }),
  pop: () => fire('pop', { vol: 0.95, rate: 0.92 + Math.random() * 0.22 }),
  correct: () => fire('correct', { vol: 0.95, rate: vary() }),
  wrong: () => fire('wrong', { vol: 0.8 }),
  star: () => fire('star', { vol: 0.8, rate: vary() }),
  flip: () => fire('flip', { vol: 0.85, rate: 0.95 + Math.random() * 0.14 }),
  whoosh: () => fire('whoosh', { vol: 0.8, rate: vary() }),
  snap: () => fire('snap', { vol: 0.9, rate: vary() }),
  fanfare: () => fire('fanfare', { vol: 1 }),
  paint: () => fire('paint', { vol: 0.75, rate: 0.9 + Math.random() * 0.3 }),
  chomp: () => fire('chomp', { vol: 0.9, rate: 0.94 + Math.random() * 0.14 }),
  boing: () => fire('boing', { vol: 0.9, rate: 0.92 + Math.random() * 0.2 }),
  rise: () => fire('rise', { vol: 0.6, rate: 0.9 + Math.random() * 0.25 }),
  /** Ksilofon notası: 0–7 */
  note(i) {
    if (!on()) return;
    if (hasSample(`note${i}`)) { playSample(`note${i}`, { vol: 0.95 }); return; }
    const f = SCALE[i] || SCALE[0];
    tone(f, { type: 'sine', dur: 0.9, vol: 0.45, attack: 0.003 });
    tone(f * 4, { type: 'sine', dur: 0.12, vol: 0.12, attack: 0.002 });
  },
};
