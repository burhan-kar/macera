// Şekiller: şekli sürükleyip doğru gölgeye yerleştir (dokun-dokun ile de çalışır)
import { SHAPES, shapeSVG } from '../core/art.js';
import { h, shuffle, sample, center, wait } from '../core/ui.js';
import { sfx } from '../core/sfx.js';

const ACC = { daire: 'Daireyi', kare: 'Kareyi', ucgen: 'Üçgeni', yildiz: 'Yıldızı', kalp: 'Kalbi', dikdortgen: 'Dikdörtgeni' };

export default {
  id: 'sekiller',
  title: { tr: 'Şekiller', en: 'Shapes' },
  theme: 'blocks',
  start(ctx) {
    const ROUNDS = 4, PER = 3;
    let round = 0, placed = 0;

    function nextRound() {
      if (!ctx.alive()) return;
      if (round >= ROUNDS) return ctx.finish();
      const set = sample(SHAPES, PER);
      const queue = shuffle(set);
      const holes = new Map();
      const holeRow = h('div', { class: 'holes' }, set.map(s => {
        const el = h('div', { class: 'hole pop-in', 'data-id': s.id, html: shapeSVG(s.id, s.color, 'hole') });
        holes.set(s.id, el);
        return el;
      }));
      const tray = h('div', { class: 'tray' });
      ctx.board.replaceChildren(holeRow, tray);
      let selected = null;

      // Dokun-dokun desteği: şekle dokun, sonra deliğe dokun
      holes.forEach((el, id) => el.addEventListener('click', () => { if (selected) tryDrop(selected, el); }));

      function nextPiece() {
        if (!ctx.alive()) return;
        const s = queue.shift();
        if (!s) {
          round++;
          ctx.good(holeRow);
          ctx.later(nextRound, 1300);
          return;
        }
        const piece = h('button', { class: 'piece pop-in', 'aria-label': s.name.tr, html: shapeSVG(s.id, s.color) });
        piece._shape = s;
        tray.replaceChildren(piece);
        drag(piece);
        ctx.prompt({ tr: `${ACC[s.id]} yerine koy!`, en: `Put the ${s.name.en.toLowerCase()} in its place!` }, s.name);
      }

      function tryDrop(piece, holeEl) {
        const s = piece._shape;
        if (holeEl.dataset.id === s.id) {
          const [hx, hy] = center(holeEl);
          const [px, py] = center(piece);
          piece.style.transition = 'transform .25s cubic-bezier(.3,1.4,.5,1)';
          piece.style.transform = `translate(${hx - px + (piece._dx || 0)}px, ${hy - py + (piece._dy || 0)}px)`;
          sfx.snap();
          setTimeout(() => {
            holeEl.innerHTML = shapeSVG(s.id, s.color);
            holeEl.classList.add('filled');
            piece.remove();
            placed++;
            ctx.progress(placed, ROUNDS * PER);
            ctx.cheer(holeEl);
            ctx.say({ tr: `${s.name.tr}!`, en: `${s.name.en}!` });
            selected = null;
            ctx.later(nextPiece, 700);
          }, 260);
        } else {
          ctx.bad(piece);
          const other = SHAPES.find(q => q.id === holeEl.dataset.id);
          ctx.say({ tr: `O bir ${other.name.tr.toLocaleLowerCase('tr')}. Bu bir ${s.name.tr.toLocaleLowerCase('tr')}!`, en: `That is a ${other.name.en.toLowerCase()}. This is a ${s.name.en.toLowerCase()}!` });
          springBack(piece);
        }
      }

      function springBack(piece) {
        piece._dx = piece._dy = 0;
        piece.style.transition = 'transform .35s cubic-bezier(.3,1.5,.5,1)';
        piece.style.transform = '';
        piece.classList.remove('lifted');
      }

      function drag(piece) {
        let sx = 0, sy = 0, moved = false, id = null;
        piece.addEventListener('pointerdown', e => {
          id = e.pointerId;
          piece.setPointerCapture(id);
          sx = e.clientX; sy = e.clientY; moved = false;
          piece.style.transition = 'none';
          piece.classList.add('lifted');
          sfx.tap();
        });
        piece.addEventListener('pointermove', e => {
          if (e.pointerId !== id) return;
          const dx = e.clientX - sx, dy = e.clientY - sy;
          if (Math.hypot(dx, dy) > 6) moved = true;
          piece._dx = dx; piece._dy = dy;
          piece.style.transform = `translate(${dx}px, ${dy}px) scale(1.08)`;
        });
        const end = e => {
          if (e.pointerId !== id) return;
          id = null;
          if (!moved) {
            // dokunma: seç ve deliği bekle
            selected = piece;
            piece.classList.add('lifted');
            piece.style.transform = 'scale(1.08)';
            return;
          }
          piece.style.visibility = 'hidden';
          const under = document.elementFromPoint(e.clientX, e.clientY)?.closest('.hole');
          piece.style.visibility = '';
          // parmağın altında delik yoksa en yakın deliğe bak
          let target = under;
          if (!target) {
            const [px, py] = center(piece);
            let best = Infinity;
            holes.forEach(el => { const [x, y] = center(el); const d = Math.hypot(x - px, y - py); if (d < best && d < el.clientWidth * 0.8) { best = d; target = el; } });
          }
          if (target && !target.classList.contains('filled')) tryDrop(piece, target);
          else springBack(piece);
        };
        piece.addEventListener('pointerup', end);
        piece.addEventListener('pointercancel', end);
      }

      ctx.progress(placed, ROUNDS * PER);
      wait(250).then(nextPiece);
    }
    nextRound();
  },
};
