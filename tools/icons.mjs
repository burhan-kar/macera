// Uygulama ikonları: Pofi + ada arka planı (SVG → PNG için tools/icons.py)
import { mascotSVG } from '../src/core/art.js';
import { writeFileSync } from 'fs';
const inner = mascotSVG().replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '');
const icon = (scale) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5EC3E6"/><stop offset=".62" stop-color="#A9E4EE"/><stop offset=".62" stop-color="#1D9CAE"/><stop offset="1" stop-color="#127686"/></linearGradient></defs>
<rect width="512" height="512" fill="url(#g)"/>
<circle cx="400" cy="110" r="70" fill="#FFE38A"/>
<ellipse cx="256" cy="400" rx="${200*scale}" ry="${46*scale}" fill="#FFD89C" stroke="#3B2C5A" stroke-width="10"/>
<g transform="translate(${256-160*1.55*scale/2*1} ${400-170*1.55*scale-10*scale}) scale(${1.55*scale})">${inner}</g>
</svg>`;
writeFileSync('tools/icon.svg', icon(1));
writeFileSync('tools/icon-maskable.svg', icon(0.78));
