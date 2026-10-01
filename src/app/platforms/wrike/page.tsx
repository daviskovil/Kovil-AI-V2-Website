import type { Metadata } from 'next'
import WrikePlatformPage from '@/src/pages/platforms/wrike/WrikePlatformPage'

export const metadata: Metadata = {
  title: 'Wrike Platform Partner — AI Automation & Specialist Talent',
  description: 'Kovil AI is your single partner for Wrike — AI-driven risk automation, plus vetted implementation consultants, automation experts, and work management consultants matched in 48 hours. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/platforms/wrike' },
  keywords: [
    'wrike ai automation',
    'hire wrike developer',
    'wrike implementation consultant',
    'wrike staff augmentation',
    'wrike api integration',
    'wrike automation expert',
    'wrike approval workflows',
    'what is wrike',
  ],
  openGraph: {
    type: 'website',
    title: 'Wrike Platform Partner — AI Automation & Specialist Talent | Kovil AI',
    description: 'AI-driven risk automation, plus vetted implementation consultants, automation experts, and work management consultants matched in 48 hours. 2-week risk-free trial.',
    url: 'https://kovil.ai/platforms/wrike',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wrike Platform Partner — AI Automation & Specialist Talent | Kovil AI',
    description: 'AI-driven risk automation, plus vetted implementation consultants, automation experts, and work management consultants matched in 48 hours.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Wrike Platform Services — AI Automation & Specialist Talent',
  description: 'Kovil AI delivers AI-driven automation on Wrike and staffs vetted implementation consultants, automation experts, and work management consultants — covering projects, approvals, and dashboards.',
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
  serviceType: 'Wrike Implementation and Staffing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/wrike',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Wrike Platform Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Risk Automation Build' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wrike Implementation Consultant Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automation Expert Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Work Management Consultant Staffing' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/wrike' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Wrike',
  description: 'Wrike is an enterprise work management platform built for large, cross-departmental organizations, with native approval and proofing workflows and dynamic request forms.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/wrike',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Wrike Platform Partner — AI Automation & Specialist Talent',
  description: 'Kovil AI is your single partner for Wrike — AI-driven risk automation, plus vetted implementation consultants, automation experts, and work management consultants.',
  url: 'https://kovil.ai/platforms/wrike',
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
  name: 'How to Work With Kovil AI on Wrike',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Account', text: "Tell us how your projects and approval chains are structured, what's broken or missing, and whether you need automation, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/wrike' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: 'Review 2-3 vetted Wrike specialists matched to your stack and team size.', url: 'https://kovil.ai/platforms/wrike' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/wrike' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Wrike?', acceptedAnswer: { '@type': 'Answer', text: 'Wrike is an enterprise work management platform built for large, cross-departmental organizations, with native approval and proofing workflows and dynamic request forms, used by over 20,000 companies.' } },
    { '@type': 'Question', name: 'Does Wrike have native AI, or do I need a custom build?', acceptedAnswer: { '@type': 'Answer', text: "Wrike ships built-in automation for risk prediction and smart task creation. Kovil AI configures those natively and builds custom API automation where they aren't enough." } },
    { '@type': 'Question', name: 'Does Kovil AI build custom automation on Wrike, or only staff talent?', acceptedAnswer: { '@type': 'Answer', text: "Both, and they're often the same engagement. Clients commonly hire an implementation consultant to standardize approval workflows, then layer AI-driven automation on top." } },
    { '@type': 'Question', name: 'How much does it cost to hire a Wrike specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: "Kovil AI's remote Wrike talent bills $20-$30 per hour depending on role and experience, versus $45-$95+ per hour for prevailing US onsite rates for the same roles, typically 60-67% lower." } },
    { '@type': 'Question', name: 'What is the difference between an Implementation Consultant, Automation Expert, and Work Management Consultant?', acceptedAnswer: { '@type': 'Answer', text: 'An Implementation Consultant designs folder structure and approval workflows. An Automation Expert builds custom integrations using the Wrike API. A Work Management Consultant owns template standardization and dashboard configuration.' } },
    { '@type': 'Question', name: 'How quickly can I hire a Wrike specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched within 24-48 hours of submitting a brief, with work starting within a week, backed by a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'Are your Wrike specialists certified?', acceptedAnswer: { '@type': 'Answer', text: 'We verify relevant platform experience where it exists, but weight a live automation build challenge and production portfolio review just as heavily.' } },
    { '@type': 'Question', name: 'Can Kovil AI integrate Wrike with other systems like Salesforce or Slack?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our Wrike talent regularly builds integrations using the REST API and custom middleware.' } },
    { '@type': 'Question', name: 'Who owns the workflows and automations built during an engagement?', acceptedAnswer: { '@type': 'Answer', text: 'You do, 100%. All custom workflows, automations, and documentation are fully owned by you under clear IP-assignment terms, with no shared IP and no lock-in.' } },
    { '@type': 'Question', name: 'Can I combine an AI automation build with Wrike staff augmentation in one engagement?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A single Engagement Manager can coordinate an automation build alongside dedicated consultant or expert talent working in the same account.' } },
    { '@type': 'Question', name: 'What does Kovil AI typically build on top of Wrike?', acceptedAnswer: { '@type': 'Answer', text: 'Automated approval routing, at-risk project scoring, resource capacity alerts, and custom API integrations with sales and finance tools.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from a Wrike Partner agency or freelancer?', acceptedAnswer: { '@type': 'Answer', text: 'A partner agency typically scopes a fixed project and hands it to a rotating bench. A freelancer works solo with no oversight. Kovil AI embeds a single accountable specialist under an Engagement Manager who audits every milestone.' } },
    { '@type': 'Question', name: 'Can we extend a trial engagement or convert it to a long-term hire?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most clients extend the engagement as new teams or automation needs come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way.' } },
    { '@type': 'Question', name: 'Do you support Wrike rescues or fixing a messy account?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A meaningful share of our Wrike engagements start as a rescue of inconsistent approval chains, duplicate automations, or a rollout that lost adoption, which we audit and rebuild in milestone-gated phases.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://kovil.ai/platforms' },
    { '@type': 'ListItem', position: 3, name: 'Wrike', item: 'https://kovil.ai/platforms/wrike' },
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
      <div className="pt-20"><WrikePlatformPage /></div>
    </>
  )
}
