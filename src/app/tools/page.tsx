import type { Metadata } from 'next'
import ToolsPage from '@/src/pages/ToolsPage'

export const metadata: Metadata = {
  title: 'Free AI Tools for Business — Kovil AI',
  description: 'Free interactive AI tools to scope, plan and assess your AI projects. Get instant cost estimates, readiness scores and action plans — no sign-up required.',
  keywords: ['free AI tools', 'AI project cost estimator', 'AI readiness assessment', 'AI tools for business', 'AI project planning tools', 'Kovil AI tools'],
  alternates: { canonical: 'https://kovil.ai/tools' },
  openGraph: {
    type: 'website',
    title: 'Free AI Tools for Business — Kovil AI',
    description: 'Free interactive AI tools to scope, plan and assess your AI projects. Instant results, no sign-up required.',
    url: 'https://kovil.ai/tools',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Kovil AI — Free AI Tools' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Tools for Business — Kovil AI',
    description: 'Free interactive AI tools to scope, plan and assess your AI projects. Instant results, no sign-up required.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Free AI Tools by Kovil AI',
  description: 'A collection of free interactive AI tools for founders, product managers, and agency leaders.',
  url: 'https://kovil.ai/tools',
  numberOfItems: 2,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'AI Project Cost Estimator',
      description: 'Answer 5 quick questions about your AI project and receive an instant cost range, timeline, tech stack recommendation, and risk flags — powered by Gemini AI.',
      url: 'https://kovil.ai/tools/ai-project-estimator',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'AI Readiness Assessment for Ad & Marketing Agencies',
      description: 'A free 3-minute assessment for ad and marketing agency leaders. Find out where you stand on AI automation readiness and receive a personalised action plan.',
      url: 'https://kovil.ai/tools/ai-readiness-ad-marketing-agencies',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What free AI tools does Kovil AI offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kovil AI currently offers two free tools: the AI Project Cost Estimator (a 5-step wizard that produces an instant cost range, timeline, and tech stack recommendation) and the AI Readiness Assessment for Ad & Marketing Agencies (a 3-minute quiz that scores your readiness and gives a personalised action plan). More tools are being built.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to sign up to use Kovil AI\'s free tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. All Kovil AI tools are completely free and require no account or sign-up. Simply visit the tool page, answer the questions, and receive your results instantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How accurate is the AI Project Cost Estimator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The estimator provides a directional cost range and timeline based on your project type, complexity, data availability, and integration requirements. It uses Gemini AI to generate context-aware estimates. For a precise, fixed-price quote, book a free discovery call with Kovil AI after getting your estimate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who are these AI tools designed for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The AI Project Cost Estimator is built for founders, CTOs, and product managers who are scoping an AI build and need a ballpark before committing to a vendor. The AI Readiness Assessment is designed specifically for ad and marketing agency leaders who want to understand where their agency stands on AI automation adoption.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do the Kovil AI tools take to complete?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The AI Project Cost Estimator takes 3–5 minutes to complete. The AI Readiness Assessment takes approximately 3 minutes. Both tools deliver results instantly on the same page — no waiting for an email.',
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="pt-20"><ToolsPage /></div>
    </>
  )
}
