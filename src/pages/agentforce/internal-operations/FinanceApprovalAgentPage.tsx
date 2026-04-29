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
      <marker id="arrow-finance" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <polygon points="0,0 0,6 8,3" fill="#D0CBC2" />
      </marker>
    </defs>
  )
}

function HeroDiagram() {
  const stroke = '#D0CBC2'
  const sw = 1.8
  const ma = 'url(#arrow-finance)'

  return (
    <svg viewBox="0 0 820 230" className="w-full" style={{ display: 'block' }}>
      <ArrowDefs />

      {/* Submit → Policy Check */}
      <path d="M84,110 H127" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Policy Check → Route (passing) */}
      <path d="M183,82 L183,62 H312 V84" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Policy Check → Exception (failing, dashed) */}
      <path d="M183,138 L183,180 H248 V190" stroke={stroke} strokeWidth={sw} fill="none" strokeDasharray="5,3" markerEnd={ma} />
      {/* Route → Approver */}
      <path d="M368,110 H411" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Approver → SLA Check */}
      <path d="M495,110 H524" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* SLA Check → Nudge (dashed, loop back) */}
      <path d="M552,82 L552,52 H453,453 V84" stroke={stroke} strokeWidth={sw} fill="none" strokeDasharray="5,3" markerEnd={ma} />
      {/* SLA Check → ERP Log (approved path) */}
      <path d="M580,110 H623" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* ERP Log → Notify */}
      <path d="M707,110 H750" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* Nodes */}
      <NodeBox cx={56} cy={110} bg="#FF4F00">
        <text x={56} y={115} textAnchor="middle" fill="white" fontSize="10" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">INV</text>
      </NodeBox>
      <NodeLabel cx={56} cy={110} text="Submit" sub="invoice/expense" />

      {/* Policy Check diamond */}
      <g>
        <polygon
          points={`${155},${82} ${183},${110} ${155},${138} ${127},${110}`}
          fill="#D97706"
        />
        <text x={155} y={114} textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif">?</text>
      </g>
      <NodeLabel cx={155} cy={110} text="Policy?" sub="check" />

      {/* Exception node (below, dashed) */}
      <NodeBox cx={248} cy={193} bg="#EF4444">
        <text x={248} y={197} textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif">EXC</text>
      </NodeBox>
      <NodeLabel cx={248} cy={193} text="Exception" sub="flagged" />

      <NodeBox cx={340} cy={110} bg={SF_BLUE}>
        <text x={340} y={106} textAnchor="middle" fill="white" fontSize="9" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">ROUTE</text>
      </NodeBox>
      <NodeLabel cx={340} cy={110} text="Approval" sub="Routing" />

      <NodeBox cx={453} cy={110} bg="#10A37F">
        <text x={453} y={115} textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">✓?</text>
      </NodeBox>
      <NodeLabel cx={453} cy={110} text="Approver" sub="action" />

      {/* SLA diamond */}
      <g>
        <polygon
          points={`${524},${82} ${552},${110} ${524},${138} ${496},${110}`}
          fill="#D97706"
        />
        <text x={524} y={114} textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="Inter, sans-serif">SLA</text>
      </g>
      <NodeLabel cx={524} cy={110} text="In time?" sub="" />

      <NodeBox cx={651} cy={110} bg="#0F172A" border="#334155">
        <text x={651} y={115} textAnchor="middle" fill="white" fontSize="10" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">ERP</text>
      </NodeBox>
      <NodeLabel cx={651} cy={110} text="ERP" sub="Log" />

      <NodeBox cx={765} cy={110} bg={SF_BLUE}>
        <text x={765} y={115} textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif">DONE</text>
      </NodeBox>
      <NodeLabel cx={765} cy={110} text="Notify" sub="submitter" />

      {/* Step badges */}
      {([
        [56, 110, '1'], [155, 110, '2'], [340, 110, '3'], [453, 110, '4'],
      ] as [number, number, string][]).map(([x, y, n]) => (
        <g key={n}>
          <circle cx={x + 20} cy={y - 20} r={9} fill={SF_BLUE} />
          <text x={x + 20} y={y - 16} textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="Inter, sans-serif">{n}</text>
        </g>
      ))}

      {/* Branch labels */}
      <text x={248} y={68} textAnchor="middle" fontSize="8" fill="#78716C" fontFamily="Inter, sans-serif">within policy ✓</text>
      <text x={200} y={200} textAnchor="middle" fontSize="8" fill="#78716C" fontFamily="Inter, sans-serif">exception →</text>
      <text x={490} y={42} textAnchor="middle" fontSize="8" fill="#78716C" fontFamily="Inter, sans-serif">SLA breach →</text>
    </svg>
  )
}

// ── Step data ─────────────────────────────────────────────────────────────────

const steps = [
  {
    num: 1,
    tool: 'Submission & Document Capture',
    toolColor: '#FF4F00',
    title: 'Invoice or expense submitted via any channel — agent captures and structures it',
    detail: 'The Finance Approval Agent accepts submissions from multiple channels: expense claims submitted via the Salesforce employee portal, invoices forwarded to a designated email address (parsed via email-to-case), purchase order attachments uploaded via the finance portal, and direct API submission from integrated procurement systems. The agent uses Prompt Builder to extract and structure key fields from submitted documents: vendor name, invoice amount, date, cost centre, budget code, and line item breakdown. Structured data is written to a Finance Request record in Salesforce. Unreadable or incomplete submissions are flagged back to the submitter with specific fields missing.',
    tags: ['Multi-channel Intake', 'Email Parsing', 'Employee Portal', 'Document Extraction', 'Prompt Builder', 'Finance Request Record', 'Incomplete Flag'],
  },
  {
    num: 2,
    tool: 'Policy Validation',
    toolColor: '#D97706',
    title: 'Every submission validated against finance policy before routing begins',
    detail: 'Atlas Reasoning Engine runs a policy validation pass on every submission before it enters the approval queue. Validation checks include: amount within the submitter\'s authorised limit for the expense category, vendor on the approved vendor list (for invoices), budget code valid and has remaining budget, receipt attached for claims above the configured threshold, duplicate detection (same vendor, same amount, same period — flags for ops review), and any cost centre-specific rules configured during implementation. Submissions passing all checks proceed to routing. Exceptions — submissions outside policy parameters — are flagged with the specific rule breached and routed to the finance exceptions queue rather than the standard approval chain.',
    tags: ['Policy Validation', 'Atlas Reasoning Engine', 'Authorised Limit Check', 'Vendor Approved List', 'Budget Code Validation', 'Duplicate Detection', 'Exception Flagging'],
  },
  {
    num: 3,
    tool: 'Intelligent Approval Routing',
    toolColor: SF_BLUE,
    title: 'Routing decision made based on amount, category, cost centre, and submitter',
    detail: 'Approval routing logic is configured per client during implementation and typically covers: single-approver for claims below a threshold (line manager only), dual-approver for claims above the threshold (line manager + department head), VP approval for claims above the senior threshold, finance director sign-off for capital expenditure and strategic vendor contracts, and parallel routing for claims touching multiple cost centres (all relevant cost centre owners approve simultaneously). The routing decision is logged on the Finance Request record. Approvers receive a structured approval request via Slack and email — with the submission details, policy validation result, and a one-click approve/reject action.',
    tags: ['Routing Logic', 'Amount Thresholds', 'Parallel Approval', 'Salesforce Approval Process', 'Slack Approval Request', 'One-click Action', 'Routing Audit Log'],
  },
  {
    num: 4,
    tool: 'SLA Enforcement & Approver Chasing',
    toolColor: '#8B5CF6',
    title: 'Approvers automatically chased — escalated to their manager if SLA is missed',
    detail: 'Every approval request has a configured SLA: typically 24 hours for standard claims, 4 hours for urgent-flagged submissions. The agent monitors all pending approvals against their SLA timers. At 75% of the SLA window, a Slack reminder fires to the approver. At 100% (breach), two things happen simultaneously: a second reminder to the approver and an escalation notification to their manager with the specific request and the SLA breach detail. If the SLA is missed by a second configured window, the escalation moves to the finance team lead. No approval request sits unactioned — the system keeps escalating until someone acts.',
    tags: ['SLA Enforcement', 'Automated Chasing', 'Manager Escalation', 'Slack Reminders', 'Urgent Flag', 'Escalation Chain', 'Breach Logging'],
  },
  {
    num: 5,
    tool: 'ERP Logging & Budget Update',
    toolColor: '#0F172A',
    title: 'Approved transactions logged to ERP and budget records updated automatically',
    detail: 'When an approval is completed, the agent triggers the ERP write: the approved transaction is posted to the configured ERP system (SAP, NetSuite, Xero, or QuickBooks) via Salesforce Flow calling the ERP API. The budget record for the relevant cost centre is updated — remaining budget decremented by the approved amount. The Finance Request record in Salesforce is updated to Approved status with the approver name, approval timestamp, and ERP transaction reference. For invoices, a payment instruction is generated in the ERP with the correct payment terms and bank details from the approved vendor record.',
    tags: ['ERP Integration', 'SAP', 'NetSuite', 'Xero', 'Budget Decrement', 'Payment Instruction', 'Approval Timestamp', 'Transaction Reference'],
  },
  {
    num: 6,
    tool: 'Submitter Notification & Audit Trail',
    toolColor: SF_BLUE,
    title: 'Submitter notified of outcome — full audit trail maintained in Salesforce',
    detail: 'On approval or rejection, the submitter receives an immediate notification via Slack and email: approved (with ERP reference number and expected payment date), or rejected (with the specific rejection reason and next steps). Rejected submissions can be resubmitted with corrections — the agent processes the resubmission as a new validation pass. Every finance request maintains a complete audit trail in Salesforce: submission timestamp, validation result, routing decision, approver actions with timestamps, SLA compliance, and ERP write confirmation. The audit trail is exportable for external audit purposes and is retained per your configured data retention policy.',
    tags: ['Submitter Notification', 'Rejection Reason', 'Resubmission Flow', 'Audit Trail', 'Salesforce Record', 'Export for Audit', 'Data Retention'],
  },
]

// ── Tech stack ────────────────────────────────────────────────────────────────

const techStack = [
  { name: 'Atlas Reasoning Engine', role: 'Policy validation', color: SF_BLUE, desc: 'Runs every submission through your finance policy rules — amount limits, vendor validation, budget code checks, duplicate detection — before routing begins.' },
  { name: 'Salesforce Approval Process', role: 'Routing engine', color: '#10A37F', desc: 'Routes every request through the correct approval chain based on amount, category, and cost centre — with full audit trail and one-click approve/reject.' },
  { name: 'Salesforce Flow', role: 'ERP integration', color: '#FF4F00', desc: 'Triggers ERP writes on approval — posting transactions to SAP, NetSuite, Xero, or QuickBooks and updating budget records automatically.' },
  { name: 'Slack', role: 'Approver workflow', color: '#4A154B', desc: 'Delivers structured approval requests, SLA reminders, and escalation alerts to approvers — with one-click approve/reject actions from within Slack.' },
  { name: 'Prompt Builder', role: 'Document extraction', color: '#8B5CF6', desc: 'Extracts and structures key fields from submitted invoices and expense documents — converting unstructured PDFs into structured Finance Request records.' },
  { name: 'Einstein Trust Layer', role: 'Financial data security', color: '#0F172A', desc: 'Keeps all financial data — invoice amounts, vendor details, payment information — within Salesforce\'s trust boundary during AI processing.' },
  { name: 'ERP Systems', role: 'Transaction posting', color: '#D97706', desc: 'Target systems where approved transactions are posted: SAP, NetSuite, Xero, QuickBooks — integrated via Salesforce Flow API calls.' },
]

// ── Outcomes ──────────────────────────────────────────────────────────────────

const outcomes = [
  { stat: '75%', label: 'faster approval cycle', sub: 'vs email-based routing' },
  { stat: '100%', label: 'policy validation', sub: 'before any approval' },
  { stat: 'Zero', label: 'exceptions missed', sub: 'automated escalation' },
  { stat: '< 1 day', label: 'average approval time', sub: 'for standard claims' },
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

export default function FinanceApprovalAgentPage() {
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
          <span className="text-white/35">Internal Operations</span>
          <ChevronRight size={11} className="text-white/20" />
          <span className="text-white/55">Finance Approval Agent</span>
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
                Internal Operations
              </span>
            </motion.div>

            <motion.h1 {...fade(0.06)}
              className="mt-5 font-display text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.06] tracking-tight text-white">
              Finance Approval Agent —<br />
              <span className="bg-gradient-to-r from-[#00A1E0] to-[#0077B6] bg-clip-text text-transparent">Invoices and Expenses Approved Without the Bottleneck</span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-base leading-relaxed text-white/55 max-w-lg">
              Routes every invoice and expense claim through the correct approval chain automatically — validating against policy, escalating exceptions, chasing approvers who do not act within SLA, and logging approved transactions to your ERP. Finance compliance at scale, with zero manual routing.
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
              {['Atlas Reasoning Engine', 'Salesforce Flow', 'Approval Process', 'Slack Integration', 'Einstein Trust Layer', 'ERP Integration', 'Prompt Builder'].map(t => (
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
              <span className="text-[11px] font-medium text-white/40 font-display tracking-wide uppercase">Agentforce reasoning flow — submission to ERP in hours</span>
            </div>
            <HeroDiagram />
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-4">
              {[
                { label: 'Policy validation', value: '100% coverage' },
                { label: 'SLA enforcement', value: 'Automated' },
                { label: 'ERP posting', value: 'On approval' },
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
                Kovil AI scopes, builds, tests and deploys this Agentforce configuration end-to-end. You do not touch Agent Builder until it is live and processing approvals automatically.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {[
                  'Finance Approval Agent with multi-channel submission intake',
                  'Policy validation engine with configurable rules per category and cost centre',
                  'Approval routing logic with amount thresholds and parallel approval support',
                  'SLA enforcement with automated chasing and manager escalation chain',
                  'ERP integration for transaction posting and budget decrement',
                  'Slack approval workflow with one-click approve/reject',
                  'Full audit trail on every Finance Request record',
                  'Resubmission flow for rejected claims',
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
                  { week: 'Week 1', title: 'Intake + validation', items: ['Multi-channel submission setup, document extraction, Atlas policy validation rules'] },
                  { week: 'Week 2', title: 'Routing + SLA', items: ['Approval Process configuration, Slack approval requests, SLA chasing and escalation'] },
                  { week: 'Week 3', title: 'ERP + audit + deploy', items: ['ERP write integration, budget update, audit trail, production deployment'] },
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
                q: 'Which ERP systems does the integration support?',
                a: 'We configure integrations with SAP (via REST API or BAPIs), NetSuite (SuiteQL API), Xero (Xero API), and QuickBooks Online (QuickBooks API). These cover the majority of mid-market and enterprise finance stacks. For other ERP systems, we assess API availability in Week 1. If no direct API is available, we use a middleware approach via MuleSoft or Salesforce Connect.',
              },
              {
                q: 'How does the policy validation handle edge cases?',
                a: 'Submissions that fall into edge cases — amounts at the exact threshold boundary, new vendor types not explicitly listed, cost codes recently restructured — are routed to the finance exceptions queue for human review rather than automatically approved or rejected. The agent flags the specific ambiguity with context so the finance team can make a judgement call. The decision is then fed back to refine the policy rules — over time, edge cases reduce as the rule set matures.',
              },
              {
                q: 'Can it handle multi-currency submissions?',
                a: 'Yes. Multi-currency submissions are converted to the base reporting currency using the exchange rate configured in Salesforce (either a fixed rate or a live rate feed). The policy threshold checks run against the converted amount. The original currency and amount are preserved on the Finance Request record alongside the converted amount for audit purposes.',
              },
              {
                q: 'What is the approval SLA and can we configure it?',
                a: 'All SLA windows are configured during implementation. Standard defaults are: 24 hours for claims below the standard threshold, 8 hours for above-threshold claims, and 4 hours for flagged urgent submissions. Every SLA window, reminder timing (75% threshold), and escalation chain (who gets notified at breach) is fully configurable per approval tier and cost centre.',
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
            Finance approvals done in hours, not days.
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Book a 30-minute discovery call. We&apos;ll audit your current approval process, map your policy rules, and scope a 3-week fixed-price Agentforce implementation — from submission to ERP posting, fully automated.
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
