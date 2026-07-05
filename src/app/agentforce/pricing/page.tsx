import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const SF_BLUE = '#00A1E0'
const BASE = 'https://kovil.ai'
const CANONICAL = `${BASE}/agentforce/pricing`

export const metadata: Metadata = {
  title: 'Agentforce Pricing 2026: $2 Per Conversation, Volume Tiers & Total Cost of Ownership',
  description: 'Agentforce costs approximately $2 per conversation in 2026. This guide covers what counts as a conversation, volume discount tiers, additional licence costs (Data Cloud, Einstein, MuleSoft), and total cost of ownership.',
  alternates: { canonical: CANONICAL },
  keywords: ['agentforce pricing','agentforce cost 2026','agentforce price per conversation','how much does agentforce cost','agentforce pricing model','agentforce per conversation cost','agentforce total cost of ownership','agentforce volume discounts','salesforce agentforce pricing','agentforce implementation cost'],
  openGraph: { type: 'article', title: 'Agentforce Pricing 2026: $2 Per Conversation Explained | Kovil AI', description: 'What Agentforce costs in 2026, what counts as a conversation, volume tiers, and total implementation cost of ownership.', url: CANONICAL, siteName: 'Kovil AI', images: [{ url: `${BASE}/og-agentforce.png`, width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'Agentforce Pricing 2026: $2 Per Conversation | Kovil AI', description: 'Full Agentforce pricing breakdown — conversation model, volume tiers, additional licences, and implementation costs.', images: [`${BASE}/og-agentforce.png`] },
}

const schemas = [
  { '@context': 'https://schema.org', '@type': 'Article', headline: 'Agentforce Pricing 2026: Complete Cost Guide', url: CANONICAL, datePublished: '2026-06-24', dateModified: '2026-06-24', author: { '@type': 'Organization', name: 'Kovil AI', url: BASE }, publisher: { '@type': 'Organization', name: 'Kovil AI', url: BASE } },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
    { '@type': 'Question', name: 'How much does Agentforce cost?', acceptedAnswer: { '@type': 'Answer', text: 'Agentforce is priced at approximately $2 per conversation as of 2026. Volume discounts are available for enterprise deployments.' } },
    { '@type': 'Question', name: 'What counts as an Agentforce conversation?', acceptedAnswer: { '@type': 'Answer', text: "An Agentforce conversation is a single end-to-end agent session — from initiation through to resolution, human handoff, or session timeout. Multiple messages and Actions within one conversation don't increase the price." } },
    { '@type': 'Question', name: 'Does Agentforce offer volume discounts?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Enterprise organisations committing to high monthly conversation volumes can negotiate volume discount packages with Salesforce.' } },
    { '@type': 'Question', name: 'What other Salesforce licences do I need for Agentforce?', acceptedAnswer: { '@type': 'Answer', text: "Agentforce requires an active Salesforce org licence. Additional licences that may be needed: Data Cloud, Einstein, and MuleSoft — purchased separately from Agentforce conversation credits." } },
    { '@type': 'Question', name: 'How much does an Agentforce implementation cost?', acceptedAnswer: { '@type': 'Answer', text: "Kovil AI offers fixed-price sprint engagements: single-use-case deployments typically cost £15,000–£40,000; multi-cloud or MuleSoft-integrated deployments range from £50,000–£150,000+." } },
    { '@type': 'Question', name: 'Is Agentforce cheaper than Microsoft Copilot?', acceptedAnswer: { '@type': 'Answer', text: "Depends on volume. Microsoft Copilot for M365 is $30/user/month. Agentforce at $2/conversation is more efficient for high-volume autonomous CRM workflows. At 10,000+ conversations/month with volume discounts, Agentforce typically wins on unit economics." } },
  ]},
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: BASE }, { '@type': 'ListItem', position: 2, name: 'Agentforce', item: `${BASE}/agentforce` }, { '@type': 'ListItem', position: 3, name: 'Agentforce Pricing', item: CANONICAL }] },
]

const volTiers = [
  { vol: '0 – 1,000', price: '~$2.00', monthly: '$0 – $2,000', org: 'SMB / pilot deployment', pct: 15 },
  { vol: '1,000 – 5,000', price: '~$1.70–$2.00', monthly: '$1,700 – $10,000', org: 'Mid-market, 1–2 use cases', pct: 30 },
  { vol: '5,000 – 25,000', price: '~$1.40–$1.70', monthly: '$7,000 – $42,500', org: 'Mid-enterprise, multi-cloud', pct: 55 },
  { vol: '25,000 – 100,000', price: '~$1.00–$1.40', monthly: '$25,000 – $140,000', org: 'Enterprise, broad deployment', pct: 75 },
  { vol: '100,000+', price: 'Negotiated', monthly: 'Custom contract', org: 'Strategic enterprise', pct: 95 },
]

const licences = [
  { name: 'Salesforce CRM', cost: 'Existing contract', notes: 'Required. Sales Cloud, Service Cloud, or equivalent. If you already have Salesforce, this is not an incremental cost.', required: true, color: SF_BLUE },
  { name: 'Data Cloud', cost: 'Separate per-org pricing', notes: 'Unlocks unified customer profiles — significantly improves agent decision quality. Not required to start, but commonly added as deployments mature.', required: false, color: '#34D399' },
  { name: 'Einstein', cost: 'Included in some editions; add-on in others', notes: 'Enables additional predictive AI features like lead scoring, forecasting, and email insights — separate from Agentforce core reasoning.', required: false, color: '#F59E0B' },
  { name: 'MuleSoft', cost: 'Separate per-core pricing', notes: 'Required if Agentforce agents need to call external APIs or systems. HTTP callouts via Apex are available without MuleSoft for simpler integrations.', required: false, color: '#A78BFA' },
]

const implTiers = [
  { tier: 'Focused', price: '£15k–£40k', timeline: '4–6 weeks', desc: 'Single use case, one Salesforce Cloud. Ideal for a pilot or first production agent.', includes: ['Use case discovery & scoping', 'Topics and Actions design', 'Flow / Apex development', 'Einstein Trust Layer setup', 'UAT and production go-live'], color: SF_BLUE },
  { tier: 'Multi-Cloud', price: '£50k–£120k', timeline: '8–12 weeks', desc: 'Two or more Salesforce Clouds, multiple use cases or departments.', includes: ['Full readiness assessment', 'Multi-cloud Topics and Actions', 'Data Cloud integration', 'Multi-agent orchestration', 'Training & handover docs'], color: '#5A5FCE' },
  { tier: 'Enterprise', price: '£120k+', timeline: '12–20 weeks', desc: 'MuleSoft integration, multi-region, complex compliance requirements.', includes: ['Enterprise architecture review', 'MuleSoft API layer build', 'Compliance configuration', 'Performance and load testing', 'Ongoing optimisation retainer'], color: '#8B5CF6' },
]

const pricingFaqs = [
  { q: 'How much does Agentforce cost?', a: 'Agentforce is priced at approximately $2 per conversation as of 2026. This is consumption-based — you pay for what your agents actually do. Volume discounts are available for enterprise deployments. This is separate from base Salesforce CRM licences, Data Cloud, Einstein, and MuleSoft.' },
  { q: 'What counts as a conversation?', a: "A single end-to-end agent session — from initiation through to resolution, human handoff, or session timeout. A conversation may include multiple messages and multiple Action executions (Flows, API calls). The number of messages doesn't affect the price." },
  { q: 'Are volume discounts available?', a: 'Yes. Enterprise organisations can negotiate volume discount packages with Salesforce for high monthly or annual commitments. Discount tiers typically start at 10,000+ conversations per month. Kovil AI can support these commercial negotiations.' },
  { q: 'What additional licences do I need?', a: "Agentforce requires an active Salesforce org licence. Depending on your use case: Data Cloud (for unified customer profiles), Einstein (for predictive AI), and MuleSoft (for external integration) are purchased separately." },
  { q: 'How much does implementation cost?', a: 'Kovil AI offers fixed-price sprints: single-use-case deployments typically cost £15,000–£40,000; multi-cloud or MuleSoft-integrated deployments range from £50,000–£150,000+. Book a free assessment for an exact estimate.' },
  { q: 'Is Agentforce cheaper than Microsoft Copilot?', a: "Depends on volume. Microsoft Copilot is $30/user/month (flat). Agentforce at $2/conversation is more efficient for high-volume autonomous CRM workflows. At 10,000 conversations/month with volume discounts, Agentforce typically wins on unit economics for automation-heavy use cases." },
]

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <main className="bg-background min-h-screen">

        {/* ── HERO: Giant $2 ── */}
        <section className="relative overflow-hidden pt-20 pb-32" style={{ background: 'linear-gradient(180deg, #050D1A 0%, #07111F 80%, transparent 100%)' }}>
          <div className="absolute top-0 right-0 w-[1000px] h-[800px] pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 55% at 85% 5%, ${SF_BLUE}14 0%, transparent 65%)` }} />
          <div className="absolute bottom-0 left-0 w-[600px] h-[500px] pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 50% at 5% 95%, rgba(0,112,210,0.10) 0%, transparent 65%)' }} />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(${SF_BLUE} 1px, transparent 1px), linear-gradient(90deg, ${SF_BLUE} 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-10" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="opacity-40">/</span>
              <Link href="/agentforce" className="hover:text-white transition-colors">Agentforce</Link>
              <span className="opacity-40">/</span>
              <span className="text-white/60">Pricing</span>
            </nav>

            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm mb-8" style={{ border: `1px solid ${SF_BLUE}40`, background: `linear-gradient(135deg, ${SF_BLUE}15 0%, ${SF_BLUE}07 100%)`, color: SF_BLUE }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: SF_BLUE }} />
              Pricing Guide · June 2026
            </span>

            <div className="grid md:grid-cols-2 gap-12 items-end mb-12">
              <div>
                <h1 className="font-display font-black tracking-tight leading-none mb-2">
                  <span className="text-7xl md:text-9xl" style={{ background: `linear-gradient(135deg, ${SF_BLUE} 0%, #60CFFF 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>$2</span>
                </h1>
                <p className="text-2xl text-white/60 font-semibold mb-5">per conversation</p>
                <p className="text-white/40 text-base leading-relaxed max-w-md">
                  Agentforce uses a consumption-based model — you pay for what your agents actually do. Volume discounts are available at enterprise scale. Separate from your Salesforce CRM licence.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { label: '1,000 conversations / month', value: '$2,000 / month', note: 'at standard rate' },
                  { label: '5,000 conversations / month', value: '~$8–10K / month', note: 'with volume discount' },
                  { label: '25,000 conversations / month', value: '~$30–45K / month', note: 'enterprise tier' },
                ].map(row => (
                  <div key={row.label} className="flex items-center justify-between rounded-xl px-5 py-4" style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${SF_BLUE}18` }}>
                    <span className="text-sm text-white/50">{row.label}</span>
                    <div className="text-right">
                      <span className="text-sm font-bold text-white">{row.value}</span>
                      <span className="text-xs text-white/30 ml-2">{row.note}</span>
                    </div>
                  </div>
                ))}
                <p className="text-xs text-white/25 px-2">* Volume discount estimates. Actual rates vary by contract.</p>
              </div>
            </div>

            {/* Quick stat chips */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Pricing model', value: 'Consumption-based' },
                { label: 'Billing unit', value: 'Per conversation' },
                { label: 'Volume discounts', value: 'Yes, 10k+ / month' },
                { label: 'vs M365 Copilot', value: '$30 / user / month' },
              ].map(chip => (
                <div key={chip.label} className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm">
                  <span className="text-white/35">{chip.label}:</span>
                  <strong className="text-white font-bold">{chip.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT COUNTS AS A CONVERSATION ── */}
        <section className="py-28 border-b border-border">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-mono font-semibold tracking-widest uppercase mb-3" style={{ color: SF_BLUE }}>The Billing Unit</p>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-4 text-foreground leading-tight">What Exactly Counts<br />as a Conversation?</h2>
            <p className="text-muted-foreground text-lg mb-14 max-w-xl leading-relaxed">Getting this right is critical for accurate cost modelling. This is where most Agentforce estimates go wrong.</p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="rounded-3xl p-8 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${SF_BLUE}07 0%, ${SF_BLUE}03 100%)`, border: `1px solid ${SF_BLUE}20` }}>
                <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none" style={{ background: `radial-gradient(circle at top right, ${SF_BLUE}10 0%, transparent 70%)` }} />
                <h3 className="font-display text-xl font-bold text-foreground mb-6">One conversation includes:</h3>
                <ul className="space-y-4">
                  {['The initiating event (message, system trigger, or agent handoff)', 'All back-and-forth exchanges between user and agent', 'All Atlas Reasoning Engine Observe-Plan-Act-Reflect cycles', 'All Action executions (Flows, Apex, API calls) within the session', 'The resolution, handoff, or session timeout that ends the conversation'].map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="h-5 w-5 rounded-full shrink-0 mt-0.5 flex items-center justify-center text-xs font-black" style={{ background: `${SF_BLUE}20`, color: SF_BLUE }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl p-8 relative overflow-hidden bg-card border border-border">
                <h3 className="font-display text-xl font-bold text-foreground mb-6">What does NOT add cost:</h3>
                <ul className="space-y-4">
                  {['Number of messages within a single conversation', 'Number of Actions (Flows, API calls) within a conversation', 'Duration of the conversation (within session limits)', 'Reasoning cycles the Atlas Engine runs internally', 'Human agent time during a handoff (billed as Salesforce seat)'].map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="h-5 w-5 rounded-full shrink-0 mt-0.5 flex items-center justify-center text-xs font-black text-muted-foreground/50 bg-muted">×</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-2xl p-6 flex items-start gap-4" style={{ background: `${SF_BLUE}08`, border: `1px solid ${SF_BLUE}22` }}>
              <div className="h-8 w-8 rounded-lg shrink-0 flex items-center justify-center mt-0.5" style={{ background: `${SF_BLUE}20` }}>
                <span style={{ color: SF_BLUE }} className="text-sm font-black">→</span>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">
                <strong className="text-foreground">Example:</strong> A customer contacts your service agent about a billing dispute. The agent exchanges 8 messages, looks up the account, runs a refund Flow, and sends a confirmation email — then closes the case. That entire interaction = <strong className="text-foreground">1 conversation = $2</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* ── VOLUME TIERS (DARK) ── */}
        <section className="py-28 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #050D1A 0%, #07111F 100%)' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${SF_BLUE}09 0%, transparent 70%)` }} />
          <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: `linear-gradient(${SF_BLUE} 1px, transparent 1px), linear-gradient(90deg, ${SF_BLUE} 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <p className="text-sm font-mono font-semibold tracking-widest uppercase mb-3" style={{ color: SF_BLUE }}>Volume Tiers</p>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-14 text-white">Volume Discount Tiers</h2>

            <div className="space-y-3 mb-8">
              {volTiers.map((tier, i) => (
                <div key={tier.vol} className="group rounded-2xl p-5 flex items-center gap-6 transition-all duration-300 hover:scale-[1.01]" style={{ background: 'rgba(255,255,255,0.025)', border: `1px solid ${SF_BLUE}${15 + i * 5}` }}>
                  {/* Volume bar */}
                  <div className="hidden md:block w-48 shrink-0">
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all" style={{ width: `${tier.pct}%`, background: `linear-gradient(90deg, ${SF_BLUE} 0%, #60CFFF 100%)` }} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white/70 mb-0.5">{tier.vol} conversations/month</p>
                    <p className="text-xs text-white/30">{tier.org}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-display font-black text-lg" style={{ background: `linear-gradient(135deg, ${SF_BLUE} 0%, #60CFFF 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{tier.price}</p>
                    <p className="text-xs text-white/30">est. {tier.monthly}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-white/25">Prices are estimates based on published Salesforce pricing as of June 2026. Validate with your Salesforce Account Executive.</p>
          </div>
        </section>

        {/* ── ADDITIONAL LICENCES ── */}
        <section className="py-28 border-b border-border">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-mono font-semibold tracking-widest uppercase mb-3" style={{ color: SF_BLUE }}>Full Cost Picture</p>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-4 text-foreground leading-tight">Additional Licence<br />Costs</h2>
            <p className="text-muted-foreground text-lg mb-14 max-w-xl">Agentforce conversation credits are only part of the story — depending on your use case, you may need additional Salesforce platform licences.</p>

            <div className="grid md:grid-cols-2 gap-5">
              {licences.map(lic => (
                <div key={lic.name} className="group rounded-3xl p-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl bg-card border border-border">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(circle at top left, ${lic.color}08 0%, transparent 65%)` }} />
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-60" style={{ background: `linear-gradient(90deg, ${lic.color} 0%, ${lic.color}40 100%)` }} />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display text-xl font-bold text-foreground">{lic.name}</h3>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${lic.required ? 'text-white' : 'text-muted-foreground border border-border'}`} style={lic.required ? { background: lic.color } : {}}>
                        {lic.required ? 'Required' : 'Optional'}
                      </span>
                    </div>
                    <p className="text-sm font-semibold mb-3" style={{ color: lic.color }}>{lic.cost}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{lic.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── IMPLEMENTATION COSTS (DARK) ── */}
        <section className="py-28 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #050D1A 0%, #07111F 100%)' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,161,224,0.06) 0%, transparent 70%)' }} />
          <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <p className="text-sm font-mono font-semibold tracking-widest uppercase mb-3" style={{ color: SF_BLUE }}>Kovil AI Fixed-Price Sprints</p>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-4 text-white leading-tight">Implementation<br />Costs</h2>
            <p className="text-white/40 text-lg mb-16 max-w-xl">Agentforce requires Salesforce expertise — Agent Builder, Flows, Apex, often MuleSoft. Fixed-price sprints so you know the cost before we start.</p>

            <div className="grid md:grid-cols-3 gap-5">
              {implTiers.map(tier => (
                <div key={tier.tier} className="group rounded-3xl p-7 flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-1" style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${tier.color}20` }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(circle at top, ${tier.color}12 0%, transparent 65%)` }} />
                  {/* Top bar */}
                  <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, ${tier.color} 0%, transparent 100%)` }} />
                  <div className="relative z-10 flex flex-col flex-1">
                    <p className="text-xs font-mono font-semibold tracking-widest uppercase mb-3" style={{ color: tier.color }}>{tier.tier} Deployment</p>
                    <p className="font-display text-4xl font-black mb-1 text-white">{tier.price}</p>
                    <p className="text-xs text-white/30 mb-4 font-mono">{tier.timeline} · fixed price</p>
                    <p className="text-sm text-white/45 leading-relaxed mb-6 flex-1">{tier.desc}</p>
                    <ul className="space-y-2 border-t pt-5" style={{ borderColor: `${tier.color}15` }}>
                      {tier.includes.map(item => (
                        <li key={item} className="flex items-start gap-2 text-xs text-white/35">
                          <span className="shrink-0 mt-0.5 font-bold" style={{ color: tier.color }}>✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 text-xs text-white/25">Prices in GBP, excluding VAT. Exact pricing is scoped after a free discovery session.</p>
          </div>
        </section>

        {/* ── TCO TABLE ── */}
        <section className="py-28 border-b border-border">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-sm font-mono font-semibold tracking-widest uppercase mb-3" style={{ color: SF_BLUE }}>Total Cost of Ownership</p>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-14 text-foreground leading-tight">Build a Real Business Case</h2>

            <div className="rounded-3xl overflow-hidden border border-border shadow-xl">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: `linear-gradient(135deg, ${SF_BLUE}10 0%, ${SF_BLUE}05 100%)` }}>
                    <th className="text-left px-8 py-5 font-semibold text-foreground">Cost component</th>
                    <th className="text-left px-8 py-5 font-semibold text-muted-foreground">Type</th>
                    <th className="text-left px-8 py-5 font-semibold text-muted-foreground">When it applies</th>
                    <th className="text-left px-8 py-5 font-semibold text-foreground">Typical range</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { c: 'Agentforce conversations', t: 'Recurring', w: 'Always (live agents)', r: '~$2 / conversation', highlight: true },
                    { c: 'Salesforce CRM licences', t: 'Recurring', w: 'Always', r: 'Existing contract', highlight: false },
                    { c: 'Data Cloud', t: 'Recurring', w: 'If unified profiles needed', r: 'Contact Salesforce', highlight: false },
                    { c: 'MuleSoft', t: 'Recurring', w: 'External API integration', r: 'Contact Salesforce', highlight: false },
                    { c: 'Implementation (Kovil AI)', t: 'One-time', w: 'Initial build', r: '£15k–£150k+', highlight: true },
                    { c: 'Optimisation & maintenance', t: 'Recurring', w: 'Post-launch', r: 'Retainer / T&M', highlight: false },
                  ].map((row, i) => (
                    <tr key={row.c} className="border-t border-border" style={{ background: row.highlight ? `${SF_BLUE}04` : i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)' }}>
                      <td className="px-8 py-4 font-semibold text-foreground">{row.c}</td>
                      <td className="px-8 py-4 text-muted-foreground">{row.t}</td>
                      <td className="px-8 py-4 text-muted-foreground">{row.w}</td>
                      <td className="px-8 py-4 font-bold" style={{ color: row.highlight ? SF_BLUE : 'inherit' }}>{row.r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 p-5 rounded-2xl border border-border bg-card text-sm text-muted-foreground">
              <strong className="text-foreground">ROI framing:</strong> The business case typically rests on agent deflection rate (% of conversations resolved autonomously), reduction in average handle time, and revenue impact from faster lead qualification or higher case satisfaction. Kovil AI provides ROI modelling as part of the free assessment.
            </div>
          </div>
        </section>

        {/* ── PRICING FAQ ── */}
        <section className="py-28 relative overflow-hidden border-b border-border" style={{ background: 'linear-gradient(180deg, #050D1A 0%, #07111F 100%)' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${SF_BLUE}08 0%, transparent 70%)` }} />
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <p className="text-sm font-mono font-semibold tracking-widest uppercase mb-3" style={{ color: SF_BLUE }}>Pricing FAQ</p>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-12 text-white">Common Pricing Questions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {pricingFaqs.map(faq => (
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
                { title: 'Agentforce FAQ', href: '/agentforce/faq' },
                { title: 'Agentforce vs Microsoft Copilot', href: '/agentforce/compare/agentforce-vs-microsoft-copilot' },
                { title: 'Agentforce vs Einstein Copilot', href: '/agentforce/compare/agentforce-vs-einstein-copilot' },
                { title: 'How Agentforce Works', href: '/agentforce/playbook/how-does-agentforce-work' },
                { title: 'Agentforce Services by Kovil AI', href: '/agentforce' },
                { title: 'Get a scoped cost estimate', href: '/book-a-call' },
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none" style={{ background: `radial-gradient(ellipse, ${SF_BLUE}22 0%, transparent 65%)` }} />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(0,161,224,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,161,224,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <p className="text-sm font-mono font-semibold tracking-widest uppercase mb-5" style={{ color: SF_BLUE }}>Agentforce Fixed-Price Implementation · Kovil AI</p>
            <h2 className="font-display text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
              Get a scoped cost<br className="hidden md:block" /> estimate
            </h2>
            <p className="text-white/40 mb-12 max-w-xl mx-auto leading-relaxed text-lg">In 30 minutes, Kovil AI engineers will scope your use case, identify the licences you need, estimate conversation volumes, and give you a fixed-price implementation quote.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/book-a-call" className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-white transition-all hover:-translate-y-1 hover:shadow-2xl text-base" style={{ background: `linear-gradient(135deg, ${SF_BLUE} 0%, #0070D2 100%)`, boxShadow: `0 10px 40px ${SF_BLUE}55` }}>
                Book a free cost assessment <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/agentforce/faq" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-white/50 border border-white/10 hover:border-white/25 hover:text-white transition-all text-base">
                Read the FAQ first
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
