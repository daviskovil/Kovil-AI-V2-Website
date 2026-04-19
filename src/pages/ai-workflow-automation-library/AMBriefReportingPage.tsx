'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Clock, CheckCircle, ChevronRight, BarChart3, Users, MessageSquare } from 'lucide-react'

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

function CronIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#FF4F00">
      <circle cx={cx} cy={cy} r={14} stroke="white" strokeWidth="2.2" fill="none" />
      <line x1={cx} y1={cy - 10} x2={cx} y2={cy} stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      <line x1={cx} y1={cy} x2={cx + 7} y2={cy + 4} stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx={cx} cy={cy} r="2" fill="white" />
    </NodeBox>
  )
}

function GA4Icon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#E37400">
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="14" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">GA4</text>
    </NodeBox>
  )
}

function MetaIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#1877F2">
      <text x={cx} y={cy + 9} textAnchor="middle" fill="white" fontSize="28" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">f</text>
    </NodeBox>
  )
}

function GoogleAdsIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="white" border="#E5E0D8">
      <path
        d={`M${cx + 12},${cy} L${cx},${cy} L${cx},${cy + 6} L${cx + 8},${cy + 6} A12,12 0 1,1 ${cx + 5},${cy - 10}`}
        fill="none" stroke="#4285F4" strokeWidth="3.5" strokeLinecap="round"
      />
      <circle cx={cx - 4} cy={cy - 10} r="3" fill="#EA4335" />
    </NodeBox>
  )
}

function N8nMergeIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#F65B2B">
      <polygon
        points={`${cx + 4},${cy - 14} ${cx - 4},${cy - 2} ${cx + 2},${cy - 2} ${cx - 4},${cy + 14} ${cx + 4},${cy + 2} ${cx - 2},${cy + 2}`}
        fill="white"
      />
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

function SlidesIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#FBBC04">
      <rect x={cx - 12} y={cy - 14} width={24} height={28} rx={3} fill="white" opacity={0.9} />
      <rect x={cx - 8} y={cy - 8} width={16} height={10} rx={1.5} fill="#FBBC04" />
      <line x1={cx - 7} y1={cy + 7} x2={cx + 7} y2={cy + 7} stroke="#FBBC04" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 5} y1={cy + 11} x2={cx + 5} y2={cy + 11} stroke="#FBBC04" strokeWidth="2" strokeLinecap="round" />
    </NodeBox>
  )
}

function SlackIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#4A154B">
      <line x1={cx - 7} y1={cy - 8} x2={cx - 4} y2={cy + 8} stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1={cx + 3} y1={cy - 8} x2={cx + 6} y2={cy + 8} stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1={cx - 10} y1={cy - 3} x2={cx + 9} y2={cy - 3} stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1={cx - 9} y1={cy + 3} x2={cx + 10} y2={cy + 3} stroke="white" strokeWidth="3" strokeLinecap="round" />
    </NodeBox>
  )
}

function ArrowDefs() {
  return (
    <defs>
      <marker id="arrow-am" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
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
  const ma = 'url(#arrow-am)'

  return (
    <svg viewBox="0 0 780 270" className="w-full" style={{ display: 'block' }}>
      <ArrowDefs />

      {/* Cron → GA4 */}
      <path d="M88,135 C130,135 130,65 167,65" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Cron → Meta */}
      <path d="M88,135 H167" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Cron → Google Ads */}
      <path d="M88,135 C130,135 130,205 167,205" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* GA4 → Merge */}
      <path d="M223,65 C270,65 270,135 312,135" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Meta → Merge */}
      <path d="M223,135 H312" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Google Ads → Merge */}
      <path d="M223,205 C270,205 270,135 312,135" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* Merge → GPT-4o */}
      <path d="M368,135 H437" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* GPT-4o → Slides */}
      <path d="M493,135 C530,135 530,65 562,65" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* GPT-4o → Slack */}
      <path d="M493,135 C530,135 530,205 562,205" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* Nodes */}
      <CronIcon cx={60} cy={135} />
      <NodeLabel cx={60} cy={135} text="Schedule" sub="Daily 7am" />

      <GA4Icon cx={195} cy={65} />
      <NodeLabel cx={195} cy={65} text="GA4" sub="Analytics" />

      <MetaIcon cx={195} cy={135} />
      <NodeLabel cx={195} cy={135} text="Meta Ads" sub="Ad data" />

      <GoogleAdsIcon cx={195} cy={205} />
      <NodeLabel cx={195} cy={205} text="Google Ads" sub="Ad data" />

      <N8nMergeIcon cx={340} cy={135} />
      <NodeLabel cx={340} cy={135} text="n8n Merge" sub="Normalise" />

      <OpenAIIcon cx={465} cy={135} />
      <NodeLabel cx={465} cy={135} text="GPT-4o" sub="Draft writer" />

      <SlidesIcon cx={590} cy={65} />
      <NodeLabel cx={590} cy={65} text="Slides" sub="Client report" />

      <SlackIcon cx={590} cy={205} />
      <NodeLabel cx={590} cy={205} text="Slack" sub="AM brief" />

      {/* Step badges */}
      {([
        [60, 135, '1'], [195, 65, '2a'], [195, 135, '2b'], [195, 205, '2c'],
        [340, 135, '3'], [465, 135, '4'], [590, 65, '5'], [590, 205, '6'],
      ] as [number, number, string][]).map(([x, y, n]) => (
        <g key={n}>
          <circle cx={x + 20} cy={y - 20} r={9} fill="#A78BFA" />
          <text x={x + 20} y={y - 16} textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="Inter, sans-serif">{n}</text>
        </g>
      ))}
    </svg>
  )
}

// ── Step data ─────────────────────────────────────────────────────────────────

const steps = [
  {
    num: 1,
    tool: 'n8n Schedule',
    toolColor: '#FF4F00',
    title: 'Cron trigger fires at 7am every morning',
    detail: "n8n's Schedule node fires at 7am in the agency's timezone, seven days a week. It executes two parallel paths: (1) the daily AM brief path — pulling the previous day's key emails, meeting notes and tasks from Gmail and Google Calendar; (2) the weekly client report path — which only executes on Mondays, pulling 7-day ad and analytics data.",
    tags: ['n8n Schedule Node', 'Daily + weekly paths', 'Conditional branching', 'Timezone-aware'],
  },
  {
    num: 2,
    tool: 'Google Analytics 4 API',
    toolColor: '#E37400',
    title: 'GA4 pulls sessions, conversions and revenue by channel',
    detail: "n8n calls the GA4 Data API to retrieve the previous 7 days of traffic data: sessions by channel, conversion rates, goal completions, ecommerce revenue (if applicable), and bounce rate by landing page. The API uses a service account with read-only access — no login required, no manual export.",
    tags: ['GA4 Data API', 'Service account auth', 'Channel breakdown', 'Custom date ranges'],
  },
  {
    num: 3,
    tool: 'Ad Platform APIs',
    toolColor: '#1877F2',
    title: 'Meta, Google Ads data pulled in parallel',
    detail: "Three HTTP Request nodes run simultaneously to pull campaign-level performance: Meta Marketing API returns spend, ROAS, CPM and reach by campaign. Google Ads API returns impressions, clicks, conversions and quality scores. LinkedIn Marketing API returns engagement, impressions and lead gen stats. All calls use pre-stored OAuth tokens refreshed automatically.",
    tags: ['Meta Ads API', 'Google Ads API', 'LinkedIn API', 'Parallel execution', 'OAuth token refresh'],
  },
  {
    num: 4,
    tool: 'GPT-4o',
    toolColor: '#10A37F',
    title: 'GPT-4o drafts two documents: client report narrative and AM daily brief',
    detail: "Two separate GPT-4o calls run: (1) Weekly client report prompt — receives all platform data, outputs a 400-word performance narrative with top insights, anomalies and recommendations, formatted in Markdown. (2) Daily AM brief prompt — receives yesterday's calendar events, email summaries and task completions, outputs a 5-bullet synthesized brief per AM: what happened, what's due today, what needs attention.",
    tags: ['GPT-4o', 'Dual prompt paths', 'AM brief generation', 'Client narrative', 'Structured output'],
  },
  {
    num: 5,
    tool: 'Google Slides API',
    toolColor: '#FBBC04',
    title: "Client report slide deck built automatically from a master template",
    detail: "Google Slides API clones the agency's master report template and populates it programmatically: Slide 1 (executive summary with GPT-4o narrative), Slides 2–4 (platform breakdowns with key metrics), Slide 5 (GPT-4o recommendations). Charts are built using the Slides API's chart embedding feature linked to a Google Sheet that n8n populates with the raw data.",
    tags: ['Google Slides API', 'Template cloning', 'Chart embedding', 'Google Sheets API'],
  },
  {
    num: 6,
    tool: 'Slack + Gmail',
    toolColor: '#4A154B',
    title: "Client gets the report; AMs get their daily brief",
    detail: "Two parallel outputs: (1) Gmail API sends the weekly client report (PDF attachment + Google Slides link) to each client contact on the distribution list — personalised subject line, branded HTML body. (2) Slack posts a personalised daily brief to each AM's DM — their specific clients, their specific tasks, their specific red flags. One AM's brief never contains another AM's client data.",
    tags: ['Gmail API', 'Slack DMs', 'Per-AM personalisation', 'PDF attachment', 'Parallel delivery'],
  },
]

// ── Tech stack ────────────────────────────────────────────────────────────────

const techStack = [
  { name: 'n8n', role: 'Orchestration', color: '#F65B2B', desc: 'Manages daily + weekly conditional paths, all parallel API calls, data merging and both output branches.' },
  { name: 'Google Analytics 4 API', role: 'Analytics data', color: '#E37400', desc: 'Pulls traffic, conversion and revenue data via service account. No manual GA4 login or export needed.' },
  { name: 'Meta + Google Ads + LinkedIn APIs', role: 'Ad performance data', color: '#1877F2', desc: 'Three parallel API pulls return campaign-level spend, ROAS, clicks and conversions across all platforms.' },
  { name: 'GPT-4o (OpenAI)', role: 'Report writer + brief generator', color: '#10A37F', desc: "Two separate prompts: one for the client-facing report narrative, one for each AM's personalised daily brief." },
  { name: 'Google Slides API', role: 'Report builder', color: '#FBBC04', desc: 'Clones master template, populates all slides with data and GPT-4o narrative. Exports as PDF for email.' },
  { name: 'Gmail API', role: 'Client delivery', color: '#EA4335', desc: 'Sends branded report emails with PDF attachment to each client distribution list.' },
  { name: 'Slack', role: 'AM daily briefs', color: '#4A154B', desc: 'Posts personalised 5-bullet daily brief to each AM via DM. Each brief is specific to their client portfolio.' },
]

// ── Outcomes ──────────────────────────────────────────────────────────────────

const outcomes = [
  { stat: '8 hrs', label: 'saved/week', sub: 'vs. manual reporting' },
  { stat: '2 min', label: 'to generate', sub: 'weekly client report' },
  { stat: 'Daily', label: 'AM briefs', sub: 'every morning at 7am' },
  { stat: '100%', label: 'on time', sub: 'zero missed Mondays' },
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

export default function AMBriefReportingPage() {
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
          <span className="text-white/55">Automated AM Briefs & Client Reporting</span>
        </nav>
      </div>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-4">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">

          {/* Left: text */}
          <div>
            <motion.div {...fade(0)}>
              <span className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide font-display"
                style={{ color: industryColor, background: `${industryColor}18`, border: `1px solid ${industryColor}28` }}>
                Ad &amp; Marketing
              </span>
            </motion.div>

            <motion.h1 {...fade(0.06)}
              className="mt-5 font-display text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.06] tracking-tight text-white">
              Automated AM Briefs &amp;<br />
              <span className="bg-gradient-to-r from-[#A78BFA] to-[#818CF8] bg-clip-text text-transparent">Client Reporting</span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-base leading-relaxed text-white/55 max-w-lg">
              Every morning at 7am, this workflow pulls live data from GA4 and every ad platform, runs it through GPT-4o, builds the weekly client slide deck, and pushes a synthesized daily brief to every Account Manager — before they open their first email.
            </motion.p>

            {/* Key stats */}
            <motion.div {...fade(0.14)} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {outcomes.map(o => (
                <div key={o.stat} className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-4">
                  <p className="font-display text-2xl font-bold" style={{ color: accentColor }}>{o.stat}</p>
                  <p className="mt-0.5 text-xs font-medium text-white/70">{o.label}</p>
                  <p className="text-[10px] text-white/35">{o.sub}</p>
                </div>
              ))}
            </motion.div>

            {/* Tags */}
            <motion.div {...fade(0.18)} className="mt-6 flex flex-wrap gap-2">
              {['Google Analytics 4', 'Meta Ads API', 'Google Ads API', 'GPT-4o', 'n8n', 'Google Slides', 'Slack', 'Gmail'].map(t => (
                <span key={t} className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/50">
                  {t}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fade(0.22)} className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://calendly.com/kovil-ai/talent" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 font-display"
                style={{ background: accentColor, boxShadow: `0 4px 24px ${accentColor}4D` }}
              >
                Automate your reporting stack <ArrowRight size={15} />
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
              Typical build: <span className="text-white/55 font-medium">2–3 week sprint · Fixed price · Zero delivery risk</span>
            </motion.p>
          </div>

          {/* Right: diagram */}
          <motion.div {...fade(0.1)} className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 shadow-2xl">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full animate-pulse" style={{ background: accentColor }} />
              <span className="text-[11px] font-medium text-white/40 font-display tracking-wide uppercase">Live workflow — runs every morning at 7am</span>
            </div>
            <HeroDiagram />
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-4">
              {[
                { label: 'Trigger', value: 'Daily cron 7am' },
                { label: 'Reports', value: 'Weekly (Mon)' },
                { label: 'Briefs', value: 'Daily (all AMs)' },
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
          <h2 className="mt-2 font-display text-3xl font-bold text-white">Why agencies still do this manually</h2>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Clock, title: "Account managers spend Monday mornings on data, not clients", desc: "Pulling from GA4, Meta, Google Ads and LinkedIn separately, dropping numbers into a slide template, writing commentary — it's 2–3 hours every Monday before anyone talks to a client." },
            { icon: BarChart3, title: "Weekly reports go out Tuesday. Or Wednesday. Or not at all.", desc: "Manual reporting is fragile. One analyst sick, one platform API change, one missed export — and the client gets silence. This workflow eliminates all of that." },
            { icon: Users, title: "AMs are flying blind without a daily brief", desc: "Account managers have 12 client calls, 40 emails and 6 Slack threads to manage. Without a synthesized daily brief, important tasks, commitments and red flags get buried." },
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
              This is the actual workflow Kovil AI builds and deploys — not a diagram. Here is what runs inside every node.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {steps.map((step, i) => (
              <motion.div key={step.num} {...fade(i * 0.06)}
                className="group relative grid gap-6 rounded-2xl border border-white/[0.07] bg-[#111111] p-6 transition-colors hover:border-white/[0.12] sm:grid-cols-[auto_1fr]">
                {/* Left: step number + tool */}
                <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-3 sm:w-36">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-display text-sm font-bold text-white"
                    style={{ background: step.toolColor }}>
                    {step.num}
                  </div>
                  <span className="text-[11px] font-semibold font-display tracking-wide text-white/60">
                    {step.tool}
                  </span>
                </div>
                {/* Right: content */}
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
              <h2 className="mt-2 font-display text-3xl font-bold text-white">A 2–3 week sprint. Production ready.</h2>
              <p className="mt-4 text-white/50 text-sm leading-relaxed">
                Kovil AI scopes, builds, tests and deploys this workflow end-to-end. You do not touch n8n until it is live and running.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {[
                  'GA4 Data API service account setup',
                  'Meta, Google Ads and LinkedIn API credentials configured',
                  'n8n conditional branching for daily vs. weekly paths',
                  'GPT-4o dual prompts engineered for your agency voice',
                  'Google Slides master template built to your brand',
                  'Per-AM Slack brief personalisation logic',
                  'Gmail branded email delivery with PDF attachment',
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
                    2–3 weeks
                  </span>
                </div>
                {[
                  { week: 'Week 1', title: 'APIs + merge logic', items: ['GA4 + ad platform APIs + n8n merge logic'] },
                  { week: 'Week 2', title: 'GPT-4o + Slides', items: ['GPT-4o dual prompts + Google Slides template build'] },
                  { week: 'Week 3', title: 'Delivery + deploy', items: ['Gmail delivery + Slack AM brief personalisation + deployment'] },
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

      {/* ── BOTTOM CTA ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <motion.div {...fade(0)}
          className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111111] px-8 py-16 text-center">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-64 w-[500px] rounded-full opacity-[0.07] blur-[80px]" style={{ background: accentColor }} />
          </div>
          <MessageSquare size={24} className="relative mx-auto mb-4" style={{ color: accentColor }} />
          <h2 className="relative font-display text-[clamp(22px,3.5vw,36px)] font-bold text-white">
            Put your reporting on autopilot.
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Book a 30-minute discovery call. We will scope the workflow for your platforms, clients and reporting cadence — fixed price, zero delivery risk.
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
            Typical sprint: 2–3 weeks · Fixed-price · Fully managed delivery · Post-launch support included
          </p>
        </motion.div>
      </section>

    </div>
  )
}
