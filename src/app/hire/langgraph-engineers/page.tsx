import type { Metadata } from 'next'
import LangGraphEngineersPage from '@/src/pages/hire/LangGraphEngineersPage'

export const metadata: Metadata = {
  title: 'Hire LangGraph Engineers — Stateful Agent Graphs, Matched in 48 Hours | Kovil AI',
  description: 'Hire vetted LangGraph engineers embedded in your team in 48 hours. Stateful agent graphs, RAG pipelines, multi-agent orchestration, human-in-the-loop workflows. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/hire/langgraph-engineers' },
  keywords: [
    'hire langgraph engineers',
    'langgraph developer',
    'langgraph engineer',
    'hire langgraph experts for rag',
    'langgraph specialist',
    'hire ai agents developers',
    'stateful agent systems',
  ],
  openGraph: {
    type: 'website',
    title: 'Hire LangGraph Engineers — Stateful Agent Graphs, Matched in 48 Hours | Kovil AI',
    description: 'Vetted Tier-1 LangGraph engineers embedded in your team in 48 hours. Stateful graphs, RAG, multi-agent orchestration — sprint-delivered.',
    url: 'https://kovil.ai/hire/langgraph-engineers',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Hire LangGraph Engineers — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire LangGraph Engineers — Matched in 48 Hours | Kovil AI',
    description: 'Vetted Tier-1 LangGraph engineers in 48 hours. Sprint-delivered, Engagement Manager audited.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire LangGraph Engineers',
  description: 'Embed vetted Tier-1 LangGraph engineers into your team in 48 hours. Specialists in stateful agent graphs, RAG pipelines, multi-agent orchestration, human-in-the-loop workflows, and LangSmith observability.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  serviceType: 'LangGraph Engineering',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/hire/langgraph-engineers',
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in contracts.', url: 'https://kovil.ai/hire/langgraph-engineers' },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Hire a LangGraph Engineer with Kovil AI',
  totalTime: 'PT48H',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Needs', text: 'Fill a 5-minute intake form describing your LangGraph use case, graph structure, state requirements, and production environment.', url: 'https://kovil.ai/hire/langgraph-engineers' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Engineer', text: 'We surface 2–3 hand-picked LangGraph engineers matched to your domain and requirements.', url: 'https://kovil.ai/hire/langgraph-engineers' },
    { '@type': 'HowToStep', position: 3, name: 'Sprint & Deliver', text: 'Your engineer works in focused sprints. An Engagement Manager audits every milestone output.', url: 'https://kovil.ai/hire/langgraph-engineers' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is LangGraph and what does a LangGraph engineer build?', acceptedAnswer: { '@type': 'Answer', text: 'LangGraph is a library for building stateful, multi-actor agent applications as directed graphs. A LangGraph engineer designs graph-based agent systems with nodes, conditional edges, state schemas, and persistence layers — for complex RAG pipelines, autonomous agents, and multi-agent orchestration.' } },
    { '@type': 'Question', name: 'How quickly can I hire a LangGraph engineer through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched within 24–48 hours of submitting their brief. The engineer starts on a milestone plan within 3–4 days with a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'What is the difference between LangGraph and CrewAI?', acceptedAnswer: { '@type': 'Answer', text: 'LangGraph gives low-level control over agent state machines with explicit graph nodes and edges — ideal for complex branching workflows. CrewAI abstracts over this with role-based collaboration — easier for straightforward multi-agent tasks. LangGraph is chosen when you need fine-grained state management and routing precision.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',                item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Hire AI Engineers',   item: 'https://kovil.ai/hire' },
    { '@type': 'ListItem', position: 3, name: 'LangGraph Engineers', item: 'https://kovil.ai/hire/langgraph-engineers' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-20"><LangGraphEngineersPage /></div>
    </>
  )
}
