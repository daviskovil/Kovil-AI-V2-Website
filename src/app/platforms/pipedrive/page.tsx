import type { Metadata } from 'next'
import PipedrivePlatformPage from '@/src/pages/platforms/pipedrive/PipedrivePlatformPage'

export const metadata: Metadata = {
  title: 'Pipedrive Platform Partner — AI Automation & Specialist Talent',
  description: 'Kovil AI is your single partner for the Pipedrive stack — custom AI automation, plus vetted Pipedrive administrators, automation developers, and RevOps consultants matched in 48 hours. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/platforms/pipedrive' },
  keywords: [
    'pipedrive ai automation',
    'hire pipedrive developer',
    'hire pipedrive administrator',
    'pipedrive staff augmentation',
    'pipedrive zapier automation',
    'pipedrive revops consultant',
    'pipedrive api integration',
    'what is pipedrive',
  ],
  openGraph: {
    type: 'website',
    title: 'Pipedrive Platform Partner — AI Automation & Specialist Talent | Kovil AI',
    description: 'Custom AI automation, plus vetted Pipedrive administrators, developers, and RevOps consultants matched in 48 hours. 2-week risk-free trial.',
    url: 'https://kovil.ai/platforms/pipedrive',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pipedrive Platform Partner — AI Automation & Specialist Talent | Kovil AI',
    description: 'Custom AI automation, plus vetted Pipedrive administrators, developers, and RevOps consultants matched in 48 hours.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Pipedrive Platform Services — AI Automation & Specialist Talent',
  description: 'Kovil AI delivers custom AI automation built on Pipedrive and staffs vetted Pipedrive administrators, automation developers, and RevOps consultants — covering pipeline configuration, Zapier/Make integration, and lead qualification.',
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
  serviceType: 'Pipedrive Implementation and Staffing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/pipedrive',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Pipedrive Platform Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Automation Build (Zapier/Make/API)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pipedrive Administrator Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pipedrive Automation Developer Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'RevOps & Sales Ops Consultant Staffing' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/pipedrive' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Pipedrive',
  description: 'Pipedrive is a sales-first CRM built around a visual, drag-and-drop pipeline, designed for small and growing sales teams, combining deal and contact management, email sync, workflow automation, and built-in AI, extended through Zapier/Make automation and a marketplace of integrations.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/pipedrive',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Pipedrive Platform Partner — AI Automation & Specialist Talent',
  description: 'Kovil AI is your single partner for the Pipedrive stack — custom AI automation, plus vetted Pipedrive administrators, developers, and RevOps consultants.',
  url: 'https://kovil.ai/platforms/pipedrive',
  datePublished: '2026-09-29',
  dateModified: '2026-09-29',
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
  name: 'How to Work With Kovil AI on Pipedrive',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Pipeline', text: "Tell us how your pipeline is structured, what's broken or manual, and whether you need automation, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/pipedrive' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: 'Review 2-3 vetted Pipedrive specialists matched to your stack and automation needs.', url: 'https://kovil.ai/platforms/pipedrive' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/pipedrive' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Pipedrive?', acceptedAnswer: { '@type': 'Answer', text: 'Pipedrive is a sales-first CRM built around a visual, drag-and-drop pipeline, designed for small and growing sales teams. It combines deal and contact management, email sync, workflow automation, and built-in AI, extended through Zapier/Make automation and a marketplace of integrations.' } },
    { '@type': 'Question', name: 'Does Pipedrive have native AI, or do I need a custom build?', acceptedAnswer: { '@type': 'Answer', text: "Pipedrive ships built-in AI for deal insights, smart contact data, and email assistance. Kovil AI builds custom AI agents through Zapier, Make, or the Pipedrive API for multi-step automation across tools it doesn't natively integrate with." } },
    { '@type': 'Question', name: 'Does Kovil AI build custom automation on Pipedrive, or only staff talent?', acceptedAnswer: { '@type': 'Answer', text: "Both, and they're often the same engagement. Clients commonly hire a Pipedrive administrator to clean up pipeline hygiene, then layer AI-driven automation on top." } },
    { '@type': 'Question', name: 'How much does it cost to hire a Pipedrive specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: "Kovil AI's remote Pipedrive talent bills $18-$38 per hour depending on role and experience, versus $35-$120+ per hour for prevailing US onsite rates for the same roles, typically 56-67% lower." } },
    { '@type': 'Question', name: 'What is the difference between a Pipedrive Administrator, Automation Developer, and RevOps Consultant?', acceptedAnswer: { '@type': 'Answer', text: 'A Pipedrive Administrator configures the pipeline itself. A Pipedrive Automation Developer builds the layer connecting Pipedrive to everything else via Zapier, Make, or the REST API. A RevOps & Sales Ops Consultant designs the broader pipeline strategy and forecasting structure.' } },
    { '@type': 'Question', name: 'How quickly can I hire a Pipedrive specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched with a vetted specialist within 24-48 hours of submitting a brief, with work starting within a week, backed by a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'Is there such a thing as a certified Pipedrive specialist?', acceptedAnswer: { '@type': 'Answer', text: "Pipedrive doesn't run as extensive a certification program as Salesforce or HubSpot. Where relevant, we verify the Pipedrive Certified Partner credential, but weight a live build challenge and production portfolio review far more heavily." } },
    { '@type': 'Question', name: 'Can Kovil AI integrate Pipedrive with other systems like Slack, Stripe, or accounting tools?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our Pipedrive talent regularly builds integrations using Zapier, Make, the Pipedrive REST API, and webhooks, connecting Pipedrive to Slack, Stripe, QuickBooks, and more.' } },
    { '@type': 'Question', name: 'Who owns the automations and integrations built during an engagement?', acceptedAnswer: { '@type': 'Answer', text: 'You do, 100%. All workflows, integrations, and documentation are fully owned by you under clear IP-assignment terms, with no shared IP and no lock-in.' } },
    { '@type': 'Question', name: 'Can I combine an AI automation build with Pipedrive staff augmentation in one engagement?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A single Engagement Manager can coordinate an AI automation build alongside dedicated Pipedrive admin or developer talent working in the same account.' } },
    { '@type': 'Question', name: 'What does Kovil AI typically build on top of Pipedrive?', acceptedAnswer: { '@type': 'Answer', text: 'Deal-scoring models tuned to your sales cycle, LeadBooster-to-CRM qualification flows, cross-tool automation via Zapier or Make, and data-hygiene audits.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from a Pipedrive Marketplace app or a freelance consultant?', acceptedAnswer: { '@type': 'Answer', text: 'A Marketplace app solves one narrow problem. A freelancer solves what you asked for with no ongoing oversight. Kovil AI embeds a single accountable specialist under an Engagement Manager who audits every milestone.' } },
    { '@type': 'Question', name: 'Can we extend a trial engagement or convert it to a long-term hire?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most clients extend the engagement as new automation needs come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way.' } },
    { '@type': 'Question', name: 'Do you support Pipedrive rescues or fixing a messy pipeline?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A meaningful share of our Pipedrive engagements start as a rescue of duplicate deals, undefined stages, or forgotten automations, which we audit and rebuild in milestone-gated phases.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://kovil.ai/platforms' },
    { '@type': 'ListItem', position: 3, name: 'Pipedrive', item: 'https://kovil.ai/platforms/pipedrive' },
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
      <div className="pt-20"><PipedrivePlatformPage /></div>
    </>
  )
}
