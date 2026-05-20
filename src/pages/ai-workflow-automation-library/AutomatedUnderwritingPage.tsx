'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Clock, CheckCircle, MessageSquare, ChevronRight } from 'lucide-react'
import { openCalendly } from '../../lib/calendly'

// ── Shared helpers ────────────────────────────────────────────────────────────

function fade(delay = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.45, delay },
  }
}

// ── NodeBox ───────────────────────────────────────────────────────────────────

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

function ArrowDefs() {
  return (
    <defs>
      <marker id="arrow-uw" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
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

// ── Node icons ────────────────────────────────────────────────────────────────

// Application form — indigo
function ApplicationIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#6366F1">
      <rect x={cx - 11} y={cy - 14} width={22} height={28} rx={3} fill="white" opacity={0.9} />
      <line x1={cx - 7} y1={cy - 7} x2={cx + 7} y2={cy - 7} stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 7} y1={cy - 2} x2={cx + 7} y2={cy - 2} stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 7} y1={cy + 3} x2={cx + 3} y2={cy + 3} stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 7} y1={cy + 8} x2={cx + 5} y2={cy + 8} stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
    </NodeBox>
  )
}

// Credit bureau — dark blue
function CreditIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#1E40AF">
      {/* Shield icon */}
      <path d={`M${cx},${cy - 13} L${cx + 10},${cy - 8} L${cx + 10},${cy + 2} C${cx + 10},${cy + 8} ${cx + 5},${cy + 13} ${cx},${cy + 14} C${cx - 5},${cy + 13} ${cx - 10},${cy + 8} ${cx - 10},${cy + 2} L${cx - 10},${cy - 8} Z`} fill="white" opacity={0.9} />
      <text x={cx} y={cy + 5} textAnchor="middle" fill="#1E40AF" fontSize="11" fontWeight="800" fontFamily="Arial, sans-serif">C</text>
    </NodeBox>
  )
}

// AI Score — OpenAI green
function AIScoreIcon({ cx, cy }: { cx: number; cy: number }) {
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

// Decision engine — amber
function DecisionIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#FBBF24">
      {/* Fork/diamond */}
      <polygon points={`${cx},${cy - 13} ${cx + 13},${cy} ${cx},${cy + 13} ${cx - 13},${cy}`} fill="white" opacity={0.9} />
      <text x={cx} y={cy + 5} textAnchor="middle" fill="#FBBF24" fontSize="10" fontWeight="800" fontFamily="Arial, sans-serif">?</text>
    </NodeBox>
  )
}

// Decision letter — blue
function LetterIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#60A5FA">
      {/* Envelope */}
      <rect x={cx - 13} y={cy - 9} width={26} height={18} rx={2} fill="white" opacity={0.9} />
      <polyline points={`${cx - 13},${cy - 9} ${cx},${cy + 4} ${cx + 13},${cy - 9}`} fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinejoin="round" />
    </NodeBox>
  )
}

// CRM — HubSpot orange
function CRMIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#FF7A59">
      {/* HubSpot-style sprocket */}
      <circle cx={cx} cy={cy} r="8" fill="white" opacity={0.9} />
      <circle cx={cx} cy={cy} r="4" fill="#FF7A59" />
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const rad = (angle * Math.PI) / 180
        const x1 = cx + Math.cos(rad) * 8
        const y1 = cy + Math.sin(rad) * 8
        const x2 = cx + Math.cos(rad) * 13
        const y2 = cy + Math.sin(rad) * 13
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="3.5" strokeLinecap="round" />
      })}
    </NodeBox>
  )
}

// ── Hero diagram ──────────────────────────────────────────────────────────────

function HeroDiagram() {
  const stroke = '#D0CBC2'
  const sw = 1.8
  const ma = 'url(#arrow-uw)'
  const y = 100
  // 6 nodes across 700 wide
  const nodes = [55, 175, 295, 415, 535, 650]

  return (
    <svg viewBox="0 0 700 200" className="w-full" style={{ display: 'block' }}>
      <ArrowDefs />

      {nodes.slice(0, -1).map((x, i) => (
        <path key={i} d={`M${x + 28},${y} H${nodes[i + 1] - 28}`} stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      ))}

      <ApplicationIcon cx={nodes[0]} cy={y} />
      <NodeLabel cx={nodes[0]} cy={y} text="Application" sub="API / Form" />

      <CreditIcon cx={nodes[1]} cy={y} />
      <NodeLabel cx={nodes[1]} cy={y} text="Credit Bureau" sub="Experian / Equifax" />

      <AIScoreIcon cx={nodes[2]} cy={y} />
      <NodeLabel cx={nodes[2]} cy={y} text="AI Score" sub="Risk model" />

      <DecisionIcon cx={nodes[3]} cy={y} />
      <NodeLabel cx={nodes[3]} cy={y} text="Decision" sub="Approve / Review" />

      <LetterIcon cx={nodes[4]} cy={y} />
      <NodeLabel cx={nodes[4]} cy={y} text="Letter" sub="ECOA compliant" />

      <CRMIcon cx={nodes[5]} cy={y} />
      <NodeLabel cx={nodes[5]} cy={y} text="HubSpot CRM" sub="Audit trail" />

      {nodes.map((x, i) => (
        <g key={i}>
          <circle cx={x + 20} cy={y - 20} r={9} fill="#FF4F00" />
          <text x={x + 20} y={y - 16} textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="Inter, sans-serif">{i + 1}</text>
        </g>
      ))}
    </svg>
  )
}

// ── Page data ─────────────────────────────────────────────────────────────────

const outcomes = [
  { stat: '70%', label: 'faster decisions', sub: 'vs. manual review' },
  { stat: '<5 min', label: 'processing time', sub: 'per application' },
  { stat: 'Full', label: 'audit trail', sub: 'every decision logged' },
  { stat: 'CRM', label: 'auto-updated', sub: 'zero manual entry' },
]

const steps = [
  {
    num: 1,
    tool: 'API / Form',
    toolColor: '#6366F1',
    title: 'New loan application received via API or web form',
    detail: 'Applications arrive via a REST API endpoint (for lender integrations) or a branded web form. n8n validates required fields, assigns a unique application ID, and creates a record in HubSpot. The application payload is normalised into a standard schema before the pipeline continues.',
    tags: ['REST API', 'n8n Webhook', 'HubSpot CRM'],
  },
  {
    num: 2,
    tool: 'Credit Bureau API',
    toolColor: '#1E40AF',
    title: 'Credit bureau data pulled from Experian or Equifax in real-time',
    detail: 'Using the applicant\'s SSN and consent token, n8n calls the Experian or Equifax API to pull a full credit report: FICO score, payment history, debt-to-income components, open tradelines, derogatory marks, and public records. The call is logged with timestamp and bureau response code for the compliance audit trail.',
    tags: ['Experian API', 'Equifax API', 'FCRA compliant'],
  },
  {
    num: 3,
    tool: 'AI Risk Model',
    toolColor: '#10A37F',
    title: 'AI risk scoring model generates a score and written rationale',
    detail: 'A Python-based risk scoring model — trained on historical lending outcomes — combines the credit bureau data with the application fields (income, employment type, LTV, DTI) to produce a risk score from 0–100. GPT-4o then writes a plain-English underwriting rationale explaining the key factors driving the score, suitable for inclusion in the decision letter.',
    tags: ['Python ML model', 'GPT-4o rationale', 'DTI/LTV analysis'],
  },
  {
    num: 4,
    tool: 'Decision Engine',
    toolColor: '#FBBF24',
    title: 'Decision engine classifies into Approve / Manual Review / Decline',
    detail: 'Business rules defined by your credit policy map risk scores to decision outcomes: scores below 30 auto-approve (with conditions if required), scores 30–65 route to manual underwriter review, scores above 65 auto-decline. Thresholds are configurable per loan product and are version-controlled for audit purposes.',
    tags: ['Configurable thresholds', 'Product-level rules', 'Version controlled'],
  },
  {
    num: 5,
    tool: 'Decision Letter',
    toolColor: '#60A5FA',
    title: 'GPT-4o generates a compliant, personalised decision letter',
    detail: 'GPT-4o produces a formatted decision letter using the AI rationale, decision outcome, and any required regulatory language (adverse action notices for declines under ECOA). The letter is generated as a PDF, personalised with the applicant\'s name and loan details, and stored in the loan management system.',
    tags: ['ECOA compliant', 'PDF generation', 'Adverse action notice'],
  },
  {
    num: 6,
    tool: 'HubSpot CRM',
    toolColor: '#FF7A59',
    title: 'Decision, rationale, and letter logged to HubSpot with full audit trail',
    detail: 'The complete decision package is logged to the HubSpot deal record: AI risk score, decision outcome, GPT-4o rationale, bureau response, processing timestamp, model version, and a link to the decision letter PDF. This creates the regulatory-grade audit trail required for fair lending compliance reviews.',
    tags: ['HubSpot API', 'Full audit trail', 'Fair lending compliance'],
  },
]

const techStack = [
  { name: 'GPT-4o', role: 'AI risk rationale + decision letter', color: '#10A37F', desc: 'Writes a plain-English underwriting rationale from the risk model output. Generates ECOA-compliant decision letters with adverse action notices for declines.' },
  { name: 'Python / scikit-learn', role: 'ML risk scoring model', color: '#3776AB', desc: 'Trained risk scoring model that combines credit bureau data with application fields — income, LTV, DTI, employment type — to produce a 0–100 risk score.' },
  { name: 'n8n', role: 'Workflow orchestration', color: '#F65B2B', desc: 'Manages the full pipeline: API intake, credit bureau calls, model scoring, decision routing, letter generation, and CRM logging with error handling.' },
  { name: 'Experian API', role: 'Credit data', color: '#1E40AF', desc: 'Pulls full credit reports in real-time: FICO score, tradelines, derogatory marks, DTI components, and payment history. FCRA-compliant with consent token handling.' },
  { name: 'HubSpot', role: 'CRM + audit trail', color: '#FF7A59', desc: 'Stores the complete decision package against every deal record. Provides the regulatory-grade audit trail for fair lending examinations.' },
  { name: 'FastAPI', role: 'API endpoints', color: '#009688', desc: 'Python FastAPI service that hosts the risk scoring model endpoint. Receives normalised application data and returns a risk score with feature attribution.' },
]

const faq = [
  {
    q: 'Is the AI underwriting decision legally defensible?',
    a: 'The system is built to support human underwriting decisions, not replace them. For auto-decline scenarios, the decision letter includes an adverse action notice as required by ECOA. All decisions include a written AI rationale and are logged with model version and inputs — creating the documentation trail needed for fair lending examinations.',
  },
  {
    q: 'Can the risk model be calibrated to our credit policy?',
    a: 'Yes. During the scoping phase, we work with your credit team to define the risk score thresholds, decision rules per product, and any policy overlays (e.g. minimum FICO floors, maximum DTI caps). These are configured as versioned business rules — not hard-coded — so your credit team can adjust them without engineering involvement.',
  },
  {
    q: 'What credit bureaus do you integrate with?',
    a: 'The standard build integrates with Experian or Equifax via their developer APIs. TransUnion integration is available as an add-on. Tri-merge bureau pulls can also be configured for mortgage products that require all three bureaus.',
  },
  {
    q: 'How does the system handle exceptions and edge cases?',
    a: 'Any application where the AI confidence is below a configurable threshold, where bureau data is frozen or disputed, or where manual policy overlays apply is automatically routed to a human underwriter queue in HubSpot with all data pre-populated for review.',
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function AutomatedUnderwritingPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">

      {/* ── BREADCRUMB ──────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-0">
        <nav className="flex items-center gap-2 text-xs text-white/35">
          <Link href="/ai-workflow-automation-library" className="flex items-center gap-1 hover:text-white/70 transition-colors">
            <ArrowLeft size={12} /> AI Workflow Library
          </Link>
          <ChevronRight size={11} className="text-white/20" />
          <span className="text-white/55">Automated Underwriting Workflow</span>
        </nav>
      </div>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-4">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">

          {/* Left: text */}
          <div>
            <motion.div {...fade(0)}>
              <span className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide font-display"
                style={{ color: '#34D399', background: '#34D39918', border: '1px solid #34D39928' }}>
                FinTech
              </span>
            </motion.div>

            <motion.h1 {...fade(0.06)}
              className="mt-5 font-display text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.06] tracking-tight text-white">
              Automated Underwriting<br />
              <span className="bg-gradient-to-r from-[#FF4F00] to-[#FBBF24] bg-clip-text text-transparent">Workflow</span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-base leading-relaxed text-white/55 max-w-lg">
              A new loan application arrives. Within minutes — not days — this AI system pulls credit bureau data, runs a risk scoring model, makes an approve/review/decline decision, generates the decision letter, and logs everything to your CRM with a full audit trail.
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
              {['GPT-4o', 'Python', 'FastAPI', 'HubSpot', 'n8n', 'Experian API'].map(t => (
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
                className="inline-flex items-center gap-2 rounded-lg bg-[#FF4F00] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 font-display shadow-[0_4px_24px_rgba(255,79,0,0.30)] cursor-pointer"
              >
                Build this for my FinTech <ArrowRight size={15} />
              </button>
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
              Typical build: <span className="text-white/55 font-medium">4–6 week sprint · Fixed price · Zero delivery risk</span>
            </motion.p>
          </div>

          {/* Right: diagram */}
          <motion.div {...fade(0.1)} className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 shadow-2xl">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#34D399] animate-pulse" />
              <span className="text-[11px] font-medium text-white/40 font-display tracking-wide uppercase">Live workflow — triggers on application submission</span>
            </div>
            <HeroDiagram />
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-4">
              {[
                { label: 'Trigger', value: 'API / form submit' },
                { label: 'Avg runtime', value: '<5 minutes' },
                { label: 'Error handling', value: 'Human queue fallback' },
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
          <h2 className="mt-2 font-display text-3xl font-bold text-white">Why manual underwriting creates risk</h2>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Clock, title: 'Decisions take days, not minutes', desc: 'Manual underwriting queues mean borrowers wait 2–5 business days for a credit decision. At high volume, backlogs extend further — costing conversions and creating competitive disadvantage.' },
            { icon: CheckCircle, title: 'Inconsistent application of credit policy', desc: 'When underwriters make judgement calls manually, identical applications can receive different decisions depending on the reviewer. This inconsistency creates fair lending risk and compliance exposure.' },
            { icon: MessageSquare, title: 'Audit trails are incomplete or ad hoc', desc: 'Manual underwriting often leaves no structured audit record of what data was considered and why a decision was made. This is a significant liability during regulatory fair lending examinations.' },
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
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#FF4F00]/70 font-display">Tech stack</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-white">Every tool in the workflow</h2>
        </motion.div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
              <h2 className="mt-2 font-display text-3xl font-bold text-white">A 4–6 week sprint. Production ready.</h2>
              <p className="mt-4 text-white/50 text-sm leading-relaxed">
                Kovil AI scopes, builds, tests and deploys this workflow end-to-end. You don't touch n8n or the risk model until it's live and processing real applications.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {[
                  'Python risk scoring model trained on your historical lending data',
                  'Credit bureau API integration (Experian or Equifax)',
                  'Decision engine with configurable thresholds per loan product',
                  'GPT-4o prompt engineered for your underwriting rationale style',
                  'ECOA-compliant decision letter generation with adverse action notices',
                  'HubSpot CRM integration with complete audit trail',
                  'Human review queue for exceptions and edge cases',
                  '2-week handover: runbook, model documentation, support access',
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
                    4–6 weeks
                  </span>
                </div>
                {[
                  { week: 'Weeks 1–2', title: 'Risk model scoping & credit API setup', items: ['Historical data review', 'Credit bureau API credentials', 'Policy threshold definition'] },
                  { week: 'Weeks 3–4', title: 'Build scoring model & decision engine', items: ['Python ML model training', 'Decision rules configuration', 'n8n pipeline build'] },
                  { week: 'Weeks 5–6', title: 'Decision letter, CRM & compliance review', items: ['GPT-4o letter generation', 'HubSpot audit trail setup', 'Compliance documentation'] },
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

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="bg-[#0D0D0D] py-20">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div {...fade(0)} className="mb-10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] font-display" style={{ color: '#34D399B3' }}>FAQ</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-white">Common Questions</h2>
          </motion.div>
          <div className="divide-y divide-white/[0.06]">
            {faq.map((item, i) => (
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
            <div className="h-64 w-[500px] rounded-full bg-[#FF4F00] opacity-[0.07] blur-[80px]" />
          </div>
          <MessageSquare size={24} className="relative mx-auto mb-4 text-[#FF4F00]" />
          <h2 className="relative font-display text-[clamp(22px,3.5vw,36px)] font-bold text-white">
            Ready to ship this in 6 weeks?
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Book a 30-minute discovery call. We'll scope the risk model, credit bureau integrations, and compliance requirements for your lending products — fixed price, zero delivery risk.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={openCalendly}
              className="inline-flex items-center gap-2 rounded-xl bg-[#FF4F00] px-8 py-3.5 text-sm font-bold text-white shadow-[0_8px_32px_rgba(255,79,0,0.30)] hover:shadow-[0_8px_40px_rgba(255,79,0,0.45)] transition-all hover:opacity-95 font-display cursor-pointer"
            >
              Book a discovery call <ArrowRight size={16} />
            </button>
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
