import * as A from '../src/core/art2.js';
import fs from 'fs';
const items = [
 ...A.EMOTIONS.map(e=>A.emotionSVG(e.id)),
 ...A.VEHICLES.map(v=>A.vehicleSVG(v.id)),
 ...A.WEATHER.map(w=>A.weatherSVG(w.id)),
 ...Object.keys(A.CLOTHES).map(c=>A.clothesSVG(c)),
];
fs.writeFileSync(process.argv[2], `<html><body style="margin:0;background:#FFF8EC;display:flex;flex-wrap:wrap;gap:10px;padding:10px;width:1180px">${items.map(s=>`<div style="width:130px;height:130px;background:#fff;border-radius:16px;display:grid;place-items:center">${s.replace('<svg','<svg width="110" height="110"')}</div>`).join('')}</body></html>`);
