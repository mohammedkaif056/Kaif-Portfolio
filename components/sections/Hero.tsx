'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment, Stars } from '@react-three/drei'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import { FaXTwitter } from 'react-icons/fa6'
import TechnicalBackground from '../3d/TechnicalBackground'
import { Spacecraft } from '../3d/Vehicles'
import profileData from '@/data/profile.json'

export default function Hero() {
  const handleScrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Technical Background with optional 3D */}
      <div className="absolute inset-0 z-0">
        <TechnicalBackground />
        
        {/* 3D Enhancement Layer (optional) */}
        <div className="absolute inset-0 opacity-30">
          <Suspense fallback={null}>
            <Canvas 
              camera={{ position: [0, 0, 10], fov: 75 }}
              gl={{ antialias: false, alpha: true }}
              dpr={[1, 1.5]}
            >
              {/* Lighting */}
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
              
              {/* Stars background */}
              <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
              
              {/* 3D Spacecraft */}
              <Suspense fallback={null}>
                <Spacecraft />
              </Suspense>
            </Canvas>
          </Suspense>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-5" />

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  <span className="text-white">Hi, I'm </span>
                  <motion.span 
                    className="text-gradient block mt-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <TypeAnimation
                      sequence={[
                        'Mohammed Kaif Pasha',
                        3000,
                        'MK Pasha',
                        2000,
                        'Mohammed Kaif Pasha',
                        3000,
                      ]}
                      wrapper="span"
                      speed={30}
                      repeat={Infinity}
                    />
                  </motion.span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-8"
              >
                <div className="text-2xl md:text-3xl text-gray-300 h-20">
                  <TypeAnimation
                    sequence={[
                      'AI Engineer',
                      2000,
                      'Full-Stack Developer',
                      2000,
                      'Innovator',
                      2000,
                      'Web3 & Data Enthusiast',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-gradient font-semibold"
                  />
                </div>
                <p className="text-lg text-gray-400 mt-4 max-w-xl">
                  Building Intelligent Digital Futures
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  onClick={handleScrollToProjects}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-purple rounded-lg font-semibold text-white shadow-lg shadow-primary-500/50 hover:shadow-primary-500/70 transition-all duration-300"
                >
                  View Projects
                </motion.button>
                
                <motion.a
                  href={profileData.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                >
                  <FiGithub size={20} />
                  GitHub
                </motion.a>

                <motion.a
                  href={profileData.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                >
                  <FiLinkedin size={20} />
                  LinkedIn
                </motion.a>

                <motion.a
                  href={profileData.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                >
                  <FaXTwitter size={20} />
                  Twitter
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex gap-6 mt-8"
              >
                <motion.a
                  href={profileData.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <FiGithub size={28} />
                </motion.a>
                <motion.a
                  href={profileData.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <FiLinkedin size={28} />
                </motion.a>
                <motion.a
                  href={profileData.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Twitter Profile"
                >
                  <FaXTwitter size={28} />
                </motion.a>
                <motion.a
                  href={`mailto:${profileData.email}`}
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <FiMail size={28} />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Enhanced Avatar with Cool Background */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block relative"
            >
              <div className="w-full h-[500px] flex items-center justify-center relative">
                {/* Cool Background Effects */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Animated Rings */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute w-96 h-96 rounded-full border-2 border-primary/20"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[420px] h-[420px] rounded-full border-2 border-purple-500/20"
                  />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[450px] h-[450px] rounded-full border border-pink-500/10"
                  />
                  
                  {/* Gradient Orbs */}
                  <motion.div
                    animate={{ 
                      y: [0, -20, 0],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -top-10 -right-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl"
                  />
                  <motion.div
                    animate={{ 
                      y: [0, 20, 0],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl"
                  />
                  
                  {/* Floating Particles */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -30, 0],
                        x: [0, Math.sin(i) * 20, 0],
                        opacity: [0.2, 0.8, 0.2]
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                      className="absolute w-2 h-2 bg-primary/60 rounded-full"
                      style={{
                        left: `${20 + i * 10}%`,
                        top: `${30 + (i % 3) * 20}%`
                      }}
                    />
                  ))}
                </div>

                {/* Photo Container with Enhanced Effects */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-500 to-pink-500 rounded-full blur-2xl opacity-40 animate-pulse" />
                  
                  {/* Photo Frame */}
                  <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-to-br from-primary via-purple-500 to-pink-500 shadow-2xl shadow-primary/50">
                    {/* Inner Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/20 z-10" />
                    
                    {/* Photo */}
                    <img
                      src="/mohammed-kaif-avatar.jpg"
                      alt="Mohammed Kaif Pasha"
                      className="w-full h-full object-cover relative z-0"
                    />
                    
                    {/* Shine Effect */}
                    <motion.div
                      animate={{
                        x: ['-100%', '200%']
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-20"
                    />
                  </div>
                  
                  {/* Tech Stack Icons Around Photo */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    {['⚛️', '🐍', '🔷', '⚡', '🎨', '🔗', '🤖', '📊'].map((icon, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-12 h-12 bg-gray-900/80 backdrop-blur-sm border border-primary/30 rounded-full flex items-center justify-center text-xl shadow-lg"
                        style={{
                          left: `${50 + 45 * Math.cos((i * Math.PI * 2) / 8)}%`,
                          top: `${50 + 45 * Math.sin((i * Math.PI * 2) / 8)}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                        whileHover={{ scale: 1.2, backgroundColor: 'rgba(14, 165, 233, 0.3)' }}
                      >
                        <motion.span
                          animate={{ rotate: -360 }}
                          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        >
                          {icon}
                        </motion.span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2, repeat: Infinity, repeatType: 'reverse', repeatDelay: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <FiArrowDown size={32} className="text-white/50" />
      </motion.div>
    </section>
  )
}
