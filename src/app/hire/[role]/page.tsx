import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
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
    title: `${data.metaTitle} | Kovil AI`,
    description: data.metaDescription,
    keywords: data.keywords,
    openGraph: {
      title: `${data.metaTitle} | Kovil AI`,
      description: data.metaDescription,
      url: `https://kovil.ai/hire/${role}`,
      siteName: 'Kovil AI',
      type: 'website',
      images: [{ url: 'https://kovil.ai/og-default.png', width: 1200, height: 630 }],
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
      { '@type': 'ListItem', position: 2, name: 'Hire', item: 'https://kovil.ai/hire' },
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="pt-20">

        {/* ── HERO ── */}
        <section className="bg-[#0A0A0A] py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">
                Hire {data.roleNamePlural}
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {data.heroHeadline}
              </h1>
              <p className="text-[#A09A91] text-lg md:text-xl leading-relaxed mb-10 font-sans">
                {data.heroSubheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#e64600] transition-colors font-sans"
                >
                  Book a Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center gap-2 border border-[#2A2A2A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#1A1A1A] transition-colors font-sans"
                >
                  See How It Works
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <section className="border-y border-[#E5E2D9] bg-[#FAF8F4] py-6">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-[#6B7280] font-sans">
              <span>150+ Successful AI Deployments</span>
              <span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>50+ Enterprise Customers</span>
              <span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>98% Trial-to-Hire Rate</span>
              <span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>Trusted by teams from Smartfren, Unilever, and more</span>
            </div>
          </div>
        </section>

        {/* ── WHAT YOU GET ── */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">
                What You Get With a Kovil AI {data.roleName}
              </h2>
              <p className="text-[#6B7280] text-lg font-sans max-w-2xl">
                Every engagement includes managed delivery, milestone oversight, and our 2-week risk-free trial.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {data.whatYouGet.map((point, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-2xl border border-[#E5E2D9] bg-white">
                  <CheckCircle2 className="w-5 h-5 text-[#FF4F00] flex-shrink-0 mt-0.5" />
                  <p className="text-[#0A0A0A] font-sans leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                From Brief to Shipping in 14 Days
              </h2>
              <p className="text-[#A09A91] text-lg font-sans max-w-2xl">
                Our process is fast, structured, and risk-free. Learn more at{' '}
                <Link href="/how-it-works" className="text-[#FF4F00] hover:underline">how it works</Link>.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Describe Your Needs',
                  desc: 'Fill a brief intake form. A Delivery Lead contacts you within 24 hours to scope your requirements, tech stack, and timeline.',
                },
                {
                  step: '02',
                  title: 'Meet Your Expert',
                  desc: `We match you with a vetted ${data.roleName} in 24–48 hours. Review their profile, join an intro call, and start your 2-week risk-free trial.`,
                },
                {
                  step: '03',
                  title: 'Watch Results Roll In',
                  desc: 'Your first feature ships within 14 days. An Engagement Manager audits every commit. Scale up or down with zero lock-in.',
                },
              ].map((s) => (
                <div key={s.step} className="relative p-8 rounded-2xl border border-[#1E1E1E] bg-[#111111]">
                  <div className="text-[#FF4F00] font-display text-4xl font-bold mb-4 opacity-60">{s.step}</div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-[#A09A91] font-sans leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SKILLS & STACK ── */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">
              Skills &amp; Technologies
            </h2>
            <p className="text-[#6B7280] text-lg font-sans mb-10 max-w-2xl">
              Our {data.roleNamePlural} are vetted across these tools and platforms.
            </p>
            <div className="flex flex-wrap gap-3">
              {data.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full border border-[#E5E2D9] bg-white text-sm font-medium text-[#0A0A0A] font-sans"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── CASE STUDY CALLOUT ── */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-10">
              Proven Results
            </h2>
            <div className="p-8 md:p-10 rounded-2xl bg-[#0A0A0A] text-white">
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-3 font-sans">
                {data.relatedCaseStudy.industry}
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 max-w-2xl">
                {data.relatedCaseStudy.headline}
              </h3>
              <div className="flex flex-col sm:flex-row gap-8 mb-8">
                <div>
                  <p className="text-[#FF4F00] font-display text-2xl font-bold">{data.relatedCaseStudy.stat1}</p>
                </div>
                <div>
                  <p className="text-[#FF4F00] font-display text-2xl font-bold">{data.relatedCaseStudy.stat2}</p>
                </div>
              </div>
              <Link
                href={data.relatedCaseStudy.url}
                className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#FF4F00] transition-colors font-sans"
              >
                Read the Case Study
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-12">
              Frequently Asked Questions
            </h2>
            <div className="divide-y divide-[#E5E2D9]">
              {data.faqs.map((faq, i) => (
                <div key={i} className="py-8">
                  <h3 className="font-display text-lg font-bold text-[#0A0A0A] mb-3">{faq.question}</h3>
                  <p className="text-[#6B7280] font-sans leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA BANNER ── */}
        <section className="py-24 bg-[#FF4F00]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Start Your 2-Week Risk-Free Trial
            </h2>
            <p className="text-white/80 text-lg font-sans mb-10 max-w-xl mx-auto">
              Fixed price. Milestone-gated. Zero delivery risk. Zero termination fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#FF4F00] font-bold px-8 py-4 rounded-full hover:bg-[#FAF8F4] transition-colors font-sans"
              >
                Book a Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/staff-augmentation"
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
