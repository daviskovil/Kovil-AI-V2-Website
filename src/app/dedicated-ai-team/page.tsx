import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dedicated AI Development Team | Pre-Formed AI Engineering Pod',
  description: 'Hire a dedicated AI development team from Kovil AI: AI tech lead, engineers, and QA assigned exclusively to your project. Faster than building in-house. Cohesive from day one.',
  keywords: ['dedicated AI development team', 'dedicated AI team', 'dedicated AI engineering team', 'hire AI team', 'AI development team', 'AI team as a service', 'AI pod for hire', 'dedicated AI developers'],
  openGraph: {
    title: 'Dedicated AI Development Team | Pre-Formed AI Engineering Pod | Kovil AI',
    description: 'Hire a dedicated AI development team from Kovil AI: AI tech lead, engineers, and QA assigned exclusively to your project. Faster than building in-house. Cohesive from day one.',
    images: [{ url: 'https://kovil.ai/staff-aug-dedicated-ai.webp', width: 1200, height: 630 }],
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kovil AI',
  url: 'https://kovil.ai',
  logo: 'https://kovil.ai/kovil-logo.png',
  description: 'Dedicated AI team provider: pre-formed AI engineering pods with tech lead, engineers, and QA assigned exclusively to client AI projects.',
  sameAs: ['https://www.linkedin.com/company/kovil-ai'],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Dedicated AI Team', item: 'https://kovil.ai/dedicated-ai-team' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Dedicated AI Team',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  areaServed: 'Worldwide',
  description: 'Dedicated AI engineering teams: pre-formed pods with AI tech lead, engineers, and QA assigned exclusively to your AI project. Operational in 2-3 weeks.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a dedicated AI team?',
      acceptedAnswer: { '@type': 'Answer', text: 'A dedicated AI team is a pre-formed engineering pod — typically an AI tech lead, 2-3 AI engineers, and a QA engineer — assigned exclusively to your AI project or product. Unlike staff augmentation (where individuals join your team), a dedicated AI team operates as a cohesive unit: they have worked together, have established communication patterns, and can hit the ground running as a group. They report to you, but function as a self-organising team within your project.' },
    },
    {
      '@type': 'Question',
      name: 'How does a dedicated AI team differ from AI staff augmentation?',
      acceptedAnswer: { '@type': 'Answer', text: 'Staff augmentation adds individual engineers to your existing team, one at a time. A dedicated AI team is a complete, self-sufficient pod that arrives ready to operate. The key differences: a dedicated team has a tech lead who can make architecture decisions independently; the team members are already calibrated to each other so ramp-up is faster; and the team takes collective accountability for delivery rather than individual task completion.' },
    },
    {
      '@type': 'Question',
      name: 'What does a typical dedicated AI team look like?',
      acceptedAnswer: { '@type': 'Answer', text: 'A standard Kovil AI dedicated AI team consists of: 1 AI Tech Lead (architecture, decisions, stakeholder communication), 2-3 AI Engineers (LangChain, RAG, agents, fine-tuning as needed), 1 QA Engineer (eval infrastructure, RAGAS testing, regression suite), and optionally 1 AI-fluent Frontend Engineer for the application layer. Team size is customised to your project scope.' },
    },
    {
      '@type': 'Question',
      name: 'How quickly can a dedicated AI team start?',
      acceptedAnswer: { '@type': 'Answer', text: 'A dedicated AI team is typically operational within 2-3 weeks of engagement start: 1 week to finalise team composition based on your project brief, 1 week for access provisioning and kickoff, and the team is contributing from day one of sprint 1. Compare this to 6-18 months to hire a full internal AI team when factoring in individual recruitment timelines.' },
    },
    {
      '@type': 'Question',
      name: 'Do I manage the dedicated AI team directly?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. The dedicated AI team reports to your product or engineering leadership. The AI Tech Lead is your primary point of contact: they attend your planning sessions, provide weekly status updates, and escalate decisions that need your input. Day-to-day work management stays with you. Kovil AI handles team health, individual performance, and any team composition changes needed.' },
    },
    {
      '@type': 'Question',
      name: 'What types of AI projects suit a dedicated team model?',
      acceptedAnswer: { '@type': 'Answer', text: 'Dedicated AI teams are best for: multi-month AI product builds that need sustained velocity, companies without internal AI expertise who need a complete team rather than individuals, projects requiring tight team cohesion (multi-agent systems, complex RAG architectures, LLM fine-tuning pipelines), and ongoing AI product development with a rolling roadmap. For a single short-term feature, individual staff augmentation may be more appropriate.' },
    },
    {
      '@type': 'Question',
      name: 'Can the dedicated AI team scale up or down?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Team composition is reviewed monthly. You can add engineers during high-intensity build phases and reduce during maintenance or evaluation phases. Adding to the team takes 1-2 weeks (sourcing from our pre-vetted bench). Reducing the team requires 4 weeks notice. The Tech Lead typically stays consistent throughout the engagement to preserve context.' },
    },
    {
      '@type': 'Question',
      name: 'What does a dedicated AI team cost compared to hiring in-house?',
      acceptedAnswer: { '@type': 'Answer', text: 'Building an in-house AI team of 4 people (1 lead + 2 engineers + 1 QA) costs $800K-$1.2M+ per year in fully loaded compensation in the US, takes 12-18 months to hire, and carries significant retention risk in a competitive market. A Kovil AI dedicated team provides comparable capability, is operational in 3 weeks, scales without recruitment overhead, and can be wound down cleanly when the project phase ends.' },
    },
  ],
}

const teamComposition = [
  {
    role: 'AI Tech Lead',
    headcount: '1',
    responsibilities: ['Technical architecture and key design decisions', 'Stakeholder communication and sprint planning', 'Code review and engineering standards', 'Risk identification and mitigation', 'Technology selection (models, frameworks, infra)'],
    required: true,
  },
  {
    role: 'AI Engineer',
    headcount: '2-3',
    responsibilities: ['LangChain / LangGraph implementation', 'RAG pipeline engineering', 'LLM API integration and prompt engineering', 'Agent system development', 'Feature build and unit testing'],
    required: true,
  },
  {
    role: 'QA / Eval Engineer',
    headcount: '1',
    responsibilities: ['RAGAS evaluation suite setup', 'Regression testing automation', 'LLM output quality benchmarking', 'Integration and end-to-end tests', 'CI/CD quality gates'],
    required: true,
  },
  {
    role: 'AI Frontend Engineer',
    headcount: '1 (optional)',
    responsibilities: ['Streaming LLM response UI', 'React / Next.js application layer', 'Chat interface and conversation history', 'User feedback collection for eval', 'Production-ready frontend deploy'],
    required: false,
  },
]

const comparison = [
  { dimension: 'Time to operational', dedicated: '2-3 weeks', augmentation: '2-4 weeks (sequential)', inHouse: '12-18 months' },
  { dimension: 'Team cohesion on day 1', dedicated: 'High (pre-formed)', augmentation: 'Builds over time', inHouse: 'Builds over time' },
  { dimension: 'Architecture leadership', dedicated: 'Included (Tech Lead)', augmentation: 'May need to add separately', inHouse: 'Hire separately' },
  { dimension: 'QA / eval coverage', dedicated: 'Included in team', augmentation: 'Add separately', inHouse: 'Hire separately' },
  { dimension: 'Scale up/down', dedicated: 'Monthly review, 4-wk notice down', augmentation: 'Individual, 2-4 wk notice', inHouse: 'Slow and costly' },
  { dimension: 'Best for', dedicated: 'Multi-month AI product builds', augmentation: 'Adding skills to existing team', inHouse: 'Long-term AI platform ownership' },
]

const marketStats = [
  { value: '2-3 wks', label: 'for a Kovil AI dedicated AI team to be operational vs 12-18 months to hire a comparable in-house team' },
  { value: '4-6x', label: 'faster time-to-first-commit compared to building an in-house AI team from scratch (recruit + onboard + calibrate)' },
  { value: '87%', label: 'of dedicated AI team engagements hit their first milestone on time — vs 43% industry average for AI projects' },
]

export default function DedicatedAITeamPage() {
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
                <span className="text-white">Dedicated AI Team</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-[#FF4F00]/10 border border-[#FF4F00]/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-[#FF4F00] rounded-full animate-pulse" />
                <span className="text-[#FF4F00] text-sm font-medium">Tech Lead + Engineers + QA. Operational in 3 Weeks.</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                A Complete AI Engineering Team, Ready to Ship in 3 Weeks
              </h1>
              <p className="text-lg text-[#9B9B9B] leading-relaxed mb-8">
                Building an in-house AI team takes 12-18 months. A Kovil AI dedicated AI team is operational in 3 weeks: AI Tech Lead, engineers, and QA arrive pre-calibrated, reporting to you, and ready to build from sprint one.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#e64400] transition-colors">
                  Build Your AI Team Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/ai-staff-augmentation" className="inline-flex items-center justify-center gap-2 border border-[#3A3A3A] text-white font-semibold px-8 py-4 rounded-lg hover:border-white transition-colors">
                  Individual AI Engineers
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              <Image
                src="/staff-aug-dedicated-ai.webp"
                alt="Dedicated AI team showing tech lead, AI engineers and QA engineer assigned exclusively to client project"
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
            {['AI Tech Lead Included', 'QA + Eval Engineer Included', 'Exclusive to Your Project', 'Reports to You', 'Operational in 3 Weeks', 'Monthly Team Review'].map(t => (
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
              <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">Why "Just Add Engineers" Is Not Enough</h2>
              <p className="text-[#4B4B4B] leading-relaxed mb-4">
                Individual staff augmentation works well when your existing team can absorb and direct AI engineers. But if you have no AI expertise in-house, adding individual engineers creates a management problem: who sets the architecture? Who decides which model to use? Who reviews the RAG pipeline design?
              </p>
              <p className="text-[#4B4B4B] leading-relaxed mb-4">
                A dedicated AI team solves this by arriving with a Tech Lead who owns those decisions. You set the product direction and success metrics. The Tech Lead translates that into technical architecture and manages the engineering team. You get the output of a fully functional AI engineering department without the 12-18 month build.
              </p>
              <p className="text-[#4B4B4B] leading-relaxed">
                The QA and eval engineer is not optional. Every Kovil AI dedicated AI team includes evaluation infrastructure from day one — RAGAS scores, regression tests, and quality benchmarks that prevent the silent degradation that kills most production AI systems.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {marketStats.map(stat => (
                <div key={stat.value} className="bg-white rounded-xl border border-[#E5E2D9] p-6 flex items-start gap-4">
                  <span className="text-3xl font-bold text-[#FF4F00] leading-none flex-shrink-0">{stat.value}</span>
                  <span className="text-[#4B4B4B] text-sm leading-relaxed pt-1">{stat.label}</span>
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
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">Dedicated AI Team Composition</h2>
            <p className="text-[#4B4B4B] max-w-2xl mx-auto">Standard team is 4-5 people. Composition is tailored to your project. Minimum: Tech Lead + 2 Engineers + QA.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {teamComposition.map(member => (
              <div key={member.role} className={`bg-white rounded-xl border p-6 ${member.required ? 'border-[#E5E2D9]' : 'border-dashed border-[#E5E2D9]'}`}>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E5E2D9]">
                  <div>
                    <h3 className="font-semibold text-[#0A0A0A]">{member.role}</h3>
                    <p className="text-sm text-[#9B9B9B]">{member.headcount} per team</p>
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${member.required ? 'bg-[#FF4F00]/10 text-[#FF4F00]' : 'bg-[#FAF8F4] text-[#9B9B9B] border border-[#E5E2D9]'}`}>
                    {member.required ? 'Required' : 'Optional'}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {member.responsibilities.map(r => (
                    <li key={r} className="flex items-start gap-2 text-sm text-[#4B4B4B]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4F00] flex-shrink-0 mt-0.5" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">Dedicated AI Team vs Staff Augmentation vs Hiring In-House</h2>
            <p className="text-[#4B4B4B] max-w-2xl mx-auto">Three models for getting AI engineering capacity. Choose based on your existing team's AI maturity and project scale.</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-[#E5E2D9]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0A0A0A] text-white">
                  <th className="text-left px-5 py-4 font-semibold">Dimension</th>
                  <th className="text-left px-5 py-4 font-semibold text-[#FF4F00]">Dedicated AI Team</th>
                  <th className="text-left px-5 py-4 font-semibold">AI Staff Augmentation</th>
                  <th className="text-left px-5 py-4 font-semibold">Hire In-House</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.dimension} className={`${i % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F4]'} border-t border-[#E5E2D9]`}>
                    <td className="px-5 py-4 font-semibold text-[#0A0A0A]">{row.dimension}</td>
                    <td className="px-5 py-4 text-[#4B4B4B] font-medium">{row.dedicated}</td>
                    <td className="px-5 py-4 text-[#4B4B4B]">{row.augmentation}</td>
                    <td className="px-5 py-4 text-[#4B4B4B]">{row.inHouse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      <section className="bg-[#0A0A0A] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Stop Waiting and Start Shipping?</h2>
          <p className="text-[#9B9B9B] max-w-xl mx-auto mb-8">Tell us your AI project scope and we will design the right team composition for you.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#e64400] transition-colors">
            Design My AI Team <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A0A0A] rounded-2xl p-8 lg:p-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#FF4F00] mb-4">Dedicated AI Team Case Study</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">InsurTech: Full AI Team Deployed in 18 Days</h2>
            <p className="text-[#9B9B9B] leading-relaxed mb-8 max-w-2xl">
              An InsurTech company needed to build an AI underwriting co-pilot. They had a strong product team but zero AI engineering experience. We deployed a 4-person dedicated AI team: 1 AI Tech Lead, 2 AI engineers (RAG + agent specialist), and 1 eval/QA engineer. The team was integrated into their Linear and Slack within 18 days. The Tech Lead ran architecture sessions with their CTO in week 2. Production v1 shipped in 11 weeks.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="text-3xl font-bold text-[#FF4F00] mb-1">18 days</div>
                <div className="text-sm text-[#9B9B9B]">from brief to all 4 team members contributing in their tools</div>
              </div>
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="text-3xl font-bold text-[#FF4F00] mb-1">11 weeks</div>
                <div className="text-sm text-[#9B9B9B]">to v1 production underwriting co-pilot — on timeline</div>
              </div>
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="text-3xl font-bold text-[#FF4F00] mb-1">38 min</div>
                <div className="text-sm text-[#9B9B9B]">average underwriting time reduced to 8 min with AI co-pilot assist</div>
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
          <h2 className="text-3xl font-bold text-[#0A0A0A] mb-10 text-center">Dedicated AI Team: Frequently Asked Questions</h2>
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
              { label: 'AI Staff Augmentation', href: '/ai-staff-augmentation' },
              { label: 'Dedicated Development Team', href: '/dedicated-development-team' },
              { label: 'Managed AI Engineering', href: '/managed-ai-engineering' },
              { label: 'Generative AI Development', href: '/generative-ai-development' },
              { label: 'AI Agent Development', href: '/ai-agent-development' },
              { label: 'Hire AI Engineers', href: '/hire/ai-engineer' },
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
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Get a Complete AI Team in 3 Weeks</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">Tell us your AI project scope. We will design the right team composition and have them operational faster than you thought possible.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#FF4F00] font-bold px-10 py-4 rounded-lg hover:bg-[#FAF8F4] transition-colors text-lg">
            Design My AI Team <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
