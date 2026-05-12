import type { Metadata } from 'next'
import VertexAIRescuePage from '@/src/pages/vertex-ai/services/VertexAIRescuePage'

export const metadata: Metadata = {
  title: 'Vertex AI Rescue & Optimisation | Kovil AI Google Cloud Vertex AI',
  description: 'Fix broken or underperforming Vertex AI deployments. We diagnose cost overruns, hallucinations, latency spikes, retrieval failures, and model drift — restoring measurable performance in a two-week sprint.',
  alternates: { canonical: 'https://kovil.ai/vertex-ai/services/vertex-ai-rescue-optimisation' },
  keywords: [
    'Vertex AI rescue',
    'Vertex AI optimisation',
    'fix Vertex AI deployment',
    'Gemini hallucination fix',
    'Vertex AI cost overrun',
    'GCP AI performance optimisation',
    'Vertex AI latency fix',
    'Vertex AI RAG debugging',
    'Gemini deployment issues',
    'Vertex AI model drift',
    'GCP AI cost reduction',
    'Vertex AI monitoring setup',
    'fix underperforming AI GCP',
    'Vertex AI troubleshooting',
    'Gemini response quality fix',
    'Google Cloud AI rescue',
    'Vertex AI token cost fix',
    'GCP AI deployment audit',
  ],
  openGraph: {
    type: 'website',
    title: 'Vertex AI Rescue & Optimisation | Kovil AI Google Cloud Vertex AI',
    description: 'Fix broken or underperforming Vertex AI deployments. We diagnose cost overruns, hallucinations, latency spikes, retrieval failures, and model drift — restoring measurable performance in a two-week sprint.',
    url: 'https://kovil.ai/vertex-ai/services/vertex-ai-rescue-optimisation',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-vertex-ai.png', width: 1200, height: 630, alt: 'Kovil AI Vertex AI Rescue & Optimisation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vertex AI Rescue & Optimisation | Kovil AI Google Cloud Vertex AI',
    description: 'Fix broken or underperforming Vertex AI deployments. We diagnose cost overruns, hallucinations, latency spikes, retrieval failures, and model drift — restoring measurable performance in a two-week sprint.',
    images: ['https://kovil.ai/og-vertex-ai.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Vertex AI Rescue & Optimisation',
  description: 'Fix broken or underperforming Vertex AI deployments. We diagnose cost overruns, hallucinations, latency spikes, retrieval failures, and model drift — restoring measurable performance in a two-week sprint.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
  },
  serviceType: 'Vertex AI Rescue and Optimisation',
  url: 'https://kovil.ai/vertex-ai/services/vertex-ai-rescue-optimisation',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
  offers: { '@type': 'Offer', description: 'Fixed-price two-week sprint with benchmarked improvement, monitoring setup, and operations runbook' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What causes most Vertex AI deployments to underperform?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common root causes are: poor RAG retrieval quality (bad chunking strategy, wrong embedding model, missing hybrid search), inadequate grounding configuration leading to hallucinations, wrong Gemini model tier for the latency or cost requirements, over-provisioned or misconfigured compute resources driving unnecessary spend, and missing monitoring so issues go undetected until they escalate.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the Vertex AI rescue engagement take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The rescue engagement is a fixed two-week sprint: Days 1–4 are the diagnostic phase; Days 5–10 are the remediation build; Day 14 is verified handover with benchmarked improvement, monitoring setup, and runbook delivery. For complex deployments with multiple interacting issues, we scope additional sprints transparently before starting.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you price the rescue engagement and what is included?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The rescue engagement is fixed-price — you know the cost before we start. It includes the full diagnostic audit, all remediation work, benchmarked performance improvement measurement, monitoring and alerting setup, and an operations runbook. There are no hourly rates or open-ended billing. If the issues require more than two weeks, we scope additional work separately with full transparency.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my data stay within GCP during the rescue engagement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We work entirely within your GCP environment — we access your Vertex AI deployments, Cloud Logging, and configuration through your GCP IAM, with no data leaving your GCP perimeter. We operate under a standard NDA and can work within your existing vendor onboarding process.',
      },
    },
    {
      '@type': 'Question',
      name: 'What support is available after the rescue sprint ends?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'After handover, your team operates the improved deployment using the runbook we deliver. If you want ongoing monitoring, optimisation, or continued development, we offer retainer engagements. Most clients use the rescue sprint as a reset point and then optionally engage for ongoing Vertex AI support or additional agent development.',
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
    { '@type': 'ListItem', position: 4, name: 'Vertex AI Rescue & Optimisation', item: 'https://kovil.ai/vertex-ai/services/vertex-ai-rescue-optimisation' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <VertexAIRescuePage />
    </>
  )
}
