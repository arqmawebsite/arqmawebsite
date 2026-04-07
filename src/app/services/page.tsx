import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import ConsultationTimeline from '@/components/ConsultationTimeline'
import FullDesignPhases from '@/components/FullDesignPhases'

export const metadata: Metadata = {
  title: 'Services — ARQMA Interior Design Toronto | Canada & USA',
  description:
    'ARQMA offers interior design services across Canada and the United States: Design Consultation (starting at $600) and Full-Service Design from concept to completion. In-person and remote services available.',
  alternates: { canonical: 'https://www.arqma.ca/services' },
}

const consultationDeliverables = [
  'Space planning layout',
  'Moodboard with suggested finishes and materials',
  'Key furniture piece selections',
  'Design guidance and recommendations',
  '1 week of technical support post-session',
]

const fullServiceDeliverables = [
  '3D renderings & realistic visualizations',
  'Technical drawings for construction',
  'Complete shopping list',
  'Furniture, lighting & accessories specifications',
  'Material selection & showroom sourcing',
  'Preliminary cost estimates',
  'Contractor coordination support',
  'Ongoing implementation support',
  'Final styling (optional)',
]

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="section-full w-full overflow-hidden relative" aria-label="Services hero">
        <Image
          src="/images/projects/mb-beauty/MBBEAULTY-SAL-CREATORS-1.jpg"
          alt="ARQMA interior design services Toronto"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="overlay-dark" />

        <div className="absolute bottom-16 left-[5vw] z-20">
          <p className="t-label mb-4" style={{ color: 'rgba(238,235,231,0.6)' }}>
            What We Offer
          </p>
          <h1 className="t-hero font-serif" style={{ color: 'var(--color-cream)' }}>
            Services
          </h1>
        </div>
      </section>

      {/* ── OVERVIEW (espresso bg) ────────────────────────────── */}
      <section
        className="section-pad-xl"
        style={{ background: 'var(--color-espresso)' }}
        aria-label="Service overview"
      >
        <div className="container-wide">
          {/* Header */}
          <AnimateOnScroll>
            <p className="t-label mb-5" style={{ color: 'rgba(238,235,231,0.45)' }}>
              Our Services
            </p>
            <h2
              className="t-heading font-serif"
              style={{ color: 'var(--color-cream)', maxWidth: '560px', marginBottom: 'clamp(3rem, 5vw, 5rem)' }}
            >
              A tailored experience for every project.
            </h2>
          </AnimateOnScroll>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 01 */}
            <AnimateOnScroll delay={0}>
              <div
                className="flex flex-col h-full"
                style={{
                  border: '1px solid rgba(238,235,231,0.1)',
                  background: 'rgba(238,235,231,0.03)',
                  padding: 'clamp(2rem, 3.5vw, 3.5rem)',
                }}
              >
                <p className="t-label mb-8" style={{ color: 'rgba(238,235,231,0.3)' }}>01</p>
                <h3 className="t-subheading font-serif mb-4" style={{ color: 'var(--color-cream)' }}>
                  Design Consultation
                </h3>
                <p className="t-label mb-10" style={{ color: 'rgba(238,235,231,0.4)' }}>
                  Starting at $600 per consultation
                </p>
                <p className="t-body mb-12" style={{ color: 'rgba(238,235,231,0.65)', lineHeight: 2 }}>
                  Ideal for clients who want to improve their space with professional guidance while
                  managing implementation on their own. Focused, clear, and actionable.
                </p>
                <Link
                  href="#consultation"
                  className="btn-light mt-auto"
                  style={{ display: 'inline-block', width: 'fit-content' }}
                >
                  Learn More
                </Link>
              </div>
            </AnimateOnScroll>

            {/* Card 02 */}
            <AnimateOnScroll delay={0.1}>
              <div
                className="flex flex-col h-full"
                style={{
                  border: '1px solid rgba(238,235,231,0.1)',
                  background: 'rgba(238,235,231,0.03)',
                  padding: 'clamp(2rem, 3.5vw, 3.5rem)',
                }}
              >
                <p className="t-label mb-8" style={{ color: 'rgba(238,235,231,0.3)' }}>02</p>
                <h3 className="t-subheading font-serif mb-4" style={{ color: 'var(--color-cream)' }}>
                  Full Design Service
                </h3>
                <p className="t-label mb-10" style={{ color: 'rgba(238,235,231,0.4)' }}>
                  End-to-End Guidance
                </p>
                <p className="t-body mb-12" style={{ color: 'rgba(238,235,231,0.65)', lineHeight: 2 }}>
                  A comprehensive, fully guided experience from concept to completion — briefing,
                  3D, technical drawings, material sourcing, and implementation support at every step.
                </p>
                <Link
                  href="#full-design"
                  className="btn-light mt-auto"
                  style={{ display: 'inline-block', width: 'fit-content' }}
                >
                  Learn More
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── CONSULTATION DETAIL (cream bg) ───────────────────── */}
      <section
        id="consultation"
        className="section-pad-xl"
        style={{ background: 'var(--color-cream)' }}
        aria-label="Design consultation details"
      >
        <div className="container-wide">

          {/* Title block — full width */}
          <AnimateOnScroll>
            <div className="mb-16 md:mb-20" style={{ borderBottom: '1px solid rgba(66,53,44,0.1)', paddingBottom: 'clamp(2.5rem, 4vw, 4rem)' }}>
              <p className="t-label mb-5" style={{ color: 'var(--color-taupe)' }}>Service 01</p>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <h2 className="t-heading font-serif mb-4" style={{ color: 'var(--color-espresso)' }}>
                    Design Consultation
                  </h2>
                  <p className="t-label" style={{ color: 'var(--color-wine)' }}>
                    Starting at $600 per consultation
                  </p>
                </div>
                <p className="t-body" style={{ color: 'var(--color-taupe)', maxWidth: '480px', lineHeight: 2 }}>
                  Available <strong>in-person and remotely</strong> — serving clients across
                  Canada and the United States.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Description */}
          <AnimateOnScroll>
            <p className="t-body mb-16 md:mb-20" style={{ color: 'var(--color-taupe)', maxWidth: '680px', lineHeight: 2.1 }}>
              This service is ideal for clients who are looking to improve their space without undergoing
              a major renovation, and who feel comfortable managing the implementation on their own. It
              provides expert guidance on layout, aesthetics, and key design decisions.
            </p>
          </AnimateOnScroll>

          <hr style={{ borderColor: 'rgba(66,53,44,0.1)', marginBottom: 'clamp(3.5rem,6vw,5rem)' }} />

          {/* Two-column: deliverables + timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 mt-0">
            {/* Left: What's included */}
            <AnimateOnScroll>
              <div
                className="pb-10 mb-10"
                style={{ borderBottom: '1px solid rgba(66,53,44,0.1)' }}
              >
                <p className="t-label mb-8" style={{ color: 'var(--color-espresso)', letterSpacing: '0.2em' }}>
                  What&apos;s Included
                </p>
                <ul className="space-y-5">
                  {consultationDeliverables.map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <span
                        className="flex-shrink-0 mt-[0.6rem] w-5 h-px"
                        style={{ background: 'var(--color-wine)', opacity: 0.5 }}
                      />
                      <span className="t-body" style={{ color: 'var(--color-taupe)', lineHeight: 1.7 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/connect" className="btn-primary">
                Book a Consultation
              </Link>
            </AnimateOnScroll>

            {/* Right: Interactive Timeline */}
            <AnimateOnScroll delay={0.12}>
              <p className="t-label mb-10" style={{ color: 'var(--color-espresso)', letterSpacing: '0.2em' }}>
                Client Journey
              </p>
              <ConsultationTimeline />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── FULL DESIGN DETAIL (wine bg) ─────────────────────── */}
      <section
        id="full-design"
        className="section-pad-xl"
        style={{ background: 'var(--color-wine)' }}
        aria-label="Full design service details"
      >
        <div className="container-wide">

          {/* Title block — full width */}
          <AnimateOnScroll>
            <div className="mb-16 md:mb-20" style={{ borderBottom: '1px solid rgba(238,235,231,0.1)', paddingBottom: 'clamp(2.5rem, 4vw, 4rem)' }}>
              <p className="t-label mb-5" style={{ color: 'rgba(238,235,231,0.45)' }}>Service 02</p>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <h2 className="t-heading font-serif mb-4" style={{ color: 'var(--color-cream)' }}>
                    Full Design Service
                  </h2>
                  <p className="t-label" style={{ color: 'rgba(238,235,231,0.45)' }}>
                    Design phase: 2 to 4 months
                  </p>
                </div>
                <p className="t-body" style={{ color: 'rgba(238,235,231,0.65)', maxWidth: '480px', lineHeight: 2 }}>
                  A complete, end-to-end experience — for clients who want expert direction
                  at every stage, from first concept to final styling.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Description */}
          <AnimateOnScroll>
            <p className="t-body mb-16 md:mb-20" style={{ color: 'rgba(238,235,231,0.72)', maxWidth: '680px', lineHeight: 2.1 }}>
              Designed for clients seeking a comprehensive, fully guided experience from concept
              to completion. We manage every detail — so you can focus on the vision while we
              handle the execution with precision and care.
            </p>
          </AnimateOnScroll>

          <hr style={{ borderColor: 'rgba(238,235,231,0.1)', marginBottom: 'clamp(3.5rem,6vw,5rem)' }} />

          {/* Two-column: deliverables + phases */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 mt-0">
            {/* Left: Deliverables */}
            <AnimateOnScroll>
              <div
                className="pb-10 mb-10"
                style={{ borderBottom: '1px solid rgba(238,235,231,0.1)' }}
              >
                <p className="t-label mb-8" style={{ color: 'rgba(238,235,231,0.5)', letterSpacing: '0.2em' }}>
                  Deliverables
                </p>
                <ul className="space-y-5">
                  {fullServiceDeliverables.map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <span
                        className="flex-shrink-0 mt-[0.6rem] w-5 h-px"
                        style={{ background: 'var(--color-cream)', opacity: 0.3 }}
                      />
                      <span className="t-body" style={{ color: 'rgba(238,235,231,0.7)', lineHeight: 1.7 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/connect" className="btn-light">
                Start Your Project
              </Link>
            </AnimateOnScroll>

            {/* Right: Interactive Phases */}
            <AnimateOnScroll delay={0.12}>
              <p className="t-label mb-10" style={{ color: 'rgba(238,235,231,0.45)', letterSpacing: '0.2em' }}>
                10-Phase Process
              </p>
              <p className="t-body mb-8" style={{ color: 'rgba(238,235,231,0.4)', lineHeight: 1.8, fontSize: '0.8rem' }}>
                Hover each phase to learn more.
              </p>
              <FullDesignPhases />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section
        className="relative section-pad-xl overflow-hidden"
        aria-label="Get started"
      >
        <Image
          src="/images/projects/hidden-creek/RMPROREAL_ARQMA_516_HIDDEN_CREEK-5.jpg"
          alt="ARQMA interior design Toronto"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(42,31,26,0.62)' }} />

        <div className="container-narrow relative z-10 text-center">
          <AnimateOnScroll>
            <p className="t-label mb-8" style={{ color: 'rgba(238,235,231,0.55)' }}>
              Not sure which service is right for you?
            </p>
            <h2
              className="t-display font-serif italic mb-10"
              style={{ color: 'var(--color-cream)' }}
            >
              Let&apos;s talk about your project.
            </h2>
            <p
              className="t-body mb-12"
              style={{
                color: 'rgba(238,235,231,0.68)',
                maxWidth: '480px',
                margin: '0 auto 3rem',
                lineHeight: 2,
              }}
            >
              Fill out our brief form and we&apos;ll recommend the most suitable service
              for your goals and timeline.
            </p>
            <Link href="/connect" className="btn-light">
              Get in Touch
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
