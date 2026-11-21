"""
preparar_personagem.py — prepara um personagem riggado (nomes Mixamo) para o jogo.
Roda SEMPRE numa cópia do .blend:
  blender -b COPIA.blend --python preparar_personagem.py -- CONFIG.json SAIDA.blend SAIDA.glb

Passos (cada um liga/desliga no CONFIG):
  1. solda   — funde vértices duplicados (costuras de UV soltas abrem ao dobrar). UVs ficam por canto, nada se perde.
  2. ossos   — cria ossos extras (chapéu, cadeias de tecido/cabelo) a partir de pontos do CONFIG.
  3. pesos   — refaz os pesos do corpo com "Automatic Weights" (calor) só nos ossos de deformação,
               depois troca regiões marcadas (chapéu/cadeias) para os ossos novos; limita a 4 pesos e normaliza.
  4. limpa   — remove restrições de IK e ossos de controle (o jogo pose os ossos direto).
  5. exporta — GLB Y-up, só ossos de deformação, texturas embutidas.
Imprime um relatório de simetria de pesos (Left vs Right) no fim: diferença grande = problema.
"""
import bpy, bmesh, sys, json, math, collections
from mathutils import Vector

argv = sys.argv[sys.argv.index('--') + 1:]
CFG = json.load(open(argv[0], encoding='utf-8')); OUT_BLEND, OUT_GLB = argv[1], argv[2]
sc = bpy.context.scene
arm = next(o for o in sc.objects if o.type == 'ARMATURE')
me = next(o for o in sc.objects if o.type == 'MESH' and o.parent == arm)
log = lambda *a: print('[preparo]', *a)

def ctx(active, sel):
    for o in sc.objects: o.select_set(False)
    for o in sel: o.select_set(True)
    bpy.context.view_layer.objects.active = active

# ---------- 1. solda
if CFG.get('solda', 1e-4):
    bm = bmesh.new(); bm.from_mesh(me.data); n0 = len(bm.verts)
    bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=CFG['solda']); bm.to_mesh(me.data); bm.free(); me.data.update()
    log('solda', n0, '->', len(me.data.vertices))

# ---------- cor da textura por vértice (para separar regiões por cor)
def vert_colors():
    img = next((n.image for m in me.data.materials if m and m.node_tree for n in m.node_tree.nodes if n.type == 'TEX_IMAGE' and n.image), None)
    W, H = img.size; px = img.pixels[:]; uv = me.data.uv_layers.active.data; col = [None] * len(me.data.vertices)
    for p in me.data.polygons:
        for li in p.loop_indices:
            vi = me.data.loops[li].vertex_index
            if col[vi] is None:
                u, v = uv[li].uv; x = int((u % 1) * (W - 1)); y = int((v % 1) * (H - 1)); k = (y * W + x) * 4
                col[vi] = px[k:k + 3]
    return col
COL = vert_colors()
def sat(c): mx = max(c); return 0 if mx < 1e-3 else (mx - min(c)) / mx
def lum(c): return .3 * c[0] + .59 * c[1] + .11 * c[2]

def in_region(i, R):
    """R: {'caixa': [[x0,y0,z0],[x1,y1,z1]], 'sat_min', 'sat_max', 'lum_min', 'lum_max', 'raio_min': [cx, cy, r]}"""
    co = me.data.vertices[i].co; c = COL[i]
    if 'caixa' in R:
        a, b = R['caixa']
        if not all(a[k] <= co[k] <= b[k] for k in range(3)): return False
    if 'sat_min' in R and sat(c) < R['sat_min']: return False
    if 'sat_max' in R and sat(c) > R['sat_max']: return False
    if 'lum_min' in R and lum(c) < R['lum_min']: return False
    if 'lum_max' in R and lum(c) > R['lum_max']: return False
    if 'excluir_pesos' in R:  # {'LeftHand': .05}: pula vértice que já pertence a esse osso (mão perto da faixa)
        gw = {me.vertex_groups[e.group].name: e.weight for e in me.data.vertices[i].groups}
        if any(gw.get(n, 0) > w for n, w in R['excluir_pesos'].items()): return False
    if 'longe_de' in R:  # [[a], [b], r]: fora de um cilindro (ex.: tirar a mão de perto da faixa)
        a, b, r = Vector(R['longe_de'][0]), Vector(R['longe_de'][1]), R['longe_de'][2]; ab = b - a
        t = max(0, min(1, (co - a).dot(ab) / ab.length_squared))
        if (a + ab * t - co).length < r: return False
    if 'raio_min' in R:
        cx, cy, r = R['raio_min']
        if math.hypot(co.x - cx, co.y - cy) < r: return False
    return True
def region(spec):
    """spec: lista de regiões (OU)."""
    return [i for i in range(len(me.data.vertices)) if any(in_region(i, R) for R in spec)]

# ---------- prévia: pinta as regiões (vermelho/verde/azul...) e renderiza, sem mexer em nada
if '--previa' in argv:
    cores = [(1, .1, .1, 1), (.1, 1, .1, 1), (.2, .4, 1, 1), (1, 1, .1, 1), (1, .2, 1, 1)]
    ca = me.data.color_attributes.new('previa', 'BYTE_COLOR', 'POINT')
    for i in range(len(me.data.vertices)): c = COL[i]; ca.data[i].color = (c[0] * .6, c[1] * .6, c[2] * .6, 1)
    for k, B in enumerate(CFG.get('ossos', [])):
        idx = region(B['regiao']); log('prévia', B['nome'], len(idx))
        for i in idx: ca.data[i].color = cores[k % len(cores)]
    me.data.color_attributes.active_color = ca
    sys.argv = [sys.argv[0], '--', OUT_BLEND]; sc.display.shading.color_type = 'VERTEX'
    import os; exec(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'render.py'), encoding='utf-8').read().replace("sh.color_type = 'TEXTURE'", "sh.color_type = 'VERTEX'"))
    raise SystemExit

# ---------- 2. ossos extras
ctx(arm, [arm]); bpy.ops.object.mode_set(mode='EDIT'); eb = arm.data.edit_bones
for B in CFG.get('ossos', []):
    pts = [Vector(p) for p in B['pontos']]; parent = eb[B['pai']]
    for k in range(len(pts) - 1):
        nm = B['nome'] if len(pts) == 2 else f"{B['nome']}_{k + 1}"
        b = eb.new(nm); b.head, b.tail = pts[k], pts[k + 1]; b.parent = parent; b.use_connect = k > 0; b.use_deform = True; parent = b
    log('osso', B['nome'], len(pts) - 1, 'segmento(s)')
# limpa: ossos de controle (sem deform) saem
for b in [b for b in eb if not b.use_deform and b.name not in CFG.get('manter', ['Root'])]: eb.remove(b)
bpy.ops.object.mode_set(mode='OBJECT')
for pb in arm.pose.bones:
    for c in list(pb.constraints): pb.constraints.remove(c)
    pb.location = (0, 0, 0); pb.rotation_quaternion = (1, 0, 0, 0); pb.rotation_euler = (0, 0, 0); pb.scale = (1, 1, 1)
for n in CFG.get('sem_deform', []):  # ex.: Root e pontas (HeadTop_End) não devem puxar malha
    if n in arm.data.bones: arm.data.bones[n].use_deform = False
    g = me.vertex_groups.get(n)
    if g: me.vertex_groups.remove(g)
extra = {b.name for B in CFG.get('ossos', []) for b in arm.data.bones if b.name == B['nome'] or b.name.startswith(B['nome'] + '_')}

# ---------- 3. pesos automáticos (só ossos do corpo; os extras recebem pesos por região)
# AVISO: em malhas de IA (camadas sobrepostas: paletó/colete/camisa) o cálculo por calor falha e cria espetos.
# Padrão = manter os pesos que vieram do rig e só corrigir defeitos medidos (abaixo). Use "repesar": true só em malha limpa.
if CFG.get('repesar', False):
    for g in list(me.vertex_groups): me.vertex_groups.remove(g)
    for m in [m for m in me.modifiers if m.type == 'ARMATURE']: me.modifiers.remove(m)
    for n in extra: arm.data.bones[n].use_deform = False  # o calor ignora os extras
    ctx(arm, [me, arm]); bpy.ops.object.parent_set(type='ARMATURE_AUTO')
    for n in extra: arm.data.bones[n].use_deform = True
    log('pesos automáticos ok; grupos', len(me.vertex_groups))

def set_only(vi, gname, w=1.0, blend=False):
    """Troca o peso do vértice para o grupo gname. blend=True mistura (w) com os pesos antigos."""
    g = me.vertex_groups.get(gname) or me.vertex_groups.new(name=gname)
    v = me.data.vertices[vi]
    if not blend:
        for e in list(v.groups): me.vertex_groups[e.group].remove([vi])
        g.add([vi], 1.0, 'REPLACE'); return
    for e in list(v.groups): me.vertex_groups[e.group].add([vi], e.weight * (1 - w), 'REPLACE')
    g.add([vi], w, 'ADD')

def weights(vi): return {me.vertex_groups[e.group].name: e.weight for e in me.data.vertices[vi].groups}
def put(vi, W):
    for e in list(me.data.vertices[vi].groups): me.vertex_groups[e.group].remove([vi])
    tot = sum(W.values()) or 1
    for n, w in W.items():
        if w > 1e-4: (me.vertex_groups.get(n) or me.vertex_groups.new(name=n)).add([vi], w / tot, 'REPLACE')

# 3b. lados: osso Left* não puxa vértice do lado direito (e vice-versa); rampa de 'lados' metros no meio
lado = CFG.get('corrigir_lados')
if lado:
    fix = 0; z0, z1 = CFG.get('lados_z', [-9, 9])  # só nessa faixa de altura (pés podem cruzar o meio)
    for v in me.data.vertices:
        if not z0 <= v.co.z <= z1: continue
        W = weights(v.index); ch = False
        for n in list(W):
            side = 1 if n.startswith('Left') else -1 if n.startswith('Right') else 0
            if not side: continue
            k = max(0, min(1, (side * v.co.x + lado) / (2 * lado)))  # 1 do lado certo, 0 do errado
            if k < 1: W[n] *= k; ch = True
        if ch:
            if sum(W.values()) < 1e-3: W = {CFG.get('osso_centro', 'Hips'): 1}
            put(v.index, W); fix += 1
    log('lados corrigidos', fix)

# 3c. tetos: o osso só pesa até um pouco acima da própria articulação; o excesso vai para o pai
for n, (pai, folga, rampa) in CFG.get('tetos', {}).items():
    zb = arm.data.bones[n].head_local.z; fix = 0
    for v in me.data.vertices:
        W = weights(v.index)
        if n in W and v.co.z > zb + folga:
            k = max(0, 1 - (v.co.z - zb - folga) / rampa); tirar = W[n] * (1 - k)
            W[n] -= tirar; W[pai] = W.get(pai, 0) + tirar; put(v.index, W); fix += 1
    log('teto', n, '->', pai, fix)

for B in CFG.get('ossos', []):
    idx = region(B['regiao']); pts = [Vector(p) for p in B['pontos']]
    segs = [(f"{B['nome']}_{k + 1}" if len(pts) > 2 else B['nome'], pts[k], pts[k + 1]) for k in range(len(pts) - 1)]
    total = sum((b - a).length for _, a, b in segs)
    for vi in idx:
        co = me.data.vertices[vi].co
        # segmento mais próximo + quanto o vértice "pende" ao longo da cadeia (raiz presa, ponta solta)
        best = None
        for nm, a, b in segs:
            ab = b - a; t = max(0, min(1, (co - a).dot(ab) / ab.length_squared)); d = (a + ab * t - co).length
            if best is None or d < best[0]: best = (d, nm, t)
        _, nm, t = best
        if B.get('rigido'): set_only(vi, nm)
        else:
            k = [s[0] for s in segs].index(nm); s = (sum((segs[j][2] - segs[j][1]).length for j in range(k)) + t * (segs[k][2] - segs[k][1]).length) / total
            set_only(vi, nm, min(1, B.get('peso_raiz', .25) + s * 1.5), blend=True)
    log('região', B['nome'], len(idx), 'vértices')

# limite 4 pesos + normaliza (suaviza antes, agora que a malha está soldada)
ctx(me, [me]); bpy.ops.object.mode_set(mode='WEIGHT_PAINT')
if CFG.get('suavizar'):
    bpy.ops.object.vertex_group_smooth(group_select_mode='BONE_DEFORM', factor=.5, repeat=CFG['suavizar'])
bpy.ops.object.vertex_group_clean(group_select_mode='ALL', limit=.01)
bpy.ops.object.vertex_group_limit_total(group_select_mode='ALL', limit=4)
bpy.ops.object.vertex_group_normalize_all(group_select_mode='ALL', lock_active=False)
bpy.ops.object.mode_set(mode='OBJECT')

# ---------- relatório de simetria
vg = {g.index: g.name for g in me.vertex_groups}; cnt = collections.Counter(); leak = collections.Counter(); zero = 0
for v in me.data.vertices:
    if not v.groups: zero += 1
    for e in v.groups:
        n = vg[e.group]
        if e.weight > .5: cnt[n] += 1
        if e.weight > .05 and ((n.startswith('Left') and v.co.x < -.06) or (n.startswith('Right') and v.co.x > .06)): leak[n] += 1
log('vértices sem peso', zero)
for n in sorted(cnt):
    if n.startswith('Left'): r = n.replace('Left', 'Right', 1); log(f'  {n:16}{cnt[n]:6}  {r:17}{cnt.get(r, 0):6}')
    elif not n.startswith('Right'): log(f'  {n:16}{cnt[n]:6}')
log('vazamento lado errado', dict(leak))

# ---------- animações antigas: tiram (feitas para o rig antigo com IK)
if CFG.get('apagar_acoes', True):
    arm.animation_data_clear()
    for a in list(bpy.data.actions): bpy.data.actions.remove(a)

bpy.ops.wm.save_as_mainfile(filepath=OUT_BLEND)
ctx(arm, [arm, me])
bpy.ops.export_scene.gltf(filepath=OUT_GLB, export_format='GLB', use_selection=True, export_yup=True, export_apply=False,
                          export_def_bones=True, export_animations=False, export_skins=True, export_morph=True, export_image_format='AUTO')
log('exportado', OUT_GLB)
