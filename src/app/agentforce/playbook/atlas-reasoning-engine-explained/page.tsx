import type { Metadata } from 'next'
import AtlasReasoningEnginePage from '@/src/pages/agentforce/playbook/AtlasReasoningEnginePage'

export const metadata: Metadata = {
  title: 'Atlas Reasoning Engine Explained: How Agentforce Agents Actually Think | Kovil AI',
  description: 'A technical breakdown of the Salesforce Atlas Reasoning Engine — how Agentforce agents observe, plan, act, and reflect using hybrid LLM and deterministic routing to execute multi-step tasks.',
  alternates: { canonical: 'https://kovil.ai/agentforce/playbook/atlas-reasoning-engine-explained' },
  keywords: [
    'Atlas Reasoning Engine',
    'Agentforce Atlas engine',
    'how Agentforce thinks',
    'Agentforce reasoning explained',
    'Salesforce Atlas AI',
    'Agentforce reasoning trace',
    'how does Agentforce work',
    'Agentforce AI reasoning',
    'Agentforce topic classification',
    'Agentforce action execution',
    'Einstein Trust Layer explained',
    'Agentforce hallucination prevention',
    'Agentforce grounding data cloud',
    'Agentforce observe plan act reflect',
    'Salesforce Agentforce architecture',
    'Agentforce vs chatbot',
    'Agentforce 3 multi-agent orchestration',
    'Agentforce MCP support',
    'Agentforce PII masking',
    'Salesforce AI agent technical guide',
  ],
  openGraph: {
    type: 'article',
    title: 'Atlas Reasoning Engine Explained: How Agentforce Agents Actually Think',
    description: 'A technical breakdown of the Salesforce Atlas Reasoning Engine — how Agentforce agents observe, plan, act, and reflect using hybrid LLM and deterministic routing to execute multi-step tasks.',
    url: 'https://kovil.ai/agentforce/playbook/atlas-reasoning-engine-explained',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Kovil AI Agentforce Playbook' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atlas Reasoning Engine Explained: How Agentforce Agents Actually Think',
    description: 'A technical breakdown of the Salesforce Atlas Reasoning Engine — how Agentforce agents observe, plan, act, and reflect using hybrid LLM and deterministic routing to execute multi-step tasks.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Atlas Reasoning Engine Explained: How Agentforce Agents Actually Think',
  description: 'A technical breakdown of the Salesforce Atlas Reasoning Engine — how Agentforce agents observe, plan, act, and reflect using hybrid LLM and deterministic routing to execute multi-step tasks.',
  author: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Kovil AI',
    logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  },
  url: 'https://kovil.ai/agentforce/playbook/atlas-reasoning-engine-explained',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://kovil.ai/agentforce/playbook/atlas-reasoning-engine-explained' },
  datePublished: '2026-04-01',
  dateModified: '2026-04-30',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Salesforce Atlas Reasoning Engine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Atlas is Salesforce\'s hybrid reasoning layer that sits between the LLM and your org\'s actions. It is an orchestration engine that uses an LLM for language understanding and response generation, but applies its own deterministic logic for routing, action selection, and guardrail enforcement. The LLM handles natural language; Atlas handles everything else — topic classification, action sequencing, PII masking, and audit logging.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Agentforce\'s Observe-Plan-Act-Reflect loop work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every agent interaction runs through a four-phase loop. In the Observe phase, Atlas assembles the conversation context — the user\'s message, the active channel, and any structured data attached at invocation. In the Plan phase, Atlas classifies the request against the Topic library and generates an execution plan specifying which Actions to call and in what order. In the Act phase, Actions are executed in sequence or in parallel, each producing an audited result. In the Reflect phase, Atlas evaluates whether the plan produced a satisfactory outcome and decides whether to retry, adapt, or escalate.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Atlas Agentforce classify which Topic to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Atlas uses the classification description you write for each Topic, combined with the current conversation context, to score the relevance of each Topic. The Topic with the highest confidence score above the configured threshold is selected. If no Topic scores above the threshold, the request falls to the default "I Can\'t Help With That" response. Most production configurations run confidence thresholds between 0.65 and 0.80 depending on the risk profile of the use case.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between deterministic and LLM-directed action selection in Agentforce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With deterministic action selection, you define a fixed sequence of Actions for a Topic — Atlas always executes them in that order regardless of the specific request. This is predictable and auditable, making it the right choice for regulated use cases or Actions with side effects like record writes. With LLM-directed selection, Atlas reasons over the available Actions and decides which to call based on the specific request. This is more flexible but introduces variability, making it better suited to informational read-only Topics where execution order carries lower risk.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Agentforce prevent hallucinations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Atlas uses two grounding mechanisms. First, Data Cloud retrieval augmentation injects actual org records — loan balances, case histories, account details — into the context window at invocation, so the LLM synthesises retrieved data rather than generating it from memory. Second, Action results: when an agent calls an Action and receives a structured response, those results are passed back into the context window as ground truth. An agent that retrieves a loan balance via an Action and presents the retrieved value is not susceptible to hallucination on that specific fact.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the Einstein Trust Layer do in Agentforce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Einstein Trust Layer is the security and compliance wrapper around all Atlas operations. It provides prompt injection defence (detecting and blocking attempts to override system behaviour before they reach the LLM), configurable PII masking (replacing account numbers, SSNs, and healthcare identifiers with tokens before including them in LLM prompts), full audit logging of every agent action with timestamps and confidence scores, and a zero-data-retention policy ensuring no conversation data is retained by the LLM provider after each call completes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What changed in Agentforce 3 compared to Agentforce 2?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agentforce 3 (generally available Q1 2026) introduced three material changes: native Model Context Protocol (MCP) support enabling connections to external services like Google Cloud, Stripe, and PayPal without custom Apex callouts; multi-agent orchestration allowing agents to invoke other specialised agents as sub-tasks for complex workflows; and reasoning improvements in the Atlas layer that deliver measurably better performance on multi-step planning tasks compared to Agentforce 2.',
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
    { '@type': 'ListItem', position: 4, name: 'Atlas Reasoning Engine Explained', item: 'https://kovil.ai/agentforce/playbook/atlas-reasoning-engine-explained' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AtlasReasoningEnginePage />
    </>
  )
}
