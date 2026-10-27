// Kalıcı ilerleme: yıldızlar, çıkartmalar, ayarlar (localStorage, hata toleranslı)
const KEY = 'macera.v1';

const defaults = () => ({
  stars: 0,
  stickers: [],
  plays: {},
  settings: { lang: 'tr', sound: true, voice: true, rate: 0.95 },
});

function load() {
  const base = defaults();
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || '{}');
    return { ...base, ...raw, settings: { ...base.settings, ...(raw.settings || {}) } };
  } catch {
    return base;
  }
}

export const store = load();

export function save() {
  try { localStorage.setItem(KEY, JSON.stringify(store)); } catch { /* gizli sekme vb. */ }
}

export function addStars(n) {
  store.stars += n;
  save();
}

export function markPlayed(id) {
  store.plays[id] = (store.plays[id] || 0) + 1;
  save();
}

export function resetProgress() {
  const keep = store.settings;
  Object.assign(store, defaults(), { settings: keep });
  save();
}
