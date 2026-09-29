import type { Metadata } from 'next'
import AcumaticaPlatformPage from '@/src/pages/platforms/acumatica/AcumaticaPlatformPage'

export const metadata: Metadata = {
  title: 'Acumatica Platform Partner — AI Automation & Specialist Talent',
  description: 'Kovil AI is your single partner for Acumatica — AI-driven automation, plus vetted Acumatica administrators, .NET developers, and ERP consultants matched in 48 hours. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/platforms/acumatica' },
  keywords: [
    'acumatica ai automation',
    'hire acumatica developer',
    'hire acumatica administrator',
    'acumatica staff augmentation',
    'acumatica net developer',
    'acumatica erp consultant',
    'acumatica var alternative',
    'what is acumatica',
  ],
  openGraph: {
    type: 'website',
    title: 'Acumatica Platform Partner — AI Automation & Specialist Talent | Kovil AI',
    description: 'AI-driven automation, plus vetted Acumatica administrators, developers, and ERP consultants matched in 48 hours. 2-week risk-free trial.',
    url: 'https://kovil.ai/platforms/acumatica',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acumatica Platform Partner — AI Automation & Specialist Talent | Kovil AI',
    description: 'AI-driven automation, plus vetted Acumatica administrators, developers, and ERP consultants matched in 48 hours.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Acumatica Platform Services — AI Automation & Specialist Talent',
  description: 'Kovil AI delivers AI-driven automation on Acumatica and staffs vetted Acumatica administrators, .NET developers, and ERP consultants — covering Financial Management, Distribution, Manufacturing, Project Accounting, and Field Service.',
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
  serviceType: 'Acumatica Implementation and Staffing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/acumatica',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Acumatica Platform Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Automation Build (.NET/Native AI)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Acumatica Administrator Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '.NET/Acumatica Developer Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ERP Consultant Staffing' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/acumatica' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Acumatica',
  description: 'Acumatica is a cloud ERP platform built around a unified Financial Management core, extended by Distribution Management, Manufacturing Management, Project Accounting, CRM, and Field Service Management, with consumption-based licensing rather than per-user fees.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/acumatica',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Acumatica Platform Partner — AI Automation & Specialist Talent',
  description: 'Kovil AI is your single partner for Acumatica — AI-driven automation, plus vetted Acumatica administrators, developers, and ERP consultants.',
  url: 'https://kovil.ai/platforms/acumatica',
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
  name: 'How to Work With Kovil AI on Acumatica',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Instance', text: "Tell us which Acumatica modules you run, what's broken or missing, and whether you need automation, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/acumatica' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: 'Review 2-3 vetted Acumatica specialists matched to your modules and stack.', url: 'https://kovil.ai/platforms/acumatica' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/acumatica' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Acumatica?', acceptedAnswer: { '@type': 'Answer', text: 'Acumatica is a cloud ERP platform built around a unified Financial Management core, extended by Distribution Management, Manufacturing Management, Project Accounting, CRM, and Field Service Management, distinguished by consumption-based licensing rather than per-user fees.' } },
    { '@type': 'Question', name: 'Does Acumatica have native AI, or do I need a custom build?', acceptedAnswer: { '@type': 'Answer', text: "Acumatica ships built-in AI and automation for anomaly detection, predictive analytics, and smart data capture. Kovil AI configures those natively and builds custom .NET automation where they aren't enough." } },
    { '@type': 'Question', name: 'Does Kovil AI build custom automation on Acumatica, or only staff talent?', acceptedAnswer: { '@type': 'Answer', text: "Both, and they're often the same engagement. Clients commonly hire an Acumatica administrator to clean up instance hygiene, then layer AI-driven automation on top." } },
    { '@type': 'Question', name: 'How much does it cost to hire an Acumatica developer through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: "Kovil AI's remote Acumatica talent bills $18-$38 per hour depending on role and experience, versus $40-$140+ per hour for prevailing US onsite rates for the same roles, typically 60-70% lower." } },
    { '@type': 'Question', name: 'What is the difference between an Acumatica Administrator, Developer, and ERP Consultant?', acceptedAnswer: { '@type': 'Answer', text: 'An Acumatica Administrator configures the instance using generic inquiries and workflows without code. A .NET/Acumatica Developer builds custom screens and business events using the xRP framework. An ERP Consultant designs the chart of accounts and implementation strategy.' } },
    { '@type': 'Question', name: 'How quickly can I hire an Acumatica specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched within 24-48 hours of submitting a brief, with work starting within a week, backed by a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'Is there such a thing as a certified Acumatica specialist?', acceptedAnswer: { '@type': 'Answer', text: 'Acumatica offers partner-level certification through its training programs. We verify these where relevant, but weight a live build challenge and production portfolio review just as heavily.' } },
    { '@type': 'Question', name: 'Can Kovil AI integrate Acumatica with other systems like Salesforce or Shopify?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our Acumatica talent regularly builds integrations using the Acumatica REST/SOAP API and custom middleware.' } },
    { '@type': 'Question', name: 'Who owns the customizations, automations, and integrations built during an engagement?', acceptedAnswer: { '@type': 'Answer', text: 'You do, 100%. All custom screens, business events, integrations, and documentation are fully owned by you under clear IP-assignment terms, with no shared IP and no lock-in.' } },
    { '@type': 'Question', name: 'Can I combine an AI automation build with Acumatica staff augmentation in one engagement?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A single Engagement Manager can coordinate an automation build alongside dedicated administrator or developer talent working in the same instance.' } },
    { '@type': 'Question', name: 'What Acumatica modules does Kovil AI have experience with?', acceptedAnswer: { '@type': 'Answer', text: 'Financial Management, Distribution Management, Manufacturing Management, Project Accounting, CRM, and Field Service Management, plus integrations including Salesforce and Shopify.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from a traditional Acumatica VAR or systems integrator?', acceptedAnswer: { '@type': 'Answer', text: 'Traditional VARs typically scope a fixed project and hand it to a rotating bench of consultants. Kovil AI embeds a single accountable engineer or small pod directly with your team under one Engagement Manager.' } },
    { '@type': 'Question', name: 'Can we extend a trial engagement or convert it to a long-term hire?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most clients extend the engagement as new modules or automation needs come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way.' } },
    { '@type': 'Question', name: 'Do you support Acumatica rescues or fixing a failing implementation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A significant share of our Acumatica engagements start as a rescue of an instance with years of technical debt or a customization that never worked, which we audit and rebuild in milestone-gated phases.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://kovil.ai/platforms' },
    { '@type': 'ListItem', position: 3, name: 'Acumatica', item: 'https://kovil.ai/platforms/acumatica' },
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
      <div className="pt-20"><AcumaticaPlatformPage /></div>
    </>
  )
}
