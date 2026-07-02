import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Managed AI Engineering | Your AI Function, Fully Handled by Kovil AI',
  description: 'Managed AI engineering from Kovil AI: we own your AI function end-to-end. Strategy, team, delivery, and reporting — so you get AI outcomes without managing AI engineers.',
  keywords: ['managed AI engineering', 'managed AI team', 'AI as a service', 'AI engineering outsourcing', 'managed AI development', 'outsourced AI team', 'AI function as a service'],
  openGraph: {
    title: 'Managed AI Engineering | Your AI Function, Fully Handled by Kovil AI',
    description: 'Managed AI engineering from Kovil AI: we own your AI function end-to-end. Strategy, team, delivery, and reporting — so you get AI outcomes without managing AI engineers.',
    images: [{ url: 'https://kovil.ai/staff-aug-managed-ai.webp', width: 1200, height: 630 }],
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kovil AI',
  url: 'https://kovil.ai',
  logo: 'https://kovil.ai/kovil-logo.png',
  description: 'Managed AI engineering provider: end-to-end ownership of clients AI engineering function including strategy, team composition, delivery, and reporting.',
  sameAs: ['https://www.linkedin.com/company/kovil-ai'],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Staff Augmentation', item: 'https://kovil.ai/staff-augmentation' },
    { '@type': 'ListItem', position: 3, name: 'Managed AI Engineering', item: 'https://kovil.ai/managed-ai-engineering' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Managed AI Engineering',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  areaServed: 'Worldwide',
  description: 'Fully managed AI engineering: Kovil AI owns the AI function end-to-end including strategy, team management, delivery milestones, and monthly business reviews.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is managed AI engineering?',
      acceptedAnswer: { '@type': 'Answer', text: 'Managed AI engineering is a model where an external provider owns the AI engineering function end-to-end. Kovil AI handles team composition, technical architecture, sprint delivery, talent management, and monthly reporting. You define the business outcomes you want and we deliver them, without you needing to manage engineers, track technical progress daily, or make AI hiring decisions.' },
    },
    {
      '@type': 'Question',
      name: 'Who is managed AI engineering for?',
      acceptedAnswer: { '@type': 'Answer', text: 'Managed AI engineering is typically suited for: companies that want serious AI capability but do not yet have an AI lead or CTO who can manage an AI team; PE-backed and VC-backed businesses where the leadership team is commercially focused and does not want to build deep technical management overhead; and enterprises running AI as a product initiative where the internal team will eventually absorb the function, but needs external delivery capability in the interim.' },
    },
    {
      '@type': 'Question',
      name: 'What does Kovil AI manage in a managed AI engineering engagement?',
      acceptedAnswer: { '@type': 'Answer', text: 'We own: technical architecture and AI stack decisions, team composition and any talent swaps, sprint planning and delivery milestones, code quality and model performance standards, AI governance and evaluation frameworks, and a monthly business review with OKR tracking. You receive working software, documented architecture, and a monthly report, not a stack of engineer updates to interpret.' },
    },
    {
      '@type': 'Question',
      name: 'How is managed AI engineering different from a dedicated AI team?',
      acceptedAnswer: { '@type': 'Answer', text: 'With a dedicated AI team, you manage the team: you set sprint priorities, approve technical decisions, and manage escalations. Kovil AI provides the engineers and the Tech Lead. With managed AI engineering, we manage everything: you agree the OKRs at the start of each quarter and Kovil AI is accountable for delivery. The difference is the management layer, dedicated is staff augmentation plus a tech lead, managed is a fully outsourced AI function.' },
    },
    {
      '@type': 'Question',
      name: 'What AI capabilities can Kovil AI deliver under a managed engineering model?',
      acceptedAnswer: { '@type': 'Answer', text: 'We have delivered under managed models: LLM-powered products (RAG pipelines, chat interfaces, document intelligence), AI agent workflows (multi-agent orchestration, autonomous task execution), ML systems (predictive models, recommendation engines, anomaly detection), and AI-integrated product features (intelligent search, AI-generated content, smart automation). The managed model is capability-agnostic, we compose the team to match the technical scope.' },
    },
    {
      '@type': 'Question',
      name: 'What does the onboarding process look like?',
      acceptedAnswer: { '@type': 'Answer', text: 'Month 0 is a discovery and scoping sprint: we conduct a technical discovery session, agree on the AI roadmap and OKRs, and compose the team. By the end of month 1, the team is operational, the architecture is documented, and the first sprint has shipped. Monthly business reviews begin in month 2.' },
    },
    {
      '@type': 'Question',
      name: 'What reporting do we receive?',
      acceptedAnswer: { '@type': 'Answer', text: 'Monthly Business Review (MBR): a structured report covering OKR progress, milestones delivered vs planned, technical decisions made and why, blockers resolved, and the plan for the next 30 days. Quarterly: a full AI function review with updated roadmap, team performance, and strategic recommendations. Real-time: async Slack updates and access to the sprint board in your tool.' },
    },
    {
      '@type': 'Question',
      name: 'Can we transition from managed AI engineering to an in-house team?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, and many clients plan for this from the start. We document everything as we go: architecture decisions, model evaluation frameworks, deployment playbooks, and codebase standards. When you are ready to hire in-house, we provide a formal handover programme: documentation, a knowledge transfer period with your new team, and ongoing advisory support if needed. Kovil AI is not designed to be a permanent lock-in.' },
    },
  ],
}

const whatWeOwn = [
  {
    icon: '🎯',
    title: 'OKR Setting and AI Roadmap',
    desc: 'Quarterly sessions to define what AI should deliver for your business. We translate commercial goals into a technical roadmap with measurable milestones.',
  },
  {
    icon: '👥',
    title: 'Team Composition and Talent Management',
    desc: 'We assemble and manage the team. If a specialism is needed, we add it. If a role is no longer needed, we scale it back. No recruitment overhead for you.',
  },
  {
    icon: '🏗',
    title: 'Architecture and Technical Decisions',
    desc: 'Our AI Lead owns the technical architecture. You get recommendations and rationale, not a stack of options to decide between without enough context.',
  },
  {
    icon: '🚀',
    title: 'Sprint Delivery and Milestones',
    desc: 'Bi-weekly sprints. Milestone tracking against the agreed roadmap. You see what shipped and what is next, not detailed technical progress that requires interpretation.',
  },
  {
    icon: '📊',
    title: 'Monthly Business Review',
    desc: 'A structured monthly report: OKR progress, decisions made, blockers resolved, next 30 days plan. Designed to be useful to a CEO or CPO, not just a CTO.',
  },
  {
    icon: '🔄',
    title: 'Handover-Ready Documentation',
    desc: 'Everything documented as we go: architecture decisions, model evaluation frameworks, deployment playbooks. If you ever hire in-house, you are ready.',
  },
]

const comparisonRows = [
  { dimension: 'Who manages the team', managed: 'Kovil AI', dedicated: 'You (with Tech Lead support)', inhouse: 'You (with hired leads)' },
  { dimension: 'Technical decisions', managed: 'Kovil AI (with your approval on major arcs)', dedicated: 'Shared: Tech Lead proposes, you approve', inhouse: 'Internal team' },
  { dimension: 'Reporting format', managed: 'Monthly Business Review (OKR-based)', dedicated: 'Weekly demo + sprint board access', inhouse: 'Internal meetings and reports' },
  { dimension: 'Talent management', managed: 'Kovil AI swaps / scales the team', dedicated: 'Kovil AI sources, you direct', inhouse: 'Full internal HR overhead' },
  { dimension: 'Time to operating', managed: '4-6 weeks (includes strategy phase)', dedicated: '2-3 weeks', inhouse: '6-12 months (sequential hiring)' },
  { dimension: 'Best for', managed: 'No AI lead; want outcomes not daily management', dedicated: 'Have product context; want to direct engineers', inhouse: 'Building permanent AI function long-term' },
]

const marketStats = [
  { value: '74%', label: 'of companies investing in AI say finding qualified AI engineers is their top hiring challenge. Managed AI engineering bypasses this entirely.' },
  { value: '6x', label: 'faster to reach first AI milestone under a managed model vs hiring and managing an in-house AI team from scratch.' },
  { value: '12-18 mo', label: 'typical timeline for companies without an AI lead to build a functional in-house AI team. A managed model starts delivering in month 1.' },
]

export default function ManagedAiEngineeringPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-[#0A0A0A] py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="flex items-center gap-2 text-sm text-[#9B9B9B] mb-6">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/staff-augmentation" className="hover:text-white transition-colors">Staff Augmentation</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Managed AI Engineering</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-[#FF4F00]/10 border border-[#FF4F00]/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-[#FF4F00] rounded-full animate-pulse" />
                <span className="text-[#FF4F00] text-sm font-medium">AI Outcomes. Zero Engineering Management Overhead.</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Managed AI Engineering: Your AI Function, Fully Handled
              </h1>
              <p className="text-lg text-[#9B9B9B] leading-relaxed mb-8">
                You define the business outcomes. Kovil AI handles everything else: team composition, architecture, delivery, talent management, and monthly reporting. No AI lead required on your side. No daily engineering management. Just a working AI function and a monthly review that makes sense to a CEO.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#e64400] transition-colors">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/dedicated-ai-team" className="inline-flex items-center justify-center gap-2 border border-[#3A3A3A] text-white font-semibold px-8 py-4 rounded-lg hover:border-white transition-colors">
                  Dedicated AI Team Instead?
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              <Image
                src="/staff-aug-managed-ai.webp"
                alt="Managed AI engineering: Kovil AI team owning the AI function end-to-end with OKR reporting and delivery management"
                width={540}
                height={304}
                className="relative rounded-2xl border border-[#2A2A2A] shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white border-b border-[#E5E2D9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-[#4B4B4B]">
            {['Kovil AI Manages the Team', 'OKR-Based Delivery', 'Monthly Business Review', 'No AI Lead Needed On Your Side', 'Architecture Owned End-to-End', 'Handover-Ready Always'].map(t => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF4F00] flex-shrink-0" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">The Problem With Hiring an AI Lead Before You Are Ready</h2>
              <p className="text-[#4B4B4B] leading-relaxed mb-4">
                The standard advice is: hire a VP of AI or a CTO, then build a team under them. But this advice assumes you can accurately evaluate AI talent, know what good looks like in an AI architecture, and have the patience for a 6-12 month ramp before anything ships.
              </p>
              <p className="text-[#4B4B4B] leading-relaxed mb-4">
                Most businesses cannot afford that ramp. They have a commercial opportunity now. They need AI to be working and compounding in months, not years.
              </p>
              <p className="text-[#4B4B4B] leading-relaxed">
                Managed AI engineering is the answer: Kovil AI acts as your AI function. We own the team, the architecture, the delivery, and the reporting. You stay focused on the product and the business while AI becomes a real, measurable capability underneath it.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {marketStats.map(stat => (
                <div key={stat.value} className="bg-white rounded-xl border border-[#E5E2D9] p-6 flex items-start gap-4">
                  <span className="text-3xl font-bold text-[#FF4F00] leading-none flex-shrink-0 mt-0.5">{stat.value}</span>
                  <span className="text-[#4B4B4B] text-sm leading-relaxed">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">What Kovil AI Owns in a Managed Engagement</h2>
            <p className="text-[#4B4B4B] max-w-2xl mx-auto">Six management responsibilities typically spread across a VP of AI, a Tech Lead, an HR partner, and a project manager. We handle all of them.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whatWeOwn.map(item => (
              <div key={item.title} className="bg-white rounded-xl border border-[#E5E2D9] p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-[#0A0A0A] mb-2">{item.title}</h3>
                <p className="text-sm text-[#4B4B4B] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">Managed vs Dedicated vs In-House: Which Model Fits?</h2>
            <p className="text-[#4B4B4B] max-w-2xl mx-auto">The right model depends on how much AI management capacity you have internally and how fast you need to move.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-[#E5E2D9]">
            <table className="w-full text-sm">
              <thead className="bg-[#0A0A0A] text-white">
                <tr>
                  <th className="text-left py-4 px-5 font-semibold w-1/4">Dimension</th>
                  <th className="text-left py-4 px-5 font-semibold text-[#FF4F00]">Managed AI Engineering</th>
                  <th className="text-left py-4 px-5 font-semibold">Dedicated AI Team</th>
                  <th className="text-left py-4 px-5 font-semibold">Hire In-House</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E2D9] bg-white">
                {comparisonRows.map((row, i) => (
                  <tr key={row.dimension} className={i % 2 === 0 ? '' : 'bg-[#FAF8F4]'}>
                    <td className="py-4 px-5 font-medium text-[#0A0A0A]">{row.dimension}</td>
                    <td className="py-4 px-5 text-[#4B4B4B]">{row.managed}</td>
                    <td className="py-4 px-5 text-[#4B4B4B]">{row.dedicated}</td>
                    <td className="py-4 px-5 text-[#4B4B4B]">{row.inhouse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">How a Managed AI Engagement Runs</h2>
            <p className="text-[#4B4B4B] max-w-xl mx-auto">Month by month, from scoping to sustained delivery.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-0 relative">
            {[
              { month: 'Month 0', title: 'Discovery and Scoping', desc: 'Technical discovery session, AI roadmap defined, OKRs agreed, team composed.' },
              { month: 'Month 1', title: 'Team Live and Sprint 1', desc: 'Team operational, architecture documented, first sprint shipped, CI/CD live.' },
              { month: 'Month 2', title: 'First Monthly Review', desc: 'First MBR: OKR progress, decisions made, next 30 days plan. Cadence established.' },
              { month: 'Ongoing', title: 'Sustained Delivery', desc: 'Monthly MBRs, quarterly roadmap reviews, team scales with the product phase.' },
            ].map((step, i) => (
              <div key={step.month} className="relative">
                <div className="bg-white rounded-xl border border-[#E5E2D9] p-6 mx-2">
                  <div className="text-xs font-semibold text-[#FF4F00] uppercase tracking-widest mb-2">{step.month}</div>
                  <h3 className="font-semibold text-[#0A0A0A] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#4B4B4B] leading-relaxed">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 z-10 items-center justify-center w-6 h-6 bg-[#FF4F00] rounded-full -translate-y-1/2">
                    <ChevronRight className="w-3.5 h-3.5 text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      <section className="bg-[#0A0A0A] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">What Are Your AI OKRs for This Quarter?</h2>
          <p className="text-[#9B9B9B] max-w-xl mx-auto mb-8">Tell us what you want AI to deliver for your business. We will handle the engineering function that gets you there.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#e64400] transition-colors">
            Start the Discovery Call <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A0A0A] rounded-2xl p-8 lg:p-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#FF4F00] mb-4">Managed AI Engineering Case Study</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">PE-Backed B2B SaaS: AI Function Stood Up in 5 Weeks, Three AI Features Delivered in Quarter 1</h2>
            <p className="text-[#9B9B9B] leading-relaxed mb-8 max-w-2xl">
              A PE-backed B2B SaaS company had 120 employees, a strong commercial team, and no AI engineering capability. The board had set an OKR: deliver AI-powered features in Q1 to protect the product's competitive position. We ran a discovery sprint in month 0, composed a 4-person managed AI team (AI Lead, 2 LLM engineers, 1 MLOps engineer), and defined 3 OKRs. By end of Q1 the team had shipped: AI document summarisation, an intelligent contract comparison tool, and a smart activity feed with LLM-powered recommendations. All three went live on schedule.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="text-3xl font-bold text-[#FF4F00] mb-1">5 weeks</div>
                <div className="text-sm text-[#9B9B9B]">from first conversation to a fully operational managed AI team delivering in production</div>
              </div>
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="text-3xl font-bold text-[#FF4F00] mb-1">3 of 3</div>
                <div className="text-sm text-[#9B9B9B]">Q1 OKRs delivered on schedule: document AI, contract comparison, smart activity feed</div>
              </div>
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="text-3xl font-bold text-[#FF4F00] mb-1">0 hrs</div>
                <div className="text-sm text-[#9B9B9B]">of internal engineering management time spent. The CEO received a monthly report, not sprint updates.</div>
              </div>
            </div>
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#FF4F00] transition-colors">
              Read more case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0A0A0A] mb-10 text-center">Managed AI Engineering: Frequently Asked Questions</h2>
          <div className="divide-y divide-[#E5E2D9]">
            {faqSchema.mainEntity.map((faq) => (
              <div key={faq.name} className="py-6">
                <h3 className="font-semibold text-[#0A0A0A] mb-2">{faq.name}</h3>
                <p className="text-[#4B4B4B] text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      <section className="bg-[#FAF8F4] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#0A0A0A] mb-4">Related services</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Dedicated AI Team', href: '/dedicated-ai-team' },
              { label: 'AI Staff Augmentation', href: '/ai-staff-augmentation' },
              { label: 'Dedicated Development Team', href: '/dedicated-development-team' },
              { label: 'Staff Augmentation', href: '/staff-augmentation' },
              { label: 'AI Project Development', href: '/ai-project-development' },
              { label: 'Outcome-Based AI', href: '/outcome-based-ai' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="inline-flex items-center gap-1 text-sm text-[#4B4B4B] border border-[#E5E2D9] rounded-full px-4 py-2 hover:border-[#FF4F00] hover:text-[#FF4F00] transition-colors">
                {link.label} <ChevronRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      <section className="bg-[#FF4F00] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">AI Outcomes Without the Engineering Management Overhead</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">Kovil AI runs your AI function. You focus on the business. We handle everything else.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#FF4F00] font-bold px-10 py-4 rounded-lg hover:bg-[#FAF8F4] transition-colors text-lg">
            Start the Conversation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
