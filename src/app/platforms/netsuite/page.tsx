import type { Metadata } from 'next'
import NetSuitePlatformPage from '@/src/pages/platforms/netsuite/NetSuitePlatformPage'

export const metadata: Metadata = {
  title: 'NetSuite Platform Partner — AI Automation & Specialist Talent',
  description: 'Kovil AI is your single partner for NetSuite — AI-driven financial automation, plus vetted NetSuite administrators, SuiteScript developers, and ERP consultants matched in 48 hours. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/platforms/netsuite' },
  keywords: [
    'netsuite ai automation',
    'hire netsuite developer',
    'hire netsuite administrator',
    'netsuite staff augmentation',
    'suitescript developer for hire',
    'netsuite erp consultant',
    'netsuite systems integrator alternative',
    'what is netsuite',
  ],
  openGraph: {
    type: 'website',
    title: 'NetSuite Platform Partner — AI Automation & Specialist Talent | Kovil AI',
    description: 'AI-driven financial automation, plus vetted NetSuite administrators, developers, and ERP consultants matched in 48 hours. 2-week risk-free trial.',
    url: 'https://kovil.ai/platforms/netsuite',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NetSuite Platform Partner — AI Automation & Specialist Talent | Kovil AI',
    description: 'AI-driven financial automation, plus vetted NetSuite administrators, developers, and ERP consultants matched in 48 hours.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'NetSuite Platform Services — AI Automation & Specialist Talent',
  description: 'Kovil AI delivers AI-driven financial automation on NetSuite and staffs vetted NetSuite administrators, SuiteScript developers, and ERP consultants — covering Financials, CRM, SuiteCommerce, SuitePeople, and SuiteProjects.',
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
  serviceType: 'NetSuite Implementation and Staffing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/netsuite',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'NetSuite Platform Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Automation Build (SuiteScript/Native AI)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'NetSuite Administrator Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'NetSuite Developer Staffing (SuiteScript)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ERP & Financial Consultant Staffing' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/netsuite' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'NetSuite',
  description: 'NetSuite, owned by Oracle, is a cloud ERP platform built around a unified Financials core, extended by CRM, SuiteCommerce, SuitePeople, warehouse and inventory management, and SuiteProjects, all sharing one data model.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/netsuite',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'NetSuite Platform Partner — AI Automation & Specialist Talent',
  description: 'Kovil AI is your single partner for NetSuite — AI-driven financial automation, plus vetted NetSuite administrators, developers, and ERP consultants.',
  url: 'https://kovil.ai/platforms/netsuite',
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
  name: 'How to Work With Kovil AI on NetSuite',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Account', text: "Tell us which NetSuite modules you run, what's broken or missing, and whether you need automation, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/netsuite' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: 'Review 2-3 vetted NetSuite specialists matched to your modules and stack.', url: 'https://kovil.ai/platforms/netsuite' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/netsuite' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is NetSuite?', acceptedAnswer: { '@type': 'Answer', text: "NetSuite, owned by Oracle, is a cloud ERP platform built around a unified Financials core, extended by CRM, SuiteCommerce, SuitePeople, warehouse and inventory management, and SuiteProjects, all sharing one data model." } },
    { '@type': 'Question', name: 'Does NetSuite have native AI, or do I need a custom build?', acceptedAnswer: { '@type': 'Answer', text: "NetSuite ships built-in AI and machine learning for demand planning, cash flow forecasting, and anomaly detection. Kovil AI configures those natively and builds custom SuiteScript AI workflows where they aren't enough." } },
    { '@type': 'Question', name: 'Does Kovil AI build custom automation on NetSuite, or only staff talent?', acceptedAnswer: { '@type': 'Answer', text: "Both, and they're often the same engagement. Clients commonly hire a NetSuite administrator to clean up account hygiene, then layer AI-driven automation on top." } },
    { '@type': 'Question', name: 'How much does it cost to hire a NetSuite developer through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: "Kovil AI's remote NetSuite talent bills $20-$42 per hour depending on role and experience, versus $50-$170+ per hour for prevailing US onsite rates for the same roles, typically 64-73% lower." } },
    { '@type': 'Question', name: 'What is the difference between a NetSuite Administrator, Developer, and ERP Consultant?', acceptedAnswer: { '@type': 'Answer', text: 'A NetSuite Administrator configures the account using roles, workflows, and saved searches without code. A NetSuite Developer builds custom functionality with SuiteScript. An ERP & Financial Consultant designs the chart of accounts and multi-entity consolidation strategy.' } },
    { '@type': 'Question', name: 'How quickly can I hire a NetSuite specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched within 24-48 hours of submitting a brief, with work starting within a week, backed by a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'Do your NetSuite engineers hold official certifications?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We verify NetSuite certifications directly as part of vetting, including SuiteFoundation, SuiteCloud Developer, and ERP Consultant, alongside a live technical assessment.' } },
    { '@type': 'Question', name: 'Can Kovil AI integrate NetSuite with other systems like Salesforce or Shopify?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our NetSuite talent regularly builds integrations using SuiteTalk (REST/SOAP), SuiteScript, and custom middleware.' } },
    { '@type': 'Question', name: 'Who owns the scripts, workflows, and integrations built during an engagement?', acceptedAnswer: { '@type': 'Answer', text: 'You do, 100%. All SuiteScript, SuiteFlow automations, integrations, and documentation are fully owned by you under clear IP-assignment terms, with no shared IP and no lock-in.' } },
    { '@type': 'Question', name: 'Can I combine an AI automation build with NetSuite staff augmentation in one engagement?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A single Engagement Manager can coordinate an automation build alongside dedicated administrator or developer talent working in the same account.' } },
    { '@type': 'Question', name: 'What NetSuite modules does Kovil AI have experience with?', acceptedAnswer: { '@type': 'Answer', text: 'Financials, CRM, SuiteCommerce, SuitePeople, Warehouse & Inventory Management, and SuiteProjects, plus integrations including Salesforce and Shopify.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from a traditional NetSuite systems integrator?', acceptedAnswer: { '@type': 'Answer', text: 'Traditional SIs typically scope a fixed project and hand it to a rotating bench of consultants. Kovil AI embeds a single accountable engineer or small pod directly with your team under one Engagement Manager.' } },
    { '@type': 'Question', name: 'Can we extend a trial engagement or convert it to a long-term hire?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most clients extend the engagement as new modules or automation needs come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way.' } },
    { '@type': 'Question', name: 'Do you support NetSuite rescues or fixing a failing implementation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A significant share of our NetSuite engagements start as a rescue of an account with years of technical debt or a customization that never worked, which we audit and rebuild in milestone-gated phases.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://kovil.ai/platforms' },
    { '@type': 'ListItem', position: 3, name: 'NetSuite', item: 'https://kovil.ai/platforms/netsuite' },
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
      <div className="pt-20"><NetSuitePlatformPage /></div>
    </>
  )
}
