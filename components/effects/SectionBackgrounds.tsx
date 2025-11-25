'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Text3D, Center, Environment } from '@react-three/drei'
import { FuturisticCar } from '../3d/Vehicles'

export function ProjectsBackground() {
  return (
    <div className="absolute inset-0 opacity-30 pointer-events-none">
      <Suspense fallback={null}>
        <Canvas gl={{ alpha: true, antialias: false }} dpr={[1, 1.5]}>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <FuturisticCar />
          </Suspense>
        </Canvas>
      </Suspense>
    </div>
  )
}

export function SkillsOrbs() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${100 + Math.random() * 150}px`,
            height: `${100 + Math.random() * 150}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, ${
              i % 3 === 0
                ? 'rgba(99,102,241,0.2)'
                : i % 3 === 1
                ? 'rgba(168,85,247,0.2)'
                : 'rgba(236,72,153,0.2)'
            } 0%, transparent 70%)`,
            filter: 'blur(40px)',
            animation: `float ${10 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  )
}

export function CodeRain() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute text-primary-400 font-mono text-xs"
          style={{
            left: `${(i * 5) % 100}%`,
            animation: `fall ${5 + Math.random() * 5}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          {`{} <> [] () => {} const let var function class import export`
            .split(' ')
            .map((word, j) => (
              <div key={j} style={{ marginBottom: '20px' }}>
                {word}
              </div>
            ))}
        </div>
      ))}
      
      <style jsx>{`
        @keyframes fall {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(100vh);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.1);
          }
        }
      `}</style>
    </div>
  )
}
