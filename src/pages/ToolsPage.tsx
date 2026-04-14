'use client'

import Link from 'next/link'
import { ArrowRight, Clock, Zap, BarChart3 } from 'lucide-react'

interface Tool {
  slug: string
  title: string
  description: string
  forWho: string
  duration: string
  badge: string
  badgeColor: string
  icon: React.ReactNode
  href: string
  cta: string
}

const tools: Tool[] = [
  {
    slug: 'ai-project-estimator',
    title: 'AI Project Cost Estimator',
    description: 'Answer 5 quick questions about your AI project and get an instant cost range, timeline, recommended engagement model, tech stack, and risk flags — powered by Gemini AI.',
    forWho: 'Founders, PMs & CTOs scoping an AI build',
    duration: '3–5 min',
    badge: 'Most Popular',
    badgeColor: 'bg-[#FF5A14]/10 text-[#FF5A14] border border-[#FF5A14]/20',
    icon: <BarChart3 className="h-6 w-6 text-[#FF5A14]" />,
    href: '/tools/ai-project-estimator',
    cta: 'Estimate My Project',
  },
  {
    slug: 'ai-readiness-ad-marketing-agencies',
    title: 'AI Readiness Assessment',
    description: 'A free 3-minute assessment built for ad and marketing agencies. Find out exactly where you stand on AI automation readiness and get a personalised action plan.',
    forWho: 'Ad & marketing agency leaders',
    duration: '3 min',
    badge: 'Free',
    badgeColor: 'bg-green-500/10 text-green-400 border border-green-500/20',
    icon: <Zap className="h-6 w-6 text-green-400" />,
    href: '/tools/ai-readiness-ad-marketing-agencies',
    cta: 'Take the Assessment',
  },
]

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">

      {/* Hero */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#FF5A14]/10 border border-[#FF5A14]/20 rounded-full px-4 py-1.5 mb-6">
            <Zap className="h-3.5 w-3.5 text-[#FF5A14]" />
            <span className="text-xs font-semibold text-[#FF5A14] uppercase tracking-wider">Free AI Tools</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
            Tools Built for
            <span className="text-[#FF5A14]"> AI Decision-Makers</span>
          </h1>
          <p className="text-lg text-[#888888] max-w-2xl mx-auto leading-relaxed">
            Free, interactive tools to help you scope, plan, and assess your AI projects.
            Instant results. No sign-up required.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={tool.href}
                className="group block bg-[#111111] border border-[#222222] rounded-2xl p-8 hover:border-[#FF5A14]/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,90,20,0.08)]"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-[#222222] flex items-center justify-center">
                    {tool.icon}
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tool.badgeColor}`}>
                    {tool.badge}
                  </span>
                </div>

                {/* Content */}
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF5A14] transition-colors">
                  {tool.title}
                </h2>
                <p className="text-sm text-[#888888] leading-relaxed mb-6">
                  {tool.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-6 text-xs text-[#666666]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{tool.duration}</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-[#333333]" />
                  <span>{tool.forWho}</span>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-sm font-semibold text-[#FF5A14] group-hover:gap-3 transition-all">
                  {tool.cta}
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}

            {/* Coming Soon card */}
            <div className="bg-[#111111] border border-[#222222] border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
              <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-[#222222] flex items-center justify-center mb-4">
                <span className="text-xl">⚡</span>
              </div>
              <h3 className="text-base font-semibold text-[#444444] mb-2">More Tools Coming Soon</h3>
              <p className="text-sm text-[#333333] max-w-xs">
                AI ROI Calculator, Build vs Buy Analyzer, and more — being built now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section — for AEO / answer engines */}
      <section className="pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[#888888] text-sm mb-10">Everything you need to know about our free AI tools.</p>
          <div className="space-y-4">
            {[
              {
                q: 'What free AI tools does Kovil AI offer?',
                a: 'Kovil AI currently offers two free tools: the AI Project Cost Estimator — a 5-step wizard that delivers an instant cost range, timeline, tech stack, and engagement model recommendation — and the AI Readiness Assessment for Ad & Marketing Agencies, a 3-minute quiz that scores your agency\'s AI readiness and provides a personalised action plan. More tools are in development.',
              },
              {
                q: 'Do I need to sign up or pay to use these tools?',
                a: 'No. Both tools are completely free and require no account, no email, and no credit card. Visit the tool page, answer the questions, and get your results instantly on the same page.',
              },
              {
                q: 'How accurate is the AI Project Cost Estimator?',
                a: 'The estimator gives a directional cost range and timeline based on your project type, complexity, data readiness, and integration requirements. It uses Google Gemini AI to produce context-aware estimates. For a precise, fixed-price quote, book a free discovery call with Kovil AI after you receive your estimate.',
              },
              {
                q: 'Who are these tools designed for?',
                a: 'The AI Project Cost Estimator is built for founders, CTOs, and product managers who are scoping an AI build and need a budget ballpark before engaging a vendor. The AI Readiness Assessment is designed for ad and marketing agency leaders who want to understand where their agency stands on AI automation adoption.',
              },
              {
                q: 'What happens after I use a tool?',
                a: 'After getting your estimate or readiness score, you can download the results as a PDF to share with your team or stakeholders, or book a free discovery call with a Kovil AI engineer to discuss next steps, refine the scope, and get a fixed-price quote.',
              },
            ].map(({ q, a }) => (
              <details
                key={q}
                className="group bg-[#111111] border border-[#222222] rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-white font-semibold text-sm select-none hover:text-[#FF5A14] transition-colors">
                  {q}
                  <span className="shrink-0 text-[#FF5A14] text-lg leading-none group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-6 pb-5 text-sm text-[#888888] leading-relaxed">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-24 px-4">
        <div className="max-w-3xl mx-auto text-center bg-[#111111] border border-[#222222] rounded-2xl p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Want a custom assessment for your business?
          </h2>
          <p className="text-[#888888] mb-8 max-w-xl mx-auto">
            Our tools give you a starting point. A discovery call with Kovil AI gives you a full picture.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#FF5A14] hover:bg-[#e04d10] text-white font-semibold px-8 py-4 rounded-[10px] transition-colors"
          >
            Book a Free Discovery Call
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
