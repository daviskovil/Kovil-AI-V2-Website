import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ArrowRight, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Upwork Alternative | Kovil AI vs Upwork | Managed AI Engineering',
  description: 'Looking for an Upwork alternative for AI engineering? Kovil AI offers deeply vetted AI engineers, an Engagement Manager on every engagement, milestone-gated delivery, and a 2-week risk-free trial.',
  keywords: ['Upwork alternative', 'Upwork vs Kovil AI', 'alternative to Upwork for AI', 'Upwork competitor', 'managed AI engineering alternative to Upwork'],
  openGraph: { title: 'Upwork Alternative | Kovil AI', description: 'Vetted AI engineering with managed delivery. No bidding, no quality variance, no self-managing contractors.', url: 'https://kovil.ai/upwork-alternative', siteName: 'Kovil AI', type: 'website', images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Upwork Alternative | Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'Upwork Alternative | Kovil AI', description: 'Why product teams choose Kovil AI over Upwork for AI engineering.' },
  alternates: { canonical: 'https://kovil.ai/upwork-alternative' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm headquartered in Garden City, NY.', contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'Upwork Alternative', item: 'https://kovil.ai/upwork-alternative' }] }

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to start an AI engineering engagement with Kovil AI',
  description: 'Kovil AI matches, onboards, and delivers AI engineering engagements in four steps — no bidding, no quality variance, no self-managing contractors.',
  step: [
    { '@type': 'HowToStep', position: 1, name: '30-minute scope call', text: 'You describe the project, timeline, and technical requirements. We confirm whether staff augmentation or fixed-price delivery is the right model.' },
    { '@type': 'HowToStep', position: 2, name: 'Match in 48 hours', text: 'One pre-vetted AI engineer is presented within 48 hours — matched on 150+ real AI deployments, not a self-reported profile.' },
    { '@type': 'HowToStep', position: 3, name: '2-week risk-free trial', text: 'No deposit required. If it is not the right fit after the trial, you pay nothing and we provide a free replacement.' },
    { '@type': 'HowToStep', position: 4, name: 'Milestone-gated delivery with an Engagement Manager', text: 'Your Engagement Manager owns delivery from day one. You approve each milestone before work proceeds to the next phase.' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Why consider an Upwork alternative for AI engineering?', acceptedAnswer: { '@type': 'Answer', text: 'Upwork is an open marketplace — anyone can list themselves as an AI engineer regardless of actual capability. Credentials are self-reported. Quality ranges from expert to unqualified, and there is no way to know in advance. There is no Engagement Manager, no delivery structure, and no milestone accountability. For AI projects with real business stakes — production systems, client-facing applications, time-sensitive deliveries — the unvetted marketplace model carries significant risk.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from Upwork?', acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI is a managed AI engineering firm with a curated, deeply-vetted team. Every engineer is vetted through 150+ real AI deployments — not self-reported experience or portfolio screenshots. Every engagement has an Engagement Manager who owns delivery oversight. Matching is done in 48 hours with no bidding. Delivery is milestone-gated. A 2-week risk-free trial is available with no deposit. Fixed-price project delivery is also offered.' } },
    { '@type': 'Question', name: 'How are Kovil AI engineers vetted compared to Upwork?', acceptedAnswer: { '@type': 'Answer', text: 'Upwork engineers self-report their experience. Ratings and reviews help, but they reflect client satisfaction rather than technical depth. Kovil AI engineers are vetted through real production outcomes — 150+ AI deployments across legal tech, fintech, healthcare, retail, and logistics. The benchmark is whether the engineer has actually shipped a production AI system in the relevant domain, not what they claim on a profile.' } },
    { '@type': 'Question', name: 'Does Kovil AI require a deposit or upfront payment?', acceptedAnswer: { '@type': 'Answer', text: 'No. Kovil AI has no deposit requirement. The 2-week trial starts with no upfront payment. If it is not the right fit after the trial, you pay nothing and Kovil AI provides a free replacement or parts ways. Upwork requires escrow funding before any work begins.' } },
    { '@type': 'Question', name: 'What is an Engagement Manager and why does it matter?', acceptedAnswer: { '@type': 'Answer', text: 'An Engagement Manager is your single point of contact throughout the project. They own milestone tracking, scope management, communication, and escalation. Upwork has no equivalent — once you hire a freelancer, delivery management is entirely your responsibility. For AI projects where requirements evolve and integration complexity is high, having a dedicated manager reduces the risk of a failed or over-budget delivery.' } },
    { '@type': 'Question', name: 'Can Kovil AI do fixed-price project delivery?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Kovil AI offers Outcome-Based AI Projects — a fixed-price, milestone-gated model where we scope, price, and own delivery of the entire project. You pay for outcomes, not hours. Upwork does offer fixed-price contracts, but delivery management and milestone accountability are still entirely your responsibility as the client.' } },
    { '@type': 'Question', name: 'How quickly can Kovil AI match me with an AI engineer?', acceptedAnswer: { '@type': 'Answer', text: '48 hours from scope call to match. On Upwork, you post a job and receive applications over several days, then spend time reviewing proposals, interviewing candidates, and negotiating rates. Kovil AI presents one pre-vetted match within two business days — no bidding, no filtering through unqualified applications.' } },
    { '@type': 'Question', name: 'Who owns the code and IP built during the engagement?', acceptedAnswer: { '@type': 'Answer', text: 'You own 100% of everything built — all code, models, data pipelines, and IP. Kovil AI retains no rights to any project output. This is true for both staff augmentation and fixed-price engagements. On Upwork, IP terms depend on the individual freelancer contract and must be negotiated separately.' } },
    { '@type': 'Question', name: 'What happens if the engineer is not the right fit?', acceptedAnswer: { '@type': 'Answer', text: 'During the 2-week trial, if the engagement is not working, you pay nothing and Kovil AI provides a free replacement or parts ways — zero termination fees. After the trial, if performance issues arise, the Engagement Manager resolves them. A free replacement is available at any point. On Upwork, disputes go through Upwork\'s resolution process, which can be slow and uncertain.' } },
  ],
}

const comparisonRows = [
  { label: 'Model', upwork: 'Open marketplace — self-posted jobs', kovil: 'Managed firm — curated matching' },
  { label: 'AI specialization', upwork: 'Self-reported profiles, wide quality range', kovil: 'AI-specific, 150+ deployment-vetted' },
  { label: 'Vetting', upwork: 'Self-reported, ratings-based', kovil: 'Vetted through real production outcomes' },
  { label: 'Matching process', upwork: 'Post a job, review bids, interview yourself', kovil: '48-hour match, one presented candidate' },
  { label: 'Deposit required', upwork: 'Escrow funded before work begins', kovil: 'None — trial starts immediately' },
  { label: 'Trial period', upwork: 'No formal trial — you negotiate separately', kovil: '2-week risk-free, keep all work done' },
  { label: 'Engagement Manager', upwork: 'Not included — fully self-managed', kovil: 'Included on every engagement' },
  { label: 'Milestone delivery', upwork: 'Client-managed milestones, no oversight', kovil: 'Milestone-gated, you approve each phase' },
  { label: 'Fixed-price projects', upwork: 'Available, but client-managed delivery', kovil: 'Available with full EM-managed delivery' },
  { label: 'IP ownership', upwork: 'Depends on freelancer contract terms', kovil: 'Client owns 100% — always' },
]

const painPoints = [
  { title: 'No vetting — anyone can claim to be an AI engineer', body: 'Upwork is an open platform. There is no gate between signing up and listing yourself as an AI engineer. Credentials are self-reported. Portfolio screenshots can misrepresent actual contribution. Ratings reflect client satisfaction, not technical depth. For AI engineering specifically — where the gap between a credible profile and real production experience can be enormous — this creates significant hiring risk. Kovil AI vets through real deployment outcomes: 150+ AI systems shipped in production across legal, fintech, healthcare, and retail.' },
  { title: 'You manage everything — the hiring process, the delivery, the disputes', body: 'On Upwork, you write the job post, filter through dozens of applications, interview candidates yourself, negotiate terms, fund escrow, and then manage the entire engagement. If something goes wrong — scope creep, missed milestones, quality issues — you handle it, or you escalate to Upwork\'s dispute resolution process. Kovil AI removes this overhead entirely: one scope call, one presented match, one Engagement Manager who owns everything from milestone planning to escalation.' },
  { title: 'Quality variance is the core risk of an open marketplace', body: 'The highest-rated Upwork freelancers are genuinely excellent. The challenge is that there is no reliable way to identify them before you start. A strong proposal and five-star reviews do not tell you whether someone has shipped a production RAG system or fine-tuned an LLM for a specific domain. The discovery process is slow and uncertain. Kovil AI eliminates the variance: the engineer presented has passed the same deployment-track-record bar as every engineer on our team.' },
  { title: 'No delivery structure for complex AI projects', body: 'AI projects have evolving requirements, integration complexity, and multiple decision points where direction can shift. An unstructured time-and-materials engagement on an open marketplace has no built-in mechanism for managing that complexity. Kovil AI\'s milestone-gated delivery — with an Engagement Manager coordinating scope and communication — provides the structure that complex AI builds require. For companies that need a defined outcome, fixed-price delivery is also available.' },
]

const personas = [
  { title: 'Teams that spent weeks filtering Upwork proposals for one qualified engineer', body: 'Reviewing 40 proposals to find 2 qualified candidates, then interviewing, then losing the best one to another client mid-process — this is a common Upwork experience for AI engineering. Kovil AI presents one match in 48 hours. The filtering work is already done.' },
  { title: 'Founders whose Upwork AI project delivered the wrong thing', body: 'Open marketplace projects fail when requirements are ambiguous and the freelancer does not surface the ambiguity until invoicing for rework. Kovil AI\'s Engagement Manager is responsible for keeping scope clear and escalating before the problem becomes expensive.' },
  { title: 'Product teams that need a reliable, repeatable AI engineering partner', body: 'One-off Upwork engagements are project-by-project with no continuity. Each new engagement restarts the hiring, vetting, and onboarding process. Kovil AI builds ongoing AI engineering relationships — the Engagement Manager knows your codebase, your team, and your product requirements.' },
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
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">Upwork Alternative</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Upwork Alternative — Vetted AI Engineering, No Bidding Wars, Engagement Manager Included
              </h1>
              <p className="text-[#A09A91] text-lg md:text-xl leading-relaxed mb-10 font-sans">
                Upwork is an open marketplace where anyone can claim to be an AI engineer. Kovil AI presents one pre-vetted engineer in 48 hours — matched on real deployment history, managed by an Engagement Manager, and backed by a 2-week risk-free trial with no deposit.
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
              <span>48-Hour Matching — No Bidding</span>
              <span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>No Deposit. No Lock-in.</span>
              <span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>Engagement Manager on Every Engagement</span>
            </div>
          </div>
        </section>

        {/* Why teams look for an Upwork alternative */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">Why teams look for an Upwork alternative</h2>
            <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-12 max-w-3xl">
              Upwork works well for short, well-defined tasks where the quality bar is verifiable upfront. For AI engineering — complex, evolving, high-stakes — the open marketplace model creates four structural problems.
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
              alt="AI development lifecycle managed by Kovil AI — vetted engineers, structured delivery, and milestone accountability as an alternative to Upwork's open freelancer marketplace"
              width={1200}
              height={630}
              className="rounded-2xl w-full"
            />
            <p className="text-[#6B7280] font-sans text-sm mt-4 text-center">Kovil AI replaces the Upwork hiring process entirely — no job posts, no proposal filtering, no self-managing contractors.</p>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">Kovil AI vs Upwork — full comparison</h2>
            <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-10 max-w-3xl">
              Side by side across the dimensions that matter most for AI engineering engagements.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border border-[#E5E2D9] rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-[#0A0A0A]">
                    <th className="p-4 text-left text-sm font-semibold text-[#A09A91] font-sans w-1/3"></th>
                    <th className="p-4 text-left text-sm font-semibold text-[#A09A91] font-sans">Upwork</th>
                    <th className="p-4 text-left text-sm font-semibold text-[#FF4F00] font-sans">Kovil AI</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F4]'}>
                      <td className="p-4 text-sm font-semibold text-[#0A0A0A] font-sans border-t border-[#E5E2D9]">{row.label}</td>
                      <td className="p-4 text-sm text-[#6B7280] font-sans border-t border-[#E5E2D9]">{row.upwork}</td>
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">How Kovil AI engages — vs the Upwork process</h2>
            <p className="text-[#A09A91] font-sans text-lg leading-relaxed mb-12 max-w-3xl">
              Upwork puts the hiring and delivery work on you. Kovil AI takes it off your plate from the first call.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl border border-[#1E1E1E] bg-[#111111]">
                <p className="text-[#A09A91] text-xs font-semibold uppercase tracking-widest mb-6 font-sans">Upwork process</p>
                <div className="space-y-4">
                  {[
                    'Write and post a detailed job description',
                    'Review 20–50 proposals and shortlist candidates',
                    'Interview candidates on your own time',
                    'Fund escrow before any work begins',
                    'Onboard and manage the freelancer directly',
                    'Handle delivery, disputes, and scope yourself',
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">Who switches from Upwork to Kovil AI</h2>
            <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-12 max-w-3xl">
              The switch is usually triggered by one painful experience — a failed project, a misrepresented profile, or the realization that managing freelancers is a job in itself.
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
                { label: 'Andela Alternative', sub: 'vs Africa-focused marketplace', href: '/andela-alternative' },
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
            <p className="text-white/80 text-lg font-sans mb-10 max-w-xl mx-auto">No bidding. No deposit. Pre-vetted AI engineer matched in 48 hours. Engagement Manager included from day one.</p>
            <Link href="/book-a-call" className="inline-flex items-center justify-center gap-2 bg-white text-[#FF4F00] font-bold px-8 py-4 rounded-full hover:bg-[#FAF8F4] transition-colors font-sans">
              Book a Call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </>
  )
}
