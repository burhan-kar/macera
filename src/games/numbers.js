// Sayılar: meyveleri dokunarak say, doğru sayıyı seç
import { FRUITS, fruitSVG } from '../core/art.js';
import { h, shuffle, wait } from '../core/ui.js';
import { sfx } from '../core/sfx.js';

const NUM = {
  tr: ['sıfır', 'bir', 'iki', 'üç', 'dört', 'beş', 'altı', 'yedi', 'sekiz', 'dokuz', 'on'],
  en: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],
};
const RANGES = [[1, 3], [2, 4], [2, 5], [3, 5], [3, 6], [4, 7]];
const ri = (a, b) => a + ((Math.random() * (b - a + 1)) | 0);

export default {
  id: 'sayilar',
  title: { tr: 'Sayılar', en: 'Numbers' },
  theme: 'orchard',
  start(ctx) {
    const ROUNDS = RANGES.length;
    const fruits = shuffle(FRUITS);
    let round = 0;

    function next() {
      if (!ctx.alive()) return;
      if (round >= ROUNDS) return ctx.finish();
      ctx.progress(round, ROUNDS);
      const n = ri(...RANGES[round]);
      const f = fruits[round % fruits.length];
      let counted = 0, locked = false;

      const items = Array.from({ length: n }, (_, i) => {
        const tag = h('b', { class: 'count-tag' });
        const b = h('button', { class: 'fruit pop-in', style: { animationDelay: `${i * 80}ms` }, 'aria-label': f.name.tr, html: fruitSVG(f.id) }, tag);
        b.addEventListener('click', () => {
          if (b.classList.contains('counted') || locked) return;
          counted++;
          b.classList.add('counted');
          tag.textContent = String(counted);
          sfx.tap();
          ctx.say({ tr: NUM.tr[counted], en: NUM.en[counted] });
          if (counted === n) answers.classList.add('ready');
        });
        return b;
      });

      const opts = new Set([n]);
      while (opts.size < 3) { const d = Math.max(1, Math.min(9, n + ri(-2, 2))); opts.add(d); }
      const answers = h('div', { class: 'answers' }, shuffle([...opts]).map(k => {
        const b = h('button', { class: 'num-btn', 'aria-label': NUM.tr[k] }, String(k));
        b.addEventListener('click', async () => {
          if (locked) return;
          if (k === n) {
            locked = true;
            b.classList.add('win');
            items.forEach((it, i) => { if (!it.classList.contains('counted')) { it.classList.add('counted'); it.lastChild.textContent = String(i + 1); } });
            ctx.good(b);
            await Promise.all([
              ctx.say({ tr: `Evet! ${NUM.tr[n]} ${f.name.tr}!`, en: `Yes! ${NUM.en[n]} ${n === 1 ? f.name.en.replace(/(ies|s)$/, m => (m === 'ies' ? 'y' : '')) : f.name.en}!` }),
              wait(1400),
            ]);
            round++;
            ctx.later(next, 300);
          } else {
            ctx.bad(b);
            ctx.say({ tr: 'Hadi birlikte sayalım. Meyvelere dokun!', en: "Let's count together. Tap the fruit!" });
          }
        });
        return b;
      }));

      ctx.board.replaceChildren(
        h('div', { class: 'count-stage' }, h('div', { class: `basket n${n}` }, items)),
        answers);
      ctx.prompt({ tr: `Kaç tane ${f.name.tr} var? Dokunarak say!`, en: `How many ${f.name.en}? Tap to count!` });
    }
    next();
  },
};
