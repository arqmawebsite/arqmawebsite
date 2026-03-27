import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Client Testimonials — ARQMA Interior Design Toronto',
  description:
    'Read what ARQMA clients say about their interior design experience in Toronto. From residential renovations to commercial spaces, our clients love the results.',
  alternates: { canonical: 'https://www.arqma.ca/testimonials' },
}

const testimonials = [
  {
    name: 'Sarah M.',
    quote:
      'ARQMA completely transformed our home. Márcia\'s attention to detail and understanding of our lifestyle created a space that feels both beautiful and uniquely ours. The process was seamless from start to finish.',
    project: 'Residential — Toronto',
  },
  {
    name: 'James & Lisa K.',
    quote:
      'Working with ARQMA was an exceptional experience. Every decision was thoughtful, every material carefully chosen. Our basement renovation exceeded every expectation.',
    project: 'Freeman Project — Basement Renovation',
  },
  {
    name: 'Dr. A. Petrova',
    quote:
      'The clinic design ARQMA created perfectly captures our brand identity while creating a calming, welcoming environment for our clients. Truly remarkable work.',
    project: 'Wellthera Clinic',
  },
  {
    name: 'Carlos & Ana B.',
    quote:
      'ARQMA brought our restaurant vision to life in a way we never imagined possible. The space tells a story — our story.',
    project: 'Bossa Nova Restaurant',
  },
  {
    name: 'Michelle T.',
    quote:
      "From the first meeting to the final reveal, ARQMA's professionalism and creativity were outstanding. Our nursery is a magical space our daughter will grow up loving.",
    project: 'Nursery Design — Toronto',
  },
]

const bgAlternate = ['var(--color-cream)', 'var(--color-soft-white)']

export default function TestimonialsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="section-full w-full overflow-hidden relative" aria-label="Testimonials hero">
        <Image
          src="/images/projects/nathalia-marques/SAL_CREATORS_ARQMA_NATALIA-1.jpg"
          alt="ARQMA interior design client reviews Toronto"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="overlay-dark" />

        <div className="absolute bottom-16 left-[5vw] z-20">
          <p className="t-label mb-3" style={{ color: 'rgba(238,235,231,0.6)' }}>
            Client Words
          </p>
          <h1
            className="t-hero font-serif"
            style={{ color: 'var(--color-cream)' }}
          >
            Testimonials
          </h1>
        </div>
      </section>

      {/* ── INTRO ────────────────────────────────────────────── */}
      <section
        className="py-20 md:py-24"
        style={{ background: 'var(--color-espresso)' }}
        aria-label="Reviews intro"
      >
        <div className="container-narrow text-center">
          <AnimateOnScroll>
            <p className="t-label mb-4" style={{ color: 'rgba(238,235,231,0.5)' }}>
              Our Clients
            </p>
            <h2
              className="t-heading font-serif"
              style={{ color: 'var(--color-cream)', maxWidth: '600px', margin: '0 auto' }}
            >
              What our clients are saying
            </h2>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      {testimonials.map((testimonial, i) => (
        <section
          key={testimonial.name}
          className="py-20 md:py-28"
          style={{ background: bgAlternate[i % 2] }}
          aria-label={`Testimonial from ${testimonial.name}`}
        >
          <div className="container-narrow">
            <AnimateOnScroll>
              <div className="flex flex-col items-start">
                {/* Large opening quote mark */}
                <span
                  className="font-serif mb-4 leading-none select-none"
                  style={{
                    fontSize: 'clamp(4rem, 8vw, 9rem)',
                    color: 'var(--color-wine)',
                    opacity: 0.18,
                    lineHeight: 0.8,
                  }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <blockquote
                  className="t-subheading font-serif italic mb-8"
                  style={{
                    color: 'var(--color-espresso)',
                    lineHeight: 1.6,
                    maxWidth: '720px',
                  }}
                >
                  {testimonial.quote}
                </blockquote>

                <div
                  className="w-8 h-px mb-6"
                  style={{ background: 'var(--color-taupe)', opacity: 0.4 }}
                />

                <cite className="not-italic">
                  <p
                    className="font-serif mb-1"
                    style={{
                      color: 'var(--color-espresso)',
                      fontSize: 'clamp(1rem, 1.2vw, 1.2rem)',
                    }}
                  >
                    {testimonial.name}
                  </p>
                  <p className="t-label" style={{ color: 'var(--color-taupe)' }}>
                    {testimonial.project}
                  </p>
                </cite>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      ))}

      {/* ── GOOGLE REVIEWS ───────────────────────────────────── */}
      <section
        className="py-20 md:py-28"
        style={{ background: 'var(--color-espresso)' }}
        aria-label="Google reviews"
      >
        <div className="container-narrow text-center">
          <AnimateOnScroll>
            <p className="t-label mb-4" style={{ color: 'rgba(238,235,231,0.5)' }}>
              More Reviews
            </p>
            <p
              className="t-subheading font-serif mb-8"
              style={{ color: 'var(--color-cream)' }}
            >
              See all our reviews on Google
            </p>
            <a
              href="https://www.google.com/maps/search/ARQMA+Interior+Design+Toronto"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-light"
            >
              View on Google
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section
        className="relative py-32 md:py-44 overflow-hidden"
        aria-label="Start your project"
      >
        <Image
          src="/images/projects/hidden-creek/RMPROREAL_ARQMA_516_HIDDEN_CREEK-1.jpg"
          alt="ARQMA interior design Toronto"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(42,31,26,0.62)' }} />

        <div className="container-narrow relative z-10 text-center">
          <AnimateOnScroll>
            <p className="t-label mb-6" style={{ color: 'rgba(238,235,231,0.6)' }}>
              Your Story, Next
            </p>
            <h2
              className="t-display font-serif italic mb-8"
              style={{ color: 'var(--color-cream)' }}
            >
              Ready to create your perfect space?
            </h2>
            <Link href="/connect" className="btn-light">
              Get in Touch
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
