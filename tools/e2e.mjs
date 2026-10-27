import { chromium } from 'playwright';
const [,, outDir, w='390', h='844'] = process.argv;
const b = await chromium.launch({ args: ['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: +w, height: +h }, deviceScaleFactor: 2, hasTouch: true });
const errs = [];
p.on('console', m => m.type() === 'error' && errs.push('console: ' + m.text()));
p.on('pageerror', e => errs.push('pageerror: ' + e.message));
await p.goto('http://localhost:8080/');
await p.waitForTimeout(700);
await p.screenshot({ path: `${outDir}/01-splash.png` });
await p.click('.btn-start');
await p.waitForTimeout(4500);
await p.screenshot({ path: `${outDir}/02-hub.png` });
for (const id of ['hayvanlar','balonlar','sayilar','sekiller','hafiza','muzik']) {
  await p.evaluate(id => window.__macera.openGame(id), id);
  await p.waitForTimeout(id === 'balonlar' ? 3500 : 1200);
  await p.screenshot({ path: `${outDir}/g-${id}.png` });
  await p.click('.game-screen .btn-sea');
  await p.waitForTimeout(1300);
}
await p.click('.album-btn'); await p.waitForTimeout(700);
await p.screenshot({ path: `${outDir}/03-album.png` });
console.log(errs.length ? errs.join('\n') : 'no errors');
await b.close();
