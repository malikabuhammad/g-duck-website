'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Duck {
    id: number
    x: number
    y: number
    scale: number
    speed: number
}

const DUCK_COUNT = 4

export default function InteractiveRubberDucks() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const [ducks] = useState<Duck[]>(() => {
        // Create fewer ducks on mobile
        const count = typeof window !== 'undefined' && window.innerWidth <= 768 ? 4 : DUCK_COUNT
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * 90,
            y: Math.random() * 90,
            scale: 0.8 + Math.random() * 0.5,
            speed: 0.5 + Math.random(),
        }))
    })

    // Sound effect
    const playQuack = () => {
        // Try to use speech synthesis as a reliable fallback
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance('Quack')
            utterance.pitch = 1.5 + Math.random() * 0.5 // Varied pitch
            utterance.rate = 1.5
            utterance.volume = 0.5
            window.speechSynthesis.speak(utterance)
        }

        // Also try to play a sound file if it exists (implementing for future extensibility)
        const audio = new Audio('/sounds/quack.mp3')
        audio.volume = 0.3
        audio.play().catch(() => {/* Ignore errors if file missing */ })
    }

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 5 }}>
            {ducks.map((duck) => (
                <RubberDuck
                    key={duck.id}
                    duck={duck}
                    isMobile={isMobile}
                    onQuack={playQuack}
                />
            ))}
        </div>
    )
}

function RubberDuck({ duck, isMobile, onQuack }: { duck: Duck, isMobile: boolean, onQuack: () => void }) {
    return (
        <motion.div
            style={{
                position: 'absolute',
                top: `${duck.y}%`,
                left: `${duck.x}%`,
                width: 60 * duck.scale,
                height: 60 * duck.scale,
                pointerEvents: 'auto',
                cursor: 'pointer',
            }}
            drag={!isMobile}
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
            dragElastic={0.8}
            whileHover={!isMobile ? {
                scale: 1.2,
                rotate: [0, -10, 10, -10, 0],
                zIndex: 1000,
            } : {}}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
                onQuack()
            }}
            animate={{
                y: [0, -30, 0],
                x: [0, 10, 0, -10, 0],
                rotate: [0, 5, -5, 0],
            }}
            transition={{
                y: {
                    duration: 4 / duck.speed,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: duck.id,
                },
                x: {
                    duration: 6 / duck.speed,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: duck.id * 0.5,
                },
                rotate: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: duck.id * 0.2,
                }
            }}
        >
            <svg viewBox="0 0 40 40" style={{ filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))', width: '100%', height: '100%' }}>
                {/* Tuft */}
                <path d="M20 5 Q18 3 16 5 Q18 7 20 5" fill="#FFD600" stroke="#000" strokeWidth="1" />

                {/* Body */}
                <path d="M5 25 Q5 15 20 15 Q35 15 35 25 Q35 35 20 35 Q5 35 5 25" fill="#FFD600" />

                {/* Head */}
                <circle cx="20" cy="18" r="10" fill="#FFD600" />

                {/* Eyes */}
                <circle cx="16" cy="16" r="2" fill="#000" />
                <circle cx="24" cy="16" r="2" fill="#000" />
                <circle cx="17" cy="15" r="0.5" fill="#fff" />
                <circle cx="25" cy="15" r="0.5" fill="#fff" />

                {/* Beak */}
                <ellipse cx="20" cy="22" rx="6" ry="3" fill="#FF8C00" stroke="#000" strokeWidth="0.5" />

                {/* Wing */}
                <path d="M12 28 Q20 25 28 28" fill="none" stroke="#e6c200" strokeWidth="2" strokeLinecap="round" />
            </svg>
        </motion.div>
    )
}
