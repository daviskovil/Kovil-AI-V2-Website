import type { Metadata } from 'next'
import SmartsheetPlatformPage from '@/src/pages/platforms/smartsheet/SmartsheetPlatformPage'

export const metadata: Metadata = {
  title: 'Smartsheet Platform Partner — AI Automation & Specialist Talent',
  description: 'Kovil AI is your single partner for Smartsheet — AI-driven resource automation, plus vetted solutions architects, developers, and work management consultants matched in 48 hours. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/platforms/smartsheet' },
  keywords: [
    'smartsheet ai automation',
    'hire smartsheet developer',
    'smartsheet solutions architect',
    'smartsheet staff augmentation',
    'smartsheet control center',
    'smartsheet api integration',
    'smartsheet work management consultant',
    'what is smartsheet',
  ],
  openGraph: {
    type: 'website',
    title: 'Smartsheet Platform Partner — AI Automation & Specialist Talent | Kovil AI',
    description: 'AI-driven resource automation, plus vetted solutions architects, developers, and work management consultants matched in 48 hours. 2-week risk-free trial.',
    url: 'https://kovil.ai/platforms/smartsheet',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smartsheet Platform Partner — AI Automation & Specialist Talent | Kovil AI',
    description: 'AI-driven resource automation, plus vetted solutions architects, developers, and work management consultants matched in 48 hours.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Smartsheet Platform Services — AI Automation & Specialist Talent',
  description: 'Kovil AI delivers AI-driven automation on Smartsheet and staffs vetted solutions architects, developers, and work management consultants — covering sheets, automation, Control Center, and dashboards.',
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
  serviceType: 'Smartsheet Implementation and Staffing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/smartsheet',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Smartsheet Platform Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Resource Automation Build' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Smartsheet Solutions Architect Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automation/API Developer Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Work Management Consultant Staffing' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/smartsheet' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Smartsheet',
  description: 'Smartsheet is a collaborative work management platform with a spreadsheet-native grid interface, combining sheet editing with automation workflows, resource management, and Control Center for standardized project rollouts.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/smartsheet',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Smartsheet Platform Partner — AI Automation & Specialist Talent',
  description: 'Kovil AI is your single partner for Smartsheet — AI-driven resource automation, plus vetted solutions architects, developers, and work management consultants.',
  url: 'https://kovil.ai/platforms/smartsheet',
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
  name: 'How to Work With Kovil AI on Smartsheet',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Account', text: "Tell us how your sheets and workflows are structured, what's broken or missing, and whether you need automation, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/smartsheet' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: 'Review 2-3 vetted Smartsheet specialists matched to your stack and team size.', url: 'https://kovil.ai/platforms/smartsheet' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/smartsheet' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Smartsheet?', acceptedAnswer: { '@type': 'Answer', text: 'Smartsheet is a collaborative work management platform with a spreadsheet-native grid interface, used by around 90% of Fortune 100 companies, combining sheet editing with automation, resource management, and Control Center.' } },
    { '@type': 'Question', name: 'Does Smartsheet have native AI, or do I need a custom build?', acceptedAnswer: { '@type': 'Answer', text: "Smartsheet ships built-in AI features for formula generation and smart summaries. Kovil AI configures those natively and builds custom API automation where they aren't enough." } },
    { '@type': 'Question', name: 'Does Kovil AI build custom automation on Smartsheet, or only staff talent?', acceptedAnswer: { '@type': 'Answer', text: "Both, and they're often the same engagement. Clients commonly hire a solutions architect to standardize sheet structure and Control Center templates, then layer AI-driven automation on top." } },
    { '@type': 'Question', name: 'How much does it cost to hire a Smartsheet specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: "Kovil AI's remote Smartsheet talent bills $18-$30 per hour depending on role and experience, versus $40-$95+ per hour for prevailing US onsite rates for the same roles, typically 60-67% lower." } },
    { '@type': 'Question', name: 'What is the difference between a Solutions Architect, Developer, and Work Management Consultant?', acceptedAnswer: { '@type': 'Answer', text: 'A Solutions Architect designs sheet structure and Control Center templates. An Automation/API Developer builds custom integrations using the Smartsheet API. A Work Management Consultant owns template standardization and dashboard configuration.' } },
    { '@type': 'Question', name: 'How quickly can I hire a Smartsheet specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched within 24-48 hours of submitting a brief, with work starting within a week, backed by a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'Are your Smartsheet specialists certified?', acceptedAnswer: { '@type': 'Answer', text: 'We verify relevant platform experience where it exists, but weight a live automation build challenge and production portfolio review just as heavily.' } },
    { '@type': 'Question', name: 'Can Kovil AI integrate Smartsheet with other systems like Salesforce or Jira?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our Smartsheet talent regularly builds integrations using the REST API and native connectors.' } },
    { '@type': 'Question', name: 'Who owns the sheets and automations built during an engagement?', acceptedAnswer: { '@type': 'Answer', text: 'You do, 100%. All custom sheets, automations, and documentation are fully owned by you under clear IP-assignment terms, with no shared IP and no lock-in.' } },
    { '@type': 'Question', name: 'Can I combine an AI automation build with Smartsheet staff augmentation in one engagement?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A single Engagement Manager can coordinate an automation build alongside dedicated architect or developer talent working in the same account.' } },
    { '@type': 'Question', name: 'What does Kovil AI typically build on top of Smartsheet?', acceptedAnswer: { '@type': 'Answer', text: 'Standardized Control Center project templates, automated approval routing, resource capacity alerts, and custom API integrations with sales and project tools.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from a Smartsheet Partner agency or freelancer?', acceptedAnswer: { '@type': 'Answer', text: 'A partner agency typically scopes a fixed project and hands it to a rotating bench. A freelancer works solo with no oversight. Kovil AI embeds a single accountable specialist under an Engagement Manager who audits every milestone.' } },
    { '@type': 'Question', name: 'Can we extend a trial engagement or convert it to a long-term hire?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most clients extend the engagement as new teams or automation needs come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way.' } },
    { '@type': 'Question', name: 'Do you support Smartsheet rescues or fixing a messy account?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A meaningful share of our Smartsheet engagements start as a rescue of inconsistent sheet structures, broken formula chains, or a Control Center rollout that lost governance, which we audit and rebuild in milestone-gated phases.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://kovil.ai/platforms' },
    { '@type': 'ListItem', position: 3, name: 'Smartsheet', item: 'https://kovil.ai/platforms/smartsheet' },
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
      <div className="pt-20"><SmartsheetPlatformPage /></div>
    </>
  )
}
