import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const SF_BLUE = '#00A1E0'
const MS_PURPLE = '#7C3AED'
const BASE = 'https://kovil.ai'
const CANONICAL = `${BASE}/agentforce/compare/agentforce-vs-microsoft-copilot`

export const metadata: Metadata = {
  title: 'Agentforce vs Microsoft Copilot: 2026 Comparison — Which AI Agent Platform Wins? | Kovil AI',
  description: 'Agentforce vs Microsoft Copilot compared across ecosystem, CRM integration, autonomy, pricing and security. Agentforce works best for Salesforce-native orgs; Microsoft Copilot for Microsoft 365/Dynamics shops.',
  alternates: { canonical: CANONICAL },
  keywords: ['agentforce vs microsoft copilot','salesforce agentforce vs microsoft copilot','agentforce vs copilot comparison','microsoft copilot vs salesforce agentforce','agentforce or microsoft copilot which is better','salesforce ai vs microsoft ai','agentforce vs m365 copilot','agentforce vs dynamics 365 copilot','best ai agent for salesforce','agentforce microsoft comparison 2026'],
  openGraph: { type: 'article', title: 'Agentforce vs Microsoft Copilot: 2026 Comparison | Kovil AI', description: 'Comprehensive comparison of Agentforce and Microsoft Copilot — ecosystem, autonomy, pricing, security and a practical decision framework.', url: CANONICAL, siteName: 'Kovil AI', images: [{ url: `${BASE}/og-agentforce.png`, width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'Agentforce vs Microsoft Copilot 2026 | Kovil AI', description: 'Full comparison — ecosystem, autonomy, pricing, security and decision framework.', images: [`${BASE}/og-agentforce.png`] },
}

const schemas = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'Agentforce vs Microsoft Copilot: 2026 Full Comparison', url: CANONICAL, datePublished: '2026-06-24', dateModified: '2026-06-24', author: { '@type': 'Organization', name: 'Kovil AI', url: BASE }, publisher: { '@type': 'Organization', name: 'Kovil AI', url: BASE } },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    { '@type': 'Question', name: 'What is the main difference between Agentforce and Microsoft Copilot?', acceptedAnswer: { '@type': 'Answer', text: "The primary difference is ecosystem. Agentforce is built for Salesforce CRM organisations. Microsoft Copilot is built for Microsoft 365 and Dynamics 365. Each is strongest in its own ecosystem." } },
    { '@type': 'Question', name: 'Is Agentforce or Microsoft Copilot more autonomous?', acceptedAnswer: { '@type': 'Answer', text: "Agentforce is more autonomous for CRM-centric workflows. The Atlas Reasoning Engine executes multi-step tasks end-to-end. Microsoft Copilot is more commonly deployed as an embedded productivity assistant." } },
    { '@type': 'Question', name: 'How does Agentforce pricing compare to Microsoft Copilot pricing?', acceptedAnswer: { '@type': 'Answer', text: "Agentforce: ~$2 per conversation (consumption-based). Microsoft Copilot for M365: $30/user/month (seat-based). High-volume automation favours Agentforce; broad productivity rollouts often favour Microsoft." } },
    { '@type': 'Question', name: 'Can Agentforce integrate with Microsoft tools?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — via MuleSoft, HTTP callouts, and MCP. But these require integration work; they are not native deep integrations like Microsoft Copilot embedded in Teams or SharePoint.' } },
    { '@type': 'Question', name: 'Which is better for customer service?', acceptedAnswer: { '@type': 'Answer', text: "Agentforce has a structural advantage for Salesforce Service Cloud customers — it can autonomously resolve cases with full CRM context. Microsoft Copilot integrates natively into Dynamics 365 Customer Service instead." } },
    { '@type': 'Question', name: 'Should I choose Agentforce or Microsoft Copilot?', acceptedAnswer: { '@type': 'Answer', text: "Primarily an ecosystem decision: Salesforce CRM → Agentforce; Microsoft 365/Dynamics 365 → Microsoft Copilot." } },
  ]},
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE }, { '@type': 'ListItem', position: 2, name: 'Agentforce', item: `${BASE}/agentforce` }, { '@type': 'ListItem', position: 3, name: 'Agentforce vs Microsoft Copilot', item: CANONICAL }] },
]

const tableRows = [
  { feature: 'Native CRM ecosystem', agentforce: 'Salesforce (Sales, Service, Marketing, Data Cloud)', microsoft: 'Microsoft Dynamics 365' },
  { feature: 'Productivity suite', agentforce: 'Salesforce apps + Slack', microsoft: 'Microsoft 365 (Teams, Outlook, Word, Excel)' },
  { feature: 'Agent autonomy', agentforce: 'Full autonomous multi-step execution', microsoft: 'Chat-assisted + Copilot Studio agents' },
  { feature: 'Reasoning engine', agentforce: 'Atlas Reasoning Engine (Observe-Plan-Act-Reflect)', microsoft: 'Azure OpenAI + Orchestration layer' },
  { feature: 'Custom agents', agentforce: 'Agent Builder (Topics, Actions, Instructions)', microsoft: 'Copilot Studio (Power Platform-based)' },
  { feature: 'External integration', agentforce: 'MuleSoft, MCP, Data Cloud, HTTP callouts', microsoft: 'Power Automate, Azure Logic Apps, MCP' },
  { feature: 'Security & trust', agentforce: 'Einstein Trust Layer (PII masking, audit trail)', microsoft: 'Microsoft Purview, Azure AD, Entra ID' },
  { feature: 'Pricing model', agentforce: '~$2 per conversation (consumption)', microsoft: '$30/user/month (M365 Copilot)' },
  { feature: 'Best fit', agentforce: 'Salesforce-native organisations', microsoft: 'Microsoft 365 / Dynamics 365 organisations' },
]

const afFeatures = ['End-to-end autonomous case resolution', 'Atlas Reasoning Engine 4-phase loop', 'Salesforce CRM deep native integration', 'Data Cloud unified customer profiles', 'MuleSoft enterprise API connectivity', 'Einstein Trust Layer — PII masking + audit', 'Per-conversation pricing — scales with volume', 'Sales, Service, Marketing, Ops automation']
const msFeatures = ['Microsoft 365 deep native integration', 'Teams, Outlook, SharePoint intelligence', 'Copilot Studio low-code agent builder', 'Power Platform workflow automation canvas', 'Azure AD and Entra ID security posture', 'Dynamics 365 native CRM integration', '$30/user/month flat predictable cost', 'Document intelligence across SharePoint']

const chooseAF = ['Your CRM is Salesforce (Sales Cloud, Service Cloud, etc.)', 'You need autonomous multi-step CRM workflow execution', 'Customer data lives in Data Cloud or Salesforce', 'Your support or sales teams are Salesforce-native', 'You want per-conversation pricing at volume scale', 'You have or plan MuleSoft for integration layer', 'You need HIPAA/FedRAMP compliance on Salesforce platform']
const chooseMS = ['Your CRM is Dynamics 365, not Salesforce', 'Your team lives in Microsoft 365 (Teams, Outlook, Word)', 'You want AI embedded in daily productivity applications', 'SharePoint is your primary knowledge management system', 'You have existing Azure investment and governance', 'Power Platform is already in use for automation', 'You need per-user flat-rate pricing for broad rollout']

const faqs = [
  { q: 'What is the main difference between Agentforce and Microsoft Copilot?', a: "The primary difference is ecosystem. Agentforce is natively integrated with Salesforce CRM — Sales Cloud, Service Cloud, Data Cloud. Microsoft Copilot is natively integrated with Microsoft 365 and Dynamics 365. Each is strongest in its own ecosystem." },
  { q: 'Is Agentforce or Microsoft Copilot more autonomous?', a: "Agentforce is more autonomous for CRM-centric workflows. Its Atlas Reasoning Engine executes multi-step tasks end-to-end without user intervention. Microsoft Copilot is more commonly deployed as a chat assistant embedded in Teams and Office." },
  { q: 'How does pricing compare?', a: "Agentforce: ~$2 per conversation (consumption-based). Microsoft Copilot for M365: $30/user/month (seat-based). High-volume autonomous workflows favour Agentforce; broad-deployment productivity assistance often favours Microsoft." },
  { q: 'Can Agentforce integrate with Microsoft tools?', a: 'Yes — via MuleSoft, HTTP callouts, and MCP. But these require integration configuration; they are not native deep integrations like Copilot embedded in Teams or SharePoint.' },
  { q: 'Which is better for customer service?', a: "Agentforce has a structural advantage for Salesforce Service Cloud customers — it can autonomously resolve cases, access the full CRM record, run Flows, and escalate with full context. Microsoft Copilot integrates natively into Dynamics 365 Customer Service instead." },
  { q: 'Should I choose Agentforce or Microsoft Copilot?', a: "Primarily an ecosystem decision: Salesforce CRM → Agentforce; Microsoft 365/Dynamics 365 → Microsoft Copilot. If you have both ecosystems, implement both and connect via MuleSoft or Azure Integration Services." },
]

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <main className="bg-background min-h-screen">

        {/* ── CINEMATIC HERO ── */}
        <section className="relative overflow-hidden pt-20 pb-32">
          <div className="absolute top-0 right-0 w-[800px] h-[700px] pointer-events-none" style={{ background: `radial-gradient(ellipse 55% 55% at 90% 5%, ${SF_BLUE}12 0%, transparent 65%)` }} />
          <div className="absolute bottom-0 left-0 w-[700px] h-[600px] pointer-events-none" style={{ background: `radial-gradient(ellipse 50% 50% at 5% 95%, ${MS_PURPLE}09 0%, transparent 65%)` }} />
          <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] pointer-events-none" style={{ background: `radial-gradient(ellipse, ${MS_PURPLE}06 0%, transparent 70%)` }} />

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-10" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span className="opacity-40">/</span>
              <Link href="/agentforce" className="hover:text-foreground transition-colors">Agentforce</Link>
              <span className="opacity-40">/</span>
              <span className="text-foreground">vs Microsoft Copilot</span>
            </nav>

            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm mb-8" style={{ border: `1px solid ${SF_BLUE}40`, background: `linear-gradient(135deg, ${SF_BLUE}15 0%, ${SF_BLUE}07 100%)`, color: SF_BLUE }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: SF_BLUE }} />
              Comparison Guide · June 2026
            </span>

            {/* Split title */}
            <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-start mb-10">
              <div>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3 font-semibold">Salesforce</p>
                <h1 className="font-display text-5xl md:text-6xl font-black tracking-tight leading-[1.02]" style={{ background: `linear-gradient(135deg, ${SF_BLUE} 0%, #60CFFF 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Agentforce
                </h1>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-xs">Autonomous AI agents natively inside Salesforce CRM</p>
              </div>
              <div className="flex items-center justify-center pt-8">
                <span className="font-display text-4xl font-black text-muted-foreground/20 select-none">vs</span>
              </div>
              <div>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3 font-semibold">Microsoft</p>
                <h1 className="font-display text-5xl md:text-6xl font-black tracking-tight leading-[1.02]" style={{ background: `linear-gradient(135deg, ${MS_PURPLE} 0%, #A78BFA 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Copilot
                </h1>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-xs">AI embedded in Microsoft 365 and Dynamics 365</p>
              </div>
            </div>

            <div className="max-w-2xl">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                <strong className="text-foreground">The direct answer:</strong> This is primarily an ecosystem decision. Salesforce CRM → Agentforce. Microsoft 365 + Dynamics → Microsoft Copilot. Neither has meaningful native integration with the other&apos;s core platform.
              </p>
            </div>

            {/* Key differentiator chips */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Agentforce pricing', value: '~$2 / conversation', color: SF_BLUE },
                { label: 'M365 Copilot pricing', value: '$30 / user / month', color: MS_PURPLE },
                { label: 'Both autonomous?', value: 'Different approaches', color: 'rgba(255,255,255,0.4)' },
              ].map(chip => (
                <div key={chip.label} className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border bg-card/80 text-sm shadow-sm">
                  <span className="text-muted-foreground">{chip.label}:</span>
                  <strong style={{ color: chip.color }} className="font-bold">{chip.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPARISON TABLE (DARK) ── */}
        <section className="py-28 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #050D1A 0%, #07111F 100%)' }}>
          <div className="absolute top-0 left-0 w-[600px] h-[400px] pointer-events-none" style={{ background: `radial-gradient(ellipse at top left, ${SF_BLUE}09 0%, transparent 65%)` }} />
          <div className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none" style={{ background: `radial-gradient(ellipse at top right, ${MS_PURPLE}07 0%, transparent 65%)` }} />
          <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <p className="text-sm font-mono font-semibold tracking-widest uppercase mb-3" style={{ color: SF_BLUE }}>Side by Side</p>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-14 text-white">Full Feature Comparison</h2>

            <div className="rounded-3xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.07)', boxShadow: '0 40px 100px rgba(0,0,0,0.5)' }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)' }}>
                    <th className="text-left px-8 py-5 font-semibold text-white/30 text-xs uppercase tracking-widest w-48">Feature</th>
                    <th className="text-left px-8 py-5 font-bold">
                      <span className="flex items-center gap-2 text-sm" style={{ color: SF_BLUE }}>
                        <span className="h-2 w-2 rounded-full animate-pulse" style={{ background: SF_BLUE }} />
                        Agentforce
                      </span>
                    </th>
                    <th className="text-left px-8 py-5 font-semibold">
                      <span className="flex items-center gap-2 text-sm" style={{ color: '#A78BFA' }}>
                        <span className="h-2 w-2 rounded-full" style={{ background: MS_PURPLE }} />
                        Microsoft Copilot
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, i) => (
                    <tr key={row.feature} className="border-t transition-colors hover:bg-white/[0.02]" style={{ borderColor: 'rgba(255,255,255,0.05)', background: i % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'transparent' }}>
                      <td className="px-8 py-4 font-medium text-white/40 text-xs uppercase tracking-wider">{row.feature}</td>
                      <td className="px-8 py-4 text-sm font-semibold text-white">{row.agentforce}</td>
                      <td className="px-8 py-4 text-sm text-white/40">{row.microsoft}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── ECOSYSTEM DEEP DIVE ── */}
        <section className="py-28 border-b border-border">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-mono font-semibold tracking-widest uppercase mb-3" style={{ color: SF_BLUE }}>Ecosystem Deep Dive</p>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-14 text-foreground leading-tight">Where Each Platform<br />Truly Excels</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {/* Agentforce */}
              <div className="rounded-3xl p-8 relative overflow-hidden group" style={{ background: 'linear-gradient(135deg, #050D1A 0%, #0A1A2E 100%)', border: `1px solid ${SF_BLUE}20` }}>
                <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none" style={{ background: `radial-gradient(circle at top right, ${SF_BLUE}12 0%, transparent 70%)` }} />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-7">
                    <div className="h-10 w-10 rounded-xl flex items-center justify-center text-white text-sm font-black shadow-lg" style={{ background: `linear-gradient(135deg, ${SF_BLUE} 0%, #0070D2 100%)`, boxShadow: `0 6px 20px ${SF_BLUE}40` }}>AF</div>
                    <div>
                      <p className="font-display font-bold text-white text-xl">Agentforce</p>
                      <p className="text-xs text-white/40 font-mono">Salesforce ecosystem</p>
                    </div>
                  </div>
                  <ul className="space-y-3.5 mb-6">
                    {afFeatures.map(f => (
                      <li key={f} className="flex items-start gap-3 text-sm text-white/60">
                        <span className="shrink-0 mt-0.5 font-bold text-sm" style={{ color: SF_BLUE }}>→</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-white/30 border-t pt-4" style={{ borderColor: `${SF_BLUE}15` }}>Best fit: Organisations with Salesforce as primary CRM and customer data platform.</p>
                </div>
              </div>

              {/* Microsoft */}
              <div className="rounded-3xl p-8 relative overflow-hidden group" style={{ background: 'linear-gradient(135deg, #0D0918 0%, #130D24 100%)', border: `1px solid ${MS_PURPLE}20` }}>
                <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none" style={{ background: `radial-gradient(circle at top right, ${MS_PURPLE}10 0%, transparent 70%)` }} />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-7">
                    <div className="h-10 w-10 rounded-xl flex items-center justify-center text-white text-sm font-black shadow-lg" style={{ background: `linear-gradient(135deg, ${MS_PURPLE} 0%, #A78BFA 100%)`, boxShadow: `0 6px 20px ${MS_PURPLE}40` }}>MS</div>
                    <div>
                      <p className="font-display font-bold text-white text-xl">Microsoft Copilot</p>
                      <p className="text-xs text-white/40 font-mono">Microsoft ecosystem</p>
                    </div>
                  </div>
                  <ul className="space-y-3.5 mb-6">
                    {msFeatures.map(f => (
                      <li key={f} className="flex items-start gap-3 text-sm text-white/60">
                        <span className="shrink-0 mt-0.5 font-bold text-sm" style={{ color: '#A78BFA' }}>→</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-white/30 border-t pt-4" style={{ borderColor: `${MS_PURPLE}15` }}>Best fit: Organisations running Microsoft 365 for productivity and Dynamics 365 for CRM.</p>
                </div>
              </div>
            </div>

            {/* Pricing comparison */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl p-7 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${SF_BLUE}08 0%, ${SF_BLUE}04 100%)`, border: `1px solid ${SF_BLUE}20` }}>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2">Agentforce</p>
                <div className="flex items-end gap-2 mb-2">
                  <span className="font-display text-5xl font-black" style={{ background: `linear-gradient(135deg, ${SF_BLUE} 0%, #60CFFF 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>~$2</span>
                  <span className="text-muted-foreground text-sm mb-1">/ conversation</span>
                </div>
                <p className="text-sm text-muted-foreground">Consumption-based — you pay for what agents actually do. Volume discounts at enterprise scale.</p>
              </div>
              <div className="rounded-2xl p-7 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${MS_PURPLE}08 0%, ${MS_PURPLE}04 100%)`, border: `1px solid ${MS_PURPLE}20` }}>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2">Microsoft Copilot for M365</p>
                <div className="flex items-end gap-2 mb-2">
                  <span className="font-display text-5xl font-black" style={{ background: `linear-gradient(135deg, ${MS_PURPLE} 0%, #A78BFA 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>$30</span>
                  <span className="text-muted-foreground text-sm mb-1">/ user / month</span>
                </div>
                <p className="text-sm text-muted-foreground">Seat-based — flat cost regardless of usage. Predictable for broad productivity rollouts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── DECISION FRAMEWORK (DARK) ── */}
        <section className="py-28 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #050D1A 0%, #07111F 100%)' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0,161,224,0.06) 0%, transparent 70%)` }} />
          <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <p className="text-sm font-mono font-semibold tracking-widest uppercase mb-3" style={{ color: SF_BLUE }}>Decision Framework</p>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-14 text-white leading-tight">Which Platform<br />Is Right for You?</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="rounded-3xl p-8 relative overflow-hidden" style={{ background: 'rgba(0,161,224,0.04)', border: `1px solid ${SF_BLUE}20` }}>
                <div className="absolute bottom-0 right-0 w-48 h-48 pointer-events-none" style={{ background: `radial-gradient(circle at bottom right, ${SF_BLUE}10 0%, transparent 70%)` }} />
                <p className="text-xs font-mono font-semibold tracking-widest uppercase mb-4" style={{ color: SF_BLUE }}>Choose Agentforce if…</p>
                <ul className="space-y-3.5">
                  {chooseAF.map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                      <span className="h-5 w-5 rounded-full shrink-0 mt-0.5 flex items-center justify-center text-xs font-black" style={{ background: `${SF_BLUE}20`, color: SF_BLUE }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl p-8 relative overflow-hidden" style={{ background: `rgba(124,58,237,0.04)`, border: `1px solid ${MS_PURPLE}20` }}>
                <div className="absolute bottom-0 right-0 w-48 h-48 pointer-events-none" style={{ background: `radial-gradient(circle at bottom right, ${MS_PURPLE}10 0%, transparent 70%)` }} />
                <p className="text-xs font-mono font-semibold tracking-widest uppercase mb-4" style={{ color: '#A78BFA' }}>Choose Microsoft Copilot if…</p>
                <ul className="space-y-3.5">
                  {chooseMS.map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                      <span className="h-5 w-5 rounded-full shrink-0 mt-0.5 flex items-center justify-center text-xs font-black" style={{ background: `${MS_PURPLE}20`, color: '#A78BFA' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-2xl p-6 flex items-start gap-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="h-8 w-8 rounded-lg shrink-0 flex items-center justify-center mt-0.5" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <span className="text-white/60 text-sm font-black">⇄</span>
              </div>
              <p className="text-sm text-white/50 leading-relaxed">
                <strong className="text-white">Both ecosystems in play?</strong> Implement both and connect them — Agentforce handles CRM automation, Microsoft Copilot handles productivity augmentation. They complement each other via MuleSoft or Azure Integration Services.
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-28 border-b border-border">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-mono font-semibold tracking-widest uppercase mb-3" style={{ color: SF_BLUE }}>FAQ</p>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-12 text-foreground">Common Questions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {faqs.map(faq => (
                <div key={faq.q} className="group rounded-2xl p-7 bg-card border border-border hover:border-accent/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-6 h-0.5 mb-4 rounded-full" style={{ background: `linear-gradient(90deg, ${SF_BLUE} 0%, transparent 100%)` }} />
                  <h3 className="font-semibold text-foreground mb-3 text-sm leading-snug">{faq.q}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED ── */}
        <section className="py-16 border-b border-border">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-xl font-bold tracking-tight mb-6 text-foreground">Related Guides</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { title: 'Agentforce vs Einstein Copilot', href: '/agentforce/compare/agentforce-vs-einstein-copilot' },
                { title: 'Agentforce Pricing Guide 2026', href: '/agentforce/pricing' },
                { title: 'How Agentforce Works', href: '/agentforce/playbook/how-does-agentforce-work' },
                { title: 'Agentforce FAQ', href: '/agentforce/faq' },
                { title: 'Agentforce Services Overview', href: '/agentforce' },
                { title: 'Book a strategy call', href: '/book-a-call' },
              ].map(link => (
                <Link key={link.href} href={link.href} className="group flex items-center gap-2 p-4 bg-card border border-border rounded-xl hover:border-accent/40 hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm font-medium text-foreground">
                  <span className="flex-1">{link.title}</span>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #050D1A 0%, #091526 60%, #0C1E38 100%)' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none" style={{ background: `radial-gradient(ellipse, ${SF_BLUE}20 0%, transparent 65%)` }} />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(0,161,224,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,161,224,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <p className="text-sm font-mono font-semibold tracking-widest uppercase mb-5" style={{ color: SF_BLUE }}>Agentforce Implementation · New York</p>
            <h2 className="font-display text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight">Running Salesforce?<br className="hidden md:block" /> Agentforce is the call.</h2>
            <p className="text-white/40 mb-12 max-w-xl mx-auto leading-relaxed text-lg">Kovil AI deploys Agentforce inside Salesforce orgs end-to-end — fixed-price sprints, 6–8 weeks to production agents.</p>
            <Link href="/book-a-call" className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-white transition-all hover:-translate-y-1 hover:shadow-2xl text-base" style={{ background: `linear-gradient(135deg, ${SF_BLUE} 0%, #0070D2 100%)`, boxShadow: `0 10px 40px ${SF_BLUE}55` }}>
              Book a free Agentforce assessment <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>

      </main>
    </>
  )
}
