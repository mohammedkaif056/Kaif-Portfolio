'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiInstagram } from 'react-icons/fi'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import profileData from '@/data/profile.json'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!captchaToken) {
      alert('Please complete the CAPTCHA')
      return
    }

    setIsSubmitting(true)
    
    try {
      // Simulate form submission - Replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // In production, you would send the form data to your backend:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ ...formData, captchaToken }),
      // })
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setCaptchaToken(null)
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

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
    <section id="contact" ref={ref} className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-purple mx-auto mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </motion.div>

          <div className=" flex justify-center items-center min-h-screen">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="card-glass p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <p className="text-gray-400 mb-8">
                  I'm always interested in hearing about new projects, opportunities, and collaborations. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>

                {/* Contact Methods */}
                <div className="space-y-4">
                  <motion.a
                    href={`mailto:${profileData.email}`}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
                  >
                    <div className="p-3 bg-primary-500/20 rounded-lg">
                      <FiMail className="text-primary-400" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Email</div>
                      <div className="text-white font-medium">{profileData.email}</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href={profileData.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
                  >
                    <div className="p-3 bg-accent-purple/20 rounded-lg">
                      <FiGithub className="text-accent-purple" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">GitHub</div>
                      <div className="text-white font-medium">@mohammedkaif056</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href={profileData.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
                  >
                    <div className="p-3 bg-accent-pink/20 rounded-lg">
                      <FiLinkedin className="text-accent-pink" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">LinkedIn</div>
                      <div className="text-white font-medium">Mohammed Kaif Pasha</div>
                    </div>
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/mohammed_kaif_56/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
                  >
                    <div className="p-3 bg-gradient-to-tr from-pink-500 to-yellow-400 rounded-lg">
                      <FiInstagram className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Instagram</div>
                      <div className="text-white font-medium">@mohammed_kaif_56</div>
                    </div>
                  </motion.a>

                </div>

                {/* Location */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="text-sm text-gray-500 mb-2">Based in</div>
                  <div className="text-white font-medium text-lg">{profileData.location}</div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              {/* <form onSubmit={handleSubmit} className="card-glass p-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {hCaptcha}
                {process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY && (
                  <div className="flex justify-center">
                    <HCaptcha
                      sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
                      onVerify={(token) => setCaptchaToken(token)}
                      theme="dark"
                    />
                  </div>
                )}

                {/* Submit Button }
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-purple rounded-lg font-semibold text-white shadow-lg shadow-primary-500/50 hover:shadow-primary-500/70 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="loader" style={{ width: 20, height: 20, borderWidth: 2 }} />
                      Sending...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <FiCheckCircle size={20} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <FiSend size={20} />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm text-center"
                  >
                    Thanks for reaching out! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm text-center"
                  >
                    Something went wrong. Please try again or email me directly.
                  </motion.div>
                )}
              </form> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
