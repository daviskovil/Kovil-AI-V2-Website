import type { Metadata } from 'next'
import WorkdayPlatformPage from '@/src/pages/platforms/workday/WorkdayPlatformPage'

export const metadata: Metadata = {
  title: 'Workday Platform Partner — AI Agents & Specialist Talent',
  description: 'Kovil AI is your single partner for Workday — Illuminate AI agents, plus vetted HCM consultants, integration developers, and financial management specialists matched in 48 hours. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/platforms/workday' },
  keywords: [
    'workday ai agent',
    'workday illuminate',
    'hire workday consultant',
    'hire workday integration developer',
    'workday staff augmentation',
    'workday hcm consultant',
    'workday systems integrator alternative',
    'what is workday',
  ],
  openGraph: {
    type: 'website',
    title: 'Workday Platform Partner — AI Agents & Specialist Talent | Kovil AI',
    description: 'Illuminate AI agents, plus vetted HCM consultants, integration developers, and financial management specialists matched in 48 hours. 2-week risk-free trial.',
    url: 'https://kovil.ai/platforms/workday',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workday Platform Partner — AI Agents & Specialist Talent | Kovil AI',
    description: 'Illuminate AI agents, plus vetted HCM consultants, integration developers, and financial management specialists matched in 48 hours.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Workday Platform Services — AI Agents & Specialist Talent',
  description: 'Kovil AI delivers Illuminate AI agent implementations and staffs vetted Workday HCM consultants, integration developers, and financial management specialists — covering HCM, Financial Management, Payroll, Adaptive Planning, Recruiting, and Learning.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
    sameAs: [
      'https://www.linkedin.com/company/kovil-ai/',
      'https://clutch.co/profile/kovil-ai',
      'https://www.crunchbase.com/organization/kovil-ai',
    ],
  },
  serviceType: 'Workday Implementation and Staffing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/workday',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Workday Platform Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Illuminate AI Agent Implementation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Workday HCM Consultant Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Workday Integration Developer Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Financial Management Consultant Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Illuminate AI Specialist Staffing' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/workday' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Workday',
  description: 'Workday is a cloud platform for human capital management (HCM) and financial management, built around a shared data model spanning core HR, payroll, recruiting, learning, financial management, and Adaptive Planning, with Illuminate as its native AI layer.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/workday',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Workday Platform Partner — AI Agents & Specialist Talent',
  description: 'Kovil AI is your single partner for Workday — Illuminate AI agents, plus vetted HCM consultants, integration developers, and financial management specialists.',
  url: 'https://kovil.ai/platforms/workday',
  datePublished: '2026-09-30',
  dateModified: '2026-09-30',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '#definition p', '#faq h3'],
  },
  publisher: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Work With Kovil AI on Workday',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Tenant', text: "Tell us which Workday modules you run, what's broken or missing, and whether you need an AI agent, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/workday' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: 'Review 2-3 vetted Workday specialists, or take an Illuminate scoping call, matched to your modules and stack.', url: 'https://kovil.ai/platforms/workday' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/workday' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Workday?', acceptedAnswer: { '@type': 'Answer', text: 'Workday is a cloud platform for human capital management (HCM) and financial management, built around a shared data model spanning core HR, payroll, recruiting, learning, financial management, and Adaptive Planning.' } },
    { '@type': 'Question', name: 'What is the difference between Workday and Workday Illuminate?', acceptedAnswer: { '@type': 'Answer', text: "Workday is the underlying HCM and Financials platform; Illuminate is Workday's native AI layer, built on top of it, for autonomous HR and finance workflows grounded in real tenant data." } },
    { '@type': 'Question', name: 'Does Kovil AI build custom AI agents on Workday, or only staff talent?', acceptedAnswer: { '@type': 'Answer', text: "Both, and they're often the same engagement. Clients commonly hire a Workday consultant to clean up business process configuration, then layer Illuminate AI agents on top." } },
    { '@type': 'Question', name: 'How much does it cost to hire a Workday consultant through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: "Kovil AI's remote Workday talent bills $22-$45 per hour depending on role and experience, versus $65-$180+ per hour for prevailing US onsite rates for the same roles, typically 69-73% lower." } },
    { '@type': 'Question', name: 'What is the difference between a Workday HCM Consultant, Integration Developer, and Financial Management Consultant?', acceptedAnswer: { '@type': 'Answer', text: "An HCM Consultant configures core HR and compensation using Workday's business process framework. An Integration Developer builds custom integrations with Workday Studio and EIBs. A Financial Management Consultant designs the chart of accounts and financial reporting structure." } },
    { '@type': 'Question', name: 'How quickly can I hire a Workday specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched within 24-48 hours of submitting a brief, with work starting within a week, backed by a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'Do your Workday engineers hold official certifications?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We verify Workday Pro certifications directly as part of vetting, including HCM, Integrations, and Financial Management, alongside a live technical assessment.' } },
    { '@type': 'Question', name: 'Can Kovil AI integrate Workday with other systems like Slack or ServiceNow?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our Workday talent regularly builds integrations using Workday Studio, EIBs, and REST/SOAP APIs.' } },
    { '@type': 'Question', name: 'Who owns the integrations and configurations built during an engagement?', acceptedAnswer: { '@type': 'Answer', text: 'You do, 100%. All EIBs, Studio integrations, business process configurations, and documentation are fully owned by you under clear IP-assignment terms, with no shared IP and no lock-in.' } },
    { '@type': 'Question', name: 'Can I combine an Illuminate AI agent build with Workday staff augmentation in one engagement?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A single Engagement Manager can coordinate an Illuminate build alongside dedicated consultant or developer talent working in the same tenant.' } },
    { '@type': 'Question', name: 'What Workday modules does Kovil AI have experience with?', acceptedAnswer: { '@type': 'Answer', text: 'HCM, Financial Management, Payroll, Adaptive Planning, Recruiting, and Learning, plus integrations including Slack and ServiceNow.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from a traditional Workday systems integrator?', acceptedAnswer: { '@type': 'Answer', text: 'Traditional SIs typically scope a fixed project and hand it to a rotating bench of consultants. Kovil AI embeds a single accountable engineer or small pod directly with your team under one Engagement Manager.' } },
    { '@type': 'Question', name: 'Can we extend a trial engagement or convert it to a long-term hire?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most clients extend the engagement as new modules or Illuminate use cases come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way.' } },
    { '@type': 'Question', name: 'Do you support Workday rescues or fixing a failing implementation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A significant share of our Workday engagements start as a rescue of a tenant with years of business process debt or a broken integration, which we audit and rebuild in milestone-gated phases.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://kovil.ai/platforms' },
    { '@type': 'ListItem', position: 3, name: 'Workday', item: 'https://kovil.ai/platforms/workday' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-20"><WorkdayPlatformPage /></div>
    </>
  )
}
