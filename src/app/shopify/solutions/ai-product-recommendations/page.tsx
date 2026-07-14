import type { Metadata } from 'next'
import AiProductRecommendationsPage from '@/src/pages/shopify/solutions/AiProductRecommendationsPage'

export const metadata: Metadata = {
  title: 'Semantic Product Recommendation RAG Systems for Shopify',
  description: 'Vector-database semantic product recommendation systems that map buyer intent to high-SKU catalogs with sub-second, stock-aware accuracy. Live in 2 weeks, risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/shopify/solutions/ai-product-recommendations' },
  keywords: [
    'shopify ai product recommendations',
    'vector search product recommendation',
    'rag ecommerce catalog',
    'semantic recommendation shopify',
    'high SKU search agent',
    'shopify semantic search',
    'ai merchandising shopify',
  ],
  openGraph: {
    type: 'website',
    title: 'Semantic Product Recommendation RAG Systems for Shopify | Kovil AI',
    description: 'Vector-database semantic product recommendation systems for high-SKU Shopify catalogs.',
    url: 'https://kovil.ai/shopify/solutions/ai-product-recommendations',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Semantic Product Recommendation RAG Systems for Shopify | Kovil AI',
    description: 'Vector-database semantic product recommendation systems for high-SKU Shopify catalogs.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Semantic Product Recommendation RAG Systems',
  description: 'Vector-database backed semantic product recommendation and search systems for Shopify — semantic intent mapping, catalog indexing, personalized merchandising, cross-sell prompts, and search re-ranking.',
  provider: {
    '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp', telephone: '+16465359141',
    sameAs: ['https://www.linkedin.com/company/kovil-ai/', 'https://clutch.co/profile/kovil-ai', 'https://www.crunchbase.com/organization/kovil-ai'],
    address: [{ '@type': 'PostalAddress', streetAddress: '734 Franklin Ave', addressLocality: 'Garden City', addressRegion: 'NY', postalCode: '11530', addressCountry: 'US' }],
  },
  serviceType: 'AI Agent Development for E-Commerce',
  category: 'Semantic Search & Recommendations',
  areaServed: [
    { '@type': 'Country', name: 'United States' }, { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' }, { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/shopify/solutions/ai-product-recommendations',
  isPartOf: { '@type': 'Service', name: 'Shopify AI Agent Integration', url: 'https://kovil.ai/shopify' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog', name: 'Semantic Recommendation Use Cases',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Semantic Intent Mapping' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vector Catalog Indexing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Personalized Homepage Merchandising' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Contextual Cross-Sell Prompts' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Search-to-Purchase Re-ranking' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. 2-week sprint to first live index.' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How is product inventory synchronized?', acceptedAnswer: { '@type': 'Answer', text: 'We run background database workers that hook to Shopify Admin Webhooks. When items are created, modified, or depleted, vector index values update in under 2 seconds.' } },
    { '@type': 'Question', name: 'Does the system support high SKU stores?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our semantic architectures index stores with up to 500,000 unique SKUs, maintaining sub-second query speeds using cluster databases.' } },
    { '@type': 'Question', name: 'Will recommendations ever suggest out-of-stock items?', acceptedAnswer: { '@type': 'Answer', text: 'No. Every recommendation is filtered against real-time inventory data before being shown.' } },
    { '@type': 'Question', name: 'How do you prevent irrelevant or hallucinated suggestions?', acceptedAnswer: { '@type': 'Answer', text: 'Recommendations are constrained strictly to embeddings generated from your actual catalog data — the model can only surface products that exist in your store.' } },
    { '@type': 'Question', name: 'How long does it take to launch?', acceptedAnswer: { '@type': 'Answer', text: 'Initial catalog indexing and basic semantic search typically go live within 2 weeks.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Shopify', item: 'https://kovil.ai/shopify' },
    { '@type': 'ListItem', position: 3, name: 'AI Product Recommendations', item: 'https://kovil.ai/shopify/solutions/ai-product-recommendations' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  name: 'Semantic Product Recommendation RAG Systems for Shopify | Kovil AI',
  description: 'Vector-database semantic product recommendation systems for high-SKU Shopify catalogs.',
  url: 'https://kovil.ai/shopify/solutions/ai-product-recommendations',
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
      <AiProductRecommendationsPage />
    </>
  )
}
