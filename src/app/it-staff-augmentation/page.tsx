import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'IT Staff Augmentation | Vetted Tech Engineers On Demand',
  description: 'IT staff augmentation: extend your tech team with vetted software engineers, DevOps, cloud, QA, and data engineers. Match in 48 hours. No recruitment overhead.',
  keywords: ['IT staff augmentation', 'IT staff augmentation services', 'tech staff augmentation', 'software engineer augmentation', 'IT talent augmentation', 'technology staff augmentation', 'remote IT staff augmentation'],
  openGraph: {
    title: 'IT Staff Augmentation | Vetted Tech Engineers On Demand',
    description: 'IT staff augmentation: extend your tech team with vetted software engineers, DevOps, cloud, QA, and data engineers. Match in 48 hours. No recruitment overhead.',
    images: [{ url: 'https://kovil.ai/staff-aug-it.webp', width: 1200, height: 630 }],
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kovil AI',
  url: 'https://kovil.ai',
  logo: 'https://kovil.ai/kovil-logo.png',
  description: 'IT staff augmentation company providing vetted software engineers, DevOps, cloud, QA, and data engineers to extend client teams on demand.',
  sameAs: ['https://www.linkedin.com/company/kovil-ai'],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'IT Staff Augmentation', item: 'https://kovil.ai/it-staff-augmentation' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'IT Staff Augmentation',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  areaServed: 'Worldwide',
  description: 'IT staff augmentation: vetted software engineers, DevOps, cloud, QA, and data engineers integrated into your team in 2 weeks.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is IT staff augmentation?',
      acceptedAnswer: { '@type': 'Answer', text: 'IT staff augmentation is a model for extending your technology team with external engineers who work under your direct management, on your projects, in your tools. It covers any technical role: software engineers, DevOps, cloud engineers, QA, data engineers, and AI/ML specialists. You gain the skills you need quickly, without full-time hiring overhead.' },
    },
    {
      '@type': 'Question',
      name: 'Which IT roles can be augmented through Kovil AI?',
      acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI augments: AI/ML engineers, software engineers (Python, TypeScript, Go, Java), React/Next.js frontend developers, full-stack engineers, DevOps and platform engineers, cloud engineers (AWS/GCP/Azure), data engineers, QA automation engineers, cybersecurity engineers, and technical product managers. All roles are screened for both technical depth and remote collaboration.' },
    },
    {
      '@type': 'Question',
      name: 'How does IT staff augmentation differ from an IT outsourcing firm?',
      acceptedAnswer: { '@type': 'Answer', text: 'With IT outsourcing, you hand a project to a firm that manages it and returns results. With IT staff augmentation, the engineers are direct members of your team: they take direction from your managers, join your standups, and work in your project management tools. You never lose visibility or control. This matters for complex, ongoing work where context and culture continuity are important.' },
    },
    {
      '@type': 'Question',
      name: 'How quickly can an IT engineer join my team?',
      acceptedAnswer: { '@type': 'Answer', text: 'For most roles, we present 2-3 pre-screened candidates within 48 hours of a brief. After your interview and selection, engineers typically start within 1-2 weeks. This covers access provisioning and a context-setting kickoff sprint. The total timeline from brief to productive contribution is 2-3 weeks, compared to 3-6 months for a full-time hire.' },
    },
    {
      '@type': 'Question',
      name: 'Can IT augmented engineers work in our preferred time zone?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We match based on timezone overlap. Most clients request 4+ hours of synchronous overlap per day. We have engineers across North America, South America, Europe, and South/Southeast Asia. We will only present candidates who can commit to daily standups and real-time collaboration during your core hours.' },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of IT staff augmentation vs full-time hiring?',
      acceptedAnswer: { '@type': 'Answer', text: 'Full-time senior engineer total cost (salary + benefits + taxes + equity) runs $180K-$250K+ per year in the US. IT staff augmentation provides comparable seniority without employer overhead, typically at lower all-in cost for the engagement period — with no recruitment fees, no benefits administration, and no severance risk when the project ends. For project-based work, augmentation is almost always more economical.' },
    },
    {
      '@type': 'Question',
      name: 'What happens if the augmented engineer does not meet expectations?',
      acceptedAnswer: { '@type': 'Answer', text: 'Every Kovil AI placement comes with a 2-week trial period. If the engineer does not meet your expectations for any reason — technical output, communication quality, or cultural fit — we replace them at no additional cost within that window. After the trial period, standard notice terms apply. Our vetting rate of less than 3% acceptance means replacements are rare in practice.' },
    },
    {
      '@type': 'Question',
      name: 'Can I augment a team rather than an individual engineer?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Many clients augment with 2-5 engineers simultaneously, either as a group of specialists or as a cohesive pod. For team-based augmentation where you want engineers who work together (not just independently), see our Dedicated Development Team model, which provides a pre-formed team with a tech lead, engineers, and QA.' },
    },
  ],
}

const roles = [
  { role: 'AI / ML Engineer', timeline: '48 hrs', skills: 'LangChain, RAG, LLM APIs, PyTorch, MLflow', hireLink: '/hire/ai-engineer' },
  { role: 'Python Developer', timeline: '48 hrs', skills: 'FastAPI, Django, async, LLM integrations, Pytest', hireLink: '/hire/python-developer' },
  { role: 'React / Next.js Developer', timeline: '48 hrs', skills: 'React 18/19, TypeScript, Tailwind, streaming UI', hireLink: '/hire/react-developer' },
  { role: 'Full-Stack Engineer', timeline: '48 hrs', skills: 'React + Python/Node, PostgreSQL, Docker, AWS', hireLink: '/hire/full-stack-developer' },
  { role: 'DevOps Engineer', timeline: '48-72 hrs', skills: 'Kubernetes, Terraform, GitHub Actions, ArgoCD', hireLink: '/hire/devops-engineer' },
  { role: 'Cloud Engineer', timeline: '48-72 hrs', skills: 'AWS / GCP / Azure, IaC, EKS/GKE, cost optimisation', hireLink: '/hire/cloud-engineer' },
  { role: 'Data Engineer', timeline: '48-72 hrs', skills: 'dbt, Airflow, Spark, Snowflake, feature stores', hireLink: '/hire/data-engineer' },
  { role: 'QA Automation Engineer', timeline: '48-72 hrs', skills: 'Playwright, Pytest, k6, LLM output eval, CI integration', hireLink: '/hire/qa-engineer' },
  { role: 'Software Engineer', timeline: '48 hrs', skills: 'Python / TypeScript / Go, REST APIs, Docker, AWS', hireLink: '/hire/software-engineer' },
  { role: 'Cybersecurity Engineer', timeline: '72 hrs', skills: 'OWASP, IAM, SAST/DAST, SOC 2, prompt injection defense', hireLink: '/hire/cybersecurity-engineer' },
]

const costComparison = [
  { item: 'Recruitment fee (typical agency: 20% of salary)', fullTime: '$30K-$50K', augmentation: '$0' },
  { item: 'Time to fill (lost productivity)', fullTime: '3-6 months', augmentation: '2 weeks' },
  { item: 'Benefits + employer taxes', fullTime: '25-35% on top of salary', augmentation: 'None' },
  { item: 'Ramp-up time to full productivity', fullTime: '2-4 months', augmentation: '2-4 weeks' },
  { item: 'Severance / off-boarding risk', fullTime: '1-3 months salary', augmentation: 'None' },
  { item: 'Flexibility to scale down', fullTime: 'Costly and slow', augmentation: '2-4 weeks notice' },
]

const marketStats = [
  { value: '72%', label: 'of tech companies cite talent scarcity as the top constraint on their engineering roadmap (Stack Overflow 2024)' },
  { value: '2-3 wks', label: 'typical time from IT staff augmentation brief to engineer contributing on your team — vs 3-6 months to hire' },
  { value: '40%', label: 'lower total engagement cost vs full-time senior engineer (salary + benefits + recruitment) for a 6-12 month project' },
]

export default function ITStaffAugmentationPage() {
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
                <span className="text-white">IT Staff Augmentation</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-[#FF4F00]/10 border border-[#FF4F00]/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-[#FF4F00] rounded-full animate-pulse" />
                <span className="text-[#FF4F00] text-sm font-medium">10 Tech Roles. Pre-Vetted. Ready in 2 Weeks.</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                IT Staff Augmentation: Close Your Tech Gaps Without the Hiring Wait
              </h1>
              <p className="text-lg text-[#9B9B9B] leading-relaxed mb-8">
                Vetted software engineers, DevOps, cloud, QA, and data engineers who join your team under your management. No recruitment overhead, no long-term commitment, no waiting 4 months to fill a seat that needed filling yesterday.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#e64400] transition-colors">
                  Get Engineers in 2 Weeks
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/staff-augmentation" className="inline-flex items-center justify-center gap-2 border border-[#3A3A3A] text-white font-semibold px-8 py-4 rounded-lg hover:border-white transition-colors">
                  How Staff Aug Works
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              <Image
                src="/staff-aug-it.webp"
                alt="IT staff augmentation showing software engineers, DevOps and cloud engineers joining client team"
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
            {['Python / TypeScript / Go', 'React + Next.js', 'DevOps + Kubernetes', 'AWS / GCP / Azure', 'Data Engineering', 'QA Automation'].map(t => (
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
              <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">The Real Cost of a Slow IT Hire</h2>
              <p className="text-[#4B4B4B] leading-relaxed mb-4">
                Every month a critical engineering seat sits empty has a cost: sprints slow, roadmap items slip, existing engineers burn out covering the gap. A US senior engineer hire takes 3-6 months on average — and that is before the 2-4 month ramp-up to full productivity. You are looking at 5-10 months before you feel the full impact.
              </p>
              <p className="text-[#4B4B4B] leading-relaxed mb-4">
                IT staff augmentation compresses this to 2-3 weeks. The engineer who joins has already been screened: technical assessment, live interview, communication evaluation, reference check. They start contributing within days of onboarding, not months.
              </p>
              <p className="text-[#4B4B4B] leading-relaxed">
                For project-specific work — a product launch, a platform migration, a new AI feature — augmentation is almost always faster and more economical than hiring. When the project is done, you scale down cleanly, with no severance or long-term overhead.
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
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">IT Roles Available for Augmentation</h2>
            <p className="text-[#4B4B4B] max-w-2xl mx-auto">10 specialist tech roles, each with a dedicated vetting track and match timeline.</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-[#E5E2D9]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0A0A0A] text-white">
                  <th className="text-left px-5 py-4 font-semibold">Role</th>
                  <th className="text-left px-5 py-4 font-semibold">Core Skills</th>
                  <th className="text-left px-5 py-4 font-semibold">Match Time</th>
                  <th className="text-left px-5 py-4 font-semibold">Hire Page</th>
                </tr>
              </thead>
              <tbody>
                {roles.map((r, i) => (
                  <tr key={r.role} className={`${i % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F4]'} border-t border-[#E5E2D9]`}>
                    <td className="px-5 py-4 font-semibold text-[#0A0A0A]">{r.role}</td>
                    <td className="px-5 py-4 text-[#4B4B4B]">{r.skills}</td>
                    <td className="px-5 py-4 text-[#FF4F00] font-medium">{r.timeline}</td>
                    <td className="px-5 py-4"><Link href={r.hireLink} className="text-[#FF4F00] hover:underline text-xs font-medium">View role →</Link></td>
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
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">IT Staff Augmentation vs Full-Time Hiring: True Cost Comparison</h2>
            <p className="text-[#4B4B4B] max-w-2xl mx-auto">Full-time hiring has hidden costs most companies underestimate. Here is a like-for-like comparison for a 12-month engagement.</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-[#E5E2D9]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0A0A0A] text-white">
                  <th className="text-left px-5 py-4 font-semibold">Cost Item</th>
                  <th className="text-left px-5 py-4 font-semibold">Full-Time Hire</th>
                  <th className="text-left px-5 py-4 font-semibold text-[#FF4F00]">IT Staff Augmentation</th>
                </tr>
              </thead>
              <tbody>
                {costComparison.map((row, i) => (
                  <tr key={row.item} className={`${i % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F4]'} border-t border-[#E5E2D9]`}>
                    <td className="px-5 py-4 text-[#4B4B4B]">{row.item}</td>
                    <td className="px-5 py-4 text-[#4B4B4B]">{row.fullTime}</td>
                    <td className="px-5 py-4 font-medium text-[#0A0A0A]">{row.augmentation}</td>
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
          <h2 className="text-3xl font-bold text-white mb-4">Which Tech Role Do You Need to Fill?</h2>
          <p className="text-[#9B9B9B] max-w-xl mx-auto mb-8">Brief us in 30 minutes. Pre-screened candidates in 48 hours. Contributing to your team in 2 weeks.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#e64400] transition-colors">
            Start the Brief <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A0A0A] rounded-2xl p-8 lg:p-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#FF4F00] mb-4">IT Augmentation Case Study</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Fintech Startup: DevOps + Cloud Engineer in 10 Days</h2>
            <p className="text-[#9B9B9B] leading-relaxed mb-8 max-w-2xl">
              A Series A fintech was hitting infrastructure bottlenecks as user growth accelerated. Their two backend engineers were spending 40% of their time on ops. They needed a dedicated DevOps and cloud engineer but had no budget for a full-time hire at US market rates. We matched a senior AWS DevOps engineer within 48 hours. He joined their GitHub, Slack, and Linear. Within 3 weeks, deploy times dropped from 45 minutes to 6 minutes and the backend team reclaimed their ops time.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="text-3xl font-bold text-[#FF4F00] mb-1">10 days</div>
                <div className="text-sm text-[#9B9B9B]">from brief to DevOps engineer fully integrated and working</div>
              </div>
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="text-3xl font-bold text-[#FF4F00] mb-1">87%</div>
                <div className="text-sm text-[#9B9B9B]">reduction in deploy time — 45 min to 6 min — within 3 weeks</div>
              </div>
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="text-3xl font-bold text-[#FF4F00] mb-1">40%</div>
                <div className="text-sm text-[#9B9B9B]">of backend engineer time reclaimed from ops and returned to product work</div>
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
          <h2 className="text-3xl font-bold text-[#0A0A0A] mb-10 text-center">IT Staff Augmentation: Frequently Asked Questions</h2>
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
              { label: 'Staff Augmentation', href: '/staff-augmentation' },
              { label: 'AI Staff Augmentation', href: '/ai-staff-augmentation' },
              { label: 'Dedicated Development Team', href: '/dedicated-development-team' },
              { label: 'Dedicated AI Team', href: '/dedicated-ai-team' },
              { label: 'Hire DevOps Engineers', href: '/hire/devops-engineer' },
              { label: 'Hire Cloud Engineers', href: '/hire/cloud-engineer' },
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
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Close Your Tech Gap This Month</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">Tell us the role and the skills. Pre-screened engineers in 48 hours. Contributing in 2 weeks.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#FF4F00] font-bold px-10 py-4 rounded-lg hover:bg-[#FAF8F4] transition-colors text-lg">
            Get Engineers in 2 Weeks <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
