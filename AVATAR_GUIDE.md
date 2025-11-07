# 3D Avatar Integration Guide

This portfolio supports two methods for adding a 3D avatar to the Hero section.

## Method 1: Spline 3D (Easiest)

### Step 1: Create Your Avatar
1. Go to [Spline.design](https://spline.design/)
2. Create a 3D avatar or import a model
3. Design and animate as desired
4. Export → Get embed code

### Step 2: Get Embed URL
Your URL will look like:
```
https://my.spline.design/untitled-abc123xyz
```

### Step 3: Update Hero Component
In `components/sections/Hero.tsx`, replace the avatar placeholder section (around line 165):

```tsx
{/* Replace this section */}
<motion.div className="hidden lg:block relative">
  <iframe 
    src='https://my.spline.design/YOUR-SCENE-ID'
    frameBorder='0'
    width='100%'
    height='500px'
    className="rounded-2xl"
  />
</motion.div>
```

## Method 2: GLTF/GLB Model (Advanced)

### Step 1: Prepare Your Model
1. Create or download a GLTF/GLB model
2. Optimize using [gltf.report](https://gltf.report/)
3. Place file in `public/models/avatar.glb`

### Step 2: Create Avatar Component

Create `components/3d/Avatar.tsx`:

```tsx
'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export default function Avatar() {
  const groupRef = useRef<THREE.Group>(null)
  const { scene } = useGLTF('/models/avatar.glb')

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle rotation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      <primitive 
        object={scene} 
        scale={2}
        position={[0, -1, 0]}
      />
    </group>
  )
}

// Preload the model
useGLTF.preload('/models/avatar.glb')
```

### Step 3: Update Hero Component

```tsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import Avatar from '../3d/Avatar'

// In the hero section (around line 165):
<motion.div className="hidden lg:block relative">
  <div className="w-full h-[500px]">
    <Canvas>
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Environment preset="studio" />
        <Avatar />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Suspense>
    </Canvas>
  </div>
</motion.div>
```

## Method 3: Ready Player Me Avatar

### Step 1: Create Avatar
1. Visit [Ready Player Me](https://readyplayer.me/)
2. Create your avatar
3. Download GLB file

### Step 2: Use the GLB
Follow **Method 2** steps above with your Ready Player Me `.glb` file.

## Troubleshooting

### Model too large/small
Adjust the `scale` prop:
```tsx
<primitive object={scene} scale={1.5} /> // Increase or decrease
```

### Model position
Adjust the `position` prop:
```tsx
<primitive object={scene} position={[0, -2, 0]} /> // [x, y, z]
```

### Performance issues
1. Reduce model poly count
2. Optimize textures (max 1024x1024)
3. Use Draco compression
4. Disable shadows if needed

## Recommended Tools

- **3D Software**: Blender (free)
- **Online Editors**: Spline, Ready Player Me
- **Model Sources**: Sketchfab, CGTrader
- **Optimization**: gltf-pipeline, gltf.report

## Example Models

Free avatar models:
- [Ready Player Me](https://readyplayer.me/)
- [Mixamo Characters](https://www.mixamo.com/)
- [Sketchfab Free Models](https://sketchfab.com/search?features=downloadable&type=models&q=avatar)

---

Need help? Check the [React Three Fiber docs](https://docs.pmnd.rs/react-three-fiber) or reach out!
