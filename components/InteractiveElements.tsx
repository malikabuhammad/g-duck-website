'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './InteractiveElements.module.css'

// Generate soft, realistic duck quack sound using Web Audio API
function playQuackSound() {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    
    // Create a soft, gentle quack sound
    const createSoftQuack = (freq: number, startTime: number, duration: number, volume: number) => {
      const osc = audioContext.createOscillator()
      const gain = audioContext.createGain()
      
      // Use sine wave for softer sound
      osc.type = 'sine'
      
      // Gentle frequency modulation for natural quack
      osc.frequency.setValueAtTime(freq, startTime)
      osc.frequency.linearRampToValueAtTime(freq * 0.85, startTime + duration * 0.2)
      osc.frequency.linearRampToValueAtTime(freq * 1.1, startTime + duration * 0.5)
      osc.frequency.linearRampToValueAtTime(freq * 0.9, startTime + duration * 0.7)
      osc.frequency.linearRampToValueAtTime(freq * 0.75, startTime + duration)
      
      // Soft volume envelope
      gain.gain.setValueAtTime(0, startTime)
      gain.gain.linearRampToValueAtTime(volume, startTime + 0.02)
      gain.gain.linearRampToValueAtTime(volume * 0.8, startTime + duration * 0.4)
      gain.gain.exponentialRampToValueAtTime(volume * 0.3, startTime + duration * 0.7)
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration)
      
      osc.connect(gain)
      gain.connect(audioContext.destination)
      
      osc.start(startTime)
      osc.stop(startTime + duration)
    }
    
    const now = audioContext.currentTime
    
    // Create soft, layered quack sound
    createSoftQuack(280, now, 0.2, 0.15)        // Main soft quack (lower frequency)
    createSoftQuack(320, now + 0.03, 0.18, 0.1) // Gentle harmonic
    createSoftQuack(240, now + 0.05, 0.15, 0.08) // Lower harmonic for depth
    
  } catch (error) {
    // Fallback: silent if Web Audio API not supported
    console.log('Audio not supported')
  }
}

export default function InteractiveElements() {
  const [footprints, setFootprints] = useState<Array<{ id: number; x: number; y: number }>>([])
  const [soundEnabled, setSoundEnabled] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detect mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (Math.random() > 0.95 && footprints.length < 10) {
        const x = Math.random() * 100
        const y = window.scrollY + Math.random() * 200
        const footprintId = Date.now()
        setFootprints((prev) => [...prev, { id: footprintId, x, y }])
        
        setTimeout(() => {
          setFootprints((prev) => prev.filter((fp) => fp.id !== footprintId))
        }, 3000)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [footprints.length])

  // Removed balloons - just play sound on click
  const handlePageClick = useCallback((e: MouseEvent) => {
    // Don't play sound when clicking on interactive elements
    const target = e.target as HTMLElement
    if (target.closest('button, a, input, select, textarea') || target.closest('[role="button"]')) {
      return
    }
    
    if (soundEnabled) {
      playQuackSound()
    }
  }, [soundEnabled])

  useEffect(() => {
    document.addEventListener('click', handlePageClick)
    return () => {
      document.removeEventListener('click', handlePageClick)
    }
  }, [handlePageClick])

  return (
    <>
      {/* Footprints container */}
      <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9998 }}>
        <AnimatePresence>
          {footprints.map((footprint) => (
            <motion.div
              key={footprint.id}
              className={styles.footprint}
              style={{
                left: `${footprint.x}%`,
                top: `${footprint.y}px`,
              }}
              initial={{ opacity: 1, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path
                  d="M15 5 C10 5, 5 10, 5 15 C5 20, 10 25, 15 25 C20 25, 25 20, 25 15 C25 10, 20 5, 15 5 Z"
                  fill="rgba(255, 214, 0, 0.6)"
                  stroke="rgba(0, 0, 0, 0.3)"
                  strokeWidth="1"
                />
              </svg>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>


      {!isMobile && (
        <div className={styles.floatingDucks}>
          <motion.div
            className={styles.duckIcon}
            style={{ left: '5%', top: '20%' }}
            drag={!isMobile}
            dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
            dragElastic={0.7}
            whileHover={{ 
              scale: 1.2,
              rotate: [0, -10, 10, -10, 0],
            }}
            whileTap={{ scale: 0.9 }}
            whileDrag={{ scale: 1.1, rotate: 15 }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="15" fill="#FFD600" />
              <circle cx="15" cy="17" r="2" fill="#000" />
              <circle cx="25" cy="17" r="2" fill="#000" />
              <ellipse cx="20" cy="23" rx="5" ry="3" fill="#FF8C00" />
            </svg>
          </motion.div>
          <motion.div
            className={styles.duckIcon}
            style={{ right: '5%', top: '60%' }}
            drag={!isMobile}
            dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
            dragElastic={0.7}
            whileHover={{ 
              scale: 1.2,
              rotate: [0, 10, -10, 10, 0],
            }}
            whileTap={{ scale: 0.9 }}
            whileDrag={{ scale: 1.1, rotate: -15 }}
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              },
            }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="15" fill="#FFD600" />
              <circle cx="15" cy="17" r="2" fill="#000" />
              <circle cx="25" cy="17" r="2" fill="#000" />
              <ellipse cx="20" cy="23" rx="5" ry="3" fill="#FF8C00" />
            </svg>
          </motion.div>
        </div>
      )}

      <motion.button
        className={styles.soundToggle}
        onClick={() => {
          const newState = !soundEnabled
          setSoundEnabled(newState)
          if (newState) {
            // Play sound when enabling
            playQuackSound()
          }
        }}
        aria-label="Toggle sound"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onTap={() => {
          if (soundEnabled) {
            playQuackSound()
          }
        }}
        animate={{
          scale: soundEnabled ? [1, 1.1, 1] : 1,
        }}
        transition={{
          scale: {
            duration: 0.5,
            repeat: soundEnabled ? Infinity : 0,
            ease: "easeInOut",
          },
        }}
      >
        {soundEnabled ? '🔊' : '🔇'}
      </motion.button>
    </>
  )
}

