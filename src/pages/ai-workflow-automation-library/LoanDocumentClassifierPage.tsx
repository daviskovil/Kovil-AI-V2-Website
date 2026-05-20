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
      <marker id="arrow-loan" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
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

// PDF Upload — indigo
function PdfUploadIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#6366F1">
      {/* Document with upload arrow */}
      <rect x={cx - 11} y={cy - 14} width={18} height={22} rx={3} fill="white" opacity={0.9} />
      <polyline points={`${cx + 3},${cy - 14} ${cx + 7},${cy - 14} ${cx + 7},${cy - 6}`} fill="none" stroke="#6366F1" strokeWidth="1.5" />
      <line x1={cx + 9} y1={cy + 10} x2={cx + 9} y2={cy - 2} stroke="white" strokeWidth="2" strokeLinecap="round" />
      <polyline points={`${cx + 6},${cy + 1} ${cx + 9},${cy - 3} ${cx + 12},${cy + 1}`} fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </NodeBox>
  )
}

// GPT-4o Vision — OpenAI green
function VisionIcon({ cx, cy }: { cx: number; cy: number }) {
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

// Classifier — orange
function ClassifierIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#F65B2B">
      {/* Branch/routing icon */}
      <line x1={cx - 10} y1={cy} x2={cx + 10} y2={cy} stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      <line x1={cx + 4} y1={cy} x2={cx + 10} y2={cy - 8} stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      <line x1={cx + 4} y1={cy} x2={cx + 10} y2={cy + 8} stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx={cx - 10} cy={cy} r="3" fill="white" />
      <circle cx={cx + 10} cy={cy - 8} r="3" fill="white" />
      <circle cx={cx + 10} cy={cy + 8} r="3" fill="white" />
    </NodeBox>
  )
}

// Completeness check — amber
function ChecklistIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#FBBF24">
      {/* Checklist lines */}
      <rect x={cx - 12} y={cy - 14} width={24} height={28} rx={3} fill="white" opacity={0.9} />
      <polyline points={`${cx - 8},${cy - 7} ${cx - 5},${cy - 4} ${cx - 1},${cy - 10}`} fill="none" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1={cx + 2} y1={cy - 7} x2={cx + 9} y2={cy - 7} stroke="#FBBF24" strokeWidth="1.8" strokeLinecap="round" />
      <polyline points={`${cx - 8},${cy + 2} ${cx - 5},${cy + 5} ${cx - 1},${cy - 1}`} fill="none" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1={cx + 2} y1={cy + 2} x2={cx + 9} y2={cy + 2} stroke="#FBBF24" strokeWidth="1.8" strokeLinecap="round" />
      <line x1={cx - 8} y1={cy + 10} x2={cx + 9} y2={cy + 10} stroke="#FBBF24" strokeWidth="1.8" strokeLinecap="round" />
    </NodeBox>
  )
}

// Notify underwriter — red
function NotifyIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#EA4335">
      {/* Bell icon */}
      <path d={`M${cx},${cy - 14} C${cx - 8},${cy - 14} ${cx - 12},${cy - 8} ${cx - 12},${cy} L${cx - 12},${cy + 6} L${cx + 12},${cy + 6} L${cx + 12},${cy} C${cx + 12},${cy - 8} ${cx + 8},${cy - 14} ${cx},${cy - 14}`} fill="white" opacity={0.9} />
      <line x1={cx - 4} y1={cy + 6} x2={cx + 4} y2={cy + 6} stroke="white" strokeWidth="2" strokeLinecap="round" />
      <rect x={cx - 3} y={cy + 8} width={6} height={4} rx={3} fill="white" opacity={0.9} />
    </NodeBox>
  )
}

// ── Hero diagram ──────────────────────────────────────────────────────────────

function HeroDiagram() {
  const stroke = '#D0CBC2'
  const sw = 1.8
  const ma = 'url(#arrow-loan)'

  // 5 nodes at y=100, evenly spaced across 700 wide
  // x positions: 70, 210, 350, 490, 630
  const nodes = [70, 210, 350, 490, 630]
  const y = 100

  return (
    <svg viewBox="0 0 700 200" className="w-full" style={{ display: 'block' }}>
      <ArrowDefs />

      {/* Arrows between nodes */}
      <path d={`M${nodes[0] + 28},${y} H${nodes[1] - 28}`} stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      <path d={`M${nodes[1] + 28},${y} H${nodes[2] - 28}`} stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      <path d={`M${nodes[2] + 28},${y} H${nodes[3] - 28}`} stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      <path d={`M${nodes[3] + 28},${y} H${nodes[4] - 28}`} stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* Nodes */}
      <PdfUploadIcon cx={nodes[0]} cy={y} />
      <NodeLabel cx={nodes[0]} cy={y} text="PDF Upload" sub="Web form / API" />

      <VisionIcon cx={nodes[1]} cy={y} />
      <NodeLabel cx={nodes[1]} cy={y} text="GPT-4o Vision" sub="Extract fields" />

      <ClassifierIcon cx={nodes[2]} cy={y} />
      <NodeLabel cx={nodes[2]} cy={y} text="Classifier" sub="Route to checklist" />

      <ChecklistIcon cx={nodes[3]} cy={y} />
      <NodeLabel cx={nodes[3]} cy={y} text="Complete?" sub="Doc inventory" />

      <NotifyIcon cx={nodes[4]} cy={y} />
      <NodeLabel cx={nodes[4]} cy={y} text="Notify Underwriter" sub="Slack / Email" />

      {/* Step badges */}
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
  { stat: '8 hrs/day', label: 'saved on intake', sub: 'vs. manual processing' },
  { stat: '<60 sec', label: 'processing time', sub: 'per document set' },
  { stat: '99%', label: 'classification accuracy', sub: 'across doc types' },
  { stat: '0', label: 'missed documents', sub: 'completeness check' },
]

const steps = [
  {
    num: 1,
    tool: 'n8n Webhook',
    toolColor: '#6366F1',
    title: 'Document uploaded to intake portal via web form or API',
    detail: 'A loan officer or borrower uploads documents to the intake portal. n8n\'s Webhook node receives the file payload and passes the base64-encoded document to the processing pipeline. Supported formats: PDF, JPG, PNG, TIFF. Max file size: 25MB. Files are stored temporarily in encrypted S3 storage during processing.',
    tags: ['n8n Webhook', 'S3 Storage', 'Encrypted transit'],
  },
  {
    num: 2,
    tool: 'GPT-4o Vision',
    toolColor: '#10A37F',
    title: 'GPT-4o Vision identifies the document type and extracts all key fields',
    detail: 'GPT-4o Vision receives the document image and runs a structured extraction prompt. Output JSON contains: document_type (W-2, bank statement, pay stub, tax return, etc.), confidence_score, and a fields object with all extracted values. The prompt is engineered to handle poor scan quality, handwritten notes, and multi-page documents.',
    tags: ['OpenAI GPT-4o Vision', 'Structured JSON output', 'Multi-page support'],
  },
  {
    num: 3,
    tool: 'Python Classifier',
    toolColor: '#F65B2B',
    title: 'Document routed to the correct checklist based on type',
    detail: 'A Python function maps each document_type to the corresponding loan checklist template stored in Airtable. For example, a W-2 maps to the employment verification checklist; a bank statement maps to the asset verification checklist. The classifier also validates that the extracted fields are present and within acceptable ranges (e.g. date ranges, income thresholds).',
    tags: ['Python', 'Airtable', 'Business rules engine'],
  },
  {
    num: 4,
    tool: 'Completeness Check',
    toolColor: '#FBBF24',
    title: 'System checks whether all required documents for this loan type are present',
    detail: 'n8n queries the loan application record to determine the loan type (conventional, FHA, jumbo, HELOC). It then checks the current document inventory against the required checklist. Missing items are identified and stored as a structured list. If all documents are present, the workflow skips to the notification step immediately.',
    tags: ['n8n Logic', 'Airtable lookup', 'Loan type rules'],
  },
  {
    num: 5,
    tool: 'Flag Missing Docs',
    toolColor: '#EF4444',
    title: 'Missing documents are flagged and a request email is auto-drafted',
    detail: 'For each missing document, GPT-4o drafts a plain-English explanation of why the document is needed and what exactly the borrower needs to provide. The email is personalised with the borrower\'s name and lists all missing items in a single communication — no repetitive back-and-forth.',
    tags: ['GPT-4o', 'Personalised email', 'Batched requests'],
  },
  {
    num: 6,
    tool: 'Underwriter Notification',
    toolColor: '#22C55E',
    title: 'Underwriter receives a structured summary notification',
    detail: 'When all documents are received and classified, n8n sends a Slack message or email to the assigned underwriter. The notification includes: borrower name, loan type, document count, any low-confidence extractions flagged for manual review, and a direct link to the classified document bundle in the loan management system.',
    tags: ['Slack API', 'Gmail', 'LMS integration'],
  },
  {
    num: 7,
    tool: 'Audit Log',
    toolColor: '#6366F1',
    title: 'Every action logged to a compliance audit trail',
    detail: 'Every step — upload timestamp, GPT-4o extraction output, classification decision, completeness check result, and notification sent — is written to an immutable audit log in Airtable or a compliance database. Each record includes the model version used, confidence scores, and the processing engineer\'s credentials for regulatory audit purposes.',
    tags: ['Immutable audit log', 'SOC 2 ready', 'Model version tracking'],
  },
]

const techStack = [
  { name: 'GPT-4o Vision', role: 'Document extraction AI', color: '#10A37F', desc: 'Extracts document types and structured field data from PDFs and images. Handles low-quality scans, handwritten text, and multi-page documents.' },
  { name: 'Python / FastAPI', role: 'Classification engine', color: '#3776AB', desc: 'Maps extracted document types to loan checklists and validates field completeness. Runs business rules for each loan product type.' },
  { name: 'n8n', role: 'Workflow orchestration', color: '#F65B2B', desc: 'Manages the full pipeline: webhook intake, API calls, conditional logic, retry handling, and all notifications.' },
  { name: 'Airtable', role: 'Document registry & checklists', color: '#FCB400', desc: 'Stores loan application records, required document checklists per loan type, and the classified document inventory.' },
  { name: 'AWS S3', role: 'Secure document storage', color: '#FF9900', desc: 'Encrypted temporary storage for documents during processing. Files are deleted after 24 hours post-classification.' },
  { name: 'Gmail / Slack', role: 'Notifications', color: '#4A154B', desc: 'Borrower email requests for missing documents; underwriter Slack alerts when a complete document set is ready for review.' },
]

const faq = [
  {
    q: 'What document types can the classifier handle?',
    a: 'The standard build handles 15+ common mortgage and loan document types: W-2s, 1099s, bank statements, pay stubs, tax returns, asset statements, property appraisals, insurance declarations, and government-issued ID. Additional document types can be added by extending the classification prompt and checklist mapping.',
  },
  {
    q: 'How accurate is GPT-4o Vision on poor-quality scans?',
    a: 'In testing across typical mortgage document scans, GPT-4o Vision achieves >95% field extraction accuracy. The workflow flags any extraction with a confidence score below 85% for manual underwriter review — ensuring no low-confidence data silently passes through.',
  },
  {
    q: 'Is the audit log sufficient for compliance purposes?',
    a: 'The audit log captures model version, input hash, output JSON, confidence scores, processing timestamp, and operator credentials for every document processed. This satisfies typical loan origination audit requirements. We also support integration with your existing compliance logging infrastructure.',
  },
  {
    q: 'Can this work with our existing loan management system?',
    a: 'Yes. n8n has native connectors for Encompass, Blend, BytePro, and major LOS platforms. For systems without native connectors, we use API or webhook integration. We document all integration points during the scoping phase.',
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function LoanDocumentClassifierPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">

      {/* ── BREADCRUMB ──────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-0">
        <nav className="flex items-center gap-2 text-xs text-white/35">
          <Link href="/ai-workflow-automation-library" className="flex items-center gap-1 hover:text-white/70 transition-colors">
            <ArrowLeft size={12} /> AI Workflow Library
          </Link>
          <ChevronRight size={11} className="text-white/20" />
          <span className="text-white/55">AI Loan Document Classifier</span>
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
              AI Loan Document<br />
              <span className="bg-gradient-to-r from-[#FF4F00] to-[#FBBF24] bg-clip-text text-transparent">Classifier</span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-base leading-relaxed text-white/55 max-w-lg">
              When a loan application lands, this Python + n8n workflow uses GPT-4o Vision to extract the document type and every key field — then routes it to the correct checklist, flags any missing documents, and notifies the underwriter in under 60 seconds.
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
              {['GPT-4o Vision', 'Python', 'FastAPI', 'n8n', 'Email'].map(t => (
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
              Typical build: <span className="text-white/55 font-medium">2–3 week sprint · Fixed price · Zero delivery risk</span>
            </motion.p>
          </div>

          {/* Right: diagram */}
          <motion.div {...fade(0.1)} className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 shadow-2xl">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#34D399] animate-pulse" />
              <span className="text-[11px] font-medium text-white/40 font-display tracking-wide uppercase">Live workflow — triggers on document upload</span>
            </div>
            <HeroDiagram />
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-4">
              {[
                { label: 'Trigger', value: 'Webhook upload' },
                { label: 'Avg runtime', value: '<60 seconds' },
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
          <h2 className="mt-2 font-display text-3xl font-bold text-white">Why loan teams still sort documents manually</h2>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Clock, title: 'Hours lost per application', desc: 'Underwriters spend 60–90 minutes per application manually reviewing, labelling, and sorting uploaded documents before the actual credit analysis can begin. At high volume, this consumes entire workdays.' },
            { icon: CheckCircle, title: 'Missing docs delay closings', desc: 'When the checklist is checked manually, items get missed. A single missing document discovered late in the process can delay a loan closing by days — costing both the borrower and the lender.' },
            { icon: MessageSquare, title: 'No audit trail on classification', desc: 'Manual review leaves no structured record of who classified what, when, and with what confidence. This creates compliance exposure during regulatory exams and loan audits.' },
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
              <h2 className="mt-2 font-display text-3xl font-bold text-white">A 2–3 week sprint. Production ready.</h2>
              <p className="mt-4 text-white/50 text-sm leading-relaxed">
                Kovil AI scopes, builds, tests and deploys this workflow end-to-end. You don't touch n8n until it's live and processing real applications.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {[
                  'n8n webhook intake configured for your document portal',
                  'GPT-4o Vision prompt engineered for your document types',
                  'Python classifier with your loan product checklists',
                  'Completeness logic for all loan types (conventional, FHA, jumbo, HELOC)',
                  'Encrypted S3 storage with 24-hour auto-deletion',
                  'Underwriter Slack + email notifications configured',
                  'Immutable audit log compliant with loan origination requirements',
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
                    2–3 weeks
                  </span>
                </div>
                {[
                  { week: 'Week 1', title: 'Scoping & access setup', items: ['API credentials setup', 'S3 bucket + encryption config', 'Document checklist mapping'] },
                  { week: 'Week 2', title: 'Build & test', items: ['GPT-4o Vision prompt engineering', 'Python classifier logic', 'n8n pipeline end-to-end test'] },
                  { week: 'Week 3', title: 'Deploy & handover', items: ['Production deployment', 'Audit logging activation', 'Documentation & runbook'] },
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
            Ready to ship this in 3 weeks?
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Book a 30-minute discovery call. We'll scope the classifier for your document types, loan products, and LOS integrations — fixed price, zero delivery risk.
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
            Typical sprint: 2–3 weeks · Fixed-price · Fully managed delivery · Post-launch support included
          </p>
        </motion.div>
      </section>

    </div>
  )
}
