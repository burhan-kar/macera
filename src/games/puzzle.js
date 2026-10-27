// Yapboz: hayvan resminin parçalarını yerine sürükle
import { ANIMALS, animalSVG } from '../core/art.js';
import { h, sample, shuffle, wait, draggable, flyInto } from '../core/ui.js';
import { sfx } from '../core/sfx.js';

const LEVELS = [[2, 2], [3, 2], [3, 3]]; // [sütun, satır]

export default {
  id: 'yapboz',
  title: { tr: 'Yapboz', en: 'Puzzle' },
  theme: 'puzzle',
  start(ctx) {
    const animals = sample(ANIMALS, LEVELS.length);
    let level = 0;

    function play() {
      if (!ctx.alive()) return;
      if (level >= LEVELS.length) return ctx.finish();
      ctx.progress(level, LEVELS.length);
      const [cols, rows] = LEVELS[level];
      const a = animals[level];
      const body = animalSVG(a.id).replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '');
      const cw = 120 / cols, ch = 120 / rows;
      const crop = (c, r) => `<svg viewBox="${c * cw} ${r * ch} ${cw} ${ch}" class="art pz-art" overflow="hidden" aria-hidden="true">${body}</svg>`;

      const slots = [];
      const board = h('div', { class: 'pz-board pop-in', style: { '--cols': cols, '--rows': rows, background: a.color } },
        h('div', { class: 'pz-ghost', html: animalSVG(a.id) }));
      for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
        const s = h('div', { class: 'pz-slot', 'data-i': String(r * cols + c) });
        slots.push(s);
        board.append(s);
      }
      let placed = 0;
      const total = cols * rows;
      const pieces = [];
      for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
        const p = h('button', { class: 'pz-piece', 'data-i': String(r * cols + c), style: { background: a.color }, 'aria-label': `Parça ${r * cols + c + 1}`, html: crop(c, r) });
        pieces.push(p);
      }
      const tray = h('div', { class: 'pz-tray', style: { '--cols': cols, '--rows': rows } }, shuffle(pieces));
      pieces.forEach((p, i) => { p.style.setProperty('--tilt', `${(i % 2 ? 1 : -1) * (3 + (i % 3) * 2)}deg`); p.classList.add('pop-in'); p.style.animationDelay = `${200 + i * 60}ms`; });

      pieces.forEach(p => draggable(p, {
        targets: () => slots.filter(s => !s.dataset.full),
        onDrop(el, slot) {
          if (slot.dataset.i !== el.dataset.i) {
            ctx.bad(el);
            return false;
          }
          el.dataset.done = '1';
          slot.dataset.full = '1';
          flyInto(el, slot, { scale: 1 }).then(() => {
            slot.innerHTML = el.innerHTML;
            slot.classList.add('full');
            el.remove();
            sfx.snap();
            placed++;
            if (placed === total) complete();
          });
          return true;
        },
      }));

      async function complete() {
        board.classList.add('done');
        ctx.good(board);
        await Promise.all([ctx.say({ tr: `${a.name.tr}! ${a.sound.tr}`, en: `${a.name.en}! ${a.sound.en}` }), wait(1600)]);
        level++;
        play();
      }

      ctx.board.replaceChildren(h('div', { class: 'pz-wrap' }, board, tray));
      ctx.prompt(level === 0
        ? { tr: 'Yapbozu tamamla! Parçaları yerine sürükle.', en: 'Finish the puzzle! Drag the pieces into place.' }
        : { tr: 'Şimdi daha çok parça var!', en: 'Now there are more pieces!' });
    }
    play();
  },
};
