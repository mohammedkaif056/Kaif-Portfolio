'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'

export default function NeuralOrb() {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<any>(null)
  const outerRef1 = useRef<THREE.Mesh>(null)
  const outerRef2 = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.25
      
      // Mouse parallax
      const mouseX = state.mouse.x * 0.3
      const mouseY = state.mouse.y * 0.3
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mouseX, 0.05)
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mouseY, 0.05)
    }

    // Pulsing glow effect
    if (materialRef.current) {
      materialRef.current.emissiveIntensity = 0.6 + Math.sin(state.clock.getElapsedTime() * 1.5) * 0.4
    }

    // Rotating outer spheres
    if (outerRef1.current) {
      outerRef1.current.rotation.x = state.clock.getElapsedTime() * 0.3
      outerRef1.current.rotation.z = state.clock.getElapsedTime() * 0.2
    }
    if (outerRef2.current) {
      outerRef2.current.rotation.y = -state.clock.getElapsedTime() * 0.25
      outerRef2.current.rotation.z = -state.clock.getElapsedTime() * 0.15
    }
  })

  return (
    <group>
      {/* Main gradient orb */}
      <Sphere ref={meshRef} args={[1.5, 128, 128]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          ref={materialRef}
          color="#a78bfa"
          attach="material"
          distort={0.5}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
          emissive="#a78bfa"
          emissiveIntensity={0.6}
        />
      </Sphere>
      
      {/* Outer gradient ring 1 - Purple to Pink */}
      <Sphere ref={outerRef1} args={[2.0, 64, 64]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color="#f472b6"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
          wireframe
        />
      </Sphere>

      {/* Outer gradient ring 2 - Cyan */}
      <Sphere ref={outerRef2} args={[2.3, 64, 64]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color="#06b6d4"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
          wireframe
        />
      </Sphere>

      {/* Inner glow sphere */}
      <Sphere args={[1.2, 64, 64]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color="#c4b5fd"
          transparent
          opacity={0.3}
        />
      </Sphere>
    </group>
  )
}
