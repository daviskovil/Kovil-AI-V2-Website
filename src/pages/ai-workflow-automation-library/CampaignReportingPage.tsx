'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Clock, CheckCircle, Calendar, Zap, BarChart3, ChevronRight, Users, MessageSquare } from 'lucide-react'

// ── Brand-coloured node icons for the hero diagram ────────────────────────────

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

// Clock icon (Cron)
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

// Meta "f"
function MetaIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#1877F2">
      <text x={cx} y={cy + 9} textAnchor="middle" fill="white" fontSize="28" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">f</text>
    </NodeBox>
  )
}

// Google Ads "G" multicolor
function GoogleAdsIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="white" border="#E5E0D8">
      {/* Simplified Google G */}
      <path
        d={`M${cx + 12},${cy} L${cx},${cy} L${cx},${cy + 6} L${cx + 8},${cy + 6} A12,12 0 1,1 ${cx + 5},${cy - 10}`}
        fill="none" stroke="#4285F4" strokeWidth="3.5" strokeLinecap="round"
      />
      <circle cx={cx - 4} cy={cy - 10} r="3" fill="#EA4335" />
    </NodeBox>
  )
}

// LinkedIn "in"
function LinkedInIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#0A66C2">
      <text x={cx} y={cy + 8} textAnchor="middle" fill="white" fontSize="18" fontWeight="800" fontFamily="Helvetica Neue, Arial, sans-serif" letterSpacing="-1">in</text>
    </NodeBox>
  )
}

// n8n lightning bolt (merge)
function N8nMergeIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#F65B2B">
      {/* Lightning bolt */}
      <polygon
        points={`${cx + 4},${cy - 14} ${cx - 4},${cy - 2} ${cx + 2},${cy - 2} ${cx - 4},${cy + 14} ${cx + 4},${cy + 2} ${cx - 2},${cy + 2}`}
        fill="white"
      />
    </NodeBox>
  )
}

// OpenAI / GPT-4o
function OpenAIIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#10A37F">
      {/* Simplified OpenAI logo: circle with stylised trefoil-ish shape */}
      <circle cx={cx} cy={cy} r="13" stroke="white" strokeWidth="2" fill="none" />
      <circle cx={cx} cy={cy} r="5" fill="white" />
      <circle cx={cx} cy={cy - 10} r="3" fill="white" />
      <circle cx={cx + 9} cy={cy + 5} r="3" fill="white" />
      <circle cx={cx - 9} cy={cy + 5} r="3" fill="white" />
    </NodeBox>
  )
}

// Google Slides
function SlidesIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#FBBC04">
      {/* Slides document shape */}
      <rect x={cx - 12} y={cy - 14} width={24} height={28} rx={3} fill="white" opacity={0.9} />
      <rect x={cx - 8} y={cy - 8} width={16} height={10} rx={1.5} fill="#FBBC04" />
      <line x1={cx - 7} y1={cy + 7} x2={cx + 7} y2={cy + 7} stroke="#FBBC04" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 5} y1={cy + 11} x2={cx + 5} y2={cy + 11} stroke="#FBBC04" strokeWidth="2" strokeLinecap="round" />
    </NodeBox>
  )
}

// Gmail
function GmailIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="white" border="#E5E0D8">
      {/* Envelope M shape */}
      <rect x={cx - 13} y={cy - 9} width={26} height={18} rx={2} fill="none" stroke="#EA4335" strokeWidth="2" />
      <polyline points={`${cx - 13},${cy - 9} ${cx},${cy + 4} ${cx + 13},${cy - 9}`} fill="none" stroke="#EA4335" strokeWidth="2" strokeLinejoin="round" />
      <line x1={cx - 13} y1={cy + 9} x2={cx - 3} y2={cy} stroke="#4285F4" strokeWidth="2" />
      <line x1={cx + 13} y1={cy + 9} x2={cx + 3} y2={cy} stroke="#34A853" strokeWidth="2" />
    </NodeBox>
  )
}

// Slack
function SlackIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#4A154B">
      {/* Slack hashtag / # approximation */}
      <line x1={cx - 7} y1={cy - 8} x2={cx - 4} y2={cy + 8} stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1={cx + 3} y1={cy - 8} x2={cx + 6} y2={cy + 8} stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1={cx - 10} y1={cy - 3} x2={cx + 9} y2={cy - 3} stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1={cx - 9} y1={cy + 3} x2={cx + 10} y2={cy + 3} stroke="white" strokeWidth="3" strokeLinecap="round" />
    </NodeBox>
  )
}

// Arrow marker definition
function ArrowDefs() {
  return (
    <defs>
      <marker id="arrow-light" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <polygon points="0,0 0,6 8,3" fill="#D0CBC2" />
      </marker>
      <marker id="arrow-dark" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <polygon points="0,0 0,6 8,3" fill="#555" />
      </marker>
    </defs>
  )
}

// Node label below each node
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

// ── Hero workflow diagram ──────────────────────────────────────────────────────
// Layout (all centres):
// Cron (60, 140) → Meta (195, 65) ─┐
//               → Google Ads(195,140)─┼→ Merge(340,140) → GPT-4o(470,140) → Slides(605,140) → Gmail(740, 80)
//               → LinkedIn (195,215)─┘                                                       → Slack(740,200)

function HeroDiagram() {
  const stroke = '#D0CBC2'
  const sw = 1.8
  const ma = 'url(#arrow-light)'

  return (
    <svg viewBox="0 0 810 285" className="w-full" style={{ display: 'block' }}>
      <ArrowDefs />

      {/* ── Connection paths ── */}
      {/* Cron → Meta (curve up) */}
      <path d="M88,140 C125,140 130,65 165,65" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Cron → Google Ads (straight) */}
      <path d="M88,140 H165" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Cron → LinkedIn (curve down) */}
      <path d="M88,140 C125,140 130,215 165,215" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* Meta → Merge (curve down) */}
      <path d="M223,65 C280,65 285,140 310,140" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Google Ads → Merge (straight) */}
      <path d="M223,140 H310" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* LinkedIn → Merge (curve up) */}
      <path d="M223,215 C280,215 285,140 310,140" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* Merge → GPT-4o */}
      <path d="M368,140 H440" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* GPT-4o → Slides */}
      <path d="M498,140 H577" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Slides → Gmail (curve up) */}
      <path d="M633,140 C668,140 670,80 712,80" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Slides → Slack (curve down) */}
      <path d="M633,140 C668,140 670,200 712,200" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* ── Nodes ── */}
      <CronIcon cx={60} cy={140} />
      <NodeLabel cx={60} cy={140} text="Schedule" sub="Every Mon 8am" />

      <MetaIcon cx={195} cy={65} />
      <NodeLabel cx={195} cy={65} text="Meta Ads API" />

      <GoogleAdsIcon cx={195} cy={140} />
      <NodeLabel cx={195} cy={140} text="Google Ads API" />

      <LinkedInIcon cx={195} cy={215} />
      <NodeLabel cx={195} cy={215} text="LinkedIn API" />

      <N8nMergeIcon cx={340} cy={140} />
      <NodeLabel cx={340} cy={140} text="n8n Merge" sub="Normalise data" />

      <OpenAIIcon cx={470} cy={140} />
      <NodeLabel cx={470} cy={140} text="GPT-4o" sub="Analysis" />

      <SlidesIcon cx={605} cy={140} />
      <NodeLabel cx={605} cy={140} text="Google Slides" sub="Report builder" />

      <GmailIcon cx={740} cy={80} />
      <NodeLabel cx={740} cy={80} text="Gmail" sub="Client email" />

      <SlackIcon cx={740} cy={200} />
      <NodeLabel cx={740} cy={200} text="Slack" sub="Team update" />

      {/* Step number badges */}
      {[
        [60, 140, '1'], [195, 65, '2a'], [195, 140, '2b'], [195, 215, '2c'],
        [340, 140, '3'], [470, 140, '4'], [605, 140, '5'], [740, 80, '6'], [740, 200, '7'],
      ].map(([x, y, n]) => (
        <g key={String(n)}>
          <circle cx={Number(x) + 20} cy={Number(y) - 20} r={9} fill="#FF4F00" />
          <text x={Number(x) + 20} y={Number(y) - 16} textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="Inter, sans-serif">{n}</text>
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
    title: 'Cron trigger fires every Monday at 8:00 AM',
    detail: 'n8n\'s Schedule node is configured to run every Monday at 8:00 AM in the client\'s timezone. No manual trigger, no spreadsheet reminder, no human needed — the workflow starts automatically. The trigger can be reconfigured for any cadence (daily, bi-weekly, end of month).',
    tags: ['n8n', 'Schedule Node', 'Fully Automated'],
  },
  {
    num: 2,
    tool: 'Parallel API pulls',
    toolColor: '#1877F2',
    title: 'Pull 7 days of data from Meta, Google Ads & LinkedIn — simultaneously',
    detail: 'Three separate HTTP Request nodes run in parallel. Each calls the respective platform\'s API (Meta Marketing API v19, Google Ads API v16, LinkedIn Marketing API v2) and returns campaign-level data: spend, impressions, clicks, conversions, ROAS, CPC, CPM. All date ranges are calculated dynamically from the trigger date.',
    tags: ['Meta Ads API', 'Google Ads API', 'LinkedIn API', 'Parallel execution'],
  },
  {
    num: 3,
    tool: 'n8n Merge',
    toolColor: '#F65B2B',
    title: 'Merge all data and normalise field names in n8n',
    detail: 'n8n\'s Merge node combines the three platform datasets into a single unified object. A custom JavaScript Function node then normalises field names (e.g. "spend" vs "cost" vs "amount_spent"), converts currencies to a base currency, and flags any campaigns where data is missing or an API returned an error.',
    tags: ['n8n Merge Node', 'JavaScript Function', 'Data normalisation'],
  },
  {
    num: 4,
    tool: 'GPT-4o',
    toolColor: '#10A37F',
    title: 'GPT-4o analyses performance and writes the narrative',
    detail: 'A structured prompt sends the full normalised dataset to OpenAI\'s GPT-4o API. The prompt instructs the model to identify: top 3 performing campaigns, bottom 3 underperformers, week-over-week budget efficiency changes, anomalies (e.g. CPM spikes >30%), and to write 3 concrete recommendations in plain English. Output is returned as structured JSON.',
    tags: ['OpenAI API', 'GPT-4o', 'Structured JSON output', 'Prompt engineering'],
  },
  {
    num: 5,
    tool: 'Google Slides API',
    toolColor: '#FBBC04',
    title: 'Slides API populates a pre-built presentation template',
    detail: 'Using the Google Slides API, n8n creates a new presentation by copying a master template (stored in the client\'s Drive). It then programmatically replaces placeholder text across 5 slides: Slide 1 (executive summary), Slides 2–4 (platform breakdowns with charts), Slide 5 (GPT-4o recommendations). The final report is exported as both a Google Slides link and a PDF.',
    tags: ['Google Slides API', 'Template cloning', 'PDF export', 'Google Drive API'],
  },
  {
    num: 6,
    tool: 'Gmail API',
    toolColor: '#EA4335',
    title: 'Client receives a branded email with the report attached',
    detail: 'Gmail API sends a personalised email to each stakeholder on the client\'s distribution list. The subject line includes the brand name and date range. The body contains a 3-sentence AI-written summary of the key insight from GPT-4o. The PDF report is attached and the Google Slides link is embedded. Sent from the agency\'s email address via Gmail OAuth.',
    tags: ['Gmail API', 'OAuth 2.0', 'PDF attachment', 'Personalised subject lines'],
  },
  {
    num: 7,
    tool: 'Slack API',
    toolColor: '#4A154B',
    title: 'Team gets a Slack post with the headline metrics',
    detail: 'A Slack webhook posts a formatted message to the agency\'s #weekly-reports channel. The message includes: total spend across all platforms, blended ROAS, best-performing campaign (with metric), top GPT-4o insight of the week, and a link to the full Google Slides report. Emojis and Slack block kit formatting make it easy to scan in seconds.',
    tags: ['Slack Webhooks', 'Block Kit', 'Channel routing'],
  },
]

// ── Tech stack ────────────────────────────────────────────────────────────────

const techStack = [
  { name: 'n8n', role: 'Workflow orchestration', color: '#F65B2B', desc: 'The backbone of the automation. All triggers, data merges, API calls, and conditional logic live in n8n. Self-hosted or n8n Cloud.' },
  { name: 'Meta Ads API', role: 'Ad data source', color: '#1877F2', desc: 'Pulls campaign-level performance data including spend, impressions, clicks, ROAS and reach. Uses long-lived user access tokens.' },
  { name: 'Google Ads API', role: 'Ad data source', color: '#4285F4', desc: 'Returns search, display and Performance Max campaign metrics via Google Ads Query Language (GAQL). Requires Google Cloud OAuth setup.' },
  { name: 'LinkedIn Marketing API', role: 'Ad data source', color: '#0A66C2', desc: 'Pulls sponsored content and lead gen campaign data. Requires LinkedIn App credentials and organisation admin access.' },
  { name: 'GPT-4o (OpenAI API)', role: 'AI analysis engine', color: '#10A37F', desc: 'Receives the merged dataset and returns structured JSON: top performers, anomalies, recommendations. Temperature set to 0.3 for consistent, factual outputs.' },
  { name: 'Google Slides API', role: 'Report builder', color: '#FBBC04', desc: 'Clones a master template and populates slide placeholders programmatically. No manual slide editing required.' },
  { name: 'Gmail API', role: 'Client delivery', color: '#EA4335', desc: 'Sends branded HTML emails with PDF attachments from the agency\'s own Gmail address via OAuth 2.0.' },
  { name: 'Slack Webhooks', role: 'Team notification', color: '#4A154B', desc: 'Posts a formatted Block Kit message to the internal reporting channel with headline metrics and a report link.' },
]

// ── Outcomes ──────────────────────────────────────────────────────────────────

const outcomes = [
  { stat: '12 hrs', label: 'saved per week', sub: 'vs. manual reporting' },
  { stat: '2 min', label: 'to generate report', sub: 'after workflow runs' },
  { stat: '100%', label: 'on-time delivery', sub: 'every single Monday' },
  { stat: '3×', label: 'more accounts', sub: 'handled per analyst' },
]

// ── Component ─────────────────────────────────────────────────────────────────

function fade(delay = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.45, delay },
  }
}

export default function CampaignReportingPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">

      {/* ── BREADCRUMB ──────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-0">
        <nav className="flex items-center gap-2 text-xs text-white/35">
          <Link href="/ai-workflow-automation-library" className="flex items-center gap-1 hover:text-white/70 transition-colors">
            <ArrowLeft size={12} /> AI Workflow Library
          </Link>
          <ChevronRight size={11} className="text-white/20" />
          <span className="text-white/55">Campaign Performance Reporting</span>
        </nav>
      </div>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-4">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">

          {/* Left: text */}
          <div>
            <motion.div {...fade(0)}>
              <span className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide font-display"
                style={{ color: '#A78BFA', background: '#A78BFA18', border: '1px solid #A78BFA28' }}>
                Ad &amp; Marketing
              </span>
            </motion.div>

            <motion.h1 {...fade(0.06)}
              className="mt-5 font-display text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.06] tracking-tight text-white">
              Campaign Performance<br />
              <span className="bg-gradient-to-r from-[#FF4F00] to-[#FBBF24] bg-clip-text text-transparent">Reporting Automation</span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-base leading-relaxed text-white/55 max-w-lg">
              Every Monday at 8am, this n8n workflow pulls live data from Meta, Google Ads and LinkedIn, sends it through GPT-4o for analysis, builds a branded slide deck and emails it to every client before they open their laptop.
            </motion.p>

            {/* Key stats */}
            <motion.div {...fade(0.14)} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {outcomes.map(o => (
                <div key={o.stat} className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-4">
                  <p className="font-display text-2xl font-bold text-[#FF4F00]">{o.stat}</p>
                  <p className="mt-0.5 text-xs font-medium text-white/70">{o.label}</p>
                  <p className="text-[10px] text-white/35">{o.sub}</p>
                </div>
              ))}
            </motion.div>

            {/* Tags */}
            <motion.div {...fade(0.18)} className="mt-6 flex flex-wrap gap-2">
              {['n8n', 'GPT-4o', 'Meta Ads API', 'Google Ads API', 'LinkedIn API', 'Google Slides', 'Gmail', 'Slack'].map(t => (
                <span key={t} className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/50">
                  {t}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fade(0.22)} className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://calendly.com/kovil-ai/talent" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#FF4F00] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 font-display shadow-[0_4px_24px_rgba(255,79,0,0.30)]"
              >
                Build this for my agency <ArrowRight size={15} />
              </a>
              <Link
                href="/ai-workflow-automation-library"
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.10] px-6 py-3 text-sm text-white/65 hover:text-white hover:border-white/25 transition-colors"
              >
                ← Browse all workflows
              </Link>
            </motion.div>

            {/* Build time pill */}
            <motion.p {...fade(0.26)} className="mt-5 flex items-center gap-2 text-xs text-white/35">
              <Clock size={12} className="text-[#FF4F00]/70" />
              Typical build: <span className="text-white/55 font-medium">2–3 week sprint · Fixed price · Zero delivery risk</span>
            </motion.p>
          </div>

          {/* Right: diagram */}
          <motion.div {...fade(0.1)} className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 shadow-2xl">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#FF4F00] animate-pulse" />
              <span className="text-[11px] font-medium text-white/40 font-display tracking-wide uppercase">Live workflow — runs every Monday 8am</span>
            </div>
            <HeroDiagram />
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-4">
              {[
                { label: 'Trigger', value: 'Cron schedule' },
                { label: 'Avg runtime', value: '~2 minutes' },
                { label: 'Error handling', value: 'Auto-retry ×3' },
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
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#FF4F00]/70 font-display">The problem</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-white">Why agencies still do this manually</h2>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Clock, title: 'It takes 12+ hours every week', desc: 'Pulling from 3 platforms, building a deck, writing a summary, formatting, emailing each client. A senior analyst burns an entire Monday on reporting that could be automated.' },
            { icon: BarChart3, title: 'Reports go out late — or wrong', desc: "Manual copy-paste from different dashboards leads to formula errors, mismatched date ranges and slide decks that don't match the data. Clients notice." },
            { icon: Users, title: "It doesn't scale with headcount", desc: "Adding a new client means another 2 hours of weekly reporting. Agencies hit a ceiling where they can't take on more clients without hiring more analysts just for reporting." },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div key={item.title} {...fade(i * 0.08)}
                className="rounded-2xl border border-white/[0.07] bg-[#111111] p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF4F00]/10 border border-[#FF4F00]/20">
                  <Icon size={18} className="text-[#FF4F00]" />
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
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#FF4F00]/70 font-display">How it works</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-white">Every step, explained</h2>
            <p className="mt-2 text-white/45 text-sm max-w-xl">
              This is the actual workflow Kovil AI builds and deploys — not a diagram. Here's what runs inside every node.
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
                {/* Connector line */}
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
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#FF4F00]/70 font-display">Tech stack</span>
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
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#FF4F00]/70 font-display">What we build</span>
              <h2 className="mt-2 font-display text-3xl font-bold text-white">A 2–3 week sprint. Production ready.</h2>
              <p className="mt-4 text-white/50 text-sm leading-relaxed">
                Kovil AI scopes, builds, tests and deploys this workflow end-to-end. You don't touch n8n until it's live and running.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {[
                  'n8n workflow configured and hosted (cloud or self-hosted)',
                  'API credentials setup for Meta, Google Ads, LinkedIn',
                  'Custom Google Slides master template built to your brand',
                  'GPT-4o prompt engineered for your specific KPIs',
                  'Error handling: alerts when an API fails or data is missing',
                  'Slack and Gmail configured with your accounts',
                  '2-week handover: runbook, credentials, support access',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                    <CheckCircle size={15} className="text-[#FF4F00] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fade(0.1)}>
              <div className="rounded-2xl border border-white/[0.08] bg-[#111111] p-8">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-display text-sm font-semibold text-white">Sprint timeline</span>
                  <span className="rounded-full bg-[#FF4F00]/10 border border-[#FF4F00]/25 px-3 py-1 text-[11px] font-semibold text-[#FF4F00] font-display">
                    2–3 weeks
                  </span>
                </div>
                {[
                  { week: 'Week 1', title: 'Scoping & setup', items: ['API credentials & access audit', 'n8n environment setup', 'Slides template design'] },
                  { week: 'Week 2', title: 'Build & test', items: ['Full workflow build in n8n', 'GPT-4o prompt engineering', 'End-to-end testing with real data'] },
                  { week: 'Week 3', title: 'Deploy & handover', items: ['Production deployment', 'First live Monday run', 'Runbook & documentation'] },
                ].map((wk, i) => (
                  <div key={wk.week} className={`relative pb-6 ${i < 2 ? 'border-b border-white/[0.05] mb-6' : ''}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-display text-[11px] font-bold uppercase tracking-wider text-[#FF4F00]">{wk.week}</span>
                      <span className="text-sm font-semibold text-white">{wk.title}</span>
                    </div>
                    <ul className="flex flex-col gap-1.5">
                      {wk.items.map(item => (
                        <li key={item} className="flex items-center gap-2 text-xs text-white/45">
                          <div className="h-1 w-1 rounded-full bg-[#FF4F00]/50" />
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
            <div className="h-64 w-[500px] rounded-full bg-[#FF4F00] opacity-[0.07] blur-[80px]" />
          </div>
          <MessageSquare size={24} className="relative mx-auto mb-4 text-[#FF4F00]" />
          <h2 className="relative font-display text-[clamp(22px,3.5vw,36px)] font-bold text-white">
            Ready to ship this in 3 weeks?
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Book a 30-minute discovery call. We'll scope the workflow for your platforms, clients and reporting cadence — fixed price, zero delivery risk.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://calendly.com/kovil-ai/talent" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#FF4F00] px-8 py-3.5 text-sm font-bold text-white shadow-[0_8px_32px_rgba(255,79,0,0.30)] hover:shadow-[0_8px_40px_rgba(255,79,0,0.45)] transition-all hover:opacity-95 font-display"
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
