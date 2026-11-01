// Offline helper: always tries the network first so updates show straight away,
// and falls back to the last saved copy when there's no signal.
const CACHE = 'pixelgaffer-app-v14';
const SHELL = ['./', './data.js', './engine.js', './comps.js', './pixel.js', './minigames.js', './scenarios.js', './features.js', './deadline.js', './ui.js', './privacy.html', './manifest.webmanifest',
  './icon-192.png', './icon-512.png', './fonts/press-start-2p.woff2', './fonts/vt323.woff2'];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).catch(() => {}));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;
  // Our own files skip the browser's cache, so a new version shows up the next time the game opens.
  e.respondWith(
    fetch(new Request(req.url, { cache: 'no-cache', credentials: 'same-origin' })).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req, {ignoreSearch: true}).then(hit => hit || (req.mode === 'navigate' ? caches.match('./') : Response.error())))
  );
});
