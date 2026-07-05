import type { Metadata } from 'next'
import VertexAIVsGeminiAPIPage from '@/src/pages/vertex-ai/playbook/VertexAIVsGeminiAPIPage'

export const metadata: Metadata = {
  title: 'Vertex AI vs Gemini API: Enterprise Agent Differences on GCP',
  description: 'A technical breakdown of the differences — data residency, security controls, model management, grounding capabilities, SLA, and pricing — with a decision framework for enterprise teams.',
  alternates: { canonical: 'https://kovil.ai/vertex-ai/playbook/vertex-ai-vs-gemini-api' },
  keywords: ['Vertex AI vs Gemini API', 'Gemini API enterprise', 'Vertex AI enterprise features', 'GCP AI data residency', 'Vertex AI VPC Service Controls', 'Vertex AI vs Gemini differences', 'Gemini API migration Vertex AI', 'Vertex AI CMEK', 'Vertex AI SLA', 'Gemini fine-tuning Vertex AI', 'GCP AI security', 'Vertex AI pricing vs Gemini API', 'Kovil AI Vertex AI', 'enterprise LLM Google Cloud'],
  openGraph: { type: 'article', title: 'Vertex AI vs Gemini API: What Changes for Enterprise Agents on GCP?', description: 'Data residency, VPC Service Controls, model management, fine-tuning, SLA differences. Decision framework with migration path from Gemini API to Vertex AI.', url: 'https://kovil.ai/vertex-ai/playbook/vertex-ai-vs-gemini-api', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-vertex-ai.png', width: 1200, height: 630, alt: 'Vertex AI vs Gemini API — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'Vertex AI vs Gemini API: Enterprise Differences | Kovil AI', description: 'Data residency, VPC controls, fine-tuning, SLA. Full technical comparison with migration guide.', images: ['https://kovil.ai/og-vertex-ai.png'] },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Vertex AI vs Gemini API: What Actually Changes When You Build Enterprise Agents on GCP?',
  description: 'A technical breakdown of the differences between Vertex AI and the Gemini API — data residency, security controls, model management, grounding, SLA, and pricing — with a decision framework for enterprise teams.',
  author: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  url: 'https://kovil.ai/vertex-ai/playbook/vertex-ai-vs-gemini-api',
  image: 'https://kovil.ai/og-vertex-ai.png',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://kovil.ai/vertex-ai/playbook/vertex-ai-vs-gemini-api' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Does Vertex AI guarantee data residency for Gemini model calls?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. When you use Gemini through Vertex AI, you specify a GCP region (e.g., us-central1, europe-west4) and model inference stays within that region. This is a hard requirement for GDPR compliance, HIPAA Business Associates Agreements, and most financial services regulatory frameworks. The public Gemini API routes traffic globally with no regional guarantee — requests may be processed in any Google data centre. For any enterprise application handling regulated data, Vertex AI regional endpoints are non-negotiable.' } },
    { '@type': 'Question', name: 'Can I use VPC Service Controls with Vertex AI to prevent data exfiltration?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, and you should. VPC Service Controls create a security perimeter around Vertex AI, BigQuery, Cloud Storage, and other GCP services. Any API call that crosses the perimeter boundary — including requests from outside the perimeter attempting to access your Vertex AI endpoints — is blocked. This prevents data exfiltration even in the event of a compromised service account. Configure your access policy to include all services that the agent touches: Vertex AI, Cloud Storage (for documents), BigQuery (for grounding data), and Secret Manager. The Gemini API has no VPC Service Controls equivalent.' } },
    { '@type': 'Question', name: 'How much work is it to migrate from the Gemini API to Vertex AI?', acceptedAnswer: { '@type': 'Answer', text: 'The code changes are minor — roughly 1–2 days of engineering work. You change the client initialisation from google-generativeai to google-cloud-aiplatform, update the model endpoint format, and add GCP project and region configuration. The larger effort is the infrastructure setup: enabling the Vertex AI API, configuring IAM service accounts with appropriate roles, setting up VPC Service Controls if required, and configuring CMEK if your policy requires customer-managed encryption. Budget 1–2 weeks total for a production-grade migration including testing and security review.' } },
    { '@type': 'Question', name: 'Is Vertex AI more expensive than the Gemini API?', acceptedAnswer: { '@type': 'Answer', text: 'At the same model and token volume, per-token pricing is identical between Vertex AI and the Gemini API for most Gemini models. The cost difference comes from committed use discounts available on Vertex AI (up to 20% for 1-year commitments), and the cost of additional GCP infrastructure: VPC, Cloud NAT, Secret Manager, and monitoring. For low-volume prototypes, the Gemini API is cheaper to operate because it has no infrastructure overhead. For sustained production workloads above roughly 50M tokens/month, Vertex AI with committed use is typically cheaper or equivalent, plus you gain enterprise SLA, security controls, and model monitoring that would cost separately otherwise.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Vertex AI', item: 'https://kovil.ai/vertex-ai' },
    { '@type': 'ListItem', position: 3, name: 'Playbook', item: 'https://kovil.ai/vertex-ai/playbook' },
    { '@type': 'ListItem', position: 4, name: 'Vertex AI vs Gemini API', item: 'https://kovil.ai/vertex-ai/playbook/vertex-ai-vs-gemini-api' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <VertexAIVsGeminiAPIPage />
    </>
  )
}
