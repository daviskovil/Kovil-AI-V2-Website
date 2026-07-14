import type { Metadata } from 'next'
import ShopifySidekickActionsPage from '@/src/pages/shopify/ShopifySidekickActionsPage'

export const metadata: Metadata = {
  title: 'Custom Shopify Sidekick Actions & Assistant Overrides',
  description: 'Extend the default Shopify Sidekick assistant with custom action hooks, vector database RAG layers, and secure legacy ERP synchronization. Turn Sidekick into a conversational dashboard for your whole stack.',
  alternates: { canonical: 'https://kovil.ai/shopify/custom-sidekick-actions' },
  keywords: [
    'shopify sidekick custom actions',
    'shopify ai sidekick extension',
    'shopify assistant coding',
    'extend shopify sidekick',
    'custom shopify ai actions',
    'shopify sidekick integration',
    'shopify sidekick erp',
    'shopify ai assistant developer',
  ],
  openGraph: {
    type: 'website',
    title: 'Custom Shopify Sidekick Actions & Assistant Overrides | Kovil AI',
    description: 'Extend the default Shopify Sidekick assistant with custom action hooks, vector database RAG layers, and secure legacy ERP synchronization.',
    url: 'https://kovil.ai/shopify/custom-sidekick-actions',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/shopify-agent-architecture.png', width: 1200, height: 675, alt: 'Custom Shopify Sidekick Actions — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Shopify Sidekick Actions & Assistant Overrides | Kovil AI',
    description: 'Extend the default Shopify Sidekick assistant with custom action hooks, vector database RAG layers, and secure legacy ERP synchronization.',
    images: ['https://kovil.ai/shopify-agent-architecture.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom Shopify Sidekick Actions',
  description: 'Middleware development that extends Shopify Sidekick with custom action hooks, RAG-grounded vector database lookups, and secure integrations to ERP, shipping, and CRM systems outside Shopify.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
    telephone: '+16465359141',
    sameAs: [
      'https://www.linkedin.com/company/kovil-ai/',
      'https://clutch.co/profile/kovil-ai',
      'https://www.crunchbase.com/organization/kovil-ai',
    ],
    address: [
      { '@type': 'PostalAddress', streetAddress: '734 Franklin Ave', addressLocality: 'Garden City', addressRegion: 'NY', postalCode: '11530', addressCountry: 'US' },
    ],
  },
  serviceType: 'Conversational Assistant Extension Engineering',
  category: 'Shopify AI Integration',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/shopify/custom-sidekick-actions',
  isPartOf: { '@type': 'Service', name: 'Shopify AI Agent Integration', url: 'https://kovil.ai/shopify' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Sidekick Extension Pillars',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Prompt-to-Action Interceptors' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vector-Database RAG Grounding' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Multi-System Transaction API' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Prompt Libraries' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. 3-4 week sprint to first custom action.' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do you extend Shopify Sidekick\'s capabilities?', acceptedAnswer: { '@type': 'Answer', text: 'We run a secure middleware layer that intercepts conversational inputs or custom tool-calling schema prompts. When Sidekick recognizes a request that requires legacy systems or offline databases, it calls our custom API hook, which routes the task, executes the data sync, and returns the result.' } },
    { '@type': 'Question', name: 'Is this safe to run on enterprise-tier stores?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our middleware enforces strict rate limits, credential encryption, and human-in-the-loop checkpoints so that agents cannot make unauthorized modifications to your catalog or financial records.' } },
    { '@type': 'Question', name: 'Which models power the custom Sidekick extensions?', acceptedAnswer: { '@type': 'Answer', text: 'We integrate custom actions using Anthropic\'s Claude, OpenAI\'s GPT-4o, or DeepSeek models depending on latency limits and budget constraints.' } },
    { '@type': 'Question', name: 'Can Sidekick access data that isn\'t stored in Shopify at all?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — that\'s the primary reason to build custom actions. We connect Sidekick to ERP systems, wholesale contract databases, carrier platforms, and internal tools via RAG grounding and direct API connectors.' } },
    { '@type': 'Question', name: 'Can different staff members have different Sidekick permissions?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We scope custom actions to authorization roles — a customer service rep might check order status and issue small refunds, while only a billing manager\'s session can approve larger refunds or price overrides.' } },
    { '@type': 'Question', name: 'What stops Sidekick from making a costly mistake autonomously?', acceptedAnswer: { '@type': 'Answer', text: 'Every high-stakes action we build routes through a configurable approval gate. Refund approvals, mass price overrides, and PO adjustments trigger a Slack review message and wait for a human decision before executing.' } },
    { '@type': 'Question', name: 'How long does it take to add a new custom action?', acceptedAnswer: { '@type': 'Answer', text: 'A single well-scoped custom action typically takes 3–5 business days to build, test, and deploy once the API access and business rules are confirmed.' } },
    { '@type': 'Question', name: 'Do I own the code for the custom actions?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, 100%. All middleware code, prompt templates, and integration logic built during the engagement are fully owned by you with no vendor lock-in.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Shopify', item: 'https://kovil.ai/shopify' },
    { '@type': 'ListItem', position: 3, name: 'Custom Sidekick Actions', item: 'https://kovil.ai/shopify/custom-sidekick-actions' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Custom Shopify Sidekick Actions & Assistant Overrides | Kovil AI',
  description: 'Extend the default Shopify Sidekick assistant with custom action hooks, vector database RAG layers, and secure legacy ERP synchronization.',
  url: 'https://kovil.ai/shopify/custom-sidekick-actions',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: breadcrumbSchema.itemListElement },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <ShopifySidekickActionsPage />
    </>
  )
}
