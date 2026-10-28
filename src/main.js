// Mete'nin Macera Adası — giriş noktası
import { createIsland } from './island/island.js';
import { ZONE_ICON, ICON, ANIMALS, animalSVG } from './core/art.js';
import { h, mascot, mood, confetti, center, flyStar, starCounter, refreshStars, celebrate, holdButton, wait } from './core/ui.js';
import { say, stop as stopVoice, unlockVoice, label, subLabel, prefetchClips } from './core/voice.js';
import { sfx, unlockAudio } from './core/sfx.js';
import { playMusic, startAmbience, stopAmbience, refreshMusic, buzz, HAPTIC } from './core/music.js';
import { sceneLayer, curtain } from './core/scene.js';
import { store, save, addStars, markPlayed, resetProgress } from './core/store.js';

import animals from './games/animals.js';
import balloons from './games/balloons.js';
import numbers from './games/numbers.js';
import shapes from './games/shapes.js';
import memory from './games/memory.js';
import music from './games/music.js';
import coloring from './games/coloring.js';
import letters from './games/letters.js';
import puzzle from './games/puzzle.js';
import patterns from './games/patterns.js';
import feed from './games/feed.js';
import peekaboo from './games/peekaboo.js';
import emotions from './games/emotions.js';
import vehicles from './games/vehicles.js';
import weather from './games/weather.js';

// İç halka (çift sıra) ve dış halka (tek sıra) dönüşümlü dizilir
const GAMES = [animals, coloring, balloons, letters, numbers, puzzle, shapes, feed, memory, patterns, music, peekaboo, emotions, vehicles, weather];
const app = document.getElementById('app');

// ---------- Açılış ----------
function splash() {
  const go = h('button', { class: 'btn btn-start', 'aria-label': 'Başla' }, h('span', { class: 'ico', html: ICON.play }), h('span', {}, 'Başla'));
  const scr = h('section', { class: 'splash' },
    h('div', { class: 'splash-sun', 'aria-hidden': 'true' }),
    h('div', { class: 'splash-sea', 'aria-hidden': 'true' }),
    h('div', { class: 'splash-inner' },
      mascot('splash-mascot'),
      h('h1', {}, h('span', { class: 'l1' }, "Mete'nin"), h('span', { class: 'l2' }, 'Macera Adası')),
      go));
  app.append(scr);
  go.addEventListener('click', () => {
    unlockAudio();
    unlockVoice();
    sfx.whoosh();
    buzz(HAPTIC.tap);
    playMusic('island');
    startAmbience();
    prefetchClips();
    scr.classList.add('out');
    setTimeout(() => scr.remove(), 600);
    hub.show(true);
  }, { once: true });
}

// ---------- Ada (ana ekran) ----------
const hub = (() => {
  const canvas = h('canvas', { class: 'world', 'aria-label': 'Macera Adası' });
  const badgeLayer = h('div', { class: 'badges' });
  const pofi = mascot('hub-mascot');
  const pofiBtn = h('button', { class: 'pofi-btn', 'aria-label': 'Pofi' }, pofi);
  const albumBtn = h('button', { class: 'btn btn-round btn-leaf album-btn', 'aria-label': 'Çıkartma albümü', html: ICON.album });
  const parentBtn = h('button', { class: 'parent-btn', 'aria-label': 'Ebeveyn ayarları (basılı tut)', html: ICON.gear });
  const scr = h('section', { class: 'hub', hidden: true }, canvas, badgeLayer,
    h('div', { class: 'hub-top' }, parentBtn), h('div', { class: 'hub-bottom' }, pofiBtn, albumBtn));
  app.append(scr);

  const zones = GAMES.map(g => ({ id: g.id, title: g.title, icon: ZONE_ICON[g.id], titleText: () => label(g.title) }));
  let island = null;

  const HELLO = [
    { tr: 'Merhaba! Ben Pofi. Adada bir yere dokun, oyuna başlayalım!', en: "Hi! I'm Pofi. Tap a place on the island to play!" },
    { tr: 'Adayı parmağınla çevirebilirsin!', en: 'You can spin the island with your finger!' },
    { tr: 'Burası benim ağaç evim. Ne güzel, değil mi?', en: 'This is my tree house. Nice, right?' },
    { tr: 'Hadi, bir macera seç!', en: "Come on, pick an adventure!" },
  ];
  let helloI = 0;
  function talk() {
    mood(pofi, 'happy');
    sfx.tap();
    say(HELLO[helloI++ % HELLO.length]);
  }

  function ensure() {
    if (island) return;
    island = createIsland({
      canvas, badgeLayer, zones,
      async onSelect(id, phase) {
        if (phase === 'start') { sfx.whoosh(); buzz(HAPTIC.tap); stopVoice(); scr.classList.add('leaving'); return; }
        const cur = curtain();
        await cur.close();
        openGame(GAMES.find(g => g.id === id), cur);
      },
      onTreehouse: talk,
    });
  }

  pofiBtn.addEventListener('click', talk);
  albumBtn.addEventListener('click', () => { sfx.tap(); openAlbum(); });
  holdButton(parentBtn, 1500, openParent);

  return {
    show(first = false) {
      ensure();
      playMusic('island');
      startAmbience();
      scr.hidden = false;
      scr.classList.remove('leaving');
      scr.append(starCounter());
      refreshStars();
      island.refreshBadgeNames();
      island.start();
      if (first) setTimeout(() => { mood(pofi, 'happy'); say(HELLO[0]); helloI = 1; }, 900);
    },
    hide() { island && island.stop(); scr.hidden = true; },
    back() { island && island.back(); },
    relabel() { island && island.refreshBadgeNames(); },
    debug() { return island && island.debug(); },
  };
})();

// ---------- Oyun kabuğu ----------
let current = null;

function openGame(game, cur = null) {
  const timers = new Set();
  let alive = true;
  let instruction = null;

  const homeBtn = h('button', { class: 'btn btn-round btn-sea', 'aria-label': 'Adaya dön', html: ICON.home });
  const speakBtn = h('button', { class: 'btn btn-round btn-sun', 'aria-label': 'Tekrar dinle', html: ICON.speaker });
  const dots = h('div', { class: 'progress', role: 'progressbar', 'aria-valuemin': '0' }, h('i', { class: 'bar' }));
  const board = h('div', { class: 'board' });
  const m = mascot('game-mascot');
  const title = h('h2', { class: 'game-title' }, label(game.title));
  const scr = h('section', { class: `game-screen theme-${game.theme}` },
    h('header', { class: 'game-head' }, homeBtn, h('div', { class: 'head-mid' }, title, dots), speakBtn),
    board, m);
  scr.prepend(sceneLayer(game.theme));
  app.append(scr);
  scr.append(starCounter());
  hub.hide();
  stopAmbience();
  playMusic('play');
  requestAnimationFrame(() => scr.classList.add('in'));
  if (cur) cur.open();

  const ctx = {
    board,
    alive: () => alive,
    label,
    later(fn, ms) { const t = setTimeout(() => { timers.delete(t); if (alive) fn(); }, ms); timers.add(t); return t; },
    say: (s, w) => (alive ? say(s, w) : Promise.resolve()),
    prompt(s, w) { instruction = [s, w]; return ctx.say(s, w); },
    progress(i, n) {
      dots.firstChild.style.width = `${Math.min(100, (i / n) * 100)}%`;
      dots.setAttribute('aria-valuenow', String(i));
      dots.setAttribute('aria-valuemax', String(n));
    },
    mood: k => mood(m, k),
    /** doğru cevap: ses + konfeti + yıldız */
    good(el) {
      sfx.correct();
      buzz(HAPTIC.good);
      const [x, y] = center(el);
      confetti(x, y);
      el.classList?.remove('bounce'); void el.offsetWidth; el.classList?.add('bounce');
      addStars(1);
      flyStar([x, y]);
      mood(m, 'happy');
    },
    /** yıldız vermeden küçük kutlama */
    cheer(el) {
      sfx.correct();
      buzz(HAPTIC.good);
      const [x, y] = center(el);
      confetti(x, y, 12);
      mood(m, 'happy');
    },
    bad(el) {
      sfx.wrong();
      buzz(HAPTIC.bad);
      el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake');
      mood(m, 'oops');
    },
    async finish() {
      if (!alive) return;
      alive = false;
      cleanup();
      markPlayed(game.id);
      buzz(HAPTIC.big);
      const choice = await celebrate();
      if (choice === 'again') {
        const c = curtain();
        await c.close();
        close(true);
        openGame(game, c);
      } else close();
    },
  };

  let teardown = null;
  function cleanup() {
    timers.forEach(clearTimeout);
    timers.clear();
    try { teardown && teardown(); } catch { /* yok say */ }
    teardown = null;
  }
  function close(instant = false) {
    alive = false;
    cleanup();
    stopVoice();
    if (instant) { scr.remove(); return; }
    hub.show();
    hub.back();
    scr.classList.remove('in');
    scr.classList.add('out');
    setTimeout(() => scr.remove(), 400);
    current = null;
  }

  async function goHome() {
    sfx.tap();
    buzz(HAPTIC.tap);
    const c = curtain();
    await c.close();
    close();
    c.open();
  }

  homeBtn.addEventListener('click', goHome);
  speakBtn.addEventListener('click', () => { sfx.tap(); if (instruction) say(...instruction); });
  m.addEventListener('click', () => { if (instruction) say(...instruction); mood(m, 'happy'); buzz(HAPTIC.tap); });

  current = { close };
  teardown = game.start(ctx) || null;
}

// ---------- Çıkartma albümü ----------
function openAlbum() {
  const close = h('button', { class: 'btn btn-round btn-sea', 'aria-label': 'Kapat', html: ICON.close });
  const got = store.stickers.length;
  const grid = h('div', { class: 'album-grid' }, ANIMALS.map(a => {
    const has = store.stickers.includes(a.id);
    const b = h('button', {
      class: `sticker ${has ? '' : 'locked'}`,
      style: { background: has ? a.color : '' },
      'aria-label': has ? label(a.name) : 'Kilitli çıkartma',
      html: animalSVG(a.id),
    });
    b.addEventListener('click', () => {
      if (has) { sfx.correct(); b.classList.remove('bounce'); void b.offsetWidth; b.classList.add('bounce'); say({ tr: `${a.name.tr}! ${a.sound.tr}`, en: `${a.name.en}! ${a.sound.en}` }); }
      else { sfx.tap(); say({ tr: 'Bu çıkartmayı kazanmak için oyun oyna!', en: 'Play a game to win this sticker!' }); }
    });
    return b;
  }));
  const ov = h('div', { class: 'overlay album' },
    h('div', { class: 'album-card', role: 'dialog', 'aria-modal': 'true' },
      h('header', {}, h('h2', {}, label({ tr: 'Çıkartma Albümüm', en: 'My Sticker Book' })), h('span', { class: 'album-count' }, `${got} / ${ANIMALS.length}`), close),
      grid));
  document.body.append(ov);
  say(got
    ? { tr: `${got} çıkartman var! Harika!`, en: `You have ${got} stickers! Great!` }
    : { tr: 'Oyun oynayarak çıkartma topla!', en: 'Play games to collect stickers!' });
  close.addEventListener('click', () => { sfx.tap(); stopVoice(); ov.classList.add('out'); setTimeout(() => ov.remove(), 250); });
}

// ---------- Ebeveyn ayarları ----------
function openParent() {
  sfx.tap();
  const s = store.settings;
  const seg = (name, value, opts, onPick) => h('div', { class: 'seg', role: 'radiogroup', 'aria-label': name },
    opts.map(([v, text]) => {
      const b = h('button', { class: v === value ? 'on' : '', role: 'radio', 'aria-checked': String(v === value) }, text);
      b.addEventListener('click', () => {
        b.parentElement.querySelectorAll('button').forEach(x => { x.classList.remove('on'); x.setAttribute('aria-checked', 'false'); });
        b.classList.add('on'); b.setAttribute('aria-checked', 'true');
        onPick(v); save(); sfx.tap();
      });
      return b;
    }));
  const close = h('button', { class: 'btn btn-round btn-sea', 'aria-label': 'Kapat', html: ICON.close });
  const reset = h('button', { class: 'btn btn-pill btn-danger' }, 'İlerlemeyi sıfırla');
  reset.addEventListener('click', () => {
    if (reset.dataset.sure) { resetProgress(); refreshStars(); reset.textContent = 'Sıfırlandı'; reset.disabled = true; return; }
    reset.dataset.sure = '1'; reset.textContent = 'Emin misin? Tekrar dokun';
  });
  const ov = h('div', { class: 'overlay parent' },
    h('div', { class: 'parent-card', role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Ebeveyn ayarları' },
      h('header', {}, h('h2', {}, 'Ebeveyn ayarları'), close),
      h('label', {}, 'Oyun dili'),
      seg('Oyun dili', s.lang, [['tr', 'Türkçe'], ['en', 'English'], ['both', 'Türkçe + English']], v => { s.lang = v; hub.relabel(); }),
      h('p', { class: 'hint' }, '“Türkçe + English” seçilince yönergeler Türkçe, ardından kelimeler İngilizce söylenir.'),
      h('label', {}, 'Seslendirme'),
      seg('Seslendirme', s.voice, [[true, 'Açık'], [false, 'Kapalı']], v => { s.voice = v; }),
      h('label', {}, 'Ses efektleri'),
      seg('Ses efektleri', s.sound, [[true, 'Açık'], [false, 'Kapalı']], v => { s.sound = v; }),
      h('label', {}, 'Arka plan müziği'),
      seg('Arka plan müziği', s.music, [[true, 'Açık'], [false, 'Kapalı']], v => { s.music = v; refreshMusic(); }),
      h('label', {}, 'Titreşim'),
      seg('Titreşim', s.haptics, [[true, 'Açık'], [false, 'Kapalı']], v => { s.haptics = v; buzz(HAPTIC.good); }),
      h('label', {}, 'Konuşma hızı'),
      seg('Konuşma hızı', s.rate, [[0.8, 'Yavaş'], [0.95, 'Normal'], [1.1, 'Hızlı']], v => { s.rate = v; say({ tr: 'Merhaba Mete!', en: 'Hello Mete!' }); }),
      h('div', { class: 'parent-stats' },
        h('span', {}, `Yıldız: ${store.stars}`), h('span', {}, `Çıkartma: ${store.stickers.length}/${ANIMALS.length}`)),
      reset,
      h('p', { class: 'hint' }, 'Sesler cihazın kendi konuşma sesini kullanır. iPhone’da daha doğal ses için: Ayarlar › Erişilebilirlik › Seslendirilen İçerik › Sesler › Türkçe’den “Gelişmiş” bir ses indirin.')));
  document.body.append(ov);
  close.addEventListener('click', () => { sfx.tap(); ov.classList.add('out'); setTimeout(() => ov.remove(), 250); });
}

// ---------- Başlat ----------
splash();

if ('serviceWorker' in navigator && location.protocol === 'https:') {
  addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}

// Test/hata ayıklama kancası
window.__macera = { openGame: id => openGame(GAMES.find(g => g.id === id)), hub, store };
