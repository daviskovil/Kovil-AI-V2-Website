import type { Metadata } from 'next'
import CompetitorPriceRepricerPage from '@/src/pages/shopify/workflows/CompetitorPriceRepricerPage'

export const metadata: Metadata = {
  title: 'AI Competitor Price Scraper & Dynamic Repricer',
  description: 'Automated scraper agents that monitor competitor storefronts hourly and adjust Shopify variant pricing dynamically within protected margin floors. Live in 2 weeks, risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/shopify/workflows/competitor-price-repricer' },
  keywords: [
    'competitor price scraper shopify',
    'dynamic pricing ai agent',
    'ecommerce price repricer',
    'automated pricing rule engine',
    'shopify scraper agent',
    'ai repricing tool shopify',
  ],
  openGraph: {
    type: 'website',
    title: 'AI Competitor Price Scraper & Dynamic Repricer | Kovil AI',
    description: 'Automated scraper agents that monitor competitor storefronts and adjust Shopify pricing within protected margin floors.',
    url: 'https://kovil.ai/shopify/workflows/competitor-price-repricer',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Competitor Price Scraper & Dynamic Repricer | Kovil AI',
    description: 'Automated scraper agents that monitor competitor storefronts and adjust Shopify pricing within protected margin floors.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Competitor Price Repricer Workflow',
  description: 'Automated scraping and dynamic repricing agents for Shopify — hourly competitor monitoring, margin-protected price adjustments, self-healing scraper nodes, and full audit trail logging.',
  provider: {
    '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp', telephone: '+16465359141',
    sameAs: ['https://www.linkedin.com/company/kovil-ai/', 'https://clutch.co/profile/kovil-ai', 'https://www.crunchbase.com/organization/kovil-ai'],
    address: [{ '@type': 'PostalAddress', streetAddress: '734 Franklin Ave', addressLocality: 'Garden City', addressRegion: 'NY', postalCode: '11530', addressCountry: 'US' }],
  },
  serviceType: 'Dynamic Pricing Automation',
  category: 'Shopify Workflow Blueprints',
  areaServed: [
    { '@type': 'Country', name: 'United States' }, { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' }, { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/shopify/workflows/competitor-price-repricer',
  isPartOf: { '@type': 'Service', name: 'Shopify AI Agent Integration', url: 'https://kovil.ai/shopify' },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. 2-week sprint to first live repricer.' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is scraping competitor sites safe and compliant?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our scraping agents use rotated proxy networks and scrape pages at normal user-like intervals to respect server load.' } },
    { '@type': 'Question', name: 'Can we review repricing before it goes live?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, you can toggle a Slack Review gate requiring a manager\'s confirmation click before any price change above a configured delta commits.' } },
    { '@type': 'Question', name: 'How do you prevent the agent from racing to the bottom on price?', acceptedAnswer: { '@type': 'Answer', text: 'Every repricing decision runs against a hard-coded floor price tied to your actual cost margin.' } },
    { '@type': 'Question', name: 'What happens if a competitor\'s website structure changes?', acceptedAnswer: { '@type': 'Answer', text: 'The scraping agent parses HTML schemas dynamically rather than relying on brittle fixed selectors.' } },
    { '@type': 'Question', name: 'Is there a full audit trail of every price change?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every variant update is logged with the previous price, new price, and the specific competitor signal that triggered the change.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Shopify', item: 'https://kovil.ai/shopify' },
    { '@type': 'ListItem', position: 3, name: 'Competitor Price Repricer', item: 'https://kovil.ai/shopify/workflows/competitor-price-repricer' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  name: 'AI Competitor Price Scraper & Dynamic Repricer | Kovil AI',
  description: 'Automated scraper agents that monitor competitor storefronts and adjust Shopify pricing within protected margin floors.',
  url: 'https://kovil.ai/shopify/workflows/competitor-price-repricer',
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
      <CompetitorPriceRepricerPage />
    </>
  )
}
