import type { Metadata } from 'next'
import SectionHubTemplate from '@/src/components/hub/SectionHubTemplate'
import type { SectionHubData } from '@/src/components/hub/SectionHubTemplate'

const G_BLUE = '#4285F4'
const G_RED = '#EA4335'
const G_GREEN = '#34A853'

export const metadata: Metadata = {
  title: 'Vertex AI Operations Intelligence Agents — Supply Chain, Predictive Analytics & Quality Control | Kovil AI',
  description: 'Operations intelligence agents on Vertex AI — supply chain intelligence, predictive analytics, and computer vision quality control. Fixed-price Google Cloud production deployments.',
  alternates: { canonical: 'https://kovil.ai/vertex-ai/operations' },
  keywords: ['vertex ai supply chain intelligence', 'vertex ai predictive analytics agent', 'vertex ai quality control vision', 'google cloud operations ai', 'vertex ai computer vision', 'bigquery predictive analytics', 'vertex ai operations agent', 'google cloud supply chain ai', 'vertex ai vision ai quality'],
  openGraph: {
    type: 'website',
    title: 'Vertex AI Operations Intelligence Agents | Kovil AI',
    description: 'Supply chain intelligence, predictive analytics, and computer vision quality control on Vertex AI. Fixed-price.',
    url: 'https://kovil.ai/vertex-ai/operations',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-vertex-ai.png', width: 1200, height: 630, alt: 'Vertex AI Operations Agents — Kovil AI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Vertex AI Operations Intelligence Agents | Kovil AI', description: 'Supply chain, predictive analytics, and vision quality control on Vertex AI. Fixed-price.', images: ['https://kovil.ai/og-vertex-ai.png'] },
}

const collectionSchema = {
  '@context': 'https://schema.org', '@type': 'CollectionPage',
  name: 'Vertex AI Operations Intelligence Agents',
  url: 'https://kovil.ai/vertex-ai/operations',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  hasPart: [
    { '@type': 'WebPage', name: 'Supply Chain Intelligence Agent on Vertex AI', url: 'https://kovil.ai/vertex-ai/operations/supply-chain-intelligence' },
    { '@type': 'WebPage', name: 'Predictive Analytics Agent on Vertex AI', url: 'https://kovil.ai/vertex-ai/operations/predictive-analytics-agent' },
    { '@type': 'WebPage', name: 'Quality Control Vision Agent on Vertex AI', url: 'https://kovil.ai/vertex-ai/operations/quality-control-vision-agent' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Vertex AI', item: 'https://kovil.ai/vertex-ai' },
    { '@type': 'ListItem', position: 3, name: 'Operations', item: 'https://kovil.ai/vertex-ai/operations' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  name: 'Vertex AI Operations Intelligence Agents | Kovil AI',
  url: 'https://kovil.ai/vertex-ai/operations',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'h3', 'p'] },
}

const data: SectionHubData = {
  brandColor: G_BLUE,
  breadcrumbs: [{ label: 'Vertex AI', href: '/vertex-ai' }, { label: 'Operations' }],
  sectionTag: 'Operations Intelligence Use Cases',
  headline: 'Operations Intelligence',
  headlineAccent: 'on Vertex AI',
  description: 'AI agents that monitor and optimise your operations — supply chain visibility, predictive analytics over BigQuery, and computer vision quality control powered by Vertex AI and Gemini.',
  cards: [
    { href: '/vertex-ai/operations/supply-chain-intelligence', icon: 'Package', color: G_BLUE, title: 'Supply Chain Intelligence Agent', description: 'End-to-end supply chain visibility and risk detection using Vertex AI and BigQuery — demand forecasting, disruption alerts, and supplier performance monitoring.' },
    { href: '/vertex-ai/operations/predictive-analytics-agent', icon: 'TrendingUp', color: G_RED, title: 'Predictive Analytics Agent', description: 'Operational forecasting agents grounded in BigQuery data — churn prediction, demand sensing, and equipment failure forecasting using Vertex AI AutoML.' },
    { href: '/vertex-ai/operations/quality-control-vision-agent', icon: 'Eye', color: G_GREEN, title: 'Quality Control Vision Agent', description: 'Computer vision quality inspection using Vertex AI Vision AI and Gemini multimodal — automated defect detection and visual inspection for manufacturing and logistics.' },
  ],
  ctaHeadline: 'Ready to bring AI intelligence to your operations?',
  ctaBody: 'Book a 30-minute scoping call. We will identify the right operational use case and give you a fixed-price delivery plan on Vertex AI.',
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <SectionHubTemplate data={data} />
    </>
  )
}
