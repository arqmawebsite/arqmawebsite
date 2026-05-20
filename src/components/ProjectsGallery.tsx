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
          <h2 className="t-hero font-serif" style={{ color: 'var(--color-cream)' }}>Portfolio</h2>
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
            <div className="flex items-center gap-10" style={{ borderBottom: '1px solid rgba(66,53,44,0.1)', marginBottom: '5rem' }}>
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveFilter(tab.value)}
                  className="transition-all duration-300 cursor-pointer pb-5"
                  style={{
                    color: activeFilter === tab.value ? 'var(--color-espresso)' : 'rgba(66,53,44,0.35)',
                    marginBottom: '-1px',
                    background: 'none',
                    outline: 'none',
                    border: 'none',
                    borderBottom: activeFilter === tab.value ? '1px solid var(--color-espresso)' : '1px solid transparent',
                    fontSize: '0.85rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase' as const,
                    fontWeight: 500,
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map((project, i) => (
                <AnimateOnScroll key={project.slug} delay={(i % 2) * 0.07}>
                  <Link href={`/projects/${project.slug}`} className="block group relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
                    <Image
                      src={project.coverImage}
                      alt={`${project.name} — ARQMA Interior Design`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(42,31,26,0.82) 0%, rgba(42,31,26,0.1) 55%, transparent 100%)' }} />
                    <div className="absolute bottom-0 left-0 right-0" style={{ padding: '1.5rem 1.75rem 2.5rem' }}>
                      <p className="t-label mb-2" style={{ color: 'rgba(238,235,231,0.85)' }}>{getCategoryLabel(project.category)}</p>
                      <h3 className="font-serif" style={{ color: 'var(--color-cream)', fontSize: 'clamp(1.2rem, 2vw, 2rem)' }}>{project.name}</h3>
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ paddingTop: 'clamp(140px, 16vw, 240px)', paddingBottom: 'clamp(140px, 16vw, 240px)' }} aria-label="Start your project">
        <Image
          src="/images/projects/mb-beauty/MBBEAULTY-SAL-CREATORS-1.jpg"
          alt="ARQMA interior design studio Toronto"
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
            <p className="mb-6" style={{ color: 'rgba(238,235,231,0.7)', fontSize: '0.82rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500 }}>Ready to Begin?</p>
            <h2 className="t-display font-serif italic" style={{ color: 'var(--color-cream)', marginBottom: '2.5rem' }}>
              Let&apos;s design a space that elevates your experience.
            </h2>
            <Link href="/connect" className="btn-light">Start Your Project</Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
