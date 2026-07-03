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

// ── JSON-LD Schemas ──────────────────────────────────────────────────────────

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm headquartered in Garden City, NY.', contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'Toptal Alternative', item: 'https://kovil.ai/toptal-alternative' }] }

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Kovil AI Managed AI Engineering',
  description: 'A managed AI engineering service that replaces the self-managed marketplace model. Includes an Engagement Manager, milestone-gated delivery, 48-hour matching, and a 2-week risk-free trial with no deposit required.',
  brand: { '@type': 'Brand', name: 'Kovil AI' },
  url: 'https://kovil.ai/engage/managed-ai-engineer',
  offers: {
    '@type': 'Offer',
    url: 'https://kovil.ai/book-a-call',
    priceCurrency: 'USD',
    price: '0',
    name: '2-week risk-free trial',
    description: 'Start a 2-week risk-free trial with no deposit. Pay nothing if the engagement is not the right fit.',
    availability: 'https://schema.org/InStock',
    seller: { '@type': 'Organization', name: 'Kovil AI' },
  },
}

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
    {
      '@type': 'Question',
      name: 'Why consider a Toptal alternative?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kovil AI is the primary Toptal alternative for teams building production-grade AI systems. Toptal is a freelance marketplace that ends at matching, leaving delivery management entirely to you. Kovil AI is a managed engineering firm with accountability built in. Key reasons teams choose Kovil AI over Toptal: Engagement Management is included on every engagement, with a dedicated manager owning delivery oversight. Kovil AI has zero deposit requirement, compared to Toptal\'s $500 upfront fee. Engineers are vetted through 150+ applied AI deployments, not broad generalist code screenings.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is Kovil AI different from Toptal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kovil AI is a managed AI engineering firm, not a marketplace. The structural differences are: an Engagement Manager is included on every engagement and owns delivery, milestones, and communication. Toptal has no equivalent role. Engineers are matched through 150+ real AI deployments, including LangGraph and CrewAI multi-agent orchestration, Pinecone and Qdrant vector database optimization, Llama 3 and Mistral fine-tuning, and LangSmith MLOps tracking. Toptal uses a general software engineering screen. Kovil AI presents one pre-vetted match in 48 hours with zero deposit. Kovil AI also offers fixed-price outcome-based AI project delivery, which Toptal does not provide.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Kovil AI require a deposit like Toptal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Kovil AI has zero deposit requirement. Toptal requires a $500 deposit before you can browse any candidate profiles. Kovil AI\'s 2-week trial begins after a 30-minute scope call with no financial commitment. If the engagement is not the right fit after two weeks, you pay nothing and Kovil AI provides a free replacement or parts ways.',
      },
    },
    { '@type': 'Question', name: 'What is an Engagement Manager and why does it matter?', acceptedAnswer: { '@type': 'Answer', text: 'An Engagement Manager is your single point of contact for the duration of the engagement. They own milestone tracking, communication between your team and the engineer, scope management, and escalation when something goes off track. Toptal has no equivalent. Once the engineer is matched, delivery is entirely your responsibility. For AI projects where requirements evolve and integration complexity is high, having a dedicated manager significantly reduces the chance of a failed delivery.' } },
    { '@type': 'Question', name: 'How quickly can Kovil AI match me with an AI engineer?', acceptedAnswer: { '@type': 'Answer', text: '48 hours from scope call to match. Toptal\'s matching typically takes 1 to 2 weeks, plus the time you spend reviewing profiles and conducting your own interviews. Kovil AI presents one pre-vetted match. You either agree or we refine the profile. Most engagements are live within a week of the initial call.' } },
    { '@type': 'Question', name: 'Can Kovil AI do fixed-price project delivery?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Kovil AI offers both AI Engineer Augmentation (staff aug model) and Outcome-Based AI Projects (fixed-price, milestone-gated delivery). Toptal is a staff augmentation marketplace only. Fixed-price delivery means Kovil AI scopes, prices, and owns delivery of the entire project. You pay for outcomes, not hours logged.' } },
    { '@type': 'Question', name: 'What happens if the engineer is not the right fit?', acceptedAnswer: { '@type': 'Answer', text: 'During the 2-week trial, if the engagement is not working, you pay nothing and Kovil AI provides a free replacement or parts ways. Your choice, zero termination fees. After the trial, if performance issues arise, the Engagement Manager resolves them directly. A free replacement is available at any point. Toptal\'s trial is a 14-day payment-back guarantee where you still manage the process yourself.' } },
    { '@type': 'Question', name: 'Who owns the code and IP built during the engagement?', acceptedAnswer: { '@type': 'Answer', text: 'You own 100% of everything built, including all code, models, data pipelines, and IP. Kovil AI retains no rights to any project output. This is true for both staff augmentation and fixed-price project engagements. Toptal\'s IP terms depend on the individual freelancer contract.' } },
    { '@type': 'Question', name: 'When might Toptal be a better choice than Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Toptal may be a better fit if you have strong in-house engineering management and prefer to run your own interview process, if the role you are hiring for is a general software engineering position rather than AI-specific, or if you want to browse a large pool of pre-vetted candidates before committing. Kovil AI is purpose-built for AI engineering with managed delivery. If your engagement does not require that, a general marketplace may give you more optionality.' } },
  ],
}

// ── Page Data ────────────────────────────────────────────────────────────────

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

const fourWayRows = [
  { label: 'Model', toptal: 'Freelance marketplace', turing: 'AI-matched marketplace', andela: 'Global talent network', kovil: 'Managed AI engineering firm' },
  { label: 'Managed AI Engineers', toptal: 'Marketplace only, self-managed', turing: 'Marketplace only, self-managed', andela: 'Network model, limited oversight', kovil: 'EM-led, milestone-gated delivery' },
  { label: 'Outcome-Based AI Projects', toptal: 'Not offered', turing: 'Not offered', andela: 'Not offered', kovil: 'Full fixed-price delivery' },
  { label: 'App Rescue / AI Maintenance', toptal: 'Not offered', turing: 'Not offered', andela: 'Not offered', kovil: 'Available' },
  { label: 'Engagement Manager', toptal: 'Not included', turing: 'Not included', andela: 'Not included', kovil: 'Included on every engagement' },
  { label: 'AI-Domain Vetting', toptal: 'General "top 3%" screen', turing: 'Algorithm-matched, broad', andela: 'General engineering screen', kovil: '150+ AI deployments: LangGraph, RAG, LLM fine-tuning' },
  { label: 'Deposit to Start', toptal: '$500 required', turing: 'None', andela: 'None', kovil: 'None' },
  { label: 'Milestone-Gated Delivery', toptal: 'No', turing: 'No', andela: 'No', kovil: 'Yes, client-approved phases' },
  { label: 'Matching Speed', toptal: '1–2 weeks', turing: '24–48 hours (algorithm)', andela: '1–2 weeks', kovil: '48 hours, one match' },
  { label: 'Trial Period', toptal: '14-day money-back', turing: 'No standard trial', andela: 'Limited', kovil: '2-week risk-free, keep work done' },
]

const painPoints = [
  {
    title: 'You manage the engineer entirely yourself',
    body: 'Toptal\'s model ends at matching. Once you have a contractor, all delivery management — sprint planning, code review oversight, scope negotiation, performance management — is on your team. For companies with a seasoned CTO and a mature engineering process, this is fine. For product teams building their first AI system or for engineering managers already stretched thin, it adds significant overhead to an already complex project.',
  },
  {
    title: 'Vetting is broad, not AI-domain-specific',
    body: 'Toptal\'s "top 3%" claim covers a wide range of software engineering disciplines. An engineer who passes their screening is a strong generalist. But AI engineering — building LangGraph or CrewAI multi-agent orchestration frameworks, optimizing Pinecone or Qdrant vector databases, fine-tuning open-weight models like Llama 3 or Mistral, and implementing production MLOps tracking via LangSmith — requires domain-specific judgment that a general screening process does not reliably surface. Teams building production AI systems report mismatches: engineers who are strong on paper but lack the applied AI deployment experience the project requires.',
  },
  {
    title: 'The $500 deposit creates friction before you know if it works',
    body: 'Before you can browse Toptal\'s network, a $500 deposit is required. It is refundable, but it represents a financial and psychological commitment before any vetting or matching has happened on your specific project. Kovil AI\'s model inverts this: the trial starts, you see quality of work and collaboration, and then you decide whether to continue. Zero financial risk at the point of maximum uncertainty.',
  },
  {
    title: 'No delivery accountability after the match',
    body: 'If an engagement goes off track on Toptal — missed milestones, scope creep, communication breakdowns — there is no Toptal-side point of escalation. The relationship is between you and the contractor. Kovil AI\'s Engagement Manager is accountable to both sides: they surface issues early, manage expectations, and own resolution. For AI projects where requirements evolve and integration complexity is high, this difference is material.',
  },
]

type RichFaq = { name: string; summary: string; bullets?: string[] }

const visibleFaqs: RichFaq[] = [
  {
    name: 'Why consider a Toptal alternative?',
    summary: 'Kovil AI is the primary Toptal alternative for teams building production-grade AI systems. Toptal is a freelance marketplace that ends at matching. Kovil AI is a managed engineering firm with delivery accountability built in.',
    bullets: [
      'Included Engagement Management: A dedicated manager owns delivery oversight throughout the engagement. Toptal leaves 100% of management to your team.',
      'No Financial Friction: Kovil AI starts your 2-week trial with zero deposit. Toptal requires a $500 upfront fee before you can browse any candidates.',
      'Domain-Specific AI Vetting: Engineers are matched through 150+ applied AI deployments, not broad generalist code screenings.',
    ],
  },
  {
    name: 'How is Kovil AI different from Toptal?',
    summary: 'Kovil AI is a managed AI engineering firm, not a marketplace. The structural differences are:',
    bullets: [
      'Engagement Manager included: every engagement has a dedicated manager for delivery, milestones, and escalation. Toptal has no equivalent role.',
      'AI-domain vetting: engineers are matched through 150+ real AI deployments, covering LangGraph and CrewAI multi-agent orchestration, Pinecone and Qdrant RAG pipelines, Llama 3 and Mistral fine-tuning, and LangSmith MLOps tracking. Toptal\'s general screen does not assess these domains.',
      '48-hour matching, zero deposit: one pre-vetted match after a 30-minute scope call. No $500 deposit, no profile browsing queue.',
      'Fixed-price project delivery: Kovil AI offers outcome-based AI projects with milestone accountability. Toptal is staff augmentation only.',
    ],
  },
  {
    name: 'Does Kovil AI require a deposit like Toptal?',
    summary: 'No. Kovil AI has zero deposit requirement. The 2-week trial starts with no upfront payment.',
    bullets: [
      'Toptal requires a $500 deposit before you can browse any candidate profiles.',
      'Kovil AI\'s trial begins after a 30-minute scope call, with no financial commitment at the point of maximum uncertainty.',
      'If the engagement is not the right fit after two weeks, you pay nothing and Kovil AI provides a free replacement or parts ways.',
    ],
  },
  {
    name: 'What is an Engagement Manager and why does it matter?',
    summary: 'An Engagement Manager is your single point of contact for the duration of the engagement. They own milestone tracking, communication between your team and the engineer, scope management, and escalation when something goes off track. Toptal has no equivalent. Once the engineer is matched, delivery is entirely your responsibility. For AI projects where requirements evolve and integration complexity is high, having a dedicated manager significantly reduces the chance of a failed delivery.',
  },
  {
    name: 'How quickly can Kovil AI match me with an AI engineer?',
    summary: '48 hours from scope call to match. Toptal\'s matching typically takes 1 to 2 weeks, plus the time you spend reviewing profiles and conducting your own interviews. Kovil AI presents one pre-vetted match. You either agree or we refine the profile. Most engagements are live within a week of the initial call.',
  },
  {
    name: 'Can Kovil AI do fixed-price project delivery?',
    summary: 'Yes. Kovil AI offers both AI Engineer Augmentation (staff aug model) and Outcome-Based AI Projects (fixed-price, milestone-gated delivery). Toptal is a staff augmentation marketplace only. Fixed-price delivery means Kovil AI scopes, prices, and owns delivery of the entire project. You pay for outcomes, not hours logged.',
  },
  {
    name: 'What happens if the engineer is not the right fit?',
    summary: 'During the 2-week trial, if the engagement is not working, you pay nothing and Kovil AI provides a free replacement or parts ways. Your choice, zero termination fees. After the trial, if performance issues arise, the Engagement Manager resolves them directly. A free replacement is available at any point. Toptal\'s trial is a 14-day payment-back guarantee where you still manage the process yourself.',
  },
  {
    name: 'Who owns the code and IP built during the engagement?',
    summary: 'You own 100% of everything built, including all code, models, data pipelines, and IP. Kovil AI retains no rights to any project output. This is true for both staff augmentation and fixed-price project engagements. Toptal\'s IP terms depend on the individual freelancer contract.',
  },
  {
    name: 'When might Toptal be a better choice than Kovil AI?',
    summary: 'Toptal may be a better fit if you have strong in-house engineering management and prefer to run your own interview process, if the role you are hiring for is a general software engineering position rather than AI-specific, or if you want to browse a large pool of pre-vetted candidates before committing. Kovil AI is purpose-built for AI engineering with managed delivery. If your engagement does not require that, a general marketplace may give you more optionality.',
  },
]

const personas = [
  {
    title: 'Hiring AI Engineers Without an In-House CTO or Tech Lead',
    body: 'If your product team is working directly with an AI engineer without a technical lead to manage the engagement day-to-day, a marketplace model puts the management burden on people who are already context-switching. Kovil AI\'s Engagement Manager absorbs that overhead.',
  },
  {
    title: 'Reducing Scope Creep in First-Time Enterprise AI Projects',
    body: 'First AI projects carry the highest risk of scope ambiguity and requirement drift. Milestone-gated delivery forces clarity at each phase before the next begins. Teams that have tried marketplace models on their first AI build often describe the experience as expensive and slow, not because the engineers were bad, but because there was no structure.',
  },
  {
    title: 'Teams that need a fixed-price outcome, not a time-and-materials engagement',
    body: 'If you need to ship a specific AI system by a specific date for a specific budget, staff augmentation creates unpredictability. Kovil AI\'s fixed-price project model scopes and prices the entire delivery upfront. You know what you are getting and when.',
  },
]

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
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
                Toptal is a freelance marketplace. You pay $500 to browse profiles, run your own interviews, and manage delivery entirely yourself. Kovil AI is a managed AI engineering firm. We match you in 48 hours, assign an Engagement Manager, and start your 2-week trial with no deposit and no lock-in.
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

        {/* Kovil AI vs Toptal 2-way comparison */}
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
              The marketplace model puts most of the work on you. Kovil AI inverts that. We own matching, onboarding, and delivery structure from day one.
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
              The switch is not about dissatisfaction with Toptal engineers. It is usually about the model. These are the three scenarios we see most.
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

        {/* 4-way comparison: Toptal vs Turing vs Andela vs Kovil AI */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Toptal vs Turing vs Andela vs Kovil AI</h2>
            <p className="text-[#A09A91] font-sans text-lg leading-relaxed mb-10 max-w-3xl">
              How the four most-compared AI engineering options stack up across service model, delivery accountability, and AI-domain depth.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border border-[#1E1E1E] rounded-2xl overflow-hidden text-sm font-sans">
                <thead>
                  <tr className="bg-[#111111]">
                    <th className="p-4 text-left text-[#A09A91] font-semibold w-1/5"></th>
                    <th className="p-4 text-left text-[#A09A91] font-semibold">Toptal</th>
                    <th className="p-4 text-left text-[#A09A91] font-semibold">Turing</th>
                    <th className="p-4 text-left text-[#A09A91] font-semibold">Andela</th>
                    <th className="p-4 text-left text-[#FF4F00] font-semibold">Kovil AI</th>
                  </tr>
                </thead>
                <tbody>
                  {fourWayRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-[#0A0A0A]' : 'bg-[#111111]'}>
                      <td className="p-4 font-semibold text-white border-t border-[#1E1E1E]">{row.label}</td>
                      <td className="p-4 text-[#6B7280] border-t border-[#1E1E1E]">{row.toptal}</td>
                      <td className="p-4 text-[#6B7280] border-t border-[#1E1E1E]">{row.turing}</td>
                      <td className="p-4 text-[#6B7280] border-t border-[#1E1E1E]">{row.andela}</td>
                      <td className="p-4 text-white font-semibold border-t border-[#1E1E1E]">{row.kovil}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                  A legal tech firm lost their entire engineering team. Kovil AI matched a senior AI engineer in 48 hours and stabilized three production applications in five days, maintaining 100% SLA for 200+ law firm users throughout.
                </p>
                <Link href="/case-studies/legal-tech-maintenance" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#FF4F00] transition-colors font-sans text-sm">
                  Read the case study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="p-8 rounded-2xl bg-[#0A0A0A] text-white">
                <p className="text-[#FF4F00] text-xs font-semibold uppercase tracking-widest mb-3 font-sans">Case study — FinTech</p>
                <h3 className="font-display text-xl font-bold mb-4">Payment dashboard shipped in 18 days</h3>
                <p className="text-[#A09A91] font-sans leading-relaxed text-sm mb-6">
                  A FinTech startup needed a production-ready payment dashboard built to a hard deadline. Kovil AI scoped, staffed, and delivered under a fixed-price engagement, live in 18 days with zero scope overrun.
                </p>
                <Link href="/case-studies/fintech-payment-dashboard" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#FF4F00] transition-colors font-sans text-sm">
                  Read the case study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ — Answer-First + Bulleted Evidence for top 3 */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-12">Frequently asked questions</h2>
            <div className="divide-y divide-[#E5E2D9] max-w-3xl">
              {visibleFaqs.map((faq, i) => (
                <div key={i} className="py-8">
                  <h3 className="font-display text-lg font-bold text-[#0A0A0A] mb-3">{faq.name}</h3>
                  <p className="text-[#6B7280] font-sans leading-relaxed mb-4">{faq.summary}</p>
                  {faq.bullets && (
                    <ul className="space-y-2">
                      {faq.bullets.map((bullet, j) => (
                        <li key={j} className="flex gap-3 items-start">
                          <CheckCircle2 className="w-4 h-4 text-[#FF4F00] flex-shrink-0 mt-0.5" />
                          <span className="text-[#4B4B4B] font-sans text-sm leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
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
