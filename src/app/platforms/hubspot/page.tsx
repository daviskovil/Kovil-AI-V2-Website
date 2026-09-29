import type { Metadata } from 'next'
import HubSpotPlatformPage from '@/src/pages/platforms/hubspot/HubSpotPlatformPage'

export const metadata: Metadata = {
  title: 'HubSpot Platform Partner — AI Agents & Specialist Talent',
  description: 'Kovil AI is your single partner for the HubSpot ecosystem — Breeze AI agents, plus vetted HubSpot administrators, developers, and RevOps architects matched in 48 hours. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/platforms/hubspot' },
  keywords: [
    'hubspot ai agent',
    'hire hubspot developer',
    'hire hubspot administrator',
    'hubspot staff augmentation',
    'hubspot solutions partner alternative',
    'breeze ai vs hubspot',
    'hubl developer for hire',
    'hubspot revops architect',
    'hubspot systems integrator alternative',
    'what is hubspot',
  ],
  openGraph: {
    type: 'website',
    title: 'HubSpot Platform Partner — AI Agents & Specialist Talent | Kovil AI',
    description: 'Breeze AI agents, plus vetted HubSpot administrators, developers, and RevOps architects matched in 48 hours. 2-week risk-free trial.',
    url: 'https://kovil.ai/platforms/hubspot',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HubSpot Platform Partner — AI Agents & Specialist Talent | Kovil AI',
    description: 'Breeze AI agents, plus vetted HubSpot administrators, developers, and RevOps architects matched in 48 hours.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'HubSpot Platform Services — AI Agents & Specialist Talent',
  description: 'Kovil AI delivers Breeze AI agent implementations and staffs vetted HubSpot administrators, developers, and RevOps architects — covering Marketing Hub, Sales Hub, Service Hub, Content Hub, Operations Hub, and Commerce Hub.',
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
  serviceType: 'HubSpot Implementation and Staffing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/hubspot',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'HubSpot Platform Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Breeze AI Agent Implementation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'HubSpot Administrator Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'HubSpot Developer Staffing (CMS/HubL/API)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'RevOps & Solutions Architect Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Breeze AI Specialist Staffing' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/hubspot' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'HubSpot',
  description: 'HubSpot is a leading all-in-one customer platform built around six connected Hubs — Marketing Hub, Sales Hub, Service Hub, Content Hub (CMS), Operations Hub, and Commerce Hub — sharing one CRM data model, with Breeze as its native layer for building AI-powered marketing, sales, and service agents.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/hubspot',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'HubSpot Platform Partner — AI Agents & Specialist Talent',
  description: 'Kovil AI is your single partner for the HubSpot ecosystem — Breeze AI agents, plus vetted HubSpot administrators, developers, and RevOps architects.',
  url: 'https://kovil.ai/platforms/hubspot',
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
  name: 'How to Work With Kovil AI on HubSpot',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Portal', text: "Tell us which HubSpot Hubs you run, what's broken or missing, and whether you need an AI agent, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/hubspot' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: 'Review 2-3 vetted HubSpot specialists, or take a Breeze AI scoping call, matched to your Hubs and stack.', url: 'https://kovil.ai/platforms/hubspot' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/hubspot' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is HubSpot?', acceptedAnswer: { '@type': 'Answer', text: 'HubSpot is a leading all-in-one customer platform built around six connected Hubs — Marketing Hub, Sales Hub, Service Hub, Content Hub (CMS), Operations Hub, and Commerce Hub — sharing one CRM data model. Breeze is its native AI layer for building AI-powered marketing, sales, and service workflows.' } },
    { '@type': 'Question', name: 'What is the difference between HubSpot and Breeze AI?', acceptedAnswer: { '@type': 'Answer', text: "HubSpot is the underlying CRM and Hub platform; Breeze is HubSpot's native AI layer, built on top of it. Breeze Copilot assists inside the app, while Breeze Agents work autonomously, grounded in your real CRM data." } },
    { '@type': 'Question', name: 'Does Kovil AI build custom AI agents on HubSpot, or only staff talent?', acceptedAnswer: { '@type': 'Answer', text: "Both, and they're often the same engagement. Clients commonly hire a HubSpot developer or admin to clean up their portal, then layer Breeze AI agents and custom workflow automation on top." } },
    { '@type': 'Question', name: 'How much does it cost to hire a HubSpot developer through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: "Kovil AI's remote HubSpot talent bills $18-$42 per hour depending on role and experience, versus $45-$160+ per hour for prevailing US onsite rates for the same roles, typically 62-73% lower at the same certification bar." } },
    { '@type': 'Question', name: 'What is the difference between a HubSpot Administrator, Developer, and Solutions Architect?', acceptedAnswer: { '@type': 'Answer', text: 'A HubSpot Administrator configures the portal declaratively (workflows, properties, permission sets) without code. A HubSpot Developer builds custom functionality with HubL and the HubSpot API. A RevOps & Solutions Architect designs the overall data model and Hub-to-Hub integration strategy, and is typically the most senior and hardest-to-hire of the three.' } },
    { '@type': 'Question', name: 'How quickly can I hire a HubSpot specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched with a vetted HubSpot admin, developer, or RevOps architect within 24-48 hours of submitting a brief, with work starting within a week, backed by a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'Do your HubSpot engineers hold official HubSpot certifications?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We verify HubSpot Academy certifications directly as part of vetting, including Inbound, Marketing Software, CMS for Developers, HubSpot APIs, RevOps, and Breeze AI, alongside a live technical assessment.' } },
    { '@type': 'Question', name: 'Can Kovil AI integrate HubSpot with other systems like Salesforce, Slack, or Stripe?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our HubSpot talent regularly builds integrations using the HubSpot API, native Salesforce sync, Slack, Stripe, and custom middleware via Operations Hub.' } },
    { '@type': 'Question', name: 'Who owns the code, workflows, and integrations built during an engagement?', acceptedAnswer: { '@type': 'Answer', text: 'You do, 100%. All custom code, modules, workflows, integrations, and documentation are fully owned by you under clear IP-assignment terms, with no shared IP and no lock-in.' } },
    { '@type': 'Question', name: 'Can I combine a Breeze AI agent build with HubSpot staff augmentation in one engagement?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A single Engagement Manager can coordinate a Breeze AI build alongside dedicated HubSpot admin or developer talent working in the same portal.' } },
    { '@type': 'Question', name: 'What HubSpot Hubs does Kovil AI have experience with?', acceptedAnswer: { '@type': 'Answer', text: 'Marketing Hub, Sales Hub, Service Hub, Content Hub (CMS), Operations Hub, and Commerce Hub, plus integrations including Salesforce, Slack, and Stripe.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from a traditional HubSpot agency or Solutions Partner?', acceptedAnswer: { '@type': 'Answer', text: 'Traditional agencies typically scope a fixed retainer and hand it to a rotating bench of consultants. Kovil AI embeds a single accountable engineer or small pod directly with your team under one Engagement Manager, with a 2-week risk-free trial and no long-term lock-in.' } },
    { '@type': 'Question', name: 'Can we extend a trial engagement or convert it to a long-term hire?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most clients extend the engagement as new Hubs or AI agent use cases come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way.' } },
    { '@type': 'Question', name: 'Do you support HubSpot portal rescues or fixing a messy implementation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A significant share of our HubSpot engagements start as a rescue of a portal with duplicate properties, broken workflows, or a stalled migration, which we audit and rebuild in milestone-gated phases.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://kovil.ai/platforms' },
    { '@type': 'ListItem', position: 3, name: 'HubSpot', item: 'https://kovil.ai/platforms/hubspot' },
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
      <div className="pt-20"><HubSpotPlatformPage /></div>
    </>
  )
}
