import type { Metadata } from 'next'
import SalesforcePlatformPage from '@/src/pages/platforms/salesforce/SalesforcePlatformPage'

export const metadata: Metadata = {
  title: 'Salesforce Platform Partner — AI Agents & Specialist Talent',
  description: 'Kovil AI is your single partner for the Salesforce ecosystem — Agentforce AI agents, plus vetted Salesforce administrators, developers, and architects matched in 48 hours. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/platforms/salesforce' },
  keywords: [
    'salesforce ai agent',
    'hire salesforce developer',
    'hire salesforce administrator',
    'hire salesforce architect',
    'salesforce staff augmentation',
    'salesforce consulting partner',
    'agentforce vs salesforce',
    'salesforce implementation partner',
    'apex developer for hire',
    'lightning web components developer',
    'salesforce data cloud consultant',
    'salesforce systems integrator alternative',
    'what is the salesforce platform',
  ],
  openGraph: {
    type: 'website',
    title: 'Salesforce Platform Partner — AI Agents & Specialist Talent | Kovil AI',
    description: 'Agentforce AI agents, plus vetted Salesforce administrators, developers, and architects matched in 48 hours. 2-week risk-free trial.',
    url: 'https://kovil.ai/platforms/salesforce',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salesforce Platform Partner — AI Agents & Specialist Talent | Kovil AI',
    description: 'Agentforce AI agents, plus vetted Salesforce administrators, developers, and architects matched in 48 hours.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Salesforce Platform Services — AI Agents & Specialist Talent',
  description: 'Kovil AI delivers Agentforce AI agent implementations and staffs vetted Salesforce administrators, developers, and architects — covering Sales Cloud, Service Cloud, Marketing Cloud, Data Cloud, Experience Cloud, and MuleSoft integration.',
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
  serviceType: 'Salesforce Implementation and Staffing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/salesforce',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Salesforce Platform Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Agentforce AI Agent Implementation', url: 'https://kovil.ai/agentforce' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Salesforce Administrator Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Salesforce Developer Staffing (Apex/LWC)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Salesforce Architect & Consultant Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Agentforce Specialist Staffing' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/salesforce' },
}

// DefinedTerm — gives answer engines a clean, unambiguous definition of the
// Salesforce platform to lift, independent of the FAQ prose.
const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Salesforce',
  description: "Salesforce is the world's leading customer relationship management (CRM) platform — a suite of connected clouds (Sales Cloud, Service Cloud, Marketing Cloud, Data Cloud, and Experience Cloud) built on one underlying data model, extended by Apex, Lightning Web Components, and Salesforce Flow, with Agentforce as its native layer for building autonomous AI agents on top of that data.",
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/salesforce',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Salesforce Platform Partner — AI Agents & Specialist Talent',
  description: 'Kovil AI is your single partner for the Salesforce ecosystem — Agentforce AI agents, plus vetted Salesforce administrators, developers, and architects.',
  url: 'https://kovil.ai/platforms/salesforce',
  datePublished: '2026-09-24',
  dateModified: '2026-09-24',
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
  name: 'How to Work With Kovil AI on Salesforce',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Org', text: "Tell us which Salesforce clouds you run, what's broken or missing, and whether you need an AI agent, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/salesforce' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: 'Review 2-3 vetted Salesforce specialists, or take an Agentforce scoping call, matched to your clouds and stack.', url: 'https://kovil.ai/platforms/salesforce' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/salesforce' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the Salesforce platform?', acceptedAnswer: { '@type': 'Answer', text: "Salesforce is the world's leading customer relationship management (CRM) platform, built around a unified data model that spans sales, service, marketing, commerce, and now AI agents. Salesforce is a suite of connected clouds — Sales Cloud, Service Cloud, Marketing Cloud, Data Cloud, and Experience Cloud — all built on the same underlying platform (Apex, Lightning Web Components, and Salesforce Flow) so data, automation, and AI agents can move across every department without duplicate systems." } },
    { '@type': 'Question', name: 'What is the difference between Salesforce and Agentforce?', acceptedAnswer: { '@type': 'Answer', text: "Salesforce is the underlying CRM platform; Agentforce is Salesforce's native AI agent layer, built on top of it, using the Atlas Reasoning Engine, Einstein Trust Layer, and Prompt Builder to let autonomous agents resolve cases, qualify leads, and take actions inside your existing Salesforce data. Deep Agentforce implementation work lives at kovil.ai/agentforce; this page covers the full Salesforce platform and the specialist talent who run it." } },
    { '@type': 'Question', name: 'Does Kovil AI build custom AI agents on Salesforce, or only staff talent?', acceptedAnswer: { '@type': 'Answer', text: "Both, and they're often the same engagement. Clients commonly hire a Salesforce developer or admin to stabilize or extend their org, then layer Agentforce AI agents on top of the data and automation that talent has built, or the reverse." } },
    { '@type': 'Question', name: 'How much does it cost to hire a Salesforce developer through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: "Kovil AI's remote Salesforce talent bills $18-$45 per hour depending on role and experience, versus $50-$250+ per hour for prevailing US onsite rates for the same roles, typically 65-79% lower at the same certification bar." } },
    { '@type': 'Question', name: 'What is the difference between a Salesforce Administrator, Developer, and Architect?', acceptedAnswer: { '@type': 'Answer', text: "A Salesforce Administrator configures the platform declaratively (Flow, page layouts, permission sets) without code. A Salesforce Developer builds custom functionality with Apex and Lightning Web Components. A Salesforce Architect designs the overall data model and integration strategy for large or multi-cloud implementations, and is typically the most senior and hardest-to-hire of the three." } },
    { '@type': 'Question', name: 'How quickly can I hire a Salesforce specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched with a vetted Salesforce admin, developer, or architect within 24-48 hours of submitting a brief, with work starting within a week, backed by a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'Do your Salesforce engineers hold official Salesforce certifications?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We verify Salesforce certifications directly as part of vetting, including Administrator, Platform App Builder, Platform Developer I and II, Application Architect, System Architect, and cloud-specific consultant certifications, alongside a live technical assessment.' } },
    { '@type': 'Question', name: 'Can Kovil AI integrate Salesforce with other systems like MuleSoft, NetSuite, or Slack?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our Salesforce talent and Forward Deployed Engineers regularly build integrations using MuleSoft, native Salesforce REST/SOAP APIs, Slack, DocuSign, and NetSuite.' } },
    { '@type': 'Question', name: 'Who owns the code, configurations, and integrations built during an engagement?', acceptedAnswer: { '@type': 'Answer', text: 'You do, 100%. All Apex code, Lightning components, Flow automations, integrations, and documentation are fully owned by you under clear IP-assignment terms, with no shared IP and no lock-in.' } },
    { '@type': 'Question', name: 'Can I combine an Agentforce AI agent build with Salesforce staff augmentation in one engagement?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A single Engagement Manager can coordinate an Agentforce AI agent build alongside dedicated Salesforce admin or developer talent working in the same org, so both are built by people talking to each other daily.' } },
    { '@type': 'Question', name: 'What Salesforce clouds does Kovil AI have experience with?', acceptedAnswer: { '@type': 'Answer', text: 'Sales Cloud, Service Cloud, Marketing Cloud, Data Cloud, Experience Cloud, and Salesforce CPQ, plus integrations including MuleSoft, Slack, Tableau, and Agentforce.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from a traditional Salesforce systems integrator or partner agency?', acceptedAnswer: { '@type': 'Answer', text: 'Traditional SIs typically scope a fixed project and hand it to a rotating bench of consultants. Kovil AI embeds a single accountable engineer or small pod directly with your team under one Engagement Manager, with a 2-week risk-free trial and no long-term lock-in.' } },
    { '@type': 'Question', name: 'Can we extend a trial engagement or convert it to a long-term hire?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most clients extend the engagement as new Salesforce workflows or AI agent use cases come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way.' } },
    { '@type': 'Question', name: 'Do you support Salesforce org rescues or fixing a failing implementation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A significant share of our Salesforce engagements start as a rescue of an org with years of technical debt, a stalled Agentforce pilot, or a broken integration, which we audit and rebuild in milestone-gated phases.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://kovil.ai/platforms' },
    { '@type': 'ListItem', position: 3, name: 'Salesforce', item: 'https://kovil.ai/platforms/salesforce' },
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
      <div className="pt-20"><SalesforcePlatformPage /></div>
    </>
  )
}
