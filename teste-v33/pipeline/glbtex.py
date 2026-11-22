import json, struct, io, sys
from PIL import Image
src, dst, size = sys.argv[1], sys.argv[2], int(sys.argv[3])
b = open(src, 'rb').read()
jl = struct.unpack_from('<I', b, 12)[0]
j = json.loads(b[20:20 + jl])
bin_off = 20 + jl
bl = struct.unpack_from('<I', b, bin_off)[0]
binb = b[bin_off + 8: bin_off + 8 + bl]
views = j['bufferViews']
imgviews = {im['bufferView'] for im in j['images']}
newbin = bytearray()
for i, v in enumerate(views):
    data = binb[v.get('byteOffset', 0): v.get('byteOffset', 0) + v['byteLength']]
    if i in imgviews:
        im = Image.open(io.BytesIO(data)).convert('RGB')
        print('img', im.size)
        if max(im.size) > size: im = im.resize((size, size * im.size[1] // im.size[0]), Image.LANCZOS)
        o = io.BytesIO(); im.save(o, 'JPEG', quality=85, optimize=True); data = o.getvalue()
    while len(newbin) % 4: newbin.append(0)
    v['byteOffset'] = len(newbin); v['byteLength'] = len(data); newbin += data
while len(newbin) % 4: newbin.append(0)
for im in j['images']: im['mimeType'] = 'image/jpeg'
j['buffers'][0]['byteLength'] = len(newbin)
js = json.dumps(j, separators=(',', ':')).encode()
while len(js) % 4: js += b' '
out = struct.pack('<III', 0x46546C67, 2, 12 + 8 + len(js) + 8 + len(newbin)) + struct.pack('<I', len(js)) + b'JSON' + js + struct.pack('<I', len(newbin)) + b'BIN\x00' + bytes(newbin)
open(dst, 'wb').write(out)
print('out', len(out))
