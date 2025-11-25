'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMusic, FiVolume2, FiVolumeX } from 'react-icons/fi'

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <>
      {/* Background Music Audio */}
      <audio
        ref={audioRef}
        loop
        src="https://www.bensound.com/bensound-music/bensound-energy.mp3"
      />

      {/* Music Control UI */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-8 right-8 z-50 flex flex-col gap-2"
      >
        {/* Play/Pause Button */}
        <motion.button
          onClick={togglePlay}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-purple rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
          <div className="relative w-14 h-14 bg-gray-900/90 backdrop-blur-lg rounded-full border border-white/10 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.div
                  key="playing"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  className="flex gap-1"
                >
                  <motion.div
                    animate={{ scaleY: [1, 0.5, 1] }}
                    transition={{ repeat: Infinity, duration: 0.6 }}
                    className="w-1 h-4 bg-primary-400 rounded-full"
                  />
                  <motion.div
                    animate={{ scaleY: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                    className="w-1 h-4 bg-accent-purple rounded-full"
                  />
                  <motion.div
                    animate={{ scaleY: [1, 0.5, 1] }}
                    transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                    className="w-1 h-4 bg-primary-400 rounded-full"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="paused"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                >
                  <FiMusic className="text-primary-400" size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.button>

        {/* Mute Button */}
        <motion.button
          onClick={toggleMute}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 bg-gray-900/90 backdrop-blur-lg rounded-full border border-white/10 flex items-center justify-center hover:border-primary-400/50 transition-colors"
        >
          {isMuted ? (
            <FiVolumeX className="text-gray-400" size={20} />
          ) : (
            <FiVolume2 className="text-primary-400" size={20} />
          )}
        </motion.button>

        {/* Volume Slider */}
        <AnimatePresence>
          {isPlaying && !isMuted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="w-14 h-32 bg-gray-900/90 backdrop-blur-lg rounded-full border border-white/10 p-3 flex items-center justify-center"
            >
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="volume-slider"
                style={{
                  transform: 'rotate(-90deg)',
                  width: '100px',
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <style jsx>{`
        .volume-slider {
          -webkit-appearance: none;
          appearance: none;
          background: transparent;
          cursor: pointer;
        }

        .volume-slider::-webkit-slider-track {
          background: rgba(255, 255, 255, 0.1);
          height: 4px;
          border-radius: 2px;
        }

        .volume-slider::-moz-range-track {
          background: rgba(255, 255, 255, 0.1);
          height: 4px;
          border-radius: 2px;
        }

        .volume-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(to right, #6366f1, #a855f7);
          margin-top: -4px;
        }

        .volume-slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(to right, #6366f1, #a855f7);
          border: none;
        }
      `}</style>
    </>
  )
}
