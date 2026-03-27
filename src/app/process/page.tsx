import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Our Design Process — ARQMA Interior Design Toronto',
  description:
    'Discover the 10-phase interior design process at ARQMA Toronto — from site measurements and briefing to final styling. Every project is managed with clarity and dedication.',
  alternates: { canonical: 'https://www.arqma.ca/process' },
}

const phases = [
  {
    number: '01',
    title: 'Site Measurements & Pre-Design Preparation',
    description:
      'We begin by visiting the space to take precise measurements and document existing conditions. This foundational step ensures all design work is grounded in the reality of the space.',
    details: [],
  },
  {
    number: '02',
    title: 'Design Briefing',
    description:
      'A thorough conversation to understand your lifestyle, preferences, functional needs, and aesthetic vision. This briefing informs every decision that follows.',
    details: [],
  },
  {
    number: '03',
    title: 'Layout Development',
    description:
      'We explore multiple floor plan configurations to find the spatial arrangement that best serves your daily life while maximizing flow and efficiency.',
    details: [],
  },
  {
    number: '04',
    title: 'Concept Design & 3D Visualization',
    description:
      'The first comprehensive look at your future space — presented through 3D renderings and a curated moodboard that captures the mood, palette, and material direction.',
    details: [
      'Realistic renderings',
      'Moodboard with key finishes',
      'Preliminary furniture selections',
      'Initial cost estimate',
    ],
  },
  {
    number: '05',
    title: 'Design Review & Refinement',
    description:
      'We review the concept together, gather your feedback, and refine the design to better reflect your preferences before moving into the final phase.',
    details: [],
  },
  {
    number: '06',
    title: 'Final Design Presentation',
    description:
      'The complete and resolved design is presented with all updates incorporated, ready for your approval.',
    details: [
      'Updated 3D visuals',
      'Complete shopping list',
      'Refined cost estimate',
    ],
  },
  {
    number: '07',
    title: 'Technical Drawings',
    description:
      'Detailed construction and millwork drawings are produced to guide contractors and tradespeople through the implementation phase with precision.',
    details: [],
  },
  {
    number: '08',
    title: 'Material Selection & Sourcing',
    description:
      'We accompany you to showrooms and supplier visits to select and confirm all finishes, tiles, hardware, and furniture — ensuring every material aligns with the design intent.',
    details: ['Showroom visits included'],
  },
  {
    number: '09',
    title: 'Implementation Support',
    description:
      'Throughout the construction and installation phase, we remain closely involved — reviewing progress, coordinating with contractors, and ensuring quality at every step.',
    details: [],
  },
  {
    number: '10',
    title: 'Final Styling',
    description:
      'The finishing touch. We curate and arrange decorative elements, accessories, and soft furnishings to complete the space and bring the design to life.',
    details: ['Optional service'],
  },
]

export default function ProcessPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="section-full w-full overflow-hidden relative" aria-label="Process hero">
        <Image
          src="/images/projects/wellthera/RP400446.jpg"
          alt="ARQMA interior design process Toronto"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="overlay-dark" />

        <div className="absolute bottom-16 left-[5vw] z-20">
          <p className="t-label mb-3" style={{ color: 'rgba(238,235,231,0.6)' }}>
            How We Work
          </p>
          <h1
            className="t-hero font-serif"
            style={{ color: 'var(--color-cream)' }}
          >
            Our Process
          </h1>
        </div>
      </section>

      {/* ── OPENING QUOTE (cream bg) ──────────────────────────── */}
      <section
        className="py-28 md:py-36"
        style={{ background: 'var(--color-cream)' }}
        aria-label="Process philosophy"
      >
        <div className="container-narrow text-center">
          <AnimateOnScroll>
            <p className="t-label mb-8" style={{ color: 'var(--color-taupe)' }}>
              Our Approach
            </p>
            <blockquote
              className="t-display font-serif italic mb-8"
              style={{ color: 'var(--color-espresso)', lineHeight: 1.2 }}
            >
              &ldquo;Dynamic, authentic, and highly organized, we ensure every project runs seamlessly.&rdquo;
            </blockquote>
            <span className="divider" style={{ margin: '0 auto', display: 'block' }} />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── PHASES ───────────────────────────────────────────── */}
      <section
        className="pb-28 md:pb-40"
        style={{ background: 'var(--color-cream)' }}
        aria-label="Design phases"
      >
        <div className="container-wide">
          {phases.map((phase, i) => (
            <AnimateOnScroll key={phase.number} delay={0.05}>
              <div
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14"
                style={{
                  borderTop: '1px solid rgba(66,53,44,0.12)',
                  borderBottom: i === phases.length - 1 ? '1px solid rgba(66,53,44,0.12)' : 'none',
                }}
              >
                {/* Number + Title */}
                <div className="md:col-span-5 flex gap-6 items-start">
                  <span
                    className="t-label flex-shrink-0 mt-1 w-10"
                    style={{ color: 'var(--color-taupe)', opacity: 0.45 }}
                  >
                    {phase.number}
                  </span>
                  <h2
                    className="font-serif"
                    style={{
                      color: 'var(--color-espresso)',
                      fontSize: 'clamp(1.1rem, 1.5vw, 1.6rem)',
                      lineHeight: 1.3,
                    }}
                  >
                    {phase.title}
                  </h2>
                </div>

                {/* Description */}
                <div className="md:col-span-7 md:pl-6">
                  <p className="t-body mb-4" style={{ color: 'var(--color-taupe)', lineHeight: 1.9 }}>
                    {phase.description}
                  </p>
                  {phase.details.length > 0 && (
                    <ul className="flex flex-wrap gap-3 mt-4">
                      {phase.details.map((detail) => (
                        <li
                          key={detail}
                          className="t-label px-4 py-2"
                          style={{
                            border: '1px solid rgba(66,53,44,0.18)',
                            color: 'var(--color-taupe)',
                          }}
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section
        className="relative py-32 md:py-44 overflow-hidden"
        aria-label="Start your project"
      >
        <Image
          src="/images/projects/nathalia-marques/SAL_CREATORS_ARQMA_NATALIA-1.jpg"
          alt="ARQMA interior design Toronto"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(42,31,26,0.62)' }} />

        <div className="container-narrow relative z-10 text-center">
          <AnimateOnScroll>
            <p className="t-label mb-6" style={{ color: 'rgba(238,235,231,0.6)' }}>
              Ready to Begin?
            </p>
            <h2
              className="t-display font-serif italic mb-8"
              style={{ color: 'var(--color-cream)' }}
            >
              Let&apos;s start your project with clarity and intention.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/connect" className="btn-light">
                Get in Touch
              </Link>
              <Link href="/services" className="btn-light">
                Explore Services
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
