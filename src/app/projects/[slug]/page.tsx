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
  const firstGallery = galleryImages.slice(0, 1)
  const restGallery = galleryImages.slice(1)

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
            {project.category === 'commercial'
              ? 'Commercial'
              : project.category === 'nursery'
              ? 'Nursery'
              : 'Residential'}
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
        className="py-24 md:py-32"
        style={{ background: 'var(--color-cream)' }}
        aria-label="Project description"
      >
        <div className="container-narrow">
          <AnimateOnScroll>
            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-10">
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
              style={{ color: 'var(--color-espresso)', lineHeight: 1.6 }}
            >
              {project.description}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────────── */}
      <section
        className="pb-24 md:pb-32"
        style={{ background: 'var(--color-cream)' }}
        aria-label="Project gallery"
      >
        <div className="container-wide">
          {/* First large image */}
          {firstGallery.length > 0 && (
            <AnimateOnScroll>
              <div className="relative w-full mb-4 img-zoom-wrapper" style={{ aspectRatio: '16/9' }}>
                <Image
                  src={firstGallery[0]}
                  alt={`${project.name} — interior design detail`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </AnimateOnScroll>
          )}

          {/* Rest in grid */}
          {restGallery.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {restGallery.map((img, i) => (
                <AnimateOnScroll key={img} delay={i * 0.05}>
                  <div
                    className="relative img-zoom-wrapper"
                    style={{ aspectRatio: i % 5 === 0 ? '4/3' : '3/4' }}
                  >
                    <Image
                      src={img}
                      alt={`${project.name} — photo ${i + 2}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section
        className="relative py-32 md:py-44 overflow-hidden"
        aria-label="Start your project"
      >
        <Image
          src={project.images[project.images.length - 1]}
          alt="ARQMA interior design Toronto"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(42,31,26,0.65)' }} />

        <div className="container-narrow relative z-10 text-center">
          <AnimateOnScroll>
            <p className="t-label mb-6" style={{ color: 'rgba(238,235,231,0.6)' }}>
              Inspired by this project?
            </p>
            <h2
              className="t-display font-serif italic mb-8"
              style={{ color: 'var(--color-cream)' }}
            >
              Let&apos;s design your space with the same care and intention.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/connect" className="btn-light">
                Start Your Project
              </Link>
              <Link href="/projects" className="btn-light">
                View All Projects
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
