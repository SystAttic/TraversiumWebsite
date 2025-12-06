'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useTransition } from '@/contexts/TransitionContext'

export default function TransitionOverlay() {
  const { isTransitioning } = useTransition()

  // Calculate scale needed to cover entire screen
  // We need to cover the diagonal of the screen from the center
  const getSunScale = () => {
    if (typeof window === 'undefined') return 100
    const width = window.innerWidth
    const height = window.innerHeight
    // Calculate diagonal distance from center to corner
    const diagonal = Math.sqrt(width * width + height * height)
    // Sun starts at 53.64px diameter (26.82 radius * 2)
    // We need radius to reach at least half the diagonal
    const requiredRadius = diagonal / 2
    const currentRadius = 26.82
    // Scale factor to reach required radius
    return (requiredRadius / currentRadius) * 1.3 // Add 30% buffer for full coverage
  }

  // Sun expansion animation
  const sunVariants = {
    initial: { scale: 1, opacity: 1 },
    expand: {
      scale: getSunScale(),
      opacity: [1, 1, 1, 0.95],
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark-bg1 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Logo with sun expanding behind it */}
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Expanding sun - positioned absolutely to expand from center of viewport */}
            <motion.div
              className="absolute rounded-full bg-[#fa735d]"
              style={{
                width: '53.64px',
                height: '53.64px',
                position: 'fixed',
                top: '50vh',
                left: '50vw',
                marginTop: '-26.82px',
                marginLeft: '-26.82px',
                transformOrigin: 'center center',
                zIndex: 1,
              }}
              initial="initial"
              animate={isTransitioning ? 'expand' : 'initial'}
              variants={sunVariants}
            />

            {/* Bird logo - stays visible on top */}
            <div className="relative z-20 w-full h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 370.08 370.08"
                className="w-full h-full"
              >
                <defs>
                  <style>
                    {`
                      .cls-1 { fill: #c5c5c4; }
                      .cls-2 { fill: #8e9395; }
                      .cls-3 { fill: #717578; }
                      .cls-4 { fill: #e2e3df; }
                      .cls-5 { fill: #c1c4c1; }
                      .cls-6 { fill: #fa735d; }
                      .cls-7 { fill: #e6e5e2; }
                      .cls-8 { fill: #e8e7e4; }
                      .cls-9 { fill: #6c7074; }
                      .cls-10 { fill: #9fa1a3; }
                    `}
                  </style>
                </defs>

                {/* Hide the original sun circle since we're using a separate div */}
                <circle
                  className="cls-6"
                  cx="211.93"
                  cy="53.74"
                  r="26.82"
                  opacity="0"
                />

                {/* Bird layers */}
                <g id="Layer_2">
                  <polygon
                    className="cls-9"
                    points="222.48 72.06 211.93 59.71 207.43 72.06 222.48 72.06"
                  />
                </g>

                <g id="Layer_3">
                  <polygon
                    className="cls-5"
                    points="201.07 92.68 207.43 72.06 211.93 59.71 184.24 73.7 201.07 92.68"
                  />
                </g>

                <g id="Layer_4">
                  <polygon
                    className="cls-10"
                    points="181.08 70.57 184.24 73.7 211.93 59.71 207.43 58.63 181.08 70.57"
                  />
                </g>

                <g id="Layer_5">
                  <polyline
                    className="cls-4"
                    points="201.07 92.68 184.24 73.7 181.08 70.57 155.19 40.99 154.31 90.72 201.07 92.68"
                  />
                </g>

                <g id="Layer_6">
                  <polygon
                    className="cls-1"
                    points="157.24 116.16 154.31 90.72 201.07 92.68 157.24 116.16"
                  />
                </g>

                <g id="Layer_7">
                  <polygon
                    className="cls-8"
                    points="154.31 90.72 97.41 30.3 155.19 40.99 154.31 90.72"
                  />
                </g>

                <g id="Layer_8">
                  <polygon
                    className="cls-2"
                    points="92.97 50.12 116.08 50.12 154.31 90.72 92.97 50.12"
                  />
                </g>

                <g id="Layer_9">
                  <polygon
                    className="cls-3"
                    points="157.24 116.16 145.54 119.25 154.31 90.72 157.24 116.16"
                  />
                </g>

                <g id="Layer_10">
                  <polygon
                    className="cls-7"
                    points="143.19 127.21 145.54 119.25 154.31 90.72 111.49 133.08 143.19 127.21"
                  />
                </g>
              </svg>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

