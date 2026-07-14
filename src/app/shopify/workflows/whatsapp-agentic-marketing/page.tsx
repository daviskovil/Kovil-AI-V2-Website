import type { Metadata } from 'next'
import WhatsappAgenticMarketingPage from '@/src/pages/shopify/workflows/WhatsappAgenticMarketingPage'

export const metadata: Metadata = {
  title: 'WhatsApp Agentic Marketing & Checkout Recovery',
  description: 'Conversational WhatsApp agents that recover abandoned checkouts, answer real sizing/product questions in-thread, and hand off a one-tap checkout link. 98% open rate. Live in 2 weeks.',
  alternates: { canonical: 'https://kovil.ai/shopify/workflows/whatsapp-agentic-marketing' },
  keywords: [
    'shopify whatsapp automation',
    'whatsapp checkout recovery agent',
    'conversational marketing whatsapp',
    'shopify customer retention whatsapp',
    'automated marketing agent whatsapp',
    'whatsapp cart abandonment ai',
  ],
  openGraph: {
    type: 'website',
    title: 'WhatsApp Agentic Marketing & Checkout Recovery | Kovil AI',
    description: 'Conversational WhatsApp agents that recover abandoned checkouts and answer product questions in-thread.',
    url: 'https://kovil.ai/shopify/workflows/whatsapp-agentic-marketing',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatsApp Agentic Marketing & Checkout Recovery | Kovil AI',
    description: 'Conversational WhatsApp agents that recover abandoned checkouts and answer product questions in-thread.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'WhatsApp Agentic Marketing Workflow',
  description: 'Conversational WhatsApp AI agents for Shopify — cart abandonment recovery, in-thread product Q&A, and one-tap pre-loaded checkout handoff, built on official WhatsApp Business API.',
  provider: {
    '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp', telephone: '+16465359141',
    sameAs: ['https://www.linkedin.com/company/kovil-ai/', 'https://clutch.co/profile/kovil-ai', 'https://www.crunchbase.com/organization/kovil-ai'],
    address: [{ '@type': 'PostalAddress', streetAddress: '734 Franklin Ave', addressLocality: 'Garden City', addressRegion: 'NY', postalCode: '11530', addressCountry: 'US' }],
  },
  serviceType: 'Conversational Commerce Automation',
  category: 'Shopify Workflow Blueprints',
  areaServed: [
    { '@type': 'Country', name: 'United States' }, { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' }, { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/shopify/workflows/whatsapp-agentic-marketing',
  isPartOf: { '@type': 'Service', name: 'Shopify AI Agent Integration', url: 'https://kovil.ai/shopify' },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. 2-week sprint to first live flow.' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is the recovery workflow compliant with SMS and messaging laws?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our integrations follow strict TCPA and GDPR rules, ensuring automated marketing only runs for customers with verified opt-ins during checkout.' } },
    { '@type': 'Question', name: 'Can customers finalize checkout inside WhatsApp?', acceptedAnswer: { '@type': 'Answer', text: 'The agent generates a direct Shopify checkout link pre-loaded with the variant and discount code, enabling one-tap payment.' } },
    { '@type': 'Question', name: 'How is this different from a basic WhatsApp broadcast tool?', acceptedAnswer: { '@type': 'Answer', text: 'Broadcast tools send one-way messages. Our agent maintains multi-turn conversation memory and can answer product-specific questions grounded in your real catalog.' } },
    { '@type': 'Question', name: 'Does this require the official WhatsApp Business API?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We integrate through Twilio or Meta\'s official WhatsApp Business API gateways for reliable, high-deliverability messaging.' } },
    { '@type': 'Question', name: 'Can we track revenue attribution from this channel?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every conversation and resulting purchase is logged and tagged for attribution.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Shopify', item: 'https://kovil.ai/shopify' },
    { '@type': 'ListItem', position: 3, name: 'WhatsApp Agentic Marketing', item: 'https://kovil.ai/shopify/workflows/whatsapp-agentic-marketing' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  name: 'WhatsApp Agentic Marketing & Checkout Recovery | Kovil AI',
  description: 'Conversational WhatsApp agents that recover abandoned checkouts and answer product questions in-thread.',
  url: 'https://kovil.ai/shopify/workflows/whatsapp-agentic-marketing',
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
      <WhatsappAgenticMarketingPage />
    </>
  )
}
