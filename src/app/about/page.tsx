import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'About ARQMA — Interior Design Studio | Toronto, Canada & USA',
  description:
    'Meet the team behind ARQMA, a luxury interior design studio based in Toronto, serving clients across Canada and the United States. Residential and commercial interior design, in-person and remote.',
  alternates: { canonical: 'https://www.arqma.ca/about' },
}

const team = [
  {
    name: 'Marcia Oliveira',
    title: 'Founder and Principal Designer',
    image: '/images/team/POWERGIRLS-14.jpg',
    bio: 'is the Founder and Creative Director of ARQMA, leading the studio with a clear vision rooted in thoughtful design and elevated client experience. With a background in architecture and interior design, she brings a refined and contemporary approach to every project, balancing aesthetics, functionality, and emotional connection. At ARQMA, Marcia is responsible for overseeing the creative direction of all projects, ensuring that each space reflects the studio\'s standards of quality, coherence, and attention to detail.',
  },
  {
    name: 'Melissa Martins',
    title: 'Project Coordinator',
    image: '/images/team/Melissa.jpg',
    bio: 'Melissa is the Project Coordinator at ARQMA, bringing a strong technical foundation through her background in Civil Engineering. Her expertise adds a practical and solution-oriented perspective to the studio, ensuring that design concepts are not only visually compelling but also efficiently executed. She is responsible for managing the timelines of all ongoing projects, maintaining organization and consistency throughout each phase of the process.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── SECTION 1: HERO ────────────────────────────────── */}
      <section className="section-full w-full overflow-hidden relative" aria-label="About ARQMA hero">
        <Image
          src="/images/team/DSC_1249.jpg"
          alt="ARQMA design team — Toronto interior designers"
          fill
          className="object-cover"
          style={{ objectPosition: '50% 20%' }}
          sizes="100vw"
          priority
        />
        <div className="overlay-dark" />

        <div className="absolute bottom-16 left-[5vw] z-20">
          <p className="t-label mb-3" style={{ color: 'rgba(238,235,231,0.6)' }}>
            The Studio
          </p>
          <h1
            className="t-hero font-serif"
            style={{ color: 'var(--color-cream)' }}
          >
            About ARQMA
          </h1>
        </div>
      </section>

      {/* ── SECTION 2: STUDIO DESCRIPTION (wine bg) ───────── */}
      <section
        className="section-pad-xl relative overflow-hidden"
        style={{ background: 'var(--color-wine)' }}
        aria-label="Studio philosophy"
      >
        {/* Watermark monogram */}
        <div
          className="absolute right-[-5%] top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none select-none"
        >
          <Image
            src="/images/brand/Vector.png"
            alt=""
            width={600}
            height={600}
            className="w-[45vw] max-w-[500px]"
          />
        </div>

        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimateOnScroll>
              <p className="t-label mb-6" style={{ color: 'rgba(238,235,231,0.5)' }}>
                Our Story
              </p>
              <h2
                className="t-display font-serif italic mb-10"
                style={{ color: 'var(--color-cream)', lineHeight: 1.15 }}
              >
                We don&apos;t just design spaces — we define how they are experienced.
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <p className="t-body mb-8" style={{ color: 'rgba(238,235,231,0.78)', lineHeight: 2.1, textAlign: 'justify' }}>
                At ARQMA, we believe that great design goes far beyond aesthetics. It begins with
                understanding — how you live, what you value, and the way you want to feel in your space.
              </p>
              <p className="t-body mb-8" style={{ color: 'rgba(238,235,231,0.78)', lineHeight: 2.1, textAlign: 'justify' }}>
                Based in Ontario, we work with clients across <strong style={{ color: 'rgba(238,235,231,0.95)' }}>Canada and internationally</strong>,
                creating thoughtfully curated residential and commercial environments that are both
                refined and deeply personal.
              </p>
              <p className="t-body mb-8" style={{ color: 'rgba(238,235,231,0.78)', lineHeight: 2.1, textAlign: 'justify' }}>
                Our approach is rooted in intention. Every material, every detail, and every decision
                is carefully considered to create spaces that are not only visually elevated, but also
                functional, meaningful, and aligned with your lifestyle.
              </p>
              <p className="t-body" style={{ color: 'rgba(238,235,231,0.78)', lineHeight: 2.1, textAlign: 'justify' }}>
                With a strong emphasis on client experience, we guide each project with clarity,
                sensitivity, and a commitment to delivering spaces that truly reflect who you are.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: TEAM (cream bg) ────────────────────── */}
      <section
        className="section-pad-xl"
        style={{ background: 'var(--color-cream)' }}
        aria-label="Meet the team"
      >
        <div className="container-wide">
          <AnimateOnScroll>
            <p className="t-label mb-4" style={{ color: 'var(--color-taupe)' }}>
              The Team
            </p>
            <h2
              className="t-heading font-serif mb-16"
              style={{ color: 'var(--color-espresso)', maxWidth: '500px' }}
            >
              The people behind every space.
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {team.map((member, i) => (
              <AnimateOnScroll key={member.name} delay={i * 0.12}>
                <div>
                  <div
                    className="relative w-full img-zoom-wrapper mb-8"
                    style={{ aspectRatio: '4/5' }}
                  >
                    <Image
                      src={member.image}
                      alt={`${member.name} — ${member.title} at ARQMA`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <p className="t-label mb-1" style={{ color: 'var(--color-taupe)' }}>
                    {member.title}
                  </p>
                  <h3
                    className="font-serif mb-4"
                    style={{
                      color: 'var(--color-espresso)',
                      fontSize: 'clamp(1.4rem, 2vw, 2rem)',
                    }}
                  >
                    {member.name}
                  </h3>
                  <p className="t-body" style={{ color: 'var(--color-taupe)', lineHeight: 1.9, textAlign: 'justify' }}>
                    {member.name === 'Marcia Oliveira'
                      ? `${member.name} ${member.bio}`
                      : member.bio}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ paddingTop: 'clamp(140px, 16vw, 240px)', paddingBottom: 'clamp(140px, 16vw, 240px)' }}
        aria-label="Work with us"
      >
        <Image
          src="/images/projects/wellthera/RP400446.jpg"
          alt="ARQMA interior design studio"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(42,31,26,0.52)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(42,31,26,0.72) 0%, transparent 38%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(42,31,26,0.72) 0%, transparent 38%)' }} />

        <div className="relative z-10 text-center" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5vw' }}>
          <AnimateOnScroll>
            <p className="mb-6" style={{ color: 'rgba(238,235,231,0.7)', fontSize: '1rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500 }}>
              Work With Us
            </p>
            <h2
              className="font-serif italic"
              style={{
                color: 'var(--color-cream)',
                marginBottom: '2.5rem',
                fontSize: 'clamp(2.8rem, 5.5vw, 6.5rem)',
                lineHeight: 1.08,
              }}
            >
              Let&apos;s bring your vision to life.
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
