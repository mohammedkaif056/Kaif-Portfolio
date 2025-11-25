'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiBookOpen, FiTarget } from 'react-icons/fi'
import profileData from '@/data/profile.json'
import CreativeBackground from './CreativeBackground'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" ref={ref} className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Creative 3D Background with flying elements */}
      <div className="absolute inset-0 opacity-40">
        <CreativeBackground />
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
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="card-glass p-8 hover-lift">
                <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
                <p className="text-gray-300 leading-relaxed">
                  {profileData.bio}
                </p>
              </div>

              {/* Values */}
              <div className="card-glass p-8 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent-purple/20 rounded-lg">
                    <FiTarget className="text-accent-purple" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-4">Core Values</h3>
                    <ul className="space-y-2">
                      {profileData.values.map((value, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary-400 mr-2">▹</span>
                          <span className="text-gray-300">{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills & Stats */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Technical Skills Grid
              <div className="card-glass p-8 hover-lift">
                <h3 className="text-2xl font-bold text-white mb-6">Technical Expertise</h3>
                
                {Object.entries(profileData.skills).map(([category, skills]) => {
                  if (category === 'learning') return null
                  return (
                    <div key={category} className="mb-6 last:mb-0">
                      <h4 className="text-sm font-semibold text-primary-400 uppercase tracking-wide mb-3">
                        {category.replace(/([A-Z])/g, ' $1').trim()}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {(skills as string[]).map((skill, index) => (
                          <motion.span
                            key={index}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:border-primary-400/50 transition-all duration-200"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )
                })}
                
                {/* Learning }
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="text-sm font-semibold text-accent-purple uppercase tracking-wide mb-3">
                    Currently Learning
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.learning.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-accent-purple/10 border border-accent-purple/30 rounded-lg text-sm text-accent-purple"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div> */}

              {/* Achievements */}
              <div className="card-glass p-8 hover-lift">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-accent-pink/20 rounded-lg">
                    <FiAward className="text-accent-pink" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Achievements</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  {profileData.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="border-l-2 border-primary-400 pl-4 py-2"
                    >
                      <h4 className="text-white font-semibold">{achievement.title}</h4>
                      <p className="text-gray-400 text-sm mt-1">{achievement.description}</p>
                      <p className="text-gray-500 text-xs mt-1">{achievement.date}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
