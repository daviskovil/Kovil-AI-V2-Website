import type { Metadata } from 'next'
import BlogPage from '@/src/pages/BlogPage'

export const metadata: Metadata = {
  title: 'AI Engineering Blog — Insights, Guides & Trends',
  description: 'Expert guides on AI engineering, LLM deployment, RAG pipelines, and AI automation. Written by Kovil AI engineers.',
  alternates: { canonical: 'https://kovil.ai/blog' },
  openGraph: {
    type: 'website',
    title: 'AI Engineering Blog — Insights, Guides & Trends | Kovil AI',
    description: 'Expert guides on AI engineering, LLM deployment, RAG pipelines, and AI automation. Written by Kovil AI engineers.',
    url: 'https://kovil.ai/blog',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Kovil AI Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Engineering Blog — Insights, Guides & Trends | Kovil AI',
    description: 'Expert guides on AI engineering, LLM deployment, RAG pipelines, and AI automation. Written by Kovil AI engineers.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

export default function Page() {
  return <div className="pt-20"><BlogPage /></div>
}
