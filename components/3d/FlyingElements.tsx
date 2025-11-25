'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Text3D, Center } from '@react-three/drei'
import * as THREE from 'three'

export function FlyingBird({ position, speed = 1 }: { position: [number, number, number]; speed?: number }) {
  const birdRef = useRef<THREE.Group>(null)
  const wingLeftRef = useRef<THREE.Group>(null)
  const wingRightRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (birdRef.current) {
      // Bird flying path
      birdRef.current.position.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 5 + position[0]
      birdRef.current.position.y = Math.sin(state.clock.elapsedTime * speed * 0.2) * 2 + position[1]
      birdRef.current.position.z = position[2]
      
      // Bird rotation to face direction
      birdRef.current.rotation.y = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.5
      birdRef.current.rotation.z = Math.sin(state.clock.elapsedTime * speed * 0.2) * 0.1
    }

    // Wing flapping animation
    if (wingLeftRef.current && wingRightRef.current) {
      const flapAngle = Math.sin(state.clock.elapsedTime * speed * 3) * 0.8
      wingLeftRef.current.rotation.z = flapAngle
      wingRightRef.current.rotation.z = -flapAngle
    }
  })

  return (
    <group ref={birdRef} position={position}>
      {/* Bird body */}
      <mesh>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>

      {/* Bird head */}
      <mesh position={[0.15, 0.05, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#374151" />
      </mesh>

      {/* Beak */}
      <mesh position={[0.23, 0.05, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <coneGeometry args={[0.03, 0.08, 8]} />
        <meshStandardMaterial color="#f59e0b" />
      </mesh>

      {/* Left wing */}
      <group ref={wingLeftRef} position={[0, 0, 0.15]}>
        <mesh rotation={[0, 0, 0]}>
          <boxGeometry args={[0.3, 0.05, 0.2]} />
          <meshStandardMaterial color="#4b5563" />
        </mesh>
      </group>

      {/* Right wing */}
      <group ref={wingRightRef} position={[0, 0, -0.15]}>
        <mesh rotation={[0, 0, 0]}>
          <boxGeometry args={[0.3, 0.05, 0.2]} />
          <meshStandardMaterial color="#4b5563" />
        </mesh>
      </group>

      {/* Tail */}
      <mesh position={[-0.15, 0, 0]}>
        <coneGeometry args={[0.1, 0.15, 4]} />
        <meshStandardMaterial color="#374151" />
      </mesh>
    </group>
  )
}

export function FlyingPlane({ position, speed = 1 }: { position: [number, number, number]; speed?: number }) {
  const planeRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (planeRef.current) {
      // Plane flying in a larger path
      planeRef.current.position.x = Math.cos(state.clock.elapsedTime * speed * 0.2) * 8 + position[0]
      planeRef.current.position.y = Math.sin(state.clock.elapsedTime * speed * 0.15) * 3 + position[1]
      planeRef.current.position.z = Math.sin(state.clock.elapsedTime * speed * 0.1) * 3 + position[2]
      
      // Plane tilting
      planeRef.current.rotation.y = -Math.cos(state.clock.elapsedTime * speed * 0.2) * 0.3 - Math.PI / 2
      planeRef.current.rotation.z = Math.sin(state.clock.elapsedTime * speed * 0.15) * 0.2
    }
  })

  return (
    <group ref={planeRef} position={position}>
      {/* Fuselage */}
      <mesh>
        <cylinderGeometry args={[0.12, 0.12, 1, 16]} />
        <meshStandardMaterial color="#60a5fa" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Nose cone */}
      <mesh position={[0, 0.5, 0]}>
        <coneGeometry args={[0.12, 0.25, 16]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Cockpit */}
      <mesh position={[0, 0.2, 0]}>
        <sphereGeometry args={[0.15, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial 
          color="#93c5fd" 
          transparent 
          opacity={0.6} 
          metalness={0.9} 
          roughness={0.1} 
        />
      </mesh>

      {/* Main wings */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.08, 2, 0.4]} />
        <meshStandardMaterial color="#6366f1" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Tail wing */}
      <mesh position={[0, -0.4, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <boxGeometry args={[0.5, 0.05, 0.25]} />
        <meshStandardMaterial color="#6366f1" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Vertical stabilizer */}
      <mesh position={[0, -0.4, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.3, 0.05, 0.25]} />
        <meshStandardMaterial color="#6366f1" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Engine glow */}
      <pointLight position={[0, -0.6, 0]} intensity={0.5} color="#f97316" distance={2} />
    </group>
  )
}

export function FloatingWord({ 
  text, 
  position, 
  color = '#6366f1',
  speed = 1 
}: { 
  text: string
  position: [number, number, number]
  color?: string
  speed?: number 
}) {
  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={2}>
      <Center position={position}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.1}
          curveSegments={12}
        >
          {text}
          <meshStandardMaterial 
            color={color} 
            metalness={0.5} 
            roughness={0.5}
            emissive={color}
            emissiveIntensity={0.3}
          />
        </Text3D>
      </Center>
    </Float>
  )
}

export function Cloud({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={0.5} rotationIntensity={0.1} floatIntensity={1}>
      <group position={position}>
        {/* Cloud made of spheres */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.8} />
        </mesh>
        <mesh position={[0.4, 0.1, 0]}>
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.8} />
        </mesh>
        <mesh position={[-0.4, 0.1, 0]}>
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.8} />
        </mesh>
        <mesh position={[0.2, 0.3, 0]}>
          <sphereGeometry args={[0.35, 16, 16]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.8} />
        </mesh>
        <mesh position={[-0.2, 0.3, 0]}>
          <sphereGeometry args={[0.35, 16, 16]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.8} />
        </mesh>
      </group>
    </Float>
  )
}
