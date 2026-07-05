import type { Metadata } from 'next'
import CrewAIDevelopersPage from '@/src/pages/hire/CrewAIDevelopersPage'

export const metadata: Metadata = {
  title: 'Hire CrewAI Developers — Multi-Agent Systems, Matched in 48 Hours',
  description: 'Hire vetted CrewAI developers embedded in your team in 48 hours. Multi-agent orchestration, role-based agent systems, tool integration, production deployment. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/hire/crewai-developers' },
  keywords: [
    'hire crewai developers',
    'crewai developer',
    'crewai engineer',
    'hire crewai engineer',
    'crewai specialist',
    'crewai consultant',
    'hire crewai consultant',
    'crewai freelancer',
    'contract crewai developer',
    'multi agent system developer',
    'hire multi agent ai developer',
    'multi agent orchestration engineer',
    'agentic ai developer',
    'hire agentic ai engineer',
    'crewai development company',
    'crewai implementation',
    'crewai production deployment',
    'langchain multi agent developer',
    'ai agent framework developer',
    'crewai new york',
  ],
  openGraph: {
    type: 'website',
    title: 'Hire CrewAI Developers — Multi-Agent Systems, Matched in 48 Hours | Kovil AI',
    description: 'Vetted Tier-1 CrewAI developers embedded in your team in 48 hours. Multi-agent orchestration, role-based agents, production deployment — sprint-delivered, Engagement Manager audited.',
    url: 'https://kovil.ai/hire/crewai-developers',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-hire.jpg', width: 1200, height: 630, alt: 'Hire CrewAI Developers — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire CrewAI Developers — Matched in 48 Hours | Kovil AI',
    description: 'Vetted Tier-1 CrewAI developers in 48 hours. Multi-agent orchestration, sprint-delivered, Engagement Manager audited.',
    images: ['https://kovil.ai/og-hire.jpg'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire CrewAI Developers',
  description: 'Embed vetted Tier-1 CrewAI developers into your team in 48 hours. Specialists in multi-agent orchestration, role-based agent systems, hierarchical process flows, tool integration, async crew deployment, and production-grade CrewAI observability.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '734 Franklin Ave',
      addressLocality: 'Garden City',
      addressRegion: 'NY',
      postalCode: '11530',
      addressCountry: 'US',
    },
    contactPoint: { '@type': 'ContactPoint', contactType: 'Sales', url: 'https://kovil.ai/contact' },
  },
  serviceType: 'CrewAI Development',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/hire/crewai-developers',
  offers: {
    '@type': 'Offer',
    description: '2-week risk-free trial. Matched in 48 hours. No lock-in contracts. 100% IP ownership.',
    url: 'https://kovil.ai/hire/crewai-developers',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'CrewAI Development Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Multi-Agent Crew Pipeline Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Role-Based Agent Design & Orchestration' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tool Integration & Custom Tool Definitions' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hierarchical Process Flow Architecture' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Async & Long-Running Crew Deployment' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CrewAI Observability & Production Monitoring' } },
    ],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Hire a CrewAI Developer with Kovil AI',
  description: 'Embed a vetted CrewAI developer into your team in under 48 hours with milestone-gated delivery and Engagement Manager oversight.',
  totalTime: 'PT48H',
  step: [
    {
      '@type': 'HowToStep', position: 1,
      name: 'Brief Your Needs',
      text: 'Fill a 5-minute intake form describing your CrewAI use case — the agents you need, the tools they should call, and your production requirements. A Delivery Lead contacts you within 24 hours to scope the build.',
      url: 'https://kovil.ai/hire/crewai-developers',
    },
    {
      '@type': 'HowToStep', position: 2,
      name: 'Meet Your Engineer',
      text: 'We surface 2–3 hand-picked CrewAI developers with proven production experience in multi-agent systems. You review profiles, join intro calls, and choose your fit.',
      url: 'https://kovil.ai/hire/crewai-developers',
    },
    {
      '@type': 'HowToStep', position: 3,
      name: 'Sprint & Deliver',
      text: 'Your engineer works in focused sprints. An Engagement Manager audits every milestone output. You get working, production-grade CrewAI systems — not prototypes.',
      url: 'https://kovil.ai/hire/crewai-developers',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is CrewAI and what does a CrewAI developer build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CrewAI is an open-source multi-agent framework built on top of LangChain that enables teams of AI agents to collaborate on complex tasks. Each agent has a defined role, goal, and backstory, and can use tools to interact with external systems. A CrewAI developer designs and builds these agent systems — defining roles, orchestrating task flows, integrating tools, and deploying crews that run reliably in production. Use cases include research pipelines, content workflows, data analysis crews, and automated decision systems.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can I hire a CrewAI developer through Kovil AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most clients are matched with a vetted CrewAI specialist within 24–48 hours of submitting their brief. The engineer starts on a milestone plan within 3–4 days, and every engagement includes a 2-week risk-free trial.',
      },
    },
    {
      '@type': 'Question',
      name: 'What tools and frameworks do your CrewAI developers use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our CrewAI engineers are proficient across CrewAI, LangChain, LangGraph, OpenAI, Anthropic, and open-source models for the LLM layer. For tooling, they integrate web search, code interpreters, databases, REST APIs, and custom tool definitions. For production deployment: FastAPI, Docker, and cloud platforms including AWS, GCP, and Azure.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between CrewAI and LangGraph?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CrewAI focuses on role-based, human-readable agent collaboration — it is ideal for workflows where you want defined agents with specific responsibilities working as a team. LangGraph provides lower-level graph-based control flow for agents, giving finer-grained control over state and transitions. CrewAI is typically faster to get to a working multi-agent system; LangGraph gives more control for complex branching and stateful workflows. The right choice depends on your use case — Kovil AI engineers will recommend the best framework before any build begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can CrewAI agents be deployed in production reliably?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — but production reliability requires deliberate engineering. Kovil AI CrewAI developers implement async execution patterns, error handling and retry logic, state persistence for long-running crews, tool call logging and observability, token cost controls, and human-in-the-loop checkpoints where appropriate. Production CrewAI systems require the same engineering rigour as any distributed system.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who owns the CrewAI agents and code your engineer builds?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You do — 100%. All agent definitions, crew configurations, tool integrations, and deployment infrastructure produced during your engagement are fully owned by your company. Kovil AI retains no rights to any work product. This is contractually guaranteed from day one.',
      },
    },
    {
      '@type': 'Question',
      name: 'What industries use CrewAI multi-agent systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CrewAI is used across industries wherever complex, multi-step workflows can be automated. Common use cases include: financial services (research crews for market analysis and due diligence), marketing and content (multi-agent pipelines for SEO research, drafting, and publishing), legal tech (document review and contract analysis crews), SaaS products (agentic features for data enrichment, customer onboarding, and support automation), and e-commerce (product data management and pricing intelligence crews).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between CrewAI and AutoGen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CrewAI and AutoGen both enable multi-agent collaboration but take different approaches. CrewAI uses structured role-based crews with defined tasks and sequential or hierarchical execution — it is opinionated, fast to set up, and well-suited for production pipelines. AutoGen, developed by Microsoft, favours conversational agent patterns with more flexible back-and-forth between agents. CrewAI tends to be better for defined, repeatable workflows; AutoGen is better for exploratory, dialogue-based agent interactions. Kovil AI engineers are proficient in both.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',              item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Hire AI Engineers', item: 'https://kovil.ai/hire' },
    { '@type': 'ListItem', position: 3, name: 'CrewAI Developers', item: 'https://kovil.ai/hire/crewai-developers' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-20"><CrewAIDevelopersPage /></div>
    </>
  )
}
