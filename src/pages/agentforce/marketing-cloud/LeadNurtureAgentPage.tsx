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
      <marker id="arrow-nurture" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <polygon points="0,0 0,6 8,3" fill="#D0CBC2" />
      </marker>
    </defs>
  )
}

function HeroDiagram() {
  const stroke = '#D0CBC2'
  const sw = 1.8
  const ma = 'url(#arrow-nurture)'

  return (
    <svg viewBox="0 0 820 230" className="w-full" style={{ display: 'block' }}>
      <ArrowDefs />

      {/* Lead In → Intent Score */}
      <path d="M84,110 H143" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Intent Score → Content Match */}
      <path d="M227,110 H270" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Content Match → Sequence Branch */}
      <path d="M354,110 H400" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* Branch → High intent path (up) */}
      <path d="M456,82 L456,40 H596 V64" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* Branch → Low intent path (straight) */}
      <path d="M484,110 H596" stroke={stroke} strokeWidth={sw} fill="none" strokeDasharray="5,3" markerEnd={ma} />

      {/* High intent → Sales Handoff */}
      <path d="M680,42 H720" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* Sales Handoff loop back (dashed) → Intent Score */}
      <path d="M738,68 L738,220 L171,220 L171,138" stroke={stroke} strokeWidth={sw} fill="none" strokeDasharray="4,3" markerEnd={ma} />

      {/* Nodes */}
      <NodeBox cx={56} cy={110} bg="#FF4F00">
        <text x={56} y={106} textAnchor="middle" fill="white" fontSize="10" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">LEAD</text>
        <text x={56} y={119} textAnchor="middle" fill="white" fontSize="8" fontWeight="600" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">In</text>
      </NodeBox>
      <NodeLabel cx={56} cy={110} text="Lead Entry" sub="new lead" />

      <NodeBox cx={171} cy={110} bg={SF_BLUE}>
        <circle cx={171} cy={110} r="13" stroke="white" strokeWidth="1.5" fill="none" />
        <text x={171} y={115} textAnchor="middle" fill="white" fontSize="13" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">E</text>
      </NodeBox>
      <NodeLabel cx={171} cy={110} text="Intent" sub="Score" />

      <NodeBox cx={312} cy={110} bg="#0F172A" border="#334155">
        <text x={312} y={115} textAnchor="middle" fill="white" fontSize="13" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">A</text>
      </NodeBox>
      <NodeLabel cx={312} cy={110} text="Content" sub="Match" />

      {/* Branch diamond */}
      <g>
        <polygon
          points={`${428},${82} ${456},${110} ${428},${138} ${400},${110}`}
          fill="#D97706"
        />
        <text x={428} y={114} textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif">?</text>
      </g>
      <NodeLabel cx={428} cy={110} text="Intent?" sub="branch" />

      {/* High intent → accelerated */}
      <NodeBox cx={624} cy={42} bg="#10A37F">
        <text x={624} y={38} textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="Inter, sans-serif">ACCEL</text>
        <text x={624} y={50} textAnchor="middle" fill="white" fontSize="7" fontWeight="600" fontFamily="Inter, sans-serif">sequence</text>
      </NodeBox>
      <NodeLabel cx={624} cy={42} text="Accelerate" sub="high intent" />

      {/* Low intent → slow nurture */}
      <NodeBox cx={624} cy={110} bg="#8B5CF6">
        <text x={624} y={106} textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="Inter, sans-serif">SLOW</text>
        <text x={624} y={118} textAnchor="middle" fill="white" fontSize="7" fontWeight="600" fontFamily="Inter, sans-serif">nurture</text>
      </NodeBox>
      <NodeLabel cx={624} cy={110} text="Nurture" sub="low intent" />

      {/* Sales Handoff */}
      <NodeBox cx={738} cy={42} bg={SF_BLUE}>
        <text x={738} y={38} textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="Inter, sans-serif">SALES</text>
        <text x={738} y={50} textAnchor="middle" fill="white" fontSize="7" fontWeight="600" fontFamily="Inter, sans-serif">Handoff</text>
      </NodeBox>
      <NodeLabel cx={738} cy={42} text="Sales" sub="handoff" />

      {/* Step badges */}
      {([
        [56, 110, '1'], [171, 110, '2'], [312, 110, '3'], [428, 110, '4'],
      ] as [number, number, string][]).map(([x, y, n]) => (
        <g key={n}>
          <circle cx={x + 20} cy={y - 20} r={9} fill={SF_BLUE} />
          <text x={x + 20} y={y - 16} textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="Inter, sans-serif">{n}</text>
        </g>
      ))}

      {/* Branch labels */}
      <text x={560} y={30} textAnchor="middle" fontSize="8" fill="#78716C" fontFamily="Inter, sans-serif">high intent ↑</text>
      <text x={554} y={103} textAnchor="middle" fontSize="8" fill="#78716C" fontFamily="Inter, sans-serif">low intent →</text>
      <text x={738} y={215} textAnchor="middle" fontSize="7.5" fill="#78716C" fontFamily="Inter, sans-serif">not ready → re-enter</text>
    </svg>
  )
}

// ── Step data ─────────────────────────────────────────────────────────────────

const steps = [
  {
    num: 1,
    tool: 'Lead Entry & Intent Baseline',
    toolColor: '#FF4F00',
    title: 'Lead enters nurture with a full intent and fit profile assembled automatically',
    detail: 'Every new lead entering the nurture pool receives an immediate profile assembly: ICP fit score from Einstein Lead Scoring (title, company size, industry against your ideal customer profile), initial intent signals from Data Cloud (which pages visited, which content downloaded, how long spent on pricing page), CRM history (if an existing contact, their previous engagement and any prior sales conversations), and source quality (leads from specific sources have different readiness patterns configured during implementation). This baseline profile determines the lead\'s starting position in the nurture sequence — high-fit, high-intent leads skip early educational content and start at consideration-stage content.',
    tags: ['Einstein Lead Scoring', 'Intent Baseline', 'Data Cloud Signals', 'ICP Fit', 'Source Scoring', 'CRM History'],
  },
  {
    num: 2,
    tool: 'Atlas Content Selection',
    toolColor: '#0F172A',
    title: 'Atlas selects the next content piece based on the lead\'s current state',
    detail: 'At each nurture step, Atlas Reasoning Engine evaluates the lead\'s current signal state — what they\'ve engaged with, what they\'ve ignored, what their intent trajectory is — and selects the most appropriate next content piece from your content library. Content selection considers: the lead\'s funnel stage (awareness, consideration, decision), their specific pain point signals (which problem-focused content they engaged with), their vertical (industry-specific case studies and data), and the gap since last engagement (cooling-off periods trigger re-engagement content before continuing the sequence). The agent never sends the next piece in a static sequence — it selects based on where the lead actually is.',
    tags: ['Atlas Reasoning Engine', 'Content Selection Logic', 'Funnel Stage Detection', 'Pain Point Signals', 'Vertical Personalisation', 'Re-engagement Logic'],
  },
  {
    num: 3,
    tool: 'Prompt Builder Personalisation',
    toolColor: '#10A37F',
    title: 'Each nurture email personalised by Prompt Builder with lead-specific context',
    detail: 'Prompt Builder generates personalised email copy for each nurture touchpoint — not variable substitution in a template, but contextually relevant messaging grounded in the lead\'s engagement history. The email references the specific content they\'ve engaged with, speaks to the pain point signals they\'ve shown, and includes a CTA calibrated to their funnel stage (educational content for awareness leads, demo invitation for decision-stage leads). Subject lines are generated with send-time optimisation baked in. The Einstein Trust Layer ensures lead PII stays within Salesforce during generation.',
    tags: ['Prompt Builder', 'Contextual Personalisation', 'CTA Calibration', 'Subject Line Generation', 'Einstein Trust Layer', 'Funnel Stage CTAs'],
  },
  {
    num: 4,
    tool: 'Engagement Signal Processing',
    toolColor: SF_BLUE,
    title: 'Every engagement event re-evaluated and journey adapted in real time',
    detail: 'After each nurture send, the agent processes the engagement response: Did they open? Click? Which link? Download the content? Visit additional pages after clicking? Each response event updates the lead\'s intent score and triggers a journey decision — accelerate (high engagement: move faster toward decision content), continue (normal engagement: proceed at standard pace), pause (no engagement: wait before sending again), or divert (unsubscribe signal: remove from sequence and flag for ops review). Journey decisions are made at the individual level — not batch decisions applied to segments — so every lead\'s pace is determined by their own behaviour.',
    tags: ['Real-time Signal Processing', 'Intent Score Update', 'Journey Acceleration', 'Individual Pacing', 'Diversion Logic', 'Ops Flagging'],
  },
  {
    num: 5,
    tool: 'Sales Readiness Gate',
    toolColor: '#D97706',
    title: 'Lead only handed to sales when intent signals confirm genuine readiness',
    detail: 'The handoff gate is the most important guardrail in the nurture system. A lead is handed to sales only when a configured combination of signals is met: intent score above threshold, engagement with decision-stage content (pricing page, case study, demo content), recency (activity within the last X days), and fit score meeting the minimum ICP threshold. Premature handoffs — the primary complaint from sales teams about marketing-qualified leads — are eliminated because the gate requires evidence of intent, not just time-in-nurture. When the gate opens, the agent creates a Salesforce Lead record with full engagement history attached, alerts the assigned rep via Chatter, and converts the Marketing Cloud contact to a Sales Cloud lead.',
    tags: ['Readiness Gate', 'Intent Threshold', 'Decision Stage Signals', 'Premature Handoff Prevention', 'Sales Cloud Conversion', 'Rep Alert'],
  },
  {
    num: 6,
    tool: 'Stale Lead Re-engagement',
    toolColor: '#8B5CF6',
    title: 'Leads that go cold are automatically diverted to a re-engagement sequence',
    detail: 'Leads that have not engaged in a configured window (typically 21–30 days) are diverted from the primary nurture sequence into a re-engagement flow — a shorter, higher-frequency sequence designed to reactivate interest. Re-engagement content is differentiated from the primary sequence: it typically includes a direct value proposition (free audit, comparison guide, live demo invitation) rather than educational content. Leads that re-engage from this flow re-enter the primary sequence at the appropriate stage. Leads that do not re-engage after the full re-engagement sequence are moved to a long-term low-frequency drip or archived, preventing deliverability degradation from cold contacts.',
    tags: ['Re-engagement Flow', 'Cold Lead Detection', 'Re-entry Logic', 'Long-term Drip', 'Deliverability Management', 'Archive Logic'],
  },
]

// ── Tech stack ────────────────────────────────────────────────────────────────

const techStack = [
  { name: 'Atlas Reasoning Engine', role: 'Content selection', color: SF_BLUE, desc: 'Selects the next content piece for each lead at every nurture step — based on their current funnel stage, engagement history, pain point signals, and vertical.' },
  { name: 'Einstein Lead Scoring', role: 'ICP + intent', color: '#10A37F', desc: 'Scores every lead on ICP fit and intent level — determining their starting position in the nurture sequence and gating the sales handoff.' },
  { name: 'Prompt Builder', role: 'Email personalisation', color: '#8B5CF6', desc: 'Generates personalised email copy grounded in each lead\'s engagement history — not variable substitution but contextually relevant messaging per send.' },
  { name: 'Data Cloud', role: 'Intent signal feed', color: '#6366F1', desc: 'Feeds real-time web engagement, content download, and intent signals into the lead profile — enabling individual-level journey adaptation.' },
  { name: 'Marketing Cloud', role: 'Journey execution', color: '#FF4F00', desc: 'The platform where personalised nurture sequences are executed, engagement is tracked, and contacts are managed across the full funnel.' },
  { name: 'Salesforce Flow', role: 'Handoff automation', color: '#D97706', desc: 'Automates the sales handoff — creating the Lead record in Sales Cloud, attaching engagement history, and alerting the assigned rep via Chatter.' },
  { name: 'Einstein Trust Layer', role: 'Data security', color: '#0F172A', desc: 'Keeps all lead PII within Salesforce during AI processing. No contact data leaves the platform during personalisation generation.' },
]

// ── Outcomes ──────────────────────────────────────────────────────────────────

const outcomes = [
  { stat: '3×', label: 'MQL-to-SQL conversion', sub: 'vs static sequences' },
  { stat: '45%', label: 'faster sales readiness', sub: 'engagement-driven pacing' },
  { stat: 'Individual', label: 'journey per lead', sub: 'not segment averages' },
  { stat: 'Zero', label: 'premature handoffs', sub: 'intent-gated handoff' },
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

export default function LeadNurtureAgentPage() {
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
          <span className="text-white/55">Lead Nurture Agent</span>
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
              Lead Nurture Agent —<br />
              <span className="bg-gradient-to-r from-[#00A1E0] to-[#0077B6] bg-clip-text text-transparent">Every Lead Gets a Personalised Journey</span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-base leading-relaxed text-white/55 max-w-lg">
              Abandons the one-sequence-fits-all nurture model. Instead, adapts every lead&apos;s content journey in real time based on their engagement signals, intent data, and CRM history — delivering the right content at the right moment, and handing off to sales at the precise point of readiness.
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
              {['Atlas Reasoning Engine', 'Marketing Cloud', 'Data Cloud', 'Einstein Lead Scoring', 'Prompt Builder', 'Salesforce Flow', 'Sales Cloud Handoff'].map(t => (
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
              <span className="text-[11px] font-medium text-white/40 font-display tracking-wide uppercase">Agentforce reasoning flow — adapts every lead individually</span>
            </div>
            <HeroDiagram />
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-4">
              {[
                { label: 'Journey model', value: 'Individual' },
                { label: 'MQL-to-SQL', value: '3× lift' },
                { label: 'Handoff', value: 'Intent-gated' },
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
                Kovil AI scopes, builds, tests and deploys this Agentforce configuration end-to-end. You do not touch Agent Builder until it is live and nurturing leads.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {[
                  'Lead Nurture Agent with individual-level journey adaptation',
                  'Einstein Lead Scoring integration with ICP fit and intent thresholds',
                  'Atlas content selection logic with funnel stage and vertical rules',
                  'Prompt Builder personalisation templates for each funnel stage',
                  'Sales readiness gate with configurable multi-signal threshold',
                  'Re-engagement flow for cold leads with archive logic',
                  'Sales Cloud handoff automation with engagement history transfer',
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
                  { week: 'Week 1', title: 'Profile + scoring', items: ['Einstein scoring, Data Cloud integration, intent baseline configuration'] },
                  { week: 'Week 2', title: 'Content + personalisation', items: ['Atlas content selection, Prompt Builder templates, journey adaptation logic'] },
                  { week: 'Week 3', title: 'Handoff + re-engagement + deploy', items: ['Sales readiness gate, re-engagement flow, Sales Cloud handoff, production deployment'] },
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
                q: 'How is this different from a standard Marketing Cloud Journey Builder?',
                a: 'Journey Builder runs a fixed sequence — every contact goes through the same steps in the same order, with branches only at pre-defined decision points. The Lead Nurture Agent adapts the journey for each individual based on their real-time behaviour. It selects which content to send next based on what the lead engaged with last. It accelerates leads who are showing high intent. It pauses leads who are going cold. It personalises the email copy for each send. Journey Builder is a fixed script. The agent is a responsive system.',
              },
              {
                q: 'How does the sales readiness gate work in practice?',
                a: 'The gate requires a configured combination of signals: intent score above your threshold (based on Einstein Lead Scoring), engagement with at least one decision-stage content piece (pricing page, demo request, case study), activity within the last X days (recency signal), and ICP fit meeting minimum threshold. When all conditions are met simultaneously, the handoff triggers automatically. You set the thresholds during implementation. Most clients find that reducing premature handoffs significantly improves their sales team\'s trust in marketing-qualified leads.',
              },
              {
                q: 'Can it handle different nurture tracks for different products or verticals?',
                a: 'Yes. The content selection logic and personalisation templates are configured per vertical and product line. A lead interested in Product A in the financial services vertical receives different content than a lead interested in Product B in healthcare. The agent identifies the relevant track from the lead\'s engagement signals and firmographic data, and runs the appropriate content selection logic for that track.',
              },
              {
                q: 'What happens to leads that never reach the sales readiness gate?',
                a: 'Leads that complete the full nurture sequence without reaching the readiness gate are moved to a long-term low-frequency drip — typically 1 touchpoint per month with relevant thought leadership content. This keeps them warm without driving deliverability cost. Leads that show no engagement over an extended period are moved to archived status and excluded from all sends. This is better for deliverability than keeping cold contacts in active sequences.',
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
            Every lead gets the journey they actually need.
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Book a 30-minute discovery call. We&apos;ll audit your current nurture sequences, identify where leads are dropping off prematurely, and scope a 3-week Agentforce implementation that adapts to every lead individually.
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
