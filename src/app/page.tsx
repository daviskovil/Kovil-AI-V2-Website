import type { Metadata } from 'next'
import HomePage from '@/src/pages/HomePage'

export const metadata: Metadata = {
  title: 'Kovil AI — Managed AI Engineering, Zero Delivery Risk',
  description: 'Kovil AI embeds vetted AI engineers into your team, builds fixed-price AI projects, and rescues failing AI applications. Milestone-gated delivery. Zero risk.',
  alternates: { canonical: 'https://kovil.ai/' },
  openGraph: {
    url: 'https://kovil.ai/',
    type: 'website',
    title: 'Kovil AI — Managed AI Engineering, Zero Delivery Risk',
    description: 'Kovil AI embeds vetted AI engineers into your team, builds fixed-price AI projects, and rescues failing AI applications. Milestone-gated delivery. Zero risk.',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Kovil AI — Ship AI Agents, Deployed by Elite AI Engineers' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kovil AI — Managed AI Engineering, Zero Delivery Risk',
    description: 'Vetted Tier-1 AI engineers. Fixed-price sprints. Zero delivery risk.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

export default function Page() {
  return <HomePage />
}
