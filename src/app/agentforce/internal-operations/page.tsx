import type { Metadata } from 'next'
import InternalOperationsHubPage from '@/src/pages/agentforce/internal-operations/InternalOperationsHubPage'

export const metadata: Metadata = {
  title: 'Agentforce for Internal Operations — HR, Finance & IT Agents | Kovil AI',
  description: 'Production Agentforce internal operations agents — HR onboarding automation, finance approval routing, and IT helpdesk resolution. Deployed inside Salesforce with Einstein Trust Layer. Fixed-price 2–3 week sprints.',
  alternates: { canonical: 'https://kovil.ai/agentforce/internal-operations' },
  keywords: [
    'agentforce internal operations',
    'agentforce hr onboarding',
    'agentforce finance approval',
    'agentforce it helpdesk',
    'salesforce agentforce internal',
    'agentforce employee onboarding',
    'agentforce invoice approval',
    'agentforce it support',
    'internal operations agent deployment',
    'agentforce internal agent',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce for Internal Operations | Kovil AI',
    description: 'HR onboarding agents, finance approval automation, and IT helpdesk resolution — deployed in Salesforce.',
    url: 'https://kovil.ai/agentforce/internal-operations',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Agentforce Internal Operations — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce Internal Operations | Kovil AI',
    description: 'HR onboarding, finance approval, and IT helpdesk agents — deployed inside Salesforce.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Agentforce for Internal Operations',
  description: 'Production Agentforce internal operations deployments — HR onboarding, finance approval, and IT helpdesk agents.',
  url: 'https://kovil.ai/agentforce/internal-operations',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  hasPart: [
    { '@type': 'WebPage', name: 'HR Onboarding Agent', url: 'https://kovil.ai/agentforce/internal-operations/hr-onboarding-agent' },
    { '@type': 'WebPage', name: 'Finance Approval Agent', url: 'https://kovil.ai/agentforce/internal-operations/finance-approval-agent' },
    { '@type': 'WebPage', name: 'IT Helpdesk Agent', url: 'https://kovil.ai/agentforce/internal-operations/it-helpdesk-agent' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Agentforce', item: 'https://kovil.ai/agentforce' },
    { '@type': 'ListItem', position: 3, name: 'Internal Operations', item: 'https://kovil.ai/agentforce/internal-operations' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <InternalOperationsHubPage />
    </>
  )
}
