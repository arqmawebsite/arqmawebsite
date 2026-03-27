'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
  images: string[]
  interval?: number
}

export default function HeroCarousel({ images, interval = 7500 }: Props) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    const timer = setInterval(next, interval)
    return () => clearInterval(timer)
  }, [next, interval])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{
            duration: 2.2,
            ease: [0.16, 1, 0.3, 1],
            opacity: { duration: 1.8, ease: 'easeInOut' },
            scale: { duration: 7.5, ease: 'linear' },
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt="ARQMA Interior Design Project"
            fill
            priority={current === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Slide indicators — bottom left */}
      <div className="absolute bottom-8 left-[5vw] flex gap-3 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="group flex items-center py-2"
            aria-label={`Go to slide ${i + 1}`}
          >
            <motion.span
              className="block h-[1px] rounded-full"
              animate={{
                width: i === current ? '2.5rem' : '0.75rem',
                background: i === current
                  ? 'rgba(238,235,231,0.95)'
                  : 'rgba(238,235,231,0.35)',
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
