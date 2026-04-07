import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import HeroCarousel from '@/components/HeroCarousel'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { projects, heroImages } from '@/data/projects'

export const metadata: Metadata = {
  title: 'ARQMA | Interior Design Studio — Toronto, Canada & USA',
  description:
    'ARQMA is a luxury interior design studio based in Toronto, serving clients across Canada and the United States. We create beautifully curated residential and commercial spaces — in-person and remote design services available.',
  alternates: { canonical: 'https://www.arqma.ca' },
}

export default function HomePage() {
  const featuredProjects = projects.slice(0, 6)

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="section-full w-full overflow-hidden relative" aria-label="Hero">
        <HeroCarousel images={heroImages} />

        {/* Dark overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(42,31,26,0.25) 0%, transparent 40%, rgba(42,31,26,0.55) 100%)',
          }}
        />

        {/* Centered logo — full wordmark, luxury transparent */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none px-8">
          <Image
            src="/images/brand/Logo_lettering.png"
            alt="ARQMA Interiors"
            width={900}
            height={260}
            loading="eager"
            className="opacity-[0.18]"
            style={{
              filter: 'brightness(0) invert(1)',
              width: 'clamp(280px, 72vw, 820px)',
              height: 'auto',
            }}
            priority
          />
        </div>

        {/* Bottom tagline */}
        <div className="absolute bottom-16 left-[5vw] z-20">
          <p
            className="t-label mb-2"
            style={{ color: 'rgba(238,235,231,0.65)' }}
          >
            Interior Design Studio
          </p>
          <p
            className="font-serif italic"
            style={{
              color: 'var(--color-cream)',
              fontSize: 'clamp(1rem, 1.5vw, 1.4rem)',
              fontWeight: 300,
              maxWidth: '380px',
              lineHeight: 1.5,
            }}
          >
            Design is not just about aesthetics.<br />
            It&#39;s about how you feel when you walk into the room.
          </p>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 right-[5vw] z-20 flex flex-col items-center gap-2">
          <span className="t-label" style={{ color: 'rgba(238,235,231,0.5)', writingMode: 'vertical-rl', letterSpacing: '0.3em' }}>
            SCROLL
          </span>
          <div className="w-[1px] h-10" style={{ background: 'rgba(238,235,231,0.3)' }} />
        </div>
      </section>

      {/* ── ABOUT INTRO ─────────────────────────────────────── */}
      <section
        className="section-pad-lg"
        style={{ background: 'var(--color-cream)' }}
        aria-label="About ARQMA"
      >
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimateOnScroll>
              <p className="t-label mb-8" style={{ color: 'var(--color-taupe)' }}>
                About the Studio
              </p>
              <h2
                className="t-display font-serif mb-10"
                style={{ color: 'var(--color-espresso)' }}
              >
                Crafting spaces that reflect your authentic life.
              </h2>
              <p className="t-body mb-5" style={{ color: 'var(--color-taupe)', maxWidth: '520px' }}>
                ARQMA is a design studio established in the Canadian market for over five years,
                dedicated to creating thoughtfully curated residential and commercial spaces with
                a strong emphasis on client experience.
              </p>
              <p className="t-body mb-10" style={{ color: 'var(--color-taupe)', maxWidth: '520px' }}>
                Based in Toronto, we serve clients across <strong>Canada and the United States</strong> —
                both in-person and remotely. We believe great design begins with understanding:
                carefully observing the potential of each space and elevating it through
                functional, intentional solutions.
              </p>
              <Link href="/about" className="btn-primary">
                Meet the Team
              </Link>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <div className="relative aspect-[4/5] img-zoom-wrapper">
                <Image
                  src="/images/team/DSC_1208.jpg"
                  alt="ARQMA design studio team — Toronto interior designers serving Canada and USA"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ────────────────────────────────── */}
      <section
        className="section-pad-lg"
        style={{ background: 'var(--color-espresso)' }}
        aria-label="Featured Projects"
      >
        <div className="container-wide">
          <AnimateOnScroll>
            <div className="flex items-end justify-between mb-12 md:mb-16">
              <div>
                <p className="t-label mb-4" style={{ color: 'rgba(238,235,231,0.5)' }}>
                  Our Work
                </p>
                <h2 className="t-heading font-serif" style={{ color: 'var(--color-cream)' }}>
                  Selected Projects
                </h2>
              </div>
              <Link href="/projects" className="btn-light hidden md:inline-block">
                View All
              </Link>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <AnimateOnScroll key={project.slug} delay={i * 0.07}>
                <Link href={`/projects/${project.slug}`} className="block group">
                  <div className="relative aspect-[3/4] img-zoom-wrapper mb-4">
                    <Image
                      src={project.coverImage}
                      alt={`${project.name} — ARQMA Interior Design Toronto`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="overlay-dark" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="t-label mb-1" style={{ color: 'rgba(238,235,231,0.6)' }}>
                        {project.category === 'commercial' ? 'Commercial' : project.category === 'nursery' ? 'Nursery' : 'Residential'}
                      </p>
                      <h3 className="font-serif text-xl" style={{ color: 'var(--color-cream)' }}>
                        {project.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="text-center mt-12 md:hidden">
            <Link href="/projects" className="btn-light">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ──────────────────────────────────────── */}
      <section
        className="section-pad-lg relative overflow-hidden"
        style={{ background: 'var(--color-wine)' }}
        aria-label="Our Philosophy"
      >
        {/* BG monogram watermark */}
        <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none select-none">
          <Image
            src="/images/brand/Vector.png"
            alt=""
            width={700}
            height={700}
            className="w-[50vw] max-w-[600px]"
          />
        </div>
        <div className="container-narrow text-center relative z-10">
          <AnimateOnScroll>
            <p className="t-label mb-8" style={{ color: 'rgba(238,235,231,0.5)' }}>
              Our Approach
            </p>
            <blockquote
              className="t-display font-serif italic mb-10"
              style={{ color: 'var(--color-cream)', lineHeight: 1.2 }}
            >
              &ldquo;We design with intention, creating spaces that not only function beautifully,
              but also elevate the way people experience their everyday lives.&rdquo;
            </blockquote>
            <cite
              className="t-label not-italic"
              style={{ color: 'rgba(238,235,231,0.5)' }}
            >
              — Márcia, Founder &amp; Principal Designer
            </cite>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ────────────────────────────────── */}
      <section
        className="section-pad-lg"
        style={{ background: 'var(--color-cream)' }}
        aria-label="Our Services"
      >
        <div className="container-wide">
          <AnimateOnScroll>
            <p className="t-label mb-4" style={{ color: 'var(--color-taupe)' }}>
              What We Offer
            </p>
            <h2
              className="t-heading font-serif mb-16"
              style={{ color: 'var(--color-espresso)', maxWidth: '600px' }}
            >
              A complete design experience, tailored to you.
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                number: '01',
                title: 'Design Consultation',
                subtitle: 'Starting at $600',
                desc: 'Ideal for clients who prefer to manage implementation themselves with professional guidance. A streamlined process including a briefing call, 2-hour design session, and curated deliverables.',
                href: '/services',
              },
              {
                number: '02',
                title: 'Full Design Service',
                subtitle: 'End-to-End Guidance',
                desc: 'A comprehensive experience from concept to completion. We guide you through every phase — briefing, layout, 3D visualization, technical drawings, material selection, and implementation support.',
                href: '/services',
              },
            ].map((service, i) => (
              <AnimateOnScroll key={service.number} delay={i * 0.1}>
                <Link href={service.href} className="block group">
                  <div
                    className="p-8 md:p-10 h-full transition-colors duration-300 group-hover:bg-[var(--color-cream-dark)]"
                    style={{ border: '1px solid rgba(66,53,44,0.15)' }}
                  >
                    <p className="t-label mb-6" style={{ color: 'var(--color-taupe)' }}>
                      {service.number}
                    </p>
                    <h3
                      className="t-subheading font-serif mb-1"
                      style={{ color: 'var(--color-espresso)' }}
                    >
                      {service.title}
                    </h3>
                    <p className="t-label mb-6" style={{ color: 'var(--color-wine)' }}>
                      {service.subtitle}
                    </p>
                    <p className="t-body" style={{ color: 'var(--color-taupe)' }}>
                      {service.desc}
                    </p>
                    <p
                      className="t-label mt-8 flex items-center gap-2 group-hover:gap-4 transition-all"
                      style={{ color: 'var(--color-espresso)' }}
                    >
                      Learn More <span>→</span>
                    </p>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden mt-0"
        style={{ paddingTop: 'clamp(140px, 16vw, 240px)', paddingBottom: 'clamp(140px, 16vw, 240px)' }}
        aria-label="Get in touch"
      >
        <Image
          src="/images/projects/hidden-creek/RMPROREAL_ARQMA_516_HIDDEN_CREEK-5.jpg"
          alt="ARQMA interior design Toronto"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Base overlay */}
        <div className="absolute inset-0" style={{ background: 'rgba(42,31,26,0.52)' }} />
        {/* Top gradient — darkens smoothly from top edge inward */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(42,31,26,0.72) 0%, transparent 38%)' }} />
        {/* Bottom gradient — darkens smoothly from bottom edge inward */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(42,31,26,0.72) 0%, transparent 38%)' }} />

        <div className="container-narrow relative z-10 text-center">
          <AnimateOnScroll>
            <p className="t-label mb-6" style={{ color: 'rgba(238,235,231,0.6)' }}>
              Ready to Begin?
            </p>
            <h2
              className="t-display font-serif italic mb-8"
              style={{ color: 'var(--color-cream)' }}
            >
              Let&apos;s transform your space into a home you&apos;ll love to live in.
            </h2>
            <p className="t-body mb-10" style={{ color: 'rgba(238,235,231,0.7)', maxWidth: '480px', margin: '0 auto 2.5rem' }}>
              Take your ideas off the mood board and into reality. We&apos;d love to hear about your project.
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
