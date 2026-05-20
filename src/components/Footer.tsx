import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-espresso)', color: 'var(--color-cream)', position: 'relative', zIndex: 1 }}>
      <div className="container-wide" style={{ paddingTop: 'clamp(56px, 6vw, 96px)', paddingBottom: 'clamp(48px, 5vw, 80px)' }}>
        {/* Logo */}
        <div style={{ marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
          <Image
            src="/images/brand/Vector.png"
            alt="ARQMA Interior Design Studio"
            width={56}
            height={56}
            className="h-14 w-auto"
            style={{ filter: 'brightness(0) invert(1)', opacity: 0.85 }}
          />
        </div>

        {/* Newsletter — full-width horizontal row */}
        <div style={{ marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
          <p className="t-label text-[var(--color-cream)] opacity-80 mb-4" style={{ letterSpacing: '0.14em' }}>Stay Inspired</p>
          <form className="flex flex-col sm:flex-row items-stretch sm:items-end gap-3">
            <input
              type="text"
              placeholder="First Name"
              className="bg-transparent border-b border-[rgba(238,235,231,0.25)] text-[var(--color-cream)] placeholder-[rgba(238,235,231,0.4)] t-body py-2 outline-none focus:border-[rgba(238,235,231,0.7)] transition-all flex-1"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent border-b border-[rgba(238,235,231,0.25)] text-[var(--color-cream)] placeholder-[rgba(238,235,231,0.4)] t-body py-2 outline-none focus:border-[rgba(238,235,231,0.7)] transition-all flex-1"
            />
            <button className="btn-light sm:ml-2 shrink-0">Subscribe</button>
          </form>
        </div>

        {/* Grid — 3 equal columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10" style={{ marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
          {/* Connect */}
          <div>
            <p className="t-label text-[var(--color-cream)] opacity-80" style={{ letterSpacing: '0.14em', marginBottom: '1rem' }}>Connect</p>
            <div className="flex flex-col" style={{ gap: '1rem' }}>
              <a href="tel:+16476856421" className="t-label text-[var(--color-cream)] opacity-70 hover:opacity-100">
                647 685 6421
              </a>
              <a href="mailto:info@arqma.ca" className="t-label text-[var(--color-cream)] opacity-70 hover:opacity-100">
                INFO@ARQMA.CA
              </a>
              <a
                href="https://www.instagram.com/arqmainteriors"
                target="_blank"
                rel="noopener noreferrer"
                className="t-label text-[var(--color-cream)] opacity-70 hover:opacity-100"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="t-label text-[var(--color-cream)] opacity-80" style={{ letterSpacing: '0.14em', marginBottom: '1rem' }}>Navigation</p>
            <div className="flex flex-col" style={{ gap: '1rem' }}>
              {[
                { label: 'Portfolio', href: '/projects' },
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'In Their Words', href: '/testimonials' },
                { label: 'Get in Touch', href: '/connect' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="t-label text-[var(--color-cream)] opacity-70 hover:opacity-100"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <p className="t-label text-[var(--color-cream)] opacity-80" style={{ letterSpacing: '0.14em', marginBottom: '1rem' }}>Location</p>
            <div className="flex flex-col" style={{ gap: '1rem' }}>
              <p className="t-label text-[var(--color-cream)] opacity-70">Toronto, Ontario</p>
              <p className="t-label text-[var(--color-cream)] opacity-70">Canada</p>
              <p className="t-label text-[var(--color-cream)] opacity-50">
                Serving clients across Canada &amp; the United States.<br />In-person &amp; remote available.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="pt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(238,235,231,0.12)' }}
        >
          <p className="t-label opacity-40">©ARQMA {new Date().getFullYear()}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="t-label opacity-40 hover:opacity-70">
              Privacy Policy
            </Link>
            <Link href="/terms" className="t-label opacity-40 hover:opacity-70">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
