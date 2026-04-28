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
      <marker id="arrow-escalation" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <polygon points="0,0 0,6 8,3" fill="#D0CBC2" />
      </marker>
    </defs>
  )
}

function CaseInIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#FF4F00">
      <text x={cx} y={cy - 2} textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">CASE</text>
    </NodeBox>
  )
}

function AtlasScoreIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#0F172A" border="#334155">
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="13" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">A</text>
    </NodeBox>
  )
}

function SLAIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#D97706">
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif">SLA</text>
    </NodeBox>
  )
}

function SentimentIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#10A37F">
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif">NPS</text>
    </NodeBox>
  )
}

function RouteIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg={SF_BLUE}>
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">ROUTE</text>
    </NodeBox>
  )
}

function StdQueueIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#374151">
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">STD</text>
    </NodeBox>
  )
}

function TechQueueIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#8B5CF6">
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">TECH</text>
    </NodeBox>
  )
}

function VIPQueueIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#D97706">
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">VIP</text>
    </NodeBox>
  )
}

function SlackIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#4A154B">
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">Slack</text>
    </NodeBox>
  )
}

function HeroDiagram() {
  const stroke = '#D0CBC2'
  const sw = 1.8
  const ma = 'url(#arrow-escalation)'

  return (
    <svg viewBox="0 0 820 270" className="w-full" style={{ display: 'block' }}>
      <ArrowDefs />

      {/* Case In → Atlas Score */}
      <path d="M84,110 H143" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Atlas → SLA */}
      <path d="M227,110 H283" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* SLA → Sentiment */}
      <path d="M367,110 H423" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Sentiment → Route */}
      <path d="M507,110 H563" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* Route → STD Queue (up) */}
      <path d="M619,82 L619,55 H720 V82" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Route → TECH Queue (straight) */}
      <path d="M647,110 H718" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Route → VIP Queue (down) */}
      <path d="M619,138 L619,172 H720 V158" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* VIP → Slack (dashed) */}
      <path d="M775,172 L775,210 H735" stroke={stroke} strokeWidth={sw} fill="none" strokeDasharray="5,3" markerEnd={ma} />

      {/* Nodes */}
      <CaseInIcon cx={56} cy={110} />
      <NodeLabel cx={56} cy={110} text="Case In" sub="trigger" />

      <AtlasScoreIcon cx={171} cy={110} />
      <NodeLabel cx={171} cy={110} text="Atlas" sub="Score" />

      <SLAIcon cx={311} cy={110} />
      <NodeLabel cx={311} cy={110} text="SLA" sub="Check" />

      <SentimentIcon cx={451} cy={110} />
      <NodeLabel cx={451} cy={110} text="Sentiment" sub="Analysis" />

      <RouteIcon cx={591} cy={110} />
      <NodeLabel cx={591} cy={110} text="Route" sub="Logic" />

      <StdQueueIcon cx={746} cy={55} />
      <NodeLabel cx={746} cy={55} text="Std" sub="Queue" />

      <TechQueueIcon cx={746} cy={110} />
      <NodeLabel cx={746} cy={110} text="Technical" sub="Queue" />

      <VIPQueueIcon cx={746} cy={165} />
      <NodeLabel cx={746} cy={165} text="VIP" sub="Queue" />

      <SlackIcon cx={700} cy={225} />
      <NodeLabel cx={700} cy={225} text="Slack" sub="Alert" />

      {/* Step badges */}
      {([
        [56, 110, '1'], [171, 110, '2'], [311, 110, '3'],
        [451, 110, '4'], [591, 110, '5'],
      ] as [number, number, string][]).map(([x, y, n]) => (
        <g key={n}>
          <circle cx={x + 20} cy={y - 20} r={9} fill={SF_BLUE} />
          <text x={x + 20} y={y - 16} textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="Inter, sans-serif">{n}</text>
        </g>
      ))}

      {/* Fan-out labels */}
      <text x={680} y={48} textAnchor="middle" fontSize="8" fill="#78716C" fontFamily="Inter, sans-serif">general →</text>
      <text x={680} y={105} textAnchor="middle" fontSize="8" fill="#78716C" fontFamily="Inter, sans-serif">specialist →</text>
      <text x={680} y={178} textAnchor="middle" fontSize="8" fill="#78716C" fontFamily="Inter, sans-serif">VIP →</text>
      <text x={740} y={208} textAnchor="middle" fontSize="8" fill="#78716C" fontFamily="Inter, sans-serif">breach alert</text>
    </svg>
  )
}

// ── Step data ─────────────────────────────────────────────────────────────────

const steps = [
  {
    num: 1,
    tool: 'Case Intake & Triage',
    toolColor: '#FF4F00',
    title: 'Every case entering the queue is triaged within seconds of creation',
    detail: 'The Intelligent Escalation agent fires on case creation and on case status changes — not just at initial intake. This means it can re-evaluate routing mid-lifecycle as cases develop. At intake, it immediately fetches: full customer account and history, entitlement level and SLA terms, current case queue loads (so it can route to the least-loaded appropriate queue), and any previous cases with the same root cause. The triage happens in background — from the customer\'s perspective, they submitted a case; from the agent\'s perspective, the case arrives pre-sorted.',
    tags: ['Case Trigger', 'Real-time Triage', 'Queue Load Awareness', 'Account Context', 'Entitlement Check'],
  },
  {
    num: 2,
    tool: 'Atlas Complexity Scoring',
    toolColor: '#0F172A',
    title: 'Atlas scores case complexity using 12+ signals',
    detail: 'The Atlas Reasoning Engine analyses 12+ signals to produce a complexity score for each case: case description length and technical vocabulary, product version and known issue cross-reference, number of components involved, regulatory or compliance implications (if the case touches financial data, health data, or contractual obligations), customer account tier, similar resolved case outcome patterns, and whether the case type has a known autonomous resolution path. Complexity scores above threshold route to specialist queues; below threshold route to general queues or autonomous resolution.',
    tags: ['Complexity Scoring', '12-Signal Analysis', 'Technical Vocabulary', 'Regulatory Flags', 'Known Issue Cross-reference'],
  },
  {
    num: 3,
    tool: 'SLA Breach Risk',
    toolColor: '#D97706',
    title: 'SLA breach risk calculated and used to reprioritise the queue in real time',
    detail: 'For each case, the agent calculates SLA breach risk based on: the customer\'s contracted SLA tier, time elapsed since case creation, current queue depth for the appropriate specialist, and historical handle time for this case type. Cases approaching breach threshold are automatically elevated in the queue — they skip ahead of lower-priority cases regardless of creation timestamp. Cases already in breach trigger an immediate Slack alert to the team lead with the case details and recommended action. SLA compliance rate is tracked as a live dashboard metric.',
    tags: ['SLA Calculation', 'Entitlement-aware', 'Queue Reprioritisation', 'Breach Threshold Alert', 'Slack Escalation'],
  },
  {
    num: 4,
    tool: 'Sentiment Analysis',
    toolColor: '#10A37F',
    title: 'Customer sentiment scored and used to modify routing and tone guidance',
    detail: 'Einstein analyses the case description and any prior interaction history for sentiment signals. Sentiment scores three dimensions: frustration level (is the customer upset?), urgency (how time-sensitive is this for them?), and churn risk (based on account history and issue severity, how likely are they to churn if this is not resolved well?). High-frustration or high-churn-risk cases are routed to senior agents, not the general queue. The pre-loading context note for the assigned agent includes the sentiment score and a suggested opening tone — the agent knows to lead with empathy before troubleshooting.',
    tags: ['Sentiment Analysis', 'Churn Risk Scoring', 'Frustration Detection', 'Senior Agent Routing', 'Tone Guidance'],
  },
  {
    num: 5,
    tool: 'Intelligent Routing',
    toolColor: SF_BLUE,
    title: 'Case routed to the optimal agent based on skill, availability, and context match',
    detail: 'The routing decision uses OmniChannel with custom routing logic configured during implementation. The agent considers: specialist skill tags (which agents are certified for which product areas), current availability and queue load (to prevent any one agent being overloaded), the customer\'s preferred language (routes to language-matched agents where available), account ownership (routes to the account-owning rep\'s support pod where configured), and historical success rate (which agent types have the highest CSAT for this case type). The routing decision is logged on the case record with reasoning.',
    tags: ['OmniChannel Routing', 'Skill-based Routing', 'Load Balancing', 'Language Matching', 'Account Ownership Routing'],
  },
  {
    num: 6,
    tool: 'Context Pre-loading',
    toolColor: '#8B5CF6',
    title: 'Assigned agent receives a full AI-prepared brief before the case opens',
    detail: 'The moment a case is assigned, the agent generates and attaches an AI-prepared context brief to the case record. The brief includes: a 3-sentence case summary (what the customer needs, what was already tried, what the recommended action is), the customer\'s sentiment score and suggested opening, full account history highlights (relevant previous cases, purchase history, contract details), a recommended resolution path based on similar resolved cases, and any knowledge articles relevant to the likely root cause. The human agent opens a case already knowing everything they need. Average handle time drops 40% because there is no case re-reading or context reconstruction.',
    tags: ['AI Context Brief', 'Case Summary', 'Recommended Resolution', 'Knowledge Article Pre-load', 'Handle Time Reduction', 'CSAT Improvement'],
  },
]

// ── Tech stack ────────────────────────────────────────────────────────────────

const techStack = [
  { name: 'Atlas Reasoning Engine', role: 'Complexity scoring', color: SF_BLUE, desc: 'Analyses 12+ signals to score case complexity and determine the correct routing destination and agent tier.' },
  { name: 'Einstein Case Classification', role: 'Intent detection', color: '#10A37F', desc: 'Classifies case type and identifies regulatory flags, known issues, and autonomous resolution eligibility at intake.' },
  { name: 'OmniChannel', role: 'Skill-based routing', color: '#FF4F00', desc: 'Routes cases to the correct agent based on skill tags, availability, queue load, language match, and account ownership rules.' },
  { name: 'Data Cloud', role: 'Account context', color: '#6366F1', desc: 'Unifies account history, purchase data, and prior case outcomes to power the AI context brief and churn risk scoring.' },
  { name: 'Einstein Trust Layer', role: 'Compliance', color: '#0F172A', desc: 'All customer data remains within Salesforce\'s trust boundary. No PII leaves the platform during AI processing.' },
  { name: 'Slack', role: 'Breach + VIP alerts', color: '#4A154B', desc: 'Sends real-time alerts to team leads for SLA breach risk and VIP customer escalations — with full context and recommended action.' },
  { name: 'Salesforce Flow', role: 'Queue management', color: '#D97706', desc: 'Executes queue reprioritisation, SLA escalation flows, and context brief generation as automated background processes.' },
]

// ── Outcomes ──────────────────────────────────────────────────────────────────

const outcomes = [
  { stat: '40%', label: 'handle time reduction', sub: 'on escalated cases' },
  { stat: '< 30s', label: 'context pre-loading', sub: 'before agent sees case' },
  { stat: '95%', label: 'first-contact resolution', sub: 'on escalations' },
  { stat: 'Zero', label: 're-explanation needed', sub: 'from customers' },
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

export default function IntelligentEscalationPage() {
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
          <span className="text-white/35">Service Cloud</span>
          <ChevronRight size={11} className="text-white/20" />
          <span className="text-white/55">Intelligent Escalation</span>
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
                Service Cloud
              </span>
            </motion.div>

            <motion.h1 {...fade(0.06)}
              className="mt-5 font-display text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.06] tracking-tight text-white">
              Intelligent Escalation —<br />
              <span className="bg-gradient-to-r from-[#00A1E0] to-[#0077B6] bg-clip-text text-transparent">Right Agent, Right Context, Every Time</span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-base leading-relaxed text-white/55 max-w-lg">
              Detects case complexity, SLA breach risk, and customer sentiment in real time. Routes every escalation to the correct human agent with full context pre-loaded — no re-explanation, no case re-reading, no dropped context. Your agents start every escalation already briefed.
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
              {['Atlas Reasoning Engine', 'Einstein Case Classification', 'OmniChannel', 'Salesforce Flow', 'Einstein Trust Layer', 'Data Cloud', 'Slack Integration'].map(t => (
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
              <span className="text-[11px] font-medium text-white/40 font-display tracking-wide uppercase">Agentforce reasoning flow — fires on every case</span>
            </div>
            <HeroDiagram />
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-4">
              {[
                { label: 'Trigger', value: 'Case created' },
                { label: 'Context load', value: '< 30 seconds' },
                { label: 'Routing', value: 'Skill + SLA + sentiment' },
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
                Kovil AI scopes, builds, tests and deploys this Agentforce configuration end-to-end. You do not touch Agent Builder until every escalation arrives pre-briefed.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {[
                  'Intelligent escalation agent with complexity scoring and sentiment analysis',
                  'OmniChannel routing configuration with skill-based and load-balanced logic',
                  'SLA breach risk calculation with queue reprioritisation automation',
                  'AI context brief generation for every assigned case',
                  'Slack alerts for SLA breach risk and VIP escalations',
                  'Routing decision logging for analytics and audit',
                  'Live SLA compliance dashboard in Salesforce',
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
                  { week: 'Week 1', title: 'Scoring + classification', items: ['Atlas complexity scoring, Einstein classification, SLA calculation'] },
                  { week: 'Week 2', title: 'Routing logic', items: ['OmniChannel skill routing, sentiment analysis, load balancing configuration'] },
                  { week: 'Week 3', title: 'Context brief + deploy', items: ['AI brief generation, Slack alerts, dashboard, production deployment'] },
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
                q: 'How does it know which agent to route to?',
                a: 'OmniChannel routing uses skill tags configured on each agent profile. During implementation, we work with you to define your skill taxonomy (product areas, languages, customer tiers, specialist certifications) and tag your agents accordingly. The routing engine then matches case requirements to agent skills, filtered by current availability and queue load. Account ownership routing (routing to the pod that owns the account) can also be configured.',
              },
              {
                q: 'Can it handle re-routing if the first agent can\'t resolve the case?',
                a: 'Yes. Re-escalation triggers a new routing decision with updated context — the complexity score increases (it is now a case that failed first-contact resolution), the sentiment score is re-evaluated, and the new AI context brief includes what the first agent attempted and why it did not resolve. The second agent receives a fully updated brief, not a cold case.',
              },
              {
                q: 'How does SLA reprioritisation work in practice?',
                a: 'The agent continuously monitors all open cases against their SLA timers. When a case reaches 75% of its SLA window without resolution, it is automatically elevated in the queue. At 90%, a Slack alert fires to the team lead. At 100% (breach), a manager alert fires. These thresholds are configurable. The queue reprioritisation happens in real time — agents see their queue re-sort as SLA risk changes throughout the day.',
              },
              {
                q: 'Does the AI context brief replace the agent reading the case?',
                a: 'The brief supplements, not replaces. The agent still has access to the full case record. The brief gives them a 3-sentence head start — what the customer needs, what was tried, what to do next — so they spend 30 seconds getting oriented rather than 5 minutes reading through case history. This is where the 40% handle time reduction comes from.',
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
            Every escalation arrives pre-briefed.
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Book a 30-minute discovery call. We&apos;ll map your current escalation paths, identify where context is being lost, and scope a 3-week Agentforce implementation that routes every case to the right agent — already briefed.
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
