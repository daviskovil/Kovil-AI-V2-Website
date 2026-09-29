import type { Metadata } from 'next'
import FreshworksPlatformPage from '@/src/pages/platforms/freshworks/FreshworksPlatformPage'

export const metadata: Metadata = {
  title: 'Freshworks Platform Partner — AI Agents & Specialist Talent',
  description: 'Kovil AI is your single partner for the Freshworks suite — Freddy AI agents, plus vetted Freshdesk, Freshservice, and Freshsales specialists matched in 48 hours. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/platforms/freshworks' },
  keywords: [
    'freshworks ai agent',
    'freddy ai agent',
    'hire freshworks developer',
    'hire freshdesk administrator',
    'freshworks staff augmentation',
    'freshservice implementation partner',
    'freshsales revops consultant',
    'what is freshworks',
  ],
  openGraph: {
    type: 'website',
    title: 'Freshworks Platform Partner — AI Agents & Specialist Talent | Kovil AI',
    description: 'Freddy AI agents, plus vetted Freshdesk, Freshservice, and Freshsales specialists matched in 48 hours. 2-week risk-free trial.',
    url: 'https://kovil.ai/platforms/freshworks',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freshworks Platform Partner — AI Agents & Specialist Talent | Kovil AI',
    description: 'Freddy AI agents, plus vetted Freshdesk, Freshservice, and Freshsales specialists matched in 48 hours.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Freshworks Platform Services — AI Agents & Specialist Talent',
  description: 'Kovil AI delivers Freddy AI agent implementations and staffs vetted Freshworks administrators, developers, and RevOps consultants — covering Freshdesk, Freshservice, Freshsales, and Freshmarketer.',
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
  serviceType: 'Freshworks Implementation and Staffing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/freshworks',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Freshworks Platform Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Freddy AI Agent Implementation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Freshdesk/Freshservice Administrator Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Freshworks Developer Staffing (API/FDK)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Freshsales & RevOps Consultant Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Freddy AI Specialist Staffing' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/freshworks' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Freshworks',
  description: 'Freshworks is a customer experience software suite spanning support, IT service management, sales, and marketing, built around Freshdesk, Freshservice, Freshsales, and Freshmarketer, unified by a shared customer record, with Freddy AI as its native AI layer.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/freshworks',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Freshworks Platform Partner — AI Agents & Specialist Talent',
  description: 'Kovil AI is your single partner for the Freshworks suite — Freddy AI agents, plus vetted Freshdesk, Freshservice, and Freshsales specialists.',
  url: 'https://kovil.ai/platforms/freshworks',
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
  name: 'How to Work With Kovil AI on Freshworks',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Instance', text: "Tell us which Freshworks products you run, what's broken or missing, and whether you need an AI agent, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/freshworks' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: 'Review 2-3 vetted Freshworks specialists, or take a Freddy AI scoping call, matched to your products and stack.', url: 'https://kovil.ai/platforms/freshworks' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/freshworks' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Freshworks?', acceptedAnswer: { '@type': 'Answer', text: 'Freshworks is a customer experience software suite spanning support, IT service management, sales, and marketing, built around Freshdesk, Freshservice, Freshsales, and Freshmarketer, unified by a shared customer record. Freddy AI is its native AI layer for ticket deflection, agent assistance, and autonomous customer-facing agents.' } },
    { '@type': 'Question', name: 'What is the difference between Freshworks and Freddy AI?', acceptedAnswer: { '@type': 'Answer', text: "Freshworks is the underlying suite of products; Freddy AI is Freshworks' native AI layer, built on top of them. Freddy AI Agent resolves tickets and requests autonomously, while Freddy Copilot assists human agents, both grounded in real support and CRM data." } },
    { '@type': 'Question', name: 'Does Kovil AI build custom AI agents on Freshworks, or only staff talent?', acceptedAnswer: { '@type': 'Answer', text: "Both, and they're often the same engagement. Clients commonly hire a Freshworks administrator to clean up ticket routing and data hygiene, then layer Freddy AI agents and custom workflow automation on top." } },
    { '@type': 'Question', name: 'How much does it cost to hire a Freshworks developer through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: "Kovil AI's remote Freshworks talent bills $18-$40 per hour depending on role and experience, versus $40-$140+ per hour for prevailing US onsite rates for the same roles, typically 59-70% lower." } },
    { '@type': 'Question', name: 'What is the difference between a Freshworks Administrator, Developer, and RevOps Consultant?', acceptedAnswer: { '@type': 'Answer', text: 'A Freshdesk/Freshservice Administrator configures SLAs, routing, and workflow automation without code. A Freshworks Developer builds custom apps on the Freshworks Developer Kit (FDK). A Freshsales & RevOps Consultant designs pipeline structure and cross-product journeys, and is typically the most senior of the three.' } },
    { '@type': 'Question', name: 'How quickly can I hire a Freshworks specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched with a vetted Freshworks admin, developer, or RevOps consultant within 24-48 hours of submitting a brief, with work starting within a week, backed by a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'Do your Freshworks engineers hold official certifications?', acceptedAnswer: { '@type': 'Answer', text: "Freshworks doesn't run as extensive a formal certification program as Salesforce or HubSpot. We verify hands-on production experience across the specific products you run, plus a live build challenge." } },
    { '@type': 'Question', name: 'Can Kovil AI integrate Freshworks with other systems like Slack, Jira, or Salesforce?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our Freshworks talent regularly builds integrations using the Freshworks API, FDK custom apps, Slack, Jira, and Salesforce.' } },
    { '@type': 'Question', name: 'Who owns the code, apps, and integrations built during an engagement?', acceptedAnswer: { '@type': 'Answer', text: 'You do, 100%. All custom apps, workflows, integrations, and documentation are fully owned by you under clear IP-assignment terms, with no shared IP and no lock-in.' } },
    { '@type': 'Question', name: 'Can I combine a Freddy AI agent build with Freshworks staff augmentation in one engagement?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A single Engagement Manager can coordinate a Freddy AI build alongside dedicated admin or developer talent working in the same instance.' } },
    { '@type': 'Question', name: 'What Freshworks products does Kovil AI have experience with?', acceptedAnswer: { '@type': 'Answer', text: 'Freshdesk, Freshservice, Freshsales, and Freshmarketer, plus integrations including Slack, Jira, and Salesforce.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from a traditional Freshworks implementation partner?', acceptedAnswer: { '@type': 'Answer', text: 'Traditional partners typically scope a fixed project and hand it to a rotating bench of consultants. Kovil AI embeds a single accountable engineer or small pod directly with your team under one Engagement Manager.' } },
    { '@type': 'Question', name: 'Can we extend a trial engagement or convert it to a long-term hire?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most clients extend the engagement as new products or AI agent use cases come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way.' } },
    { '@type': 'Question', name: 'Do you support Freshworks rescues or fixing a messy implementation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A significant share of our Freshworks engagements start as a rescue of a support desk with broken SLAs, duplicate contacts, or a stalled Freddy AI pilot, which we audit and rebuild in milestone-gated phases.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://kovil.ai/platforms' },
    { '@type': 'ListItem', position: 3, name: 'Freshworks', item: 'https://kovil.ai/platforms/freshworks' },
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
      <div className="pt-20"><FreshworksPlatformPage /></div>
    </>
  )
}
