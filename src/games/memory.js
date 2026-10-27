// Hafıza Kartları: aynı hayvanların eşini bul
import { ANIMALS, animalSVG, ICON } from '../core/art.js';
import { h, sample, shuffle, wait } from '../core/ui.js';
import { sfx } from '../core/sfx.js';

const LEVELS = [3, 4, 6];

export default {
  id: 'hafiza',
  title: { tr: 'Hafıza Kartları', en: 'Memory Cards' },
  theme: 'treasure',
  start(ctx) {
    let level = 0;

    function play() {
      if (!ctx.alive()) return;
      if (level >= LEVELS.length) return ctx.finish();
      ctx.progress(level, LEVELS.length);
      const pairs = LEVELS[level];
      const animals = sample(ANIMALS, pairs);
      const deck = shuffle([...animals, ...animals]);
      let open = [], found = 0, busy = false;

      const cards = deck.map((a, i) => {
        const b = h('button', { class: 'mcard pop-in', style: { animationDelay: `${i * 45}ms` }, 'aria-label': 'Kart' },
          h('span', { class: 'mc-inner' },
            h('span', { class: 'mc-back', html: ICON.star }),
            h('span', { class: 'mc-front', style: { background: a.color }, html: animalSVG(a.id) })));
        b._a = a;
        b.addEventListener('click', async () => {
          if (busy || b.classList.contains('up')) return;
          b.classList.add('up');
          b.setAttribute('aria-label', a.name.tr);
          sfx.flip();
          ctx.say(a.name);
          open.push(b);
          if (open.length < 2) return;
          busy = true;
          const [x, y] = open;
          if (x._a === y._a) {
            await wait(350);
            x.classList.add('match'); y.classList.add('match');
            ctx.good(y);
            found++;
            open = []; busy = false;
            if (found === pairs) {
              level++;
              await wait(1200);
              play();
            }
          } else {
            await wait(1000);
            x.classList.remove('up'); y.classList.remove('up');
            sfx.flip();
            open = []; busy = false;
          }
        });
        return b;
      });
      ctx.board.replaceChildren(h('div', { class: `mgrid p${pairs}` }, cards));
      ctx.prompt(level === 0
        ? { tr: 'Kartları çevir, aynı iki hayvanı bul!', en: 'Flip the cards and find two that match!' }
        : { tr: 'Süper! Şimdi daha çok kart var!', en: 'Super! Now there are more cards!' });
    }
    play();
  },
};
