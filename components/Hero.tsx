'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Logo from './Logo'
import styles from './Hero.module.css'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return // Disable mouse tracking on mobile

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isMobile])

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.balloons}>
        {/* Balloons removed in favor of global InteractiveRubberDucks */}
      </div>

      <div className={styles.content}>
        <motion.div
          className={styles.logoContainer}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className={styles.logoContainer}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className={styles.duckMascot}
              initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
                x: !isMobile ? mousePosition.x * 0.5 : 0,
                y: !isMobile ? mousePosition.y * 0.5 : 0,
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{
                rotate: [0, -10, 10, -10, 0],
                scale: 1.1,
                zIndex: 1000,
              }}
              whileTap={{ scale: 0.9 }}
              drag={!isMobile}
              dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
              dragElastic={0.7}
              whileDrag={{
                scale: 1.1,
                rotate: 15,
                zIndex: 1000,
              }}
              style={{
                perspective: 1000,
                transformStyle: 'preserve-3d',
              }}
            >
              <Logo size={isMobile ? 150 : 200} animated={true} />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          بطبوط يقود المرح ✨
        </motion.p>
        <motion.p
          className={styles.subtagline}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Toys. Style. Childhood magic.
        </motion.p>

        <motion.a
          href="#products"
          className={styles.ctaButton}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          Shop Now
        </motion.a>
      </div>

      <div className={styles.parallaxBg}></div>
    </section>
  )
}

