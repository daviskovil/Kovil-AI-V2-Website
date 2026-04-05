import type { Metadata } from 'next'
import OutcomeProjectPage from '@/src/pages/engage/OutcomeProjectPage'

export const metadata: Metadata = {
  title: 'Fixed-Price AI Project Development — Scoped, Built & Shipped | Kovil AI',
  description: 'Get a fixed-price AI project proposal in 48 hours. Milestone-gated builds, dedicated squad, full IP ownership, and codebase handoff. No surprises, no retainers — just delivered AI.',
  alternates: { canonical: 'https://kovil.ai/engage/outcome-based-project' },
}

export default function Page() {
  return <div className="pt-20"><OutcomeProjectPage /></div>
}
