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
      <marker id="arrow-kb" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <polygon points="0,0 0,6 8,3" fill="#D0CBC2" />
      </marker>
    </defs>
  )
}

function CaseIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#FF4F00">
      <text x={cx} y={cy - 2} textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">CASE</text>
    </NodeBox>
  )
}

function SearchIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg={SF_BLUE}>
      <circle cx={cx} cy={cy} r="13" stroke="white" strokeWidth="1.5" fill="none" />
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="13" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">E</text>
    </NodeBox>
  )
}

function ArticleIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#10A37F">
      <line x1={cx - 10} y1={cy - 8} x2={cx + 10} y2={cy - 8} stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 10} y1={cy - 2} x2={cx + 10} y2={cy - 2} stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 10} y1={cy + 4} x2={cx + 4} y2={cy + 4} stroke="white" strokeWidth="2" strokeLinecap="round" />
    </NodeBox>
  )
}

function ResolveIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg={SF_BLUE}>
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif">✓</text>
    </NodeBox>
  )
}

function UnresolvedIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#D97706">
      <text x={cx} y={cy - 2} textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif">UNRES</text>
    </NodeBox>
  )
}

function PatternIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#0F172A" border="#334155">
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="13" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">A</text>
    </NodeBox>
  )
}

function GapFlagIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#EF4444">
      <text x={cx} y={cy - 2} textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif">GAP</text>
    </NodeBox>
  )
}

function DraftIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#10A37F">
      <text x={cx} y={cy - 2} textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif">PB</text>
      <text x={cx} y={cy + 9} textAnchor="middle" fill="white" fontSize="8" fontFamily="Inter, sans-serif">Draft</text>
    </NodeBox>
  )
}

function ReviewIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#D97706">
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif">Review</text>
    </NodeBox>
  )
}

function KBUpdatedIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg={SF_BLUE}>
      <text x={cx} y={cy - 2} textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="Inter, sans-serif">KB</text>
      <text x={cx} y={cy + 9} textAnchor="middle" fill="white" fontSize="8" fontFamily="Inter, sans-serif">Updated</text>
    </NodeBox>
  )
}

function HeroDiagram() {
  const stroke = '#D0CBC2'
  const sw = 1.8
  const ma = 'url(#arrow-kb)'

  return (
    <svg viewBox="0 0 820 260" className="w-full" style={{ display: 'block' }}>
      <ArrowDefs />

      {/* === TOP ROW: Retrieval flow === */}
      {/* Case → Search */}
      <path d="M84,80 H143" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Search → Article */}
      <path d="M227,80 H283" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Article → Resolve */}
      <path d="M367,80 H423" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* === BOTTOM ROW: Improvement flow === */}
      {/* Unresolved → Pattern */}
      <path d="M84,185 H143" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Pattern → Gap Flag */}
      <path d="M227,185 H283" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Gap Flag → Draft */}
      <path d="M367,185 H423" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Draft → Review */}
      <path d="M507,185 H563" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Review → KB Updated */}
      <path d="M647,185 H703" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* === Cross connections to KB Updated === */}
      {/* Resolve → KB Updated (top to bottom-right) */}
      <path d="M479,108 L479,155 H703 V163" stroke={stroke} strokeWidth={sw} fill="none" strokeDasharray="4,3" markerEnd={ma} />

      {/* === TOP ROW NODES === */}
      <CaseIcon cx={56} cy={80} />
      <NodeLabel cx={56} cy={80} text="Case In" sub="trigger" />

      <SearchIcon cx={171} cy={80} />
      <NodeLabel cx={171} cy={80} text="Semantic" sub="Search" />

      <ArticleIcon cx={311} cy={80} />
      <NodeLabel cx={311} cy={80} text="Article" sub="Retrieved" />

      <ResolveIcon cx={451} cy={80} />
      <NodeLabel cx={451} cy={80} text="Resolve" sub="case" />

      {/* === BOTTOM ROW NODES === */}
      <UnresolvedIcon cx={56} cy={185} />
      <NodeLabel cx={56} cy={185} text="Unresolved" sub="cases" />

      <PatternIcon cx={171} cy={185} />
      <NodeLabel cx={171} cy={185} text="Pattern" sub="Detection" />

      <GapFlagIcon cx={311} cy={185} />
      <NodeLabel cx={311} cy={185} text="Gap" sub="Flag" />

      <DraftIcon cx={451} cy={185} />
      <NodeLabel cx={451} cy={185} text="Article" sub="Draft" />

      <ReviewIcon cx={591} cy={185} />
      <NodeLabel cx={591} cy={185} text="Human" sub="Review" />

      <KBUpdatedIcon cx={731} cy={185} />
      <NodeLabel cx={731} cy={185} text="KB" sub="Updated" />

      {/* Step badges — top row */}
      {([
        [56, 80, '1'], [171, 80, '2'], [311, 80, '3'], [451, 80, '4'],
      ] as [number, number, string][]).map(([x, y, n]) => (
        <g key={`top-${n}`}>
          <circle cx={x + 20} cy={y - 20} r={9} fill={SF_BLUE} />
          <text x={x + 20} y={y - 16} textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="Inter, sans-serif">{n}</text>
        </g>
      ))}

      {/* Step badges — bottom row */}
      {([
        [56, 185, '5'], [311, 185, '6'],
      ] as [number, number, string][]).map(([x, y, n]) => (
        <g key={`bot-${n}`}>
          <circle cx={x + 20} cy={y - 20} r={9} fill={SF_BLUE} />
          <text x={x + 20} y={y - 16} textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="Inter, sans-serif">{n}</text>
        </g>
      ))}

      {/* Row labels */}
      <text x={10} y={84} fontSize="8" fill="#78716C" fontFamily="Inter, sans-serif" fontWeight="600">Retrieval</text>
      <text x={10} y={189} fontSize="8" fill="#78716C" fontFamily="Inter, sans-serif" fontWeight="600">Improvement</text>
    </svg>
  )
}

// ── Step data ─────────────────────────────────────────────────────────────────

const steps = [
  {
    num: 1,
    tool: 'Semantic Article Retrieval',
    toolColor: SF_BLUE,
    title: 'Agent retrieves relevant articles using semantic search, not keyword matching',
    detail: 'When a case enters the resolution flow, the Knowledge Base agent performs a semantic search of the Salesforce Knowledge Base using the case description and classification. Unlike keyword search (which misses articles that use different terminology for the same concept), semantic search understands meaning — a case about "my screen is frozen" retrieves articles about "display unresponsive" and "device not responding" as well. Search is filtered by product version, customer entitlement level, and article approval status. Deprecated articles are never surfaced; draft articles are only surfaced to internal agents, not to customers.',
    tags: ['Semantic Search', 'Einstein Search', 'Entitlement-aware', 'Product Version Filtering', 'Knowledge Status Filter'],
  },
  {
    num: 2,
    tool: 'Contextual Summarisation',
    toolColor: '#10A37F',
    title: 'Relevant steps summarised in conversational language for the customer\'s context',
    detail: 'The agent does not forward the knowledge article link. It summarises the relevant sections in language appropriate to the customer\'s apparent technical level — assessed from how they described the problem. For a technical user describing a specific error code, the agent provides precise technical steps. For a non-technical user describing general confusion, the agent provides simplified language with numbered steps and no jargon. The original article link is also included for customers who want the full documentation. All summaries are generated within the Einstein Trust Layer — no article content leaves Salesforce\'s data boundary.',
    tags: ['Prompt Builder', 'Contextual Summarisation', 'Technical Level Assessment', 'Plain Language', 'Einstein Trust Layer'],
  },
  {
    num: 3,
    tool: 'Gap Detection',
    toolColor: '#EF4444',
    title: 'Cases without matching KB articles are flagged as documentation gaps',
    detail: 'For every case where the agent cannot find a relevant knowledge article above the confidence threshold, the case is tagged as a KB gap. The agent logs: the case type, the search query that returned no results, and the case outcome (how was it resolved if the agent or human found a way?). At the end of each week, the agent aggregates all KB gap flags and generates a gap report: which case types are missing documentation, how many cases were affected, and the suggested article topics based on the gap patterns. The report is posted to the configured Slack channel or emailed to the knowledge management team.',
    tags: ['Gap Detection', 'Confidence Threshold', 'Gap Tagging', 'Weekly Gap Report', 'Documentation Coverage'],
  },
  {
    num: 4,
    tool: 'Pattern Analysis',
    toolColor: '#0F172A',
    title: 'Resolved case patterns analysed to identify where documentation should be updated',
    detail: 'The agent runs weekly analysis on the previous week\'s resolved cases — both human-resolved and autonomously resolved. It looks for patterns: case types with unusually high resolution times (suggesting the existing KB article is unclear or incomplete), case types where agents frequently added manual notes that differ from the KB article (suggesting the article is outdated), and newly emerging case types that have no KB article but were successfully resolved (suggesting a new article should be created). Pattern analysis output is a prioritised list of KB update actions, ranked by case volume affected.',
    tags: ['Pattern Analysis', 'Resolution Time Analysis', 'Article Freshness Detection', 'Emerging Issue Detection', 'Update Prioritisation'],
  },
  {
    num: 5,
    tool: 'Article Draft Generation',
    toolColor: '#10A37F',
    title: 'Prompt Builder drafts new and updated articles from resolved case data',
    detail: 'For identified gaps and outdated articles, Prompt Builder generates draft articles using the resolved case data as source material. For new articles, it uses the resolution steps that human agents applied to the unresolved cases as the procedure. For updates to existing articles, it generates a revised version with the corrections agents applied in practice added to the documented steps. All drafts follow your configured KB article template — title, summary, procedure steps, related articles section. Drafts are flagged as \'Draft — Review Required\' and never published automatically.',
    tags: ['Prompt Builder', 'Article Draft', 'Resolution-based Content', 'KB Template', 'Draft Status', 'Review Gate'],
  },
  {
    num: 6,
    tool: 'Review, Approval & KB Update',
    toolColor: SF_BLUE,
    title: 'Human review required before any article is published or updated',
    detail: 'All AI-generated article drafts are queued in a dedicated Knowledge Management review flow. The knowledge manager sees: the draft article, the source cases it was generated from, the gap or outdatedness signal that triggered it, and a diff view for updates to existing articles. Review typically takes 10–15 minutes per article (reading and approving) versus 2–3 hours for an agent to write from scratch. Once approved, the article is published to the correct audience (internal, partner, or customer-facing). Article performance metrics (how often it is retrieved, CSAT on cases it resolved) feed back to the KB agent to improve future retrieval ranking.',
    tags: ['Human Review Gate', 'Knowledge Manager Workflow', 'Diff View', 'Article Publication', 'Performance Feedback Loop', 'Retrieval Ranking'],
  },
]

// ── Tech stack ────────────────────────────────────────────────────────────────

const techStack = [
  { name: 'Atlas Reasoning Engine', role: 'Gap + pattern detection', color: SF_BLUE, desc: 'Runs weekly pattern analysis on resolved cases to identify documentation gaps, outdated articles, and emerging issue types.' },
  { name: 'Salesforce Knowledge', role: 'Article repository', color: '#10A37F', desc: 'The native Salesforce KB that the agent retrieves from, improves, and updates — maintaining a single source of truth for all support documentation.' },
  { name: 'Einstein Search', role: 'Semantic retrieval', color: '#8B5CF6', desc: 'Powers semantic article retrieval — understanding meaning rather than keywords so the right article surfaces for every case description.' },
  { name: 'Prompt Builder', role: 'Article drafting', color: '#FF4F00', desc: 'Generates new article drafts and updated article versions from resolved case data — using your KB template and following your documentation standards.' },
  { name: 'Salesforce Flow', role: 'Review workflow', color: '#D97706', desc: 'Manages the knowledge management review queue — notifying reviewers, tracking draft status, and publishing approved articles to the correct audience.' },
  { name: 'Einstein Trust Layer', role: 'Data security', color: '#0F172A', desc: 'Ensures case data used for article generation stays within Salesforce. No customer information leaves the platform during KB improvement processing.' },
  { name: 'Slack', role: 'Gap reporting', color: '#4A154B', desc: 'Delivers weekly KB gap reports and update priority lists to the knowledge management team in the configured Slack channel.' },
]

// ── Outcomes ──────────────────────────────────────────────────────────────────

const outcomes = [
  { stat: '3×', label: 'faster article retrieval', sub: 'vs manual search' },
  { stat: '85%', label: 'KB hit rate', sub: 'for L1/L2 cases' },
  { stat: '60%', label: 'gap detection', sub: 'before customers notice' },
  { stat: 'Auto', label: 'article updates', sub: 'from resolved cases' },
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

export default function KnowledgeBaseAgentPage() {
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
          <span className="text-white/55">Knowledge Base Agent</span>
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
              Knowledge Base Agent —<br />
              <span className="bg-gradient-to-r from-[#00A1E0] to-[#0077B6] bg-clip-text text-transparent">Self-Improving Support Documentation</span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-base leading-relaxed text-white/55 max-w-lg">
              Surfaces the right knowledge articles during every case resolution. Detects documentation gaps from unresolved case patterns. Drafts new articles from resolved case outcomes. Your knowledge base improves automatically with every case your team handles.
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
              {['Atlas Reasoning Engine', 'Salesforce Knowledge', 'Einstein Search', 'Prompt Builder', 'Salesforce Flow', 'Einstein Trust Layer'].map(t => (
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
              <span className="text-[11px] font-medium text-white/40 font-display tracking-wide uppercase">Agentforce reasoning flow — retrieval + continuous improvement</span>
            </div>
            <HeroDiagram />
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-4">
              {[
                { label: 'Retrieval', value: 'Semantic search' },
                { label: 'Gap cycle', value: 'Weekly analysis' },
                { label: 'Publish gate', value: 'Human review' },
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
                Kovil AI scopes, builds, tests and deploys this Agentforce configuration end-to-end. You do not touch Agent Builder until your KB is surfacing the right articles and improving automatically.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {[
                  'Knowledge Base agent with semantic retrieval and contextual summarisation',
                  'Gap detection system with confidence threshold and weekly gap reporting',
                  'Resolved case pattern analysis running on weekly schedule',
                  'Prompt Builder article drafting templates following your KB format',
                  'Knowledge manager review workflow with diff view for updates',
                  'Slack integration for weekly gap reports and update priority lists',
                  'Article performance feedback loop for retrieval ranking improvement',
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
                  { week: 'Week 1', title: 'Retrieval + summarisation', items: ['Semantic search configuration, entitlement filtering, contextual summarisation Prompt Builder'] },
                  { week: 'Week 2', title: 'Gap detection + patterns', items: ['Gap tagging logic, confidence threshold, pattern analysis scheduling'] },
                  { week: 'Week 3', title: 'Draft + review flow + deploy', items: ['Article draft generation, knowledge manager workflow, Slack reporting, production deployment'] },
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
                q: 'Will the agent publish articles automatically?',
                a: 'Never. All AI-generated drafts require human review and approval before publication. The agent creates drafts flagged as \'Draft — Review Required\' and queues them for the knowledge manager. The human reviewer reads the draft, checks it against the source cases, and approves or edits before publishing. The AI removes the blank-page problem and reduces writing time from hours to minutes — but a human always makes the final call.',
              },
              {
                q: 'How does it know when an existing article is outdated?',
                a: 'The agent compares two signals: resolution notes added by agents (if agents are consistently adding the same correction that is not in the article, the article is likely outdated) and resolution time for cases that matched the article (if resolution time is significantly longer than average despite the article being retrieved, the article may not be solving the problem). Both signals feed into the weekly pattern analysis and surface the article for review.',
              },
              {
                q: 'Can it handle multiple languages?',
                a: 'Semantic search and gap detection work across all languages configured in your Salesforce Knowledge instance. Article draft generation via Prompt Builder supports English natively and can generate drafts in other languages if configured. Multi-language KB management — maintaining parity across language versions — can be added as a separate configuration during the sprint.',
              },
              {
                q: 'What is the typical KB coverage improvement after deployment?',
                a: 'Within 90 days, clients typically see a 30–50% improvement in KB article hit rate (percentage of cases where a relevant article is found), driven by: new articles filling identified gaps, updated articles that were previously unhelpful, and improved retrieval ranking. The hit rate improvement directly correlates with autonomous resolution rate — more relevant KB articles means more cases the resolution agent can handle without human intervention.',
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
            A knowledge base that improves itself.
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Book a 30-minute discovery call. We&apos;ll audit your current KB coverage against your case type distribution and scope a 3-week implementation that closes your documentation gaps automatically.
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
