'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { projects } from '@/data/projects'

type FilterTab = 'all' | 'commercial' | 'residential'

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>('all')

  const filtered = projects.filter((p) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'residential')
      return p.category === 'residential' || p.category === 'nursery'
    return p.category === activeFilter
  })

  const tabs: { label: string; value: FilterTab }[] = [
    { label: 'All', value: 'all' },
    { label: 'Commercial', value: 'commercial' },
    { label: 'Residential', value: 'residential' },
  ]

  const getCategoryLabel = (cat: string) =>
    cat === 'commercial' ? 'Commercial' : cat === 'nursery' ? 'Nursery' : 'Residential'

  // Split into featured (first) and rest
  const featured = filtered[0]
  const rest = filtered.slice(1)

  return (
    <>
      <h1 className="sr-only">ARQMA Interior Design Projects Toronto</h1>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="section-full w-full overflow-hidden relative" aria-label="Projects hero">
        <Image
          src="/images/projects/hidden-creek/RMPROREAL_ARQMA_516_HIDDEN_CREEK-1.jpg"
          alt="ARQMA Interior Design Projects Toronto"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="overlay-dark" />
        <div className="absolute bottom-16 left-[5vw] z-20">
          <p className="t-label mb-3" style={{ color: 'rgba(238,235,231,0.6)' }}>Our Work</p>
          <h2 className="t-hero font-serif" style={{ color: 'var(--color-cream)' }}>Projects</h2>
        </div>
      </section>

      {/* ── GALLERY ─────────────────────────────────────────── */}
      <section
        className="section-pad-xl"
        style={{ background: 'var(--color-cream)' }}
        aria-label="Project gallery"
      >
        <div className="container-wide">

          {/* Filter tabs */}
          <AnimateOnScroll>
            <div className="flex items-center gap-10 mb-16 md:mb-20" style={{ borderBottom: '1px solid rgba(66,53,44,0.1)' }}>
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveFilter(tab.value)}
                  className="t-label pb-4 transition-all duration-300 cursor-pointer"
                  style={{
                    color: activeFilter === tab.value ? 'var(--color-espresso)' : 'rgba(66,53,44,0.35)',
                    marginBottom: '-1px',
                    background: 'none',
                    outline: 'none',
                    border: 'none',
                    borderBottom: activeFilter === tab.value ? '1px solid var(--color-espresso)' : '1px solid transparent',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </AnimateOnScroll>

          {filtered.length === 0 ? (
            <p className="t-body" style={{ color: 'var(--color-taupe)' }}>No projects found.</p>
          ) : (
            <div className="flex flex-col gap-4">

              {/* Featured first project — full width */}
              {featured && (
                <AnimateOnScroll>
                  <Link href={`/projects/${featured.slug}`} className="block group relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                    <Image
                      src={featured.coverImage}
                      alt={`${featured.name} — ARQMA Interior Design`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(42,31,26,0.82) 0%, rgba(42,31,26,0.15) 55%, transparent 100%)' }} />
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex items-end justify-between">
                      <div>
                        <p className="t-label mb-2" style={{ color: 'rgba(238,235,231,0.6)' }}>{getCategoryLabel(featured.category)}</p>
                        <h3 className="font-serif" style={{ color: 'var(--color-cream)', fontSize: 'clamp(1.6rem, 3vw, 3rem)' }}>{featured.name}</h3>
                      </div>
                      <span className="t-label hidden md:block" style={{ color: 'rgba(238,235,231,0.5)' }}>View Project →</span>
                    </div>
                  </Link>
                </AnimateOnScroll>
              )}

              {/* Rest in alternating rows of 2 */}
              {rest.map((project, i) => {
                // Group into pairs; skip odd indices (handled by even)
                if (i % 2 !== 0) return null
                const left = rest[i]
                const right = rest[i + 1]

                return (
                  <div key={left.slug} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Left card — alternates tall/short each row */}
                    <AnimateOnScroll delay={0.05}>
                      <Link href={`/projects/${left.slug}`} className="block group relative overflow-hidden" style={{ aspectRatio: i % 4 === 0 ? '3/4' : '4/3' }}>
                        <Image
                          src={left.coverImage}
                          alt={`${left.name} — ARQMA Interior Design`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(42,31,26,0.82) 0%, rgba(42,31,26,0.1) 55%, transparent 100%)' }} />
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                          <p className="t-label mb-1" style={{ color: 'rgba(238,235,231,0.6)' }}>{getCategoryLabel(left.category)}</p>
                          <h3 className="font-serif" style={{ color: 'var(--color-cream)', fontSize: 'clamp(1.1rem, 1.8vw, 1.8rem)' }}>{left.name}</h3>
                        </div>
                      </Link>
                    </AnimateOnScroll>

                    {/* Right card — inverse aspect ratio (if exists) */}
                    {right && (
                      <AnimateOnScroll delay={0.1}>
                        <Link href={`/projects/${right.slug}`} className="block group relative overflow-hidden" style={{ aspectRatio: i % 4 === 0 ? '4/3' : '3/4' }}>
                          <Image
                            src={right.coverImage}
                            alt={`${right.name} — ARQMA Interior Design`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(42,31,26,0.82) 0%, rgba(42,31,26,0.1) 55%, transparent 100%)' }} />
                          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                            <p className="t-label mb-1" style={{ color: 'rgba(238,235,231,0.6)' }}>{getCategoryLabel(right.category)}</p>
                            <h3 className="font-serif" style={{ color: 'var(--color-cream)', fontSize: 'clamp(1.1rem, 1.8vw, 1.8rem)' }}>{right.name}</h3>
                          </div>
                        </Link>
                      </AnimateOnScroll>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="relative py-44 md:py-56 overflow-hidden" aria-label="Start your project">
        <Image
          src="/images/projects/mb-beauty/MBBEAULTY-SAL-CREATORS-1.jpg"
          alt="ARQMA interior design studio Toronto"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(42,31,26,0.62)' }} />
        <div className="container-narrow relative z-10 text-center">
          <AnimateOnScroll>
            <p className="t-label mb-6" style={{ color: 'rgba(238,235,231,0.6)' }}>Ready to Begin?</p>
            <h2 className="t-display font-serif italic mb-8" style={{ color: 'var(--color-cream)' }}>
              Let&apos;s create your next space together.
            </h2>
            <Link href="/connect" className="btn-light">Get in Touch</Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
