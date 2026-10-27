// Saklambaç: deliklerden çıkan hayvanlardan istenen hayvanı yakala
import { ANIMALS, animalSVG } from '../core/art.js';
import { h, sample, center, confetti, flyStar } from '../core/ui.js';
import { sfx } from '../core/sfx.js';
import { addStars } from '../core/store.js';

const PER = 6;

export default {
  id: 'saklambac',
  title: { tr: 'Saklambaç', en: 'Peekaboo' },
  theme: 'garden',
  start(ctx) {
    const targets = sample(ANIMALS, 2);
    let ti = 0, caught = 0, total = 0, lastWrongSay = 0;

    const holes = Array.from({ length: 9 }, () => {
      const pop = h('button', { class: 'mole-pop', 'aria-label': '' });
      const cell = h('div', { class: 'mole' }, h('div', { class: 'mole-pit' }), h('div', { class: 'mole-win' }, pop), h('div', { class: 'mole-lip' }));
      const st = { cell, pop, animal: null, up: false, timer: 0 };
      pop.addEventListener('pointerdown', e => { e.preventDefault(); hit(st); });
      return st;
    });

    const goalArt = h('div', { class: 'mole-goal-art' });
    const meter = h('div', { class: 'goal-meter' });
    ctx.board.replaceChildren(
      h('div', { class: 'goal mole-goal' }, goalArt, meter),
      h('div', { class: 'mole-grid' }, holes.map(x => x.cell)));

    function setTarget() {
      const t = targets[ti];
      goalArt.innerHTML = animalSVG(t.id);
      meter.replaceChildren(...Array.from({ length: PER }, (_, i) => h('i', { class: i < caught ? 'on' : '', style: { '--c': '#FFC93C' } })));
      ctx.prompt({ tr: `${t.acc.tr} yakala!`, en: `Catch ${t.acc.en}!` }, t.name);
    }

    function down(st) {
      st.up = false;
      st.cell.classList.remove('up', 'hit');
      st.pop.removeAttribute('data-ok');
      clearTimeout(st.timer);
    }

    function hit(st) {
      if (!st.up) return;
      const t = targets[ti];
      if (st.animal === t) {
        st.cell.classList.add('hit');
        sfx.boing();
        const [x, y] = center(st.pop);
        confetti(x, y, 12);
        addStars(1);
        flyStar([x, y]);
        st.up = false;
        st.pop.removeAttribute('data-ok');
        setTimeout(() => down(st), 260);
        caught++; total++;
        ctx.progress(total, PER * targets.length);
        meter.children[caught - 1]?.classList.add('on');
        ctx.mood('happy');
        if (caught >= PER) {
          ti++; caught = 0;
          holes.forEach(down);
          if (ti >= targets.length) { ctx.later(() => ctx.finish(), 700); return; }
          paused = true;
          ctx.later(() => { setTarget(); paused = false; }, 900);
        }
      } else {
        sfx.wrong();
        st.pop.classList.remove('shake'); void st.pop.offsetWidth; st.pop.classList.add('shake');
        ctx.mood('oops');
        if (Date.now() - lastWrongSay > 2500) {
          lastWrongSay = Date.now();
          ctx.say({ tr: `O ${st.animal.name.tr.toLocaleLowerCase('tr')}! ${t.acc.tr} yakala!`, en: `That's a ${st.animal.name.en.toLowerCase()}! Catch ${t.acc.en}!` });
        }
      }
    }

    let paused = false;
    function tick() {
      if (!ctx.alive()) return;
      if (!paused) {
        const free = holes.filter(x => !x.up && !x.cell.classList.contains('up'));
        if (free.length && holes.filter(x => x.up).length < 3) {
          const st = free[(Math.random() * free.length) | 0];
          const t = targets[ti];
          const distract = ANIMALS.filter(a => a !== t);
          st.animal = Math.random() < 0.5 ? t : distract[(Math.random() * distract.length) | 0];
          st.pop.innerHTML = animalSVG(st.animal.id);
          st.pop.setAttribute('aria-label', st.animal.name.tr);
          if (st.animal === t) st.pop.setAttribute('data-ok', '1');
          st.up = true;
          st.cell.classList.add('up');
          sfx.rise();
          const stay = Math.max(1500, 2300 - total * 60);
          st.timer = setTimeout(() => { if (st.up) down(st); }, stay);
        }
      }
      ctx.later(tick, Math.max(650, 1000 - total * 25));
    }

    setTarget();
    ctx.progress(0, PER * targets.length);
    ctx.later(tick, 1200);
    return () => holes.forEach(x => clearTimeout(x.timer));
  },
};
