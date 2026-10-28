// İnternetsiz çalışma: tüm dosyalar ilk açılışta önbelleğe alınır.
const VERSION = 'macera-96728aeb5a';
const FILES = [
  "./",
  "index.html",
  "style.css",
  "app.js",
  "manifest.webmanifest",
  "fonts/fredoka-latin-ext-wght-normal.woff2",
  "fonts/fredoka-latin-wght-normal.woff2",
  "icons/apple-touch-icon.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "audio/boing.mp3",
  "audio/chirp.mp3",
  "audio/chomp.mp3",
  "audio/correct.mp3",
  "audio/fanfare.mp3",
  "audio/flip.mp3",
  "audio/music-island.mp3",
  "audio/music-play.mp3",
  "audio/note0.mp3",
  "audio/note1.mp3",
  "audio/note2.mp3",
  "audio/note3.mp3",
  "audio/note4.mp3",
  "audio/note5.mp3",
  "audio/note6.mp3",
  "audio/note7.mp3",
  "audio/paint.mp3",
  "audio/pop.mp3",
  "audio/rise.mp3",
  "audio/snap.mp3",
  "audio/star.mp3",
  "audio/tap.mp3",
  "audio/whoosh.mp3",
  "audio/wrong.mp3"
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(hit => hit || fetch(e.request).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); }
      return res;
    }).catch(() => caches.match('./index.html'))));
});
