// Boyama: renk seç, resmin parçalarına dokunarak boya
import { PAGES, PALETTE } from '../core/pages.js';
import { ICON } from '../core/art.js';
import { h, shuffle, wait } from '../core/ui.js';
import { sfx } from '../core/sfx.js';

export default {
  id: 'boyama',
  title: { tr: 'Boyama', en: 'Coloring' },
  theme: 'studio',
  start(ctx) {
    const order = shuffle(PAGES).slice(0, 3);
    let i = 0;
    let color = PALETTE[(Math.random() * PALETTE.length) | 0];

    const swatches = PALETTE.map(c => {
      const b = h('button', { class: 'swatch', style: { '--c': c.hex }, 'aria-label': c.name.tr });
      b.addEventListener('click', () => {
        color = c;
        swatches.forEach(s => s.classList.toggle('on', s === b));
        sfx.tap();
        ctx.say(c.name);
      });
      if (c === color) b.classList.add('on');
      return b;
    });

    function page() {
      if (!ctx.alive()) return;
      if (i >= order.length) return ctx.finish();
      ctx.progress(i, order.length);
      const p = order[i];
      const holder = h('div', { class: 'cpage pop-in', html: p.svg });
      const regions = [...holder.querySelectorAll('.rg')];
      const done = h('button', { class: 'btn btn-big btn-leaf cdone', 'aria-label': 'Bitti', html: ICON.check });
      done.hidden = true;
      let told = false;

      regions.forEach(r => {
        r.setAttribute('fill', '#ffffff');
        r.addEventListener('pointerdown', e => {
          e.preventDefault();
          r.setAttribute('fill', color.hex);
          r.dataset.c = '1';
          r.classList.remove('splash');
          void r.getBoundingClientRect();
          r.classList.add('splash');
          sfx.paint();
          const n = regions.filter(x => x.dataset.c).length;
          if (n >= Math.ceil(regions.length * 0.7) && done.hidden) {
            done.hidden = false;
            if (!told) { told = true; ctx.say({ tr: 'Çok güzel! Bitince kocaman tik tuşuna dokun.', en: 'Beautiful! Tap the big check when you are done.' }); }
          }
        });
      });

      done.addEventListener('click', async () => {
        if (done.dataset.used) return;
        done.dataset.used = '1';
        holder.classList.add('framed');
        ctx.good(holder);
        await Promise.all([ctx.say({ tr: `Harika bir ${p.name.tr.toLocaleLowerCase('tr')} oldu!`, en: `What a great ${p.name.en.toLowerCase()}!` }), wait(1500)]);
        i++;
        page();
      });

      ctx.board.replaceChildren(h('div', { class: 'color-wrap' }, holder, h('div', { class: 'palette' }, swatches, done)));
      ctx.prompt({ tr: `${p.name.tr} boyayalım! Bir renk seç, sonra resme dokun.`, en: `Let's color the ${p.name.en.toLowerCase()}! Pick a color, then tap the picture.` });
    }
    page();
  },
};
