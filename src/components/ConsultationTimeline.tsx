'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const steps = [
  {
    number: '01',
    subtitle: 'Before We Meet',
    title: 'Pre-Consultation Questionnaire',
    desc: 'You complete a simple online questionnaire sharing essential information about your space, lifestyle, and design preferences. You may upload reference images and include general measurements directly within the form.',
  },
  {
    number: '02',
    subtitle: 'We Align on Your Vision',
    title: '30-Minute Briefing Call',
    desc: 'A focused initial meeting to review the information provided, better understand your lifestyle, clarify expectations, and identify key design priorities before the working session.',
  },
  {
    number: '03',
    subtitle: 'Live, Hands-On Exploration',
    title: '2-Hour Design Session',
    desc: 'An in-depth working session where we explore layout solutions, test ideas, and develop design directions in real time — with immediate feedback and refinements tailored to your needs.',
  },
]

export default function ConsultationTimeline() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div className="w-full">
      {steps.map((step, i) => (
        <div key={step.number}>
          {/* Thin top divider */}
          <div style={{ width: '100%', height: '1px', background: 'rgba(66,53,44,0.12)' }} />

          <button
            onClick={() => setActive(active === i ? null : i)}
            className="w-full text-left group"
            style={{ paddingTop: '1.75rem', paddingBottom: '1.75rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>

              {/* Step number */}
              <span
                className="t-label flex-shrink-0"
                style={{
                  color: active === i ? 'var(--color-wine)' : 'rgba(66,53,44,0.35)',
                  letterSpacing: '0.22em',
                  fontSize: '0.65rem',
                  paddingTop: '0.25rem',
                  transition: 'color 0.3s ease',
                  minWidth: '2rem',
                }}
              >
                {step.number}
              </span>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <p
                  className="t-label"
                  style={{
                    color: 'rgba(66,53,44,0.45)',
                    letterSpacing: '0.18em',
                    marginBottom: '0.5rem',
                  }}
                >
                  {step.subtitle}
                </p>
                <h4
                  className="font-serif"
                  style={{
                    color: active === i ? 'var(--color-wine)' : 'var(--color-espresso)',
                    fontSize: 'clamp(1rem, 1.2vw, 1.25rem)',
                    lineHeight: 1.4,
                    transition: 'color 0.3s ease',
                  }}
                >
                  {step.title}
                </h4>

                {/* Expandable description — no background box */}
                <AnimatePresence>
                  {active === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p
                        className="t-body"
                        style={{
                          color: 'var(--color-taupe)',
                          lineHeight: 1.9,
                          marginTop: '1rem',
                          maxWidth: '480px',
                        }}
                      >
                        {step.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Expand indicator */}
              <span
                style={{
                  color: 'var(--color-taupe)',
                  opacity: 0.4,
                  fontSize: '1.1rem',
                  lineHeight: 1,
                  flexShrink: 0,
                  paddingTop: '0.2rem',
                  transform: active === i ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease, opacity 0.3s ease',
                }}
              >
                +
              </span>
            </div>
          </button>
        </div>
      ))}

      {/* Final divider */}
      <div style={{ width: '100%', height: '1px', background: 'rgba(66,53,44,0.12)' }} />

      <p
        className="t-label"
        style={{ color: 'rgba(66,53,44,0.35)', letterSpacing: '0.18em', marginTop: '1.5rem' }}
      >
        Click each step to learn more
      </p>
    </div>
  )
}
