import type { Metadata } from 'next'
import SpecSheetEnricherPage from '@/src/pages/shopify/workflows/SpecSheetEnricherPage'

export const metadata: Metadata = {
  title: 'Automated Supplier PDF Spec Sheet Catalog Enricher',
  description: 'Ingest raw supplier PDF spec sheets and convert them autonomously into SEO-optimized, review-ready Shopify product listings. Processes 5,000+ sheets/hour. Live in 2 weeks.',
  alternates: { canonical: 'https://kovil.ai/shopify/workflows/spec-sheet-catalog-enricher' },
  keywords: [
    'pdf spec sheet parser shopify',
    'automated catalog enricher',
    'llm supplier sheet ingestion',
    'shopify description copywriter',
    'bulk catalog import ai',
    'supplier catalog automation',
  ],
  openGraph: {
    type: 'website',
    title: 'Automated Supplier PDF Spec Sheet Catalog Enricher | Kovil AI',
    description: 'Ingest raw supplier PDF spec sheets and convert them autonomously into SEO-optimized product listings.',
    url: 'https://kovil.ai/shopify/workflows/spec-sheet-catalog-enricher',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automated Supplier PDF Spec Sheet Catalog Enricher | Kovil AI',
    description: 'Ingest raw supplier PDF spec sheets and convert them autonomously into SEO-optimized product listings.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Supplier Spec Sheet Catalog Enricher',
  description: 'Automated ingestion and enrichment of raw supplier PDF/Excel spec sheets into SEO-optimized, schema-validated Shopify draft product listings.',
  provider: {
    '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp', telephone: '+16465359141',
    sameAs: ['https://www.linkedin.com/company/kovil-ai/', 'https://clutch.co/profile/kovil-ai', 'https://www.crunchbase.com/organization/kovil-ai'],
    address: [{ '@type': 'PostalAddress', streetAddress: '734 Franklin Ave', addressLocality: 'Garden City', addressRegion: 'NY', postalCode: '11530', addressCountry: 'US' }],
  },
  serviceType: 'Catalog Automation Engineering',
  category: 'Shopify Workflow Blueprints',
  areaServed: [
    { '@type': 'Country', name: 'United States' }, { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' }, { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/shopify/workflows/spec-sheet-catalog-enricher',
  isPartOf: { '@type': 'Service', name: 'Shopify AI Agent Integration', url: 'https://kovil.ai/shopify' },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. 2-week sprint to first live pipeline.' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Can the parser handle messy supplier spec sheets?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, vision models read PDF layouts and map headers to normalized e-commerce variant tags even if layouts vary significantly between suppliers.' } },
    { '@type': 'Question', name: 'Does the system upload products directly to live storefronts?', acceptedAnswer: { '@type': 'Answer', text: 'By default, products are created as Drafts in Shopify, letting merchandising teams review outputs before hitting publish.' } },
    { '@type': 'Question', name: 'How accurate is the extracted data in practice?', acceptedAnswer: { '@type': 'Answer', text: 'Extraction accuracy on well-formatted supplier PDFs typically exceeds 95% for core fields such as SKU, price, and dimensions.' } },
    { '@type': 'Question', name: 'Can we customize the tone of voice for generated descriptions?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We embed your brand style guide directly into the model\'s context, so generated descriptions consistently match your voice.' } },
    { '@type': 'Question', name: 'How many supplier sheets can be processed at once?', acceptedAnswer: { '@type': 'Answer', text: 'Production deployments handle up to 5,000 unique supplier sheets per hour without performance degradation.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Shopify', item: 'https://kovil.ai/shopify' },
    { '@type': 'ListItem', position: 3, name: 'Supplier Spec Sheet Enricher', item: 'https://kovil.ai/shopify/workflows/spec-sheet-catalog-enricher' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  name: 'Automated Supplier PDF Spec Sheet Catalog Enricher | Kovil AI',
  description: 'Ingest raw supplier PDF spec sheets and convert them autonomously into SEO-optimized product listings.',
  url: 'https://kovil.ai/shopify/workflows/spec-sheet-catalog-enricher',
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
      <SpecSheetEnricherPage />
    </>
  )
}
