import type { Metadata } from 'next'
import ManagedAIEngineerPage from '@/src/pages/engage/ManagedAIEngineerPage'

export const metadata: Metadata = {
  title: 'Hire a Managed AI Engineer for Your Startup | 48-Hour Matching | Kovil AI',
  description: 'Hire a managed AI engineer embedded into your team in 48 hours. Vetted Tier-1 builders, sprint delivery, Engagement Manager oversight, 2-week risk-free trial. No lock-in. Built for startups and growing engineering teams.',
  alternates: { canonical: 'https://kovil.ai/engage/managed-ai-engineer' },
  keywords: ['hire AI engineer', 'managed AI engineer', 'hire AI engineer startup', 'AI engineer team augmentation', 'embedded AI engineer'],
}

export default function Page() {
  return <div className="pt-20"><ManagedAIEngineerPage /></div>
}
