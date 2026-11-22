"""Renderiza vistas ortográficas (frente, lado, costas) do primeiro MESH. Uso:
blender -b arq.blend --python render.py -- saida_prefixo [pose]
pose: nome de uma pose de teste (ver POSES) aplicada no armature antes de renderizar."""
import bpy, sys, math
from mathutils import Vector, Euler
argv = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
out = argv[0] if argv else '//render'
pose = argv[1] if len(argv) > 1 else None
sc = bpy.context.scene
arm = next((o for o in sc.objects if o.type == 'ARMATURE'), None)
POSES = {
  'soco': {'RightArm': (0, 0, -80), 'RightForeArm': (0, 0, -10), 'LeftArm': (60, 0, 40), 'LeftForeArm': (0, 0, 100), 'Spine1': (0, -20, 0), 'LeftUpLeg': (-30, 0, 0), 'LeftLeg': (40, 0, 0)},
  'chute': {'RightUpLeg': (-85, 0, 0), 'RightLeg': (20, 0, 0), 'LeftArm': (0, 0, 50), 'RightArm': (0, 0, -50), 'Spine': (15, 0, 0)},
  'agacha': {'LeftUpLeg': (-70, 0, 0), 'LeftLeg': (100, 0, 0), 'RightUpLeg': (-70, 0, 0), 'RightLeg': (100, 0, 0), 'LeftFoot': (-30, 0, 0), 'RightFoot': (-30, 0, 0), 'Spine': (25, 0, 0)},
  'bracos': {'LeftArm': (0, 0, 70), 'RightArm': (0, 0, -70), 'LeftForeArm': (0, 0, 90), 'RightForeArm': (0, 0, -90), 'Head': (0, 30, 0)},
}
if arm and pose:
    arm.animation_data_clear()
    for c in [c for pb in arm.pose.bones for c in pb.constraints]: c.mute = True
    for n, (x, y, z) in POSES[pose].items():
        pb = arm.pose.bones.get(n)
        if pb: pb.rotation_mode = 'XYZ'; pb.rotation_euler = Euler((math.radians(x), math.radians(y), math.radians(z)))
bpy.context.view_layer.update()
sc.render.engine = 'BLENDER_WORKBENCH'
sh = sc.display.shading; sh.light = 'STUDIO'; sh.color_type = 'TEXTURE'; sh.show_cavity = False
sc.render.resolution_x, sc.render.resolution_y = 520, 760; sc.render.film_transparent = False
sc.world and setattr(sc.world, 'color', (.25, .25, .28))
for o in sc.objects:
    if o.type == 'ARMATURE': o.hide_render = True
cam = bpy.data.objects.new('Cam', bpy.data.cameras.new('Cam')); sc.collection.objects.link(cam); sc.camera = cam
cam.data.type = 'ORTHO'; cam.data.ortho_scale = 2.0
for name, pos, rot in [('frente', (0, -5, .9), (90, 0, 0)), ('lado', (5, 0, .9), (90, 0, 90)), ('costas', (0, 5, .9), (90, 0, 180))]:
    cam.location = pos; cam.rotation_euler = Euler([math.radians(a) for a in rot])
    sc.render.filepath = f'{out}_{name}.png'; bpy.ops.render.render(write_still=True)
print('ok render')
