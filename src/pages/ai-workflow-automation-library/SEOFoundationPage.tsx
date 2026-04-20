'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Clock, CheckCircle, ChevronRight, Search } from 'lucide-react'

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

function IntakeFormIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#FF6B35">
      <rect x={cx - 11} y={cy - 13} width={22} height={26} rx={3} fill="white" opacity={0.9} />
      <line x1={cx - 7} y1={cy - 7} x2={cx + 7} y2={cy - 7} stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 7} y1={cy - 2} x2={cx + 7} y2={cy - 2} stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 7} y1={cy + 3} x2={cx + 3} y2={cy + 3} stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" />
    </NodeBox>
  )
}

function AirtableIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#FFB347">
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">AT</text>
    </NodeBox>
  )
}

function N8nIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#F65B2B">
      <polygon
        points={`${cx + 4},${cy - 14} ${cx - 4},${cy - 2} ${cx + 2},${cy - 2} ${cx - 4},${cy + 14} ${cx + 4},${cy + 2} ${cx - 2},${cy + 2}`}
        fill="white"
      />
    </NodeBox>
  )
}

function BrightLocalIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#00A86B">
      <circle cx={cx} cy={cy - 4} r={7} fill="white" opacity={0.9} />
      <line x1={cx} y1={cy + 3} x2={cx} y2={cy + 12} stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1={cx - 5} y1={cy + 9} x2={cx + 5} y2={cy + 9} stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </NodeBox>
  )
}

function GSCIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#4285F4">
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="10" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">GSC</text>
    </NodeBox>
  )
}

function ReportIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#A78BFA">
      <rect x={cx - 10} y={cy - 12} width={20} height={24} rx={3} fill="white" opacity={0.9} />
      <line x1={cx - 6} y1={cy - 6} x2={cx + 6} y2={cy - 6} stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 6} y1={cy - 1} x2={cx + 6} y2={cy - 1} stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 6} y1={cy + 4} x2={cx + 2} y2={cy + 4} stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
    </NodeBox>
  )
}

function ArrowDefs() {
  return (
    <defs>
      <marker id="arrow-seo" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
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
  const ma = 'url(#arrow-seo)'

  // 6 nodes in a horizontal pipeline
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

      {/* Connectors */}
      <path d={`M${nodes[0].cx + 28},${nodes[0].cy} H${nodes[1].cx - 28}`} stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      <path d={`M${nodes[1].cx + 28},${nodes[1].cy} H${nodes[2].cx - 28}`} stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      <path d={`M${nodes[2].cx + 28},${nodes[2].cy} H${nodes[3].cx - 28}`} stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      <path d={`M${nodes[3].cx + 28},${nodes[3].cy} H${nodes[4].cx - 28}`} stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      <path d={`M${nodes[4].cx + 28},${nodes[4].cy} H${nodes[5].cx - 28}`} stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* Nodes */}
      <IntakeFormIcon cx={nodes[0].cx} cy={nodes[0].cy} />
      <NodeLabel cx={nodes[0].cx} cy={nodes[0].cy} text="Intake Form" sub="Client data" />

      <AirtableIcon cx={nodes[1].cx} cy={nodes[1].cy} />
      <NodeLabel cx={nodes[1].cx} cy={nodes[1].cy} text="Airtable" sub="Database" />

      <N8nIcon cx={nodes[2].cx} cy={nodes[2].cy} />
      <NodeLabel cx={nodes[2].cx} cy={nodes[2].cy} text="n8n" sub="Orchestrator" />

      <BrightLocalIcon cx={nodes[3].cx} cy={nodes[3].cy} />
      <NodeLabel cx={nodes[3].cx} cy={nodes[3].cy} text="BrightLocal" sub="Citations" />

      <GSCIcon cx={nodes[4].cx} cy={nodes[4].cy} />
      <NodeLabel cx={nodes[4].cx} cy={nodes[4].cy} text="GSC Report" sub="Rank data" />

      <ReportIcon cx={nodes[5].cx} cy={nodes[5].cy} />
      <NodeLabel cx={nodes[5].cx} cy={nodes[5].cy} text="Client Report" sub="Auto-sent" />

      {/* Step badges */}
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
    tool: 'Intake Form + Airtable',
    toolColor: '#FF6B35',
    title: 'Client onboarding form collected, normalized into Airtable database',
    detail: 'New client data arrives via a structured onboarding form — business name, NAP (Name, Address, Phone), website URL, target keywords, and service categories. n8n captures the submission and writes every field into a normalized Airtable base. The Airtable record becomes the single source of truth for all downstream syndication and reporting. Duplicate detection runs on business name and phone to prevent double-submission across campaigns.',
    tags: ['Intake Form', 'Airtable', 'n8n Webhook', 'NAP Normalization', 'Duplicate Detection'],
  },
  {
    num: 2,
    tool: 'BrightLocal',
    toolColor: '#00A86B',
    title: 'n8n pushes client data to BrightLocal for submission across 50+ citation sources',
    detail: 'n8n reads the Airtable record and calls the BrightLocal API to initiate directory submission. BrightLocal distributes the client\'s NAP data to 50+ major citation sources: Google Business Profile, Bing Places, Apple Maps, Yelp, Foursquare, Yellow Pages, and dozens of industry-specific directories. Submission statuses are written back to Airtable in real time — accepted, pending, or rejected — so the team has full visibility without manual checking.',
    tags: ['BrightLocal API', '50+ Directories', 'Google Business Profile', 'Bing Places', 'Apple Maps', 'Citation Management'],
  },
  {
    num: 3,
    tool: 'n8n Syndication',
    toolColor: '#F65B2B',
    title: 'Content syndication workflow distributes NAP-consistent content across web properties',
    detail: 'A parallel n8n workflow handles content syndication beyond directories. GPT-4o generates NAP-consistent business descriptions, taglines, and service summaries in multiple formats (short, medium, long). These are pushed to press release distribution services, local business blogs, and any web properties the client owns. All published content references the same canonical NAP data from Airtable, preventing inconsistency that would undermine citation signals.',
    tags: ['GPT-4o', 'Content Syndication', 'NAP Consistency', 'Press Release', 'Local SEO'],
  },
  {
    num: 4,
    tool: 'Google Search Console API',
    toolColor: '#4285F4',
    title: 'GSC API pulls indexing data, backlink counts, and rank position changes weekly',
    detail: 'Every week, n8n calls the Google Search Console API for each client. It pulls: total indexed pages, click and impression data by query, average position changes week-over-week, and any coverage errors or indexing issues. Backlink data is cross-referenced from BrightLocal to confirm citation links are being indexed. All data is written to the client\'s Airtable row with historical tracking — so trend lines are visible from day one.',
    tags: ['GSC API', 'Index Coverage', 'Query Performance', 'Rank Tracking', 'Week-over-Week Delta', 'Airtable Logging'],
  },
  {
    num: 5,
    tool: 'GPT-4o',
    toolColor: '#10A37F',
    title: 'GPT-4o drafts personalized rank improvement summaries per client',
    detail: 'GPT-4o receives the GSC data pull for each client and drafts a personalized narrative summary. The summary explains rank changes in plain English, identifies which keywords improved or dropped, flags any indexing issues discovered, and recommends 2–3 specific next actions based on the data. Tone and terminology are calibrated to the client\'s sophistication level — concise and actionable for SMB clients, detailed and data-dense for agency partners reviewing white-label reports.',
    tags: ['GPT-4o', 'Narrative Summaries', 'Keyword Analysis', 'Indexing Issue Detection', 'Actionable Recommendations'],
  },
  {
    num: 6,
    tool: 'Automated Report',
    toolColor: '#A78BFA',
    title: 'Auto-formatted report emailed to client with GSC data embedded — zero human time',
    detail: 'n8n assembles the final report: GSC data tables, rank change charts, citation submission status, and the GPT-4o narrative summary. The report is auto-formatted using a branded HTML email template and delivered directly to the client\'s inbox every Monday morning. No human touches the report — it builds and sends automatically. A Slack notification posts to the account manager channel confirming delivery and flagging any clients with significant rank drops that may need a call.',
    tags: ['Auto-formatted Report', 'Gmail Delivery', 'Branded Template', 'Slack Notification', 'Weekly Cadence', 'Zero Human Time'],
  },
]

// ── Tech stack ────────────────────────────────────────────────────────────────

const techStack = [
  { name: 'Airtable', role: 'Client database', color: '#FFB347', desc: 'Single source of truth for all client NAP data, campaign status, citation submission states, and GSC performance history.' },
  { name: 'n8n', role: 'Orchestration', color: '#F65B2B', desc: 'Coordinates all workflow steps: intake → Airtable write → BrightLocal submission → syndication → GSC pull → report assembly and delivery.' },
  { name: 'BrightLocal', role: 'Citation syndication', color: '#00A86B', desc: 'Distributes NAP data to 50+ citation sources. API returns submission statuses in real time, written back to Airtable for full visibility.' },
  { name: 'Google Search Console', role: 'Rank data', color: '#4285F4', desc: 'Weekly API pulls: indexed pages, query performance, rank positions, impressions, clicks, and coverage errors per client.' },
  { name: 'GPT-4o', role: 'Report writer', color: '#10A37F', desc: 'Generates personalized rank improvement summaries per client using GSC data. Calibrates tone and detail level to client sophistication.' },
  { name: 'Slack', role: 'Team alerts', color: '#4A154B', desc: 'Notifies account managers after each report delivery. Flags clients with significant rank drops or indexing issues that need attention.' },
]

// ── Outcomes ──────────────────────────────────────────────────────────────────

const outcomes = [
  { stat: '30+', label: 'clients managed', sub: 'by 2 staff' },
  { stat: '50+', label: 'citation sources', sub: 'auto-submitted' },
  { stat: '0', label: 'manual hours', sub: 'per weekly report' },
  { stat: '100%', label: 'NAP consistency', sub: 'across all directories' },
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

export default function SEOFoundationPage() {
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
          <span className="text-white/55">Automated SEO Foundation & Backlink Syndication</span>
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
              Automated SEO Foundation<br />
              <span className="bg-gradient-to-r from-[#A78BFA] to-[#818CF8] bg-clip-text text-transparent">&amp; Backlink Syndication</span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-base leading-relaxed text-white/55 max-w-lg">
              Foundational SEO at scale: client data flows into Airtable, n8n syndicates citations across 50+ directories, GSC pulls weekly rank data, and personalized reports land in client inboxes automatically — zero human time per report.
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
              {['Airtable', 'n8n', 'BrightLocal', 'Google Search Console', 'GPT-4o', 'Slack'].map(t => (
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
                Build this for my agency <ArrowRight size={15} />
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
              Typical build: <span className="text-white/55 font-medium">3–4 week sprint · Fixed price · Zero delivery risk</span>
            </motion.p>
          </div>

          {/* Right: diagram */}
          <motion.div {...fade(0.1)} className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 shadow-2xl">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full animate-pulse" style={{ background: accentColor }} />
              <span className="text-[11px] font-medium text-white/40 font-display tracking-wide uppercase">To be built — runs on every client onboarding</span>
            </div>
            <HeroDiagram />
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-4">
              {[
                { label: 'Directories', value: '50+ citations' },
                { label: 'Reporting', value: 'Weekly auto' },
                { label: 'Capacity', value: '30 clients / 2 staff' },
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
          <h2 className="mt-2 font-display text-3xl font-bold text-white">Why foundational SEO is a margin killer</h2>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Search, title: 'Citation building is low-margin and brutally labor-intensive', desc: 'Manually submitting to 50+ directories per client takes hours. At 10 clients, that\'s a full-time employee\'s week — for work that should take minutes. A 2-person team can manage 30+ clients with the same effort previously needed for 6.' },
            { icon: Search, title: 'Inconsistent NAP data across directories undermines all citation signals', desc: 'One mismatched phone number across 15 directories sends conflicting signals to Google. Manual submissions without a single source of truth make NAP consistency nearly impossible to maintain as client counts grow.' },
            { icon: Search, title: 'Weekly rank reporting takes 2–3 hours per client when done manually', desc: 'Pulling GSC data, building slides, writing commentary, and sending reports manually consumes the majority of an SEO account manager\'s week. Automated reporting scales the team\'s effective client capacity by 5x.' },
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
              <h2 className="mt-2 font-display text-3xl font-bold text-white">A 3–4 week sprint. Production ready.</h2>
              <p className="mt-4 text-white/50 text-sm leading-relaxed">
                Kovil AI engineers scope, build, test and deploy this workflow end-to-end. You do not touch n8n until it is live and processing client onboardings automatically.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {[
                  'Client intake form connected to Airtable via n8n webhook',
                  'BrightLocal API integration for 50+ directory submissions',
                  'NAP consistency validation layer before syndication',
                  'Content syndication workflow with GPT-4o description generation',
                  'Google Search Console API integration with weekly data pulls',
                  'Automated report assembly and branded email delivery',
                  'Slack alerts for rank drops and account manager notifications',
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
                    3–4 weeks
                  </span>
                </div>
                {[
                  { week: 'Week 1', title: 'Intake + Airtable', items: ['Client form → Airtable schema + n8n webhook integration'] },
                  { week: 'Week 2', title: 'Citations + GSC', items: ['BrightLocal API submission + Google Search Console data pull'] },
                  { week: 'Week 3–4', title: 'Reports + deploy', items: ['GPT-4o report writer + auto-email delivery + full deployment'] },
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
          <Search size={24} className="relative mx-auto mb-4" style={{ color: accentColor }} />
          <h2 className="relative font-display text-[clamp(22px,3.5vw,36px)] font-bold text-white">
            Scale your SEO client base without scaling headcount.
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Book a 30-minute discovery call. Kovil AI engineers will scope the Airtable schema, BrightLocal integration, and GSC reporting cadence for your specific client roster — fixed price, zero delivery risk.
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
            Typical sprint: 3–4 weeks · Fixed-price · Fully managed delivery · Post-launch support included
          </p>
        </motion.div>
      </section>

    </div>
  )
}
