import type { Metadata } from 'next'
import MondayPlatformPage from '@/src/pages/platforms/monday/MondayPlatformPage'

export const metadata: Metadata = {
  title: 'monday.com Platform Partner — AI Automation & Specialist Talent',
  description: 'Kovil AI is your single partner for monday.com — AI-driven workflow automation, plus vetted solutions engineers, developers, and Work OS consultants matched in 48 hours. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/platforms/monday' },
  keywords: [
    'monday.com ai automation',
    'hire monday.com developer',
    'monday.com solutions engineer',
    'monday.com staff augmentation',
    'monday.com api integration',
    'monday.com work os consultant',
    'monday.com automation builder',
    'what is monday.com',
  ],
  openGraph: {
    type: 'website',
    title: 'monday.com Platform Partner — AI Automation & Specialist Talent | Kovil AI',
    description: 'AI-driven workflow automation, plus vetted solutions engineers, developers, and Work OS consultants matched in 48 hours. 2-week risk-free trial.',
    url: 'https://kovil.ai/platforms/monday',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'monday.com Platform Partner — AI Automation & Specialist Talent | Kovil AI',
    description: 'AI-driven workflow automation, plus vetted solutions engineers, developers, and Work OS consultants matched in 48 hours.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'monday.com Platform Services — AI Automation & Specialist Talent',
  description: 'Kovil AI delivers AI-driven automation on monday.com and staffs vetted solutions engineers, developers, and Work OS consultants — covering boards, automations, CRM, and dashboards.',
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
  serviceType: 'monday.com Implementation and Staffing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/monday',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'monday.com Platform Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Workflow Automation Build' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Solutions Engineer Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automation/API Developer Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Work OS Consultant Staffing' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/monday' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'monday.com',
  description: 'monday.com is a Work OS — a flexible, no-code platform for building custom boards, automations, and workflow apps across marketing, operations, dev, and sales.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/monday',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'monday.com Platform Partner — AI Automation & Specialist Talent',
  description: 'Kovil AI is your single partner for monday.com — AI-driven workflow automation, plus vetted solutions engineers, developers, and Work OS consultants.',
  url: 'https://kovil.ai/platforms/monday',
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
  name: 'How to Work With Kovil AI on monday.com',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Account', text: "Tell us how your boards and workflows are structured, what's broken or missing, and whether you need automation, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/monday' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: 'Review 2-3 vetted monday.com specialists matched to your stack and team size.', url: 'https://kovil.ai/platforms/monday' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/monday' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is monday.com?', acceptedAnswer: { '@type': 'Answer', text: 'monday.com is a Work OS — a flexible, no-code platform for building custom boards, automations, and workflow apps, used by over 225,000 customers.' } },
    { '@type': 'Question', name: 'Does monday.com have native AI, or do I need a custom build?', acceptedAnswer: { '@type': 'Answer', text: "monday.com ships built-in AI features for content generation, summarization, and smart automation. Kovil AI configures those natively and builds custom API automation where they aren't enough." } },
    { '@type': 'Question', name: 'Does Kovil AI build custom automation on monday.com, or only staff talent?', acceptedAnswer: { '@type': 'Answer', text: "Both, and they're often the same engagement. Clients commonly hire a solutions engineer to standardize board structure, then layer AI-driven automation on top." } },
    { '@type': 'Question', name: 'How much does it cost to hire a monday.com specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: "Kovil AI's remote monday.com talent bills $20-$30 per hour depending on role and experience, versus $45-$95+ per hour for prevailing US onsite rates for the same roles, typically 60-66% lower." } },
    { '@type': 'Question', name: 'What is the difference between a Solutions Engineer, Developer, and Work OS Consultant?', acceptedAnswer: { '@type': 'Answer', text: 'A Solutions Engineer designs board structures and automation rules. An Automation/API Developer builds custom integrations and apps. A Work OS Consultant owns cross-departmental rollout strategy and adoption.' } },
    { '@type': 'Question', name: 'How quickly can I hire a monday.com specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched within 24-48 hours of submitting a brief, with work starting within a week, backed by a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'Are your monday.com specialists certified?', acceptedAnswer: { '@type': 'Answer', text: 'We verify relevant platform experience where it exists, but weight a live automation build challenge and production portfolio review just as heavily.' } },
    { '@type': 'Question', name: 'Can Kovil AI integrate monday.com with other systems like Slack or Salesforce?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our monday.com talent regularly builds integrations using the API and custom middleware.' } },
    { '@type': 'Question', name: 'Who owns the boards and automations built during an engagement?', acceptedAnswer: { '@type': 'Answer', text: 'You do, 100%. All custom boards, automations, and documentation are fully owned by you under clear IP-assignment terms, with no shared IP and no lock-in.' } },
    { '@type': 'Question', name: 'Can I combine an AI automation build with monday.com staff augmentation in one engagement?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A single Engagement Manager can coordinate an automation build alongside dedicated engineer or developer talent working in the same account.' } },
    { '@type': 'Question', name: 'What does Kovil AI typically build on top of monday.com?', acceptedAnswer: { '@type': 'Answer', text: 'Cross-board handoff automation, AI-generated status digests, workload balancing alerts, and custom API integrations with sales and support tools.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from a monday.com Partner agency or freelancer?', acceptedAnswer: { '@type': 'Answer', text: 'A partner agency typically scopes a fixed project and hands it to a rotating bench. A freelancer works solo with no oversight. Kovil AI embeds a single accountable specialist under an Engagement Manager who audits every milestone.' } },
    { '@type': 'Question', name: 'Can we extend a trial engagement or convert it to a long-term hire?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most clients extend the engagement as new teams or automation needs come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way.' } },
    { '@type': 'Question', name: 'Do you support monday.com rescues or fixing a messy account?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A meaningful share of our monday.com engagements start as a rescue of inconsistent boards, duplicate automations, or a rollout that lost adoption, which we audit and rebuild in milestone-gated phases.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://kovil.ai/platforms' },
    { '@type': 'ListItem', position: 3, name: 'monday.com', item: 'https://kovil.ai/platforms/monday' },
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
      <div className="pt-20"><MondayPlatformPage /></div>
    </>
  )
}
