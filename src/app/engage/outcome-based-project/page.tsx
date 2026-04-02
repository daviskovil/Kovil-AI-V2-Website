import type { Metadata } from 'next'
import OutcomeProjectPage from '@/src/pages/engage/OutcomeProjectPage'

export const metadata: Metadata = {
  title: 'Fixed-Price AI Project — Scoped, Built & Shipped',
  description: 'Get a fixed-price AI project proposal in 48 hours. Milestone-gated builds, dedicated squad, full codebase handoff, and 100% IP assigned to you.',
  alternates: { canonical: 'https://kovil.ai/engage/outcome-based-project' },
}

export default function Page() {
  return <div className="pt-20"><OutcomeProjectPage /></div>
}
