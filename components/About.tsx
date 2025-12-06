'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './About.module.css'

interface TimelineEvent {
  id: number
  date: string
  title: string
  description: string
  image?: string
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    date: '2024',
    title: 'Grand Opening',
    description: 'G.Duck Jordan opened its doors, bringing toys, style, and childhood magic to Jordan.',
  },
  {
    id: 2,
    date: '2024',
    title: 'First Store Launch',
    description: 'Our flagship store opened with a grand celebration, featuring balloons, fun activities, and special guests.',
  },
  {
    id: 3,
    date: '2024',
    title: 'Community Impact',
    description: 'We began hosting events and workshops for kids, spreading joy throughout the community.',
  },
]

export default function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="about" ref={sectionRef} className={styles.section}>
      <div className="container">
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our Story
        </motion.h2>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          بطبوط يقود المرح ✨<br />
          Toys. Style. Childhood magic.
        </motion.p>

        <motion.div
          className={styles.timeline}
          variants={timelineVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className={styles.timelineItem}
              variants={itemVariants}
              whileHover={{ x: 10, scale: 1.02 }}
            >
              <div className={styles.timelineMarker}>
                <motion.div
                  className={styles.markerDot}
                  whileHover={{ scale: 1.3 }}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                ></motion.div>
                {index < timelineEvents.length - 1 && (
                  <div className={styles.timelineLine}></div>
                )}
              </div>

              <motion.div
                className={styles.timelineContent}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className={styles.sticker}
                  whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <span className={styles.date}>{event.date}</span>
                </motion.div>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                <p className={styles.eventDescription}>{event.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.mission}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className={styles.missionCard}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className={styles.missionTitle}>Our Mission</h3>
            <p className={styles.missionText}>
              At G.Duck Jordan, we believe every child deserves to experience the magic of
              childhood. We bring together the best toys, stylish accessories, and unforgettable
              moments that create lasting memories.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.brandImageContainer}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/images/brand-showcase.png"
            alt="G.Duck Store Showcase"
            className={styles.brandImage}
          />
        </motion.div>
      </div>
    </section>
  )
}

