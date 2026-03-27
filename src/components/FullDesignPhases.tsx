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
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="w-full">
      {phases.map((phase, i) => (
        <motion.div
          key={phase.number}
          onHoverStart={() => setHovered(i)}
          onHoverEnd={() => setHovered(null)}
          className="relative cursor-default"
          style={{ borderBottom: '1px solid rgba(238,235,231,0.1)' }}
        >
          <motion.div
            animate={{
              paddingLeft: hovered === i ? '1.5rem' : '0',
              background: hovered === i ? 'rgba(238,235,231,0.05)' : 'transparent',
            }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="py-5 flex items-start gap-6"
          >
            {/* Number */}
            <span
              className="t-label flex-shrink-0 w-8 pt-1"
              style={{
                color: hovered === i ? 'rgba(238,235,231,0.8)' : 'rgba(238,235,231,0.3)',
                transition: 'color 0.3s ease',
                fontSize: '0.65rem',
              }}
            >
              {phase.number}
            </span>

            {/* Title + expandable desc */}
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span
                  className="font-serif"
                  style={{
                    color: hovered === i ? 'var(--color-cream)' : 'rgba(238,235,231,0.75)',
                    fontSize: 'clamp(0.95rem, 1.1vw, 1.15rem)',
                    transition: 'color 0.3s ease',
                    lineHeight: 1.4,
                  }}
                >
                  {phase.title}
                </span>
                {/* Arrow indicator */}
                <motion.span
                  animate={{ opacity: hovered === i ? 1 : 0, x: hovered === i ? 0 : -8 }}
                  transition={{ duration: 0.25 }}
                  style={{ color: 'rgba(238,235,231,0.4)', fontSize: '0.8rem', flexShrink: 0, marginLeft: '1rem' }}
                >
                  →
                </motion.span>
              </div>

              {/* Description — slides in on hover */}
              <AnimatePresence>
                {hovered === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: '0.75rem' }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="t-body overflow-hidden"
                    style={{ color: 'rgba(238,235,231,0.6)', lineHeight: 1.85, fontSize: '0.82rem' }}
                  >
                    {phase.desc}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      ))}

      {/* Timeline duration note */}
      <div className="mt-8 flex items-start gap-4">
        <div className="w-8 flex-shrink-0">
          <div className="h-px w-4" style={{ background: 'rgba(238,235,231,0.25)', marginTop: '0.5rem' }} />
        </div>
        <p className="t-label" style={{ color: 'rgba(238,235,231,0.35)', lineHeight: 1.6 }}>
          Design phase typically 2–4 months.<br />
          Construction timeline varies by scope.
        </p>
      </div>
    </div>
  )
}
