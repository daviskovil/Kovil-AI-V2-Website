import type { Metadata } from 'next'
import FashionApparelSizingPage from '@/src/pages/shopify/solutions/FashionApparelSizingPage'

export const metadata: Metadata = {
  title: 'Fashion & Apparel Sizing AI Agents for Shopify',
  description: 'Custom sizing and outfit recommendation agents that size per item (not a generic S/M/L guide), build visual outfit bundles, and cut size-related returns. Live in 2 weeks, risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/shopify/solutions/fashion-apparel-sizing-agents' },
  keywords: [
    'fashion ai sizing agent',
    'apparel fit recommendation ai',
    'shopify size chart ai',
    'ai stylist shopify',
    'fashion outfit recommendation agent',
    'reduce apparel returns ai',
    'shopify fit advisor',
  ],
  openGraph: {
    type: 'website',
    title: 'Fashion & Apparel Sizing AI Agents for Shopify | Kovil AI',
    description: 'Custom sizing and outfit recommendation agents that size per item and cut size-related returns.',
    url: 'https://kovil.ai/shopify/solutions/fashion-apparel-sizing-agents',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fashion & Apparel Sizing AI Agents for Shopify | Kovil AI',
    description: 'Custom sizing and outfit recommendation agents that size per item and cut size-related returns.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Fashion & Apparel Sizing AI Agents',
  description: 'Custom AI agents for fashion and apparel Shopify stores — per-item size and fit estimation, cross-brand fit normalization, visual outfit orchestration, and multi-variant bundle checkout.',
  provider: {
    '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp', telephone: '+16465359141',
    sameAs: ['https://www.linkedin.com/company/kovil-ai/', 'https://clutch.co/profile/kovil-ai', 'https://www.crunchbase.com/organization/kovil-ai'],
    address: [{ '@type': 'PostalAddress', streetAddress: '734 Franklin Ave', addressLocality: 'Garden City', addressRegion: 'NY', postalCode: '11530', addressCountry: 'US' }],
  },
  serviceType: 'AI Agent Development for E-Commerce',
  category: 'Fashion & Apparel',
  areaServed: [
    { '@type': 'Country', name: 'United States' }, { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' }, { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/shopify/solutions/fashion-apparel-sizing-agents',
  isPartOf: { '@type': 'Service', name: 'Shopify AI Agent Integration', url: 'https://kovil.ai/shopify' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog', name: 'Fashion & Apparel Agent Use Cases',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Size & Fit Estimator' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cross-Brand Fit Normalizer' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Visual Outfit Orchestrator' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Multi-Variant Bundle Checkout' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. 2-week sprint to first live agent.' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How accurate is the sizing recommendation?', acceptedAnswer: { '@type': 'Answer', text: 'The sizing recommendations leverage comparative database tables and custom questionnaire metrics to match user dimensions with specific variant measurements per item, ensuring a high-confidence fit rather than a generic S/M/L guess.' } },
    { '@type': 'Question', name: 'Does this require modifications to my theme?', acceptedAnswer: { '@type': 'Answer', text: 'No, we embed conversational advisor blocks using standard widgets or headless storefront API calls, keeping your theme completely clean.' } },
    { '@type': 'Question', name: 'Can it handle a multi-brand catalog with different size charts?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We build per-brand size chart normalization so a customer who knows their fit in one brand gets an accurate equivalent recommendation in a different brand.' } },
    { '@type': 'Question', name: 'How does the returns feedback loop work?', acceptedAnswer: { '@type': 'Answer', text: 'When a customer returns an item citing a sizing issue, that signal feeds back into per-SKU accuracy tracking, improving the recommendation over time without manual retraining.' } },
    { '@type': 'Question', name: 'Can customers build a full outfit, not just one item?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Visual Outfit Orchestrator suggests coordinated pieces based on style compatibility, checking real-time stock before suggesting anything.' } },
    { '@type': 'Question', name: 'How long does it take to launch?', acceptedAnswer: { '@type': 'Answer', text: 'A first-workflow deployment covering size estimation for your core categories typically takes about 2 weeks from kickoff.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Shopify', item: 'https://kovil.ai/shopify' },
    { '@type': 'ListItem', position: 3, name: 'Fashion & Apparel Sizing Agents', item: 'https://kovil.ai/shopify/solutions/fashion-apparel-sizing-agents' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  name: 'Fashion & Apparel Sizing AI Agents for Shopify | Kovil AI',
  description: 'Custom sizing and outfit recommendation agents that size per item and cut size-related returns.',
  url: 'https://kovil.ai/shopify/solutions/fashion-apparel-sizing-agents',
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
      <FashionApparelSizingPage />
    </>
  )
}
