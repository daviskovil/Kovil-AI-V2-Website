import type { Metadata } from 'next'
import BlogPage from '@/src/pages/BlogPage'

export const metadata: Metadata = {
  title: 'AI Engineering Blog — Insights, Guides & Trends',
  description: 'Expert guides on AI engineering, LLM deployment, RAG pipelines, and AI automation. Written by Kovil AI engineers.',
  alternates: { canonical: 'https://kovil.ai/blog' },
}

export default function Page() {
  return <div className="pt-20"><BlogPage /></div>
}
