import type { Metadata } from 'next'
import RealTimeFraudPage from '@/src/pages/ai-workflow-automation-library/RealTimeFraudPage'

export const metadata: Metadata = {
  title: 'Real-Time Fraud Detection — FinTech AI Pipeline',
  description: 'ML-powered real-time fraud detection with sub-80ms decision latency. XGBoost scoring, configurable rule engine, SHAP explainability, analyst queue, and PCI-DSS compliant audit logging.',
  alternates: { canonical: 'https://kovil.ai/ai-workflow-automation-library/real-time-fraud-detection' },
  openGraph: {
    type: 'website',
    title: 'Real-Time Fraud Detection — FinTech AI Pipeline | Kovil AI',
    description: 'XGBoost fraud scoring in <80ms. 94% detection rate, 0.1% false positives, full regulatory audit trail.',
    url: 'https://kovil.ai/ai-workflow-automation-library/real-time-fraud-detection',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Real-Time Fraud Detection' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real-Time Fraud Detection — FinTech AI Pipeline | Kovil AI',
    description: 'XGBoost fraud scoring in <80ms. 94% detection rate, 0.1% false positives, full regulatory audit trail.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Real-Time Fraud Detection with ML — How It Works',
  description: 'XGBoost ML model scores transactions in under 80ms. A rule engine applies configurable thresholds. SHAP explains every decision. Analyst queue handles flagged transactions.',
  tool: ['XGBoost', 'Python', 'Redis', 'Kafka', 'SHAP', 'PostgreSQL'],
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Transaction ingestion', text: 'Transaction event published to Kafka. Feature engineering pipeline enriches with historical velocity, device fingerprint, and behavioural signals.' },
    { '@type': 'HowToStep', position: 2, name: 'XGBoost scoring', text: 'Enriched feature vector scored by XGBoost model. Score returned in <80ms via Redis cache. 94% detection rate, 0.1% false positive rate.' },
    { '@type': 'HowToStep', position: 3, name: 'Rule engine evaluation', text: 'Configurable rule engine applies velocity limits, geography rules, and merchant category logic on top of the ML score.' },
    { '@type': 'HowToStep', position: 4, name: 'Decision & response', text: 'Low-risk transactions approved. High-risk blocked or step-up challenged. Mid-range queued for analyst review.' },
    { '@type': 'HowToStep', position: 5, name: 'Audit trail & explainability', text: 'SHAP values generate a plain-language explanation for every decision. Full PCI-DSS compliant audit log written to PostgreSQL.' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Real-Time Fraud Detection AI Pipeline',
  description: 'ML-powered real-time fraud detection with sub-80ms latency, XGBoost scoring, SHAP explainability, and PCI-DSS compliant audit logging.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  serviceType: 'FinTech AI Workflow Automation',
  url: 'https://kovil.ai/ai-workflow-automation-library/real-time-fraud-detection',
  areaServed: { '@type': 'Country', name: 'United States' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the latency of the fraud detection decision?', acceptedAnswer: { '@type': 'Answer', text: 'The XGBoost model returns a fraud score in under 80ms end-to-end, including feature enrichment from Redis cache. Peak throughput is 10,000+ transactions per second on a standard deployment.' } },
    { '@type': 'Question', name: 'How does SHAP explainability work in fraud detection?', acceptedAnswer: { '@type': 'Answer', text: 'SHAP (SHapley Additive exPlanations) breaks down every fraud score into contributing factors — e.g. "high velocity from new device contributed 0.38 to the fraud score." This satisfies regulatory requirements for explainable AI decisions.' } },
    { '@type': 'Question', name: 'Is this PCI-DSS compliant?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The pipeline is designed with PCI-DSS compliance from the ground up — no raw card data stored in the ML pipeline, full audit logging, encryption at rest and in transit, and access controls aligned with PCI requirements.' } },
    { '@type': 'Question', name: 'How long does it take to build and deploy?', acceptedAnswer: { '@type': 'Answer', text: 'A production fraud detection pipeline typically takes 6–10 weeks — including model training on your historical transaction data, feature engineering, rule engine configuration, analyst tooling, and compliance review.' } },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'AI Workflow Library', item: 'https://kovil.ai/ai-workflow-automation-library' },
    { '@type': 'ListItem', position: 3, name: 'Real-Time Fraud Detection', item: 'https://kovil.ai/ai-workflow-automation-library/real-time-fraud-detection' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="pt-20"><RealTimeFraudPage /></div>
    </>
  )
}
