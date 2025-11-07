'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function SkillOrbit() {
  const groupRef = useRef<THREE.Group>(null)
  const spheresRef = useRef<THREE.Mesh[]>([])

  const colors = ['#0ea5e9', '#a78bfa', '#f472b6', '#06b6d4', '#10b981', '#f59e0b']
  const positions = [
    [2, 0, 0],
    [-2, 0, 0],
    [0, 2, 0],
    [0, -2, 0],
    [1.5, 1.5, 0],
    [-1.5, -1.5, 0],
  ]

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.2
    }

    spheresRef.current.forEach((sphere, i) => {
      if (sphere) {
        sphere.position.y += Math.sin(state.clock.getElapsedTime() + i) * 0.002
      }
    })
  })

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <mesh
          key={i}
          position={pos as [number, number, number]}
          ref={(el) => {
            if (el) spheresRef.current[i] = el
          }}
        >
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial
            color={colors[i]}
            emissive={colors[i]}
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      ))}

      {/* Connecting lines */}
      {positions.map((pos, i) => (
        <line key={`line-${i}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([0, 0, 0, ...pos])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color={colors[i]} opacity={0.3} transparent />
        </line>
      ))}
    </group>
  )
}
