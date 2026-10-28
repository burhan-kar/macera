// Oyunları otomatik oynatıp seslendirilen tüm cümleleri toplar.
import { chromium } from 'playwright';
import { writeFileSync, existsSync, readFileSync } from 'fs';
const [,, out, rounds = '2'] = process.argv;
const GAMES = ['hayvanlar','balonlar','sayilar','sekiller','hafiza','muzik','boyama','harfler','yapboz','oruntu','besle','saklambac','duygular','araclar','hava'];
const seen = new Map();
if (existsSync(out)) JSON.parse(readFileSync(out, 'utf8')).forEach(o => seen.set(o.key, o));

const b = await chromium.launch({ args: ['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader'] });
for (let r = 0; r < +rounds; r++) {
  for (const lang of ['tr', 'en']) {
    const p = await b.newPage({ viewport: { width: 390, height: 844 }, hasTouch: true });
    await p.addInitScript(() => { window.__lines = []; window.__collectVoice = o => window.__lines.push(o); });
    await p.goto('http://localhost:8080/');
    await p.click('.btn-start');
    await p.evaluate(l => { window.__macera.store.settings.voice = false; window.__macera.store.settings.lang = l; }, lang);
    await p.waitForTimeout(1500);
    for (const g of GAMES) {
      await p.evaluate(g => window.__macera.openGame(g), g);
      await p.waitForTimeout(700);
      // Her oyunda rastgele tıklamalarla farklı cümleleri tetikle
      for (let i = 0; i < 26; i++) {
        await p.evaluate(() => {
          const sel = '.choice,.num-btn,.lt-tile,.pt-opt,.mcard,.fd-fruit,.wx-item,.swatch,.cpage .rg,.xbar,.mole-pop,.fruit,.piece,.hole,.cdone,.balloon';
          const els = [...document.querySelectorAll(sel)].filter(e => e.offsetParent !== null);
          if (!els.length) return;
          const e = els[(Math.random() * els.length) | 0];
          e.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, pointerId: 1 }));
          e.dispatchEvent(new PointerEvent('pointerup', { bubbles: true, pointerId: 1 }));
          e.click && e.click();
        });
        await p.waitForTimeout(170);
      }
      await p.evaluate(() => { const c = document.querySelector('.overlay.cele .btn-sea'); c ? c.click() : document.querySelector('.game-screen .btn-sea')?.click(); });
      await p.waitForTimeout(600);
    }
    (await p.evaluate(() => window.__lines)).forEach(o => seen.set(o.key, o));
    await p.close();
  }
  console.log(`tur ${r + 1}: ${seen.size} benzersiz cümle`);
}
await b.close();
const arr = [...seen.values()].sort((a, b2) => a.key.localeCompare(b2.key));
writeFileSync(out, JSON.stringify(arr, null, 1));
console.log('toplam', arr.length, '| tr:', arr.filter(a => a.lang === 'tr').length, '| en:', arr.filter(a => a.lang === 'en').length);
