// Örüntü: dizide sırada ne var?
import { FRUITS, SHAPES, fruitSVG, shapeSVG } from '../core/art.js';
import { h, sample, shuffle, wait, flyInto } from '../core/ui.js';
import { sfx } from '../core/sfx.js';

const fruitItems = () => FRUITS.map(f => ({ key: f.id, svg: fruitSVG(f.id), name: { tr: f.name.tr, en: f.en1 } }));
const shapeItems = () => SHAPES.map(s => ({ key: s.id, svg: shapeSVG(s.id, s.color), name: { tr: s.name.tr.toLocaleLowerCase('tr'), en: s.name.en.toLowerCase() } }));

// Desen, harflerle: tekrar eden birim
const ROUNDS = [
  { unit: 'AB', pool: fruitItems },
  { unit: 'AB', pool: shapeItems },
  { unit: 'AAB', pool: fruitItems },
  { unit: 'ABB', pool: shapeItems },
  { unit: 'ABC', pool: fruitItems },
  { unit: 'ABC', pool: shapeItems },
];

export default {
  id: 'oruntu',
  title: { tr: 'Örüntü', en: 'Patterns' },
  theme: 'beads',
  start(ctx) {
    let round = 0;

    async function next() {
      if (!ctx.alive()) return;
      if (round >= ROUNDS.length) return ctx.finish();
      ctx.progress(round, ROUNDS.length);
      const { unit, pool } = ROUNDS[round];
      const items = pool();
      const letters = [...new Set(unit)];
      const pick = sample(items, letters.length);
      const map = Object.fromEntries(letters.map((l, i) => [l, pick[i]]));
      const shownLen = unit.length === 2 ? 5 : unit.length * 2 - 1 + 1;
      const seq = Array.from({ length: shownLen + 1 }, (_, i) => map[unit[i % unit.length]]);
      const answer = seq[seq.length - 1];
      const shown = seq.slice(0, -1);

      const cells = shown.map(it => h('div', { class: 'pt-item', html: it.svg }));
      const hole = h('div', { class: 'pt-item pt-hole' }, '?');
      const row = h('div', { class: 'pt-row' }, cells, hole);
      const distract = sample(items.filter(x => x !== answer && !pick.includes(x)), 1);
      const others = pick.filter(x => x !== answer);
      const opts = shuffle([answer, ...shuffle([...others, ...distract]).slice(0, 2)]);
      let locked = true;

      const buttons = opts.map(it => {
        const b = h('button', { class: 'pt-opt', 'aria-label': it.name.tr, 'data-ok': it === answer ? '1' : null, html: it.svg });
        b.addEventListener('click', async () => {
          if (locked) return;
          if (it === answer) {
            locked = true;
            await flyInto(b, hole, { scale: 1 });
            hole.innerHTML = it.svg;
            hole.classList.add('filled');
            b.style.visibility = 'hidden';
            ctx.good(hole);
            for (let i = 0; i < row.children.length; i++) {
              const c = row.children[i];
              c.classList.remove('bounce'); void c.offsetWidth; c.classList.add('bounce');
              sfx.note(i % 8);
              await wait(170);
            }
            await Promise.all([ctx.say({ tr: `Evet! Sırada ${it.name.tr} vardı!`, en: `Yes! Next comes the ${it.name.en}!` }), wait(700)]);
            round++;
            next();
          } else {
            ctx.bad(b);
            ctx.say({ tr: 'Diziye bir daha bak. Ne tekrar ediyor?', en: 'Look again. What repeats?' });
          }
        });
        return b;
      });

      ctx.board.replaceChildren(h('div', { class: 'pt-wrap' }, row, h('div', { class: 'pt-opts' }, buttons)));
      // Diziyi tek tek, müzikle göster
      for (let i = 0; i < cells.length; i++) {
        if (!ctx.alive()) return;
        cells[i].classList.add('show');
        sfx.note((letters.indexOf(unit[i % unit.length]) * 2) % 8);
        await wait(230);
      }
      hole.classList.add('show');
      locked = false;
      ctx.prompt({ tr: 'Sırada ne var?', en: 'What comes next?' });
    }
    next();
  },
};
