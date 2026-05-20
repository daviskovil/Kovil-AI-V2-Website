'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Clock, CheckCircle, MessageSquare, ChevronRight, FileText } from 'lucide-react'
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
      <marker id="arrow-inv" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
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

// Invoice Ingest — indigo
function InvoiceIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#6366F1">
      <rect x={cx - 11} y={cy - 14} width={18} height={24} rx={3} fill="white" opacity={0.9} />
      <polyline points={`${cx + 3},${cy - 14} ${cx + 7},${cy - 14} ${cx + 7},${cy - 8}`} fill="none" stroke="#6366F1" strokeWidth="1.5" />
      <line x1={cx - 7} y1={cy - 5} x2={cx + 5} y2={cy - 5} stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" />
      <line x1={cx - 7} y1={cy} x2={cx + 5} y2={cy} stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" />
      <line x1={cx - 7} y1={cy + 5} x2={cx + 2} y2={cy + 5} stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" />
    </NodeBox>
  )
}

// OCR Extraction — OpenAI green
function OcrIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#10A37F">
      <circle cx={cx} cy={cy} r="12" stroke="white" strokeWidth="2" fill="none" opacity={0.9} />
      <circle cx={cx} cy={cy} r="5" fill="white" />
      <circle cx={cx - 9} cy={cy} r="2.5" fill="white" />
      <circle cx={cx + 9} cy={cy} r="2.5" fill="white" />
    </NodeBox>
  )
}

// Match Engine — orange
function MatchIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#FF4F00">
      <line x1={cx - 10} y1={cy - 6} x2={cx + 10} y2={cy - 6} stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 10} y1={cy + 2} x2={cx + 10} y2={cy + 2} stroke="white" strokeWidth="2" strokeLinecap="round" />
      <polyline points={`${cx + 3},${cy - 10} ${cx + 8},${cy - 6} ${cx + 3},${cy - 2}`}
        fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </NodeBox>
  )
}

// Flag Discrepancy — red
function FlagIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#EF4444">
      <line x1={cx - 2} y1={cy - 13} x2={cx - 2} y2={cy + 10} stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <path d={`M${cx - 2},${cy - 13} L${cx + 12},${cy - 7} L${cx - 2},${cy - 1}`}
        fill="white" opacity={0.9} />
    </NodeBox>
  )
}

// Auto-Post — green
function PostIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#22C55E">
      <polyline points={`${cx - 9},${cy} ${cx - 3},${cy + 6} ${cx + 9},${cy - 8}`}
        fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </NodeBox>
  )
}

// ── Hero diagram ──────────────────────────────────────────────────────────────

function HeroDiagram() {
  const stroke = '#D0CBC2'
  const sw = 1.8
  const ma = 'url(#arrow-inv)'
  const nodes = [70, 210, 350, 490, 630]
  const y = 100

  return (
    <svg viewBox="0 0 700 200" className="w-full" style={{ display: 'block' }}>
      <ArrowDefs />
      <path d={`M${nodes[0] + 28},${y} H${nodes[1] - 28}`} stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      <path d={`M${nodes[1] + 28},${y} H${nodes[2] - 28}`} stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      <path d={`M${nodes[2] + 28},${y} H${nodes[3] - 28}`} stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      <path d={`M${nodes[3] + 28},${y} H${nodes[4] - 28}`} stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      <InvoiceIcon cx={nodes[0]} cy={y} />
      <NodeLabel cx={nodes[0]} cy={y} text="Invoice Ingest" sub="Email / API / ERP" />

      <OcrIcon cx={nodes[1]} cy={y} />
      <NodeLabel cx={nodes[1]} cy={y} text="OCR Extract" sub="GPT-4o Vision" />

      <MatchIcon cx={nodes[2]} cy={y} />
      <NodeLabel cx={nodes[2]} cy={y} text="Match Engine" sub="3-way match" />

      <FlagIcon cx={nodes[3]} cy={y} />
      <NodeLabel cx={nodes[3]} cy={y} text="Flag / Escalate" sub="Discrepancy logic" />

      <PostIcon cx={nodes[4]} cy={y} />
      <NodeLabel cx={nodes[4]} cy={y} text="Auto-Post" sub="ERP / Xero / NetSuite" />

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
  { stat: '90%', label: 'auto-matched invoices', sub: 'zero manual review' },
  { stat: '<2 min', label: 'per invoice cycle', sub: 'vs. 20 min manual' },
  { stat: '100%', label: 'discrepancy visibility', sub: 'real-time flagging' },
  { stat: '0', label: 'duplicate payments', sub: 'dedup logic enforced' },
]

const steps = [
  {
    num: 1,
    tool: 'Invoice Ingestion (Email / API / ERP)',
    toolColor: '#6366F1',
    title: 'Invoices captured from every source automatically',
    detail: 'n8n monitors a dedicated invoice email inbox, ERP webhooks (SAP, Oracle, NetSuite), and supplier portal APIs simultaneously. All incoming invoices — PDF attachments, XML EDI files, or structured API payloads — are normalised and queued for processing. Duplicate invoice detection runs at this stage using invoice number + supplier ID as a composite key, rejecting any duplicate before it enters the pipeline.',
    tags: ['Email parser', 'ERP webhook', 'Dedup logic', 'n8n'],
  },
  {
    num: 2,
    tool: 'GPT-4o Vision OCR',
    toolColor: '#10A37F',
    title: 'All invoice fields extracted into structured JSON',
    detail: 'GPT-4o Vision processes each invoice image or PDF and extracts all required fields into a structured JSON: invoice_number, supplier_name, supplier_id, invoice_date, due_date, line_items (array with description, qty, unit_price, total), subtotal, tax_amount, total_amount, currency, and payment_terms. The extraction handles multi-page invoices, tables, and non-standard layouts. Confidence scores below 85% trigger a manual review flag.',
    tags: ['GPT-4o Vision', 'Structured JSON', 'Multi-page PDF', 'Confidence scoring'],
  },
  {
    num: 3,
    tool: '3-Way Match Engine',
    toolColor: '#FF4F00',
    title: 'Invoice matched against PO and goods receipt record',
    detail: 'The match engine queries the ERP for the corresponding Purchase Order and Goods Receipt Note (GRN) using the supplier ID and PO number extracted from the invoice. It performs a 3-way match: invoice amount vs. PO amount, invoice line items vs. PO line items, and received quantities vs. invoiced quantities. Tolerances are configurable per supplier and invoice type (e.g. ±2% for freight invoices). Perfect matches are immediately routed for auto-payment posting.',
    tags: ['3-way match', 'Configurable tolerances', 'ERP PO lookup', 'GRN matching'],
  },
  {
    num: 4,
    tool: 'Discrepancy Engine',
    toolColor: '#EF4444',
    title: 'Discrepancies categorised, flagged, and routed for resolution',
    detail: 'Invoices that fail the 3-way match are categorised by discrepancy type: price variance (invoice price ≠ PO price), quantity variance (invoiced qty ≠ received qty), duplicate invoice, missing PO, or unknown supplier. Each category has a configured resolution owner — price variances go to procurement, quantity variances go to warehouse, duplicates go to AP. An automated email is sent to the responsible party with the exact discrepancy details and a link to the resolution portal.',
    tags: ['Discrepancy classification', 'Resolution routing', 'Automated email', 'SLA tracking'],
  },
  {
    num: 5,
    tool: 'ERP Auto-Post',
    toolColor: '#22C55E',
    title: 'Matched invoices automatically posted to the AP ledger',
    detail: 'Invoices that pass the 3-way match are automatically posted to the accounts payable ledger in the ERP (NetSuite, SAP, Xero, QuickBooks Online). n8n makes the ERP API call with all extracted and validated invoice data, receives the posting confirmation and journal entry number, and stores these back in the invoice processing log. Payment is scheduled according to the invoice payment terms with early payment discount logic if configured.',
    tags: ['NetSuite API', 'Xero API', 'SAP connector', 'Payment scheduling'],
  },
  {
    num: 6,
    tool: 'Reporting & Audit Log',
    toolColor: '#6366F1',
    title: 'Full reconciliation report generated and audit trail maintained',
    detail: 'n8n generates a daily reconciliation summary: total invoices processed, match rate, total discrepancies by type, total value auto-posted, and outstanding resolution items with age. The report is emailed to the AP manager and CFO. Every invoice — whether auto-posted or escalated — is logged with extraction data, match result, ERP posting confirmation, and all system actor actions for audit and regulatory purposes.',
    tags: ['Daily AP summary', 'Immutable audit log', 'CFO reporting', 'Compliance trail'],
  },
]

const techStack = [
  { name: 'GPT-4o Vision', role: 'Invoice OCR & extraction', color: '#10A37F', desc: 'Extracts all invoice fields from PDFs and images including tables, multi-page documents, and non-standard supplier layouts with confidence scoring.' },
  { name: 'n8n', role: 'Workflow orchestration', color: '#F65B2B', desc: 'Manages invoice ingestion from all sources, 3-way match logic, discrepancy routing, ERP posting, and reporting — all in a single configurable pipeline.' },
  { name: 'NetSuite / SAP / Xero', role: 'ERP integration', color: '#00A1E0', desc: 'PO and GRN lookup for matching; AP ledger posting for approved invoices. Supports NetSuite, SAP, Oracle, Xero, and QuickBooks Online.' },
  { name: 'Python', role: 'Match engine & business rules', color: '#3776AB', desc: 'Runs the 3-way match logic, tolerance calculations, discrepancy classification, and deduplication against configurable business rules.' },
  { name: 'Gmail / Outlook', role: 'Invoice ingestion & alerts', color: '#EA4335', desc: 'Monitors supplier invoice inbox; sends discrepancy resolution requests and daily AP summary reports to responsible parties.' },
  { name: 'Airtable / PostgreSQL', role: 'Processing log & audit trail', color: '#FCB400', desc: 'Stores every invoice processing event: extraction output, match result, ERP posting confirmation, and resolution history.' },
]

const faq = [
  {
    q: 'Which ERP systems does this integrate with?',
    a: 'The standard build supports NetSuite, Xero, and QuickBooks Online via native APIs. SAP and Oracle are supported via their REST API layers. For ERPs without direct API access, we can integrate via SFTP file exchange or a middleware connector. All ERP integrations are scoped and tested during the build sprint.',
  },
  {
    q: 'What tolerance levels can be configured for the 3-way match?',
    a: 'Tolerances are fully configurable per supplier, invoice category, and currency. Common configurations include ±2% for goods invoices, ±5% for service invoices, and absolute amount thresholds for high-value transactions. Tolerance rules are stored as admin-configurable parameters — no code changes needed to update them.',
  },
  {
    q: 'How does the system handle invoices with no PO?',
    a: 'Non-PO invoices (e.g. utilities, subscriptions, professional services) are flagged as a separate category and routed to the appropriate budget owner for manual approval. Once approved, they are automatically posted to the correct cost centre in the ERP. A configurable whitelist of approved non-PO suppliers can bypass the manual step.',
  },
  {
    q: 'Can this handle multi-currency invoices?',
    a: 'Yes. Currency is extracted from the invoice and the match engine applies the appropriate exchange rate from the ERP at the time of matching. Variance calculations account for exchange rate differences within a configurable tolerance. All amounts are stored in both original currency and functional currency in the audit log.',
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function InvoiceReconciliationPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">

      {/* ── BREADCRUMB ──────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-0">
        <nav className="flex items-center gap-2 text-xs text-white/35">
          <Link href="/ai-workflow-automation-library" className="flex items-center gap-1 hover:text-white/70 transition-colors">
            <ArrowLeft size={12} /> AI Workflow Library
          </Link>
          <ChevronRight size={11} className="text-white/20" />
          <span className="text-white/55">Invoice Reconciliation AI</span>
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
              Invoice Reconciliation<br />
              <span className="bg-gradient-to-r from-[#FF4F00] to-[#FBBF24] bg-clip-text text-transparent">AI</span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-base leading-relaxed text-white/55 max-w-lg">
              When an invoice arrives — by email, API, or ERP — this GPT-4o + n8n pipeline extracts every field, runs a 3-way match against the PO and goods receipt, flags discrepancies to the right team, and auto-posts matched invoices to the AP ledger in minutes.
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
              {['GPT-4o Vision', 'n8n', 'NetSuite', 'Xero', 'Python'].map(t => (
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
              <span className="text-[11px] font-medium text-white/40 font-display tracking-wide uppercase">Live workflow — triggers on invoice receipt</span>
            </div>
            <HeroDiagram />
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-4">
              {[
                { label: 'Trigger', value: 'Invoice received' },
                { label: 'Avg runtime', value: '<2 minutes' },
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
          <h2 className="mt-2 font-display text-3xl font-bold text-white">Why AP teams spend days on invoices that should take minutes</h2>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Clock, title: 'Manual matching is slow and error-prone', desc: 'AP teams manually compare invoice fields against PO data line by line. At volume, this takes days. Human error rates on manual matching run at 1–3% — each error risks duplicate payment, missed discounts, or late payment penalties.' },
            { icon: FileText, title: 'Discrepancies get buried in email threads', desc: 'When an invoice doesn\'t match a PO, the resolution process becomes an email chain between AP, procurement, and the supplier. Without structured routing, discrepancies age in inboxes for weeks — causing late fees and strained supplier relationships.' },
            { icon: MessageSquare, title: 'No structured AP performance data', desc: 'Finance teams can\'t easily report on match rates, average processing time, discrepancy volumes, or early payment discount capture. This makes it impossible to identify supplier or process problems before they become material.' },
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
                Kovil AI scopes, builds, tests and deploys this workflow end-to-end. You don't touch n8n until it's live and processing real invoices.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {[
                  'Invoice ingestion from email inbox, ERP webhooks, and supplier APIs',
                  'GPT-4o Vision prompt engineered for your invoice formats',
                  'Duplicate detection logic configured for your supplier base',
                  '3-way match engine with your PO tolerance rules',
                  'Discrepancy routing to procurement, warehouse, and AP teams',
                  'ERP auto-posting integration (NetSuite, SAP, Xero, QBO)',
                  'Daily AP summary report and CFO dashboard',
                  'Immutable audit log for all processing decisions',
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
                  { week: 'Week 1', title: 'Scoping & ERP access', items: ['ERP API credentials & PO access', 'Invoice format mapping', 'Email inbox setup'] },
                  { week: 'Week 2', title: 'OCR & match engine build', items: ['GPT-4o extraction prompt tuning', '3-way match logic implementation', 'Discrepancy routing rules'] },
                  { week: 'Weeks 3–4', title: 'ERP integration & deploy', items: ['AP ledger auto-posting integration', 'Reporting & audit log setup', 'Production deployment & runbook'] },
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
          <FileText size={24} className="relative mx-auto mb-4 text-[#FF4F00]" />
          <h2 className="relative font-display text-[clamp(22px,3.5vw,36px)] font-bold text-white">
            Ready to automate your AP process?
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Book a 30-minute discovery call. We'll scope the reconciliation workflow for your ERP, supplier base, and invoice formats — fixed price, zero delivery risk.
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
