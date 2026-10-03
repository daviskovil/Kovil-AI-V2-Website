import type { Metadata } from 'next'
import BoomiPlatformPage from '@/src/pages/platforms/boomi/BoomiPlatformPage'

export const metadata: Metadata = {
  title: 'Boomi Platform Partner — AI Integrations & Specialist Talent',
  description: 'Kovil AI is your single partner for Boomi — agent-ready AI integration builds, plus vetted Boomi developers, API specialists, and cloud architects matched in 48 hours. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/platforms/boomi' },
  keywords: [
    'boomi ai integration',
    'hire boomi developer',
    'dell boomi consultant',
    'boomi staff augmentation',
    'boomi integration architect',
    'ipaas integration developer',
    'boomi api management',
    'what is boomi',
  ],
  openGraph: {
    type: 'website',
    title: 'Boomi Platform Partner — AI Integrations & Specialist Talent | Kovil AI',
    description: 'Agent-ready AI integration builds, plus vetted Boomi developers, API specialists, and cloud architects matched in 48 hours. 2-week risk-free trial.',
    url: 'https://kovil.ai/platforms/boomi',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boomi Platform Partner — AI Integrations & Specialist Talent | Kovil AI',
    description: 'Agent-ready AI integration builds, plus vetted Boomi developers, API specialists, and cloud architects matched in 48 hours.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Boomi Platform Services — AI Integrations & Specialist Talent',
  description: 'Kovil AI delivers agent-ready AI integrations on Boomi and staffs vetted integration developers, API and data specialists, cloud architects, and AI specialists — covering integration processes, API management, and master data.',
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
  serviceType: 'Boomi Implementation and Staffing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/boomi',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Boomi Platform Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Integration Build' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Boomi Integration Developer Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'API & Data Specialist Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud Architect Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Boomi AI Specialist Staffing' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/boomi' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Boomi',
  description: 'Boomi (formerly Dell Boomi) is a cloud-native integration platform as a service (iPaaS) that connects applications, data, and APIs through low-code visual processes, with added capabilities for API management, master data, and workflow automation.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/boomi',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Boomi Platform Partner — AI Integrations & Specialist Talent',
  description: 'Kovil AI is your single partner for Boomi — agent-ready AI integration builds, plus vetted Boomi developers, API specialists, and cloud architects.',
  url: 'https://kovil.ai/platforms/boomi',
  datePublished: '2026-10-03',
  dateModified: '2026-10-03',
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
  name: 'How to Work With Kovil AI on Boomi',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Integration Estate', text: "Tell us which Boomi components you run, what's broken or backlogged, and whether you need an AI build, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/boomi' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: 'Review 2-3 vetted Boomi specialists matched to your stack and systems.', url: 'https://kovil.ai/platforms/boomi' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/boomi' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Boomi?', acceptedAnswer: { '@type': 'Answer', text: 'Boomi (formerly Dell Boomi) is a cloud-native integration platform as a service (iPaaS) that lets organizations connect applications, data, and APIs through low-code visual processes, with additional capabilities for API management, master data management, and workflow automation.' } },
    { '@type': 'Question', name: 'What is the difference between Boomi and MuleSoft?', acceptedAnswer: { '@type': 'Answer', text: 'Both are enterprise integration platforms. Boomi is known for low-code, visual integration design and fast time-to-value, while MuleSoft is known for its API-led approach and tight Salesforce alignment. Kovil AI staffs and builds on both.' } },
    { '@type': 'Question', name: 'Does Boomi have native AI, or do I need a custom build?', acceptedAnswer: { '@type': 'Answer', text: "Boomi ships native AI capabilities. Kovil AI configures those natively and builds custom LLM and agent integrations on top where they aren't enough." } },
    { '@type': 'Question', name: 'Does Kovil AI build AI integrations on Boomi, or only staff talent?', acceptedAnswer: { '@type': 'Answer', text: "Both, and they're often the same engagement. Clients commonly hire an integration developer to clean up existing processes first, then add AI capabilities on top of integrations that are already well-governed." } },
    { '@type': 'Question', name: 'How much does it cost to hire a Boomi developer through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: "Kovil AI's remote Boomi talent bills $22-$44 per hour depending on role and experience, versus $60-$150+ per hour for prevailing US onsite rates for the same roles — typically 66-70% lower." } },
    { '@type': 'Question', name: 'What is the difference between an Integration Developer, API & Data Specialist, and Cloud Architect?', acceptedAnswer: { '@type': 'Answer', text: 'An Integration Developer builds and maintains Boomi processes. An API & Data Specialist designs managed APIs and master data models. A Cloud Architect designs the overall integration architecture, runtime topology, and environment strategy.' } },
    { '@type': 'Question', name: 'How quickly can I hire a Boomi specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched with a vetted developer, specialist, or architect within 24-48 hours of submitting a brief, with work starting within a week. A 2-week risk-free trial lets you validate fit and output before committing to a longer engagement.' } },
    { '@type': 'Question', name: 'Are your Boomi specialists certified?', acceptedAnswer: { '@type': 'Answer', text: 'We verify relevant platform experience and certifications where they exist, but weight a live integration build challenge and production portfolio review just as heavily, since credentials alone do not test real production judgment.' } },
    { '@type': 'Question', name: 'Can Kovil AI integrate Boomi with systems like NetSuite, Workday, or Salesforce?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our Boomi talent regularly builds integrations connecting Boomi to NetSuite, Workday, Salesforce, and whatever else your business runs on.' } },
    { '@type': 'Question', name: 'Who owns the integrations built during an engagement?', acceptedAnswer: { '@type': 'Answer', text: 'You do, 100%. All processes, maps, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no shared IP, no lock-in.' } },
    { '@type': 'Question', name: 'Can I combine an AI build with Boomi staff augmentation in one engagement?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — this is one of the most common engagement shapes we run. A single Engagement Manager can coordinate an AI build alongside dedicated developer or architect talent working in the same environment.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from a traditional Boomi systems integrator?', acceptedAnswer: { '@type': 'Answer', text: 'Traditional SIs typically scope a fixed project and hand it to a rotating bench of consultants. Kovil AI embeds a single accountable engineer or small pod directly with your team, under one Engagement Manager who audits every milestone — with a 2-week risk-free trial and no long-term lock-in.' } },
    { '@type': 'Question', name: 'Can we extend a trial engagement or convert it to a long-term hire?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most clients extend the engagement as new systems come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way.' } },
    { '@type': 'Question', name: 'Do you support Boomi rescues or fixing a messy integration estate?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A meaningful share of our Boomi engagements start as a rescue — processes nobody documented, failing error handling, or an estate that grew without governance. We audit it, then stabilize and rebuild in milestone-gated phases.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://kovil.ai/platforms' },
    { '@type': 'ListItem', position: 3, name: 'Boomi', item: 'https://kovil.ai/platforms/boomi' },
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
      <div className="pt-20"><BoomiPlatformPage /></div>
    </>
  )
}
