'use client'

import React from 'react'
import Script from 'next/script'

const INSTAGRAM = 'https://www.instagram.com/arqmainteriors/'
const FEED_ID = process.env.NEXT_PUBLIC_BEHOLD_FEED_ID ?? ''

function IconInstagram() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
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
      {/* Load Behold widget script */}
      <Script
        src="https://w.behold.so/widget.js"
        type="module"
        strategy="afterInteractive"
      />

      {/* Header */}
      <div className="container-wide" style={{ marginBottom: 'clamp(1.5rem, 2.5vw, 2.5rem)' }}>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="t-label mb-2" style={{ color: 'var(--color-taupe)' }}>Social</p>
            <h2 className="t-heading font-serif" style={{ color: 'var(--color-espresso)' }}>
              Follow Us on Social
            </h2>
          </div>
          {/* Instagram icon only */}
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
        </div>
      </div>

      {/* Behold widget — updates automatically with new Instagram posts */}
      <div className="container-wide">
        {FEED_ID
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ? (React.createElement as any)('behold-widget', { 'feed-id': FEED_ID })
          : (
            <p className="t-label" style={{ color: 'var(--color-taupe)', opacity: 0.5 }}>
              Instagram feed coming soon.
            </p>
          )}
      </div>
    </section>
  )
}
