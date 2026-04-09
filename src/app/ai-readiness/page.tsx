import type { Metadata } from 'next'
import AIReadinessPage from '@/src/pages/AIReadinessPage'

export const metadata: Metadata = {
  title: 'AI Readiness Assessment — Is Your Business Ready for AI? | Kovil AI',
  description: 'Take our free 3-minute AI readiness assessment. Find out where your business stands on AI automation readiness and get a personalised action plan.',
  alternates: { canonical: 'https://kovil.ai/ai-readiness' },
  openGraph: {
    url: 'https://kovil.ai/ai-readiness',
    type: 'website',
    title: 'AI Readiness Assessment — Is Your Business Ready for AI?',
    description: 'Take our free 3-minute AI readiness assessment and get a personalised action plan from Kovil AI.',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Kovil AI — AI Readiness Assessment' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Readiness Assessment — Is Your Business Ready for AI?',
    description: 'Free 3-minute assessment. Find out where your business stands on AI automation readiness.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

export default function Page() {
  return <div className="pt-20"><AIReadinessPage /></div>
}
