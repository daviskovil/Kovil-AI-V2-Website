import type { Metadata } from 'next'
import ContactCentreAIPage from '@/src/pages/vertex-ai/customer-experience/ContactCentreAIPage'

export const metadata: Metadata = {
  title: 'Contact Centre AI — Vertex AI & CCAI Implementation | Kovil AI',
  description: 'AI agents that handle 60–80% of contact centre queries autonomously — integrated with your CRM, knowledge base, and escalation workflows via Google Cloud CCAI and Vertex AI.',
  alternates: { canonical: 'https://kovil.ai/vertex-ai/customer-experience/contact-centre-ai' },
  keywords: ['contact centre AI GCP', 'Google Cloud CCAI', 'Vertex AI contact centre', 'CCAI implementation', 'AI contact centre agent', 'Dialogflow CX contact centre', 'Google Cloud contact centre', 'AI call centre automation GCP', 'Vertex AI CCAI partner', 'contact centre automation AI', 'CCAI Gemini integration', 'Google CCAI implementation partner'],
  openGraph: {
    type: 'website',
    title: 'Contact Centre AI — CCAI & Vertex AI Implementation | Kovil AI',
    description: 'AI agents handling 60–80% of contact centre queries autonomously via Google Cloud CCAI and Vertex AI. CRM integration, knowledge grounding, human escalation.',
    url: 'https://kovil.ai/vertex-ai/customer-experience/contact-centre-ai',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-vertex-ai.png', width: 1200, height: 630, alt: 'Contact Centre AI — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Centre AI | Kovil AI Vertex AI',
    description: 'Handle 60–80% of contact centre queries with AI via Google Cloud CCAI and Vertex AI. CRM integration. Human handoff.',
    images: ['https://kovil.ai/og-vertex-ai.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Contact Centre AI',
  description: 'AI agents that handle 60–80% of contact centre queries autonomously — integrated with CRM, knowledge base, and escalation workflows via Google Cloud CCAI and Vertex AI.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Vertex AI Implementation',
  url: 'https://kovil.ai/vertex-ai/customer-experience/contact-centre-ai',
  areaServed: ['New York', 'Austin', 'United States', 'United Kingdom'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Google Cloud CCAI and how does it relate to Vertex AI?', acceptedAnswer: { '@type': 'Answer', text: 'Google Cloud Contact Centre AI (CCAI) is Google\'s suite of AI services for contact centres — it includes Dialogflow CX for conversational flows, Agent Assist for real-time human agent support, and Insights for conversation analytics. Vertex AI provides the underlying foundation model layer: Gemini powers the natural language understanding, Vertex AI Search grounds agents in knowledge, and Vertex AI Reasoning Engine handles complex multi-step orchestration. Kovil AI integrates both layers — CCAI for telephony and live agent tools, Vertex AI for Gemini reasoning and knowledge grounding — into a unified contact centre AI system.' } },
    { '@type': 'Question', name: 'What percentage of queries can AI agents handle autonomously?', acceptedAnswer: { '@type': 'Answer', text: 'For typical enterprise contact centres, AI agents can handle 60–80% of queries fully autonomously within 3–6 months of deployment, once they have been trained on sufficient interaction data and the knowledge base is mature. Common fully autonomous use cases include order status and tracking, appointment scheduling and modification, account balance and billing queries, password resets and account access, FAQ responses, and standard returns and refunds. Complex queries — those requiring policy exceptions, multi-system orchestration, or empathy — are escalated to human agents with full context.' } },
    { '@type': 'Question', name: 'How does Agent Assist help human agents?', acceptedAnswer: { '@type': 'Answer', text: 'Google Cloud Agent Assist provides real-time AI assistance to human agents during live conversations. It listens to the conversation in real time and surfaces: relevant knowledge base articles, suggested responses, next-best-action recommendations, and smart reply options that agents can send with one click. After each interaction, Gemini generates a call summary and action items automatically, eliminating manual wrap-up time. Agent Assist typically reduces average handle time by 20–35% and improves first-call resolution rates.' } },
    { '@type': 'Question', name: 'What telephony and CRM systems does this integrate with?', acceptedAnswer: { '@type': 'Answer', text: 'Google Cloud CCAI integrates natively with major telephony platforms including Avaya, Cisco UCCE, Genesys Cloud CX, NICE CXone, and Twilio. For CRM integration, we connect to Salesforce Service Cloud, Zendesk, ServiceNow, Microsoft Dynamics 365, and custom CRM systems via API. The agent reads customer context from your CRM at conversation start (account tier, open cases, purchase history) and writes back summaries, intent classifications, and action items after each interaction. We handle the telephony connector configuration and CRM integration as part of the implementation engagement.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Vertex AI', item: 'https://kovil.ai/vertex-ai' },
    { '@type': 'ListItem', position: 3, name: 'Customer Experience', item: 'https://kovil.ai/vertex-ai/customer-experience' },
    { '@type': 'ListItem', position: 4, name: 'Contact Centre AI', item: 'https://kovil.ai/vertex-ai/customer-experience/contact-centre-ai' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ContactCentreAIPage />
    </>
  )
}
