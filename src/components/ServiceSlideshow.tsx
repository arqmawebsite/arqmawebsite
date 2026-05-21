'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {
  images: string[]
  alt: string
  theme?: 'light' | 'dark' | 'wine'
}

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? '-60%' : '60%',
    opacity: 0,
  }),
}

export default function ServiceSlideshow({ images, alt, theme = 'light' }: Props) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1)
      setCurrent(index)
    },
    [current]
  )

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((c) => (c + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next, images.length])

  const styles = {
    // bg matches --color-cream so letterbox areas blend into the section
    light: {
      border: '1px solid rgba(66,53,44,0.12)',
      shadow: '0 32px 96px rgba(66,53,44,0.14), 0 6px 28px rgba(66,53,44,0.08)',
      bg: '#EEEBE7',
      dotActive: 'var(--color-espresso)',
      dotInactive: 'rgba(66,53,44,0.18)',
    },
    // bg matches --color-espresso so letterbox areas blend into the section
    dark: {
      border: '1px solid rgba(238,235,231,0.12)',
      shadow: '0 32px 96px rgba(0,0,0,0.45), 0 6px 28px rgba(0,0,0,0.25)',
      bg: '#42352C',
      dotActive: 'var(--color-cream)',
      dotInactive: 'rgba(238,235,231,0.2)',
    },
    // bg matches --color-wine so letterbox areas blend into the section
    wine: {
      border: '1px solid rgba(238,235,231,0.12)',
      shadow: '0 32px 96px rgba(42,10,14,0.4), 0 6px 28px rgba(42,10,14,0.22)',
      bg: '#512C32',
      dotActive: 'var(--color-cream)',
      dotInactive: 'rgba(238,235,231,0.2)',
    },
  }

  const s = styles[theme]

  if (images.length === 0) return null

  if (images.length === 1) {
    return (
      <div
        style={{
          border: s.border,
          boxShadow: s.shadow,
          background: s.bg,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
          <Image
            src={images[0]}
            alt={alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 85vw"
          />
        </div>
      </div>
    )
  }

  return (
    <div>
      <div
        style={{
          border: s.border,
          boxShadow: s.shadow,
          background: s.bg,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16/9',
            overflow: 'hidden',
          }}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ position: 'absolute', inset: 0 }}
            >
              <Image
                src={images[current]}
                alt={`${alt} — ${current + 1} of ${images.length}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 85vw"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dot navigation */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.6rem',
          marginTop: '1.75rem',
        }}
      >
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to image ${i + 1}`}
            style={{
              width: i === current ? '1.75rem' : '0.42rem',
              height: '0.42rem',
              borderRadius: '999px',
              background: i === current ? s.dotActive : s.dotInactive,
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.35s ease',
              flexShrink: 0,
            }}
          />
        ))}
      </div>
    </div>
  )
}
