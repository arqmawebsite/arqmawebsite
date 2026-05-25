import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

const siteUrl = 'https://www.arqma.ca'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ARQMA | Interior Design Studio — Toronto, Canada',
    template: '%s | ARQMA Interior Design Toronto',
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/images/brand/favicon-dark.png', type: 'image/png', media: '(prefers-color-scheme: light)' },
      { url: '/images/brand/favicon-light.png', type: 'image/png', media: '(prefers-color-scheme: dark)' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  description:
    'ARQMA is a luxury interior design studio based in Toronto, Canada, serving clients across Canada and the United States. Specializing in residential and commercial interior design, we create beautifully curated spaces with full-service design, remote consultation, and end-to-end project support.',
  keywords: [
    'interior designer Toronto',
    'interior design studio Toronto',
    'residential interior design Toronto',
    'commercial interior design Toronto',
    'luxury interior design Toronto',
    'interior design Canada',
    'interior design USA',
    'interior designer near me Toronto',
    'home renovation Toronto',
    'interior design consultation Toronto',
    'remote interior design Canada',
    'remote interior design USA',
    'online interior designer Canada',
    'interior design services United States',
    'luxury interior designer Canada',
    'luxury interior design United States',
    'ARQMA design studio',
    'Toronto interior designer',
    'best interior designer Toronto',
    'interior design consultation online',
    'full service interior design Canada',
  ],
  authors: [{ name: 'ARQMA Design Studio' }],
  creator: 'ARQMA Design Studio',
  publisher: 'ARQMA Design Studio',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: siteUrl,
    siteName: 'ARQMA Interior Design',
    title: 'ARQMA | Interior Design Studio — Toronto, Canada',
    description:
      'Award-winning interior design studio in Toronto. Residential & commercial spaces designed with intention, beauty and purpose.',
    images: [
      {
        url: '/images/projects/hidden-creek/RMPROREAL_ARQMA_516_HIDDEN_CREEK-1.jpg',
        width: 1200,
        height: 630,
        alt: 'ARQMA Interior Design Studio — Toronto',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARQMA | Interior Design Studio — Toronto, Canada',
    description:
      'Award-winning interior design studio in Toronto. Residential & commercial spaces designed with intention.',
    images: ['/images/projects/hidden-creek/RMPROREAL_ARQMA_516_HIDDEN_CREEK-1.jpg'],
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'InteriorDesigner',
    name: 'ARQMA Interior Design Studio',
    url: siteUrl,
    logo: `${siteUrl}/images/brand/Logo_lettering.png`,
    description:
      'ARQMA is an interior design studio in Toronto, Canada, dedicated to creating thoughtfully curated spaces with a strong emphasis on client experience.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Toronto',
      addressRegion: 'Ontario',
      addressCountry: 'CA',
    },
    telephone: '+16476856421',
    email: 'info@arqma.ca',
    sameAs: ['https://www.instagram.com/arqmainteriors'],
    priceRange: '$$$$',
    areaServed: [
      { '@type': 'Country', name: 'Canada' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'City', name: 'Toronto' },
      { '@type': 'City', name: 'New York' },
      { '@type': 'City', name: 'Miami' },
      { '@type': 'City', name: 'Los Angeles' },
    ],
    serviceType: [
      'Residential Interior Design',
      'Commercial Interior Design',
      'Design Consultation',
      'Remote Interior Design',
      'Online Interior Design Consultation',
      'Full-Service Interior Design',
    ],
  }

  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
