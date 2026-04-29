'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Clock, CheckCircle, ChevronRight, Zap } from 'lucide-react'
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
      <marker id="arrow-campaign" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <polygon points="0,0 0,6 8,3" fill="#D0CBC2" />
      </marker>
    </defs>
  )
}

function HeroDiagram() {
  const stroke = '#D0CBC2'
  const sw = 1.8
  const ma = 'url(#arrow-campaign)'

  return (
    <svg viewBox="0 0 820 230" className="w-full" style={{ display: 'block' }}>
      <ArrowDefs />

      {/* Campaign Data → Einstein Score */}
      <path d="M84,110 H143" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Einstein Score → Atlas Analyse */}
      <path d="M227,110 H270" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Atlas Analyse → Branch */}
      <path d="M354,110 H413" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Branch → Optimise (up) */}
      <path d="M469,82 L469,42 H596 V64" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Branch → Pause/Alert (down, dashed) */}
      <path d="M469,138 L469,180 H596 V190" stroke={stroke} strokeWidth={sw} fill="none" strokeDasharray="5,3" markerEnd={ma} />
      {/* Pause → Slack */}
      <path d="M652,193 H700" stroke={stroke} strokeWidth={sw} fill="none" strokeDasharray="5,3" markerEnd={ma} />

      {/* Nodes */}
      <NodeBox cx={56} cy={110} bg="#FF4F00">
        <text x={56} y={106} textAnchor="middle" fill="white" fontSize="10" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">CAMP</text>
        <text x={56} y={119} textAnchor="middle" fill="white" fontSize="8" fontWeight="600" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">Data</text>
      </NodeBox>
      <NodeLabel cx={56} cy={110} text="Campaign" sub="signals" />

      <NodeBox cx={171} cy={110} bg={SF_BLUE}>
        <circle cx={171} cy={110} r="13" stroke="white" strokeWidth="1.5" fill="none" />
        <text x={171} y={115} textAnchor="middle" fill="white" fontSize="13" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">E</text>
      </NodeBox>
      <NodeLabel cx={171} cy={110} text="Einstein" sub="Score" />

      <NodeBox cx={312} cy={110} bg="#0F172A" border="#334155">
        <text x={312} y={115} textAnchor="middle" fill="white" fontSize="13" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">A</text>
      </NodeBox>
      <NodeLabel cx={312} cy={110} text="Atlas" sub="Analyse" />

      {/* Branch diamond */}
      <g>
        <polygon
          points={`${441},${82} ${469},${110} ${441},${138} ${413},${110}`}
          fill="#D97706"
        />
        <text x={441} y={114} textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif">?</text>
      </g>
      <NodeLabel cx={441} cy={110} text="Perform?" sub="branch" />

      {/* Optimise node */}
      <NodeBox cx={624} cy={42} bg="#10A37F">
        <text x={624} y={47} textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">OPT</text>
      </NodeBox>
      <NodeLabel cx={624} cy={42} text="Optimise" sub="targeting" />

      {/* Pause node */}
      <NodeBox cx={624} cy={193} bg="#8B5CF6">
        <text x={624} y={197} textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif">PAUSE</text>
      </NodeBox>
      <NodeLabel cx={624} cy={193} text="Pause" sub="journey" />

      {/* Slack node */}
      <NodeBox cx={738} cy={193} bg="#4A154B">
        <text x={738} y={197} textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif">Slack</text>
      </NodeBox>
      <NodeLabel cx={738} cy={193} text="Alert" sub="team" />

      {/* Step badges */}
      {([
        [56, 110, '1'], [171, 110, '2'], [312, 110, '3'], [441, 110, '4'],
      ] as [number, number, string][]).map(([x, y, n]) => (
        <g key={n}>
          <circle cx={x + 20} cy={y - 20} r={9} fill={SF_BLUE} />
          <text x={x + 20} y={y - 16} textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="Inter, sans-serif">{n}</text>
        </g>
      ))}

      {/* Branch labels */}
      <text x={560} y={30} textAnchor="middle" fontSize="8" fill="#78716C" fontFamily="Inter, sans-serif">performing ✓</text>
      <text x={560} y={200} textAnchor="middle" fontSize="8" fill="#78716C" fontFamily="Inter, sans-serif">underperforming →</text>
    </svg>
  )
}

// ── Step data ─────────────────────────────────────────────────────────────────

const steps = [
  {
    num: 1,
    tool: 'Performance Signal Ingestion',
    toolColor: '#FF4F00',
    title: 'Every active campaign monitored continuously for performance signals',
    detail: 'The Campaign Execution Agent connects to Marketing Cloud\'s engagement data stream via Data Cloud, ingesting real-time performance signals across every active journey: open rates, click-through rates, unsubscribe rates, conversion events, and send-time engagement patterns. Signals are evaluated against your configured benchmark thresholds — not industry averages, but your own historical campaign performance as the baseline. The agent monitors all campaigns simultaneously, not just flagged ones, so underperformance is caught at signal detection rather than at weekly review.',
    tags: ['Marketing Cloud', 'Data Cloud', 'Engagement Signals', 'Real-time Monitoring', 'Benchmark Thresholds', 'Journey Analytics'],
  },
  {
    num: 2,
    tool: 'Einstein Engagement Scoring',
    toolColor: SF_BLUE,
    title: 'Einstein scores segment engagement and predicts journey fatigue',
    detail: 'Einstein Engagement Scoring analyses recipient-level engagement patterns for each campaign segment: who is opening, who is clicking, who has gone cold, and who is showing unsubscribe intent before they actually unsubscribe. The agent uses these scores to identify segments that are responding well (candidates for frequency increase) and segments showing fatigue signals (candidates for suppression or re-engagement flow diversion). Journey fatigue prediction — identifying when a contact is approaching send-frequency tolerance — prevents deliverability degradation before it starts.',
    tags: ['Einstein Engagement Scoring', 'Segment Analysis', 'Journey Fatigue Prediction', 'Unsubscribe Intent', 'Frequency Optimisation', 'Deliverability Protection'],
  },
  {
    num: 3,
    tool: 'Atlas Reasoning',
    toolColor: '#0F172A',
    title: 'Atlas Reasoning Engine diagnoses why a campaign is underperforming',
    detail: 'For campaigns flagged as underperforming, the Atlas Reasoning Engine runs a diagnostic analysis: is the underperformance in open rate (subject line or send time issue), click rate (content or CTA issue), conversion rate (landing page or offer issue), or unsubscribe rate (audience fatigue or messaging mismatch)? Atlas cross-references the signal pattern against your historical campaign data to identify the most likely root cause. This diagnostic determines what action the agent takes — targeting adjustment, send time shift, content flag, or human escalation for structural issues.',
    tags: ['Atlas Reasoning Engine', 'Root Cause Diagnosis', 'Open Rate Analysis', 'CTR Analysis', 'Conversion Diagnosis', 'Historical Benchmarking'],
  },
  {
    num: 4,
    tool: 'Autonomous Optimisation',
    toolColor: '#10A37F',
    title: 'Agent adjusts targeting, send times, and segment suppression autonomously',
    detail: 'Within configured parameters, the agent executes optimisation actions without human approval: suppresses cold segments from the active send list (contacts with zero engagement in the last 30 days), shifts send times to the Einstein-predicted optimal window for each segment, adjusts audience filters to exclude contacts showing unsubscribe intent, and diverts fatigue-signals contacts into a re-engagement journey rather than continuing the primary sequence. All autonomous actions are logged with the reasoning that triggered them. A daily optimisation summary is posted to the configured Slack channel so your team sees what the agent did overnight.',
    tags: ['Autonomous Optimisation', 'Segment Suppression', 'Send Time Optimisation', 'Re-engagement Diversion', 'Action Logging', 'Daily Summary'],
  },
  {
    num: 5,
    tool: 'Journey Pause & Human Escalation',
    toolColor: '#8B5CF6',
    title: 'Journeys with serious signals paused and team alerted with diagnosis',
    detail: 'For campaigns showing critical signals — unsubscribe rate above threshold, deliverability risk indicators, or a sudden drop suggesting a broken content element — the agent pauses the journey and fires an immediate Slack alert to the marketing team. The alert includes: the campaign name, the specific signal that triggered the pause, the agent\'s diagnostic (likely root cause), and a recommended action. The agent does not attempt to autonomously fix structural campaign issues — it pauses to prevent further damage and hands off to your team with full context. The journey remains paused until a human resumes it.',
    tags: ['Journey Pause', 'Critical Signal Detection', 'Slack Alert', 'Deliverability Protection', 'Human Handoff', 'Diagnosis Summary'],
  },
  {
    num: 6,
    tool: 'Performance Reporting',
    toolColor: SF_BLUE,
    title: 'Automated campaign performance summaries generated and distributed',
    detail: 'The agent generates daily and weekly campaign performance summaries — not raw data exports, but interpreted summaries: which campaigns are performing above benchmark, which have been optimised (and what changed), which are paused and why, and the top insight for the week (e.g. \'Tuesday 10am sends are outperforming all other times by 34% for your enterprise segment\'). Summaries are distributed to the configured recipients via email and Slack. Monthly summaries include trend analysis across the full campaign portfolio — performance trajectory, segment health, and optimisation impact.',
    tags: ['Automated Reporting', 'Interpreted Summaries', 'Daily Digest', 'Weekly Summary', 'Trend Analysis', 'Portfolio Overview'],
  },
]

// ── Tech stack ────────────────────────────────────────────────────────────────

const techStack = [
  { name: 'Atlas Reasoning Engine', role: 'Performance diagnosis', color: SF_BLUE, desc: 'Diagnoses why a campaign is underperforming — isolating whether the issue is in subject line, content, audience, send time, or offer — and determines the correct optimisation action.' },
  { name: 'Einstein Engagement Scoring', role: 'Segment scoring', color: '#10A37F', desc: 'Scores every recipient\'s engagement level and predicts fatigue — so the agent can suppress cold contacts and protect deliverability before unsubscribes spike.' },
  { name: 'Marketing Cloud', role: 'Campaign platform', color: '#FF4F00', desc: 'The native platform where journeys run. The agent reads engagement signals, adjusts audience filters, controls journey pause/resume, and triggers re-engagement flows.' },
  { name: 'Data Cloud', role: 'Real-time signal feed', color: '#6366F1', desc: 'Feeds real-time engagement events into the agent\'s monitoring pipeline — open events, click events, conversion events, and unsubscribe signals.' },
  { name: 'Slack', role: 'Alerts + summaries', color: '#4A154B', desc: 'Delivers journey pause alerts and daily/weekly performance summaries to your marketing team — with diagnosis context, not just metrics.' },
  { name: 'Salesforce Flow', role: 'Optimisation execution', color: '#D97706', desc: 'Executes suppression list updates, send time adjustments, and re-engagement journey triggers as automated Flow actions within Marketing Cloud.' },
  { name: 'Prompt Builder', role: 'Report generation', color: '#8B5CF6', desc: 'Generates interpreted performance summaries — not raw data but narrative insights grounded in campaign metrics and benchmark comparisons.' },
]

// ── Outcomes ──────────────────────────────────────────────────────────────────

const outcomes = [
  { stat: '24/7', label: 'campaign monitoring', sub: 'no weekly review lag' },
  { stat: '30%', label: 'engagement lift', sub: 'from dynamic targeting' },
  { stat: '< 1 hr', label: 'response to signals', sub: 'vs next-day review' },
  { stat: '2×', label: 'campaign ROI', sub: 'on optimised journeys' },
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

export default function CampaignExecutionAgentPage() {
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
          <span className="text-white/35">Marketing Cloud</span>
          <ChevronRight size={11} className="text-white/20" />
          <span className="text-white/55">Campaign Execution Agent</span>
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
                Marketing Cloud
              </span>
            </motion.div>

            <motion.h1 {...fade(0.06)}
              className="mt-5 font-display text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.06] tracking-tight text-white">
              Campaign Execution Agent —<br />
              <span className="bg-gradient-to-r from-[#00A1E0] to-[#0077B6] bg-clip-text text-transparent">Real-Time Campaign Optimisation on Autopilot</span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-base leading-relaxed text-white/55 max-w-lg">
              Monitors every active campaign in Marketing Cloud around the clock. Detects underperformance before it becomes a problem, adjusts segment targeting based on live engagement signals, pauses journeys that are hurting deliverability, and alerts your team to decisions that need human judgement — so your campaigns never run unattended.
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
              {['Atlas Reasoning Engine', 'Marketing Cloud', 'Data Cloud', 'Einstein Engagement Scoring', 'Prompt Builder', 'Salesforce Flow', 'Slack Integration'].map(t => (
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
              <span className="text-[11px] font-medium text-white/40 font-display tracking-wide uppercase">Agentforce reasoning flow — monitors every active campaign</span>
            </div>
            <HeroDiagram />
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-4">
              {[
                { label: 'Signals monitored', value: 'Continuous' },
                { label: 'Response time', value: '< 1 hr' },
                { label: 'Optimisation', value: 'Autonomous' },
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
                Kovil AI scopes, builds, tests and deploys this Agentforce configuration end-to-end. You do not touch Agent Builder until it is live and optimising campaigns.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {[
                  'Campaign Execution Agent with real-time signal monitoring',
                  'Einstein Engagement Scoring integration with custom benchmark thresholds',
                  'Autonomous optimisation action library (suppression, send time, re-engagement diversion)',
                  'Journey pause logic with critical signal thresholds',
                  'Slack alert configuration for pause events and daily summaries',
                  'Automated daily and weekly performance report generation',
                  'Optimisation action audit log in Salesforce',
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
                  { week: 'Week 1', title: 'Monitoring + scoring', items: ['Data Cloud signal integration, Einstein scoring, benchmark configuration'] },
                  { week: 'Week 2', title: 'Optimisation actions', items: ['Atlas diagnosis logic, suppression/send-time automation, re-engagement diversion'] },
                  { week: 'Week 3', title: 'Alerts + reporting + deploy', items: ['Slack alerts, journey pause logic, performance reports, production deployment'] },
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
                q: 'What actions can the agent take autonomously vs what requires human approval?',
                a: 'Autonomous actions (within your configured parameters): segment suppression of cold contacts, send time shifts within a configured window, diversion of fatigue signals to re-engagement journeys, and suppression of unsubscribe-intent contacts from primary sends. Human approval required: pausing an active journey (the agent pauses and alerts, not resumes), changing campaign content, modifying the core audience definition, and any budget reallocation. The boundary between autonomous and human-approval actions is configured during implementation and can be adjusted.',
              },
              {
                q: 'How does it protect our deliverability?',
                a: 'Three mechanisms: journey fatigue prediction (suppressing contacts approaching their tolerance threshold before they unsubscribe), unsubscribe intent detection (suppressing contacts showing pre-unsubscribe engagement patterns), and immediate journey pause on deliverability risk signals (sudden spike in spam complaints, bounce rate increase). These are the three most common causes of deliverability degradation — all three are monitored continuously.',
              },
              {
                q: 'Can it work across multiple brands or campaign types?',
                a: 'Yes. The agent can be configured with separate benchmark thresholds and optimisation rules per brand, campaign type (transactional vs promotional vs nurture), and audience tier. Enterprise clients typically configure separate rule sets for different product lines or regional audiences.',
              },
              {
                q: 'What does the daily summary actually look like?',
                a: 'A Slack message with: total campaigns active, campaigns performing above benchmark (with the top insight), campaigns optimised overnight (with what changed), and any campaigns paused (with reason). It takes 60 seconds to read and gives your team full situational awareness before their morning standup. The weekly summary adds trend lines — whether overall campaign health is improving or declining across the portfolio.',
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
          <Zap size={24} className="relative mx-auto mb-4" style={{ color: accentColor }} />
          <h2 className="relative font-display text-[clamp(22px,3.5vw,36px)] font-bold text-white">
            Your campaigns optimised while you sleep.
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Book a 30-minute discovery call. We&apos;ll audit your current campaign performance, identify the optimisation opportunities your weekly review is missing, and scope a 3-week fixed-price Agentforce implementation.
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
