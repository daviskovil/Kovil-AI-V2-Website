import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dedicated Development Team | Full-Stack Engineering Pod for Your Product',
  description: 'A dedicated development team from Kovil AI: tech lead, full-stack engineers, DevOps, and QA assigned exclusively to your product. Operational in 2-3 weeks.',
  keywords: ['dedicated development team', 'dedicated software development team', 'hire development team', 'dedicated dev team', 'software development team for hire', 'dedicated engineering team', 'remote development team'],
  openGraph: {
    title: 'Dedicated Development Team | Full-Stack Engineering Pod for Your Product',
    description: 'A dedicated development team from Kovil AI: tech lead, full-stack engineers, DevOps, and QA assigned exclusively to your product. Operational in 2-3 weeks.',
    images: [{ url: 'https://kovil.ai/staff-aug-dedicated-dev.webp', width: 1200, height: 630 }],
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kovil AI',
  url: 'https://kovil.ai',
  logo: 'https://kovil.ai/kovil-logo.png',
  description: 'Dedicated development team provider: pre-formed full-stack engineering pods assigned exclusively to client products.',
  sameAs: ['https://www.linkedin.com/company/kovil-ai'],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Dedicated Development Team', item: 'https://kovil.ai/dedicated-development-team' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Dedicated Development Team',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  areaServed: 'Worldwide',
  description: 'Dedicated development teams: pre-formed full-stack engineering pods with tech lead, developers, DevOps, and QA assigned exclusively to client products.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a dedicated development team?',
      acceptedAnswer: { '@type': 'Answer', text: 'A dedicated development team is a pre-formed engineering pod — typically a tech lead, 2-4 developers, a DevOps engineer, and a QA engineer — assigned exclusively to your product or project. They work full-time on your work, under your direction, using your tools and processes. Unlike a project outsourcing model, you have full visibility and control. Unlike individual staff augmentation, you get a cohesive team that has already calibrated to each other.' },
    },
    {
      '@type': 'Question',
      name: 'How quickly can a dedicated development team start?',
      acceptedAnswer: { '@type': 'Answer', text: 'A Kovil AI dedicated development team is typically operational within 2-3 weeks: 1 week to finalise team composition, 1 week for access provisioning and kickoff, and the team contributes from sprint 1. Compare this to building an equivalent in-house team, which typically takes 6-12 months of sequential hiring.' },
    },
    {
      '@type': 'Question',
      name: 'What does a dedicated development team cost vs hiring in-house?',
      acceptedAnswer: { '@type': 'Answer', text: 'A 5-person in-house team (lead + 3 engineers + QA) in the US costs $900K-$1.4M per year in fully loaded salaries, plus $100K-$200K in recruitment fees and 6-12 months to assemble. A Kovil AI dedicated team provides comparable output, is operational in 3 weeks, scales flexibly, and has no recruitment overhead.' },
    },
    {
      '@type': 'Question',
      name: 'Who manages the dedicated development team?',
      acceptedAnswer: { '@type': 'Answer', text: 'You do. The Tech Lead is your primary point of contact and manages the team day-to-day. You set the product vision, priorities, and success metrics. The Tech Lead translates these into sprint plans and technical decisions. Weekly status calls, daily standups, and access to your project management tools keep you fully informed.' },
    },
    {
      '@type': 'Question',
      name: 'What tech stacks does Kovil AI cover for dedicated teams?',
      acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI covers: frontend (React, Next.js, TypeScript), backend (Python/FastAPI, Node.js/NestJS, Go), databases (PostgreSQL, MongoDB, Redis, Supabase), cloud (AWS, GCP, Azure), DevOps (Kubernetes, Terraform, GitHub Actions), and AI/ML integration (LangChain, OpenAI/Anthropic APIs, vector databases). We compose the team based on your stack.' },
    },
    {
      '@type': 'Question',
      name: 'Can a dedicated development team work on an existing codebase?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We regularly send teams into existing codebases. The first sprint is typically a codebase audit and context-setting sprint: understanding architecture, identifying technical debt, and establishing coding standards alignment. This ensures the team can contribute cleanly from sprint 2 without introducing regressions or style inconsistencies.' },
    },
    {
      '@type': 'Question',
      name: 'How long do dedicated development team engagements typically last?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most dedicated team engagements run 6-18 months. Shorter engagements (3-6 months) suit well-defined product phases: an MVP build, a platform migration, or a major feature suite. Longer engagements suit companies with ongoing product roadmaps who want sustained velocity without the overhead of maintaining a large permanent headcount.' },
    },
    {
      '@type': 'Question',
      name: 'Can the team include AI/ML specialists?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Kovil AI dedicated development teams can include AI engineers, LLM specialists, and ML engineers alongside full-stack developers and DevOps. Many clients start with a general product team and add AI specialists as the roadmap requires. See our Dedicated AI Team page for teams focused exclusively on AI engineering work.' },
    },
  ],
}

const teamProfiles = [
  {
    icon: '🏗',
    size: 'Starter (3 people)',
    desc: 'For early-stage MVPs or focused product modules.',
    composition: '1 Tech Lead + 1 Full-Stack Engineer + 1 QA Engineer',
    bestFor: 'MVP builds, v2 feature sprints, small product teams',
  },
  {
    icon: '🚀',
    size: 'Growth (5 people)',
    desc: 'For sustained product development with parallel workstreams.',
    composition: '1 Tech Lead + 2 Full-Stack Engineers + 1 DevOps + 1 QA Engineer',
    bestFor: 'Growing SaaS products, platform migrations, launch sprints',
  },
  {
    icon: '🏢',
    size: 'Scale (7+ people)',
    desc: 'For enterprise products or multiple concurrent streams.',
    composition: '1 Tech Lead + 3-4 Engineers (FE/BE/AI mix) + 1 DevOps + 1-2 QA',
    bestFor: 'Enterprise product builds, AI platform development, multi-team programmes',
  },
]

const whatWeDeliver = [
  { title: 'Architecture Review', desc: 'Week 1: Tech Lead audits existing codebase or designs greenfield architecture. Shared as a doc before sprint 2 begins.' },
  { title: 'Sprint Planning', desc: 'Bi-weekly sprints with your product owner. Stories in your tool (Linear, Jira, GitHub Projects). No process overhead imposed.' },
  { title: 'Daily Progress', desc: 'Async daily standup updates in Slack or your comms tool. Blockers surfaced immediately, not buried until the next sync.' },
  { title: 'Weekly Demo', desc: 'Every Friday the team shows what shipped. You see working software every week, not quarterly reports.' },
  { title: 'CI/CD Pipeline', desc: 'Continuous integration from day one. Automated tests, staging environments, and deployment pipelines set up in the first 2 sprints.' },
  { title: 'Monthly Retrospective', desc: 'Team composition and process reviewed monthly. Scale up, swap specialisms, or adjust team structure as the roadmap evolves.' },
]

const marketStats = [
  { value: '6-12 mo', label: 'typical time to hire and assemble a comparable 5-person in-house team — a dedicated team is operational in 3 weeks' },
  { value: '2 sprints', label: 'is all it typically takes for a Kovil AI dedicated team to reach full velocity in a new codebase' },
  { value: '91%', label: 'of clients extend their dedicated team engagement beyond the initial term — a signal that output quality justifies continuation' },
]

export default function DedicatedDevelopmentTeamPage() {
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
                <span className="text-white">Dedicated Development Team</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-[#FF4F00]/10 border border-[#FF4F00]/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-[#FF4F00] rounded-full animate-pulse" />
                <span className="text-[#FF4F00] text-sm font-medium">Tech Lead + Engineers + DevOps + QA. 3 Weeks.</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                A Dedicated Development Team Shipping for You in 3 Weeks
              </h1>
              <p className="text-lg text-[#9B9B9B] leading-relaxed mb-8">
                Building your product needs sustained engineering velocity, not just one good sprint. A Kovil AI dedicated development team gives you a complete, cohesive engineering pod — tech lead, full-stack engineers, DevOps, QA — working exclusively on your product under your direction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#e64400] transition-colors">
                  Build My Dev Team
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/dedicated-ai-team" className="inline-flex items-center justify-center gap-2 border border-[#3A3A3A] text-white font-semibold px-8 py-4 rounded-lg hover:border-white transition-colors">
                  AI-Specific Teams
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              <Image
                src="/staff-aug-dedicated-dev.webp"
                alt="Dedicated development team showing tech lead, full-stack engineers, DevOps and QA working on client product"
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
            {['Tech Lead Included', 'DevOps + QA Included', 'Exclusive to Your Product', 'Weekly Demos', 'Operational in 3 Weeks', 'Bi-Weekly Sprint Cycle'].map(t => (
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
              <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">Why a Cohesive Team Outperforms a Collection of Individuals</h2>
              <p className="text-[#4B4B4B] leading-relaxed mb-4">
                When you add engineers one at a time, each new addition needs time to calibrate to the team. Communication patterns, code review standards, and technical decisions have to be re-established. The tenth week is better than the second, but you pay for the ramp every time.
              </p>
              <p className="text-[#4B4B4B] leading-relaxed mb-4">
                A pre-formed dedicated team arrives already calibrated. The Tech Lead knows how the engineers work. The QA engineer knows what to test. Within 2 sprints, a Kovil AI dedicated team is at full velocity — not because they are smarter, but because they are already coherent.
              </p>
              <p className="text-[#4B4B4B] leading-relaxed">
                For sustained product development, this is a significant advantage. A coherent team accumulates context faster, makes better architectural decisions, and has tighter feedback loops between design, development, and QA.
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
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">Team Sizes and Compositions</h2>
            <p className="text-[#4B4B4B] max-w-2xl mx-auto">Three standard team profiles. All are customisable based on your stack, product phase, and workstream needs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {teamProfiles.map((profile, i) => (
              <div key={profile.size} className={`rounded-xl border p-6 ${i === 1 ? 'bg-[#0A0A0A] border-[#FF4F00]/40' : 'bg-white border-[#E5E2D9]'}`}>
                <div className="text-3xl mb-3">{profile.icon}</div>
                <h3 className={`font-semibold mb-1 ${i === 1 ? 'text-white' : 'text-[#0A0A0A]'}`}>{profile.size}</h3>
                <p className={`text-sm mb-3 ${i === 1 ? 'text-[#9B9B9B]' : 'text-[#4B4B4B]'}`}>{profile.desc}</p>
                <div className={`text-xs font-medium rounded-lg px-3 py-2 mb-3 ${i === 1 ? 'bg-white/10 text-white' : 'bg-[#FAF8F4] text-[#4B4B4B]'}`}>{profile.composition}</div>
                <p className={`text-xs ${i === 1 ? 'text-[#9B9B9B]' : 'text-[#9B9B9B]'}`}><span className="font-semibold">Best for:</span> {profile.bestFor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">What a Dedicated Team Delivers Each Week</h2>
            <p className="text-[#4B4B4B] max-w-2xl mx-auto">Transparent, consistent delivery every sprint. No status ambiguity, no end-of-quarter surprises.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whatWeDeliver.map(item => (
              <div key={item.title} className="bg-white rounded-xl border border-[#E5E2D9] p-5">
                <h3 className="font-semibold text-[#0A0A0A] mb-2">{item.title}</h3>
                <p className="text-sm text-[#4B4B4B] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      <section className="bg-[#0A0A0A] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">What Are You Building?</h2>
          <p className="text-[#9B9B9B] max-w-xl mx-auto mb-8">Tell us the product, the stack, and the phase. We will compose the right team and have them shipping within 3 weeks.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#e64400] transition-colors">
            Compose My Team <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A0A0A] rounded-2xl p-8 lg:p-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#FF4F00] mb-4">Dedicated Dev Team Case Study</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">PropTech Startup: Full Product Team from Zero to Launch in 14 Weeks</h2>
            <p className="text-[#9B9B9B] leading-relaxed mb-8 max-w-2xl">
              A PropTech startup had a funded idea, a product manager, and no engineers. We assembled a 5-person dedicated team: Tech Lead, 2 full-stack engineers (React + FastAPI), 1 DevOps engineer, and 1 QA engineer. The team was operational in 16 days. Sprint 1 delivered the data model and CI pipeline. By week 14 they had shipped a production app with AI-powered property valuation, tenant matching, and document generation.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="text-3xl font-bold text-[#FF4F00] mb-1">16 days</div>
                <div className="text-sm text-[#9B9B9B]">from brief to full 5-person team contributing in client tools</div>
              </div>
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="text-3xl font-bold text-[#FF4F00] mb-1">14 weeks</div>
                <div className="text-sm text-[#9B9B9B]">to production launch with AI features — on scope and on budget</div>
              </div>
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="text-3xl font-bold text-[#FF4F00] mb-1">3</div>
                <div className="text-sm text-[#9B9B9B]">AI features shipped: valuation, tenant matching, and document generation</div>
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
          <h2 className="text-3xl font-bold text-[#0A0A0A] mb-10 text-center">Dedicated Development Team: Frequently Asked Questions</h2>
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
              { label: 'Staff Augmentation', href: '/staff-augmentation' },
              { label: 'IT Staff Augmentation', href: '/it-staff-augmentation' },
              { label: 'Managed AI Engineering', href: '/managed-ai-engineering' },
              { label: 'AI Project Development', href: '/ai-project-development' },
              { label: 'Fixed-Price AI Project', href: '/fixed-price-ai-project' },
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
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Your Product. Your Direction. Our Team.</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">Tell us what you are building and we will compose the right team, operational in 3 weeks.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#FF4F00] font-bold px-10 py-4 rounded-lg hover:bg-[#FAF8F4] transition-colors text-lg">
            Start the Conversation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
