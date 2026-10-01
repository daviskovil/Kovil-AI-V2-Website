import type { Metadata } from 'next'
import AsanaPlatformPage from '@/src/pages/platforms/asana/AsanaPlatformPage'

export const metadata: Metadata = {
  title: 'Asana Platform Partner — AI Automation & Specialist Talent',
  description: 'Kovil AI is your single partner for Asana — AI-driven workload automation, plus vetted solutions architects, API specialists, and work management consultants matched in 48 hours. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/platforms/asana' },
  keywords: [
    'asana ai automation',
    'hire asana developer',
    'asana solutions architect',
    'asana staff augmentation',
    'asana api integration',
    'asana work management consultant',
    'asana work graph',
    'what is asana',
  ],
  openGraph: {
    type: 'website',
    title: 'Asana Platform Partner — AI Automation & Specialist Talent | Kovil AI',
    description: 'AI-driven workload automation, plus vetted solutions architects, API specialists, and work management consultants matched in 48 hours. 2-week risk-free trial.',
    url: 'https://kovil.ai/platforms/asana',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asana Platform Partner — AI Automation & Specialist Talent | Kovil AI',
    description: 'AI-driven workload automation, plus vetted solutions architects, API specialists, and work management consultants matched in 48 hours.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Asana Platform Services — AI Automation & Specialist Talent',
  description: 'Kovil AI delivers AI-driven automation on Asana and staffs vetted solutions architects, API specialists, and work management consultants — covering projects, goals, portfolios, and the Work Graph.',
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
  serviceType: 'Asana Implementation and Staffing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/asana',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Asana Platform Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Workload Automation Build' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Asana Solutions Architect Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'API Integration Specialist Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Work Management Consultant Staffing' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/asana' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Asana',
  description: 'Asana is a work management platform built around the Work Graph, a connected data model linking company goals to the projects and tasks that drive them.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/asana',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Asana Platform Partner — AI Automation & Specialist Talent',
  description: 'Kovil AI is your single partner for Asana — AI-driven workload automation, plus vetted solutions architects, API specialists, and work management consultants.',
  url: 'https://kovil.ai/platforms/asana',
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
  name: 'How to Work With Kovil AI on Asana',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Account', text: "Tell us how your projects and portfolios are structured, what's broken or missing, and whether you need automation, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/asana' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: 'Review 2-3 vetted Asana specialists matched to your stack and team size.', url: 'https://kovil.ai/platforms/asana' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/asana' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Asana?', acceptedAnswer: { '@type': 'Answer', text: 'Asana is a work management platform built around the Work Graph, a connected data model linking company goals to the projects and tasks that drive them, used by over 150,000 paying organizations.' } },
    { '@type': 'Question', name: 'Does Asana have native AI, or do I need a custom build?', acceptedAnswer: { '@type': 'Answer', text: "Asana ships built-in AI features for smart status updates, goal tracking, and summarization. Kovil AI configures those natively and builds custom API automation where they aren't enough." } },
    { '@type': 'Question', name: 'Does Kovil AI build custom automation on Asana, or only staff talent?', acceptedAnswer: { '@type': 'Answer', text: "Both, and they're often the same engagement. Clients commonly hire a work management consultant to standardize project templates, then layer AI-driven automation on top." } },
    { '@type': 'Question', name: 'How much does it cost to hire an Asana specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: "Kovil AI's remote Asana talent bills $18-$30 per hour depending on role and experience, versus $40-$95+ per hour for prevailing US onsite rates for the same roles, typically 60-67% lower." } },
    { '@type': 'Question', name: 'What is the difference between a Solutions Architect, API Specialist, and Work Management Consultant?', acceptedAnswer: { '@type': 'Answer', text: 'A Solutions Architect designs the project, portfolio, and Work Graph structure. An API Integration Specialist builds custom integrations. A Work Management Consultant owns template standardization and automation rules.' } },
    { '@type': 'Question', name: 'How quickly can I hire an Asana specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched within 24-48 hours of submitting a brief, with work starting within a week, backed by a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'Are your Asana specialists certified?', acceptedAnswer: { '@type': 'Answer', text: 'We verify relevant platform experience where it exists, but weight a live automation build challenge and production portfolio review just as heavily.' } },
    { '@type': 'Question', name: 'Can Kovil AI integrate Asana with other systems like Slack or Salesforce?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our Asana talent regularly builds integrations using the REST API and custom middleware.' } },
    { '@type': 'Question', name: 'Who owns the projects and automations built during an engagement?', acceptedAnswer: { '@type': 'Answer', text: 'You do, 100%. All custom project templates, automations, and documentation are fully owned by you under clear IP-assignment terms, with no shared IP and no lock-in.' } },
    { '@type': 'Question', name: 'Can I combine an AI automation build with Asana staff augmentation in one engagement?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A single Engagement Manager can coordinate an automation build alongside dedicated architect or specialist talent working in the same account.' } },
    { '@type': 'Question', name: 'What does Kovil AI typically build on top of Asana?', acceptedAnswer: { '@type': 'Answer', text: 'AI-generated status digests, at-risk project scoring, automated intake triage, and custom API integrations with sales and support tools.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from an Asana Solutions Partner agency or freelancer?', acceptedAnswer: { '@type': 'Answer', text: 'A partner agency typically scopes a fixed project and hands it to a rotating bench. A freelancer works solo with no oversight. Kovil AI embeds a single accountable specialist under an Engagement Manager who audits every milestone.' } },
    { '@type': 'Question', name: 'Can we extend a trial engagement or convert it to a long-term hire?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most clients extend the engagement as new teams or automation needs come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way.' } },
    { '@type': 'Question', name: 'Do you support Asana rescues or fixing a messy account?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A meaningful share of our Asana engagements start as a rescue of inconsistent project templates, duplicate automations, or a rollout that lost adoption, which we audit and rebuild in milestone-gated phases.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://kovil.ai/platforms' },
    { '@type': 'ListItem', position: 3, name: 'Asana', item: 'https://kovil.ai/platforms/asana' },
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
      <div className="pt-20"><AsanaPlatformPage /></div>
    </>
  )
}
