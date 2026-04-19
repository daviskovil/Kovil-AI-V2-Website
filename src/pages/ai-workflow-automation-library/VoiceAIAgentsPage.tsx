'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Clock, CheckCircle, ChevronRight, Phone } from 'lucide-react'

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

function TwilioIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#F22F46">
      {/* Phone handset */}
      <path
        d={`M${cx - 8},${cy - 10} C${cx - 8},${cy - 14} ${cx - 4},${cy - 16} ${cx},${cy - 14} L${cx + 4},${cy - 10} C${cx + 6},${cy - 8} ${cx + 5},${cy - 5} ${cx + 3},${cy - 4} L${cx + 1},${cy - 3} C${cx + 5},${cy + 3} ${cx + 9},${cy + 7} ${cx + 13},${cy + 11} L${cx + 14},${cy + 9} C${cx + 15},${cy + 7} ${cx + 18},${cy + 6} ${cx + 20},${cy + 8} L${cx + 24},${cy + 12} C${cx + 26},${cy + 16} ${cx + 24},${cy + 20} ${cx + 20},${cy + 20} C${cx + 10},${cy + 18} ${cx - 8},${cy + 4} ${cx - 8},${cy - 10} Z`}
        fill="white" opacity="0" />
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">TWL</text>
    </NodeBox>
  )
}

function ElevenLabsIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#6B21A8">
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="13" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">EL</text>
    </NodeBox>
  )
}

function GPT4oIcon({ cx, cy }: { cx: number; cy: number }) {
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

function DecisionIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#1C1917">
      <text x={cx} y={cy + 6} textAnchor="middle" fill="white" fontSize="20" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">?</text>
    </NodeBox>
  )
}

function GoogleCalIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="white" border="#E5E0D8">
      <rect x={cx - 13} y={cy - 13} width={26} height={26} rx={3} fill="#4285F4" />
      <rect x={cx - 13} y={cy - 13} width={26} height={9} rx={0} fill="#4285F4" />
      <rect x={cx - 13} y={cy - 13} width={26} height={9} rx={3} fill="#1967D2" />
      <text x={cx} y={cy + 8} textAnchor="middle" fill="white" fontSize="12" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">31</text>
    </NodeBox>
  )
}

function HubSpotIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#FF7A59">
      <circle cx={cx} cy={cy - 4} r="5" fill="white" />
      <circle cx={cx + 9} cy={cy + 7} r="3.5" fill="white" />
      <circle cx={cx - 9} cy={cy + 7} r="3.5" fill="white" />
      <line x1={cx} y1={cy + 1} x2={cx + 9} y2={cy + 7} stroke="white" strokeWidth="2" />
      <line x1={cx} y1={cy + 1} x2={cx - 9} y2={cy + 7} stroke="white" strokeWidth="2" />
    </NodeBox>
  )
}

function ArrowDefs() {
  return (
    <defs>
      <marker id="arrow-voice" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
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
  const ma = 'url(#arrow-voice)'

  // Layout: linear pipeline across viewBox 0 0 780 200
  // Twilio (90,100) → ElevenLabs (210,100) → GPT-4o (330,100) → Decision (455,100)
  // Decision → Google Calendar (580,55) + HubSpot (580,145)

  return (
    <svg viewBox="0 0 780 200" className="w-full" style={{ display: 'block' }}>
      <ArrowDefs />

      {/* Twilio → ElevenLabs */}
      <path d="M118,100 H182" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* ElevenLabs → GPT-4o */}
      <path d="M238,100 H302" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* GPT-4o → Decision */}
      <path d="M358,100 H427" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* Decision → Google Calendar */}
      <path d="M483,100 C520,100 520,55 552,55" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* Decision → HubSpot */}
      <path d="M483,100 C520,100 520,145 552,145" stroke={stroke} strokeWidth={sw} fill="none" markerEnd={ma} />

      {/* Nodes */}
      <TwilioIcon cx={90} cy={100} />
      <NodeLabel cx={90} cy={100} text="Twilio" sub="Inbound call" />

      <ElevenLabsIcon cx={210} cy={100} />
      <NodeLabel cx={210} cy={100} text="ElevenLabs" sub="Voice AI" />

      <GPT4oIcon cx={330} cy={100} />
      <NodeLabel cx={330} cy={100} text="GPT-4o" sub="Intent" />

      <DecisionIcon cx={455} cy={100} />
      <NodeLabel cx={455} cy={100} text="n8n Router" sub="Action" />

      <GoogleCalIcon cx={580} cy={55} />
      <NodeLabel cx={580} cy={55} text="Google Cal" sub="Booking" />

      <HubSpotIcon cx={580} cy={145} />
      <NodeLabel cx={580} cy={145} text="HubSpot" sub="CRM log" />

      {/* Step badges */}
      {([
        [90, 100, '1'],
        [210, 100, '2'],
        [330, 100, '3'],
        [455, 100, '4'],
        [580, 55, '5'],
        [580, 145, '6'],
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
    tool: 'Twilio',
    toolColor: '#F22F46',
    title: 'Inbound call arrives and WebSocket stream opens',
    detail: 'An inbound call arrives on a Twilio phone number assigned to the SMB client. Twilio Media Streams opens a WebSocket connection to the n8n orchestration layer in real time, streaming audio chunks as base64 PCM. Call metadata — caller ID, number called, timestamp — is captured immediately and logged for the post-call CRM record. Average ring-to-answer latency: under 1.5 seconds.',
    tags: ['Twilio Media Streams', 'WebSocket audio', 'Base64 PCM chunks', 'Caller ID capture', '<1.5s answer'],
  },
  {
    num: 2,
    tool: 'ElevenLabs Voice AI',
    toolColor: '#6B21A8',
    title: 'Cloned voice model handles speech, turn-taking and synthesis',
    detail: 'ElevenLabs Conversational AI receives the audio stream and handles speech-to-text transcription, turn-taking detection, and text-to-speech synthesis in a single low-latency loop. The voice model is cloned from a reference recording provided by the SMB client — just 5 minutes of audio — so the bot sounds like a real employee of that business, not a generic robot. End-to-end voice latency stays under 500ms.',
    tags: ['Voice cloning', 'STT + TTS loop', 'Turn-taking detection', '<500ms latency', '5 min reference audio'],
  },
  {
    num: 3,
    tool: 'GPT-4o',
    toolColor: '#10A37F',
    title: 'Real-time intent classification on every exchange',
    detail: "As the caller speaks, GPT-4o processes the real-time transcript and classifies intent on every exchange: booking request, pricing inquiry, complaint, transfer request, or general FAQ. The system prompt is customised per SMB client — it contains their business hours, service menu, pricing, team names, and escalation rules. Context is maintained across the full call so the agent never loses the thread.",
    tags: ['Intent classification', 'Per-client system prompt', 'Context persistence', 'Real-time transcript', 'Five intent types'],
  },
  {
    num: 4,
    tool: 'n8n',
    toolColor: '#F65B2B',
    title: 'Dynamic response and parallel action routing',
    detail: 'Based on detected intent, GPT-4o generates the response AND triggers the appropriate n8n action node in parallel: FAQ pulls an answer from the knowledge base and replies; booking request checks Google Calendar availability and offers slots; complaint triggers empathy response and escalation; transfer request connects to a human via Twilio warm transfer. All actions are non-blocking — the voice conversation continues while actions execute in the background.',
    tags: ['n8n action nodes', 'Parallel execution', 'Knowledge base lookup', 'Warm transfer', 'Non-blocking flow'],
  },
  {
    num: 5,
    tool: 'Google Calendar',
    toolColor: '#4285F4',
    title: 'Full appointment booked in under 45 seconds',
    detail: "When a booking intent is confirmed, n8n calls the Google Calendar API to find the next available slot matching the caller's stated preference for day and time. It creates the appointment, adds the caller's details, and sends a confirmation SMS via Twilio. The full booking flow — from 'I'd like to book' to confirmed appointment in the caller's inbox — takes under 45 seconds on the call, with zero human involvement.",
    tags: ['Google Calendar API', 'Slot availability check', 'Appointment creation', 'Confirmation SMS', '<45s end-to-end'],
  },
  {
    num: 6,
    tool: 'HubSpot CRM',
    toolColor: '#FF7A59',
    title: 'Full call logged to HubSpot with GPT-4o summary',
    detail: 'On call end, n8n logs the full interaction to HubSpot: contact created or updated, call duration, intent classification, any actions taken (booking created, FAQ answered), and a GPT-4o-generated call summary covering three bullets — what they called about, what was resolved, and what follow-up is needed. The SMB client sees all of this in their white-labeled dashboard, giving their team complete visibility without listening to a single recording.',
    tags: ['HubSpot CRM', 'Contact upsert', 'Call summary', 'GPT-4o 3-bullet summary', 'White-label dashboard'],
  },
]

// ── Tech stack ────────────────────────────────────────────────────────────────

const techStack = [
  { name: 'Twilio', role: 'Telephony + SMS', color: '#F22F46', desc: 'Handles inbound calls, opens the WebSocket Media Stream to n8n, and sends confirmation SMS after booking.' },
  { name: 'ElevenLabs', role: 'Voice AI', color: '#6B21A8', desc: 'Provides voice cloning, real-time STT, turn-taking detection, and TTS synthesis in one low-latency loop.' },
  { name: 'GPT-4o', role: 'Intent detection + responses', color: '#10A37F', desc: 'Classifies intent on every exchange and generates contextually aware responses with per-client system prompts.' },
  { name: 'n8n', role: 'Orchestration', color: '#F65B2B', desc: 'Routes intents to action nodes, executes parallel API calls, and manages the full call lifecycle from answer to log.' },
  { name: 'Google Calendar', role: 'Booking engine', color: '#4285F4', desc: 'Finds available slots, creates appointments, and adds caller details — triggered automatically from confirmed booking intent.' },
  { name: 'HubSpot', role: 'CRM + call log', color: '#FF7A59', desc: 'Receives the post-call record: contact upsert, duration, intent, actions taken, and GPT-4o call summary.' },
]

// ── Outcomes ──────────────────────────────────────────────────────────────────

const outcomes = [
  { stat: '24/7', label: 'availability', sub: 'zero staffing cost' },
  { stat: '<500ms', label: 'voice latency', sub: 'natural conversation' },
  { stat: '45s', label: 'to book', sub: 'full appointment flow' },
  { stat: '4–6 wk', label: 'build sprint', sub: 'white-label ready' },
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

export default function VoiceAIAgentsPage() {
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
          <span className="text-white/55">White-Label Voice AI Agents</span>
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
              White-Label<br />
              <span className="bg-gradient-to-r from-[#A78BFA] to-[#818CF8] bg-clip-text text-transparent">Voice AI Agents</span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-base leading-relaxed text-white/55 max-w-lg">
              Customised, conversational voice bots that handle complex inbound phone inquiries with zero latency — allowing your agency to resell these agents to local SMB clients as a highly profitable, recurring SaaS revenue stream.
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
              {['Twilio', 'ElevenLabs', 'GPT-4o', 'n8n', 'Google Calendar', 'HubSpot'].map(t => (
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
                Build your voice AI agent <ArrowRight size={15} />
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
              Typical build: <span className="text-white/55 font-medium">4–6 week sprint · Fixed price · White-label ready</span>
            </motion.p>
          </div>

          {/* Right: diagram */}
          <motion.div {...fade(0.1)} className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 shadow-2xl">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full animate-pulse" style={{ background: accentColor }} />
              <span className="text-[11px] font-medium text-white/40 font-display tracking-wide uppercase">Live workflow — answers calls 24/7</span>
            </div>
            <HeroDiagram />
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-4">
              {[
                { label: 'Answer time', value: '<1.5 seconds' },
                { label: 'Voice latency', value: '<500ms' },
                { label: 'Book time', value: '<45 seconds' },
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
          <h2 className="mt-2 font-display text-3xl font-bold text-white">Why SMBs lose customers on the phone</h2>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Phone, title: "Missed calls are missed revenue", desc: "The average SMB misses 62% of inbound calls after hours. Each missed call is a potential customer who called a competitor next. A 24/7 voice agent answers every single call — immediately, naturally, intelligently." },
            { icon: Clock, title: "Hiring reception staff is expensive and unreliable", desc: "A full-time receptionist costs $35–50k per year and still takes sick days, holidays and breaks. A voice AI agent costs a fraction of that, never calls in sick, and handles unlimited concurrent calls without hold times." },
            { icon: ArrowRight, title: "Agencies need recurring, scalable revenue streams", desc: "One-time project work is unpredictable. White-labeling a voice AI agent to each SMB client at $500–2,000/month creates a sticky, recurring SaaS revenue stream that grows as your client base grows." },
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
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em] font-display" style={{ color: `${accentColor}B3` }}>What we build</span>
              <h2 className="mt-2 font-display text-3xl font-bold text-white">A 4–6 week sprint. White-label ready.</h2>
              <p className="mt-4 text-white/50 text-sm leading-relaxed">
                Kovil AI scopes, builds, tests and deploys this workflow end-to-end. You receive a fully white-labeled agent ready to resell to your first SMB client before the sprint ends.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {[
                  'Twilio phone number provisioning and Media Stream configuration',
                  'ElevenLabs voice clone trained on client-provided audio',
                  'GPT-4o system prompt engineered per SMB client business',
                  'n8n intent routing with all five action branches built',
                  'Google Calendar API integration with slot-finding logic',
                  'HubSpot CRM contact upsert and GPT-4o call summary pipeline',
                  'White-label dashboard skin for SMB client visibility',
                  'Twilio confirmation SMS on every successful booking',
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
                    4–6 weeks
                  </span>
                </div>
                {[
                  { week: 'Week 1–2', title: 'Telephony + voice layer', items: ['Twilio setup, Media Streams WebSocket, ElevenLabs voice clone from client audio'] },
                  { week: 'Week 3–4', title: 'Intent + action routing', items: ['GPT-4o system prompt engineering, n8n intent router, all five action branches'] },
                  { week: 'Week 5–6', title: 'Calendar + CRM + delivery', items: ['Google Calendar booking flow, HubSpot logging, SMS confirmation, white-label dashboard'] },
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
          <Phone size={24} className="relative mx-auto mb-4" style={{ color: accentColor }} />
          <h2 className="relative font-display text-[clamp(22px,3.5vw,36px)] font-bold text-white">
            Give your SMB clients a voice that never sleeps.
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Book a 30-minute discovery call. We will scope the voice agent for your first SMB client — fixed price, white-label ready, zero delivery risk.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://calendly.com/kovil-ai/talent" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold text-white transition-all hover:opacity-95 font-display"
              style={{ background: accentColor, boxShadow: `0 8px 32px ${accentColor}4D` }}
            >
              Build your voice AI agent <ArrowRight size={16} />
            </a>
            <Link
              href="/ai-workflow-automation-library"
              className="inline-flex items-center gap-2 rounded-xl border border-white/[0.10] px-8 py-3.5 text-sm text-white/60 hover:text-white hover:border-white/25 transition-colors"
            >
              Browse other workflows
            </Link>
          </div>
          <p className="relative mt-6 text-[11px] text-white/25">
            Typical sprint: 4–6 weeks · Fixed-price · White-label ready · Post-launch support included
          </p>
        </motion.div>
      </section>

    </div>
  )
}
