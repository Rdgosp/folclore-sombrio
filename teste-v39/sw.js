const P = 'bramore:' + new URL(self.registration.scope).pathname + ':', V = P + 'f6c5527dcd', FILES = ["./","./CONTRATO-3D.md","./assets/arena.webp","./assets/capa-sm.webp","./assets/capa.webp","./assets/chao_cor.webp","./assets/chao_nrm.webp","./assets/chao_rug.webp","./assets/detalhe.jpg","./assets/index-CzDvWUF8.js","./assets/logo.webp","./assets/mapa-sm.webp","./assets/mapa.webp","./assets/menu-sm.webp","./assets/menu.webp","./assets/modelos/boitata.glb","./assets/modelos/boto.glb","./assets/modelos/boto_animal.glb","./assets/modelos/boto_hibrido.glb","./assets/modelos/cabecadecuia.glb","./assets/modelos/cenario.glb","./assets/modelos/cheia.glb","./assets/modelos/cuca.glb","./assets/modelos/curupira.glb","./assets/modelos/curupira_fx.glb","./assets/modelos/estio.glb","./assets/modelos/iara.glb","./assets/modelos/impacto_fx.glb","./assets/modelos/juiz.glb","./assets/modelos/lobisomem.glb","./assets/modelos/maedoouro.glb","./assets/modelos/mapinguari.glb","./assets/modelos/mapinguari_fx.glb","./assets/modelos/mapinguari_particulas.png","./assets/modelos/matinta.glb","./assets/modelos/mula.glb","./assets/modelos/saci.glb","./assets/modelos/velador.glb","./icons/apple-180.png","./icons/icon-192.png","./icons/icon-512.png","./icons/maskable-512.png","./index.html","./manifest.webmanifest","./media/LEIA-ME.md","./media/audio/sfx/ORIGEM-E-LICENCA.md","./media/audio/sfx/combate/golpe_ar.m4a","./media/audio/sfx/combate/golpe_ar_1.m4a","./media/audio/sfx/combate/impacto_leve.m4a","./media/audio/sfx/combate/impacto_medio.m4a","./media/audio/sfx/combate/impacto_medio_1.m4a","./media/audio/sfx/combate/impacto_pesado.m4a","./media/audio/sfx/combate/impacto_pesado_1.m4a","./media/audio/sfx/defesa/bloqueio.m4a","./media/audio/sfx/defesa/bloqueio_1.m4a","./media/audio/sfx/defesa/defesa_perfeita.m4a","./media/audio/sfx/elementos/fogo_impacto.m4a","./media/audio/sfx/elementos/fogo_lancamento.m4a","./media/faces/boitata.webp","./media/faces/boto.webp","./media/faces/cabecadecuia.webp","./media/faces/cuca.webp","./media/faces/curupira.webp","./media/faces/iara.webp","./media/faces/lobisomem.webp","./media/faces/maedoouro.webp","./media/faces/mapinguari.webp","./media/faces/matinta.webp","./media/faces/mula.webp","./media/faces/saci.webp","./media/portraits/boitata.webp","./media/portraits/boto.webp","./media/portraits/cabecadecuia.webp","./media/portraits/cuca.webp","./media/portraits/curupira.webp","./media/portraits/iara.webp","./media/portraits/lobisomem.webp","./media/portraits/maedoouro.webp","./media/portraits/mapinguari.webp","./media/portraits/matinta.webp","./media/portraits/mula.webp","./media/portraits/saci.webp","./pipeline/GUIA-PERSONAGEM.md","./pipeline/boto.json","./pipeline/boto_hibrido.json","./pipeline/build_rig.py","./pipeline/glbtex.py","./pipeline/mapinguari.json","./pipeline/preparar_personagem.py","./pipeline/render.py"];
self.addEventListener('install', (e) => e.waitUntil(caches.open(V).then((c) => c.addAll(FILES.map((f) => new Request(f, { cache: 'reload' })))).then(() => self.skipWaiting())));
self.addEventListener('activate', (e) => e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith(P) && k !== V).map((k) => caches.delete(k)))).then(() => self.clients.claim())));
// Pedido com Range (áudio/vídeo por streaming, exigido pelo Safari): responde 206 com o trecho, nunca 200 com o arquivo inteiro.
const parcial = (full, range) => full.arrayBuffer().then((buf) => {
  const m = /bytes=([0-9]*)-([0-9]*)/.exec(range || ''), n = buf.byteLength;
  let a = m && m[1] ? +m[1] : 0, b = m && m[2] ? +m[2] : n - 1;
  if (m && !m[1] && m[2]) { a = Math.max(0, n - +m[2]); b = n - 1; }
  if (a >= n) return new Response(null, { status: 416, headers: { 'Content-Range': 'bytes */' + n } });
  b = Math.min(b, n - 1);
  return new Response(buf.slice(a, b + 1), { status: 206, headers: { 'Content-Type': full.headers.get('Content-Type') || 'audio/mp4', 'Content-Range': 'bytes ' + a + '-' + b + '/' + n, 'Content-Length': String(b - a + 1), 'Accept-Ranges': 'bytes' } });
});
self.addEventListener('fetch', (e) => {
  const r = e.request; if (r.method !== 'GET' || !r.url.startsWith('http')) return;
  const range = r.headers.get('range');
  if (range || r.url.includes('/media/audio/musica/')) {
    // streaming: trecho do cache se houver o arquivo inteiro, senão direto da rede (resposta parcial não vai para o cache)
    e.respondWith(caches.open(V).then((c) => c.match(r, { ignoreSearch: true })).then((hit) => (hit ? (range ? parcial(hit, range) : hit) : fetch(r))));
    return;
  }
  const nav = r.mode === 'navigate';
  e.respondWith(caches.open(V).then((c) => c.match(r, { ignoreSearch: nav })).then((hit) => hit || fetch(r).then((res) => {
    if (res && res.status === 200) { const copy = res.clone(); caches.open(V).then((c) => c.put(r, copy)).catch(() => {}); }
    else if (res && res.type === 'opaque') { const copy = res.clone(); caches.open(V).then((c) => c.put(r, copy)).catch(() => {}); }
    return res;
  }).catch(() => (nav ? caches.open(V).then((c) => c.match('./')) : Response.error()))));
});
