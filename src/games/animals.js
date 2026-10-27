// Hayvanlar: söylenen hayvanı bul, adını ve sesini öğren
import { ANIMALS, animalSVG } from '../core/art.js';
import { h, sample, shuffle, wait } from '../core/ui.js';
import { label, subLabel } from '../core/voice.js';

export default {
  id: 'hayvanlar',
  title: { tr: 'Hayvanlar', en: 'Animals' },
  theme: 'meadow',
  start(ctx) {
    const ROUNDS = 8;
    const order = shuffle(ANIMALS);
    let round = 0;

    function next() {
      if (!ctx.alive()) return;
      if (round >= ROUNDS) return ctx.finish();
      ctx.progress(round, ROUNDS);
      const count = round < 2 ? 2 : round < 6 ? 3 : 4;
      const target = order[round % order.length];
      const opts = shuffle([target, ...sample(ANIMALS.filter(a => a.id !== target.id), count - 1)]);
      let locked = false;

      const cards = opts.map(a => {
        const cap = h('span', { class: 'cap' });
        const b = h('button', {
          class: 'choice pop-in',
          style: { '--tint': a.color },
          'aria-label': label(a.name),
          html: animalSVG(a.id),
        }, cap);
        b.addEventListener('click', async () => {
          if (locked) return;
          if (a === target) {
            locked = true;
            cap.innerHTML = `${label(a.name)}${subLabel(a.name) ? `<small>${subLabel(a.name)}</small>` : ''}`;
            b.classList.add('win');
            cards.forEach(c => c !== b && c.classList.add('fade'));
            ctx.good(b);
            await Promise.all([
              ctx.say({ tr: `${a.name.tr}! ${a.sound.tr}`, en: `${a.name.en}! ${a.sound.en}` }),
              wait(1300),
            ]);
            round++;
            ctx.later(next, 350);
          } else {
            ctx.bad(b);
            ctx.say({ tr: `Bu ${a.name.tr}. ${target.acc.tr} bul!`, en: `This is a ${a.name.en}. Find ${target.acc.en}!` }, target.name);
          }
        });
        return b;
      });
      cards.forEach((c, i) => (c.style.animationDelay = `${i * 70}ms`));
      ctx.board.replaceChildren(h('div', { class: `choices n${count}` }, cards));
      ctx.prompt({ tr: `${target.acc.tr} bul!`, en: `Find ${target.acc.en}!` }, target.name);
    }
    next();
  },
};
