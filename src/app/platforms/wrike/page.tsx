import type { Metadata } from 'next'
import WrikePlatformPage from '@/src/pages/platforms/wrike/WrikePlatformPage'

export const metadata: Metadata = {
  title: 'Wrike AI Agents & Developers for Hire',
  description: 'Hire vetted Wrike specialists and AI agent builders from Kovil AI. Matched in 48 hours, 2-week risk-free trial, no lock-in.',
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
    title: 'Wrike AI Agents & Developers for Hire | Kovil AI',
    description: 'Hire vetted Wrike specialists and AI agent builders from Kovil AI. Matched in 48 hours, 2-week risk-free trial, no lock-in.',
    url: 'https://kovil.ai/platforms/wrike',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wrike AI Agents & Developers for Hire | Kovil AI',
    description: 'Hire vetted Wrike specialists and AI agent builders from Kovil AI. Matched in 48 hours, 2-week risk-free trial, no lock-in.',
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
  dateModified: '2026-10-16',
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
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Wrike?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wrike is a work management platform organized around spaces, folders, projects, and tasks, with custom item types, request forms, proofing and approvals, and resource management. It is widely used by marketing teams, agencies, and enterprises, and offers a REST API and Wrike Integrate for automation."
      }
    },
    {
      "@type": "Question",
      "name": "Does Wrike have native AI, or do I need a custom build?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wrike includes built-in AI features under its Work Intelligence capabilities. A custom build makes sense when you need an assistant using data from other systems, such as drafting briefs from CRM context or summarizing approvals across tools."
      }
    },
    {
      "@type": "Question",
      "name": "How should we structure Wrike folders and projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Keep nesting shallow and consistent, tie structure to how permissions and reporting need to work, and use custom item types for genuinely different work. We design that first, since reports and AI depend on it."
      }
    },
    {
      "@type": "Question",
      "name": "When should we use Wrike Integrate versus the Wrike API?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wrike Integrate suits automation across common apps without code. The API is better for logic it cannot express or for tighter control, such as calling an LLM with context from elsewhere. We choose per use case and assign clear ownership so triggers do not fire twice."
      }
    },
    {
      "@type": "Question",
      "name": "Can you automate creative review and approvals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We map the review stages, set owners and reminders, and automate routing and status updates, so work does not sit unnoticed waiting on a single approver."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to hire a Wrike specialist through Kovil AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kovil AI's remote Wrike talent bills $20-$30 per hour depending on role and experience, versus $45-$95+ per hour for prevailing US onsite rates for the same roles — typically 60-67% lower."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between an Implementation Consultant, Automation Expert, and Work Management Consultant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An Implementation Consultant designs the hierarchy, item types, and workflows. An Automation Expert builds with the API, webhooks, and Wrike Integrate. A Work Management Consultant standardizes blueprints and dashboards and helps teams adopt them."
      }
    },
    {
      "@type": "Question",
      "name": "Can you fix our resource and workload reporting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Resource views only work when effort and assignments are entered consistently, so we set simple rules to keep that data accurate and then build reports that leaders can trust."
      }
    },
    {
      "@type": "Question",
      "name": "Can Kovil AI connect Wrike to Salesforce, Slack, or Adobe tools?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We use native integrations or Wrike Integrate where they are enough and the API where they are not, with deduplicated events so syncs do not conflict."
      }
    },
    {
      "@type": "Question",
      "name": "Are your Wrike specialists certified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We verify relevant Wrike experience and credentials where they exist, but weight a live hierarchy-design exercise and a review of shipped work at least as heavily, since credentials alone do not test judgment."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can I hire a Wrike specialist through Kovil AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most clients are matched with a vetted consultant or expert within 24–48 hours of submitting a brief, with work starting within a week. A 2-week risk-free trial lets you validate fit and output before committing to a longer engagement."
      }
    },
    {
      "@type": "Question",
      "name": "Who owns the workflows and automations built during an engagement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You do, 100%. All custom workflows, automations, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no shared IP, no lock-in."
      }
    },
    {
      "@type": "Question",
      "name": "Do you support Wrike rescues or fixing a messy account?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Typical rescues involve tangled folder hierarchies, duplicated custom fields, stalled approvals, or automation that fires twice. We audit first, then restructure in stages so teams are not disrupted."
      }
    },
    {
      "@type": "Question",
      "name": "Can we extend a trial engagement or convert it to a long-term hire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Most clients extend the engagement as new teams or automation needs come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way."
      }
    }
  ]
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
