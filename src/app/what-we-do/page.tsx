import type { Metadata } from 'next'
import WhatWeDoPage from '@/src/pages/WhatWeDoPage'

export const metadata: Metadata = {
  title: 'What We Do — AI Engineering, Operations & Talent | Kovil AI',
  description: 'Kovil AI builds, operates, and staffs AI systems. Managed AI engineers, outcome-based projects, app rescue, AI operations monitoring, and specialist AI talent — all milestone-gated with zero delivery risk.',
  alternates: { canonical: 'https://kovil.ai/what-we-do' },
  openGraph: {
    type: 'website',
    title: 'What We Do — AI Engineering, Operations & Talent | Kovil AI',
    description: 'Build AI systems, keep them healthy in production, and staff every engineering discipline you need — Salesforce, Azure, Google Cloud, and beyond.',
    url: 'https://kovil.ai/what-we-do',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'What Kovil AI Does' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What We Do — AI Engineering, Operations & Talent | Kovil AI',
    description: 'Build, operate & scale AI — milestone-gated, zero delivery risk.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

export default function Page() {
  return <div className="pt-20"><WhatWeDoPage /></div>
}
