import type { Metadata } from 'next'
import HowItWorksPage from '@/src/pages/HowItWorksPage'

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How Kovil AI Delivers Managed AI Engineering',
  description: 'Kovil AI matches you with a vetted AI engineer in 48 hours, delivers in milestone-gated sprints, and guarantees outcomes — not just hours.',
  totalTime: 'P2W',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Discovery & Scoping', text: 'Book a 30-minute discovery call. We scope your AI project, define milestones, and match you with the right engineer from our vetted talent pool.' },
    { '@type': 'HowToStep', position: 2, name: 'Engineer Match in 48 Hours', text: 'Within 48 hours we shortlist 2–3 engineers. You interview, select, and the engineer is embedded into your team — Slack, standups, your tools.' },
    { '@type': 'HowToStep', position: 3, name: '2-Week Risk-Free Trial', text: 'Start with a two-week risk-free trial. If the fit isn\'t right, you don\'t pay. Only pay when you\'re happy to continue.' },
    { '@type': 'HowToStep', position: 4, name: 'Milestone-Gated Sprints', text: 'Work is delivered in two-week sprints. Each sprint has defined deliverables — you approve before the next invoice is raised. No surprises.' },
    { '@type': 'HowToStep', position: 5, name: 'Ongoing Delivery & Oversight', text: 'A Kovil Engagement Manager oversees quality and velocity. We own the outcome — not just the hours.' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How quickly can Kovil AI match me with an engineer?', acceptedAnswer: { '@type': 'Answer', text: 'We shortlist candidates within 48 hours of your discovery call. Most clients have an active engineer embedded in their team within 5 business days.' } },
    { '@type': 'Question', name: 'What is a milestone-gated sprint?', acceptedAnswer: { '@type': 'Answer', text: 'Each two-week sprint has clearly defined deliverables agreed upfront. You review and approve the work at the end of each sprint before the next invoice is raised. You only pay for work that\'s done.' } },
    { '@type': 'Question', name: 'What is the risk-free trial?', acceptedAnswer: { '@type': 'Answer', text: 'Every Managed AI Engineer engagement starts with a two-week risk-free trial. If it\'s not the right fit after two weeks, you don\'t pay anything. No lock-in, no penalty.' } },
    { '@type': 'Question', name: 'What happens if the engineer doesn\'t work out?', acceptedAnswer: { '@type': 'Answer', text: 'We replace the engineer — fast. Our talent pool means we can re-match in 48 hours. You\'re never left without cover.' } },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'How It Works', item: 'https://kovil.ai/how-it-works' },
  ],
}

export const metadata: Metadata = {
  title: 'How It Works — Managed AI Engineering Process | Kovil AI',
  description: 'How Kovil AI delivers managed AI engineering. Our three-step process: match, build, deliver — milestone-gated with zero delivery risk.',
  alternates: { canonical: 'https://kovil.ai/how-it-works' },
  openGraph: {
    type: 'website',
    title: 'How It Works — Managed AI Engineering Process | Kovil AI',
    description: 'Match in 48 hours, sprint delivery, milestone-gated with zero delivery risk. Here\'s exactly how Kovil AI works.',
    url: 'https://kovil.ai/how-it-works',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'How Kovil AI Works' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How It Works — Managed AI Engineering Process | Kovil AI',
    description: 'Match in 48 hours, sprint delivery, milestone-gated with zero delivery risk. Here\'s exactly how Kovil AI works.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="pt-20"><HowItWorksPage /></div>
    </>
  )
}
