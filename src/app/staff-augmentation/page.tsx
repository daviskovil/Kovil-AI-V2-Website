import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Staff Augmentation Services | Extend Your Team with Vetted Engineers',
  description: 'Staff augmentation: add vetted engineers to your team without the overhead of full-time hiring. Kovil AI matches you in 48 hours. Scale up or down as your project demands.',
  keywords: ['staff augmentation', 'staff augmentation services', 'IT staff augmentation', 'tech staff augmentation', 'software engineer augmentation', 'staff augmentation vs outsourcing', 'nearshore staff augmentation'],
  openGraph: {
    title: 'Staff Augmentation Services | Extend Your Team with Vetted Engineers',
    description: 'Staff augmentation: add vetted engineers to your team without the overhead of full-time hiring. Kovil AI matches you in 48 hours. Scale up or down as your project demands.',
    images: [{ url: 'https://kovil.ai/staff-aug-main.webp', width: 1200, height: 630 }],
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kovil AI',
  url: 'https://kovil.ai',
  logo: 'https://kovil.ai/kovil-logo.png',
  description: 'Staff augmentation company providing vetted AI, ML, and software engineers to extend client teams on demand.',
  sameAs: ['https://www.linkedin.com/company/kovil-ai'],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Staff Augmentation', item: 'https://kovil.ai/staff-augmentation' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Staff Augmentation',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  areaServed: 'Worldwide',
  description: 'On-demand staff augmentation: vetted AI, ML, and software engineers integrated into your team under your management. Match in 48 hours.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is staff augmentation?',
      acceptedAnswer: { '@type': 'Answer', text: 'Staff augmentation is a hiring model where you extend your team with external engineers who work under your direct management, on your projects, integrated into your workflows. Unlike outsourcing, you retain full control over priorities, processes, and day-to-day work. Unlike full-time hiring, there is no lengthy recruitment process, employer overhead, or long-term commitment when the project winds down.' },
    },
    {
      '@type': 'Question',
      name: 'How is staff augmentation different from outsourcing?',
      acceptedAnswer: { '@type': 'Answer', text: 'The key difference is control. In outsourcing, you hand a project to a third party who manages their own team and delivers a result. In staff augmentation, the engineers join your team: they attend your standups, use your tools, report to your managers, and work on exactly what you prioritise. You get the flexibility of external talent without giving up visibility or control.' },
    },
    {
      '@type': 'Question',
      name: 'How quickly can augmented engineers start?',
      acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI matches you with screened candidates within 48 hours of a brief. Most engineers can start within one to two weeks — time needed for access provisioning, onboarding materials, and the initial context-setting sprint. Compare this to 3-6 months for a full-time hire when factoring in job posting, interviews, offers, and notice periods.' },
    },
    {
      '@type': 'Question',
      name: 'What roles can be augmented through Kovil AI?',
      acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI specialises in AI and software engineering roles: AI engineers, LLM engineers, generative AI developers, ML engineers, Python developers, React developers, full-stack engineers, DevOps engineers, cloud engineers, data engineers, QA engineers, cybersecurity engineers, and technical product managers. All engineers are pre-screened on technical skills and communication ability.' },
    },
    {
      '@type': 'Question',
      name: 'How does Kovil AI vet augmented engineers?',
      acceptedAnswer: { '@type': 'Answer', text: 'Every Kovil AI engineer goes through a 4-stage vetting process: async technical assessment (role-specific coding and architecture questions), live technical interview with a senior Kovil AI engineer, communication and collaboration assessment, and reference verification. Less than 3% of applicants pass. For AI roles, we additionally assess LLM API proficiency, RAG system design, and production deployment experience.' },
    },
    {
      '@type': 'Question',
      name: 'Can I scale the team up or down?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Staff augmentation is designed for elasticity. You can add engineers when a sprint requires more capacity and reduce when the workload normalises. Kovil AI requires 2-4 weeks notice for scaling down depending on contract terms. There are no penalties for scaling up — we match additional engineers to your team as fast as you need them.' },
    },
    {
      '@type': 'Question',
      name: 'What time zones do augmented engineers work in?',
      acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI has engineers across North America, South America, Europe, and South/Southeast Asia. We match engineers based on your timezone overlap requirements. Most clients request at least 4 hours of synchronous overlap per day with their core team. We prioritise candidates who can commit to daily standups and real-time collaboration during your working hours.' },
    },
    {
      '@type': 'Question',
      name: 'What happens if an augmented engineer is not working out?',
      acceptedAnswer: { '@type': 'Answer', text: 'We offer a 2-week trial period on every placement. If within those 2 weeks the engineer is not the right fit — whether for technical, communication, or cultural reasons — we replace them at no additional cost. After the trial period, standard notice terms apply. In practice, our vetting process means replacements are rare, but the guarantee exists to remove your risk.' },
    },
  ],
}

const comparison = [
  { dimension: 'Time to start', aug: '1-2 weeks', hire: '3-6 months', outsource: '2-4 weeks' },
  { dimension: 'Who manages them', aug: 'You (direct reports)', hire: 'You (direct reports)', outsource: 'The vendor' },
  { dimension: 'Visibility into work', aug: 'Full (in your tools)', hire: 'Full', outsource: 'Output only' },
  { dimension: 'Scale up/down', aug: 'Yes, with notice', hire: 'Slow and costly', outsource: 'Depends on contract' },
  { dimension: 'Employer overhead', aug: 'None (you pay Kovil AI)', hire: 'High (benefits, taxes)', outsource: 'None' },
  { dimension: 'IP and code ownership', aug: 'Yours (full)', hire: 'Yours (full)', outsource: 'Contract-dependent' },
  { dimension: 'Long-term commitment', aug: 'Flexible, monthly', hire: 'High', outsource: 'Project-based' },
  { dimension: 'Culture integration', aug: 'High (embedded in team)', hire: 'High', outsource: 'Low' },
]

const roles = [
  { role: 'AI Engineer', skills: 'LangChain, RAG, LLM APIs, agent systems', demand: 'Very High' },
  { role: 'LLM Engineer', skills: 'Fine-tuning, RLHF, evaluation, LLMOps', demand: 'Very High' },
  { role: 'ML Engineer', skills: 'PyTorch, MLflow, SageMaker, feature stores', demand: 'High' },
  { role: 'Python Developer', skills: 'FastAPI, Django, async, LLM integrations', demand: 'High' },
  { role: 'React / Next.js Developer', skills: 'React 18/19, TypeScript, streaming UI', demand: 'High' },
  { role: 'DevOps Engineer', skills: 'Kubernetes, Terraform, GitHub Actions, AWS', demand: 'High' },
  { role: 'Data Engineer', skills: 'Spark, dbt, Airflow, Snowflake, feature stores', demand: 'Medium-High' },
  { role: 'Cloud Engineer', skills: 'AWS, GCP, Azure, IaC, cost optimisation', demand: 'High' },
]

const marketStats = [
  { value: '48 hrs', label: 'to match you with a screened engineer — vs 3-6 months for a full-time hire' },
  { value: 'Top 3%', label: 'of applicants pass Kovil AI vetting — technical screen + communication + reference check' },
  { value: '$280B', label: 'global IT staff augmentation market by 2028, growing at 14% CAGR (Grand View Research)' },
]

const howItWorks = [
  { step: '01', title: 'Brief Us', desc: 'Tell us the role, skills, timezone, and project context. A 30-minute call is usually enough to spec the requirement.' },
  { step: '02', title: 'We Match in 48 Hours', desc: 'We present 2-3 pre-screened candidates with CV, technical assessment scores, and communication notes. You interview only people we have already vetted.' },
  { step: '03', title: 'You Interview and Select', desc: 'One or two interviews. You choose the engineer you want. Typical selection time: 3-5 days from our first presentation.' },
  { step: '04', title: 'They Join Your Team', desc: 'The engineer starts within 1-2 weeks. They use your tools, attend your standups, and work directly under your management.' },
  { step: '05', title: 'Scale as Needed', desc: 'Add more engineers when you need them. Reduce the team when the project winds down. 2-4 weeks notice to scale down.' },
]

export default function StaffAugmentationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-[#0A0A0A] py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="flex items-center gap-2 text-sm text-[#9B9B9B] mb-6">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Staff Augmentation</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-[#FF4F00]/10 border border-[#FF4F00]/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-[#FF4F00] rounded-full animate-pulse" />
                <span className="text-[#FF4F00] text-sm font-medium">Your Team. Your Process. Our Engineers.</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Extend Your Team with Vetted Engineers in 48 Hours
              </h1>
              <p className="text-lg text-[#9B9B9B] leading-relaxed mb-8">
                Staff augmentation means adding engineers to your existing team — under your management, in your tools, on your priorities. No outsourcing handoffs, no loss of control. Just skilled engineers who slot into your workflow and get to work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#e64400] transition-colors"
                >
                  Get Matched in 48 Hours
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/hire/ai-engineer"
                  className="inline-flex items-center justify-center gap-2 border border-[#3A3A3A] text-white font-semibold px-8 py-4 rounded-lg hover:border-white transition-colors"
                >
                  Browse Engineer Roles
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              <Image
                src="/staff-aug-main.webp"
                alt="Staff augmentation showing vetted engineers joining an existing engineering team in 48 hours"
                width={540}
                height={304}
                className="relative rounded-2xl border border-[#2A2A2A] shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-white border-b border-[#E5E2D9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-[#4B4B4B]">
            {['Match in 48 Hours', 'Top 3% Vetting', '2-Week Trial Guarantee', 'Your Management', 'No Employer Overhead', 'Scale Up or Down'].map(t => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF4F00] flex-shrink-0" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What it is + stats */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">What Staff Augmentation Actually Means</h2>
              <p className="text-[#4B4B4B] leading-relaxed mb-4">
                Think of staff augmentation as adding seats to your team without adding headcount to your payroll. The engineer works for you, takes direction from your managers, and contributes to your sprint like a full-time employee — but Kovil AI handles the sourcing, vetting, and employment relationship.
              </p>
              <p className="text-[#4B4B4B] leading-relaxed mb-4">
                A simple example: your 4-person engineering team is building an AI feature. You need an LLM engineer for 6 months, but hiring full-time would take 4 months just to fill the role. With staff augmentation, a vetted LLM engineer joins your team in 2 weeks, works directly under your tech lead, and is off the engagement when the feature ships.
              </p>
              <p className="text-[#4B4B4B] leading-relaxed">
                This is not the same as outsourcing, where you hand off a project and wait for results. You stay in control of the work. The augmented engineer is a member of your team — just without the permanent overhead.
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

      {/* How it works */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">How Staff Augmentation Works with Kovil AI</h2>
            <p className="text-[#4B4B4B] max-w-2xl mx-auto">From brief to engineer on your team in under 2 weeks. Five steps, no surprises.</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {howItWorks.map((s, i) => (
              <div key={s.step} className="relative">
                <div className="bg-white rounded-xl border border-[#E5E2D9] p-5 h-full">
                  <span className="text-3xl font-bold text-[#FF4F00] opacity-30 block mb-2">{s.step}</span>
                  <h3 className="font-semibold text-[#0A0A0A] mb-2 text-sm">{s.title}</h3>
                  <p className="text-xs text-[#4B4B4B] leading-relaxed">{s.desc}</p>
                </div>
                {i < howItWorks.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-2.5 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-5 h-5 text-[#FF4F00]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* Comparison table */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">Staff Augmentation vs Full-Time Hiring vs Outsourcing</h2>
            <p className="text-[#4B4B4B] max-w-2xl mx-auto">Three ways to get engineering work done. The right choice depends on how much control you need and how long the work lasts.</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-[#E5E2D9]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0A0A0A] text-white">
                  <th className="text-left px-5 py-4 font-semibold">Dimension</th>
                  <th className="text-left px-5 py-4 font-semibold text-[#FF4F00]">Staff Augmentation</th>
                  <th className="text-left px-5 py-4 font-semibold">Full-Time Hire</th>
                  <th className="text-left px-5 py-4 font-semibold">Outsourcing</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.dimension} className={`${i % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F4]'} border-t border-[#E5E2D9]`}>
                    <td className="px-5 py-4 font-semibold text-[#0A0A0A]">{row.dimension}</td>
                    <td className="px-5 py-4 text-[#4B4B4B] font-medium">{row.aug}</td>
                    <td className="px-5 py-4 text-[#4B4B4B]">{row.hire}</td>
                    <td className="px-5 py-4 text-[#4B4B4B]">{row.outsource}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* Roles */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">Engineering Roles Available for Augmentation</h2>
            <p className="text-[#4B4B4B] max-w-2xl mx-auto">Kovil AI specialises in AI-native engineering talent. Every role below is pre-screened for technical depth and remote collaboration.</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-[#E5E2D9]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0A0A0A] text-white">
                  <th className="text-left px-5 py-4 font-semibold">Role</th>
                  <th className="text-left px-5 py-4 font-semibold">Core Skills</th>
                  <th className="text-left px-5 py-4 font-semibold">Market Demand</th>
                  <th className="text-left px-5 py-4 font-semibold">Hire Page</th>
                </tr>
              </thead>
              <tbody>
                {roles.map((r, i) => (
                  <tr key={r.role} className={`${i % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F4]'} border-t border-[#E5E2D9]`}>
                    <td className="px-5 py-4 font-semibold text-[#0A0A0A]">{r.role}</td>
                    <td className="px-5 py-4 text-[#4B4B4B]">{r.skills}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${r.demand === 'Very High' ? 'bg-red-50 text-red-600' : r.demand === 'High' ? 'bg-orange-50 text-[#FF4F00]' : 'bg-yellow-50 text-yellow-700'}`}>{r.demand}</span>
                    </td>
                    <td className="px-5 py-4">
                      <Link href={`/hire/${r.role.toLowerCase().replace(/ \//g, '').replace(/ /g, '-').replace(/\./g, '')}`} className="text-[#FF4F00] hover:underline text-xs font-medium">View role →</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* Mid CTA */}
      <section className="bg-[#0A0A0A] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Which Role Do You Need to Fill?</h2>
          <p className="text-[#9B9B9B] max-w-xl mx-auto mb-8">
            Tell us the skill set and we will have pre-screened candidates in front of you within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#e64400] transition-colors">
              Brief Us Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/ai-staff-augmentation" className="inline-flex items-center gap-2 border border-[#3A3A3A] text-white font-semibold px-8 py-4 rounded-lg hover:border-white transition-colors">
              AI-Specific Staff Aug <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* Case study */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A0A0A] rounded-2xl p-8 lg:p-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#FF4F00] mb-4">Case Study</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Scale-Up SaaS: 3 AI Engineers Added in 12 Days</h2>
            <p className="text-[#9B9B9B] leading-relaxed mb-8 max-w-2xl">
              A Series B SaaS company needed to ship an AI assistant feature before their annual conference. Their 6-person engineering team had no LLM experience. We matched 3 vetted AI engineers in 48 hours, and the team was functional within 12 days of initial brief. Engineers worked in their Jira, used their GitHub, attended daily standups, and were indistinguishable from internal team members in terms of communication and output quality.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="text-3xl font-bold text-[#FF4F00] mb-1">12 days</div>
                <div className="text-sm text-[#9B9B9B]">from initial brief to all 3 engineers fully onboarded and contributing</div>
              </div>
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="text-3xl font-bold text-[#FF4F00] mb-1">6 weeks</div>
                <div className="text-sm text-[#9B9B9B]">to ship the AI assistant feature, 2 weeks ahead of conference deadline</div>
              </div>
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="text-3xl font-bold text-[#FF4F00] mb-1">0</div>
                <div className="text-sm text-[#9B9B9B]">replacements needed — all 3 engineers passed the 2-week trial on day one</div>
              </div>
            </div>
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#FF4F00] transition-colors">
              Read more case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* FAQs */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0A0A0A] mb-10 text-center">Staff Augmentation: Frequently Asked Questions</h2>
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

      {/* Related */}
      <section className="bg-[#FAF8F4] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#0A0A0A] mb-4">Related services</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'AI Staff Augmentation', href: '/ai-staff-augmentation' },
              { label: 'IT Staff Augmentation', href: '/it-staff-augmentation' },
              { label: 'Dedicated AI Team', href: '/dedicated-ai-team' },
              { label: 'Managed AI Engineering', href: '/managed-ai-engineering' },
              { label: 'Hire AI Engineers', href: '/hire/ai-engineer' },
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

      {/* Bottom CTA */}
      <section className="bg-[#FF4F00] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Extend Your Team?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">
            Tell us the role, the skills, and the start date. We will have pre-screened candidates ready for you to interview within 48 hours.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#FF4F00] font-bold px-10 py-4 rounded-lg hover:bg-[#FAF8F4] transition-colors text-lg">
            Get Matched in 48 Hours <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
