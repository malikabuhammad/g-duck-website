'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import styles from './Header.module.css'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.nav}>
          <motion.div
            className={styles.logo}
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ cursor: 'pointer' }}
          >
            <Logo size={50} animated={false} />
          </motion.div>
          
          <AnimatePresence>
            <motion.nav
              className={`${styles.navMenu} ${isMobileMenuOpen ? styles.open : ''}`}
              initial={false}
              animate={{
                x: typeof window !== 'undefined' && window.innerWidth <= 768 
                  ? (isMobileMenuOpen ? 0 : -window.innerWidth)
                  : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.a
                href="#products"
                onClick={(e) => { e.preventDefault(); scrollToSection('products') }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Products
              </motion.a>
              <motion.a
                href="#locations"
                onClick={(e) => { e.preventDefault(); scrollToSection('locations') }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Locations
              </motion.a>
              <motion.a
                href="#about"
                onClick={(e) => { e.preventDefault(); scrollToSection('about') }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                About
              </motion.a>
              <motion.a
                href="#products"
                className={styles.ctaLink}
                onClick={(e) => { e.preventDefault(); scrollToSection('products') }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Shop Now
              </motion.a>
            </motion.nav>
          </AnimatePresence>
          
          <button
            className={styles.mobileToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

