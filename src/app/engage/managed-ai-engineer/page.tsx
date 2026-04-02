import type { Metadata } from 'next'
import ManagedAIEngineerPage from '@/src/pages/engage/ManagedAIEngineerPage'

export const metadata: Metadata = {
  title: 'Hire a Managed AI Engineer — Embedded, Vetted & Sprint-Delivered',
  description: 'Embed a vetted Tier-1 AI engineer into your team in under 48 hours. Sprint-based delivery, Engagement Manager oversight, 2-week risk-free trial. 100% IP yours.',
  alternates: { canonical: 'https://kovil.ai/engage/managed-ai-engineer' },
}

export default function Page() {
  return <div className="pt-20"><ManagedAIEngineerPage /></div>
}
