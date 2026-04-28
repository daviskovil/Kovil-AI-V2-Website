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
      <marker id="arrow-sdr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <polygon points="0,0 0,6 8,3" fill="#D0CBC2" />
      </marker>
    </defs>
  )
}

// SF Lead node (orange)
function LeadIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#FF4F00">
      <text x={cx} y={cy - 4} textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">SF</text>
      <text x={cx} y={cy + 9} textAnchor="middle" fill="white" fontSize="9" fontWeight="600" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">Lead</text>
    </NodeBox>
  )
}

// Einstein node (SF_BLUE)
function EinsteinIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg={SF_BLUE}>
      <circle cx={cx} cy={cy} r="13" stroke="white" strokeWidth="1.5" fill="none" />
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="13" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">E</text>
    </NodeBox>
  )
}

// Atlas Reasoning node (dark)
function AtlasIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#0F172A" border="#334155">
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="13" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">A</text>
    </NodeBox>
  )
}

// Prompt Builder node (green)
function PromptBuilderIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#10A37F">
      <line x1={cx - 10} y1={cy - 8} x2={cx + 10} y2={cy - 8} stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 10} y1={cy - 2} x2={cx + 10} y2={cy - 2} stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 10} y1={cy + 4} x2={cx + 4} y2={cy + 4} stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx={cx + 8} cy={cy + 8} r={4} fill="white" opacity={0.9} />
    </NodeBox>
  )
}

// Email node (blue)
function EmailIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#4285F4">
      <rect x={cx - 13} y={cy - 9} width={26} height={18} rx={2.5} fill="white" opacity={0.9} />
      <polyline points={`${cx - 13},${cy - 9} ${cx},${cy + 2} ${cx + 13},${cy - 9}`} fill="none" stroke="#4285F4" strokeWidth="2" strokeLinejoin="round" />
    </NodeBox>
  )
}

// Response diamond node (amber)
function ResponseIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#D97706">
      <path d={`M${cx},${cy - 14} L${cx + 14},${cy} L${cx},${cy + 14} L${cx - 14},${cy} Z`}
        fill="none" stroke="white" strokeWidth="1.5" />
      <text x={cx} y={cy + 4} textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif">?</text>
    </NodeBox>
  )
}

// Book Meeting node (SF_BLUE)
function MeetingIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg={SF_BLUE}>
      <rect x={cx - 11} y={cy - 11} width={22} height={20} rx={3} fill="white" opacity={0.9} />
      <line x1={cx - 6} y1={cy - 14} x2={cx - 6} y2={cy - 8} stroke={SF_BLUE} strokeWidth="2" strokeLinecap="round" />
      <line x1={cx + 6} y1={cy - 14} x2={cx + 6} y2={cy - 8} stroke={SF_BLUE} strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 8} y1={cy - 3} x2={cx + 8} y2={cy - 3} stroke={SF_BLUE} strokeWidth="1.5" strokeLinecap="round" />
      <line x1={cx - 4} y1={cy + 2} x2={cx + 4} y2={cy + 2} stroke={SF_BLUE} strokeWidth="1.5" strokeLinecap="round" />
    </NodeBox>
  )
}

// Handle Objection node (purple)
function ObjectionIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#8B5CF6">
      <text x={cx} y={cy - 2} textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif">OBJ</text>
      <text x={cx} y={cy + 9} textAnchor="middle" fill="white" fontSize="8" fontFamily="Inter, sans-serif">Handle</text>
    </NodeBox>
  )
}

function HeroDiagram() {
  const stroke = '#D0CBC2'
  const sw = 1.8
  const ma = 'url(#arrow-sdr)'

  return (
    <svg viewBox="0 0 820 220" className="w-full" style={{ display: 'block' }}>
      <ArrowDefs />

      {/* Lead → Einstein */}
      <path d="M84,90 H143" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Einstein → Atlas */}
      <path d="M227,90 H286" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Atlas → Prompt Builder */}
      <path d="M370,90 H429" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Prompt Builder → Email */}
      <path d="M513,90 H572" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Email → Response */}
      <path d="M656,90 H712" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* Response → Book Meeting (up path) */}
      <path d="M740,62 L740,30 H790 V60" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* Response → Handle Objection (down path) */}
      <path d="M740,118 L740,165 H456,465" stroke={stroke} strokeWidth={sw} fill="none" strokeDasharray="5,3" markerEnd={ma} />
      {/* Objection loop back to Prompt Builder (dashed) */}
      <path d="M427,165 C400,165 400,118 456,118" stroke={stroke} strokeWidth={sw} fill="none" strokeDasharray="5,3" markerEnd={ma} />

      {/* Nodes */}
      <LeadIcon cx={56} cy={90} />
      <NodeLabel cx={56} cy={90} text="New Lead" sub="trigger" />

      <EinsteinIcon cx={171} cy={90} />
      <NodeLabel cx={171} cy={90} text="Einstein" sub="Score" />

      <AtlasIcon cx={328} cy={90} />
      <NodeLabel cx={328} cy={90} text="Atlas" sub="Qualify" />

      <PromptBuilderIcon cx={456} cy={90} />
      <NodeLabel cx={456} cy={90} text="Prompt" sub="Builder" />

      <EmailIcon cx={600} cy={90} />
      <NodeLabel cx={600} cy={90} text="Email" sub="Outreach" />

      <ResponseIcon cx={740} cy={90} />
      <NodeLabel cx={740} cy={90} text="Response?" sub="branch" />

      <MeetingIcon cx={790} cy={30} />
      <NodeLabel cx={790} cy={30} text="Book" sub="Meeting" />

      <ObjectionIcon cx={456} cy={165} />
      <NodeLabel cx={456} cy={165} text="Objection" sub="Handle" />

      {/* Step badges */}
      {([
        [56, 90, '1'], [171, 90, '2'], [328, 90, '3'],
        [456, 90, '4'], [600, 90, '5'], [740, 90, '6'],
      ] as [number, number, string][]).map(([x, y, n]) => (
        <g key={n}>
          <circle cx={x + 20} cy={y - 20} r={9} fill={SF_BLUE} />
          <text x={x + 20} y={y - 16} textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="Inter, sans-serif">{n}</text>
        </g>
      ))}

      {/* Labels on branches */}
      <text x={790} y={55} textAnchor="middle" fontSize="8" fill="#78716C" fontFamily="Inter, sans-serif">booked ✓</text>
      <text x={606} y={183} textAnchor="middle" fontSize="8" fill="#78716C" fontFamily="Inter, sans-serif">objection → retry</text>
    </svg>
  )
}

// ── Step data ─────────────────────────────────────────────────────────────────

const steps = [
  {
    num: 1,
    tool: 'Lead Intake Trigger',
    toolColor: '#FF4F00',
    title: 'New Lead record triggers the SDR agent instantly',
    detail: 'The Agentforce SDR agent fires the moment a new Lead record is created in Salesforce — from any source: web form, Pardot campaign, event registration, or inbound email. The trigger is configured via an Agentforce Topic that maps to the Lead object. There is zero delay: the agent begins qualification reasoning within seconds of record creation, running immediately against the full Lead record including any custom fields your org uses for ICP scoring.',
    tags: ['Agent Builder', 'Topic Configuration', 'Lead Object Trigger', 'Real-time Activation'],
  },
  {
    num: 2,
    tool: 'Einstein Lead Scoring',
    toolColor: SF_BLUE,
    title: 'Einstein analyses fit against your ICP before the agent acts',
    detail: 'Before the agent writes a single word of outreach, Einstein Lead Scoring runs a predictive fit analysis: job title match against your ideal customer profile, company size within your target range, industry in your served verticals, and engagement signals from Pardot. Leads scoring below threshold are flagged for ops review, not contacted. Leads scoring above threshold proceed to the Atlas Reasoning Engine for full qualification. This prevents the agent from wasting conversation credits on unqualified traffic.',
    tags: ['Einstein Lead Scoring', 'ICP Match', 'Predictive AI', 'Threshold Rules', 'Pardot Signals'],
  },
  {
    num: 3,
    tool: 'Atlas Qualification',
    toolColor: '#0F172A',
    title: 'Atlas Reasoning Engine runs BANT/MEDDIC qualification',
    detail: "The Atlas Reasoning Engine — Agentforce's core AI reasoning layer — runs a structured qualification assessment using the qualification framework configured during setup (BANT, MEDDIC, or a custom framework built to your sales motion). Atlas checks: Budget signals from firmographic data, Authority by cross-referencing title and org chart signals, Need by matching the lead's industry and engagement to your known pain point patterns, and Timeline from any form data captured. The reasoning trace is logged in Salesforce for full auditability.",
    tags: ['Atlas Reasoning Engine', 'BANT Qualification', 'MEDDIC Framework', 'Reasoning Trace', 'Einstein Trust Layer'],
  },
  {
    num: 4,
    tool: 'Prompt Builder Outreach',
    toolColor: '#10A37F',
    title: 'Prompt Builder drafts personalised outreach grounded in live CRM data',
    detail: "Salesforce Prompt Builder generates the first outreach email with full CRM context grounded in: the lead's industry and company, their specific engagement history (which pages they visited, which form they completed), and your product's value proposition mapped to their vertical. Every email is unique — not a template with variable substitution but AI-authored outreach that reads like it was written by your best rep. The Einstein Trust Layer prevents PII leakage and ensures every draft is reviewed against your approved messaging guidelines before sending.",
    tags: ['Prompt Builder', 'Dynamic Grounding', 'Einstein Trust Layer', 'PII Protection', 'CRM Context', 'Personalisation'],
  },
  {
    num: 5,
    tool: 'Email Send & Monitoring',
    toolColor: '#4285F4',
    title: "Email sent via Sales Cloud — open, click, and reply signals tracked",
    detail: "The agent sends the outreach email through Salesforce's native email infrastructure — no third-party ESP required. Open, click, and reply signals feed back into the agent's context in real-time. If the lead opens but does not reply within the configured follow-up window (typically 2–3 business days), the agent automatically queues a follow-up. All email activity is logged as Activities on the Lead record — your reps have full visibility without managing a single send.",
    tags: ['Sales Cloud Email', 'Activity Logging', 'Open/Click Tracking', 'Follow-up Automation', 'Rep Visibility'],
  },
  {
    num: 6,
    tool: 'Meeting Booking',
    toolColor: SF_BLUE,
    title: 'Qualified leads booked directly into rep calendars',
    detail: 'When a lead responds positively or clicks the meeting link, the agent routes to booking: it identifies the correct rep based on territory, industry, and current calendar availability, generates a personalised meeting confirmation with agenda, and creates the Event record in Salesforce with the lead attached. Leads that express objections are handled with a configured objection response sequence — the agent provides relevant case studies or ROI data and re-attempts booking after a cooling period. Conversion data feeds back to Einstein for ongoing model improvement.',
    tags: ['Salesforce Meetings', 'Territory Routing', 'Objection Handling', 'Calendar Integration', 'Activity Logging', 'Einstein Feedback Loop'],
  },
]

// ── Tech stack ────────────────────────────────────────────────────────────────

const techStack = [
  { name: 'Atlas Reasoning Engine', role: 'Core reasoning', color: SF_BLUE, desc: "Agentforce's core AI layer — classifies lead intent, runs qualification logic, selects outreach actions, and logs full reasoning traces for every decision." },
  { name: 'Einstein Lead Scoring', role: 'Predictive fit', color: '#10A37F', desc: 'Scores leads against your ICP before the agent acts — preventing wasted conversation credits on unqualified traffic.' },
  { name: 'Prompt Builder', role: 'Outreach drafting', color: '#8B5CF6', desc: 'Generates personalised, CRM-grounded outreach emails. Every email is unique — authored from live data, not filled from a template.' },
  { name: 'Einstein Trust Layer', role: 'Security & compliance', color: '#0F172A', desc: 'Prevents PII leakage, blocks prompt injection, masks sensitive data, and logs every agent action for audit. Required for enterprise deployments.' },
  { name: 'Sales Cloud', role: 'CRM layer', color: '#FF4F00', desc: 'The native Salesforce environment where Leads live, Activities are logged, and your reps have full visibility of every agent action.' },
  { name: 'Agent Builder', role: 'Configuration', color: '#D97706', desc: 'The Salesforce platform tool where Topics, Actions, and Instructions for the SDR agent are built, tested, and deployed to production.' },
  { name: 'Data Cloud', role: 'Contextual grounding', color: '#6366F1', desc: "Unifies engagement data, firmographic signals, and intent data to ground the agent's qualification reasoning in real-time context." },
]

// ── Outcomes ──────────────────────────────────────────────────────────────────

const outcomes = [
  { stat: '24/7', label: 'pipeline coverage', sub: 'always on' },
  { stat: '< 2 min', label: 'lead response', sub: 'vs hours manually' },
  { stat: '65%', label: 'qualification rate', sub: 'from qualified inbound' },
  { stat: '3×', label: 'meeting conversion', sub: 'vs cold outreach' },
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

export default function SDRAgentPage() {
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
          <span className="text-white/55">SDR Agent</span>
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
              Agentforce SDR Agent —<br />
              <span className="bg-gradient-to-r from-[#00A1E0] to-[#0077B6] bg-clip-text text-transparent">Autonomous Lead Qualification &amp; Outreach</span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-base leading-relaxed text-white/55 max-w-lg">
              Qualifies every inbound lead 24/7, sends personalised AI-drafted outreach, handles objections intelligently, and books meetings directly in reps&apos; calendars — without human intervention. Your pipeline never sleeps.
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
              {['Atlas Reasoning Engine', 'Einstein Lead Scoring', 'Prompt Builder', 'Agent Builder', 'Salesforce Flow', 'Data Cloud', 'Email Studio'].map(t => (
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
              <span className="text-[11px] font-medium text-white/40 font-display tracking-wide uppercase">Agentforce reasoning flow — fires on every new lead</span>
            </div>
            <HeroDiagram />
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-4">
              {[
                { label: 'Trigger', value: 'Lead created' },
                { label: 'Response time', value: '< 2 min' },
                { label: 'Qualification', value: 'BANT / MEDDIC' },
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
                Kovil AI scopes, builds, tests and deploys this Agentforce configuration end-to-end. You do not touch Agent Builder until it is live and booking meetings.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {[
                  'Agentforce SDR agent configured with Topics, Actions, and Instructions',
                  'Einstein Lead Scoring integration with custom ICP threshold rules',
                  'Prompt Builder templates grounded in your CRM data and messaging guidelines',
                  'Qualification framework (BANT/MEDDIC) mapped to your sales motion',
                  'Email send and activity logging configuration',
                  'Objection handling sequence with case study/ROI content',
                  'Meeting booking flow with territory routing logic',
                  'Reasoning trace logging for full agent auditability',
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
                  { week: 'Week 1', title: 'Agent setup + Einstein Scoring', items: ['Topic configuration, Lead trigger, ICP scoring rules'] },
                  { week: 'Week 2', title: 'Outreach + qualification', items: ['Prompt Builder templates, Atlas qualification logic, email send'] },
                  { week: 'Week 3', title: 'Booking + deploy', items: ['Meeting routing, objection handling, production deployment'] },
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
                q: 'How does the SDR agent handle objections?',
                a: "The agent detects objection signals in lead responses (declining meeting, asking for more info, pricing questions) and routes to a configured objection handling sequence. For each objection type, the agent delivers relevant content: case studies for 'we already have a solution', ROI data for 'budget concerns', implementation timeline for 'not the right time'. After delivering the response, the agent waits a configured cooling period (typically 5–7 days) before re-attempting to book. All objection handling is logged to the Lead record.",
              },
              {
                q: 'Does it work with our existing Salesforce org setup?',
                a: 'Yes. We configure the SDR agent within your existing Salesforce org — no migration or new instance required. We work with your current Lead fields, custom objects, territory rules, and pipeline stages. The org audit in Week 1 identifies any data quality issues that would affect agent performance and resolves them before the agent goes live.',
              },
              {
                q: 'How is this different from Pardot/Marketing Cloud email automation?',
                a: 'Email automation sends fixed sequences to segments. The Agentforce SDR agent reasons about each lead individually — it adapts based on ICP fit score, engagement signals, lead responses, and objection content. It can have a two-way conversation with a lead, route to the right rep based on real-time calendar availability, and make qualification decisions. It is not a sequence. It is an agent.',
              },
              {
                q: 'What does the Einstein Trust Layer do in this context?',
                a: 'It ensures that when Prompt Builder generates outreach emails, no PII from the lead record is sent externally to an LLM. Data stays within the Salesforce trust boundary. It also prevents prompt injection (a lead cannot manipulate the agent by including instructions in their email), masks sensitive fields from appearing in AI context, and logs every single agent action for GDPR and compliance audit purposes.',
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
            Deploy your Agentforce SDR agent.
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Book a 30-minute discovery call. We&apos;ll review your Sales Cloud org, map your ICP qualification logic, and scope a 3-week fixed-price pilot — your first agent live and booking meetings within a month.
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
