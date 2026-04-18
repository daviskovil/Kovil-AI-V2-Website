import type { Metadata } from 'next'
import NYAgencyPage from '@/src/pages/ad-marketing-agencies/NYAgencyPage'

export const metadata: Metadata = {
  title: 'AI Engineers for NY Ad & Marketing Agencies — Matched in 48 Hours | Kovil AI',
  description: 'Kovil AI embeds vetted AI engineers into New York marketing agencies in 48 hours. AI orchestration, workflow automation, campaign intelligence, and AI integration — 2-week risk-free trial, no lock-in.',
  alternates: { canonical: 'https://kovil.ai/ad-marketing-agencies' },
  keywords: [
    'AI engineers for marketing agencies',
    'AI for advertising agencies New York',
    'hire AI engineer NYC',
    'AI workflow automation marketing agency',
    'AI campaign intelligence',
    'AI for NY ad agencies',
    'marketing agency AI integration',
    'AI orchestration for agencies',
    'AI automation for digital marketing',
    'hire AI engineer for marketing',
  ],
  openGraph: {
    type: 'website',
    title: 'AI Engineers for NY Ad & Marketing Agencies — Matched in 48 Hours | Kovil AI',
    description: 'Kovil AI embeds vetted AI talent into marketing agencies in 48 hours. AI orchestration, workflow automation, campaign intelligence — risk-free 2-week trial.',
    url: 'https://kovil.ai/ad-marketing-agencies',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'AI Engineers for NY Marketing Agencies — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Engineers for NY Marketing Agencies — 48-Hour Match | Kovil AI',
    description: 'Vetted AI engineers embedded in NY agencies in 48 hours. AI orchestration, workflow automation, campaign AI — risk-free trial.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Kovil AI — AI Engineers for Marketing Agencies',
  description: 'Kovil AI embeds vetted Tier-1 AI engineers into New York advertising and marketing agencies within 48 hours. Specialists in AI orchestration, workflow automation, digital marketing AI, and AI integration.',
  url: 'https://kovil.ai/ad-marketing-agencies',
  telephone: '+16465359141',
  areaServed: [
    { '@type': 'City', name: 'New York City' },
    { '@type': 'State', name: 'New York' },
    { '@type': 'Country', name: 'United States' },
  ],
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/og-image.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+16465359141',
      contactType: 'Sales',
      areaServed: 'US',
    },
  },
  offers: {
    '@type': 'AggregateOffer',
    offerCount: 3,
    offers: [
      { '@type': 'Offer', name: 'Managed AI Engineer', description: 'Embed a pre-vetted AI engineer into your agency team in 48 hours.', url: 'https://kovil.ai/engage/managed-ai-engineer' },
      { '@type': 'Offer', name: 'Outcome-Based AI Project', description: 'Fixed scope, fixed timeline AI builds for marketing agencies.', url: 'https://kovil.ai/engage/outcome-based-project' },
      { '@type': 'Offer', name: 'AI App Rescue', description: 'Audit, fix, and maintain broken AI builds inherited from other vendors.', url: 'https://kovil.ai/engage/app-rescue' },
    ],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Engineering for Marketing Agencies',
  description: 'Kovil AI provides vetted Tier-1 AI engineers to New York advertising and marketing agencies. Services include AI orchestration, AI workflow automation, digital marketing AI, and AI integration into existing marketing stacks.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  serviceType: 'AI Engineering for Marketing Agencies',
  areaServed: { '@type': 'City', name: 'New York City' },
  url: 'https://kovil.ai/ad-marketing-agencies',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Services for Marketing Agencies',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Orchestration', description: 'Connect and coordinate multiple AI models, APIs, and data sources into a single intelligent system.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI in Digital Marketing', description: 'AI-powered campaign intelligence, automated performance reporting, and personalization engines.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Workflow Automation', description: 'Automate brief intake, creative approvals, reporting pipelines, and client updates with AI agents.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Integration', description: 'Integrate AI models into existing stacks — HubSpot, Salesforce, Meta Ads, Google Analytics.' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How quickly can Kovil AI embed an AI engineer into my marketing agency?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most agencies are matched with a vetted AI engineer within 48 hours of submitting a brief. The engineer starts on a milestone plan within 3–5 days, and every engagement includes a 2-week risk-free trial — you only pay if you hire.' },
    },
    {
      '@type': 'Question',
      name: 'What AI services does Kovil AI build for marketing agencies?',
      acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI builds AI orchestration systems, AI workflow automation, digital marketing AI (campaign intelligence, performance reporting, personalization), and AI integrations into existing tools like HubSpot, Salesforce, Meta Ads, and Google Analytics.' },
    },
    {
      '@type': 'Question',
      name: 'How is Kovil AI different from freelancers or offshore agencies?',
      acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI is an embedded engineering partner — not a freelance marketplace. Every engineer passes a 5-stage vetting process. Every engagement has an Engagement Manager who audits milestone outputs before they reach you. Sprint-based delivery with clear outcomes, not open-ended hours.' },
    },
    {
      '@type': 'Question',
      name: 'What is the risk-free trial?',
      acceptedAnswer: { '@type': 'Answer', text: 'You work with your matched AI engineer for two weeks at no cost. If the fit is not right — technically or culturally — you owe nothing. We will rematch you with a different engineer at no additional cost.' },
    },
    {
      '@type': 'Question',
      name: 'Can you build AI workflow automation for a marketing agency?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Kovil AI engineers automate brief intake, creative approvals, reporting pipelines, and client updates using AI agents built with frameworks like n8n, CrewAI, LangGraph, and custom LLM pipelines. These run reliably in production — not just as demos.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',                         item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'AI for Marketing Agencies',    item: 'https://kovil.ai/ad-marketing-agencies' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-20"><NYAgencyPage /></div>
    </>
  )
}
