// Müzik: ksilofonla parlayan tuşları takip ederek şarkı çal
import { h, wait } from '../core/ui.js';
import { sfx } from '../core/sfx.js';

const BARS = [
  { c: '#FF4B4B', n: 'Do' }, { c: '#FF9A2E', n: 'Re' }, { c: '#FFD43B', n: 'Mi' }, { c: '#5BBA6F', n: 'Fa' },
  { c: '#2EC4B6', n: 'Sol' }, { c: '#3FA7D6', n: 'La' }, { c: '#9B6DD6', n: 'Si' }, { c: '#FF7EB6', n: 'Do' },
];
// Halk malı (kamu malı) ezgiler
const SONGS = [
  { name: { tr: 'Parla Parla Küçük Yıldız', en: 'Twinkle Twinkle Little Star' }, notes: [0, 0, 4, 4, 5, 5, 4, 3, 3, 2, 2, 1, 1, 0] },
  { name: { tr: 'Neşe Şarkısı', en: 'Ode to Joy' }, notes: [2, 2, 3, 4, 4, 3, 2, 1, 0, 0, 1, 2, 2, 1, 1] },
];

export default {
  id: 'muzik',
  title: { tr: 'Müzik', en: 'Music' },
  theme: 'stage',
  start(ctx) {
    let song = 0, pos = 0, demo = false;
    const bars = BARS.map((b, i) => {
      const el = h('button', { class: 'xbar', style: { '--c': b.c, '--h': `${100 - i * 6}%` }, 'aria-label': b.n }, h('span', {}, b.n));
      el.addEventListener('pointerdown', e => { e.preventDefault(); press(i, true); });
      return el;
    });
    const notesFx = h('div', { class: 'note-fx', 'aria-hidden': 'true' });
    const listen = h('button', { class: 'btn btn-pill', 'aria-label': 'Dinle' }, '▶ ', h('span', {}, ''));
    ctx.board.replaceChildren(h('div', { class: 'xylo-wrap' }, notesFx, h('div', { class: 'xylo' }, bars)), h('div', { class: 'xylo-tools' }, listen));

    function setLabel() { listen.lastChild.textContent = ctx.label({ tr: 'Dinle', en: 'Listen' }); }
    setLabel();

    function ring(i) {
      const el = bars[i];
      el.classList.remove('hit'); void el.offsetWidth; el.classList.add('hit');
      sfx.note(i);
      const n = h('i', { style: { left: `${(i + 0.5) * (100 / 8)}%`, color: BARS[i].c } }, i % 2 ? '♪' : '♫');
      notesFx.append(n);
      setTimeout(() => n.remove(), 1200);
    }

    function glow() {
      bars.forEach(b => b.classList.remove('next'));
      const s = SONGS[song];
      if (s && pos < s.notes.length) bars[s.notes[pos]].classList.add('next');
    }

    function press(i, user) {
      if (demo && user) return;
      ring(i);
      if (!user) return;
      const s = SONGS[song];
      if (!s) return;
      if (s.notes[pos] === i) {
        pos++;
        ctx.progress(SONGS.slice(0, song).reduce((a, q) => a + q.notes.length, 0) + pos, SONGS.reduce((a, q) => a + q.notes.length, 0));
        if (pos >= s.notes.length) {
          bars.forEach(b => b.classList.remove('next'));
          song++; pos = 0;
          ctx.good(bars[i]);
          if (song >= SONGS.length) { ctx.later(() => ctx.finish(), 1200); return; }
          ctx.later(() => intro(), 1500);
          return;
        }
      }
      glow();
    }

    async function playDemo() {
      if (demo) return;
      demo = true;
      bars.forEach(b => b.classList.remove('next'));
      for (const n of SONGS[song].notes) {
        if (!ctx.alive()) return;
        ring(n);
        await wait(420);
      }
      demo = false;
      glow();
    }
    listen.addEventListener('click', playDemo);

    async function intro() {
      if (!ctx.alive()) return;
      const s = SONGS[song];
      await ctx.prompt({ tr: `${s.name.tr} şarkısını çalalım! Parlayan tuşa dokun.`, en: `Let's play ${s.name.en}! Tap the glowing bar.` });
      glow();
    }
    ctx.progress(0, 1);
    intro();
  },
};
