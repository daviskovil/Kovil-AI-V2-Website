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
  publisher: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
  },
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

const industryColors: Record<string, string> = {
  'Telecommunications': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'Insurance / Healthcare': 'bg-green-500/20 text-green-300 border-green-500/30',
  'Education / EdTech': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  'Hospitality / Hotels': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  'Real Estate': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  'Real Estate / PropTech': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  'Staffing & Recruiting / HR': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
  'Enterprise Technology / Professional Services': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  'Cross-Industry': 'bg-gray-500/20 text-gray-300 border-gray-500/30',
  'Field Sales / Real Estate / Enterprise Sales': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
}

export default function AgentforceCaseStudiesPage() {
  const caseStudies = agentforceCaseStudies.filter((cs) => cs.type === 'case-study')
  const spotlights = agentforceCaseStudies.filter((cs) => cs.type === 'capability-spotlight')

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main>
        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section
          className="relative min-h-[520px] flex flex-col justify-center overflow-hidden pt-28 pb-20"
          style={{ background: '#0A0A0A' }}
        >
          {/* Radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 90% 60% at 50% -10%, rgba(255,79,0,0.18) 0%, transparent 70%)',
            }}
          />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          <div className="relative max-w-6xl mx-auto px-6 text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-sm text-[#888] mb-8">
              <Link href="/agentforce" className="hover:text-[#FF4F00] transition-colors">Agentforce</Link>
              <span>/</span>
              <span className="text-[#FAF8F4]">Case Studies</span>
            </nav>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF4F00]/30 bg-[#FF4F00]/10 text-[#FF4F00] text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4F00] animate-pulse" />
              Agentforce in Production
            </div>

            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
              Real Deployments.<br />
              <span className="text-[#FF4F00]">Measured Outcomes.</span>
            </h1>
            <p className="text-lg lg:text-xl text-[#888] max-w-3xl mx-auto leading-relaxed mb-10">
              Every engagement below is a production Agentforce deployment. From Service Cloud automation in telecom to Atlas Reasoning Engine across five enterprise systems, these are the outcomes that matter.
            </p>

            {/* Stats bar */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-4">
              {[
                { value: '8', label: 'Case Studies' },
                { value: '6', label: 'Capability Spotlights' },
                { value: '10+', label: 'Agentforce Components' },
                { value: '6', label: 'Industries' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-black text-[#FF4F00]">{s.value}</div>
                  <div className="text-xs text-[#888] uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CASE STUDIES GRID ─────────────────────────────────────────────── */}
        <section className="bg-[#FAF8F4] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl font-black text-[#0A0A0A] mb-3">Case Studies</h2>
              <p className="text-[#4B4B4B] max-w-2xl">
                Production Agentforce deployments with documented outcomes, no theoretical results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {caseStudies.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/agentforce/case-studies/${cs.slug}`}
                  className="group block bg-white border border-[#E5E2D9] rounded-2xl overflow-hidden hover:border-[#FF4F00]/40 hover:shadow-xl transition-all duration-300"
                >
                  {/* Card header */}
                  <div className="p-6 pb-4 border-b border-[#E5E2D9]">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <span
                        className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${
                          industryColors[cs.industry] ?? 'bg-gray-100 text-gray-600 border-gray-200'
                        }`}
                      >
                        {cs.industry}
                      </span>
                      <span className="text-xs text-[#888] shrink-0">{cs.published}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0A0A0A] leading-snug group-hover:text-[#FF4F00] transition-colors">
                      {cs.headline}
                    </h3>
                  </div>

                  {/* Hero metric */}
                  {cs.metrics[0] && (
                    <div
                      className="px-6 py-5"
                      style={{
                        background: 'linear-gradient(135deg, #0A0A0A 0%, #111 100%)',
                      }}
                    >
                      <div className="flex items-baseline gap-3">
                        <span className="text-4xl font-black text-[#FF4F00]" style={{ textShadow: '0 0 30px rgba(255,79,0,0.4)' }}>
                          {cs.metrics[0].value}
                        </span>
                        <div>
                          <div className="text-white text-sm font-semibold">{cs.metrics[0].label}</div>
                          {cs.metrics[0].sublabel && (
                            <div className="text-[#888] text-xs">{cs.metrics[0].sublabel}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tags and CTA */}
                  <div className="p-6 pt-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cs.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 bg-[#FAF8F4] border border-[#E5E2D9] rounded-full text-[#4B4B4B]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-[#FF4F00] text-sm font-semibold group-hover:gap-2 gap-1 transition-all">
                      Read case study
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CAPABILITY SPOTLIGHTS GRID ────────────────────────────────────── */}
        <section className="bg-white py-20 border-t border-[#E5E2D9]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl font-black text-[#0A0A0A] mb-3">Capability Spotlights</h2>
              <p className="text-[#4B4B4B] max-w-2xl">
                Deep dives into specific Agentforce capabilities, what they do, how they work, and when to use them.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {spotlights.map((cs) => (
                <Link
                  key={cs.slug}
                  href={`/agentforce/case-studies/${cs.slug}`}
                  className="group block bg-[#FAF8F4] border border-[#E5E2D9] rounded-2xl p-6 hover:border-[#FF4F00]/40 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#FF4F00]/10 text-[#FF4F00] border border-[#FF4F00]/20">
                      Capability Spotlight
                    </span>
                    <span className="text-xs text-[#888] shrink-0">{cs.published}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#0A0A0A] leading-snug mb-3 group-hover:text-[#FF4F00] transition-colors">
                    {cs.headline}
                  </h3>
                  <p className="text-sm text-[#4B4B4B] leading-relaxed mb-4 line-clamp-3">
                    {cs.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cs.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 bg-white border border-[#E5E2D9] rounded-full text-[#4B4B4B]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-[#FF4F00] text-sm font-semibold group-hover:gap-2 gap-1 transition-all">
                    Explore capability
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="bg-[#0A0A0A] py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-5">
              Ready to build your own Agentforce success story?
            </h2>
            <p className="text-[#888] text-lg mb-8">
              Every engagement starts with a discovery call to map your highest-ROI Agentforce use case. Fixed-price delivery. 2-week risk-free pilot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-a-call"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#FF4F00] text-white font-bold rounded-xl hover:bg-[#e64500] transition-colors"
              >
                Book a Discovery Call
              </Link>
              <Link
                href="/agentforce"
                className="inline-flex items-center justify-center px-8 py-4 border border-[#333] text-white font-semibold rounded-xl hover:border-[#FF4F00]/50 transition-colors"
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
