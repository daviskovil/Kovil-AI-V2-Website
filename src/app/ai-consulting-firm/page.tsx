import type { Metadata } from 'next'
import AIConsultingPage from '@/src/pages/AIConsultingPage'

export const metadata: Metadata = {
  title: 'Top AI Consulting Company & Enterprise AI Consulting Firm | Kovil AI',
  description: 'Kovil AI is a leading enterprise artificial intelligence consulting firm. We design, deploy, and monitor custom AI systems, RAG pipelines, and LLM orchestration at a fixed price with zero delivery risk.',
  keywords: [
    'AI consulting company',
    'AI consulting firm',
    'artificial intelligence consulting companies',
    'enterprise AI consulting',
    'AI strategy agency'
  ],
  alternates: { canonical: 'https://kovil.ai/ai-consulting-firm' },
  openGraph: {
    url: 'https://kovil.ai/ai-consulting-firm',
    type: 'website',
    title: 'Top AI Consulting Company & Enterprise AI Consulting Firm | Kovil AI',
    description: 'Kovil AI is a leading enterprise artificial intelligence consulting firm. We design, deploy, and monitor custom AI systems, RAG pipelines, and LLM orchestration at a fixed price with zero delivery risk.',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Kovil AI — Enterprise AI Consulting Company & Firm' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top AI Consulting Company & Enterprise AI Consulting Firm | Kovil AI',
    description: 'Kovil AI is a leading enterprise artificial intelligence consulting firm. We design, deploy, and monitor custom AI systems, RAG pipelines, and LLM orchestration at a fixed price.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

export default function Page() {
  return <AIConsultingPage />
}
