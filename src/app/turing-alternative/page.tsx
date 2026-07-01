import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ArrowRight, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Turing Alternative | Kovil AI vs Turing | Managed AI Engineering',
  description: 'Looking for a Turing alternative? Kovil AI offers managed AI engineering with a human Engagement Manager, milestone-gated delivery, 48-hour matching, and a 2-week risk-free trial — no algorithm-matched contractors.',
  keywords: ['Turing alternative', 'Turing vs Kovil AI', 'alternative to Turing', 'Turing.com competitor', 'managed AI engineering alternative to Turing'],
  openGraph: { title: 'Turing Alternative | Kovil AI', description: 'Managed AI engineering without the algorithm-matched marketplace model. Engagement Manager included on every engagement.', url: 'https://kovil.ai/turing-alternative', siteName: 'Kovil AI', type: 'website', images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Turing Alternative | Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'Turing Alternative | Kovil AI', description: 'Why product teams choose Kovil AI over Turing for AI engineering.' },
  alternates: { canonical: 'https://kovil.ai/turing-alternative' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm headquartered in Garden City, NY.', contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'Turing Alternative', item: 'https://kovil.ai/turing-alternative' }] }

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to start an AI engineering engagement with Kovil AI',
  description: 'Kovil AI matches, onboards, and delivers AI engineering engagements in four steps — no algorithm, no self-managing engineers.',
  step: [
    { '@type': 'HowToStep', position: 1, name: '30-minute scope call', text: 'You describe the project, timeline, and technical requirements. A human reviews your brief and maps the right engineer profile.' },
    { '@type': 'HowToStep', position: 2, name: 'Human-matched in 48 hours', text: 'A senior Kovil AI team member presents one matched AI engineer based on real project-track-record fit, not an algorithm score.' },
    { '@type': 'HowToStep', position: 3, name: '2-week risk-free trial', text: 'The engagement starts immediately. No deposit required. After two weeks, if it is not the right fit, you pay nothing and we provide a free replacement.' },
    { '@type': 'HowToStep', position: 4, name: 'Milestone-gated delivery with an Engagement Manager', text: 'Your Engagement Manager owns delivery oversight. You approve each milestone before work proceeds. No runaway scope.' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Why consider a Turing alternative?', acceptedAnswer: { '@type': 'Answer', text: 'Turing is an AI-powered marketplace — they use an algorithm to match engineers to job briefs and automate the vetting process through coding tests. For general software engineering at scale, this model works. For AI engineering specifically, domain expertise matters more than algorithm scores. Turing\'s vetting does not capture real-world deployment experience — it captures test performance. Teams building production AI systems often find algorithm-matched engineers lack the applied AI depth the project requires.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from Turing?', acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI is a managed AI engineering firm, not a marketplace. Every engagement is matched by a human who understands the project brief and the engineer\'s real deployment history — not an algorithm. Every engagement includes an Engagement Manager who owns delivery oversight. Engineers are vetted through 150+ real AI deployments. And fixed-price project delivery is available alongside staff augmentation, which Turing does not offer.' } },
    { '@type': 'Question', name: 'What is an Engagement Manager and why does it matter?', acceptedAnswer: { '@type': 'Answer', text: 'An Engagement Manager is your single point of contact for the duration of the project. They own milestone tracking, scope management, communication, and escalation. Turing has no equivalent — once the algorithm matches you with a contractor, delivery is entirely your responsibility. For AI projects where requirements evolve and integration complexity is high, having a dedicated manager reduces the chance of a failed delivery.' } },
    { '@type': 'Question', name: 'How quickly can Kovil AI match me with an AI engineer?', acceptedAnswer: { '@type': 'Answer', text: '48 hours from scope call to match. Turing claims similar matching speed using their algorithm, but the quality of a human-reviewed match — based on project-track-record fit — is meaningfully different from an algorithm score. Kovil AI presents one pre-vetted engineer. You either agree or we refine the profile.' } },
    { '@type': 'Question', name: 'Does Kovil AI offer a trial period?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — a 2-week risk-free trial with no deposit required. If it is not the right fit after the trial, you pay nothing and Kovil AI provides a free replacement or parts ways, zero termination fees. Turing offers a limited trial period, but without managed delivery oversight during that period.' } },
    { '@type': 'Question', name: 'Can Kovil AI do fixed-price project delivery?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Kovil AI offers both AI Engineer Augmentation and Outcome-Based AI Projects — a fixed-price, milestone-gated delivery model where we scope, price, and own delivery of the entire project. Turing is staff augmentation only. Fixed-price delivery means you pay for outcomes, not hours.' } },
    { '@type': 'Question', name: 'How are Kovil AI engineers vetted compared to Turing?', acceptedAnswer: { '@type': 'Answer', text: 'Turing vets engineers through automated coding assessments and algorithm-based screening. Kovil AI engineers are vetted through real project outcomes — 150+ AI deployments across legal tech, fintech, healthcare, retail, and logistics. Domain experience in production AI systems is the benchmark, not test scores.' } },
    { '@type': 'Question', name: 'Who owns the code and IP built during the engagement?', acceptedAnswer: { '@type': 'Answer', text: 'You own 100% of everything built — all code, models, data pipelines, and IP. Kovil AI retains no rights to any project output. This applies to both staff augmentation and fixed-price engagements.' } },
    { '@type': 'Question', name: 'What happens if the engineer is not the right fit?', acceptedAnswer: { '@type': 'Answer', text: 'During the 2-week trial, if the engagement is not working, you pay nothing and Kovil AI provides a free replacement or parts ways — your choice, zero termination fees. After the trial, if performance issues arise, the Engagement Manager resolves them directly. A free replacement is available at any point in the engagement.' } },
  ],
}

const comparisonRows = [
  { label: 'Model', turing: 'Algorithm-matched marketplace', kovil: 'Managed firm — human-matched' },
  { label: 'AI specialization', turing: 'General engineers, test-based vetting', kovil: 'AI-specific, 150+ deployment-vetted' },
  { label: 'Matching method', turing: 'AI algorithm scores candidates', kovil: 'Human review of project-track-record fit' },
  { label: 'Time to match', turing: '3–4 days, algorithm-driven', kovil: '48 hours, human-reviewed' },
  { label: 'Deposit required', turing: 'None', kovil: 'None — trial starts immediately' },
  { label: 'Trial period', turing: 'Limited trial depending on plan', kovil: '2-week risk-free, keep all work done' },
  { label: 'Engagement Manager', turing: 'Not included — you manage delivery', kovil: 'Included on every engagement' },
  { label: 'Milestone delivery', turing: 'No milestone structure — time and materials', kovil: 'Milestone-gated, you approve each phase' },
  { label: 'Fixed-price projects', turing: 'Not available — staff aug only', kovil: 'Available alongside staff aug' },
  { label: 'IP ownership', turing: 'Client owns — standard contractor terms', kovil: 'Client owns 100% — always' },
]

const painPoints = [
  { title: 'Algorithm matching is not domain expertise matching', body: 'Turing\'s platform uses an AI algorithm to match engineers to job briefs based on skill tags, test scores, and profile data. This works for general software engineering roles where requirements are well-defined. For AI engineering — RAG pipelines, LLM fine-tuning, agent frameworks, production MLOps — the mismatch risk is high. An engineer who scores well on a coding assessment may have never shipped a production AI system. Kovil AI matches on project-track-record, not algorithm scores.' },
  { title: 'No delivery management after the match', body: 'Turing\'s model stops at matching. Once you have a contractor, all delivery management — sprint planning, scope negotiation, code review oversight, performance management — is on you. For product teams building AI systems without a dedicated technical lead, this is a significant overhead. Kovil AI\'s Engagement Manager is accountable to the project from day one: they own milestones, escalation, and communication throughout.' },
  { title: 'Test-based vetting does not capture applied AI depth', body: 'Turing\'s automated vetting screens for coding fundamentals and language proficiency. These are necessary conditions for a good engineer, but not sufficient for applied AI work. Building a production RAG system, fine-tuning an LLM, or architecting a multi-agent workflow requires judgment that comes from doing it in production, not from passing a timed test. Kovil AI\'s 150+ deployment history is the vetting bar.' },
  { title: 'Time and materials billing with no outcome accountability', body: 'Turing is a time-and-materials marketplace. Hours are billed, outcomes are not guaranteed. If the project takes twice as long as estimated, the cost doubles and the accountability rests with you. Kovil AI\'s Engagement Manager actively manages scope and timeline. For teams that need a defined outcome by a defined date, fixed-price delivery is also available — a model Turing does not offer.' },
]

const personas = [
  { title: 'Teams who got a strong test-passer but a weak AI deployer', body: 'Algorithm-matched engineers often pass technical screens but lack the applied intuition that comes from building production AI systems. Teams that found this gap on Turing engagements switch to Kovil AI for project-track-record vetting.' },
  { title: 'Product managers who cannot afford to manage delivery themselves', body: 'If your PM is running the engagement without a technical lead, a marketplace model puts delivery management on someone who is already context-switching across product, design, and stakeholder work. Kovil AI\'s Engagement Manager absorbs that overhead.' },
  { title: 'Companies that need a fixed outcome, not an open-ended engagement', body: 'Turing\'s time-and-materials model creates cost and timeline unpredictability. Kovil AI\'s fixed-price project delivery scopes and prices the outcome upfront. You know what you are getting and when.' },
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
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">Turing Alternative</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Turing Alternative — Human-Matched AI Engineering, Engagement Manager Included
              </h1>
              <p className="text-[#A09A91] text-lg md:text-xl leading-relaxed mb-10 font-sans">
                Turing uses an algorithm to match engineers and automated tests to vet them. Kovil AI uses human judgment — matching on real deployment history, assigning an Engagement Manager, and starting your 2-week trial with no deposit and no lock-in.
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
              <span>Human-Matched in 48 Hours</span>
              <span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>No Deposit. No Lock-in.</span>
              <span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>Engagement Manager on Every Engagement</span>
            </div>
          </div>
        </section>

        {/* Why teams look for a Turing alternative */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">Why teams look for a Turing alternative</h2>
            <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-12 max-w-3xl">
              Turing built a strong platform for algorithmic talent matching at scale. For general engineering roles, the model delivers. For AI engineering specifically, where domain depth, delivery structure, and managed accountability matter, the gaps become visible quickly.
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
              alt="AI development lifecycle managed by Kovil AI — structured delivery from scoping to deployment, as an alternative to the algorithm-matched Turing marketplace"
              width={1200}
              height={630}
              className="rounded-2xl w-full"
            />
            <p className="text-[#6B7280] font-sans text-sm mt-4 text-center">Kovil AI manages the full AI engineering lifecycle — human-matched, Engagement Manager-led, milestone-gated from start to finish.</p>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">Kovil AI vs Turing — full comparison</h2>
            <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-10 max-w-3xl">
              Side by side across the dimensions that matter most for AI engineering engagements.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border border-[#E5E2D9] rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-[#0A0A0A]">
                    <th className="p-4 text-left text-sm font-semibold text-[#A09A91] font-sans w-1/3"></th>
                    <th className="p-4 text-left text-sm font-semibold text-[#A09A91] font-sans">Turing</th>
                    <th className="p-4 text-left text-sm font-semibold text-[#FF4F00] font-sans">Kovil AI</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F4]'}>
                      <td className="p-4 text-sm font-semibold text-[#0A0A0A] font-sans border-t border-[#E5E2D9]">{row.label}</td>
                      <td className="p-4 text-sm text-[#6B7280] font-sans border-t border-[#E5E2D9]">{row.turing}</td>
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">How Kovil AI engages — vs the Turing process</h2>
            <p className="text-[#A09A91] font-sans text-lg leading-relaxed mb-12 max-w-3xl">
              The algorithm model puts matching speed first. Kovil AI puts match quality and delivery accountability first.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl border border-[#1E1E1E] bg-[#111111]">
                <p className="text-[#A09A91] text-xs font-semibold uppercase tracking-widest mb-6 font-sans">Turing process</p>
                <div className="space-y-4">
                  {[
                    'Submit job brief to the platform',
                    'Algorithm scores and filters candidates automatically',
                    'Review algorithm-ranked profiles',
                    'Conduct your own interviews and evaluation',
                    'Onboard and manage the contractor directly',
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
                    'Human reviewer maps brief to real deployment history',
                    'One pre-vetted AI engineer presented in 48 hours',
                    '2-week trial begins immediately — keep all work done',
                    'Engagement Manager assigned from day one',
                    'EM owns milestones, escalation, and communication',
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">Who switches from Turing to Kovil AI</h2>
            <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-12 max-w-3xl">
              The switch is usually about the gap between algorithm-matched quality and real AI deployment experience, combined with the management overhead of running an unmanaged engagement.
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
                { label: 'Andela Alternative', sub: 'vs Africa-focused marketplace', href: '/andela-alternative' },
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
            <p className="text-white/80 text-lg font-sans mb-10 max-w-xl mx-auto">No algorithm. No deposit. Human-matched in 48 hours. Engagement Manager included from day one.</p>
            <Link href="/book-a-call" className="inline-flex items-center justify-center gap-2 bg-white text-[#FF4F00] font-bold px-8 py-4 rounded-full hover:bg-[#FAF8F4] transition-colors font-sans">
              Book a Call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </>
  )
}
