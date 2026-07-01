import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ArrowRight, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Andela Alternative | Kovil AI vs Andela | Managed AI Engineering',
  description: 'Looking for an Andela alternative? Kovil AI offers managed AI engineering with an Engagement Manager, 48-hour matching, 2-week risk-free trial, and milestone-gated delivery — purpose-built for AI projects.',
  keywords: ['Andela alternative', 'Andela vs Kovil AI', 'alternative to Andela', 'Andela competitor', 'managed AI engineering alternative to Andela'],
  openGraph: { title: 'Andela Alternative | Kovil AI', description: 'Managed AI engineering without the talent marketplace model. Engagement Manager included. 48-hour matching. No deposit.', url: 'https://kovil.ai/andela-alternative', siteName: 'Kovil AI', type: 'website', images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Andela Alternative | Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'Andela Alternative | Kovil AI', description: 'Why product teams choose Kovil AI over Andela for AI engineering.' },
  alternates: { canonical: 'https://kovil.ai/andela-alternative' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm headquartered in Garden City, NY.', contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'Andela Alternative', item: 'https://kovil.ai/andela-alternative' }] }

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to start an AI engineering engagement with Kovil AI',
  description: 'Kovil AI matches, onboards, and delivers AI engineering engagements in four steps — no long wait, no self-managing engineers.',
  step: [
    { '@type': 'HowToStep', position: 1, name: '30-minute scope call', text: 'You describe the project, timeline, and technical requirements. We map the right AI engineer profile and confirm the engagement structure.' },
    { '@type': 'HowToStep', position: 2, name: 'Match in 48 hours', text: 'One pre-vetted AI engineer is presented within 48 hours — matched on real AI deployment history, not just a resume or vetting assessment.' },
    { '@type': 'HowToStep', position: 3, name: '2-week risk-free trial', text: 'No deposit required. After two weeks, if it is not the right fit, you pay nothing and we provide a free replacement or part ways.' },
    { '@type': 'HowToStep', position: 4, name: 'Milestone-gated delivery with an Engagement Manager', text: 'Your Engagement Manager owns delivery oversight from day one. You approve each milestone before work proceeds to the next phase.' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Why consider an Andela alternative?', acceptedAnswer: { '@type': 'Answer', text: 'Andela is a talent marketplace that specializes in connecting companies with engineers from Africa. Their strengths are geographic diversity and competitive salary-based rates. However, matching typically takes 1 to 4 weeks, vetting is for general software engineering rather than AI-specific roles, and there is no Engagement Manager or delivery oversight once the engineer starts. Teams building AI systems often need faster matching, deeper AI domain expertise, and managed delivery accountability.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from Andela?', acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI is a managed AI engineering firm. Every engagement includes a human Engagement Manager who owns delivery, milestone tracking, and escalation. Engineers are vetted through 150+ real AI deployments, not a general vetting assessment. Matching takes 48 hours rather than 1 to 4 weeks. A 2-week risk-free trial is available with no deposit. And fixed-price project delivery is offered alongside staff augmentation, which Andela does not provide.' } },
    { '@type': 'Question', name: 'How quickly can Kovil AI match me with an AI engineer?', acceptedAnswer: { '@type': 'Answer', text: '48 hours from scope call to match. Andela\'s matching process typically takes 1 to 4 weeks, as it involves sourcing from their African talent network and coordinating interviews. Kovil AI maintains a ready pool of AI-specialized engineers and presents one pre-vetted match within two business days.' } },
    { '@type': 'Question', name: 'Does Kovil AI offer a trial period?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — a 2-week risk-free trial with no deposit required. If the engagement is not working after the trial, you pay nothing and Kovil AI provides a free replacement or parts ways, zero termination fees. Andela\'s trial options vary by engagement type and are not as broadly available.' } },
    { '@type': 'Question', name: 'What is an Engagement Manager and why does it matter?', acceptedAnswer: { '@type': 'Answer', text: 'An Engagement Manager is your single point of contact for the duration of the project. They own milestone tracking, scope management, communication, and escalation when something goes off track. Andela has no equivalent role — once the engineer is placed, delivery management is entirely your responsibility. For AI projects where requirements evolve and integration complexity is high, this difference is material.' } },
    { '@type': 'Question', name: 'Can Kovil AI do fixed-price project delivery?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Kovil AI offers both AI Engineer Augmentation (staff aug) and Outcome-Based AI Projects (fixed-price, milestone-gated delivery). Andela is staff augmentation only. Fixed-price means Kovil AI scopes, prices, and owns delivery of the entire project — you pay for outcomes, not hours billed.' } },
    { '@type': 'Question', name: 'How are Kovil AI engineers vetted compared to Andela?', acceptedAnswer: { '@type': 'Answer', text: 'Andela vets engineers through their internal talent assessment process, screening for general software engineering capability. Kovil AI engineers are vetted through real project outcomes — 150+ AI deployments across legal tech, fintech, healthcare, retail, and logistics. Domain experience in production AI systems is the benchmark.' } },
    { '@type': 'Question', name: 'Who owns the code and IP built during the engagement?', acceptedAnswer: { '@type': 'Answer', text: 'You own 100% of everything built — all code, models, data pipelines, and intellectual property. Kovil AI retains no rights to any project output. This applies to both staff augmentation and fixed-price engagements.' } },
    { '@type': 'Question', name: 'What happens if the engineer is not the right fit?', acceptedAnswer: { '@type': 'Answer', text: 'During the 2-week trial, if the engagement is not working, you pay nothing and Kovil AI provides a free replacement or parts ways — zero termination fees. After the trial, if performance issues arise, the Engagement Manager resolves them. A free replacement is available at any point in the engagement.' } },
  ],
}

const comparisonRows = [
  { label: 'Model', andela: 'Africa-focused talent marketplace', kovil: 'Managed firm — EM-led delivery' },
  { label: 'AI specialization', andela: 'General software engineering vetting', kovil: 'AI-specific, 150+ deployment-vetted' },
  { label: 'Time to match', andela: '1–4 weeks, sourcing and interviews', kovil: '48 hours, one presented match' },
  { label: 'Deposit required', andela: 'None', kovil: 'None — trial starts immediately' },
  { label: 'Trial period', andela: 'Limited, varies by engagement', kovil: '2-week risk-free, keep all work done' },
  { label: 'Engagement Manager', andela: 'Not included — self-managed delivery', kovil: 'Included on every engagement' },
  { label: 'Milestone delivery', andela: 'No milestone structure — time and materials', kovil: 'Milestone-gated, you approve each phase' },
  { label: 'Fixed-price projects', andela: 'Not available — staff aug only', kovil: 'Available alongside staff aug' },
  { label: 'Minimum commitment', andela: 'Typically 3–6 months minimum', kovil: 'No minimum, no lock-in' },
  { label: 'IP ownership', andela: 'Client owns — standard contractor terms', kovil: 'Client owns 100% — always' },
]

const painPoints = [
  { title: 'Matching takes 1 to 4 weeks — too long for active AI projects', body: 'Andela\'s sourcing model requires identifying candidates from their African talent network, conducting assessments, and coordinating interviews. For teams with a live project deadline or an active gap in their engineering capacity, a 1-to-4-week matching timeline adds significant delay and cost. Kovil AI presents one pre-vetted match within 48 hours of the scope call.' },
  { title: 'Vetting is for general software engineering, not AI-specific', body: 'Andela vets engineers for general software engineering capability. That is a meaningful bar for backend, frontend, and full-stack roles. For AI engineering specifically — LLM integration, RAG pipelines, fine-tuning, agent orchestration, production MLOps — the vetting needs to be domain-specific. Kovil AI\'s 150+ AI deployment history is the actual bar: can this engineer build and ship a production AI system?' },
  { title: 'No delivery management after the engineer is placed', body: 'Andela\'s model ends at placement. Once the engineer starts, all sprint planning, scope management, code review oversight, and performance accountability is on your team. For companies that have a strong technical lead in place, this is manageable. For teams building AI systems without dedicated engineering management, the overhead is significant. Kovil AI\'s Engagement Manager is accountable to delivery from day one.' },
  { title: 'Staff augmentation only — no path to outcome-based delivery', body: 'Andela is a talent marketplace, which means the model is time and materials. Hours are billed; outcomes are not guaranteed. If the scope expands, costs grow. If delivery slips, the risk sits with you. Kovil AI offers fixed-price outcome-based delivery for companies that need a defined outcome by a defined date, with clear milestone accountability at each phase.' },
]

const personas = [
  { title: 'Teams that need an AI engineer matched this week, not next month', body: 'For active projects with live deadlines, a 1-to-4-week sourcing and interview process is not compatible with the timeline. Kovil AI\'s 48-hour human-reviewed matching gets an AI-vetted engineer into the engagement within days.' },
  { title: 'Companies whose AI project needs domain expertise, not general engineering', body: 'Building a production RAG system or an LLM-powered workflow requires applied AI judgment that a general vetting process does not reliably surface. Teams that tried Andela for AI-specific work often found the engineers were strong generalists but lacked the applied AI depth the project required.' },
  { title: 'Founders and product leads who need delivery accountability, not just headcount', body: 'If you are shipping an AI product without a dedicated engineering manager, you need more than a placed engineer. Kovil AI\'s Engagement Manager owns the milestone plan, surfaces blockers early, and manages delivery so you can focus on product decisions.' },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="pt-20">

        {/* Hero */}
        <section className="bg-[#0A0A0A] py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">Andela Alternative</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Andela Alternative — AI-Specialized Engineering, Matched in 48 Hours, Not 4 Weeks
              </h1>
              <p className="text-[#A09A91] text-lg md:text-xl leading-relaxed mb-10 font-sans">
                Andela takes 1 to 4 weeks to source and match engineers through their African talent network. Kovil AI presents one AI-specialized engineer in 48 hours, assigns an Engagement Manager, and starts your 2-week risk-free trial immediately — no deposit, no lock-in.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-a-call" className="inline-flex items-center justify-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#e64600] transition-colors font-sans">
                  Book a Call <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/engage/managed-ai-engineer" className="inline-flex items-center justify-center gap-2 border border-[#2A2A2A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#1A1A1A] transition-colors font-sans">
                  See AI Engineer Augmentation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="border-y border-[#E5E2D9] bg-[#FAF8F4] py-6">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-[#6B7280] font-sans">
              <span>150+ Successful AI Deployments</span>
              <span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>48-Hour Matching</span>
              <span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>No Deposit. No Lock-in.</span>
              <span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>Engagement Manager on Every Engagement</span>
            </div>
          </div>
        </section>

        {/* Why teams look for an Andela alternative */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">Why teams look for an Andela alternative</h2>
            <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-12 max-w-3xl">
              Andela has built a strong reputation for connecting companies with African engineering talent at competitive rates. For general software engineering with a longer hiring runway, it works. For AI engineering with urgent timelines and domain-specific requirements, several gaps emerge.
            </p>
            <div className="space-y-8">
              {painPoints.map((pt, i) => (
                <div key={i} className="flex gap-6 p-8 rounded-2xl border border-[#E5E2D9] bg-[#FAF8F4]">
                  <XCircle className="w-6 h-6 text-[#E53E3E] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#0A0A0A] mb-3">{pt.title}</h3>
                    <p className="text-[#6B7280] font-sans leading-relaxed">{pt.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI lifecycle image */}
        <section className="py-12 bg-white border-b border-[#E5E2D9]">
          <div className="max-w-6xl mx-auto px-6">
            <Image
              src="/AI-Development-Lifecycle.webp"
              alt="AI development lifecycle managed by Kovil AI — 48-hour matching and milestone-gated delivery as an alternative to Andela's 1 to 4 week sourcing process"
              width={1200}
              height={630}
              className="rounded-2xl w-full"
            />
            <p className="text-[#6B7280] font-sans text-sm mt-4 text-center">Kovil AI compresses the full AI engineering lifecycle — matched in 48 hours, delivered milestone by milestone, managed end to end.</p>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">Kovil AI vs Andela — full comparison</h2>
            <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-10 max-w-3xl">
              Side by side across the dimensions that matter most for AI engineering engagements.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border border-[#E5E2D9] rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-[#0A0A0A]">
                    <th className="p-4 text-left text-sm font-semibold text-[#A09A91] font-sans w-1/3"></th>
                    <th className="p-4 text-left text-sm font-semibold text-[#A09A91] font-sans">Andela</th>
                    <th className="p-4 text-left text-sm font-semibold text-[#FF4F00] font-sans">Kovil AI</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F4]'}>
                      <td className="p-4 text-sm font-semibold text-[#0A0A0A] font-sans border-t border-[#E5E2D9]">{row.label}</td>
                      <td className="p-4 text-sm text-[#6B7280] font-sans border-t border-[#E5E2D9]">{row.andela}</td>
                      <td className="p-4 text-sm text-[#0A0A0A] font-semibold font-sans border-t border-[#E5E2D9]">{row.kovil}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* How Kovil AI engages */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">How Kovil AI engages — vs the Andela process</h2>
            <p className="text-[#A09A91] font-sans text-lg leading-relaxed mb-12 max-w-3xl">
              Andela's sourcing model is built for volume and diversity. Kovil AI's model is built for speed, AI depth, and managed delivery.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl border border-[#1E1E1E] bg-[#111111]">
                <p className="text-[#A09A91] text-xs font-semibold uppercase tracking-widest mb-6 font-sans">Andela process</p>
                <div className="space-y-4">
                  {[
                    'Submit hiring requirements to Andela',
                    'Andela sources from African talent network (1–4 weeks)',
                    'Review shortlisted profiles and conduct interviews',
                    'Negotiate and finalize the engagement terms',
                    'Onboard and manage the engineer directly',
                    'Handle delivery, scope, and performance yourself',
                  ].map((step, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span className="text-[#E53E3E] text-sm font-bold font-sans mt-0.5">{i + 1}.</span>
                      <p className="text-[#A09A91] font-sans text-sm leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 rounded-2xl border border-[#2A2A2A] bg-[#111111]">
                <p className="text-[#FF4F00] text-xs font-semibold uppercase tracking-widest mb-6 font-sans">Kovil AI process</p>
                <div className="space-y-4">
                  {[
                    '30-minute scope call — no deposit, no commitment',
                    'One pre-vetted AI engineer presented in 48 hours',
                    '2-week trial begins immediately — keep all work done',
                    'Engagement Manager assigned from day one',
                    'Milestone plan agreed upfront — you approve each phase',
                    'EM owns delivery, escalation, and communication',
                  ].map((step, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-4 h-4 text-[#FF4F00] flex-shrink-0 mt-0.5" />
                      <p className="text-white font-sans text-sm leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who switches */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">Who switches from Andela to Kovil AI</h2>
            <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-12 max-w-3xl">
              The switch is usually driven by timeline pressure, AI domain requirements, or the need for managed delivery accountability.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {personas.map((p, i) => (
                <div key={i} className="p-8 rounded-2xl border border-[#E5E2D9] bg-[#FAF8F4]">
                  <div className="text-[#FF4F00] font-display text-3xl font-bold mb-4 opacity-40">0{i + 1}</div>
                  <h3 className="font-display text-lg font-bold text-[#0A0A0A] mb-3">{p.title}</h3>
                  <p className="text-[#6B7280] font-sans leading-relaxed text-sm">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case study callout */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-10">Kovil AI in production — real results</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl bg-[#0A0A0A] text-white">
                <p className="text-[#FF4F00] text-xs font-semibold uppercase tracking-widest mb-3 font-sans">Case study — LegalTech</p>
                <h3 className="font-display text-xl font-bold mb-4">Zero downtime after entire dev team departed</h3>
                <p className="text-[#A09A91] font-sans leading-relaxed text-sm mb-6">
                  A legal tech firm lost their entire engineering team. Kovil AI matched a senior AI engineer in 48 hours and stabilized three production applications in five days — maintaining 100% SLA for 200+ law firm users throughout.
                </p>
                <Link href="/case-studies/legal-tech-maintenance" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#FF4F00] transition-colors font-sans text-sm">
                  Read the case study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="p-8 rounded-2xl bg-[#0A0A0A] text-white">
                <p className="text-[#FF4F00] text-xs font-semibold uppercase tracking-widest mb-3 font-sans">Case study — FinTech</p>
                <h3 className="font-display text-xl font-bold mb-4">Payment dashboard shipped in 18 days</h3>
                <p className="text-[#A09A91] font-sans leading-relaxed text-sm mb-6">
                  A FinTech startup needed a production-ready payment dashboard built to a hard deadline. Kovil AI scoped, staffed, and delivered under a fixed-price engagement — live in 18 days with zero scope overrun.
                </p>
                <Link href="/case-studies/fintech-payment-dashboard" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#FF4F00] transition-colors font-sans text-sm">
                  Read the case study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-12">Frequently asked questions</h2>
            <div className="divide-y divide-[#E5E2D9] max-w-3xl">
              {faqSchema.mainEntity.map((faq, i) => (
                <div key={i} className="py-8">
                  <h3 className="font-display text-lg font-bold text-[#0A0A0A] mb-3">{faq.name}</h3>
                  <p className="text-[#6B7280] font-sans leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="py-16 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mb-8">Explore further</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: 'AI Engineer Augmentation', sub: 'Our staff aug service', href: '/engage/managed-ai-engineer' },
                { label: 'Outcome-Based AI Projects', sub: 'Fixed-price delivery', href: '/engage/outcome-based-project' },
                { label: 'How It Works', sub: 'Our engagement process', href: '/how-it-works' },
                { label: 'Toptal Alternative', sub: 'vs deposit-required marketplace', href: '/toptal-alternative' },
                { label: 'Turing Alternative', sub: 'vs algorithm-matched marketplace', href: '/turing-alternative' },
                { label: 'Upwork Alternative', sub: 'vs open freelancer marketplace', href: '/upwork-alternative' },
              ].map(r => (
                <Link key={r.href} href={r.href} className="flex flex-col p-5 rounded-2xl border border-[#E5E2D9] bg-white hover:border-[#FF4F00] transition-colors group">
                  <span className="font-display font-bold text-[#0A0A0A] text-base group-hover:text-[#FF4F00] transition-colors">{r.label}</span>
                  <span className="text-[#6B7280] font-sans text-sm mt-1">{r.sub}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#FF4F00]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Start your 2-week risk-free trial</h2>
            <p className="text-white/80 text-lg font-sans mb-10 max-w-xl mx-auto">No deposit. No lock-in. AI-specialized engineer matched in 48 hours. Engagement Manager included from day one.</p>
            <Link href="/book-a-call" className="inline-flex items-center justify-center gap-2 bg-white text-[#FF4F00] font-bold px-8 py-4 rounded-full hover:bg-[#FAF8F4] transition-colors font-sans">
              Book a Call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </>
  )
}
