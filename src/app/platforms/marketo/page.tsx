import type { Metadata } from 'next'
import MarketoPlatformPage from '@/src/pages/platforms/marketo/MarketoPlatformPage'

export const metadata: Metadata = {
  title: 'Marketo Platform Partner — AI Automation & Specialist Talent',
  description: 'Kovil AI is your single partner for Marketo — AI-driven lead scoring automation, plus vetted solutions architects, developers, and marketing operations consultants matched in 48 hours. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/platforms/marketo' },
  keywords: [
    'marketo ai automation',
    'hire marketo developer',
    'marketo solutions architect',
    'marketo engage consultant',
    'marketo staff augmentation',
    'marketo rest api integration',
    'marketo lead scoring',
    'what is marketo',
  ],
  openGraph: {
    type: 'website',
    title: 'Marketo Platform Partner — AI Automation & Specialist Talent | Kovil AI',
    description: 'AI-driven lead scoring automation, plus vetted solutions architects, developers, and marketing operations consultants matched in 48 hours. 2-week risk-free trial.',
    url: 'https://kovil.ai/platforms/marketo',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketo Platform Partner — AI Automation & Specialist Talent | Kovil AI',
    description: 'AI-driven lead scoring automation, plus vetted solutions architects, developers, and marketing operations consultants matched in 48 hours.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Marketo Platform Services — AI Automation & Specialist Talent',
  description: 'Kovil AI delivers AI-driven lead scoring and automation on Marketo and staffs vetted solutions architects, developers, and marketing operations consultants — covering campaigns, ABM, and CRM sync.',
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
  serviceType: 'Marketo Implementation and Staffing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/marketo',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Marketo Platform Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Lead Scoring Automation Build' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Marketing Operations Consultant Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Marketo Developer Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Marketo Solutions Architect Staffing' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/marketo' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Marketo',
  description: 'Marketo, now Marketo Engage, is a B2B marketing automation platform owned by Adobe and part of Adobe Experience Cloud, handling lead scoring, nurture campaigns, account-based marketing, and revenue attribution.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/marketo',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Marketo Platform Partner — AI Automation & Specialist Talent',
  description: 'Kovil AI is your single partner for Marketo — AI-driven lead scoring automation, plus vetted solutions architects, developers, and marketing operations consultants.',
  url: 'https://kovil.ai/platforms/marketo',
  datePublished: '2026-10-02',
  dateModified: '2026-10-02',
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
  name: 'How to Work With Kovil AI on Marketo',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Instance', text: "Tell us how your lead lifecycle is structured, what's broken or missing, and whether you need automation, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/marketo' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: 'Review 2-3 vetted Marketo specialists matched to your stack and lead volume.', url: 'https://kovil.ai/platforms/marketo' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/marketo' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Marketo?', acceptedAnswer: { '@type': 'Answer', text: 'Marketo, now Marketo Engage, is a B2B marketing automation platform owned by Adobe and part of Adobe Experience Cloud since 2018, handling lead scoring, nurture campaigns, account-based marketing, and revenue attribution.' } },
    { '@type': 'Question', name: 'Does Marketo have native AI, or do I need a custom build?', acceptedAnswer: { '@type': 'Answer', text: "Marketo ships predictive content and scoring features natively. Kovil AI configures those and builds custom API automation where they aren't enough." } },
    { '@type': 'Question', name: 'Does Kovil AI build custom automation on Marketo, or only staff talent?', acceptedAnswer: { '@type': 'Answer', text: "Both, and they're often the same engagement. Clients commonly hire a marketing operations consultant to clean up lead scoring and field mapping, then layer automation on top." } },
    { '@type': 'Question', name: 'How much does it cost to hire a Marketo specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: "Kovil AI's remote Marketo talent bills $20-$36 per hour depending on role and experience, versus $45-$125+ per hour for prevailing US onsite rates for the same roles, typically 60-70% lower." } },
    { '@type': 'Question', name: 'What is the difference between a Marketing Operations Consultant, Developer, and Solutions Architect?', acceptedAnswer: { '@type': 'Answer', text: 'A Marketing Operations Consultant owns day-to-day campaign operations and scoring tuning. A Developer builds custom integrations using the Marketo REST API. A Solutions Architect designs the instance architecture and lead lifecycle for complex deployments.' } },
    { '@type': 'Question', name: 'How quickly can I hire a Marketo specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched within 24-48 hours of submitting a brief, with work starting within a week, backed by a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'Are your Marketo specialists certified?', acceptedAnswer: { '@type': 'Answer', text: 'We verify relevant Adobe/Marketo certifications where they exist, but weight a live campaign build challenge and production portfolio review just as heavily.' } },
    { '@type': 'Question', name: 'Can Kovil AI integrate Marketo with other systems like Salesforce or Slack?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our Marketo talent regularly builds integrations using the REST API and custom middleware.' } },
    { '@type': 'Question', name: 'Who owns the campaigns and integrations built during an engagement?', acceptedAnswer: { '@type': 'Answer', text: 'You do, 100%. All custom integrations, campaigns, and documentation are fully owned by you under clear IP-assignment terms, with no shared IP and no lock-in.' } },
    { '@type': 'Question', name: 'Can I combine an AI automation build with Marketo staff augmentation in one engagement?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A single Engagement Manager can coordinate an automation build alongside dedicated consultant or developer talent working in the same instance.' } },
    { '@type': 'Question', name: 'What does Kovil AI typically build on top of Marketo?', acceptedAnswer: { '@type': 'Answer', text: 'Lead routing and deduplication automation, adaptive nurture track logic, ABM account scoring, and CRM sync health monitoring.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from a Marketo/Adobe partner agency or freelancer?', acceptedAnswer: { '@type': 'Answer', text: 'A partner agency typically scopes a fixed project and hands it to a rotating bench. A freelancer works solo with no oversight. Kovil AI embeds a single accountable specialist under an Engagement Manager who audits every milestone.' } },
    { '@type': 'Question', name: 'Can we extend a trial engagement or convert it to a long-term hire?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most clients extend the engagement as new campaigns or automation needs come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way.' } },
    { '@type': 'Question', name: 'Do you support Marketo rescues or fixing a messy instance?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A meaningful share of our Marketo engagements start as a rescue of duplicate leads, a broken CRM sync, or a scoring model nobody trusts, which we audit and rebuild in milestone-gated phases.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://kovil.ai/platforms' },
    { '@type': 'ListItem', position: 3, name: 'Marketo', item: 'https://kovil.ai/platforms/marketo' },
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
      <div className="pt-20"><MarketoPlatformPage /></div>
    </>
  )
}
