import { chromium } from 'playwright';
const [,, url, out, w='1200', h='900'] = process.argv;
const b = await chromium.launch(); const p = await b.newPage({viewport:{width:+w,height:+h}});
p.on('console', m=> m.type()==='error' && console.log('CONSOLE:', m.text())); p.on('pageerror', e=>console.log('PAGEERR:', e.message));
await p.goto(url); await p.waitForTimeout(800); await p.screenshot({path: out, fullPage:true}); await b.close();
