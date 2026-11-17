const V = 'folclore-a01-fe594fff17', FILES = ["./","./assets/arena.webp","./assets/index-9OfRfh3f.js","./icons/apple-180.png","./icons/icon-192.png","./icons/icon-512.png","./icons/maskable-512.png","./index.html","./manifest.webmanifest","./media/LEIA-ME.md","./media/faces/boto.webp","./media/faces/cuca.webp","./media/faces/curupira.webp","./media/faces/iara.webp","./media/faces/mula.webp","./media/faces/saci.webp","./media/portraits/boto.webp","./media/portraits/cuca.webp","./media/portraits/curupira.webp","./media/portraits/iara.webp","./media/portraits/mula.webp","./media/portraits/saci.webp"];
self.addEventListener('install', (e) => e.waitUntil(caches.open(V).then((c) => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener('activate', (e) => e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('folclore-a01-') && k !== V).map((k) => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', (e) => {
  const r = e.request; if (r.method !== 'GET' || !r.url.startsWith('http')) return;
  const nav = r.mode === 'navigate';
  e.respondWith(caches.match(r, { ignoreSearch: nav }).then((hit) => hit || fetch(r).then((res) => {
    if (res && (res.ok || res.type === 'opaque')) { const copy = res.clone(); caches.open(V).then((c) => c.put(r, copy)); }
    return res;
  }).catch(() => (nav ? caches.match('./') : Response.error()))));
});
