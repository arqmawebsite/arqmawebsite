import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-espresso)', color: 'var(--color-cream)' }}>
      <div className="container-wide pt-32 md:pt-44 pb-24 md:pb-32">
        {/* Logo */}
        <div className="mb-16 md:mb-20">
          <Image
            src="/images/brand/Logo_lettering.png"
            alt="ARQMA Interior Design Studio"
            width={160}
            height={42}
            className="h-8 w-auto opacity-90"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:flex lg:flex-row lg:justify-between mb-16 md:mb-20">
          {/* Newsletter */}
          <div className="lg:max-w-[220px]">
            <p className="t-label text-[var(--color-cream)] mb-8 opacity-80" style={{ letterSpacing: '0.14em' }}>Stay Inspired</p>
            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="First Name"
                className="bg-transparent border-b border-[rgba(238,235,231,0.25)] text-[var(--color-cream)] placeholder-[rgba(238,235,231,0.4)] t-body py-2 outline-none focus:border-[rgba(238,235,231,0.7)] transition-all"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border-b border-[rgba(238,235,231,0.25)] text-[var(--color-cream)] placeholder-[rgba(238,235,231,0.4)] t-body py-2 outline-none focus:border-[rgba(238,235,231,0.7)] transition-all"
              />
              <button className="btn-light mt-2 self-start">Subscribe</button>
            </form>
          </div>

          {/* Connect */}
          <div className="lg:max-w-[180px]">
            <p className="t-label text-[var(--color-cream)] mb-8 opacity-80" style={{ letterSpacing: '0.14em' }}>Connect</p>
            <div className="flex flex-col gap-4">
              <a href="tel:+16476856421" className="t-body text-[var(--color-cream)] opacity-70 hover:opacity-100 leading-loose">
                647 685 6421
              </a>
              <a href="mailto:info@arqma.ca" className="t-body text-[var(--color-cream)] opacity-70 hover:opacity-100 uppercase tracking-widest text-xs leading-loose">
                INFO@ARQMA.CA
              </a>
              <a
                href="https://www.instagram.com/arqmainteriors"
                target="_blank"
                rel="noopener noreferrer"
                className="t-label text-[var(--color-cream)] opacity-70 hover:opacity-100 mt-1 leading-loose"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:max-w-[160px]">
            <p className="t-label text-[var(--color-cream)] mb-8 opacity-80" style={{ letterSpacing: '0.14em' }}>Navigation</p>
            <div className="flex flex-col gap-4">
              {[
                { label: 'Projects', href: '/projects' },
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Testimonials', href: '/testimonials' },
                { label: 'Get in Touch', href: '/connect' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="t-label text-[var(--color-cream)] opacity-70 hover:opacity-100 leading-loose"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="lg:max-w-[200px]">
            <p className="t-label text-[var(--color-cream)] mb-8 opacity-80" style={{ letterSpacing: '0.14em' }}>Location</p>
            <p className="t-body text-[var(--color-cream)] opacity-70 leading-loose">
              Toronto, Ontario<br />Canada
            </p>
            <p className="t-body text-[var(--color-cream)] opacity-50 mt-5 text-xs leading-loose">
              Serving clients across<br />Canada &amp; the United States.<br />In-person &amp; remote available.
            </p>
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
