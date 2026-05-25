'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import AnimateOnScroll from '@/components/AnimateOnScroll'

interface ProjectGalleryProps {
  images: string[]
  projectName: string
  imageObjectPositions?: string[]
}

export default function ProjectGallery({ images, projectName, imageObjectPositions }: ProjectGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [direction, setDirection] = useState(0) // -1 prev, 1 next

  const openLightbox = (index: number) => {
    setDirection(0)
    setLightboxIndex(index)
  }

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
  }, [])

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return
    setDirection(1)
    setLightboxIndex((prev) => (prev! + 1) % images.length)
  }, [lightboxIndex, images.length])

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return
    setDirection(-1)
    setLightboxIndex((prev) => (prev! - 1 + images.length) % images.length)
  }, [lightboxIndex, images.length])

  useEffect(() => {
    if (lightboxIndex === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxIndex, closeLightbox, goNext, goPrev])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir >= 0 ? '60%' : '-60%',
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir >= 0 ? '-60%' : '60%',
      opacity: 0,
      scale: 0.96,
    }),
  }

  return (
    <>
      {/* ── Gallery Grid ─────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((img, i) => {
          const objPos = imageObjectPositions?.[i] ?? '50% 50%'
          return (
            <AnimateOnScroll key={img} delay={(i % 4) * 0.05}>
              <div
                className="relative img-zoom-wrapper"
                style={{ aspectRatio: '4/3', cursor: 'zoom-in' }}
                onClick={() => openLightbox(i)}
              >
                <Image
                  src={img}
                  alt={`${projectName} — interior design detail`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  style={{ objectPosition: objPos }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(42,31,26,0.22)' }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      background: 'rgba(238,235,231,0.92)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {/* magnify icon */}
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="8.5" cy="8.5" r="5.5" stroke="#42352C" strokeWidth="1.5"/>
                      <path d="M13 13L17 17" stroke="#42352C" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M8.5 6v5M6 8.5h5" stroke="#42352C" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          )
        })}
      </div>

      {/* ── Lightbox ─────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            key="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{ background: 'rgba(22, 16, 13, 0.96)', backdropFilter: 'blur(8px)' }}
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 flex items-center justify-center"
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: 'rgba(238,235,231,0.1)',
                border: '1px solid rgba(238,235,231,0.2)',
                color: 'var(--color-cream)',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              aria-label="Close"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Counter */}
            <div
              className="absolute top-6 left-1/2 -translate-x-1/2"
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                color: 'rgba(238,235,231,0.4)',
                textTransform: 'uppercase',
              }}
            >
              {lightboxIndex + 1} / {images.length}
            </div>

            {/* Prev button */}
            {images.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); goPrev() }}
                className="absolute left-4 md:left-8 z-10 flex items-center justify-center"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: 'rgba(238,235,231,0.08)',
                  border: '1px solid rgba(238,235,231,0.18)',
                  color: 'var(--color-cream)',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                aria-label="Previous image"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M11 3L5 9L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}

            {/* Next button */}
            {images.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); goNext() }}
                className="absolute right-4 md:right-8 z-10 flex items-center justify-center"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: 'rgba(238,235,231,0.08)',
                  border: '1px solid rgba(238,235,231,0.18)',
                  color: 'var(--color-cream)',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                aria-label="Next image"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M7 3L13 9L7 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}

            {/* Image container — stop propagation so clicking image doesn't close */}
            <div
              className="relative flex items-center justify-center"
              style={{ width: '90vw', height: '90vh', maxWidth: '1400px' }}
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={lightboxIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.38, ease: [0.32, 0, 0.08, 1] }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Image
                    src={images[lightboxIndex]}
                    alt={`${projectName} — image ${lightboxIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="90vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot indicators */}
            {images.length > 1 && (
              <div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2"
              >
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setDirection(i > lightboxIndex ? 1 : -1); setLightboxIndex(i) }}
                    style={{
                      width: i === lightboxIndex ? 20 : 6,
                      height: 6,
                      borderRadius: 3,
                      background: i === lightboxIndex ? 'rgba(238,235,231,0.9)' : 'rgba(238,235,231,0.25)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      padding: 0,
                    }}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
