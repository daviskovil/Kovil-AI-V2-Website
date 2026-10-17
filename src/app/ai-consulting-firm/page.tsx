import type { Metadata } from 'next'
import AIConsultingPage from '@/src/pages/AIConsultingPage'

export const metadata: Metadata = {
  title: 'Enterprise AI Consulting Firm',
  description: 'Enterprise AI consulting from Kovil AI. We design, deploy, and monitor custom AI systems, RAG pipelines, and LLM orchestration at a fixed price.',
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

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Enterprise AI Consulting',
  serviceType: 'AI consulting',
  description: 'Enterprise AI consulting from Kovil AI. We design, deploy, and monitor custom AI systems, RAG pipelines, and LLM orchestration at a fixed price.',
  url: 'https://kovil.ai/ai-consulting-firm',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  areaServed: [{ '@type': 'Country', name: 'United States' }],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Enterprise AI Consulting', item: 'https://kovil.ai/ai-consulting-firm' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AIConsultingPage />
    </>
  )
}
