import type { Metadata } from 'next'
import QualityControlVisionAgentPage from '@/src/pages/vertex-ai/operations/QualityControlVisionAgentPage'

export const metadata: Metadata = {
  title: 'Quality Control Vision Agent — Gemini Vision & Vertex AI on GCP | Kovil AI',
  description: 'Computer vision quality inspection using Gemini Vision and Vertex AI — detects defects, classifies issues, and triggers downstream workflows in real time on the production line.',
  alternates: { canonical: 'https://kovil.ai/vertex-ai/operations/quality-control-vision-agent' },
  keywords: ['quality control AI GCP', 'Gemini Vision quality inspection', 'Vertex AI computer vision', 'AI defect detection GCP', 'computer vision manufacturing AI', 'Vertex AI Vision inspection', 'Google Cloud quality control AI', 'Gemini Vision manufacturing', 'AI visual inspection GCP', 'quality control agent Vertex AI', 'GCP defect detection', 'Vertex AI manufacturing inspection'],
  openGraph: {
    type: 'website',
    title: 'Quality Control Vision Agent — Gemini Vision & Vertex AI | Kovil AI',
    description: 'Real-time computer vision quality inspection on Google Cloud. Gemini Vision defect detection, multi-class classification, automated workflow triggers.',
    url: 'https://kovil.ai/vertex-ai/operations/quality-control-vision-agent',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-vertex-ai.png', width: 1200, height: 630, alt: 'Quality Control Vision Agent — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quality Control Vision Agent | Kovil AI Vertex AI',
    description: 'Gemini Vision defect detection on the production line. Real-time quality inspection on Google Cloud.',
    images: ['https://kovil.ai/og-vertex-ai.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Quality Control Vision Agent',
  description: 'Computer vision quality inspection using Gemini Vision and Vertex AI — detects defects, classifies issues, and triggers downstream workflows in real time on the production line.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Vertex AI Implementation',
  url: 'https://kovil.ai/vertex-ai/operations/quality-control-vision-agent',
  areaServed: ['New York', 'Austin', 'United States', 'United Kingdom'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How does Gemini Vision handle quality control inspection?', acceptedAnswer: { '@type': 'Answer', text: 'Gemini Vision is Google\'s multimodal foundation model with native image understanding. For quality control, it analyses product images captured at inspection stations — identifying defect types (scratches, dents, misalignment, colour deviations, foreign objects), classifying severity, and providing a plain-language description of the defect for operator review. Unlike traditional CV models that require thousands of labelled defect examples per class, Gemini Vision can be prompted with defect criteria in natural language and augmented with a small number of reference images, dramatically reducing the time and data required to deploy a new inspection use case.' } },
    { '@type': 'Question', name: 'How fast is real-time inspection inference?', acceptedAnswer: { '@type': 'Answer', text: 'For production line integration, inference latency is a critical constraint. We typically deploy a two-stage pipeline: a lightweight, fine-tuned custom vision model (Vertex AI Custom Training) runs at the edge or on Cloud Run for initial pass/fail classification at < 100ms; Gemini Vision is invoked only on flagged items for detailed defect classification and narration, where latency of 1–3 seconds is acceptable because the item has already been held by the production system. This hybrid architecture delivers real-time throughput at production line speeds (typically 10–200 items/minute) while leveraging Gemini\'s detailed understanding for defect classification.' } },
    { '@type': 'Question', name: 'What imaging hardware and camera systems does this work with?', acceptedAnswer: { '@type': 'Answer', text: 'The vision agent is camera-agnostic at the software level — images are ingested via Cloud Pub/Sub or Cloud Storage. We have integrated with standard GigE Vision industrial cameras from Cognex, Basler, and Teledyne; line scan cameras for continuous material inspection; existing CCTV and IP cameras where resolution is sufficient; and smartphone cameras for lower-volume manual inspection workflows. For new deployments, we specify the optimal camera configuration (resolution, frame rate, lighting) based on your defect types and line speed. Edge hardware (NVIDIA Jetson, Google Coral) can be used where cloud round-trip latency is insufficient.' } },
    { '@type': 'Question', name: 'How does the agent trigger downstream workflows?', acceptedAnswer: { '@type': 'Answer', text: 'When a defect is detected, the agent publishes a structured event to Cloud Pub/Sub that triggers configurable downstream actions: PLC/SCADA signals to divert the defective item from the line; work order creation in your MES or CMMS for operator follow-up; real-time dashboard alerts in Looker Studio showing defect rate, type distribution, and trend; automated quarantine logging in your ERP or WMS; and email/Slack alerts when defect rates exceed configurable thresholds. All inspection events — image, prediction, confidence score, defect class, and triggered actions — are logged to BigQuery for traceability and root cause analysis.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Vertex AI', item: 'https://kovil.ai/vertex-ai' },
    { '@type': 'ListItem', position: 3, name: 'Operations', item: 'https://kovil.ai/vertex-ai/operations' },
    { '@type': 'ListItem', position: 4, name: 'Quality Control Vision Agent', item: 'https://kovil.ai/vertex-ai/operations/quality-control-vision-agent' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <QualityControlVisionAgentPage />
    </>
  )
}
