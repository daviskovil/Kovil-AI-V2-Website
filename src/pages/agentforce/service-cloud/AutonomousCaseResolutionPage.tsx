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
      <marker id="arrow-case" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <polygon points="0,0 0,6 8,3" fill="#D0CBC2" />
      </marker>
    </defs>
  )
}

function CaseIntakeIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#FF4F00">
      <text x={cx} y={cy - 4} textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">CASE</text>
      <text x={cx} y={cy + 9} textAnchor="middle" fill="white" fontSize="9" fontWeight="600" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">Inbound</text>
    </NodeBox>
  )
}

function EinsteinIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg={SF_BLUE}>
      <circle cx={cx} cy={cy} r="13" stroke="white" strokeWidth="1.5" fill="none" />
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="13" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">E</text>
    </NodeBox>
  )
}

function AtlasIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#0F172A" border="#334155">
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="13" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">A</text>
    </NodeBox>
  )
}

function KnowledgeBaseIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#10A37F">
      <line x1={cx - 10} y1={cy - 8} x2={cx + 10} y2={cy - 8} stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 10} y1={cy - 2} x2={cx + 10} y2={cy - 2} stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 10} y1={cy + 4} x2={cx + 4} y2={cy + 4} stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx={cx + 8} cy={cy + 8} r={4} fill="white" opacity={0.9} />
    </NodeBox>
  )
}

function BranchIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <polygon
        points={`${cx},${cy - 28} ${cx + 28},${cy} ${cx},${cy + 28} ${cx - 28},${cy}`}
        fill="#D97706"
        rx={4}
      />
      <text x={cx} y={cy + 4} textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif">?</text>
    </g>
  )
}

function ResolvedIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg={SF_BLUE}>
      <text x={cx} y={cy - 2} textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">✓ Done</text>
    </NodeBox>
  )
}

function HumanAgentIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#8B5CF6">
      <text x={cx} y={cy + 4} textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">Agent</text>
    </NodeBox>
  )
}

function HeroDiagram() {
  const stroke = '#D0CBC2'
  const sw = 1.8
  const ma = 'url(#arrow-case)'

  return (
    <svg viewBox="0 0 820 230" className="w-full" style={{ display: 'block' }}>
      <ArrowDefs />

      {/* Case Intake → Einstein */}
      <path d="M84,100 H143" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Einstein → Atlas */}
      <path d="M227,100 H270" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Atlas → KB */}
      <path d="M354,100 H413" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* KB → Branch */}
      <path d="M497,100 H560" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* Branch → Resolved (up) */}
      <path d="M588,72 L588,38 H710 V68" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* Branch → Human Agent (down, dashed) */}
      <path d="M588,128 L588,185 H710 V195" stroke={stroke} strokeWidth={sw} fill="none" strokeDasharray="5,3" markerEnd={ma} />

      {/* Nodes */}
      <CaseIntakeIcon cx={56} cy={100} />
      <NodeLabel cx={56} cy={100} text="Case Intake" sub="trigger" />

      <EinsteinIcon cx={171} cy={100} />
      <NodeLabel cx={171} cy={100} text="Einstein" sub="Classify" />

      <AtlasIcon cx={312} cy={100} />
      <NodeLabel cx={312} cy={100} text="Atlas" sub="Reasoning" />

      <KnowledgeBaseIcon cx={455} cy={100} />
      <NodeLabel cx={455} cy={100} text="Knowledge" sub="Base" />

      <BranchIcon cx={588} cy={100} />
      <NodeLabel cx={588} cy={100} text="Resolved?" sub="branch" />

      <ResolvedIcon cx={738} cy={38} />
      <NodeLabel cx={738} cy={38} text="✓ Auto" sub="Resolved" />

      <HumanAgentIcon cx={738} cy={195} />
      <NodeLabel cx={738} cy={195} text="Human" sub="Agent" />

      {/* Step badges */}
      {([
        [56, 100, '1'], [171, 100, '2'], [312, 100, '3'],
        [455, 100, '4'], [588, 100, '5'],
      ] as [number, number, string][]).map(([x, y, n]) => (
        <g key={n}>
          <circle cx={x + 20} cy={y - 20} r={9} fill={SF_BLUE} />
          <text x={x + 20} y={y - 16} textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="Inter, sans-serif">{n}</text>
        </g>
      ))}

      {/* Branch labels */}
      <text x={680} y={30} textAnchor="middle" fontSize="8" fill="#78716C" fontFamily="Inter, sans-serif">resolved ✓</text>
      <text x={665} y={200} textAnchor="middle" fontSize="8" fill="#78716C" fontFamily="Inter, sans-serif">escalate →</text>
    </svg>
  )
}

// ── Step data ─────────────────────────────────────────────────────────────────

const steps = [
  {
    num: 1,
    tool: 'Case Intake Trigger',
    toolColor: '#FF4F00',
    title: 'Every inbound case triggers the resolution agent instantly',
    detail: 'The Agentforce resolution agent fires the moment a new Case record is created — from any channel: web portal, email-to-case, chat, or phone (via voice transcription). The trigger is a Topic mapped to the Case object\'s creation event. The agent immediately assembles full context: the customer\'s account history, open and closed case history, recent orders, any active contracts, and their entitlement level. By the time the first action runs, the agent knows the customer better than most human agents reading a case for the first time.',
    tags: ['Case Object Trigger', 'OmniChannel', 'Email-to-Case', 'Web Portal', 'Voice Transcription', 'Context Assembly'],
  },
  {
    num: 2,
    tool: 'Einstein Case Classification',
    toolColor: SF_BLUE,
    title: 'Einstein classifies case type and resolution tier in under a second',
    detail: 'Einstein Case Classification analyses the case subject and description using NLP to identify: case type (refund, order status, account update, technical issue, billing query, rescheduling), urgency tier (L1 routine, L2 complex, L3 escalation required), and sentiment (frustrated, neutral, satisfied). The classification determines which resolution path the Atlas Reasoning Engine takes. L1 and most L2 cases are routed to autonomous resolution. L3 cases — those requiring genuine human judgement — skip directly to escalation with full context pre-loaded.',
    tags: ['Einstein Case Classification', 'NLP Intent Detection', 'Tier Routing', 'Sentiment Analysis', 'L1/L2/L3 Classification'],
  },
  {
    num: 3,
    tool: 'Atlas Reasoning',
    toolColor: '#0F172A',
    title: 'Atlas Reasoning Engine selects and executes the resolution action',
    detail: 'For each classified case, Atlas reasons through the available actions configured during implementation — the specific resolution capabilities vary by client but typically include: process refund (via Flow calling payment system), check and update order status (via Data Cloud or ERP integration), reschedule appointment or delivery (via calendar system), update account field (directly in Salesforce), retrieve product documentation and troubleshooting steps (via Knowledge Base search), and reset account credentials (via identity system). Atlas selects the correct action, executes it, and verifies the outcome before closing the case.',
    tags: ['Atlas Reasoning Engine', 'Multi-step Reasoning', 'Action Selection', 'Outcome Verification', 'Einstein Trust Layer'],
  },
  {
    num: 4,
    tool: 'Knowledge Base Retrieval',
    toolColor: '#10A37F',
    title: 'Relevant knowledge articles retrieved and personalised for the customer',
    detail: 'For troubleshooting and how-to cases, Atlas queries the Salesforce Knowledge Base using semantic search — not keyword matching. The agent retrieves the most relevant articles for the specific product version, customer entitlement level, and issue described. It does not send the article link. It summarises the relevant steps in conversational language, tailored to the customer\'s apparent technical level based on how they described the problem. If the KB article is outdated or missing, the agent flags the gap for the knowledge management team.',
    tags: ['Salesforce Knowledge', 'Semantic Search', 'Entitlement-aware', 'Conversational Summary', 'Knowledge Gap Flagging'],
  },
  {
    num: 5,
    tool: 'Case Resolution',
    toolColor: SF_BLUE,
    title: 'Case resolved, customer notified, and all actions logged to Salesforce',
    detail: 'When the resolution action completes successfully, the agent closes the loop: sends a personalised resolution confirmation to the customer via their preferred channel (email, chat, or portal), updates the Case status to Resolved with a detailed resolution summary, logs all actions taken as Case Comments for audit purposes, and triggers a post-resolution CSAT survey via the configured survey tool. Resolution time, action taken, and knowledge article used are all logged for analytics. Cases resolved autonomously are tagged so you can track your autonomous resolution rate over time.',
    tags: ['Case Resolution', 'CSAT Survey', 'Activity Logging', 'Resolution Summary', 'Autonomous Resolution Tagging', 'Channel Notification'],
  },
  {
    num: 6,
    tool: 'Escalation to Human Agent',
    toolColor: '#8B5CF6',
    title: 'Genuinely complex cases escalated with full AI-prepared context',
    detail: 'Cases the agent cannot resolve — those requiring genuine human judgement, exceptions outside configured parameters, or customers explicitly requesting human contact — are escalated via OmniChannel to the appropriate human agent queue. The escalation includes: a full AI-prepared case summary (what the customer needs, what was already tried, recommended next action), the customer\'s sentiment score, their full account context, and any relevant knowledge articles. Human agents receive escalations fully briefed — they do not re-read the case from scratch. Average handle time for escalated cases drops 40% because the AI has already done the diagnostic work.',
    tags: ['OmniChannel Escalation', 'AI Case Summary', 'Human Queue Routing', 'Context Pre-loading', 'Handle Time Reduction'],
  },
]

// ── Tech stack ────────────────────────────────────────────────────────────────

const techStack = [
  { name: 'Atlas Reasoning Engine', role: 'Resolution reasoning', color: SF_BLUE, desc: 'Reasons through the correct resolution action for each case type — executes the action, verifies the outcome, and closes the case autonomously.' },
  { name: 'Einstein Case Classification', role: 'Intent + tier', color: '#10A37F', desc: 'Classifies every inbound case by type, tier, and sentiment in under a second — determining whether it goes to autonomous resolution or human escalation.' },
  { name: 'Salesforce Knowledge', role: 'Article retrieval', color: '#8B5CF6', desc: 'Provides semantic knowledge search for troubleshooting cases. Agent summarises relevant steps conversationally rather than sending raw article links.' },
  { name: 'OmniChannel', role: 'Channel routing', color: '#FF4F00', desc: 'Routes cases from any channel — email, chat, portal, voice — into the resolution agent, and routes escalations to the correct human agent queue.' },
  { name: 'Data Cloud', role: 'Live account context', color: '#6366F1', desc: 'Unifies account history, order data, and contract information so the agent has full customer context before taking any action.' },
  { name: 'Einstein Trust Layer', role: 'Compliance', color: '#0F172A', desc: 'Ensures all LLM calls stay within Salesforce\'s trust boundary. Masks PII, prevents prompt injection, and logs every agent action for compliance audit.' },
  { name: 'Salesforce Flow', role: 'Action execution', color: '#D97706', desc: 'Executes the resolution actions — refund processing, order updates, appointment rescheduling — via Flow integrations with your backend systems.' },
]

// ── Outcomes ──────────────────────────────────────────────────────────────────

const outcomes = [
  { stat: '65%+', label: 'autonomous resolution', sub: 'no human required' },
  { stat: '< 2 min', label: 'first response', sub: '24/7 coverage' },
  { stat: '40%', label: 'handle time reduction', sub: 'for escalated cases' },
  { stat: '98%', label: 'CSAT maintained', sub: 'on AI-resolved cases' },
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

export default function AutonomousCaseResolutionPage() {
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
          <span className="text-white/55">Autonomous Case Resolution</span>
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
              Autonomous Case Resolution —<br />
              <span className="bg-gradient-to-r from-[#00A1E0] to-[#0077B6] bg-clip-text text-transparent">65%+ of Cases Resolved Without Human Touch</span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-base leading-relaxed text-white/55 max-w-lg">
              Handles every inbound Tier 1 and Tier 2 support case autonomously — refunds, order status, rescheduling, account updates, troubleshooting — with full live account context from your Salesforce org. Human agents only see what the AI genuinely cannot resolve.
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
              {['Atlas Reasoning Engine', 'Einstein Case Classification', 'Knowledge Base', 'Salesforce Flow', 'OmniChannel', 'Einstein Trust Layer', 'Data Cloud'].map(t => (
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
              <span className="text-[11px] font-medium text-white/40 font-display tracking-wide uppercase">Agentforce reasoning flow — fires on every new case</span>
            </div>
            <HeroDiagram />
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-4">
              {[
                { label: 'Trigger', value: 'Case created' },
                { label: 'Response time', value: '< 2 min' },
                { label: 'Resolution', value: 'L1 + L2 auto' },
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
                Kovil AI scopes, builds, tests and deploys this Agentforce configuration end-to-end. You do not touch Agent Builder until it is live and resolving cases.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {[
                  'Autonomous case resolution agent with Topic and Action configuration',
                  'Einstein Case Classification setup with custom tier and type taxonomy',
                  'Resolution action library (refund, order status, rescheduling, account update, KB retrieval)',
                  'OmniChannel routing configuration for all inbound channels',
                  'Escalation flow with AI-prepared case summary pre-loading',
                  'CSAT survey trigger on resolved cases',
                  'Autonomous resolution rate dashboard in Salesforce',
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
                  { week: 'Week 1', title: 'Classification + context', items: ['Einstein classification, Data Cloud integration, case context assembly'] },
                  { week: 'Week 2', title: 'Resolution actions', items: ['Atlas action library, Knowledge Base semantic search, resolution confirmation flow'] },
                  { week: 'Week 3', title: 'Escalation + deploy', items: ['OmniChannel escalation, CSAT trigger, production deployment'] },
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
                q: 'What case types can the agent resolve autonomously?',
                a: 'The resolution library is configured during implementation based on your specific service operations. Common autonomous resolutions include: order status checks, refund processing (within configured thresholds), appointment and delivery rescheduling, account field updates (address, contact info, preferences), password and credential resets, subscription changes, and standard troubleshooting for your top 20 issue types. Cases requiring genuine human judgement — complex complaints, exceptions outside policy, legal or compliance-sensitive requests — are always escalated.',
              },
              {
                q: 'What is the typical autonomous resolution rate?',
                a: 'Our clients typically achieve 55–75% autonomous resolution rates within 8 weeks of deployment, depending on the breadth of the resolution action library configured. The rate improves over time as the knowledge base is updated and edge cases are added to the agent\'s action library. We measure resolution rate, CSAT score, and escalation reasons as part of standard post-launch reporting.',
              },
              {
                q: 'How does the agent handle frustrated or upset customers?',
                a: 'Einstein Case Classification includes sentiment detection. Cases flagged as high-frustration trigger a modified resolution path: the agent acknowledges the frustration explicitly before attempting resolution, uses a more empathetic tone in all responses, and has a lower escalation threshold (it escalates sooner rather than attempting multiple autonomous resolution steps). Very high frustration scores can be configured to trigger immediate human escalation.',
              },
              {
                q: 'Does this replace our human support team?',
                a: 'It handles the high-volume, repetitive L1 and L2 cases that consume the majority of your team\'s time. Your human agents handle the genuinely complex cases — complaints, exceptions, VIP accounts, strategic situations — fully briefed by the AI. Most clients find this increases human agent satisfaction because they spend their time on meaningful work rather than answering the same questions repeatedly.',
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
            Resolve 65% of cases before a human sees them.
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Book a 30-minute discovery call. We&apos;ll analyse your case type distribution, identify which cases the agent can handle autonomously, and scope a 3-week fixed-price implementation.
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
