'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Clock, CheckCircle, ChevronRight, MessageSquare, Shield, AlertTriangle, FileSearch } from 'lucide-react'
import { openCalendly } from '../../lib/calendly'

// ── Brand-coloured node icons for the hero diagram ────────────────────────────

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

// Upload / ID icon
function UploadIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#6366F1">
      {/* Document with up-arrow */}
      <rect x={cx - 10} y={cy - 14} width={20} height={24} rx={3} fill="white" opacity={0.9} />
      <polyline points={`${cx - 5},${cy - 4} ${cx},${cy - 10} ${cx + 5},${cy - 4}`} fill="none" stroke="#6366F1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1={cx} y1={cy - 10} x2={cx} y2={cy + 2} stroke="#6366F1" strokeWidth="2.2" strokeLinecap="round" />
    </NodeBox>
  )
}

// OpenAI / GPT-4o Vision
function OpenAIVisionIcon({ cx, cy }: { cx: number; cy: number }) {
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

// AML Shield icon
function AMLIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#1E40AF">
      {/* Shield shape */}
      <path d={`M${cx},${cy - 14} L${cx + 11},${cy - 8} L${cx + 11},${cy + 4} Q${cx + 11},${cy + 14} ${cx},${cy + 16} Q${cx - 11},${cy + 14} ${cx - 11},${cy + 4} L${cx - 11},${cy - 8} Z`}
        fill="white" opacity={0.9} />
      <text x={cx} y={cy + 6} textAnchor="middle" fill="#1E40AF" fontSize="12" fontWeight="800" fontFamily="Inter, sans-serif">✓</text>
    </NodeBox>
  )
}

// Risk score / gauge icon
function RiskIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#FBBF24">
      {/* Gauge arc */}
      <path d={`M${cx - 12},${cy + 6} A14,14 0 0,1 ${cx + 12},${cy + 6}`} stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
      <line x1={cx} y1={cy + 6} x2={cx + 8} y2={cy - 4} stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx={cx} cy={cy + 6} r="3" fill="white" />
      {/* Tick marks */}
      <line x1={cx - 12} y1={cy + 6} x2={cx - 10} y2={cy + 6} stroke="white" strokeWidth="2" />
      <line x1={cx + 12} y1={cy + 6} x2={cx + 10} y2={cy + 6} stroke="white" strokeWidth="2" />
    </NodeBox>
  )
}

// Decision / routing icon
function DecisionIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#22C55E">
      {/* Diamond / fork */}
      <polygon points={`${cx},${cy - 14} ${cx + 12},${cy} ${cx},${cy + 14} ${cx - 12},${cy}`} fill="white" opacity={0.9} />
      <line x1={cx + 12} y1={cy} x2={cx + 18} y2={cy - 8} stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx + 12} y1={cy} x2={cx + 18} y2={cy + 8} stroke="white" strokeWidth="2" strokeLinecap="round" />
    </NodeBox>
  )
}

// Audit log icon
function AuditIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#6366F1">
      {/* Log/list doc */}
      <rect x={cx - 12} y={cy - 14} width={24} height={28} rx={3} fill="white" opacity={0.9} />
      <line x1={cx - 7} y1={cy - 6} x2={cx + 7} y2={cy - 6} stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 7} y1={cy} x2={cx + 7} y2={cy} stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 7} y1={cy + 6} x2={cx + 3} y2={cy + 6} stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
    </NodeBox>
  )
}

// Arrow marker definition
function ArrowDefs() {
  return (
    <defs>
      <marker id="arrow-kyc" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <polygon points="0,0 0,6 8,3" fill="#D0CBC2" />
      </marker>
    </defs>
  )
}

// Node label below each node
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

// ── Hero workflow diagram ──────────────────────────────────────────────────────
// 5 nodes linear: ID Upload → AI Extract → AML Check → Risk Score → Decision + Audit branch

function HeroDiagram() {
  const stroke = '#D0CBC2'
  const sw = 1.8
  const ma = 'url(#arrow-kyc)'

  return (
    <svg viewBox="0 0 820 220" className="w-full" style={{ display: 'block' }}>
      <ArrowDefs />

      {/* ── Connection paths ── */}
      {/* Upload → Extract */}
      <path d="M116,110 H180" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Extract → AML */}
      <path d="M264,110 H328" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* AML → Risk */}
      <path d="M412,110 H476" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Risk → Decision */}
      <path d="M560,110 H624" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Decision → Audit (branch down) */}
      <path d="M680,138 C680,160 680,160 680,170" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Decision → Approve (branch up-right invisible label) */}
      <path d="M708,110 H760" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* ── Nodes ── */}
      <UploadIcon cx={88} cy={110} />
      <NodeLabel cx={88} cy={110} text="ID Upload" sub="Secure S3" />

      <OpenAIVisionIcon cx={222} cy={110} />
      <NodeLabel cx={222} cy={110} text="GPT-4o Vision" sub="Extract fields" />

      <AMLIcon cx={370} cy={110} />
      <NodeLabel cx={370} cy={110} text="AML Screening" sub="Jumio WorldCheck" />

      <RiskIcon cx={518} cy={110} />
      <NodeLabel cx={518} cy={110} text="Risk Score" sub="1–100 model" />

      <DecisionIcon cx={672} cy={110} />
      <NodeLabel cx={672} cy={110} text="Decision Engine" sub="3-path routing" />

      {/* Approve node */}
      <g>
        <rect x={760} y={82} width={52} height={28} rx={8} fill="#22C55E20" stroke="#22C55E40" strokeWidth={1.5} />
        <text x={786} y={101} textAnchor="middle" fontSize="9" fill="#22C55E" fontWeight="700" fontFamily="Inter, sans-serif">APPROVE</text>
      </g>

      {/* Audit node */}
      <AuditIcon cx={672} cy={185} />
      <NodeLabel cx={672} cy={185} text="Audit Trail" sub="HubSpot + log" />

      {/* Step number badges */}
      {[
        [88, 110, '1'], [222, 110, '2'], [370, 110, '3'],
        [518, 110, '4'], [672, 110, '5'], [672, 185, '6'],
      ].map(([x, y, n]) => (
        <g key={String(n)}>
          <circle cx={Number(x) + 20} cy={Number(y) - 20} r={9} fill="#FF4F00" />
          <text x={Number(x) + 20} y={Number(y) - 16} textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="Inter, sans-serif">{n}</text>
        </g>
      ))}
    </svg>
  )
}

// ── Step data ─────────────────────────────────────────────────────────────────

const steps = [
  {
    num: 1,
    tool: 'Document Upload',
    toolColor: '#6366F1',
    title: 'Customer uploads government ID and proof of address',
    detail: "The customer uploads two documents via a secure web portal: a government-issued photo ID (passport, driver's licence, national ID card) and a proof of address document (utility bill, bank statement, council tax letter, dated within 90 days). n8n's webhook receives the file payloads and stores them in encrypted S3 storage. Supported formats: PDF, JPG, PNG, HEIC.",
    tags: ['Secure upload portal', 'S3 encrypted storage', 'Multi-format support'],
  },
  {
    num: 2,
    tool: 'GPT-4o Vision',
    toolColor: '#10A37F',
    title: 'GPT-4o Vision extracts name, DOB, address, ID number, and expiry',
    detail: 'GPT-4o Vision processes both documents simultaneously. For the photo ID, it extracts: full legal name, date of birth, document number, issue date, expiry date, issuing country, and MRZ (machine readable zone) data. For proof of address, it extracts: name, address, document date, and issuing institution. Confidence scores are generated per field — low-confidence extractions are flagged for manual review.',
    tags: ['GPT-4o Vision', 'MRZ extraction', 'Multi-document', 'Confidence scoring'],
  },
  {
    num: 3,
    tool: 'AML Screening',
    toolColor: '#1E40AF',
    title: 'AML screening API checks applicant against global watchlists',
    detail: 'The extracted name, DOB, and nationality are submitted to Jumio or Refinitiv World-Check for AML/PEP screening. The API checks against: OFAC SDN list, EU consolidated sanctions, UN sanctions, PEP (politically exposed persons) databases, adverse media sources, and global law enforcement lists. Results are returned with match confidence scores and matched entity details.',
    tags: ['Jumio API', 'OFAC screening', 'PEP check', 'Adverse media', 'UN/EU sanctions'],
  },
  {
    num: 4,
    tool: 'Risk Scoring',
    toolColor: '#FBBF24',
    title: 'AI risk scoring model generates a KYC risk score 1–100',
    detail: 'A Python risk scoring model combines: AML screening results, document authenticity signals from GPT-4o Vision, completeness of extracted data, geographic risk (customer country vs document country), and any adverse media flags. The output is a KYC risk score from 1–100 with a written risk summary. Thresholds are configurable: <30 auto-approve, 30–70 enhanced due diligence, >70 escalate to compliance officer.',
    tags: ['Python risk model', 'Configurable thresholds', 'Risk narrative'],
  },
  {
    num: 5,
    tool: 'Decision Engine',
    toolColor: '#22C55E',
    title: 'Auto-approve, queue for EDD, or escalate to compliance',
    detail: 'Based on the risk score and any hard-stop flags (direct sanctions match, expired document, name mismatch), the decision engine routes the application: auto-approved customers receive an onboarding confirmation email immediately; EDD queue customers receive a request for additional documentation; escalated applications are routed to the compliance officer with a full context packet.',
    tags: ['Three-path routing', 'Hard-stop flags', 'EDD queue management'],
  },
  {
    num: 6,
    tool: 'Audit Trail',
    toolColor: '#6366F1',
    title: 'Full compliance audit trail logged to HubSpot and compliance database',
    detail: 'Every step of the KYC process is written to an immutable compliance log: document upload timestamps, GPT-4o extraction outputs and confidence scores, AML API response codes, risk score with model version, decision outcome, and the identity of any human reviewer. This log satisfies BSA/AML, FINRA, and international KYC regulatory requirements.',
    tags: ['Immutable audit log', 'BSA/AML compliant', 'HubSpot CRM', 'Model version tracking'],
  },
]

// ── Tech stack ────────────────────────────────────────────────────────────────

const techStack = [
  { name: 'GPT-4o Vision', role: 'ID extraction', color: '#10A37F', desc: 'Extracts structured data from government IDs and address documents. Handles 150+ document types across 190+ countries.' },
  { name: 'Jumio WorldCheck', role: 'AML screening', color: '#1E40AF', desc: 'Global AML, sanctions, PEP, and adverse media screening. Covers OFAC, EU, UN, and 300+ additional watchlists.' },
  { name: 'Python Risk Model', role: 'KYC scoring', color: '#3776AB', desc: 'Custom risk scoring combining AML results, document signals, and geographic risk factors. Configurable thresholds per product.' },
  { name: 'n8n', role: 'Orchestration', color: '#F65B2B', desc: 'Manages the full pipeline, API calls, decision routing, notification delivery, and retry handling.' },
  { name: 'HubSpot', role: 'CRM + audit', color: '#FF7A59', desc: 'Stores the complete customer verification record, decision, and compliance documentation.' },
  { name: 'Gmail / Email', role: 'Notifications', color: '#EA4335', desc: 'Auto-approvals, EDD document requests, compliance escalation alerts — all delivered from your domain.' },
]

// ── Outcomes ──────────────────────────────────────────────────────────────────

const outcomes = [
  { stat: '2 hrs', label: 'saved/application', sub: 'vs. manual review' },
  { stat: '<3 min', label: 'verification', sub: 'end-to-end' },
  { stat: '100%', label: 'watchlist coverage', sub: 'OFAC, EU, UN + 300 more' },
  { stat: 'Full', label: 'AML audit trail', sub: 'BSA/AML compliant' },
]

// ── Component ─────────────────────────────────────────────────────────────────

function fade(delay = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.45, delay },
  }
}

export default function KYCAMLPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">

      {/* ── BREADCRUMB ──────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-0">
        <nav className="flex items-center gap-2 text-xs text-white/35">
          <Link href="/ai-workflow-automation-library" className="flex items-center gap-1 hover:text-white/70 transition-colors">
            <ArrowLeft size={12} /> AI Workflow Library
          </Link>
          <ChevronRight size={11} className="text-white/20" />
          <span className="text-white/55">KYC/AML Identity Verification</span>
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
              KYC/AML Identity<br />
              <span className="bg-gradient-to-r from-[#FF4F00] to-[#FBBF24] bg-clip-text text-transparent">Verification</span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-base leading-relaxed text-white/55 max-w-lg">
              A new customer submits their government ID and proof of address. Within minutes, GPT-4o Vision has extracted every field, an AML screening API has checked global watchlists, an AI risk score has been generated, and the onboarding decision has been made — with a full compliance audit trail.
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
              {['GPT-4o Vision', 'n8n', 'Jumio API', 'HubSpot', 'Gmail'].map(t => (
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
              <span className="text-[11px] font-medium text-white/40 font-display tracking-wide uppercase">Automated KYC pipeline — fires on each new application</span>
            </div>
            <HeroDiagram />
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-4">
              {[
                { label: 'Trigger', value: 'Document upload' },
                { label: 'Avg runtime', value: '<3 minutes' },
                { label: 'Compliance', value: 'BSA/AML + FINRA' },
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
          <h2 className="mt-2 font-display text-3xl font-bold text-white">Why FinTechs still do KYC manually</h2>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Clock, title: 'Hours wasted per application', desc: 'A compliance analyst manually reviewing each ID document, running AML checks one by one, and writing up risk assessments burns 1–3 hours per application. At any volume, this becomes the bottleneck to onboarding.' },
            { icon: AlertTriangle, title: 'Human error in a zero-tolerance process', desc: "Manually checking 300+ global watchlists is not feasible. Missed PEP hits or sanctions matches expose your FinTech to regulatory fines, licence revocations, and reputational damage that can't be undone." },
            { icon: FileSearch, title: 'Audit trails that fail regulatory scrutiny', desc: "Regulators require a timestamped record of every KYC decision. Manual processes produce inconsistent, incomplete records that fail BSA/AML audits. One gap in your compliance trail can trigger enforcement action." },
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
                {/* Left: step number + tool */}
                <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-3 sm:w-36">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-display text-sm font-bold text-white"
                    style={{ background: step.toolColor }}>
                    {step.num}
                  </div>
                  <span className="text-[11px] font-semibold font-display tracking-wide text-white/60">
                    {step.tool}
                  </span>
                </div>
                {/* Right: content */}
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
                {/* Connector line */}
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
              <h2 className="mt-2 font-display text-3xl font-bold text-white">A 3–4 week sprint. Compliance ready.</h2>
              <p className="mt-4 text-white/50 text-sm leading-relaxed">
                Kovil AI scopes, builds, tests and deploys this workflow end-to-end. Your compliance team reviews the audit trail on day one.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {[
                  'n8n workflow configured and hosted (cloud or self-hosted)',
                  'Secure document upload portal with S3 encrypted storage',
                  'GPT-4o Vision prompts tuned for your required document types',
                  'AML screening API credentials setup (Jumio or Refinitiv)',
                  'Python risk scoring model with configurable thresholds',
                  'Decision engine with three-path routing and hard-stop flags',
                  'Immutable compliance audit log — BSA/AML and FINRA ready',
                  'HubSpot CRM integration for customer records and escalations',
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
                  { week: 'Week 1', title: 'Scoping & compliance setup', items: ['AML API credentials and access audit', 'Risk threshold calibration with your compliance team', 'Document type inventory and upload portal design'] },
                  { week: 'Weeks 2–3', title: 'Build pipeline', items: ['GPT-4o Vision prompt engineering for ID types', 'AML screening integration and response mapping', 'Risk model build and decision engine routing'] },
                  { week: 'Week 4', title: 'Compliance review & deploy', items: ['Audit log setup and immutability testing', 'Compliance team sign-off on decision logic', 'Production deployment and first live run'] },
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
            {[
              {
                q: 'How many government ID types does the system support?',
                a: "GPT-4o Vision supports 150+ government ID types across 190+ countries including passports, national IDs, driver's licences, residence permits, and military IDs. The extraction prompt is tuned for each document family. New document types can be added by updating the extraction prompt without rebuilding the pipeline.",
              },
              {
                q: 'Does the AML screening cover all required watchlists?',
                a: 'The standard build screens against OFAC SDN, EU consolidated sanctions, UN Security Council sanctions, HM Treasury (UK), and PEP databases. The Jumio/Refinitiv integration covers 300+ global watchlists. Your compliance team can specify additional lists during the scoping phase.',
              },
              {
                q: 'Is this system compliant with GDPR and data protection requirements?',
                a: 'All documents are encrypted in transit and at rest. PII extracted by GPT-4o Vision is never stored in plain text in the workflow logs. Documents are deleted from temporary storage after 24 hours post-decision. Audit logs contain only hashed identifiers and decision metadata, not raw PII.',
              },
              {
                q: 'What happens when there is a potential sanctions match?',
                a: "Any AML hit with a match confidence above the configured threshold triggers an immediate hard stop — the application is not auto-processed. A compliance officer is alerted via email and Slack with the full match details, applicant information, and AML API response for manual review before any onboarding decision is made.",
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
            <div className="h-64 w-[500px] rounded-full bg-[#FF4F00] opacity-[0.07] blur-[80px]" />
          </div>
          <Shield size={24} className="relative mx-auto mb-4 text-[#FF4F00]" />
          <h2 className="relative font-display text-[clamp(22px,3.5vw,36px)] font-bold text-white">
            Ready to ship this?
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Book a 30-minute discovery call. We'll scope the KYC/AML workflow for your document types, risk thresholds, and compliance requirements — fixed price, zero delivery risk.
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
