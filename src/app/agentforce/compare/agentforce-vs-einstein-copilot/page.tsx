import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react'

const SF_BLUE = '#00A1E0'
const BASE = 'https://kovil.ai'
const CANONICAL = `${BASE}/agentforce/compare/agentforce-vs-einstein-copilot`

export const metadata: Metadata = {
  title: 'Agentforce vs Einstein Copilot: Key Differences, What Changed & Migration Guide',
  description: 'Einstein Copilot was replaced by Agentforce in October 2024. This guide explains the architectural differences — Atlas Reasoning Engine vs prompt chains, autonomous agents vs co-pilot — and what you need to do to migrate.',
  alternates: { canonical: CANONICAL },
  keywords: ['agentforce vs einstein copilot','einstein copilot vs agentforce','difference between agentforce and einstein copilot','agentforce einstein copilot migration','what replaced einstein copilot','einstein copilot deprecated','agentforce vs copilot salesforce','salesforce einstein copilot upgrade agentforce','atlas reasoning engine vs einstein copilot','migrate einstein copilot to agentforce'],
  openGraph: { type: 'article', title: 'Agentforce vs Einstein Copilot: Key Differences & Migration Guide | Kovil AI', description: 'Einstein Copilot was replaced by Agentforce in October 2024. Full technical comparison from Salesforce implementation engineers.', url: CANONICAL, siteName: 'Kovil AI', images: [{ url: `${BASE}/og-agentforce.png`, width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'Agentforce vs Einstein Copilot | Kovil AI', description: 'Einstein Copilot replaced by Agentforce Oct 2024. Full technical comparison.', images: [`${BASE}/og-agentforce.png`] },
}

const schemas = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'Agentforce vs Einstein Copilot: Key Differences & Migration Guide', url: CANONICAL, datePublished: '2026-06-24', dateModified: '2026-06-24', author: { '@type': 'Organization', name: 'Kovil AI', url: BASE }, publisher: { '@type': 'Organization', name: 'Kovil AI', url: BASE } },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    { '@type': 'Question', name: 'What is the difference between Agentforce and Einstein Copilot?', acceptedAnswer: { '@type': 'Answer', text: "Einstein Copilot was Salesforce's reactive AI assistant. Agentforce replaced it in October 2024 with the Atlas Reasoning Engine — enabling autonomous multi-step action without user prompting." } },
    { '@type': 'Question', name: 'Is Einstein Copilot deprecated?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Salesforce officially replaced Einstein Copilot with Agentforce in October 2024.' } },
    { '@type': 'Question', name: 'Do I need to rebuild everything when migrating from Einstein Copilot to Agentforce?', acceptedAnswer: { '@type': 'Answer', text: "CRM data, Flows, Apex, and MuleSoft integrations carry over. Prompt templates need redesigning as Topics and Actions. Most migrations take 2–4 weeks." } },
    { '@type': 'Question', name: 'What is the Atlas Reasoning Engine?', acceptedAnswer: { '@type': 'Answer', text: "Salesforce's hybrid AI reasoning layer in Agentforce — a four-phase loop: Observe, Plan, Act, Reflect — enabling autonomous multi-step task completion." } },
    { '@type': 'Question', name: 'How is Agentforce priced differently from Einstein Copilot?', acceptedAnswer: { '@type': 'Answer', text: 'Einstein Copilot was a per-user add-on. Agentforce uses consumption pricing at approximately $2 per conversation.' } },
    { '@type': 'Question', name: 'Can Agentforce do everything Einstein Copilot could?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — and significantly more. Every Einstein Copilot capability is available in Agentforce, plus autonomous execution and external integrations.' } },
  ]},
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE }, { '@type': 'ListItem', position: 2, name: 'Agentforce', item: `${BASE}/agentforce` }, { '@type': 'ListItem', position: 3, name: 'Agentforce vs Einstein Copilot', item: CANONICAL }] },
]

const tableRows = [
  { feature: 'General availability', einstein: 'Early 2024', agentforce: 'October 2024' },
  { feature: 'Agent model', einstein: 'Reactive co-pilot (user-prompted)', agentforce: 'Autonomous agent (acts independently)' },
  { feature: 'Reasoning architecture', einstein: 'Prompt chains', agentforce: 'Atlas Reasoning Engine (4-phase loop)' },
  { feature: 'Configuration model', einstein: 'Prompt templates', agentforce: 'Topics, Actions & Instructions' },
  { feature: 'Multi-step autonomous tasks', einstein: 'Not supported', agentforce: 'Full autonomous execution' },
  { feature: 'External system integration', einstein: 'Salesforce data only', agentforce: 'MuleSoft, MCP, HTTP callouts, Data Cloud' },
  { feature: 'Trust & security', einstein: 'Basic Einstein Trust Layer', agentforce: 'Full Einstein Trust Layer + audit trail' },
  { feature: 'Pricing model', einstein: 'Per-user add-on', agentforce: '~$2 per conversation (consumption)' },
  { feature: 'Platform status', einstein: 'Deprecated Oct 2024', agentforce: 'Current strategic platform' },
  { feature: 'Supported clouds', einstein: 'Sales, Service', agentforce: 'Sales, Service, Marketing, Data Cloud, Ops' },
]

const atlasSteps = [
  { num: '01', label: 'Observe', desc: 'Intake context from conversation, CRM records, and Data Cloud in real time', color: SF_BLUE },
  { num: '02', label: 'Plan', desc: 'Identify which Topic applies and which Actions are needed to achieve the goal', color: '#0070D2' },
  { num: '03', label: 'Act', desc: 'Execute Flows, Apex calls, MuleSoft APIs, or MCP tools autonomously', color: '#5A5FCE' },
  { num: '04', label: 'Reflect', desc: 'Evaluate outcome and determine next steps — no human needed at each turn', color: '#8B5CF6' },
]

const faqs = [
  { q: 'What is the difference between Agentforce and Einstein Copilot?', a: "Einstein Copilot was Salesforce's reactive AI assistant — you prompted it, it responded. Agentforce replaced it in October 2024 with the Atlas Reasoning Engine, enabling autonomous multi-step action. It is a full architectural upgrade, not a rebrand." },
  { q: 'Is Einstein Copilot deprecated?', a: 'Yes. Salesforce officially replaced Einstein Copilot with Agentforce in October 2024. Agentforce is the strategic platform going forward — no new feature investment in Einstein Copilot.' },
  { q: 'Do I need to rebuild everything when migrating?', a: "CRM data, Flows, Apex, and integrations carry over. Einstein Copilot prompt templates don't map to Agentforce Topics and Actions — these need redesigning in Agent Builder. Most single-use-case migrations take 2–4 weeks." },
  { q: 'What is the Atlas Reasoning Engine?', a: "Salesforce's hybrid AI reasoning layer in Agentforce. It operates in a four-phase loop — Observe, Plan, Act, Reflect — enabling autonomous multi-step task execution that Einstein Copilot could not perform." },
  { q: 'How is pricing different?', a: 'Einstein Copilot was a per-user add-on bundled into licences. Agentforce is consumption-based at ~$2 per conversation, with volume discounts for enterprise commitments.' },
  { q: 'Can Agentforce do everything Einstein Copilot could?', a: 'Yes — and significantly more. All Einstein Copilot capabilities are available in Agentforce, plus autonomous execution, MuleSoft and MCP integrations, and enhanced Trust Layer guardrails.' },
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
          <div className="absolute top-0 right-0 w-[900px] h-[700px] pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 85% 5%, rgba(0,161,224,0.14) 0%, transparent 65%)' }} />
          <div className="absolute bottom-0 left-0 w-[600px] h-[500px] pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 50% at 5% 95%, rgba(0,112,210,0.09) 0%, transparent 65%)' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[600px] pointer-events-none" style={{ background: 'radial-gradient(ellipse 100% 60% at 50% 50%, rgba(0,161,224,0.04) 0%, transparent 70%)' }} />

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-10" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span className="opacity-40">/</span>
              <Link href="/agentforce" className="hover:text-foreground transition-colors">Agentforce</Link>
              <span className="opacity-40">/</span>
              <span className="text-foreground">vs Einstein Copilot</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm" style={{ border: `1px solid ${SF_BLUE}40`, background: `linear-gradient(135deg, ${SF_BLUE}15 0%, ${SF_BLUE}07 100%)`, color: SF_BLUE }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: SF_BLUE }} />
                Comparison Guide · June 2026
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border" style={{ background: 'rgba(251,191,36,0.08)', color: '#FBBF24', borderColor: 'rgba(251,191,36,0.20)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Einstein Copilot: Deprecated Oct 2024
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-black tracking-tight mb-7 leading-[1.02]">
              <span className="text-foreground">Agentforce</span>
              <br />
              <span className="text-muted-foreground/25">vs </span>
              <span style={{ background: `linear-gradient(135deg, ${SF_BLUE} 0%, #60CFFF 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Einstein Copilot
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12">
              <strong className="text-foreground">Einstein Copilot no longer exists.</strong> Salesforce replaced it with Agentforce in October 2024 — a full architectural upgrade powered by the Atlas Reasoning Engine. If you built on Einstein Copilot, migration is not optional; it&apos;s strategic.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Replaced', value: 'Oct 2024' },
                { label: 'Typical migration', value: '2–4 weeks' },
                { label: 'Features lost', value: 'Zero' },
                { label: 'New capability', value: 'Autonomous multi-step' },
              ].map(chip => (
                <div key={chip.label} className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border bg-card/80 backdrop-blur-sm text-sm shadow-sm">
                  <span className="text-muted-foreground">{chip.label}:</span>
                  <span className="font-bold text-foreground">{chip.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FULL-WIDTH COMPARISON TABLE (DARK) ── */}
        <section className="py-28 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #050D1A 0%, #07111F 100%)' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] pointer-events-none" style={{ background: `radial-gradient(ellipse, ${SF_BLUE}10 0%, transparent 70%)` }} />
          <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: `linear-gradient(${SF_BLUE} 1px, transparent 1px), linear-gradient(90deg, ${SF_BLUE} 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <p className="text-sm font-mono font-semibold tracking-widest uppercase mb-3" style={{ color: SF_BLUE }}>Side by Side</p>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-14 text-white">Full Feature Comparison</h2>

            <div className="rounded-3xl overflow-hidden" style={{ border: `1px solid ${SF_BLUE}20`, boxShadow: `0 40px 120px ${SF_BLUE}12` }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: `linear-gradient(135deg, ${SF_BLUE}18 0%, ${SF_BLUE}08 100%)` }}>
                    <th className="text-left px-8 py-5 font-semibold text-white/40 text-xs uppercase tracking-widest w-52">Feature</th>
                    <th className="text-left px-8 py-5 font-semibold">
                      <span className="flex items-center gap-2 text-amber-400/70 text-sm">
                        <span className="h-2 w-2 rounded-full bg-amber-400/50" />
                        Einstein Copilot
                      </span>
                    </th>
                    <th className="text-left px-8 py-5 font-bold">
                      <span className="flex items-center gap-2 text-sm" style={{ color: SF_BLUE }}>
                        <span className="h-2 w-2 rounded-full animate-pulse" style={{ background: SF_BLUE }} />
                        Agentforce
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, i) => (
                    <tr key={row.feature} className="border-t transition-colors hover:bg-white/[0.02]" style={{ borderColor: 'rgba(0,161,224,0.08)', background: i % 2 === 0 ? 'rgba(0,161,224,0.018)' : 'transparent' }}>
                      <td className="px-8 py-4 font-medium text-white/50 text-xs uppercase tracking-wider">{row.feature}</td>
                      <td className="px-8 py-4 text-white/35 text-sm">{row.einstein}</td>
                      <td className="px-8 py-4 text-sm font-semibold text-white">{row.agentforce}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── WHAT WAS EINSTEIN COPILOT ── */}
        <section className="py-28 border-b border-border">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-20 items-start">
              <div>
                <p className="text-sm font-mono font-semibold tracking-widest uppercase mb-4" style={{ color: SF_BLUE }}>Context</p>
                <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-8 text-foreground leading-tight">What Was<br />Einstein Copilot?</h2>
                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>Einstein Copilot was Salesforce&apos;s first AI assistant, launching in 2023 and reaching GA in early 2024. It operated as a <strong className="text-foreground">reactive co-pilot</strong> — responding when users prompted it to summarise records, draft emails, or answer CRM questions.</p>
                  <p>Its fundamental limitation was a <strong className="text-foreground">prompt-chain architecture</strong>. It fired pre-configured prompts in sequence when triggered — effective for single-turn tasks, but incapable of autonomous multi-step workflows. It could not act without human prompting at each step.</p>
                  <p>Salesforce recognised this limitation and replaced it entirely with Agentforce, powered by the Atlas Reasoning Engine, in October 2024.</p>
                </div>
              </div>

              <div className="rounded-3xl p-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #050D1A 0%, #0C1E38 100%)', border: '1px solid rgba(251,191,36,0.12)', boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}>
                <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(251,191,36,0.06) 0%, transparent 70%)' }} />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                    <p className="text-xs font-mono text-amber-400 tracking-widest uppercase font-semibold">Deprecated Platform</p>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-7">Why it was replaced</h3>
                  <ul className="space-y-4">
                    {[
                      'Reactive only — could not act without human prompting',
                      'Single-turn prompt chains, no multi-step reasoning',
                      'Salesforce data only — no external integration path',
                      'Per-user licensing — not aligned with AI usage patterns',
                      'Limited to Sales and Service Clouds only',
                    ].map(item => (
                      <li key={item} className="flex items-start gap-3 text-sm text-white/50">
                        <span className="h-5 w-5 rounded-full flex items-center justify-center text-amber-400 font-bold text-xs shrink-0 mt-0.5" style={{ background: 'rgba(251,191,36,0.12)' }}>×</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ATLAS REASONING ENGINE (DARK) ── */}
        <section className="py-28 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #050D1A 0%, #070F1C 100%)' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0,161,224,0.07) 0%, transparent 70%)' }} />
          <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: `linear-gradient(${SF_BLUE} 1px, transparent 1px), linear-gradient(90deg, ${SF_BLUE} 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <p className="text-sm font-mono font-semibold tracking-widest uppercase mb-3" style={{ color: SF_BLUE }}>What Changed Everything</p>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-3 text-white">The Atlas Reasoning Engine</h2>
            <p className="text-white/40 text-lg max-w-2xl mb-16 leading-relaxed">The architectural foundation that makes Agentforce categorically different. Four phases, one autonomous loop — no human in the middle.</p>

            <div className="grid md:grid-cols-4 gap-4 mb-14">
              {atlasSteps.map(step => (
                <div key={step.num} className="group relative rounded-2xl p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(circle at top left, ${step.color}20 0%, transparent 65%)` }} />
                  <p className="font-display text-6xl font-black mb-4 leading-none select-none" style={{ color: `${step.color}20` }}>{step.num}</p>
                  <p className="font-bold text-lg mb-3" style={{ color: step.color }}>{step.label}</p>
                  <p className="text-xs text-white/35 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl p-6 flex items-start gap-4" style={{ background: `${SF_BLUE}09`, border: `1px solid ${SF_BLUE}22` }}>
              <div className="h-8 w-8 rounded-lg shrink-0 flex items-center justify-center mt-0.5" style={{ background: `${SF_BLUE}20`, boxShadow: `0 0 20px ${SF_BLUE}30` }}>
                <span style={{ color: SF_BLUE }} className="text-sm font-black">→</span>
              </div>
              <p className="text-sm text-white/55 leading-relaxed">
                <strong className="text-white">The difference in practice:</strong> An Einstein Copilot could summarise an open case when you asked it to. An Agentforce agent <em className="text-white/80">observes a new case arriving, plans resolution steps, executes Flows and API calls, resolves the case, and closes the ticket</em> — without you asking it to do anything.
              </p>
            </div>
          </div>
        </section>

        {/* ── MIGRATION GUIDE ── */}
        <section className="py-28 border-b border-border">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-mono font-semibold tracking-widest uppercase mb-3" style={{ color: SF_BLUE }}>Migration Guide</p>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-4 text-foreground leading-tight">What Carries Over<br />vs What to Rebuild</h2>
            <p className="text-muted-foreground text-lg mb-14 max-w-xl">Migration is a redesign exercise, not a lift-and-shift. The Salesforce infrastructure stays — the AI layer gets rebuilt properly.</p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="rounded-3xl p-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(52,211,153,0.05) 0%, rgba(52,211,153,0.02) 100%)', border: '1px solid rgba(52,211,153,0.15)' }}>
                <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(52,211,153,0.08) 0%, transparent 70%)' }} />
                <div className="flex items-center gap-3 mb-7">
                  <div className="h-9 w-9 rounded-full flex items-center justify-center" style={{ background: 'rgba(52,211,153,0.15)' }}>
                    <CheckCircle2 className="h-4.5 w-4.5 text-emerald-400" style={{ height: '18px', width: '18px' }} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">What carries over</h3>
                </div>
                <ul className="space-y-3.5">
                  {['Salesforce CRM data, objects, and records', 'Existing Flows and Apex code', 'Data Cloud configuration (if in use)', 'MuleSoft integration layers', 'User permissions and org structure', 'Einstein Trust Layer baseline settings'].map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="text-emerald-400 shrink-0 mt-0.5 font-bold text-base leading-none">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl p-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(251,191,36,0.05) 0%, rgba(251,191,36,0.02) 100%)', border: '1px solid rgba(251,191,36,0.15)' }}>
                <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(251,191,36,0.07) 0%, transparent 70%)' }} />
                <div className="flex items-center gap-3 mb-7">
                  <div className="h-9 w-9 rounded-full flex items-center justify-center" style={{ background: 'rgba(251,191,36,0.12)' }}>
                    <AlertCircle className="h-4.5 w-4.5 text-amber-400" style={{ height: '18px', width: '18px' }} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">What needs redesigning</h3>
                </div>
                <ul className="space-y-3.5">
                  {['Prompt templates → Topics and Actions in Agent Builder', 'Co-pilot configurations → full agent definitions', 'Single-turn logic → multi-step reasoning flows', 'Guardrail rules → Einstein Trust Layer policies', 'Per-user pricing → per-conversation budget model'].map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="text-amber-400 shrink-0 mt-0.5 font-bold text-base leading-none">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: 'Single use case', time: '2–4 weeks', desc: 'One agent, one Cloud, well-scoped requirements', color: SF_BLUE },
                { label: 'Multi-cloud deployment', time: '6–10 weeks', desc: 'Sales + Service, multiple agents, Data Cloud', color: '#0070D2' },
                { label: 'Enterprise + MuleSoft', time: '10–16 weeks', desc: 'Full org, external system integrations, compliance', color: '#5A5FCE' },
              ].map(t => (
                <div key={t.label} className="group rounded-2xl p-7 text-center bg-card border border-border hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(ellipse at top, ${t.color}08 0%, transparent 70%)` }} />
                  <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">{t.label}</p>
                  <p className="font-display text-3xl font-black mb-2" style={{ color: t.color }}>{t.time}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ (DARK) ── */}
        <section className="py-28 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #050D1A 0%, #07111F 100%)' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${SF_BLUE}08 0%, transparent 70%)` }} />
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <p className="text-sm font-mono font-semibold tracking-widest uppercase mb-3" style={{ color: SF_BLUE }}>FAQ</p>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-14 text-white">Common Questions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {faqs.map(faq => (
                <div key={faq.q} className="group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'rgba(255,255,255,0.025)', border: `1px solid ${SF_BLUE}18` }}>
                  <div className="w-6 h-0.5 mb-4 rounded-full" style={{ background: `linear-gradient(90deg, ${SF_BLUE} 0%, transparent 100%)` }} />
                  <h3 className="font-semibold text-white/85 mb-3 text-sm leading-snug">{faq.q}</h3>
                  <p className="text-xs text-white/38 leading-relaxed">{faq.a}</p>
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
                { title: 'Agentforce vs Microsoft Copilot', href: '/agentforce/compare/agentforce-vs-microsoft-copilot' },
                { title: 'How Agentforce Works: Atlas, Topics & Actions', href: '/agentforce/playbook/how-does-agentforce-work' },
                { title: 'Agentforce Pricing Guide 2026', href: '/agentforce/pricing' },
                { title: 'Agentforce Strategy & Readiness', href: '/agentforce/services/agentforce-strategy-readiness' },
                { title: 'Agentforce FAQ', href: '/agentforce/faq' },
                { title: 'Start your Agentforce build', href: '/book-a-call' },
              ].map(link => (
                <Link key={link.href} href={link.href} className="group flex items-center gap-2 p-4 bg-card border border-border rounded-xl hover:border-accent/40 hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm font-medium text-foreground">
                  <span className="flex-1">{link.title}</span>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CINEMATIC CTA ── */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #050D1A 0%, #091526 60%, #0C1E38 100%)' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none" style={{ background: `radial-gradient(ellipse, ${SF_BLUE}22 0%, transparent 65%)` }} />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(0,161,224,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,161,224,1) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <p className="text-sm font-mono font-semibold tracking-widest uppercase mb-5" style={{ color: SF_BLUE }}>Agentforce Migration Partner · New York</p>
            <h2 className="font-display text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
              Migrating from<br className="hidden md:block" /> Einstein Copilot?
            </h2>
            <p className="text-white/40 mb-12 max-w-xl mx-auto leading-relaxed text-lg">Kovil AI handles the full migration — audit, redesign, and go-live in fixed-price sprints. Most single-use-case migrations take 2–4 weeks.</p>
            <Link href="/book-a-call" className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-white transition-all hover:-translate-y-1 hover:shadow-2xl text-base" style={{ background: `linear-gradient(135deg, ${SF_BLUE} 0%, #0070D2 100%)`, boxShadow: `0 10px 40px ${SF_BLUE}55` }}>
              Book a free migration assessment <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>

      </main>
    </>
  )
}
