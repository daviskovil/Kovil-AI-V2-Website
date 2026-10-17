export interface HubOverview {
  heading: string
  paragraphs: string[]
}

export interface HubComparison {
  heading: string
  intro?: string
  columns: string[]
  rows: string[][]
}

export interface HubFaq {
  question: string
  answer: string
}

export interface HubExtraSectionsProps {
  overview?: HubOverview
  comparison?: HubComparison
  faqs?: HubFaq[]
  /** "theme" follows the site tokens; "dark" is for the always-dark Agentforce pages. */
  tone?: 'theme' | 'dark'
}

const TONES = {
  theme: {
    section: 'border-t border-border',
    muted: 'text-muted-foreground',
    tableWrap: 'border-border',
    thead: 'bg-muted/40',
    row: 'border-border',
  },
  dark: {
    section: 'border-t border-white/5',
    muted: 'text-white/60',
    tableWrap: 'border-white/10',
    thead: 'bg-white/5',
    row: 'border-white/10',
  },
}

/** Overview, comparison table and FAQ blocks shared by the hub pages. */
export default function HubExtraSections({ overview, comparison, faqs, tone = 'theme' }: HubExtraSectionsProps) {
  const t = TONES[tone]
  return (
    <>
      {overview && (
        <section className={`${t.section} py-16 px-6`}>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold tracking-tight mb-6">{overview.heading}</h2>
            <div className={`space-y-4 leading-relaxed ${t.muted}`}>
              {overview.paragraphs.map((para) => <p key={para}>{para}</p>)}
            </div>
          </div>
        </section>
      )}

      {comparison && (
        <section className={`${t.section} py-16 px-6`}>
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl font-bold tracking-tight mb-3">{comparison.heading}</h2>
            {comparison.intro && <p className={`mb-8 max-w-3xl ${t.muted}`}>{comparison.intro}</p>}
            <div className={`overflow-x-auto rounded-2xl border ${t.tableWrap}`}>
              <table className="w-full text-sm text-left">
                <thead className={t.thead}>
                  <tr>
                    {comparison.columns.map((col) => (
                      <th key={col} scope="col" className="px-4 py-3 font-semibold whitespace-nowrap">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.rows.map((row) => (
                    <tr key={row[0]} className={`border-t align-top ${t.row}`}>
                      {row.map((cell, ci) => (
                        ci === 0
                          ? <th key={ci} scope="row" className="px-4 py-3 font-semibold min-w-[11rem]">{cell}</th>
                          : <td key={ci} className={`px-4 py-3 min-w-[11rem] ${t.muted}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {faqs && faqs.length > 0 && (
        <section className={`${t.section} py-16 px-6`}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqs.map((f) => ({
                  '@type': 'Question',
                  name: f.question,
                  acceptedAnswer: { '@type': 'Answer', text: f.answer },
                })),
              }),
            }}
          />
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold tracking-tight mb-8">Frequently asked questions</h2>
            <div className="space-y-6">
              {faqs.map((f) => (
                <div key={f.question}>
                  <h3 className="font-display font-semibold text-lg mb-2">{f.question}</h3>
                  <p className={`leading-relaxed ${t.muted}`}>{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
