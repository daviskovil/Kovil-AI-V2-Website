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
  return decodeEntities(
    html
      .replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, '$1')
      .replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, '$1')
      .replace(/<a[^>]*>([\s\S]*?)<\/a>/gi, '$1')
      .replace(/<[^>]+>/g, '')
  )
    .replace(/—/g, ',')   // em dash → comma
    .replace(/–/g, '-')   // en dash → hyphen
    .replace(/—/g, ',')
    .replace(/–/g, '-')
    .replace(/\s+/g, ' ')
    .trim()
}

interface Block {
  type: 'h2' | 'h3' | 'p' | 'li' | 'ol-li'
  text: string
}

function parseBody(html: string): Block[] {
  const blocks: Block[] = []
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

// ── H2 icon drawing ───────────────────────────────────────────────────────────

function drawH2Icon(
  doc: any,
  x: number,
  y: number,
  heading: string,
  ORANGE: [number, number, number]
) {
  const t = heading.toLowerCase()
  doc.setFillColor(...ORANGE)

  if (/solution|built|what we|deliver|phase|engine|how it works/.test(t)) {
    // Lightbulb: bulb + base
    doc.ellipse(x + 3, y - 1.8, 2.8, 2.8, 'F')
    doc.rect(x + 1.4, y + 1.1, 3.2, 0.9, 'F')
    doc.rect(x + 1.8, y + 2.1, 2.4, 0.8, 'F')
  } else if (/result|outcome|impact|metric|key/.test(t)) {
    // Bar chart: 3 ascending bars
    doc.rect(x, y + 1.5, 2, 2, 'F')
    doc.rect(x + 2.6, y + 0, 2, 3.5, 'F')
    doc.rect(x + 5.2, y - 1.5, 2, 5, 'F')
  } else if (/challenge|problem|pain|difficult/.test(t)) {
    // Alert circle with !
    doc.ellipse(x + 3.5, y - 0.2, 3.5, 3.5, 'F')
    doc.setFillColor(255, 255, 255)
    doc.rect(x + 2.9, y - 2.2, 1.2, 1.8, 'F')
    doc.ellipse(x + 3.5, y + 1.5, 0.7, 0.7, 'F')
  } else if (/approach|method|strategy|how we/.test(t)) {
    // Arrow right: shaft + head
    doc.rect(x, y - 0.9, 4.5, 1.8, 'F')
    doc.lines([[2.5, -2.5], [0, 5]], x + 4.5, y - 2.5, [1, 1], 'F', true)
  } else if (/situation|context|background|brief|introduction|client background|the context/.test(t)) {
    // Info circle with i
    doc.ellipse(x + 3.5, y - 0.2, 3.5, 3.5, 'F')
    doc.setFillColor(255, 255, 255)
    doc.ellipse(x + 3.5, y - 1.8, 0.6, 0.6, 'F')
    doc.rect(x + 2.9, y - 0.4, 1.2, 2, 'F')
  } else if (/technical|architect|infrastructure|stack|ingestion|pipeline/.test(t)) {
    // Cog: outer circle + hole + 4 teeth
    doc.ellipse(x + 3.5, y - 0.2, 3.5, 3.5, 'F')
    doc.rect(x + 2.5, y - 5, 2, 1.5, 'F')
    doc.rect(x + 2.5, y + 4.6, 2, 1.5, 'F')
    doc.rect(x - 1.8, y - 1.2, 1.5, 2, 'F')
    doc.rect(x + 7.3, y - 1.2, 1.5, 2, 'F')
    doc.setFillColor(255, 255, 255)
    doc.ellipse(x + 3.5, y - 0.2, 1.5, 1.5, 'F')
  } else if (/who|user|serve|role|persona/.test(t)) {
    // People: two circles (heads) + arcs (bodies)
    doc.ellipse(x + 2.5, y - 2.5, 1.8, 1.8, 'F')
    doc.ellipse(x + 5.5, y - 2.5, 1.8, 1.8, 'F')
    doc.rect(x + 0.3, y + 0.2, 4.4, 2.5, 'F')
    doc.rect(x + 3.3, y + 0.2, 4.4, 2.5, 'F')
  } else {
    // Default: filled square
    doc.rect(x, y - 3.5, 3.5, 3.5, 'F')
  }
}

// ── PDF generator ─────────────────────────────────────────────────────────────

export async function generateCaseStudyPDF(cs: CaseStudy): Promise<void> {
  const { jsPDF } = await import('jspdf')

  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })

  const PW = 210
  const PH = 297
  const ML = 18
  const MR = 18
  const MB = 20
  const CW = PW - ML - MR  // 174mm

  const ORANGE  = [255, 79, 0]     as [number,number,number]
  const NAVY    = [5, 13, 26]      as [number,number,number]
  const DARK    = [30, 41, 59]     as [number,number,number]
  const GRAY    = [100, 116, 139]  as [number,number,number]
  const LGRAY   = [241, 245, 249]  as [number,number,number]
  const MGRAY   = [203, 213, 225]  as [number,number,number]
  const WHITE   = [255, 255, 255]  as [number,number,number]

  let y = 0

  const newPage = () => { doc.addPage(); y = 22 }
  const guard = (need: number) => { if (y + need > PH - MB) newPage() }

  // ── TOP ORANGE BAR ─────────────────────────────────────────────────────────
  doc.setFillColor(...ORANGE)
  doc.rect(0, 0, PW, 7, 'F')

  y = 16

  // ── LOGO (with text fallback) ──────────────────────────────────────────────
  let logoLoaded = false
  try {
    const logoImg = document.createElement('img')
    logoImg.src = '/kovil-logo-dark.png'
    await new Promise<void>((resolve, reject) => {
      logoImg.onload = () => resolve()
      logoImg.onerror = reject
      setTimeout(reject, 3000)
    })
    const aspect = logoImg.naturalWidth / logoImg.naturalHeight
    const logoH = 9
    const logoW = Math.min(logoH * aspect, 50)
    doc.addImage(logoImg, 'PNG', ML, y - 7, logoW, logoH)
    logoLoaded = true
  } catch {
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(13)
    doc.setTextColor(...NAVY)
    doc.text('KOVIL AI', ML, y - 1)
  }

  // "CASE STUDY" label
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(7)
  doc.setTextColor(...GRAY)
  doc.text('CASE STUDY', PW - MR, y - 1, { align: 'right' })

  y += 3

  // Divider
  doc.setDrawColor(...MGRAY)
  doc.setLineWidth(0.25)
  doc.line(ML, y, PW - MR, y)

  y += 7

  // ── CHIPS: service + industry (NO date) ───────────────────────────────────
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

  y += 10

  // ── TITLE ─────────────────────────────────────────────────────────────────
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(17)
  doc.setTextColor(...NAVY)
  const titleLines = doc.splitTextToSize(cs.title, CW)
  doc.text(titleLines, ML, y)
  y += titleLines.length * 7.5 + 2

  // ── HEADLINE ──────────────────────────────────────────────────────────────
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10.5)
  doc.setTextColor(...DARK)
  const headLines = doc.splitTextToSize(cs.headline, CW)
  doc.text(headLines, ML, y)
  y += headLines.length * 5.5 + 4

  // ── META ROW (no date) ────────────────────────────────────────────────────
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

  // ── METRICS ───────────────────────────────────────────────────────────────
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
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(13)
    doc.setTextColor(...ORANGE)
    doc.text(m.value, mx + 3, y + 7)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(6.5)
    doc.setTextColor(...DARK)
    const lLines = doc.splitTextToSize(m.label, mW - 7)
    doc.text(lLines, mx + 3, y + 11)
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

  // ── ENGINEERS ─────────────────────────────────────────────────────────────
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
      doc.setFillColor(0, 161, 224)
      doc.roundedRect(ex, y - 3.5, ew, 5.5, 1.5, 1.5, 'F')
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(6.5)
      doc.setTextColor(...WHITE)
      doc.text(eng, ex + 4, y + 0.5)
      ex += ew + 3
    })
    y += 10
    doc.setDrawColor(...MGRAY)
    doc.line(ML, y, PW - MR, y)
    y += 7
  }

  // ── TECH STACK ────────────────────────────────────────────────────────────
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

  y += 12

  // ── BODY CONTENT ──────────────────────────────────────────────────────────
  const blocks = parseBody(cs.body)
  const ICON_W = 8    // horizontal space reserved for h2 icon
  const H3_W  = 5    // horizontal space for h3 marker
  let isFirstH2 = true

  for (const block of blocks) {

    if (block.type === 'h2') {
      // Widow guard: enough room for heading + first paragraph
      guard(52)

      // Section divider (skip before very first h2)
      if (!isFirstH2) {
        y += 4
        doc.setDrawColor(...MGRAY)
        doc.setLineWidth(0.3)
        doc.line(ML, y, PW - MR, y)
        y += 10
      } else {
        isFirstH2 = false
      }

      // Icon
      drawH2Icon(doc, ML, y, block.text, ORANGE)

      // Heading text (offset right of icon)
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(11)
      doc.setTextColor(...NAVY)
      const h2Lines = doc.splitTextToSize(block.text, CW - ICON_W)
      doc.text(h2Lines, ML + ICON_W, y)
      y += h2Lines.length * 5.5 + 2

      // Orange underline
      doc.setFillColor(...ORANGE)
      const ulW = Math.min(doc.getTextWidth(block.text), (CW - ICON_W) * 0.65)
      doc.rect(ML + ICON_W, y, ulW, 0.8, 'F')
      y += 6

    } else if (block.type === 'h3') {
      guard(28)
      y += 3  // extra breathing room before h3

      // Small square marker
      doc.setFillColor(...ORANGE)
      doc.rect(ML, y - 2.5, 2.5, 2.5, 'F')

      doc.setFont('helvetica', 'bold')
      doc.setFontSize(9.5)
      doc.setTextColor(...DARK)
      const h3Lines = doc.splitTextToSize(block.text, CW - H3_W)
      doc.text(h3Lines, ML + H3_W, y)
      y += h3Lines.length * 5 + 5

    } else if (block.type === 'p') {
      const lines = doc.splitTextToSize(block.text, CW)
      guard(lines.length * 5 + 5)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(8.5)
      doc.setTextColor(...DARK)
      doc.text(lines, ML, y)
      y += lines.length * 5 + 5   // 5mm per line, 5mm gap between paragraphs

    } else if (block.type === 'li' || block.type === 'ol-li') {
      const lines = doc.splitTextToSize(block.text, CW - 6)
      guard(lines.length * 4.8 + 3)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(8.5)
      doc.setTextColor(...DARK)
      doc.text(lines, ML + 6, y)   // consistent 6mm indent
      y += lines.length * 4.8 + 3
    }
  }

  // ── FOOTER (all pages) ────────────────────────────────────────────────────
  const totalPages = (doc as any).internal.pages.length - 1
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p)
    doc.setFillColor(...NAVY)
    doc.rect(0, PH - 11, PW, 11, 'F')
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(6.5)
    doc.setTextColor(...WHITE)
    doc.text('kovil.ai  ·  info@kovil.ai  ·  New York, USA', ML, PH - 4)
    doc.text(`Page ${p} of ${totalPages}`, PW - MR, PH - 4, { align: 'right' })
    doc.setFillColor(...ORANGE)
    doc.rect(0, PH - 1.5, PW, 1.5, 'F')
  }

  doc.save(`${cs.slug}-case-study.pdf`)
}
