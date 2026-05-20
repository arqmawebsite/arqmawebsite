'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const phases = [
  {
    label: 'Phase 1 — Discovery & Planning',
    steps: [
      {
        number: '1.',
        title: 'Discovery & Design Direction',
        subtitle: 'Briefing Meeting',
        desc: 'We begin by understanding your space, your goals, and how you live — reviewing your needs, style, and priorities, analysing your space and requirements, and aligning on scope, expectations, and direction. This sets the foundation for the entire project.',
      },
      {
        number: '2.',
        title: 'Spatial Planning',
        subtitle: '',
        desc: 'We develop the layout strategy that will guide all design decisions — exploring optimized layout options, functional zoning and circulation, and space planning based on your daily use. This ensures the space works before anything else is defined.',
      },
    ],
  },
  {
    label: 'Phase 2 — Design Development',
    steps: [
      {
        number: '3.',
        title: 'Design Concept Development',
        subtitle: '',
        desc: 'We bring your space to life visually and conceptually — presenting moodboards and design direction, material and finish selections, and 3D renderings to visualize the space. You\'ll clearly see how everything comes together.',
      },
      {
        number: '4.',
        title: 'Design Review',
        subtitle: 'Follow-up Meeting',
        desc: 'After the concept presentation, you\'ll have time to review everything and prepare your questions. We\'ll meet to go through the design together, discuss your feedback, and evaluate what can be adjusted or refined — ensuring you feel confident and fully understood before finalizing.',
      },
      {
        number: '5.',
        title: 'Design Concept Refinement',
        subtitle: '',
        desc: 'Based on our discussion, we refine the design and finalize all decisions — implementing agreed adjustments, reaching final alignment on layout, materials, and selections, and preparing for execution. This is where everything becomes fully aligned and approved.',
      },
    ],
  },
  {
    label: 'Phase 3 — Execution & Completion',
    steps: [
      {
        number: '6.',
        title: 'Technical Documentation',
        subtitle: '',
        desc: 'We prepare everything needed for execution — detailed drawings (layouts, lighting, millwork, elevations), specifications for materials and finishes, and information for contractors and trades. This ensures the design can be built accurately.',
      },
      {
        number: '7.',
        title: 'Implementation Support',
        subtitle: '',
        desc: 'We stay involved as your project comes to life — maintaining ongoing communication with you and your contractor, providing clarifications and design adjustments as needed, and offering guidance to help you make decisions with confidence throughout the process.',
      },
      {
        number: '8.',
        title: 'Decor Styling',
        subtitle: '',
        desc: 'The final layer that brings everything together. We curate and style the space to make it feel complete, personal, and lived-in — selecting decor and finishing elements, placing them with intention, and delivering a cohesive, polished result. This is where the space truly comes to life.',
      },
    ],
  },
]

export default function FullDesignPhases() {
  const [activePhase, setActivePhase] = useState<number | null>(null)
  const [activeStep, setActiveStep] = useState<string | null>(null)

  return (
    <div style={{ width: '100%' }}>
      {phases.map((phase, pi) => (
        <div key={phase.label}>
          {/* Phase header */}
          <button
            onClick={() => {
              setActivePhase(activePhase === pi ? null : pi)
              setActiveStep(null)
            }}
            style={{
              width: '100%',
              textAlign: 'left',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              paddingTop: '1.6rem',
              paddingBottom: '1.6rem',
              borderTop: '0.5px solid rgba(238,235,231,0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.65rem',
                letterSpacing: '0.24em',
                fontWeight: 400,
                textTransform: 'uppercase',
                color: activePhase === pi ? 'rgba(238,235,231,0.75)' : 'rgba(238,235,231,0.38)',
                transition: 'color 0.4s ease',
              }}
            >
              {phase.label}
            </span>
            <span
              style={{
                fontSize: '1rem',
                color: 'rgba(238,235,231,0.28)',
                flexShrink: 0,
                display: 'block',
                transform: activePhase === pi ? 'rotate(45deg)' : 'rotate(0deg)',
                transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              +
            </span>
          </button>

          {/* Steps inside this phase */}
          <AnimatePresence>
            {activePhase === pi && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ overflow: 'hidden' }}
              >
                {phase.steps.map((step, si) => {
                  const key = `${pi}-${si}`
                  const isOpen = activeStep === key
                  return (
                    <button
                      key={step.number}
                      onClick={() => setActiveStep(isOpen ? null : key)}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        paddingTop: '1.2rem',
                        paddingBottom: '1.2rem',
                        paddingLeft: '1.5rem',
                        borderTop: '0.5px solid rgba(238,235,231,0.07)',
                      }}
                    >
                      <div style={{ display: 'grid', gridTemplateColumns: '2rem 1fr auto', gap: '1rem', alignItems: 'flex-start' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.6rem',
                            letterSpacing: '0.2em',
                            fontWeight: 300,
                            color: isOpen ? 'rgba(238,235,231,0.55)' : 'rgba(238,235,231,0.2)',
                            paddingTop: '0.25rem',
                            transition: 'color 0.35s ease',
                            flexShrink: 0,
                          }}
                        >
                          {step.number}
                        </span>
                        <div>
                          <span
                            style={{
                              fontFamily: 'var(--font-serif)',
                              fontSize: 'clamp(0.88rem, 1vw, 1.05rem)',
                              lineHeight: 1.4,
                              color: isOpen ? 'var(--color-cream)' : 'rgba(238,235,231,0.55)',
                              transition: 'color 0.35s ease',
                              display: 'block',
                            }}
                          >
                            {step.title}
                          </span>
                          {step.subtitle && (
                            <span
                              style={{
                                fontFamily: 'var(--font-sans)',
                                fontSize: '0.68rem',
                                letterSpacing: '0.14em',
                                color: 'rgba(238,235,231,0.25)',
                                display: 'block',
                                marginTop: '0.2rem',
                              }}
                            >
                              {step.subtitle}
                            </span>
                          )}
                          <AnimatePresence>
                            {isOpen && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                style={{
                                  overflow: 'hidden',
                                  color: 'rgba(238,235,231,0.45)',
                                  fontSize: '0.79rem',
                                  lineHeight: 1.95,
                                  marginTop: '0.75rem',
                                  maxWidth: '400px',
                                  fontFamily: 'var(--font-sans)',
                                  fontWeight: 300,
                                }}
                              >
                                {step.desc}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                        <span
                          style={{
                            fontSize: '0.95rem',
                            color: 'rgba(238,235,231,0.2)',
                            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                            transition: 'transform 0.35s ease',
                            paddingTop: '0.15rem',
                          }}
                        >
                          +
                        </span>
                      </div>
                    </button>
                  )
                })}
                <div style={{ height: '0.5px', background: 'rgba(238,235,231,0.07)', marginLeft: '1.5rem' }} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
      <div style={{ width: '100%', height: '0.5px', background: 'rgba(238,235,231,0.12)' }} />

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
