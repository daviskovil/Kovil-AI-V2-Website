import type { Metadata } from 'next'
import HomePage from '@/src/pages/HomePage'

export const metadata: Metadata = {
  title: 'Kovil AI — Managed AI Engineering, Zero Delivery Risk',
  description: 'Kovil AI embeds vetted AI engineers into your team, builds fixed-price AI projects, and rescues failing AI applications. Milestone-gated delivery. Zero risk.',
  alternates: { canonical: 'https://kovil.ai/' },
  openGraph: { url: 'https://kovil.ai/', type: 'website' },
}

export default function Page() {
  return <HomePage />
}
