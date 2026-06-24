import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const SF_BLUE = '#00A1E0'
const BASE = 'https://kovil.ai'
const CANONICAL = `${BASE}/agentforce/pricing`

export const metadata: Metadata = {
  title: 'Agentforce Pricing 2026: Cost Per Conversation, Volume Tiers & Total Cost of Ownership | Kovil AI',
  description: 'Agentforce costs approximately $2 per conversation in 2026. This guide covers what counts as a conversation, volume discount tiers, additional licence costs (Data Cloud, Einstein, MuleSoft), and total cost of ownership.',
  alternates: { canonical: CANONICAL },
  keywords: [
    'agentforce pricing',
    'agentforce cost 2026',
    'agentforce price per conversation',
    'how much does agentforce cost',
    'agentforce pricing model',
    'agentforce per conversation cost',
    'agentforce total cost of ownership',
    'agentforce volume discounts',
    'salesforce agentforce pricing',
    'agentforce implementation cost',
  ],
  openGraph: {
    type: 'article',
    title: 'Agentforce Pricing 2026: $2 Per Conversation Explained | Kovil AI',
    description: 'What Agentforce costs in 2026, what counts as a conversation, volume tiers, and total implementation cost of ownership — from Agentforce implementation engineers.',
    url: CANONICAL,
    siteName: 'Kovil AI',
    images: [{ url: `${BASE}/og-agentforce.png`, width: 1200, height: 630, alt: 'Agentforce Pricing 2026 — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce Pricing 2026: $2 Per Conversation | Kovil AI',
    description: 'Full Agentforce pricing breakdown — conversation model, volume tiers, additional licences, and implementation costs.',
    images: [`${BASE}/og-agentforce.png`],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Agentforce Pricing 2026: Complete Cost Guide',
  description: 'Agentforce costs approximately $2 per conversation in 2026. Full breakdown of conversation pricing, volume tiers, additional licences, and implementation costs.',
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
      name: 'How much does Agentforce cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'Agentforce is priced at approximately $2 per conversation as of 2026. This is a consumption-based model — you pay for what your agents actually do. Volume discounts are available for enterprise deployments committing to high conversation volumes. This is separate from base Salesforce CRM licence costs, Data Cloud, Einstein, and MuleSoft.' },
    },
    {
      '@type': 'Question',
      name: 'What counts as an Agentforce conversation?',
      acceptedAnswer: { '@type': 'Answer', text: "An Agentforce conversation is a single end-to-end agent session — from initiation (when a user, customer, or system event triggers the agent) through to resolution, human handoff, or session timeout. A conversation may include multiple back-and-forth exchanges and multiple Action executions (Flows, API calls). The number of messages within a conversation does not affect the per-conversation price." },
    },
    {
      '@type': 'Question',
      name: 'Does Agentforce offer volume discounts?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Enterprise organisations committing to high monthly or annual conversation volumes can negotiate volume discount packages with Salesforce. The standard published price is ~$2 per conversation; enterprise discount tiers reduce this for commitments above 10,000, 50,000, and 100,000+ conversations per month.' },
    },
    {
      '@type': 'Question',
      name: 'What other Salesforce licences do I need for Agentforce?',
      acceptedAnswer: { '@type': 'Answer', text: "Agentforce requires an active Salesforce org licence (Sales Cloud, Service Cloud, or equivalent). Additional licences that may be required depending on your use case: Data Cloud (for unified customer profiles), Einstein (for predictive AI features beyond Agentforce), and MuleSoft (for external system integration). These are purchased separately from Agentforce conversation credits." },
    },
    {
      '@type': 'Question',
      name: 'How much does an Agentforce implementation cost?',
      acceptedAnswer: { '@type': 'Answer', text: "Agentforce implementation costs depend on scope. Kovil AI offers fixed-price sprint engagements: a focused single-use-case deployment typically costs £15,000–£40,000 depending on complexity. Multi-cloud or enterprise deployments with MuleSoft integration range from £50,000–£150,000+. Book a free assessment for an exact scoped estimate for your requirements." },
    },
    {
      '@type': 'Question',
      name: 'Is Agentforce cheaper than Microsoft Copilot?',
      acceptedAnswer: { '@type': 'Answer', text: "It depends on volume and use pattern. Microsoft Copilot for M365 costs $30/user/month — a flat seat cost regardless of usage. Agentforce at $2/conversation is cheaper for high-volume autonomous workflows and more expensive for occasional-use scenarios. At 1,000 conversations/month, Agentforce costs $2,000 (equivalent to 67 Microsoft Copilot seats). At 10,000 conversations/month with volume discounts, Agentforce is significantly more efficient for CRM automation workflows." },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
    { '@type': 'ListItem', position: 2, name: 'Agentforce', item: `${BASE}/agentforce` },
    { '@type': 'ListItem', position: 3, name: 'Agentforce Pricing', item: CANONICAL },
  ],
}

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
              <span className="text-foreground">Agentforce Pricing</span>
            </nav>

            <p className="text-sm font-mono font-semibold tracking-widest uppercase mb-4" style={{ color: SF_BLUE }}>Pricing Guide · Updated June 2026</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
              Agentforce Pricing 2026:<br className="hidden md:block" /> What It Costs & What You Get
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-4">
              <strong className="text-foreground">The direct answer:</strong> Agentforce costs approximately <strong className="text-foreground">$2 per conversation</strong> as of 2026 — consumption-based pricing, separate from your Salesforce CRM licence. Volume discounts are available at enterprise scale.
            </p>
            <p className="text-sm text-muted-foreground max-w-3xl">
              This guide covers the full picture: what counts as a conversation, volume discount tiers, additional licence costs (Data Cloud, Einstein, MuleSoft), implementation costs, and a total cost of ownership framework — so you can model Agentforce into a real budget.
            </p>
          </div>
        </section>

        {/* ── HEADLINE PRICING ── */}
        <section className="py-20 border-b border-border">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-sm font-mono font-semibold tracking-widest uppercase mb-3" style={{ color: SF_BLUE }}>Platform Pricing</p>
            <h2 className="font-display text-3xl font-bold tracking-tight mb-10 text-foreground">Agentforce Conversation Pricing</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="md:col-span-2 bg-card border rounded-3xl p-8" style={{ borderColor: `${SF_BLUE}30` }}>
                <p className="text-sm text-muted-foreground mb-2">Standard published price</p>
                <div className="flex items-end gap-3 mb-4">
                  <p className="font-display text-7xl font-black" style={{ background: `linear-gradient(135deg, ${SF_BLUE} 0%, #60CFFF 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>$2</p>
                  <p className="text-xl text-muted-foreground mb-3">per conversation</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    'Consumption-based — pay for what agents actually do',
                    'Conversation = one end-to-end agent session',
                    'Multiple messages and Actions included per conversation',
                    'Volume discounts available for enterprise commitments',
                    'Separate from Salesforce CRM seat licences',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2"><span style={{ color: SF_BLUE }} className="shrink-0">→</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-card border border-border rounded-3xl p-8">
                <p className="text-sm text-muted-foreground mb-3">For context</p>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-foreground">1,000 conversations / month</p>
                    <p className="text-muted-foreground">$2,000 / month</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">5,000 conversations / month</p>
                    <p className="text-muted-foreground">~$8,000–10,000 / month*</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">25,000 conversations / month</p>
                    <p className="text-muted-foreground">~$35,000–45,000 / month*</p>
                  </div>
                  <p className="text-xs text-muted-foreground border-t border-border pt-3">*Estimated with volume discounts. Actual rates vary by contract.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT IS A CONVERSATION ── */}
        <section className="py-20 border-b border-border bg-muted/20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold tracking-tight mb-6 text-foreground">What Exactly Counts as a Conversation?</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">Understanding the billing unit is critical for accurate cost modelling. This is where many Agentforce estimates go wrong.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border rounded-2xl p-6" style={{ borderColor: `${SF_BLUE}25`, background: `${SF_BLUE}04` }}>
                <h3 className="font-semibold text-foreground mb-4">One conversation includes:</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {[
                    'The initiating event (customer message, system trigger, or agent handoff)',
                    'All back-and-forth exchanges between the user and the agent',
                    'All Atlas Reasoning Engine Observe-Plan-Act-Reflect cycles',
                    'All Action executions (Flow runs, Apex calls, API requests) within the session',
                    'The resolution, handoff, or session timeout that ends the conversation',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2"><span style={{ color: SF_BLUE }} className="shrink-0 mt-0.5">✓</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-4">What does NOT add cost:</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {[
                    'Number of messages within a single conversation',
                    'Number of Actions (Flows, API calls) within a conversation',
                    'Duration of the conversation (within session limits)',
                    'Reasoning cycles the Atlas Engine runs internally',
                    'Human agent time during a handoff (billed as Salesforce seat, not Agentforce)',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2"><span className="text-muted-foreground shrink-0 mt-0.5">×</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 p-5 rounded-2xl border border-border bg-card text-sm text-muted-foreground">
              <strong className="text-foreground">Practical example:</strong> A customer contacts your service agent about a billing dispute. The agent exchanges 8 messages, looks up the account, runs a refund Flow, and sends a confirmation email — then closes the case. That entire interaction = 1 conversation = $2.
            </div>
          </div>
        </section>

        {/* ── VOLUME TIERS ── */}
        <section className="py-20 border-b border-border">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold tracking-tight mb-6 text-foreground">Volume Discount Tiers</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">Salesforce offers volume discounts for organisations committing to higher conversation volumes. These are negotiated at the contract level — speak to your Salesforce Account Executive or Kovil AI for enterprise pricing.</p>
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border" style={{ background: `${SF_BLUE}08` }}>
                    <th className="text-left px-6 py-4 font-semibold text-foreground">Monthly conversations</th>
                    <th className="text-left px-6 py-4 font-semibold text-foreground">Estimated price / conversation</th>
                    <th className="text-left px-6 py-4 font-semibold text-foreground">Estimated monthly range</th>
                    <th className="text-left px-6 py-4 font-semibold text-foreground">Typical org size</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { vol: '0 – 1,000', price: '~$2.00', monthly: '$0 – $2,000', org: 'SMB / pilot deployment' },
                    { vol: '1,000 – 5,000', price: '~$1.70–$2.00', monthly: '$1,700 – $10,000', org: 'Mid-market, 1–2 use cases' },
                    { vol: '5,000 – 25,000', price: '~$1.40–$1.70', monthly: '$7,000 – $42,500', org: 'Mid-enterprise, multi-cloud' },
                    { vol: '25,000 – 100,000', price: '~$1.00–$1.40', monthly: '$25,000 – $140,000', org: 'Enterprise, broad deployment' },
                    { vol: '100,000+', price: 'Negotiated', monthly: 'Custom contract', org: 'Strategic enterprise' },
                  ].map((row, i) => (
                    <tr key={row.vol} className={`border-b border-border last:border-0 ${i % 2 === 0 ? 'bg-card' : 'bg-background'}`}>
                      <td className="px-6 py-4 font-medium text-foreground">{row.vol}</td>
                      <td className="px-6 py-4 font-semibold" style={{ color: SF_BLUE }}>{row.price}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.monthly}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.org}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Prices are estimates based on published Salesforce pricing and common enterprise negotiation patterns as of June 2026. Actual pricing varies by region, contract structure, and Salesforce relationship. Always validate with your Salesforce Account Executive.</p>
          </div>
        </section>

        {/* ── ADDITIONAL LICENCES ── */}
        <section className="py-20 border-b border-border bg-muted/20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold tracking-tight mb-6 text-foreground">Additional Licence Costs</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">Agentforce conversation credits are only part of the cost picture. Depending on your use case, you may need additional Salesforce platform licences.</p>
            <div className="space-y-4">
              {[
                {
                  name: 'Salesforce CRM (required)',
                  cost: 'Part of your existing Salesforce contract',
                  notes: 'Agentforce requires an active Salesforce org. Sales Cloud, Service Cloud, or equivalent editions are required. If you already have Salesforce, this is not an incremental cost.',
                  required: true,
                },
                {
                  name: 'Data Cloud',
                  cost: 'Separate per-org pricing (contact Salesforce)',
                  notes: 'Unlocks unified customer profiles — significantly improves agent decision quality. Not required to start, but often added as deployments mature. Agents can use Salesforce CRM data alone without Data Cloud.',
                  required: false,
                },
                {
                  name: 'Einstein (AI Platform)',
                  cost: 'Included in some editions; add-on in others',
                  notes: "Enables additional predictive AI features like lead scoring, forecasting, and email insights — separate from Agentforce's core reasoning capabilities. Check your current Salesforce edition for inclusion.",
                  required: false,
                },
                {
                  name: 'MuleSoft',
                  cost: 'Separate per-core pricing (contact Salesforce)',
                  notes: 'Required if your Agentforce agents need to call external APIs or systems not natively connected to Salesforce. HTTP callouts via Apex are available without MuleSoft for simpler integrations.',
                  required: false,
                },
              ].map(lic => (
                <div key={lic.name} className="bg-card border border-border rounded-2xl p-6 flex gap-5">
                  <div className={`h-5 w-5 rounded-full shrink-0 mt-0.5 flex items-center justify-center text-xs font-bold text-white ${lic.required ? '' : 'bg-border'}`} style={lic.required ? { background: SF_BLUE } : {}}>
                    {lic.required ? '✓' : '○'}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-semibold text-foreground">{lic.name}</h3>
                      {lic.required && <span className="text-xs px-2 py-0.5 rounded-full font-medium text-white" style={{ background: SF_BLUE }}>Required</span>}
                      {!lic.required && <span className="text-xs px-2 py-0.5 rounded-full font-medium text-muted-foreground border border-border">Optional</span>}
                    </div>
                    <p className="text-sm font-medium text-foreground mb-1">{lic.cost}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{lic.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── IMPLEMENTATION COSTS ── */}
        <section className="py-20 border-b border-border">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold tracking-tight mb-6 text-foreground">Implementation Costs: What It Takes to Go Live</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">Agentforce is not a self-service tool — production deployments require Salesforce expertise across Agent Builder, Flows, Apex, and often MuleSoft. Kovil AI delivers fixed-price implementation sprints so you know the cost before we start.</p>
            <div className="grid md:grid-cols-3 gap-5 mb-6">
              {[
                {
                  tier: 'Focused deployment',
                  price: '£15,000–£40,000',
                  timeline: '4–6 weeks',
                  desc: 'Single use case, one Salesforce Cloud. Ideal for a pilot or first production agent.',
                  includes: ['Use case discovery & scoping', 'Topics and Actions design', 'Flow / Apex development', 'Einstein Trust Layer setup', 'UAT and production go-live'],
                },
                {
                  tier: 'Multi-cloud deployment',
                  price: '£50,000–£120,000',
                  timeline: '8–12 weeks',
                  desc: 'Two or more Salesforce Clouds, multiple use cases or departments.',
                  includes: ['Full readiness assessment', 'Multi-cloud Topics and Actions', 'Data Cloud integration', 'Multi-agent orchestration', 'Training & handover documentation'],
                },
                {
                  tier: 'Enterprise deployment',
                  price: '£120,000+',
                  timeline: '12–20 weeks',
                  desc: 'MuleSoft integration, multi-region, complex compliance requirements.',
                  includes: ['Enterprise architecture review', 'MuleSoft API layer build', 'Compliance configuration (HIPAA/SOC 2)', 'Performance and load testing', 'Ongoing optimisation retainer'],
                },
              ].map(tier => (
                <div key={tier.tier} className="bg-card border border-border rounded-2xl p-6 flex flex-col">
                  <h3 className="font-semibold text-foreground mb-1">{tier.tier}</h3>
                  <p className="font-display text-2xl font-black mb-1" style={{ color: SF_BLUE }}>{tier.price}</p>
                  <p className="text-xs text-muted-foreground mb-3">{tier.timeline} · fixed price</p>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{tier.desc}</p>
                  <ul className="space-y-1.5">
                    {tier.includes.map(item => (
                      <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground"><span style={{ color: SF_BLUE }} className="shrink-0">✓</span>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">Prices in GBP, excluding VAT. Exact pricing is scoped after a free discovery session.</p>
          </div>
        </section>

        {/* ── TCO FRAMEWORK ── */}
        <section className="py-20 border-b border-border bg-muted/20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold tracking-tight mb-6 text-foreground">Total Cost of Ownership Framework</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">Model Agentforce into a real business case by mapping all cost components against the value delivered.</p>
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border" style={{ background: `${SF_BLUE}08` }}>
                    <th className="text-left px-6 py-4 font-semibold text-foreground">Cost component</th>
                    <th className="text-left px-6 py-4 font-semibold text-foreground">Type</th>
                    <th className="text-left px-6 py-4 font-semibold text-foreground">When it applies</th>
                    <th className="text-left px-6 py-4 font-semibold text-foreground">Typical range</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { component: 'Agentforce conversations', type: 'Recurring', when: 'Always (live agents)', range: '~$2 / conversation' },
                    { component: 'Salesforce CRM licences', type: 'Recurring', when: 'Always', range: 'Existing contract' },
                    { component: 'Data Cloud', type: 'Recurring', when: 'If unified profiles needed', range: 'Contact Salesforce' },
                    { component: 'MuleSoft', type: 'Recurring', when: 'External API integration', range: 'Contact Salesforce' },
                    { component: 'Implementation (Kovil AI)', type: 'One-time', when: 'Initial build', range: '£15,000–£150,000+' },
                    { component: 'Optimisation & maintenance', type: 'Recurring', when: 'Post-launch', range: 'Retainer / T&M' },
                  ].map((row, i) => (
                    <tr key={row.component} className={`border-b border-border last:border-0 ${i % 2 === 0 ? 'bg-card' : 'bg-background'}`}>
                      <td className="px-6 py-4 font-medium text-foreground">{row.component}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.type}</td>
                      <td className="px-6 py-4 text-muted-foreground">{row.when}</td>
                      <td className="px-6 py-4 font-medium" style={{ color: SF_BLUE }}>{row.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-5 rounded-2xl border border-border bg-card text-sm text-muted-foreground">
              <strong className="text-foreground">ROI framing:</strong> The business case for Agentforce typically rests on agent deflection rate (% of conversations resolved without human escalation), reduction in average handle time, and revenue impact (faster lead qualification, higher case CSAT). Kovil AI provides ROI modelling as part of the free assessment.
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 border-b border-border">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-sm font-mono font-semibold tracking-widest uppercase mb-3" style={{ color: SF_BLUE }}>Pricing FAQ</p>
            <h2 className="font-display text-3xl font-bold tracking-tight mb-10 text-foreground">Common Pricing Questions</h2>
            <div className="space-y-5">
              {pricingFaqs.map(faq => (
                <div key={faq.q} className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="font-semibold text-foreground mb-3">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED ── */}
        <section className="py-14 border-b border-border bg-muted/20">
          <div className="max-w-5xl mx-auto px-6">
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
            <p className="text-sm font-mono font-semibold tracking-widest uppercase mb-4" style={{ color: SF_BLUE }}>Agentforce Fixed-Price Implementation · Kovil AI</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Get a scoped Agentforce cost estimate</h2>
            <p className="text-white/50 mb-8 max-w-2xl mx-auto leading-relaxed">In a free 30-minute assessment, Kovil AI engineers will scope your Agentforce use case, identify the licences you need, estimate conversation volumes, and give you a fixed-price implementation quote — no surprises.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/book-a-call" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:-translate-y-0.5" style={{ background: SF_BLUE, boxShadow: `0 8px 32px ${SF_BLUE}45` }}>
                Book a free cost assessment <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/agentforce/faq" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-white/70 border border-white/10 hover:border-white/25 hover:text-white transition-all">
                Read the FAQ first
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
