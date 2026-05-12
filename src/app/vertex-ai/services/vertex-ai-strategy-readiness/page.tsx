import type { Metadata } from 'next'
import VertexAIStrategyReadinessPage from '@/src/pages/vertex-ai/services/VertexAIStrategyReadinessPage'

export const metadata: Metadata = {
  title: 'Vertex AI Strategy & Readiness | Kovil AI Google Cloud Vertex AI',
  description: 'Vertex AI readiness assessment and GCP AI strategy consulting. Audit your Google Cloud environment, map highest-ROI Gemini opportunities, and receive a production-ready architecture blueprint in 10 days.',
  alternates: { canonical: 'https://kovil.ai/vertex-ai/services/vertex-ai-strategy-readiness' },
  keywords: [
    'Vertex AI strategy consulting',
    'Google Cloud AI readiness assessment',
    'Vertex AI implementation roadmap',
    'Gemini AI strategy',
    'Vertex AI consulting',
    'GCP AI architecture blueprint',
    'Vertex AI use case prioritisation',
    'Google Cloud AI readiness',
    'Vertex AI ROI planning',
    'GCP AI audit',
    'Vertex AI cost modelling',
    'Google Cloud AI security review',
    'Vertex AI partner',
    'GCP AI implementation planning',
    'Vertex AI agent strategy',
    'Google Cloud AI roadmap',
    'Vertex AI assessment',
    'GCP AI investment justification',
  ],
  openGraph: {
    type: 'website',
    title: 'Vertex AI Strategy & Readiness | Kovil AI Google Cloud Vertex AI',
    description: 'Vertex AI readiness assessment and GCP AI strategy consulting. Audit your Google Cloud environment, map highest-ROI Gemini opportunities, and receive a production-ready architecture blueprint in 10 days.',
    url: 'https://kovil.ai/vertex-ai/services/vertex-ai-strategy-readiness',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-vertex-ai.png', width: 1200, height: 630, alt: 'Kovil AI Vertex AI Strategy & Readiness' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vertex AI Strategy & Readiness | Kovil AI Google Cloud Vertex AI',
    description: 'Vertex AI readiness assessment and GCP AI strategy consulting. Audit your Google Cloud environment, map highest-ROI Gemini opportunities, and receive a production-ready architecture blueprint in 10 days.',
    images: ['https://kovil.ai/og-vertex-ai.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Vertex AI Strategy & Readiness',
  description: 'Vertex AI readiness assessment and GCP AI strategy consulting. Audit your Google Cloud environment, map highest-ROI Gemini opportunities, and receive a production-ready architecture blueprint in 10 days.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
  },
  serviceType: 'Vertex AI Implementation',
  url: 'https://kovil.ai/vertex-ai/services/vertex-ai-strategy-readiness',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
  offers: { '@type': 'Offer', description: 'Fixed-price 10-day engagement with clear deliverables and architecture blueprint' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is included in the Vertex AI Strategy & Readiness engagement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The engagement includes a full GCP environment audit covering existing Vertex AI deployments, data estate readiness, IAM posture, and cost review; use case prioritisation ranked by ROI and feasibility; Gemini model selection from the Model Garden; security and compliance review; cost modelling for prioritised use cases; and a detailed agent architecture blueprint with BigQuery ML and Vertex AI Search planning. You receive a board-ready roadmap on Day 10.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the Vertex AI readiness assessment take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The engagement delivers results in 10 days: Days 1–3 cover the GCP environment audit; Days 4–7 cover use case prioritisation, Gemini model selection, and stakeholder alignment; Day 10 is architecture blueprint delivery. You leave with a complete, phased implementation plan ready to execute.',
      },
    },
    {
      '@type': 'Question',
      name: 'We use GCP but have no production Vertex AI agents — is this the right starting point?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. This engagement is designed for organisations with GCP access and budget approval but no production AI agents deployed. We turn your existing GCP environment into a funded activation plan with clear ROI justification, Gemini model selection, and a phased rollout schedule.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you select the right Gemini model for each use case?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We evaluate Gemini Flash, Pro, and Ultra from the Vertex AI Model Garden against each prioritised use case — scoring on latency requirements, context window needs, multimodal capability, and cost per token. The output is a model selection framework with clear rationale for each recommendation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can this engagement help justify Vertex AI investment to leadership?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The architecture blueprint is designed to be board-ready — it includes phased implementation plans, GCP resource and cost requirements, defined success metrics, and ROI projections for each prioritised use case. It gives leadership the confidence to fund Vertex AI development.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Vertex AI', item: 'https://kovil.ai/vertex-ai' },
    { '@type': 'ListItem', position: 3, name: 'Services', item: 'https://kovil.ai/vertex-ai/services' },
    { '@type': 'ListItem', position: 4, name: 'Vertex AI Strategy & Readiness', item: 'https://kovil.ai/vertex-ai/services/vertex-ai-strategy-readiness' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <VertexAIStrategyReadinessPage />
    </>
  )
}
