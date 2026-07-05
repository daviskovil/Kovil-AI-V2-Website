import type { Metadata } from 'next'
import VertexAIPage from '@/src/pages/VertexAIPage'

export const metadata: Metadata = {
  title: 'Google Cloud Vertex AI Implementation Partner — Build AI Agents on GCP',
  description: 'Kovil AI builds production AI agents on Google Cloud Vertex AI — Gemini integration, Agent Builder, Vertex AI Search RAG, BigQuery ML. Fixed-price sprints. 2-week risk-free pilot. New York & Austin.',
  alternates: { canonical: 'https://kovil.ai/vertex-ai' },
  keywords: [
    'Vertex AI',
    'Vertex AI implementation',
    'Gemini integration',
    'Vertex AI Agent Builder',
    'GCP AI agents',
    'Google Cloud AI implementation',
    'Vertex AI consultant',
    'Vertex AI partner',
    'Gemini 2.0 integration',
    'Vertex AI Search RAG',
    'BigQuery ML development',
    'Vertex AI Reasoning Engine',
    'Document AI implementation',
    'enterprise AI agents GCP',
    'Vertex AI implementation partner',
    'Google Cloud AI agents',
    'Vertex AI New York',
    'Vertex AI Austin',
    'GCP AI agent development',
    'Vertex AI services',
    'Vertex AI strategy',
    'production AI GCP',
    'Vertex AI RAG pipeline',
  ],
  openGraph: {
    type: 'website',
    title: 'Google Cloud Vertex AI Implementation Partner — Build AI Agents on GCP | Kovil AI',
    description: 'Build production AI agents on Google Cloud Vertex AI. Gemini integration, Agent Builder, Vertex AI Search RAG, BigQuery ML. Fixed-price sprints. 2-week risk-free pilot.',
    url: 'https://kovil.ai/vertex-ai',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-vertex-ai.png', width: 1200, height: 630, alt: 'Google Cloud Vertex AI Implementation Partner — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Cloud Vertex AI Implementation Partner | Kovil AI',
    description: 'Build production AI agents on GCP. Gemini 2.0, Agent Builder, Vertex AI Search RAG, BigQuery ML. Fixed-price sprints. 2-week risk-free pilot.',
    images: ['https://kovil.ai/og-vertex-ai.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Google Cloud Vertex AI Implementation Services',
  description: 'Kovil AI designs, builds and deploys production AI agents on Google Cloud Vertex AI — covering Gemini 2.0 integration, Vertex AI Agent Builder, Reasoning Engine orchestration, Vertex AI Search RAG pipelines, BigQuery ML, Document AI, and Vertex AI rescue and optimisation. Fixed-price sprints with a 2-week risk-free pilot.',
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
  serviceType: 'Google Cloud Vertex AI Implementation',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/vertex-ai',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Vertex AI Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vertex AI Strategy & Readiness' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gemini Integration & Fine-Tuning' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Agent Builder & Reasoning Engine' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vertex AI Search & RAG Pipeline' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'BigQuery ML & Data Intelligence' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vertex AI Rescue & Optimisation' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Google Cloud Vertex AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Google Cloud Vertex AI is Google's unified AI platform for building, deploying, and scaling AI applications and agents in production. It brings together the Model Garden (150+ foundation models including Gemini 2.0, Claude 3.5, Llama 3.3, and Mistral), Vertex AI Agent Builder for low-code agent creation, Reasoning Engine for complex multi-step orchestration, Vertex AI Search for enterprise RAG, BigQuery ML for data-native modelling, and Document AI for structured extraction — all governed under Google Cloud's enterprise security posture, including VPC Service Controls, IAM, CMEK, and audit logging.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Vertex AI and the Gemini API?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Gemini API (available via Google AI Studio) is a direct API to Gemini models, designed for prototyping and consumer use cases. Vertex AI is the enterprise platform that hosts those same models but adds: VPC Service Controls for network isolation, IAM and CMEK for data governance, audit logs for compliance, Vertex AI Search for grounded retrieval, Agent Builder and Reasoning Engine for production orchestration, Vertex AI Pipelines for MLOps, and Model Monitoring for production observability. For any production enterprise deployment, Vertex AI is the correct choice.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is Vertex AI Agent Builder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Vertex AI Agent Builder is Google Cloud's managed platform for building and deploying AI agents — combining conversational flows, data store grounding via Vertex AI Search, tool calling, and Gemini reasoning in a managed environment. It supports both no-code and code-first development, integrates natively with Dialogflow CX for complex conversation management, and can be deployed as API endpoints, web widgets, or Telephony integrations. Agent Builder is the recommended starting point for customer-facing agent workloads on GCP.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Vertex AI Reasoning Engine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Vertex AI Reasoning Engine is a managed execution environment for deploying custom AI agent logic on Google Cloud. It supports LangChain, LlamaIndex, and custom agent frameworks — running them in a fully managed, scalable, and observable infrastructure. Reasoning Engine is ideal when you need fine-grained control over multi-step agent orchestration, custom tools, complex memory management, or enterprise-grade latency and reliability requirements that go beyond what Agent Builder's managed flows support.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a Vertex AI implementation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused pilot agent scoped to one use case — for example, a RAG search agent over your GCS and BigQuery data — typically takes 2–3 weeks from architecture to production deployment. A full multi-agent system with Reasoning Engine orchestration, BigQuery ML integration, and Vertex AI Search RAG typically runs 6–10 weeks depending on data readiness and enterprise architecture complexity. Kovil AI scopes every engagement in detail before any work begins, so timelines and deliverables are agreed upfront.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Vertex AI Search enable RAG for enterprise agents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Vertex AI Search is Google Cloud's managed enterprise search service — it indexes your data from GCS, BigQuery, Cloud SQL, websites, and custom sources, generates vector embeddings, and supports hybrid retrieval with semantic re-ranking. For RAG, Vertex AI Search acts as the retrieval layer: it surfaces the most relevant document chunks, which are then passed to Gemini as grounding context. The key enterprise advantages are managed infrastructure, native IAM access control (so agents only retrieve data the user is authorised to see), and near-zero latency retrieval-to-generation pipelines.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is BigQuery ML and how does it relate to Vertex AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BigQuery ML allows you to create, train, and run ML models directly in BigQuery using SQL — no data movement required. It supports logistic regression, boosted trees, neural networks, time series forecasting, and integration with Vertex AI AutoML models. In the Vertex AI stack, BigQuery ML complements foundation model agents: structured prediction tasks run in BigQuery ML, while unstructured reasoning and generation tasks use Gemini via Vertex AI. Kovil AI builds unified pipelines where BigQuery ML predictions and Gemini reasoning work together in a single agent response.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Vertex AI handle enterprise security and compliance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vertex AI is built on Google Cloud enterprise security: VPC Service Controls create a perimeter that prevents data exfiltration; IAM roles provide granular access control; Customer-Managed Encryption Keys (CMEK) control encryption at rest; Cloud DLP scans inputs and outputs for sensitive data; and Cloud Audit Logs record every API call for forensics and compliance. Vertex AI supports HIPAA, SOC 2 Type II, ISO 27001, PCI DSS, and FedRAMP High compliance frameworks. Kovil AI configures all security controls from the first sprint.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do we need to be on GCP already to use Vertex AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — Vertex AI is a fully managed cloud service you can provision from a new Google Cloud project in hours. Organisations without an existing GCP footprint can start from zero. That said, organisations already on GCP with BigQuery, GCS, or Cloud SQL get compounding benefits: data is already in the right place for Vertex AI Search and BigQuery ML, and IAM bindings apply consistently. Kovil AI handles GCP environment provisioning and security configuration as part of every engagement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What models are available on Vertex AI Model Garden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "As of 2025, Vertex AI Model Garden offers 150+ models including Google's Gemini 2.0 Flash and Pro, Gemini 1.5 Pro and Flash, Imagen 3, Chirp for speech, Code Gemma, Anthropic's Claude 3.5 Sonnet and Haiku, Meta's Llama 3.3 70B and 3.1 405B, Mistral Large, and Falcon 40B — all accessible under the same IAM, VPC Service Controls, and billing as the rest of your GCP environment. Model Garden models can be deployed to managed online endpoints or used via the Vertex AI SDK.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Vertex AI cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vertex AI pricing depends on services used: Gemini 2.0 Flash is approximately $0.075/1M input tokens and $0.30/1M output tokens (as of 2025); Vertex AI Search runs from approximately $2.50/1,000 search queries; and Vertex AI Pipelines are priced per pipeline run. For a typical production agent, total GCP infrastructure costs range from $600–$4,000/month. Kovil AI provides a detailed cost model as part of every scoping engagement, including multi-month projections.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Kovil AI risk-free pilot for Vertex AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We scope a single high-impact Vertex AI use case, define clear success metrics, and build and deploy it in 2 weeks. If the pilot does not hit your agreed metrics, you pay nothing. The pilot includes GCP environment provisioning and security configuration, agent architecture design, Vertex AI Search or Reasoning Engine setup, evaluation framework with ground truth testing, and 30-day post-launch support. Over 90% of our Vertex AI pilots convert to full production engagements.",
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',       item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Vertex AI',  item: 'https://kovil.ai/vertex-ai' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <VertexAIPage />
    </>
  )
}
