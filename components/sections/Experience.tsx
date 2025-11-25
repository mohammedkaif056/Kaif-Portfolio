'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCalendar, FiMapPin } from 'react-icons/fi'
import profileData from '@/data/profile.json'
import CreativeBackground from './CreativeBackground'

export default function Experience() {
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section id="experience" ref={ref} className="py-24 bg-black relative overflow-hidden">
      {/* Creative 3D Background */}
      <div className="absolute inset-0 opacity-25">
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
              Experience & Journey
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education Timeline */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <span className="text-primary-400">●</span>
                Education
              </h3>
              <div className="relative pl-8 border-l-2 border-primary-400/30 space-y-8">
                {profileData.education.map((edu, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary-400 shadow-lg shadow-primary-400/50" />
                    <div className="card-glass p-6 hover-lift">
                      <h4 className="text-xl font-bold text-white mb-2">
                        {edu.degree}
                      </h4>
                      <div className="text-primary-400 font-semibold mb-2">
                        {edu.institution}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <FiCalendar size={14} />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <FiMapPin size={14} />
                          {edu.location}
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience & Achievements */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <span className="text-accent-purple">●</span>
                Experience & Achievements
              </h3>
              <div className="space-y-4">
                {/* Industrial Training */}
                {profileData.experience && profileData.experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="card-glass p-6 hover-lift border-l-4 border-accent-purple"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-white">
                        {exp.title}
                      </h4>
                    </div>
                    <div className="text-accent-purple font-semibold mb-1">
                      {exp.company}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <FiCalendar size={14} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <FiMapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}

                {/* Achievements */}
                {profileData.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="card-glass p-6 hover-lift"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-white">
                        {achievement.title}
                      </h4>
                      <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">
                        {achievement.date}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      {achievement.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Tech Stack Experience */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
              <span className="text-accent-pink">●</span>
              Technology Stack Experience
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card-glass p-6 text-center hover-lift">
                <div className="text-4xl font-bold text-gradient mb-2">3+</div>
                <div className="text-gray-400">Years Coding</div>
              </div>
              <div className="card-glass p-6 text-center hover-lift">
                <div className="text-4xl font-bold text-gradient mb-2">10+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="card-glass p-6 text-center hover-lift">
                <div className="text-4xl font-bold text-gradient mb-2">20+</div>
                <div className="text-gray-400">Technologies Mastered</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
