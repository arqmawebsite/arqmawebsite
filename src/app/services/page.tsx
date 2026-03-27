import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Services — ARQMA Interior Design Toronto',
  description:
    'ARQMA offers two tailored interior design services in Toronto: a Design Consultation starting at $600 and a comprehensive Full Design Service from concept to completion.',
  alternates: { canonical: 'https://www.arqma.ca/services' },
}

const consultationDeliverables = [
  'Space planning layout',
  'Moodboard',
  'Key furniture selections',
  'Design guidance',
  '1 week technical support',
]

const consultationSteps = [
  { number: '01', title: 'Pre-Consultation Questionnaire', desc: 'Before we meet, you complete a short questionnaire that helps us understand your space, lifestyle, and goals.' },
  { number: '02', title: '30-Minute Briefing Call', desc: 'A focused call to align on your vision, priorities, and any constraints before the design session.' },
  { number: '03', title: '2-Hour Design Session', desc: 'An in-depth working session where we walk through your space and provide tailored design recommendations.' },
]

const fullServiceDeliverables = [
  '3D renderings',
  'Technical drawings',
  'Complete shopping list',
  'Furniture and material sourcing',
  'Showroom visits',
  'Contractor coordination support',
  'Ongoing implementation support',
  'Final styling guidance',
]

const fullServicePhases = [
  'Site Measurements',
  'Design Briefing',
  'Layout Development',
  'Concept Design & 3D',
  'Design Review',
  'Final Design',
  'Technical Drawings',
  'Material Selection',
  'Implementation Support',
  'Final Styling',
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
          <p className="t-label mb-3" style={{ color: 'rgba(238,235,231,0.6)' }}>
            What We Offer
          </p>
          <h1
            className="t-hero font-serif"
            style={{ color: 'var(--color-cream)' }}
          >
            Services
          </h1>
        </div>
      </section>

      {/* ── OVERVIEW (espresso bg) ────────────────────────────── */}
      <section
        className="py-28 md:py-40"
        style={{ background: 'var(--color-espresso)' }}
        aria-label="Service overview"
      >
        <div className="container-wide">
          <AnimateOnScroll>
            <p className="t-label mb-4" style={{ color: 'rgba(238,235,231,0.5)' }}>
              Our Services
            </p>
            <h2
              className="t-heading font-serif mb-16"
              style={{ color: 'var(--color-cream)', maxWidth: '600px' }}
            >
              What we offer
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Consultation card */}
            <AnimateOnScroll delay={0}>
              <div
                className="p-10 md:p-14 flex flex-col h-full"
                style={{ border: '1px solid rgba(238,235,231,0.12)', background: 'rgba(238,235,231,0.04)' }}
              >
                <p className="t-label mb-6" style={{ color: 'rgba(238,235,231,0.4)' }}>01</p>
                <h3
                  className="t-subheading font-serif mb-2"
                  style={{ color: 'var(--color-cream)' }}
                >
                  Design Consultation
                </h3>
                <p className="t-label mb-8" style={{ color: 'rgba(238,235,231,0.45)' }}>
                  Starting at $600 per consultation
                </p>
                <p className="t-body mb-10" style={{ color: 'rgba(238,235,231,0.7)', lineHeight: 1.9 }}>
                  Ideal for clients looking to improve their space without major renovation,
                  managing implementation on their own. A focused, professional session to
                  get clarity on your space.
                </p>
                <Link href="#consultation" className="btn-light mt-auto" style={{ display: 'inline-block', width: 'fit-content' }}>
                  Learn More
                </Link>
              </div>
            </AnimateOnScroll>

            {/* Full design card */}
            <AnimateOnScroll delay={0.1}>
              <div
                className="p-10 md:p-14 flex flex-col h-full"
                style={{ border: '1px solid rgba(238,235,231,0.12)', background: 'rgba(238,235,231,0.04)' }}
              >
                <p className="t-label mb-6" style={{ color: 'rgba(238,235,231,0.4)' }}>02</p>
                <h3
                  className="t-subheading font-serif mb-2"
                  style={{ color: 'var(--color-cream)' }}
                >
                  Full Design Service
                </h3>
                <p className="t-label mb-8" style={{ color: 'rgba(238,235,231,0.45)' }}>
                  End-to-End Guidance
                </p>
                <p className="t-body mb-10" style={{ color: 'rgba(238,235,231,0.7)', lineHeight: 1.9 }}>
                  A comprehensive, fully guided experience from concept to completion. Ideal
                  for clients seeking a complete transformation with expert direction at
                  every step.
                </p>
                <Link href="#full-design" className="btn-light mt-auto" style={{ display: 'inline-block', width: 'fit-content' }}>
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
        className="py-28 md:py-40"
        style={{ background: 'var(--color-cream)' }}
        aria-label="Design consultation details"
      >
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <AnimateOnScroll>
              <p className="t-label mb-4" style={{ color: 'var(--color-taupe)' }}>Service 01</p>
              <h2
                className="t-heading font-serif mb-4"
                style={{ color: 'var(--color-espresso)' }}
              >
                Design Consultation
              </h2>
              <p
                className="t-label mb-10"
                style={{ color: 'var(--color-wine)' }}
              >
                Starting at $600 per consultation
              </p>
              <p className="t-body mb-10" style={{ color: 'var(--color-taupe)', lineHeight: 1.9 }}>
                Ideal for clients looking to improve their space without major renovation, managing
                implementation on their own. This service provides professional design direction
                and curated recommendations tailored specifically to your space and vision.
              </p>

              <h3 className="t-label mb-6" style={{ color: 'var(--color-espresso)' }}>
                What&apos;s Included
              </h3>
              <ul className="space-y-3 mb-12">
                {consultationDeliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2 flex-shrink-0 w-4 h-px"
                      style={{ background: 'var(--color-taupe)', opacity: 0.6 }}
                    />
                    <span className="t-body" style={{ color: 'var(--color-taupe)' }}>{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/connect" className="btn-primary">
                Book a Consultation
              </Link>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.12}>
              <h3 className="t-label mb-8" style={{ color: 'var(--color-espresso)' }}>
                The Process
              </h3>
              <div className="space-y-8">
                {consultationSteps.map((step, i) => (
                  <div
                    key={step.number}
                    className="flex gap-6 pb-8"
                    style={i < consultationSteps.length - 1 ? { borderBottom: '1px solid rgba(66,53,44,0.12)' } : {}}
                  >
                    <span
                      className="t-label flex-shrink-0 pt-1"
                      style={{ color: 'var(--color-taupe)', opacity: 0.5 }}
                    >
                      {step.number}
                    </span>
                    <div>
                      <h4
                        className="font-serif mb-2"
                        style={{ color: 'var(--color-espresso)', fontSize: 'clamp(1rem, 1.2vw, 1.2rem)' }}
                      >
                        {step.title}
                      </h4>
                      <p className="t-body" style={{ color: 'var(--color-taupe)' }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── FULL DESIGN DETAIL (wine bg) ─────────────────────── */}
      <section
        id="full-design"
        className="py-28 md:py-40"
        style={{ background: 'var(--color-wine)' }}
        aria-label="Full design service details"
      >
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <AnimateOnScroll>
              <p className="t-label mb-4" style={{ color: 'rgba(238,235,231,0.5)' }}>Service 02</p>
              <h2
                className="t-heading font-serif mb-4"
                style={{ color: 'var(--color-cream)' }}
              >
                Full Design Service
              </h2>
              <p className="t-label mb-10" style={{ color: 'rgba(238,235,231,0.5)' }}>
                Design phase: 2 to 4 months
              </p>
              <p className="t-body mb-10" style={{ color: 'rgba(238,235,231,0.78)', lineHeight: 1.9 }}>
                For clients seeking a comprehensive, fully guided experience from concept to
                completion. We manage every detail — so you can focus on the vision while
                we handle the execution.
              </p>

              <h3 className="t-label mb-6" style={{ color: 'rgba(238,235,231,0.6)' }}>
                Deliverables
              </h3>
              <ul className="space-y-3 mb-12">
                {fullServiceDeliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2 flex-shrink-0 w-4 h-px"
                      style={{ background: 'var(--color-cream)', opacity: 0.4 }}
                    />
                    <span className="t-body" style={{ color: 'rgba(238,235,231,0.75)' }}>{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/connect" className="btn-light">
                Start Your Project
              </Link>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.12}>
              <h3 className="t-label mb-8" style={{ color: 'rgba(238,235,231,0.5)' }}>
                10-Phase Process
              </h3>
              <div className="space-y-0">
                {fullServicePhases.map((phase, i) => (
                  <div
                    key={phase}
                    className="flex items-center gap-6 py-5"
                    style={{ borderBottom: '1px solid rgba(238,235,231,0.1)' }}
                  >
                    <span
                      className="t-label flex-shrink-0 w-8"
                      style={{ color: 'rgba(238,235,231,0.35)' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="font-serif"
                      style={{
                        color: 'var(--color-cream)',
                        fontSize: 'clamp(0.95rem, 1.1vw, 1.2rem)',
                      }}
                    >
                      {phase}
                    </span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section
        className="relative py-32 md:py-44 overflow-hidden"
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
            <p className="t-label mb-6" style={{ color: 'rgba(238,235,231,0.6)' }}>
              Not sure which service is right for you?
            </p>
            <h2
              className="t-display font-serif italic mb-8"
              style={{ color: 'var(--color-cream)' }}
            >
              Let&apos;s talk about your project.
            </h2>
            <p
              className="t-body mb-10"
              style={{
                color: 'rgba(238,235,231,0.72)',
                maxWidth: '480px',
                margin: '0 auto 2.5rem',
              }}
            >
              Fill out our brief form and we&apos;ll help you find the most suitable service
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
