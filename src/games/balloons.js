// Renkli Balonlar: söylenen renkteki balonları patlat
import { balloonSVG } from '../core/art.js';
import { h, shuffle, center, confetti } from '../core/ui.js';
import { sfx } from '../core/sfx.js';

const COLORS = [
  { id: 'kirmizi', hex: '#FF4B4B', name: { tr: 'kırmızı', en: 'red' } },
  { id: 'mavi', hex: '#3FA7D6', name: { tr: 'mavi', en: 'blue' } },
  { id: 'sari', hex: '#FFD43B', name: { tr: 'sarı', en: 'yellow' } },
  { id: 'yesil', hex: '#5BBA6F', name: { tr: 'yeşil', en: 'green' } },
  { id: 'turuncu', hex: '#FF9A2E', name: { tr: 'turuncu', en: 'orange' } },
  { id: 'mor', hex: '#9B6DD6', name: { tr: 'mor', en: 'purple' } },
  { id: 'pembe', hex: '#FF7EB6', name: { tr: 'pembe', en: 'pink' } },
];

export default {
  id: 'balonlar',
  title: { tr: 'Renkli Balonlar', en: 'Balloon Pop' },
  theme: 'sky',
  start(ctx) {
    const PER_COLOR = 6;
    const targets = shuffle(COLORS).slice(0, 3);
    let ti = 0, popped = 0, total = 0;
    const field = h('div', { class: 'balloon-field' });
    const goal = h('div', { class: 'goal-balloon', 'aria-hidden': 'true' });
    const meter = h('div', { class: 'goal-meter' });
    ctx.board.replaceChildren(field, h('div', { class: 'goal' }, goal, meter));

    let balloons = [];
    let active = [];
    let spawnAcc = 0, last = performance.now(), raf = 0;

    function setTarget() {
      const t = targets[ti];
      active = shuffle([t, ...shuffle(COLORS.filter(c => c !== t)).slice(0, 3)]);
      goal.innerHTML = balloonSVG(t.hex);
      meter.replaceChildren(...Array.from({ length: PER_COLOR }, (_, i) => h('i', { class: i < popped ? 'on' : '', style: { '--c': t.hex } })));
      ctx.prompt({ tr: `${cap(t.name.tr)} balonları patlat!`, en: `Pop the ${t.name.en} balloons!` }, t.name);
    }
    const cap = s => s.charAt(0).toLocaleUpperCase('tr') + s.slice(1);

    function spawn() {
      const W = field.clientWidth;
      const t = targets[ti];
      const color = Math.random() < 0.45 ? t : active[(Math.random() * active.length) | 0];
      const size = Math.max(70, Math.min(110, W / 4.2));
      const el = h('button', { class: 'balloon', 'aria-label': color.name.tr, html: balloonSVG(color.hex) });
      el.style.width = size + 'px';
      const b = { el, color, x: Math.random() * (W - size), y: field.clientHeight + 20, v: 55 + Math.random() * 40 + ti * 12, ph: Math.random() * 6, size, dead: false };
      el.addEventListener('pointerdown', e => { e.preventDefault(); hit(b); });
      field.append(el);
      balloons.push(b);
    }

    function hit(b) {
      if (b.dead) return;
      const t = targets[ti];
      if (b.color === t) {
        b.dead = true;
        const [x, y] = center(b.el);
        sfx.pop();
        confetti(x, y - 20, 14);
        b.el.classList.add('popped');
        setTimeout(() => b.el.remove(), 220);
        popped++; total++;
        ctx.progress(total, PER_COLOR * targets.length);
        meter.children[popped - 1]?.classList.add('on');
        if (popped >= PER_COLOR) {
          ctx.good(goal);
          ti++; popped = 0;
          if (ti >= targets.length) {
            stop();
            balloons.forEach(q => q.el.classList.add('fly-away'));
            ctx.later(() => ctx.finish(), 900);
          } else {
            ctx.later(setTarget, 900);
          }
        }
      } else {
        b.el.classList.remove('wobble'); void b.el.offsetWidth; b.el.classList.add('wobble');
        sfx.wrong();
        ctx.mood('oops');
      }
    }

    function loop(now) {
      if (!ctx.alive()) return;
      raf = requestAnimationFrame(loop);
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      spawnAcc += dt;
      const interval = Math.max(0.55, 1.05 - ti * 0.15);
      if (spawnAcc > interval && balloons.length < 9) { spawnAcc = 0; spawn(); }
      balloons = balloons.filter(b => {
        if (b.dead) return false;
        b.y -= b.v * dt;
        b.ph += dt * 1.6;
        const sway = Math.sin(b.ph) * 14;
        b.el.style.transform = `translate(${(b.x + sway).toFixed(1)}px, ${b.y.toFixed(1)}px) rotate(${(Math.sin(b.ph) * 5).toFixed(1)}deg)`;
        if (b.y < -b.size * 1.8) { b.el.remove(); return false; }
        return true;
      });
    }
    function stop() { cancelAnimationFrame(raf); }

    setTarget();
    ctx.progress(0, PER_COLOR * targets.length);
    raf = requestAnimationFrame(t => { last = t; loop(t); });
    return stop;
  },
};
