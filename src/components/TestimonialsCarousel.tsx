'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Nayara Cardoso',
    quote: "Working with Marcia has been such a wonderful experience for our family. She pays attention to every detail, but more than that, she takes the time to understand what a family really needs in order to create spaces that are not only beautiful, but functional, warm, and meaningful. She has a rare ability to transform ideas and feelings into spaces that truly feel like home.",
    project: 'Google Review ★★★★★',
  },
  {
    name: 'Thiago Duque',
    quote: "Márcia is exceptional — highly recommended. She truly takes the time to understand your style and preferences, while carefully considering the functionality required for everyday life in a home. Márcia is an extremely friendly and approachable professional who brings fresh perspectives that would be difficult to achieve without her insightful guidance. Choosing Márcia is a no-brainer.",
    project: 'Google Review ★★★★★',
  },
  {
    name: 'Andreza Silva Josiek',
    quote: "Márcia did an incredible job with my living room and dining room design project. She was professional, organized, and very thoughtful throughout the entire process. She has a great eye for design and was able to create a space that is both beautiful and functional. The final result came together perfectly, and I'm extremely happy with how everything turned out.",
    project: 'Google Review ★★★★★',
  },
  {
    name: 'Moises Pinho',
    quote: "Arqma Interiors stands out for their outstanding professionalism. Their team is reliable, communicative, and truly listens to clients' needs, making the entire process smooth and enjoyable. Their designs beautifully combine style, functionality, and personal taste, offering fresh concepts that transform spaces in ways homeowners love.",
    project: 'Google Review ★★★★★',
  },
  {
    name: 'Eduardo Josiek Junior',
    quote: "We had a great experience with Arqma Interiors. Marcia was always very attentive, professional, and made sure all of our needs were met. We are very happy with the service and highly recommend them!",
    project: 'Google Review ★★★★★',
  },
]

// One unique card color per palette tone
const themes = [
  {
    bg: '#EEEBE7',           // cream
    quoteDecor: 'rgba(66,53,44,0.07)',
    text: '#42352C',
    name: '#42352C',
    project: 'rgba(66,53,44,0.48)',
    line: 'rgba(66,53,44,0.15)',
  },
  {
    bg: '#512C32',           // wine
    quoteDecor: 'rgba(238,235,231,0.1)',
    text: '#EEEBE7',
    name: '#EEEBE7',
    project: 'rgba(238,235,231,0.58)',
    line: 'rgba(238,235,231,0.22)',
  },
  {
    bg: '#42352C',           // espresso
    quoteDecor: 'rgba(238,235,231,0.08)',
    text: '#EEEBE7',
    name: '#EEEBE7',
    project: 'rgba(238,235,231,0.42)',
    line: 'rgba(238,235,231,0.15)',
  },
  {
    bg: '#645143',           // taupe
    quoteDecor: 'rgba(238,235,231,0.1)',
    text: '#EEEBE7',
    name: '#EEEBE7',
    project: 'rgba(238,235,231,0.55)',
    line: 'rgba(238,235,231,0.2)',
  },
  {
    bg: '#2a1f1a',           // deep dark
    quoteDecor: 'rgba(81,44,50,0.4)',
    text: '#EEEBE7',
    name: '#EEEBE7',
    project: 'rgba(238,235,231,0.4)',
    line: 'rgba(238,235,231,0.12)',
  },
]

const GAP = 20 // px gap between cards
// Clones at end for seamless forward loop
const CLONE_COUNT = 3
const extended = [...testimonials, ...testimonials.slice(0, CLONE_COUNT)]

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const [live, setLive] = useState(true) // false = instant jump (no animation)
  const containerRef = useRef<HTMLDivElement>(null)
  const [cardWidth, setCardWidth] = useState(0)

  // Measure card width based on container + viewport
  const measure = useCallback(() => {
    if (!containerRef.current) return
    const w = containerRef.current.offsetWidth
    const mobile = window.innerWidth < 768
    setCardWidth(mobile ? Math.round(w * 0.84) : Math.round((w - 2 * GAP) / 3))
  }, [])

  useEffect(() => {
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure])

  // Auto-advance every 5 s
  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => c + 1), 5000)
    return () => clearInterval(t)
  }, [])

  // Seamless forward loop: when we land on a clone, wait for animation → instant reset
  useEffect(() => {
    if (current >= testimonials.length) {
      const t = setTimeout(() => {
        setLive(false)
        setCurrent(current - testimonials.length)
        // Re-enable animation on next paint
        requestAnimationFrame(() => requestAnimationFrame(() => setLive(true)))
      }, 750)
      return () => clearTimeout(t)
    }
  }, [current])

  const step = cardWidth + GAP
  const translateX = cardWidth > 0 ? -(current * step) : 0
  const dotIndex = current % testimonials.length

  const next = () => setCurrent((c) => c + 1)

  const prev = () => {
    if (current === 0) {
      // Instant jump to the "mirror" position at the end of real cards, then animate back
      setLive(false)
      setCurrent(testimonials.length)
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setLive(true)
          setCurrent(testimonials.length - 1)
        })
      )
    } else {
      setCurrent((c) => c - 1)
    }
  }

  const goTo = (i: number) => {
    if (i === dotIndex) return
    // If jumping forward past clone boundary just set directly
    setCurrent(i)
  }

  return (
    <section
      style={{
        background: '#231a14',
        paddingTop: 'clamp(5rem, 10vw, 9rem)',
        paddingBottom: 'clamp(5rem, 10vw, 9rem)',
        overflow: 'hidden',
      }}
      aria-label="Client testimonials"
    >
      {/* Header */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 clamp(1.25rem, 5vw, 4rem)',
          marginBottom: 'clamp(2.5rem, 4vw, 4rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}
      >
        <div>
          <p
            className="font-serif"
            style={{ color: '#EEEBE7', fontSize: 'clamp(1.1rem, 1.6vw, 1.5rem)', letterSpacing: '0.01em' }}
          >
            In Their Words
          </p>
        </div>

        {/* Arrow controls */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          {[
            { label: 'Previous', action: prev, icon: 'M19 12H5M12 5l-7 7 7 7' },
            { label: 'Next', action: next, icon: 'M5 12h14M12 5l7 7-7 7' },
          ].map(({ label, action, icon }) => (
            <button
              key={label}
              onClick={action}
              aria-label={label}
              style={{
                width: '44px',
                height: '44px',
                border: '1px solid rgba(238,235,231,0.14)',
                background: 'transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(238,235,231,0.5)',
                transition: 'border-color 0.25s, color 0.25s',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(238,235,231,0.4)'
                ;(e.currentTarget as HTMLButtonElement).style.color = '#EEEBE7'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(238,235,231,0.14)'
                ;(e.currentTarget as HTMLButtonElement).style.color = 'rgba(238,235,231,0.5)'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d={icon} />
              </svg>
            </button>
          ))}
        </div>
      </div>

      {/* Track container */}
      <div
        ref={containerRef}
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 clamp(1.25rem, 5vw, 4rem)',
          overflow: 'hidden',
        }}
      >
        <motion.div
          style={{ display: 'flex', gap: `${GAP}px`, alignItems: 'stretch' }}
          animate={{ x: translateX }}
          transition={
            live
              ? { duration: 0.78, ease: [0.22, 1, 0.36, 1] }
              : { duration: 0 }
          }
        >
          {extended.map((t, i) => {
            const theme = themes[i % themes.length]
            return (
              <div
                key={i}
                aria-hidden={i !== current}
                style={{
                  width: cardWidth > 0 ? `${cardWidth}px` : undefined,
                  flex: cardWidth > 0 ? '0 0 auto' : `0 0 calc((100% - ${2 * GAP}px) / 3)`,
                  background: theme.bg,
                  padding: 'clamp(2rem, 3.5vw, 3rem)',
                  minHeight: 'clamp(360px, 42vw, 500px)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Decorative large quote mark behind content */}
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: '-0.5rem',
                    left: '1.5rem',
                    fontSize: 'clamp(8rem, 14vw, 14rem)',
                    lineHeight: 1,
                    color: theme.quoteDecor,
                    fontFamily: 'var(--font-serif)',
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}
                >
                  &ldquo;
                </span>

                {/* Quote text */}
                <blockquote
                  className="font-serif italic"
                  style={{
                    color: theme.text,
                    lineHeight: 1.85,
                    fontSize: 'clamp(1.05rem, 1.3vw, 1.3rem)',
                    position: 'relative',
                    zIndex: 1,
                    flex: 1,
                    marginTop: 'clamp(3rem, 5vw, 4.5rem)',
                  }}
                >
                  {t.quote}
                </blockquote>

                {/* Attribution */}
                <div style={{ position: 'relative', zIndex: 1, marginTop: '2rem' }}>
                  <div
                    style={{
                      width: '2rem',
                      height: '1px',
                      background: theme.line,
                      marginBottom: '1.1rem',
                    }}
                  />
                  <cite className="not-italic">
                    <p
                      className="font-serif"
                      style={{
                        color: theme.name,
                        fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)',
                        marginBottom: '0.3rem',
                      }}
                    >
                      {t.name}
                    </p>
                    <p
                      style={{
                        color: theme.project,
                        fontSize: '0.6rem',
                        letterSpacing: '0.22em',
                        textTransform: 'uppercase',
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 500,
                      }}
                    >
                      {t.project}
                    </p>
                  </cite>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>

      {/* Dots */}
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 clamp(1.25rem, 5vw, 4rem)',
          marginTop: 'clamp(1.75rem, 3vw, 2.5rem)',
          display: 'flex',
          gap: '0.6rem',
          alignItems: 'center',
        }}
      >
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            style={{
              width: i === dotIndex ? '24px' : '6px',
              height: '4px',
              borderRadius: '3px',
              background:
                i === dotIndex
                  ? themes[i % themes.length].bg
                  : 'rgba(238,235,231,0.15)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.35s ease',
            }}
          />
        ))}
      </div>
    </section>
  )
}
