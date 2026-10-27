import * as A from '../src/core/art.js';
import fs from 'fs';
const items = [
 ...A.ANIMALS.map(a=>A.animalSVG(a.id)),
 A.mascotSVG(),
 ...A.FRUITS.map(f=>A.fruitSVG(f.id)),
 ...A.SHAPES.map(s=>A.shapeSVG(s.id,s.color)), A.shapeSVG('yildiz','#000','hole'),
 A.balloonSVG('#3FA7D6'), ...Object.values(A.ZONE_ICON), A.ICON.star, A.ICON.album,
];
fs.writeFileSync(process.argv[2], `<html><body style="margin:0;background:#FFF8EC;display:flex;flex-wrap:wrap;gap:10px;padding:10px;width:1180px">${items.map(s=>`<div style="width:130px;height:130px;background:#fff;border-radius:16px;display:grid;place-items:center">${s.replace('<svg','<svg width="110" height="110"')}</div>`).join('')}</body></html>`);
