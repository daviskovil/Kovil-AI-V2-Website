import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const SF_BLUE = '#00A1E0'
const BASE = 'https://kovil.ai'
const CANONICAL = `${BASE}/agentforce/compare/agentforce-vs-microsoft-copilot`

export const metadata: Metadata = {
  title: 'Agentforce vs Microsoft Copilot: 2026 Comparison — Which AI Agent Platform Wins? | Kovil AI',
  description: 'Agentforce vs Microsoft Copilot compared across ecosystem, CRM integration, autonomy, pricing and security. Agentforce works best for Salesforce-native orgs; Microsoft Copilot for Microsoft 365/Dynamics shops.',
  alternates: { canonical: CANONICAL },
  keywords: [
    'agentforce vs microsoft copilot',
    'salesforce agentforce vs microsoft copilot',
    'agentforce vs copilot comparison',
    'microsoft copilot vs salesforce agentforce',
    'agentforce or microsoft copilot which is better',
    'salesforce ai vs microsoft ai',
    'agentforce vs m365 copilot',
    'agentforce vs dynamics 365 copilot',
    'best ai agent for salesforce',
    'agentforce microsoft comparison 2026',
  ],
  openGraph: {
    type: 'article',
    title: 'Agentforce vs Microsoft Copilot: 2026 Comparison | Kovil AI',
    description: 'Comprehensive comparison of Agentforce and Microsoft Copilot across ecosystem, autonomy, pricing and security — with a practical decision framework.',
    url: CANONICAL,
    siteName: 'Kovil AI',
    images: [{ url: `${BASE}/og-agentforce.png`, width: 1200, height: 630, alt: 'Agentforce vs Microsoft Copilot — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce vs Microsoft Copilot: 2026 Comparison | Kovil AI',
    description: 'Agentforce vs Microsoft Copilot — full technical comparison with a practical decision framework.',
    images: [`${BASE}/og-agentforce.png`],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Agentforce vs Microsoft Copilot: 2026 Full Comparison',
  description: 'Agentforce vs Microsoft Copilot compared across ecosystem, CRM integration, autonomy, pricing and security.',
  url: CANONICAL,
  datePublished: '2026-06-24',
  dateModified: '2026-06-24',
  author: { '@type': 'Organization', name: 'Kovil AI', url: BASE },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: BASE, logo: { '@type': 'ImageObject', url: `${BASE}/kovil-logo-symbol-orange.webp` } },
  inLanguage: 'en-US',
  mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the main difference between Agentforce and Microsoft Copilot?',
      acceptedAnswer: { '@type': 'Answer', text: "The primary difference is ecosystem. Agentforce is built for organisations running Salesforce CRM — it is natively integrated with Sales Cloud, Service Cloud, Marketing Cloud, and Data Cloud, and executes autonomous actions directly within Salesforce. Microsoft Copilot is built for the Microsoft 365 and Dynamics 365 ecosystem. Each platform is strongest in its own ecosystem; neither has meaningful native integration with the other's CRM." },
    },
    {
      '@type': 'Question',
      name: 'Is Agentforce or Microsoft Copilot more autonomous?',
      acceptedAnswer: { '@type': 'Answer', text: "Agentforce is more autonomous for CRM-centric workflows. It uses the Atlas Reasoning Engine to observe, plan, act, and reflect in a four-phase loop — executing multi-step tasks like resolving a support case from intake to close without human intervention. Microsoft Copilot Studio can build autonomous agents but is more commonly deployed as a chat-based assistant embedded in Teams and Office apps. For deep CRM automation, Agentforce has a structural advantage." },
    },
    {
      '@type': 'Question',
      name: 'How does Agentforce pricing compare to Microsoft Copilot pricing?',
      acceptedAnswer: { '@type': 'Answer', text: "Agentforce is priced at approximately $2 per conversation as of 2026, with volume discounts for enterprise commitments. This is consumption-based: you pay for what your agents actually do. Microsoft Copilot for Microsoft 365 is priced at $30 per user per month as a seat-based subscription. For low-volume AI use, Microsoft Copilot may be cheaper; for high-volume autonomous workflows (thousands of agent conversations), Agentforce's per-conversation pricing can be more cost-efficient." },
    },
    {
      '@type': 'Question',
      name: 'Can Agentforce integrate with Microsoft tools?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — Agentforce can connect to Microsoft tools through MuleSoft, HTTP callouts, and the Model Context Protocol (MCP). However, these are integration patterns, not native deep integrations. If your team works primarily in Microsoft 365 (Teams, Outlook, SharePoint), Agentforce will require additional integration configuration where Microsoft Copilot would be natively embedded.' },
    },
    {
      '@type': 'Question',
      name: 'Which AI agent platform is better for customer service?',
      acceptedAnswer: { '@type': 'Answer', text: "Agentforce has a clear advantage for Salesforce Service Cloud customers. It can autonomously resolve cases, access the full CRM record, execute Flows, and escalate to a human with full context — all within the existing Salesforce support workflow. Microsoft Copilot can augment service agents within Dynamics 365 Customer Service, but does not natively integrate with Salesforce case management." },
    },
    {
      '@type': 'Question',
      name: 'Should I choose Agentforce or Microsoft Copilot?',
      acceptedAnswer: { '@type': 'Answer', text: "The decision is primarily an ecosystem choice. If your CRM is Salesforce, choose Agentforce — the native integration depth, Data Cloud access, and Einstein Trust Layer create a structural advantage you cannot replicate with Microsoft Copilot in a Salesforce environment. If your organisation runs Microsoft 365 and Dynamics 365 with no Salesforce investment, Microsoft Copilot is the natural fit. If you have both ecosystems, implement both and connect them via integration middleware." },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
    { '@type': 'ListItem', position: 2, name: 'Agentforce', item: `${BASE}/agentforce` },
    { '@type': 'ListItem', position: 3, name: 'Agentforce vs Microsoft Copilot', item: CANONICAL },
  ],
}

const tableRows = [
  { feature: 'Native CRM ecosystem', agentforce: 'Salesforce (Sales, Service, Marketing, Data Cloud)', microsoft: 'Microsoft Dynamics 365' },
  { feature: 'Productivity suite', agentforce: 'Salesforce apps + Slack', microsoft: 'Microsoft 365 (Teams, Outlook, Word, Excel)' },
  { feature: 'Agent autonomy', agentforce: 'Full autonomous multi-step execution', microsoft: 'Chat-assisted + Copilot Studio agents' },
  { feature: 'Reasoning engine', agentforce: 'Atlas Reasoning Engine (Observe-Plan-Act-Reflect)', microsoft: 'Azure OpenAI + Orchestration layer' },
  { feature: 'Custom agents', agentforce: 'Agent Builder (Topics, Actions, Instructions)', microsoft: 'Copilot Studio (Power Platform-based)' },
  { feature: 'External integration', agentforce: 'MuleSoft, MCP, Data Cloud, HTTP callouts', microsoft: 'Power Automate, Azure Logic Apps, MCP' },
  { feature: 'Security & trust', agentforce: 'Einstein Trust Layer (PII masking, audit trail)', microsoft: 'Microsoft Purview, Azure AD, Entra ID' },
  { feature: 'Pricing model', agentforce: '~$2 per conversation (consumption)', microsoft: '$30/user/month for M365 Copilot' },
  { feature: 'Best fit', agentforce: 'Salesforce-native organisations', microsoft: 'Microsoft 365 / Dynamics 365 organisations' },
  { feature: 'Implementation partner', agentforce: 'Salesforce SIs (Kovil AI)', microsoft: 'Microsoft SIs' },
]

const faqs = [
  { q: 'What is the main difference between Agentforce and Microsoft Copilot?', a: "The primary difference is ecosystem. Agentforce is natively integrated with Salesforce CRM — Sales Cloud, Service Cloud, Data Cloud. Microsoft Copilot is natively integrated with Microsoft 365 and Dynamics 365. Each is strongest in its own ecosystem." },
  { q: 'Is Agentforce or Microsoft Copilot more autonomous?', a: "Agentforce is more autonomous for CRM-centric workflows. Its Atlas Reasoning Engine executes multi-step tasks end-to-end without user intervention. Microsoft Copilot is more commonly deployed as a chat assistant embedded in Teams and Office, though Copilot Studio can build autonomous agents." },
  { q: 'How does pricing compare?', a: "Agentforce: ~$2 per conversation (consumption-based). Microsoft Copilot for M365: $30/user/month (seat-based). High-volume autonomous workflows often favour Agentforce; broad-deployment productivity assistance often favours Microsoft." },
  { q: 'Can Agentforce integrate with Microsoft tools?', a: 'Yes — via MuleSoft, HTTP callouts, and MCP. But these require integration configuration; they are not native deep integrations like Microsoft Copilot embedded in Teams or SharePoint.' },
  { q: 'Which is better for customer service?', a: "Agentforce has a structural advantage for Salesforce Service Cloud customers — it can autonomously resolve cases, access the full CRM record, run Flows, and escalate with full context. Microsoft Copilot integrates natively into Dynamics 365 Customer Service instead." },
  { q: 'Should I choose Agentforce or Microsoft Copilot?', a: "Primarily an ecosystem decision: Salesforce CRM → Agentforce; Microsoft 365/Dynamics 365 → Microsoft Copilot. If you have both, implement both and connect via integration middleware." },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="pt-20 bg-background min-h-screen">

        {/* ── HERO ── */}
        <section className="border-b border-border py-16 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 50% at 80% 50%, ${SF_BLUE}08 0%, transparent 70%)` }} />
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-8" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link href="/agentforce" className="hover:text-foreground transition-colors">Agentforce</Link>
              <span>/</span>
              <span className="text-foreground">Agentforce vs Microsoft Copilot</span>
            </nav>

            <p className="text-sm font-mono font-semibold tracking-widest uppercase mb-4" style={{ color: SF_BLUE }}>Comparison Guide · Updated June 2026</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
              Agentforce vs Microsoft Copilot:<br className="hidden md:block" /> Which AI Agent Platform Wins?
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-6">
              <strong className="text-foreground">The direct answer:</strong> This is primarily an ecosystem decision, not a feature one. If your CRM is Salesforce, Agentforce wins on native integration depth. If your organisation runs Microsoft 365 and Dynamics 365, Microsoft Copilot is the natural fit. Neither has meaningful native integration with the other&apos;s core platform.
            </p>
            <p className="text-sm text-muted-foreground max-w-3xl">
              This comparison covers architecture, autonomy, pricing, security, and a practical decision framework — written by Kovil AI Agentforce implementation engineers with hands-on experience deploying both platforms.
            </p>
          </div>
        </section>

        {/* ── COMPARISON TABLE ── */}
        <section className="py-20 border-b border-border">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-sm font-mono font-semibold tracking-widest uppercase mb-3" style={{ color: SF_BLUE }}>Side by Side</p>
            <h2 className="font-display text-3xl font-bold tracking-tight mb-10 text-foreground">Full Feature Comparison</h2>
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border" style={{ background: `${SF_BLUE}08` }}>
                    <th className="text-left px-6 py-4 font-semibold text-foreground w-48">Feature</th>
                    <th className="text-left px-6 py-4 font-semibold" style={{ color: SF_BLUE }}>Agentforce</th>
                    <th className="text-left px-6 py-4 font-semibold text-muted-foreground">Microsoft Copilot</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, i) => (
                    <tr key={row.feature} className={`border-b border-border last:border-0 ${i % 2 === 0 ? 'bg-card' : 'bg-background'}`}>
                      <td className="px-6 py-4 font-medium text-foreground">{row.feature}</td>
                      <td className="px-6 py-4 text-foreground font-medium">{row.agentforce}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.microsoft}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── ECOSYSTEM BREAKDOWN ── */}
        <section className="py-20 border-b border-border bg-muted/20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold tracking-tight mb-10 text-foreground">Ecosystem Deep Dive</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-9 w-9 rounded-xl flex items-center justify-center text-white font-bold text-sm" style={{ background: `linear-gradient(135deg, ${SF_BLUE} 0%, #0050C8 100%)` }}>AF</div>
                  <h3 className="font-display text-xl font-bold text-foreground">Agentforce Ecosystem</h3>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {[
                    'Salesforce Sales Cloud — account, opportunity, lead management',
                    'Service Cloud — case resolution, omni-channel support',
                    'Marketing Cloud — campaign personalisation and journey automation',
                    'Data Cloud — unified customer data across all touchpoints',
                    'Slack — conversational agents embedded in workspace',
                    'MuleSoft — connect to any external system or API',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2"><span style={{ color: SF_BLUE }} className="mt-0.5 shrink-0">→</span>{item}</li>
                  ))}
                </ul>
                <p className="mt-5 text-xs text-muted-foreground border-t border-border pt-4">Best fit: Organisations with Salesforce as their primary CRM and customer data platform.</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-9 w-9 rounded-xl flex items-center justify-center text-white font-bold text-sm bg-purple-600">MS</div>
                  <h3 className="font-display text-xl font-bold text-foreground">Microsoft Copilot Ecosystem</h3>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {[
                    'Microsoft 365 — Word, Excel, PowerPoint, Outlook, Teams',
                    'Dynamics 365 — sales, customer service, field service',
                    'SharePoint & OneDrive — document intelligence and retrieval',
                    'Azure OpenAI Service — model infrastructure',
                    'Power Platform — Power Automate, Power Apps integrations',
                    'Copilot Studio — custom agent builder (low-code)',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2"><span className="text-purple-500 mt-0.5 shrink-0">→</span>{item}</li>
                  ))}
                </ul>
                <p className="mt-5 text-xs text-muted-foreground border-t border-border pt-4">Best fit: Organisations running Microsoft 365 for productivity and Dynamics 365 for CRM.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── AUTONOMY COMPARISON ── */}
        <section className="py-20 border-b border-border">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold tracking-tight mb-6 text-foreground">Agent Autonomy: How Each Platform Thinks</h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed mb-8">
              <p>Both platforms can build agents, but their default mode of operation differs significantly. <strong className="text-foreground">Agentforce</strong> is designed from the ground up for autonomous execution — the Atlas Reasoning Engine&apos;s Observe-Plan-Act-Reflect loop enables agents to handle complex, multi-step workflows without waiting for human approval at each step. A Salesforce Service Cloud agent can take a new case, look up the account history, run a diagnostic Flow, resolve the issue, and close the case entirely on its own.</p>
              <p><strong className="text-foreground">Microsoft Copilot</strong> is more commonly deployed as an assistant embedded in the applications people already use — Outlook, Teams, Word — where it helps humans do their work faster rather than executing workflows autonomously. Microsoft Copilot Studio can build autonomous agents, but the platform&apos;s default architecture leans toward assisted intelligence rather than fully autonomous action.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl border" style={{ borderColor: `${SF_BLUE}25`, background: `${SF_BLUE}06` }}>
                <h3 className="font-semibold text-foreground mb-3">Agentforce strengths</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {['End-to-end autonomous case resolution', 'Multi-step pipeline and forecasting workflows', 'Proactive outreach triggers from CRM events', 'Atlas Reasoning Engine — 4-phase planning loop', 'Topics and Actions — declarative, auditable config'].map(item => (
                    <li key={item} className="flex items-start gap-2"><span style={{ color: SF_BLUE }} className="shrink-0">✓</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-2xl border border-purple-500/20 bg-purple-500/05">
                <h3 className="font-semibold text-foreground mb-3">Microsoft Copilot strengths</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {['Deep Microsoft 365 productivity integration', 'Document intelligence across SharePoint', 'Meeting summaries and action items in Teams', 'Power Platform low-code automation canvas', 'Broad enterprise Microsoft licence coverage'].map(item => (
                    <li key={item} className="flex items-start gap-2"><span className="text-purple-500 shrink-0">✓</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="py-20 border-b border-border bg-muted/20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold tracking-tight mb-6 text-foreground">Pricing Comparison</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">The two platforms use fundamentally different pricing models, which matters depending on your use pattern.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-1">Agentforce</h3>
                <p className="text-3xl font-display font-black mb-3" style={{ color: SF_BLUE }}>~$2</p>
                <p className="text-sm text-muted-foreground mb-4">per conversation · consumption-based</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>→ You pay for what agents actually do</li>
                  <li>→ Volume discounts at enterprise scale</li>
                  <li>→ No seat cost for users interacting with agents</li>
                  <li>→ Separate: Data Cloud, Einstein, MuleSoft licences</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-1">Microsoft Copilot for M365</h3>
                <p className="text-3xl font-display font-black mb-3 text-purple-500">$30</p>
                <p className="text-sm text-muted-foreground mb-4">per user per month · seat-based</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>→ Flat rate regardless of usage volume</li>
                  <li>→ Requires M365 E3/E5 base licence</li>
                  <li>→ Copilot Studio: additional per-message pricing</li>
                  <li>→ Predictable cost for broad team rollouts</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-5 rounded-2xl border border-border bg-card text-sm text-muted-foreground">
              <strong className="text-foreground">When each model wins on cost:</strong> If you need agents handling thousands of automated conversations per month with no human in the loop, Agentforce&apos;s consumption model scales efficiently. If you need a broad AI assistant for every employee&apos;s daily productivity work in Microsoft 365, the per-seat model is simpler to budget.
            </div>
          </div>
        </section>

        {/* ── DECISION FRAMEWORK ── */}
        <section className="py-20 border-b border-border">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold tracking-tight mb-10 text-foreground">Decision Framework: Which Platform Is Right for You?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border rounded-2xl p-7" style={{ borderColor: `${SF_BLUE}30` }}>
                <div className="h-6 w-6 rounded-lg mb-4 flex items-center justify-center" style={{ background: `${SF_BLUE}15` }}>
                  <span style={{ color: SF_BLUE }} className="text-xs font-bold">→</span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">Choose Agentforce if…</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {[
                    'Your CRM is Salesforce (Sales Cloud, Service Cloud, etc.)',
                    'You need autonomous multi-step workflow automation',
                    'Customer data lives in Data Cloud or Salesforce',
                    'Your support or sales teams are Salesforce-native',
                    'You want per-conversation pricing at volume scale',
                    'You have or plan MuleSoft for integration layer',
                    'You need HIPAA, FedRAMP, or financial compliance on Salesforce',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2"><span style={{ color: SF_BLUE }} className="shrink-0 mt-0.5">✓</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-card border border-purple-500/20 rounded-2xl p-7">
                <div className="h-6 w-6 rounded-lg mb-4 flex items-center justify-center bg-purple-500/15">
                  <span className="text-purple-500 text-xs font-bold">→</span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">Choose Microsoft Copilot if…</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {[
                    'Your CRM is Dynamics 365, not Salesforce',
                    'Your team lives in Microsoft 365 (Teams, Outlook, Word)',
                    'You want AI embedded in daily productivity tools',
                    'SharePoint is your primary knowledge management system',
                    'You have existing Azure investment and governance',
                    'Power Platform is already in use for automation',
                    'You need per-user flat-rate pricing for broad rollout',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2"><span className="text-purple-500 shrink-0 mt-0.5">✓</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 p-5 rounded-2xl border border-border bg-muted/30 text-sm text-muted-foreground">
              <strong className="text-foreground">Both ecosystems in play?</strong> Implement both and connect them via MuleSoft or Azure Integration Services. Agentforce handles CRM automation; Microsoft Copilot handles productivity augmentation. They complement, not compete.
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 border-b border-border bg-muted/20">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-sm font-mono font-semibold tracking-widest uppercase mb-3" style={{ color: SF_BLUE }}>FAQ</p>
            <h2 className="font-display text-3xl font-bold tracking-tight mb-10 text-foreground">Common Questions</h2>
            <div className="space-y-5">
              {faqs.map(faq => (
                <div key={faq.q} className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="font-semibold text-foreground mb-3">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED ── */}
        <section className="py-14 border-b border-border">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display text-xl font-bold tracking-tight mb-6 text-foreground">Related Guides</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { title: 'Agentforce vs Einstein Copilot', href: '/agentforce/compare/agentforce-vs-einstein-copilot' },
                { title: 'Agentforce Pricing Guide 2026', href: '/agentforce/pricing' },
                { title: 'How Agentforce Works', href: '/agentforce/playbook/how-does-agentforce-work' },
                { title: 'Agentforce FAQ', href: '/agentforce/faq' },
                { title: 'Agentforce Services by Kovil AI', href: '/agentforce' },
                { title: 'Book a strategy call', href: '/book-a-call' },
              ].map(link => (
                <Link key={link.href} href={link.href} className="group flex items-center gap-2 p-4 bg-card border border-border rounded-xl hover:border-accent/40 hover:shadow-md transition-all text-sm font-medium text-foreground">
                  <span className="flex-1">{link.title}</span>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground group-hover:text-accent transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #050D1A 0%, #091526 60%, #0C1E38 100%)' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none" style={{ background: `radial-gradient(ellipse, ${SF_BLUE}18 0%, transparent 70%)` }} />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <p className="text-sm font-mono font-semibold tracking-widest uppercase mb-4" style={{ color: SF_BLUE }}>Agentforce Implementation · New York</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Running Salesforce? Agentforce is the right call.</h2>
            <p className="text-white/50 mb-8 max-w-2xl mx-auto leading-relaxed">Kovil AI deploys Agentforce inside Salesforce orgs end-to-end — from strategy through to production agents in fixed-price sprints. We&apos;ve helped Sales Cloud, Service Cloud, and Marketing Cloud customers get autonomous AI into production in 6–8 weeks.</p>
            <Link href="/book-a-call" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:-translate-y-0.5" style={{ background: SF_BLUE, boxShadow: `0 8px 32px ${SF_BLUE}45` }}>
              Book a free Agentforce assessment <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

      </main>
    </>
  )
}
