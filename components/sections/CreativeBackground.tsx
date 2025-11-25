'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { FlyingBird, FlyingPlane, FloatingWord, Cloud } from '../3d/FlyingElements'

export default function CreativeBackground() {
  const creativeWords = [
    { text: 'INNOVATE', position: [-4, 2, -3], color: '#6366f1', speed: 1.2 },
    { text: 'CREATE', position: [5, 1, -2], color: '#a855f7', speed: 0.8 },
    { text: 'DESIGN', position: [-3, -1, -4], color: '#ec4899', speed: 1.5 },
    { text: 'BUILD', position: [4, -2, -3], color: '#06b6d4', speed: 1 },
    { text: 'CODE', position: [0, 3, -5], color: '#f59e0b', speed: 1.3 },
  ]

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }} gl={{ alpha: true, antialias: false }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={0.8} />
          <pointLight position={[-10, -10, -5]} intensity={0.4} color="#a855f7" />
          
          {/* Flying Birds */}
          <FlyingBird position={[-3, 2, -2]} speed={0.8} />
          <FlyingBird position={[4, 3, -3]} speed={1.2} />
          <FlyingBird position={[0, 1, -4]} speed={1} />
          <FlyingBird position={[-5, 0, -2]} speed={0.9} />
          <FlyingBird position={[6, 2, -3]} speed={1.1} />
          
          {/* Flying Planes */}
          <FlyingPlane position={[0, 0, -5]} speed={0.5} />
          <FlyingPlane position={[3, -2, -4]} speed={0.7} />
          
          {/* Floating Creative Words */}
          {creativeWords.map((word, i) => (
            <FloatingWord 
              key={i}
              text={word.text}
              position={word.position as [number, number, number]}
              color={word.color}
              speed={word.speed}
            />
          ))}
          
          {/* Clouds */}
          <Cloud position={[-6, 3, -6]} />
          <Cloud position={[7, 2, -7]} />
          <Cloud position={[-4, -2, -5]} />
          <Cloud position={[5, 4, -8]} />
          
          {/* Subtle camera controls (disabled interaction) */}
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            enableRotate={false}
            autoRotate
            autoRotateSpeed={0.2}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
