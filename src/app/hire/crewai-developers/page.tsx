import type { Metadata } from 'next'
import CrewAIDevelopersPage from '@/src/pages/hire/CrewAIDevelopersPage'

export const metadata: Metadata = {
  title: 'Hire CrewAI Developers — Multi-Agent Systems, Matched in 48 Hours | Kovil AI',
  description: 'Hire vetted CrewAI developers embedded in your team in 48 hours. Multi-agent orchestration, role-based agent systems, tool integration, production deployment. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/hire/crewai-developers' },
  keywords: [
    'hire crewai developers',
    'crewai developer',
    'crewai engineer',
    'hire crewai engineer',
    'multi agent system developers',
    'hire ai agents developers',
    'crewai specialist',
  ],
  openGraph: {
    type: 'website',
    title: 'Hire CrewAI Developers — Multi-Agent Systems, Matched in 48 Hours | Kovil AI',
    description: 'Vetted Tier-1 CrewAI developers embedded in your team in 48 hours. Multi-agent orchestration, role-based agents, production deployment — sprint-delivered.',
    url: 'https://kovil.ai/hire/crewai-developers',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Hire CrewAI Developers — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire CrewAI Developers — Matched in 48 Hours | Kovil AI',
    description: 'Vetted Tier-1 CrewAI developers in 48 hours. Sprint-delivered, Engagement Manager audited.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire CrewAI Developers',
  description: 'Embed vetted Tier-1 CrewAI developers into your team in 48 hours. Specialists in multi-agent orchestration, role-based agent systems, tool integration, and production-grade CrewAI deployment.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  serviceType: 'CrewAI Development',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/hire/crewai-developers',
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in contracts.', url: 'https://kovil.ai/hire/crewai-developers' },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Hire a CrewAI Developer with Kovil AI',
  totalTime: 'PT48H',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Needs', text: 'Fill a 5-minute intake form describing your CrewAI use case, agent roles, tools, and production requirements.', url: 'https://kovil.ai/hire/crewai-developers' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Engineer', text: 'We surface 2–3 hand-picked CrewAI developers matched to your domain and requirements.', url: 'https://kovil.ai/hire/crewai-developers' },
    { '@type': 'HowToStep', position: 3, name: 'Sprint & Deliver', text: 'Your engineer works in focused sprints. An Engagement Manager audits every milestone output.', url: 'https://kovil.ai/hire/crewai-developers' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is CrewAI and what does a CrewAI developer build?', acceptedAnswer: { '@type': 'Answer', text: 'CrewAI is an open-source multi-agent framework that enables teams of AI agents to collaborate on complex tasks. A CrewAI developer designs and builds these agent systems — defining roles, orchestrating task flows, integrating tools, and deploying crews that run reliably in production.' } },
    { '@type': 'Question', name: 'How quickly can I hire a CrewAI developer through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched within 24–48 hours of submitting their brief. The engineer starts on a milestone plan within 3–4 days with a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'What is the difference between CrewAI and LangGraph?', acceptedAnswer: { '@type': 'Answer', text: 'CrewAI focuses on role-based, human-readable agent collaboration — ideal for workflows with defined agents working as a team. LangGraph provides lower-level graph-based control flow for finer-grained state and transition management. CrewAI is faster for multi-agent collaboration; LangGraph gives more control for complex stateful workflows.' } },
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
