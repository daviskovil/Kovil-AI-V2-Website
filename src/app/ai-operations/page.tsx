import type { Metadata } from 'next'
import AIOperationsPage from '@/src/pages/AIOperationsPage'

export const metadata: Metadata = {
  title: 'AI Operations — Monitored, Optimised & Governed AI in Production | Kovil AI',
  description: 'Kovil AI operates your production AI systems so they never drift, spiral in cost, or fail compliance audits. Model monitoring, drift detection, token cost optimisation, and audit logging — from $2,000/month. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/ai-operations' },
  keywords: [
    'AI operations',
    'AI ops',
    'LLMOps',
    'managed AI operations',
    'AI model monitoring',
    'model drift detection',
    'AI production monitoring',
    'token cost optimisation',
    'AI compliance logging',
    'RAG operations',
    'AI system reliability',
    'managed LLM service',
    'AI observability',
    'AI incident response',
    'AI maintenance service',
    'production AI management',
    'AI operations Texas',
    'AI operations Austin',
  ],
  openGraph: {
    type: 'website',
    title: 'AI Operations — Monitored, Optimised & Governed AI in Production | Kovil AI',
    description: 'Kovil AI operates your production AI systems so they never drift, spiral in cost, or fail compliance audits. Managed AI operations from $2,000/month. 2-week risk-free trial.',
    url: 'https://kovil.ai/ai-operations',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'AI Operations — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Operations — Monitored, Optimised & Governed | Kovil AI',
    description: 'Managed AI operations from $2,000/month. Model monitoring, drift detection, cost optimisation, compliance logging. 2-week risk-free trial.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Operations',
  description: 'Kovil AI operates production AI systems as a managed service — continuous model performance monitoring, drift detection and remediation, token cost optimisation, compliance audit logging, and data pipeline management. From $2,000/month with a 2-week risk-free trial.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: '734 Franklin Ave',
        addressLocality: 'Garden City',
        addressRegion: 'NY',
        postalCode: '11530',
        addressCountry: 'US',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: '1401 Lavaca Street, Unit #7259',
        addressLocality: 'Austin',
        addressRegion: 'TX',
        postalCode: '78701',
        addressCountry: 'US',
      },
    ],
    contactPoint: { '@type': 'ContactPoint', contactType: 'Sales', url: 'https://kovil.ai/contact' },
  },
  serviceType: 'AI Operations',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/ai-operations',
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '2000',
    highPrice: '50000',
    priceCurrency: 'USD',
    description: 'Three tiers: Maintain ($2,000–$4,000/mo), Operate ($8,000–$15,000/mo), Accelerate ($25,000–$50,000/mo). 2-week risk-free trial. No lock-in after initial term.',
    url: 'https://kovil.ai/ai-operations',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Operations Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Model Performance Monitoring & Alerting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Model Drift Detection & Remediation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Token Cost Optimisation Sprints' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'RAG Index & Data Pipeline Management' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Compliance Audit Logging' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Incident Response & SLA Management' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What exactly does AI Operations cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI Operations is the ongoing engineering work required to keep AI systems healthy in production: model performance monitoring, drift detection and remediation, token cost optimisation, compliance and audit logging, data pipeline maintenance, version management for model updates, and continuous improvement. It is the discipline that prevents working AI from silently degrading over time.',
      },
    },
    {
      '@type': 'Question',
      name: 'We built our AI system internally — can Kovil AI operate it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Kovil AI operates AI systems regardless of who built them. The onboarding process documents the current architecture, establishes baseline performance metrics, instruments monitoring, and configures alerting thresholds within the first two weeks. Systems built on LangChain, LlamaIndex, CrewAI, OpenAI APIs, Anthropic Claude, Azure OpenAI, and custom fine-tuned models are all supported.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between the Maintain, Operate, and Accelerate tiers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Maintain ($2,000–$4,000/month) covers core monitoring, alerting, and incident response — the baseline that keeps your system from breaking silently. Operate ($8,000–$15,000/month) adds proactive optimisation: cost reduction, latency improvement, data pipeline management, and monthly improvement sprints. Accelerate ($25,000–$50,000/month) is a full embedded operations team: dedicated engineering hours, continuous model evaluation, compliance reporting, and strategic AI roadmap advisory.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Kovil AI handle AI compliance and audit requirements?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kovil AI instruments structured audit logging for every model inference: input hash, output hash, latency, token cost, model version, and user context. For regulated industries, monthly compliance reports mapping AI systems against applicable frameworks (SOC 2, HIPAA-adjacent, financial services AI governance) are produced. Guardrails libraries for open-source model deployments and PII masking for data that should not enter LLM context are also implemented.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does model drift detection mean in practice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Model drift means an AI system starts giving worse outputs than it did at launch — often because the real-world data it operates on has changed, even though the model weights have not. Kovil AI detects drift by monitoring output quality metrics (accuracy, coherence, hallucination rate) against production data weekly, comparing against the baseline established at launch. When drift is detected, the cause is diagnosed — data distribution shift, retrieval index staleness, or prompt template mismatch — and remediated within the agreed SLA.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a minimum commitment for AI Operations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Maintain tier requires a 3-month minimum to allow proper onboarding, baseline establishment, and monitoring configuration. Operate and Accelerate tiers have a 6-month minimum. There are no lock-in contracts beyond the initial term — month-to-month after that. Every engagement begins with a free 2-week onboarding audit regardless of tier.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',          item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'AI Operations', item: 'https://kovil.ai/ai-operations' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-20"><AIOperationsPage /></div>
    </>
  )
}
