import type { Metadata } from 'next'
import SectionHubTemplate from '@/src/components/hub/SectionHubTemplate'
import type { SectionHubData } from '@/src/components/hub/SectionHubTemplate'

const G_BLUE = '#4285F4'
const G_RED = '#EA4335'
const G_GREEN = '#34A853'

export const metadata: Metadata = {
  title: 'Vertex AI Customer Experience Agents — Conversational AI, Personalisation & Contact Centre',
  description: 'Customer experience AI agents on Vertex AI — conversational AI agents, personalisation engines, and contact centre AI. Resolve 70%+ of queries autonomously. Fixed-price Google Cloud deployments.',
  alternates: { canonical: 'https://kovil.ai/vertex-ai/customer-experience' },
  keywords: ['vertex ai conversational agent', 'vertex ai personalisation engine', 'google cloud contact centre ai', 'vertex ai customer experience', 'dialogflow cx vertex ai', 'gemini customer service agent', 'google cloud cx agent', 'vertex ai recommendation engine', 'google ccai vertex ai'],
  openGraph: {
    type: 'website',
    title: 'Vertex AI Customer Experience Agents | Kovil AI',
    description: 'Conversational AI agents, personalisation engines, and contact centre AI on Vertex AI. Resolve 70%+ of queries. Fixed-price.',
    url: 'https://kovil.ai/vertex-ai/customer-experience',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-vertex-ai.png', width: 1200, height: 630, alt: 'Vertex AI Customer Experience Agents — Kovil AI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Vertex AI Customer Experience Agents | Kovil AI', description: 'Conversational AI, personalisation, and contact centre agents on Vertex AI. Fixed-price.', images: ['https://kovil.ai/og-vertex-ai.png'] },
}

const collectionSchema = {
  '@context': 'https://schema.org', '@type': 'CollectionPage',
  name: 'Vertex AI Customer Experience Agents',
  url: 'https://kovil.ai/vertex-ai/customer-experience',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  hasPart: [
    { '@type': 'WebPage', name: 'Conversational AI Agent on Vertex AI', url: 'https://kovil.ai/vertex-ai/customer-experience/conversational-ai-agent' },
    { '@type': 'WebPage', name: 'Personalisation Engine on Vertex AI', url: 'https://kovil.ai/vertex-ai/customer-experience/personalisation-engine' },
    { '@type': 'WebPage', name: 'Contact Centre AI on Google Cloud', url: 'https://kovil.ai/vertex-ai/customer-experience/contact-centre-ai' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Vertex AI', item: 'https://kovil.ai/vertex-ai' },
    { '@type': 'ListItem', position: 3, name: 'Customer Experience', item: 'https://kovil.ai/vertex-ai/customer-experience' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  name: 'Vertex AI Customer Experience Agents | Kovil AI',
  url: 'https://kovil.ai/vertex-ai/customer-experience',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'h3', 'p'] },
}

const data: SectionHubData = {
  brandColor: G_BLUE,
  breadcrumbs: [{ label: 'Vertex AI', href: '/vertex-ai' }, { label: 'Customer Experience' }],
  sectionTag: 'Customer Experience Use Cases',
  headline: 'Customer Experience',
  headlineAccent: 'on Vertex AI',
  description: 'AI agents that transform customer interactions — conversational agents that understand intent, personalisation engines that predict needs, and contact centre AI that deflects volume at scale.',
  cards: [
    { href: '/vertex-ai/customer-experience/conversational-ai-agent', icon: 'MessageSquare', color: G_BLUE, title: 'Conversational AI Agent', description: 'Omnichannel conversational agents built on Vertex AI Agent Builder and Dialogflow CX — resolving customer queries autonomously with Gemini-powered understanding.' },
    { href: '/vertex-ai/customer-experience/personalisation-engine', icon: 'Sparkles', color: G_RED, title: 'Personalisation Engine', description: 'Real-time personalisation using Vertex AI Recommendations AI and BigQuery ML — serving the right product, content, or offer to each user at the right moment.' },
    { href: '/vertex-ai/customer-experience/contact-centre-ai', icon: 'Headphones', color: G_GREEN, title: 'Contact Centre AI', description: 'Google Cloud Contact Centre AI (CCAI) implementation — Agent Assist, automated summarisation, and virtual agents that reduce call handling time and cost.' },
  ],
  ctaHeadline: 'Ready to transform your customer experience with Vertex AI?',
  ctaBody: 'Book a 30-minute scoping call. We will identify the right CX use case and give you a fixed-price delivery plan.',
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
