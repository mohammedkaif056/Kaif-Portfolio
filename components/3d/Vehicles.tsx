'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Trail, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

export function Spacecraft() {
  const spacecraftRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (spacecraftRef.current) {
      // Smooth floating motion
      spacecraftRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
      spacecraftRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
      spacecraftRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Trail
        width={3}
        length={8}
        color={new THREE.Color('#6366f1')}
        attenuation={(t) => t * t}
      >
        <group ref={spacecraftRef} position={[0, 0, 0]}>
          {/* Main body */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[1.2, 0.6, 2]} />
            <meshStandardMaterial
              color="#3b82f6"
              metalness={0.8}
              roughness={0.2}
              emissive="#1e40af"
              emissiveIntensity={0.3}
            />
          </mesh>

          {/* Cockpit */}
          <mesh position={[0, 0.3, 0.5]}>
            <sphereGeometry args={[0.4, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <meshStandardMaterial
              color="#60a5fa"
              metalness={0.9}
              roughness={0.1}
              transparent
              opacity={0.8}
              emissive="#3b82f6"
              emissiveIntensity={0.5}
            />
          </mesh>

          {/* Wings */}
          <mesh position={[-0.8, 0, 0]} rotation={[0, 0, Math.PI / 6]}>
            <boxGeometry args={[0.8, 0.1, 1.5]} />
            <meshStandardMaterial
              color="#6366f1"
              metalness={0.7}
              roughness={0.3}
              emissive="#4f46e5"
              emissiveIntensity={0.2}
            />
          </mesh>
          <mesh position={[0.8, 0, 0]} rotation={[0, 0, -Math.PI / 6]}>
            <boxGeometry args={[0.8, 0.1, 1.5]} />
            <meshStandardMaterial
              color="#6366f1"
              metalness={0.7}
              roughness={0.3}
              emissive="#4f46e5"
              emissiveIntensity={0.2}
            />
          </mesh>

          {/* Engine thrusters */}
          <mesh position={[-0.3, 0, -1]}>
            <cylinderGeometry args={[0.15, 0.2, 0.3, 32]} />
            <meshStandardMaterial
              color="#ec4899"
              metalness={0.9}
              roughness={0.1}
              emissive="#ec4899"
              emissiveIntensity={1}
            />
          </mesh>
          <mesh position={[0.3, 0, -1]}>
            <cylinderGeometry args={[0.15, 0.2, 0.3, 32]} />
            <meshStandardMaterial
              color="#ec4899"
              metalness={0.9}
              roughness={0.1}
              emissive="#ec4899"
              emissiveIntensity={1}
            />
          </mesh>

          {/* Thruster flames */}
          <mesh position={[-0.3, 0, -1.2]}>
            <coneGeometry args={[0.15, 0.5, 32]} />
            <meshBasicMaterial color="#f97316" transparent opacity={0.8} />
          </mesh>
          <mesh position={[0.3, 0, -1.2]}>
            <coneGeometry args={[0.15, 0.5, 32]} />
            <meshBasicMaterial color="#f97316" transparent opacity={0.8} />
          </mesh>

          {/* Sparkles around the spacecraft */}
          <Sparkles
            count={50}
            scale={3}
            size={2}
            speed={0.4}
            opacity={0.6}
            color="#6366f1"
          />
        </group>
      </Trail>
    </Float>
  )
}

export function FuturisticCar() {
  const carRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (carRef.current) {
      carRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2
      carRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.15
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
      <group ref={carRef}>
        {/* Car body */}
        <mesh position={[0, 0.3, 0]}>
          <boxGeometry args={[2, 0.6, 4]} />
          <meshStandardMaterial
            color="#a855f7"
            metalness={0.9}
            roughness={0.1}
            emissive="#9333ea"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* Roof */}
        <mesh position={[0, 0.8, 0.5]}>
          <boxGeometry args={[1.8, 0.5, 2]} />
          <meshStandardMaterial
            color="#c084fc"
            metalness={0.8}
            roughness={0.2}
            emissive="#a855f7"
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Windshield */}
        <mesh position={[0, 0.8, 1.8]} rotation={[0.3, 0, 0]}>
          <boxGeometry args={[1.7, 0.4, 0.1]} />
          <meshStandardMaterial
            color="#e0e7ff"
            metalness={0.9}
            roughness={0.05}
            transparent
            opacity={0.6}
          />
        </mesh>

        {/* Wheels */}
        {[
          [-0.9, -0.2, 1.3],
          [0.9, -0.2, 1.3],
          [-0.9, -0.2, -1.3],
          [0.9, -0.2, -1.3],
        ].map((pos, i) => (
          <group key={i} position={pos as [number, number, number]}>
            <mesh rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
              <meshStandardMaterial color="#1f2937" metalness={0.8} roughness={0.4} />
            </mesh>
            <mesh rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.25, 0.25, 0.35, 32]} />
              <meshStandardMaterial
                color="#6366f1"
                metalness={1}
                roughness={0.2}
                emissive="#4f46e5"
                emissiveIntensity={0.5}
              />
            </mesh>
          </group>
        ))}

        {/* Neon underglow */}
        <pointLight position={[0, -0.5, 0]} intensity={2} color="#a855f7" distance={3} />

        {/* Headlights */}
        <pointLight position={[-0.6, 0.3, 2]} intensity={3} color="#60a5fa" distance={5} />
        <pointLight position={[0.6, 0.3, 2]} intensity={3} color="#60a5fa" distance={5} />

        <Sparkles count={30} scale={4} size={1.5} speed={0.3} color="#a855f7" />
      </group>
    </Float>
  )
}
