// Hayvanı Besle: istenen sayıda ve türde meyveyi hayvana ver
import { ANIMALS, FRUITS, animalSVG, fruitSVG } from '../core/art.js';
import { h, sample, shuffle, wait, draggable, flyInto, mood } from '../core/ui.js';
import { sfx } from '../core/sfx.js';

const NUM = {
  tr: ['sıfır', 'bir', 'iki', 'üç', 'dört', 'beş', 'altı'],
  en: ['zero', 'one', 'two', 'three', 'four', 'five', 'six'],
};
const DAT = { ayi: 'Ayıya', maymun: 'Maymuna', tavsan: 'Tavşana', panda: 'Pandaya', fil: 'File', kopek: 'Köpeğe', kedi: 'Kediye', aslan: 'Aslana' };
const ROUNDS = [
  { n: 2, mixed: false }, { n: 3, mixed: false }, { n: 3, mixed: true }, { n: 4, mixed: true }, { n: 5, mixed: true },
];
const plural = (f, n) => (n === 1 ? f.en1 : f.name.en);

export default {
  id: 'besle',
  title: { tr: 'Hayvanı Besle', en: 'Feed the Animal' },
  theme: 'picnic',
  start(ctx) {
    const guests = shuffle(ANIMALS.filter(a => DAT[a.id]));
    let round = 0;

    function next() {
      if (!ctx.alive()) return;
      if (round >= ROUNDS.length) return ctx.finish();
      ctx.progress(round, ROUNDS.length);
      const { n, mixed } = ROUNDS[round];
      const a = guests[round % guests.length];
      const want = FRUITS[(Math.random() * FRUITS.length) | 0];
      const others = sample(FRUITS.filter(f => f !== want), 2);
      const list = mixed
        ? shuffle([...Array(n + 1).fill(want), others[0], others[1], others[0]])
        : shuffle(Array(n + 2).fill(want));
      let fed = 0, locked = false;

      const dots = h('div', { class: 'fd-dots' }, Array.from({ length: n }, () => h('i')));
      const bubble = h('div', { class: 'fd-bubble' }, h('div', { class: 'fd-want', html: fruitSVG(want.id) }), h('b', {}, `× ${n}`), dots);
      const animal = h('div', { class: 'fd-animal pop-in', style: { background: a.color }, html: animalSVG(a.id) });
      const scene = h('div', { class: 'fd-scene' }, bubble, animal);

      const fruits = list.map((f, i) => {
        const b = h('button', { class: 'fd-fruit pop-in', style: { animationDelay: `${200 + i * 60}ms` }, 'aria-label': f.name.tr, 'data-ok': f === want ? '1' : null, html: fruitSVG(f.id) });
        b._f = f;
        return b;
      });

      function feed(el) {
        if (locked || el.dataset.done) return false;
        if (el._f !== want) {
          ctx.bad(el);
          animal.classList.remove('no'); void animal.offsetWidth; animal.classList.add('no');
          ctx.say({ tr: `Hayır, ben ${want.name.tr} istiyorum!`, en: `No, I want ${want.name.en}!` });
          return false;
        }
        el.dataset.done = '1';
        fed++;
        const count = fed;
        if (count === n) locked = true;
        flyInto(el, animal, { scale: 0.25 }).then(async () => {
          el.style.opacity = '0';
          el.style.pointerEvents = 'none';
          sfx.chomp();
          animal.classList.remove('chew'); void animal.offsetWidth; animal.classList.add('chew');
          dots.children[count - 1]?.classList.add('on');
          if (count < n) { ctx.say({ tr: NUM.tr[count], en: NUM.en[count] }); return; }
          ctx.good(animal);
          await Promise.all([ctx.say({ tr: `${NUM.tr[n]}! Mmm, çok doydum, teşekkürler!`, en: `${NUM.en[n]}! Yum, I'm full, thank you!` }), wait(1500)]);
          round++;
          next();
        });
        return true;
      }
      fruits.forEach(f => draggable(f, { targets: () => [animal], onDrop: el => feed(el), tap: el => feed(el) }));

      ctx.board.replaceChildren(h('div', { class: 'fd-wrap' }, scene, h('div', { class: 'fd-tray' }, fruits)));
      ctx.prompt({ tr: `${DAT[a.id]} ${n} ${want.name.tr} ver!`, en: `Give ${a.acc.en} ${n} ${plural(want, n)}!` });
    }
    next();
  },
};
