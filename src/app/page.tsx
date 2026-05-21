import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import HeroCarousel from '@/components/HeroCarousel'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import InstagramFeed from '@/components/InstagramFeed'
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

        {/* Centered logo — monogram only */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none px-8">
          <Image
            src="/images/brand/Vector.png"
            alt="ARQMA"
            width={400}
            height={400}
            loading="eager"
            className="opacity-90"
            style={{
              filter: 'brightness(0) invert(1)',
              width: 'clamp(120px, 22vw, 280px)',
              height: 'auto',
            }}
            priority
          />
        </div>

        {/* Bottom tagline */}
        <div className="absolute bottom-16 left-[5vw] z-20">
          <p
            className="font-serif italic"
            style={{
              color: 'var(--color-cream)',
              fontSize: 'clamp(1rem, 1.5vw, 1.4rem)',
              fontWeight: 300,
              maxWidth: '440px',
              lineHeight: 1.6,
            }}
          >
            We don&apos;t follow trends. We study people.<br />
            Every ARQMA project begins with one question:<br />
            how do you want to feel when you walk through the door?
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
            <AnimateOnScroll className="flex flex-col justify-between">
              <div>
                <p className="t-label mb-8" style={{ color: 'var(--color-taupe)' }}>
                  About the Studio
                </p>
                <h2
                  className="t-display font-serif"
                  style={{ color: 'var(--color-espresso)', marginBottom: '4rem' }}
                >
                  We don&apos;t just design spaces — we define how they are experienced.
                </h2>
                <p className="t-body mb-5" style={{ color: 'var(--color-taupe)', textAlign: 'justify' }}>
                  We don&apos;t just design spaces. We design the feeling of coming home. ARQMA was
                  built on a simple but radical belief: that your environment has the power to change
                  your life. Not in a grand, abstract way — but in the way light falls on a Sunday
                  morning. In the way a room makes you exhale the moment you walk in.
                </p>
                <p className="t-body mb-5" style={{ color: 'var(--color-taupe)', textAlign: 'justify' }}>
                  Based in Ontario, we work with clients across <strong>Canada and internationally</strong>,
                  bringing the same obsessive attention to detail to every project — whether a downtown
                  condo or a custom residence. Residential. Commercial. Always intentional.
                </p>
                <p className="t-body" style={{ color: 'var(--color-taupe)', marginBottom: '4rem', textAlign: 'justify' }}>
                  We listen before we design. We question before we decide. And we don&apos;t stop
                  until the space feels exactly like you — only better than you imagined. This is not
                  decoration. This is design as it was always meant to be.
                </p>
              </div>
              <div>
                <Link href="/about" className="btn-primary">
                  Meet the Team
                </Link>
              </div>
            </AnimateOnScroll>

            {/* Image fills full height of the left column — no fixed aspect ratio */}
            <div className="relative" style={{ minHeight: '600px' }}>
              <Image
                src="/images/team/Marcia.jpg"
                alt="Marcia Oliveira — ARQMA Founder & Principal Designer"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
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
            <div className="flex items-end justify-between" style={{ marginBottom: '5rem' }}>
              <div>
                <h2 className="t-heading font-serif" style={{ color: 'var(--color-cream)' }}>
                  Portfolio
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
              className="font-serif italic mb-10"
              style={{ color: 'var(--color-cream)', lineHeight: 1.2, fontSize: 'clamp(2rem, 3.2vw, 4rem)' }}
            >
              &ldquo;We design with intention, creating spaces that not only function beautifully,
              but also elevate the way people experience their everyday lives.&rdquo;
            </blockquote>
            <cite
              className="t-label not-italic"
              style={{ color: 'rgba(238,235,231,0.5)' }}
            >
              — Marcia Oliveira Martins, Founder &amp; Principal Designer
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
              className="t-heading font-serif"
              style={{ color: 'var(--color-espresso)', maxWidth: '640px', marginBottom: '3rem' }}
            >
              A refined design experience, thoughtfully tailored to how you live.
            </h2>
            <p className="t-label" style={{ color: 'var(--color-taupe)', letterSpacing: '0.22em', marginBottom: '1.5rem' }}>
              How We Can Work Together
            </p>
            <p className="t-body" style={{ color: 'var(--color-taupe)', maxWidth: '680px', marginBottom: '5rem' }}>
              Every project begins with a different need. Some clients are looking for guidance with
              finishes. Others want to rethink how their space functions. And some are ready for a
              fully developed, end-to-end design experience. We&apos;ve structured our services to
              meet you exactly where you are — with clear, guided options that make it easy to
              understand what you need and how to move forward. Each offering is intentionally
              designed to feel simple, refined, and easy to navigate — so you can choose the level
              of support that aligns with your project.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ marginTop: '7rem' }}>
            {[
              {
                number: '01',
                title: 'ARQMA Strategy',
                subtitle: 'Where your design journey begins',
                href: '/services#strategy',
              },
              {
                number: '02',
                title: 'ARQMA E-Design',
                subtitle: 'A refined, streamlined design experience',
                note: '2.1 — ARQMA Essential\n2.2 — ARQMA Signature',
                href: '/services#edesign',
              },
              {
                number: '03',
                title: 'ARQMA Full-Service Design',
                subtitle: 'A fully tailored, end-to-end experience',
                href: '/services#fullservice',
              },
              {
                number: '04',
                title: 'Curated Partnerships',
                subtitle: 'Trade & Brand Collaborations',
                href: '/services#partnerships',
              },
            ].map((service, i) => (
              <AnimateOnScroll key={service.number} delay={i * 0.08}>
                <Link href={service.href} className="block group h-full">
                  <div
                    className="h-full flex flex-col transition-colors duration-300 group-hover:bg-[var(--color-cream-dark)]"
                    style={{ border: '1px solid rgba(66,53,44,0.15)', padding: '2.5rem' }}
                  >
                    <h3
                      className="font-serif"
                      style={{ color: 'var(--color-espresso)', fontSize: 'clamp(1.2rem, 1.6vw, 1.5rem)', lineHeight: 1.25, marginBottom: '1rem' }}
                    >
                      {service.title}
                    </h3>
                    <p style={{ color: 'var(--color-taupe)', fontSize: '0.72rem', letterSpacing: '0.1em', marginBottom: '1rem' }}>
                      {service.subtitle}
                    </p>
                    {'note' in service && service.note && (
                      <p style={{ color: 'var(--color-taupe)', fontSize: '0.68rem', letterSpacing: '0.08em', opacity: 0.6, whiteSpace: 'pre-line' }}>
                        {service.note}
                      </p>
                    )}
                    <p
                      className="t-label flex items-center gap-2 group-hover:gap-4 transition-all"
                      style={{ color: 'var(--color-espresso)', marginTop: 'auto', paddingTop: '2rem' }}
                    >
                      Learn More <span>→</span>
                    </p>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll>
            <div
              style={{ borderTop: '1px solid rgba(66,53,44,0.15)', marginTop: '6rem', padding: '3rem 0 0' }}
            >
              <p className="t-label mb-3" style={{ color: 'var(--color-taupe)' }}>
                Flexible to Your Project
              </p>
              <p className="t-body" style={{ color: 'var(--color-taupe)', maxWidth: '680px' }}>
                Not every space requires the same level of involvement. You may choose different
                services for different areas of your home — a full-service design for one space, and
                a more focused approach for another. Our goal is to support your project in a way
                that feels cohesive, efficient, and thoughtfully tailored to your needs.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── TESTIMONIALS CAROUSEL ───────────────────────────── */}
      <TestimonialsCarousel />

      {/* ── INSTAGRAM FEED ───────────────────────────────────── */}
      <InstagramFeed />

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
            <p className="mb-6" style={{ color: 'rgba(238,235,231,0.7)', fontSize: '0.82rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500 }}>
              Ready to Begin?
            </p>
            <h2
              className="t-hero font-serif italic mb-8"
              style={{ color: 'var(--color-cream)' }}
            >
              Let&apos;s create a space that reflects who you are.
            </h2>
            <p className="t-body mb-10" style={{ color: 'rgba(238,235,231,0.7)', maxWidth: '480px', margin: '0 auto 2.5rem' }}>
              Take your ideas off the mood board and into reality. We&apos;d love to hear about your project.
            </p>
            <Link href="/connect" className="btn-light">
              Start Your Project
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
