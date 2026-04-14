import type { Metadata } from 'next'
import ContactPage from '@/src/pages/ContactPage'

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
  return <div className="pt-20"><ContactPage /></div>
}
