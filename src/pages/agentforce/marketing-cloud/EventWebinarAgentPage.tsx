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
      <marker id="arrow-event" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <polygon points="0,0 0,6 8,3" fill="#D0CBC2" />
      </marker>
    </defs>
  )
}

function HeroDiagram() {
  const stroke = '#D0CBC2'
  const sw = 1.8
  const ma = 'url(#arrow-event)'

  return (
    <svg viewBox="0 0 820 230" className="w-full" style={{ display: 'block' }}>
      <ArrowDefs />

      {/* Register → Confirm */}
      <path d="M68,80 H110" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Confirm → Reminders */}
      <path d="M178,80 H220" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />
      {/* Reminders → Attend? */}
      <path d="M288,80 H338" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* Attend? → Attended (up) */}
      <path d="M394,52 L394,28 H498 V50" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* Attend? → No-show (down, dashed) */}
      <path d="M394,108 L394,140 H498 V130" stroke={stroke} strokeWidth={sw} fill="none" strokeDasharray="5,3" markerEnd={ma} />

      {/* Attended → Score */}
      <path d="M566,60 H606" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* No-show → Score (also feeds) */}
      <path d="M566,120 L594,120 L594,88" stroke={stroke} strokeWidth={sw} fill="none" strokeDasharray="5,3" markerEnd={ma} />

      {/* Score → Sales Handoff */}
      <path d="M674,80 H714" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* Nodes */}
      {/* Register */}
      <NodeBox cx={40} cy={80} bg="#FF4F00">
        <text x={40} y={76} textAnchor="middle" fill="white" fontSize="9" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">REG</text>
        <text x={40} y={87} textAnchor="middle" fill="white" fontSize="7" fontWeight="600" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">form</text>
      </NodeBox>
      <NodeLabel cx={40} cy={80} text="Register" />

      {/* Confirm */}
      <NodeBox cx={144} cy={80} bg={SF_BLUE}>
        {/* envelope icon */}
        <rect x={130} y={68} width={28} height={20} rx={3} fill="none" stroke="white" strokeWidth="1.5" />
        <polyline points="130,68 144,80 158,68" fill="none" stroke="white" strokeWidth="1.5" />
      </NodeBox>
      <NodeLabel cx={144} cy={80} text="Confirm" sub="email" />

      {/* Reminders */}
      <NodeBox cx={254} cy={80} bg="#10A37F">
        {/* bell lines */}
        <line x1={244} y1={72} x2={264} y2={72} stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1={244} y1={78} x2={264} y2={78} stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1={244} y1={84} x2={258} y2={84} stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx={261} cy={87} r={4} fill="white" opacity={0.9} />
      </NodeBox>
      <NodeLabel cx={254} cy={80} text="Reminders" sub="3-touch" />

      {/* Attend? diamond */}
      <g>
        <polygon
          points={`${366},${52} ${394},${80} ${366},${108} ${338},${80}`}
          fill="#D97706"
        />
        <text x={366} y={84} textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="Inter, sans-serif">Live?</text>
      </g>
      <NodeLabel cx={366} cy={80} text="Attend?" sub="branch" />

      {/* Attended */}
      <NodeBox cx={532} cy={60} bg={SF_BLUE}>
        <text x={532} y={56} textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="Inter, sans-serif">Live</text>
        <text x={532} y={66} textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">✓</text>
      </NodeBox>
      <NodeLabel cx={532} cy={60} text="Attended" />

      {/* No-show */}
      <NodeBox cx={532} cy={120} bg="#8B5CF6">
        <text x={532} y={116} textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="Inter, sans-serif">MISS</text>
        <text x={532} y={126} textAnchor="middle" fill="white" fontSize="7" fontWeight="600" fontFamily="Inter, sans-serif">no-show</text>
      </NodeBox>
      <NodeLabel cx={532} cy={120} text="No-show" sub="re-engage" />

      {/* Score */}
      <NodeBox cx={640} cy={80} bg="#0F172A" border="#334155">
        <circle cx={640} cy={80} r="13" stroke={SF_BLUE} strokeWidth="1.5" fill="none" />
        <text x={640} y={85} textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">E</text>
      </NodeBox>
      <NodeLabel cx={640} cy={80} text="Score" sub="Einstein" />

      {/* Sales Handoff */}
      <NodeBox cx={738} cy={80} bg="#FF4F00">
        <text x={738} y={76} textAnchor="middle" fill="white" fontSize="8" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">SALES</text>
        <text x={738} y={87} textAnchor="middle" fill="white" fontSize="7" fontWeight="600" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">SF</text>
      </NodeBox>
      <NodeLabel cx={738} cy={80} text="Handoff" sub="sales" />

      {/* Step badges */}
      {([
        [40, 80, '1'], [144, 80, '2'], [254, 80, '3'], [366, 80, '4'],
      ] as [number, number, string][]).map(([x, y, n]) => (
        <g key={n}>
          <circle cx={x + 20} cy={y - 20} r={9} fill={SF_BLUE} />
          <text x={x + 20} y={y - 16} textAnchor="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="Inter, sans-serif">{n}</text>
        </g>
      ))}

      {/* Branch labels */}
      <text x={464} y={20} textAnchor="middle" fontSize="8" fill="#78716C" fontFamily="Inter, sans-serif">attended ✓</text>
      <text x={464} y={148} textAnchor="middle" fontSize="8" fill="#78716C" fontFamily="Inter, sans-serif">no-show →</text>
    </svg>
  )
}

// ── Step data ─────────────────────────────────────────────────────────────────

const steps = [
  {
    num: 1,
    tool: 'Registration & Confirmation',
    toolColor: '#FF4F00',
    title: 'Registration confirmed instantly with a personalised confirmation email',
    detail: 'The moment a registration is submitted — via web form, Salesforce campaign, or event platform integration — the agent fires. It creates a Campaign Member record in Salesforce, tags the lead with the event source and registration date, and sends a personalised confirmation email generated by Prompt Builder: the registrant\'s name, the specific event they registered for, personalised \'what you\'ll learn\' messaging based on their job title and industry, and calendar file attachments for their preferred calendar system. Registration data feeds into the lead\'s intent profile in Data Cloud — event registration is treated as a strong intent signal.',
    tags: ['Campaign Member Record', 'Registration Trigger', 'Prompt Builder Confirmation', 'Calendar Attachment', 'Intent Signal', 'Data Cloud Profile Update'],
  },
  {
    num: 2,
    tool: 'Personalised Reminder Sequence',
    toolColor: '#10A37F',
    title: 'Multi-touch reminder sequence adapted to each registrant\'s engagement',
    detail: 'A configured reminder sequence fires in the days before the event — typically: 1-week reminder with session preview, 48-hour reminder with the agenda and speaker detail, and day-of reminder with join link and prep tips. Each reminder is personalised by Prompt Builder based on the registrant\'s profile: their industry gets relevant statistics mentioned, their job title gets the most relevant session highlighted, and their engagement with pre-event content determines the messaging tone (engaged registrants get a continuation message; unengaged registrants get a stronger value proposition reminder). Show rates for personalised reminder sequences average 40% higher than generic reminders.',
    tags: ['Reminder Sequence', 'Prompt Builder', 'Multi-touch', 'Personalised Agenda', 'Show Rate Optimisation', 'Pre-event Content Engagement'],
  },
  {
    num: 3,
    tool: 'Live Attendance Tracking',
    toolColor: SF_BLUE,
    title: 'Attendance tracked in real time and Salesforce updated automatically',
    detail: 'During the event, the agent processes attendance signals from the event platform (Zoom, GoToWebinar, ON24, or similar via webhook): who joined, when they joined, how long they stayed, which sessions they attended in multi-track events, and poll or Q&A interactions. All attendance data writes back to Salesforce Campaign Member records in real time. Partial attendees (joined briefly then dropped), no-shows (registered but did not join), and full attendees (attended the full session) are tagged differently — these tags determine the post-event follow-up path each registrant receives.',
    tags: ['Attendance Tracking', 'Zoom Webhook', 'ON24 Integration', 'Campaign Member Update', 'Attendance Tagging', 'Session Analytics'],
  },
  {
    num: 4,
    tool: 'Post-Event Follow-up Sequencing',
    toolColor: '#8B5CF6',
    title: 'Follow-up sequence and content matched to each attendee\'s engagement level',
    detail: 'Within 24 hours of event end, the agent triggers personalised post-event follow-up sequences differentiated by attendance and engagement level. Full attendees receive: recording link, resources mentioned during the event, and a next-step CTA calibrated to their lead score (demo invite for high-intent, related content for low-intent). Partial attendees receive: recording link and a tailored message acknowledging they caught part of the event. No-shows receive: a \'you missed it\' sequence with the recording and key takeaways — framed as the content rather than the event. All follow-up emails are personalised by Prompt Builder with the specific session content and speaker context.',
    tags: ['Post-event Segmentation', 'Attendance-based Sequencing', 'Recording Delivery', 'CTA Calibration', 'No-show Re-engagement', 'Prompt Builder Follow-up'],
  },
  {
    num: 5,
    tool: 'Einstein Lead Scoring',
    toolColor: '#D97706',
    title: 'Every attendee scored on intent and sales readiness post-event',
    detail: 'After the event follow-up is delivered, the agent runs a post-event lead scoring pass on all registrants. Einstein Lead Scoring updates the intent score for each contact based on: attended vs partial vs no-show status, Q&A and poll participation (questions asked indicate high intent), post-event content engagement (did they click the recording link? download the resources?), follow-up email engagement, and the combined event intent signal weighted against the contact\'s full engagement history. Contacts crossing the sales readiness threshold — typically high-fit attendees who engaged with the event and clicked the follow-up CTA — are flagged for immediate sales handoff.',
    tags: ['Einstein Lead Scoring', 'Post-event Scoring Pass', 'Intent Score Update', 'Engagement Weighting', 'Sales Readiness Flag', 'Q&A Participation Signal'],
  },
  {
    num: 6,
    tool: 'Sales Handoff',
    toolColor: '#FF4F00',
    title: 'Sales-ready leads handed off with full event engagement context attached',
    detail: 'For leads crossing the sales readiness threshold, the agent creates or updates the Salesforce Lead record and triggers the handoff flow: the assigned rep receives a Chatter alert with the lead\'s event engagement summary (attended, questions asked, content clicked), the lead\'s full intent score and engagement history, and a suggested opening line referencing their specific question or content engagement from the event. The handoff happens within minutes of the post-event scoring pass — while interest is still warm. Leads not ready for handoff remain in the Marketing Cloud nurture pool with their event attendance tagged for context.',
    tags: ['Sales Cloud Handoff', 'Chatter Alert', 'Event Context Summary', 'Suggested Opening', 'Warm Handoff Timing', 'Nurture Pool Retention'],
  },
]

// ── Tech stack ────────────────────────────────────────────────────────────────

const techStack = [
  { name: 'Atlas Reasoning Engine', role: 'Sequence adaptation', color: SF_BLUE, desc: 'Adapts the post-event follow-up sequence for each attendee based on their engagement level, attendance depth, and intent signals from the event.' },
  { name: 'Einstein Lead Scoring', role: 'Post-event scoring', color: '#10A37F', desc: 'Runs a full scoring pass on all registrants post-event — weighting attendance, Q&A participation, and follow-up engagement to identify sales-ready leads.' },
  { name: 'Prompt Builder', role: 'Personalised communications', color: '#8B5CF6', desc: 'Generates every event communication — confirmation, reminders, follow-ups — personalised to the registrant\'s profile, session engagement, and funnel stage.' },
  { name: 'Marketing Cloud', role: 'Journey execution', color: '#FF4F00', desc: 'Executes reminder and follow-up sequences, manages contact suppression, and handles unsubscribe compliance across all event communications.' },
  { name: 'Data Cloud', role: 'Intent enrichment', color: '#6366F1', desc: 'Treats event registration and attendance as intent signals that feed into the lead\'s full profile — enriching scoring across the entire marketing funnel.' },
  { name: 'Salesforce Flow', role: 'Handoff automation', color: '#D97706', desc: 'Automates the sales handoff trigger — creating Lead records, attaching event context, and firing Chatter alerts to assigned reps.' },
  { name: 'Einstein Trust Layer', role: 'Compliance', color: '#0F172A', desc: 'Ensures all attendee data and personalised communications are processed within Salesforce\'s trust boundary — required for events touching GDPR-covered audiences.' },
]

// ── Outcomes ──────────────────────────────────────────────────────────────────

const outcomes = [
  { stat: '40%', label: 'show-up rate lift', sub: 'vs generic reminders' },
  { stat: '< 24hr', label: 'post-event follow-up', sub: 'while interest is hot' },
  { stat: '100%', label: 'leads scored', sub: 'before sales sees them' },
  { stat: '3×', label: 'pipeline from events', sub: 'with intent-gated handoff' },
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

export default function EventWebinarAgentPage() {
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
          <span className="text-white/35">Marketing Cloud</span>
          <ChevronRight size={11} className="text-white/20" />
          <span className="text-white/55">Event &amp; Webinar Agent</span>
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
                Marketing Cloud
              </span>
            </motion.div>

            <motion.h1 {...fade(0.06)}
              className="mt-5 font-display text-[clamp(32px,4.5vw,56px)] font-bold leading-[1.06] tracking-tight text-white">
              Event &amp; Webinar Agent —<br />
              <span className="bg-gradient-to-r from-[#00A1E0] to-[#0077B6] bg-clip-text text-transparent">Sign-Up to Pipeline, Fully Automated</span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-base leading-relaxed text-white/55 max-w-lg">
              Handles the entire event lifecycle autonomously — registration confirmation, personalised reminders, live attendance tracking, post-event follow-up sequenced by engagement level, and lead scoring for sales handoff. Your events team runs better events, not more admin.
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
              {['Atlas Reasoning Engine', 'Marketing Cloud', 'Salesforce Flow', 'Einstein Lead Scoring', 'Prompt Builder', 'Data Cloud', 'Sales Cloud Handoff'].map(t => (
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
              <span className="text-[11px] font-medium text-white/40 font-display tracking-wide uppercase">Agentforce reasoning flow — registration to pipeline</span>
            </div>
            <HeroDiagram />
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-4">
              {[
                { label: 'Show-up lift', value: '40%' },
                { label: 'Follow-up', value: '< 24hr' },
                { label: 'Pipeline', value: '3× events' },
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
                Kovil AI scopes, builds, tests and deploys this Agentforce configuration end-to-end. You do not touch Agent Builder until it is live and running your events.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {[
                  'Event & Webinar Agent with full lifecycle automation (registration to handoff)',
                  'Personalised confirmation and reminder sequence via Prompt Builder',
                  'Event platform integration for live attendance tracking (Zoom, ON24, GoToWebinar)',
                  'Post-event segmentation by attendance level and engagement depth',
                  'Einstein Lead Scoring post-event pass with sales readiness gate',
                  'Sales Cloud handoff with event engagement context summary',
                  'No-show re-engagement sequence with recording delivery',
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
                  { week: 'Week 1', title: 'Registration + reminders', items: ['Trigger configuration, Campaign Member setup, Prompt Builder confirmation and reminder templates'] },
                  { week: 'Week 2', title: 'Attendance + follow-up', items: ['Event platform webhook, attendance tagging, post-event sequence segmentation'] },
                  { week: 'Week 3', title: 'Scoring + handoff + deploy', items: ['Einstein scoring pass, Sales Cloud handoff, Chatter alerts, production deployment'] },
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
                q: 'Which event platforms does the integration support?',
                a: 'We configure integrations with Zoom Webinars, GoToWebinar, and ON24 via webhook — these cover the majority of B2B webinar use cases. For in-person events using platforms like Cvent or Eventbrite, we use their API or Zapier integration to feed registration and attendance data into Salesforce. The specific platform is scoped in Week 1 — if you use a platform not listed, we confirm integration feasibility before the sprint begins.',
              },
              {
                q: 'How are no-shows handled differently from attendees?',
                a: 'No-shows receive a differentiated follow-up sequence: a \'you missed it\' framing with the event recording and key takeaways, rather than the post-event engagement content sent to attendees. The messaging assumes they were interested enough to register but could not attend — not that they are cold. No-show follow-up typically achieves 40–50% recording view rates, which re-activates intent. If the no-show engages with the recording follow-up, their intent score updates and they can re-enter the standard nurture sequence.',
              },
              {
                q: 'How quickly does the post-event follow-up go out?',
                a: 'The post-event scoring pass runs automatically as soon as the event platform sends the final attendance data — typically within 1–2 hours of event end. Follow-up emails are queued immediately after scoring and send within 24 hours of event end. For high-intent leads (attending, asking questions, clicking CTAs), the sales handoff notification fires the same day. The window between event participation and sales contact is typically under 4 hours for qualified leads — while interest is still fresh.',
              },
              {
                q: 'Can it handle multi-track conference events?',
                a: 'Yes, with additional configuration. Multi-track events require session-level attendance tracking, which we configure per event platform\'s data model. The follow-up sequence can then reference the specific sessions attended rather than the event generically — significantly improving personalisation quality. Multi-track configuration is typically scoped as a Week 1 addition if needed.',
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
            Turn every event into a pipeline engine.
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Book a 30-minute discovery call. We&apos;ll audit your current event follow-up process, identify the leads being lost between registration and sales contact, and scope a 3-week fixed-price Agentforce implementation.
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
