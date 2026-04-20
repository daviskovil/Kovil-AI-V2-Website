'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Clock, CheckCircle, ChevronRight, MessageSquare } from 'lucide-react'

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

function RedditIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#FF4500">
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="12" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">RED</text>
    </NodeBox>
  )
}

function LinkedInIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#0A66C2">
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="13" fontWeight="900" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">in</text>
    </NodeBox>
  )
}

function ClaudeIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#CC785C">
      <circle cx={cx} cy={cy} r="13" stroke="white" strokeWidth="2" fill="none" />
      <circle cx={cx} cy={cy} r="5" fill="white" />
    </NodeBox>
  )
}

function DashboardIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#6366F1">
      <rect x={cx - 12} y={cy - 10} width={24} height={20} rx={3} fill="white" opacity={0.9} />
      <rect x={cx - 9} y={cy - 4} width={5} height={10} rx={1} fill="#6366F1" />
      <rect x={cx - 2} y={cy - 7} width={5} height={13} rx={1} fill="#6366F1" />
      <rect x={cx + 5} y={cy} width={5} height={6} rx={1} fill="#6366F1" />
    </NodeBox>
  )
}

function DraftIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#10A37F">
      <rect x={cx - 10} y={cy - 12} width={20} height={24} rx={3} fill="white" opacity={0.9} />
      <line x1={cx - 6} y1={cy - 6} x2={cx + 6} y2={cy - 6} stroke="#10A37F" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 6} y1={cy - 1} x2={cx + 6} y2={cy - 1} stroke="#10A37F" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 6} y1={cy + 4} x2={cx + 2} y2={cy + 4} stroke="#10A37F" strokeWidth="2" strokeLinecap="round" />
    </NodeBox>
  )
}

function PublishIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#22C55E">
      <polygon points={`${cx - 2},${cy - 13} ${cx + 12},${cy} ${cx - 2},${cy + 13}`} fill="white" opacity={0.9} />
    </NodeBox>
  )
}

function ArrowDefs() {
  return (
    <defs>
      <marker id="arrow-social" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
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
  const ma = 'url(#arrow-social)'

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

      <RedditIcon cx={nodes[0].cx} cy={nodes[0].cy} />
      <NodeLabel cx={nodes[0].cx} cy={nodes[0].cy} text="Reddit API" sub="+ LinkedIn" />

      <LinkedInIcon cx={nodes[1].cx} cy={nodes[1].cy} />
      <NodeLabel cx={nodes[1].cx} cy={nodes[1].cy} text="LinkedIn" sub="Groups/posts" />

      <ClaudeIcon cx={nodes[2].cx} cy={nodes[2].cy} />
      <NodeLabel cx={nodes[2].cx} cy={nodes[2].cy} text="Claude Score" sub="3 axes" />

      <DashboardIcon cx={nodes[3].cx} cy={nodes[3].cy} />
      <NodeLabel cx={nodes[3].cx} cy={nodes[3].cy} text="Dashboard" sub="High-signal" />

      <DraftIcon cx={nodes[4].cx} cy={nodes[4].cy} />
      <NodeLabel cx={nodes[4].cx} cy={nodes[4].cy} text="Draft Reply" sub="Claude" />

      <PublishIcon cx={nodes[5].cx} cy={nodes[5].cy} />
      <NodeLabel cx={nodes[5].cx} cy={nodes[5].cy} text="Publish" sub="Human approves" />

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
    tool: 'Reddit API + Python',
    toolColor: '#FF4500',
    title: 'Custom scripts monitor subreddits, LinkedIn groups, and niche forums every 30 minutes',
    detail: 'Custom Python scripts connect to the Reddit API and LinkedIn API, monitoring a configured list of subreddits, LinkedIn groups, and niche industry forums for posts containing client-specific keywords, competitor names, and problem-statement phrases. The monitor runs every 30 minutes via n8n scheduler. New posts are deduplicated against a rolling 7-day history stored in Airtable — each post is only processed once. Platform-specific rate limits are respected automatically.',
    tags: ['Reddit API', 'LinkedIn API', 'Python Scripts', 'n8n Scheduler', '30-Minute Cadence', 'Deduplication'],
  },
  {
    num: 2,
    tool: 'Claude 3.5 Sonnet',
    toolColor: '#CC785C',
    title: 'Claude 3.5 Sonnet scores each post on 3 axes: relevance, engagement potential, purchase intent',
    detail: 'Claude 3.5 Sonnet receives each new post and scores it on three axes: (1) Relevance to client ICP (0–10): does the poster match the target customer profile based on their history, flair, and post content? (2) Engagement potential (0–10): is this a high-visibility post likely to be seen by many users? (3) Purchase intent signal (0–10): does the post suggest the person is actively considering a solution? Each score is returned as structured JSON with a one-sentence rationale — enabling the human reviewer to understand why a post was elevated.',
    tags: ['Claude 3.5 Sonnet', 'ICP Relevance Score', 'Engagement Potential', 'Purchase Intent Signal', 'Structured JSON Scoring', 'Score Rationale'],
  },
  {
    num: 3,
    tool: 'Threshold Filter',
    toolColor: '#6366F1',
    title: 'Posts scoring above threshold (default 21/30 combined) forwarded to dashboard',
    detail: 'n8n evaluates the combined score from Claude. Posts scoring above the configurable threshold (default: 21/30) are written to the client\'s Airtable monitoring dashboard. The threshold is client-configurable — a highly selective client might set 24/30; a high-volume engagement strategy might use 18/30. All posts are stored regardless of score for reporting purposes, but only high-scorers appear in the active review queue. The dashboard shows post URL, platform, score breakdown, post content, and the Claude-generated rationale.',
    tags: ['Configurable Threshold', 'Airtable Dashboard', 'Score Breakdown', 'Review Queue', 'Full Post Storage', 'Volume Control'],
  },
  {
    num: 4,
    tool: 'Claude 3.5 Sonnet',
    toolColor: '#10A37F',
    title: 'Claude drafts a contextual reply for each qualifying post',
    detail: 'For each post that clears the threshold, Claude 3.5 Sonnet drafts a contextual reply. The reply is constrained by the client\'s community guidelines playbook (stored in a Notion doc): specific topics to avoid, claims that require substantiation, approved and blocked phrases, and a tone description. Replies are helpful first — not promotional. Claude is explicitly instructed to avoid mentioning the client by name unless the post directly asks for a recommendation, and even then to frame it naturally within the context of the conversation.',
    tags: ['Claude Reply Draft', 'Community Guidelines', 'Tone Playbook', 'Non-Promotional Framing', 'Notion Guidelines', 'Contextual Response'],
  },
  {
    num: 5,
    tool: 'Human Approval',
    toolColor: '#EC4899',
    title: 'Human operator reviews dashboard: upvotes reply, edits for nuance, and clicks publish',
    detail: 'The account manager opens the Airtable dashboard and sees a queue of high-signal posts, each with: the original post content, Claude\'s score breakdown, the drafted reply, and one-click approve/edit/skip actions. The typical review takes 30–60 seconds per post. The operator can approve the reply as-is, make quick edits directly in the Airtable cell, or skip the post entirely. Approved replies are sent to a publish queue — never auto-published without human sign-off. This maintains community authenticity and prevents brand risk.',
    tags: ['Human Approval', 'Airtable Queue', 'One-Click Approve', 'Inline Editing', 'Skip Option', 'No Auto-Publish'],
  },
  {
    num: 6,
    tool: 'Airtable Logging',
    toolColor: '#22C55E',
    title: 'All published engagements logged to Airtable with post URL, reply, score, and outcome tracking',
    detail: 'After publish, n8n logs the complete engagement record to Airtable: post URL, platform, original post content, published reply text, all three Claude scores, publish timestamp, and the human reviewer who approved it. A weekly Slack digest is posted every Monday: total posts monitored, high-signal posts identified, replies published, and any notable engagements (posts that generated significant response). This creates a growing record of community engagement that informs future content strategy.',
    tags: ['Airtable Logging', 'Full Engagement Record', 'Outcome Tracking', 'Weekly Slack Digest', 'Content Strategy Input', 'Audit Trail'],
  },
]

// ── Tech stack ────────────────────────────────────────────────────────────────

const techStack = [
  { name: 'Reddit API', role: 'Community monitoring', color: '#FF4500', desc: 'Monitors configured subreddits for keyword matches every 30 minutes. Returns post content, engagement metrics, and poster history for scoring.' },
  { name: 'Python', role: 'Scraping + processing', color: '#3776AB', desc: 'Custom scripts handle Reddit pagination, LinkedIn API calls, deduplication logic, and niche forum monitoring where APIs are unavailable.' },
  { name: 'Claude 3.5 Sonnet', role: 'Scoring + drafting', color: '#CC785C', desc: 'Scores posts on 3 axes with rationale. Drafts contextual replies following client community guidelines. Returns structured JSON output.' },
  { name: 'n8n', role: 'Orchestration', color: '#F65B2B', desc: 'Runs 30-minute monitoring scheduler, routes posts to Claude for scoring, manages threshold filtering, and coordinates publish workflow.' },
  { name: 'Airtable', role: 'Dashboard + logging', color: '#FFB347', desc: 'Hosts the human review dashboard. Stores all posts, scores, drafts, and published replies with full outcome tracking.' },
  { name: 'Slack', role: 'Weekly digest', color: '#4A154B', desc: 'Posts Monday digest: posts monitored, high-signal identified, replies published. Immediate alerts for exceptionally high-scoring posts.' },
]

// ── Outcomes ──────────────────────────────────────────────────────────────────

const outcomes = [
  { stat: '10x', label: 'signal-to-noise', sub: 'vs. manual monitoring' },
  { stat: '30 min', label: 'check cadence', sub: 'across all platforms' },
  { stat: '3', label: 'scoring axes', sub: 'per post' },
  { stat: '0', label: 'auto-published', sub: 'always human-approved' },
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

export default function SocialIntelligencePage() {
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
          <span className="text-white/55">Social Intelligence & Algorithmic Subreddit Scraping</span>
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
              Social Intelligence<br />
              <span className="bg-gradient-to-r from-[#A78BFA] to-[#818CF8] bg-clip-text text-transparent">&amp; Algorithmic Subreddit Scraping</span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-base leading-relaxed text-white/55 max-w-lg">
              Organic community management requires sifting thousands of posts manually. AI scoring surfaces the 1% worth engaging with — and pre-drafts replies that a human approves in 30 seconds.
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
              {['Reddit API', 'Python', 'Claude 3.5 Sonnet', 'n8n', 'Airtable', 'Slack'].map(t => (
                <span key={t} className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/50">
                  {t}
                </span>
              ))}
            </motion.div>

            <motion.div {...fade(0.22)} className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://calendly.com/kovil-ai/talent" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 font-display"
                style={{ background: accentColor, boxShadow: `0 4px 24px ${accentColor}4D` }}
              >
                Build this for my team <ArrowRight size={15} />
              </a>
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
              <span className="text-[11px] font-medium text-white/40 font-display tracking-wide uppercase">To be built — monitors every 30 minutes</span>
            </div>
            <HeroDiagram />
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-4">
              {[
                { label: 'Monitor cadence', value: 'Every 30 min' },
                { label: 'Scoring axes', value: '3 per post' },
                { label: 'Signal ratio', value: '10x improvement' },
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
          <h2 className="mt-2 font-display text-3xl font-bold text-white">Why manual community monitoring doesn&apos;t scale</h2>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: MessageSquare, title: 'Reading thousands of posts to find 10 worth engaging with is not a strategy', desc: 'A community manager manually monitoring Reddit and LinkedIn reads thousands of posts per week to find the handful where a thoughtful reply could generate leads. That is 80–90% of their week spent filtering noise — not creating value.' },
            { icon: MessageSquare, title: 'Organic community engagement has the highest trust-to-cost ratio in marketing', desc: 'A genuinely helpful reply in the right subreddit generates more trust than a $50 CPM ad. The problem is not the channel — it\'s the scale. AI scoring makes the channel viable without a team of 5 community managers.' },
            { icon: MessageSquare, title: 'Without a scoring system, teams engage on the wrong posts and miss the high-intent ones', desc: 'Manual community teams naturally gravitate toward the most upvoted posts — which are the most competitive. The highest-value engagement opportunities are buried in second-page posts with 12 upvotes from someone actively comparing solutions.' },
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
                Kovil AI engineers scope, build, test and deploy this monitoring system end-to-end. Your community manager spends 30 minutes approving replies, not 8 hours reading posts.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {[
                  'Reddit API + Python scraping scripts for configured subreddits',
                  'LinkedIn API integration for group and feed monitoring',
                  'Claude 3.5 Sonnet scoring pipeline with 3-axis evaluation',
                  'Configurable threshold filter with volume controls',
                  'Airtable review dashboard with approve/edit/skip actions',
                  'Claude reply drafting with community guidelines integration',
                  'Weekly Slack digest with engagement performance metrics',
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
                  { week: 'Week 1', title: 'Monitoring + scoring', items: ['Reddit/LinkedIn scripts + Claude 3.5 scoring pipeline + threshold filter'] },
                  { week: 'Week 2', title: 'Dashboard + drafts', items: ['Airtable review dashboard + Claude reply drafting + guidelines integration'] },
                  { week: 'Week 2–3', title: 'Alerts + deploy', items: ['Slack digest automation + full deployment + threshold calibration'] },
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

      {/* ── BOTTOM CTA ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <motion.div {...fade(0)}
          className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111111] px-8 py-16 text-center">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-64 w-[500px] rounded-full opacity-[0.07] blur-[80px]" style={{ background: accentColor }} />
          </div>
          <MessageSquare size={24} className="relative mx-auto mb-4" style={{ color: accentColor }} />
          <h2 className="relative font-display text-[clamp(22px,3.5vw,36px)] font-bold text-white">
            Find the 1% of posts worth engaging with.
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Book a 30-minute discovery call. Kovil AI engineers will scope the subreddit configuration, Claude scoring criteria, and Airtable dashboard for your specific community engagement strategy — fixed price, zero delivery risk.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://calendly.com/kovil-ai/talent" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold text-white transition-all hover:opacity-95 font-display"
              style={{ background: accentColor, boxShadow: `0 8px 32px ${accentColor}4D` }}
            >
              Book a discovery call <ArrowRight size={16} />
            </a>
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
