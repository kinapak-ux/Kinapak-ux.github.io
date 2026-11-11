// Offline helper for the games list: tries the network first so changes show straight away,
// and falls back to the last saved copy when there's no signal. The games under /Claude/
// have their own offline helpers, so this one leaves them alone.
const CACHE = 'family-games-v2';
const SHELL = ['/', '/manifest.webmanifest', '/icon-192.png', '/icon-512.png',
  // the pictures in the games list
  '/icons/backgammon.png', '/icons/battleships.png', '/icons/card-battler.png', '/icons/chess.png', '/icons/echo-wheel.png', '/icons/family-quiz.png', '/icons/go.png', '/icons/hoop-shot.png', '/icons/pixel-gaffer.png', '/icons/scoot-city.png', '/icons/snap-race.png', '/icons/synth.png', '/icons/times-tables.png'];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).catch(() => {}));
});
// All the family games share one storage area, so only clear out this page's own older copies.
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE && k.startsWith(CACHE.replace(/\d+$/, ''))).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin || url.pathname.startsWith('/Claude/')) return;
  e.respondWith(
    fetch(new Request(req.url, { cache: 'no-cache', credentials: 'same-origin' })).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req, {ignoreSearch: true}).then(hit => hit || (req.mode === 'navigate' ? caches.match('/') : Response.error())))
  );
});
