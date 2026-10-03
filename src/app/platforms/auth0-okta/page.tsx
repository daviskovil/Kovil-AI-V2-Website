import type { Metadata } from 'next'
import Auth0OktaPlatformPage from '@/src/pages/platforms/auth0-okta/Auth0OktaPlatformPage'

export const metadata: Metadata = {
  title: "Auth0 Platform Partner — AI Agents & Specialist Talent",
  description: "Kovil AI is your single partner for Auth0 — secure AI-agent identity builds, plus vetted IAM security engineers, Auth0 developers, AI-identity specialists, and architects matched in 48 hours. 2-week risk-free trial.",
  alternates: { canonical: 'https://kovil.ai/platforms/auth0-okta' },
  keywords: ["auth0 ai agents","hire auth0 developer","auth0 staff augmentation","auth0 for ai agents","okta auth0 consultant","iam engineer for hire","auth0 integration developer","what is auth0"],
  openGraph: {
    type: 'website',
    title: "Auth0 Platform Partner — AI Agents & Specialist Talent | Kovil AI",
    description: "Secure AI-agent identity builds, plus vetted IAM security engineers, Auth0 developers, AI-identity specialists, and architects matched in 48 hours. 2-week risk-free trial.",
    url: 'https://kovil.ai/platforms/auth0-okta',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Auth0 Platform Partner — AI Agents & Specialist Talent | Kovil AI",
    description: "Secure AI-agent identity builds, plus vetted IAM security engineers, Auth0 developers, AI-identity specialists, and architects matched in 48 hours.",
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "Auth0 Platform Services — AI Agents & Specialist Talent",
  description: "Kovil AI delivers secure AI-agent identity builds on Auth0 and staffs vetted IAM security engineers, Auth0 developers, AI-identity specialists, and architects.",
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
  serviceType: "Auth0 Implementation and Staffing",
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/auth0-okta',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: "Auth0 Platform Services",
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "AI Agent Build on Auth0" } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "IAM Security Engineers Staffing" } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Auth0 Integration Developers Staffing" } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "IAM Architects Staffing" } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Auth0 for AI Agents Specialists Staffing" } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/auth0-okta' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: "Auth0",
  description: "Auth0, part of Okta, is a customer identity platform that provides authentication, authorization, single sign-on, and multi-factor authentication for applications, including secure identity for AI agents.",
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/auth0-okta',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: "Auth0 Platform Partner — AI Agents & Specialist Talent",
  description: "Secure AI-agent identity builds, plus vetted IAM security engineers, Auth0 developers, AI-identity specialists, and architects matched in 48 hours. 2-week risk-free trial.",
  url: 'https://kovil.ai/platforms/auth0-okta',
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
  name: "How to Work With Kovil AI on Auth0",
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: "Brief Your Tenant", text: "Tell us how you use Auth0, what's broken or backlogged, and whether you need an AI build, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/auth0-okta' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: "Review 2-3 vetted Auth0 specialists matched to your stack and scale.", url: 'https://kovil.ai/platforms/auth0-okta' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/auth0-okta' },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Auth0?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Auth0, part of Okta, is a customer identity platform that provides authentication, authorization, single sign-on, and multi-factor authentication for applications, including secure identity for AI agents."
      }
    },
    {
      "@type": "Question",
      "name": "Does Auth0 have native AI support, or do I need a custom build?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Auth0 offers Auth0 for AI Agents, which adds identity and scoped-access controls for agents acting on behalf of users. Kovil AI configures those natively and builds custom authorization logic and integrations where they aren't enough."
      }
    },
    {
      "@type": "Question",
      "name": "Does Kovil AI build custom AI on Auth0, or only staff talent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both, and they're often the same engagement. Clients commonly hire an IAM engineer to harden login, tokens, and authorization first, then add AI agents with properly scoped access on top of an identity layer that is already sound."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to hire a Auth0 developer through Kovil AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kovil AI's remote Auth0 talent bills $26-$45 per hour depending on role and experience, versus $80-$180+ per hour for prevailing US onsite rates for the same roles — typically 71-73% lower, at the same certification bar."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between an IAM Security Engineer, Auth0 Developer, and IAM Architect?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An IAM Security Engineer designs policies, MFA, and threat protections. An Auth0 Integration Developer builds login flows, Actions, and API authorization in application code. An IAM Architect designs tenant strategy, federation, and the overall identity architecture."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can I hire a Auth0 specialist through Kovil AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most clients are matched with a vetted specialist within 24–48 hours of submitting a brief, with work starting within a week. A 2-week risk-free trial lets you validate fit and output before committing to a longer engagement."
      }
    },
    {
      "@type": "Question",
      "name": "Do your Auth0 engineers hold official certifications?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We verify Okta Certified Professional, Administrator, Developer, and Consultant credentials directly as part of vetting, alongside a live technical assessment, since certification alone does not test real production judgment."
      }
    },
    {
      "@type": "Question",
      "name": "Can Kovil AI integrate Auth0 with our apps, APIs, and enterprise directories?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our Auth0 talent regularly builds integrations with web and mobile apps, APIs, enterprise directories like Active Directory and Okta Workforce, and the rest of your stack through Actions and the Management API."
      }
    },
    {
      "@type": "Question",
      "name": "Who owns the work built during an engagement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You do, 100%. All code, configuration, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no shared IP, no lock-in."
      }
    },
    {
      "@type": "Question",
      "name": "Can I combine an AI build with Auth0 staff augmentation in one engagement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — this is one of the most common engagement shapes we run. A single Engagement Manager can coordinate an AI build alongside dedicated specialist talent working in the same tenant."
      }
    },
    {
      "@type": "Question",
      "name": "What does Kovil AI typically build on Auth0?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Customer login and SSO, MFA and passkey rollouts, custom Actions and token claims, B2B organization models, migration from legacy user stores, and scoped identity for AI agents acting on users' behalf."
      }
    },
    {
      "@type": "Question",
      "name": "How is Kovil AI different from a Auth0 partner agency or freelancer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A partner agency typically scopes a fixed project and hands it to a rotating bench. A freelancer works solo with no oversight. Kovil AI embeds a single accountable specialist or small pod under an Engagement Manager who audits every milestone, with a 2-week risk-free trial and no lock-in."
      }
    },
    {
      "@type": "Question",
      "name": "Can we extend a trial engagement or convert it to a long-term hire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Most clients extend the engagement as scope grows, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way."
      }
    },
    {
      "@type": "Question",
      "name": "Do you support Auth0 rescues or fixing a risky identity setup?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A meaningful share of our Auth0 engagements start as a rescue — overly broad token scopes, brittle Rules and Actions, stalled migrations, or missing MFA coverage. We audit it carefully, then fix it in milestone-gated phases without locking users out."
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
    { '@type': 'ListItem', position: 3, name: "Auth0 (Okta)", item: 'https://kovil.ai/platforms/auth0-okta' },
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
      <div className="pt-20"><Auth0OktaPlatformPage /></div>
    </>
  )
}
