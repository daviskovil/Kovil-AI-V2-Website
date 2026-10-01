import type { Metadata } from 'next'
import ActiveCampaignPlatformPage from '@/src/pages/platforms/activecampaign/ActiveCampaignPlatformPage'

export const metadata: Metadata = {
  title: 'ActiveCampaign Platform Partner — AI Automation & Specialist Talent',
  description: 'Kovil AI is your single partner for ActiveCampaign — AI-driven lifecycle automation, plus vetted automation engineers, developers, and CRM consultants matched in 48 hours. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/platforms/activecampaign' },
  keywords: [
    'activecampaign ai automation',
    'hire activecampaign developer',
    'activecampaign automation engineer',
    'activecampaign staff augmentation',
    'activecampaign crm consultant',
    'activecampaign api integration',
    'activecampaign certified partner',
    'what is activecampaign',
  ],
  openGraph: {
    type: 'website',
    title: 'ActiveCampaign Platform Partner — AI Automation & Specialist Talent | Kovil AI',
    description: 'AI-driven lifecycle automation, plus vetted automation engineers, developers, and CRM consultants matched in 48 hours. 2-week risk-free trial.',
    url: 'https://kovil.ai/platforms/activecampaign',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ActiveCampaign Platform Partner — AI Automation & Specialist Talent | Kovil AI',
    description: 'AI-driven lifecycle automation, plus vetted automation engineers, developers, and CRM consultants matched in 48 hours.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'ActiveCampaign Platform Services — AI Automation & Specialist Talent',
  description: 'Kovil AI delivers AI-driven lifecycle automation on ActiveCampaign and staffs vetted automation engineers, developers, and CRM consultants — covering email, SMS, CRM, and sales automation.',
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
  serviceType: 'ActiveCampaign Implementation and Staffing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/activecampaign',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'ActiveCampaign Platform Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Lifecycle Automation Build' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automation Engineer Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'API/Integration Developer Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CRM & Marketing Ops Consultant Staffing' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/activecampaign' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'ActiveCampaign',
  description: 'ActiveCampaign is a Customer Experience Automation (CXA) platform combining email marketing, SMS, a built-in CRM, and sales automation in a single tool.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/activecampaign',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'ActiveCampaign Platform Partner — AI Automation & Specialist Talent',
  description: 'Kovil AI is your single partner for ActiveCampaign — AI-driven lifecycle automation, plus vetted automation engineers, developers, and CRM consultants.',
  url: 'https://kovil.ai/platforms/activecampaign',
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
  name: 'How to Work With Kovil AI on ActiveCampaign',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Account', text: "Tell us how your contacts and pipeline are structured, what's broken or missing, and whether you need automation, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/activecampaign' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: 'Review 2-3 vetted ActiveCampaign specialists matched to your stack and contact volume.', url: 'https://kovil.ai/platforms/activecampaign' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/activecampaign' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is ActiveCampaign?', acceptedAnswer: { '@type': 'Answer', text: 'ActiveCampaign is a Customer Experience Automation (CXA) platform combining email marketing, SMS, a built-in CRM, and sales automation in a single tool.' } },
    { '@type': 'Question', name: 'Does ActiveCampaign have native AI, or do I need a custom build?', acceptedAnswer: { '@type': 'Answer', text: "ActiveCampaign ships built-in features like predictive sending and win probability scoring. Kovil AI configures those natively and builds custom API automation where they aren't enough." } },
    { '@type': 'Question', name: 'Does Kovil AI build custom automation on ActiveCampaign, or only staff talent?', acceptedAnswer: { '@type': 'Answer', text: "Both, and they're often the same engagement. Clients commonly hire an automation engineer to clean up workflow logic and tagging, then layer AI-driven automation on top." } },
    { '@type': 'Question', name: 'How much does it cost to hire an ActiveCampaign specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: "Kovil AI's remote ActiveCampaign talent bills $18-$28 per hour depending on role and experience, versus $40-$85+ per hour for prevailing US onsite rates for the same roles, typically 58-66% lower." } },
    { '@type': 'Question', name: 'What is the difference between an Automation Engineer, Developer, and CRM/Ops Consultant?', acceptedAnswer: { '@type': 'Answer', text: 'An Automation Engineer builds and maintains workflow logic. An API/Integration Developer builds custom integrations using the ActiveCampaign API. A CRM & Marketing Ops Consultant designs pipeline structure and marketing-sales alignment.' } },
    { '@type': 'Question', name: 'How quickly can I hire an ActiveCampaign specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched within 24-48 hours of submitting a brief, with work starting within a week, backed by a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'Are your ActiveCampaign specialists certified?', acceptedAnswer: { '@type': 'Answer', text: 'We verify relevant platform experience where it exists, but weight a live automation build challenge and production portfolio review just as heavily.' } },
    { '@type': 'Question', name: 'Can Kovil AI integrate ActiveCampaign with other systems like Shopify or Slack?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our ActiveCampaign talent regularly builds integrations using the REST API and custom middleware.' } },
    { '@type': 'Question', name: 'Who owns the automations and integrations built during an engagement?', acceptedAnswer: { '@type': 'Answer', text: 'You do, 100%. All custom automations, integrations, and documentation are fully owned by you under clear IP-assignment terms, with no shared IP and no lock-in.' } },
    { '@type': 'Question', name: 'Can I combine an AI automation build with ActiveCampaign staff augmentation in one engagement?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A single Engagement Manager can coordinate an automation build alongside dedicated engineer or developer talent working in the same account.' } },
    { '@type': 'Question', name: 'What does Kovil AI typically build on top of ActiveCampaign?', acceptedAnswer: { '@type': 'Answer', text: 'Real-time lifecycle re-segmentation, deal risk scoring, cross-channel campaign coordination, and custom CRM-to-ERP sync.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from an ActiveCampaign Certified Partner agency or freelancer?', acceptedAnswer: { '@type': 'Answer', text: 'A partner agency typically scopes a fixed project and hands it to a rotating bench. A freelancer works solo with no oversight. Kovil AI embeds a single accountable specialist under an Engagement Manager who audits every milestone.' } },
    { '@type': 'Question', name: 'Can we extend a trial engagement or convert it to a long-term hire?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most clients extend the engagement as new campaigns or automation needs come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way.' } },
    { '@type': 'Question', name: 'Do you support ActiveCampaign rescues or fixing a messy account?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A meaningful share of our ActiveCampaign engagements start as a rescue of tangled automation logic, a stale contact list, or a forgotten integration, which we audit and rebuild in milestone-gated phases.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://kovil.ai/platforms' },
    { '@type': 'ListItem', position: 3, name: 'ActiveCampaign', item: 'https://kovil.ai/platforms/activecampaign' },
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
      <div className="pt-20"><ActiveCampaignPlatformPage /></div>
    </>
  )
}
