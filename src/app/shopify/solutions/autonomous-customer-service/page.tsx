import type { Metadata } from 'next'
import AutonomousCustomerServicePage from '@/src/pages/shopify/solutions/AutonomousCustomerServicePage'

export const metadata: Metadata = {
  title: 'Autonomous Customer Service AI Agents for Shopify',
  description: 'Support agents with read/write API access to order tracking, address correction, and return authorization — resolving 70%+ of tickets while risky cases escalate to a human. Live in 2 weeks.',
  alternates: { canonical: 'https://kovil.ai/shopify/solutions/autonomous-customer-service' },
  keywords: [
    'shopify ai customer service',
    'autonomous ecommerce support',
    'gorgias ai agent integration',
    'zendesk shopify agent',
    'automated order tracking agent',
    'ai support ticket triage',
    'shopify returns automation',
  ],
  openGraph: {
    type: 'website',
    title: 'Autonomous Customer Service AI Agents for Shopify | Kovil AI',
    description: 'Support agents with read/write API access to order tracking, address correction, and return authorization.',
    url: 'https://kovil.ai/shopify/solutions/autonomous-customer-service',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autonomous Customer Service AI Agents for Shopify | Kovil AI',
    description: 'Support agents with read/write API access to order tracking, address correction, and return authorization.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Autonomous Customer Service AI Agents',
  description: 'Custom AI support agents for Shopify — order status and tracking, returns and refund authorization, address correction, omnichannel ticket triage, and sentiment-based escalation.',
  provider: {
    '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp', telephone: '+16465359141',
    sameAs: ['https://www.linkedin.com/company/kovil-ai/', 'https://clutch.co/profile/kovil-ai', 'https://www.crunchbase.com/organization/kovil-ai'],
    address: [{ '@type': 'PostalAddress', streetAddress: '734 Franklin Ave', addressLocality: 'Garden City', addressRegion: 'NY', postalCode: '11530', addressCountry: 'US' }],
  },
  serviceType: 'AI Agent Development for E-Commerce',
  category: 'Customer Service Automation',
  areaServed: [
    { '@type': 'Country', name: 'United States' }, { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' }, { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/shopify/solutions/autonomous-customer-service',
  isPartOf: { '@type': 'Service', name: 'Shopify AI Agent Integration', url: 'https://kovil.ai/shopify' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog', name: 'Customer Service Agent Use Cases',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Order Status & Tracking Agent' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Returns & Refund Authorization' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Address Correction & Shipping Updates' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Omnichannel Ticket Triage' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sentiment-Based Escalation Agent' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. 2-week sprint to first live agent.' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How does the agent interface with Gorgias or Zendesk?', acceptedAnswer: { '@type': 'Answer', text: 'We write secure API middleware that listens to webhook triggers from helpdesks. The agent processes ticket text, hits Shopify APIs to verify order state, and drafts a reply or executes order updates automatically.' } },
    { '@type': 'Question', name: 'Can the support agent edit customer addresses?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, under strict constraints. If the shipping carrier has not yet processed the label, the agent updates the address and logs the modification for audit purposes.' } },
    { '@type': 'Question', name: 'What stops the agent from issuing an unauthorized refund?', acceptedAnswer: { '@type': 'Answer', text: 'Refund actions are scoped to a configurable dollar threshold and eligibility rules. Anything outside those bounds is routed to a human manager in Slack.' } },
    { '@type': 'Question', name: 'What percentage of tickets can actually be resolved autonomously?', acceptedAnswer: { '@type': 'Answer', text: 'Production deployments typically see 70%+ of standard tickets resolved without human involvement, with the remainder escalated by design.' } },
    { '@type': 'Question', name: 'Is customer PII protected during automated processing?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Customer data flows through token-shielded middleware, and sensitive fields are masked before reaching any model.' } },
    { '@type': 'Question', name: 'How long does it take to launch a first agent?', acceptedAnswer: { '@type': 'Answer', text: 'A first deployment typically takes about 2 weeks from kickoff, including helpdesk integration and policy rule configuration.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Shopify', item: 'https://kovil.ai/shopify' },
    { '@type': 'ListItem', position: 3, name: 'Autonomous Customer Service', item: 'https://kovil.ai/shopify/solutions/autonomous-customer-service' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  name: 'Autonomous Customer Service AI Agents for Shopify | Kovil AI',
  description: 'Support agents with read/write API access to order tracking, address correction, and return authorization.',
  url: 'https://kovil.ai/shopify/solutions/autonomous-customer-service',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: breadcrumbSchema.itemListElement },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '#use-cases h2', '#use-cases h3'] },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <AutonomousCustomerServicePage />
    </>
  )
}
