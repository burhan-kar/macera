// Her oyunu baştan sona oynatır; kutlama ekranına ulaşıldığını doğrular.
import { chromium } from 'playwright';
const [,, outDir, w='390', h='844'] = process.argv;
const b = await chromium.launch({ args: ['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: +w, height: +h }, deviceScaleFactor: 2, hasTouch: true });
const errs = [];
p.on('console', m => m.type() === 'error' && errs.push('console: ' + m.text()));
p.on('pageerror', e => errs.push('pageerror: ' + e.message));
await p.goto('http://localhost:8080/');
await p.click('.btn-start');
await p.evaluate(() => { window.__macera.store.settings.voice = false; });
await p.waitForTimeout(3000);
const cele = () => p.evaluate(() => !!document.querySelector('.overlay.cele'));
const sleep = ms => p.waitForTimeout(ms);
async function untilCele(step, limit = 90000) {
  const t0 = Date.now();
  while (!(await cele())) { if (Date.now() - t0 > limit) throw new Error('timeout'); await step(); }
}
const results = {};
const shot = async path => { try { await p.screenshot({ path, timeout: 12000 }); } catch { console.log('shot skipped', path); } };
const plays = {
  async hayvanlar() {
    await untilCele(async () => {
      await p.evaluate(() => {
        if (document.querySelector('.choice.win')) return;
        const c = [...document.querySelectorAll('.choice:not(.shake)')];
        (c.find(x => !x.dataset.tried) || c[0])?.click();
        c.forEach(x => { if (x.classList.contains('shake')) x.dataset.tried = 1; });
      });
      await sleep(250);
    });
  },
  async balonlar() {
    await untilCele(async () => {
      await p.evaluate(() => {
        const g = document.querySelector('.goal-balloon path[fill^="#"]:not([fill="none"])');
        const want = [...document.querySelectorAll('.goal-balloon [fill]')].map(e => e.getAttribute('fill')).find(f => f.startsWith('#') && f !== '#fff');
        document.querySelectorAll('.balloon:not(.popped)').forEach(el => {
          if (el.innerHTML.includes(`fill="${want}"`) && el.getBoundingClientRect().top < innerHeight - 40) el.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
        });
      });
      await sleep(300);
    });
  },
  async sayilar() {
    await untilCele(async () => {
      await p.evaluate(() => {
        if (document.querySelector('.num-btn.win')) return;
        const f = [...document.querySelectorAll('.fruit')];
        f.forEach(x => x.click());
        const n = f.length;
        [...document.querySelectorAll('.num-btn')].find(x => x.textContent === String(n))?.click();
      });
      await sleep(400);
    });
  },
  async sekiller() {
    await untilCele(async () => {
      const did = await p.evaluate(() => {
        const pc = document.querySelector('.piece');
        if (!pc || !pc._shape) return false;
        const hole = document.querySelector(`.hole[data-id="${pc._shape.id}"]`);
        const r1 = pc.getBoundingClientRect(), r2 = hole.getBoundingClientRect();
        return { x1: r1.x + r1.width / 2, y1: r1.y + r1.height / 2, x2: r2.x + r2.width / 2, y2: r2.y + r2.height / 2 };
      });
      if (did) {
        await p.mouse.move(did.x1, did.y1); await p.mouse.down();
        await p.mouse.move((did.x1 + did.x2) / 2, (did.y1 + did.y2) / 2, { steps: 5 });
        await p.mouse.move(did.x2, did.y2, { steps: 5 }); await p.mouse.up();
      }
      await sleep(500);
    });
  },
  async hafiza() {
    await untilCele(async () => {
      await p.evaluate(async () => {
        const cards = [...document.querySelectorAll('.mcard:not(.match)')];
        if (!cards.length || document.querySelectorAll('.mcard.up:not(.match)').length) return;
        const a = cards[0], m = cards.find(c => c !== a && c._a === a._a);
        a.click(); await new Promise(r => setTimeout(r, 80)); m && m.click();
      });
      await sleep(700);
    });
  },
  async boyama() {
    await untilCele(async () => {
      await p.evaluate(() => {
        document.querySelectorAll('.cpage .rg').forEach(r => r.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true })));
        const d = document.querySelector('.cdone'); if (d && !d.hidden) d.click();
      });
      await sleep(700);
    });
  },
  async harfler() {
    await untilCele(async () => { await p.evaluate(() => { if (!document.querySelector('.lt-tile.win')) document.querySelector('.lt-tile[data-ok]')?.click(); }); await sleep(500); });
  },
  async yapboz() {
    await untilCele(async () => {
      const d = await p.evaluate(() => {
        const pc = [...document.querySelectorAll('.pz-piece')].find(x => !x.dataset.done);
        if (!pc) return null;
        const slot = document.querySelector(`.pz-slot[data-i="${pc.dataset.i}"]`);
        const a = pc.getBoundingClientRect(), b = slot.getBoundingClientRect();
        return { x1: a.x + a.width / 2, y1: a.y + a.height / 2, x2: b.x + b.width / 2, y2: b.y + b.height / 2 };
      });
      if (d) { await p.mouse.move(d.x1, d.y1); await p.mouse.down(); await p.mouse.move(d.x2, d.y2, { steps: 8 }); await p.mouse.up(); }
      await sleep(450);
    });
  },
  async oruntu() {
    await untilCele(async () => { await p.evaluate(() => document.querySelector('.pt-opt[data-ok]')?.click()); await sleep(600); });
  },
  async besle() {
    await untilCele(async () => {
      await p.evaluate(() => {
        const f = [...document.querySelectorAll('.fd-fruit[data-ok]')].find(x => !x.dataset.done);
        if (f) { f.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, pointerId: 1 })); f.dispatchEvent(new PointerEvent('pointerup', { bubbles: true, pointerId: 1 })); }
      });
      await sleep(450);
    });
  },
  async saklambac() {
    await untilCele(async () => { await p.evaluate(() => document.querySelectorAll('.mole.up .mole-pop[data-ok]').forEach(x => x.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true })))); await sleep(250); }, 150000);
  },
  async muzik() {
    await untilCele(async () => {
      await p.evaluate(() => document.querySelector('.xbar.next')?.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true })));
      await sleep(120);
    }, 120000);
  },
};
const only = process.argv[5];
for (const [id, fn] of Object.entries(plays)) {
  if (only && id !== only) continue;
  const t0 = Date.now();
  await p.evaluate(id => window.__macera.openGame(id), id);
  await sleep(900);
  if (id === 'hayvanlar') await shot(`${outDir}/play-${id}-mid.png`);
  try {
    if (id === 'sekiller') { await sleep(300); await shot(`${outDir}/play-${id}-mid.png`); }
    if (id === 'muzik') { await sleep(2500); await shot(`${outDir}/play-${id}-mid.png`); }
    if (id === 'balonlar') { await sleep(2500); await shot(`${outDir}/play-${id}-mid.png`); }
    if (id === 'sayilar') { await shot(`${outDir}/play-${id}-mid.png`); }
    if (['boyama','harfler','yapboz','oruntu','besle','saklambac'].includes(id)) { await sleep(id === 'saklambac' ? 2600 : id === 'oruntu' ? 2200 : 300); await shot(`${outDir}/play-${id}-mid.png`); }
    await fn();
    results[id] = `OK ${((Date.now() - t0) / 1000).toFixed(0)}s`;
    await sleep(1600);
    if (id === 'hayvanlar') await shot(`${outDir}/play-celebrate.png`);
  } catch (e) {
    results[id] = 'FAIL ' + e.message;
    await shot(`${outDir}/fail-${id}.png`);
  }
  await p.evaluate(() => { const c = document.querySelector('.overlay.cele .btn-sea'); c ? c.click() : document.querySelector('.game-screen .btn-sea')?.click(); });
  await sleep(1500);
}
const st = await p.evaluate(() => ({ stars: window.__macera.store.stars, stickers: window.__macera.store.stickers.length }));
await shot(`${outDir}/play-hub-after.png`);
console.log(JSON.stringify(results, null, 1), JSON.stringify(st));
console.log(errs.length ? errs.join('\n') : 'no errors');
await b.close();
