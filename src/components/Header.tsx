'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'In Their Words', href: '/testimonials' },
  { label: 'Connect', href: '/connect' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 50)
      if (currentY > lastScrollY && currentY > 120) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      setLastScrollY(currentY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* Header bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-350 ${
          hidden && !menuOpen ? '-translate-y-full' : 'translate-y-0'
        }`}
        style={{ padding: '1.25rem 5vw' }}
      >
        {/* Logo */}
        <Link href="/" className={`transition-opacity duration-300 ${isHome && !scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <Image
            src="/images/brand/Vector.png"
            alt="ARQMA Interior Design Studio"
            width={48}
            height={48}
            className="h-8 w-auto"
            style={{ filter: scrolled || menuOpen ? 'brightness(0)' : 'brightness(0) invert(1)' }}
          />
        </Link>

        {/* Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col items-center justify-center gap-[6px] w-12 h-12 cursor-pointer"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          style={{ zIndex: 60 }}
        >
          <span
            className={`block h-[1.5px] w-7 transition-all duration-300 ${
              scrolled || menuOpen ? 'bg-[var(--color-espresso)]' : 'bg-[var(--color-cream)]'
            } ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}
          />
          <span
            className={`block h-[1.5px] w-7 transition-all duration-300 ${
              scrolled || menuOpen ? 'bg-[var(--color-espresso)]' : 'bg-[var(--color-cream)]'
            } ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-[1.5px] w-7 transition-all duration-300 ${
              scrolled || menuOpen ? 'bg-[var(--color-espresso)]' : 'bg-[var(--color-cream)]'
            } ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}
          />
        </button>
      </header>

      {/* Navigation Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-40"
              style={{ background: 'rgba(42,31,26,0.5)' }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.nav
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 h-full w-full md:w-[55vw] lg:w-[45vw] z-50 flex flex-col justify-between py-24"
              style={{ background: 'var(--color-espresso)', paddingLeft: 'clamp(44px, 12vw, 80px)', paddingRight: 'clamp(44px, 12vw, 80px)' }}
            >
              {/* Nav links */}
              <div className="flex flex-col gap-5 md:gap-6">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={item.href}
                      className={`nav-link block ${pathname === item.href ? 'opacity-50' : ''}`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-col gap-4"
              >
                <div className="divider" style={{ borderColor: 'rgba(238,235,231,0.2)' }} />
                <div className="flex flex-col gap-2">
                  <a
                    href="tel:+16476856421"
                    className="t-label text-[var(--color-cream)] opacity-60 hover:opacity-100"
                  >
                    647 685 6421
                  </a>
                  <a
                    href="mailto:info@arqma.ca"
                    className="t-label text-[var(--color-cream)] opacity-60 hover:opacity-100"
                  >
                    info@arqma.ca
                  </a>
                  <a
                    href="https://www.instagram.com/arqmainteriors"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="t-label text-[var(--color-cream)] opacity-60 hover:opacity-100"
                  >
                    @arqmainteriors
                  </a>
                </div>
                {/* Monogram watermark */}
                <div className="absolute bottom-8 right-10 opacity-[0.06]">
                  <Image
                    src="/images/brand/Vector.png"
                    alt=""
                    width={160}
                    height={160}
                    className="w-32 h-auto"
                  />
                </div>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
