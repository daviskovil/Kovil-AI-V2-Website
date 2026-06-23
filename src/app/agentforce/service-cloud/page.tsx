import type { Metadata } from 'next'
import ServiceCloudHubPage from '@/src/pages/agentforce/service-cloud/ServiceCloudHubPage'

export const metadata: Metadata = {
  title: 'Agentforce for Customer Service — Service Cloud Agents | Kovil AI',
  description: 'Production Agentforce Service Cloud deployments — autonomous case resolution (68%+ deflection), intelligent escalation with full context, and self-updating knowledge base agents. Fixed-price 2–3 week sprints.',
  alternates: { canonical: 'https://kovil.ai/agentforce/service-cloud' },
  keywords: [
    'agentforce service cloud',
    'agentforce customer service',
    'agentforce case resolution',
    'agentforce autonomous resolution',
    'salesforce agentforce service cloud',
    'agentforce case deflection',
    'agentforce intelligent escalation',
    'agentforce knowledge base',
    'service cloud agent deployment',
    'agentforce service agent',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce for Customer Service — Service Cloud | Kovil AI',
    description: 'Autonomous case resolution, intelligent escalation, and knowledge base agents — deployed in Service Cloud with 65%+ deflection rates.',
    url: 'https://kovil.ai/agentforce/service-cloud',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Agentforce Service Cloud — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce Service Cloud | Kovil AI',
    description: 'Autonomous case resolution, intelligent escalation, and knowledge base agents — deployed in Service Cloud.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Agentforce for Customer Service — Service Cloud',
  description: 'Production Agentforce Service Cloud deployments — autonomous case resolution, intelligent escalation, and knowledge base agents.',
  url: 'https://kovil.ai/agentforce/service-cloud',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  hasPart: [
    { '@type': 'WebPage', name: 'Autonomous Case Resolution', url: 'https://kovil.ai/agentforce/service-cloud/autonomous-case-resolution' },
    { '@type': 'WebPage', name: 'Intelligent Escalation', url: 'https://kovil.ai/agentforce/service-cloud/intelligent-escalation' },
    { '@type': 'WebPage', name: 'Knowledge Base Agent', url: 'https://kovil.ai/agentforce/service-cloud/knowledge-base-agent' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Agentforce', item: 'https://kovil.ai/agentforce' },
    { '@type': 'ListItem', position: 3, name: 'Service Cloud', item: 'https://kovil.ai/agentforce/service-cloud' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServiceCloudHubPage />
    </>
  )
}
