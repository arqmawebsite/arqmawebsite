'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
  images: string[]
  interval?: number
}

export default function HeroCarousel({ images, interval = 5000 }: Props) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    const timer = setInterval(next, interval)
    return () => clearInterval(timer)
  }, [next, interval])

  const variants = {
    enter: (dir: number) => ({
      scale: 1.08,
      opacity: 0,
      x: dir > 0 ? 20 : -20,
    }),
    center: {
      scale: 1,
      opacity: 1,
      x: 0,
    },
    exit: (dir: number) => ({
      scale: 0.97,
      opacity: 0,
      x: dir > 0 ? -20 : 20,
    }),
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="sync" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
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

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-[5vw] flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
            className="transition-all duration-500"
            aria-label={`Go to slide ${i + 1}`}
          >
            <span
              className="block h-[1px] transition-all duration-500"
              style={{
                width: i === current ? '2rem' : '1rem',
                background: i === current ? 'var(--color-cream)' : 'rgba(238,235,231,0.4)',
              }}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
