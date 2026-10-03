import type { Metadata } from 'next'
import MuleSoftPlatformPage from '@/src/pages/platforms/mulesoft/MuleSoftPlatformPage'

export const metadata: Metadata = {
  title: 'MuleSoft Platform Partner — AI Integrations & Specialist Talent',
  description: 'Kovil AI is your single partner for MuleSoft — agent-ready API and AI integration builds, plus vetted integration engineers, API developers, and architects matched in 48 hours. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/platforms/mulesoft' },
  keywords: [
    'mulesoft ai integration',
    'hire mulesoft developer',
    'mulesoft integration architect',
    'mulesoft staff augmentation',
    'mulesoft agent fabric',
    'anypoint platform consultant',
    'api-led connectivity',
    'what is mulesoft',
  ],
  openGraph: {
    type: 'website',
    title: 'MuleSoft Platform Partner — AI Integrations & Specialist Talent | Kovil AI',
    description: 'Agent-ready API and AI integration builds, plus vetted integration engineers, API developers, and architects matched in 48 hours. 2-week risk-free trial.',
    url: 'https://kovil.ai/platforms/mulesoft',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MuleSoft Platform Partner — AI Integrations & Specialist Talent | Kovil AI',
    description: 'Agent-ready API and AI integration builds, plus vetted integration engineers, API developers, and architects matched in 48 hours.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'MuleSoft Platform Services — AI Integrations & Specialist Talent',
  description: 'Kovil AI delivers agent-ready API and AI integrations on MuleSoft and staffs vetted integration engineers, API developers, integration architects, and AI specialists — covering Anypoint Platform, DataWeave, and API governance.',
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
  serviceType: 'MuleSoft Implementation and Staffing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/mulesoft',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'MuleSoft Platform Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Integration Build' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'MuleSoft Integration Engineer Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'API Developer Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Integration Architect Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'MuleSoft AI Specialist Staffing' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/mulesoft' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'MuleSoft',
  description: 'MuleSoft is an integration and API management platform, owned by Salesforce, whose Anypoint Platform lets organizations design, build, deploy, and govern APIs and integrations that connect applications, data, and devices.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/mulesoft',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'MuleSoft Platform Partner — AI Integrations & Specialist Talent',
  description: 'Kovil AI is your single partner for MuleSoft — agent-ready API and AI integration builds, plus vetted integration engineers, API developers, and architects.',
  url: 'https://kovil.ai/platforms/mulesoft',
  datePublished: '2026-10-03',
  dateModified: '2026-10-03',
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
  name: 'How to Work With Kovil AI on MuleSoft',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Integration Estate', text: "Tell us which Anypoint components you run, what's broken or backlogged, and whether you need an AI build, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/mulesoft' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: 'Review 2-3 vetted MuleSoft specialists matched to your stack and systems.', url: 'https://kovil.ai/platforms/mulesoft' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/mulesoft' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is MuleSoft?', acceptedAnswer: { '@type': 'Answer', text: 'MuleSoft is an integration and API management platform, owned by Salesforce, whose Anypoint Platform lets organizations design, build, deploy, and govern APIs and integrations that connect applications, data, and devices — typically using an API-led connectivity approach.' } },
    { '@type': 'Question', name: 'What is API-led connectivity?', acceptedAnswer: { '@type': 'Answer', text: "API-led connectivity is MuleSoft's architectural approach of layering reusable APIs — system APIs that unlock data, process APIs that orchestrate it, and experience APIs that deliver it — so each new integration builds on existing assets instead of starting from scratch." } },
    { '@type': 'Question', name: 'Does Kovil AI build AI integrations on MuleSoft, or only staff talent?', acceptedAnswer: { '@type': 'Answer', text: "Both, and they're often the same engagement. Clients commonly hire an integration engineer to clean up the API layer first, then add AI capabilities on top of integrations that are already well-governed." } },
    { '@type': 'Question', name: 'How much does it cost to hire a MuleSoft developer through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: "Kovil AI's remote MuleSoft talent bills $24-$45 per hour depending on role and experience, versus $65-$165+ per hour for prevailing US onsite rates for the same roles — typically 66-71% lower, at the same certification bar." } },
    { '@type': 'Question', name: 'What is the difference between an Integration Engineer, API Developer, and Integration Architect?', acceptedAnswer: { '@type': 'Answer', text: 'An Integration Engineer builds Mule applications and flows. An API Developer designs specifications and implements reusable APIs with governance policies. An Integration Architect designs the overall API-led architecture and environment strategy for enterprise programs.' } },
    { '@type': 'Question', name: 'How quickly can I hire a MuleSoft specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched with a vetted engineer, developer, or architect within 24-48 hours of submitting a brief, with work starting within a week. A 2-week risk-free trial lets you validate fit and output before committing to a longer engagement.' } },
    { '@type': 'Question', name: 'Do your MuleSoft engineers hold official certifications?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We verify MuleSoft Certified Developer, Platform Architect, and Integration Architect credentials directly as part of vetting, alongside a live technical assessment, since certification alone does not test real production judgment.' } },
    { '@type': 'Question', name: 'Can Kovil AI connect MuleSoft to Salesforce Agentforce and Data Cloud?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Connecting Agentforce and Data Cloud to the rest of your systems is one of the most common MuleSoft engagements we run. See our MuleSoft and Data Cloud integration service for details.' } },
    { '@type': 'Question', name: 'Who owns the integrations built during an engagement?', acceptedAnswer: { '@type': 'Answer', text: 'You do, 100%. All APIs, flows, DataWeave code, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no shared IP, no lock-in.' } },
    { '@type': 'Question', name: 'Can I combine an AI build with MuleSoft staff augmentation in one engagement?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — this is one of the most common engagement shapes we run. A single Engagement Manager can coordinate an AI build alongside dedicated engineer or architect talent working in the same environment.' } },
    { '@type': 'Question', name: 'What does Kovil AI typically build on MuleSoft?', acceptedAnswer: { '@type': 'Answer', text: 'Reusable API layers, ERP-to-CRM integrations, agent-ready system APIs, and connectivity between Salesforce Agentforce and external data sources.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from a traditional MuleSoft systems integrator?', acceptedAnswer: { '@type': 'Answer', text: 'Traditional SIs typically scope a fixed project and hand it to a rotating bench of consultants. Kovil AI embeds a single accountable engineer or small pod directly with your team, under one Engagement Manager who audits every milestone — with a 2-week risk-free trial and no long-term lock-in.' } },
    { '@type': 'Question', name: 'Can we extend a trial engagement or convert it to a long-term hire?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most clients extend the engagement as new systems come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way.' } },
    { '@type': 'Question', name: 'Do you support MuleSoft rescues or fixing a failing integration program?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A significant share of our MuleSoft engagements start as a rescue — an API estate with no governance, flows nobody dares touch, or a program that stalled after the initial rollout. We audit the architecture, then stabilize and rebuild in milestone-gated phases.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://kovil.ai/platforms' },
    { '@type': 'ListItem', position: 3, name: 'MuleSoft', item: 'https://kovil.ai/platforms/mulesoft' },
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
      <div className="pt-20"><MuleSoftPlatformPage /></div>
    </>
  )
}
