// Duygular: yüz ifadesini tanı, duyguyu öğren
import { EMOTIONS, emotionSVG } from '../core/art2.js';
import { h, sample, shuffle, wait } from '../core/ui.js';
import { label } from '../core/voice.js';

export default {
  id: 'duygular',
  title: { tr: 'Duygular', en: 'Feelings' },
  theme: 'feelings',
  start(ctx) {
    const ROUNDS = 7;
    const order = shuffle(EMOTIONS);
    let round = 0;

    function next() {
      if (!ctx.alive()) return;
      if (round >= ROUNDS) return ctx.finish();
      ctx.progress(round, ROUNDS);
      const count = round < 2 ? 2 : round < 5 ? 3 : 4;
      const target = order[round % order.length];
      const opts = shuffle([target, ...sample(EMOTIONS.filter(e => e.id !== target.id), count - 1)]);
      let locked = false;

      const cards = opts.map((e, i) => {
        const cap = h('span', { class: 'cap' });
        const b = h('button', {
          class: 'choice pop-in', style: { '--tint': '#FFF3DC', animationDelay: `${i * 70}ms` },
          'aria-label': label(e.name), html: emotionSVG(e.id),
        }, cap);
        b.addEventListener('click', async () => {
          if (locked) return;
          if (e === target) {
            locked = true;
            cap.textContent = label(e.name);
            b.classList.add('win');
            cards.forEach(c => c !== b && c.classList.add('fade'));
            ctx.good(b);
            ctx.mood('wow');
            await Promise.all([
              ctx.say({ tr: `${e.name.tr}! ${e.line.tr}`, en: `${e.name.en}! ${e.line.en}` }, e.name),
              wait(1700),
            ]);
            round++;
            ctx.later(next, 300);
          } else {
            ctx.bad(b);
            ctx.say({ tr: `Bu ${e.name.tr.toLocaleLowerCase('tr')} bir yüz. ${target.name.tr} olanı bul!`, en: `This face is ${e.name.en.toLowerCase()}. Find the ${target.name.en.toLowerCase()} one!` }, target.name);
          }
        });
        return b;
      });

      ctx.board.replaceChildren(h('div', { class: `choices n${count}` }, cards));
      ctx.prompt({ tr: `${target.name.tr} olan hangisi?`, en: `Which one is ${target.name.en.toLowerCase()}?` }, target.name);
    }
    next();
  },
};
