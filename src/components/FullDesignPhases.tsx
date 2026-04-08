'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const phases = [
  {
    number: '01',
    title: 'Site Measurements',
    desc: 'We verify all site measurements to ensure design accuracy. For remote projects, the client or a local professional provides the measurements with our guided instructions.',
  },
  {
    number: '02',
    title: 'Design Briefing',
    desc: 'A detailed briefing conducted online or in-person to fully understand your needs, lifestyle, and vision — exploring both functional requirements and the emotional experience of the space.',
  },
  {
    number: '03',
    title: 'Layout Development',
    desc: 'We develop and present layout options that define the spatial organization. Once the preferred layout is selected, we move forward with full design development.',
  },
  {
    number: '04',
    title: 'Concept Design & 3D',
    desc: 'The project comes to life through detailed 3D modeling: realistic renderings, moodboards with key finishes, preliminary furniture selections, and an initial cost estimate.',
  },
  {
    number: '05',
    title: 'Design Review',
    desc: 'A follow-up meeting to review the proposed design. You have the opportunity to request adjustments and refinements to ensure everything aligns perfectly with your expectations.',
  },
  {
    number: '06',
    title: 'Final Design Presentation',
    desc: 'After revisions, we present the finalized design package: updated 3D visuals, complete shopping list, and a refined preliminary cost estimate.',
  },
  {
    number: '07',
    title: 'Technical Drawings',
    desc: 'Detailed technical drawings are developed to support contractors and trades during construction. We can also assist in preparing documentation for permits when needed.',
  },
  {
    number: '08',
    title: 'Material Selection & Sourcing',
    desc: 'We finalize all material selections, potentially including guided visits to showrooms and suppliers to ensure every choice aligns with the design intent.',
  },
  {
    number: '09',
    title: 'Implementation Support',
    desc: 'Throughout the renovation or installation process, we remain available to provide guidance, answer questions, and support the execution of the design at every stage.',
  },
  {
    number: '10',
    title: 'Final Styling',
    desc: 'Optional: upon completion we curate decorative elements and styling details, finishing the space with a fully cohesive, magazine-ready result.',
  },
]

export default function FullDesignPhases() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div style={{ width: '100%' }}>
      {phases.map((phase, i) => (
        <div key={phase.number}>
          <div style={{ width: '100%', height: '0.5px', background: 'rgba(238,235,231,0.1)' }} />
          <button
            onClick={() => setActive(active === i ? null : i)}
            style={{
              width: '100%',
              textAlign: 'left',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              paddingTop: '1.4rem',
              paddingBottom: '1.4rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
              {/* Number */}
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  fontWeight: 300,
                  color: active === i ? 'rgba(238,235,231,0.6)' : 'rgba(238,235,231,0.2)',
                  minWidth: '1.8rem',
                  paddingTop: '0.2rem',
                  transition: 'color 0.45s ease',
                  flexShrink: 0,
                }}
              >
                {phase.number}
              </span>

              {/* Title + description */}
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(0.92rem, 1.05vw, 1.15rem)',
                      letterSpacing: '0.01em',
                      lineHeight: 1.45,
                      color: active === i ? 'var(--color-cream)' : 'rgba(238,235,231,0.6)',
                      transition: 'color 0.45s ease',
                    }}
                  >
                    {phase.title}
                  </span>
                  <span
                    style={{
                      fontSize: '1.05rem',
                      lineHeight: 1,
                      color: 'rgba(238,235,231,0.28)',
                      flexShrink: 0,
                      display: 'block',
                      transform: active === i ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  >
                    +
                  </span>
                </div>

                <AnimatePresence>
                  {active === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        overflow: 'hidden',
                        color: 'rgba(238,235,231,0.48)',
                        fontSize: '0.79rem',
                        lineHeight: 1.95,
                        marginTop: '0.85rem',
                        maxWidth: '420px',
                        letterSpacing: '0.025em',
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 300,
                      }}
                    >
                      {phase.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </button>
        </div>
      ))}
      <div style={{ width: '100%', height: '0.5px', background: 'rgba(238,235,231,0.1)' }} />

      {/* Footer note */}
      <p
        style={{
          marginTop: '1.5rem',
          fontSize: '0.58rem',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'rgba(238,235,231,0.2)',
          fontFamily: 'var(--font-sans)',
          fontWeight: 500,
        }}
      >
        Select each phase to explore
      </p>
    </div>
  )
}
