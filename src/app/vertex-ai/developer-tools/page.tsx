import type { Metadata } from 'next'
import SectionHubTemplate from '@/src/components/hub/SectionHubTemplate'
import type { SectionHubData } from '@/src/components/hub/SectionHubTemplate'

const G_BLUE = '#4285F4'
const G_RED = '#EA4335'
const G_GREEN = '#34A853'

export const metadata: Metadata = {
  title: 'Vertex AI Developer Tools — Code Generation, MLOps & API Testing Agents',
  description: 'AI developer tools on Vertex AI — code generation agents, MLOps pipeline automation, and API testing agents. Fixed-price production deployments for engineering teams on Google Cloud.',
  alternates: { canonical: 'https://kovil.ai/vertex-ai/developer-tools' },
  keywords: ['vertex ai code generation agent', 'vertex ai mlops pipeline', 'vertex ai api testing agent', 'google cloud developer ai', 'gemini code generation', 'vertex ai mlops automation', 'google cloud ai developer tools', 'vertex ai devops automation', 'gemini code assist enterprise'],
  openGraph: {
    type: 'website',
    title: 'Vertex AI Developer Tools & Agents | Kovil AI',
    description: 'Code generation, MLOps pipeline automation, and API testing agents on Vertex AI. Fixed-price for engineering teams.',
    url: 'https://kovil.ai/vertex-ai/developer-tools',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-vertex-ai.png', width: 1200, height: 630, alt: 'Vertex AI Developer Tools — Kovil AI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Vertex AI Developer Tools | Kovil AI', description: 'Code generation, MLOps, and API testing agents on Vertex AI. Fixed-price for engineering teams.', images: ['https://kovil.ai/og-vertex-ai.png'] },
}

const collectionSchema = {
  '@context': 'https://schema.org', '@type': 'CollectionPage',
  name: 'Vertex AI Developer Tools & Agents',
  url: 'https://kovil.ai/vertex-ai/developer-tools',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  hasPart: [
    { '@type': 'WebPage', name: 'Code Generation Agent on Vertex AI', url: 'https://kovil.ai/vertex-ai/developer-tools/code-generation-agent' },
    { '@type': 'WebPage', name: 'MLOps Pipeline Agent on Vertex AI', url: 'https://kovil.ai/vertex-ai/developer-tools/mlops-pipeline-agent' },
    { '@type': 'WebPage', name: 'API Testing Agent on Vertex AI', url: 'https://kovil.ai/vertex-ai/developer-tools/api-testing-agent' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Vertex AI', item: 'https://kovil.ai/vertex-ai' },
    { '@type': 'ListItem', position: 3, name: 'Developer Tools', item: 'https://kovil.ai/vertex-ai/developer-tools' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  name: 'Vertex AI Developer Tools & Agents | Kovil AI',
  url: 'https://kovil.ai/vertex-ai/developer-tools',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'h3', 'p'] },
}

const data: SectionHubData = {
  brandColor: G_BLUE,
  breadcrumbs: [{ label: 'Vertex AI', href: '/vertex-ai' }, { label: 'Developer Tools' }],
  sectionTag: 'Developer Tool Use Cases',
  headline: 'Developer Tools',
  headlineAccent: 'on Vertex AI',
  description: 'AI agents that supercharge your engineering team — Gemini-powered code generation, Vertex AI Pipelines MLOps automation, and AI-driven API testing on Google Cloud.',
  cards: [
    { href: '/vertex-ai/developer-tools/code-generation-agent', icon: 'Code2', color: G_BLUE, title: 'Code Generation Agent', description: 'Enterprise code generation and review using Gemini Code Assist and Vertex AI — trained on your codebase, documentation, and engineering standards for in-context completions.' },
    { href: '/vertex-ai/developer-tools/mlops-pipeline-agent', icon: 'GitBranch', color: G_RED, title: 'MLOps Pipeline Agent', description: 'Automated model training, evaluation, deployment, and monitoring using Vertex AI Pipelines and Kubeflow — continuous delivery for your ML models.' },
    { href: '/vertex-ai/developer-tools/api-testing-agent', icon: 'Plug', color: G_GREEN, title: 'API Testing Agent', description: 'AI-powered API test generation and regression testing using Gemini — automatically generating test cases from OpenAPI specs and catching breaking changes.' },
  ],
  ctaHeadline: 'Ready to accelerate your engineering team with Vertex AI?',
  ctaBody: 'Book a 30-minute scoping call. We will identify the right developer tool use case and give you a fixed-price delivery plan.',
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
