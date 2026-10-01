import type { Metadata } from 'next'
import AtlassianPlatformPage from '@/src/pages/platforms/atlassian/AtlassianPlatformPage'

export const metadata: Metadata = {
  title: 'Atlassian Platform Partner — AI Agents & Specialist Talent',
  description: 'Kovil AI is your single partner for Atlassian — Rovo AI agents, plus vetted Jira/Confluence administrators, integration developers, and solutions architects matched in 48 hours. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/platforms/atlassian' },
  keywords: [
    'atlassian ai agents',
    'hire jira administrator',
    'jira confluence developer',
    'atlassian solutions architect',
    'atlassian staff augmentation',
    'rovo ai integration',
    'atlassian certified professional',
    'what is atlassian',
  ],
  openGraph: {
    type: 'website',
    title: 'Atlassian Platform Partner — AI Agents & Specialist Talent | Kovil AI',
    description: 'Rovo AI agents, plus vetted Jira/Confluence administrators, integration developers, and solutions architects matched in 48 hours. 2-week risk-free trial.',
    url: 'https://kovil.ai/platforms/atlassian',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atlassian Platform Partner — AI Agents & Specialist Talent | Kovil AI',
    description: 'Rovo AI agents, plus vetted Jira/Confluence administrators, integration developers, and solutions architects matched in 48 hours.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Atlassian Platform Services — AI Agents & Specialist Talent',
  description: 'Kovil AI delivers Rovo AI agents on Atlassian and staffs vetted administrators, integration developers, and solutions architects — covering Jira, Confluence, Jira Service Management, and Bitbucket.',
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
  serviceType: 'Atlassian Implementation and Staffing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/atlassian',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Atlassian Platform Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rovo AI Agent Build' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Jira/Confluence Administrator Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Atlassian Integration Developer Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Atlassian Solutions Architect Staffing' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/atlassian' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Atlassian',
  description: 'Atlassian is the company behind Jira Software, Confluence, Jira Service Management, and Bitbucket, powered in part by Rovo, Atlassian\'s AI teammate and enterprise search platform.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/atlassian',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Atlassian Platform Partner — AI Agents & Specialist Talent',
  description: 'Kovil AI is your single partner for Atlassian — Rovo AI agents, plus vetted Jira/Confluence administrators, integration developers, and solutions architects.',
  url: 'https://kovil.ai/platforms/atlassian',
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
  name: 'How to Work With Kovil AI on Atlassian',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Instance', text: "Tell us which Atlassian products you run, what's broken or missing, and whether you need an AI agent, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/atlassian' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: 'Review 2-3 vetted Atlassian specialists matched to your stack and team size.', url: 'https://kovil.ai/platforms/atlassian' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/atlassian' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Atlassian?', acceptedAnswer: { '@type': 'Answer', text: 'Atlassian is the company behind Jira Software, Confluence, Jira Service Management, and Bitbucket, used by over 300,000 organizations worldwide to track work, document knowledge, and manage service requests.' } },
    { '@type': 'Question', name: 'What is the difference between Atlassian and Rovo?', acceptedAnswer: { '@type': 'Answer', text: "Atlassian is the underlying suite of products; Rovo is Atlassian's native AI layer for AI teammates, agents, and enterprise search. Kovil AI configures Rovo natively and, where it isn't enough, builds custom AI integrations." } },
    { '@type': 'Question', name: 'Does Kovil AI build custom AI agents on Atlassian, or only staff talent?', acceptedAnswer: { '@type': 'Answer', text: "Both, and they're often the same engagement. Clients commonly hire a Jira administrator to clean up workflow configuration, then layer Rovo AI agents on top." } },
    { '@type': 'Question', name: 'How much does it cost to hire an Atlassian specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: "Kovil AI's remote Atlassian talent bills $20-$40 per hour depending on role and experience, versus $45-$145+ per hour for prevailing US onsite rates for the same roles, typically 60-71% lower." } },
    { '@type': 'Question', name: 'What is the difference between an Administrator, Integration Developer, and Solutions Architect?', acceptedAnswer: { '@type': 'Answer', text: 'An Administrator configures projects, permission schemes, and workflows. An Integration Developer builds custom Forge apps and REST API integrations. A Solutions Architect designs multi-project governance and integration strategy.' } },
    { '@type': 'Question', name: 'How quickly can I hire an Atlassian specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched within 24-48 hours of submitting a brief, with work starting within a week, backed by a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'Do your Atlassian engineers hold official certifications?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We verify Atlassian Certified Professional (ACP) credentials directly as part of vetting, alongside a live technical assessment.' } },
    { '@type': 'Question', name: 'Can Kovil AI integrate Atlassian with other systems like Slack or GitHub?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our Atlassian talent regularly builds integrations using Forge, the REST API, and custom middleware.' } },
    { '@type': 'Question', name: 'Who owns the apps and configurations built during an engagement?', acceptedAnswer: { '@type': 'Answer', text: 'You do, 100%. All Forge apps, automation rules, and documentation are fully owned by you under clear IP-assignment terms, with no shared IP and no lock-in.' } },
    { '@type': 'Question', name: 'Can I combine a Rovo AI build with Atlassian staff augmentation in one engagement?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A single Engagement Manager can coordinate a Rovo build alongside dedicated administrator or developer talent working in the same instance.' } },
    { '@type': 'Question', name: 'What Atlassian products does Kovil AI have experience with?', acceptedAnswer: { '@type': 'Answer', text: 'Jira Software, Confluence, Jira Service Management, Bitbucket, and Automation for Jira, plus integrations including Slack and GitHub.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from a traditional Atlassian solution partner?', acceptedAnswer: { '@type': 'Answer', text: 'Traditional solution partners typically scope a fixed project and hand it to a rotating bench. Kovil AI embeds a single accountable engineer under an Engagement Manager who audits every milestone.' } },
    { '@type': 'Question', name: 'Can we extend a trial engagement or convert it to a long-term hire?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most clients extend the engagement as new projects or Rovo use cases come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way.' } },
    { '@type': 'Question', name: 'Do you support Atlassian rescues or fixing a failing implementation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A significant share of our Atlassian engagements start as a rescue of an instance with years of workflow debt, which we audit and rebuild in milestone-gated phases.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://kovil.ai/platforms' },
    { '@type': 'ListItem', position: 3, name: 'Atlassian', item: 'https://kovil.ai/platforms/atlassian' },
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
      <div className="pt-20"><AtlassianPlatformPage /></div>
    </>
  )
}
