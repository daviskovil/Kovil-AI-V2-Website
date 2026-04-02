import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { caseStudies, getCaseStudy } from '@/src/data/case-studies'
import CaseStudyPage from '@/src/pages/CaseStudyPage'

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const cs = getCaseStudy(slug)
  if (!cs) return {}
  return {
    title: cs.headline,
    description: cs.excerpt,
    alternates: { canonical: `https://kovil.ai/case-studies/${cs.slug}` },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cs = getCaseStudy(slug)
  if (!cs) notFound()
  return <div className="pt-20"><CaseStudyPage /></div>
}
