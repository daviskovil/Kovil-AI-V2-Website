import type { Metadata } from 'next'
import KnowledgeBaseAgentPage from '@/src/pages/agentforce/service-cloud/KnowledgeBaseAgentPage'

export const metadata: Metadata = {
  title: 'Agentforce Knowledge Base Agent — AI-Powered Article Surfacing & Gap Detection | Kovil AI',
  description: 'Agentforce knowledge agent that surfaces relevant articles during case resolution, detects documentation gaps from unresolved cases, and drafts new articles from resolved case patterns.',
  alternates: { canonical: 'https://kovil.ai/agentforce/service-cloud/knowledge-base-agent' },
  keywords: [
    'Agentforce knowledge base agent',
    'Salesforce AI knowledge management',
    'Agentforce article surfacing',
    'Service Cloud knowledge AI agent',
    'Salesforce knowledge gap detection AI',
    'Agentforce knowledge automation',
    'Salesforce Einstein Search knowledge',
    'Agentforce self-improving documentation',
    'Salesforce KB gap analysis AI',
    'Agentforce Prompt Builder articles',
    'Salesforce knowledge article drafting AI',
    'Atlas reasoning engine knowledge',
    'Salesforce Service Cloud AI agent',
    'Agentforce semantic knowledge retrieval',
    'Salesforce AI support documentation',
    'Agentforce knowledge base improvement',
    'Service Cloud knowledge management AI',
    'Salesforce Agentforce implementation',
    'Kovil AI Agentforce',
    'Agentforce partner',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce Knowledge Base Agent — AI-Powered Article Surfacing & Gap Detection | Kovil AI',
    description: 'Agentforce knowledge agent that surfaces relevant articles during case resolution, detects documentation gaps from unresolved cases, and drafts new articles from resolved case patterns.',
    url: 'https://kovil.ai/agentforce/service-cloud/knowledge-base-agent',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Kovil AI Agentforce' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce Knowledge Base Agent — AI-Powered Article Surfacing & Gap Detection | Kovil AI',
    description: 'Agentforce knowledge agent that surfaces relevant articles during case resolution, detects documentation gaps from unresolved cases, and drafts new articles from resolved case patterns.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agentforce Knowledge Base Agent — AI-Powered Article Surfacing & Gap Detection',
  description: 'Agentforce knowledge agent that surfaces relevant articles during case resolution, detects documentation gaps from unresolved cases, and drafts new articles from resolved case patterns.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
  },
  serviceType: 'Salesforce Agentforce Implementation',
  url: 'https://kovil.ai/agentforce/service-cloud/knowledge-base-agent',
  areaServed: ['New York', 'United States', 'Worldwide'],
  offers: { '@type': 'Offer', description: 'Fixed-price 3-week sprint with 2-week risk-free pilot' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Will the agent publish articles automatically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Never. All AI-generated drafts require human review and approval before publication. The agent creates drafts flagged as 'Draft — Review Required' and queues them for the knowledge manager. The human reviewer reads the draft, checks it against the source cases, and approves or edits before publishing. The AI removes the blank-page problem and reduces writing time from hours to minutes — but a human always makes the final call.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does it know when an existing article is outdated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The agent compares two signals: resolution notes added by agents (if agents are consistently adding the same correction that is not in the article, the article is likely outdated) and resolution time for cases that matched the article (if resolution time is significantly longer than average despite the article being retrieved, the article may not be solving the problem). Both signals feed into the weekly pattern analysis and surface the article for review.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can it handle multiple languages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Semantic search and gap detection work across all languages configured in your Salesforce Knowledge instance. Article draft generation via Prompt Builder supports English natively and can generate drafts in other languages if configured. Multi-language KB management — maintaining parity across language versions — can be added as a separate configuration during the sprint.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the typical KB coverage improvement after deployment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Within 90 days, clients typically see a 30–50% improvement in KB article hit rate (percentage of cases where a relevant article is found), driven by: new articles filling identified gaps, updated articles that were previously unhelpful, and improved retrieval ranking. The hit rate improvement directly correlates with autonomous resolution rate — more relevant KB articles means more cases the resolution agent can handle without human intervention.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Agentforce', item: 'https://kovil.ai/agentforce' },
    { '@type': 'ListItem', position: 3, name: 'Service Cloud', item: 'https://kovil.ai/agentforce/service-cloud' },
    { '@type': 'ListItem', position: 4, name: 'Knowledge Base Agent', item: 'https://kovil.ai/agentforce/service-cloud/knowledge-base-agent' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <KnowledgeBaseAgentPage />
    </>
  )
}
