'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Locations.module.css'

interface Location {
  id: number
  name: string
  address: string
  phone: string
  hours: string
}

const locations: Location[] = [
  {
    id: 1,
    name: 'G.Duck Jordan - Main Store',
    address: 'Amman, Jordan',
    phone: '+962 6 XXX XXXX',
    hours: 'Sun-Thu: 10AM - 9PM',
  },
  {
    id: 2,
    name: 'G.Duck Jordan - Mall Location',
    address: 'City Center, Amman',
    phone: '+962 6 XXX XXXX',
    hours: 'Daily: 10AM - 10PM',
  },
]

export default function Locations() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="locations" ref={sectionRef} className={styles.section}>
      <div className="container">
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Find Us
        </motion.h2>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Visit our stores and experience the magic
        </motion.p>
        
        <motion.div
          className={styles.locationsGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {locations.map((location) => (
            <motion.div
              key={location.id}
              className={styles.locationCard}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className={styles.iconContainer}
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, -10, 10, -10, 0],
                }}
                transition={{ duration: 0.5 }}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 2C13.373 2 8 7.373 8 14C8 24 20 38 20 38C20 38 32 24 32 14C32 7.373 26.627 2 20 2ZM20 18C17.791 18 16 16.209 16 14C16 11.791 17.791 10 20 10C22.209 10 24 11.791 24 14C24 16.209 22.209 18 20 18Z"
                    fill="#FFD600"
                  />
                </svg>
              </motion.div>
              
              <h3 className={styles.locationName}>{location.name}</h3>
              <p className={styles.address}>{location.address}</p>
              <p className={styles.phone}>{location.phone}</p>
              <p className={styles.hours}>{location.hours}</p>
              
              <motion.button
                className={styles.directionsButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Directions
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

