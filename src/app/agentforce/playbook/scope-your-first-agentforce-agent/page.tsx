import type { Metadata } from 'next'
import ScopeYourFirstAgentPage from '@/src/pages/agentforce/playbook/ScopeYourFirstAgentPage'

export const metadata: Metadata = {
  title: 'How to Scope Your First Agentforce Agent: A Practitioner\'s Checklist | Kovil AI',
  description: 'Answer these 12 scoping questions before touching Agent Builder. The structured Agentforce implementation checklist used by practitioners to avoid the most common first-agent failures.',
  alternates: { canonical: 'https://kovil.ai/agentforce/playbook/scope-your-first-agentforce-agent' },
  keywords: [
    'how to scope Agentforce agent',
    'Agentforce implementation checklist',
    'first Agentforce agent guide',
    'Agentforce use case selection',
    'Agentforce scoping framework',
    'Agentforce planning guide',
    'Agentforce pilot scoping',
    'Agentforce Topics and Actions',
    'Agentforce Agent Builder guide',
    'Agentforce implementation best practices',
    'Salesforce Agentforce setup',
    'Agentforce project planning',
    'Agentforce deployment checklist',
    'scoping Agentforce pilot',
    'Agentforce UAT process',
    'Agentforce compliance requirements',
    'Agentforce data readiness',
    'Agentforce escalation design',
    'Salesforce AI agent scoping',
    'Agentforce implementation guide',
  ],
  openGraph: {
    type: 'article',
    title: 'How to Scope Your First Agentforce Agent: A Practitioner\'s Checklist',
    description: 'Answer these 12 scoping questions before touching Agent Builder. The structured Agentforce implementation checklist used by practitioners to avoid the most common first-agent failures.',
    url: 'https://kovil.ai/agentforce/playbook/scope-your-first-agentforce-agent',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Kovil AI Agentforce Playbook' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Scope Your First Agentforce Agent: A Practitioner\'s Checklist',
    description: 'Answer these 12 scoping questions before touching Agent Builder. The structured Agentforce implementation checklist used by practitioners to avoid the most common first-agent failures.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Scope Your First Agentforce Agent: A Practitioner\'s Checklist',
  description: 'Answer these 12 scoping questions before touching Agent Builder. The structured Agentforce implementation checklist used by practitioners to avoid the most common first-agent failures.',
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
  image: { '@type': 'ImageObject', url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630 },
  url: 'https://kovil.ai/agentforce/playbook/scope-your-first-agentforce-agent',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://kovil.ai/agentforce/playbook/scope-your-first-agentforce-agent' },
  datePublished: '2026-04-01',
  dateModified: '2026-04-30',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: "How to Scope Your First Agentforce Agent: A Practitioner's Checklist | Kovil AI",
  description: 'Answer these 12 scoping questions before touching Agent Builder. The structured Agentforce implementation checklist used by practitioners to avoid the most common first-agent failures.',
  url: 'https://kovil.ai/agentforce/playbook/scope-your-first-agentforce-agent',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'h3', 'p'] },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why do most Agentforce implementations fail at scoping?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Teams look at Agent Builder\'s drag-and-drop interface and assume the hard part is the tool. It isn\'t. The hard part is deciding with precision what the agent should do, what data it needs, what it should never do, and how you\'ll know if it\'s working. Without documented answers to these questions, Instructions will be vague, Topics will be over-scoped, and the agent will behave unpredictably the moment it encounters an edge case.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the single most important question to answer before building an Agentforce agent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'What is the single, specific job this agent will do? The job should be expressible in one sentence — for example: "Respond to inbound loan status queries from authenticated customers and return current loan balance, payment due date, and next scheduled payment amount." If you need two sentences, you are scoping two agents. Build one first.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should go on an Agentforce agent\'s "never do" list?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The "never do" list goes directly into your Instructions as hard constraints. Typical examples include: never make commitments about refund timelines, never quote prices, never discuss competitor products, never access account data without authentication, and never process transactions above a defined threshold without human approval. Without explicit constraints, the LLM will attempt to be helpful in ways the business cannot authorise.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do the 12 scoping questions map to Agentforce Topics, Actions, and Instructions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Topics are defined by questions 1, 3, and 5 — the job definition, the trigger type, and the out-of-scope constraints. Actions are driven by questions 2 and 6 — the required Salesforce object access and any external data integrations. Instructions draw from questions 4, 5, 7, 8, and 10 — success metrics, never-do constraints, escalation paths, fallback states, and compliance requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the most common Agentforce scoping mistake?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agents scoped too broadly. Treating Agentforce as a general-purpose assistant for an entire department — a "Service Cloud agent" that handles returns, complaints, billing queries, technical support, and appointment booking — is five agents masquerading as one. Each job requires different data access, different escalation paths, and different compliance constraints. The result is an agent that handles simple cases inconsistently and fails on complex ones silently.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you define a 30-day pilot success criterion for an Agentforce agent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Set a specific, numeric threshold before go-live — not a vague aspiration. For example: "55% autonomous resolution rate on loan status queries with CSAT of 4.2/5 or above." This becomes your pilot pass/fail criterion. If you hit it, you expand to the next use case. If you don\'t, you investigate the failure modes before scaling. This framing also makes the business case for a second agent substantially easier.',
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
    { '@type': 'ListItem', position: 4, name: 'Scope Your First Agentforce Agent', item: 'https://kovil.ai/agentforce/playbook/scope-your-first-agentforce-agent' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <ScopeYourFirstAgentPage />
    </>
  )
}
