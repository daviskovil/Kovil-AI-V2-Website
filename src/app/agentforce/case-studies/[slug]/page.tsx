import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { agentforceCaseStudies, getAgentforceCaseStudy, agentforceCaseStudySlugs } from '@/src/data/agentforce-case-studies'

export async function generateStaticParams() {
  return agentforceCaseStudySlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const cs = getAgentforceCaseStudy(slug)
  if (!cs) return {}
  return {
    title: cs.metaTitle,
    description: cs.metaDescription,
    alternates: { canonical: `https://kovil.ai/agentforce/case-studies/${cs.slug}` },
    keywords: cs.keywords,
    openGraph: {
      type: 'article',
      title: `${cs.metaTitle} | Kovil AI`,
      description: cs.metaDescription,
      url: `https://kovil.ai/agentforce/case-studies/${cs.slug}`,
      siteName: 'Kovil AI',
      images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: cs.headline }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${cs.metaTitle} | Kovil AI`,
      description: cs.metaDescription,
      images: ['https://kovil.ai/og-agentforce.png'],
    },
  }
}

export default async function AgentforceCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cs = getAgentforceCaseStudy(slug)
  if (!cs) notFound()

  // ── JSON-LD Schemas ──────────────────────────────────────────────────────────
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': cs.type === 'case-study' ? 'Article' : 'TechArticle',
    headline: cs.headline,
    description: cs.metaDescription,
    url: `https://kovil.ai/agentforce/case-studies/${cs.slug}`,
    datePublished: cs.published,
    dateModified: cs.published,
    author: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
    publisher: {
      '@type': 'Organization',
      name: 'Kovil AI',
      url: 'https://kovil.ai',
      logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
    },
    image: 'https://kovil.ai/og-agentforce.png',
    about: [
      { '@type': 'Thing', name: 'Salesforce Agentforce' },
      { '@type': 'Thing', name: cs.industry },
    ],
    keywords: cs.keywords.join(', '),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
      { '@type': 'ListItem', position: 2, name: 'Agentforce', item: 'https://kovil.ai/agentforce' },
      { '@type': 'ListItem', position: 3, name: 'Case Studies', item: 'https://kovil.ai/agentforce/case-studies' },
      { '@type': 'ListItem', position: 4, name: cs.clientType, item: `https://kovil.ai/agentforce/case-studies/${cs.slug}` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: cs.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  const howToSchema = cs.type === 'case-study'
    ? {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: `How Kovil AI Deployed Agentforce for ${cs.clientType}`,
        description: cs.solutionBody,
        step: cs.implementationSteps.map((step, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: step.title,
          text: step.detail,
        })),
      }
    : null

  // Related cases (same type, different slug, up to 2)
  const related = agentforceCaseStudies
    .filter((c) => c.slug !== cs.slug && c.type === cs.type)
    .slice(0, 2)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {howToSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      )}

      <main>
        {/* ── DARK HERO ─────────────────────────────────────────────────────── */}
        <section
          className="relative min-h-[640px] flex flex-col justify-center overflow-hidden pt-28 pb-16"
          style={{ background: '#0A0A0A' }}
        >
          {/* Radial orange glow at top */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 100% 70% at 50% -15%, rgba(255,79,0,0.2) 0%, transparent 65%)',
            }}
          />
          {/* Subtle grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.035]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />

          <div className="relative max-w-6xl mx-auto px-6 w-full">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-[#666] mb-8">
              <Link href="/agentforce" className="hover:text-[#FF4F00] transition-colors">Agentforce</Link>
              <span className="text-[#444]">/</span>
              <Link href="/agentforce/case-studies" className="hover:text-[#FF4F00] transition-colors">Case Studies</Link>
              <span className="text-[#444]">/</span>
              <span className="text-[#999]">{cs.clientType}</span>
            </nav>

            {/* Type + Industry badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-[#FF4F00]/15 text-[#FF4F00] border border-[#FF4F00]/25">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4F00]" />
                {cs.type === 'case-study' ? 'Case Study' : 'Capability Spotlight'}
              </span>
              <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 text-[#aaa] border border-white/10">
                {cs.industry}
              </span>
              <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 text-[#aaa] border border-white/10">
                {cs.published}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-black text-white leading-tight max-w-4xl mb-5">
              {cs.headline}
            </h1>
            <p className="text-lg text-[#888] max-w-3xl leading-relaxed mb-12">
              {cs.subheadline}
            </p>

            {/* 3D STAT CARDS ─────────────────────────────────────────────── */}
            <div className={`grid gap-4 ${cs.metrics.length === 4 ? 'grid-cols-2 lg:grid-cols-4' : cs.metrics.length === 3 ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-2'}`}>
              {cs.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl p-5 text-center overflow-hidden"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,79,0,0.07) 0%, rgba(26,26,26,0.9) 50%, rgba(10,10,10,1) 100%)',
                    border: '1px solid rgba(255,79,0,0.2)',
                    boxShadow:
                      '0 25px 50px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,79,0,0.1), inset 0 1px 0 rgba(255,255,255,0.05)',
                  }}
                >
                  {/* Glow spot behind value */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-16 pointer-events-none"
                    style={{
                      background: 'radial-gradient(ellipse at center, rgba(255,79,0,0.25) 0%, transparent 70%)',
                    }}
                  />
                  <div
                    className="relative text-3xl lg:text-4xl font-black text-[#FF4F00] mb-1.5"
                    style={{ textShadow: '0 0 30px rgba(255,79,0,0.6), 0 0 60px rgba(255,79,0,0.2)' }}
                  >
                    {metric.value}
                  </div>
                  <div className="text-white text-xs font-bold uppercase tracking-wider leading-tight">
                    {metric.label}
                  </div>
                  {metric.sublabel && (
                    <div className="text-[#666] text-xs mt-1.5 leading-snug">{metric.sublabel}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LIGHT BODY ────────────────────────────────────────────────────── */}
        <div className="bg-[#FAF8F4]">
          <div className="max-w-4xl mx-auto px-6">
            {/* ── CHALLENGE ─────────────────────────────────────────────────── */}
            <section className="py-14 border-b border-[#E5E2D9]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#0A0A0A] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#FF4F00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M12 3C6.477 3 2 7.477 2 12s4.477 9 10 9 10-4.477 10-9S17.523 3 12 3z" />
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF4F00]">The Challenge</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-black text-[#0A0A0A] mb-5">{cs.challengeHeading}</h2>
              <p className="text-[#4B4B4B] text-lg leading-relaxed mb-6">{cs.challengeBody}</p>
              <ul className="space-y-3">
                {cs.challengeBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 border border-red-400/30 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    </div>
                    <span className="text-[#4B4B4B] leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* ── SOLUTION ──────────────────────────────────────────────────── */}
            <section className="py-14 border-b border-[#E5E2D9]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#0A0A0A] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#FF4F00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF4F00]">The Solution</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-black text-[#0A0A0A] mb-5">{cs.solutionHeading}</h2>
              <p className="text-[#4B4B4B] text-lg leading-relaxed mb-6">{cs.solutionBody}</p>
              <ul className="space-y-3">
                {cs.solutionBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#FF4F00]/10 border border-[#FF4F00]/30 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-[#FF4F00]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-[#4B4B4B] leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* ── IMPLEMENTATION (only for case studies) ─────────────────────── */}
            {cs.type === 'case-study' && cs.implementationSteps.length > 0 && (
              <section className="py-14 border-b border-[#E5E2D9]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#0A0A0A] flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-[#FF4F00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF4F00]">How We Built It</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-black text-[#0A0A0A] mb-8">Implementation: Four Phases to Production</h2>
                <div className="space-y-6">
                  {cs.implementationSteps.map((step, i) => (
                    <div key={i} className="flex gap-5">
                      {/* Step number */}
                      <div className="shrink-0">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm"
                          style={{
                            background: 'linear-gradient(135deg, #FF4F00, #cc3f00)',
                            boxShadow: '0 4px 12px rgba(255,79,0,0.3)',
                          }}
                        >
                          {i + 1}
                        </div>
                      </div>
                      {/* Step content */}
                      <div className="flex-1 pb-6 border-b border-[#E5E2D9] last:border-0 last:pb-0">
                        <h3 className="text-lg font-bold text-[#0A0A0A] mb-2">{step.title}</h3>
                        <p className="text-[#4B4B4B] leading-relaxed">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ── RESULTS ───────────────────────────────────────────────────── */}
            <section className="py-14 border-b border-[#E5E2D9]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#0A0A0A] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#FF4F00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF4F00]">The Results</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-black text-[#0A0A0A] mb-5">{cs.resultsHeading}</h2>
              <p className="text-[#4B4B4B] text-lg leading-relaxed mb-6">{cs.resultsBody}</p>

              {/* Results metric cards */}
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
                {cs.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-5 text-center"
                    style={{
                      background: 'linear-gradient(145deg, #0A0A0A, #111)',
                      border: '1px solid rgba(255,79,0,0.18)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)',
                    }}
                  >
                    <div
                      className="text-2xl lg:text-3xl font-black text-[#FF4F00] mb-1"
                      style={{ textShadow: '0 0 20px rgba(255,79,0,0.5)' }}
                    >
                      {metric.value}
                    </div>
                    <div className="text-white text-xs font-bold uppercase tracking-wide leading-tight">{metric.label}</div>
                    {metric.sublabel && <div className="text-[#666] text-xs mt-1">{metric.sublabel}</div>}
                  </div>
                ))}
              </div>

              <ul className="space-y-3">
                {cs.resultsBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/10 border border-green-400/30 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-[#4B4B4B] leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* ── TECH STACK ────────────────────────────────────────────────── */}
            <section className="py-14 border-b border-[#E5E2D9]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#0A0A0A] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#FF4F00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF4F00]">Technology Stack</span>
              </div>
              <h2 className="text-2xl font-black text-[#0A0A0A] mb-6">Salesforce and Agentforce Components Used</h2>
              <div className="flex flex-wrap gap-3">
                {cs.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-[#0A0A0A] border border-[#E5E2D9] bg-white shadow-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#FF4F00]" />
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* ── FAQ ───────────────────────────────────────────────────────── */}
            <section className="py-14">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#0A0A0A] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#FF4F00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF4F00]">FAQ</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-black text-[#0A0A0A] mb-8">Common Questions About This Deployment</h2>
              <div className="space-y-4">
                {cs.faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group border border-[#E5E2D9] rounded-xl overflow-hidden bg-white"
                  >
                    <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none select-none hover:bg-[#FAF8F4] transition-colors">
                      <span className="text-base font-semibold text-[#0A0A0A] leading-snug">{faq.q}</span>
                      <svg
                        className="w-5 h-5 text-[#FF4F00] shrink-0 group-open:rotate-180 transition-transform duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-5 pb-5 pt-1 border-t border-[#E5E2D9]">
                      <p className="text-[#4B4B4B] leading-relaxed">{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* ── RELATED CONTENT ───────────────────────────────────────────────── */}
        {related.length > 0 && (
          <section className="bg-white border-t border-[#E5E2D9] py-16">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-2xl font-black text-[#0A0A0A] mb-8">
                {cs.type === 'case-study' ? 'More Case Studies' : 'More Capability Spotlights'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/agentforce/case-studies/${rel.slug}`}
                    className="group block bg-[#FAF8F4] border border-[#E5E2D9] rounded-2xl p-6 hover:border-[#FF4F00]/40 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FF4F00]/10 text-[#FF4F00] border border-[#FF4F00]/20">
                        {rel.industry}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#0A0A0A] leading-snug mb-2 group-hover:text-[#FF4F00] transition-colors">
                      {rel.headline}
                    </h3>
                    {rel.metrics[0] && (
                      <div className="flex items-baseline gap-2 mt-3">
                        <span className="text-2xl font-black text-[#FF4F00]">{rel.metrics[0].value}</span>
                        <span className="text-sm text-[#4B4B4B]">{rel.metrics[0].label}</span>
                      </div>
                    )}
                  </Link>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/agentforce/case-studies"
                  className="inline-flex items-center gap-2 text-[#FF4F00] font-semibold hover:underline"
                >
                  View all case studies
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section
          className="relative py-20 overflow-hidden"
          style={{ background: '#0A0A0A' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,79,0,0.12) 0%, transparent 70%)',
            }}
          />
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-5">
              Build this outcome in your organization.
            </h2>
            <p className="text-[#888] text-lg mb-8 leading-relaxed">
              Every Agentforce engagement starts with a free discovery call to map your use case, validate feasibility, and scope a fixed-price delivery. The first 2 weeks carry zero risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-a-call"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#FF4F00] text-white font-bold rounded-xl hover:bg-[#e64500] transition-colors shadow-lg shadow-orange-900/30"
              >
                Book a Free Discovery Call
              </Link>
              <Link
                href="/agentforce/services"
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
