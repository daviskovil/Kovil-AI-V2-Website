import type { Metadata } from 'next'
import ArchitectFirstVertexAgentPage from '@/src/pages/vertex-ai/playbook/ArchitectFirstVertexAgentPage'

export const metadata: Metadata = {
  title: 'How to Architect Your First Vertex AI Agent — 12-Question Checklist | Kovil AI',
  description: 'The 12 decisions you must make before writing a single line of Vertex AI code — model selection, orchestration strategy, RAG vs fine-tuning, security posture, and evaluation framework.',
  alternates: { canonical: 'https://kovil.ai/vertex-ai/playbook/architect-your-first-vertex-ai-agent' },
  keywords: ['Vertex AI agent architecture', 'how to build Vertex AI agent', 'Gemini model selection', 'Agent Builder vs Reasoning Engine', 'Vertex AI agent checklist', 'Gemini Flash vs Pro', 'GCP AI agent design', 'RAG vs fine-tuning Vertex AI', 'Vertex AI security checklist', 'first Vertex AI agent guide', 'Kovil AI Vertex AI playbook', 'GCP AI agent architecture', 'Vertex AI orchestration', 'LLM agent architecture GCP'],
  openGraph: { type: 'article', title: 'Architect Your First Vertex AI Agent — Kovil AI Playbook', description: '12-question pre-build checklist. Gemini model selection, Agent Builder vs Reasoning Engine, RAG vs fine-tuning. Complete architecture guide for Vertex AI agents.', url: 'https://kovil.ai/vertex-ai/playbook/architect-your-first-vertex-ai-agent', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-vertex-ai.png', width: 1200, height: 630, alt: 'Architect Your First Vertex AI Agent — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'Architect Your First Vertex AI Agent | Kovil AI', description: '12-question checklist. Gemini model selection. Agent Builder vs Reasoning Engine. Full architecture guide.', images: ['https://kovil.ai/og-vertex-ai.png'] },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'How to Architect Your First Vertex AI Agent: A Practitioner\'s Checklist',
  description: 'The 12 decisions you must make before writing a single line of Vertex AI code — model selection, orchestration strategy, RAG vs fine-tuning, security posture, and evaluation framework.',
  author: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  url: 'https://kovil.ai/vertex-ai/playbook/architect-your-first-vertex-ai-agent',
  image: 'https://kovil.ai/og-vertex-ai.png',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://kovil.ai/vertex-ai/playbook/architect-your-first-vertex-ai-agent' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Should I start with Gemini Flash or Gemini Pro for my first Vertex AI agent?', acceptedAnswer: { '@type': 'Answer', text: 'Start with Gemini 2.0 Flash for the vast majority of agent tasks. It is 10x cheaper than Pro, has 1M token context, full tool-calling support, and handles most enterprise use cases — document Q&A, customer support, data extraction, code generation. Graduate to Gemini Pro only when you need complex multi-step reasoning over very long documents or ambiguous instructions that Flash consistently mishandles. Run both on your evaluation dataset before committing.' } },
    { '@type': 'Question', name: 'When should I use Vertex AI Agent Builder vs Reasoning Engine?', acceptedAnswer: { '@type': 'Answer', text: 'Use Agent Builder when you need a production-grade agent with a built-in datastore, integrated Vertex AI Search grounding, and a managed runtime with Google-maintained infrastructure — ideal for RAG agents grounded in your own documents. Use Reasoning Engine (formerly known as Vertex AI Extensions) when you need programmatic multi-agent orchestration, custom tool chains in Python, or LangChain/LangGraph workflows with fine-grained control over the execution logic. Most greenfield agents start on Agent Builder and graduate to Reasoning Engine when they need custom orchestration.' } },
    { '@type': 'Question', name: 'How do I handle IAM permissions for a Vertex AI agent that accesses BigQuery and Cloud Storage?', acceptedAnswer: { '@type': 'Answer', text: 'Always use Workload Identity Federation or a dedicated service account — never user credentials or API keys stored in code. The service account should have the minimum required roles: roles/bigquery.dataViewer on specific datasets (not the project), roles/storage.objectViewer on specific buckets (not all storage), and roles/aiplatform.user for Vertex AI model invocations. Attach this service account to your Cloud Run service or GKE workload. Audit permissions quarterly with IAM Recommender to catch privilege creep.' } },
    { '@type': 'Question', name: 'What is the most common architecture mistake when building a first Vertex AI RAG agent?', acceptedAnswer: { '@type': 'Answer', text: 'The most common mistake is not chunking documents correctly before indexing into Vertex AI Search. Agents trained on poorly chunked data retrieve irrelevant context, causing hallucinations even with grounding enabled. Best practice: use overlapping chunks of 500–800 tokens with 15% overlap, extract document metadata (title, section, page number) as filterable fields, and test retrieval quality independently before testing the full agent. The second most common mistake is not setting a confidence threshold on retrieved results — low-confidence retrievals should be surfaced to the user as \"I couldn\'t find a definitive answer\" rather than hallucinated responses.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Vertex AI', item: 'https://kovil.ai/vertex-ai' },
    { '@type': 'ListItem', position: 3, name: 'Playbook', item: 'https://kovil.ai/vertex-ai/playbook' },
    { '@type': 'ListItem', position: 4, name: 'Architect Your First Vertex AI Agent', item: 'https://kovil.ai/vertex-ai/playbook/architect-your-first-vertex-ai-agent' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ArchitectFirstVertexAgentPage />
    </>
  )
}
