import type { Metadata } from 'next'
import CaseStudiesPage from '@/src/pages/CaseStudiesPage'

export const metadata: Metadata = {
  title: 'AI Engineering Case Studies — Real Work, Real Results | Kovil AI',
  description: 'How Kovil AI engineers delivered measurable outcomes across FinTech, HealthTech, Logistics, SaaS, and more.',
  alternates: { canonical: 'https://kovil.ai/case-studies' },
  openGraph: {
    type: 'website',
    title: 'AI Engineering Case Studies — Real Work, Real Results | Kovil AI',
    description: 'Real AI engineering outcomes across FinTech, HealthTech, Logistics, SaaS and more. See what Kovil AI has shipped.',
    url: 'https://kovil.ai/case-studies',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Kovil AI Case Studies' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Engineering Case Studies — Real Work, Real Results | Kovil AI',
    description: 'Real AI engineering outcomes across FinTech, HealthTech, Logistics, SaaS and more. See what Kovil AI has shipped.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

export default function Page() {
  return <div className="pt-20"><CaseStudiesPage /></div>
}
