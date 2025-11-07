'use client'

import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import { FaXTwitter } from 'react-icons/fa6'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black/50 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">Mohammed Kaif Pasha</h3>
            <p className="text-gray-400 text-sm">
              Building intelligent digital futures with AI, Full-Stack Development, and Web3 Technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/mohammedkaif056"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mohammed-kaif-pasha-138003255"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={24} />
              </motion.a>
              <motion.a
                href="https://x.com/mdkaifpasha2k"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaXTwitter size={24} />
              </motion.a>
              <motion.a
                href="mailto:mdkaifpasha2k@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <FiMail size={24} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Mohammed Kaif Pasha. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Built with <FiHeart className="mx-1 text-red-500" /> using React + R3F + Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
