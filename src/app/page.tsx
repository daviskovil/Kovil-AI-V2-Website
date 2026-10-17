import type { Metadata } from 'next'
import HomePage from '@/src/pages/HomePage'

export const metadata: Metadata = {
  title: 'Kovil AI — Remote Enterprise Platform Experts',
  description: 'Remote enterprise platform experts for Salesforce, HubSpot, NetSuite, and 30+ more. Vetted, actively managed, with AI built inside your platforms.',
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
    title: 'Kovil AI — Remote Enterprise Platform Experts',
    description: 'Remote enterprise platform experts who run your platforms and build AI inside them. Salesforce, HubSpot, NetSuite, and 30+ more.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kovil AI — Remote Enterprise Platform Experts',
    description: 'Remote enterprise platform experts who run your platforms and build AI inside them. Salesforce, HubSpot, NetSuite, and 30+ more.',
  },
}

export default function Page() {
  return <HomePage />
}
