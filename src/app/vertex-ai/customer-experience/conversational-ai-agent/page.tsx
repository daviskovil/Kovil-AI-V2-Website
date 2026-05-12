import type { Metadata } from 'next'
import ConversationalAIAgentPage from '@/src/pages/vertex-ai/customer-experience/ConversationalAIAgentPage'

export const metadata: Metadata = {
  title: 'Conversational AI Agent — Gemini-Powered Customer Agent on GCP | Kovil AI',
  description: 'Production customer-facing AI agent built on Vertex AI Agent Builder — Gemini-powered, grounded in your product and policy knowledge, with seamless human handoff and CRM context.',
  alternates: { canonical: 'https://kovil.ai/vertex-ai/customer-experience/conversational-ai-agent' },
  keywords: ['conversational AI agent GCP', 'Vertex AI conversational agent', 'Gemini customer service agent', 'Vertex AI Agent Builder customer', 'Google Cloud chatbot', 'enterprise conversational AI GCP', 'Dialogflow CX Gemini', 'AI customer service agent GCP', 'Vertex AI customer experience', 'Gemini-powered chatbot enterprise', 'GCP customer service agent', 'Vertex AI contact centre'],
  openGraph: {
    type: 'website',
    title: 'Conversational AI Agent — Vertex AI Agent Builder | Kovil AI',
    description: 'Production customer-facing AI agent on Vertex AI Agent Builder — Gemini-powered, grounded in your knowledge base, with human handoff and CRM integration.',
    url: 'https://kovil.ai/vertex-ai/customer-experience/conversational-ai-agent',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-vertex-ai.png', width: 1200, height: 630, alt: 'Conversational AI Agent — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conversational AI Agent | Kovil AI Vertex AI',
    description: 'Gemini-powered customer agent on Vertex AI Agent Builder. Grounded in your knowledge base. Human handoff. CRM context.',
    images: ['https://kovil.ai/og-vertex-ai.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Conversational AI Agent',
  description: 'Production customer-facing AI agent built on Vertex AI Agent Builder — Gemini-powered, grounded in your product and policy knowledge, with seamless human handoff, CRM context, and multi-channel deployment.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Vertex AI Implementation',
  url: 'https://kovil.ai/vertex-ai/customer-experience/conversational-ai-agent',
  areaServed: ['New York', 'Austin', 'United States', 'United Kingdom'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the difference between Vertex AI Agent Builder and Dialogflow CX?', acceptedAnswer: { '@type': 'Answer', text: 'Dialogflow CX is Google Cloud\'s conversation management platform — it handles conversation flow, state management, and intent classification. Vertex AI Agent Builder is the higher-level managed agent platform that uses Dialogflow CX for conversation management but adds Gemini reasoning, Vertex AI Search grounding, data store connections, and a managed agent runtime. For enterprise customer-facing agents, we typically build on Agent Builder (which includes Dialogflow CX) so you get both Gemini\'s reasoning capability and Dialogflow\'s mature conversation flow management. We use standalone Dialogflow CX only when you have an existing CX investment to preserve.' } },
    { '@type': 'Question', name: 'How does the agent stay grounded in our product knowledge?', acceptedAnswer: { '@type': 'Answer', text: 'We connect the Vertex AI Agent Builder agent to your knowledge base via a Vertex AI Search data store — indexing your product documentation, FAQs, policy documents, and support articles. When a user asks a question, the agent retrieves the most relevant knowledge chunks via semantic search and passes them to Gemini as grounding context before generating a response. This means answers are always sourced from your approved content, with citations, rather than generated from the model\'s general training. Knowledge updates are near-real-time — when you update a document in your GCS bucket, it is re-indexed automatically.' } },
    { '@type': 'Question', name: 'How does human handoff work?', acceptedAnswer: { '@type': 'Answer', text: 'The agent monitors conversation signals — user sentiment, intent escalation triggers, repeated failed resolution attempts, or explicit escalation requests — and initiates a structured handoff to a human agent. We integrate with your existing contact centre platform (Salesforce Service Cloud, Zendesk, ServiceNow, Intercom, or custom) via API, passing the full conversation transcript, extracted context fields (order number, issue category, customer tier), and a Gemini-generated handoff summary so the human agent never asks the customer to repeat themselves. Escalation thresholds are fully configurable.' } },
    { '@type': 'Question', name: 'What channels can the conversational agent be deployed on?', acceptedAnswer: { '@type': 'Answer', text: 'Vertex AI Agent Builder agents can be deployed across: website chat widget (embedded JavaScript), REST API for custom integrations, WhatsApp Business API, Google Chat, Slack, Twilio (SMS and voice via CCAI), and Telephony integrations via CCAI platform. We typically deploy to web and API in the first sprint, with additional channels added in subsequent sprints based on your channel priorities. All channels share a single agent backend and knowledge base.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Vertex AI', item: 'https://kovil.ai/vertex-ai' },
    { '@type': 'ListItem', position: 3, name: 'Customer Experience', item: 'https://kovil.ai/vertex-ai/customer-experience' },
    { '@type': 'ListItem', position: 4, name: 'Conversational AI Agent', item: 'https://kovil.ai/vertex-ai/customer-experience/conversational-ai-agent' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ConversationalAIAgentPage />
    </>
  )
}
