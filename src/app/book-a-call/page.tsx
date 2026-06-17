import type { Metadata } from 'next'
import BookACallPage from '@/src/pages/BookACallPage'

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Book a Discovery Call — Kovil AI',
  description: 'Book a 30-minute discovery call with the Kovil AI team to discuss your AI engineering challenge.',
  url: 'https://kovil.ai/book-a-call',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    telephone: '+1-516-000-0000',
    email: 'hello@kovil.ai',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Garden City',
      addressRegion: 'NY',
      addressCountry: 'US',
    },
  },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Book a Call', item: 'https://kovil.ai/book-a-call' },
  ],
}

export const metadata: Metadata = {
  title: 'Book a Discovery Call — Kovil AI',
  description: 'Book a 30-minute discovery call with the Kovil AI team. No sales pitch — just a real conversation about your AI build.',
  alternates: { canonical: 'https://kovil.ai/book-a-call' },
  openGraph: {
    type: 'website',
    title: 'Book a Discovery Call — Kovil AI',
    description: 'Book a 30-minute call with the Kovil AI team. No pitch, no fluff — just a real conversation about your AI engineering challenge.',
    url: 'https://kovil.ai/book-a-call',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Book a Call with Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Discovery Call — Kovil AI',
    description: 'Book a 30-minute call with the Kovil AI team. No pitch, no fluff — just a real conversation about your AI engineering challenge.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <BookACallPage />
    </>
  )
}
