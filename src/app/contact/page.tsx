import type { Metadata } from 'next'
import ContactPage from '@/src/pages/ContactPage'

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Kovil AI',
  description: 'Contact Kovil AI to discuss your AI engineering project, managed engineer placement, or AI app rescue. Response within 24 hours.',
  url: 'https://kovil.ai/contact',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    email: 'hello@kovil.ai',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '600 Old Country Road, Suite 535',
      addressLocality: 'Garden City',
      addressRegion: 'NY',
      postalCode: '11530',
      addressCountry: 'US',
    },
  },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://kovil.ai/contact' },
  ],
}

export const metadata: Metadata = {
  title: 'Contact Kovil AI — Get in Touch',
  description: 'Contact Kovil AI to discuss your AI engineering project, managed engineer placement, or app rescue needs.',
  alternates: { canonical: 'https://kovil.ai/contact' },
  openGraph: {
    type: 'website',
    title: 'Contact Kovil AI — Get in Touch',
    description: 'Discuss your AI engineering project, managed engineer placement, or app rescue needs. Get a response within 24 hours.',
    url: 'https://kovil.ai/contact',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Contact Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Kovil AI — Get in Touch',
    description: 'Discuss your AI engineering project, managed engineer placement, or app rescue needs. Get a response within 24 hours.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="pt-20"><ContactPage /></div>
    </>
  )
}
