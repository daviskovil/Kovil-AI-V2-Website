import type { Metadata } from 'next'
import AppRescuePage from '@/src/pages/engage/AppRescuePage'

export const metadata: Metadata = {
  title: 'AI App Rescue — Fix Hallucinating RAG, Failing AI Apps & Vibe Builds | Kovil AI',
  description: 'Failing AI app, hallucinating RAG pipeline, or broken vibe build? Kovil AI\'s SWAT team audits, fixes, and stabilises it — free diagnostic audit, 99.9% uptime SLA, P1 bugs resolved in 24 hours.',
  alternates: { canonical: 'https://kovil.ai/engage/app-rescue' },
}

export default function Page() {
  return <div className="pt-20"><AppRescuePage /></div>
}
