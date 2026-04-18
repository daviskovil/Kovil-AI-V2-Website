import type { Metadata } from 'next'
import AutoGenDevelopersPage from '@/src/pages/hire/AutoGenDevelopersPage'

export const metadata: Metadata = {
  title: 'Hire AutoGen Developers — Conversational Multi-Agent AI, Matched in 48 Hours | Kovil AI',
  description: 'Hire vetted AutoGen developers embedded in your team in 48 hours. Conversational multi-agent systems, code-executing agents, GroupChat orchestration, production deployment. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/hire/autogen-developers' },
  keywords: [
    'hire autogen developers',
    'autogen developer',
    'autogen engineer',
    'microsoft autogen developer',
    'multi agent system developers',
    'hire ai agents developers',
    'autogen specialist',
  ],
  openGraph: {
    type: 'website',
    title: 'Hire AutoGen Developers — Conversational Multi-Agent AI, Matched in 48 Hours | Kovil AI',
    description: 'Vetted Tier-1 AutoGen developers embedded in your team in 48 hours. Conversational agents, code execution, GroupChat orchestration — sprint-delivered.',
    url: 'https://kovil.ai/hire/autogen-developers',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Hire AutoGen Developers — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire AutoGen Developers — Matched in 48 Hours | Kovil AI',
    description: 'Vetted Tier-1 AutoGen developers in 48 hours. Sprint-delivered, Engagement Manager audited.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire AutoGen Developers',
  description: 'Embed vetted Tier-1 AutoGen developers into your team in 48 hours. Specialists in conversational multi-agent systems, code-executing agents, GroupChat orchestration, and production AutoGen deployment.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  serviceType: 'AutoGen Development',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/hire/autogen-developers',
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in contracts.', url: 'https://kovil.ai/hire/autogen-developers' },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Hire an AutoGen Developer with Kovil AI',
  totalTime: 'PT48H',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Needs', text: 'Fill a 5-minute intake form describing your AutoGen use case, agent conversation design, code execution needs, and production environment.', url: 'https://kovil.ai/hire/autogen-developers' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Engineer', text: 'We surface 2–3 hand-picked AutoGen developers matched to your domain and requirements.', url: 'https://kovil.ai/hire/autogen-developers' },
    { '@type': 'HowToStep', position: 3, name: 'Sprint & Deliver', text: 'Your engineer works in focused sprints. An Engagement Manager audits every milestone output.', url: 'https://kovil.ai/hire/autogen-developers' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is AutoGen and what does an AutoGen developer build?', acceptedAnswer: { '@type': 'Answer', text: "AutoGen is Microsoft's open-source framework for conversational multi-agent AI systems where agents message each other and execute code. An AutoGen developer designs agent conversation systems, configures code execution environments, orchestrates GroupChats, and deploys production-grade pipelines." } },
    { '@type': 'Question', name: 'How quickly can I hire an AutoGen developer through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched within 24–48 hours of submitting their brief. The engineer starts on a milestone plan within 3–4 days with a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'Is AutoGen safe for production code execution?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, when engineered correctly. Our AutoGen developers implement Docker sandboxing, strict operation allowlists, output validation, full audit logging, and human-in-the-loop approval gates for sensitive operations.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',               item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Hire AI Engineers',  item: 'https://kovil.ai/hire' },
    { '@type': 'ListItem', position: 3, name: 'AutoGen Developers', item: 'https://kovil.ai/hire/autogen-developers' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-20"><AutoGenDevelopersPage /></div>
    </>
  )
}
