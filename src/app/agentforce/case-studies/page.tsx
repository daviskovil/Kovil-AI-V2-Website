import type { Metadata } from 'next'
import Link from 'next/link'
import { agentforceCaseStudies } from '@/src/data/agentforce-case-studies'

export const metadata: Metadata = {
  title: 'Agentforce Case Studies: Real Deployments, Real Results | Kovil AI',
  description:
    'Explore Agentforce case studies across telecom, insurance, real estate, hospitality, education, staffing, and enterprise IT. See how Kovil AI has deployed Salesforce Agentforce to drive measurable outcomes.',
  alternates: { canonical: 'https://kovil.ai/agentforce/case-studies' },
  keywords: [
    'Agentforce case studies',
    'Salesforce Agentforce results',
    'Agentforce deployment examples',
    'Agentforce ROI case studies',
    'Salesforce AI case studies',
    'Agentforce implementation examples',
    'Atlas Reasoning Engine case study',
    'Agentforce real estate case study',
    'Agentforce telecom case study',
    'Salesforce Data Cloud case studies',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce Case Studies: Real Deployments, Real Results | Kovil AI',
    description:
      'See how Kovil AI deploys Agentforce across industries, telecom, insurance, real estate, hospitality, education, and enterprise IT, with measurable outcomes on every engagement.',
    url: 'https://kovil.ai/agentforce/case-studies',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Agentforce Case Studies, Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce Case Studies: Real Deployments, Real Results | Kovil AI',
    description:
      'Explore Agentforce case studies across telecom, insurance, real estate, hospitality, education, staffing, and enterprise IT.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const listingSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Agentforce Case Studies',
  description:
    'A collection of Agentforce case studies and capability spotlights from Kovil AI, covering Service Cloud automation, Data Cloud deployments, WhatsApp integrations, and Atlas Reasoning Engine implementations.',
  url: 'https://kovil.ai/agentforce/case-studies',
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Agentforce', item: 'https://kovil.ai/agentforce' },
    { '@type': 'ListItem', position: 3, name: 'Case Studies', item: 'https://kovil.ai/agentforce/case-studies' },
  ],
}

// Subtle color accent per industry — used only for the tag border/text
const industryAccent: Record<string, { border: string; text: string }> = {
  'Telecommunications':                          { border: 'rgba(96,165,250,0.4)',  text: '#93c5fd' },
  'Insurance / Healthcare':                      { border: 'rgba(52,211,153,0.4)',  text: '#6ee7b7' },
  'Education / EdTech':                          { border: 'rgba(167,139,250,0.4)', text: '#c4b5fd' },
  'Hospitality / Hotels':                        { border: 'rgba(251,191,36,0.4)',  text: '#fde68a' },
  'Real Estate':                                 { border: 'rgba(255,79,0,0.4)',    text: '#fdba74' },
  'Real Estate / PropTech':                      { border: 'rgba(255,79,0,0.4)',    text: '#fdba74' },
  'Staffing & Recruiting / HR':                  { border: 'rgba(249,168,212,0.4)', text: '#f9a8d4' },
  'Enterprise Technology / Professional Services':{ border: 'rgba(103,232,249,0.4)', text: '#67e8f9' },
  'Cross-Industry':                              { border: 'rgba(156,163,175,0.4)', text: '#d1d5db' },
  'Field Sales / Real Estate / Enterprise Sales':{ border: 'rgba(255,79,0,0.4)',    text: '#fdba74' },
}

const cardStyle = {
  background: 'linear-gradient(160deg, #161616 0%, #111111 100%)',
  border: '1px solid rgba(255,255,255,0.07)',
  boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
}

const cardHoverClass =
  'group block rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(255,79,0,0.3)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,79,0,0.15)]'

export default function AgentforceCaseStudiesPage() {
  const caseStudies = agentforceCaseStudies.filter((cs) => cs.type === 'case-study')
  const spotlights  = agentforceCaseStudies.filter((cs) => cs.type === 'capability-spotlight')

  const featured = caseStudies[0]
  const rest     = caseStudies.slice(1)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main style={{ background: '#0A0A0A' }}>
        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section className="relative min-h-[520px] flex flex-col justify-center overflow-hidden pt-28 pb-20">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 90% 60% at 50% -10%, rgba(255,79,0,0.18) 0%, transparent 70%)' }} />
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

          <div className="relative max-w-6xl mx-auto px-6 text-center">
            <nav className="flex items-center justify-center gap-2 text-sm text-[#555] mb-8">
              <Link href="/agentforce" className="hover:text-[#FF4F00] transition-colors">Agentforce</Link>
              <span>/</span>
              <span className="text-[#999]">Case Studies</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF4F00]/30 bg-[#FF4F00]/10 text-[#FF4F00] text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4F00] animate-pulse" />
              Agentforce in Production
            </div>

            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
              Real Deployments.<br />
              <span className="text-[#FF4F00]">Measured Outcomes.</span>
            </h1>
            <p className="text-lg lg:text-xl text-[#666] max-w-3xl mx-auto leading-relaxed mb-10">
              Every engagement below is a production Agentforce deployment. From Service Cloud automation in telecom to Atlas Reasoning Engine across five enterprise systems, these are the outcomes that matter.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-10 mt-4">
              {[
                { value: '8', label: 'Case Studies' },
                { value: '6', label: 'Capability Spotlights' },
                { value: '10+', label: 'Agentforce Components' },
                { value: '6', label: 'Industries' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-black text-[#FF4F00]">{s.value}</div>
                  <div className="text-xs text-[#555] uppercase tracking-widest mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CASE STUDIES ──────────────────────────────────────────────────── */}
        <section className="py-20 border-t border-white/[0.05]">
          <div className="max-w-6xl mx-auto px-6">
            {/* Section label */}
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-white/[0.06]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#555]">Case Studies</span>
              <div className="h-px flex-1 bg-white/[0.06]" />
            </div>

            {/* FEATURED CARD — full width, horizontal layout */}
            {featured && (
              <Link
                href={`/agentforce/case-studies/${featured.slug}`}
                className={`${cardHoverClass} flex flex-col lg:flex-row mb-6`}
                style={cardStyle}
              >
                {/* Left: info */}
                <div className="flex-1 p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                        style={{
                          border: `1px solid ${industryAccent[featured.industry]?.border ?? 'rgba(255,255,255,0.15)'}`,
                          color: industryAccent[featured.industry]?.text ?? '#aaa',
                          background: 'rgba(255,255,255,0.03)',
                        }}
                      >
                        {featured.industry}
                      </span>
                      <span className="text-xs text-[#444]">{featured.published}</span>
                    </div>
                    <h2 className="text-xl lg:text-2xl font-black text-white leading-snug mb-4 group-hover:text-[#FF4F00] transition-colors duration-300">
                      {featured.headline}
                    </h2>
                    <p className="text-[#555] text-sm leading-relaxed line-clamp-2 mb-6">
                      {featured.subheadline}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {featured.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full text-[#555] border border-white/[0.07]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: stats grid */}
                <div
                  className="lg:w-80 shrink-0 border-t lg:border-t-0 lg:border-l border-white/[0.06] p-8 grid grid-cols-2 gap-px"
                  style={{ background: 'rgba(255,79,0,0.03)' }}
                >
                  {featured.metrics.map((m, i) => (
                    <div key={i} className="p-4 flex flex-col justify-center" style={{ borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.05)' : 'none', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                      <div className="text-2xl lg:text-3xl font-black text-[#FF4F00] mb-1" style={{ textShadow: '0 0 20px rgba(255,79,0,0.4)' }}>
                        {m.value}
                      </div>
                      <div className="text-white text-[10px] font-semibold uppercase tracking-wide leading-tight">{m.label}</div>
                      {m.sublabel && <div className="text-[#444] text-[10px] mt-0.5 leading-snug">{m.sublabel}</div>}
                    </div>
                  ))}
                </div>
              </Link>
            )}

            {/* Remaining case study cards — 2-col grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rest.map((cs) => {
                const accent = industryAccent[cs.industry] ?? { border: 'rgba(255,255,255,0.15)', text: '#aaa' }
                return (
                  <Link
                    key={cs.slug}
                    href={`/agentforce/case-studies/${cs.slug}`}
                    className={`${cardHoverClass} flex flex-col`}
                    style={cardStyle}
                  >
                    {/* Top: industry + date */}
                    <div className="px-6 pt-6 pb-4 flex items-center justify-between">
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                        style={{ border: `1px solid ${accent.border}`, color: accent.text, background: 'rgba(255,255,255,0.02)' }}
                      >
                        {cs.industry}
                      </span>
                      <span className="text-[11px] text-[#444]">{cs.published}</span>
                    </div>

                    {/* Metric hero */}
                    <div className="px-6 pb-5 relative">
                      {/* Subtle radial glow behind number */}
                      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 80% at 0% 50%, rgba(255,79,0,0.06) 0%, transparent 70%)' }} />
                      <div className="relative">
                        <div
                          className="text-5xl lg:text-6xl font-black text-[#FF4F00] leading-none mb-1"
                          style={{ textShadow: '0 0 40px rgba(255,79,0,0.5)' }}
                        >
                          {cs.metrics[0]?.value}
                        </div>
                        <div className="text-white text-xs font-semibold uppercase tracking-wider">{cs.metrics[0]?.label}</div>
                        {cs.metrics[0]?.sublabel && (
                          <div className="text-[#444] text-xs mt-0.5">{cs.metrics[0].sublabel}</div>
                        )}
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="mx-6 h-px bg-white/[0.06]" />

                    {/* Headline + other metrics */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-base font-bold text-white leading-snug mb-5 group-hover:text-[#FF4F00] transition-colors duration-300">
                        {cs.headline}
                      </h3>

                      {/* Secondary metrics as small chips */}
                      {cs.metrics.length > 1 && (
                        <div className="flex flex-wrap gap-2 mb-5">
                          {cs.metrics.slice(1, 4).map((m, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full"
                              style={{ background: 'rgba(255,79,0,0.07)', border: '1px solid rgba(255,79,0,0.15)', color: '#FF4F00' }}
                            >
                              <span className="font-black">{m.value}</span>
                              <span className="text-[#888] font-normal">{m.label}</span>
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                        {cs.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full text-[#444] border border-white/[0.06]">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-1.5 text-[#FF4F00] text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                        Read case study
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── CAPABILITY SPOTLIGHTS ─────────────────────────────────────────── */}
        <section className="py-20 border-t border-white/[0.05]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-white/[0.06]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#555]">Capability Spotlights</span>
              <div className="h-px flex-1 bg-white/[0.06]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {spotlights.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/agentforce/case-studies/${cs.slug}`}
                  className={`${cardHoverClass} flex flex-col p-6`}
                  style={{
                    background: 'linear-gradient(160deg, #141414 0%, #0f0f0f 100%)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                  }}
                >
                  {/* Spotlight badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                      style={{ border: '1px solid rgba(255,79,0,0.3)', color: '#FF4F00', background: 'rgba(255,79,0,0.06)' }}
                    >
                      Capability
                    </span>
                    <span className="text-[11px] text-[#3a3a3a]">{cs.published}</span>
                  </div>

                  {/* Metric callout */}
                  <div className="mb-4">
                    <div className="text-3xl font-black text-[#FF4F00] mb-0.5" style={{ textShadow: '0 0 24px rgba(255,79,0,0.4)' }}>
                      {cs.metrics[0]?.value}
                    </div>
                    <div className="text-white text-[11px] font-semibold uppercase tracking-wide">{cs.metrics[0]?.label}</div>
                  </div>

                  <div className="h-px bg-white/[0.05] mb-4" />

                  <h3 className="text-sm font-bold text-white leading-snug mb-3 group-hover:text-[#FF4F00] transition-colors duration-300 flex-1">
                    {cs.headline}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cs.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full text-[#3a3a3a] border border-white/[0.05]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-[#FF4F00] text-xs font-semibold group-hover:gap-2.5 transition-all duration-200">
                    Explore capability
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="py-24 border-t border-white/[0.05]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-5">
              Ready to build your own Agentforce success story?
            </h2>
            <p className="text-[#555] text-lg mb-10 leading-relaxed">
              Every engagement starts with a discovery call to map your highest-ROI Agentforce use case. Fixed-price delivery. 2-week risk-free pilot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-a-call"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#FF4F00] text-white font-bold rounded-xl hover:bg-[#e64500] transition-colors shadow-lg shadow-orange-900/20"
              >
                Book a Discovery Call
              </Link>
              <Link
                href="/agentforce"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/10 text-white font-semibold rounded-xl hover:border-[#FF4F00]/40 transition-colors"
              >
                Explore Agentforce Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
