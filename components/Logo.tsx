'use client'

import { motion } from 'framer-motion'

interface LogoProps {
  size?: number
  animated?: boolean
}

export default function Logo({ size = 200, animated = true }: LogoProps) {
  const logoContent = (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        background: '#FFD600'
      }}
    >
      <img
        src="/images/g-duck-logo.jpg"
        alt="G.Duck Logo"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </div>
  )

  if (!animated) {
    return logoContent
  }

  return (
    <motion.div
      animate={{
        rotate: [0, 5, -5, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.1,
        rotate: 360,
      }}
      style={{ display: 'inline-block' }}
    >
      {logoContent}
    </motion.div>
  )
}

