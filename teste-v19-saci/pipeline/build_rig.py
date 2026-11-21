"""Cria esqueleto Mixamo + pesos (via proxy fechado por voxel) para a malha do Mapinguari.
blender -b --python build_rig.py -- entrada.glb saida.blend"""
import bpy, bmesh, sys, time
from mathutils import Vector
a=sys.argv[sys.argv.index('--')+1:]; GLB,OUT=a[0],a[1]
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=GLB)
sc=bpy.context.scene
me=[o for o in sc.objects if o.type=='MESH'][0]; me.name='Mapinguari'
for o in list(sc.objects):
    if o is not me and o.type!='MESH': bpy.data.objects.remove(o)
me.parent=None
bpy.context.view_layer.objects.active=me; me.select_set(True)
bpy.ops.object.transform_apply(location=True,rotation=True,scale=True)
DZ=-min(v.co.z for v in me.data.vertices)
for v in me.data.vertices: v.co.z+=DZ          # pés no chão
bm=bmesh.new(); bm.from_mesh(me.data); n0=len(bm.verts); bmesh.ops.remove_doubles(bm,verts=bm.verts,dist=1e-4); bm.to_mesh(me.data); bm.free()
print('[rig] solda',n0,'->',len(me.data.vertices),'DZ',DZ)

C=[('Hips',None,(0,.02,-.03),(0,.02,.08)),('Spine','Hips',(0,.02,.08),(0,.03,.2)),('Spine1','Spine',(0,.03,.2),(0,.04,.32)),
   ('Spine2','Spine1',(0,.04,.32),(0,.03,.46)),('Neck','Spine2',(0,.03,.46),(0,-.01,.56)),('Head','Neck',(0,-.01,.56),(0,-.05,.86))]
L=[('Shoulder','Spine2',(.07,.03,.44),(.28,.04,.42)),('Arm','Shoulder',(.28,.04,.42),(.54,-.02,.36)),('ForeArm','Arm',(.54,-.02,.36),(.75,-.09,.30)),
   ('Hand','ForeArm',(.75,-.09,.30),(.93,-.09,.21)),('UpLeg','Hips',(.16,.02,-.06),(.21,-.03,-.42)),('Leg','UpLeg',(.21,-.03,-.42),(.235,-.01,-.76)),
   ('Foot','Leg',(.235,-.01,-.76),(.255,-.18,-.86)),('ToeBase','Foot',(.255,-.18,-.86),(.26,-.33,-.87))]
B=list(C)
for s,sx in (('Left',1),('Right',-1)):
    for n,p,h,t in L:
        B.append((s+n,(s+p) if p!='Spine2' and p!='Hips' else p,(h[0]*sx,h[1],h[2]),(t[0]*sx,t[1],t[2])))
armd=bpy.data.armatures.new('Armature'); arm=bpy.data.objects.new('Armature',armd); sc.collection.objects.link(arm)
bpy.ops.object.select_all(action='DESELECT'); bpy.context.view_layer.objects.active=arm; arm.select_set(True)
bpy.ops.object.mode_set(mode='EDIT'); eb=armd.edit_bones
for n,p,h,t in B:
    b=eb.new(n); b.head=Vector(h)+Vector((0,0,DZ)); b.tail=Vector(t)+Vector((0,0,DZ))
    if p: b.parent=eb[p]; b.use_connect=(eb[p].tail-b.head).length<1e-4
# roll: eixo Z local aponta para a frente (-Y) no tronco/pernas, e para cima nos braços (padrão consistente p/ poses de teste)
for b in eb:
    if any(k in b.name for k in ('Shoulder','Arm','Hand')): b.align_roll(Vector((0,0,1)))
    else: b.align_roll(Vector((0,-1,0)))
bpy.ops.object.mode_set(mode='OBJECT')

# proxy fechado: voxel remesh -> decimate -> pesos por calor -> transfere para a malha real
px=me.copy(); px.data=me.data.copy(); px.name='proxy'; sc.collection.objects.link(px)
for m in list(px.modifiers): px.modifiers.remove(m)
r=px.modifiers.new('r','REMESH'); r.mode='VOXEL'; r.voxel_size=.012; r.use_smooth_shade=True
bpy.ops.object.select_all(action='DESELECT'); bpy.context.view_layer.objects.active=px; px.select_set(True)
bpy.ops.object.modifier_apply(modifier='r')
# remove ilhas pequenas (pontas de pelo soltas viram bolhas)
bm=bmesh.new(); bm.from_mesh(px.data); seen=set(); isl=[]
for v in bm.verts:
    if v.index in seen: continue
    st=[v]; comp=[]; seen.add(v.index)
    while st:
        x=st.pop(); comp.append(x)
        for e in x.link_edges:
            o=e.other_vert(x)
            if o.index not in seen: seen.add(o.index); st.append(o)
    isl.append(comp)
isl.sort(key=len,reverse=True); kill=[v for c in isl[1:] for v in c]
bmesh.ops.delete(bm,geom=kill,context='VERTS'); bm.to_mesh(px.data); bm.free()
d=px.modifiers.new('d','DECIMATE'); d.ratio=min(1,40000/max(1,len(px.data.polygons))); bpy.ops.object.modifier_apply(modifier='d')
print('[rig] proxy faces',len(px.data.polygons),'ilhas removidas',len(isl)-1)
t=time.time()
bpy.ops.object.select_all(action='DESELECT'); px.select_set(True); arm.select_set(True); bpy.context.view_layer.objects.active=arm
bpy.ops.object.parent_set(type='ARMATURE_AUTO')
empty=sum(1 for v in px.data.vertices if not v.groups)
print('[rig] calor %.1fs'%(time.time()-t),'grupos',len(px.vertex_groups),'proxy sem peso',empty)
# transfere
for g in px.vertex_groups: me.vertex_groups.new(name=g.name)
dt=me.modifiers.new('dt','DATA_TRANSFER'); dt.object=px; dt.use_vert_data=True; dt.data_types_verts={'VGROUP_WEIGHTS'}
dt.vert_mapping='POLYINTERP_NEAREST'; dt.layers_vgroup_select_src='ALL'; dt.layers_vgroup_select_dst='NAME'
bpy.ops.object.select_all(action='DESELECT'); bpy.context.view_layer.objects.active=me; me.select_set(True)
bpy.ops.object.modifier_apply(modifier='dt')
bpy.data.objects.remove(px)
me.parent=arm; am=me.modifiers.new('Armature','ARMATURE'); am.object=arm
print('[rig] malha sem peso',sum(1 for v in me.data.vertices if not v.groups))
bpy.ops.wm.save_as_mainfile(filepath=OUT)
print('[rig] salvo',OUT)
