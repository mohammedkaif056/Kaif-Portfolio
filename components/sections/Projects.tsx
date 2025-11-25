'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi'
import projectsData from '@/data/projects.json'
import { ProjectsBackground } from '../effects/SectionBackgrounds'

interface Project {
  id: string
  name: string
  summary: string
  description?: string
  stack: string[]
  source: string
  demo?: string
  image?: string
  featured?: boolean
  tags?: string[]
}

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState<'all' | 'featured'>('featured')

  const displayProjects = filter === 'featured' 
    ? projectsData.featured 
    : [...projectsData.featured, ...projectsData.other]

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
    <section id="projects" ref={ref} className="relative py-24 bg-black overflow-hidden">
      <ProjectsBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mx-auto mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto">
              A selection of projects showcasing my expertise in AI, Full-Stack Development, and Web3
            </p>

            {/* Filter Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setFilter('featured')}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  filter === 'featured'
                    ? 'bg-gradient-to-r from-primary-500 to-accent-purple text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                Featured
              </button>
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  filter === 'all'
                    ? 'bg-gradient-to-r from-primary-500 to-accent-purple text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                All Projects
              </button>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {displayProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className="card-glass overflow-hidden cursor-pointer group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-accent-purple/20 overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-gradient">{project.name[0]}</span>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-all">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.summary}
                  </p>

                  {/* Tags */}
                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-primary-500/10 border border-primary-500/30 rounded text-xs text-primary-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.slice(0, 4).map((tech, idx) => (
                      <span 
                        key={idx}
                        className="text-xs text-gray-500"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="text-xs text-gray-500">+{project.stack.length - 4}</span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      <FiGithub size={18} />
                      <span className="text-sm">Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 border border-white/10 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-gray-900/95 backdrop-blur-lg border-b border-white/10 p-6 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gradient">{selectedProject.name}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <FiX size={24} className="text-white" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {selectedProject.description && (
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>
                )}

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary-400 uppercase tracking-wide mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                {selectedProject.tags && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary-400 uppercase tracking-wide mb-3">
                      Categories
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1.5 bg-primary-500/10 border border-primary-500/30 rounded-lg text-sm text-primary-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={selectedProject.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-purple rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-primary-500/50 transition-all"
                  >
                    <FiGithub size={20} />
                    View Source Code
                  </a>
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg font-semibold text-white hover:bg-white/10 transition-all"
                    >
                      <FiExternalLink size={20} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
