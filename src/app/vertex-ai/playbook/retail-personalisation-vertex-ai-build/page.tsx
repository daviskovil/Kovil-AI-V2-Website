import type { Metadata } from 'next'
import RetailPersonalisationVertexBuildPage from '@/src/pages/vertex-ai/playbook/RetailPersonalisationVertexAIBuildPage'

export const metadata: Metadata = {
  title: 'From 6-Hour Manual Content Review to 17 Minutes: Vertex AI Build Case Study | Kovil AI',
  description: 'Step-by-step walkthrough of a content intelligence deployment — Gemini Vision integration, Vertex AI Search, content tagging pipeline, and GCP security configuration for a global streaming platform.',
  alternates: { canonical: 'https://kovil.ai/vertex-ai/playbook/retail-personalisation-vertex-ai-build' },
  keywords: ['Vertex AI content intelligence', 'Gemini Vision content tagging', 'Vertex AI Search streaming', 'Recommendations AI GCP', 'content personalisation Vertex AI', 'Gemini 2.0 Flash Vision case study', 'BigQuery content metadata', 'GCP streaming platform AI', 'Vertex AI personalisation', 'content discovery AI', 'Kovil AI Vertex AI case study', 'GCP media AI pipeline', 'Pub Sub content pipeline', 'Cloud Run AI agent'],
  openGraph: { type: 'article', title: 'From 6 Hours to 17 Minutes: Vertex AI Content Intelligence Build | Kovil AI', description: 'Full case study: how we deployed Gemini Vision, Vertex AI Search and Recommendations AI for a 340-person streaming platform — 94% content discovery improvement, 31% engagement uplift.', url: 'https://kovil.ai/vertex-ai/playbook/retail-personalisation-vertex-ai-build', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-vertex-ai.png', width: 1200, height: 630, alt: 'Vertex AI Streaming Platform Build — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'From 6 Hours to 17 Minutes: Vertex AI Build Case Study | Kovil AI', description: 'Gemini Vision + Vertex AI Search + Recommendations AI. 94% content discovery improvement. Full architecture walkthrough.', images: ['https://kovil.ai/og-vertex-ai.png'] },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'From 6-Hour Manual Content Review to 17 Minutes: A Vertex AI Build for a Global Streaming Platform',
  description: 'Step-by-step walkthrough of a content intelligence deployment — Gemini Vision integration, Vertex AI Search, content tagging pipeline, and GCP security configuration for a 340-person streaming platform.',
  author: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  url: 'https://kovil.ai/vertex-ai/playbook/retail-personalisation-vertex-ai-build',
  image: 'https://kovil.ai/og-vertex-ai.png',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://kovil.ai/vertex-ai/playbook/retail-personalisation-vertex-ai-build' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How does Gemini Vision handle video content for metadata tagging?', acceptedAnswer: { '@type': 'Answer', text: 'Gemini 2.0 Flash Vision processes video indirectly — you extract frames using the Video Intelligence API (scene detection mode) at roughly 1 frame per scene change, then submit those frames alongside the video description and existing metadata to Gemini as a multimodal prompt. For trailers up to 3 minutes, we typically extract 8–15 key frames. Gemini then returns structured JSON with genre tags, mood descriptors, target demographic signals, content rating indicators, and similar content attributes — all with confidence scores. The whole process runs in under 90 seconds per content piece on Cloud Run.' } },
    { '@type': 'Question', name: 'How did you handle the cold-start problem for new content with no viewing history?', acceptedAnswer: { '@type': 'Answer', text: 'Cold-start is the hardest personalisation problem. Our approach used three layers: (1) Content-based similarity — Gemini-generated embeddings for new content are compared against the existing catalogue, and new content inherits recommendation weight from its nearest semantic neighbours. (2) Editorial warm-start — content team curates 10 "seed" user profiles for each new piece on upload, giving Recommendations AI initial signal. (3) Contextual fallback — users with no history see recommendations based purely on content attributes matching their demographic segment rather than individual behaviour. This reduced cold-start failure rate (no recommendation surfaced) from 23% to 4%.' } },
    { '@type': 'Question', name: 'What GCP services were required for regulatory compliance in this build?', acceptedAnswer: { '@type': 'Answer', text: 'The platform operated in multiple regulatory jurisdictions. The key compliance controls were: Customer-Managed Encryption Keys (CMEK) via Cloud KMS for all BigQuery datasets and Cloud Storage buckets containing user viewing data. VPC Service Controls perimeter encompassing Vertex AI, BigQuery, Cloud Storage, and Secret Manager — preventing any data from crossing the perimeter without explicit allow-listing. Data residency constraints enforced at the organisation policy level (constraints/gcp.resourceLocations) restricting all resources to the client\'s approved regions. Cloud Audit Logs capturing every API call to BigQuery and Vertex AI, forwarded to a locked Cloud Storage bucket with 7-year retention.' } },
    { '@type': 'Question', name: 'What was the most technically challenging part of this build?', acceptedAnswer: { '@type': 'Answer', text: 'The hardest problem was maintaining <100ms serving latency for personalised recommendations at peak load (Friday evenings, new content drop days). The architecture that solved it: pre-compute recommendation candidates for each user segment every 4 hours using Recommendations AI batch predictions, cache the top-50 candidates per user in Memorystore (Redis), and serve from cache at the API layer with real-time re-ranking using a lightweight BigQuery ML model that incorporates the user\'s last 3 interactions. This eliminated cold Vertex AI API calls on the critical path entirely. The Recommendations AI batch job processes the full user base in approximately 12 minutes, well within the 4-hour refresh window.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Vertex AI', item: 'https://kovil.ai/vertex-ai' },
    { '@type': 'ListItem', position: 3, name: 'Playbook', item: 'https://kovil.ai/vertex-ai/playbook' },
    { '@type': 'ListItem', position: 4, name: 'Retail Personalisation Vertex AI Build', item: 'https://kovil.ai/vertex-ai/playbook/retail-personalisation-vertex-ai-build' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <RetailPersonalisationVertexBuildPage />
    </>
  )
}
