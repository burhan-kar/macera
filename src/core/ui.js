// Ortak arayüz yardımcıları: öğe oluşturma, maskot, konfeti, yıldız uçurma, kutlama
import { mascotSVG, ICON, animalSVG, ANIMALS } from './art.js';
import { onTalking, say, label } from './voice.js';
import { sfx } from './sfx.js';
import { store, save } from './store.js';

export function h(tag, attrs = {}, ...kids) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v == null || v === false) continue;
    if (k === 'class') el.className = v;
    else if (k === 'html') el.innerHTML = v;
    else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
    else if (k === 'style' && typeof v === 'object') for (const [sk, sv] of Object.entries(v)) { if (sk.startsWith('--')) el.style.setProperty(sk, sv); else el.style[sk] = sv; }
    else el.setAttribute(k, v === true ? '' : v);
  }
  for (const kid of kids.flat()) if (kid != null) el.append(kid);
  return el;
}

export const wait = ms => new Promise(r => setTimeout(r, ms));
export const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const sample = (a, n) => shuffle(a).slice(0, n);
export const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- Maskot ----------
export function mascot(cls = '') {
  return h('div', { class: `mascot ${cls}`, html: mascotSVG() });
}
onTalking(on => document.querySelectorAll('.mascot').forEach(m => m.classList.toggle('talking', on)));

export function mood(m, kind) {
  if (!m) return;
  m.classList.remove('happy', 'oops');
  void m.offsetWidth;
  m.classList.add(kind);
  clearTimeout(m._moodT);
  m._moodT = setTimeout(() => m.classList.remove(kind), 1000);
}

// ---------- Efekt katmanı ----------
function fxLayer() {
  let l = document.getElementById('fx');
  if (!l) { l = h('div', { id: 'fx', 'aria-hidden': 'true' }); document.body.append(l); }
  return l;
}

const CONFETTI = ['#FF6F59', '#FFC93C', '#5BBA6F', '#3FA7D6', '#9B6DD6', '#FF5C8A'];
export function confetti(x, y, n = 22) {
  if (reducedMotion()) n = 6;
  const layer = fxLayer();
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2;
    const d = 60 + Math.random() * 120;
    const p = h('i', { class: 'confetto' });
    p.style.left = x + 'px';
    p.style.top = y + 'px';
    p.style.background = CONFETTI[i % CONFETTI.length];
    p.style.setProperty('--dx', `${Math.cos(a) * d}px`);
    p.style.setProperty('--dy', `${Math.sin(a) * d - 40}px`);
    p.style.setProperty('--r', `${(Math.random() * 720 - 360) | 0}deg`);
    if (i % 3 === 0) p.style.borderRadius = '50%';
    layer.append(p);
    setTimeout(() => p.remove(), 1100);
  }
}

export function center(el) {
  const r = el.getBoundingClientRect();
  return [r.left + r.width / 2, r.top + r.height / 2];
}

// ---------- Yıldız sayacı ----------
let starHud = null;
export function starCounter() {
  if (!starHud) {
    starHud = h('div', { class: 'stars-hud', 'aria-live': 'polite' },
      h('span', { class: 'ico', html: ICON.star }), h('b', {}, String(store.stars)));
  }
  return starHud;
}
export function refreshStars() { if (starHud) starHud.querySelector('b').textContent = String(store.stars); }

export function flyStar(fromEl) {
  const [x, y] = Array.isArray(fromEl) ? fromEl : center(fromEl);
  const target = starHud?.querySelector('.ico');
  const s = h('div', { class: 'flying-star', html: ICON.star });
  s.style.left = x + 'px';
  s.style.top = y + 'px';
  fxLayer().append(s);
  const [tx, ty] = target ? center(target) : [innerWidth - 40, 30];
  requestAnimationFrame(() => {
    s.style.transform = `translate(${tx - x}px, ${ty - y}px) scale(.5) rotate(200deg)`;
    s.style.opacity = '0.9';
  });
  setTimeout(() => {
    s.remove();
    sfx.star();
    refreshStars();
    starHud?.classList.remove('bump'); void starHud?.offsetWidth; starHud?.classList.add('bump');
  }, 700);
}

// ---------- Kutlama ----------
const PRAISE = [
  { tr: 'Harikasın!', en: 'You are amazing!' },
  { tr: 'Süper iş!', en: 'Super job!' },
  { tr: 'Bravo, başardın!', en: 'Well done!' },
  { tr: 'Muhteşem!', en: 'Awesome!' },
];

/** Yeni çıkartma seçer (varsa) ve kaydeder */
export function awardSticker() {
  const left = ANIMALS.filter(a => !store.stickers.includes(a.id));
  if (!left.length) return null;
  const pick = left[(Math.random() * left.length) | 0];
  store.stickers.push(pick.id);
  save();
  return pick;
}

/** Oyun sonu kutlama ekranı. 'again' | 'home' döner. */
export function celebrate() {
  return new Promise(resolve => {
    const sticker = awardSticker();
    const praise = PRAISE[(Math.random() * PRAISE.length) | 0];
    const m = mascot('big cheer');
    const again = h('button', { class: 'btn btn-big btn-sun', 'aria-label': 'Tekrar oyna', html: ICON.play });
    const home = h('button', { class: 'btn btn-big btn-sea', 'aria-label': 'Adaya dön', html: ICON.home });
    const stars = h('div', { class: 'cele-stars' }, [0, 1, 2].map(i => h('span', { style: { animationDelay: `${0.35 + i * 0.18}s` }, html: ICON.star })));
    const card = h('div', { class: 'cele-card', role: 'dialog', 'aria-modal': 'true' },
      m,
      h('h2', {}, label(praise)),
      stars,
      sticker && h('div', { class: 'cele-sticker' },
        h('div', { class: 'sticker', style: { background: sticker.color }, html: animalSVG(sticker.id) }),
        h('p', {}, label({ tr: 'Yeni çıkartma!', en: 'New sticker!' }))),
      h('div', { class: 'cele-actions' }, home, again));
    const ov = h('div', { class: 'overlay cele' }, card);
    document.body.append(ov);
    sfx.fanfare();
    const [cx, cy] = [innerWidth / 2, innerHeight * 0.32];
    confetti(cx, cy, 40);
    setTimeout(() => confetti(cx - 120, cy + 40, 24), 300);
    setTimeout(() => confetti(cx + 120, cy + 40, 24), 500);
    say(sticker
      ? { tr: `${praise.tr} Sana yeni bir ${sticker.name.tr} çıkartması!`, en: `${praise.en} Here is a new ${sticker.name.en} sticker!` }
      : praise, sticker ? sticker.name : undefined);
    const close = v => { sfx.tap(); ov.classList.add('out'); setTimeout(() => ov.remove(), 250); resolve(v); };
    again.onclick = () => close('again');
    home.onclick = () => close('home');
    setTimeout(() => again.focus({ preventScroll: true }), 50);
  });
}

// ---------- Basılı tutma (ebeveyn kapısı) ----------
export function holdButton(el, ms, onDone) {
  let t = null;
  const start = e => {
    e.preventDefault();
    el.classList.add('holding');
    el.style.setProperty('--hold', `${ms}ms`);
    t = setTimeout(() => { el.classList.remove('holding'); onDone(); }, ms);
  };
  const cancel = () => { clearTimeout(t); el.classList.remove('holding'); };
  el.addEventListener('pointerdown', start);
  ['pointerup', 'pointerleave', 'pointercancel'].forEach(ev => el.addEventListener(ev, cancel));
  el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') onDone(); });
}
