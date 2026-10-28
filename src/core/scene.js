// Canlı sahne dekoru: her temada arka planda hareket eden öğeler + perde geçişleri
import { INK } from './art.js';
import { h, reducedMotion } from './ui.js';

const s4 = `stroke="${INK}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"`;
const s3 = `stroke="${INK}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"`;
const wrap = (body, vb) => `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" class="art" aria-hidden="true">${body}</svg>`;

const PROPS = {
  bird: wrap(`<path d="M6 26 q14 -18 28 -2 q14 -16 28 2" fill="none" ${s4}/>`, '0 0 68 40'),
  butterfly: wrap(`<path d="M31 26 q-20 -22 -27 -6 q-5 14 9 18 q12 3 18 -6z" fill="#FF7EB6" ${s3}/>
    <path d="M31 30 q-17 10 -11 20 q6 8 15 -2 q5 -7 4 -16z" fill="#FF9EC7" ${s3}/>
    <path d="M37 26 q20 -22 27 -6 q5 14 -9 18 q-12 3 -18 -6z" fill="#FFB4D1" ${s3}/>
    <path d="M37 30 q17 10 11 20 q-6 8 -15 -2 q-5 -7 -4 -16z" fill="#FFC9DE" ${s3}/>
    <ellipse cx="34" cy="32" rx="4" ry="15" fill="${INK}"/>
    <path d="M32 18 l-7 -11 M36 18 l7 -11" fill="none" ${s3}/>
    <circle cx="25" cy="6" r="3" fill="${INK}"/><circle cx="43" cy="6" r="3" fill="${INK}"/>`, '0 0 68 56'),
  cloud: wrap(`<path d="M18 44 a16 16 0 0 1 4 -31 a20 20 0 0 1 38 -2 a15 15 0 0 1 2 33z" fill="#fff" ${s4}/>`, '0 0 80 50'),
  fish: wrap(`<path d="M44 20 L62 8 q-6 12 0 24z" fill="#FFB347" ${s3}/>
    <ellipse cx="26" cy="20" rx="24" ry="15" fill="#FFC93C" ${s3}/>
    <circle cx="14" cy="15" r="3.4" fill="${INK}"/>`, '0 0 68 40'),
  bee: wrap(`<ellipse cx="18" cy="8" rx="12" ry="7" fill="#DFF6FF" opacity=".9" ${s3} transform="rotate(-22 18 8)"/>
    <ellipse cx="34" cy="8" rx="12" ry="7" fill="#DFF6FF" opacity=".9" ${s3} transform="rotate(22 34 8)"/>
    <ellipse cx="26" cy="28" rx="18" ry="13" fill="#FFD43B" ${s3}/>
    <path d="M22 16 v24 M31 17 v22" stroke="${INK}" stroke-width="4.5"/>
    <circle cx="41" cy="24" r="2.8" fill="${INK}"/>
    <path d="M44 32 q6 2 8 6" fill="none" ${s3}/>`, '0 0 60 48'),
  leaf: wrap(`<path d="M24 4 q22 14 0 40 q-22 -26 0 -40z" fill="#7ACB5A" ${s3}/><path d="M24 8 v32" stroke="${INK}" stroke-width="2.5"/>`, '0 0 48 48'),
  star: wrap(`<circle cx="12" cy="12" r="6" fill="#FFF3B0"/><path d="M12 0 v24 M0 12 h24" stroke="#FFF3B0" stroke-width="3" stroke-linecap="round" opacity=".8"/>`, '0 0 24 24'),
  note: wrap(`<path d="M20 44 V10 L46 5 V38" fill="none" stroke="#FFD9F2" stroke-width="5" stroke-linejoin="round"/>
    <ellipse cx="13" cy="45" rx="10" ry="8" fill="#FFD9F2"/><ellipse cx="39" cy="40" rx="10" ry="8" fill="#FFD9F2"/>`, '0 0 56 56'),
  bubble: wrap(`<circle cx="16" cy="16" r="13" fill="#ffffff55" stroke="#ffffffaa" stroke-width="2.5"/><circle cx="11" cy="11" r="3.5" fill="#ffffffcc"/>`, '0 0 32 32'),
};

// Tema → dekor tarifi: [tip, adet, en küçük/büyük boy, süre aralığı, yükseklik aralığı]
const SCENES = {
  meadow: [['bird', 2, [48, 70], [16, 24], [10, 26]], ['butterfly', 3, [44, 62], [9, 15], [42, 76]], ['cloud', 2, [74, 104], [30, 44], [12, 22]]],
  sky: [['cloud', 3, [84, 124], [26, 40], [14, 58]], ['bird', 2, [46, 66], [14, 22], [16, 40]]],
  orchard: [['bee', 3, [40, 56], [8, 14], [32, 70]], ['leaf', 3, [34, 48], [12, 20], [16, 80]]],
  blocks: [['star', 5, [16, 28], [14, 24], [14, 85]]],
  treasure: [['star', 6, [16, 30], [10, 20], [14, 88]], ['bubble', 3, [28, 44], [16, 26], [34, 85]]],
  stage: [['note', 4, [44, 66], [11, 19], [18, 70]], ['star', 6, [14, 24], [9, 17], [14, 80]]],
  studio: [['butterfly', 2, [44, 60], [12, 18], [18, 70]], ['star', 4, [14, 24], [12, 20], [16, 80]]],
  abc: [['bird', 2, [46, 66], [15, 23], [12, 30]], ['butterfly', 2, [44, 60], [10, 16], [46, 78]]],
  puzzle: [['star', 5, [16, 28], [12, 22], [14, 85]], ['bubble', 2, [30, 44], [18, 26], [34, 80]]],
  beads: [['bubble', 4, [28, 50], [14, 24], [22, 85]], ['butterfly', 2, [42, 58], [11, 17], [16, 60]]],
  picnic: [['bee', 2, [40, 56], [9, 15], [26, 58]], ['bird', 2, [46, 66], [16, 24], [12, 24]], ['cloud', 2, [74, 104], [30, 44], [12, 20]]],
  garden: [['butterfly', 3, [44, 62], [10, 16], [16, 52]], ['bee', 2, [38, 54], [8, 13], [22, 48]]],
  feelings: [['star', 5, [16, 28], [12, 22], [14, 80]], ['butterfly', 2, [44, 60], [11, 17], [16, 60]]],
  road: [['cloud', 2, [74, 104], [28, 42], [10, 20]], ['bird', 2, [46, 66], [16, 24], [14, 26]]],
  weather: [['cloud', 2, [74, 110], [26, 40], [12, 24]], ['bird', 2, [44, 64], [15, 23], [16, 30]]],
  water: [['fish', 3, [50, 76], [13, 21], [36, 85]], ['bubble', 4, [24, 40], [10, 18], [32, 90]]],
};

const rr = (a, b) => a + Math.random() * (b - a);

/** Temaya uygun, hareketli arka plan katmanı üretir. */
export function sceneLayer(theme) {
  const layer = h('div', { class: 'scene', 'aria-hidden': 'true' });
  const recipe = SCENES[theme];
  if (!recipe || reducedMotion()) return layer;
  recipe.forEach(([kind, count, size, dur, top]) => {
    for (let i = 0; i < count; i++) {
      const el = h('i', { class: `prop prop-${kind}`, html: PROPS[kind] });
      const d = rr(...dur);
      el.style.width = `${rr(...size) | 0}px`;
      el.style.top = `${rr(...top).toFixed(1)}%`;
      el.style.animationDuration = `${d.toFixed(1)}s`;
      el.style.animationDelay = `${(-Math.random() * d).toFixed(1)}s`;
      el.style.setProperty('--bob', `${(rr(6, 20)).toFixed(0)}px`);
      el.style.setProperty('--bobdur', `${rr(1.6, 3.4).toFixed(1)}s`);
      if (Math.random() < 0.5) el.classList.add('rtl');
      layer.append(el);
    }
  });
  return layer;
}

/** Ekranı kapatan/açan perde. show() kapatır, hide() açar. */
export function curtain() {
  const c = h('div', { class: 'curtain', 'aria-hidden': 'true' },
    h('span', { class: 'cur-blob' }), h('span', { class: 'cur-blob' }), h('span', { class: 'cur-blob' }));
  return {
    el: c,
    async close() {
      document.body.append(c);
      await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
      c.classList.add('on');
      await new Promise(r => setTimeout(r, reducedMotion() ? 60 : 460));
    },
    async open() {
      c.classList.remove('on');
      c.classList.add('out');
      await new Promise(r => setTimeout(r, reducedMotion() ? 60 : 520));
      c.remove();
    },
  };
}

if (typeof window !== 'undefined') window.__props = PROPS;
