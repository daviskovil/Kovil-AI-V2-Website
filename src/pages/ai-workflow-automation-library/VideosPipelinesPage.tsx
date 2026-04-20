'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Clock, CheckCircle, ChevronRight, Film } from 'lucide-react'

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

function BriefIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#FF6B35">
      <rect x={cx - 11} y={cy - 13} width={22} height={26} rx={3} fill="white" opacity={0.9} />
      <line x1={cx - 7} y1={cy - 7} x2={cx + 7} y2={cy - 7} stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 7} y1={cy - 2} x2={cx + 7} y2={cy - 2} stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" />
      <line x1={cx - 7} y1={cy + 3} x2={cx + 3} y2={cy + 3} stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" />
    </NodeBox>
  )
}

function ComfyUIIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#7C3AED">
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="10" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">CFY</text>
    </NodeBox>
  )
}

function RunwayIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#111111" border="#444444">
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="10" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">RWY</text>
    </NodeBox>
  )
}

function ElevenLabsIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#FF6B00">
      <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="12" fontWeight="800" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif">EL</text>
    </NodeBox>
  )
}

function LipSyncIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#EC4899">
      <ellipse cx={cx} cy={cy + 2} rx={10} ry={7} fill="white" opacity={0.9} />
      <path d={`M${cx - 6},${cy + 2} Q${cx},${cy + 8} ${cx + 6},${cy + 2}`} fill="#EC4899" />
    </NodeBox>
  )
}

function DeliverIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <NodeBox cx={cx} cy={cy} bg="#059669">
      <rect x={cx - 10} y={cy - 10} width={20} height={20} rx={4} fill="white" opacity={0.9} />
      <path d={`M${cx - 5},${cy} L${cx - 1},${cy + 5} L${cx + 7},${cy - 5}`} fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </NodeBox>
  )
}

function ArrowDefs() {
  return (
    <defs>
      <marker id="arrow-video" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
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
  const ma = 'url(#arrow-video)'

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

      <BriefIcon cx={nodes[0].cx} cy={nodes[0].cy} />
      <NodeLabel cx={nodes[0].cx} cy={nodes[0].cy} text="Creative Brief" sub="Input" />

      <ComfyUIIcon cx={nodes[1].cx} cy={nodes[1].cy} />
      <NodeLabel cx={nodes[1].cx} cy={nodes[1].cy} text="ComfyUI" sub="Product photos" />

      <RunwayIcon cx={nodes[2].cx} cy={nodes[2].cy} />
      <NodeLabel cx={nodes[2].cx} cy={nodes[2].cy} text="Runway" sub="Gen-3 video" />

      <ElevenLabsIcon cx={nodes[3].cx} cy={nodes[3].cy} />
      <NodeLabel cx={nodes[3].cx} cy={nodes[3].cy} text="ElevenLabs" sub="Voiceover" />

      <LipSyncIcon cx={nodes[4].cx} cy={nodes[4].cy} />
      <NodeLabel cx={nodes[4].cx} cy={nodes[4].cy} text="Lip Sync" sub="Multilingual" />

      <DeliverIcon cx={nodes[5].cx} cy={nodes[5].cy} />
      <NodeLabel cx={nodes[5].cx} cy={nodes[5].cy} text="Deliver" sub="Frame.io" />

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
    tool: 'Creative Brief',
    toolColor: '#FF6B35',
    title: 'Creative brief submitted with product images, mood board, and target audience',
    detail: 'The workflow begins with a structured creative brief: product images (minimum 3 clean shots on neutral background), a mood board (3–5 reference images showing desired aesthetic and lighting style), target audience description, brand color palette, and intended placement formats (16:9 for YouTube/TV, 9:16 for Reels/TikTok, 1:1 for Meta feed). The brief is submitted via a Notion form or uploaded directly to the n8n workflow trigger. GPT-4o validates completeness before proceeding.',
    tags: ['Creative Brief', 'Notion Form', 'n8n Trigger', 'Product Images', 'Mood Board', 'Format Specifications'],
  },
  {
    num: 2,
    tool: 'ComfyUI',
    toolColor: '#7C3AED',
    title: 'ComfyUI generates 50 product photography variants in 20 minutes',
    detail: 'ComfyUI runs a custom workflow designed for commercial product photography. It takes the product images and mood board as inputs and generates 50 lighting and staging variants: studio white, lifestyle environment, dramatic shadow, hero shot with gradient background, and seasonal/contextual scenes. Each variant maintains consistent product representation — no distortion or hallucinated details. The workflow runs on GPU infrastructure and completes 50 variants in approximately 20 minutes. The best 10 are automatically scored by a CLIP similarity model against the mood board.',
    tags: ['ComfyUI', 'Product Photography', '50 Variants', 'Lighting Variants', 'CLIP Scoring', '20 Minutes'],
  },
  {
    num: 3,
    tool: 'Runway Gen-3 Alpha',
    toolColor: '#111111',
    title: 'Best hero shots sent to Runway Gen-3 for motion: product reveal, lifestyle b-roll, 15-second cuts',
    detail: 'The top 3 scored product hero shots are sent to Runway Gen-3 Alpha via API. For each image, three motion prompts are generated by GPT-4o based on the mood board and placement format: a product reveal with subtle camera pull, a lifestyle b-roll sequence, and a 15-second ad cut with motion graphics pacing. Runway generates 4-second clips per prompt. n8n stitches the best clips into a preliminary cut and stores them in Frame.io for the creative team\'s review.',
    tags: ['Runway Gen-3 Alpha', 'Motion Generation', 'Product Reveal', 'Lifestyle B-Roll', '15-Second Cuts', 'Frame.io Storage'],
  },
  {
    num: 4,
    tool: 'Google Veo',
    toolColor: '#EC4899',
    title: 'For 60-second commercials, Google Veo generates scene-by-scene video from storyboard prompts',
    detail: 'For longer-form commercial production (30–60 seconds), Google Veo is used instead of Runway. GPT-4o converts the creative brief into a storyboard with 8–12 scene descriptions, each specifying camera angle, action, and emotional tone. Veo generates each scene sequentially. Scenes are assembled by n8n into the complete commercial cut, with transition timing matched to the audio track. Google Veo produces significantly longer, cinematographically consistent clips than Runway — better suited for TV and pre-roll formats.',
    tags: ['Google Veo', 'Storyboard Generation', 'Scene-by-Scene Production', '60-Second Commercials', 'TV Format', 'Pre-Roll'],
  },
  {
    num: 5,
    tool: 'ElevenLabs',
    toolColor: '#FF6B00',
    title: 'ElevenLabs dubs voiceover in target language; lip-sync layer applied',
    detail: 'Voiceover script is generated by GPT-4o based on the brief and ad format. ElevenLabs generates the voiceover audio in the target language using a voice profile matching the brand\'s tone (warm and approachable, authoritative, energetic, etc.). For ads featuring on-camera talent, a lip-sync layer is applied using Runway\'s lip-sync capability or a dedicated lip-sync model, adjusting mouth movements to match the dubbed audio. This enables one production to become multilingual without re-shooting talent.',
    tags: ['ElevenLabs', 'Voiceover Generation', 'Multi-Language Dub', 'Lip Sync', 'Voice Profile Matching', 'Multilingual Production'],
  },
  {
    num: 6,
    tool: 'Frame.io Delivery',
    toolColor: '#059669',
    title: 'Final assets delivered to Frame.io organized by format and language',
    detail: 'n8n assembles the final asset package and uploads to Frame.io with a structured folder hierarchy: by placement format (16:9, 9:16, 1:1), then by language version (EN, ES, FR, etc.), then by variant (hero shot, lifestyle, product focus). Each asset is tagged with metadata: format, language, duration, and the Runway/Veo generation parameters used — enabling repro of any specific output. A Frame.io review link is generated and posted to the client\'s Slack channel with a structured handoff message including revision notes and format checklist.',
    tags: ['Frame.io', 'Structured Delivery', 'Format Organization', 'Language Versions', 'Asset Metadata', 'Slack Handoff'],
  },
]

// ── Tech stack ────────────────────────────────────────────────────────────────

const techStack = [
  { name: 'ComfyUI', role: 'Product photography', color: '#7C3AED', desc: 'Generates 50 product photography variants per brief. Runs custom workflows for consistent lighting and brand palette. CLIP scoring selects the best outputs.' },
  { name: 'Runway Gen-3', role: 'Short-form video', color: '#333333', desc: 'Converts hero product shots into motion: product reveals, lifestyle b-roll, and 15-second ad cuts optimized for social placements.' },
  { name: 'Google Veo', role: 'Long-form video', color: '#4285F4', desc: 'Produces 30–60 second commercials from storyboard prompts. Better suited for TV and pre-roll formats requiring cinematographic consistency.' },
  { name: 'ElevenLabs', role: 'Voice + dub', color: '#FF6B00', desc: 'Generates brand-matched voiceover in any language. Enables multilingual ad production without re-shooting on-camera talent.' },
  { name: 'n8n', role: 'Pipeline orchestration', color: '#F65B2B', desc: 'Connects brief intake to ComfyUI, Runway/Veo, ElevenLabs, and Frame.io delivery in a single automated production pipeline.' },
  { name: 'Frame.io', role: 'Asset delivery', color: '#059669', desc: 'Receives final assets organized by format and language. Client-accessible review links generated automatically after upload.' },
]

// ── Outcomes ──────────────────────────────────────────────────────────────────

const outcomes = [
  { stat: '50', label: 'photo variants', sub: 'in 20 minutes' },
  { stat: 'Days', label: '→ Hours', sub: 'production time' },
  { stat: '3+', label: 'languages', sub: 'from one shoot' },
  { stat: '90%', label: 'cost reduction', sub: 'vs. NYC production' },
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

export default function VideosPipelinesPage() {
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
          <span className="text-white/55">ComfyUI & Runway Commercial Video Pipelines</span>
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
              ComfyUI &amp; Runway<br />
              <span className="bg-gradient-to-r from-[#A78BFA] to-[#818CF8] bg-clip-text text-transparent">Commercial Video Pipelines</span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-5 text-base leading-relaxed text-white/55 max-w-lg">
              NYC commercial production costs — locations, actors, union crews — are astronomical. Generative video pipelines produce the same output in hours: 50 product photo variants, motion ads, multilingual voiceover, and lip-synced talent footage.
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
              {['ComfyUI', 'Runway Gen-3', 'Google Veo', 'ElevenLabs', 'n8n', 'Frame.io'].map(t => (
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
                Build this video pipeline <ArrowRight size={15} />
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
              Typical build: <span className="text-white/55 font-medium">4–6 week sprint · Fixed price · Zero delivery risk</span>
            </motion.p>
          </div>

          <motion.div {...fade(0.1)} className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 shadow-2xl">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full animate-pulse" style={{ background: accentColor }} />
              <span className="text-[11px] font-medium text-white/40 font-display tracking-wide uppercase">To be built — runs on every creative brief</span>
            </div>
            <HeroDiagram />
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-4">
              {[
                { label: 'Photo variants', value: '50 in 20 min' },
                { label: 'Languages', value: 'Unlimited dub' },
                { label: 'Formats', value: '16:9, 9:16, 1:1' },
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
          <h2 className="mt-2 font-display text-3xl font-bold text-white">Why traditional commercial production is broken for most brands</h2>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Film, title: 'NYC/LA commercial production costs $50–500k per spot', desc: 'Location fees, union crew rates, talent buyouts, post-production, and agency markups stack up fast. Most brands cannot justify the spend for the testing volume required by modern paid media — you need 20 creative variants, not 1 polished spot.' },
            { icon: Film, title: 'Production timelines are weeks — paid media needs assets in hours', desc: 'A traditional shoot takes 2–4 weeks from brief to final delivery. By the time assets are ready, the media window has shifted. Generative pipelines produce test-ready assets in hours, enabling real-time creative testing at scale.' },
            { icon: Film, title: 'International markets are neglected because dubbing is expensive', desc: 'Re-shooting talent for multilingual markets is cost-prohibitive. Dubbing with human voice actors and lip-sync work adds $5–20k per language. ElevenLabs + automated lip-sync eliminates this cost entirely and produces results indistinguishable from human dubbing.' },
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
              <h2 className="mt-2 font-display text-3xl font-bold text-white">A 4–6 week sprint. Production ready.</h2>
              <p className="mt-4 text-white/50 text-sm leading-relaxed">
                Kovil AI engineers scope, build, test and deploy this generative video pipeline end-to-end. You submit a brief and receive production-ready assets in hours.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {[
                  'ComfyUI custom workflow for product photography with CLIP scoring',
                  'Runway Gen-3 Alpha integration for motion and short-form ad cuts',
                  'Google Veo integration for 30–60 second commercial production',
                  'ElevenLabs voice profile setup and multilingual dub pipeline',
                  'Automated lip-sync layer for on-camera talent footage',
                  'Frame.io delivery with structured folder hierarchy and metadata tagging',
                  'n8n pipeline connecting brief intake to final asset delivery',
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
                  { week: 'Week 1–2', title: 'ComfyUI + Runway', items: ['ComfyUI product photography workflow + Runway Gen-3 motion pipeline'] },
                  { week: 'Week 3–4', title: 'Veo + ElevenLabs', items: ['Google Veo 60-sec commercial pipeline + ElevenLabs voice + lip-sync'] },
                  { week: 'Week 5–6', title: 'Delivery + deploy', items: ['Frame.io delivery system + n8n pipeline integration + full deployment'] },
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
          <Film size={24} className="relative mx-auto mb-4" style={{ color: accentColor }} />
          <h2 className="relative font-display text-[clamp(22px,3.5vw,36px)] font-bold text-white">
            Production-quality video. Hours, not weeks.
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Book a 30-minute discovery call. Kovil AI engineers will scope the ComfyUI product photography setup, Runway/Veo video pipeline, and ElevenLabs multilingual dub workflow for your specific brand — fixed price, zero delivery risk.
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
            Typical sprint: 4–6 weeks · Fixed-price · Fully managed delivery · Post-launch support included
          </p>
        </motion.div>
      </section>

    </div>
  )
}
