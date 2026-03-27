'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Pre-Consultation Questionnaire',
    subtitle: 'Before we meet',
    desc: 'You complete a simple online questionnaire sharing essential information about your space, lifestyle, and design preferences. You may upload reference images and include general measurements directly within the form.',
    icon: '✦',
  },
  {
    number: '02',
    title: '30-Minute Briefing Call',
    subtitle: 'We align on your vision',
    desc: 'A focused initial meeting to review the information provided, better understand your lifestyle, clarify expectations, and identify key design priorities before the working session.',
    icon: '◈',
  },
  {
    number: '03',
    title: '2-Hour Design Session',
    subtitle: 'Live, hands-on exploration',
    desc: 'An in-depth working session where we explore layout solutions, test ideas, and develop design directions in real time — with immediate feedback and refinements tailored to your needs.',
    icon: '◇',
  },
]

export default function ConsultationTimeline() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div className="w-full">
      {/* Desktop: horizontal timeline */}
      <div className="hidden md:block">
        {/* Connecting line */}
        <div className="relative flex items-start gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex-1 relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="absolute top-[28px] left-1/2 w-full h-[1px]"
                  style={{ background: 'rgba(66,53,44,0.18)', zIndex: 0 }}
                />
              )}

              <button
                onClick={() => setActive(active === i ? null : i)}
                className="w-full text-left group"
              >
                {/* Number circle */}
                <div className="relative flex flex-col items-center mb-6">
                  <motion.div
                    animate={{
                      background: active === i ? 'var(--color-wine)' : 'transparent',
                      borderColor: active === i ? 'var(--color-wine)' : 'rgba(66,53,44,0.25)',
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 w-14 h-14 rounded-full border flex items-center justify-center"
                    style={{ background: active === i ? 'var(--color-wine)' : 'transparent' }}
                  >
                    <span
                      className="t-label"
                      style={{
                        color: active === i ? 'var(--color-cream)' : 'var(--color-taupe)',
                        fontSize: '0.7rem',
                        letterSpacing: '0.15em',
                      }}
                    >
                      {step.number}
                    </span>
                  </motion.div>
                </div>

                {/* Step info */}
                <div className="px-3">
                  <p
                    className="t-label mb-2"
                    style={{ color: 'var(--color-taupe)', opacity: 0.6 }}
                  >
                    {step.subtitle}
                  </p>
                  <h4
                    className="font-serif mb-3"
                    style={{
                      color: active === i ? 'var(--color-wine)' : 'var(--color-espresso)',
                      fontSize: 'clamp(0.95rem, 1.1vw, 1.15rem)',
                      lineHeight: 1.35,
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {step.title}
                  </h4>
                </div>
              </button>

              {/* Expandable description */}
              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div
                      className="mx-3 mb-2 p-5 rounded-sm"
                      style={{ background: 'rgba(81,44,50,0.06)', borderLeft: '2px solid var(--color-wine)' }}
                    >
                      <p className="t-body" style={{ color: 'var(--color-taupe)', lineHeight: 1.85 }}>
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Hint */}
        <p
          className="t-label mt-6 text-center"
          style={{ color: 'var(--color-taupe)', opacity: 0.4 }}
        >
          Click each step to learn more
        </p>
      </div>

      {/* Mobile: vertical accordion */}
      <div className="md:hidden space-y-4">
        {steps.map((step, i) => (
          <button
            key={step.number}
            onClick={() => setActive(active === i ? null : i)}
            className="w-full text-left"
          >
            <div
              className="flex items-start gap-5 p-5 transition-all duration-300"
              style={{
                background: active === i ? 'rgba(81,44,50,0.06)' : 'transparent',
                borderLeft: active === i ? '2px solid var(--color-wine)' : '2px solid rgba(66,53,44,0.12)',
              }}
            >
              <span
                className="t-label flex-shrink-0 pt-1"
                style={{ color: 'var(--color-wine)', fontSize: '0.7rem' }}
              >
                {step.number}
              </span>
              <div className="flex-1">
                <h4
                  className="font-serif mb-1"
                  style={{ color: 'var(--color-espresso)', fontSize: '1rem', lineHeight: 1.4 }}
                >
                  {step.title}
                </h4>
                <AnimatePresence>
                  {active === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="t-body mt-3 overflow-hidden"
                      style={{ color: 'var(--color-taupe)', lineHeight: 1.85 }}
                    >
                      {step.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
              <span
                className="flex-shrink-0 text-sm transition-transform duration-300"
                style={{
                  color: 'var(--color-taupe)',
                  opacity: 0.5,
                  transform: active === i ? 'rotate(45deg)' : 'rotate(0deg)',
                }}
              >
                +
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
