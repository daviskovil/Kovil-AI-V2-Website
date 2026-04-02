import type { Metadata } from 'next'
import CaseStudiesPage from '@/src/pages/CaseStudiesPage'

export const metadata: Metadata = {
  title: 'AI Engineering Case Studies — Real Work, Real Results',
  description: 'How Kovil AI engineers delivered measurable outcomes across FinTech, HealthTech, Logistics, SaaS, and more.',
  alternates: { canonical: 'https://kovil.ai/case-studies' },
}

export default function Page() {
  return <div className="pt-20"><CaseStudiesPage /></div>
}
