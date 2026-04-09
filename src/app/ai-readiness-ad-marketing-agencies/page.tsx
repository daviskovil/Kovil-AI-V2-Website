import type { Metadata } from 'next'
import AIReadinessPage from '@/src/pages/AIReadinessPage'

export const metadata: Metadata = {
  title: 'AI Readiness Assessment for Ad & Marketing Agencies | Kovil AI',
  description: 'Take our free 3-minute AI readiness assessment built for ad and marketing agencies. Find out where you stand and get a personalised automation action plan.',
  alternates: { canonical: 'https://kovil.ai/ai-readiness-ad-marketing-agencies' },
  openGraph: {
    url: 'https://kovil.ai/ai-readiness-ad-marketing-agencies',
    type: 'website',
    title: 'AI Readiness Assessment for Ad & Marketing Agencies',
    description: 'Free 3-minute AI readiness assessment for NYC ad and marketing agencies. Get a personalised action plan from Kovil AI.',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Kovil AI — AI Readiness Assessment' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Readiness Assessment for Ad & Marketing Agencies',
    description: 'Free 3-minute assessment. Find out where your agency stands on AI automation readiness.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

export default function Page() {
  return <div className="pt-20"><AIReadinessPage /></div>
}
