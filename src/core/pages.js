// Boyama sayfaları: .rg sınıflı her parça boyanabilir alan. Tamamı bu proje için çizildi.
import { INK } from './art.js';

const R = `class="rg" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"`;
const FIX = `fill="none" stroke="${INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" pointer-events="none"`;
const wrap = body => `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="art">${body}</svg>`;

function petals() {
  let s = '';
  for (let i = 0; i < 6; i++) s += `<ellipse ${R} cx="100" cy="44" rx="15" ry="22" transform="rotate(${i * 60} 100 70)"/>`;
  return s;
}

export const PAGES = [
  {
    id: 'balik', name: { tr: 'Balık', en: 'Fish' },
    svg: wrap(`
      <path ${R} d="M150 100 L192 64 Q184 100 192 136 Z"/>
      <path ${R} d="M62 66 Q92 22 128 68 Z"/>
      <path ${R} d="M84 132 Q100 166 118 134 Z"/>
      <ellipse ${R} cx="96" cy="100" rx="62" ry="40"/>
      <path ${R} d="M86 62 Q74 100 86 138 L100 139 Q88 100 100 61 Z"/>
      <path ${R} d="M114 63 Q104 100 114 137 L126 135 Q116 100 126 66 Z"/>
      <circle ${R} cx="30" cy="52" r="9"/><circle ${R} cx="46" cy="28" r="6"/><circle ${R} cx="22" cy="24" r="5"/>
      <circle cx="56" cy="90" r="11" fill="#fff" stroke="${INK}" stroke-width="3.5" pointer-events="none"/>
      <circle cx="58" cy="91" r="5" fill="${INK}" pointer-events="none"/>
      <path ${FIX} d="M38 108 q8 6 14 0"/>`),
  },
  {
    id: 'ev', name: { tr: 'Ev', en: 'House' },
    svg: wrap(`
      <rect ${R} x="2" y="166" width="196" height="32" rx="6"/>
      <circle ${R} cx="166" cy="32" r="18"/>
      <path ${R} d="M20 40 Q20 26 34 28 Q40 14 56 20 Q72 18 70 32 Q78 42 64 44 H30 Q16 44 20 40Z"/>
      <path ${R} d="M128 44 h18 v40 h-18z"/>
      <rect ${R} x="42" y="90" width="116" height="78"/>
      <path ${R} d="M30 94 L100 36 L170 94 Z"/>
      <rect ${R} x="87" y="118" width="28" height="50" rx="4"/>
      <rect ${R} x="54" y="106" width="24" height="24" rx="3"/>
      <rect ${R} x="124" y="106" width="24" height="24" rx="3"/>
      <path ${FIX} d="M66 106 v24 M54 118 h24 M136 106 v24 M124 118 h24"/>
      <circle cx="109" cy="144" r="3" fill="${INK}" pointer-events="none"/>`),
  },
  {
    id: 'cicek', name: { tr: 'Çiçek', en: 'Flower' },
    svg: wrap(`
      <rect ${R} x="95" y="88" width="10" height="58"/>
      <path ${R} d="M100 128 Q76 106 58 118 Q78 140 100 128Z"/>
      <path ${R} d="M100 114 Q124 92 142 104 Q122 128 100 114Z"/>
      ${petals()}
      <circle ${R} cx="100" cy="70" r="17"/>
      <path ${R} d="M70 154 H130 L122 194 H78 Z"/>
      <rect ${R} x="62" y="142" width="76" height="16" rx="5"/>
      <circle cx="94" cy="67" r="2.6" fill="${INK}" pointer-events="none"/><circle cx="106" cy="67" r="2.6" fill="${INK}" pointer-events="none"/>
      <path ${FIX} d="M94 75 q6 5 12 0"/>`),
  },
  {
    id: 'araba', name: { tr: 'Araba', en: 'Car' },
    svg: wrap(`
      <rect ${R} x="2" y="168" width="196" height="30" rx="6"/>
      <path ${R} d="M54 108 L74 74 H130 L154 108 Z"/>
      <path ${R} d="M18 128 Q18 108 40 106 H160 Q182 108 182 128 V148 Q182 156 172 156 H28 Q18 156 18 148 Z"/>
      <path ${R} d="M70 104 L82 82 H100 V104 Z"/>
      <path ${R} d="M108 104 V82 H126 L140 104 Z"/>
      <circle ${R} cx="56" cy="158" r="17"/><circle ${R} cx="146" cy="158" r="17"/>
      <circle ${R} cx="171" cy="124" r="6"/>
      <circle cx="56" cy="158" r="6" fill="#fff" stroke="${INK}" stroke-width="3" pointer-events="none"/>
      <circle cx="146" cy="158" r="6" fill="#fff" stroke="${INK}" stroke-width="3" pointer-events="none"/>
      <path ${FIX} d="M104 110 V150 M112 122 h10"/>`),
  },
];

export const PALETTE = [
  { hex: '#FF4B4B', name: { tr: 'kırmızı', en: 'red' } },
  { hex: '#FF9A2E', name: { tr: 'turuncu', en: 'orange' } },
  { hex: '#FFD43B', name: { tr: 'sarı', en: 'yellow' } },
  { hex: '#5BBA6F', name: { tr: 'yeşil', en: 'green' } },
  { hex: '#2EC4B6', name: { tr: 'turkuaz', en: 'teal' } },
  { hex: '#3FA7D6', name: { tr: 'mavi', en: 'blue' } },
  { hex: '#9B6DD6', name: { tr: 'mor', en: 'purple' } },
  { hex: '#FF7EB6', name: { tr: 'pembe', en: 'pink' } },
  { hex: '#A86B45', name: { tr: 'kahverengi', en: 'brown' } },
  { hex: '#8A8FA3', name: { tr: 'gri', en: 'gray' } },
];
