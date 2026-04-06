import type { Metadata } from 'next'
import FAQPage from '@/src/pages/FAQPage'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions — Kovil AI',
  description: 'Got questions about hiring AI engineers, fixed-price AI projects, or rescuing a failing AI app? Find answers to every question about Kovil AI.',
  alternates: { canonical: 'https://kovil.ai/frequently-asked-questions' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI is a managed AI engineering company. We embed vetted AI engineers into your team, build AI projects at a fixed price and timeline, and rescue failing AI applications. Everything we do is milestone-gated — you only pay when work is delivered.' } },
    { '@type': 'Question', name: 'How quickly can I get an AI engineer?', acceptedAnswer: { '@type': 'Answer', text: 'Day 1: scoping and engineer matching. Day 2–3: candidate shortlisting. Day 3–4: intro calls. Week 1: engineer starts. Most clients have an active engineer in their codebase within 5 business days.' } },
    { '@type': 'Question', name: 'Can I try before I commit?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every Managed AI Engineer engagement starts with a two-week risk-free trial. If it\'s not the right fit, you don\'t pay. Only pay if you hire.' } },
    { '@type': 'Question', name: 'What is an Outcome-Based AI Project?', acceptedAnswer: { '@type': 'Answer', text: 'You describe the outcome you want — we scope it, build it, and ship it. Fixed price. Fixed timeline. No hourly billing, no surprise invoices, no scope creep. You pay for the outcome, not the hours.' } },
    { '@type': 'Question', name: 'What is AI Reliability and App Rescue?', acceptedAnswer: { '@type': 'Answer', text: 'If your AI app is failing, hallucinating, vibe-coded, or just unstable in production — we audit it, fix it, and stabilise it. We turn broken AI into reliable systems.' } },
    { '@type': 'Question', name: 'How much does Kovil AI cost?', acceptedAnswer: { '@type': 'Answer', text: 'Pricing depends on the engagement type and scope. We don\'t publish fixed rates because every project is different. Book a discovery call for a custom quote — it takes 30 minutes and you\'ll have a clear number.' } },
    { '@type': 'Question', name: 'What makes Kovil different from other AI companies?', acceptedAnswer: { '@type': 'Answer', text: 'Three things: managed delivery (we own the outcome, not just log hours), milestone-gated sprints (you approve and pay per milestone — never pay for work that isn\'t done), and a two-week risk-free trial on every engagement.' } },
    { '@type': 'Question', name: 'Do I own the code and IP?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. All code, models, and intellectual property built during your engagement are fully owned by you. Kovil AI retains no rights to your project output.' } },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="pt-20"><FAQPage /></div>
    </>
  )
}
