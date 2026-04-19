'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Clock, CheckCircle, ChevronRight, Inbox, MessageCircle, Mail } from 'lucide-react'

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

function InstagramIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#833AB4">
      {/* Instagram camera outline */}
      <rect x={cx - 11} y={cy - 11} width={22} height={22} rx={6} stroke="white" strokeWidth="2" fill="none" />
      <circle cx={cx} cy={cy} r={6} stroke="white" strokeWidth="2" fill="none" />
      <circle cx={cx + 8} cy={cy - 8} r={2} fill="white" />
    </NodeBox>
  )
}

function WhatsAppIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#25D366">
      {/* WhatsApp speech bubble with phone */}
      <circle cx={cx} cy={cy} r={13} stroke="white" strokeWidth="2" fill="none" />
      <path d={`M${cx - 4},${cy - 4} Q${cx - 4},${cy + 6} ${cx + 6},${cy + 6} L${cx + 6},${cy + 2} L${cx + 2},${cy + 2} Q${cx - 1},${cy + 2} ${cx - 1},${cy - 1} Z`} fill="white" />
      <path d={`M${cx - 8},${cy + 10} L${cx - 6},${cy + 6}`} stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
    </NodeBox>
  )
}

function EmailIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#4285F4">
      <rect x={cx - 12} y={cy - 9} width={24} height={18} rx={2} stroke="white" strokeWidth="1.8" fill="none" />
      <polyline points={`${cx - 12},${cy - 9} ${cx},${cy + 2} ${cx + 12},${cy - 9}`} stroke="white" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
    </NodeBox>
  )
}

function N8nWebhookIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#F65B2B">
      <polygon
        points={`${cx + 4},${cy - 14} ${cx - 4},${cy - 2} ${cx + 2},${cy - 2} ${cx - 4},${cy + 14} ${cx + 4},${cy + 2} ${cx - 2},${cy + 2}`}
        fill="white"
      />
    </NodeBox>
  )
}

function OpenAIIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#10A37F">
      <circle cx={cx} cy={cy} r={13} stroke="white" strokeWidth="2" fill="none" />
      <circle cx={cx} cy={cy} r={5} fill="white" />
      <circle cx={cx} cy={cy - 10} r={3} fill="white" />
      <circle cx={cx + 9} cy={cy + 5} r={3} fill="white" />
      <circle cx={cx - 9} cy={cy + 5} r={3} fill="white" />
    </NodeBox>
  )
}

function CalendlyIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#006BFF">
      <rect x={cx - 11} y={cy - 12} width={22} height={24} rx={3} stroke="white" strokeWidth="1.8" fill="none" />
      <line x1={cx - 6} y1={cy - 16} x2={cx - 6} y2={cy - 8} stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx + 6} y1={cy - 16} x2={cx + 6} y2={cy - 8} stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 8} y1={cy - 3} x2={cx + 8} y2={cy - 3} stroke="white" strokeWidth="1.5" />
      <circle cx={cx - 4} cy={cy + 4} r={2.5} fill="white" />
      <circle cx={cx + 4} cy={cy + 4} r={2.5} fill="white" />
    </NodeBox>
  )
}

function HubSpotIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#FF7A59">
      {/* HubSpot sprocket/atom mark */}
      <circle cx={cx} cy={cy} r={6} fill="white" />
      <circle cx={cx} cy={cy - 12} r={3} fill="white" />
      <circle cx={cx + 10} cy={cy + 6} r={3} fill="white" />
      <circle cx={cx - 10} cy={cy + 6} r={3} fill="white" />
      <line x1={cx} y1={cy - 6} x2={cx} y2={cy - 9} stroke="white" strokeWidth="2" />
      <line x1={cx + 5} y1={cy + 3} x2={cx + 7} y2={cy + 4.5} stroke="white" strokeWidth="2" />
      <line x1={cx - 5} y1={cy + 3} x2={cx - 7} y2={cy + 4.5} stroke="white" strokeWidth="2" />
    </NodeBox>
  )
}

function ArrowDefs() {
  return (
    <defs>
      <marker id="arrow-mc" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
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
  const ma = 'url(#arrow-mc)'

  // Layout:
  // Row 1 (top):    Instagram(60,65) ──┐
  // Row 2 (mid):    WhatsApp(60,140) ──┤──> n8n Webhook(190,140) ──> GPT-4o(320,140) ──> FAQ Reply label(only)
  // Row 3 (bot):    Email(60,215)    ──┘                                              ──> Lead Qualify(460,140) ──> Calendly(590,140) ──> HubSpot(720,140)
  // Branch from GPT-4o up to FAQ label and down to Lead path

  return (
    <svg viewBox="0 0 780 220" className="w-full" style={{ display: 'block' }}>
      <ArrowDefs />

      {/* Instagram → n8n Webhook */}
      <path d="M88,65 C140,65 140,135 162,135" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* WhatsApp → n8n Webhook */}
      <path d="M88,140 H162" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Email → n8n Webhook */}
      <path d="M88,215 C140,215 140,145 162,145" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* n8n Webhook → GPT-4o (AI Dispatcher) */}
      <path d="M218,140 H292" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* GPT-4o → FAQ Reply (branch up) */}
      <path d="M320,112 C320,65 370,65 400,65" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} strokeDasharray="5,3" />

      {/* GPT-4o → Lead Qualify (continues right) */}
      <path d="M348,140 H432" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* Lead Qualify → Calendly */}
      <path d="M488,140 H562" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* Calendly → HubSpot */}
      <path d="M618,140 H692" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* Nodes */}
      <InstagramIcon cx={60} cy={65} />
      <NodeLabel cx={60} cy={65} text="Instagram" sub="DM" />

      <WhatsAppIcon cx={60} cy={140} />
      <NodeLabel cx={60} cy={140} text="WhatsApp" sub="Business" />

      <EmailIcon cx={60} cy={215} />
      <NodeLabel cx={60} cy={215} text="Email" sub="Gmail" />

      <N8nWebhookIcon cx={190} cy={140} />
      <NodeLabel cx={190} cy={140} text="n8n" sub="Webhook" />

      <OpenAIIcon cx={320} cy={140} />
      <NodeLabel cx={320} cy={140} text="GPT-4o" sub="Dispatcher" />

      {/* FAQ Reply box (dashed, inline) */}
      <rect x={400} y={37} width={100} height={42} rx={8} fill="#10A37F1A" stroke="#10A37F55" strokeWidth={1.5} strokeDasharray="4,3" />
      <text x={450} y={54} textAnchor="middle" fontSize="9" fill="#10A37F" fontFamily="Inter, sans-serif" fontWeight="700">FAQ Reply</text>
      <text x={450} y={67} textAnchor="middle" fontSize="8" fill="#78716C" fontFamily="Inter, sans-serif">instant · same channel</text>

      <NodeBox cx={460} cy={140} bg="#A78BFA1A" border="#A78BFA55">
        {/* Lead Qualify - question mark symbol */}
        <text x={460} y={145} textAnchor="middle" fill="#A78BFA" fontSize="22" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">?</text>
      </NodeBox>
      <NodeLabel cx={460} cy={140} text="Lead Qualify" sub="3 questions" />

      <CalendlyIcon cx={590} cy={140} />
      <NodeLabel cx={590} cy={140} text="Calendly" sub="Book meeting" />

      <HubSpotIcon cx={720} cy={140} />
      <NodeLabel cx={720} cy={140} text="HubSpot" sub="CRM sync" />

      {/* Step badges */}
      {([
        [60, 65, '1a'], [60, 140, '1b'], [60, 215, '1c'],
        [190, 140, '1'], [320, 140, '2'], [450, 65, '3'],
        [460, 140, '4'], [590, 140, '5'], [720, 140, '6'],
      ] as [number, number, string][]).map(([x, y, n]) => (
        <g key={n}>
          <circle cx={x + 20} cy={y - 20} r={9} fill="#A78BFA" />
          <text x={x + 20} y={y - 16} textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="Inter, sans-serif">{n}</text>
        </g>
      ))}
    </svg>
  )
}

// ── Step data ─────────────────────────────────────────────────────────────────

const steps = [
  {
    num: 1,
    tool: 'n8n Webhook',
    toolColor: '#F65B2B',
    title: 'Three channels captured in real time via n8n webhook listeners',
    detail: 'Messages arrive via Instagram DM, WhatsApp Business, and email simultaneously. n8n webhook listeners capture all three channels in real time, normalising each message into a unified payload with: channel source, sender ID, message text, timestamp, and any attachments. Every inbound message — regardless of origin — enters the same pipeline from this point forward, eliminating siloed inboxes and ensuring zero message is missed.',
    tags: ['n8n Webhook Node', 'Instagram DM API', 'WhatsApp Business API', 'Gmail API', 'Payload normalisation'],
  },
  {
    num: 2,
    tool: 'Intent Classifier (GPT-4o)',
    toolColor: '#10A37F',
    title: 'GPT-4o classifies every message into one of four buckets via structured JSON output',
    detail: 'GPT-4o classifies the message into one of four buckets: FAQ (question about pricing, services, turnaround), New Lead (expressed buying intent), Existing Client (reference to current work), or Spam/Irrelevant. Classification is done via a structured JSON output prompt — no free-text parsing required. This means downstream routing is deterministic: a JSON key, not a regex pattern, decides what happens next. Misclassification rate is under 2% in production.',
    tags: ['GPT-4o', 'Structured JSON output', 'Intent classification', 'Four-bucket routing', 'No regex parsing'],
  },
  {
    num: 3,
    tool: 'FAQ Auto-Reply',
    toolColor: '#A78BFA',
    title: 'FAQ answers pulled from Notion and sent back in under 8 seconds — in the same channel',
    detail: 'For FAQ classifications, GPT-4o pulls the relevant answer from a Notion knowledge base page (cached in n8n memory every 6 hours) and replies instantly in the same channel the message came from — Instagram DM reply, WhatsApp message, or Gmail reply. Average response time: under 8 seconds. Answers are contextualised to the specific question phrasing — not templated responses. The Notion cache prevents GPT-4o from hallucinating answers on topics not in your KB.',
    tags: ['Notion Knowledge Base', 'n8n memory cache', 'Same-channel reply', 'Under 8s response', 'Anti-hallucination'],
  },
  {
    num: 4,
    tool: 'Lead Qualification (3-question flow)',
    toolColor: '#833AB4',
    title: 'Three qualifying questions sent asynchronously — scored 1–10 on completion',
    detail: 'For new leads, GPT-4o sends three qualifying questions tailored to the detected channel: budget range, project type, and timeline. Responses are collected asynchronously — n8n waits for all three before continuing. Once all three are answered, a lead score (1–10) is calculated based on predefined criteria. This flow handles multi-turn conversations natively — if the lead responds across 3 separate messages, n8n stitches them into a complete qualification record.',
    tags: ['3-question flow', 'Asynchronous collection', 'Lead scoring 1–10', 'Multi-turn conversation', 'Channel-tailored questions'],
  },
  {
    num: 5,
    tool: 'Meeting Booking (Calendly)',
    toolColor: '#006BFF',
    title: 'Qualified leads get a personalised Calendly link with UTM tracking — automatically',
    detail: 'Leads scoring ≥7 receive a personalised Calendly booking link with a contextual message ("Based on what you\'ve shared, a 30-minute discovery call would be the best next step — book a time here"). The Calendly link uses UTM parameters to track which channel the booking came from, giving your team full attribution data. Leads scoring below 7 receive a nurture message appropriate to their channel and are flagged in HubSpot for manual follow-up.',
    tags: ['Calendly API', 'Score ≥7 threshold', 'UTM tracking', 'Channel attribution', 'Contextual messaging'],
  },
  {
    num: 6,
    tool: 'HubSpot CRM Sync',
    toolColor: '#FF7A59',
    title: 'Every interaction logged in HubSpot — contact matched by email or phone, never duplicated',
    detail: 'Every interaction is logged: contact created or updated in HubSpot with all conversation data, lead score, channel source, qualification answers, and booking status. Existing contacts are matched by email or phone and updated rather than duplicated. The workflow creates a custom HubSpot timeline event for each interaction, giving your sales team a complete chronological view of every touch — from first Instagram DM through to booked meeting — in one CRM record.',
    tags: ['HubSpot CRM', 'Contact deduplication', 'Timeline events', 'Lead score field', 'Booking status sync'],
  },
]

// ── Tech stack ────────────────────────────────────────────────────────────────

const techStack = [
  { name: 'Instagram API', role: 'DM capture', color: '#833AB4', desc: 'Webhook listens on the Instagram Messaging API. All DMs normalised to the unified payload format before routing.' },
  { name: 'WhatsApp Business API', role: 'WhatsApp capture', color: '#25D366', desc: 'WhatsApp Business webhook via Meta Cloud API. Supports text, images and documents from the start.' },
  { name: 'Gmail API', role: 'Email capture', color: '#4285F4', desc: 'Gmail push notification (Pub/Sub) triggers n8n on new emails to your business inbox. Replies sent from the same thread.' },
  { name: 'GPT-4o (OpenAI)', role: 'Intent classifier + qualifier', color: '#10A37F', desc: 'Two roles: (1) classify intent via structured JSON; (2) generate contextual FAQ answers and qualifying questions per channel.' },
  { name: 'n8n', role: 'Orchestration', color: '#F65B2B', desc: 'Manages all webhooks, routing logic, async multi-turn conversation state, memory caching, and parallel output branches.' },
  { name: 'Calendly', role: 'Meeting booking', color: '#006BFF', desc: 'Personalised booking links with UTM parameters. Routing rules ensure leads land on the correct calendar and meeting type.' },
  { name: 'HubSpot CRM', role: 'CRM sync + attribution', color: '#FF7A59', desc: 'Contact deduplication by email/phone, custom timeline events per interaction, lead score field, and booking status tracking.' },
]

// ── Outcomes ──────────────────────────────────────────────────────────────────

const outcomes = [
  { stat: 'Zero', label: 'lead leakage', sub: 'across all channels' },
  { stat: '< 8s', label: 'response time', sub: 'FAQ auto-replies' },
  { stat: '24/7', label: 'coverage', sub: 'no human needed' },
  { stat: '3–4 wk', label: 'build sprint', sub: 'fixed price' },
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

export default function MultiChannelInboundPage() {
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
          <span className="text-white/55">Multi-Channel Inbound Dispatching</span>
        </nav>
      </div>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-4">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">

          {/* Left: text */}
          <div>
            <motion.div {...fade(0)}>
              <span className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide font-display"
                style={{ color: industryColor, background: `${industryColor}18`, border: `1px solid ${industryColor}28` }}>
                Ad &amp; Marketing
              </span>
            </motion.div>

            <motion.h1 {...fade(0.06)}
              className="mt-5 font-display text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.06] tracking-tight text-white">
              Multi-Channel Inbound<br />
              <span className="bg-gradient-to-r from-[#A78BFA] to-[#818CF8] bg-clip-text text-transparent">Dispatching</span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-base leading-relaxed text-white/55 max-w-lg">
              Eliminating lead leakage by piping inbound messages from Instagram DMs, WhatsApp, and email into a single AI dispatcher that instantly answers FAQs, qualifies prospects, and autonomously books meetings directly into your sales team&apos;s calendar.
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
              {['Instagram API', 'WhatsApp Business API', 'Gmail API', 'GPT-4o', 'n8n', 'Calendly', 'HubSpot'].map(t => (
                <span key={t} className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/50">
                  {t}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fade(0.22)} className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://calendly.com/kovil-ai/talent" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 font-display"
                style={{ background: accentColor, boxShadow: `0 4px 24px ${accentColor}4D` }}
              >
                Plug every lead channel <ArrowRight size={15} />
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
              Typical build: <span className="text-white/55 font-medium">3–4 week sprint · Fixed price · Zero delivery risk</span>
            </motion.p>
          </div>

          {/* Right: diagram */}
          <motion.div {...fade(0.1)} className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 shadow-2xl">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full animate-pulse" style={{ background: accentColor }} />
              <span className="text-[11px] font-medium text-white/40 font-display tracking-wide uppercase">Live workflow — responds in under 8 seconds</span>
            </div>
            <HeroDiagram />
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-4">
              {[
                { label: 'Channels', value: 'Instagram · WhatsApp · Email' },
                { label: 'FAQ reply', value: 'Under 8 seconds' },
                { label: 'Booking', value: 'Leads scoring ≥7' },
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
          <h2 className="mt-2 font-display text-3xl font-bold text-white">Why leads fall through the cracks</h2>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Inbox, title: 'Three inboxes, one sales team, zero coordination', desc: "Instagram DMs land with the social team. WhatsApp goes to someone's personal phone. Email hits a shared inbox no one owns. A lead who messages on all three channels gets three different experiences — or none at all." },
            { icon: Clock, title: 'Every hour of delay drops conversion by double digits', desc: 'Studies consistently show that responding to a lead within 5 minutes is 100x more effective than responding after 30 minutes. A manually monitored inbox makes sub-5-minute response impossible at any scale.' },
            { icon: MessageCircle, title: 'FAQ responses cost sales team hours every week', desc: "Pricing questions, service scope questions, turnaround time questions — the same 10 questions asked 50 times a week. Every one of those responses is a sales rep's time that could go to qualified opportunities." },
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
              This is the actual workflow Kovil AI builds and deploys — not a diagram. Here is what runs inside every node.
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
              <h2 className="mt-2 font-display text-3xl font-bold text-white">A 3–4 week sprint. Production ready.</h2>
              <p className="mt-4 text-white/50 text-sm leading-relaxed">
                Kovil AI scopes, builds, tests and deploys this workflow end-to-end. You do not touch n8n until it is live across all three channels.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {[
                  'Instagram DM webhook setup and Messenger API credentials',
                  'WhatsApp Business API via Meta Cloud API configuration',
                  'Gmail push notifications via Google Pub/Sub',
                  'GPT-4o intent classifier prompt engineered for your business',
                  'Notion knowledge base structure built and connected',
                  'Calendly routing rules and UTM parameter tracking',
                  'HubSpot CRM deduplication logic and custom timeline events',
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
                    3–4 weeks
                  </span>
                </div>
                {[
                  { week: 'Week 1', title: 'Channel APIs + webhook normalisation', items: ['Instagram, WhatsApp and Gmail API credentials + webhook listeners', 'Unified payload normalisation in n8n'] },
                  { week: 'Week 2', title: 'GPT-4o dispatcher + Notion KB', items: ['Intent classifier prompt engineering and structured JSON output', 'Notion knowledge base setup and n8n memory cache'] },
                  { week: 'Week 3', title: 'Qualification flow + Calendly', items: ['3-question lead flow with async state management', 'Calendly routing + UTM tracking integration'] },
                  { week: 'Week 4', title: 'HubSpot CRM + deploy', items: ['HubSpot deduplication, timeline events and lead score field', 'End-to-end testing across all 3 channels + production deployment'] },
                ].map((wk, i) => (
                  <div key={wk.week} className={`relative pb-6 ${i < 3 ? 'border-b border-white/[0.05] mb-6' : ''}`}>
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
          <Mail size={24} className="relative mx-auto mb-4" style={{ color: accentColor }} />
          <h2 className="relative font-display text-[clamp(22px,3.5vw,36px)] font-bold text-white">
            Plug every lead channel.
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Book a 30-minute discovery call. We will scope the dispatcher for your three channels, your knowledge base and your HubSpot setup — fixed price, zero delivery risk.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://calendly.com/kovil-ai/talent" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold text-white transition-all hover:opacity-95 font-display"
              style={{ background: accentColor, boxShadow: `0 8px 32px ${accentColor}4D` }}
            >
              Plug every lead channel <ArrowRight size={16} />
            </a>
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
