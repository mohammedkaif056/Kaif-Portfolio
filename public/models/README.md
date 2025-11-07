# 3D Models Directory

Place your GLTF/GLB 3D models here.

## Supported Formats

- `.gltf` - JSON text format
- `.glb` - Binary format (recommended)

## Model Sources

- [Ready Player Me](https://readyplayer.me/) - Custom avatars
- [Sketchfab](https://sketchfab.com/) - Free 3D models
- [Mixamo](https://www.mixamo.com/) - Animated characters

## Optimization

Before adding models:

1. **Reduce poly count** (< 50k triangles)
2. **Compress textures** (< 1024x1024)
3. **Use Draco compression**
4. **Remove unused materials**

Tools:
- [gltf.report](https://gltf.report/) - Analysis & optimization
- [gltf-pipeline](https://github.com/CesiumGS/gltf-pipeline) - CLI tool
- Blender - 3D editing software

## Usage

```tsx
import { useGLTF } from '@react-three/drei'

function Avatar() {
  const { scene } = useGLTF('/models/avatar.glb')
  return <primitive object={scene} />
}
```

See `AVATAR_GUIDE.md` for detailed integration instructions.
