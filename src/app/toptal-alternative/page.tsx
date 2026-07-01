import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ArrowRight, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Toptal Alternative | Kovil AI vs Toptal | Managed AI Engineering',
  description: 'Looking for a Toptal alternative for AI engineering? Kovil AI offers an Engagement Manager, milestone-gated delivery, 48-hour matching, and a 2-week trial with no $500 deposit required.',
  keywords: ['Toptal alternative', 'Toptal vs Kovil AI', 'alternative to Toptal', 'Toptal competitor', 'managed AI engineering alternative to Toptal'],
  openGraph: { title: 'Toptal Alternative | Kovil AI', description: 'Managed AI engineering without the marketplace risk. No $500 deposit. Engagement Manager included on every engagement.', url: 'https://kovil.ai/toptal-alternative', siteName: 'Kovil AI', type: 'website', images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Toptal Alternative | Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'Toptal Alternative | Kovil AI', description: 'Why product teams choose Kovil AI over Toptal for AI engineering.' },
  alternates: { canonical: 'https://kovil.ai/toptal-alternative' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm headquartered in Garden City, NY.', contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'Toptal Alternative', item: 'https://kovil.ai/toptal-alternative' }] }

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to start an AI engineering engagement with Kovil AI',
  description: 'Kovil AI matches, onboards, and delivers AI engineering engagements in four steps — no deposit, no self-managing engineers.',
  step: [
    { '@type': 'HowToStep', position: 1, name: '30-minute scope call', text: 'You describe the project, timeline, and technical requirements. We map the right engineer profile and confirm whether staff augmentation or a fixed-price project is the better fit.' },
    { '@type': 'HowToStep', position: 2, name: 'Match in 48 hours', text: 'We present one matched AI engineer — not a shortlist of profiles to browse. The match is based on domain fit from 150+ real AI deployments, not a timed coding screen.' },
    { '@type': 'HowToStep', position: 3, name: '2-week risk-free trial', text: 'The engagement starts immediately. No deposit required. After two weeks, if it is not the right fit, you pay nothing and we find a replacement or part ways — your choice.' },
    { '@type': 'HowToStep', position: 4, name: 'Milestone-gated delivery with an Engagement Manager', text: 'Your Engagement Manager owns delivery oversight. You approve each milestone before work proceeds to the next phase. No runaway scope, no missed handoffs.' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Why consider a Toptal alternative?', acceptedAnswer: { '@type': 'Answer', text: 'Toptal is a freelance marketplace — you browse profiles, conduct your own interviews, and manage the engineer entirely yourself. For general software engineering roles with strong in-house management, that model works. For AI engineering specifically, it creates two problems: Toptal\'s vetting is broad ("top 3%"), not AI-domain-specific, and there is no delivery oversight once the engagement starts. Teams building production AI systems often need more than a vetted freelancer — they need managed delivery with milestone accountability.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from Toptal?', acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI is a managed AI engineering firm, not a marketplace. The structural differences are: every engagement includes an Engagement Manager who owns communication and delivery; engineers are vetted through 150+ real AI deployments, not a general screening process; matching takes 48 hours and requires no deposit; and fixed-price project delivery is available alongside staff augmentation. Toptal does not include delivery management, requires a $500 deposit to start, and is staff augmentation only.' } },
    { '@type': 'Question', name: 'Does Kovil AI require a deposit like Toptal?', acceptedAnswer: { '@type': 'Answer', text: 'No. Kovil AI has no deposit requirement. Toptal requires a $500 deposit before you can begin browsing candidates. Kovil AI\'s 2-week trial starts with no upfront payment — if it is not the right fit after the trial, you pay nothing.' } },
    { '@type': 'Question', name: 'What is an Engagement Manager and why does it matter?', acceptedAnswer: { '@type': 'Answer', text: 'An Engagement Manager is your single point of contact for the duration of the engagement. They own milestone tracking, communication between your team and the engineer, scope management, and escalation when something goes off track. Toptal has no equivalent — once the engineer is matched, delivery is entirely your responsibility. For AI projects where requirements evolve and integration complexity is high, having a dedicated manager significantly reduces the chance of a failed delivery.' } },
    { '@type': 'Question', name: 'How quickly can Kovil AI match me with an AI engineer?', acceptedAnswer: { '@type': 'Answer', text: '48 hours from scope call to match. Toptal\'s matching typically takes 1 to 2 weeks, plus the time you spend reviewing profiles and conducting your own interviews. Kovil AI presents one pre-vetted match — you either agree or we refine the profile. Most engagements are live within a week of the initial call.' } },
    { '@type': 'Question', name: 'Can Kovil AI do fixed-price project delivery?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Kovil AI offers both AI Engineer Augmentation (staff aug model) and Outcome-Based AI Projects (fixed-price, milestone-gated delivery). Toptal is a staff augmentation marketplace only. Fixed-price delivery means Kovil AI scopes, prices, and owns delivery of the entire project — you pay for outcomes, not hours logged.' } },
    { '@type': 'Question', name: 'What happens if the engineer is not the right fit?', acceptedAnswer: { '@type': 'Answer', text: 'During the 2-week trial, if the engagement is not working, you pay nothing and Kovil AI provides a free replacement or parts ways — your choice, zero termination fees. After the trial, if performance issues arise, the Engagement Manager resolves them directly. A free replacement is available at any point. Toptal\'s trial is a 14-day payment-back guarantee — you still manage the process yourself.' } },
    { '@type': 'Question', name: 'Who owns the code and IP built during the engagement?', acceptedAnswer: { '@type': 'Answer', text: 'You own 100% of everything built — all code, models, data pipelines, and IP. Kovil AI retains no rights to any project output. This is true for both staff augmentation and fixed-price project engagements. Toptal\'s IP terms depend on the individual freelancer contract.' } },
    { '@type': 'Question', name: 'When might Toptal be a better choice than Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Toptal may be a better fit if you have strong in-house engineering management and prefer to run your own interview process, if the role you are hiring for is a general software engineering position rather than AI-specific, or if you want to browse a large pool of pre-vetted candidates before committing. Kovil AI is purpose-built for AI engineering with managed delivery — if your engagement does not require that, a general marketplace may give you more optionality.' } },
  ],
}

const comparisonRows = [
  { label: 'Model', toptal: 'Freelance marketplace — self-managed', kovil: 'Managed firm — EM-led delivery' },
  { label: 'AI specialization', toptal: 'General engineers, broad "top 3%" vetting', kovil: 'AI-specific, 150+ deployment-vetted' },
  { label: 'Time to match', toptal: '1–2 weeks + your interview time', kovil: '48 hours, one presented match' },
  { label: 'Deposit required', toptal: '$500 upfront to start browsing', kovil: 'None — trial starts immediately' },
  { label: 'Trial period', toptal: '14-day payment-back guarantee', kovil: '2-week risk-free, keep all work done' },
  { label: 'Engagement Manager', toptal: 'Not included — you manage delivery', kovil: 'Included on every engagement' },
  { label: 'Milestone delivery', toptal: 'No milestone structure — hourly billing', kovil: 'Milestone-gated, you approve each phase' },
  { label: 'Fixed-price projects', toptal: 'Not available — staff aug only', kovil: 'Available alongside staff aug' },
  { label: 'Minimum commitment', toptal: 'Typically monthly, varies by engineer', kovil: 'No minimum, no lock-in' },
  { label: 'IP ownership', toptal: 'Depends on freelancer contract', kovil: 'Client owns 100% — always' },
]

const painPoints = [
  { title: 'You manage the engineer entirely yourself', body: 'Toptal\'s model ends at matching. Once you have a contractor, all delivery management — sprint planning, code review oversight, scope negotiation, performance management — is on your team. For companies with a seasoned CTO and a mature engineering process, this is fine. For product teams building their first AI system or for engineering managers already stretched thin, it adds significant overhead to an already complex project.' },
  { title: 'Vetting is broad, not AI-domain-specific', body: 'Toptal\'s "top 3%" claim covers a wide range of software engineering disciplines. An engineer who passes their screening is a strong generalist. But AI engineering — RAG pipelines, LLM fine-tuning, agent frameworks, embedding models, production MLOps — requires domain-specific judgment that a general screening process does not reliably surface. Teams building AI systems report mismatches: engineers who are strong on paper but lack the applied AI deployment experience the project requires.' },
  { title: 'The $500 deposit creates friction before you know if it works', body: 'Before you can browse Toptal\'s network, a $500 deposit is required. It is refundable, but it represents a financial and psychological commitment before any vetting or matching has happened on your specific project. Kovil AI\'s model inverts this: the trial starts, you see quality of work and collaboration, and then you decide whether to continue. Zero financial risk at the point of maximum uncertainty.' },
  { title: 'No delivery accountability after the match', body: 'If an engagement goes off track on Toptal — missed milestones, scope creep, communication breakdowns — there is no Toptal-side point of escalation. The relationship is between you and the contractor. Kovil AI\'s Engagement Manager is accountable to both sides: they surface issues early, manage expectations, and own resolution. For AI projects where requirements evolve and integration complexity is high, this difference is material.' },
]

const personas = [
  { title: 'Product teams without a dedicated engineering manager', body: 'If your product team is working directly with an AI engineer without a technical lead to manage the engagement day-to-day, a marketplace model puts the management burden on people who are already context-switching. Kovil AI\'s Engagement Manager absorbs that overhead.' },
  { title: 'Companies building AI systems for the first time', body: 'First AI projects carry the highest risk of scope ambiguity and requirement drift. Milestone-gated delivery forces clarity at each phase before the next begins. Teams that have tried marketplace models on their first AI build often describe the experience as expensive and slow — not because the engineers were bad, but because there was no structure.' },
  { title: 'Teams that need a fixed-price outcome, not a time-and-materials engagement', body: 'If you need to ship a specific AI system by a specific date for a specific budget, staff augmentation creates unpredictability. Kovil AI\'s fixed-price project model scopes and prices the entire delivery upfront. You know what you are getting and when.' },
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
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">Toptal Alternative</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Toptal Alternative — Managed AI Engineering, Engagement Manager Included, No Deposit
              </h1>
              <p className="text-[#A09A91] text-lg md:text-xl leading-relaxed mb-10 font-sans">
                Toptal is a freelance marketplace. You pay $500 to browse profiles, run your own interviews, and manage delivery entirely yourself. Kovil AI is a managed AI engineering firm — we match you in 48 hours, assign an Engagement Manager, and start your 2-week trial with no deposit and no lock-in.
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

        {/* Why teams look for a Toptal alternative */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">Why teams look for a Toptal alternative</h2>
            <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-12 max-w-3xl">
              Toptal built a strong reputation as a freelance marketplace for senior software engineers. For certain hiring needs, it delivers. But for AI engineering specifically — where domain expertise, delivery structure, and managed accountability matter — several structural gaps emerge.
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
              alt="AI development lifecycle managed by Kovil AI — from scoping through deployment, as an alternative to the self-managed Toptal marketplace model"
              width={1200}
              height={630}
              className="rounded-2xl w-full"
            />
            <p className="text-[#6B7280] font-sans text-sm mt-4 text-center">Kovil AI manages the full AI engineering lifecycle — scoping, matching, delivery, and beyond — so you do not have to.</p>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">Kovil AI vs Toptal — full comparison</h2>
            <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-10 max-w-3xl">
              Side by side across the dimensions that matter most for AI engineering engagements.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border border-[#E5E2D9] rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-[#0A0A0A]">
                    <th className="p-4 text-left text-sm font-semibold text-[#A09A91] font-sans w-1/3"></th>
                    <th className="p-4 text-left text-sm font-semibold text-[#A09A91] font-sans">Toptal</th>
                    <th className="p-4 text-left text-sm font-semibold text-[#FF4F00] font-sans">Kovil AI</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F4]'}>
                      <td className="p-4 text-sm font-semibold text-[#0A0A0A] font-sans border-t border-[#E5E2D9]">{row.label}</td>
                      <td className="p-4 text-sm text-[#6B7280] font-sans border-t border-[#E5E2D9]">{row.toptal}</td>
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">How Kovil AI engages — vs the Toptal process</h2>
            <p className="text-[#A09A91] font-sans text-lg leading-relaxed mb-12 max-w-3xl">
              The marketplace model puts most of the work on you. Kovil AI inverts that — we own matching, onboarding, and delivery structure from day one.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="p-8 rounded-2xl border border-[#1E1E1E] bg-[#111111]">
                <p className="text-[#A09A91] text-xs font-semibold uppercase tracking-widest mb-6 font-sans">Toptal process</p>
                <div className="space-y-4">
                  {[
                    'Pay $500 deposit to unlock candidate browsing',
                    'Review profiles and shortlist candidates yourself',
                    'Schedule and conduct your own technical interviews',
                    'Negotiate rate and contract terms with the contractor',
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">Who switches from Toptal to Kovil AI</h2>
            <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-12 max-w-3xl">
              The switch is not about dissatisfaction with Toptal engineers — it is usually about the model. These are the three scenarios we see most.
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
        <section className="py-20 bg-[#FAF8F4]">
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
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mb-8">Explore further</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: 'AI Engineer Augmentation', sub: 'Our staff aug service', href: '/engage/managed-ai-engineer' },
                { label: 'Outcome-Based AI Projects', sub: 'Fixed-price delivery', href: '/engage/outcome-based-project' },
                { label: 'How It Works', sub: 'Our engagement process', href: '/how-it-works' },
                { label: 'Turing Alternative', sub: 'vs AI-matched marketplace', href: '/turing-alternative' },
                { label: 'Andela Alternative', sub: 'vs Africa-focused marketplace', href: '/andela-alternative' },
                { label: 'Upwork Alternative', sub: 'vs freelancer marketplace', href: '/upwork-alternative' },
              ].map(r => (
                <Link key={r.href} href={r.href} className="flex flex-col p-5 rounded-2xl border border-[#E5E2D9] bg-[#FAF8F4] hover:border-[#FF4F00] transition-colors group">
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
            <p className="text-white/80 text-lg font-sans mb-10 max-w-xl mx-auto">No deposit. No lock-in. Engagement Manager included from day one. Matched in 48 hours.</p>
            <Link href="/book-a-call" className="inline-flex items-center justify-center gap-2 bg-white text-[#FF4F00] font-bold px-8 py-4 rounded-full hover:bg-[#FAF8F4] transition-colors font-sans">
              Book a Call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </>
  )
}
