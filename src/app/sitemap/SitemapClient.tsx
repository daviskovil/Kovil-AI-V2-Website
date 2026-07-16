'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Search, X, ChevronUp } from 'lucide-react'
import { STATIC_SECTIONS, countLinks, type SitemapLink, type SitemapSection } from '@/src/data/site-directory'

interface Props {
  blogLinks: SitemapLink[]
  caseStudyLinks: SitemapLink[]
  agentforceCaseStudyLinks: SitemapLink[]
}

export default function SitemapClient({ blogLinks, caseStudyLinks, agentforceCaseStudyLinks }: Props) {
  const [query, setQuery] = useState('')
  const [activeId, setActiveId] = useState<string>('')
  const [showBackToTop, setShowBackToTop] = useState(false)
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map())

  const allSections: SitemapSection[] = [
    ...STATIC_SECTIONS,
    {
      id: 'case-studies',
      title: 'Case Studies',
      color: '#22c55e',
      links: [
        { label: 'All Case Studies', href: '/case-studies' },
        ...caseStudyLinks,
      ],
    },
    {
      id: 'agentforce-case-studies',
      title: 'Agentforce Case Studies',
      color: '#0ea5e9',
      links: [
        { label: 'All Agentforce Case Studies', href: '/agentforce/case-studies' },
        ...agentforceCaseStudyLinks,
      ],
    },
    {
      id: 'blog',
      title: 'Blog',
      color: '#FF4F00',
      links: [
        { label: 'All Blog Posts', href: '/blog' },
        ...blogLinks,
      ],
    },
  ]

  const totalLinks = allSections.reduce((acc, s) => acc + countLinks(s), 0)

  const filteredSections: SitemapSection[] = (() => {
    if (query.trim().length < 2) return allSections
    const q = query.toLowerCase()
    const result: SitemapSection[] = []
    for (const section of allSections) {
      if (section.links) {
        const links = section.links.filter(
          l => l.label.toLowerCase().includes(q) || l.href.toLowerCase().includes(q)
        )
        if (links.length > 0) result.push({ ...section, links })
      } else if (section.groups) {
        const groups = section.groups
          .map(g => ({
            ...g,
            links: g.links.filter(
              l => l.label.toLowerCase().includes(q) || l.href.toLowerCase().includes(q)
            ),
          }))
          .filter(g => g.links.length > 0)
        if (groups.length > 0) result.push({ ...section, groups })
      }
    }
    return result
  })()

  const totalFiltered = filteredSections.reduce((acc, s) => acc + countLinks(s), 0)
  const isSearching = query.trim().length >= 2

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-15% 0px -65% 0px', threshold: 0 }
    )
    sectionRefs.current.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [filteredSections])

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A0A0A] pt-28 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-[#A09A91] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6 font-sans">
            {totalLinks} pages
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Site Map
          </h1>
          <p className="text-[#A09A91] text-lg font-sans mb-10">
            Every page on kovil.ai — organized by category for easy navigation
          </p>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
            <input
              type="text"
              placeholder="Search any page, service, or topic..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full pl-14 pr-14 py-4 bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl text-white placeholder-[#6B7280] font-sans text-base focus:outline-none focus:border-[#FF4F00]/60 transition-colors"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="absolute right-5 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          {isSearching && (
            <p className="text-[#6B7280] text-sm font-sans mt-4">
              {totalFiltered === 0
                ? `No results for "${query}"`
                : `${totalFiltered} result${totalFiltered !== 1 ? 's' : ''} for "${query}"`}
            </p>
          )}
        </div>
      </section>

      {/* Body */}
      <div className="bg-[#FAF8F4] min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:flex lg:gap-10">

          {/* Sidebar */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#A09A91] mb-3 font-sans px-3">
                Sections
              </p>
              <nav className="space-y-0.5">
                {allSections.map(section => {
                  const count = countLinks(section)
                  const isActive = activeId === section.id && !isSearching
                  const inResults = filteredSections.some(s => s.id === section.id)
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={() => setActiveId(section.id)}
                      className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm font-sans transition-all ${
                        isActive
                          ? 'bg-white text-[#0A0A0A] font-semibold shadow-sm'
                          : isSearching && !inResults
                          ? 'text-[#C4BFB8] opacity-40'
                          : 'text-[#6B7280] hover:text-[#0A0A0A] hover:bg-white/70'
                      }`}
                    >
                      <span className="flex items-center gap-2 min-w-0">
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0 transition-colors"
                          style={{ backgroundColor: isActive ? section.color : (isSearching && !inResults ? '#E5E2D9' : '#D1CEC9') }}
                        />
                        <span className="truncate">{section.title}</span>
                      </span>
                      <span className={`text-xs ml-2 flex-shrink-0 tabular-nums ${isActive ? 'text-[#6B7280]' : 'text-[#C4BFB8]'}`}>
                        {count}
                      </span>
                    </a>
                  )
                })}
              </nav>
              <div className="mt-6 pt-5 border-t border-[#E5E2D9] px-3">
                <p className="text-xs text-[#A09A91] font-sans leading-relaxed">
                  <span className="font-bold text-[#0A0A0A]">{totalLinks}</span> total pages
                </p>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0 space-y-14">
            {filteredSections.length === 0 ? (
              <div className="text-center py-24">
                <p className="text-[#6B7280] font-sans text-lg mb-2">No pages found for &ldquo;{query}&rdquo;</p>
                <p className="text-[#A09A91] font-sans text-sm">Try a different keyword or browse the sections</p>
              </div>
            ) : (
              filteredSections.map(section => (
                <SectionBlock
                  key={section.id}
                  section={section}
                  query={isSearching ? query : ''}
                  onMount={(id, el) => {
                    if (el) sectionRefs.current.set(id, el)
                    else sectionRefs.current.delete(id)
                  }}
                />
              ))
            )}
          </main>
        </div>
      </div>

      {/* Back to top */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 bg-[#0A0A0A] text-white p-3 rounded-full shadow-xl hover:bg-[#FF4F00] transition-colors z-50"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </>
  )
}

function SectionBlock({
  section,
  query,
  onMount,
}: {
  section: SitemapSection
  query: string
  onMount: (id: string, el: HTMLElement | null) => void
}) {
  const count = countLinks(section)
  return (
    <section
      id={section.id}
      ref={el => onMount(section.id, el)}
      className="scroll-mt-28"
    >
      {/* Section header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-1 h-7 rounded-full flex-shrink-0"
          style={{ backgroundColor: section.color }}
        />
        <h2 className="font-display text-2xl font-bold text-[#0A0A0A]">{section.title}</h2>
        <span
          className="ml-1 text-xs font-mono font-semibold px-2.5 py-1 rounded-full border"
          style={{ color: section.color, borderColor: section.color + '40', backgroundColor: section.color + '10' }}
        >
          {count}
        </span>
      </div>

      {/* Flat links */}
      {section.links && (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2">
          {section.links.map(link => (
            <LinkCard key={link.href} link={link} query={query} color={section.color} />
          ))}
        </div>
      )}

      {/* Grouped links */}
      {section.groups && (
        <div className="space-y-8">
          {section.groups.map(group => (
            <div key={group.title}>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#A09A91] mb-3 font-sans">
                {group.title}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2">
                {group.links.map(link => (
                  <LinkCard key={link.href} link={link} query={query} color={section.color} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

function LinkCard({ link, query, color }: { link: SitemapLink; query: string; color: string }) {
  return (
    <Link
      href={link.href}
      className="group flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white border border-[#E5E2D9] hover:border-current hover:shadow-sm transition-all text-sm font-sans text-[#0A0A0A]"
      style={{ '--hover-color': color } as React.CSSProperties}
    >
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ backgroundColor: color }}
      />
      <span className="flex-1 truncate">
        <HighlightedText text={link.label} query={query} color={color} />
      </span>
      <span className="text-[#C4BFB8] group-hover:text-[#6B7280] transition-colors flex-shrink-0 text-xs">→</span>
    </Link>
  )
}

function HighlightedText({ text, query, color }: { text: string; query: string; color: string }) {
  if (!query) return <>{text}</>
  const idx = text.toLowerCase().indexOf(query.toLowerCase())
  if (idx === -1) return <>{text}</>
  return (
    <>
      {text.slice(0, idx)}
      <mark
        className="rounded-sm px-0.5 not-italic"
        style={{ backgroundColor: color + '30', color }}
      >
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  )
}
