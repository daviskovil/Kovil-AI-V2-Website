'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Clock, CheckCircle, ChevronRight, BarChart2 } from 'lucide-react'
import { openCalendly } from '../../../lib/calendly'

const SF_BLUE = '#00A1E0'

// ── SVG Node helpers ──────────────────────────────────────────────────────────

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

function ArrowDefs() {
  return (
    <defs>
      <marker id="arrow-pipeline" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <polygon points="0,0 0,6 8,3" fill="#D0CBC2" />
      </marker>
    </defs>
  )
}

// Scheduled trigger node (amber)
function ScheduleIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#D97706">
      <circle cx={cx} cy={cy} r="13" stroke="white" strokeWidth="1.5" fill="none" />
      <line x1={cx} y1={cy - 8} x2={cx} y2={cy} stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx} y1={cy} x2={cx + 6} y2={cy + 4} stroke="white" strokeWidth="2" strokeLinecap="round" />
    </NodeBox>
  )
}

// Opp scan node (SF_BLUE)
function OppIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg={SF_BLUE}>
      <text x={cx} y={cy - 2} textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">OPP</text>
      <text x={cx} y={cy + 9} textAnchor="middle" fill="white" fontSize="8" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">Scan</text>
    </NodeBox>
  )
}

// Stall detect node (orange)
function StallIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#FF4F00">
      <path d={`M${cx},${cy - 13} L${cx + 11},${cy + 7} L${cx - 11},${cy + 7} Z`}
        fill="none" stroke="white" strokeWidth="1.5" />
      <line x1={cx} y1={cy - 6} x2={cx} y2={cy + 1} stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx={cx} cy={cy + 4} r="1.5" fill="white" />
    </NodeBox>
  )
}

// Einstein node (green)
function EinsteinOppIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#10A37F">
      <circle cx={cx} cy={cy} r="13" stroke="white" strokeWidth="1.5" fill="none" />
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="13" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">E</text>
    </NodeBox>
  )
}

// Prompt Builder node (purple)
function PromptBuilderIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#8B5CF6">
      <line x1={cx - 10} y1={cy - 8} x2={cx + 10} y2={cy - 8} stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 10} y1={cy - 2} x2={cx + 10} y2={cy - 2} stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 10} y1={cy + 4} x2={cx + 4} y2={cy + 4} stroke="white" strokeWidth="2" strokeLinecap="round" />
    </NodeBox>
  )
}

// Slack node (Slack purple)
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

// Stage update node (SF_BLUE)
function StageIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg={SF_BLUE}>
      <path d={`M${cx - 10},${cy - 5} L${cx - 4},${cy - 5} L${cx + 2},${cy} L${cx - 4},${cy + 5} L${cx - 10},${cy + 5} L${cx - 4},${cy} Z`}
        fill="white" opacity={0.9} />
      <path d={`M${cx - 2},${cy - 5} L${cx + 4},${cy - 5} L${cx + 10},${cy} L${cx + 4},${cy + 5} L${cx - 2},${cy + 5} L${cx + 4},${cy} Z`}
        fill="white" opacity={0.6} />
    </NodeBox>
  )
}

// Healthy log node (dark)
function HealthyIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#0F172A" border="#334155">
      <path d={`M${cx - 6},${cy} L${cx - 1},${cy + 5} L${cx + 7},${cy - 6}`}
        fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </NodeBox>
  )
}

function HeroDiagram() {
  const stroke = '#D0CBC2'
  const sw = 1.8
  const ma = 'url(#arrow-pipeline)'

  return (
    <svg viewBox="0 0 820 220" className="w-full" style={{ display: 'block' }}>
      <ArrowDefs />

      {/* Schedule → Opp Scan */}
      <path d="M84,90 H143" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Opp Scan → Stall Detect */}
      <path d="M227,90 H286" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Stall Detect → Einstein */}
      <path d="M370,90 H429" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Einstein → Draft (at-risk path) */}
      <path d="M513,90 H572" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Draft → Alert */}
      <path d="M656,90 H715" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* Einstein → Healthy log (dashed down) */}
      <path d="M456,118 L456,165 H715" stroke={stroke} strokeWidth={sw} fill="none" strokeDasharray="5,3" markerEnd={ma} />

      {/* Alert → Stage Update (up path) */}
      <path d="M743,62 L743,30 H780 V60" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* Nodes */}
      <ScheduleIcon cx={56} cy={90} />
      <NodeLabel cx={56} cy={90} text="Scheduled" sub="Trigger" />

      <OppIcon cx={171} cy={90} />
      <NodeLabel cx={171} cy={90} text="Opp Scan" sub="Full pipeline" />

      <StallIcon cx={328} cy={90} />
      <NodeLabel cx={328} cy={90} text="Stall" sub="Detect" />

      <EinsteinOppIcon cx={456} cy={90} />
      <NodeLabel cx={456} cy={90} text="Einstein" sub="Risk Score" />

      <PromptBuilderIcon cx={600} cy={90} />
      <NodeLabel cx={600} cy={90} text="Draft" sub="Follow-up" />

      <SlackIcon cx={743} cy={90} />
      <NodeLabel cx={743} cy={90} text="Rep Alert" sub="Chatter+Slack" />

      <StageIcon cx={780} cy={30} />
      <NodeLabel cx={780} cy={30} text="Stage" sub="Update" />

      <HealthyIcon cx={743} cy={165} />
      <NodeLabel cx={743} cy={165} text="Healthy" sub="Log only" />

      {/* Step badges */}
      {([
        [56, 90, '1'], [171, 90, '2'], [328, 90, '3'],
        [456, 90, '4'], [600, 90, '5'], [743, 90, '6'],
      ] as [number, number, string][]).map(([x, y, n]) => (
        <g key={n}>
          <circle cx={x + 20} cy={y - 20} r={9} fill={SF_BLUE} />
          <text x={x + 20} y={y - 16} textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="Inter, sans-serif">{n}</text>
        </g>
      ))}

      {/* Labels */}
      <text x={595} y={183} textAnchor="middle" fontSize="8" fill="#78716C" fontFamily="Inter, sans-serif">healthy ✓ log only</text>
      <text x={780} y={55} textAnchor="middle" fontSize="8" fill="#78716C" fontFamily="Inter, sans-serif">auto-update</text>
    </svg>
  )
}

// ── Step data ─────────────────────────────────────────────────────────────────

const steps = [
  {
    num: 1,
    tool: 'Scheduled Trigger',
    toolColor: '#D97706',
    title: 'Agent runs on schedule — every opportunity scanned, every day',
    detail: "Agentforce topic fires on a scheduled basis (configurable: hourly, daily, or on deal stage change). Every open opportunity in the pipeline is fetched with full context: last activity date, stage, close date, engagement signals, contact history, and Einstein Opportunity Score. No opportunity is missed — the agent scans the entire pipeline, not just flagged deals. The baseline run typically processes hundreds of open opportunities in minutes.",
    tags: ['Scheduled Trigger', 'Opportunity Object', 'Full Pipeline Scan', 'Real-time Context Fetch'],
  },
  {
    num: 2,
    tool: 'Stall Detection',
    toolColor: '#FF4F00',
    title: 'Stall signals identified using configurable inactivity rules',
    detail: "Atlas Reasoning Engine evaluates each opportunity against stall criteria configured during implementation: days since last email, days since last meeting, days since last Chatter post from the prospect, close date vs current date drift, and stage age (how long the opp has been in the current stage vs your pipeline benchmark). An opportunity flagged as stalled is not simply 'no activity in 14 days' — the agent cross-checks engagement signals, including email opens and website visits from Data Cloud, to distinguish true stalls from quiet prospects who are still engaged.",
    tags: ['Stall Criteria', 'Stage Age', 'Activity Signals', 'Data Cloud Signals', 'Engagement Cross-check'],
  },
  {
    num: 3,
    tool: 'Einstein Opportunity Scoring',
    toolColor: SF_BLUE,
    title: 'Einstein scores deal health using predictive AI on CRM history',
    detail: 'For each stalled or at-risk opportunity, Einstein Opportunity Scoring runs a health score: probability of close, predicted close date, and risk tier (low/medium/high). The score incorporates: historical win/loss patterns for similar deals, rep engagement patterns, deal size vs average, contact engagement depth (number of contacts reached vs typical multi-thread requirement), and competitor mention signals from notes and emails. High-risk deals are escalated; medium-risk deals trigger rep alerts; low-risk stalls trigger automated nurture.',
    tags: ['Einstein Opportunity Scoring', 'Win/Loss Patterns', 'Multi-thread Analysis', 'Risk Tiering', 'Predictive Close Date'],
  },
  {
    num: 4,
    tool: 'Prompt Builder Follow-up Drafts',
    toolColor: '#10A37F',
    title: 'Prompt Builder drafts a personalised follow-up for each stalled deal',
    detail: 'For every at-risk or stalled opportunity, Prompt Builder generates a suggested follow-up email for the assigned rep — grounded in the specific opportunity context: product discussed, last meeting outcome, any open questions from the last interaction, and the prospect\'s industry. The draft is not a template; it is generated fresh from live CRM data for each deal. The rep receives the draft in their Salesforce Tasks, reviews it with one click, and sends. This eliminates the 20-minute per-deal cognitive overhead of pipeline reviews.',
    tags: ['Prompt Builder', 'Live CRM Grounding', 'Rep Suggested Actions', 'One-click Review', 'Task Creation'],
  },
  {
    num: 5,
    tool: 'Rep Alert via Chatter + Slack',
    toolColor: '#4A154B',
    title: 'Rep and manager alerted via Chatter and Slack with full deal context',
    detail: 'High-risk opportunities trigger immediate alerts: a Chatter @mention on the Opportunity record for the assigned rep, a Slack DM to the rep with a summary of the stall reason and the suggested action, and a weekly at-risk digest to the sales manager with the full portfolio view. The Slack message includes: deal name, deal size, days stalled, Einstein risk score, last activity, and a one-click link to the opportunity in Salesforce. Managers see the same digest aggregated across their team\'s pipeline — without running a single manual report.',
    tags: ['Chatter Integration', 'Slack Webhook', 'Manager Digest', 'Risk Summary', 'One-click Salesforce Link'],
  },
  {
    num: 6,
    tool: 'Automated Stage Updates',
    toolColor: SF_BLUE,
    title: 'Stage updates and activity logs written back to Salesforce automatically',
    detail: "Where evidence supports a stage change — for example, a prospect who replied to outreach and confirmed a next meeting — the agent updates the Opportunity stage without rep intervention. All automated actions are logged as Activities on the Opportunity record with a clear 'Agentforce: automated' marker. This keeps the pipeline accurate without relying on reps to update stages manually. For deals that move backward (stall in a late stage), the agent flags for manager review before writing the stage change — preventing accidental pipeline compression.",
    tags: ['Automated Stage Updates', 'Activity Logging', 'Pipeline Accuracy', 'Manager Review Flags', 'Agentforce Activity Marker'],
  },
]

// ── Tech stack ────────────────────────────────────────────────────────────────

const techStack = [
  { name: 'Atlas Reasoning Engine', role: 'Stall + risk reasoning', color: SF_BLUE, desc: 'Evaluates each opportunity against configurable stall criteria and cross-checks engagement signals to distinguish true stalls from quiet but engaged prospects.' },
  { name: 'Einstein Opportunity Scoring', role: 'Deal health prediction', color: '#10A37F', desc: 'Scores deal health using historical win/loss patterns, engagement depth, and competitor signals — surfacing risk tier and predicted close date for every open opportunity.' },
  { name: 'Prompt Builder', role: 'Follow-up drafting', color: '#8B5CF6', desc: 'Generates a personalised follow-up email for each stalled deal — grounded in live opportunity context — ready for the rep to review and send with one click.' },
  { name: 'Salesforce Chatter', role: 'In-platform alerts', color: '#0F172A', desc: 'Delivers @mention alerts on the Opportunity record so reps get notified in-context, within Salesforce, without switching to a separate tool.' },
  { name: 'Slack', role: 'External rep alerts', color: '#4A154B', desc: 'Sends DMs and weekly digest messages to reps and managers — including deal name, size, days stalled, risk score, and direct links to Salesforce.' },
  { name: 'Data Cloud', role: 'Engagement signal enrichment', color: '#6366F1', desc: 'Unifies external engagement signals (email opens, website visits) with CRM activity data so the agent can distinguish true stalls from low-touch active prospects.' },
  { name: 'Salesforce Flow', role: 'Stage update automation', color: '#D97706', desc: 'Executes the automated stage update logic with manager review gates — ensuring pipeline accuracy without relying on reps to manually update records.' },
]

// ── Outcomes ──────────────────────────────────────────────────────────────────

const outcomes = [
  { stat: '100%', label: 'pipeline visibility', sub: 'every open opp' },
  { stat: '< 24hr', label: 'stall detection', sub: 'vs end-of-week reviews' },
  { stat: '40%', label: 'forecast accuracy', sub: 'improvement' },
  { stat: '2×', label: 'deal velocity', sub: 'with alerts' },
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

export default function PipelineHealthMonitorPage() {
  const accentColor = SF_BLUE

  return (
    <div className="min-h-screen bg-[#080808] text-white">

      {/* ── BREADCRUMB ──────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-0">
        <nav className="flex items-center gap-2 text-xs text-white/35">
          <Link href="/agentforce" className="flex items-center gap-1 hover:text-white/70 transition-colors">
            <ArrowLeft size={12} /> Agentforce
          </Link>
          <ChevronRight size={11} className="text-white/20" />
          <span className="text-white/35">Sales Cloud</span>
          <ChevronRight size={11} className="text-white/20" />
          <span className="text-white/55">Pipeline Health Monitor</span>
        </nav>
      </div>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-4">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">

          {/* Left: text */}
          <div>
            <motion.div {...fade(0)}>
              <span className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide font-display"
                style={{ color: accentColor, background: `${accentColor}18`, border: `1px solid ${accentColor}28` }}>
                Sales Cloud
              </span>
            </motion.div>

            <motion.h1 {...fade(0.06)}
              className="mt-5 font-display text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.06] tracking-tight text-white">
              Pipeline Health Monitor —<br />
              <span className="bg-gradient-to-r from-[#00A1E0] to-[#0077B6] bg-clip-text text-transparent">AI-Powered Deal Risk &amp; Stall Detection</span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-base leading-relaxed text-white/55 max-w-lg">
              Monitors every open opportunity in your Sales Cloud pipeline 24/7. Detects stall signals before deals slip, auto-drafts personalised follow-ups for reps to send, updates stages based on engagement evidence, and alerts on accounts at risk — so your pipeline forecast is always honest.
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
              {['Atlas Reasoning Engine', 'Einstein Opportunity Scoring', 'Prompt Builder', 'Salesforce Flow', 'Chatter', 'Slack Integration', 'Data Cloud'].map(t => (
                <span key={t} className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/50">
                  {t}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fade(0.22)} className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={openCalendly}
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 font-display cursor-pointer"
                style={{ background: accentColor, boxShadow: `0 4px 24px ${accentColor}4D` }}
              >
                Book a discovery call <ArrowRight size={15} />
              </button>
              <Link
                href="/agentforce"
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.10] px-6 py-3 text-sm text-white/65 hover:text-white hover:border-white/25 transition-colors"
              >
                ← Browse all agents
              </Link>
            </motion.div>

            <motion.p {...fade(0.26)} className="mt-5 flex items-center gap-2 text-xs text-white/35">
              <Clock size={12} style={{ color: `${accentColor}B3` }} />
              Typical build: <span className="text-white/55 font-medium">3-week sprint · Fixed price · Production-grade</span>
            </motion.p>
          </div>

          {/* Right: diagram */}
          <motion.div {...fade(0.1)} className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 shadow-2xl">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full animate-pulse" style={{ background: accentColor }} />
              <span className="text-[11px] font-medium text-white/40 font-display tracking-wide uppercase">Agentforce reasoning flow — runs on every open opportunity</span>
            </div>
            <HeroDiagram />
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-4">
              {[
                { label: 'Coverage', value: '100% pipeline' },
                { label: 'Detection', value: '< 24 hrs' },
                { label: 'Alerts', value: 'Chatter + Slack' },
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

      {/* ── STEP BY STEP ────────────────────────────────────────────────── */}
      <section className="bg-[#0D0D0D] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fade(0)} className="mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] font-display" style={{ color: `${accentColor}B3` }}>How it works</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-white">Every step, explained</h2>
            <p className="mt-2 text-white/45 text-sm max-w-xl">
              This is the actual Agentforce configuration Kovil AI builds and deploys — not a diagram. Here is what runs inside every node.
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
          <h2 className="mt-2 font-display text-3xl font-bold text-white">Every tool in the agent</h2>
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
              <h2 className="mt-2 font-display text-3xl font-bold text-white">A 3-week sprint. Production ready.</h2>
              <p className="mt-4 text-white/50 text-sm leading-relaxed">
                Kovil AI scopes, builds, tests and deploys this Agentforce configuration end-to-end. You do not touch Agent Builder until it is live and monitoring your pipeline.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {[
                  'Pipeline Health Monitor agent with configurable stall detection criteria',
                  'Einstein Opportunity Scoring integration with custom risk tier thresholds',
                  'Prompt Builder follow-up draft templates grounded in live opportunity data',
                  'Chatter and Slack alert configuration for reps and managers',
                  'Automated stage update logic with manager review flags',
                  'Weekly pipeline digest automation for sales leadership',
                  'Data Cloud integration for external engagement signal enrichment',
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
                    3 weeks
                  </span>
                </div>
                {[
                  { week: 'Week 1', title: 'Agent + scanning', items: ['Opportunity trigger, stall criteria config, Einstein scoring'] },
                  { week: 'Week 2', title: 'Alerts + drafts', items: ['Prompt Builder templates, Chatter/Slack alerts, rep workflow'] },
                  { week: 'Week 3', title: 'Stage updates + deploy', items: ['Automated stage logic, manager digest, production deployment'] },
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
              {
                q: "What counts as a 'stall' signal?",
                a: "Stall criteria are configured per client during Week 1. Typical criteria: no email activity for X days (configurable per deal stage), no meeting logged in Y days, close date passed without update, stage age exceeding the pipeline benchmark for that stage, and contact engagement depth below multi-thread threshold. The agent cross-checks against Data Cloud signals — a prospect who is still opening emails is not treated the same as one who has gone dark. You control every threshold.",
              },
              {
                q: 'Can it update Salesforce stages automatically?',
                a: "Yes — for forward movement (stage advancement where evidence exists). We configure the conditions carefully with you during implementation. Backward stage movement (where a deal stalls in a late stage) requires manager review before the change is written. All automated updates are tagged with an 'Agentforce: automated' marker on the Activity record, so reps and managers always know what the agent did vs what a human did.",
              },
              {
                q: 'How does the Slack integration work?',
                a: 'We configure a Salesforce Flow that calls a Slack webhook when the agent flags a high-risk deal. The Slack message includes: deal name, size, rep name, days stalled, Einstein risk score, and a direct link to the Salesforce opportunity. We set up a dedicated #pipeline-alerts channel or use your existing sales Slack channels — your choice. Weekly digests are sent as a summary message on Monday morning.',
              },
              {
                q: 'Will this replace our weekly pipeline review meetings?',
                a: 'It replaces the part of pipeline reviews where everyone is manually identifying what moved, what stalled, and what needs action. That work is done automatically before the meeting. Pipeline reviews become about strategy and deal coaching — not data archaeology. Most clients find their pipeline review time drops from 90 minutes to 30 minutes within the first month.',
              },
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
          <BarChart2 size={24} className="relative mx-auto mb-4" style={{ color: accentColor }} />
          <h2 className="relative font-display text-[clamp(22px,3.5vw,36px)] font-bold text-white">
            Stop deals from slipping silently.
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Book a 30-minute discovery call. We&apos;ll review your current pipeline review process, identify the stall signals costing you deals, and scope a 3-week fixed-price implementation.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={openCalendly}
              className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold text-white transition-all hover:opacity-95 font-display cursor-pointer"
              style={{ background: accentColor, boxShadow: `0 8px 32px ${accentColor}4D` }}
            >
              Book a discovery call <ArrowRight size={16} />
            </button>
            <Link
              href="/agentforce"
              className="inline-flex items-center gap-2 rounded-xl border border-white/[0.10] px-8 py-3.5 text-sm text-white/60 hover:text-white hover:border-white/25 transition-colors"
            >
              Browse other agents
            </Link>
          </div>
          <p className="relative mt-6 text-[11px] text-white/25">
            3-week sprint · Fixed-price · Production-grade · Post-launch support included
          </p>
        </motion.div>
      </section>

    </div>
  )
}
