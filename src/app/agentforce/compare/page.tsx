import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Scale, Zap, DollarSign, Shield } from 'lucide-react'

const SF_BLUE = '#00A1E0'
const EINSTEIN_COLOR = '#F59E0B'
const MS_PURPLE = '#7C3AED'

export const metadata: Metadata = {
  title: 'Agentforce Comparisons — vs Einstein Copilot & Microsoft Copilot | Kovil AI',
  description:
    'Compare Salesforce Agentforce against Einstein Copilot and Microsoft Copilot 365. Side-by-side feature tables, pricing breakdowns, architecture differences, and migration guides — updated for 2026.',
  alternates: { canonical: 'https://kovil.ai/agentforce/compare' },
  keywords: [
    'agentforce vs einstein copilot',
    'agentforce vs microsoft copilot',
    'salesforce agentforce comparison',
    'einstein copilot deprecated',
    'agentforce vs copilot 365',
    'salesforce ai comparison',
    'agentforce alternatives',
    'agentforce vs copilot studio',
    'best salesforce ai agent',
    'agentforce comparison 2026',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce Comparisons — vs Einstein Copilot & Microsoft Copilot | Kovil AI',
    description:
      'Side-by-side comparisons of Salesforce Agentforce vs Einstein Copilot and Microsoft Copilot 365 — features, pricing, architecture, and migration guides.',
    url: 'https://kovil.ai/agentforce/compare',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Agentforce Comparison Hub — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce Comparisons | Kovil AI',
    description: 'Side-by-side comparisons of Salesforce Agentforce vs Einstein Copilot and Microsoft Copilot 365.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Agentforce', item: 'https://kovil.ai/agentforce' },
    { '@type': 'ListItem', position: 3, name: 'Compare', item: 'https://kovil.ai/agentforce/compare' },
  ],
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Agentforce Comparison Guides',
  url: 'https://kovil.ai/agentforce/compare',
  numberOfItems: 2,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Agentforce vs Einstein Copilot',
      url: 'https://kovil.ai/agentforce/compare/agentforce-vs-einstein-copilot',
      description: 'Full feature comparison of Agentforce and the deprecated Einstein Copilot, including migration guide.',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Agentforce vs Microsoft Copilot',
      url: 'https://kovil.ai/agentforce/compare/agentforce-vs-microsoft-copilot',
      description: 'Side-by-side breakdown of Agentforce and Microsoft 365 Copilot — pricing, architecture, and use cases.',
    },
  ],
}

const comparisons = [
  {
    href: '/agentforce/compare/agentforce-vs-einstein-copilot',
    badge: 'Migration Guide',
    badgeColor: EINSTEIN_COLOR,
    title: 'Agentforce',
    vs: 'vs',
    subtitle: 'Einstein Copilot',
    subtitleColor: EINSTEIN_COLOR,
    color: EINSTEIN_COLOR,
    gradient: `linear-gradient(135deg, rgba(245,158,11,0.12) 0%, rgba(245,158,11,0.04) 100%)`,
    borderGlow: `rgba(245,158,11,0.35)`,
    orb: `radial-gradient(ellipse 70% 70% at 20% 30%, rgba(245,158,11,0.18) 0%, transparent 65%)`,
    verdict: 'Einstein Copilot was deprecated October 2024. Agentforce is its full autonomous replacement — with the Atlas Reasoning Engine and multi-step actions Einstein never had.',
    keyDiffs: [
      'Einstein Copilot: conversational only. Agentforce: autonomous multi-step actions',
      'Einstein Copilot deprecated Oct 2024. Agentforce is the current Salesforce AI platform',
      'Atlas Reasoning Engine (Observe → Plan → Act → Reflect) replaces Einstein\'s single-turn model',
      'Data Cloud grounding replaced Einstein\'s static org context',
    ],
    cta: 'Read full comparison + migration guide',
  },
  {
    href: '/agentforce/compare/agentforce-vs-microsoft-copilot',
    badge: 'Head-to-Head',
    badgeColor: MS_PURPLE,
    title: 'Agentforce',
    vs: 'vs',
    subtitle: 'Microsoft Copilot',
    subtitleColor: MS_PURPLE,
    color: MS_PURPLE,
    gradient: `linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(124,58,237,0.04) 100%)`,
    borderGlow: `rgba(124,58,237,0.35)`,
    orb: `radial-gradient(ellipse 70% 70% at 80% 30%, rgba(124,58,237,0.18) 0%, transparent 65%)`,
    verdict: 'Agentforce wins for Salesforce-native orgs needing autonomous CRM action. Microsoft Copilot wins for M365 productivity augmentation. Different tools for different jobs.',
    keyDiffs: [
      'Agentforce: ~$2/conversation. Copilot 365: ~$30/user/month flat rate',
      'Agentforce acts inside your CRM. Copilot assists within Office apps',
      'Agentforce uses Atlas Reasoning Engine for multi-step planning. Copilot uses single-turn completion',
      'Agentforce requires Salesforce org. Copilot requires Microsoft 365 tenant',
    ],
    cta: 'Read full comparison + pricing breakdown',
  },
]

const whyCompare = [
  { icon: Scale, color: SF_BLUE, title: 'Different architectures', body: 'Agentforce, Einstein Copilot, and Microsoft Copilot use fundamentally different reasoning models. Understanding which architecture fits your workflows prevents costly re-platforming later.' },
  { icon: DollarSign, color: '#34D399', title: 'Pricing models diverge', body: 'Agentforce charges per conversation (~$2). Microsoft Copilot charges per user/month (~$30). Einstein Copilot is deprecated. Total cost of ownership swings dramatically by volume.' },
  { icon: Shield, color: '#A78BFA', title: 'Data sovereignty matters', body: 'Agentforce stores all context inside your Salesforce org with Einstein Trust Layer. Microsoft routes through Azure OpenAI. Understanding where your data lives is non-negotiable for compliance.' },
  { icon: Zap, color: EINSTEIN_COLOR, title: 'Migration urgency', body: 'Einstein Copilot customers must migrate to Agentforce — it\'s no longer an option. Knowing exactly what carries over (and what must be rebuilt) is the first step.' },
]

export default function AgentforceCompareHubPage() {
  return (
    <main className="bg-background min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-24 pb-20"
        style={{ background: 'linear-gradient(180deg, #050D1A 0%, #07111F 80%, #091526 100%)' }}
      >
        {/* Atmospheric orbs */}
        <div className="absolute top-0 right-0 w-[700px] h-[500px] pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 60% at 80% 10%, rgba(0,161,224,0.10) 0%, transparent 65%)` }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 60% at 10% 90%, rgba(124,58,237,0.08) 0%, transparent 65%)` }} />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-xs text-white/30 mb-8 font-mono tracking-widest uppercase">
            <Link href="/agentforce" className="hover:text-white/60 transition-colors">Agentforce</Link>
            <span>/</span>
            <span style={{ color: SF_BLUE }}>Compare</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8" style={{ borderColor: `${SF_BLUE}40`, background: `${SF_BLUE}10` }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: SF_BLUE }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: SF_BLUE }}>Updated June 2026</span>
          </div>

          <h1 className="font-black tracking-tight leading-none mb-6">
            <span
              className="block text-5xl md:text-7xl"
              style={{ background: `linear-gradient(135deg, ${SF_BLUE} 0%, #60CFFF 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              Agentforce
            </span>
            <span className="block text-3xl md:text-4xl text-white/40 font-bold mt-2 mb-2">vs the field</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
            Side-by-side breakdowns of Salesforce Agentforce against Einstein Copilot (deprecated) and Microsoft Copilot 365 — covering architecture, pricing, data sovereignty, and migration paths.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/agentforce/compare/agentforce-vs-einstein-copilot" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90" style={{ background: `linear-gradient(135deg, ${EINSTEIN_COLOR} 0%, #D97706 100%)` }}>
              vs Einstein Copilot <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/agentforce/compare/agentforce-vs-microsoft-copilot" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90" style={{ background: `linear-gradient(135deg, ${MS_PURPLE} 0%, #A78BFA 100%)` }}>
              vs Microsoft Copilot <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY COMPARE ─────────────────────────────────────────────── */}
      <section className="py-20 border-t border-white/5" style={{ background: 'linear-gradient(180deg, #091526 0%, #050D1A 100%)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3 font-semibold" style={{ color: SF_BLUE }}>Why it matters</p>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Four reasons to compare <span style={{ color: SF_BLUE }}>before</span> you commit
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {whyCompare.map((item) => (
              <div key={item.title} className="rounded-2xl p-6 border" style={{ background: `${item.color}08`, borderColor: `${item.color}20` }}>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${item.color}20` }}>
                    <item.icon className="h-5 w-5" style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="font-bold text-white mb-1.5">{item.title}</p>
                    <p className="text-sm text-white/55 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON CARDS ─────────────────────────────────────────── */}
      <section className="py-20 border-t border-white/5" style={{ background: '#050D1A' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest uppercase mb-3 font-semibold" style={{ color: SF_BLUE }}>Comparison guides</p>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Pick your comparison</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {comparisons.map((comp) => (
              <Link
                key={comp.href}
                href={comp.href}
                className="group relative rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl block"
                style={{ borderColor: comp.borderGlow, background: 'rgba(8,20,42,0.95)' }}
              >
                {/* Orb */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: comp.orb }} />
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${comp.color}14 0%, transparent 60%)` }} />

                <div className="relative z-10 p-8">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-6" style={{ background: `${comp.badgeColor}20`, color: comp.badgeColor }}>
                    {comp.badge}
                  </div>

                  {/* Title */}
                  <div className="mb-6">
                    <p className="text-2xl md:text-3xl font-black text-white">{comp.title}</p>
                    <p className="text-lg text-white/30 font-bold mt-1">{comp.vs}</p>
                    <p className="text-2xl md:text-3xl font-black mt-1" style={{ color: comp.subtitleColor }}>{comp.subtitle}</p>
                  </div>

                  {/* Divider */}
                  <div className="h-px mb-6" style={{ background: `linear-gradient(90deg, ${comp.color}40 0%, transparent 100%)` }} />

                  {/* Verdict */}
                  <p className="text-sm text-white/60 leading-relaxed mb-6">{comp.verdict}</p>

                  {/* Key diffs */}
                  <ul className="space-y-2.5 mb-8">
                    {comp.keyDiffs.map((diff) => (
                      <li key={diff} className="flex items-start gap-2.5 text-sm text-white/50">
                        <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" style={{ color: comp.color }} />
                        {diff}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-bold transition-all" style={{ color: comp.color }}>
                    {comp.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK VERDICT TABLE ───────────────────────────────────────── */}
      <section className="py-20 border-t border-white/5" style={{ background: 'linear-gradient(180deg, #050D1A 0%, #091526 100%)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-mono tracking-widest uppercase mb-3 font-semibold" style={{ color: SF_BLUE }}>At a glance</p>
            <h2 className="text-3xl font-black text-white tracking-tight">Three-way quick reference</h2>
          </div>
          <div className="rounded-2xl overflow-hidden border" style={{ borderColor: `${SF_BLUE}20` }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: `linear-gradient(90deg, ${SF_BLUE}18 0%, rgba(124,58,237,0.10) 100%)` }}>
                  <th className="px-5 py-4 text-left text-xs font-bold tracking-widest uppercase text-white/40">Dimension</th>
                  <th className="px-5 py-4 text-center text-xs font-bold tracking-widest uppercase" style={{ color: SF_BLUE }}>Agentforce</th>
                  <th className="px-5 py-4 text-center text-xs font-bold tracking-widest uppercase" style={{ color: EINSTEIN_COLOR }}>Einstein Copilot</th>
                  <th className="px-5 py-4 text-center text-xs font-bold tracking-widest uppercase" style={{ color: MS_PURPLE }}>Microsoft Copilot</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { dim: 'Status', af: '✅ Active', ec: '🚫 Deprecated Oct 2024', ms: '✅ Active' },
                  { dim: 'Pricing model', af: '~$2 / conversation', ec: 'N/A', ms: '~$30 / user / month' },
                  { dim: 'Reasoning engine', af: 'Atlas (4-phase)', ec: 'Single-turn', ms: 'GPT-4o (single-turn)' },
                  { dim: 'CRM native', af: '✅ Salesforce', ec: '✅ Salesforce', ms: '❌ Microsoft 365' },
                  { dim: 'Autonomous actions', af: '✅ Full multi-step', ec: '❌ Conversational only', ms: '⚠️ Limited via Copilot Studio' },
                  { dim: 'Data grounding', af: 'Data Cloud (live)', ec: 'Static org context', ms: 'Microsoft Graph' },
                  { dim: 'Trust/compliance', af: 'Einstein Trust Layer', ec: 'Einstein Trust Layer', ms: 'Azure OpenAI compliance' },
                ].map((row, i) => (
                  <tr key={row.dim} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <td className="px-5 py-3.5 font-semibold text-white/70">{row.dim}</td>
                    <td className="px-5 py-3.5 text-center text-white/80">{row.af}</td>
                    <td className="px-5 py-3.5 text-center text-white/50">{row.ec}</td>
                    <td className="px-5 py-3.5 text-center text-white/70">{row.ms}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-20 border-t border-white/5 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #050D1A 0%, #091526 60%, #0C1E38 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 60% at 50% 50%, ${SF_BLUE}14 0%, transparent 70%)` }} />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <p className="text-xs font-mono tracking-widest uppercase mb-4 font-semibold" style={{ color: SF_BLUE }}>Not sure which fits?</p>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
            We&apos;ll tell you in <span style={{ color: SF_BLUE }}>48 hours</span>
          </h2>
          <p className="text-white/55 text-lg mb-8 leading-relaxed">
            Send us your Salesforce org details and business goals. Our Agentforce architects will give you an honest recommendation — including whether Agentforce is even the right tool for your use case.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/book-a-call"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white transition-all hover:opacity-90"
              style={{ background: `linear-gradient(135deg, ${SF_BLUE} 0%, #0070D2 100%)` }}
            >
              Book a free discovery call <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/agentforce" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white/60 hover:text-white transition-colors border border-white/10 hover:border-white/20">
              Back to Agentforce
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
