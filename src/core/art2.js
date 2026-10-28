// Ek çizimler: duygular, araçlar, hava/mevsim. Hepsi bu proje için çizildi.
import { INK } from './art.js';

const S = `stroke="${INK}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"`;
const S2 = `stroke="${INK}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"`;
const svg = (body, vb = '0 0 120 120', label = '') =>
  `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" class="art"${label ? ` role="img" aria-label="${label}"` : ' aria-hidden="true"'}>${body}</svg>`;

// ---------- DUYGULAR ----------
// Ortak sevimli yüz; ifade sadece göz + ağız + aksesuarla değişir
const face = (inner, tint = '#FFD98E') => `
  <circle cx="60" cy="60" r="46" fill="${tint}" ${S}/>
  ${inner}`;

const EMOTION_FACES = {
  mutlu: face(`
    <path d="M36 50 q8 -8 16 0 M68 50 q8 -8 16 0" fill="none" ${S}/>
    <ellipse cx="44" cy="56" rx="6" ry="7" fill="${INK}"/><ellipse cx="76" cy="56" rx="6" ry="7" fill="${INK}"/>
    <circle cx="46" cy="54" r="2.2" fill="#fff"/><circle cx="78" cy="54" r="2.2" fill="#fff"/>
    <path d="M40 74 q20 20 40 0 q-20 8 -40 0z" fill="#B3345A" ${S}/>
    <ellipse cx="32" cy="70" rx="8" ry="5" fill="#FF8FA3" opacity=".6"/><ellipse cx="88" cy="70" rx="8" ry="5" fill="#FF8FA3" opacity=".6"/>`),
  uzgun: face(`
    <path d="M32 54 q10 -10 20 -4 M88 54 q-10 -10 -20 -4" fill="none" ${S}/>
    <ellipse cx="44" cy="64" rx="6.5" ry="7.5" fill="${INK}"/><ellipse cx="76" cy="64" rx="6.5" ry="7.5" fill="${INK}"/>
    <circle cx="46" cy="62" r="2.4" fill="#fff"/><circle cx="78" cy="62" r="2.4" fill="#fff"/>
    <path d="M44 90 q16 -14 32 0" fill="none" ${S}/>
    <path class="tear" d="M40 74 q-6 11 0 15 q6 -4 0 -15z" fill="#6EC6E8" ${S2}/>
    <path class="tear" d="M80 78 q-5 9 0 12 q5 -3 0 -12z" fill="#6EC6E8" ${S2}/>`, '#A9C8E8'),
  kizgin: face(`
    <path d="M32 44 l20 10 M88 44 l-20 10" fill="none" ${S}/>
    <ellipse cx="44" cy="63" rx="6" ry="6.5" fill="${INK}"/><ellipse cx="76" cy="63" rx="6" ry="6.5" fill="${INK}"/>
    <path d="M44 86 q16 -10 32 0" fill="none" ${S}/>
    <path d="M26 30 q4 -10 10 -12 M60 24 q0 -10 2 -14 M94 30 q-4 -10 -10 -12" fill="none" ${S}/>`, '#FF9C8A'),
  saskin: face(`
    <circle cx="44" cy="56" r="11" fill="#fff" ${S2}/><circle cx="76" cy="56" r="11" fill="#fff" ${S2}/>
    <circle cx="44" cy="56" r="5.5" fill="${INK}"/><circle cx="76" cy="56" r="5.5" fill="${INK}"/>
    <path d="M30 40 q10 -8 20 -4 M90 40 q-10 -8 -20 -4" fill="none" ${S}/>
    <ellipse cx="60" cy="84" rx="11" ry="14" fill="#B3345A" ${S}/>`, '#FFE6A3'),
  korkmus: face(`
    <circle cx="44" cy="58" r="10" fill="#fff" ${S2}/><circle cx="76" cy="58" r="10" fill="#fff" ${S2}/>
    <circle cx="45" cy="60" r="4.5" fill="${INK}"/><circle cx="77" cy="60" r="4.5" fill="${INK}"/>
    <path d="M30 40 q12 -6 22 -2 M90 40 q-12 -6 -22 -2" fill="none" ${S}/>
    <path d="M40 86 q6 -9 12 0 q6 9 12 0 q6 -9 12 0" fill="none" ${S}/>
    <path d="M18 50 q-9 7 -7 16 M102 50 q9 7 7 16" fill="none" ${S2}/>
    <path d="M26 36 q10 -10 20 -6 M94 36 q-10 -10 -20 -6" fill="none" ${S}/>`, '#D8CDEF'),
  uykulu: face(`
    <path d="M34 58 q10 8 20 0 M66 58 q10 8 20 0" fill="none" ${S}/>
    <ellipse cx="60" cy="84" rx="9" ry="11" fill="#B3345A" ${S}/>
    <ellipse cx="30" cy="72" rx="8" ry="5" fill="#FF8FA3" opacity=".5"/><ellipse cx="90" cy="72" rx="8" ry="5" fill="#FF8FA3" opacity=".5"/>
    <text x="95" y="34" font-family="Fredoka, system-ui" font-weight="700" font-size="26" fill="${INK}">z</text>
    <text x="80" y="18" font-family="Fredoka, system-ui" font-weight="700" font-size="18" fill="${INK}">z</text>`, '#CDE7D0'),
};

export const EMOTIONS = [
  { id: 'mutlu', name: { tr: 'Mutlu', en: 'Happy' }, line: { tr: 'Mutlu olunca gülümseriz!', en: 'When we are happy we smile!' } },
  { id: 'uzgun', name: { tr: 'Üzgün', en: 'Sad' }, line: { tr: 'Üzgün olunca ağlayabiliriz. Sarılmak iyi gelir.', en: 'When we are sad we may cry. A hug helps.' } },
  { id: 'kizgin', name: { tr: 'Kızgın', en: 'Angry' }, line: { tr: 'Kızınca derin nefes alırız.', en: 'When we are angry we take a deep breath.' } },
  { id: 'saskin', name: { tr: 'Şaşkın', en: 'Surprised' }, line: { tr: 'Şaşırınca gözlerimiz kocaman olur!', en: 'When we are surprised our eyes get big!' } },
  { id: 'korkmus', name: { tr: 'Korkmuş', en: 'Scared' }, line: { tr: 'Korkunca birine söyleriz, yanımızda olsun.', en: 'When we are scared we tell someone to stay close.' } },
  { id: 'uykulu', name: { tr: 'Uykulu', en: 'Sleepy' }, line: { tr: 'Uykumuz gelince esneriz.', en: 'When we are sleepy we yawn.' } },
];
export const emotionSVG = (id, label = '') => svg(`<g class="creature">${EMOTION_FACES[id]}</g>`, '0 0 120 120', label);

// ---------- ARAÇLAR ----------
const wheel = (cx, cy, r) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${INK}"/><circle cx="${cx}" cy="${cy}" r="${r * 0.45}" fill="#E8E4F0" ${S2}/>`;

const VEHICLE_BODIES = {
  araba: `<path d="M24 64 L38 42 H78 L96 64 Z" fill="#8FD6F5" ${S}/>
    <path d="M12 86 q0 -22 16 -24 h64 q16 2 16 24 v8 q0 6 -8 6 H20 q-8 0 -8 -6z" fill="#FF5A4E" ${S}/>
    <path d="M42 62 V46 h14 v16z" fill="#DFF4FF" ${S2}/><path d="M64 62 V46 h12 l12 16z" fill="#DFF4FF" ${S2}/>
    ${wheel(34, 98, 13)}${wheel(88, 98, 13)}
    <circle cx="104" cy="74" r="6" fill="#FFE38A" ${S2}/>`,
  otobus: `<rect x="8" y="26" width="104" height="62" rx="12" fill="#FFC93C" ${S}/>
    <rect x="18" y="38" width="24" height="20" rx="4" fill="#DFF4FF" ${S2}/>
    <rect x="48" y="38" width="24" height="20" rx="4" fill="#DFF4FF" ${S2}/>
    <rect x="78" y="38" width="24" height="20" rx="4" fill="#DFF4FF" ${S2}/>
    <rect x="8" y="66" width="104" height="10" fill="#FF5A4E" ${S2}/>
    ${wheel(34, 94, 13)}${wheel(88, 94, 13)}`,
  itfaiye: `<path d="M6 60 h54 v34 H6z" fill="#E8332A" ${S}/>
    <path d="M60 44 h30 l24 22 v28 H60z" fill="#E8332A" ${S}/>
    <path d="M70 52 h18 l14 14 H70z" fill="#DFF4FF" ${S2}/>
    <path d="M10 56 L62 30" stroke="#C7C2D6" stroke-width="9" stroke-linecap="round"/>
    <path d="M10 56 L62 30" stroke="${INK}" stroke-width="3" fill="none"/>
    ${wheel(30, 98, 13)}${wheel(92, 98, 13)}
    <circle cx="34" cy="26" r="7" fill="#FFC93C" ${S2}/>`,
  ucak: `<path d="M52 54 L22 14 h16 l40 38z" fill="#3FA7D6" ${S}/>
    <path d="M52 70 L22 110 h16 l40 -38z" fill="#2E8FBC" ${S}/>
    <path d="M100 48 L114 22 h10 l-4 30z" fill="#3FA7D6" ${S}/>
    <path d="M6 62 q22 -16 50 -16 h26 q18 0 32 16 q-14 16 -32 16 H56 q-28 0 -50 -16z" fill="#F2F4FA" ${S}/>
    <circle cx="38" cy="60" r="5" fill="#8FD6F5" ${S2}/><circle cx="56" cy="60" r="5" fill="#8FD6F5" ${S2}/><circle cx="74" cy="60" r="5" fill="#8FD6F5" ${S2}/>
    <path d="M100 56 q10 4 14 6 q-4 4 -14 6z" fill="#DDE3EC" ${S2}/>`,
  gemi: `<path d="M8 76 h104 l-16 26 q-4 6 -12 6 H36 q-8 0 -12 -6z" fill="#E8332A" ${S}/>
    <rect x="34" y="44" width="52" height="32" rx="6" fill="#F2F4FA" ${S}/>
    <circle cx="48" cy="60" r="6" fill="#8FD6F5" ${S2}/><circle cx="72" cy="60" r="6" fill="#8FD6F5" ${S2}/>
    <rect x="72" y="18" width="14" height="28" rx="4" fill="#FFC93C" ${S}/>
    <path d="M30 76 h60" stroke="#fff" stroke-width="4" opacity=".6"/>
    <path d="M6 106 q14 -8 28 0 q14 8 28 0 q14 -8 28 0 q14 8 28 0" fill="none" stroke="#3FA7D6" stroke-width="4" stroke-linecap="round"/>`,
  tren: `<path d="M10 40 h44 v48 H10z" fill="#5BBA6F" ${S}/>
    <path d="M54 56 h40 q14 0 14 16 v16 H54z" fill="#5BBA6F" ${S}/>
    <rect x="18" y="50" width="26" height="20" rx="4" fill="#DFF4FF" ${S2}/>
    <rect x="66" y="64" width="22" height="16" rx="4" fill="#DFF4FF" ${S2}/>
    <rect x="18" y="20" width="16" height="20" rx="4" fill="#4A9E5C" ${S}/>
    <circle cx="26" cy="12" r="9" fill="#F2F4FA" opacity=".9" ${S2}/>
    ${wheel(30, 94, 11)}${wheel(66, 94, 10)}${wheel(94, 94, 10)}
    <path d="M6 104 h108" stroke="${INK}" stroke-width="5" stroke-linecap="round"/>`,
  bisiklet: `${wheel(28, 80, 24)}${wheel(92, 80, 24)}
    <path d="M28 80 L52 40 h22 L92 80 M52 40 L62 80 M74 40 h12" fill="none" stroke="#9B6DD6" stroke-width="6" stroke-linecap="round"/>
    <path d="M44 36 h18" stroke="${INK}" stroke-width="6" stroke-linecap="round"/>
    <circle cx="62" cy="80" r="6" fill="#FFC93C" ${S2}/>`,
  helikopter: `<ellipse cx="54" cy="66" rx="34" ry="24" fill="#FFC93C" ${S}/>
    <path d="M84 66 h30 v8 h-30z" fill="#FFC93C" ${S}/>
    <path d="M106 48 h10 v26 h-10z" fill="#FF9A2E" ${S}/>
    <circle cx="42" cy="62" r="12" fill="#DFF4FF" ${S2}/>
    <path d="M12 30 h84" stroke="${INK}" stroke-width="6" stroke-linecap="round"/>
    <path d="M54 30 v12" stroke="${INK}" stroke-width="5"/>
    <path d="M30 96 h50 M36 90 v10 M74 90 v10" fill="none" ${S}/>`,
};

export const VEHICLES = [
  { id: 'araba', name: { tr: 'Araba', en: 'Car' }, acc: { tr: 'Arabayı', en: 'the car' }, sound: { tr: 'Bip bip!', en: 'Beep beep!' } },
  { id: 'otobus', name: { tr: 'Otobüs', en: 'Bus' }, acc: { tr: 'Otobüsü', en: 'the bus' }, sound: { tr: 'Düt düt!', en: 'Honk honk!' } },
  { id: 'itfaiye', name: { tr: 'İtfaiye', en: 'Fire truck' }, acc: { tr: 'İtfaiyeyi', en: 'the fire truck' }, sound: { tr: 'İi-oo ii-oo!', en: 'Wee-ooo!' } },
  { id: 'ucak', name: { tr: 'Uçak', en: 'Airplane' }, acc: { tr: 'Uçağı', en: 'the airplane' }, sound: { tr: 'Vuuuuj!', en: 'Whoosh!' } },
  { id: 'gemi', name: { tr: 'Gemi', en: 'Ship' }, acc: { tr: 'Gemiyi', en: 'the ship' }, sound: { tr: 'Düüüt!', en: 'Toot!' } },
  { id: 'tren', name: { tr: 'Tren', en: 'Train' }, acc: { tr: 'Treni', en: 'the train' }, sound: { tr: 'Çuf çuf!', en: 'Choo choo!' } },
  { id: 'bisiklet', name: { tr: 'Bisiklet', en: 'Bicycle' }, acc: { tr: 'Bisikleti', en: 'the bicycle' }, sound: { tr: 'Zil zil!', en: 'Ring ring!' } },
  { id: 'helikopter', name: { tr: 'Helikopter', en: 'Helicopter' }, acc: { tr: 'Helikopteri', en: 'the helicopter' }, sound: { tr: 'Tak tak tak!', en: 'Whirr whirr!' } },
];
export const vehicleSVG = (id, label = '') => svg(`<g class="vehicle">${VEHICLE_BODIES[id]}</g>`, '0 0 120 120', label);

// ---------- HAVA ----------
const sunRays = () => {
  let r = '';
  for (let i = 0; i < 10; i++) r += `<rect x="56" y="6" width="8" height="16" rx="4" fill="#FFC93C" ${S2} transform="rotate(${i * 36} 60 60)"/>`;
  return r;
};

const WEATHER_BODIES = {
  gunesli: `<g class="spin-slow">${sunRays()}</g><circle cx="60" cy="60" r="30" fill="#FFD43B" ${S}/>
    <circle cx="50" cy="56" r="3.5" fill="${INK}"/><circle cx="70" cy="56" r="3.5" fill="${INK}"/>
    <path d="M50 70 q10 10 20 0" fill="none" ${S}/>
    <ellipse cx="42" cy="66" rx="6" ry="4" fill="#FF8FA3" opacity=".6"/><ellipse cx="78" cy="66" rx="6" ry="4" fill="#FF8FA3" opacity=".6"/>`,
  yagmurlu: `<path d="M30 68 a18 18 0 0 1 5 -35 a23 23 0 0 1 44 -3 a17 17 0 0 1 3 38z" fill="#C9D6E5" ${S}/>
    <g class="drops"><path d="M38 82 q-5 8 0 11 q5 -3 0 -11z" fill="#3FA7D6" ${S2}/>
    <path d="M60 88 q-5 8 0 11 q5 -3 0 -11z" fill="#3FA7D6" ${S2}/>
    <path d="M82 82 q-5 8 0 11 q5 -3 0 -11z" fill="#3FA7D6" ${S2}/></g>`,
  karli: `<path d="M30 62 a18 18 0 0 1 5 -35 a23 23 0 0 1 44 -3 a17 17 0 0 1 3 38z" fill="#E8EEF5" ${S}/>
    <g class="drops" fill="none" ${S2} stroke="#3FA7D6">
    <path d="M36 80 v14 M30 83 l12 8 M42 83 l-12 8"/>
    <path d="M60 88 v16 M53 92 l14 8 M67 92 l-14 8"/>
    <path d="M84 80 v14 M78 83 l12 8 M90 83 l-12 8"/></g>`,
  bulutlu: `<path d="M18 80 a18 18 0 0 1 4 -34 a22 22 0 0 1 42 -2 a16 16 0 0 1 2 36z" fill="#F2F4FA" ${S}/>
    <path d="M62 84 a14 14 0 0 1 4 -27 a18 18 0 0 1 33 -1 a13 13 0 0 1 1 28z" fill="#D7DEEA" ${S}/>`,
  ruzgarli: `<path d="M8 44 h56 a12 12 0 1 0 -11 -16" fill="none" ${S} stroke-width="7"/>
    <path d="M14 66 h74 a13 13 0 1 1 -12 18" fill="none" ${S} stroke-width="7"/>
    <path d="M8 88 h44 a10 10 0 1 0 -9 13" fill="none" ${S} stroke-width="7"/>`,
  firtinali: `<path d="M26 64 a18 18 0 0 1 5 -35 a23 23 0 0 1 44 -3 a17 17 0 0 1 3 38z" fill="#9AA6B8" ${S}/>
    <path d="M58 68 L40 98 h16 l-8 20 26 -32 H58 l10 -18z" fill="#FFD43B" ${S}/>`,
};

export const WEATHER = [
  { id: 'gunesli', name: { tr: 'Güneşli', en: 'Sunny' }, wear: { tr: 'şapka ve gözlük', en: 'a hat and sunglasses' } },
  { id: 'yagmurlu', name: { tr: 'Yağmurlu', en: 'Rainy' }, wear: { tr: 'şemsiye ve çizme', en: 'an umbrella and boots' } },
  { id: 'karli', name: { tr: 'Karlı', en: 'Snowy' }, wear: { tr: 'atkı ve bere', en: 'a scarf and a beanie' } },
  { id: 'bulutlu', name: { tr: 'Bulutlu', en: 'Cloudy' }, wear: { tr: 'hırka', en: 'a cardigan' } },
  { id: 'ruzgarli', name: { tr: 'Rüzgârlı', en: 'Windy' }, wear: { tr: 'mont', en: 'a jacket' } },
  { id: 'firtinali', name: { tr: 'Fırtınalı', en: 'Stormy' }, wear: { tr: 'yağmurluk', en: 'a raincoat' } },
];
export const weatherSVG = (id, label = '') => svg(WEATHER_BODIES[id], '0 0 120 120', label);

// ---------- GİYSİLER (hava oyunu için) ----------
const CLOTHES_BODIES = {
  sapka: `<path d="M16 72 q44 -16 88 0 q-10 10 -44 10 q-34 0 -44 -10z" fill="#FF6F59" ${S}/>
    <path d="M38 70 q4 -40 22 -42 q20 2 22 42 q-22 8 -44 0z" fill="#FF8A75" ${S}/>`,
  gozluk: `<circle cx="36" cy="60" r="22" fill="#3B2C5A" opacity=".75" ${S}/><circle cx="84" cy="60" r="22" fill="#3B2C5A" opacity=".75" ${S}/>
    <path d="M58 58 q6 -6 12 0" fill="none" ${S}/><path d="M14 54 L2 48 M106 54 L118 48" ${S}/>`,
  semsiye: `<path d="M10 60 q50 -52 100 0 q-26 -10 -50 0 q-24 -10 -50 0z" fill="#E8504A" ${S}/>
    <path d="M60 58 v40 q0 12 -14 12 q-10 0 -12 -8" fill="none" ${S} stroke-width="6"/>`,
  cizme: `<path d="M14 22 h22 v38 q0 10 10 13 l10 4 q6 2 6 9 v8 H14z" fill="#FFC93C" ${S}/>
    <path d="M62 22 h22 v38 q0 10 10 13 l10 4 q6 2 6 9 v8 H62z" fill="#FFC93C" ${S}/>
    <path d="M14 82 h48 M62 82 h48" stroke="${INK}" stroke-width="4"/>
    <path d="M14 30 h22 M62 30 h22" stroke="#E8A91F" stroke-width="5"/>`,
  atki: `<path d="M18 30 q42 26 84 0 v24 q-42 26 -84 0z" fill="#9B6DD6" ${S}/>
    <path d="M26 54 q10 28 6 44 h26 q4 -20 -4 -38z" fill="#8559C4" ${S}/>
    <path d="M70 52 q12 24 8 46 h24 q2 -24 -8 -40z" fill="#AE83E0" ${S}/>
    <path d="M30 100 v10 M40 100 v10 M50 100 v10 M80 100 v10 M90 100 v10 M100 100 v10" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>
    <path d="M26 42 q34 20 68 0" fill="none" stroke="#C7A6EC" stroke-width="4"/>`,
  bere: `<path d="M18 80 q42 -14 84 0 v10 q-42 10 -84 0z" fill="#3FA7D6" ${S}/>
    <path d="M26 80 q6 -46 34 -46 q28 0 34 46z" fill="#5BBDE8" ${S}/>
    <circle cx="60" cy="24" r="12" fill="#FFF8EC" ${S}/>`,
  hirka: `<path d="M36 22 h48 l16 14 v62 H20V36z" fill="#5BBA6F" ${S}/>
    <path d="M60 22 L48 44 L60 98 L72 44z" fill="#4A9E5C" ${S2}/>
    <circle cx="60" cy="56" r="3" fill="#FFF8EC"/><circle cx="60" cy="72" r="3" fill="#FFF8EC"/>`,
  mont: `<path d="M34 24 h52 q16 4 20 18 l6 28 -20 6 -4 -12 v34 H32V64l-4 12 -20 -6 6 -28 q4 -14 20 -18z" fill="#FF9A2E" ${S}/>
    <path d="M60 24 v74" stroke="${INK}" stroke-width="4"/>
    <path d="M46 24 q14 14 28 0" fill="none" ${S}/>
    <path d="M36 70 h18 M66 70 h18" stroke="#D97B14" stroke-width="5" stroke-linecap="round"/>
    <circle cx="60" cy="40" r="3.5" fill="#FFF8EC" ${S2}/>`,
  yagmurluk: `<path d="M60 10 q-18 0 -24 14 q-20 6 -22 22 l-4 22 16 4 V98 h68 V72 l16 -4 -4 -22 q-2 -16 -22 -22 q-6 -14 -24 -14z" fill="#FFD43B" ${S}/>
    <path d="M60 24 q-12 -2 -16 -10 q12 -6 32 0 q-4 8 -16 10z" fill="#FFE68A" ${S2}/>
    <path d="M60 30 v68" stroke="${INK}" stroke-width="4"/>
    <path d="M30 68 h12 M78 68 h12" stroke="#E8B923" stroke-width="5" stroke-linecap="round"/>`,
};
export const CLOTHES = {
  sapka: { tr: 'şapka', en: 'hat' }, gozluk: { tr: 'güneş gözlüğü', en: 'sunglasses' },
  semsiye: { tr: 'şemsiye', en: 'umbrella' }, cizme: { tr: 'çizme', en: 'boots' },
  atki: { tr: 'atkı', en: 'scarf' }, bere: { tr: 'bere', en: 'beanie' },
  hirka: { tr: 'hırka', en: 'cardigan' }, mont: { tr: 'mont', en: 'jacket' },
  yagmurluk: { tr: 'yağmurluk', en: 'raincoat' },
};
export const clothesSVG = (id, label = '') => svg(CLOTHES_BODIES[id], '0 0 120 120', label);

// Her havaya uygun giysiler
export const WEATHER_WEAR = {
  gunesli: ['sapka', 'gozluk'], yagmurlu: ['semsiye', 'cizme'], karli: ['atki', 'bere'],
  bulutlu: ['hirka'], ruzgarli: ['mont'], firtinali: ['yagmurluk', 'cizme'],
};
