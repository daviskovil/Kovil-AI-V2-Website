import type { Metadata } from 'next'
import AiProjectEstimatorPage from '@/src/pages/AiProjectEstimatorPage'

export const metadata: Metadata = {
  title: 'AI Project Cost Estimator — Kovil AI',
  description: 'Get an instant AI project cost estimate. Answer 5 quick questions about your project and receive a tailored cost range, timeline, tech stack, and engagement recommendation.',
  alternates: { canonical: 'https://kovil.ai/ai-project-estimator' },
  openGraph: {
    type: 'website',
    title: 'AI Project Cost Estimator — Kovil AI',
    description: 'Get an instant AI project cost estimate. Answer 5 quick questions and receive a tailored cost range, timeline, and engagement recommendation.',
    url: 'https://kovil.ai/ai-project-estimator',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Kovil AI — AI Project Cost Estimator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Project Cost Estimator — Kovil AI',
    description: 'Get an instant AI project cost estimate. Answer 5 quick questions and receive a tailored cost range, timeline, and engagement recommendation.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

export default function Page() {
  return <div className="pt-20"><AiProjectEstimatorPage /></div>
}
