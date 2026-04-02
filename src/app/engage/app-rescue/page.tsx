import type { Metadata } from 'next'
import AppRescuePage from '@/src/pages/engage/AppRescuePage'

export const metadata: Metadata = {
  title: 'AI App Rescue & Reliability — Fix Your Failing AI Application',
  description: 'Hallucinating RAG, crashing AI app, or a half-finished vibe build? Our SWAT team audits, fixes, and stabilises it with a 99.9% uptime SLA.',
  alternates: { canonical: 'https://kovil.ai/engage/app-rescue' },
}

export default function Page() {
  return <div className="pt-20"><AppRescuePage /></div>
}
