import { chromium } from 'playwright';
const b = await chromium.launch({ args: ['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: 390, height: 844 }, hasTouch: true });
p.on('pageerror', e => console.log('PAGEERR', e.message));
p.on('console', m => m.type()==='error' && console.log('CONSOLE', m.text()));
await p.goto('http://localhost:8080/'); await p.click('.btn-start'); await p.waitForTimeout(2500);
await p.evaluate(() => window.__macera.openGame('hayvanlar')); await p.waitForTimeout(2000);
console.log(await p.evaluate(() => {
  const sc = document.querySelector('.scene');
  if (!sc) return 'NO SCENE';
  const props = [...sc.querySelectorAll('.prop')];
  return { count: props.length, sceneBox: sc.getBoundingClientRect().toJSON(), sample: props.slice(0,4).map(e => { const r = e.getBoundingClientRect(); return [e.className, Math.round(r.x), Math.round(r.y), Math.round(r.width), getComputedStyle(e).animationName]; }) };
}));
await b.close();
