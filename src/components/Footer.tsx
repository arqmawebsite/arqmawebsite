import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-espresso)', color: 'var(--color-cream)' }}>
      <div className="container-wide py-16 md:py-20">
        {/* Logo */}
        <div className="mb-12 md:mb-16">
          <Image
            src="/images/brand/Logo_lettering.png"
            alt="ARQMA Interior Design Studio"
            width={160}
            height={42}
            className="h-8 w-auto opacity-90"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-12 md:mb-16">
          {/* Newsletter */}
          <div>
            <p className="t-label text-[var(--color-cream)] mb-6 opacity-60">Stay Inspired</p>
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
          <div>
            <p className="t-label text-[var(--color-cream)] mb-6 opacity-60">Connect</p>
            <div className="flex flex-col gap-3">
              <a href="tel:+16476856421" className="t-body text-[var(--color-cream)] opacity-70 hover:opacity-100">
                647 685 6421
              </a>
              <a href="mailto:info@arqma.ca" className="t-body text-[var(--color-cream)] opacity-70 hover:opacity-100 uppercase tracking-widest text-xs">
                INFO@ARQMA.CA
              </a>
              <a
                href="https://www.instagram.com/arqmainteriors"
                target="_blank"
                rel="noopener noreferrer"
                className="t-label text-[var(--color-cream)] opacity-70 hover:opacity-100 mt-1"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="t-label text-[var(--color-cream)] mb-6 opacity-60">Navigation</p>
            <div className="flex flex-col gap-3">
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
                  className="t-label text-[var(--color-cream)] opacity-70 hover:opacity-100"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <p className="t-label text-[var(--color-cream)] mb-6 opacity-60">Location</p>
            <p className="t-body text-[var(--color-cream)] opacity-70 leading-relaxed">
              Toronto, Ontario<br />Canada
            </p>
            <p className="t-body text-[var(--color-cream)] opacity-50 mt-4 text-xs leading-relaxed">
              Serving clients across<br />Canada &amp; the United States.<br />In-person &amp; remote available.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
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
