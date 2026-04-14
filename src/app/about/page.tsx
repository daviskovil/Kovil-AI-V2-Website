import type { Metadata } from 'next'
import AboutPage from '@/src/pages/AboutPage'

export const metadata: Metadata = {
  title: 'About Kovil AI — Managed AI Engineering Company, New York',
  description: 'Kovil AI is a managed AI engineering company based in Garden City, New York. We embed vetted AI engineers into your team and own the delivery.',
  alternates: { canonical: 'https://kovil.ai/about' },
  openGraph: {
    type: 'website',
    title: 'About Kovil AI — Managed AI Engineering Company, New York',
    description: 'Kovil AI embeds vetted Tier-1 AI engineers into your team and owns the delivery. Based in Garden City, New York.',
    url: 'https://kovil.ai/about',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'About Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Kovil AI — Managed AI Engineering Company, New York',
    description: 'Kovil AI embeds vetted Tier-1 AI engineers into your team and owns the delivery. Based in Garden City, New York.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

export default function Page() {
  return <div className="pt-20"><AboutPage /></div>
}
