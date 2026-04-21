'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Clock, CheckCircle, ChevronRight, TrendingUp } from 'lucide-react'

// ── Brand-coloured node icons ─────────────────────────────────────────────────

function NodeBox({ cx, cy, bg, border, children }: {
  cx: number; cy: number; bg: string; border?: string; children: React.ReactNode
}) {
  const size = 56
  return (
    <g>
      <rect
        x={cx - size / 2} y={cy - size / 2}
        width={size} height={size} rx={12}
        fill={bg}
        stroke={border ?? 'transparent'}
        strokeWidth={border ? 1.5 : 0}
      />
      {children}
    </g>
  )
}

function ConversionsIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#22C55E">
      <text x={cx} y={cy - 2} textAnchor="middle" fill="white" fontSize="16" fontFamily="Apple Color Emoji, Segoe UI Emoji, sans-serif">💰</text>
    </NodeBox>
  )
}

function MetaAdsIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#1877F2">
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="13" fontWeight="900" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">f</text>
    </NodeBox>
  )
}

function GoogleAdsIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#4285F4">
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="13" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">G</text>
    </NodeBox>
  )
}

function OpenAIIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#10A37F">
      <circle cx={cx} cy={cy} r="13" stroke="white" strokeWidth="2" fill="none" />
      <circle cx={cx} cy={cy} r="5" fill="white" />
      <circle cx={cx} cy={cy - 10} r="3" fill="white" />
      <circle cx={cx + 9} cy={cy + 5} r="3" fill="white" />
      <circle cx={cx - 9} cy={cy + 5} r="3" fill="white" />
    </NodeBox>
  )
}

function AlertIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#EF4444">
      <path d={`M${cx},${cy - 12} L${cx + 10},${cy + 8} L${cx - 10},${cy + 8} Z`} fill="white" opacity={0.9} />
      <text x={cx} y={cy + 6} textAnchor="middle" fill="#EF4444" fontSize="10" fontWeight="900" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">!</text>
    </NodeBox>
  )
}

function DashboardIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#6366F1">
      <rect x={cx - 12} y={cy - 10} width={24} height={20} rx={3} fill="white" opacity={0.9} />
      <rect x={cx - 9} y={cy - 4} width={5} height={10} rx={1} fill="#6366F1" />
      <rect x={cx - 2} y={cy - 7} width={5} height={13} rx={1} fill="#6366F1" />
      <rect x={cx + 5} y={cy} width={5} height={6} rx={1} fill="#6366F1" />
    </NodeBox>
  )
}

function ArrowDefs() {
  return (
    <defs>
      <marker id="arrow-bid" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <polygon points="0,0 0,6 8,3" fill="#D0CBC2" />
      </marker>
    </defs>
  )
}

function NodeLabel({ cx, cy, text, sub }: { cx: number; cy: number; text: string; sub?: string }) {
  return (
    <g>
      <text x={cx} y={cy + 38} textAnchor="middle" fontSize="9.5" fill="#A8A29E" fontFamily="Inter, sans-serif" fontWeight="500">
        {text}
      </text>
      {sub && (
        <text x={cx} y={cy + 50} textAnchor="middle" fontSize="8" fill="#78716C" fontFamily="Inter, sans-serif">
          {sub}
        </text>
      )}
    </g>
  )
}

function HeroDiagram() {
  const stroke = '#D0CBC2'
  const sw = 1.8
  const ma = 'url(#arrow-bid)'

  const nodes = [
    { cx: 65, cy: 120 },
    { cx: 195, cy: 120 },
    { cx: 325, cy: 120 },
    { cx: 455, cy: 120 },
    { cx: 585, cy: 120 },
    { cx: 715, cy: 120 },
  ]

  return (
    <svg viewBox="0 0 780 240" className="w-full" style={{ display: 'block' }}>
      <ArrowDefs />

      {nodes.slice(0, 5).map((n, i) => (
        <path key={i} d={`M${n.cx + 28},${n.cy} H${nodes[i + 1].cx - 28}`} stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      ))}

      <ConversionsIcon cx={nodes[0].cx} cy={nodes[0].cy} />
      <NodeLabel cx={nodes[0].cx} cy={nodes[0].cy} text="Conversions" sub="Deep funnel" />

      <MetaAdsIcon cx={nodes[1].cx} cy={nodes[1].cy} />
      <NodeLabel cx={nodes[1].cx} cy={nodes[1].cy} text="Meta Ads" sub="API pull" />

      <GoogleAdsIcon cx={nodes[2].cx} cy={nodes[2].cy} />
      <NodeLabel cx={nodes[2].cx} cy={nodes[2].cy} text="Google Ads" sub="API pull" />

      <OpenAIIcon cx={nodes[3].cx} cy={nodes[3].cy} />
      <NodeLabel cx={nodes[3].cx} cy={nodes[3].cy} text="GPT-4o" sub="CPA analysis" />

      <AlertIcon cx={nodes[4].cx} cy={nodes[4].cy} />
      <NodeLabel cx={nodes[4].cx} cy={nodes[4].cy} text="Anomaly Alert" sub="Slack" />

      <DashboardIcon cx={nodes[5].cx} cy={nodes[5].cy} />
      <NodeLabel cx={nodes[5].cx} cy={nodes[5].cy} text="Dashboard" sub="Looker Studio" />

      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.cx + 20} cy={n.cy - 20} r={9} fill="#A78BFA" />
          <text x={n.cx + 20} y={n.cy - 16} textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="Inter, sans-serif">{i + 1}</text>
        </g>
      ))}
    </svg>
  )
}

// ── Step data ─────────────────────────────────────────────────────────────────

const steps = [
  {
    num: 1,
    tool: 'Meta Pixel + Google Tag Manager',
    toolColor: '#22C55E',
    title: 'Deep-funnel conversion events wired to Meta Pixel and Google Tag Manager',
    detail: 'The foundation of algorithmic bidding is conversion data quality. Shallow events (page views, link clicks) teach the algorithm nothing useful. This workflow starts by wiring deep-funnel events — actual purchases, qualified lead form completions, phone calls connected via call tracking — to Meta Pixel and Google Tag Manager. Server-side tracking is implemented via Conversions API (Meta) and Enhanced Conversions (Google) to recover iOS signal loss and prevent browser-level data degradation.',
    tags: ['Meta Pixel', 'Conversions API', 'Google Enhanced Conversions', 'Server-Side Tracking', 'Call Tracking', 'iOS Signal Recovery'],
  },
  {
    num: 2,
    tool: 'n8n + Meta/Google Ads APIs',
    toolColor: '#1877F2',
    title: 'n8n pulls real-time ad set performance data every 4 hours',
    detail: 'n8n runs a scheduled workflow every 4 hours that calls both the Meta Ads API and Google Ads API. For each active ad set and campaign, it pulls: spend to date, impressions, clicks, conversions, Cost Per Result (CPR), and ROAS. Data is normalised into a shared schema and written to a Google Sheet or Airtable base — giving both platforms a unified view across the account. Historical data accumulates automatically, enabling trend comparison without manual exports.',
    tags: ['Meta Ads API', 'Google Ads API', 'n8n Scheduler', 'Unified Data Schema', 'Google Sheets', '4-Hour Cadence'],
  },
  {
    num: 3,
    tool: 'GPT-4o',
    toolColor: '#10A37F',
    title: 'GPT-4o compares Cost Per Result across all active ad sets and flags CPA breaches',
    detail: 'GPT-4o receives the latest performance snapshot and compares every active ad set against the client\'s target CPA. Any ad set spending more than 20% above target CPA triggers a flag. GPT-4o also identifies patterns across the account: which creative formats are outperforming, which audiences are fatiguing, and which dayparting windows show the best efficiency. Analysis is deterministic — GPT-4o is given structured data and a strict output schema, not asked for freeform commentary.',
    tags: ['GPT-4o Analysis', 'CPA Threshold Flagging', 'Creative Performance', 'Audience Fatigue Detection', 'Dayparting Analysis', 'Structured Output'],
  },
  {
    num: 4,
    tool: 'Meta AI Business Assistant',
    toolColor: '#4285F4',
    title: 'Meta AI Business Assistant surfaces CRO opportunities on creatives',
    detail: 'For accounts with sufficient data volume, the Meta AI Business Assistant integration reads underlying creative performance signals — hook rates, watch times, CTA click rates — and surfaces specific CRO recommendations. These are structured as actionable items: test a different opening frame, swap the primary CTA, or split the audience between two creative variants. Recommendations are logged to the client\'s Airtable row as a running creative testing backlog.',
    tags: ['Meta AI Business Assistant', 'Hook Rate Analysis', 'CTA Performance', 'Creative Testing Backlog', 'CRO Recommendations'],
  },
  {
    num: 5,
    tool: 'Slack Alerts',
    toolColor: '#EF4444',
    title: 'Anomaly alerts sent to Slack immediately when any ad set breaches budget or CPA thresholds',
    detail: 'When GPT-4o flags a CPA breach or budget overrun, n8n immediately sends a structured Slack alert to the client\'s account manager channel. The alert includes: ad set name, platform, current CPR, target CPR, overspend amount, and a recommended action (pause, budget cap, or creative swap). Alerts are sent within minutes of the breach — not on a daily digest — giving the team a real chance to intervene before significant budget is wasted on underperforming sets.',
    tags: ['Slack Webhook', 'Real-Time Alerts', 'Budget Breach Detection', 'CPA Threshold Notifications', 'Account Manager Channel', 'Actionable Format'],
  },
  {
    num: 6,
    tool: 'Looker Studio',
    toolColor: '#6366F1',
    title: 'Looker Studio dashboard auto-refreshes with ROAS, CPA, and CVR data — client-ready at all times',
    detail: 'A Looker Studio dashboard is connected to the unified data source (Google Sheet or BigQuery) and configured to auto-refresh on the same 4-hour schedule as the data pull. The dashboard shows: ROAS by campaign and ad set, CPA trend vs. target, CVR by device and placement, spend pacing vs. monthly budget, and a 7-day performance summary. The dashboard is client-accessible via a private link — no login required — so clients can check performance without needing platform access.',
    tags: ['Looker Studio', 'Auto-Refresh', 'ROAS Dashboard', 'CPA Trending', 'Client-Accessible Link', 'Budget Pacing'],
  },
]

// ── Tech stack ────────────────────────────────────────────────────────────────

const techStack = [
  { name: 'Meta Ads API', role: 'Ad platform data', color: '#1877F2', desc: 'Pulls ad set performance data every 4 hours: spend, CPR, ROAS, impressions, clicks, and conversions per campaign.' },
  { name: 'Google Ads API', role: 'Ad platform data', color: '#4285F4', desc: 'Parallel pull from Google campaigns. Same data schema as Meta for unified cross-platform analysis.' },
  { name: 'n8n', role: 'Orchestration', color: '#F65B2B', desc: 'Runs the scheduled 4-hour data pull, routes performance data to GPT-4o, fires Slack alerts on threshold breaches.' },
  { name: 'GPT-4o', role: 'CPA analysis', color: '#10A37F', desc: 'Compares CPR vs. targets across all active ad sets. Flags breaches with specific action recommendations.' },
  { name: 'Looker Studio', role: 'Client dashboard', color: '#6366F1', desc: 'Auto-refreshing dashboard showing ROAS, CPA, CVR, spend pacing, and 7-day trends. Client-accessible without login.' },
  { name: 'Slack', role: 'Anomaly alerts', color: '#4A154B', desc: 'Real-time structured alerts when any ad set breaches CPA or budget thresholds. Includes recommended actions.' },
]

// ── Outcomes ──────────────────────────────────────────────────────────────────

const outcomes = [
  { stat: '+40%', label: 'ROAS improvement', sub: 'avg across accounts' },
  { stat: '4 hrs', label: 'data refresh cadence', sub: 'vs. daily manual' },
  { stat: '< 5 min', label: 'alert to team', sub: 'on CPA breach' },
  { stat: '2', label: 'platforms unified', sub: 'Meta + Google' },
]

// ── Animation helper ──────────────────────────────────────────────────────────

function fade(delay = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.45, delay },
  }
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function SmartBiddingPage() {
  const industryColor = '#A78BFA'
  const accentColor = '#A78BFA'

  return (
    <div className="min-h-screen bg-[#080808] text-white">

      {/* ── BREADCRUMB ──────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-0">
        <nav className="flex items-center gap-2 text-xs text-white/35">
          <Link href="/ai-workflow-automation-library" className="flex items-center gap-1 hover:text-white/70 transition-colors">
            <ArrowLeft size={12} /> AI Workflow Library
          </Link>
          <ChevronRight size={11} className="text-white/20" />
          <span className="text-white/55">Smart Bidding Architecture & Algorithmic Media Buying</span>
        </nav>
      </div>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-4">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">

          <div>
            <motion.div {...fade(0)}>
              <span className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide font-display"
                style={{ color: industryColor, background: `${industryColor}18`, border: `1px solid ${industryColor}28` }}>
                Ad &amp; Marketing
              </span>
            </motion.div>

            <motion.h1 {...fade(0.06)}
              className="mt-5 font-display text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.06] tracking-tight text-white">
              Smart Bidding Architecture<br />
              <span className="bg-gradient-to-r from-[#A78BFA] to-[#818CF8] bg-clip-text text-transparent">&amp; Algorithmic Media Buying</span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-base leading-relaxed text-white/55 max-w-lg">
              Feed deep-funnel conversion events to Meta and Google algorithms, pull real-time CPA data every 4 hours, get GPT-4o anomaly alerts the moment any ad set breaches target — and give clients a live Looker Studio dashboard.
            </motion.p>

            <motion.div {...fade(0.14)} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {outcomes.map(o => (
                <div key={o.stat} className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-4">
                  <p className="font-display text-2xl font-bold" style={{ color: accentColor }}>{o.stat}</p>
                  <p className="mt-0.5 text-xs font-medium text-white/70">{o.label}</p>
                  <p className="text-[10px] text-white/35">{o.sub}</p>
                </div>
              ))}
            </motion.div>

            <motion.div {...fade(0.18)} className="mt-6 flex flex-wrap gap-2">
              {['Meta Ads API', 'Google Ads API', 'n8n', 'GPT-4o', 'Looker Studio', 'Slack'].map(t => (
                <span key={t} className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/50">
                  {t}
                </span>
              ))}
            </motion.div>

            <motion.div {...fade(0.22)} className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://calendly.com/kovil-ai/talent" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 font-display"
                style={{ background: accentColor, boxShadow: `0 4px 24px ${accentColor}4D` }}
              >
                Improve your ROAS <ArrowRight size={15} />
              </a>
              <Link
                href="/ai-workflow-automation-library"
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.10] px-6 py-3 text-sm text-white/65 hover:text-white hover:border-white/25 transition-colors"
              >
                ← Browse all workflows
              </Link>
            </motion.div>

            <motion.p {...fade(0.26)} className="mt-5 flex items-center gap-2 text-xs text-white/35">
              <Clock size={12} style={{ color: `${accentColor}B3` }} />
              Typical build: <span className="text-white/55 font-medium">4–6 week sprint · Fixed price · Zero delivery risk</span>
            </motion.p>
          </div>

          <motion.div {...fade(0.1)} className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 shadow-2xl">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full animate-pulse" style={{ background: accentColor }} />
              <span className="text-[11px] font-medium text-white/40 font-display tracking-wide uppercase">To be built — runs every 4 hours across all ad accounts</span>
            </div>
            <HeroDiagram />
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-4">
              {[
                { label: 'Data cadence', value: 'Every 4 hours' },
                { label: 'Alert speed', value: '< 5 minutes' },
                { label: 'ROAS uplift', value: '+40% average' },
              ].map(item => (
                <div key={item.label} className="text-center">
                  <p className="text-[10px] text-white/30 font-display uppercase tracking-wide">{item.label}</p>
                  <p className="mt-0.5 text-xs font-medium text-white/65">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT THIS SOLVES ────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.div {...fade(0)} className="mb-10">
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] font-display" style={{ color: `${accentColor}B3` }}>The problem</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-white">Why manual bidding cannot compete with native algorithms</h2>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: TrendingUp, title: 'Manual bid adjustments cannot compete when fed clean conversion data', desc: 'Device modifier tweaking and manual CPC adjustments are relics. Meta and Google\'s native algorithms outperform manual bidding by 20–40% ROAS — but only when trained on deep-funnel conversion events, not page views.' },
            { icon: TrendingUp, title: 'CPA breaches go undetected for days when checking manually', desc: 'Without automated monitoring, an ad set blowing through budget at 2x target CPA runs until someone checks the dashboard — often days later. The damage is done. Real-time alerts change the response window from days to minutes.' },
            { icon: TrendingUp, title: 'Cross-platform analysis is impossible without a unified data layer', desc: 'Meta and Google live in separate platforms with separate reporting UIs. Understanding true blended CPA, ROAS, and CVR requires a unified data layer that manually pulling reports can never achieve at scale.' },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div key={item.title} {...fade(i * 0.08)}
                className="rounded-2xl border border-white/[0.07] bg-[#111111] p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border"
                  style={{ background: `${accentColor}1A`, borderColor: `${accentColor}33` }}>
                  <Icon size={18} style={{ color: accentColor }} />
                </div>
                <h3 className="font-display font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/45">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ── STEP BY STEP ────────────────────────────────────────────────── */}
      <section className="bg-[#0D0D0D] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fade(0)} className="mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] font-display" style={{ color: `${accentColor}B3` }}>How it works</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-white">Every step, explained</h2>
            <p className="mt-2 text-white/45 text-sm max-w-xl">
              This is the actual workflow Kovil AI engineers can build and deploy — not a diagram. Here is what runs inside every node.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {steps.map((step, i) => (
              <motion.div key={step.num} {...fade(i * 0.06)}
                className="group relative grid gap-6 rounded-2xl border border-white/[0.07] bg-[#111111] p-6 transition-colors hover:border-white/[0.12] sm:grid-cols-[auto_1fr]">
                <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-3 sm:w-36">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-display text-sm font-bold text-white"
                    style={{ background: step.toolColor }}>
                    {step.num}
                  </div>
                  <span className="text-[11px] font-semibold font-display tracking-wide text-white/60">
                    {step.tool}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white text-base mb-2">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-white/50 mb-4">{step.detail}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map(tag => (
                      <span key={tag} className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/40">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="absolute left-[2.3rem] top-full h-4 w-px bg-white/[0.06]" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.div {...fade(0)} className="mb-10">
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] font-display" style={{ color: `${accentColor}B3` }}>Tech stack</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-white">Every tool in the workflow</h2>
        </motion.div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((tool, i) => (
            <motion.div key={tool.name} {...fade(i * 0.05)}
              className="rounded-2xl border border-white/[0.07] bg-[#111111] p-5 hover:border-white/[0.12] transition-colors">
              <div className="mb-3 flex items-center gap-2.5">
                <div className="h-3 w-3 rounded-full" style={{ background: tool.color }} />
                <span className="font-display text-xs font-semibold text-white/80">{tool.name}</span>
              </div>
              <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider font-display" style={{ color: tool.color }}>
                {tool.role}
              </p>
              <p className="text-xs leading-relaxed text-white/40">{tool.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── WHAT KOVIL BUILDS ───────────────────────────────────────────── */}
      <section className="bg-[#0D0D0D] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div {...fade(0)}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em] font-display" style={{ color: `${accentColor}B3` }}>What we build</span>
              <h2 className="mt-2 font-display text-3xl font-bold text-white">A 4–6 week sprint. Production ready.</h2>
              <p className="mt-4 text-white/50 text-sm leading-relaxed">
                Kovil AI engineers scope, build, test and deploy this workflow end-to-end. You get a live monitoring system, not a deck.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {[
                  'Server-side conversion tracking via Meta CAPI and Google Enhanced Conversions',
                  'n8n 4-hour scheduler pulling Meta Ads API and Google Ads API',
                  'Unified cross-platform data schema in Google Sheets or BigQuery',
                  'GPT-4o CPA analysis with configurable threshold alerts',
                  'Slack notification system with structured alert format',
                  'Looker Studio dashboard with auto-refresh and client-accessible link',
                  'Meta AI Business Assistant integration for creative recommendations',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                    <CheckCircle size={15} style={{ color: accentColor }} className="mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fade(0.1)}>
              <div className="rounded-2xl border border-white/[0.08] bg-[#111111] p-8">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-display text-sm font-semibold text-white">Sprint timeline</span>
                  <span className="rounded-full px-3 py-1 text-[11px] font-semibold font-display"
                    style={{ background: `${accentColor}1A`, border: `1px solid ${accentColor}40`, color: accentColor }}>
                    4–6 weeks
                  </span>
                </div>
                {[
                  { week: 'Week 1–2', title: 'Tracking + data layer', items: ['Server-side conversion tracking + n8n API connections + unified data schema'] },
                  { week: 'Week 3–4', title: 'Analysis + alerts', items: ['GPT-4o CPA analysis + Slack alert system + threshold configuration'] },
                  { week: 'Week 5–6', title: 'Dashboard + deploy', items: ['Looker Studio build + client access setup + full deployment and testing'] },
                ].map((wk, i) => (
                  <div key={wk.week} className={`relative pb-6 ${i < 2 ? 'border-b border-white/[0.05] mb-6' : ''}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-display text-[11px] font-bold uppercase tracking-wider" style={{ color: accentColor }}>{wk.week}</span>
                      <span className="text-sm font-semibold text-white">{wk.title}</span>
                    </div>
                    <ul className="flex flex-col gap-1.5">
                      {wk.items.map(item => (
                        <li key={item} className="flex items-center gap-2 text-xs text-white/45">
                          <div className="h-1 w-1 rounded-full" style={{ background: `${accentColor}80` }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="bg-[#0D0D0D] py-20">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div {...fade(0)} className="mb-10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] font-display" style={{ color: `${accentColor}B3` }}>FAQ</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-white">Common Questions</h2>
          </motion.div>
          <div className="divide-y divide-white/[0.06]">
            {[
              { q: 'Why do native platform algorithms outperform manual bidding?', a: "Meta and Google's native algorithms have access to thousands of behavioural signals per user that are invisible to advertisers — scroll patterns, app usage, purchase history across the platform ecosystem. Manual bid adjustments only act on the data visible in the dashboard. When fed clean deep-funnel conversion data (actual purchases or qualified leads rather than clicks), the native algorithms dramatically outperform human operators in optimising toward real business outcomes." },
              { q: 'What is deep-funnel conversion tracking and how is it different from standard tracking?', a: 'Standard tracking fires when a user reaches a thank-you page (a shallow signal). Deep-funnel tracking fires when a user completes a high-value action — a qualified call, a completed application, an actual purchase — and sends that signal back to Meta via Conversions API and Google via Enhanced Conversions with hashed user data. This trains the algorithm on signals that actually correlate with revenue.' },
              { q: 'How quickly does the GPT-4o alert fire when a campaign breaches CPA?', a: 'The n8n workflow polls Meta Ads API and Google Ads API every 4 hours. If GPT-4o detects any ad set spending more than 20% above the configured target CPA, a structured Slack alert fires within minutes of the polling cycle completing. The alert includes the ad set name, current CPR, target CPR, overspend amount, and a recommended action.' },
              { q: 'Does this workflow make automatic bid changes?', a: 'No — and this is intentional. The workflow monitors, analyses, and alerts, but does not automatically adjust bids or pause campaigns. All actions are reviewed and executed by the media buyer. The goal is to give the human operator better information faster, not to remove human judgement from media buying decisions.' },
            ].map((item, i) => (
              <motion.div key={item.q} {...fade(i * 0.07)} className="py-6">
                <h3 className="font-display font-semibold text-white text-base mb-2 leading-snug">{item.q}</h3>
                <p className="text-sm leading-relaxed text-white/50">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <motion.div {...fade(0)}
          className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111111] px-8 py-16 text-center">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-64 w-[500px] rounded-full opacity-[0.07] blur-[80px]" style={{ background: accentColor }} />
          </div>
          <TrendingUp size={24} className="relative mx-auto mb-4" style={{ color: accentColor }} />
          <h2 className="relative font-display text-[clamp(22px,3.5vw,36px)] font-bold text-white">
            Stop leaving ROAS on the table.
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Book a 30-minute discovery call. Kovil AI engineers will scope the conversion tracking setup, API integrations, and alert thresholds for your specific ad accounts — fixed price, zero delivery risk.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://calendly.com/kovil-ai/talent" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold text-white transition-all hover:opacity-95 font-display"
              style={{ background: accentColor, boxShadow: `0 8px 32px ${accentColor}4D` }}
            >
              Book a discovery call <ArrowRight size={16} />
            </a>
            <Link
              href="/ai-workflow-automation-library"
              className="inline-flex items-center gap-2 rounded-xl border border-white/[0.10] px-8 py-3.5 text-sm text-white/60 hover:text-white hover:border-white/25 transition-colors"
            >
              Browse other workflows
            </Link>
          </div>
          <p className="relative mt-6 text-[11px] text-white/25">
            Typical sprint: 4–6 weeks · Fixed-price · Fully managed delivery · Post-launch support included
          </p>
        </motion.div>
      </section>

    </div>
  )
}
