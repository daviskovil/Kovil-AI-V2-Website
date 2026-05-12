import type { Metadata } from 'next'
import PersonalisationEnginePage from '@/src/pages/vertex-ai/customer-experience/PersonalisationEnginePage'

export const metadata: Metadata = {
  title: 'Personalisation Engine — Real-Time AI Recommendations on GCP | Kovil AI',
  description: 'Real-time recommendation and personalisation using Gemini embeddings and user signal pipelines on Google Cloud — surface the right product, content, or offer at the right moment, at scale.',
  alternates: { canonical: 'https://kovil.ai/vertex-ai/customer-experience/personalisation-engine' },
  keywords: ['personalisation engine GCP', 'Vertex AI recommendations', 'Gemini embeddings personalisation', 'Google Cloud recommendation engine', 'real-time personalisation AI', 'Vertex AI personalisation', 'GCP recommendation system', 'Gemini embedding recommendations', 'AI personalisation platform GCP', 'Vertex AI customer personalisation', 'Google Cloud product recommendations', 'Bigtable recommendations GCP'],
  openGraph: {
    type: 'website',
    title: 'Personalisation Engine — Gemini Embeddings & Real-Time Recommendations | Kovil AI',
    description: 'Real-time product, content, and offer personalisation using Gemini embeddings on Google Cloud. User-level signal capture. Sub-100ms inference at scale.',
    url: 'https://kovil.ai/vertex-ai/customer-experience/personalisation-engine',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-vertex-ai.png', width: 1200, height: 630, alt: 'Personalisation Engine — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personalisation Engine | Kovil AI Vertex AI',
    description: 'Real-time recommendations using Gemini embeddings on GCP. Surface the right product, content, or offer at the right moment.',
    images: ['https://kovil.ai/og-vertex-ai.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Personalisation Engine',
  description: 'Real-time recommendation and personalisation using Gemini embeddings and user signal pipelines on Google Cloud — surface the right product, content, or offer at the right moment, at scale.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Vertex AI Implementation',
  url: 'https://kovil.ai/vertex-ai/customer-experience/personalisation-engine',
  areaServed: ['New York', 'Austin', 'United States', 'United Kingdom'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How does Gemini embeddings power personalisation?', acceptedAnswer: { '@type': 'Answer', text: 'Gemini\'s text embedding model converts product descriptions, content, and user interaction signals into dense vector representations that capture semantic meaning. We compute embeddings for your entire product or content catalogue and store them in a vector index (AlloyDB AI or Vertex AI Matching Engine). At inference time, a user\'s interaction history is embedded into the same space and the nearest-neighbour products or content items are retrieved as recommendations. Because embeddings capture meaning rather than keywords, the recommendations are contextually relevant even for new products or users with sparse history.' } },
    { '@type': 'Question', name: 'How does the system handle cold-start for new users?', acceptedAnswer: { '@type': 'Answer', text: 'Cold-start — when a new user has no interaction history — is handled via a hybrid approach: session signals captured within the first few interactions (dwell time, scroll depth, click patterns) are used to build a lightweight user vector in real time using Bigtable and Pub/Sub. For completely new users with zero signals, we fall back to contextual recommendations based on entry source, device type, and time-of-day signals, plus popularity-based recommendations within the relevant category. The cold-start period typically resolves within 3–5 user interactions as the real-time signal pipeline accumulates sufficient data.' } },
    { '@type': 'Question', name: 'What is the latency of real-time recommendations?', acceptedAnswer: { '@type': 'Answer', text: 'For real-time recommendation inference — retrieving top-K recommendations for a given user and context — the target is under 100ms end-to-end at p99. We achieve this using pre-computed user embeddings updated asynchronously in Bigtable, approximate nearest-neighbour search on Vertex AI Matching Engine (which supports < 20ms ANN retrieval at scale), and Cloud Run for the recommendation serving layer. For latency-sensitive contexts such as homepage and product detail pages, recommendations are pre-fetched and cached at session start.' } },
    { '@type': 'Question', name: 'How do we measure whether the personalisation engine is working?', acceptedAnswer: { '@type': 'Answer', text: 'We implement a full A/B testing framework as part of every personalisation deployment: a control group receives the current (non-personalised or baseline) experience, while treatment groups receive personalised recommendations. We measure click-through rate, conversion rate, average order value, revenue per session, and recommendation diversity. Statistical significance is calculated automatically, and results are surfaced in a BigQuery ML-backed Looker Studio dashboard. We typically run the initial A/B test for 2 weeks and present lift results at the end of the pilot.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Vertex AI', item: 'https://kovil.ai/vertex-ai' },
    { '@type': 'ListItem', position: 3, name: 'Customer Experience', item: 'https://kovil.ai/vertex-ai/customer-experience' },
    { '@type': 'ListItem', position: 4, name: 'Personalisation Engine', item: 'https://kovil.ai/vertex-ai/customer-experience/personalisation-engine' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PersonalisationEnginePage />
    </>
  )
}
