'use client';

import { motion } from 'framer-motion';
import { FiExternalLink, FiMapPin, FiCalendar, FiAward } from 'react-icons/fi';
import Image from 'next/image';
import { useState } from 'react';
import hackathonsData from '@/data/hackathons.json';

export default function Hackathons() {
  const [selectedHackathon, setSelectedHackathon] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="hackathons" className="py-20 bg-black/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Hackathon Journey
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Exploring innovation through competitive hackathons, building cutting-edge solutions in AI, Web3, and blockchain technologies
          </p>
        </motion.div>

        {/* Hackathons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {hackathonsData.hackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative h-full bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-600/20 to-pink-600/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">🏆</div>
                  </div>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                  
                  {/* Achievement Badge */}
                  <div className="absolute top-4 right-4 bg-primary/20 backdrop-blur-md border border-primary/50 rounded-full px-4 py-2 flex items-center gap-2">
                    <FiAward className="text-primary" />
                    <span className="text-sm font-semibold text-primary">{hackathon.achievement}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {hackathon.name}
                  </h3>

                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <FiCalendar className="text-primary" />
                      <span>{hackathon.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMapPin className="text-purple-400" />
                      <span>{hackathon.location}</span>
                    </div>
                  </div>

                  {/* Organizer */}
                  <p className="text-sm text-gray-500 mb-4">
                    Organized by <span className="text-primary font-semibold">{hackathon.organizer}</span>
                  </p>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {hackathon.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hackathon.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Post Link - Only show if LinkedIn post exists */}
                  {hackathon.linkedinPost && hackathon.linkedinPost !== '#' && (
                    <a
                      href={hackathon.linkedinPost}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-purple-400 transition-colors group/link"
                    >
                      <span className="font-semibold">View LinkedIn Post</span>
                      <FiExternalLink className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                  )}
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">
            Follow my journey and connect with me on LinkedIn
          </p>
          <a
            href="https://www.linkedin.com/in/mohammed-kaif-pasha-138003255"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-purple-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all"
          >
            <span>View All Posts on LinkedIn</span>
            <FiExternalLink />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
