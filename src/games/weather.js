// Hava Durumu: havaya uygun giysiyi Pofi'ye sürükle
import { WEATHER, WEATHER_WEAR, CLOTHES, weatherSVG, clothesSVG } from '../core/art2.js';
import { mascotSVG } from '../core/art.js';
import { h, sample, shuffle, wait, draggable, flyInto } from '../core/ui.js';
import { sfx } from '../core/sfx.js';

const LOC = {
  gunesli: { tr: 'Bugün hava güneşli!', en: "It's sunny today!" },
  yagmurlu: { tr: 'Bugün yağmur yağıyor!', en: "It's raining today!" },
  karli: { tr: 'Bugün kar yağıyor!', en: "It's snowing today!" },
  bulutlu: { tr: 'Bugün hava bulutlu.', en: "It's cloudy today." },
  ruzgarli: { tr: 'Bugün hava rüzgârlı!', en: "It's windy today!" },
  firtinali: { tr: 'Bugün fırtına var!', en: "It's stormy today!" },
};

export default {
  id: 'hava',
  title: { tr: 'Hava Durumu', en: 'Weather' },
  theme: 'weather',
  start(ctx) {
    const order = shuffle(WEATHER);
    const ROUNDS = 5;
    let round = 0;

    function next() {
      if (!ctx.alive()) return;
      if (round >= ROUNDS) return ctx.finish();
      ctx.progress(round, ROUNDS);
      const w = order[round % order.length];
      const right = WEATHER_WEAR[w.id];
      const wrongPool = Object.keys(CLOTHES).filter(c => !right.includes(c));
      const items = shuffle([...right, ...sample(wrongPool, Math.max(2, 4 - right.length))]);
      let done = 0;

      const sky = h('div', { class: `wx-sky wx-${w.id}` }, h('div', { class: 'wx-icon', html: weatherSVG(w.id) }));
      const pofi = h('div', { class: 'wx-pofi', html: mascotSVG() });
      const worn = h('div', { class: 'wx-worn' });
      const stage = h('div', { class: 'wx-stage' }, sky, h('div', { class: 'wx-char' }, pofi, worn));

      const tray = h('div', { class: 'wx-tray' });
      const buttons = items.map((id, i) => {
        const b = h('button', { class: 'wx-item pop-in', style: { animationDelay: `${250 + i * 70}ms` }, 'aria-label': CLOTHES[id].tr, 'data-ok': right.includes(id) ? '1' : null, html: clothesSVG(id) });
        b._id = id;
        return b;
      });
      tray.append(...buttons);

      function give(el) {
        if (el.dataset.done) return false;
        const id = el._id;
        if (!right.includes(id)) {
          ctx.bad(el);
          pofi.classList.remove('no'); void pofi.offsetWidth; pofi.classList.add('no');
          ctx.say({ tr: `${CLOTHES[id].tr.charAt(0).toLocaleUpperCase('tr') + CLOTHES[id].tr.slice(1)} bu havaya uymaz.`, en: `A ${CLOTHES[id].en} is not right for this weather.` });
          return false;
        }
        el.dataset.done = '1';
        done++;
        const mine = done;
        flyInto(el, pofi, { scale: 0.4 }).then(async () => {
          el.style.opacity = '0';
          el.style.pointerEvents = 'none';
          sfx.snap();
          const chip = h('div', { class: 'wx-chip pop-in', html: clothesSVG(id) });
          worn.append(chip);
          if (mine < right.length) {
            ctx.cheer(chip);
            ctx.say({ tr: `${CLOTHES[id].tr}! Bir tane daha lazım.`, en: `${CLOTHES[id].en}! One more is needed.` });
            return;
          }
          pofi.classList.add('ready');
          ctx.good(pofi);
          ctx.mood('happy');
          await Promise.all([
            ctx.say({ tr: `Harika! ${w.name.tr} havada ${w.wear.tr} tam olur.`, en: `Great! On a ${w.name.en.toLowerCase()} day ${w.wear.en} is just right.` }),
            wait(1700),
          ]);
          round++;
          next();
        });
        return true;
      }
      buttons.forEach(b => draggable(b, { targets: () => [pofi], onDrop: el => give(el), tap: el => give(el) }));

      ctx.board.replaceChildren(h('div', { class: 'wx-wrap' }, stage, tray));
      ctx.prompt({ tr: `${LOC[w.id].tr} Pofi ne giysin?`, en: `${LOC[w.id].en} What should Pofi wear?` }, w.name);
    }
    next();
  },
};
