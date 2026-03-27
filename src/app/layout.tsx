import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
  description:
    'ARQMA is an award-winning interior design studio in Toronto, Canada. Specializing in residential and commercial interior design, we create beautifully curated spaces that reflect your authentic life and unique style. Full-service design and consultation available.',
  keywords: [
    'interior designer Toronto',
    'interior design studio Toronto',
    'residential interior design Toronto',
    'commercial interior design Toronto',
    'luxury interior design Toronto',
    'interior design Canada',
    'interior designer near me Toronto',
    'home renovation Toronto',
    'interior design consultation Toronto',
    'ARQMA design studio',
    'Toronto interior designer',
    'best interior designer Toronto',
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
    areaServed: {
      '@type': 'City',
      name: 'Toronto',
    },
    serviceType: ['Residential Interior Design', 'Commercial Interior Design', 'Design Consultation'],
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
