'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from './StoreAisle.module.css'

export default function StoreAisle() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])

  return (
    <section ref={sectionRef} className={styles.aisleSection}>
      <div className={styles.perspectiveContainer}>
        <motion.div
          className={styles.backgroundLayer}
          style={{ opacity }}
        >
          <div className={styles.shelves}></div>
        </motion.div>
        
        <motion.div
          className={styles.middleLayer}
          style={{ y }}
        >
          <motion.div
            className={styles.floatingToy}
            drag
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
            dragElastic={0.8}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
              rotateY: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0,
            }}
            whileHover={{ 
              scale: 1.3, 
              rotate: 360,
              rotateY: 180,
              zIndex: 100,
            }}
            whileDrag={{ scale: 1.2, rotate: 15 }}
            style={{
              left: '20%',
              transformStyle: 'preserve-3d',
            }}
          >
            <svg width="60" height="60" viewBox="0 0 60 60">
              <circle cx="30" cy="30" r="25" fill="#FFD600"/>
              <circle cx="25" cy="25" r="3" fill="#000"/>
              <circle cx="35" cy="25" r="3" fill="#000"/>
              <ellipse cx="30" cy="35" rx="8" ry="5" fill="#FF8C00"/>
            </svg>
          </motion.div>
          <motion.div
            className={styles.floatingToy}
            drag={typeof window !== 'undefined' && window.innerWidth > 768}
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
            dragElastic={0.8}
            animate={{
              y: [0, -25, 0],
              rotate: [0, -5, 5, 0],
              rotateX: [0, 10, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            whileHover={{ 
              scale: 1.3, 
              rotate: -360,
              rotateX: 180,
              zIndex: 100,
            }}
            whileDrag={{ scale: 1.2, rotate: -15 }}
            style={{
              left: '50%',
              transformStyle: 'preserve-3d',
            }}
          >
            <svg width="60" height="60" viewBox="0 0 60 60">
              <circle cx="30" cy="30" r="25" fill="#FFD600"/>
              <circle cx="25" cy="25" r="3" fill="#000"/>
              <circle cx="35" cy="25" r="3" fill="#000"/>
              <ellipse cx="30" cy="35" rx="8" ry="5" fill="#FF8C00"/>
            </svg>
          </motion.div>
          <motion.div
            className={styles.floatingToy}
            drag={typeof window !== 'undefined' && window.innerWidth > 768}
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
            dragElastic={0.8}
            animate={{
              y: [0, -18, 0],
              rotate: [0, 3, -3, 0],
              rotateZ: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            whileHover={{ 
              scale: 1.3, 
              rotate: 360,
              rotateZ: 180,
              zIndex: 100,
            }}
            whileDrag={{ scale: 1.2, rotate: 10 }}
            style={{
              left: '80%',
              transformStyle: 'preserve-3d',
            }}
          >
            <svg width="60" height="60" viewBox="0 0 60 60">
              <circle cx="30" cy="30" r="25" fill="#FFD600"/>
              <circle cx="25" cy="25" r="3" fill="#000"/>
              <circle cx="35" cy="25" r="3" fill="#000"/>
              <ellipse cx="30" cy="35" rx="8" ry="5" fill="#FF8C00"/>
            </svg>
          </motion.div>
        </motion.div>
        
        <div className={styles.foregroundLayer}>
          <div className={styles.aisleFloor}></div>
        </div>
      </div>
      
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className={styles.title}
          whileHover={{ scale: 1.05 }}
        >
          Step Into Our World
        </motion.h2>
        <motion.p
          className={styles.description}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Experience the magic of G.Duck Jordan. Every aisle is filled with wonder, 
          every corner holds a new adventure. Come visit us and discover your next favorite toy!
        </motion.p>
      </motion.div>
    </section>
  )
}

