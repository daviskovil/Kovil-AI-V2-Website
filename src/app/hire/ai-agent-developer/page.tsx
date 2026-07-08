import type { Metadata } from 'next'
import AiAgentDeveloperPage from '@/src/pages/hire/AiAgentDeveloperPage'

export const metadata: Metadata = {
  title: 'Hire AI Agent Developers — Vetted, Senior, in 48 Hours',
  description: 'Hire vetted AI agent developers through Kovil AI. Senior engineers who build autonomous agents, custom tool integrations, multi-agent systems, and production agentic architectures. Matched in 48 hours, 2-week risk-free trial, 100% IP yours.',
  alternates: { canonical: 'https://kovil.ai/hire/ai-agent-developer' },
  keywords: [
    'hire ai agent developer',
    'hire ai agent developers',
    'ai agent developer',
    'hire ai agent engineer',
    'autonomous agent developer',
    'multi-agent systems developer',
    'agentic ai developer',
    'hire langgraph developer',
    'ai agent development services',
    'tool-use agent engineer',
  ],
  openGraph: {
    type: 'website',
    title: 'Hire AI Agent Developers — Vetted, Senior, in 48 Hours | Kovil AI',
    description: 'Senior, vetted engineers who build autonomous agents, tool integrations, and multi-agent systems. Matched in 48 hours. 2-week risk-free trial. 100% IP yours.',
    url: 'https://kovil.ai/hire/ai-agent-developer',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-hire-ai-agent-developer.png', width: 1200, height: 630, alt: 'Hire AI Agent Developers — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire AI Agent Developers — Vetted, Senior, in 48 Hours | Kovil AI',
    description: 'Senior, vetted engineers who ship autonomous agents and multi-agent systems. Matched in 48 hours. 2-week risk-free trial.',
    images: ['https://kovil.ai/og-hire-ai-agent-developer.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire AI Agent Developers',
  description: 'Embed a vetted, senior AI agent developer into your team in 48 hours. Specialists in autonomous workflows, custom tool and API integration, multi-agent orchestration, RAG and memory, agent evaluation, and production deployment.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
  },
  serviceType: 'AI Agent Development',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/hire/ai-agent-developer',
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/hire/ai-agent-developer' },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Hire an AI Agent Developer with Kovil AI',
  totalTime: 'PT48H',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Use Case', text: 'Describe what you want the agent to do, your stack, data sources, and constraints. A Delivery Lead scopes it with you within 24 hours.', url: 'https://kovil.ai/hire/ai-agent-developer' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Engineer', text: 'Review 2–3 vetted agent engineers with proven agentic systems in your domain. Interview and choose your fit.', url: 'https://kovil.ai/hire/ai-agent-developer' },
    { '@type': 'HowToStep', position: 3, name: 'Ship & Iterate', text: 'Your engineer builds in focused sprints against an evaluation suite. An Engagement Manager audits every milestone.', url: 'https://kovil.ai/hire/ai-agent-developer' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What does an AI agent developer do?', acceptedAnswer: { '@type': 'Answer', text: 'An AI agent developer designs and builds software agents that reason, use tools, and act autonomously to complete tasks. Unlike a chatbot that only replies with text, an agent can plan a multi-step task, call APIs and tools, query databases, retrieve knowledge, remember context, and take real actions in your systems. The role spans agent architecture, tool and function-calling integration, retrieval and memory, multi-agent orchestration, evaluation, guardrails, and production deployment.' } },
    { '@type': 'Question', name: 'How much does it cost to hire an AI agent developer?', acceptedAnswer: { '@type': 'Answer', text: 'A senior agent engineer full-time in the US typically costs $180,000–$260,000 in base salary plus recruiting time and equity. Freelance rates range from $80–$200+ per hour with highly variable quality. Kovil AI places a vetted, Engagement-Manager-audited agent engineer on a fixed monthly or milestone basis — usually a fraction of a full-time hire’s fully-loaded cost, with no recruiting delay, a 2-week risk-free trial, and no lock-in.' } },
    { '@type': 'Question', name: 'How quickly can I hire an AI agent developer through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched with a vetted agent engineer within 24–48 hours of submitting their brief, with work starting on an agreed milestone plan in 3–4 days — versus 4–6 months for a traditional senior hire. A 2-week risk-free trial lets you validate fit and output first.' } },
    { '@type': 'Question', name: 'What is the difference between an AI agent and a chatbot?', acceptedAnswer: { '@type': 'Answer', text: 'A chatbot responds to messages with generated text. An AI agent is goal-directed: it breaks a task into steps, decides what to do next, calls external tools and APIs, retrieves and reasons over data, keeps state, and takes actions in the real world, then checks its own work. A chatbot tells you the weather; an agent books the flight, updates the CRM, and emails the itinerary.' } },
    { '@type': 'Question', name: 'Which frameworks and models do your agent engineers use?', acceptedAnswer: { '@type': 'Answer', text: 'Our engineers are fluent in LangGraph, LangChain, CrewAI, AutoGen, the OpenAI Agents SDK, Pydantic AI, and the Vercel AI SDK for orchestration; Anthropic Claude and OpenAI models for reasoning and tool use; Pinecone, Weaviate, and pgvector for retrieval; and LangSmith, LangFuse, and RAGAS for evaluation and observability. We choose the stack that fits your use case.' } },
    { '@type': 'Question', name: 'Can you build multi-agent systems, not just a single agent?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We build supervisor-and-worker architectures where specialised agents collaborate — a planner, a researcher, a builder, and a reviewer — coordinated with shared state, message passing, and controlled hand-offs. We use multi-agent designs only where they genuinely outperform a single well-built agent.' } },
    { '@type': 'Question', name: 'How do you make sure the agent is reliable and does not hallucinate?', acceptedAnswer: { '@type': 'Answer', text: 'We ground agents in your data with retrieval and source citation, constrain tool use with validation and guardrails, and measure quality with real evaluation suites — task success rate, tool-call accuracy, faithfulness, latency, and cost per run — plus human-in-the-loop checkpoints for high-stakes actions and production monitoring to catch regressions.' } },
    { '@type': 'Question', name: 'Do I own the code and IP the agent developer produces?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, 100%. All code, prompts, agent architectures, eval suites, pipelines, and documentation are fully owned by you under clear IP-assignment terms — no carve-outs, no shared IP, and no lock-in.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Hire AI Engineers', item: 'https://kovil.ai/hire' },
    { '@type': 'ListItem', position: 3, name: 'AI Agent Developers', item: 'https://kovil.ai/hire/ai-agent-developer' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-20"><AiAgentDeveloperPage /></div>
    </>
  )
}
