import type { Metadata } from 'next'
import HowItWorksPage from '@/src/pages/HowItWorksPage'

export const metadata: Metadata = {
  title: 'How It Works — Managed AI Engineering Process',
  description: 'How Kovil AI delivers managed AI engineering. Our three-step process: match, build, deliver — milestone-gated with zero delivery risk.',
  alternates: { canonical: 'https://kovil.ai/how-it-works' },
}

export default function Page() {
  return <div className="pt-20"><HowItWorksPage /></div>
}
