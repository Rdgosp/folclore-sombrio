const V = 'bramore-v19-a796c9ad83', FILES = ["./","./CONTRATO-3D.md","./assets/arena.webp","./assets/capa-sm.webp","./assets/capa.webp","./assets/index-D5goT6Xk.js","./assets/logo.webp","./assets/mapa-sm.webp","./assets/mapa.webp","./assets/menu-sm.webp","./assets/menu.webp","./icons/apple-180.png","./icons/icon-192.png","./icons/icon-512.png","./icons/maskable-512.png","./index.html","./manifest.webmanifest","./media/LEIA-ME.md","./media/faces/boitata.webp","./media/faces/boto.webp","./media/faces/cabecadecuia.webp","./media/faces/cuca.webp","./media/faces/curupira.webp","./media/faces/iara.webp","./media/faces/lobisomem.webp","./media/faces/maedoouro.webp","./media/faces/mapinguari.webp","./media/faces/matinta.webp","./media/faces/mula.webp","./media/faces/saci.webp","./media/portraits/boitata.webp","./media/portraits/boto.webp","./media/portraits/cabecadecuia.webp","./media/portraits/cuca.webp","./media/portraits/curupira.webp","./media/portraits/iara.webp","./media/portraits/lobisomem.webp","./media/portraits/maedoouro.webp","./media/portraits/mapinguari.webp","./media/portraits/matinta.webp","./media/portraits/mula.webp","./media/portraits/saci.webp"];
self.addEventListener('install', (e) => e.waitUntil(caches.open(V).then((c) => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener('activate', (e) => e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('bramore-v19-') && k !== V).map((k) => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', (e) => {
  const r = e.request; if (r.method !== 'GET' || !r.url.startsWith('http')) return;
  const nav = r.mode === 'navigate';
  e.respondWith(caches.match(r, { ignoreSearch: nav }).then((hit) => hit || fetch(r).then((res) => {
    if (res && (res.ok || res.type === 'opaque')) { const copy = res.clone(); caches.open(V).then((c) => c.put(r, copy)); }
    return res;
  }).catch(() => (nav ? caches.match('./') : Response.error()))));
});
