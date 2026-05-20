'use client'

import Image from 'next/image'

const tiles = [
  '/images/hero/Wellthera1.jpg',
  '/images/hero/MBBEAULTY-SAL-CREATORS-8.jpg',
  '/images/hero/RMPROREAL_ARQMA_516_HIDDEN_CREEK-8.jpg',
  '/images/hero/SAL_CREATORS_ARQMA_NATALIA-4.jpg',
  '/images/hero/RMPROREAL-BOSSA-NOVA-1.jpg',
  '/images/hero/ARQMA-TERRY-LUANA-NURSERY-4.jpg',
]

const INSTAGRAM = 'https://www.instagram.com/arqmainteriors/'
const PINTEREST = 'https://www.pinterest.ca/arqmainteriors/'
const FACEBOOK = 'https://www.facebook.com/arqmainteriors/'

function IconInstagram() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconPinterest() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  )
}

function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

export default function InstagramFeed() {
  return (
    <section
      style={{
        background: 'var(--color-cream)',
        paddingTop: 'clamp(4rem, 7vw, 7rem)',
        paddingBottom: 'clamp(4rem, 7vw, 7rem)',
      }}
      aria-label="Follow us on social media"
    >
      {/* Header */}
      <div className="container-wide" style={{ marginBottom: 'clamp(1.5rem, 2.5vw, 2.5rem)' }}>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="t-label mb-2" style={{ color: 'var(--color-taupe)' }}>Social</p>
            <h2 className="t-heading font-serif" style={{ color: 'var(--color-espresso)' }}>
              Follow Us on Social
            </h2>
          </div>
          {/* Social icons */}
          <div className="flex items-center gap-5">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @arqmainteriors"
              className="transition-opacity duration-200 hover:opacity-100"
              style={{ color: 'var(--color-espresso)', opacity: 0.55 }}
            >
              <IconInstagram />
            </a>
            <a
              href={PINTEREST}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="transition-opacity duration-200 hover:opacity-100"
              style={{ color: 'var(--color-espresso)', opacity: 0.55 }}
            >
              <IconPinterest />
            </a>
            <a
              href={FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="transition-opacity duration-200 hover:opacity-100"
              style={{ color: 'var(--color-espresso)', opacity: 0.55 }}
            >
              <IconFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Tiles — horizontal scroll on mobile, full row on desktop */}
      <div style={{ overflowX: 'auto', paddingLeft: '5vw', paddingRight: '5vw' }}>
        <div
          style={{
            display: 'flex',
            gap: '4px',
            width: 'max-content',
          }}
        >
          {tiles.map((src, i) => (
            <a
              key={i}
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View on Instagram — post ${i + 1}`}
              className="group block flex-shrink-0 overflow-hidden relative"
              style={{
                width: 'clamp(160px, 16.5vw, 260px)',
                aspectRatio: '1 / 1',
              }}
            >
              <Image
                src={src}
                alt={`ARQMA Interior Design — @arqmainteriors post ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                sizes="(max-width: 768px) 42vw, 17vw"
              />
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'rgba(42,31,26,0.32)' }}
              >
                <span style={{ color: 'white', opacity: 0.9 }}>
                  <IconInstagram />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
