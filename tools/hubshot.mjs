import { chromium } from 'playwright';
const [,, out, w, h, game] = process.argv;
const b = await chromium.launch({ args: ['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: +w, height: +h }, deviceScaleFactor: 2, hasTouch: true });
await p.goto('http://localhost:8080/'); await p.click('.btn-start'); await p.waitForTimeout(+(process.env.WAIT || 4500));
if (game) { await p.evaluate(g => window.__macera.openGame(g), game); await p.waitForTimeout(2500); }
await p.screenshot({ path: out, timeout: 20000 }); await b.close();
