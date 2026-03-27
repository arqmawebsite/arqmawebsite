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

  return (
    <>
      {/* Hidden SEO h1 */}
      <h1 className="sr-only">ARQMA Interior Design Projects Toronto</h1>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="section-full w-full overflow-hidden relative"
        aria-label="Projects hero"
      >
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
          <p className="t-label mb-3" style={{ color: 'rgba(238,235,231,0.6)' }}>
            Our Work
          </p>
          <h2 className="t-hero font-serif" style={{ color: 'var(--color-cream)' }}>
            Projects
          </h2>
        </div>
      </section>

      {/* ── FILTER + GRID ─────────────────────────────────────── */}
      <section
        className="py-20 md:py-28"
        style={{ background: 'var(--color-espresso)' }}
        aria-label="Project gallery"
      >
        <div className="container-wide">
          {/* Filter tabs */}
          <AnimateOnScroll>
            <div
              className="flex items-center gap-8 mb-14"
              style={{ borderBottom: '1px solid rgba(238,235,231,0.12)' }}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveFilter(tab.value)}
                  className="t-label transition-all duration-300 cursor-pointer"
                  style={{
                    color:
                      activeFilter === tab.value
                        ? 'var(--color-cream)'
                        : 'rgba(238,235,231,0.35)',
                    paddingBottom: '1rem',
                    marginBottom: '-1px',
                    background: 'none',
                    outline: 'none',
                    borderTop: 'none',
                    borderLeft: 'none',
                    borderRight: 'none',
                    borderBottom:
                      activeFilter === tab.value
                        ? '1px solid var(--color-cream)'
                        : '1px solid transparent',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <AnimateOnScroll key={project.slug} delay={i * 0.06}>
                <Link href={`/projects/${project.slug}`} className="block group">
                  <div
                    className="relative img-zoom-wrapper"
                    style={{ aspectRatio: '3/4' }}
                  >
                    <Image
                      src={project.coverImage}
                      alt={`${project.name} — ARQMA Interior Design Toronto`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div
                      className="absolute inset-0 flex flex-col justify-end p-6"
                      style={{
                        background:
                          'linear-gradient(to top, rgba(42,31,26,0.9) 0%, rgba(42,31,26,0.25) 50%, transparent 100%)',
                      }}
                    >
                      <p
                        className="t-label mb-1"
                        style={{ color: 'rgba(238,235,231,0.6)' }}
                      >
                        {project.category === 'commercial'
                          ? 'Commercial'
                          : project.category === 'nursery'
                          ? 'Nursery'
                          : 'Residential'}
                      </p>
                      <h3
                        className="font-serif"
                        style={{
                          color: 'var(--color-cream)',
                          fontSize: 'clamp(1.1rem, 1.5vw, 1.5rem)',
                        }}
                      >
                        {project.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section
        className="relative py-32 md:py-44 overflow-hidden"
        aria-label="Start your project"
      >
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
            <p className="t-label mb-6" style={{ color: 'rgba(238,235,231,0.6)' }}>
              Ready to Begin?
            </p>
            <h2
              className="t-display font-serif italic mb-8"
              style={{ color: 'var(--color-cream)' }}
            >
              Let&apos;s create your next space together.
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
