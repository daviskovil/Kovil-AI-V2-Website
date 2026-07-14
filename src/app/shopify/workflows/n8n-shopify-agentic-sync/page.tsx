import type { Metadata } from 'next'
import N8nShopifySyncPage from '@/src/pages/shopify/workflows/N8nShopifySyncPage'

export const metadata: Metadata = {
  title: 'n8n Shopify Agentic Sync Setup & Integration',
  description: 'Self-hosted n8n workflows connecting Shopify webhooks with OpenAI/Claude reasoning agents, CrewAI blocks, and Supabase tables — at zero per-execution cost. Live in 2 weeks.',
  alternates: { canonical: 'https://kovil.ai/shopify/workflows/n8n-shopify-agentic-sync' },
  keywords: [
    'n8n shopify automation',
    'n8n agentic workflow shopify',
    'connect shopify open-source ai',
    'n8n supabase shopify integration',
    'ecommerce webhook sync n8n',
    'n8n vs zapier shopify',
    'self-hosted shopify automation',
  ],
  openGraph: {
    type: 'website',
    title: 'n8n Shopify Agentic Sync Setup & Integration | Kovil AI',
    description: 'Self-hosted n8n workflows connecting Shopify webhooks with AI reasoning agents and Supabase tables.',
    url: 'https://kovil.ai/shopify/workflows/n8n-shopify-agentic-sync',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'n8n Shopify Agentic Sync Setup & Integration | Kovil AI',
    description: 'Self-hosted n8n workflows connecting Shopify webhooks with AI reasoning agents and Supabase tables.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'n8n Shopify Agentic Sync',
  description: 'Self-hosted n8n workflow engineering connecting Shopify webhooks with OpenAI/Claude reasoning agents, CrewAI execution blocks, and Supabase tables at zero per-execution cost.',
  provider: {
    '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp', telephone: '+16465359141',
    sameAs: ['https://www.linkedin.com/company/kovil-ai/', 'https://clutch.co/profile/kovil-ai', 'https://www.crunchbase.com/organization/kovil-ai'],
    address: [{ '@type': 'PostalAddress', streetAddress: '734 Franklin Ave', addressLocality: 'Garden City', addressRegion: 'NY', postalCode: '11530', addressCountry: 'US' }],
  },
  serviceType: 'Workflow Automation Engineering',
  category: 'Shopify Integration Workflows',
  areaServed: [
    { '@type': 'Country', name: 'United States' }, { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' }, { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/shopify/workflows/n8n-shopify-agentic-sync',
  isPartOf: { '@type': 'Service', name: 'Shopify AI Agent Integration', url: 'https://kovil.ai/shopify' },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. 2-week sprint to first production flow.' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Why use n8n over Zapier or Make?', acceptedAnswer: { '@type': 'Answer', text: 'n8n offers an open-source, self-hosted option that eliminates the recurring costs of high-volume executions. It also lets developers design complex JavaScript code block nodes, making it well suited for custom AI integrations.' } },
    { '@type': 'Question', name: 'Can we sync n8n with LangGraph or CrewAI?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. n8n serves as a router that catches webhook inputs, feeds them to LangGraph or CrewAI endpoints, and passes the output back to Shopify or your database of record.' } },
    { '@type': 'Question', name: 'Is self-hosting n8n difficult to maintain?', acceptedAnswer: { '@type': 'Answer', text: 'We deploy n8n in Docker containers with automated health checks and backups, so ongoing maintenance is minimal.' } },
    { '@type': 'Question', name: 'What happens if a downstream API call fails?', acceptedAnswer: { '@type': 'Answer', text: 'n8n\'s retry logic captures timeouts and failures, retrying with exponential backoff. If retries are exhausted, the workflow logs the failure and can trigger a Slack alert.' } },
    { '@type': 'Question', name: 'How is workflow logic versioned and reviewed?', acceptedAnswer: { '@type': 'Answer', text: 'Every workflow is exportable as JSON and stored in Git, so changes go through the same pull-request review process as application code.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Shopify', item: 'https://kovil.ai/shopify' },
    { '@type': 'ListItem', position: 3, name: 'n8n Shopify Agentic Sync', item: 'https://kovil.ai/shopify/workflows/n8n-shopify-agentic-sync' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  name: 'n8n Shopify Agentic Sync Setup & Integration | Kovil AI',
  description: 'Self-hosted n8n workflows connecting Shopify webhooks with AI reasoning agents and Supabase tables.',
  url: 'https://kovil.ai/shopify/workflows/n8n-shopify-agentic-sync',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: breadcrumbSchema.itemListElement },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '#pipeline h2', '#pipeline h3'] },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <N8nShopifySyncPage />
    </>
  )
}
