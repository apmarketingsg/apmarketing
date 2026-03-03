import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const siteUrl = 'https://apmarketing.sg'
const siteName = 'AP Marketing'

export const metadata: Metadata = {
  title: {
    default: `${siteName} | AI SEO & Answer Engine Optimization Agency`,
    template: `%s | ${siteName}`,
  },
  description:
    'AP Marketing is a Singapore-based AI SEO & AEO agency. We help businesses rank on Google, Perplexity, SearchGPT, and Claude with data-driven AI search strategies.',
  keywords: [
    'AI SEO agency',
    'Answer Engine Optimization',
    'AEO agency Singapore',
    'AI SEO audit',
    'Perplexity SEO',
    'SearchGPT optimization',
    'AI content optimization',
    'local SEO Singapore',
    'keyword research agency',
    'technical SEO',
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_SG',
    url: siteUrl,
    siteName,
    title: `${siteName} | AI SEO & Answer Engine Optimization Agency`,
    description:
      'Rank on Google, Perplexity, SearchGPT, and Claude. AI-powered SEO strategies built for the future of search.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${siteName} - AI SEO & AEO Agency`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} | AI SEO & AEO Agency`,
    description:
      'Rank on Google, Perplexity, SearchGPT, and Claude with AI-powered SEO strategies.',
    images: ['/og-image.png'],
    creator: '@apmarketingsg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Digital Marketing',
}

// Organization schema — AEO best practice
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: siteName,
  alternateName: 'AP Marketing SG',
  url: siteUrl,
  logo: {
    '@type': 'ImageObject',
    url: `${siteUrl}/logo.png`,
    width: 512,
    height: 512,
  },
  description:
    'AI SEO and Answer Engine Optimization agency based in Singapore, helping businesses rank across Google, Perplexity, SearchGPT, and Claude.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'SG',
    addressRegion: 'Singapore',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'hello@apmarketing.sg',
      availableLanguage: ['English'],
    },
  ],
  sameAs: [
    'https://twitter.com/apmarketingsg',
    'https://www.linkedin.com/company/apmarketingsg',
  ],
  knowsAbout: [
    'Search Engine Optimization',
    'Answer Engine Optimization',
    'AI Content Strategy',
    'Local SEO',
    'Technical SEO',
    'Keyword Research',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI SEO Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI SEO Audit & Opportunity Report' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Keyword Research & Search Intent Mapping' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Content Optimization' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI SEO Content Creation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Local SEO Setup & Optimization' } },
    ],
  },
}

// WebSite schema with SearchAction
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: siteName,
  url: siteUrl,
  description: 'AI SEO & Answer Engine Optimization Agency',
  publisher: { '@id': `${siteUrl}/#organization` },
  inLanguage: 'en-SG',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-SG">
      <head>
        {/* ── Security Meta Tags ─────────────────────────────────────── */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta
          httpEquiv="Permissions-Policy"
          content="camera=(), microphone=(), geolocation=(self), interest-cohort=()"
        />

        {/* ── AEO / AI Engine Discovery Tags ─────────────────────────── */}
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />

        {/* ── Performance ────────────────────────────────────────────── */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ── Favicons ───────────────────────────────────────────────── */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* ── JSON-LD Structured Data (AEO) ──────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans bg-[#050510] text-white antialiased">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
