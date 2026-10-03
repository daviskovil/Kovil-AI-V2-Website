import type { Metadata } from 'next'
import UiPathPlatformPage from '@/src/pages/platforms/uipath/UiPathPlatformPage'

export const metadata: Metadata = {
  title: 'UiPath Platform Partner — Agentic AI & Specialist Talent',
  description: 'Kovil AI is your single partner for UiPath — agentic automation builds, plus vetted RPA developers, business analysts, solution architects, and agentic AI specialists matched in 48 hours. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/platforms/uipath' },
  keywords: [
    'uipath ai agents',
    'hire uipath developer',
    'uipath solution architect',
    'uipath staff augmentation',
    'uipath agentic automation',
    'rpa developer for hire',
    'uipath document understanding',
    'what is uipath',
  ],
  openGraph: {
    type: 'website',
    title: 'UiPath Platform Partner — Agentic AI & Specialist Talent | Kovil AI',
    description: 'Agentic automation builds, plus vetted RPA developers, business analysts, and solution architects matched in 48 hours. 2-week risk-free trial.',
    url: 'https://kovil.ai/platforms/uipath',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UiPath Platform Partner — Agentic AI & Specialist Talent | Kovil AI',
    description: 'Agentic automation builds, plus vetted RPA developers, business analysts, and solution architects matched in 48 hours.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'UiPath Platform Services — Agentic AI & Specialist Talent',
  description: 'Kovil AI delivers agentic automation on UiPath and staffs vetted RPA developers, business analysts, solution architects, and agentic AI specialists — covering Studio, Orchestrator, Document Understanding, and Action Center.',
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
  serviceType: 'UiPath Implementation and Staffing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/uipath',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'UiPath Platform Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Agentic Automation Build' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'RPA Developer Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automation Business Analyst Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UiPath Solution Architect Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UiPath Agentic AI Specialist Staffing' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/uipath' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'UiPath',
  description: 'UiPath is an enterprise automation platform best known for robotic process automation (RPA), combining a workflow designer, an orchestration control plane, attended and unattended robots, document understanding, process mining, and agentic automation.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/uipath',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'UiPath Platform Partner — Agentic AI & Specialist Talent',
  description: 'Kovil AI is your single partner for UiPath — agentic automation builds, plus vetted RPA developers, business analysts, and solution architects.',
  url: 'https://kovil.ai/platforms/uipath',
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
  name: 'How to Work With Kovil AI on UiPath',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Automation Estate', text: "Tell us which UiPath components you run, what's broken or backlogged, and whether you need an agent build, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/uipath' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: 'Review 2-3 vetted UiPath specialists matched to your stack and process mix.', url: 'https://kovil.ai/platforms/uipath' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/uipath' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is UiPath?', acceptedAnswer: { '@type': 'Answer', text: 'UiPath is an enterprise automation platform best known for robotic process automation (RPA), combining a workflow designer (Studio), a control plane (Orchestrator), attended and unattended robots, document understanding, and process mining — now extended with agentic automation that uses AI agents to handle work that rule-based bots cannot.' } },
    { '@type': 'Question', name: 'What is the difference between RPA and agentic automation?', acceptedAnswer: { '@type': 'Answer', text: "RPA follows fixed, rule-based steps and breaks when screens or data change. Agentic automation uses AI agents that can interpret context and adapt. Kovil AI configures UiPath's native agentic features and, where they aren't enough, builds custom LLM-powered integrations on top." } },
    { '@type': 'Question', name: 'Does Kovil AI build custom agents on UiPath, or only staff talent?', acceptedAnswer: { '@type': 'Answer', text: "Both, and they're often the same engagement. Clients commonly hire an RPA developer to stabilize brittle bots, then layer agentic capabilities on top of processes that are already well-defined." } },
    { '@type': 'Question', name: 'How much does it cost to hire a UiPath developer through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: "Kovil AI's remote UiPath talent bills $22-$40 per hour depending on role and experience, versus $55-$150+ per hour for prevailing US onsite rates for the same roles — typically 64-71% lower, at the same certification bar." } },
    { '@type': 'Question', name: 'What is the difference between an RPA Developer, Business Analyst, and Solution Architect?', acceptedAnswer: { '@type': 'Answer', text: 'An RPA Developer builds and maintains automations in Studio. A Business Analyst discovers and scopes candidate processes and builds the business case. A Solution Architect designs Orchestrator topology, governance, and reusable-component strategy for enterprise programs.' } },
    { '@type': 'Question', name: 'How quickly can I hire a UiPath specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched with a vetted developer, analyst, or architect within 24-48 hours of submitting a brief, with work starting within a week. A 2-week risk-free trial lets you validate fit and output before committing to a longer engagement.' } },
    { '@type': 'Question', name: 'Do your UiPath engineers hold official certifications?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We verify UiPath Certified Professional credentials directly as part of vetting — Automation Developer, Business Analyst, and Advanced Developer — alongside a live technical assessment, since certification alone does not test real production judgment.' } },
    { '@type': 'Question', name: 'Can Kovil AI integrate UiPath with other systems like Salesforce or SAP?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our UiPath talent regularly builds automations and API integrations that connect UiPath to Salesforce, SAP, ServiceNow, and whatever else your business runs on.' } },
    { '@type': 'Question', name: 'Who owns the automations built during an engagement?', acceptedAnswer: { '@type': 'Answer', text: 'You do, 100%. All workflows, custom activities, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no shared IP, no lock-in.' } },
    { '@type': 'Question', name: 'Can I combine an agentic build with UiPath staff augmentation in one engagement?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — this is one of the most common engagement shapes we run. A single Engagement Manager can coordinate an agentic build alongside dedicated developer or analyst talent working in the same environment.' } },
    { '@type': 'Question', name: 'What does Kovil AI typically build on UiPath?', acceptedAnswer: { '@type': 'Answer', text: 'Intelligent document processing pipelines, resilient replacements for brittle bots, cross-system reconciliation automations, and agentic workflows for exception handling.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from a traditional UiPath systems integrator?', acceptedAnswer: { '@type': 'Answer', text: 'Traditional SIs typically scope a fixed project and hand it to a rotating bench of consultants. Kovil AI embeds a single accountable engineer or small pod directly with your team, under one Engagement Manager who audits every milestone — with a 2-week risk-free trial and no long-term lock-in.' } },
    { '@type': 'Question', name: 'Can we extend a trial engagement or convert it to a long-term hire?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most clients extend the engagement as new processes come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way.' } },
    { '@type': 'Question', name: 'Do you support UiPath rescues or fixing a failing automation program?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A significant share of our UiPath engagements start as a rescue — a bot estate with years of maintenance debt or a program that never scaled past a pilot. We audit the automations and governance, then stabilize and rebuild in milestone-gated phases.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://kovil.ai/platforms' },
    { '@type': 'ListItem', position: 3, name: 'UiPath', item: 'https://kovil.ai/platforms/uipath' },
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
      <div className="pt-20"><UiPathPlatformPage /></div>
    </>
  )
}
