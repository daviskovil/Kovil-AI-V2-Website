import type { Metadata } from 'next'
import MicrosoftDynamics365PlatformPage from '@/src/pages/platforms/microsoft-dynamics-365/MicrosoftDynamics365PlatformPage'

export const metadata: Metadata = {
  title: 'Microsoft Dynamics 365 Partner — AI Agents & Specialist Talent',
  description: 'Kovil AI is your single partner for Microsoft Dynamics 365 — Copilot AI agents, plus vetted functional consultants, developers, and solution architects matched in 48 hours. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/platforms/microsoft-dynamics-365' },
  keywords: [
    'dynamics 365 ai agent',
    'hire dynamics 365 developer',
    'hire d365 functional consultant',
    'dynamics 365 staff augmentation',
    'copilot studio dynamics 365',
    'dynamics 365 solution architect',
    'd365 systems integrator alternative',
    'what is dynamics 365',
  ],
  openGraph: {
    type: 'website',
    title: 'Microsoft Dynamics 365 Partner — AI Agents & Specialist Talent | Kovil AI',
    description: 'Copilot AI agents, plus vetted D365 functional consultants, developers, and solution architects matched in 48 hours. 2-week risk-free trial.',
    url: 'https://kovil.ai/platforms/microsoft-dynamics-365',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Microsoft Dynamics 365 Partner — AI Agents & Specialist Talent | Kovil AI',
    description: 'Copilot AI agents, plus vetted D365 functional consultants, developers, and solution architects matched in 48 hours.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Microsoft Dynamics 365 Services — AI Agents & Specialist Talent',
  description: 'Kovil AI delivers Copilot AI agent implementations and staffs vetted Dynamics 365 functional consultants, developers, and solution architects — covering Sales, Customer Service, Finance, Supply Chain Management, Business Central, and HR.',
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
  serviceType: 'Microsoft Dynamics 365 Implementation and Staffing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/microsoft-dynamics-365',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dynamics 365 Platform Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Copilot AI Agent Implementation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'D365 Functional Consultant Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'D365 Developer Staffing (X++/Power Platform)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ERP/CRM Solution Architect Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Copilot Studio Specialist Staffing' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/microsoft-dynamics-365' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Microsoft Dynamics 365',
  description: 'Microsoft Dynamics 365 is a suite of connected business applications — Sales, Customer Service, Finance, Supply Chain Management, Business Central, and Human Resources — built on Dataverse and integrated with Microsoft 365, Teams, and Power Platform, with Copilot as its native AI layer.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/microsoft-dynamics-365',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Microsoft Dynamics 365 Partner — AI Agents & Specialist Talent',
  description: 'Kovil AI is your single partner for Microsoft Dynamics 365 — Copilot AI agents, plus vetted functional consultants, developers, and solution architects.',
  url: 'https://kovil.ai/platforms/microsoft-dynamics-365',
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
  name: 'How to Work With Kovil AI on Microsoft Dynamics 365',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Tenant', text: "Tell us which Dynamics 365 modules you run, what's broken or missing, and whether you need an AI agent, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/microsoft-dynamics-365' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: 'Review 2-3 vetted Dynamics 365 specialists, or take a Copilot scoping call, matched to your modules and stack.', url: 'https://kovil.ai/platforms/microsoft-dynamics-365' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/microsoft-dynamics-365' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Microsoft Dynamics 365?', acceptedAnswer: { '@type': 'Answer', text: 'Microsoft Dynamics 365 is a suite of connected business applications — Sales, Customer Service, Finance, Supply Chain Management, Business Central, and Human Resources — built on Dataverse and deeply integrated with Microsoft 365, Teams, and Power Platform.' } },
    { '@type': 'Question', name: 'What is the difference between Dynamics 365 and Copilot?', acceptedAnswer: { '@type': 'Answer', text: "Dynamics 365 is the underlying suite of business applications; Copilot is Microsoft's AI layer, built on top of it. Copilot in Sales and Service assist inside the app, while Copilot Studio lets you build fully custom autonomous agents grounded in real Dataverse data." } },
    { '@type': 'Question', name: 'Does Kovil AI build custom Copilot agents on Dynamics 365, or only staff talent?', acceptedAnswer: { '@type': 'Answer', text: "Both, and they're often the same engagement. Clients commonly hire a functional consultant to clean up module configuration, then layer Copilot agents on top." } },
    { '@type': 'Question', name: 'How much does it cost to hire a Dynamics 365 developer through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: "Kovil AI's remote Dynamics 365 talent bills $20-$45 per hour depending on role and experience, versus $60-$220+ per hour for prevailing US onsite rates for the same roles, typically 65-77% lower." } },
    { '@type': 'Question', name: 'What is the difference between a D365 Functional Consultant, Developer, and Solution Architect?', acceptedAnswer: { '@type': 'Answer', text: 'A Functional Consultant configures modules using business process flows and security roles without code. A Developer builds custom functionality with X++ extensions and Power Platform. A Solution Architect designs the overall Dataverse data model and integration strategy, and is typically the most senior of the three.' } },
    { '@type': 'Question', name: 'How quickly can I hire a Dynamics 365 specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched with a vetted consultant, developer, or architect within 24-48 hours of submitting a brief, with work starting within a week, backed by a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'Do your Dynamics 365 engineers hold official Microsoft certifications?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We verify Microsoft certifications directly as part of vetting, including Dynamics 365 Fundamentals, Finance Functional Consultant Associate, Power Platform Developer Associate, Solution Architect Expert, and Copilot Studio Specialty.' } },
    { '@type': 'Question', name: 'Can Kovil AI integrate Dynamics 365 with other systems like SAP or Salesforce?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our Dynamics 365 talent regularly builds integrations using the Dataverse API, Power Automate, and custom middleware.' } },
    { '@type': 'Question', name: 'Who owns the code, flows, and integrations built during an engagement?', acceptedAnswer: { '@type': 'Answer', text: 'You do, 100%. All extensions, Power Automate flows, integrations, and documentation are fully owned by you under clear IP-assignment terms, with no shared IP and no lock-in.' } },
    { '@type': 'Question', name: 'Can I combine a Copilot agent build with Dynamics 365 staff augmentation in one engagement?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A single Engagement Manager can coordinate a Copilot build alongside dedicated functional or developer talent working in the same tenant.' } },
    { '@type': 'Question', name: 'What Dynamics 365 modules does Kovil AI have experience with?', acceptedAnswer: { '@type': 'Answer', text: 'Sales, Customer Service, Finance, Supply Chain Management, Business Central, and Human Resources, plus Power Platform and Microsoft 365 integrations.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from a traditional Microsoft systems integrator?', acceptedAnswer: { '@type': 'Answer', text: 'Traditional SIs typically scope a fixed project and hand it to a rotating bench of consultants. Kovil AI embeds a single accountable engineer or small pod directly with your team under one Engagement Manager.' } },
    { '@type': 'Question', name: 'Can we extend a trial engagement or convert it to a long-term hire?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most clients extend the engagement as new modules or Copilot use cases come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way.' } },
    { '@type': 'Question', name: 'Do you support Dynamics 365 rescues or fixing a failing implementation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A significant share of our Dynamics 365 engagements start as a rescue of a tenant with years of technical debt, a stalled Copilot pilot, or a broken integration, which we audit and rebuild in milestone-gated phases.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://kovil.ai/platforms' },
    { '@type': 'ListItem', position: 3, name: 'Microsoft Dynamics 365', item: 'https://kovil.ai/platforms/microsoft-dynamics-365' },
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
      <div className="pt-20"><MicrosoftDynamics365PlatformPage /></div>
    </>
  )
}
