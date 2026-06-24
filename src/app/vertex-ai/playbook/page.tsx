import type { Metadata } from 'next'
import SectionHubTemplate from '@/src/components/hub/SectionHubTemplate'
import type { SectionHubData } from '@/src/components/hub/SectionHubTemplate'

const G_BLUE = '#4285F4'
const G_RED = '#EA4335'
const G_GREEN = '#34A853'

export const metadata: Metadata = {
  title: 'Vertex AI Playbook — Guides, Comparisons & Case Studies | Kovil AI',
  description: 'Vertex AI technical playbook — architect your first agent, Vertex AI vs Gemini API comparison, and retail personalisation case study. Practical enterprise AI guides.',
  alternates: { canonical: 'https://kovil.ai/vertex-ai/playbook' },
  keywords: ['vertex ai playbook', 'architect vertex ai agent', 'vertex ai vs gemini api', 'vertex ai retail personalisation case study', 'vertex ai guide 2026', 'gemini api vs vertex ai difference', 'vertex ai tutorial enterprise', 'vertex ai agent tutorial', 'google cloud ai guide'],
  openGraph: {
    type: 'website',
    title: 'Vertex AI Playbook — Guides & Case Studies | Kovil AI',
    description: 'Architect your first Vertex AI agent, compare Vertex AI vs Gemini API, and read the retail personalisation case study.',
    url: 'https://kovil.ai/vertex-ai/playbook',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-vertex-ai.png', width: 1200, height: 630, alt: 'Vertex AI Playbook — Kovil AI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Vertex AI Playbook | Kovil AI', description: 'Architect agents, compare Vertex AI vs Gemini API, and explore the retail case study.', images: ['https://kovil.ai/og-vertex-ai.png'] },
}

const collectionSchema = {
  '@context': 'https://schema.org', '@type': 'CollectionPage',
  name: 'Vertex AI Playbook — Guides & Case Studies',
  url: 'https://kovil.ai/vertex-ai/playbook',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  hasPart: [
    { '@type': 'Article', name: 'Architect Your First Vertex AI Agent', url: 'https://kovil.ai/vertex-ai/playbook/architect-your-first-vertex-ai-agent' },
    { '@type': 'Article', name: 'Vertex AI vs Gemini API: Which to Choose', url: 'https://kovil.ai/vertex-ai/playbook/vertex-ai-vs-gemini-api' },
    { '@type': 'Article', name: 'Retail Personalisation on Vertex AI — Build Guide', url: 'https://kovil.ai/vertex-ai/playbook/retail-personalisation-vertex-ai-build' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Vertex AI', item: 'https://kovil.ai/vertex-ai' },
    { '@type': 'ListItem', position: 3, name: 'Playbook', item: 'https://kovil.ai/vertex-ai/playbook' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  name: 'Vertex AI Playbook — Guides & Case Studies | Kovil AI',
  url: 'https://kovil.ai/vertex-ai/playbook',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'h3', 'p'] },
}

const data: SectionHubData = {
  brandColor: G_BLUE,
  breadcrumbs: [{ label: 'Vertex AI', href: '/vertex-ai' }, { label: 'Playbook' }],
  sectionTag: 'Technical Guides & Case Studies',
  headline: 'The Vertex AI',
  headlineAccent: 'Playbook',
  description: 'Practical guides, architectural deep-dives, and real-world case studies for enterprise teams building on Google Cloud Vertex AI and Gemini.',
  cards: [
    { href: '/vertex-ai/playbook/architect-your-first-vertex-ai-agent', icon: 'BookOpen', color: G_BLUE, tag: 'Guide', title: 'Architect Your First Vertex AI Agent', description: 'Step-by-step enterprise architecture guide for building your first production AI agent on Vertex AI — covering model selection, grounding, memory, and tool use.' },
    { href: '/vertex-ai/playbook/vertex-ai-vs-gemini-api', icon: 'ArrowLeftRight', color: G_RED, tag: 'Comparison', title: 'Vertex AI vs Gemini API: Which to Choose', description: 'Clear decision guide on when to use Vertex AI vs the Gemini API directly — covering enterprise compliance, managed infrastructure, MLOps, and cost trade-offs.' },
    { href: '/vertex-ai/playbook/retail-personalisation-vertex-ai-build', icon: 'FileText', color: G_GREEN, tag: 'Case Study', title: 'Retail Personalisation on Vertex AI', description: 'How we built a real-time retail personalisation engine using Vertex AI Recommendations AI, BigQuery ML, and Gemini — delivering 18% uplift in basket size.' },
  ],
  ctaHeadline: 'Want a guide written for your specific use case?',
  ctaBody: 'Book a 30-minute call and we will walk you through the right architecture for your Vertex AI build.',
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
