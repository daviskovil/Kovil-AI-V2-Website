import type { CaseStudy } from '@/src/data/case-studies'

// ── HTML helpers ──────────────────────────────────────────────────────────────

function decodeEntities(str: string): string {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
}

function stripInline(html: string): string {
  // Bold text: keep content, strip tag
  return decodeEntities(
    html
      .replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, '$1')
      .replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, '$1')
      .replace(/<a[^>]*>([\s\S]*?)<\/a>/gi, '$1')
      .replace(/<[^>]+>/g, '')
  ).replace(/\s+/g, ' ').trim()
}

interface Block {
  type: 'h2' | 'h3' | 'p' | 'li' | 'ol-li'
  text: string
}

function parseBody(html: string): Block[] {
  const blocks: Block[] = []
  // Match block-level tags in order
  const blockRe = /<(h2|h3|p|ul|ol)([^>]*)>([\s\S]*?)<\/\1>/gi
  let m: RegExpExecArray | null

  while ((m = blockRe.exec(html)) !== null) {
    const tag = m[1].toLowerCase()
    const inner = m[3]

    if (tag === 'ul' || tag === 'ol') {
      const liRe = /<li[^>]*>([\s\S]*?)<\/li>/gi
      let li: RegExpExecArray | null
      let idx = 1
      while ((li = liRe.exec(inner)) !== null) {
        const text = stripInline(li[1])
        if (text) {
          blocks.push({ type: tag === 'ol' ? 'ol-li' : 'li', text: `${tag === 'ol' ? idx++ + '.' : '•'}  ${text}` })
        }
      }
    } else {
      const text = stripInline(inner)
      if (text) blocks.push({ type: tag as 'h2' | 'h3' | 'p', text })
    }
  }

  return blocks
}

// ── PDF generator ─────────────────────────────────────────────────────────────

export async function generateCaseStudyPDF(cs: CaseStudy): Promise<void> {
  // Dynamic import — keeps jspdf out of the server bundle
  const { jsPDF } = await import('jspdf')

  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })

  const PW = 210   // A4 width
  const PH = 297   // A4 height
  const ML = 18    // left margin
  const MR = 18    // right margin
  const MB = 18    // bottom margin
  const CW = PW - ML - MR  // 174 mm content width

  // Palette (RGB)
  const ORANGE  = [255, 79, 0]     as [number,number,number]
  const NAVY    = [5, 13, 26]      as [number,number,number]
  const DARK    = [30, 41, 59]     as [number,number,number]
  const GRAY    = [100, 116, 139]  as [number,number,number]
  const LGRAY   = [241, 245, 249]  as [number,number,number]
  const MGRAY   = [203, 213, 225]  as [number,number,number]
  const WHITE   = [255, 255, 255]  as [number,number,number]

  let y = 0

  // Helper: add a new page and reset y
  const newPage = () => { doc.addPage(); y = 22 }

  // Helper: ensure at least `need` mm remain on page
  const guard = (need: number) => { if (y + need > PH - MB) newPage() }

  // ── COVER HEADER ───────────────────────────────────────────────────────────
  // Top orange bar
  doc.setFillColor(...ORANGE)
  doc.rect(0, 0, PW, 7, 'F')

  y = 15

  // Logo text
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(15)
  doc.setTextColor(...NAVY)
  doc.text('KOVIL AI', ML, y)

  // Right-aligned "CASE STUDY"
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(7.5)
  doc.setTextColor(...GRAY)
  doc.text('CASE STUDY', PW - MR, y, { align: 'right' })

  y += 5

  // Divider
  doc.setDrawColor(...MGRAY)
  doc.setLineWidth(0.25)
  doc.line(ML, y, PW - MR, y)

  y += 7

  // ── SERVICE + INDUSTRY CHIPS ───────────────────────────────────────────────
  const renderChip = (label: string, x: number, accent = false) => {
    const w = Math.min(doc.getTextWidth(label) + 8, 90)
    doc.setFillColor(...LGRAY)
    doc.roundedRect(x, y - 3.5, w, 6, 1.5, 1.5, 'F')
    doc.setFont('helvetica', accent ? 'bold' : 'normal')
    doc.setFontSize(6.5)
    doc.setTextColor(accent ? ORANGE[0] : GRAY[0], accent ? ORANGE[1] : GRAY[1], accent ? ORANGE[2] : GRAY[2])
    doc.text(label, x + 4, y + 0.8)
    return w + 4
  }

  let cx = ML
  cx += renderChip(cs.service, cx, true)
  cx += renderChip(cs.industry, cx)

  // Published date at right
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(7)
  doc.setTextColor(...GRAY)
  doc.text(cs.published, PW - MR, y, { align: 'right' })

  y += 10

  // ── TITLE ──────────────────────────────────────────────────────────────────
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(17)
  doc.setTextColor(...NAVY)
  const titleLines = doc.splitTextToSize(cs.title, CW)
  doc.text(titleLines, ML, y)
  y += titleLines.length * 7.5 + 2

  // ── HEADLINE ───────────────────────────────────────────────────────────────
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10.5)
  doc.setTextColor(...DARK)
  const headLines = doc.splitTextToSize(cs.headline, CW)
  doc.text(headLines, ML, y)
  y += headLines.length * 5.5 + 4

  // ── META ROW ───────────────────────────────────────────────────────────────
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(7.5)
  doc.setTextColor(...GRAY)
  doc.text([cs.clientType, cs.timeline, cs.teamSize].filter(Boolean).join('  ·  '), ML, y)
  y += 7

  // Divider
  doc.setDrawColor(...MGRAY)
  doc.setLineWidth(0.25)
  doc.line(ML, y, PW - MR, y)
  y += 7

  // ── METRICS ────────────────────────────────────────────────────────────────
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(6.5)
  doc.setTextColor(...ORANGE)
  doc.text('KEY METRICS', ML, y)
  y += 4

  const cols = Math.min(cs.metrics.length, 4)
  const mW = CW / cols

  cs.metrics.forEach((m, i) => {
    const mx = ML + i * mW
    doc.setFillColor(...LGRAY)
    doc.roundedRect(mx, y, mW - 3, 16, 1, 1, 'F')

    // Value
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(13)
    doc.setTextColor(...ORANGE)
    doc.text(m.value, mx + 3, y + 7)

    // Label
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(6.5)
    doc.setTextColor(...DARK)
    const lLines = doc.splitTextToSize(m.label, mW - 7)
    doc.text(lLines, mx + 3, y + 11)

    // Sublabel
    if (m.sublabel) {
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(6)
      doc.setTextColor(...GRAY)
      doc.text(m.sublabel, mx + 3, y + 14.5)
    }
  })

  y += 20

  // Divider
  doc.setDrawColor(...MGRAY)
  doc.line(ML, y, PW - MR, y)
  y += 7

  // ── ENGINEERS ──────────────────────────────────────────────────────────────
  if (cs.engineers && cs.engineers.length > 0) {
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(6.5)
    doc.setTextColor(...ORANGE)
    doc.text('ENGINEERS USED', ML, y)
    y += 4

    let ex = ML
    cs.engineers.forEach(eng => {
      const ew = doc.getTextWidth(eng) + 8
      if (ex + ew > PW - MR) { ex = ML; y += 7 }
      doc.setFillColor(0, 161, 224)   // SF_BLUE tint fill
      doc.roundedRect(ex, y - 3.5, ew, 5.5, 1.5, 1.5, 'F')
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(6.5)
      doc.setTextColor(...WHITE)
      doc.text(eng, ex + 4, y + 0.5)
      ex += ew + 3
    })

    y += 10

    // Divider
    doc.setDrawColor(...MGRAY)
    doc.line(ML, y, PW - MR, y)
    y += 7
  }

  // ── TECH STACK ─────────────────────────────────────────────────────────────
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(6.5)
  doc.setTextColor(...ORANGE)
  doc.text('TECH STACK', ML, y)
  y += 4

  let tx = ML
  cs.techStack.forEach(t => {
    const tw = doc.getTextWidth(t.name) + 8
    if (tx + tw > PW - MR) { tx = ML; y += 7 }
    doc.setFillColor(...NAVY)
    doc.roundedRect(tx, y - 3.5, tw, 5.5, 1.5, 1.5, 'F')
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(6.5)
    doc.setTextColor(...WHITE)
    doc.text(t.name, tx + 4, y + 0.5)
    tx += tw + 3
  })

  y += 10

  // Divider
  doc.setDrawColor(...MGRAY)
  doc.line(ML, y, PW - MR, y)
  y += 8

  // ── BODY CONTENT ───────────────────────────────────────────────────────────
  const blocks = parseBody(cs.body)

  for (const block of blocks) {
    if (block.type === 'h2') {
      guard(18)
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(11)
      doc.setTextColor(...NAVY)
      doc.text(block.text, ML, y)
      y += 4
      // Short orange underline
      doc.setFillColor(...ORANGE)
      doc.rect(ML, y, 22, 0.8, 'F')
      y += 5
    } else if (block.type === 'h3') {
      guard(12)
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(9)
      doc.setTextColor(...DARK)
      doc.text(block.text, ML, y)
      y += 6
    } else if (block.type === 'p') {
      const lines = doc.splitTextToSize(block.text, CW)
      guard(lines.length * 4.8 + 3)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(8.5)
      doc.setTextColor(...DARK)
      doc.text(lines, ML, y)
      y += lines.length * 4.8 + 3
    } else if (block.type === 'li' || block.type === 'ol-li') {
      const lines = doc.splitTextToSize(block.text, CW - 4)
      guard(lines.length * 4.5 + 2)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(8.5)
      doc.setTextColor(...DARK)
      doc.text(lines, ML + 2, y)
      y += lines.length * 4.5 + 2
    }
  }

  // ── QUOTE ──────────────────────────────────────────────────────────────────
  if (cs.quote) {
    guard(35)
    y += 4

    const quoteText = `"${cs.quote}"`
    const qLines = doc.splitTextToSize(quoteText, CW - 10)

    // Quote background
    doc.setFillColor(248, 250, 252)
    doc.roundedRect(ML, y - 4, CW, qLines.length * 5.5 + 14, 2, 2, 'F')

    // Orange left accent
    doc.setFillColor(...ORANGE)
    doc.rect(ML, y - 4, 2.5, qLines.length * 5.5 + 14, 'F')

    doc.setFont('helvetica', 'italic')
    doc.setFontSize(9)
    doc.setTextColor(...DARK)
    doc.text(qLines, ML + 8, y + 2)
    y += qLines.length * 5.5 + 6

    if (cs.quoteAuthor) {
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(7.5)
      doc.setTextColor(...GRAY)
      const attribution = `— ${cs.quoteAuthor}${cs.quoteRole ? `, ${cs.quoteRole}` : ''}`
      doc.text(attribution, ML + 8, y)
      y += 8
    }
  }

  // ── FOOTER (all pages) ─────────────────────────────────────────────────────
  const totalPages = (doc as any).internal.pages.length - 1
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p)
    // Footer bar
    doc.setFillColor(...NAVY)
    doc.rect(0, PH - 11, PW, 11, 'F')
    // Footer text
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(6.5)
    doc.setTextColor(...WHITE)
    doc.text('kovil.ai  ·  info@kovil.ai  ·  New York, USA', ML, PH - 4)
    doc.text(`Page ${p} of ${totalPages}`, PW - MR, PH - 4, { align: 'right' })
    // Orange bottom accent
    doc.setFillColor(...ORANGE)
    doc.rect(0, PH - 1.5, PW, 1.5, 'F')
  }

  doc.save(`${cs.slug}-case-study.pdf`)
}
