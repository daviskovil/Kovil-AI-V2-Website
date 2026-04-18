import type { Metadata } from 'next'
import N8NAutomationExpertsPage from '@/src/pages/hire/N8NAutomationExpertsPage'

export const metadata: Metadata = {
  title: 'Hire n8n Automation Experts — AI Workflow Automation, Matched in 48 Hours | Kovil AI',
  description: 'Hire vetted n8n automation experts embedded in your team in 48 hours. Workflow automation, AI-powered pipelines, API integrations, custom nodes, self-hosted n8n. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/hire/n8n-automation-experts' },
  keywords: [
    'hire n8n automation experts',
    'n8n developer',
    'n8n expert',
    'hire n8n developer',
    'n8n workflow automation',
    'n8n specialist',
    'workflow automation engineer',
  ],
  openGraph: {
    type: 'website',
    title: 'Hire n8n Automation Experts — AI Workflow Automation, Matched in 48 Hours | Kovil AI',
    description: 'Vetted Tier-1 n8n automation experts embedded in your team in 48 hours. Workflow automation, AI pipelines, API integrations — sprint-delivered.',
    url: 'https://kovil.ai/hire/n8n-automation-experts',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Hire n8n Automation Experts — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire n8n Automation Experts — Matched in 48 Hours | Kovil AI',
    description: 'Vetted Tier-1 n8n experts in 48 hours. Sprint-delivered, Engagement Manager audited.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire n8n Automation Experts',
  description: 'Embed vetted Tier-1 n8n automation experts into your team in 48 hours. Specialists in workflow automation, AI-powered n8n pipelines, API integrations, custom node development, and self-hosted n8n deployment.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  serviceType: 'n8n Workflow Automation',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/hire/n8n-automation-experts',
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in contracts.', url: 'https://kovil.ai/hire/n8n-automation-experts' },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Hire an n8n Automation Expert with Kovil AI',
  totalTime: 'PT48H',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Needs', text: 'Fill a 5-minute intake form describing your automation requirements — workflows to build, tools to connect, and production environment.', url: 'https://kovil.ai/hire/n8n-automation-experts' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Expert', text: 'We surface 2–3 hand-picked n8n experts matched to your automation use case.', url: 'https://kovil.ai/hire/n8n-automation-experts' },
    { '@type': 'HowToStep', position: 3, name: 'Sprint & Deliver', text: 'Your expert works in focused sprints. An Engagement Manager audits every milestone output.', url: 'https://kovil.ai/hire/n8n-automation-experts' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is n8n and what can an n8n expert build?', acceptedAnswer: { '@type': 'Answer', text: 'n8n is an open-source workflow automation platform that connects apps, APIs, and services through visual node-based workflows. An n8n expert builds automation pipelines — from simple integrations to complex multi-branch workflows with AI steps, error handling, sub-workflows, and custom nodes.' } },
    { '@type': 'Question', name: 'How quickly can I hire an n8n expert through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched within 24–48 hours of submitting their brief. The expert starts on a milestone plan within 3–4 days with a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'n8n vs Zapier vs Make — which is right for my team?', acceptedAnswer: { '@type': 'Answer', text: 'n8n is the right choice when you need self-hosting for data sovereignty, complex branching and error workflows, custom code execution, scalability beyond SaaS plan limits, or AI integration in your pipelines. Zapier and Make are simpler but hit limits at scale.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',                   item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Hire AI Engineers',      item: 'https://kovil.ai/hire' },
    { '@type': 'ListItem', position: 3, name: 'n8n Automation Experts', item: 'https://kovil.ai/hire/n8n-automation-experts' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-20"><N8NAutomationExpertsPage /></div>
    </>
  )
}
