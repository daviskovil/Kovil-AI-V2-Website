import type { Metadata } from 'next'
import SubscriptionRetentionPage from '@/src/pages/shopify/solutions/SubscriptionRetentionPage'

export const metadata: Metadata = {
  title: 'Subscription D2C Retention & Churn Prevention AI Agents',
  description: 'Custom retention agents that negotiate renewals, recover failed payments, handle box swaps by text, and flag at-risk cohorts before cancellation. Live in 2 weeks, risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/shopify/solutions/subscription-d2c-retention-agents' },
  keywords: [
    'subscription retention agent',
    'd2c subscription churn ai',
    'shopify subscription negotiator',
    'box swap automation',
    'recharge retention agent',
    'failed payment recovery ai',
    'dunning management ai agent',
  ],
  openGraph: {
    type: 'website',
    title: 'Subscription D2C Retention & Churn Prevention AI Agents | Kovil AI',
    description: 'Custom retention agents that negotiate renewals, recover failed payments, and handle box swaps by text.',
    url: 'https://kovil.ai/shopify/solutions/subscription-d2c-retention-agents',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Subscription D2C Retention & Churn Prevention AI Agents | Kovil AI',
    description: 'Custom retention agents that negotiate renewals, recover failed payments, and handle box swaps by text.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Subscription D2C Retention AI Agents',
  description: 'Custom AI agents for subscription and D2C Shopify stores — box swaps and skips by text, churn risk cohort monitoring, renewal price negotiation, failed payment recovery, and unified subscription analytics.',
  provider: {
    '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp', telephone: '+16465359141',
    sameAs: ['https://www.linkedin.com/company/kovil-ai/', 'https://clutch.co/profile/kovil-ai', 'https://www.crunchbase.com/organization/kovil-ai'],
    address: [{ '@type': 'PostalAddress', streetAddress: '734 Franklin Ave', addressLocality: 'Garden City', addressRegion: 'NY', postalCode: '11530', addressCountry: 'US' }],
  },
  serviceType: 'AI Agent Development for E-Commerce',
  category: 'Subscription & D2C Retention',
  areaServed: [
    { '@type': 'Country', name: 'United States' }, { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' }, { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/shopify/solutions/subscription-d2c-retention-agents',
  isPartOf: { '@type': 'Service', name: 'Shopify AI Agent Integration', url: 'https://kovil.ai/shopify' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog', name: 'Subscription Retention Agent Use Cases',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Box Swaps & Skips' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Churn Risk Cohort Watchers' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Renewal Price Negotiators' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Failed Payment Recovery Agent' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Unified Subscription Analytics' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. 2-week sprint to first live agent.' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Which subscription tools can agents integrate with?', acceptedAnswer: { '@type': 'Answer', text: 'We build custom connectors linking Shopify Admin APIs with subscription processors like Recharge, Loop, Smartrr, and Bold.' } },
    { '@type': 'Question', name: 'How does the agent negotiate cancellations?', acceptedAnswer: { '@type': 'Answer', text: 'When a customer signals intent to cancel, the model checks their lifetime value (LTV) and applies custom discount bounds to offer cheaper alternatives, box swaps, or pauses.' } },
    { '@type': 'Question', name: 'Can the agent recover failed payments automatically?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. It detects declined charges, applies smart-timed retries, and reaches out conversationally to help the customer update their payment method.' } },
    { '@type': 'Question', name: 'How is churn risk actually scored?', acceptedAnswer: { '@type': 'Answer', text: 'We build a cohort risk model incorporating payment health, engagement signals, and tenure. Subscribers crossing a risk threshold trigger preemptive outreach.' } },
    { '@type': 'Question', name: 'Can subscribers manage their box without logging in?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Subscribers can text or message the agent directly to swap products, change frequency, or skip a shipment, without navigating to an account portal.' } },
    { '@type': 'Question', name: 'How long does it take to launch?', acceptedAnswer: { '@type': 'Answer', text: 'A first-workflow deployment typically takes about 2 weeks from kickoff, including integration with your subscription platform.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Shopify', item: 'https://kovil.ai/shopify' },
    { '@type': 'ListItem', position: 3, name: 'Subscription D2C Retention Agents', item: 'https://kovil.ai/shopify/solutions/subscription-d2c-retention-agents' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  name: 'Subscription D2C Retention & Churn Prevention AI Agents | Kovil AI',
  description: 'Custom retention agents that negotiate renewals, recover failed payments, and handle box swaps by text.',
  url: 'https://kovil.ai/shopify/solutions/subscription-d2c-retention-agents',
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
      <SubscriptionRetentionPage />
    </>
  )
}
