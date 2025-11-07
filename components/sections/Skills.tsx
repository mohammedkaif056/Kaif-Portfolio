'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SkillOrbit from '../3d/SkillOrbit'

const skillCategories = [
  {
    name: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Solidity', 'SQL'],
    color: '#0ea5e9',
  },
  {
    name: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind', 'Framer Motion', 'Three.js'],
    color: '#a78bfa',
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'FastAPI', 'Express', 'MongoDB', 'MySQL', 'Supabase'],
    color: '#f472b6',
  },
  {
    name: 'AI/ML',
    skills: ['TensorFlow', 'PyTorch', 'OpenCV', 'LangChain', 'Groq'],
    color: '#06b6d4',
  },
  {
    name: 'Web3',
    skills: ['Hardhat', 'Ethers.js', 'Wagmi', 'IPFS', 'Base'],
    color: '#10b981',
  },
  {
    name: 'Tools',
    skills: ['Git', 'Docker', 'Vercel', 'Heroku', 'Postman'],
    color: '#f59e0b',
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" ref={ref} className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <SkillOrbit />
          </Suspense>
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mx-auto mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit for building intelligent, scalable, and innovative solutions
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.name}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="card-glass p-6 hover-lift"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: category.color, boxShadow: `0 0 20px ${category.color}` }}
                  />
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-white/10 transition-all"
                      style={{ 
                        borderColor: `${category.color}30`,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive 3D Visualization Note */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="card-glass p-6 max-w-2xl mx-auto">
              <p className="text-gray-400 text-sm">
                <span className="text-primary-400 font-semibold">Interactive 3D Visualization:</span> The floating skill orbitals in the background represent the interconnected nature of modern technology stacks
              </p>
            </div>
          </motion.div>

          {/* Additional Skills */}
          <motion.div
            variants={itemVariants}
            className="mt-12"
          >
            <div className="card-glass p-8">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-accent-purple">●</span>
                Currently Expanding Knowledge In
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Hadoop', 'Spark', 'PowerBI', 'Tableau', 'Kubernetes', 'AWS'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-accent-purple/10 border border-accent-purple/30 rounded-lg text-sm text-accent-purple font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
