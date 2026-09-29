import type { Metadata } from 'next'
import SageIntacctPlatformPage from '@/src/pages/platforms/sage-intacct/SageIntacctPlatformPage'

export const metadata: Metadata = {
  title: 'Sage Intacct Platform Partner — AI Agents & Specialist Talent',
  description: 'Kovil AI is your single partner for Sage Intacct — Sage Copilot AI agents, plus vetted administrators, developers, and multi-entity consolidation consultants matched in 48 hours. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/platforms/sage-intacct' },
  keywords: [
    'sage intacct ai agent',
    'sage copilot',
    'hire sage intacct developer',
    'hire sage intacct administrator',
    'sage intacct staff augmentation',
    'sage intacct consolidation consultant',
    'sage intacct implementation partner alternative',
    'what is sage intacct',
  ],
  openGraph: {
    type: 'website',
    title: 'Sage Intacct Platform Partner — AI Agents & Specialist Talent | Kovil AI',
    description: 'Sage Copilot AI agents, plus vetted administrators, developers, and multi-entity consolidation consultants matched in 48 hours. 2-week risk-free trial.',
    url: 'https://kovil.ai/platforms/sage-intacct',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sage Intacct Platform Partner — AI Agents & Specialist Talent | Kovil AI',
    description: 'Sage Copilot AI agents, plus vetted administrators, developers, and multi-entity consolidation consultants matched in 48 hours.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sage Intacct Platform Services — AI Agents & Specialist Talent',
  description: 'Kovil AI delivers Sage Copilot AI agent implementations and staffs vetted Sage Intacct administrators, developers, and multi-entity consolidation consultants — covering Core Financials, Planning, Consolidations, Project Accounting, and Nonprofit Fund Accounting.',
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
  serviceType: 'Sage Intacct Implementation and Staffing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/sage-intacct',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Sage Intacct Platform Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sage Copilot AI Agent Implementation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sage Intacct Administrator Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sage Intacct Developer Staffing (API/Reporting)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Multi-Entity Consolidation Consultant Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sage Copilot AI Specialist Staffing' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/sage-intacct' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Sage Intacct',
  description: 'Sage Intacct is a cloud financial management platform built around a dimensional Core Financials engine, extended by multi-entity global consolidations, project accounting, and nonprofit fund accounting, with Sage Copilot as its native AI layer.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/sage-intacct',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Sage Intacct Platform Partner — AI Agents & Specialist Talent',
  description: 'Kovil AI is your single partner for Sage Intacct — Sage Copilot AI agents, plus vetted administrators, developers, and multi-entity consolidation consultants.',
  url: 'https://kovil.ai/platforms/sage-intacct',
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
  name: 'How to Work With Kovil AI on Sage Intacct',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Tenant', text: "Tell us which Sage Intacct modules you run, what's broken or missing, and whether you need an AI agent, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/sage-intacct' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: 'Review 2-3 vetted Sage Intacct specialists, or take a Sage Copilot scoping call, matched to your modules and stack.', url: 'https://kovil.ai/platforms/sage-intacct' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/sage-intacct' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Sage Intacct?', acceptedAnswer: { '@type': 'Answer', text: 'Sage Intacct is a cloud financial management platform built around a dimensional Core Financials engine, extended by Sage Intacct Planning, multi-entity global consolidations, project accounting, dashboards and reporting, and nonprofit fund accounting. It is the AICPA-preferred provider of cloud financial management.' } },
    { '@type': 'Question', name: 'What is the difference between Sage Intacct and Sage Copilot?', acceptedAnswer: { '@type': 'Answer', text: "Sage Intacct is the underlying financial management platform; Sage Copilot is Sage's native AI assistant, built on top of it, for transaction categorization, anomaly detection, and natural-language financial queries." } },
    { '@type': 'Question', name: 'Does Kovil AI build custom AI agents on Sage Intacct, or only staff talent?', acceptedAnswer: { '@type': 'Answer', text: "Both, and they're often the same engagement. Clients commonly hire a Sage Intacct administrator to clean up dimensional structure, then layer Sage Copilot on top." } },
    { '@type': 'Question', name: 'How much does it cost to hire a Sage Intacct developer through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: "Kovil AI's remote Sage Intacct talent bills $20-$42 per hour depending on role and experience, versus $50-$165+ per hour for prevailing US onsite rates for the same roles, typically 65-72% lower." } },
    { '@type': 'Question', name: 'What is the difference between a Sage Intacct Administrator, Developer, and Consolidation Consultant?', acceptedAnswer: { '@type': 'Answer', text: 'An Administrator configures dimensions, workflows, and permissions without code. A Developer builds custom reports and REST API integrations. A Multi-Entity Consolidation Consultant designs the dimensional structure and consolidation rules for complex organizations.' } },
    { '@type': 'Question', name: 'How quickly can I hire a Sage Intacct specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched within 24-48 hours of submitting a brief, with work starting within a week, backed by a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'Do your Sage Intacct engineers hold official certifications?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We verify Sage certifications directly as part of vetting, including Sage Intacct Certified Implementation Specialist, Developer Certification, and Sage Certified Consultant.' } },
    { '@type': 'Question', name: 'Can Kovil AI integrate Sage Intacct with other systems like Salesforce or ADP?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our Sage Intacct talent regularly builds integrations using the Sage Intacct REST API and custom middleware.' } },
    { '@type': 'Question', name: 'Who owns the reports, workflows, and integrations built during an engagement?', acceptedAnswer: { '@type': 'Answer', text: 'You do, 100%. All custom reports, workflows, integrations, and documentation are fully owned by you under clear IP-assignment terms, with no shared IP and no lock-in.' } },
    { '@type': 'Question', name: 'Can I combine a Sage Copilot build with Sage Intacct staff augmentation in one engagement?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A single Engagement Manager can coordinate a Copilot build alongside dedicated administrator or developer talent working in the same tenant.' } },
    { '@type': 'Question', name: 'What Sage Intacct modules does Kovil AI have experience with?', acceptedAnswer: { '@type': 'Answer', text: 'Core Financials, Sage Intacct Planning, Multi-Entity & Global Consolidations, Project Accounting, and Nonprofit & Fund Accounting.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from a traditional Sage Intacct implementation partner?', acceptedAnswer: { '@type': 'Answer', text: 'Traditional partners typically scope a fixed project and hand it to a rotating bench of consultants. Kovil AI embeds a single accountable engineer or small pod directly with your team under one Engagement Manager.' } },
    { '@type': 'Question', name: 'Can we extend a trial engagement or convert it to a long-term hire?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most clients extend the engagement as new modules or Copilot use cases come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way.' } },
    { '@type': 'Question', name: 'Do you support Sage Intacct rescues or fixing a failing implementation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A significant share of our Sage Intacct engagements start as a rescue of a tenant with messy dimensional structure or a broken consolidation process, which we audit and rebuild in milestone-gated phases.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://kovil.ai/platforms' },
    { '@type': 'ListItem', position: 3, name: 'Sage Intacct', item: 'https://kovil.ai/platforms/sage-intacct' },
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
      <div className="pt-20"><SageIntacctPlatformPage /></div>
    </>
  )
}
