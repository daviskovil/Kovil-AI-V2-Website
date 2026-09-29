import type { Metadata } from 'next'
import OdooPlatformPage from '@/src/pages/platforms/odoo/OdooPlatformPage'

export const metadata: Metadata = {
  title: 'Odoo Platform Partner — AI Automation & Specialist Talent',
  description: 'Kovil AI is your single partner for Odoo — AI-driven automation, plus vetted Odoo administrators, Python developers, and implementation consultants matched in 48 hours. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/platforms/odoo' },
  keywords: [
    'odoo ai automation',
    'hire odoo developer',
    'hire odoo administrator',
    'odoo staff augmentation',
    'odoo python developer',
    'odoo implementation consultant',
    'odoo partner alternative',
    'what is odoo',
  ],
  openGraph: {
    type: 'website',
    title: 'Odoo Platform Partner — AI Automation & Specialist Talent | Kovil AI',
    description: 'AI-driven automation, plus vetted Odoo administrators, developers, and implementation consultants matched in 48 hours. 2-week risk-free trial.',
    url: 'https://kovil.ai/platforms/odoo',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Odoo Platform Partner — AI Automation & Specialist Talent | Kovil AI',
    description: 'AI-driven automation, plus vetted Odoo administrators, developers, and implementation consultants matched in 48 hours.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Odoo Platform Services — AI Automation & Specialist Talent',
  description: 'Kovil AI delivers AI-driven automation on Odoo and staffs vetted Odoo administrators, Python developers, and implementation consultants — covering Accounting, Inventory, Sales & CRM, Manufacturing, and Website & eCommerce.',
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
  serviceType: 'Odoo Implementation and Staffing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/odoo',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Odoo Platform Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Automation Build (Python/Odoo Framework)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Odoo Administrator Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Odoo Developer Staffing (Python)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Functional Analyst & Implementation Consultant Staffing' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/odoo' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Odoo',
  description: 'Odoo is an open-source suite of business applications — Accounting, Inventory, Sales & CRM, Manufacturing, Website & eCommerce, and HR among more than 80 apps — all connected on one data model.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/odoo',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Odoo Platform Partner — AI Automation & Specialist Talent',
  description: 'Kovil AI is your single partner for Odoo — AI-driven automation, plus vetted Odoo administrators, developers, and implementation consultants.',
  url: 'https://kovil.ai/platforms/odoo',
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
  name: 'How to Work With Kovil AI on Odoo',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Instance', text: "Tell us which Odoo apps you run, what's broken or missing, and whether you need automation, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/odoo' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: 'Review 2-3 vetted Odoo specialists matched to your modules and stack.', url: 'https://kovil.ai/platforms/odoo' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/odoo' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Odoo?', acceptedAnswer: { '@type': 'Answer', text: 'Odoo is an open-source suite of business applications — Accounting, Inventory, Sales & CRM, Manufacturing, Website & eCommerce, and HR among more than 80 apps — all connected on one data model.' } },
    { '@type': 'Question', name: 'Does Odoo have native AI, or do I need a custom build?', acceptedAnswer: { '@type': 'Answer', text: "Odoo ships built-in AI for automated data entry, OCR document scanning, and predictive lead scoring. Kovil AI configures those natively and builds custom Python automation where they aren't enough." } },
    { '@type': 'Question', name: 'Does Kovil AI build custom automation on Odoo, or only staff talent?', acceptedAnswer: { '@type': 'Answer', text: "Both, and they're often the same engagement. Clients commonly hire an Odoo administrator to clean up module configuration, then layer AI-driven automation on top." } },
    { '@type': 'Question', name: 'How much does it cost to hire an Odoo developer through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: "Kovil AI's remote Odoo talent bills $18-$38 per hour depending on role and experience, versus $40-$130+ per hour for prevailing US onsite rates for the same roles, typically 60-68% lower." } },
    { '@type': 'Question', name: 'What is the difference between an Odoo Administrator, Developer, and Functional Analyst?', acceptedAnswer: { '@type': 'Answer', text: 'An Odoo Administrator configures apps using Odoo Studio without writing code. An Odoo Developer builds custom modules and ORM logic using Python. A Functional Analyst designs the module rollout sequence and cross-module data flow.' } },
    { '@type': 'Question', name: 'How quickly can I hire an Odoo specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched within 24-48 hours of submitting a brief, with work starting within a week, backed by a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'Is there such a thing as a certified Odoo specialist?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Odoo runs its own partner certification program. We verify Odoo Certified credentials where relevant, but weight a live build challenge and production portfolio review just as heavily.' } },
    { '@type': 'Question', name: 'Can Kovil AI integrate Odoo with other systems like Shopify or Slack?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our Odoo talent regularly builds integrations using the Odoo XML-RPC/JSON-RPC API and custom middleware.' } },
    { '@type': 'Question', name: 'Who owns the modules, automations, and integrations built during an engagement?', acceptedAnswer: { '@type': 'Answer', text: 'You do, 100%. All custom modules, automated actions, integrations, and documentation are fully owned by you under clear IP-assignment terms, with no shared IP and no lock-in.' } },
    { '@type': 'Question', name: 'Can I combine an AI automation build with Odoo staff augmentation in one engagement?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A single Engagement Manager can coordinate an automation build alongside dedicated administrator or developer talent working in the same instance.' } },
    { '@type': 'Question', name: 'What Odoo modules does Kovil AI have experience with?', acceptedAnswer: { '@type': 'Answer', text: 'Accounting, Inventory, Sales & CRM, Manufacturing, Website & eCommerce, and HR, plus integrations including Shopify and Slack.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from an Odoo implementation partner?', acceptedAnswer: { '@type': 'Answer', text: 'Traditional partners typically scope a fixed project and hand it to a rotating bench of consultants. Kovil AI embeds a single accountable engineer or small pod directly with your team under one Engagement Manager.' } },
    { '@type': 'Question', name: 'Can we extend a trial engagement or convert it to a long-term hire?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most clients extend the engagement as new modules or automation needs come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way.' } },
    { '@type': 'Question', name: 'Do you support Odoo rescues or fixing a stalled implementation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A meaningful share of our Odoo engagements start as a rescue of an instance with years of customization debt or a rollout that stalled partway through, which we audit and rebuild in milestone-gated phases.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://kovil.ai/platforms' },
    { '@type': 'ListItem', position: 3, name: 'Odoo', item: 'https://kovil.ai/platforms/odoo' },
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
      <div className="pt-20"><OdooPlatformPage /></div>
    </>
  )
}
