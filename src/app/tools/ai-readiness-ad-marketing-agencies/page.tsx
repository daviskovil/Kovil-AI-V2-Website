import type { Metadata } from 'next'
import AIReadinessPage from '@/src/pages/AIReadinessPage'

export const metadata: Metadata = {
  title: 'AI Readiness Assessment for Ad & Marketing Agencies | Kovil AI',
  description: 'Is your ad agency ready for AI? Take our free 3-minute AI readiness assessment built for ad and marketing agencies. Get your readiness score and a personalised automation action plan.',
  keywords: ['AI readiness assessment', 'AI readiness for marketing agencies', 'ad agency AI adoption', 'marketing agency AI tools', 'AI automation readiness', 'AI for ad agencies', 'Kovil AI'],
  alternates: { canonical: 'https://kovil.ai/tools/ai-readiness-ad-marketing-agencies' },
  openGraph: {
    url: 'https://kovil.ai/tools/ai-readiness-ad-marketing-agencies',
    type: 'website',
    title: 'AI Readiness Assessment for Ad & Marketing Agencies | Kovil AI',
    description: 'Free 3-minute AI readiness assessment for ad and marketing agencies. Get your readiness score and a personalised automation action plan from Kovil AI.',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Kovil AI — AI Readiness Assessment' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Readiness Assessment for Ad & Marketing Agencies | Kovil AI',
    description: 'Free 3-minute assessment. Find out where your agency stands on AI automation readiness and get a personalised action plan.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'AI Readiness Assessment for Ad & Marketing Agencies',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://kovil.ai/tools/ai-readiness-ad-marketing-agencies',
  description: 'A free 3-minute AI readiness quiz built specifically for ad and marketing agencies. Receive a readiness score and a personalised AI automation action plan.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  creator: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
  },
  audience: {
    '@type': 'Audience',
    audienceType: 'Ad agencies and marketing agencies',
  },
  featureList: [
    'AI readiness score for your agency',
    'Personalised automation action plan',
    'Benchmarked against industry standards',
    'Identifies highest-impact AI automation opportunities',
    'Free, no sign-up required',
    'Results delivered instantly',
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is AI readiness for a marketing agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI readiness for a marketing agency refers to how prepared the agency is — in terms of data infrastructure, workflows, team skills, and leadership buy-in — to adopt and benefit from AI automation. A high AI readiness score means the agency can deploy AI tools with minimal friction and see fast ROI. A low score means there are foundational gaps to address first.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the AI Readiness Assessment take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The AI Readiness Assessment takes approximately 3 minutes to complete. You answer a series of targeted questions about your agency\'s current processes, tech stack, data practices, and team capabilities. Results are delivered instantly on the same page.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do I get from the AI Readiness Assessment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You receive an AI readiness score for your agency, a breakdown of your strengths and gaps across key dimensions, and a personalised action plan highlighting the highest-impact AI automation opportunities for your specific agency type and size.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this AI readiness assessment only for ad agencies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This particular assessment is calibrated for ad and marketing agencies, including creative agencies, media buying agencies, performance marketing agencies, and full-service digital agencies. The questions and benchmarks are specific to agency workflows like campaign management, creative production, reporting, and client servicing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What AI automation opportunities are most common for marketing agencies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The highest-impact AI opportunities for marketing agencies typically include: automated campaign performance reporting, AI-assisted ad copy and creative generation, lead scoring and CRM data enrichment, client communication and briefing automation, and media plan optimisation. The assessment helps identify which of these apply to your agency\'s current state.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens after I complete the AI readiness assessment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'After completing the assessment, you receive your score and action plan instantly. You can then book a free discovery call with Kovil AI to discuss how to implement the recommended AI automation initiatives with a managed AI engineer who specialises in agency tech stacks.',
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="pt-20"><AIReadinessPage /></div>
    </>
  )
}
