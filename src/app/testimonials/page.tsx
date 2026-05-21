import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'

export const metadata: Metadata = {
  title: 'In Their Words — ARQMA Interior Design Toronto',
  description:
    'Read what ARQMA clients say about their interior design experience in Toronto. From residential renovations to commercial spaces, our clients love the results.',
  alternates: { canonical: 'https://www.arqma.ca/testimonials' },
}

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
            In Their Words
          </h1>
        </div>
      </section>

      {/* ── CAROUSEL ─────────────────────────────────────────── */}
      <TestimonialsCarousel />

      {/* ── GOOGLE REVIEWS ───────────────────────────────────── */}
      <section
        style={{ background: 'var(--color-cream)', paddingTop: 'clamp(5rem, 10vw, 9rem)', paddingBottom: 'clamp(5rem, 10vw, 9rem)' }}
        aria-label="Google reviews"
      >
        <div className="container-narrow text-center">
          <AnimateOnScroll>
            <p className="t-label mb-4" style={{ color: 'var(--color-taupe)', opacity: 0.6 }}>
              More Reviews
            </p>
            <p
              className="t-subheading font-serif mb-8"
              style={{ color: 'var(--color-espresso)' }}
            >
              See all our reviews on Google
            </p>
            <a
              href="https://www.google.com/maps/search/ARQMA+Interior+Design+Toronto"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View on Google
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ paddingTop: 'clamp(140px, 16vw, 240px)', paddingBottom: 'clamp(140px, 16vw, 240px)' }}
        aria-label="Start your project"
      >
        <Image
          src="/images/projects/hidden-creek/RMPROREAL_ARQMA_516_HIDDEN_CREEK-1.jpg"
          alt="ARQMA interior design Toronto"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(42,31,26,0.52)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(42,31,26,0.72) 0%, transparent 38%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(42,31,26,0.72) 0%, transparent 38%)' }} />

        <div className="container-narrow relative z-10 text-center">
          <AnimateOnScroll>
            <p className="mb-6" style={{ color: 'rgba(238,235,231,0.7)', fontSize: '0.82rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500 }}>
              Your Story, Next
            </p>
            <h2
              className="t-hero font-serif italic"
              style={{ color: 'var(--color-cream)', marginBottom: '2.5rem' }}
            >
              Let&apos;s design a space that elevates your experience.
            </h2>
            <Link href="/connect" className="btn-light">
              Start Your Project
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
