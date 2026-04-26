'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Clock, CheckCircle, ChevronRight, FileText } from 'lucide-react'
import { openCalendly } from '../../lib/calendly'

// ── Brand-coloured node icons ─────────────────────────────────────────────────

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

function KeywordIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#8B5CF6">
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="12" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">KW</text>
    </NodeBox>
  )
}

function PerplexityIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#0099FF">
      <circle cx={cx} cy={cy} r="12" stroke="white" strokeWidth="2" fill="none" />
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="10" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">PPX</text>
    </NodeBox>
  )
}

function GapIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#F59E0B">
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="10" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">GAP</text>
    </NodeBox>
  )
}

function OpenAIIcon({ cx, cy }: { cx: number; cy: number }) {
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

function HumanReviewIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#EC4899">
      <circle cx={cx} cy={cy - 6} r={7} fill="white" opacity={0.9} />
      <path d={`M${cx - 10},${cy + 13} Q${cx - 10},${cy + 3} ${cx},${cy + 3} Q${cx + 10},${cy + 3} ${cx + 10},${cy + 13}`} fill="white" opacity={0.9} />
    </NodeBox>
  )
}

function PublishIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#22C55E">
      <polygon points={`${cx},${cy - 12} ${cx + 10},${cy + 4} ${cx - 10},${cy + 4}`} fill="white" opacity={0.9} />
      <rect x={cx - 5} y={cy + 4} width={10} height={8} rx={2} fill="white" opacity={0.9} />
    </NodeBox>
  )
}

function ArrowDefs() {
  return (
    <defs>
      <marker id="arrow-content" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
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

function HeroDiagram() {
  const stroke = '#D0CBC2'
  const sw = 1.8
  const ma = 'url(#arrow-content)'

  const nodes = [
    { cx: 65, cy: 120 },
    { cx: 195, cy: 120 },
    { cx: 325, cy: 120 },
    { cx: 455, cy: 120 },
    { cx: 585, cy: 120 },
    { cx: 715, cy: 120 },
  ]

  return (
    <svg viewBox="0 0 780 240" className="w-full" style={{ display: 'block' }}>
      <ArrowDefs />

      {nodes.slice(0, 5).map((n, i) => (
        <path key={i} d={`M${n.cx + 28},${n.cy} H${nodes[i + 1].cx - 28}`} stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      ))}

      <KeywordIcon cx={nodes[0].cx} cy={nodes[0].cy} />
      <NodeLabel cx={nodes[0].cx} cy={nodes[0].cy} text="Keyword" sub="Notion/Slack" />

      <PerplexityIcon cx={nodes[1].cx} cy={nodes[1].cy} />
      <NodeLabel cx={nodes[1].cx} cy={nodes[1].cy} text="SERP Map" sub="Perplexity" />

      <GapIcon cx={nodes[2].cx} cy={nodes[2].cy} />
      <NodeLabel cx={nodes[2].cx} cy={nodes[2].cy} text="Gap Analysis" sub="Unique angles" />

      <OpenAIIcon cx={nodes[3].cx} cy={nodes[3].cy} />
      <NodeLabel cx={nodes[3].cx} cy={nodes[3].cy} text="GPT-4o Draft" sub="Brand voice" />

      <HumanReviewIcon cx={nodes[4].cx} cy={nodes[4].cy} />
      <NodeLabel cx={nodes[4].cx} cy={nodes[4].cy} text="Review" sub="10% of time" />

      <PublishIcon cx={nodes[5].cx} cy={nodes[5].cy} />
      <NodeLabel cx={nodes[5].cx} cy={nodes[5].cy} text="Publish" sub="CMS + GSC" />

      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.cx + 20} cy={n.cy - 20} r={9} fill="#A78BFA" />
          <text x={n.cx + 20} y={n.cy - 16} textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="Inter, sans-serif">{i + 1}</text>
        </g>
      ))}
    </svg>
  )
}

// ── Step data ─────────────────────────────────────────────────────────────────

const steps = [
  {
    num: 1,
    tool: 'Notion / Slack',
    toolColor: '#8B5CF6',
    title: 'Target keyword submitted via Notion content calendar or Slack command',
    detail: 'The workflow begins when a content strategist adds a target keyword to the Notion content calendar or types a Slack command. Either action triggers an n8n webhook that captures the keyword, target URL (if updating existing content), tone instructions, and any brand-specific requirements. The trigger is flexible — bulk keyword batches from a Notion database view can queue multiple articles simultaneously, running the pipeline in parallel for each.',
    tags: ['Notion Webhook', 'Slack Command', 'n8n Trigger', 'Batch Processing', 'Keyword Queue'],
  },
  {
    num: 2,
    tool: 'Perplexity API',
    toolColor: '#0099FF',
    title: 'Perplexity API autonomously analyzes top 10 SERP results, maps competitor H2 structures',
    detail: 'Perplexity API receives the target keyword and autonomously searches the web, analyzing the top 10 ranking pages. It extracts each page\'s H2 structure, approximate word count, content format (listicle, guide, comparison, FAQ), and key subtopics covered. The analysis is returned as structured JSON — a complete map of what currently ranks and how it is structured. This replaces 45–60 minutes of manual SERP analysis per article.',
    tags: ['Perplexity API', 'SERP Analysis', 'H2 Extraction', 'Word Count Benchmarking', 'Content Format Classification', 'Structured JSON Output'],
  },
  {
    num: 3,
    tool: 'Gap Analysis Engine',
    toolColor: '#F59E0B',
    title: 'Information gap analysis identifies topics the top 10 miss — unique angles the client can own',
    detail: 'GPT-4o receives the SERP map and runs a gap analysis: what subtopics, questions, or perspectives appear in none or fewer than 3 of the top 10 results? These gaps represent differentiation opportunities — angles the client can own to stand out from identical-looking competitor content. The gap map also identifies which H2 topics are over-represented (covered by 8+ competitors) and therefore offer low differentiation value. Output is a prioritized list of unique angles to include.',
    tags: ['Gap Analysis', 'Differentiation Mapping', 'Underserved Topics', 'Competitive Angle Identification', 'Surfer SEO Integration'],
  },
  {
    num: 4,
    tool: 'GPT-4o',
    toolColor: '#10A37F',
    title: 'GPT-4o fed brand voice guide + seed paragraphs + gap map — outputs structured draft with all H2s',
    detail: 'GPT-4o receives three inputs: the client\'s brand voice guide (stored in a Notion doc and pulled via API), 2–3 human-written seed paragraphs (specific anecdotes, proprietary data, or case study references that give the content authentic depth), and the gap map from step 3. It outputs a structured draft with all H2s, introduction, body sections covering the gap topics, and a conclusion. The draft is intentionally not polished — it is a structural scaffold for the human reviewer.',
    tags: ['GPT-4o', 'Brand Voice Guide', 'Seed Paragraphs', 'Structured Draft', 'H2 Generation', 'Gap Topic Coverage'],
  },
  {
    num: 5,
    tool: 'Human Review',
    toolColor: '#EC4899',
    title: 'Human strategist reviews draft: injects anecdotes, verifies data, adds internal links',
    detail: 'The human strategist receives the structured draft in Notion or Google Docs. Their role is the 10%: inject 2–3 specific client anecdotes or case study references that AI cannot fabricate, verify any statistics or claims GPT-4o cited, add internal links to relevant existing content, and adjust tone in 2–3 sections where the AI output feels generic. The review typically takes 15–25 minutes — compared to 3–4 hours to write from scratch. Total output: a genuinely differentiated article, not a generic AI post.',
    tags: ['Human Review', 'Anecdote Injection', 'Data Verification', 'Internal Linking', 'Tone Refinement', '15-25 Min Review'],
  },
  {
    num: 6,
    tool: 'CMS + GSC',
    toolColor: '#22C55E',
    title: 'Final article pushed to CMS, internal links mapped, GSC URL submitted for indexing',
    detail: 'The approved article is pushed to the client\'s CMS via API (WordPress, Webflow, or Contentful). Internal links are finalized using a link map generated from the existing content library. Meta title and description are generated by GPT-4o using the target keyword and brand voice. The Google Search Console URL inspection API is called to submit the new URL for indexing. An Airtable content calendar record is updated with the publish date, target keyword, and initial rank tracking row.',
    tags: ['CMS API', 'WordPress / Webflow / Contentful', 'GSC URL Submission', 'Internal Link Mapping', 'Meta Tag Generation', 'Airtable Content Calendar'],
  },
]

// ── Tech stack ────────────────────────────────────────────────────────────────

const techStack = [
  { name: 'Perplexity API', role: 'SERP analysis', color: '#0099FF', desc: 'Autonomously analyzes top 10 SERP results per keyword — extracts H2 structures, word counts, and subtopic coverage without manual research.' },
  { name: 'GPT-4o', role: 'Draft generation', color: '#10A37F', desc: 'Generates structured article drafts from brand voice guide + human seed paragraphs + gap map. Produces scaffolding, not final copy.' },
  { name: 'n8n', role: 'Orchestration', color: '#F65B2B', desc: 'Connects keyword trigger to Perplexity SERP analysis, gap mapping, GPT-4o drafting, and CMS publishing in a single automated pipeline.' },
  { name: 'Notion', role: 'Content calendar + brand voice', color: '#3D3D3D', desc: 'Stores brand voice guides, content calendar, keyword queue, and human-written seed paragraphs. Pulls into GPT-4o prompt via API.' },
  { name: 'Surfer SEO', role: 'On-page optimization', color: '#FF6B35', desc: 'Optional integration: Surfer SEO scores the draft for keyword density, NLP entity coverage, and heading structure before publish.' },
  { name: 'Google Search Console', role: 'Indexing + rank tracking', color: '#4285F4', desc: 'URL submitted for indexing after publish. Weekly rank position tracking per keyword fed back into the content calendar.' },
]

// ── Outcomes ──────────────────────────────────────────────────────────────────

const outcomes = [
  { stat: '90%', label: 'drafting time saved', sub: 'vs. manual writing' },
  { stat: '15 min', label: 'human review time', sub: 'per article' },
  { stat: '10x', label: 'content output', sub: 'same team size' },
  { stat: 'Top 3', label: 'SERP performance', sub: 'vs. generic AI content' },
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

export default function HybridContentPage() {
  const industryColor = '#A78BFA'
  const accentColor = '#A78BFA'

  return (
    <div className="min-h-screen bg-[#080808] text-white">

      {/* ── BREADCRUMB ──────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-0">
        <nav className="flex items-center gap-2 text-xs text-white/35">
          <Link href="/ai-workflow-automation-library" className="flex items-center gap-1 hover:text-white/70 transition-colors">
            <ArrowLeft size={12} /> AI Workflow Library
          </Link>
          <ChevronRight size={11} className="text-white/20" />
          <span className="text-white/55">Deep SERP-First Hybrid Content Generation</span>
        </nav>
      </div>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-4">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">

          <div>
            <motion.div {...fade(0)}>
              <span className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide font-display"
                style={{ color: industryColor, background: `${industryColor}18`, border: `1px solid ${industryColor}28` }}>
                Ad &amp; Marketing
              </span>
            </motion.div>

            <motion.h1 {...fade(0.06)}
              className="mt-5 font-display text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.06] tracking-tight text-white">
              Deep SERP-First<br />
              <span className="bg-gradient-to-r from-[#A78BFA] to-[#818CF8] bg-clip-text text-transparent">Hybrid Content Generation</span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-base leading-relaxed text-white/55 max-w-lg">
              Generic AI content fails to rank. The 90/10 hybrid loop — Perplexity maps SERP gaps, GPT-4o drafts, human strategists inject anecdotes and verify data — produces content that dominates rankings.
            </motion.p>

            <motion.div {...fade(0.14)} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {outcomes.map(o => (
                <div key={o.stat} className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-4">
                  <p className="font-display text-2xl font-bold" style={{ color: accentColor }}>{o.stat}</p>
                  <p className="mt-0.5 text-xs font-medium text-white/70">{o.label}</p>
                  <p className="text-[10px] text-white/35">{o.sub}</p>
                </div>
              ))}
            </motion.div>

            <motion.div {...fade(0.18)} className="mt-6 flex flex-wrap gap-2">
              {['Perplexity API', 'GPT-4o', 'n8n', 'Notion', 'Google Search Console', 'Surfer SEO'].map(t => (
                <span key={t} className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/50">
                  {t}
                </span>
              ))}
            </motion.div>

            <motion.div {...fade(0.22)} className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={openCalendly}
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 font-display cursor-pointer"
                style={{ background: accentColor, boxShadow: `0 4px 24px ${accentColor}4D` }}
              >
                Build this content pipeline <ArrowRight size={15} />
              </button>
              <Link
                href="/ai-workflow-automation-library"
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.10] px-6 py-3 text-sm text-white/65 hover:text-white hover:border-white/25 transition-colors"
              >
                ← Browse all workflows
              </Link>
            </motion.div>

            <motion.p {...fade(0.26)} className="mt-5 flex items-center gap-2 text-xs text-white/35">
              <Clock size={12} style={{ color: `${accentColor}B3` }} />
              Typical build: <span className="text-white/55 font-medium">2–3 week sprint · Fixed price · Zero delivery risk</span>
            </motion.p>
          </div>

          <motion.div {...fade(0.1)} className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 shadow-2xl">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full animate-pulse" style={{ background: accentColor }} />
              <span className="text-[11px] font-medium text-white/40 font-display tracking-wide uppercase">To be built — runs on every target keyword</span>
            </div>
            <HeroDiagram />
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-4">
              {[
                { label: 'Human time', value: '15 min/article' },
                { label: 'SERP analysis', value: 'Top 10 mapped' },
                { label: 'Time saved', value: '90% drafting' },
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
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] font-display" style={{ color: `${accentColor}B3` }}>The problem</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-white">Why generic AI content fails to rank</h2>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: FileText, title: 'Generic AI content mirrors existing rankings — Google ignores it', desc: 'When GPT-4o is prompted with just a keyword and no SERP context, it produces content that mirrors what already ranks. Google\'s algorithms have become adept at detecting this and suppressing it. SERP-first generation creates genuinely differentiated content.' },
            { icon: FileText, title: 'Manual SERP analysis takes 45–60 minutes per article — before writing begins', desc: 'SEO writers must analyze 10 competitors before drafting. That\'s 45–60 minutes of reading, H2 extraction, and gap identification before a single word is written. At 20 articles per month, that\'s 15–20 hours of analysis work alone.' },
            { icon: FileText, title: 'Fully AI-generated content lacks the specific details that build authority', desc: 'The 1% of content that dominates rankings includes proprietary data, specific case studies, and authentic anecdotes that AI cannot fabricate. The 90/10 hybrid approach preserves AI speed while injecting the human specificity that separates ranking content from noise.' },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div key={item.title} {...fade(i * 0.08)}
                className="rounded-2xl border border-white/[0.07] bg-[#111111] p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border"
                  style={{ background: `${accentColor}1A`, borderColor: `${accentColor}33` }}>
                  <Icon size={18} style={{ color: accentColor }} />
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
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] font-display" style={{ color: `${accentColor}B3` }}>How it works</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-white">Every step, explained</h2>
            <p className="mt-2 text-white/45 text-sm max-w-xl">
              This is the actual workflow Kovil AI engineers can build and deploy — not a diagram. Here is what runs inside every node.
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
          <h2 className="mt-2 font-display text-3xl font-bold text-white">Every tool in the workflow</h2>
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
              <h2 className="mt-2 font-display text-3xl font-bold text-white">A 2–3 week sprint. Production ready.</h2>
              <p className="mt-4 text-white/50 text-sm leading-relaxed">
                Kovil AI engineers scope, build, test and deploy this content pipeline end-to-end. Your team adds keywords and reviews drafts — the pipeline handles everything else.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {[
                  'Notion content calendar + Slack command integration via n8n webhook',
                  'Perplexity API SERP analysis with structured JSON output',
                  'GPT-4o gap analysis and draft generation with brand voice guide',
                  'Human review workflow in Notion or Google Docs with approval gate',
                  'CMS API integration (WordPress, Webflow, or Contentful)',
                  'Google Search Console URL submission after publish',
                  'Airtable content calendar with rank tracking integration',
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
                    2–3 weeks
                  </span>
                </div>
                {[
                  { week: 'Week 1', title: 'Intake + SERP pipeline', items: ['Notion/Slack trigger + Perplexity SERP analysis + gap mapping'] },
                  { week: 'Week 2', title: 'Draft + review flow', items: ['GPT-4o brand-voice drafting + human review workflow in Notion/Docs'] },
                  { week: 'Week 2–3', title: 'Publish + deploy', items: ['CMS API + GSC submission + Airtable calendar + full deployment'] },
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
              { q: 'Why does AI-only content fail to rank?', a: "Generic AI content fails to rank because it lacks the E-E-A-T signals Google's ranking systems reward: Experience (first-hand accounts), Expertise (depth beyond surface summaries), Authoritativeness (original perspectives), and Trustworthiness (verifiable data). AI models trained on public data produce content that mirrors what already ranks — creating a more polished version of existing content rather than something differentiated. Google's spam detection systems are specifically trained to identify and suppress this pattern." },
              { q: 'What is the 90/10 rule in this workflow?', a: 'AI handles 90% of the work: SERP research, competitor structure mapping, information gap identification, H2 scaffolding, and first-draft writing. Human strategists handle 10%: injecting first-hand anecdotes, verifying statistics against primary sources, adding nuanced internal links, and adjusting 2–3 sections that need a genuine human voice. This ratio produces content that scales economically while maintaining the differentiation signals that rank.' },
              { q: 'How does Perplexity API analyse the top 10 SERP results?', a: "The Perplexity API call is structured to return a structured analysis of the top 10 ranking pages for the target keyword: each page's H2 structure, approximate word count, content format (listicle, guide, comparison), and subtopics covered. n8n then runs a frequency analysis across all 10 results to identify which subtopics appear in fewer than 3 results — these are the information gaps worth targeting." },
              { q: 'How long does the full workflow take from keyword to published article?', a: 'The automated portion — SERP analysis, gap mapping, and GPT-4o draft generation — takes 8–12 minutes. Human review and anecdote injection takes 15–25 minutes. CMS publishing and GSC indexing submission takes under 2 minutes via API. Total time from keyword submission to live published article: under 45 minutes.' },
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
          <FileText size={24} className="relative mx-auto mb-4" style={{ color: accentColor }} />
          <h2 className="relative font-display text-[clamp(22px,3.5vw,36px)] font-bold text-white">
            10x your content output without 10x the team.
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Book a 30-minute discovery call. Kovil AI engineers will scope the Perplexity SERP pipeline, GPT-4o brand voice configuration, and CMS integration for your specific content operation — fixed price, zero delivery risk.
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
