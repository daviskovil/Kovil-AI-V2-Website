import type { Metadata } from 'next'
import ApplyPage from '@/src/pages/ApplyPage'

export const metadata: Metadata = {
  title: 'Apply as an AI Engineer — Join Kovil AI',
  description: 'Apply to join the Kovil AI engineer network. We accept only the top 5% of AI engineers.',
  alternates: { canonical: 'https://kovil.ai/apply' },
}

export default function Page() {
  return <ApplyPage />
}
