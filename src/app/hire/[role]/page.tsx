import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react'
import { getHireRole, getAllHireRoleSlugs } from '@/src/data/hire-roles'

interface Props {
  params: Promise<{ role: string }>
}

export async function generateStaticParams() {
  return getAllHireRoleSlugs().map(slug => ({ role: slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { role } = await params
  const data = getHireRole(role)
  if (!data) return {}
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    openGraph: {
      title: `${data.metaTitle} | Kovil AI`,
      description: data.metaDescription,
      url: `https://kovil.ai/hire/${role}`,
      siteName: 'Kovil AI',
      type: 'website',
      images: [{ url: `https://kovil.ai${data.heroImage}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${data.metaTitle} | Kovil AI`,
      description: data.metaDescription,
    },
    alternates: { canonical: `https://kovil.ai/hire/${role}` },
    robots: { index: true, follow: true },
  }
}

function DemandBadge({ level }: { level: string }) {
  const map: Record<string, string> = {
    'Critical': 'bg-red-50 text-red-700 border border-red-200',
    'Very High': 'bg-orange-50 text-orange-700 border border-orange-200',
    'High': 'bg-amber-50 text-amber-700 border border-amber-200',
    'Moderate': 'bg-green-50 text-green-700 border border-green-200',
  }
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${map[level] ?? 'bg-gray-100 text-gray-600'}`}>
      {level}
    </span>
  )
}

export default async function HireRolePage({ params }: Props) {
  const { role } = await params
  const data = getHireRole(role)
  if (!data) notFound()

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol.webp',
    description: 'Managed AI engineering firm that embeds vetted Tier-1 AI engineers into your team.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '734 Franklin Ave',
      addressLocality: 'Garden City',
      addressRegion: 'NY',
      postalCode: '11530',
      addressCountry: 'US',
    },
    contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' },
    sameAs: ['https://www.linkedin.com/company/kovil-ai/'],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
      { '@type': 'ListItem', position: 2, name: 'Hire', item: 'https://kovil.ai/ai-staff-augmentation' },
      { '@type': 'ListItem', position: 3, name: data.roleNamePlural, item: `https://kovil.ai/hire/${role}` },
    ],
  }

  const serviceSchema = { '@context': 'https://schema.org', ...data.serviceSchema }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  // DefinedTerm — gives answer engines and LLMs a clean, standalone
  // definition to lift for "what is a/an {role}" queries, independent
  // of the FAQ prose. Reuses the same roleDefinition shown on-page.
  const definedTermSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: data.roleName,
    description: data.roleDefinition,
    inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Hiring Glossary', url: 'https://kovil.ai/hire' },
    url: `https://kovil.ai/hire/${role}`,
  }

  // WebPage + Speakable — mirrors the pattern used on kovil.ai/ and the
  // custom hire pages (e.g. /hire/forward-deployed-engineer): dateModified
  // for freshness signals, speakable for voice/AEO surfaces.
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: data.metaTitle,
    description: data.metaDescription,
    url: `https://kovil.ai/hire/${role}`,
    datePublished: '2026-06-30',
    dateModified: '2026-08-24',
    inLanguage: 'en-US',
    isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '#definition p', '#faq h3'],
    },
    publisher: {
      '@type': 'Organization',
      name: 'Kovil AI',
      url: 'https://kovil.ai',
      logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol.webp' },
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="pt-20">

        {/* ── HERO ── */}
        <section className="bg-[#0A0A0A] py-20 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left: text */}
              <div>
                {/* Breadcrumb */}
                <nav className="flex items-center gap-1.5 text-xs text-[#6B7280] mb-6 font-sans">
                  <Link href="/" className="hover:text-[#FF4F00] transition-colors">Home</Link>
                  <ChevronRight className="w-3 h-3" />
                  <Link href="/ai-staff-augmentation" className="hover:text-[#FF4F00] transition-colors">Hire Engineers</Link>
                  <ChevronRight className="w-3 h-3" />
                  <span className="text-[#A09A91]">{data.roleNamePlural}</span>
                </nav>

                <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-4 font-sans">
                  Hire {data.roleNamePlural}
                </p>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                  {data.heroHeadline}
                </h1>
                <p className="text-[#A09A91] text-lg leading-relaxed mb-8 font-sans">
                  {data.heroSubheadline}
                </p>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    'Matched in 48 Hours',
                    '2-Week Risk-Free Trial',
                    'No Termination Fees',
                    'Engagement Manager Included',
                  ].map(b => (
                    <span key={b} className="inline-flex items-center gap-1.5 bg-[#141414] border border-[#252525] text-white text-xs font-medium px-3 py-1.5 rounded-full font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF4F00] flex-shrink-0" />
                      {b}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#FF4F00] text-white font-bold px-7 py-3.5 rounded-full hover:bg-[#e64600] transition-colors font-sans"
                  >
                    Book a Free Call
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/how-it-works"
                    className="inline-flex items-center justify-center gap-2 border border-[#2A2A2A] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#1A1A1A] transition-colors font-sans"
                  >
                    How It Works
                  </Link>
                </div>
              </div>

              {/* Right: hero image */}
              <div className="lg:flex justify-end hidden">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-br from-[#FF4F00]/20 to-transparent rounded-2xl blur-xl" />
                  <Image
                    src={data.heroImage}
                    alt={`Hire ${data.roleNamePlural} through Kovil AI`}
                    width={540}
                    height={304}
                    className="relative rounded-2xl border border-[#1E1E1E] shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <section className="bg-white border-b border-[#E5E2D9] py-5">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-sm font-medium text-[#6B7280] font-sans">
              <span className="flex items-center gap-2"><span className="text-[#FF4F00]">✦</span> 150+ AI Deployments</span>
              <span className="flex items-center gap-2"><span className="text-[#FF4F00]">✦</span> 50+ Enterprise Clients</span>
              <span className="flex items-center gap-2"><span className="text-[#FF4F00]">✦</span> 98% Trial-to-Hire Rate</span>
              <span className="flex items-center gap-2"><span className="text-[#FF4F00]">✦</span> Avg 48hr Match Time</span>
              <span className="flex items-center gap-2"><span className="text-[#FF4F00]">✦</span> Trusted by Unilever, Smartfren and more</span>
            </div>
          </div>
        </section>

        {/* ── ROLE DEFINITION ── */}
        <section id="definition" className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-3">
                <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-3 font-sans">
                  What Is a {data.roleName}?
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-5 leading-snug">
                  Understanding the Role Before You Hire
                </h2>
                <p className="text-[#4B5563] text-lg font-sans leading-relaxed mb-6">
                  {data.roleDefinition}
                </p>
                <div className="bg-white border-l-4 border-[#FF4F00] rounded-r-xl p-5">
                  <p className="text-sm text-[#6B7280] font-sans leading-relaxed">
                    <strong className="text-[#0A0A0A]">Kovil AI&apos;s approach:</strong> Every {data.roleName.toLowerCase()} we place has shipped AI systems to production, not just built demos. We verify real deployment experience through production portfolio review and timed build challenges.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-2 grid gap-4">
                {data.marketStats.map((stat, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl border border-[#E5E2D9]">
                    <div className="w-1 flex-shrink-0 bg-[#FF4F00] rounded-full" />
                    <div>
                      <p className="font-display text-2xl font-bold text-[#FF4F00] mb-0.5">{stat.value}</p>
                      <p className="text-[#6B7280] font-sans text-sm leading-snug">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-[#E5E2D9]" />

        {/* ── WHAT YOU GET ── */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">
                What You Get With a Kovil AI {data.roleName}
              </h2>
              <p className="text-[#6B7280] text-lg font-sans max-w-2xl">
                Every engagement includes managed delivery, milestone oversight, and our 2-week risk-free trial. No exceptions.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {data.whatYouGet.map((point, i) => (
                <div key={i} className="flex gap-3 p-5 rounded-2xl border border-[#E5E2D9] hover:border-[#FF4F00] hover:shadow-sm transition-all group">
                  <CheckCircle2 className="w-5 h-5 text-[#FF4F00] flex-shrink-0 mt-0.5" />
                  <p className="text-[#0A0A0A] font-sans leading-relaxed text-sm">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MID-PAGE CTA BANNER ── */}
        <section className="bg-[#0A0A0A] py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-10 rounded-3xl bg-gradient-to-r from-[#FF4F00] to-[#c73d00]">
              <div>
                <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1 font-sans">
                  Every week you wait is a week your competitors are shipping
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
                  Ready in 48 hours. Shipping in 14 days.
                </h3>
              </div>
              <div className="flex-shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#FF4F00] font-bold px-7 py-3.5 rounded-full hover:bg-[#FAF8F4] transition-colors font-sans whitespace-nowrap"
                >
                  Start the Trial
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW WE VET ── */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-3 font-sans">Our Vetting Process</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Why Our {data.roleNamePlural} Are Different
              </h2>
              <p className="text-[#A09A91] text-lg font-sans max-w-2xl">
                We accept the top 1% of applicants. Here is what they go through before they are offered to any client.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {data.vettingCriteria.map((step, i) => (
                <div key={i} className="relative p-7 rounded-2xl border border-[#1E1E1E] bg-[#111111] overflow-hidden">
                  <span className="absolute top-5 right-6 font-display text-5xl font-bold text-white/5 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#FF4F00]/10 border border-[#FF4F00]/20 flex items-center justify-center mb-4">
                    <span className="text-[#FF4F00] text-sm font-bold font-display">{i + 1}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-[#A09A91] font-sans leading-relaxed text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section className="py-20 bg-[#FAF8F4] border-t border-[#E5E2D9]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">
              Skills &amp; Technologies
            </h2>
            <p className="text-[#6B7280] text-lg font-sans mb-8 max-w-2xl">
              Our {data.roleNamePlural} are vetted across these tools and platforms. We match based on your exact stack.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {data.skills.map(skill => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full border border-[#E5E2D9] bg-white text-sm font-medium text-[#0A0A0A] font-sans hover:border-[#FF4F00] hover:text-[#FF4F00] transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="border-t border-[#E5E2D9]" />

        {/* ── COMPARISON TABLE ── */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-3 font-sans">Side-by-Side</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">
                Kovil AI vs Full-Time Hire vs Freelancer
              </h2>
              <p className="text-[#6B7280] text-lg font-sans max-w-2xl">
                Three ways to bring in a {data.roleName.toLowerCase()}. Different risk profiles, timelines, and accountability structures.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-[#E5E2D9]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#0A0A0A]">
                    <th className="px-6 py-4 text-left font-bold text-[#6B7280] font-sans w-1/4">Dimension</th>
                    <th className="px-6 py-4 text-left font-bold text-[#FF4F00] font-sans w-1/4">Kovil AI</th>
                    <th className="px-6 py-4 text-left font-bold text-white font-sans w-1/4">Full-Time Hire</th>
                    <th className="px-6 py-4 text-left font-bold text-white font-sans w-1/4">Freelancer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F3F4F6]">
                  {data.comparisonRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}>
                      <td className="px-6 py-4 font-semibold text-[#0A0A0A] font-sans text-sm">{row.dimension}</td>
                      <td className="px-6 py-4 text-[#16a34a] font-sans text-sm font-medium">{row.kovil}</td>
                      <td className="px-6 py-4 text-[#6B7280] font-sans text-sm">{row.fullTime}</td>
                      <td className="px-6 py-4 text-[#6B7280] font-sans text-sm">{row.freelancer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-20 bg-[#0A0A0A] border-t border-[#111]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                From Brief to Shipping in 14 Days
              </h2>
              <p className="text-[#A09A91] text-lg font-sans max-w-2xl">
                Our engagement process is fast, structured, and risk-free. No surprises, no lock-in.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: '01',
                  title: 'Describe Your Needs',
                  desc: `Fill a brief intake form. A Delivery Lead contacts you within 24 hours to scope your ${data.roleName.toLowerCase()} requirements, tech stack, and timeline.`,
                },
                {
                  step: '02',
                  title: `Meet Your ${data.roleName}`,
                  desc: `We match you with a vetted ${data.roleName.toLowerCase()} in 24-48 hours. Review their profile, join a short intro call, and kick off your 2-week risk-free trial.`,
                },
                {
                  step: '03',
                  title: 'Watch Results Ship',
                  desc: 'Your first feature ships within 14 days. An Engagement Manager audits every commit. Scale up or down with zero lock-in.',
                },
              ].map(s => (
                <div key={s.step} className="p-7 rounded-2xl border border-[#1E1E1E] bg-[#111111]">
                  <div className="text-[#FF4F00] font-display text-3xl font-bold mb-4 opacity-50">{s.step}</div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-[#A09A91] font-sans leading-relaxed text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CASE STUDY ── */}
        <section className="py-20 bg-white border-t border-[#E5E2D9]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-10">Proven Results</h2>
            <div className="p-8 md:p-12 rounded-3xl bg-[#0A0A0A] text-white">
              <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-3 font-sans">
                {data.relatedCaseStudy.industry}
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-8 max-w-2xl leading-snug">
                {data.relatedCaseStudy.headline}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="p-5 rounded-xl bg-[#111111] border border-[#1E1E1E]">
                  <p className="text-[#FF4F00] font-display text-xl font-bold mb-1">{data.relatedCaseStudy.stat1}</p>
                  <p className="text-[#A09A91] text-xs font-sans uppercase tracking-wide">Key Outcome</p>
                </div>
                <div className="p-5 rounded-xl bg-[#111111] border border-[#1E1E1E]">
                  <p className="text-[#FF4F00] font-display text-xl font-bold mb-1">{data.relatedCaseStudy.stat2}</p>
                  <p className="text-[#A09A91] text-xs font-sans uppercase tracking-wide">Key Outcome</p>
                </div>
              </div>
              <Link
                href={data.relatedCaseStudy.url}
                className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#FF4F00] transition-colors font-sans text-sm"
              >
                Read the Full Case Study
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="py-20 bg-[#FAF8F4] border-t border-[#E5E2D9]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-[#6B7280] text-lg font-sans max-w-2xl">
                Everything you need to know about hiring {data.roleNamePlural.toLowerCase()} through Kovil AI.
              </p>
            </div>
            <div className="divide-y divide-[#E5E2D9] max-w-4xl">
              {data.faqs.map((faq, i) => (
                <div key={i} className="py-7">
                  <h3 className="font-display text-lg font-bold text-[#0A0A0A] mb-3">{faq.question}</h3>
                  <p className="text-[#6B7280] font-sans leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED LINKS ── */}
        <section className="py-14 bg-white border-t border-[#E5E2D9]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mb-7">Related Resources</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: 'AI Staff Augmentation', href: '/ai-staff-augmentation', desc: 'How our staffing model works end to end' },
                { label: 'How It Works', href: '/how-it-works', desc: 'The 14-day process from brief to shipping' },
                { label: 'Case Studies', href: '/case-studies', desc: 'Real results from real AI deployments' },
              ].map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="p-5 rounded-xl border border-[#E5E2D9] hover:border-[#FF4F00] hover:shadow-sm transition-all group"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-semibold text-[#0A0A0A] font-sans text-sm group-hover:text-[#FF4F00] transition-colors">
                      {link.label}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FF4F00]" />
                  </div>
                  <p className="text-[#6B7280] text-xs font-sans">{link.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-24 bg-[#FF4F00]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Start Your 2-Week Risk-Free Trial
            </h2>
            <p className="text-white/80 text-lg font-sans mb-10 max-w-xl mx-auto">
              Fixed price. Milestone-gated. Zero delivery risk. Zero termination fees. Your {data.roleName.toLowerCase()} is ready in 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#FF4F00] font-bold px-8 py-4 rounded-full hover:bg-[#FAF8F4] transition-colors font-sans"
              >
                Book a Free Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/ai-staff-augmentation"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors font-sans"
              >
                Explore Staff Augmentation
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
