import type { Metadata } from 'next'
import CodeGenerationAgentPage from '@/src/pages/vertex-ai/developer-tools/CodeGenerationAgentPage'

export const metadata: Metadata = {
  title: 'Code Generation Agent — Gemini Code Internal Developer Copilot | Kovil AI',
  description: 'Internal developer copilot powered by Gemini Code on Vertex AI — trained on your codebase, architecture docs, and runbooks, deployed in your IDE and developer portals on Google Cloud.',
  alternates: { canonical: 'https://kovil.ai/vertex-ai/developer-tools/code-generation-agent' },
  keywords: ['code generation agent GCP', 'Gemini Code AI', 'developer copilot Vertex AI', 'internal developer copilot GCP', 'Gemini Code developer tool', 'Vertex AI code assistant', 'Google Cloud AI code generation', 'enterprise code copilot GCP', 'Gemini codebase search', 'Vertex AI developer agent', 'Code Gemma enterprise', 'GCP developer tools AI'],
  openGraph: {
    type: 'website',
    title: 'Code Generation Agent — Gemini Code Developer Copilot | Kovil AI',
    description: 'Internal developer copilot on Vertex AI — Gemini Code trained on your codebase, architecture docs, and runbooks. IDE integration and developer portal deployment.',
    url: 'https://kovil.ai/vertex-ai/developer-tools/code-generation-agent',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-vertex-ai.png', width: 1200, height: 630, alt: 'Code Generation Agent — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Code Generation Agent | Kovil AI Vertex AI',
    description: 'Internal developer copilot with Gemini Code on Vertex AI. Trained on your codebase. IDE and developer portal deployment.',
    images: ['https://kovil.ai/og-vertex-ai.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Code Generation Agent',
  description: 'Internal developer copilot powered by Gemini Code on Vertex AI — trained on your codebase, architecture docs, and runbooks, deployed in your IDE and developer portals for production engineering workflows.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Vertex AI Implementation',
  url: 'https://kovil.ai/vertex-ai/developer-tools/code-generation-agent',
  areaServed: ['New York', 'Austin', 'United States', 'United Kingdom'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do you train the copilot on our specific codebase?', acceptedAnswer: { '@type': 'Answer', text: 'We do not fine-tune Gemini on your code — instead, we build a RAG pipeline over your codebase using Vertex AI Search: your repositories are indexed at the function and file level, with semantic embeddings that allow the agent to retrieve the most relevant code context for each query. When a developer asks a question, the agent retrieves the most relevant internal code examples, architecture decision records, and runbook sections, then passes them to Gemini as grounding context. This means the copilot knows your internal patterns, naming conventions, and APIs without requiring expensive fine-tuning — and it stays up to date as your codebase evolves.' } },
    { '@type': 'Question', name: 'Does code or codebase data leave our GCP environment?', acceptedAnswer: { '@type': 'Answer', text: 'No. The entire pipeline runs within your Google Cloud project: code repositories are indexed in Vertex AI Search within your VPC, Gemini inference runs on Vertex AI within your IAM perimeter, and VPC Service Controls prevent data exfiltration. No code, queries, or generated completions are used for Google model training. This is a fundamental difference from consumer coding tools — Vertex AI is a contractually isolated, enterprise-grade environment with data residency guarantees.' } },
    { '@type': 'Question', name: 'What IDEs and developer tools does the copilot integrate with?', acceptedAnswer: { '@type': 'Answer', text: 'We integrate the copilot as a VS Code extension, JetBrains plugin (IntelliJ, PyCharm, WebStorm), or via a REST API that can be consumed by any IDE or developer portal. For internal developer portals built on Backstage or custom React applications, we provide a chat widget component. The copilot supports in-IDE autocompletion, natural language question-answering, code explanation, test generation, and runbook Q&A. All interactions are logged for usage analytics and quality improvement.' } },
    { '@type': 'Question', name: 'What is the typical developer productivity improvement?', acceptedAnswer: { '@type': 'Answer', text: 'Based on enterprise deployments, developers using internal copilots grounded in their own codebase report 25–40% reduction in time spent on codebase navigation and boilerplate generation, and a 30–50% reduction in time searching internal documentation and runbooks. The most significant gains are for onboarding new developers — reducing time-to-first-productive-PR from weeks to days. We measure baseline productivity metrics before deployment and report lift after 30 and 90 days using your existing developer telemetry (PR cycle time, review iteration count, documentation search frequency).' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Vertex AI', item: 'https://kovil.ai/vertex-ai' },
    { '@type': 'ListItem', position: 3, name: 'Developer Tools', item: 'https://kovil.ai/vertex-ai/developer-tools' },
    { '@type': 'ListItem', position: 4, name: 'Code Generation Agent', item: 'https://kovil.ai/vertex-ai/developer-tools/code-generation-agent' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CodeGenerationAgentPage />
    </>
  )
}
