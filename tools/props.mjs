import { chromium } from 'playwright';
const b = await chromium.launch({ args: ['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: 900, height: 200 } });
await p.goto('http://localhost:8080/');
await p.evaluate(() => {
  document.body.innerHTML = '<div id="g" style="display:flex;gap:14px;padding:14px;background:#BFEAF5"></div>';
  const g = document.getElementById('g');
  for (const k of ['bird','butterfly','cloud','fish','bee','leaf','star','note','bubble']) {
    const d = document.createElement('div');
    d.style.cssText = 'width:90px;height:90px;background:#ffffff40;border-radius:12px';
    d.className = 'prop-' + k;
    d.innerHTML = window.__props[k];
    g.append(d);
  }
});
await p.waitForTimeout(400);
await p.screenshot({ path: process.argv[2] });
await b.close();
