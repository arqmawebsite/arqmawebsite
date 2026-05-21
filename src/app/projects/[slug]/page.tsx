import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import { projects } from '@/data/projects'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.name} — ARQMA Interior Design Toronto`,
    description: project.shortDescription,
    alternates: { canonical: `https://www.arqma.ca/projects/${slug}` },
    openGraph: {
      title: `${project.name} — ARQMA Interior Design Toronto`,
      description: project.shortDescription,
      images: [{ url: project.coverImage }],
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const galleryImages = project.images.slice(1)

  const categoryLabel =
    project.category === 'commercial'
      ? 'Commercial'
      : project.category === 'nursery'
      ? 'Nursery'
      : 'Residential'

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="section-full w-full overflow-hidden relative" aria-label={`${project.name} hero`}>
        <Image
          src={project.coverImage}
          alt={`${project.name} — ARQMA Interior Design Toronto`}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="overlay-dark" />

        <div className="absolute bottom-16 left-[5vw] z-20">
          <p className="t-label mb-3" style={{ color: 'rgba(238,235,231,0.6)' }}>
            {categoryLabel}
          </p>
          <h1
            className="t-hero font-serif"
            style={{ color: 'var(--color-cream)' }}
          >
            {project.name}
          </h1>
        </div>
      </section>

      {/* ── DESCRIPTION ──────────────────────────────────────── */}
      <section
        style={{ background: 'var(--color-cream)', paddingTop: 'clamp(80px, 10vw, 160px)', paddingBottom: 'clamp(80px, 10vw, 160px)' }}
        aria-label="Project description"
      >
        <div className="container-wide">
          <AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

              {/* Left: tags + description */}
              <div>
                <div className="flex flex-wrap gap-3" style={{ marginBottom: '2.5rem' }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="t-label px-4 py-2"
                      style={{
                        border: '1px solid rgba(66,53,44,0.25)',
                        color: 'var(--color-taupe)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p
                  className="t-subheading font-serif"
                  style={{ color: 'var(--color-espresso)', lineHeight: 1.7, fontSize: 'clamp(1.15rem, 1.6vw, 1.5rem)', textAlign: 'justify' }}
                >
                  {project.description}
                </p>
              </div>

              {/* Right: key details */}
              <div className="flex flex-col gap-8 md:pt-2">
                <div>
                  <p className="t-label mb-2" style={{ color: 'rgba(66,53,44,0.4)' }}>Category</p>
                  <p className="font-serif" style={{ color: 'var(--color-espresso)', fontSize: 'clamp(1rem, 1.2vw, 1.2rem)' }}>{categoryLabel}</p>
                </div>
                <div
                  style={{ width: '100%', height: '1px', background: 'rgba(66,53,44,0.1)' }}
                />
                <div>
                  <p className="t-label mb-2" style={{ color: 'rgba(66,53,44,0.4)' }}>Location</p>
                  <p className="font-serif" style={{ color: 'var(--color-espresso)', fontSize: 'clamp(1rem, 1.2vw, 1.2rem)' }}>{project.location ?? 'Ontario, Canada'}</p>
                </div>
              </div>

            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────────── */}
      <section
        style={{ background: 'var(--color-cream)', paddingBottom: 'clamp(10rem, 18vw, 22rem)' }}
        aria-label="Project gallery"
      >
        <div className="container-wide">

          {/* Divider */}
          <div
            className="mb-16 md:mb-20"
            style={{ width: '100%', height: '1px', background: 'rgba(66,53,44,0.12)' }}
          />

          {/* Gallery: uniform 2-column grid */}
          {galleryImages.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {galleryImages.map((img, i) => {
                const objPos = project.imageObjectPositions?.[i] ?? '50% 50%'
                return (
                  <AnimateOnScroll key={img} delay={(i % 4) * 0.05}>
                    <div className="relative img-zoom-wrapper" style={{ aspectRatio: '4/3' }}>
                      <Image
                        src={img}
                        alt={`${project.name} — interior design detail`}
                        fill
                        className="object-cover"
                        style={{ objectPosition: objPos }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </AnimateOnScroll>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ paddingTop: 'clamp(140px, 16vw, 240px)', paddingBottom: 'clamp(140px, 16vw, 240px)' }}
        aria-label="Start your project"
      >
        <Image
          src={project.images[project.images.length - 1]}
          alt="ARQMA interior design Toronto"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(42,31,26,0.52)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(42,31,26,0.72) 0%, transparent 38%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(42,31,26,0.72) 0%, transparent 38%)' }} />

        <div
          className="relative z-10 text-center"
          style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5vw' }}
        >
          <AnimateOnScroll>
            <p className="mb-6" style={{ color: 'rgba(238,235,231,0.7)', fontSize: '1rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500 }}>
              Inspired by this project?
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
