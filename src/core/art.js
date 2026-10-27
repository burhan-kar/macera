// Oyunun özgün çizimleri: kalın mor konturlu "çıkartma" stili SVG'ler.
// Hepsi bu proje için çizildi; dış kaynak/telif yok.
export const INK = '#3B2C5A';
const S = `stroke="${INK}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"`;
const S2 = `stroke="${INK}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"`;

const svg = (body, vb = '0 0 120 120', label = '') =>
  `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" class="art"${label ? ` role="img" aria-label="${label}"` : ' aria-hidden="true"'}>${body}</svg>`;

const eye = (cx, cy, r = 6.5) =>
  `<ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="${(r * 1.15).toFixed(1)}" fill="${INK}"/><circle cx="${cx + 2}" cy="${cy - r * 0.42}" r="${(r * 0.38).toFixed(1)}" fill="#fff"/>`;
const eyes = (y, l = 44, r = 76, s = 6.5) => `<g class="blink">${eye(l, y, s)}${eye(r, y, s)}</g>`;
const cheeks = (y, l = 34, r = 86, c = '#FF8FA3') =>
  `<ellipse cx="${l}" cy="${y}" rx="7" ry="4.5" fill="${c}" opacity=".6"/><ellipse cx="${r}" cy="${y}" rx="7" ry="4.5" fill="${c}" opacity=".6"/>`;
const muzzleMouth = (y) => `<path d="M60 ${y} v4 M60 ${y + 4} q-5 5 -10 1 M60 ${y + 4} q5 5 10 1" fill="none" ${S}/>`;

function starPoints(cx, cy, n, r1, r2, rot = -Math.PI / 2) {
  const pts = [];
  for (let i = 0; i < n * 2; i++) {
    const r = i % 2 ? r2 : r1;
    const a = rot + (i * Math.PI) / n;
    pts.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`);
  }
  return pts.join(' ');
}

// ---------- HAYVANLAR ----------
const ANIMAL_BODIES = {
  kedi: () => `
    <path d="M24 52 L27 12 L55 34 Z" fill="#FF9F45" ${S}/><path d="M96 52 L93 12 L65 34 Z" fill="#FF9F45" ${S}/>
    <path d="M31 40 L32 23 L45 33Z" fill="#FFC1CC"/><path d="M89 40 L88 23 L75 33Z" fill="#FFC1CC"/>
    <ellipse cx="60" cy="68" rx="42" ry="36" fill="#FF9F45" ${S}/>
    <path d="M60 35 v9 M49 37 l2 8 M71 37 l-2 8" stroke="#E07B1F" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="60" cy="83" rx="17" ry="11" fill="#FFE3C2"/>
    ${eyes(64)}${cheeks(80, 32, 88)}
    <path d="M55 76 h10 l-5 6 z" fill="#FF6F91" ${S2}/>
    <path d="M60 82 q-5 6 -10 2 M60 82 q5 6 10 2" fill="none" ${S2}/>
    <path d="M30 80 L12 76 M30 86 L12 90 M90 80 L108 76 M90 86 L108 90" ${S2}/>`,
  kopek: () => `
    <ellipse cx="60" cy="64" rx="38" ry="38" fill="#F2C48D" ${S}/>
    <ellipse cx="77" cy="57" rx="12" ry="11" fill="#D99A5B"/>
    <ellipse cx="22" cy="64" rx="13" ry="27" fill="#8A5A3B" ${S} transform="rotate(18 22 64)"/>
    <ellipse cx="98" cy="64" rx="13" ry="27" fill="#8A5A3B" ${S} transform="rotate(-18 98 64)"/>
    <ellipse cx="60" cy="83" rx="21" ry="15" fill="#FFF1DE"/>
    ${eyes(58, 45, 76)}
    <path d="M54 88 q6 12 12 0 z" fill="#FF6F91" ${S2}/>
    <path d="M60 80 v6 M60 86 q-6 5 -11 1 M60 86 q6 5 11 1" fill="none" ${S2}/>
    <ellipse cx="60" cy="76" rx="9" ry="6.5" fill="${INK}"/><ellipse cx="57" cy="74" rx="3" ry="1.8" fill="#fff" opacity=".7"/>`,
  inek: () => `
    <path d="M36 34 q-9 -12 -3 -22 q5 11 13 15z" fill="#FFF1DE" ${S}/><path d="M84 34 q9 -12 3 -22 q-5 11 -13 15z" fill="#FFF1DE" ${S}/>
    <ellipse cx="18" cy="52" rx="15" ry="8" fill="#fff" ${S} transform="rotate(-15 18 52)"/>
    <ellipse cx="102" cy="52" rx="15" ry="8" fill="#fff" ${S} transform="rotate(15 102 52)"/>
    <ellipse cx="60" cy="60" rx="37" ry="37" fill="#fff" ${S}/>
    <path d="M30 50 q6 -18 22 -14 q6 12 -6 18 q-12 5 -16 -4z" fill="${INK}" opacity=".85"/>
    <ellipse cx="84" cy="66" rx="8" ry="6" fill="${INK}" opacity=".85"/>
    ${eyes(58, 46, 75)}
    <ellipse cx="60" cy="88" rx="27" ry="17" fill="#FFB3C1" ${S}/>
    <ellipse cx="50" cy="88" rx="3.5" ry="5" fill="${INK}"/><ellipse cx="70" cy="88" rx="3.5" ry="5" fill="${INK}"/>`,
  koyun: () => {
    const ring = [];
    for (let i = 0; i < 11; i++) {
      const a = (i / 11) * Math.PI * 2;
      ring.push([60 + Math.cos(a) * 36, 58 + Math.sin(a) * 33]);
    }
    const tuft = [[48, 44], [60, 40], [72, 44]];
    const circ = (pts, r, extra) => pts.map(([x, y]) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="#FFF8EC" ${extra}/>`).join('');
    return `
      ${circ(ring, 15, S)}<circle cx="60" cy="58" r="36" fill="#FFF8EC"/>${circ(ring, 15, '')}
      <ellipse cx="24" cy="70" rx="13" ry="7" fill="#6B5566" ${S} transform="rotate(25 24 70)"/>
      <ellipse cx="96" cy="70" rx="13" ry="7" fill="#6B5566" ${S} transform="rotate(-25 96 70)"/>
      <ellipse cx="60" cy="72" rx="24" ry="28" fill="#F6D7C3" ${S}/>
      ${circ(tuft, 10, S)}${circ(tuft, 10, '')}
      ${eyes(70, 51, 69, 5.5)}${cheeks(83, 44, 76)}
      <path d="M55 86 q5 5 10 0" fill="none" ${S}/>`;
  },
  aslan: () => `
    <polygon points="${starPoints(60, 62, 14, 54, 42)}" fill="#E8781E" ${S}/>
    <circle cx="36" cy="38" r="10" fill="#FFC85C" ${S}/><circle cx="84" cy="38" r="10" fill="#FFC85C" ${S}/>
    <circle cx="36" cy="38" r="5" fill="#F7A73C"/><circle cx="84" cy="38" r="5" fill="#F7A73C"/>
    <circle cx="60" cy="64" r="32" fill="#FFC85C" ${S}/>
    <ellipse cx="52" cy="81" rx="10" ry="8" fill="#FFF1DE"/><ellipse cx="68" cy="81" rx="10" ry="8" fill="#FFF1DE"/>
    ${eyes(60, 48, 72, 6)}
    <path d="M53 72 h14 l-7 7z" fill="#8A4B2A" ${S2}/>
    ${muzzleMouth(79)}`,
  fil: () => `
    <ellipse cx="24" cy="60" rx="22" ry="29" fill="#A9BED3" ${S}/><ellipse cx="96" cy="60" rx="22" ry="29" fill="#A9BED3" ${S}/>
    <ellipse cx="26" cy="62" rx="13" ry="19" fill="#F5B7C6"/><ellipse cx="94" cy="62" rx="13" ry="19" fill="#F5B7C6"/>
    <ellipse cx="60" cy="56" rx="31" ry="33" fill="#A9BED3" ${S}/>
    <path d="M60 70 q0 26 16 28" fill="none" stroke="${INK}" stroke-width="22" stroke-linecap="round"/>
    <path d="M60 70 q0 26 16 28" fill="none" stroke="#A9BED3" stroke-width="15" stroke-linecap="round"/>
    <path d="M55 84 h10 M57 91 h10" stroke="#7F97AE" stroke-width="2.5" stroke-linecap="round"/>
    ${eyes(54, 47, 73)}${cheeks(68, 38, 82)}`,
  kurbaga: () => `
    <circle cx="36" cy="38" r="17" fill="#7ACB5A" ${S}/><circle cx="84" cy="38" r="17" fill="#7ACB5A" ${S}/>
    <ellipse cx="60" cy="70" rx="47" ry="32" fill="#7ACB5A" ${S}/>
    <circle cx="36" cy="38" r="17" fill="#7ACB5A"/><circle cx="84" cy="38" r="17" fill="#7ACB5A"/>
    <ellipse cx="60" cy="72" rx="44" ry="28" fill="#7ACB5A"/>
    <circle cx="36" cy="36" r="11" fill="#fff" ${S2}/><circle cx="84" cy="36" r="11" fill="#fff" ${S2}/>
    ${eyes(37, 37, 83, 5.5)}
    <circle cx="54" cy="60" r="2" fill="${INK}"/><circle cx="66" cy="60" r="2" fill="${INK}"/>
    <path d="M28 70 q32 26 64 0" fill="none" ${S}/>
    ${cheeks(74, 24, 96)}`,
  ayi: () => `
    <circle cx="28" cy="32" r="14" fill="#A86B45" ${S}/><circle cx="92" cy="32" r="14" fill="#A86B45" ${S}/>
    <circle cx="28" cy="32" r="7" fill="#E7B48A"/><circle cx="92" cy="32" r="7" fill="#E7B48A"/>
    <ellipse cx="60" cy="64" rx="41" ry="37" fill="#A86B45" ${S}/>
    <ellipse cx="60" cy="81" rx="19" ry="14" fill="#E7C29A"/>
    ${eyes(60)}${cheeks(76, 30, 90)}
    <ellipse cx="60" cy="74" rx="8.5" ry="5.5" fill="${INK}"/>
    ${muzzleMouth(79)}`,
  tavsan: () => `
    <ellipse cx="43" cy="28" rx="11" ry="27" fill="#F4F1F6" ${S} transform="rotate(-8 43 28)"/>
    <ellipse cx="77" cy="28" rx="11" ry="27" fill="#F4F1F6" ${S} transform="rotate(8 77 28)"/>
    <ellipse cx="43" cy="30" rx="5" ry="18" fill="#FFC1CC" transform="rotate(-8 43 30)"/>
    <ellipse cx="77" cy="30" rx="5" ry="18" fill="#FFC1CC" transform="rotate(8 77 30)"/>
    <ellipse cx="60" cy="74" rx="37" ry="32" fill="#F4F1F6" ${S}/>
    ${eyes(70, 47, 73, 6)}${cheeks(84, 36, 84)}
    <rect x="55.5" y="88" width="9" height="8" rx="2" fill="#fff" ${S2}/>
    <ellipse cx="60" cy="81" rx="5.5" ry="3.8" fill="#FF6F91"/>
    <path d="M60 84 v3 M60 87 q-4 3 -8 0 M60 87 q4 3 8 0" fill="none" ${S2}/>`,
  ordek: () => `
    <path d="M56 26 q-8 -14 4 -16 q-3 8 7 13" fill="#FFD43B" ${S}/>
    <circle cx="60" cy="62" r="38" fill="#FFD43B" ${S}/>
    ${eyes(56, 46, 74)}${cheeks(72, 32, 88)}
    <path d="M34 78 q26 -14 52 0 q-26 20 -52 0 z" fill="#FF9A3C" ${S}/>
    <path d="M38 79 q22 5 44 0" fill="none" ${S2}/>`,
  maymun: () => `
    <circle cx="20" cy="62" r="14" fill="#9A5F3A" ${S}/><circle cx="100" cy="62" r="14" fill="#9A5F3A" ${S}/>
    <circle cx="20" cy="62" r="8" fill="#F2C9A0"/><circle cx="100" cy="62" r="8" fill="#F2C9A0"/>
    <circle cx="60" cy="60" r="38" fill="#9A5F3A" ${S}/>
    <circle cx="47" cy="58" r="15" fill="#F2C9A0"/><circle cx="73" cy="58" r="15" fill="#F2C9A0"/>
    <ellipse cx="60" cy="79" rx="26" ry="17" fill="#F2C9A0"/>
    <path d="M50 24 q10 -12 16 2" fill="none" ${S}/>
    ${eyes(58, 47, 73, 6)}
    <circle cx="56" cy="73" r="2" fill="${INK}"/><circle cx="64" cy="73" r="2" fill="${INK}"/>
    <path d="M47 82 q13 11 26 0" fill="none" ${S}/>`,
  panda: () => `
    <circle cx="28" cy="32" r="13" fill="${INK}"/><circle cx="92" cy="32" r="13" fill="${INK}"/>
    <ellipse cx="60" cy="64" rx="41" ry="37" fill="#fff" ${S}/>
    <ellipse cx="44" cy="62" rx="11" ry="14" fill="${INK}" transform="rotate(30 44 62)"/>
    <ellipse cx="76" cy="62" rx="11" ry="14" fill="${INK}" transform="rotate(-30 76 62)"/>
    <g class="blink"><circle cx="45" cy="60" r="5" fill="#fff"/><circle cx="75" cy="60" r="5" fill="#fff"/>
    <circle cx="46" cy="61" r="2.8" fill="${INK}"/><circle cx="74" cy="61" r="2.8" fill="${INK}"/></g>
    ${cheeks(80, 32, 88)}
    <ellipse cx="60" cy="76" rx="6.5" ry="4.5" fill="${INK}"/>
    ${muzzleMouth(80)}`,
};

export const ANIMALS = [
  { id: 'kedi', name: { tr: 'Kedi', en: 'Cat' }, acc: { tr: 'Kediyi', en: 'the cat' }, sound: { tr: 'Miyav!', en: 'Meow!' }, color: '#FFE0C2' },
  { id: 'kopek', name: { tr: 'Köpek', en: 'Dog' }, acc: { tr: 'Köpeği', en: 'the dog' }, sound: { tr: 'Hav hav!', en: 'Woof woof!' }, color: '#FCE6CD' },
  { id: 'inek', name: { tr: 'İnek', en: 'Cow' }, acc: { tr: 'İneği', en: 'the cow' }, sound: { tr: 'Möö!', en: 'Moo!' }, color: '#E8F5DB' },
  { id: 'koyun', name: { tr: 'Koyun', en: 'Sheep' }, acc: { tr: 'Koyunu', en: 'the sheep' }, sound: { tr: 'Mee!', en: 'Baa!' }, color: '#E6F1FA' },
  { id: 'aslan', name: { tr: 'Aslan', en: 'Lion' }, acc: { tr: 'Aslanı', en: 'the lion' }, sound: { tr: 'Roarrr!', en: 'Roar!' }, color: '#FFE9B8' },
  { id: 'fil', name: { tr: 'Fil', en: 'Elephant' }, acc: { tr: 'Fili', en: 'the elephant' }, sound: { tr: 'Pırıııı!', en: 'Toot!' }, color: '#E3ECF6' },
  { id: 'kurbaga', name: { tr: 'Kurbağa', en: 'Frog' }, acc: { tr: 'Kurbağayı', en: 'the frog' }, sound: { tr: 'Vrak vrak!', en: 'Ribbit!' }, color: '#DFF5D3' },
  { id: 'ayi', name: { tr: 'Ayı', en: 'Bear' }, acc: { tr: 'Ayıyı', en: 'the bear' }, sound: { tr: 'Hımmm!', en: 'Grrr!' }, color: '#F3E1D2' },
  { id: 'tavsan', name: { tr: 'Tavşan', en: 'Rabbit' }, acc: { tr: 'Tavşanı', en: 'the rabbit' }, sound: { tr: 'Hop hop!', en: 'Hop hop!' }, color: '#FBE4EC' },
  { id: 'ordek', name: { tr: 'Ördek', en: 'Duck' }, acc: { tr: 'Ördeği', en: 'the duck' }, sound: { tr: 'Vak vak!', en: 'Quack quack!' }, color: '#DDF2F7' },
  { id: 'maymun', name: { tr: 'Maymun', en: 'Monkey' }, acc: { tr: 'Maymunu', en: 'the monkey' }, sound: { tr: 'Uu uu aa aa!', en: 'Ooh ooh aah aah!' }, color: '#F5E5D3' },
  { id: 'panda', name: { tr: 'Panda', en: 'Panda' }, acc: { tr: 'Pandayı', en: 'the panda' }, sound: { tr: 'Hımm, bambu!', en: 'Mmm, bamboo!' }, color: '#E9F3E4' },
];

export function animalSVG(id, label = '') {
  return svg(ANIMAL_BODIES[id](), '0 0 120 120', label);
}

// ---------- MEYVELER ----------
const FRUIT_BODIES = {
  elma: `<path d="M40 22 C56 12 72 24 70 44 C68 64 52 74 40 68 C28 74 12 64 10 44 C8 24 24 12 40 22Z" fill="#FF5A4E" ${S}/>
    <path d="M40 22 q0 -10 4 -14" fill="none" ${S}/><path d="M44 14 q12 -8 18 2 q-10 6 -18 -2z" fill="#5BBA6F" ${S2}/>
    <ellipse cx="25" cy="36" rx="4.5" ry="8" fill="#fff" opacity=".5" transform="rotate(20 25 36)"/>`,
  portakal: `<circle cx="40" cy="45" r="26" fill="#FFA23A" ${S}/>
    <path d="M40 19 q10 -11 19 -3 q-9 9 -19 3z" fill="#5BBA6F" ${S2}/>
    <circle cx="50" cy="38" r="1.6" fill="#E07B1F"/><circle cx="32" cy="54" r="1.6" fill="#E07B1F"/><circle cx="48" cy="58" r="1.6" fill="#E07B1F"/>
    <ellipse cx="28" cy="37" rx="4" ry="7" fill="#fff" opacity=".45" transform="rotate(25 28 37)"/>`,
  cilek: `<path d="M40 72 C20 60 11 40 17 29 C25 18 55 18 63 29 C69 40 60 60 40 72Z" fill="#FF4F6D" ${S}/>
    <g fill="#FFE08A"><ellipse cx="30" cy="36" rx="1.8" ry="2.6"/><ellipse cx="44" cy="34" rx="1.8" ry="2.6"/><ellipse cx="54" cy="40" rx="1.8" ry="2.6"/>
    <ellipse cx="36" cy="48" rx="1.8" ry="2.6"/><ellipse cx="48" cy="52" rx="1.8" ry="2.6"/><ellipse cx="40" cy="62" rx="1.8" ry="2.6"/><ellipse cx="26" cy="46" rx="1.8" ry="2.6"/></g>
    <path d="M24 25 l8 -10 l8 7 l8 -7 l8 10 q-16 6 -32 0z" fill="#5BBA6F" ${S2}/>`,
  armut: `<path d="M40 14 C49 14 48 27 53 34 C67 44 65 71 40 71 C15 71 13 44 27 34 C32 27 31 14 40 14Z" fill="#B5D334" ${S}/>
    <path d="M40 15 q1 -8 5 -11" fill="none" ${S}/>
    <ellipse cx="28" cy="50" rx="4" ry="8" fill="#fff" opacity=".45" transform="rotate(15 28 50)"/>`,
  kiraz: `<path d="M27 46 q6 -24 20 -36 M53 48 q-2 -22 -6 -38" fill="none" stroke="#5E8C3A" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M47 10 q12 -6 18 4 q-10 6 -18 -4z" fill="#5BBA6F" ${S2}/>
    <circle cx="27" cy="57" r="13" fill="#E8334A" ${S}/><circle cx="53" cy="59" r="13" fill="#E8334A" ${S}/>
    <circle cx="23" cy="53" r="3" fill="#fff" opacity=".5"/><circle cx="49" cy="55" r="3" fill="#fff" opacity=".5"/>`,
  muz: `<path d="M12 26 q4 40 46 38 q12 -1 16 -9 q-32 6 -48 -30 q-8 -6 -14 1z" fill="#FFD43B" ${S}/>
    <path d="M12 26 l-3 -6" ${S} stroke="#7A5530"/><path d="M26 30 q10 22 34 26" fill="none" stroke="#E8B923" stroke-width="2.5" stroke-linecap="round"/>`,
};

export const FRUITS = [
  { id: 'elma', name: { tr: 'elma', en: 'apples' } },
  { id: 'portakal', name: { tr: 'portakal', en: 'oranges' } },
  { id: 'cilek', name: { tr: 'çilek', en: 'strawberries' } },
  { id: 'armut', name: { tr: 'armut', en: 'pears' } },
  { id: 'kiraz', name: { tr: 'kiraz', en: 'cherries' } },
  { id: 'muz', name: { tr: 'muz', en: 'bananas' } },
];
export const fruitSVG = id => svg(FRUIT_BODIES[id], '0 0 80 80');

// ---------- ŞEKİLLER ----------
export const SHAPES = [
  { id: 'daire', name: { tr: 'Daire', en: 'Circle' }, color: '#FF6F59' },
  { id: 'kare', name: { tr: 'Kare', en: 'Square' }, color: '#3FA7D6' },
  { id: 'ucgen', name: { tr: 'Üçgen', en: 'Triangle' }, color: '#FFC93C' },
  { id: 'yildiz', name: { tr: 'Yıldız', en: 'Star' }, color: '#9B6DD6' },
  { id: 'kalp', name: { tr: 'Kalp', en: 'Heart' }, color: '#FF5C8A' },
  { id: 'dikdortgen', name: { tr: 'Dikdörtgen', en: 'Rectangle' }, color: '#5BBA6F' },
];
const SHAPE_PATHS = {
  daire: `<circle cx="50" cy="50" r="38"/>`,
  kare: `<rect x="14" y="14" width="72" height="72" rx="8"/>`,
  ucgen: `<path d="M50 10 L90 84 H10 Z"/>`,
  yildiz: `<polygon points="${starPoints(50, 53, 5, 42, 19)}"/>`,
  kalp: `<path d="M50 86 C20 66 8 48 12 32 C16 16 40 12 50 30 C60 12 84 16 88 32 C92 48 80 66 50 86Z"/>`,
  dikdortgen: `<rect x="8" y="26" width="84" height="48" rx="8"/>`,
};
export function shapeSVG(id, fill, mode = 'solid') {
  const st = mode === 'hole'
    ? `fill="rgba(59,44,90,.10)" stroke="${INK}" stroke-width="4" stroke-dasharray="9 8" stroke-linejoin="round"`
    : `fill="${fill}" stroke="${INK}" stroke-width="4" stroke-linejoin="round"`;
  const shine = mode === 'solid' ? `<ellipse cx="34" cy="34" rx="8" ry="5" fill="#fff" opacity=".35" transform="rotate(-30 34 34)"/>` : '';
  return svg(`<g ${st}>${SHAPE_PATHS[id]}</g>${shine}`, '0 0 100 100');
}

// ---------- BALON ----------
export function balloonSVG(color) {
  return svg(`
    <path d="M50 118 q-6 14 4 26 q8 10 -2 22" fill="none" stroke="${INK}" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M50 8 C76 8 92 30 90 56 C88 86 66 108 50 110 C34 108 12 86 10 56 C8 30 24 8 50 8Z" fill="${color}" ${S}/>
    <path d="M44 109 h12 l-3 9 h-6z" fill="${color}" ${S2}/>
    <ellipse cx="32" cy="38" rx="8" ry="15" fill="#fff" opacity=".45" transform="rotate(22 32 38)"/>`, '0 0 100 170');
}

// ---------- MASKOT: Pofi ----------
export function mascotSVG() {
  return svg(`
    <ellipse class="foot" cx="58" cy="156" rx="15" ry="8" fill="#E85D44" ${S}/>
    <ellipse class="foot" cx="102" cy="156" rx="15" ry="8" fill="#E85D44" ${S}/>
    <ellipse class="arm arm-l" cx="22" cy="106" rx="9" ry="13" fill="#FF7A5C" ${S} transform="rotate(35 22 106)"/>
    <ellipse class="arm arm-r" cx="138" cy="106" rx="9" ry="13" fill="#FF7A5C" ${S} transform="rotate(-35 138 106)"/>
    <path d="M80 38 C118 38 140 64 140 100 C140 136 112 156 80 156 C48 156 20 136 20 100 C20 64 42 38 80 38Z" fill="#FF7A5C" ${S}/>
    <ellipse cx="80" cy="122" rx="34" ry="24" fill="#FFC2A8"/>
    <g class="sprout">
      <path d="M80 40 q-2 -14 4 -22" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>
      <path d="M84 19 q18 -14 30 0 q-14 12 -30 0z" fill="#5BBA6F" ${S}/>
      <path d="M82 23 q-16 -12 -27 2 q12 10 27 -2z" fill="#7ACB5A" ${S}/>
    </g>
    <g class="blink">
      <ellipse cx="60" cy="86" rx="14" ry="16" fill="#fff" ${S}/><ellipse cx="100" cy="86" rx="14" ry="16" fill="#fff" ${S}/>
      <ellipse class="pupil" cx="61" cy="89" rx="7.5" ry="9" fill="${INK}"/><ellipse class="pupil" cx="101" cy="89" rx="7.5" ry="9" fill="${INK}"/>
      <circle cx="64.5" cy="84.5" r="2.8" fill="#fff"/><circle cx="104.5" cy="84.5" r="2.8" fill="#fff"/>
    </g>
    <ellipse cx="44" cy="110" rx="9" ry="5.5" fill="#FF4F6D" opacity=".35"/><ellipse cx="116" cy="110" rx="9" ry="5.5" fill="#FF4F6D" opacity=".35"/>
    <path class="mouth-smile" d="M68 108 q12 13 24 0" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>
    <ellipse class="mouth-open" cx="80" cy="112" rx="9" ry="7.5" fill="#8E2C48" ${S2}/>`, '0 0 160 170', 'Pofi');
}

// ---------- ARAYÜZ İKONLARI ----------
export const ICON = {
  home: svg(`<path d="M14 46 L50 16 L86 46" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M24 44 V82 H76 V44" fill="none" stroke="currentColor" stroke-width="9" stroke-linejoin="round"/>
    <rect x="42" y="58" width="16" height="24" rx="3" fill="currentColor"/>`, '0 0 100 100'),
  speaker: svg(`<path d="M16 38 H32 L52 20 V80 L32 62 H16 Z" fill="currentColor" stroke="currentColor" stroke-width="6" stroke-linejoin="round"/>
    <path d="M64 36 q10 14 0 28 M74 26 q18 24 0 48" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>`, '0 0 100 100'),
  star: svg(`<polygon points="${starPoints(50, 54, 5, 44, 21)}" fill="#FFC93C" stroke="${INK}" stroke-width="5" stroke-linejoin="round"/>
    <ellipse cx="38" cy="40" rx="6" ry="4" fill="#fff" opacity=".6" transform="rotate(-30 38 40)"/>`, '0 0 100 100'),
  album: svg(`<rect x="16" y="14" width="68" height="74" rx="10" fill="#5BBA6F" stroke="${INK}" stroke-width="5"/>
    <rect x="16" y="14" width="14" height="74" rx="6" fill="#3E9B57" stroke="${INK}" stroke-width="5"/>
    <circle cx="58" cy="44" r="13" fill="#FFC93C" stroke="${INK}" stroke-width="4"/><path d="M42 72 h32" stroke="#fff" stroke-width="5" stroke-linecap="round"/>`, '0 0 100 100'),
  gear: svg(`<g fill="currentColor"><circle cx="50" cy="50" r="26"/>${[0, 45, 90, 135, 180, 225, 270, 315].map(a => `<rect x="43" y="10" width="14" height="20" rx="4" transform="rotate(${a} 50 50)"/>`).join('')}</g>
    <circle cx="50" cy="50" r="11" fill="#fff"/>`, '0 0 100 100'),
  play: svg(`<path d="M34 20 L82 50 L34 80 Z" fill="currentColor" stroke="currentColor" stroke-width="10" stroke-linejoin="round"/>`, '0 0 100 100'),
  close: svg(`<path d="M24 24 L76 76 M76 24 L24 76" stroke="currentColor" stroke-width="12" stroke-linecap="round"/>`, '0 0 100 100'),
  lock: svg(`<rect x="22" y="44" width="56" height="44" rx="8" fill="currentColor"/><path d="M34 46 V32 a16 16 0 0 1 32 0 V46" fill="none" stroke="currentColor" stroke-width="9"/>`, '0 0 100 100'),
};

// Ada bölgeleri için rozet ikonları
export const ZONE_ICON = {
  hayvanlar: animalSVG('kedi'),
  balonlar: svg(`<path d="M50 74 q-4 10 2 18" fill="none" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>
    <path d="M50 10 C70 10 80 26 78 42 C76 62 60 72 50 74 C40 72 24 62 22 42 C20 26 30 10 50 10Z" fill="#FF6F59" ${S}/>
    <ellipse cx="38" cy="30" rx="5" ry="10" fill="#fff" opacity=".5" transform="rotate(22 38 30)"/>`, '0 0 100 100'),
  sayilar: svg(`<circle cx="50" cy="52" r="40" fill="#FFC93C" ${S}/><text x="50" y="66" text-anchor="middle" font-family="Fredoka, system-ui" font-weight="700" font-size="40" fill="${INK}">123</text>`, '0 0 100 100'),
  sekiller: svg(`<path d="M30 14 L54 54 H6 Z" fill="#FFC93C" ${S}/><circle cx="70" cy="34" r="20" fill="#3FA7D6" ${S}/>
    <rect x="34" y="56" width="34" height="34" rx="5" fill="#FF6F59" ${S}/>`, '0 0 100 100'),
  hafiza: svg(`<rect x="10" y="22" width="44" height="60" rx="8" fill="#9B6DD6" ${S} transform="rotate(-10 32 52)"/>
    <rect x="44" y="18" width="44" height="60" rx="8" fill="#fff" ${S} transform="rotate(8 66 48)"/>
    <polygon points="${starPoints(66, 50, 5, 14, 6)}" fill="#FFC93C" ${S2} transform="rotate(8 66 48)"/>`, '0 0 100 100'),
  muzik: svg(`<path d="M38 74 V22 L80 12 V64" fill="none" stroke="${INK}" stroke-width="7" stroke-linejoin="round"/>
    <ellipse cx="28" cy="76" rx="14" ry="11" fill="#FF5C8A" ${S}/><ellipse cx="70" cy="66" rx="14" ry="11" fill="#3FA7D6" ${S}/>`, '0 0 100 100'),
};
