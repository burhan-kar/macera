// Harfler: resimdeki kelime hangi harfle başlar?
import { ANIMALS, FRUITS, animalSVG, fruitSVG } from '../core/art.js';
import { h, shuffle, sample, wait } from '../core/ui.js';
import { store } from '../core/store.js';

const TR_ABC = 'ABCÇDEFGHIİJKLMNOÖPRSŞTUÜVYZ'.split('');
const EN_ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
// Türkçe harf okunuşları (seslendirme için)
const TR_SAY = { A: 'a', B: 'be', C: 'ce', Ç: 'çe', D: 'de', E: 'e', F: 'fe', G: 'ge', Ğ: 'yumuşak ge', H: 'he', I: 'ı', İ: 'i', J: 'je', K: 'ke', L: 'le', M: 'me', N: 'ne', O: 'o', Ö: 'ö', P: 'pe', R: 're', S: 'se', Ş: 'şe', T: 'te', U: 'u', Ü: 'ü', V: 've', Y: 'ye', Z: 'ze' };
const capTR = s => s.charAt(0).toLocaleUpperCase('tr') + s.slice(1);
const capEN = s => s.charAt(0).toUpperCase() + s.slice(1);

const ITEMS = [
  ...ANIMALS.map(a => ({ art: () => animalSVG(a.id), word: { tr: a.name.tr, en: a.name.en }, tint: a.color })),
  ...FRUITS.map(f => ({ art: () => `<div class="fruit-art">${fruitSVG(f.id)}</div>`, word: { tr: capTR(f.name.tr), en: capEN(f.en1) }, tint: '#FFF3D6' })),
];

export default {
  id: 'harfler',
  title: { tr: 'Harfler', en: 'Letters' },
  theme: 'abc',
  start(ctx) {
    const ROUNDS = 8;
    const lng = store.settings.lang === 'en' ? 'en' : 'tr';
    const ABC = lng === 'en' ? EN_ABC : TR_ABC;
    const firstOf = w => (lng === 'en' ? w.charAt(0).toUpperCase() : w.charAt(0).toLocaleUpperCase('tr'));
    const lower = l => (lng === 'en' ? l.toLowerCase() : l.toLocaleLowerCase('tr'));
    const sayL = l => (lng === 'en' ? l : TR_SAY[l] || l);
    const order = shuffle(ITEMS);
    let round = 0;

    function next() {
      if (!ctx.alive()) return;
      if (round >= ROUNDS) return ctx.finish();
      ctx.progress(round, ROUNDS);
      const it = order[round % order.length];
      const word = it.word[lng];
      const L = firstOf(word);
      const opts = shuffle([L, ...sample(ABC.filter(x => x !== L), 2)]);
      let locked = false;

      const blank = h('span', { class: 'lt-blank' }, '?');
      const card = h('div', { class: 'lt-card pop-in', style: { background: it.tint } },
        h('div', { class: 'lt-art', html: it.art() }),
        h('div', { class: 'lt-word' }, blank, h('span', {}, word.slice(1))));

      const tiles = opts.map((l, i) => {
        const b = h('button', { class: 'lt-tile pop-in', style: { animationDelay: `${150 + i * 80}ms` }, 'aria-label': l, 'data-ok': l === L ? '1' : null },
          h('b', {}, l), h('small', {}, lower(l)));
        b.addEventListener('click', async () => {
          if (locked) return;
          if (l === L) {
            locked = true;
            blank.textContent = L;
            blank.classList.add('filled');
            b.classList.add('win');
            ctx.good(b);
            await Promise.all([
              ctx.say({ tr: `${sayL(L)}! ${word}!`, en: `${sayL(L)}! ${word}!` }, { en: it.word.en }),
              wait(1500),
            ]);
            round++;
            ctx.later(next, 250);
          } else {
            ctx.bad(b);
            ctx.say({ tr: `Bu harf ${sayL(l)}. Bir daha dene!`, en: `That is ${l}. Try again!` });
          }
        });
        return b;
      });

      ctx.board.replaceChildren(h('div', { class: 'lt-wrap' }, card, h('div', { class: 'lt-tiles' }, tiles)));
      ctx.prompt({ tr: `${word}! ${word} hangi harfle başlar?`, en: `${word}! What letter does ${word} start with?` }, { en: it.word.en });
    }
    next();
  },
};
