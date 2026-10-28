// Araçlar: sesinden ve adından aracı tanı
import { VEHICLES, vehicleSVG } from '../core/art2.js';
import { h, sample, shuffle, wait } from '../core/ui.js';
import { label } from '../core/voice.js';
import { sfx } from '../core/sfx.js';

export default {
  id: 'araclar',
  title: { tr: 'Araçlar', en: 'Vehicles' },
  theme: 'road',
  start(ctx) {
    const ROUNDS = 8;
    const order = shuffle(VEHICLES);
    let round = 0;

    function next() {
      if (!ctx.alive()) return;
      if (round >= ROUNDS) return ctx.finish();
      ctx.progress(round, ROUNDS);
      const count = round < 2 ? 2 : round < 6 ? 3 : 4;
      const target = order[round % order.length];
      const opts = shuffle([target, ...sample(VEHICLES.filter(v => v.id !== target.id), count - 1)]);
      let locked = false;

      const cards = opts.map((v, i) => {
        const cap = h('span', { class: 'cap' });
        const b = h('button', {
          class: 'choice vehicle-card pop-in', style: { '--tint': '#EAF4FF', animationDelay: `${i * 70}ms` },
          'aria-label': label(v.name), html: vehicleSVG(v.id),
        }, cap);
        b.addEventListener('click', async () => {
          if (locked) return;
          if (v === target) {
            locked = true;
            cap.textContent = label(v.name);
            b.classList.add('win', 'drive');
            cards.forEach(c => c !== b && c.classList.add('fade'));
            sfx.whoosh();
            ctx.good(b);
            await Promise.all([
              ctx.say({ tr: `${v.name.tr}! ${v.sound.tr}`, en: `${v.name.en}! ${v.sound.en}` }, v.name),
              wait(1500),
            ]);
            round++;
            ctx.later(next, 300);
          } else {
            ctx.bad(b);
            ctx.say({ tr: `Bu ${v.name.tr.toLocaleLowerCase('tr')}. ${target.acc.tr} bul!`, en: `This is a ${v.name.en.toLowerCase()}. Find ${target.acc.en}!` }, target.name);
          }
        });
        return b;
      });

      ctx.board.replaceChildren(h('div', { class: `choices n${count}` }, cards));
      ctx.prompt({ tr: `${target.acc.tr} bul! ${target.sound.tr}`, en: `Find ${target.acc.en}! ${target.sound.en}` }, target.name);
    }
    next();
  },
};
