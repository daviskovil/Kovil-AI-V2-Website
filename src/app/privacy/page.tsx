import type { Metadata } from 'next'
import PrivacyPage from '@/src/pages/PrivacyPage'

export const metadata: Metadata = {
  title: 'Privacy Policy — Kovil AI',
  description: 'Kovil AI privacy policy.',
  alternates: { canonical: 'https://kovil.ai/privacy' },
  robots: { index: false },
}

export default function Page() {
  return <PrivacyPage />
}
