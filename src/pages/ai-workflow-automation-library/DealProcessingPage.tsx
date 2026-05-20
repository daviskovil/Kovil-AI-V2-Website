'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Clock, CheckCircle, MessageSquare, ChevronRight, Zap } from 'lucide-react'
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
      <marker id="arrow-deal" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
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

// CRM Trigger — indigo
function CRMIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#6366F1">
      <rect x={cx - 12} y={cy - 10} width={24} height={20} rx={4} fill="white" opacity={0.9} />
      <line x1={cx - 8} y1={cy - 4} x2={cx + 8} y2={cy - 4} stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 8} y1={cy + 1} x2={cx + 2} y2={cy + 1} stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 8} y1={cy + 6} x2={cx + 5} y2={cy + 6} stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
    </NodeBox>
  )
}

// AI Scoring — orange
function ScoringIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#FF4F00">
      <circle cx={cx} cy={cy} r="12" stroke="white" strokeWidth="2" fill="none" opacity={0.9} />
      <path d={`M${cx - 5},${cy + 4} L${cx - 1},${cy - 2} L${cx + 3},${cy + 2} L${cx + 7},${cy - 6}`}
        fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </NodeBox>
  )
}

// Risk Check — amber
function RiskIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#FBBF24">
      <path d={`M${cx},${cy - 14} L${cx + 12},${cy + 8} L${cx - 12},${cy + 8} Z`}
        fill="white" opacity={0.9} />
      <line x1={cx} y1={cy - 4} x2={cx} y2={cy + 3} stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx={cx} cy={cy + 6} r="1.5" fill="#FBBF24" />
    </NodeBox>
  )
}

// Contract Gen — green
function ContractIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#10B981">
      <rect x={cx - 10} y={cy - 13} width={20} height={26} rx={3} fill="white" opacity={0.9} />
      <line x1={cx - 6} y1={cy - 7} x2={cx + 6} y2={cy - 7} stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" />
      <line x1={cx - 6} y1={cy - 2} x2={cx + 6} y2={cy - 2} stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" />
      <polyline points={`${cx - 6},${cy + 5} ${cx - 3},${cy + 8} ${cx + 6},${cy - 1}`}
        fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </NodeBox>
  )
}

// Notify — purple
function NotifyIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#8B5CF6">
      <path d={`M${cx},${cy - 13} C${cx - 8},${cy - 13} ${cx - 11},${cy - 7} ${cx - 11},${cy} L${cx - 11},${cy + 5} L${cx + 11},${cy + 5} L${cx + 11},${cy} C${cx + 11},${cy - 7} ${cx + 8},${cy - 13} ${cx},${cy - 13}`}
        fill="white" opacity={0.9} />
      <line x1={cx - 4} y1={cy + 5} x2={cx + 4} y2={cy + 5} stroke="white" strokeWidth="2" strokeLinecap="round" />
      <rect x={cx - 3} y={cy + 7} width={6} height={4} rx={3} fill="white" opacity={0.9} />
    </NodeBox>
  )
}

// ── Hero diagram ──────────────────────────────────────────────────────────────

function HeroDiagram() {
  const stroke = '#D0CBC2'
  const sw = 1.8
  const ma = 'url(#arrow-deal)'
  const nodes = [70, 210, 350, 490, 630]
  const y = 100

  return (
    <svg viewBox="0 0 700 200" className="w-full" style={{ display: 'block' }}>
      <ArrowDefs />
      <path d={`M${nodes[0] + 28},${y} H${nodes[1] - 28}`} stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      <path d={`M${nodes[1] + 28},${y} H${nodes[2] - 28}`} stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      <path d={`M${nodes[2] + 28},${y} H${nodes[3] - 28}`} stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      <path d={`M${nodes[3] + 28},${y} H${nodes[4] - 28}`} stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      <CRMIcon cx={nodes[0]} cy={y} />
      <NodeLabel cx={nodes[0]} cy={y} text="CRM Trigger" sub="Stage change" />

      <ScoringIcon cx={nodes[1]} cy={y} />
      <NodeLabel cx={nodes[1]} cy={y} text="AI Scoring" sub="GPT-4o analysis" />

      <RiskIcon cx={nodes[2]} cy={y} />
      <NodeLabel cx={nodes[2]} cy={y} text="Risk Check" sub="Policy gate" />

      <ContractIcon cx={nodes[3]} cy={y} />
      <NodeLabel cx={nodes[3]} cy={y} text="Contract Gen" sub="Docusign ready" />

      <NotifyIcon cx={nodes[4]} cy={y} />
      <NodeLabel cx={nodes[4]} cy={y} text="Team Notify" sub="Slack / Email" />

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
  { stat: '85%', label: 'faster deal closure', sub: 'vs. manual workflows' },
  { stat: '<5 min', label: 'contract generation', sub: 'from deal approval' },
  { stat: '3×', label: 'deal capacity', sub: 'same headcount' },
  { stat: '0', label: 'missed compliance checks', sub: 'policy gates enforced' },
]

const steps = [
  {
    num: 1,
    tool: 'CRM Webhook (Salesforce / HubSpot)',
    toolColor: '#6366F1',
    title: 'Deal stage change in CRM fires the automation',
    detail: 'When a deal moves to a qualifying stage (e.g. "Term Sheet Sent" or "Under Review"), Salesforce or HubSpot fires a webhook to n8n. The trigger payload includes the deal ID, account data, deal size, associated contacts, and the full deal history from the CRM. This is the sole entry point — no manual intervention needed.',
    tags: ['Salesforce webhook', 'HubSpot webhook', 'n8n Webhook node'],
  },
  {
    num: 2,
    tool: 'GPT-4o Deal Scoring',
    toolColor: '#FF4F00',
    title: 'AI analyses the deal and generates a structured score',
    detail: 'n8n enriches the CRM record with any attached documents (pitch decks, financials, legal memos) and passes the full context to GPT-4o. The model returns a structured JSON containing: deal_quality_score (0–100), risk_flags (array), key_strengths (array), recommended_terms, and a plain-English deal summary for the deal team. The prompt is calibrated against your historical closed-won deals.',
    tags: ['GPT-4o', 'Structured JSON output', 'Document parsing'],
  },
  {
    num: 3,
    tool: 'Policy Risk Gate',
    toolColor: '#FBBF24',
    title: 'Automated compliance and policy checks before contract generation',
    detail: 'The risk gate evaluates the AI score and flags against configurable business rules: minimum deal size, jurisdiction restrictions, required due diligence documents, counterparty sanctions screening, and internal approval thresholds. Deals that fail any hard gate are routed to a senior approver with a detailed flag summary. Deals that pass continue automatically.',
    tags: ['Business rules engine', 'Sanctions screening', 'Approval routing'],
  },
  {
    num: 4,
    tool: 'Contract Generator',
    toolColor: '#10B981',
    title: 'Personalised contract generated from approved deal terms',
    detail: 'For deals that pass the risk gate, n8n pulls the appropriate contract template from a template library (stored in Google Docs or your document management system). GPT-4o populates all variable fields — counterparty name, deal size, payment terms, governing law, custom clauses — using the structured deal data from the CRM. The filled contract is then sent to DocuSign or Adobe Sign for e-signature.',
    tags: ['GPT-4o contract fill', 'DocuSign API', 'Google Docs templates'],
  },
  {
    num: 5,
    tool: 'DocuSign / E-signature',
    toolColor: '#FFD700',
    title: 'Contract sent for e-signature with automated chase reminders',
    detail: 'The generated contract is sent via DocuSign to all required signatories with personalised cover notes. n8n monitors the DocuSign webhook for status updates. If a signer has not signed after a configurable window (e.g. 48 hours), an automated reminder email is sent. When fully executed, the signed PDF is stored back in the CRM record and a completion webhook fires to update the deal stage.',
    tags: ['DocuSign API', 'Automated reminders', 'CRM sync'],
  },
  {
    num: 6,
    tool: 'CRM Update + Slack Notification',
    toolColor: '#8B5CF6',
    title: 'Deal record updated and team notified of completion',
    detail: 'When the contract is executed, n8n writes the outcome back to the CRM: deal stage updated to "Contract Signed", signed document attached, next action task created, and revenue forecast updated. A structured Slack notification is sent to the deal team channel and the relevant manager with a summary of the deal, terms, and a direct link to the CRM record.',
    tags: ['CRM write-back', 'Slack API', 'Task creation'],
  },
  {
    num: 7,
    tool: 'Audit Log',
    toolColor: '#6366F1',
    title: 'Full decision trail logged for compliance and reporting',
    detail: 'Every step — CRM trigger, AI score output, risk gate decisions, contract version used, e-signature timestamps, and all system interactions — is written to an immutable audit log. This provides complete traceability for regulatory purposes, internal audit, and deal performance analysis. Logs are queryable by deal ID, date range, deal owner, and outcome.',
    tags: ['Immutable audit trail', 'Regulatory compliance', 'Deal analytics'],
  },
]

const techStack = [
  { name: 'Salesforce / HubSpot', role: 'CRM trigger & sync', color: '#00A1E0', desc: 'Fires the automation on deal stage change and receives enriched deal data, contract attachments, and stage updates on completion.' },
  { name: 'GPT-4o', role: 'Deal scoring & contract fill', color: '#10A37F', desc: 'Analyses deal context, generates quality scores with risk flags, and populates contract templates with structured deal data.' },
  { name: 'n8n', role: 'Workflow orchestration', color: '#F65B2B', desc: 'Manages the full pipeline: CRM webhooks, API calls, risk gate logic, DocuSign integration, and all notifications.' },
  { name: 'DocuSign / Adobe Sign', role: 'E-signature', color: '#FFD700', desc: 'Sends executed contracts to signatories, monitors signature status, fires reminders, and delivers the signed PDF back to the CRM.' },
  { name: 'Slack', role: 'Team notifications', color: '#4A154B', desc: 'Structured deal alerts: new high-scoring deals, risk flag escalations, contract sent/signed notifications, and deal close summaries.' },
  { name: 'Google Docs / SharePoint', role: 'Contract templates', color: '#4285F4', desc: 'Stores versioned contract templates. GPT-4o populates variables; the filled document is exported to PDF for e-signature.' },
]

const faq = [
  {
    q: 'Which CRM systems does this work with?',
    a: 'The standard build supports Salesforce and HubSpot via native n8n connectors. Pipedrive, Zoho CRM, and Microsoft Dynamics are also supported. For enterprise systems without native connectors, we use REST API or webhook integration. We document and test all CRM integrations during the scoping phase.',
  },
  {
    q: 'How is the AI scoring model calibrated for our deal types?',
    a: 'During the build sprint, we run a calibration session using your last 12–24 months of closed deals. We extract patterns from closed-won and closed-lost deals to calibrate the GPT-4o scoring prompt. The prompt includes your specific deal criteria, minimum thresholds, and any product- or market-specific risk factors your team cares about.',
  },
  {
    q: 'Can we customise the risk gate rules without engineering help?',
    a: 'Yes. Business rules are stored as configurable parameters in n8n — not hardcoded. Deal size thresholds, required documents, jurisdiction restrictions, and approval routing can all be updated by an admin without touching code. We document every configurable parameter and provide a runbook during the handover.',
  },
  {
    q: 'What happens if a contract needs non-standard terms?',
    a: 'The workflow supports a "manual review" routing path. If the AI detects a deal that falls outside standard parameters (e.g. an unusual jurisdiction, non-standard payment terms, or a high-value deal above a threshold), it routes to a deal desk team member for manual contract review before e-signature. The deal is not blocked — it\'s queued with full context.',
  },
  {
    q: 'Is the audit log sufficient for financial regulatory requirements?',
    a: 'The audit log captures: deal ID, CRM trigger timestamp, AI score output with model version, risk gate decision with flag details, contract template version used, DocuSign envelope ID and signature timestamps, and all system actor credentials. This satisfies most financial services deal documentation requirements. We can extend logging to meet specific regulatory standards during the build.',
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function DealProcessingPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">

      {/* ── BREADCRUMB ──────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-0">
        <nav className="flex items-center gap-2 text-xs text-white/35">
          <Link href="/ai-workflow-automation-library" className="flex items-center gap-1 hover:text-white/70 transition-colors">
            <ArrowLeft size={12} /> AI Workflow Library
          </Link>
          <ChevronRight size={11} className="text-white/20" />
          <span className="text-white/55">Deal Processing Automation</span>
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
              Deal Processing<br />
              <span className="bg-gradient-to-r from-[#FF4F00] to-[#FBBF24] bg-clip-text text-transparent">Automation</span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-base leading-relaxed text-white/55 max-w-lg">
              When a deal moves stage in Salesforce or HubSpot, this GPT-4o + n8n pipeline scores the opportunity, runs compliance gates, generates a personalised contract, and sends it for e-signature — all before a deal team member needs to lift a finger.
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
              {['GPT-4o', 'n8n', 'Salesforce', 'HubSpot', 'DocuSign'].map(t => (
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
              Typical build: <span className="text-white/55 font-medium">3–4 week sprint · Fixed price · Zero delivery risk</span>
            </motion.p>
          </div>

          {/* Right: diagram */}
          <motion.div {...fade(0.1)} className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 shadow-2xl">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#34D399] animate-pulse" />
              <span className="text-[11px] font-medium text-white/40 font-display tracking-wide uppercase">Live workflow — triggers on CRM stage change</span>
            </div>
            <HeroDiagram />
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-4">
              {[
                { label: 'Trigger', value: 'CRM stage change' },
                { label: 'Avg runtime', value: '<5 minutes' },
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
          <h2 className="mt-2 font-display text-3xl font-bold text-white">Why deals slip through the cracks</h2>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Clock, title: 'Days lost on manual deal admin', desc: 'Deal teams spend 3–5 hours per deal on manual tasks: chasing documents, drafting contracts from templates, and coordinating signatures. This slows velocity and limits how many deals a team can run in parallel.' },
            { icon: Zap, title: 'Compliance gaps under pressure', desc: 'When deals move fast, compliance checks get rushed or skipped. Manual policy gates are inconsistent — one deal manager may require a document another overlooks. Every missed check is a regulatory exposure.' },
            { icon: MessageSquare, title: 'No visibility into deal pipeline', desc: 'Without structured deal data, management has no reliable view of pipeline quality, average deal velocity, or which stage causes the most attrition. Gut feel replaces data-driven forecasting.' },
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
              <h2 className="mt-2 font-display text-3xl font-bold text-white">A 3–4 week sprint. Production ready.</h2>
              <p className="mt-4 text-white/50 text-sm leading-relaxed">
                Kovil AI scopes, builds, tests and deploys this workflow end-to-end. You don't touch n8n until it's live and processing real deals.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {[
                  'CRM webhook configured for your deal stages (Salesforce or HubSpot)',
                  'GPT-4o scoring prompt calibrated against your closed deals',
                  'Policy risk gate with your compliance rules and approval routing',
                  'Contract templates imported and variable mapping configured',
                  'DocuSign integration with automated reminder sequences',
                  'CRM write-back on contract signed event',
                  'Slack notifications to deal team and management channels',
                  'Immutable audit log for all deal processing decisions',
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
                    3–4 weeks
                  </span>
                </div>
                {[
                  { week: 'Week 1', title: 'Scoping & CRM access', items: ['CRM webhook + API credentials', 'Deal stage mapping', 'Contract template review'] },
                  { week: 'Week 2', title: 'AI scoring & risk gate build', items: ['GPT-4o prompt calibration', 'Risk gate rules configured', 'DocuSign integration'] },
                  { week: 'Weeks 3–4', title: 'Deploy, test & handover', items: ['End-to-end pipeline testing', 'Production deployment', 'Documentation & runbook'] },
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
          <Zap size={24} className="relative mx-auto mb-4 text-[#FF4F00]" />
          <h2 className="relative font-display text-[clamp(22px,3.5vw,36px)] font-bold text-white">
            Ready to automate your deal pipeline?
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Book a 30-minute discovery call. We'll scope the deal automation for your CRM, contract templates, and compliance requirements — fixed price, zero delivery risk.
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
            Typical sprint: 3–4 weeks · Fixed-price · Fully managed delivery · Post-launch support included
          </p>
        </motion.div>
      </section>

    </div>
  )
}
