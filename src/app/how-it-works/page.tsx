import type { Metadata } from 'next'
import HowItWorksPage from '@/src/pages/HowItWorksPage'

export const metadata: Metadata = {
  title: 'How It Works — Managed AI Engineering Process | Kovil AI',
  description: 'How Kovil AI delivers managed AI engineering. Our three-step process: match, build, deliver — milestone-gated with zero delivery risk.',
  alternates: { canonical: 'https://kovil.ai/how-it-works' },
  openGraph: {
    type: 'website',
    title: 'How It Works — Managed AI Engineering Process | Kovil AI',
    description: 'Match in 48 hours, sprint delivery, milestone-gated with zero delivery risk. Here\'s exactly how Kovil AI works.',
    url: 'https://kovil.ai/how-it-works',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'How Kovil AI Works' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How It Works — Managed AI Engineering Process | Kovil AI',
    description: 'Match in 48 hours, sprint delivery, milestone-gated with zero delivery risk. Here\'s exactly how Kovil AI works.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

export default function Page() {
  return <div className="pt-20"><HowItWorksPage /></div>
}
