import type { Metadata } from 'next'
import HomePage from '@/src/pages/HomePage'

export const metadata: Metadata = {
  title: 'Kovil AI — We Build AI Agents for Enterprises',
  description: 'We build and deploy AI agents for enterprises — fixed price, fixed timeline, zero delivery risk. Managed AI engineers, outcome-based projects, and AI agent rescue. Ship your first agent in weeks.',
  alternates: { canonical: 'https://kovil.ai/' },
  keywords: [
    'AI agent development company',
    'hire AI engineers',
    'managed AI engineering',
    'AI agent development',
    'enterprise AI agents',
    'AI development outsourcing',
    'AI project rescue',
    'AI engineer staffing agency',
    'fixed price AI project',
    'AI implementation partner',
    'LLM chatbot development',
    'RAG pipeline development company',
    'AI workflow automation company',
    'hire AI developers',
    'vetted AI engineers',
    'AI staff augmentation',
    'outcome based AI development',
    'AI app rescue services',
    'managed AI engineer',
    'deploy AI agents for business',
  ],
  openGraph: {
    url: 'https://kovil.ai/',
    type: 'website',
    title: 'Kovil AI — We Build AI Agents for Enterprises',
    description: 'We build and deploy AI agents for enterprises — fixed price, fixed timeline, zero delivery risk. Managed AI engineers, outcome-based projects, and AI agent rescue. Ship your first agent in weeks.',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Kovil AI — We Build AI Agents for Enterprises' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kovil AI — We Build AI Agents for Enterprises',
    description: 'We build and deploy AI agents for enterprises — fixed price, fixed timeline, zero delivery risk. Ship your first agent in weeks.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

export default function Page() {
  return <HomePage />
}
