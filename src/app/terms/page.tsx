import type { Metadata } from 'next'
import TermsPage from '@/src/pages/TermsPage'

export const metadata: Metadata = {
  title: 'Terms of Service — Kovil AI',
  description: 'Kovil AI terms of service.',
  alternates: { canonical: 'https://kovil.ai/terms' },
  robots: { index: false },
}

export default function Page() {
  return <TermsPage />
}
