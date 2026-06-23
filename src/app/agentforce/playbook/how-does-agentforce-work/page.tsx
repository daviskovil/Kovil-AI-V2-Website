import type { Metadata } from 'next'
import HowAgentforceWorksPage from '@/src/pages/agentforce/playbook/HowAgentforceWorksPage'

export const metadata: Metadata = {
  title: 'How Agentforce Works: Atlas Reasoning, Topics, Actions & Trust Layer | Kovil AI',
  description:
    'Complete technical guide to how Salesforce Agentforce works — the Atlas Reasoning Engine four-phase loop, Topics and Actions, Einstein Trust Layer, Data Cloud grounding, and how agents take action in external systems.',
  alternates: { canonical: 'https://kovil.ai/agentforce/playbook/how-does-agentforce-work' },
  keywords: [
    'how does agentforce work',
    'agentforce architecture',
    'atlas reasoning engine',
    'agentforce topics actions',
    'einstein trust layer',
    'agentforce technical guide',
    'how agentforce works',
    'salesforce agentforce explained',
    'agentforce vs chatbot',
    'agentforce data grounding',
  ],
  openGraph: {
    type: 'article',
    title: 'How Agentforce Works: Atlas Reasoning, Topics, Actions & Trust Layer | Kovil AI',
    description:
      'Complete technical guide to how Salesforce Agentforce works — the Atlas Reasoning Engine four-phase loop, Topics and Actions, Einstein Trust Layer, Data Cloud grounding, and how agents take action in external systems.',
    url: 'https://kovil.ai/agentforce/playbook/how-does-agentforce-work',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'How Agentforce Works | Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Agentforce Works: Atlas Reasoning, Topics, Actions & Trust Layer | Kovil AI',
    description:
      'Complete technical guide to how Salesforce Agentforce works — Atlas Reasoning Engine, Topics and Actions, Einstein Trust Layer, and data grounding.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Agentforce Works: The Complete Technical Guide for Decision-Makers',
  description:
    'Complete technical guide to how Salesforce Agentforce works — the Atlas Reasoning Engine four-phase loop, Topics and Actions, Einstein Trust Layer, Data Cloud grounding, and how agents take action in external systems.',
  datePublished: '2026-06-23',
  dateModified: '2026-06-23',
  author: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://kovil.ai/agentforce/playbook/how-does-agentforce-work',
  },
  image: 'https://kovil.ai/og-agentforce.png',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between Agentforce and a chatbot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Traditional chatbots follow decision trees — predefined if-this-then-that logic. Agentforce uses the Atlas Reasoning Engine to reason about user intent dynamically — it reads context, plans multi-step responses, executes actions (updating records, calling APIs, sending emails), and determines its own next step based on the outcome. It can handle novel situations within its defined Topic scope without explicit programming for every case.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Atlas Reasoning Engine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Atlas is Agentforce's core AI reasoning layer. It runs a four-phase loop on every interaction: Observe (read the conversation and load customer context), Plan (determine which Topic applies and which Actions are needed), Act (execute those Actions — updating records, calling APIs, triggering Flows), and Reflect (evaluate whether the outcome was successful and determine if further steps or escalation are needed). This loop runs continuously throughout a conversation, not just at the start.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Einstein Trust Layer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Einstein Trust Layer is the security and governance perimeter around all Agentforce AI operations. It prevents prompt injection, filters PII from data sent to LLM APIs, enforces zero data retention at the LLM level, generates an immutable audit trail of every agent action, and blocks outputs that violate compliance rules. It is the reason enterprises can deploy Agentforce in regulated industries.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Agentforce access CRM data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agentforce accesses CRM data through Actions. A Get Account Action queries the Account object. A Get Case History Action retrieves related cases. These Actions are configured with specific field permissions — the agent can only access fields it is explicitly granted access to, determined by the Agent User permission set in your Salesforce org.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Agentforce take actions in external systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Agentforce can connect to external systems through HTTP callout Actions via Apex (for REST API integration without MuleSoft), MuleSoft-backed Actions (for enterprise-grade integration with transformation and governance), and MCP server integrations (available in Agentforce 3+). Examples include updating ERP inventory, retrieving EHR patient data, or querying a logistics tracking API — all within a single agent interaction.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are Agentforce Topics and Actions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Topics define what an agent is responsible for — its job description. Each Topic specifies the scope of queries the agent handles, the instructions for how to handle them, and which Actions the agent can use. Actions define what the agent can do — the tools available to it. Action types include Flow-based actions, Apex actions, API callout actions, MuleSoft actions, and Prompt actions.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does Agentforce require Data Cloud?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not strictly required, but recommended for production-grade deployments. Without Data Cloud, agents are grounded only in data in the immediate Salesforce record context. With Data Cloud, agents access unified customer profiles combining CRM data, engagement history, and external signals — enabling significantly better context and higher resolution rates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Agentforce be wrong? How do you handle hallucinations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agentforce can produce incorrect outputs when knowledge base data is stale, Action results are ambiguous, or the agent receives conflicting instructions. Hallucination risk is mitigated through data grounding (agents reason over verified CRM data, not free-form web content), Einstein Trust Layer guardrails (hard stops on categories of output the agent must never produce), and human-in-the-loop escalation for actions above a defined risk threshold.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Agentforce', item: 'https://kovil.ai/agentforce' },
    { '@type': 'ListItem', position: 3, name: 'Playbook', item: 'https://kovil.ai/agentforce/playbook' },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'How Agentforce Works',
      item: 'https://kovil.ai/agentforce/playbook/how-does-agentforce-work',
    },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'How Agentforce Works: Atlas Reasoning, Topics, Actions & Trust Layer | Kovil AI',
  description:
    'Complete technical guide to how Salesforce Agentforce works — the Atlas Reasoning Engine four-phase loop, Topics and Actions, Einstein Trust Layer, and data grounding.',
  url: 'https://kovil.ai/agentforce/playbook/how-does-agentforce-work',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', 'h3', 'p'],
  },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <HowAgentforceWorksPage />
    </>
  )
}
