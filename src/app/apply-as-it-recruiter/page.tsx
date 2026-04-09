import type { Metadata } from 'next'
import ApplyRecruiterPage from '@/src/pages/ApplyRecruiterPage'

export const metadata: Metadata = {
  title: 'Apply as an IT Recruiter (India) — Kovil AI',
  description: 'Join Kovil AI as an IT Recruiter based in India. Help us build elite AI engineering teams.',
  alternates: { canonical: 'https://kovil.ai/apply-as-it-recruiter' },
  robots: { index: false, follow: false },
}

export default function Page() {
  return <ApplyRecruiterPage />
}
