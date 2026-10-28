import { chromium } from 'playwright';
const b = await chromium.launch({ args: ['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--autoplay-policy=no-user-gesture-required'] });
const p = await b.newPage({ viewport: { width: 390, height: 844 }, hasTouch: true });
const errs = [];
p.on('pageerror', e => errs.push('PAGEERR ' + e.message));
// Çalan her AudioBufferSource'u say
await p.addInitScript(() => {
  window.__plays = [];
  const patch = (C) => {
    if (!C) return;
    const orig = C.prototype.createBufferSource;
    C.prototype.createBufferSource = function () {
      const n = orig.call(this);
      const s = n.start.bind(n);
      n.start = (...a) => { window.__plays.push({ d: n.buffer ? +n.buffer.duration.toFixed(2) : 0, loop: n.loop }); return s(...a); };
      return n;
    };
  };
  patch(window.AudioContext); patch(window.webkitAudioContext);
});
await p.goto('http://localhost:8080/');
await p.click('.btn-start');
await p.waitForTimeout(4500);
const afterStart = await p.evaluate(() => window.__plays.length);
const music = await p.evaluate(() => window.__plays.filter(x => x.loop));
await p.evaluate(() => window.__macera.openGame('hayvanlar'));
await p.waitForTimeout(2500);
await p.evaluate(() => document.querySelector('.choice')?.click());
await p.waitForTimeout(1200);
await p.evaluate(() => { const c=[...document.querySelectorAll('.choice')]; c.forEach(x=>x.click()); });
await p.waitForTimeout(1500);
const all = await p.evaluate(() => window.__plays);
console.log('açılışta çalan:', afterStart, '| döngülü (müzik):', music.length, music.map(m=>m.d));
console.log('toplam çalınan ses:', all.length);
console.log('süreler:', all.map(a=>a.d).join(','));
console.log('hata:', errs.length ? errs.slice(0,3) : 'yok');
await b.close();
