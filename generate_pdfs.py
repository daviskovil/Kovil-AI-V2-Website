"""
Generate two professional Agentforce PDFs for Kovil AI.
Uses only reportlab built-in fonts (Helvetica) - no external fonts needed.
"""

import os
import sys
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm, cm
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT, TA_JUSTIFY
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak,
    Table, TableStyle, HRFlowable, KeepTogether
)
from reportlab.platypus.flowables import Flowable
from reportlab.pdfgen import canvas as rl_canvas

# ── Brand colours ──────────────────────────────────────────────────────────────
ORANGE       = colors.Color(255/255, 79/255,  0/255)
SF_BLUE      = colors.Color(  0/255,161/255,224/255)
DARK         = colors.Color( 17/255, 17/255, 17/255)
MUTED        = colors.Color(107/255,114/255,128/255)
LIGHT_BG     = colors.Color(249/255,249/255,249/255)
WHITE        = colors.white
LIGHT_ORANGE = colors.Color(255/255,240/255,230/255)
LIGHT_BLUE   = colors.Color(230/255,246/255,255/255)
LIGHT_GREY   = colors.Color(245/255,245/255,245/255)
MID_GREY     = colors.Color(220/255,220/255,220/255)

PAGE_W, PAGE_H = A4  # 595 x 842 pt

# ── Paragraph styles ───────────────────────────────────────────────────────────
def make_styles():
    s = {}
    def ps(name, **kw):
        s[name] = ParagraphStyle(name, **kw)

    ps('cover_title',   fontName='Helvetica-Bold', fontSize=38, leading=46,
       textColor=WHITE, alignment=TA_LEFT, spaceAfter=12)
    ps('cover_sub',     fontName='Helvetica',      fontSize=16, leading=22,
       textColor=colors.Color(0.8,0.8,0.8), alignment=TA_LEFT, spaceAfter=8)
    ps('cover_by',      fontName='Helvetica-Bold', fontSize=13, leading=18,
       textColor=ORANGE, alignment=TA_LEFT, spaceAfter=4)
    ps('cover_url',     fontName='Helvetica',      fontSize=12, leading=16,
       textColor=colors.Color(0.7,0.7,0.7), alignment=TA_LEFT)

    ps('h1',  fontName='Helvetica-Bold', fontSize=20, leading=26,
       textColor=DARK, spaceBefore=18, spaceAfter=10, alignment=TA_LEFT)
    ps('h2',  fontName='Helvetica-Bold', fontSize=14, leading=20,
       textColor=DARK, spaceBefore=14, spaceAfter=6, alignment=TA_LEFT)
    ps('h3',  fontName='Helvetica-Bold', fontSize=12, leading=17,
       textColor=SF_BLUE, spaceBefore=10, spaceAfter=4)
    ps('body',fontName='Helvetica',      fontSize=11, leading=17,
       textColor=DARK, spaceAfter=8, alignment=TA_JUSTIFY)
    ps('bullet', fontName='Helvetica',   fontSize=11, leading=16,
       textColor=DARK, leftIndent=16, bulletIndent=0, spaceAfter=4,
       bulletFontName='Helvetica-Bold', bulletFontSize=11)
    ps('callout', fontName='Helvetica',  fontSize=11, leading=16,
       textColor=DARK, spaceAfter=6, alignment=TA_LEFT)
    ps('callout_head', fontName='Helvetica-Bold', fontSize=11, leading=16,
       textColor=DARK, spaceAfter=2)
    ps('caption', fontName='Helvetica-Oblique', fontSize=9, leading=13,
       textColor=MUTED, spaceAfter=6, alignment=TA_CENTER)
    ps('toc_title', fontName='Helvetica-Bold', fontSize=16, leading=22,
       textColor=DARK, spaceAfter=14)
    ps('toc_h1',  fontName='Helvetica-Bold', fontSize=12, leading=18,
       textColor=DARK, spaceAfter=2, leftIndent=0)
    ps('toc_h2',  fontName='Helvetica', fontSize=11, leading=16,
       textColor=MUTED, spaceAfter=2, leftIndent=16)
    ps('table_head', fontName='Helvetica-Bold', fontSize=10, leading=14,
       textColor=WHITE, alignment=TA_LEFT)
    ps('table_body', fontName='Helvetica', fontSize=10, leading=14,
       textColor=DARK, alignment=TA_LEFT)
    ps('score_label', fontName='Helvetica-Bold', fontSize=11, leading=16,
       textColor=DARK, spaceAfter=2)
    ps('footer_text', fontName='Helvetica', fontSize=8, leading=10,
       textColor=MUTED, alignment=TA_CENTER)
    return s

STYLES = make_styles()

# ── Custom flowables ───────────────────────────────────────────────────────────
class OrangeAccentRule(Flowable):
    """A left-border accent bar (used before chapter headings on body pages)."""
    def __init__(self, width=PAGE_W - 80, height=3):
        super().__init__()
        self.width  = width
        self.height = height

    def draw(self):
        self.canv.setFillColor(ORANGE)
        self.canv.rect(0, 0, 4, self.height + 14, fill=1, stroke=0)

    def wrap(self, availW, availH):
        return (self.width, self.height + 14)


class CalloutBox(Flowable):
    """Coloured callout box with optional heading."""
    def __init__(self, heading, body_text, bg=None, border=None, width=None):
        super().__init__()
        self.heading   = heading
        self.body_text = body_text
        self.bg        = bg or LIGHT_ORANGE
        self.border    = border or ORANGE
        self._width    = width or (PAGE_W - 80)

    def wrap(self, availW, availH):
        return (self._width, self._calc_height())

    def _calc_height(self):
        line_h   = 16
        head_h   = line_h + 4 if self.heading else 0
        # rough estimate: ~80 chars per line
        lines    = max(1, len(self.body_text) // 80 + 1)
        body_h   = lines * line_h
        return head_h + body_h + 24   # padding

    def draw(self):
        h = self._calc_height()
        c = self.canv
        # background
        c.setFillColor(self.bg)
        c.roundRect(0, 0, self._width, h, 6, fill=1, stroke=0)
        # left border
        c.setFillColor(self.border)
        c.rect(0, 0, 4, h, fill=1, stroke=0)
        # heading
        y = h - 16
        if self.heading:
            c.setFont('Helvetica-Bold', 11)
            c.setFillColor(DARK)
            c.drawString(14, y, self.heading)
            y -= 18
        # body
        c.setFont('Helvetica', 10)
        c.setFillColor(DARK)
        words  = self.body_text.split()
        line   = ''
        x_pos  = 14
        max_w  = self._width - 28
        for word in words:
            test = line + (' ' if line else '') + word
            if c.stringWidth(test, 'Helvetica', 10) > max_w:
                c.drawString(x_pos, y, line)
                y   -= 14
                line = word
            else:
                line = test
        if line:
            c.drawString(x_pos, y, line)


# ── Page templates ─────────────────────────────────────────────────────────────
class CoverPageCanvas:
    """Callable passed to build() for the cover page."""
    def __init__(self, doc_title, doc_subtitle, doc_url):
        self.doc_title    = doc_title
        self.doc_subtitle = doc_subtitle
        self.doc_url      = doc_url

    def __call__(self, canv, doc):
        page_num = doc.page
        if page_num == 1:
            self._draw_cover(canv, doc)
        else:
            self._draw_body(canv, doc, page_num)

    def _draw_cover(self, canv, doc):
        w, h = PAGE_W, PAGE_H
        # Full dark background
        canv.setFillColor(DARK)
        canv.rect(0, 0, w, h, fill=1, stroke=0)
        # Orange accent strip at top
        canv.setFillColor(ORANGE)
        canv.rect(0, h - 6, w, 6, fill=1, stroke=0)
        # Blue accent strip
        canv.setFillColor(SF_BLUE)
        canv.rect(0, h - 10, w, 4, fill=1, stroke=0)
        # Decorative large circle (background element)
        canv.setFillColor(colors.Color(1,1,1,0.03))
        canv.circle(w + 60, h * 0.3, 280, fill=1, stroke=0)
        # Orange left sidebar bar
        canv.setFillColor(ORANGE)
        canv.rect(48, h * 0.18, 4, h * 0.62, fill=1, stroke=0)
        # Title
        canv.setFont('Helvetica-Bold', 36)
        canv.setFillColor(WHITE)
        # Word-wrap title
        title_words = self.doc_title.upper().split()
        # Draw each line manually
        lines = []
        line  = ''
        for word in title_words:
            test = line + (' ' if line else '') + word
            if canv.stringWidth(test, 'Helvetica-Bold', 36) > w - 120:
                lines.append(line)
                line = word
            else:
                line = test
        if line:
            lines.append(line)
        y = h * 0.72
        for ln in lines:
            canv.drawString(60, y, ln)
            y -= 46
        # Subtitle
        canv.setFont('Helvetica', 16)
        canv.setFillColor(colors.Color(0.75, 0.75, 0.75))
        # wrap subtitle
        sub_words = self.doc_subtitle.split()
        sub_lines = []
        sl = ''
        for w_ in sub_words:
            test = sl + (' ' if sl else '') + w_
            if canv.stringWidth(test, 'Helvetica', 16) > PAGE_W - 120:
                sub_lines.append(sl)
                sl = w_
            else:
                sl = test
        if sl:
            sub_lines.append(sl)
        y -= 10
        for sl_ in sub_lines:
            canv.drawString(60, y, sl_)
            y -= 22
        # "by Kovil AI"
        canv.setFont('Helvetica-Bold', 13)
        canv.setFillColor(ORANGE)
        canv.drawString(60, h * 0.25, 'by Kovil AI')
        # URL
        canv.setFont('Helvetica', 12)
        canv.setFillColor(colors.Color(0.6, 0.6, 0.6))
        canv.drawString(60, h * 0.21, self.doc_url)
        # Bottom copyright
        canv.setFont('Helvetica', 8)
        canv.setFillColor(colors.Color(0.4, 0.4, 0.4))
        canv.drawCentredString(w / 2, 22, f'Copyright 2025 Kovil AI. All rights reserved. | {self.doc_url}')

    def _draw_body(self, canv, doc, page_num):
        w, h = PAGE_W, PAGE_H
        # Top orange accent bar
        canv.setFillColor(ORANGE)
        canv.rect(0, h - 4, w, 4, fill=1, stroke=0)
        # Header background
        canv.setFillColor(LIGHT_BG)
        canv.rect(0, h - 34, w, 30, fill=1, stroke=0)
        # Header text (left: doc title, right: kovil.ai)
        canv.setFont('Helvetica-Bold', 8)
        canv.setFillColor(DARK)
        canv.drawString(40, h - 24, self.doc_title)
        canv.setFont('Helvetica', 8)
        canv.setFillColor(ORANGE)
        canv.drawRightString(w - 40, h - 24, 'kovil.ai')
        # Footer line
        canv.setStrokeColor(MID_GREY)
        canv.setLineWidth(0.5)
        canv.line(40, 32, w - 40, 32)
        # Footer text
        canv.setFont('Helvetica', 8)
        canv.setFillColor(MUTED)
        canv.drawString(40, 20, 'kovil.ai/agentforce  |  Confidential & Proprietary')
        canv.drawRightString(w - 40, 20, f'Page {page_num}')


# ── Helper builders ────────────────────────────────────────────────────────────
def bullet(text, styles):
    return Paragraph(f'<bullet>&bull;</bullet> {text}', styles['bullet'])

def h1(text, styles):
    return [OrangeAccentRule(), Paragraph(text, styles['h1'])]

def h2(text, styles):
    return Paragraph(text, styles['h2'])

def h3(text, styles):
    return Paragraph(text, styles['h3'])

def body(text, styles):
    return Paragraph(text, styles['body'])

def callout(heading, text, bg=None, border=None):
    return CalloutBox(heading, text, bg=bg, border=border)

def spacer(h=8):
    return Spacer(1, h)

def page_break():
    return PageBreak()

def make_table(headers, rows, col_widths=None):
    """Build a styled table."""
    data   = [[Paragraph(h, STYLES['table_head']) for h in headers]]
    for row in rows:
        data.append([Paragraph(str(c), STYLES['table_body']) for c in row])
    tw = sum(col_widths) if col_widths else (PAGE_W - 80)
    t  = Table(data, colWidths=col_widths, repeatRows=1)
    t.setStyle(TableStyle([
        ('BACKGROUND',  (0,0), (-1,0),  DARK),
        ('TEXTCOLOR',   (0,0), (-1,0),  WHITE),
        ('ROWBACKGROUNDS',(0,1),(-1,-1),[WHITE, LIGHT_BG]),
        ('GRID',        (0,0), (-1,-1), 0.4, MID_GREY),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING',(0,0), (-1,-1), 8),
        ('TOPPADDING',  (0,0), (-1,-1), 6),
        ('BOTTOMPADDING',(0,0),(-1,-1), 6),
        ('VALIGN',      (0,0), (-1,-1), 'TOP'),
    ]))
    return t

def checklist_table(items):
    """Build a checkbox-style checklist table."""
    data = [[Paragraph('', STYLES['table_head']),
             Paragraph('Item', STYLES['table_head']),
             Paragraph('Status', STYLES['table_head'])]]
    for item in items:
        data.append([
            Paragraph('[ ]', STYLES['table_body']),
            Paragraph(item, STYLES['table_body']),
            Paragraph('____', STYLES['table_body']),
        ])
    t = Table(data, colWidths=[24, 340, 80], repeatRows=1)
    t.setStyle(TableStyle([
        ('BACKGROUND',  (0,0), (-1,0),  DARK),
        ('TEXTCOLOR',   (0,0), (-1,0),  WHITE),
        ('ROWBACKGROUNDS',(0,1),(-1,-1),[WHITE, LIGHT_BG]),
        ('GRID',        (0,0), (-1,-1), 0.4, MID_GREY),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING',(0,0), (-1,-1), 6),
        ('TOPPADDING',  (0,0), (-1,-1), 5),
        ('BOTTOMPADDING',(0,0),(-1,-1), 5),
        ('VALIGN',      (0,0), (-1,-1), 'TOP'),
    ]))
    return t

def toc_entry(num, title, page, level=1):
    style = STYLES['toc_h1'] if level == 1 else STYLES['toc_h2']
    prefix = '' if level == 1 else '    '
    return Paragraph(f'{prefix}{num}. {title}', style)


# ══════════════════════════════════════════════════════════════════════════════
#  PDF 1: The Agentforce Readiness Guide
# ══════════════════════════════════════════════════════════════════════════════
def build_readiness_guide(output_path):
    S = STYLES
    story = []

    # ── Cover (page 1 handled by canvas template) ──────────────────────────
    story.append(page_break())   # forces page 2 to start body layout

    # ── Table of Contents ──────────────────────────────────────────────────
    story.append(Paragraph('Table of Contents', S['toc_title']))
    toc_items = [
        (1, 'Introduction: The Agentforce Readiness Gap',      3),
        (2, 'Pillar 1: Data Quality & Availability',           5),
        (3, 'Pillar 2: Org Architecture',                      7),
        (4, 'Pillar 3: Use Case Prioritisation',               9),
        (5, 'Pillar 4: Team Enablement',                      12),
        (6, 'Pillar 5: Governance & Compliance',              15),
        (7, 'The Readiness Scorecard',                        18),
        (8, 'Your Next Steps',                                22),
    ]
    for num, title, pg in toc_items:
        story.append(toc_entry(num, title, pg))
        story.append(spacer(4))
    story.append(page_break())

    # ── Chapter 1: Introduction ────────────────────────────────────────────
    for el in h1('Chapter 1: Introduction — The Agentforce Readiness Gap', S):
        story.append(el)
    story.append(body(
        'Agentforce represents the most significant shift in enterprise software since the introduction of '
        'cloud CRM. Yet despite widespread licence adoption, the vast majority of Salesforce organisations '
        'have zero AI agents running in production. The gap between acquiring access to Agentforce and '
        'successfully deploying it is wide — and it is entirely preventable.', S))
    story.append(body(
        'At Kovil AI, we have conducted readiness assessments across dozens of organisations in Southeast '
        'Asia, Australia, and the Middle East. Our findings consistently reveal five root-cause gaps that '
        'prevent organisations from crossing the line from pilot to production.', S))
    story.append(callout(
        'Key Insight',
        '73% of organisations with Agentforce licences have not deployed a single production agent. '
        'The bottleneck is not technology — it is readiness across data, architecture, process, '
        'people, and governance.',
        bg=LIGHT_ORANGE, border=ORANGE))
    story.append(spacer(10))
    story.append(h2('The Five Readiness Gaps', S))
    gaps = [
        ('Gap 1: Data Quality', 'Agents require clean, structured, accessible data. Most CRM instances contain '
         'incomplete records, duplicate accounts, and disconnected data silos that cause agents to produce '
         'inaccurate or hallucinated responses.'),
        ('Gap 2: Org Architecture', 'Without the right permission sets, named credentials, API configurations, '
         'and sandbox strategy, agents cannot access the systems they need to take action.'),
        ('Gap 3: Use Case Selection', 'Organisations often start with the wrong use cases — choosing ones that '
         'are either too complex technically or deliver too little business value to justify the effort.'),
        ('Gap 4: Team Capability', 'Agentforce requires a blend of Salesforce administration, prompt '
         'engineering, AI quality assurance, and change management skills that few teams currently possess.'),
        ('Gap 5: Governance', 'Regulatory obligations, PII handling requirements, and internal approval '
         'workflows must be designed into the agent — not bolted on afterwards.'),
    ]
    for title, desc in gaps:
        story.append(h3(title, S))
        story.append(body(desc, S))
    story.append(body(
        'This guide is structured around these five pillars. Each chapter provides a practical assessment '
        'framework, checklist, and concrete guidance. The final chapter consolidates everything into a '
        '25-question scorecard so you can benchmark your organisation\'s readiness in under 30 minutes.', S))
    story.append(page_break())

    # ── Chapter 2: Data Quality ───────────────────────────────────────────
    for el in h1('Chapter 2: Pillar 1 — Data Quality & Availability', S):
        story.append(el)
    story.append(body(
        'An Agentforce agent is only as good as the data it can access. The Einstein Trust Layer ensures '
        'that data never leaves Salesforce\'s secure boundary, but if the underlying data is incomplete, '
        'stale, or siloed, the agent will confidently produce wrong answers.', S))
    story.append(h2('What Data Does an Agent Need?', S))
    story.append(body(
        'The answer depends on the use case, but all agents share a common set of data requirements. '
        'Service agents need complete case history, product entitlements, and SLA records. Sales agents '
        'need accurate account hierarchies, opportunity stages, and contact relationships. Field service '
        'agents need asset records, maintenance schedules, and territory assignments.', S))
    story.append(callout(
        'Data Quality Principle',
        'Garbage in, garbage out applies to AI more severely than any previous technology. An agent '
        'that confidently delivers wrong information damages customer trust far more than no agent at all.',
        bg=LIGHT_BLUE, border=SF_BLUE))
    story.append(spacer(10))
    story.append(h2('Measuring Your Data Readiness Baseline', S))
    story.append(body(
        'Before remediating data quality issues, you first need to measure them. Salesforce provides '
        'several native tools for this purpose, and the assessment process typically reveals that data '
        'quality problems are more concentrated than organisations expect — often 20% of records '
        'account for 80% of the quality issues.', S))
    story.append(body(
        'Run the following SOQL queries in Salesforce Workbench or Developer Console to establish '
        'your baseline metrics. Document these numbers before remediation begins so you can track '
        'progress and demonstrate improvement to stakeholders.', S))
    baseline_table = make_table(
        ['Metric', 'SOQL / Method', 'Target Threshold', 'Action if Below Target'],
        [
            ['Account field completion', 'COUNT fields with null values per record', '>80% complete', 'Data enrichment sprint'],
            ['Duplicate account rate', 'Duplicate Rules report in Setup', '<5% duplicates', 'Merge campaign + Prevention Rule'],
            ['Contact-Account linkage', 'Contacts WHERE AccountId = null', '<2% orphan contacts', 'Manual review and link'],
            ['Opportunity staleness', 'Opps WHERE LastModifiedDate < 90 days', '0% stale active opps', 'Pipeline hygiene campaign'],
            ['Case resolution rate', 'Closed Cases WHERE Resolution = null', '<5% missing resolution', 'Auto-close rule update'],
            ['Email validity', 'Contacts WHERE Email invalid format', '<1% invalid emails', 'Email validation flow'],
        ],
        col_widths=[110, 135, 90, 130]
    )
    story.append(baseline_table)
    story.append(spacer(10))
    story.append(h2('Data Enrichment Strategies', S))
    story.append(body(
        'Where internal data is incomplete, external enrichment can fill the gaps. Salesforce has '
        'native integrations with data enrichment providers including Dun & Bradstreet, ZoomInfo, '
        'and Clearbit. However, enrichment is not a substitute for data governance — enriched data '
        'must be validated against business rules before being exposed to agents.', S))
    enrichment_items = [
        'Firmographic enrichment (Industry, Employee Count, Revenue) for Account records using D&B or ZoomInfo',
        'Email and phone validation for Contact records using a real-time verification service',
        'Address standardisation and geocoding for shipping and billing address fields',
        'Technographic data (which tech stack a prospect uses) for sales agent personalisation',
        'Social profile linking for Contact records where relevant to the agent use case',
    ]
    for item in enrichment_items:
        story.append(bullet(item, S))
    story.append(spacer(8))
    story.append(h2('Real-Time Data Access Patterns', S))
    story.append(body(
        'Some agent use cases require data that changes rapidly — stock levels, booking availability, '
        'live ticket queues. For these cases, static CRM data is insufficient and real-time data '
        'access patterns are required. Salesforce Data Cloud\'s real-time event streaming and '
        'Calculated Insights provide the mechanism for surfacing live operational data to agents '
        'without duplicating it into Salesforce CRM.', S))
    story.append(body(
        'The key architectural decision for real-time data is whether to pull data at query time '
        '(via an Apex Action or External Service callout in the agent flow) or to push data into '
        'Data Cloud in near-real-time (via Salesforce Streaming API, Platform Events, or a Kafka '
        'connector). Pull patterns are simpler but add latency; push patterns are lower latency '
        'but require more infrastructure.', S))
    story.append(h2('Clean CRM Data: The Baseline Requirements', S))
    reqs = [
        ('Account completeness', 'All accounts must have: Name, Industry, BillingCountry, Type, and OwnerId populated.'),
        ('Contact accuracy', 'Contact records must link to accounts with valid email and phone where applicable.'),
        ('Duplicate management', 'Merge or suppress duplicate records — agents cannot resolve ambiguity.'),
        ('Opportunity hygiene', 'Stage, CloseDate, and Amount must be current; stale pipe corrupts forecasts.'),
        ('Case history', 'Closed cases must have Resolution populated — agents use this for RAG retrieval.'),
    ]
    for req_title, req_desc in reqs:
        story.append(h3(req_title, S))
        story.append(body(req_desc, S))
    story.append(h2('Unified Customer Profiles via Data Cloud', S))
    story.append(body(
        'Agentforce performs best when it can access a unified customer profile that aggregates data '
        'from CRM, marketing automation, commerce, and external systems. Salesforce Data Cloud provides '
        'this unified profile layer through identity resolution and real-time data streams.', S))
    story.append(body(
        'Organisations without Data Cloud can still deploy agents, but they will operate with a narrower '
        'data window and may require additional custom actions to retrieve cross-system context.', S))
    story.append(h2('Data Quality Self-Assessment Checklist', S))
    checklist_items = [
        'Account records have >80% field completion rate for key fields',
        'Duplicate accounts reduced to <5% of total account volume',
        'Contact-to-Account relationships are accurate and complete',
        'All active Opportunities have current Stage, Amount, and CloseDate',
        'Closed Cases have Resolution and Root Cause populated',
        'Data Cloud or equivalent unified profile exists for customer 360',
        'Real-time data streams are available for time-sensitive use cases',
        'Data dictionary / field glossary is maintained and current',
        'PII fields are identified and tagged in the data model',
        'Data quality dashboard is in place and monitored weekly',
    ]
    story.append(checklist_table(checklist_items))
    story.append(page_break())

    # ── Chapter 3: Org Architecture ───────────────────────────────────────
    for el in h1('Chapter 3: Pillar 2 — Org Architecture', S):
        story.append(el)
    story.append(body(
        'A technically sound Salesforce org is the foundation on which Agentforce runs. Without the right '
        'architecture in place, agents will fail silently — unable to access external systems, hitting API '
        'limits mid-conversation, or operating without appropriate security controls.', S))
    story.append(h2('Permission Sets & Security Model', S))
    story.append(body(
        'Agentforce agents run in the context of a dedicated Integration or Bot User. This user must have '
        'precisely scoped permissions — sufficient to perform its assigned actions, but no broader. '
        'Over-permissioned agent users represent a security risk; under-permissioned users cause runtime '
        'failures.', S))
    story.append(body(
        'Best practice is to create a dedicated Permission Set for each agent type, containing only the '
        'object-level and field-level permissions required for its declared actions. Assign this Permission '
        'Set to the agent\'s Integration User exclusively.', S))
    story.append(callout(
        'Architecture Rule',
        'Never run Agentforce under a System Administrator profile. Create a purpose-built Integration '
        'User with the minimum permissions required. Audit these permissions before go-live.',
        bg=LIGHT_ORANGE, border=ORANGE))
    story.append(spacer(8))
    story.append(h2('Permission Set Architecture: Step-by-Step', S))
    story.append(body(
        'The correct sequence for configuring the Agentforce security model is: first, identify all '
        'the objects and fields your agent actions will read or write. Second, create a Permission Set '
        'that grants exactly those object permissions and field-level access. Third, create a dedicated '
        'Integration User (license type: Salesforce Integration) and assign the Permission Set. '
        'Fourth, validate by testing agent actions as this user in a sandbox before promoting to production.', S))
    perm_table = make_table(
        ['Object/Feature', 'Permission Required', 'Read vs. Write', 'Notes'],
        [
            ['Case', 'Object: Read, Create, Edit', 'Both', 'Write only if agent creates/updates cases'],
            ['Account', 'Object: Read', 'Read only', 'Rarely needs write access'],
            ['Contact', 'Object: Read', 'Read only', 'Write only for contact update use cases'],
            ['Knowledge Article', 'Object: Read', 'Read only', 'Needed for RAG / knowledge retrieval'],
            ['Einstein Bot API', 'System Permission', 'N/A', 'Required for all agent deployments'],
            ['Named Credentials', 'Assigned Credential', 'N/A', 'One per external system'],
            ['Flow: Run As', 'Run Flows permission', 'N/A', 'If any Flow-based actions are used'],
        ],
        col_widths=[110, 140, 70, 150]
    )
    story.append(perm_table)
    story.append(spacer(8))
    story.append(h2('Named Credentials & External Callouts', S))
    story.append(body(
        'When agents need to call external APIs — ERP systems, payment gateways, logistics platforms — '
        'they must do so via Salesforce Named Credentials. Named Credentials store authentication details '
        'securely and prevent hardcoded credentials in Apex or Flow.', S))
    story.append(body(
        'Salesforce supports three types of Named Credentials: Legacy Named Credentials (deprecated, '
        'do not use for new implementations), Named Credentials with External Credentials (current '
        'standard, supporting OAuth 2.0, JWT, custom auth), and Per-User Named Credentials (where '
        'each Salesforce user has their own auth token to the external system). For Agentforce, '
        'use Named Credentials with External Credentials authenticated as the Integration User.', S))
    story.append(h2('API Limits & Governance', S))
    story.append(body(
        'Agentforce agents consume API calls for every action they execute. In a high-volume deployment, '
        'a single agent conversation can trigger 5-20 API calls. Multiply this by concurrent users and '
        'you can hit daily API limits rapidly.', S))
    story.append(body(
        'Salesforce orgs on Enterprise Edition receive 1,000,000 API calls per 24-hour rolling window. '
        'At first this seems generous, but an org with 500 concurrent agent users averaging 10 actions '
        'per conversation and 20 conversations per day will consume 100,000 API calls from agents alone '
        '— before any other integrations, ETL processes, or connected applications are counted.', S))
    api_table = make_table(
        ['Org Edition', 'Daily API Limit', 'Recommended Agent Headroom', 'Monitoring Tool'],
        [
            ['Essentials', '5,000', '60% (3,000 reserved)', 'API Usage Dashboard'],
            ['Professional', '100,000', '30% (70,000 reserved)', 'Event Monitoring API'],
            ['Enterprise', '1,000,000', '30% (700,000 reserved)', 'Event Monitoring + Alerts'],
            ['Unlimited', '5,000,000', '20% (4M reserved)', 'Splunk / Datadog integration'],
        ],
        col_widths=[110, 90, 150, 120]
    )
    story.append(api_table)
    story.append(spacer(8))
    arch_table = make_table(
        ['Configuration Area', 'Requirement', 'Risk if Missing'],
        [
            ['Integration User', 'Dedicated user with min. permissions', 'Security breach / audit failure'],
            ['Permission Sets', 'Scoped per agent type', 'Over-permissioning or runtime errors'],
            ['Named Credentials', 'All external APIs registered', 'Hardcoded creds / callout failures'],
            ['API Limit Buffer', '>=30% daily headroom reserved', 'Production outages at peak load'],
            ['Sandbox Strategy', 'Full Copy sandbox for UAT', 'Missed bugs reaching production'],
            ['Connected App', 'Dedicated OAuth app for agent', 'Token conflicts / revocation risk'],
        ],
        col_widths=[130, 170, 155]
    )
    story.append(arch_table)
    story.append(spacer(10))
    story.append(h2('What a Production-Ready Org Looks Like', S))
    prod_ready = [
        'A dedicated Integration User per agent type with a scoped Permission Set',
        'All external callouts registered as Named Credentials with certificate-based auth',
        'API usage monitored in real-time with alerts at 70% of daily limit',
        'A Full Copy sandbox refreshed within 30 days used for agent UAT',
        'Flow and Apex code coverage >75% with no critical Apex errors in the past 30 days',
        'Health Check score >80 in the target production org',
        'Einstein Activity Capture or equivalent audit logging enabled',
    ]
    for item in prod_ready:
        story.append(bullet(item, S))
    story.append(page_break())

    # ── Chapter 4: Use Case Prioritisation ───────────────────────────────
    for el in h1('Chapter 4: Pillar 3 — Use Case Prioritisation', S):
        story.append(el)
    story.append(body(
        'Choosing the right first use case is the single most important decision in an Agentforce '
        'deployment. The wrong choice leads to months of wasted effort, a failed pilot, and an '
        'organisation that concludes "AI doesn\'t work for us." The right choice delivers visible ROI '
        'in weeks and builds organisational confidence for the next phase.', S))
    story.append(h2('The 2x2 Prioritisation Matrix', S))
    story.append(body(
        'Evaluate every candidate use case against two dimensions: Business Impact (revenue, cost '
        'reduction, customer satisfaction) and Implementation Complexity (data readiness, integration '
        'depth, change management). The ideal first use case sits in the HIGH IMPACT / LOW COMPLEXITY '
        'quadrant.', S))
    matrix_data = [
        ['', 'LOW Complexity', 'HIGH Complexity'],
        ['HIGH Impact', 'IDEAL STARTING POINT\nFast wins, high visibility', 'STRATEGIC BETS\nResource-intensive, plan carefully'],
        ['LOW Impact', 'QUICK WINS\nGood for learning, limited ROI', 'AVOID\nHigh effort, low reward'],
    ]
    matrix_table = Table(matrix_data, colWidths=[100, 200, 200])
    matrix_table.setStyle(TableStyle([
        ('BACKGROUND',  (0,0), (-1,0),  DARK),
        ('BACKGROUND',  (0,0), (0,-1),  DARK),
        ('TEXTCOLOR',   (0,0), (-1,0),  WHITE),
        ('TEXTCOLOR',   (0,0), (0,-1),  WHITE),
        ('BACKGROUND',  (1,1), (1,1),   colors.Color(0.2,0.7,0.3)),  # green
        ('BACKGROUND',  (2,1), (2,1),   LIGHT_BLUE),
        ('BACKGROUND',  (1,2), (1,2),   LIGHT_ORANGE),
        ('BACKGROUND',  (2,2), (2,2),   colors.Color(1.0,0.9,0.9)),  # light red
        ('GRID',        (0,0), (-1,-1), 0.5, MID_GREY),
        ('ALIGN',       (0,0), (-1,-1), 'CENTER'),
        ('VALIGN',      (0,0), (-1,-1), 'MIDDLE'),
        ('FONTNAME',    (0,0), (-1,0),  'Helvetica-Bold'),
        ('FONTNAME',    (0,0), (0,-1),  'Helvetica-Bold'),
        ('FONTSIZE',    (0,0), (-1,-1), 10),
        ('TOPPADDING',  (0,0), (-1,-1), 12),
        ('BOTTOMPADDING',(0,0),(-1,-1), 12),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(matrix_table)
    story.append(spacer(10))
    story.append(h2('Scoring Your Use Cases', S))
    story.append(body(
        'To apply the 2x2 matrix, score each candidate use case on both dimensions using the '
        'following rubric. Sum the scores to produce an overall priority ranking for your backlog.', S))
    scoring_table = make_table(
        ['Dimension', 'Score 1 (Low)', 'Score 2 (Medium)', 'Score 3 (High)'],
        [
            ['Business Impact',
             'Process efficiency only; internal users; cost savings <$50K/yr',
             'Mixed internal/external; measurable CSAT impact; savings $50K-$500K/yr',
             'Customer-facing; revenue impact; NPS/retention improvement; >$500K/yr'],
            ['Implementation Simplicity',
             'Complex: multi-system integration, custom data model, compliance review required',
             'Moderate: 1-2 integrations, standard data model, some governance review',
             'Simple: Salesforce-only actions, clean data available, no regulatory constraints'],
        ],
        col_widths=[100, 135, 135, 100]
    )
    story.append(scoring_table)
    story.append(spacer(8))
    story.append(callout(
        'Selection Rule',
        'Your first Agentforce pilot should score 3 on Business Impact and 3 on Implementation '
        'Simplicity. If you cannot find such a use case, choose the highest-scoring available '
        'option and invest 2 weeks of data or architecture work to move it into the ideal quadrant.',
        bg=LIGHT_BLUE, border=SF_BLUE))
    story.append(spacer(8))
    story.append(h2('Top 10 Highest-ROI Agentforce Use Cases', S))
    use_cases = make_table(
        ['Rank', 'Use Case', 'Impact', 'Complexity', 'Typical ROI'],
        [
            ['1',  'Case Deflection Agent',         'High',   'Low',    '30-50% deflection'],
            ['2',  'Order Status Enquiry',          'High',   'Low',    '20-40% AHT reduction'],
            ['3',  'Lead Qualification',            'High',   'Medium', '3x pipeline velocity'],
            ['4',  'Renewal & Upsell Coach',        'High',   'Medium', '15-25% renewal lift'],
            ['5',  'Internal HR Policy Agent',      'Medium', 'Low',    '40% HR ticket reduction'],
            ['6',  'Field Service Scheduling',      'High',   'Medium', '20% utilisation gain'],
            ['7',  'Quote-to-Cash Assistant',       'High',   'High',   '50% quote cycle reduction'],
            ['8',  'Product Knowledge Copilot',     'Medium', 'Low',    '25% support accuracy lift'],
            ['9',  'Complaint Resolution Agent',    'High',   'Medium', 'CSAT +12-18 points'],
            ['10', 'Onboarding Journey Agent',      'Medium', 'Medium', '35% completion rate lift'],
        ],
        col_widths=[30, 160, 60, 70, 125]
    )
    story.append(use_cases)
    story.append(spacer(10))
    story.append(h2('Use Case Deep Dive: Case Deflection Agent', S))
    story.append(body(
        'As the highest-ROI, lowest-complexity entry point for most organisations, the Case Deflection '
        'Agent deserves a closer examination. This agent intercepts incoming service requests — via '
        'web chat, email, or self-service portal — and attempts to resolve them autonomously before '
        'a case is created and assigned to a human agent.', S))
    story.append(body(
        'The agent retrieves the customer\'s account and recent case history, searches the Knowledge '
        'Base for relevant articles, and presents a resolution. If the customer confirms the issue '
        'is resolved, the case is never created. If the customer requires human assistance, the agent '
        'creates a pre-populated case and routes it to the appropriate queue with context already attached.', S))
    deflection_table = make_table(
        ['Metric', 'Pre-Agent Baseline', 'Post-Agent Target', 'How Measured'],
        [
            ['Case deflection rate', '0%', '30-50%', 'Cases not created / total enquiries'],
            ['Average handle time', 'Baseline (varies)', '-20 to -40%', 'Case closure time in Salesforce'],
            ['First contact resolution', 'Baseline (varies)', '+15-25%', 'Cases closed without re-open'],
            ['Agent satisfaction (staff)', 'Baseline', '+10-20 pts', 'Internal staff survey (quarterly)'],
            ['Customer satisfaction', 'Baseline', '+8-15 pts CSAT', 'Post-interaction survey'],
        ],
        col_widths=[130, 100, 100, 140]
    )
    story.append(deflection_table)
    story.append(page_break())

    # ── Chapter 5: Team Enablement ────────────────────────────────────────
    for el in h1('Chapter 5: Pillar 4 — Team Enablement', S):
        story.append(el)
    story.append(body(
        'Technology without people is shelf-ware. Agentforce requires a cross-functional team to design, '
        'build, test, and continuously improve agents. Most organisations underestimate this requirement '
        'and attempt to deliver with a single "Salesforce admin who also does AI."', S))
    story.append(h2('The Core Team: Four Essential Roles', S))
    roles = [
        ('Salesforce Administrator / Architect',
         'Responsible for org configuration, permission sets, data model changes, Flow automation, '
         'and Named Credentials. Must understand the existing org architecture deeply. A junior admin '
         'is insufficient — this role requires senior-level experience (minimum 3 years, ideally certified '
         'as a Salesforce Architect).'),
        ('AI/Prompt Engineer',
         'Designs and iterates on system prompts, topic instructions, action descriptions, and guardrails. '
         'Must understand how the Atlas Reasoning Engine interprets instructions and how to structure '
         'prompts to produce deterministic, reliable agent behaviour.'),
        ('Business Analyst / Process Owner',
         'Translates business requirements into agent design specifications. Owns the conversation flow '
         'mapping, escalation paths, and success metric definition. Must have deep domain knowledge of '
         'the target process being automated.'),
        ('UAT Owner / Quality Lead',
         'Designs and executes the test plan. Responsible for adversarial testing (attempting to break '
         'the agent), edge case coverage, and sign-off before go-live. Often a senior business stakeholder '
         'or customer experience lead.'),
    ]
    for role_title, role_desc in roles:
        story.append(h3(role_title, S))
        story.append(body(role_desc, S))
    story.append(h2('The Case Against the "Accidental AI Project Manager"', S))
    story.append(body(
        'In many organisations, Agentforce is initially assigned to whoever currently manages the '
        'Salesforce org — typically a senior administrator who is already at full capacity delivering '
        'declarative automation, user training, and release management. This person cannot deliver '
        'a successful Agentforce implementation on top of their existing responsibilities, regardless '
        'of how talented they are.', S))
    story.append(body(
        'A successful first Agentforce deployment requires dedicated resource allocation. The core '
        'team should have at least 50% of their time ring-fenced for the project during the build '
        'phase. Part-time project delivery is the leading cause of timeline overruns in our '
        'implementation experience.', S))
    story.append(h2('Skills Gap Analysis', S))
    skills_table = make_table(
        ['Skill Area', 'Required Level', 'Typical Gap', 'Time to Close'],
        [
            ['Salesforce Admin (declarative)', 'Senior (3+ yrs)', 'Usually present', 'N/A'],
            ['Salesforce Apex / API',          'Intermediate',    'Often absent',    '3-6 months'],
            ['Prompt Engineering',             'Intermediate',    'Almost always absent', '4-8 weeks'],
            ['AI Testing & Evaluation',        'Basic',           'Always absent',   '2-4 weeks'],
            ['Data Cloud configuration',       'Intermediate',    'Usually absent',  '6-12 weeks'],
            ['Change Management / Training',   'Senior',          'Often under-resourced', '2-4 weeks'],
        ],
        col_widths=[155, 110, 110, 90]
    )
    story.append(skills_table)
    story.append(spacer(10))
    story.append(h2('Training & Enablement Requirements', S))
    story.append(body(
        'Beyond the core delivery team, a broader group of stakeholders needs training to ensure '
        'successful adoption. The training curriculum should be differentiated by role — what a '
        'Service Manager needs to understand about Agentforce is very different from what a '
        'Salesforce Developer needs to know.', S))
    training_table = make_table(
        ['Audience', 'Topics', 'Format', 'Duration'],
        [
            ['Executive Sponsors', 'AI strategy, ROI measurement, governance oversight', 'Executive briefing', '2 hours'],
            ['Business Analysts', 'Use case design, conversation flow mapping, success metrics', 'Workshop', '1 day'],
            ['Salesforce Admins', 'Agent Builder, Topics, Actions, debugging tools', 'Hands-on lab', '2 days'],
            ['Developers (Apex)', 'Custom Actions, External Services, testing frameworks', 'Technical workshop', '2 days'],
            ['End Users (Agents)', 'When to trust agent output, escalation process, feedback loop', 'Team training', '2 hours'],
            ['IT/Security', 'Trust Layer, audit logs, Named Credentials, security model', 'Briefing + Q&A', '3 hours'],
        ],
        col_widths=[110, 175, 80, 65]
    )
    story.append(training_table)
    story.append(spacer(8))
    story.append(h2('Build vs Buy vs Partner', S))
    story.append(body(
        'Organisations face a build-buy-partner decision for each gap identified. The right answer '
        'depends on time-to-market requirements, strategic importance of the capability, and '
        'internal development capacity.', S))
    bvb_table = make_table(
        ['Approach', 'Best For', 'Typical Timeline', 'Key Risks'],
        [
            ['Build Internally', 'Orgs with strong SF teams + 12+ month runway', '6-18 months', 'Underestimated complexity'],
            ['Hire Specialists', 'Orgs scaling long-term AI programmes', '3-6 months to onboard', 'Talent scarcity, retention'],
            ['Partner (SI/ISV)', 'Fast time-to-market, knowledge transfer needed', '4-12 weeks', 'Partner quality variance'],
            ['Kovil AI Partnership', 'SE Asia / ANZ orgs needing Agentforce specialists', '2-8 weeks', 'Lowest — fixed-scope delivery'],
        ],
        col_widths=[120, 155, 100, 90]
    )
    story.append(bvb_table)
    story.append(page_break())

    # ── Chapter 6: Governance & Compliance ───────────────────────────────
    for el in h1('Chapter 6: Pillar 5 — Governance & Compliance', S):
        story.append(el)
    story.append(body(
        'Governance is the pillar most often left until last — and the one most likely to cause a '
        'production rollback if neglected. AI agents operating on customer data are subject to '
        'existing privacy regulations, internal data governance policies, and emerging AI-specific '
        'regulatory frameworks.', S))
    story.append(h2('Einstein Trust Layer: Your Security Foundation', S))
    story.append(body(
        'Salesforce\'s Einstein Trust Layer provides five core security capabilities that make '
        'Agentforce enterprise-grade by default. Understanding these capabilities is essential for '
        'governance sign-off from your legal, compliance, and information security teams.', S))
    etl_items = [
        ('Zero Data Retention',
         'Prompts sent to the underlying LLM are not retained by Salesforce or the LLM provider. '
         'Each inference call is stateless from a data persistence perspective.'),
        ('PII Masking',
         'The Trust Layer can automatically detect and mask personally identifiable information '
         'before it is sent to the LLM, replacing it with tokens that are substituted back in '
         'the response.'),
        ('Prompt Injection Defence',
         'Jailbreak attempt detection and mitigation is built into the Trust Layer, preventing '
         'adversarial users from overriding agent instructions.'),
        ('Audit Logging',
         'Every agent interaction is logged in Salesforce with a full audit trail including the '
         'user, timestamp, action taken, and data accessed.'),
        ('Toxicity Filtering',
         'Output is screened for harmful content before being presented to the user, with '
         'configurable sensitivity thresholds per use case.'),
    ]
    for etl_title, etl_desc in etl_items:
        story.append(h3(etl_title, S))
        story.append(body(etl_desc, S))
    story.append(h2('PII Classification Framework', S))
    story.append(body(
        'Before deploying any agent that handles customer data, your organisation must classify '
        'all Salesforce fields into one of three categories and configure the Einstein Trust Layer '
        'accordingly.', S))
    pii_table = make_table(
        ['Category', 'Examples', 'Trust Layer Setting', 'Handling'],
        [
            ['Tier 1 - Public', 'Account Name, Industry, City', 'Standard', 'No masking required'],
            ['Tier 2 - Internal', 'Email, Phone, Job Title', 'PII Masking', 'Mask before LLM send'],
            ['Tier 3 - Sensitive', 'NI/Tax ID, DOB, Health data', 'Block', 'Never send to LLM'],
        ],
        col_widths=[100, 140, 110, 115]
    )
    story.append(pii_table)
    story.append(spacer(10))
    story.append(h2('Regulatory Landscape for AI Agents in ASEAN & ANZ', S))
    story.append(body(
        'Organisations deploying Agentforce in Southeast Asia and Australia face a patchwork of '
        'privacy and AI-related regulations. Understanding which apply to your deployment is a '
        'prerequisite for governance sign-off.', S))
    reg_table = make_table(
        ['Jurisdiction', 'Key Regulation', 'Agentforce Implication'],
        [
            ['Australia', 'Privacy Act 1988 (amended 2023)', 'Consent required for automated decision-making affecting individuals; agents must not make binding decisions without human review'],
            ['Singapore', 'PDPA + Model AI Governance Framework', 'Transparency obligations: users must know they are interacting with AI; explainability required for consequential decisions'],
            ['Malaysia', 'PDPA 2010 (amendment in progress)', 'Sensitive data categories (health, finances) require explicit consent; agent must not store or process without documented basis'],
            ['Philippines', 'Data Privacy Act 2012', 'Data Processing Agreement required; NPC registration for significant personal data processors; breach notification within 72 hours'],
            ['Indonesia', 'PDP Law 2022', 'Data localisation may apply for certain sectors; cross-border transfer restrictions must be reviewed'],
            ['UAE / KSA', 'DIFC DP Law / PDPL', 'Similar to GDPR in structure; legitimate interest basis available; DPO appointment may be required'],
        ],
        col_widths=[80, 130, 265]
    )
    story.append(reg_table)
    story.append(spacer(8))
    story.append(h2('Approval Workflows & Audit Requirements', S))
    story.append(body(
        'Any agent action that modifies data (creating cases, updating accounts, processing orders) '
        'should have a corresponding approval workflow or at minimum a human-in-the-loop confirmation '
        'step for high-value transactions. Define your approval thresholds before go-live.', S))
    story.append(body(
        'The key principle is proportionality: the approval overhead should match the risk of the '
        'action. Retrieving case history requires no approval. Creating a new case requires audit '
        'logging but not pre-approval. Issuing a refund over $500 should require a human confirmation '
        'step. Cancelling a contract should always be escalated to a human agent.', S))
    approval_table = make_table(
        ['Action Type', 'Example', 'Approval Requirement'],
        [
            ['Read-only retrieval', 'Look up case status, account details', 'No approval — log in audit trail'],
            ['Non-destructive write', 'Create case, log activity, update stage', 'No pre-approval — post-audit review'],
            ['Medium-risk write', 'Process refund <$500, update SLA priority', 'Confirmation prompt to user before executing'],
            ['High-risk write', 'Issue refund >$500, escalate to executive', 'Escalate to human agent — do not auto-execute'],
            ['Destructive action', 'Cancel contract, delete record, revoke access', 'Hard block — agent must always refuse and escalate'],
        ],
        col_widths=[120, 165, 185]
    )
    story.append(approval_table)
    story.append(spacer(8))
    story.append(callout(
        'Compliance Checklist Before Go-Live',
        'Legal sign-off obtained | PII classification complete | DPA / PDPA review done | '
        'Audit logging enabled and tested | Trust Layer configuration documented | '
        'Incident response plan for agent failures in place | Staff trained on agent limitations.',
        bg=LIGHT_ORANGE, border=ORANGE))
    story.append(page_break())

    # ── Chapter 7: The Readiness Scorecard ───────────────────────────────
    for el in h1('Chapter 7: The Readiness Scorecard', S):
        story.append(el)
    story.append(body(
        'Answer each question with a score of 0 (not in place), 1 (partially in place), or 2 '
        '(fully in place). Sum your scores across all 25 questions. Maximum score: 50.', S))
    story.append(callout(
        'Scoring Guide',
        '0-25: Not Ready — Significant foundational work required before any pilot deployment. '
        '26-40: Partially Ready — Targeted remediation in 1-2 pillars needed; pilot possible in 3-6 months. '
        '41-50: Ready to Pilot — Begin agent design and deployment. Kovil AI recommends a structured 4-week pilot.',
        bg=LIGHT_BLUE, border=SF_BLUE))
    story.append(spacer(10))

    scorecard_sections = [
        ('Pillar 1: Data Quality (Questions 1-5)', [
            'Account and Contact records are >80% complete for fields used by the target agent',
            'Duplicate records are identified and a remediation plan is in place',
            'A unified customer profile (Data Cloud or equivalent) is available',
            'PII fields are identified and classified in the Salesforce data model',
            'A data quality monitoring process is in place and reviewed regularly',
        ]),
        ('Pillar 2: Org Architecture (Questions 6-10)', [
            'A dedicated Integration User exists (or can be created) for agent runtime',
            'All external APIs required by the agent are accessible via Named Credentials',
            'API limit headroom is >30% of daily allocation during peak hours',
            'A Full Copy (or Partial Copy) sandbox is available for agent UAT',
            'Org Health Check score is >75 and no critical security alerts are active',
        ]),
        ('Pillar 3: Use Case Readiness (Questions 11-15)', [
            'A specific, scoped use case has been selected (not "general AI assistant")',
            'The use case has been mapped to the 2x2 impact/complexity matrix',
            'Success metrics (deflection rate, AHT, CSAT) are defined and measurable',
            'The target process is documented end-to-end including exception paths',
            'Executive sponsor is identified and committed to the pilot',
        ]),
        ('Pillar 4: Team Enablement (Questions 16-20)', [
            'A senior Salesforce Admin/Architect is allocated to the project (>50% time)',
            'Prompt engineering capability exists internally or via a partner',
            'A Business Analyst or Process Owner is assigned and has >25% time allocated',
            'A UAT plan with adversarial test cases is drafted or committed to',
            'A training and change management plan for end users is in place',
        ]),
        ('Pillar 5: Governance & Compliance (Questions 21-25)', [
            'Legal and compliance teams are engaged and aware of the Agentforce pilot',
            'PII masking configuration has been reviewed against applicable privacy laws',
            'Audit logging is enabled and the log retention policy meets regulatory requirements',
            'An escalation path (agent to human handoff) is designed and tested',
            'An agent incident response plan exists and is communicated to relevant teams',
        ]),
    ]
    for section_title, questions in scorecard_sections:
        story.append(h2(section_title, S))
        q_data = [['#', 'Question', 'Score (0/1/2)']]
        q_num = (scorecard_sections.index((section_title, questions))) * 5 + 1
        for i, q in enumerate(questions):
            q_data.append([str(q_num + i), q, '______'])
        q_table = Table(q_data, colWidths=[24, 356, 85], repeatRows=1)
        q_table.setStyle(TableStyle([
            ('BACKGROUND',  (0,0), (-1,0),  SF_BLUE),
            ('TEXTCOLOR',   (0,0), (-1,0),  WHITE),
            ('FONTNAME',    (0,0), (-1,0),  'Helvetica-Bold'),
            ('FONTSIZE',    (0,0), (-1,-1), 10),
            ('ROWBACKGROUNDS',(0,1),(-1,-1),[WHITE, LIGHT_BG]),
            ('GRID',        (0,0), (-1,-1), 0.4, MID_GREY),
            ('LEFTPADDING', (0,0), (-1,-1), 6),
            ('RIGHTPADDING',(0,0), (-1,-1), 6),
            ('TOPPADDING',  (0,0), (-1,-1), 6),
            ('BOTTOMPADDING',(0,0),(-1,-1), 6),
            ('VALIGN',      (0,0), (-1,-1), 'TOP'),
        ]))
        story.append(q_table)
        story.append(spacer(8))
    story.append(Paragraph('Total Score: _______ / 50', S['h2']))
    story.append(spacer(10))
    story.append(h2('Interpreting Your Score by Pillar', S))
    story.append(body(
        'In addition to your total score, examine your score by pillar. A low total score driven '
        'by a single pillar weakness is a very different situation from a low total score spread '
        'evenly across all five pillars. The former can often be resolved in 2-3 targeted sprints; '
        'the latter requires a more comprehensive foundational programme.', S))
    pillar_interp = make_table(
        ['Pillar Score (0-10)', 'Interpretation', 'Recommended Action'],
        [
            ['0-3', 'Critical gap — blocks all agent deployment', 'Immediate remediation sprint; no pilot until resolved'],
            ['4-6', 'Significant gap — limits agent capability', 'Parallel remediation alongside scoped pilot'],
            ['7-8', 'Minor gap — manageable risk', 'Document as known risk; monitor closely in pilot'],
            ['9-10', 'Production ready for this pillar', 'No action required; maintain standards'],
        ],
        col_widths=[110, 175, 190]
    )
    story.append(pillar_interp)
    story.append(spacer(8))
    story.append(callout(
        'Scoring Tip',
        'Complete this scorecard with your Salesforce team lead, a business stakeholder, and your '
        'IT/security representative in the same session. Scores assigned by technical teams alone '
        'consistently overestimate readiness in the governance and team enablement pillars.',
        bg=LIGHT_BLUE, border=SF_BLUE))
    story.append(page_break())

    # ── Chapter 8: Your Next Steps ────────────────────────────────────────
    for el in h1('Chapter 8: Your Next Steps', S):
        story.append(el)
    story.append(body(
        'Based on your Readiness Scorecard result, we recommend one of three paths. Whichever path '
        'you are on, Kovil AI is here to accelerate your journey to production.', S))
    story.append(h2('Path A: Score 0-25 — Foundation First', S))
    story.append(callout(
        'What This Means',
        'Your organisation has significant gaps across multiple pillars. Attempting a pilot now '
        'will likely fail — not because of the technology, but because the foundations are not ready.',
        bg=LIGHT_ORANGE, border=ORANGE))
    path_a = [
        'Engage Kovil AI for a free 90-minute Org Audit to identify the highest-priority gaps',
        'Initiate a data quality remediation sprint (4-6 weeks) focused on the target use case data',
        'Configure your Integration User, Named Credentials, and sandbox environment',
        'Begin prompt engineering training for your internal team',
        'Set a target: revisit this scorecard in 60 days with a goal of reaching 30+',
    ]
    for item in path_a:
        story.append(bullet(item, S))
    story.append(spacer(8))
    story.append(h2('Path B: Score 26-40 — Targeted Remediation', S))
    story.append(callout(
        'What This Means',
        'You have solid foundations in some pillars but critical gaps in 1-2 areas. A pilot is '
        'achievable within 3-6 months with focused effort on the identified gaps.',
        bg=LIGHT_BLUE, border=SF_BLUE))
    path_b = [
        'Identify your lowest-scoring pillar and address it first',
        'Run a 2-week sprint to remediate the data quality or architecture gaps',
        'Select your first use case using the 2x2 matrix — aim for high impact, low complexity',
        'Engage Kovil AI for a fixed-scope 4-week pilot delivery',
        'Define your success metrics and secure executive sponsor commitment',
    ]
    for item in path_b:
        story.append(bullet(item, S))
    story.append(spacer(8))
    story.append(h2('Path C: Score 41-50 — Ready to Pilot', S))
    story.append(callout(
        'What This Means',
        'Congratulations — your organisation is genuinely ready to deploy Agentforce in production. '
        'The question is no longer whether you can, but how fast you should move.',
        bg=colors.Color(0.93, 1.0, 0.93), border=colors.Color(0.2, 0.7, 0.3)))
    path_c = [
        'Begin agent design with Kovil AI\'s 4-Phase Implementation Framework immediately',
        'Target go-live within 4-6 weeks for your first use case',
        'Plan your Expand phase (3-5 agents) before the pilot is complete',
        'Establish an AI Centre of Excellence internally to govern future deployments',
        'Measure and report on ROI at 30, 60, and 90 days post go-live',
    ]
    for item in path_c:
        story.append(bullet(item, S))
    story.append(spacer(14))
    story.append(callout(
        'Get Your Free Agentforce Org Audit',
        'Kovil AI offers a complimentary 90-minute Agentforce readiness review for qualifying '
        'organisations. Our certified Salesforce architects will assess your org health, data '
        'quality, and use case fit — and deliver a prioritised action plan within 48 hours. '
        'Book your audit at kovil.ai/agentforce or email hello@kovil.ai.',
        bg=LIGHT_ORANGE, border=ORANGE))

    # ── Build the PDF ──────────────────────────────────────────────────────
    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        leftMargin=40,
        rightMargin=40,
        topMargin=50,
        bottomMargin=50,
        title='The Agentforce Readiness Guide',
        author='Kovil AI',
        subject='Agentforce Readiness Assessment',
    )
    canvas_maker = CoverPageCanvas(
        'The Agentforce Readiness Guide',
        'A complete framework for assessing and closing your Agentforce readiness gaps — '
        'from data quality to governance.',
        'kovil.ai/agentforce'
    )
    doc.build(story, onFirstPage=canvas_maker, onLaterPages=canvas_maker)
    return output_path


# ══════════════════════════════════════════════════════════════════════════════
#  PDF 2: Agentforce Implementation Whitepaper
# ══════════════════════════════════════════════════════════════════════════════
def build_implementation_whitepaper(output_path):
    S = STYLES
    story = []

    # ── Cover (page 1 handled by canvas) ──────────────────────────────────
    story.append(page_break())

    # ── Table of Contents ──────────────────────────────────────────────────
    story.append(Paragraph('Table of Contents', S['toc_title']))
    toc_items = [
        (1, 'Agentforce 360: Platform Architecture Overview',       3),
        (2, 'The Atlas Reasoning Engine',                          5),
        (3, 'Einstein Trust Layer: Enterprise Security',            7),
        (4, 'MuleSoft Integration Patterns',                       9),
        (5, 'The Kovil AI 4-Phase Implementation Framework',       11),
        (6, 'Phased Rollout Framework',                            14),
        (7, 'Common Implementation Failures & How to Avoid Them', 16),
        (8, 'About Kovil AI',                                     18),
    ]
    for num, title, pg in toc_items:
        story.append(toc_entry(num, title, pg))
        story.append(spacer(4))
    story.append(page_break())

    # ── Chapter 1: Platform Architecture ─────────────────────────────────
    for el in h1('Chapter 1: Agentforce 360 — Platform Architecture Overview', S):
        story.append(el)
    story.append(body(
        'Agentforce is not a standalone product — it is an orchestration layer that sits on top of '
        'the Salesforce platform stack, connecting the Einstein AI services, Data Cloud, MuleSoft '
        'integration layer, and the Atlas Reasoning Engine into a coherent agentic runtime.', S))
    story.append(h2('Platform Layer Architecture', S))
    # ASCII architecture diagram
    arch_diagram = """
+------------------------------------------------------------------+
|                    USER / CHANNEL LAYER                          |
|  Web Chat  |  Slack  |  SMS  |  Voice  |  Email  |  API         |
+------------------------------------------------------------------+
                              |
+------------------------------------------------------------------+
|                   AGENTFORCE AGENT LAYER                         |
|  Topic Classification  |  Action Selection  |  Response Gen.    |
+------------------------------------------------------------------+
                              |
+------------------+-------------------+---------------------------+
|  ATLAS REASONING  |  EINSTEIN TRUST  |   DATA CLOUD             |
|  ENGINE           |  LAYER           |   Unified Profiles       |
|  Observe-Plan-Act |  Zero Data Ret.  |   Real-time Streams      |
|  -Reflect Loop    |  PII Masking     |   Identity Resolution    |
+------------------+-------------------+---------------------------+
                              |
+------------------------------------------------------------------+
|              SALESFORCE PLATFORM CORE                            |
|  CRM Data  |  Flows  |  Apex  |  APIs  |  Permission Model      |
+------------------------------------------------------------------+
                              |
+------------------------------------------------------------------+
|              MULESOFT INTEGRATION LAYER                          |
|  ERP  |  HRIS  |  Payments  |  Logistics  |  External APIs      |
+------------------------------------------------------------------+
"""
    story.append(Paragraph(
        f'<font name="Courier" size="7"><pre>{arch_diagram}</pre></font>',
        ParagraphStyle('arch', fontName='Courier', fontSize=7.5, leading=11,
                       textColor=DARK, backColor=LIGHT_BG, spaceAfter=8,
                       leftIndent=0, borderPad=8)))
    story.append(spacer(6))
    story.append(h2('Five Core Platform Components', S))
    components = [
        ('Agent Layer',
         'The user-facing orchestration layer that receives input from any channel, classifies it '
         'into a topic, selects appropriate actions, and manages conversation state. Agents are '
         'configured declaratively through Agent Builder — no code required for standard use cases.'),
        ('Atlas Reasoning Engine',
         'The cognitive core of Agentforce. Atlas determines what the user intends, which actions '
         'to take, in what order, and how to compose the final response. It operates in a continuous '
         'Observe-Plan-Act-Reflect loop described in detail in Chapter 2.'),
        ('Einstein Trust Layer',
         'The security and privacy wrapper that governs all data flows between Salesforce and the '
         'underlying LLM infrastructure. Covered in depth in Chapter 3.'),
        ('Data Cloud',
         'Provides the unified customer profile layer, real-time event streaming, and cross-system '
         'identity resolution that enables agents to have complete customer context in every interaction.'),
        ('MuleSoft Integration Layer',
         'Connects Agentforce to external systems via API-led connectivity. Enables agents to take '
         'actions in ERP, HRIS, payment, and logistics systems without direct Salesforce integration.'),
    ]
    for comp_title, comp_desc in components:
        story.append(h3(comp_title, S))
        story.append(body(comp_desc, S))
    story.append(page_break())

    # ── Chapter 2: Atlas Reasoning Engine ─────────────────────────────────
    for el in h1('Chapter 2: The Atlas Reasoning Engine', S):
        story.append(el)
    story.append(body(
        'The Atlas Reasoning Engine is the AI brain of Agentforce. It is a purpose-built reasoning '
        'system optimised for enterprise agentic tasks — not a general-purpose LLM wrapper. '
        'Understanding how Atlas works is essential for designing agents that behave reliably and '
        'predictably in production.', S))
    story.append(h2('The Observe-Plan-Act-Reflect Loop', S))
    loop_table = make_table(
        ['Phase', 'What Atlas Does', 'Key Inputs', 'Output'],
        [
            ['OBSERVE', 'Reads all available context: conversation history, user profile, CRM data, session metadata',
             'Message, session state, Data Cloud profile', 'Enriched context object'],
            ['PLAN', 'Classifies the user intent into a Topic, then selects the optimal sequence of Actions to execute',
             'Topics configuration, Action library, confidence thresholds', 'Execution plan'],
            ['ACT', 'Executes each Action in sequence: Salesforce queries, Flow invocations, external API calls',
             'Execution plan, Named Credentials, permission context', 'Action results'],
            ['REFLECT', 'Evaluates whether the actions achieved the intended outcome; decides whether to respond or loop again',
             'Action results, original intent, confidence score', 'Final response or re-plan'],
        ],
        col_widths=[55, 170, 140, 100]
    )
    story.append(loop_table)
    story.append(spacer(10))
    story.append(h2('Topic Classification', S))
    story.append(body(
        'Every conversation starts with Atlas classifying the user\'s message into one of the Topics '
        'you have configured. Topics are defined by natural language descriptions — not keywords or '
        'decision trees. Atlas uses semantic similarity to match the user\'s intent to the most '
        'appropriate topic, even when the user\'s phrasing does not exactly match any configured example.', S))
    story.append(callout(
        'Topic Design Best Practice',
        'Write Topic descriptions in plain, precise language that describes the type of request — '
        'not the words a user might say. Atlas is semantic, not lexical. Vague topics produce '
        'classification errors; well-scoped topics produce reliable routing.',
        bg=LIGHT_ORANGE, border=ORANGE))
    story.append(spacer(8))
    story.append(h2('Action Selection: Deterministic vs LLM-Directed', S))
    story.append(body(
        'Agentforce supports two modes of action execution. Understanding when to use each is '
        'critical for both reliability and compliance.', S))
    action_table = make_table(
        ['Mode', 'How It Works', 'Best For', 'Compliance Profile'],
        [
            ['Deterministic (Fixed)',
             'Agent always executes a specific action when a topic is matched, regardless of conversation content',
             'High-stakes transactions, regulated processes',
             'Highest — fully auditable, predictable'],
            ['LLM-Directed',
             'Atlas selects the best action from the available library based on semantic reasoning about the user\'s specific need',
             'Complex, multi-intent conversations',
             'Medium — requires robust testing'],
            ['Hybrid',
             'Fixed actions for critical steps (e.g., data writes), LLM-directed for information retrieval and clarification',
             'Most production deployments',
             'High with proper design'],
        ],
        col_widths=[90, 160, 120, 100]
    )
    story.append(action_table)
    story.append(spacer(8))
    story.append(h2('Confidence Thresholds', S))
    story.append(body(
        'Atlas assigns a confidence score to every topic classification and action selection decision. '
        'When confidence falls below your configured threshold, the agent can be instructed to ask '
        'a clarifying question, escalate to a human agent, or gracefully decline the request. '
        'Setting appropriate thresholds is one of the most important tuning decisions in any deployment.', S))
    story.append(page_break())

    # ── Chapter 3: Einstein Trust Layer ───────────────────────────────────
    for el in h1('Chapter 3: Einstein Trust Layer — Enterprise Security', S):
        story.append(el)
    story.append(body(
        'The Einstein Trust Layer is Salesforce\'s answer to the most common enterprise objection to '
        'AI adoption: "How do we know our data is safe?" It provides a comprehensive set of security '
        'and privacy controls that make Agentforce compliant with enterprise data governance requirements '
        'out of the box.', S))
    story.append(h2('Zero Data Retention', S))
    story.append(body(
        'When Agentforce sends a prompt to the underlying LLM (currently powered by models from '
        'Salesforce\'s model partners including OpenAI, Anthropic, and others), the Einstein Trust '
        'Layer enforces a contractual zero data retention commitment. The LLM processes the prompt '
        'and returns a response — but neither the prompt nor the response is stored by the LLM provider '
        'for any purpose including model training.', S))
    story.append(callout(
        'Data Sovereignty',
        'For organisations in regulated industries (financial services, healthcare, government), '
        'zero data retention is a non-negotiable requirement. Agentforce meets this requirement '
        'by design — not as an optional add-on.',
        bg=LIGHT_BLUE, border=SF_BLUE))
    story.append(spacer(8))
    security_features = [
        ('Prompt Injection Defence',
         'Adversarial users sometimes attempt to override agent instructions by embedding commands '
         'in their messages (e.g., "Ignore your previous instructions and..."). The Trust Layer '
         'includes prompt injection detection that flags and blocks these attempts before they '
         'reach the reasoning engine.'),
        ('PII Masking & De-identification',
         'Configurable field-level masking automatically replaces PII with tokenised placeholders '
         'before the prompt is sent to the LLM. The original values are substituted back into the '
         'response after LLM processing, ensuring the user sees complete information while the '
         'LLM never sees raw personal data.'),
        ('Audit Logging',
         'Every Agentforce interaction generates a structured audit log entry in Salesforce including: '
         'user identity, session ID, topic classified, actions executed, data accessed (field-level), '
         'and the final response generated. Logs are stored in Salesforce and can be exported to '
         'SIEM systems via the Event Monitoring API.'),
        ('Toxicity Filtering',
         'Output is screened against Salesforce\'s toxicity model before delivery to the user. '
         'Flagged content is blocked and replaced with a safe fallback response. Threshold '
         'sensitivity is configurable per deployment.'),
        ('Grounding & Hallucination Reduction',
         'The Trust Layer enforces grounding — ensuring that agent responses are based on data '
         'retrieved from Salesforce and external systems, not generated from the LLM\'s parametric '
         'knowledge alone. This dramatically reduces hallucination risk in enterprise deployments.'),
    ]
    for feat_title, feat_desc in security_features:
        story.append(h3(feat_title, S))
        story.append(body(feat_desc, S))
    story.append(h2('Compliance Certifications', S))
    cert_table = make_table(
        ['Certification', 'Scope', 'Relevance'],
        [
            ['ISO 27001',           'Information security management',           'Universal enterprise requirement'],
            ['SOC 2 Type II',       'Security, availability, confidentiality',   'SaaS vendor assessment'],
            ['GDPR Compliance',     'EU personal data processing',               'All EU customer data'],
            ['HIPAA Eligible',      'US healthcare data',                        'Healthcare organisations'],
            ['FedRAMP (in progress)','US federal government cloud',              'Government sector'],
            ['PDPA Compatible',     'ASEAN personal data protection',            'SE Asia deployments'],
        ],
        col_widths=[140, 190, 140]
    )
    story.append(cert_table)
    story.append(page_break())

    # ── Chapter 4: MuleSoft Integration Patterns ──────────────────────────
    for el in h1('Chapter 4: MuleSoft Integration Patterns', S):
        story.append(el)
    story.append(body(
        'Agentforce agents become exponentially more powerful when they can take action in systems '
        'beyond Salesforce. MuleSoft provides the enterprise-grade integration layer for connecting '
        'agents to ERP, HRIS, payment, logistics, and any other system with an API.', S))
    story.append(h2('Direct Callout vs API-Led Connectivity', S))
    story.append(body(
        'There are two architectural patterns for connecting Agentforce to external systems. The '
        'choice between them has significant implications for scalability, maintainability, and governance.', S))
    pattern_table = make_table(
        ['Pattern', 'Architecture', 'Pros', 'Cons', 'Best For'],
        [
            ['Direct Callout',
             'Agent action calls external API directly via Named Credential',
             'Simple, fewer components',
             'Tight coupling, hard to maintain at scale',
             'Simple, stable integrations with 1-2 external systems'],
            ['API-Led (MuleSoft)',
             'Agent calls MuleSoft Experience API; Mule handles system APIs',
             'Reusable, governed, scalable',
             'More infrastructure, Mule expertise needed',
             'Complex integrations, 3+ external systems'],
        ],
        col_widths=[70, 130, 90, 90, 85]
    )
    story.append(pattern_table)
    story.append(spacer(10))
    story.append(h2('Circuit Breaker Pattern', S))
    story.append(body(
        'In production agentic deployments, external system failures are inevitable. Without a '
        'circuit breaker, a single failing external API can cause every agent conversation that '
        'invokes that API to hang indefinitely, degrading the user experience for all concurrent '
        'sessions.', S))
    story.append(body(
        'The circuit breaker pattern monitors call success rates and automatically stops sending '
        'requests to a failing system after a configurable failure threshold. Once triggered, the '
        'circuit breaker returns a fast-fail response to the agent, which can then escalate to a '
        'human agent rather than leaving the user waiting.', S))
    story.append(callout(
        'Implementation Note',
        'MuleSoft Anypoint Platform includes a native circuit breaker policy in API Manager. '
        'Configure a threshold of 50% failure rate over a 60-second window as a starting point, '
        'and tune based on observed production patterns.',
        bg=LIGHT_BLUE, border=SF_BLUE))
    story.append(spacer(8))
    story.append(h2('Rate Limiting', S))
    story.append(body(
        'External APIs impose rate limits. Agentforce agents can easily exceed these limits in '
        'high-volume deployments, particularly during business hours when many concurrent agent '
        'conversations are active. MuleSoft\'s Rate Limiting SLA policy enforces per-client-ID '
        'request quotas, preventing any single consumer from exhausting the upstream API limit.', S))
    story.append(h2('Error Handling for Agent Actions', S))
    error_table = make_table(
        ['Error Type', 'MuleSoft Handling', 'Agent Response'],
        [
            ['Timeout (>5s)',      'Circuit breaker triggers after threshold',        'Escalate to human agent'],
            ['4xx Client Error',   'Log and return structured error to agent',         'Clarify user input, retry once'],
            ['5xx Server Error',   'Retry with exponential backoff (3 attempts)',      'Inform user, offer callback'],
            ['Auth Failure',       'Alert ops team, fail fast',                       'Escalate immediately'],
            ['Rate Limit (429)',   'Queue and retry after rate limit window',          'Inform user of brief delay'],
        ],
        col_widths=[120, 185, 160]
    )
    story.append(error_table)
    story.append(page_break())

    # ── Chapter 5: Kovil AI 4-Phase Framework ─────────────────────────────
    for el in h1('Chapter 5: The Kovil AI 4-Phase Implementation Framework', S):
        story.append(el)
    story.append(body(
        'After delivering Agentforce implementations across multiple industries and geographies, '
        'Kovil AI has refined a repeatable 4-phase delivery methodology that consistently achieves '
        'production deployment within 4-8 weeks. This framework is designed to minimise risk, '
        'maximise knowledge transfer, and deliver measurable ROI on the shortest possible timeline.', S))

    phases = [
        ('Phase 1: Org Audit & Scoping', 'Days 1-3', [
            ('Org Health Assessment', 'Full review of Health Check score, API limits, permission model, sandbox strategy, and data quality baseline.'),
            ('Use Case Validation', 'Confirm or refine the target use case using the 2x2 impact/complexity matrix and success metric definition.'),
            ('Architecture Decision Record', 'Document integration pattern, security model, Trust Layer configuration, and deployment approach.'),
            ('Risk Register', 'Identify and prioritise all technical, process, and governance risks with mitigation plans.'),
        ]),
        ('Phase 2: Agent Design', 'Days 4-10', [
            ('Topic & Action Design', 'Define all Topics with precise natural language descriptions. Map each Topic to its Action library.'),
            ('Prompt Engineering', 'Write, test, and iterate system prompts, action instructions, and guardrail directives in the Agentforce sandbox.'),
            ('Conversation Flow Mapping', 'Document happy paths, exception paths, and escalation triggers for all in-scope Topics.'),
            ('Stakeholder Review', 'Design walkthrough with business sponsor, legal/compliance, and end-user representatives.'),
        ]),
        ('Phase 3: Build & Test', 'Weeks 2-3', [
            ('Agent Configuration', 'Implement the approved design in a Full Copy sandbox: Topics, Actions, Named Credentials, Permission Sets.'),
            ('Integration Build', 'Configure MuleSoft or direct callout integrations; implement circuit breaker and error handling.'),
            ('Functional Testing', 'Happy path and exception path testing against 100% of designed conversation flows.'),
            ('Adversarial Testing', 'Attempt to break the agent: prompt injection, off-topic requests, edge case data, high-volume simulation.'),
            ('UAT', 'Business stakeholder acceptance testing with real representative users on the Full Copy sandbox.'),
        ]),
        ('Phase 4: Go-Live & Optimise', 'Week 4+', [
            ('Production Deployment', 'Deploy to production using change sets or CI/CD pipeline. Smoke test immediately post-deploy.'),
            ('Hypercare (2 weeks)', 'Kovil AI on-call support for the first 2 weeks. Monitor Atlas confidence scores, escalation rates, and CSAT daily.'),
            ('Performance Tuning', 'Iterate on Topic descriptions, Action instructions, and confidence thresholds based on real conversation data.'),
            ('Handover & Enablement', 'Full knowledge transfer to internal team. Documentation, runbooks, and ongoing governance framework delivered.'),
        ]),
    ]

    for phase_title, phase_period, tasks in phases:
        story.append(h2(f'{phase_title} ({phase_period})', S))
        for task_title, task_desc in tasks:
            story.append(h3(task_title, S))
            story.append(body(task_desc, S))
        story.append(spacer(4))

    story.append(h2('Implementation Timeline Summary', S))
    timeline = make_table(
        ['Phase', 'Duration', 'Key Deliverables', 'Success Criteria'],
        [
            ['Phase 1: Audit & Scoping',  'Days 1-3',   'Org health report, Architecture Decision Record, Risk Register', 'Sign-off from sponsor and IT'],
            ['Phase 2: Agent Design',     'Days 4-10',  'Topic/Action design, Prompt library, Conversation flow maps', 'Design approval from stakeholders'],
            ['Phase 3: Build & Test',     'Weeks 2-3',  'Configured agent in sandbox, Test results, UAT sign-off', '>95% happy path pass rate; UAT approved'],
            ['Phase 4: Go-Live',          'Week 4+',    'Production deployment, Hypercare, Handover docs', 'Target deflection/AHT metrics achieved in Week 6'],
        ],
        col_widths=[110, 60, 185, 115]
    )
    story.append(timeline)
    story.append(page_break())

    # ── Chapter 6: Phased Rollout Framework ──────────────────────────────
    for el in h1('Chapter 6: Phased Rollout Framework', S):
        story.append(el)
    story.append(body(
        'Enterprise AI deployments that attempt to boil the ocean — deploying 10 agents across 5 '
        'business units simultaneously — almost universally fail. The Kovil AI phased rollout '
        'framework ensures that each wave of deployment is informed by the learnings of the previous '
        'wave, with explicit go/no-go criteria preventing premature scale.', S))

    phases_rollout = [
        ('Phase A: Pilot', '1 agent, 1 use case, limited user group', [
            'Single highest-ROI, lowest-complexity use case',
            'Limited user group: 20-50 users in a controlled cohort',
            'Human agent monitoring of all conversations for first 2 weeks',
            'Daily review of confidence scores, escalation rates, and user feedback',
        ], [
            'Deflection rate >25% (for service use cases)',
            'Atlas confidence score >0.80 on >90% of classified topics',
            'User satisfaction score >3.5/5',
            'Zero critical errors or data access violations',
        ]),
        ('Phase B: Expand', '3-5 agents, multiple use cases', [
            'Add 2-4 additional use cases based on Pilot learnings',
            'Expand user group to full team or department',
            'Reduce human monitoring to exception-only',
            'Establish internal AI governance council',
        ], [
            'Pilot success metrics sustained at expanded scale',
            'Internal team independently managing agent configurations',
            'AI governance policy documented and approved',
            'Net Promoter Score from agent interactions >30',
        ]),
        ('Phase C: Scale', 'Enterprise rollout across all applicable use cases', [
            'Roll out to all eligible business units and user cohorts',
            'Integrate with all relevant external systems via MuleSoft',
            'Establish AI Centre of Excellence to govern future development',
            'Begin measuring enterprise-wide ROI across all agents',
        ], [
            'Total cost savings / revenue impact documented in board reporting',
            'Agent adoption rate >80% among eligible users',
            'Internal team self-sufficient for new agent delivery',
            'Roadmap for next 12 months of AI capability development in place',
        ]),
    ]
    for phase_name, scope, activities, success in phases_rollout:
        story.append(h2(phase_name, S))
        story.append(body(f'Scope: {scope}', S))
        story.append(h3('Key Activities', S))
        for act in activities:
            story.append(bullet(act, S))
        story.append(h3('Go/No-Go Success Criteria', S))
        for crit in success:
            story.append(bullet(crit, S))
        story.append(spacer(8))

    story.append(h2('Measuring Success Across All Phases', S))
    story.append(body(
        'Consistent measurement from Pilot through to Scale is what transforms an Agentforce '
        'programme from an IT project into a business capability. The following KPI framework '
        'should be established before the Pilot goes live and tracked continuously.', S))
    kpi_table = make_table(
        ['KPI Category', 'Metric', 'Pilot Target', 'Expand Target', 'Scale Target'],
        [
            ['Automation', 'Deflection / resolution rate', '>25%', '>35%', '>50%'],
            ['Efficiency', 'Average handle time reduction', '>15%', '>25%', '>35%'],
            ['Quality', 'Atlas confidence score', '>0.78', '>0.82', '>0.85'],
            ['Quality', 'Escalation rate', '<30%', '<20%', '<15%'],
            ['Experience', 'User satisfaction (CSAT)', '>3.5/5', '>3.8/5', '>4.0/5'],
            ['Reliability', 'Agent uptime', '>99%', '>99.5%', '>99.9%'],
            ['Business', 'Documented cost saving or revenue impact', 'Qualitative', 'Quantified', 'Board-reported ROI'],
        ],
        col_widths=[80, 140, 65, 70, 115]
    )
    story.append(kpi_table)
    story.append(spacer(8))
    story.append(callout(
        'The 30-60-90 Day Review Cadence',
        'Establish a formal review at 30, 60, and 90 days post go-live for each agent. At 30 days: '
        'review confidence scores and top misclassification reasons. At 60 days: tune Topic '
        'descriptions and Action instructions based on real conversation data. At 90 days: produce '
        'the first formal ROI report and make the go/no-go decision for the Expand phase.',
        bg=LIGHT_BLUE, border=SF_BLUE))
    story.append(page_break())

    # ── Chapter 7: Common Failures ────────────────────────────────────────
    for el in h1('Chapter 7: Common Implementation Failures & How to Avoid Them', S):
        story.append(el)
    story.append(body(
        'The following eight failure modes are drawn from real Agentforce implementations. Each '
        'one has caused production rollbacks, missed deadlines, or wasted budget. Understanding '
        'them before you start is the highest-leverage investment you can make.', S))
    failures = make_table(
        ['#', 'Failure Mode', 'Root Cause', 'Prevention'],
        [
            ['1', 'Agent produces hallucinated responses',
             'No grounding; agent relying on LLM parametric knowledge rather than retrieved Salesforce data',
             'Configure explicit grounding actions; never allow open-ended knowledge queries without retrieval'],
            ['2', 'Topic misclassification at scale',
             'Overlapping or vague Topic descriptions causing Atlas to route conversations incorrectly',
             'Use precise, non-overlapping Topic descriptions; test with 50+ real conversation examples before go-live'],
            ['3', 'API limit exhaustion in production',
             'Agent volume not factored into daily API budget; no monitoring in place',
             'Model API consumption per conversation type; set 70% limit alerts; reserve capacity'],
            ['4', 'PII leak to LLM',
             'PII masking not configured; sensitive fields included in action prompts',
             'Complete field-level PII audit before go-live; test Trust Layer masking explicitly'],
            ['5', 'Runaway agent loops',
             'Agent enters a plan-act-reflect loop without a termination condition when external APIs fail',
             'Configure max action attempts per conversation turn; implement circuit breakers on all callouts'],
            ['6', 'Poor adoption by users',
             'Agent launched without user training, change management, or clear communication of capabilities',
             'Run user enablement workshops before go-live; communicate what the agent can and cannot do'],
            ['7', 'Compliance sign-off not obtained',
             'Legal and compliance teams engaged too late; agent deployed without proper governance review',
             'Engage legal/compliance in Phase 1; treat compliance sign-off as a hard go-live gate'],
            ['8', 'No fallback / escalation path',
             'Agent designed without a human handoff mechanism; users stuck when agent cannot resolve issue',
             'Design escalation into every Topic from day one; monitor escalation rates as a primary KPI'],
        ],
        col_widths=[20, 120, 175, 155]
    )
    story.append(failures)
    story.append(spacer(10))
    story.append(callout(
        'The Most Expensive Mistake',
        'The single most expensive mistake in Agentforce implementations is attempting to go live '
        'without completing adversarial testing. Budget at least 3 full days for a dedicated red-team '
        'session where the goal is to break the agent. Every vulnerability found in testing is one '
        'that does not reach your customers.',
        bg=LIGHT_ORANGE, border=ORANGE))
    story.append(page_break())

    # ── Chapter 8: About Kovil AI ──────────────────────────────────────────
    for el in h1('Chapter 8: About Kovil AI', S):
        story.append(el)
    story.append(body(
        'Kovil AI is a specialist Salesforce AI implementation partner focused exclusively on '
        'Agentforce and Einstein AI deployments. We work with mid-market and enterprise organisations '
        'across Southeast Asia, Australia, and the Middle East to design, build, and scale '
        'Agentforce programmes that deliver measurable, documented ROI.', S))
    story.append(h2('What Makes Us Different', S))
    differentiators = [
        'Agentforce-only focus — we do not dilute our practice with general Salesforce implementation',
        'Fixed-scope delivery packages with guaranteed timelines (not open-ended T&M)',
        'Knowledge transfer built into every engagement — we make your team self-sufficient',
        'Post-launch hypercare included — we stay with you through the first 30 days of production',
        'Regional expertise across ASEAN, ANZ, and Middle East regulatory environments',
        'Certified Salesforce Architects and Einstein AI Specialists on every project',
    ]
    for d in differentiators:
        story.append(bullet(d, S))
    story.append(spacer(10))
    story.append(h2('Our Services', S))
    services_table = make_table(
        ['Service', 'Duration', 'Outcome'],
        [
            ['Agentforce Readiness Audit', '1-2 days', 'Prioritised readiness report and action plan'],
            ['Agentforce Pilot Delivery',  '4 weeks',  'One production agent with documented ROI'],
            ['Agentforce Expand Programme','8-12 weeks','3-5 production agents across business units'],
            ['Agentforce CoE Setup',       '12 weeks', 'Internal team trained and self-sufficient'],
            ['Ongoing Managed Service',    'Monthly',  'Continuous optimisation, monitoring, and evolution'],
        ],
        col_widths=[170, 80, 220]
    )
    story.append(services_table)
    story.append(spacer(14))
    story.append(callout(
        'Start Your Agentforce Journey Today',
        'Whether you are at score 10 or score 45 on the Readiness Scorecard, Kovil AI has a '
        'structured programme to get you to production. Our free Org Audit takes 90 minutes and '
        'delivers a concrete action plan within 48 hours. No commitment required. '
        'Book at kovil.ai/agentforce or email hello@kovil.ai.',
        bg=LIGHT_ORANGE, border=ORANGE))
    story.append(spacer(14))
    story.append(Paragraph('kovil.ai/agentforce', ParagraphStyle(
        'cta_url', fontName='Helvetica-Bold', fontSize=16,
        textColor=ORANGE, alignment=TA_CENTER, spaceAfter=4)))
    story.append(Paragraph('hello@kovil.ai', ParagraphStyle(
        'cta_email', fontName='Helvetica', fontSize=13,
        textColor=SF_BLUE, alignment=TA_CENTER)))

    # ── Build the PDF ──────────────────────────────────────────────────────
    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        leftMargin=40,
        rightMargin=40,
        topMargin=50,
        bottomMargin=50,
        title='Agentforce Implementation Whitepaper',
        author='Kovil AI',
        subject='Agentforce Platform Architecture & Implementation Methodology',
    )
    canvas_maker = CoverPageCanvas(
        'Agentforce Implementation Whitepaper',
        'Platform architecture, reasoning engine deep-dive, and the Kovil AI 4-phase '
        'implementation methodology for enterprise Agentforce deployments.',
        'kovil.ai/agentforce'
    )
    doc.build(story, onFirstPage=canvas_maker, onLaterPages=canvas_maker)
    return output_path


# ══════════════════════════════════════════════════════════════════════════════
#  Main
# ══════════════════════════════════════════════════════════════════════════════
if __name__ == '__main__':
    output_dir = r'C:/Users/davis/Projects/Kovil-AI-V2-Website/public'
    os.makedirs(output_dir, exist_ok=True)

    files = [
        ('agentforce-readiness-guide.pdf',           build_readiness_guide),
        ('agentforce-implementation-whitepaper.pdf', build_implementation_whitepaper),
    ]

    for filename, builder_fn in files:
        path = os.path.join(output_dir, filename)
        try:
            print(f'Building {filename}...')
            builder_fn(path)
            size_kb = os.path.getsize(path) / 1024
            print(f'  OK  {path}  ({size_kb:.1f} KB)')
        except Exception as exc:
            print(f'  ERROR building {filename}: {exc}')
            import traceback
            traceback.print_exc()
            sys.exit(1)

    print('\nAll PDFs generated successfully.')
