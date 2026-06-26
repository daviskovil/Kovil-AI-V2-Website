"""Generate all 6 Kovil AI resource PDFs with logo branding."""

import os, sys
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.utils import ImageReader
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, HRFlowable, KeepTogether
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT

# ── Paths ─────────────────────────────────────────────────────────────────────
ROOT       = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
PUBLIC     = os.path.join(ROOT, 'public')
LOGO_PATH  = os.path.join(PUBLIC, 'kovil-logo-dark.png')

# ── Brand colours ─────────────────────────────────────────────────────────────
ORANGE   = colors.HexColor("#FF4F00")
NAVY     = colors.HexColor("#05080D")
DARK     = colors.HexColor("#1E293B")
GRAY     = colors.HexColor("#64748B")
LGRAY    = colors.HexColor("#F1F5F9")
MGRAY    = colors.HexColor("#CBD5E1")
SF_GREEN = colors.HexColor("#00A1E0")   # Salesforce blue for Agentforce
AZURE    = colors.HexColor("#0078D4")   # Azure blue
GCP_BLUE = colors.HexColor("#4285F4")   # GCP blue
WHITE    = colors.white

# ── Shared styles ─────────────────────────────────────────────────────────────
def make_styles():
    s = {}
    s['tag']      = ParagraphStyle('tag',  fontName='Helvetica-Bold', fontSize=7.5,  textColor=ORANGE,  leading=10, spaceAfter=8)
    s['h1']       = ParagraphStyle('h1',   fontName='Helvetica-Bold', fontSize=26,   textColor=NAVY,    leading=32, spaceBefore=0, spaceAfter=8)
    s['h2']       = ParagraphStyle('h2',   fontName='Helvetica-Bold', fontSize=15,   textColor=NAVY,    leading=20, spaceBefore=18, spaceAfter=6)
    s['h3']       = ParagraphStyle('h3',   fontName='Helvetica-Bold', fontSize=11.5, textColor=DARK,    leading=15, spaceBefore=10, spaceAfter=4)
    s['body']     = ParagraphStyle('body', fontName='Helvetica',      fontSize=9.5,  textColor=DARK,    leading=15, spaceBefore=0,  spaceAfter=8)
    s['small']    = ParagraphStyle('sm',   fontName='Helvetica',      fontSize=8,    textColor=GRAY,    leading=12, spaceBefore=0,  spaceAfter=4)
    s['label']    = ParagraphStyle('lbl',  fontName='Helvetica-Bold', fontSize=7.5,  textColor=ORANGE,  leading=10, spaceBefore=6,  spaceAfter=2)
    s['center']   = ParagraphStyle('ctr',  fontName='Helvetica',      fontSize=10,   textColor=GRAY,    leading=14, alignment=TA_CENTER)
    s['toc']      = ParagraphStyle('toc',  fontName='Helvetica',      fontSize=9.5,  textColor=DARK,    leading=16, leftIndent=8)
    s['callout']  = ParagraphStyle('cal',  fontName='Helvetica',      fontSize=9,    textColor=DARK,    leading=14, leftIndent=10, spaceBefore=4, spaceAfter=4)
    return s

# ── Page header/footer (with real logo image) ─────────────────────────────────
def make_page_fn(doc_title, accent=None):
    accent = accent or ORANGE
    logo_reader = ImageReader(LOGO_PATH)
    logo_w_px, logo_h_px = logo_reader.getSize()
    logo_h = 6.5 * mm
    logo_w = (logo_w_px / logo_h_px) * logo_h

    def _fn(canv, doc):
        w, h = A4
        canv.saveState()
        # ── Header white strip ──────────────────────────────────────────
        canv.setFillColor(WHITE)
        canv.rect(0, h - 13*mm, w, 13*mm, fill=1, stroke=0)
        # Accent rule beneath header
        canv.setFillColor(accent)
        canv.rect(0, h - 13*mm, w, 0.8*mm, fill=1, stroke=0)
        # Logo image
        canv.drawImage(logo_reader,
                       15*mm, h - 13*mm + (13*mm - logo_h)/2,
                       width=logo_w, height=logo_h, mask='auto')
        # Document title (right-aligned)
        canv.setFont('Helvetica', 6.5)
        canv.setFillColor(GRAY)
        canv.drawRightString(w - 15*mm, h - 13*mm + (13*mm)/2 - 2, doc_title.upper())
        # ── Footer ──────────────────────────────────────────────────────
        canv.setFillColor(NAVY)
        canv.rect(0, 0, w, 10*mm, fill=1, stroke=0)
        canv.setFont('Helvetica', 7)
        canv.setFillColor(WHITE)
        canv.drawString(15*mm, 3.5*mm, 'kovil.ai  ·  info@kovil.ai  ·  Confidential')
        canv.drawRightString(w - 15*mm, 3.5*mm, f'Page {doc.page}')
        canv.restoreState()

    return _fn

# ── Cover helper ──────────────────────────────────────────────────────────────
def cover_logo(accent=None):
    """Returns flowable table that shows the logo + wordmark on the cover page."""
    accent = accent or ORANGE
    logo_reader = ImageReader(LOGO_PATH)
    from reportlab.platypus import Image as RLImage
    logo_img = RLImage(LOGO_PATH, width=40*mm, height=None)  # auto height
    logo_img.hAlign = 'LEFT'
    return logo_img

# ── Shared widgets ────────────────────────────────────────────────────────────
def divider(color=None, thickness=0.5):
    return HRFlowable(width='100%', thickness=thickness, color=color or MGRAY,
                      spaceAfter=6, spaceBefore=6)

def callout(text, S, bg=None, border=None):
    bg     = bg     or colors.HexColor("#FFF5F0")
    border = border or ORANGE
    t = Table([[Paragraph(text, S['callout'])]], colWidths=[165*mm])
    t.setStyle(TableStyle([
        ('BACKGROUND',    (0,0),(-1,-1), bg),
        ('LINEBEFORE',    (0,0),(0,-1),  3, border),
        ('LEFTPADDING',   (0,0),(-1,-1), 10),
        ('RIGHTPADDING',  (0,0),(-1,-1), 10),
        ('TOPPADDING',    (0,0),(-1,-1), 8),
        ('BOTTOMPADDING', (0,0),(-1,-1), 8),
    ]))
    return t

def toc_row(n, title, pg, accent=None):
    accent = accent or ORANGE
    n_style  = ParagraphStyle('tn', fontName='Helvetica-Bold', fontSize=9.5, textColor=accent, leading=14)
    t_style  = ParagraphStyle('tt', fontName='Helvetica',      fontSize=9.5, textColor=DARK,   leading=14)
    p_style  = ParagraphStyle('tp', fontName='Helvetica',      fontSize=9.5, textColor=GRAY,   leading=14, alignment=TA_RIGHT)
    data = [[Paragraph(n, n_style), Paragraph(title, t_style), Paragraph(pg, p_style)]]
    t = Table(data, colWidths=[14*mm, 138*mm, 13*mm])
    t.setStyle(TableStyle([
        ('LINEBELOW',     (0,0),(-1,-1), 0.25, MGRAY),
        ('TOPPADDING',    (0,0),(-1,-1), 6),
        ('BOTTOMPADDING', (0,0),(-1,-1), 6),
        ('LEFTPADDING',   (0,0),(-1,-1), 0),
    ]))
    return t

def compare_table(data, col_widths, accent=None):
    accent = accent or NAVY
    t = Table(data, colWidths=col_widths, repeatRows=1)
    t.setStyle(TableStyle([
        ('BACKGROUND',    (0,0),(-1,0),  NAVY),
        ('TEXTCOLOR',     (0,0),(-1,0),  WHITE),
        ('FONTNAME',      (0,0),(-1,0),  'Helvetica-Bold'),
        ('FONTNAME',      (0,0),(0,-1),  'Helvetica-Bold'),
        ('FONTSIZE',      (0,0),(-1,-1), 8),
        ('ROWBACKGROUNDS',(0,1),(-1,-1), [WHITE, LGRAY]),
        ('GRID',          (0,0),(-1,-1), 0.25, MGRAY),
        ('VALIGN',        (0,0),(-1,-1), 'TOP'),
        ('TOPPADDING',    (0,0),(-1,-1), 5),
        ('BOTTOMPADDING', (0,0),(-1,-1), 5),
        ('LEFTPADDING',   (0,0),(-1,-1), 5),
    ]))
    return t

def pill_table(labels, widths):
    data = [labels]
    t = Table(data, colWidths=widths)
    t.setStyle(TableStyle([
        ('BACKGROUND',    (0,0),(-1,-1), LGRAY),
        ('TEXTCOLOR',     (0,0),(-1,-1), DARK),
        ('FONTNAME',      (0,0),(-1,-1), 'Helvetica-Bold'),
        ('FONTSIZE',      (0,0),(-1,-1), 7),
        ('ALIGN',         (0,0),(-1,-1), 'CENTER'),
        ('VALIGN',        (0,0),(-1,-1), 'MIDDLE'),
        ('TOPPADDING',    (0,0),(-1,-1), 4),
        ('BOTTOMPADDING', (0,0),(-1,-1), 4),
    ]))
    return t

def build_doc(path, story, page_fn):
    doc = SimpleDocTemplate(
        path, pagesize=A4,
        leftMargin=15*mm, rightMargin=15*mm,
        topMargin=20*mm, bottomMargin=18*mm,
    )
    doc.build(story, onFirstPage=page_fn, onLaterPages=page_fn)
    print(f"  OK  {os.path.basename(path)}")

# =============================================================================
# 1. AGENTFORCE READINESS GUIDE  (24 pages)
# =============================================================================
def agentforce_readiness(path, S):
    story = []

    # ── Cover ────────────────────────────────────────────────────────────────
    story.append(cover_logo(SF_GREEN))
    story.append(Spacer(1, 10*mm))
    story.append(Paragraph('EBOOK  ·  24 PAGES  ·  FREE DOWNLOAD',
        ParagraphStyle('tg', fontName='Helvetica-Bold', fontSize=7.5,
            textColor=SF_GREEN, leading=10, spaceAfter=8)))
    story.append(Paragraph('The Agentforce<br/>Readiness Guide',
        ParagraphStyle('ch', fontName='Helvetica-Bold', fontSize=34,
            textColor=NAVY, leading=42, spaceAfter=10)))
    story.append(Paragraph(
        'Is your Salesforce org ready for Agentforce? This guide covers the five '
        'readiness pillars — data quality, org architecture, use case prioritisation, '
        'team enablement, and governance — with a self-assessment scorecard included.',
        ParagraphStyle('cs', fontName='Helvetica', fontSize=13,
            textColor=GRAY, leading=19, spaceAfter=24)))
    story.append(pill_table(
        ['Salesforce', 'Agentforce', 'Einstein AI', 'Data Cloud', 'Apex'],
        [26*mm, 26*mm, 24*mm, 26*mm, 22*mm]))
    story.append(Spacer(1, 12*mm))
    story.append(divider(SF_GREEN, 1.5))
    story.append(Paragraph('Produced by <b>Kovil AI Engineering Team</b>  ·  kovil.ai  ·  June 2026', S['small']))
    story.append(PageBreak())

    # ── TOC ─────────────────────────────────────────────────────────────────
    story.append(Paragraph('Contents', S['h1']))
    story.append(divider(SF_GREEN))
    for n, title, pg in [
        ('01', 'Introduction — The Agentforce Moment',          '3'),
        ('02', 'Pillar 1 — Data Quality & Data Cloud Readiness','5'),
        ('03', 'Pillar 2 — Org Architecture',                   '8'),
        ('04', 'Pillar 3 — Use Case Prioritisation',            '11'),
        ('05', 'Pillar 4 — Team Enablement',                    '14'),
        ('06', 'Pillar 5 — Governance & Einstein Trust Layer',  '17'),
        ('07', 'Self-Assessment Scorecard',                     '20'),
        ('08', 'Next Steps with Kovil AI',                      '23'),
    ]:
        story.append(toc_row(n, title, pg, SF_GREEN))
    story.append(PageBreak())

    # ── Ch 1: Intro ───────────────────────────────────────────────────────
    story.append(Paragraph('01 / Introduction', S['label']))
    story.append(Paragraph('The Agentforce Moment', S['h1']))
    story.append(divider(SF_GREEN))
    story.append(Paragraph(
        'Agentforce is Salesforce\'s platform for building, deploying, and governing autonomous '
        'AI agents directly inside your Salesforce org. Unlike chatbots that answer questions, '
        'Agentforce agents take actions — creating cases, updating records, sending emails, '
        'escalating to humans, and completing multi-step business processes without a human '
        'in the loop.',
        S['body']))
    story.append(Paragraph(
        'Agentforce runs on the Atlas Reasoning Engine — Salesforce\'s proprietary AI reasoning '
        'layer that interprets instructions, queries data, selects tools, and executes actions. '
        'Combined with Einstein Trust Layer for data security and Einstein 1 Data Cloud for '
        'real-time customer data, Agentforce represents the most complete out-of-the-box '
        'enterprise AI agent platform available today.',
        S['body']))
    story.append(callout(
        '<b>Who this guide is for:</b> Salesforce admins, architects, and CRM leaders '
        'evaluating whether their org is ready to deploy Agentforce in production. '
        'Complete the scorecard in Chapter 7 before booking your first scoping call.',
        S, bg=colors.HexColor("#E8F5FB"), border=SF_GREEN))
    story.append(Spacer(1, 4*mm))
    story.append(Paragraph('The 5 Agentforce Readiness Pillars', S['h2']))
    for n, title, desc in [
        ('01', 'Data Quality', 'Is your Salesforce data clean, complete, and structured correctly for agents to reason over?'),
        ('02', 'Org Architecture', 'Is your Salesforce org configured with the right metadata, flows, and permission sets to support agents?'),
        ('03', 'Use Case Prioritisation', 'Have you identified the highest-ROI agent use case and defined a clear success metric?'),
        ('04', 'Team Enablement', 'Does your team have the Salesforce admin, developer, and AI skills to build and sustain agents?'),
        ('05', 'Governance', 'Are Einstein Trust Layer, data masking, audit trails, and agent action policies configured correctly?'),
    ]:
        data = [[
            Paragraph(n, ParagraphStyle('pn', fontName='Helvetica-Bold', fontSize=13, textColor=SF_GREEN, leading=16, alignment=TA_CENTER)),
            [Paragraph(title, S['h3']), Paragraph(desc, S['small'])]
        ]]
        t = Table(data, colWidths=[16*mm, 149*mm])
        t.setStyle(TableStyle([
            ('VALIGN',        (0,0),(-1,-1), 'TOP'),
            ('LINEBELOW',     (0,0),(-1,-1), 0.25, MGRAY),
            ('TOPPADDING',    (0,0),(-1,-1), 8),
            ('BOTTOMPADDING', (0,0),(-1,-1), 8),
            ('LEFTPADDING',   (1,0),(1,-1),  12),
        ]))
        story.append(t)
    story.append(PageBreak())

    # ── Ch 2: Data Quality ───────────────────────────────────────────────
    story.append(Paragraph('02 / Pillar 1', S['label']))
    story.append(Paragraph('Data Quality & Data Cloud Readiness', S['h1']))
    story.append(divider(SF_GREEN))
    story.append(Paragraph(
        'Agentforce agents reason over Salesforce data. If your data is incomplete, '
        'inconsistent, or stale, your agents will produce incorrect or embarrassing '
        'outputs. Data quality is the most frequently underestimated readiness pillar — '
        'and the one that most often causes production agent failures.',
        S['body']))
    for title, desc in [
        ('CRM Data Completeness', 'Agents that handle cases, leads, or opportunities need complete records — missing contact information, empty description fields, or unclassified record types cause agents to stall or hallucinate. Run a field completion audit before building agents.'),
        ('Data Duplication', 'Duplicate accounts, contacts, and leads create conflicting signals for agents. Agentforce agents do not deduplicate — they surface what is in the org. Resolve duplicates using Salesforce Duplicate Management before agent deployment.'),
        ('Data Cloud Integration', 'Einstein 1 Data Cloud allows agents to reason over unified customer profiles that combine Salesforce CRM data with external sources (e-commerce, marketing, support). If you have Data Cloud licensed, agents grounded in Data Cloud are significantly more accurate than agents grounded in CRM records alone.'),
        ('Record Type Consistency', 'Agentforce agents use record types to determine context. Inconsistent record type usage — cases categorised differently across teams, opportunities missing stages — reduces agent accuracy on routing and triage tasks.'),
        ('Flow Data Quality', 'If agents trigger or are triggered by Salesforce Flows, those flows must handle data correctly. Agents cannot recover from Flow errors — a failed flow causes the agent action to fail silently.'),
    ]:
        story.append(KeepTogether([
            Paragraph(f'<b>{title}</b>', S['body']),
            Paragraph(desc, S['body']),
        ]))
    story.append(PageBreak())

    # ── Ch 3: Org Architecture ───────────────────────────────────────────
    story.append(Paragraph('03 / Pillar 2', S['label']))
    story.append(Paragraph('Org Architecture', S['h1']))
    story.append(divider(SF_GREEN))
    story.append(Paragraph(
        'Agentforce agents run inside your Salesforce org and interact with org '
        'metadata — objects, fields, flows, permission sets, and connected apps. '
        'Org architecture readiness determines whether agents can be deployed '
        'without disrupting existing functionality.',
        S['body']))
    for title, desc in [
        ('Salesforce Edition', 'Agentforce requires Salesforce Enterprise Edition or above with the Agentforce add-on license. Check your edition and license type before beginning any build.'),
        ('Permission Sets & Profiles', 'Agent service users require specific permission sets — Agentforce User, Einstein Agent, and any custom permissions for the actions they will take. Permission configuration errors are the second most common deployment blocker.'),
        ('Object & Field Accessibility', 'Agents access objects and fields via the agent\'s service user profile. Every object and field the agent needs to read or write must be accessible to that profile. Run a field-level security audit against the agent\'s planned actions.'),
        ('Flow & Apex Actions', 'Agentforce agents invoke actions — Flows, Apex classes, and Prompt Templates. All invocable actions used by agents must be correctly labelled, described, and testable independently. Poorly described actions cause the Atlas Reasoning Engine to select the wrong action.'),
        ('Connected Apps & OAuth', 'If agents need to call external APIs (via MuleSoft or direct HTTP), Connected App and OAuth configuration must be in place. Agents cannot authenticate to external services without a properly configured named credential.'),
        ('Sandbox vs Production', 'Build and test agents in a sandbox that mirrors production data and metadata. Agents behave differently in sandboxes with stale data — full sandbox is strongly recommended.'),
    ]:
        story.append(KeepTogether([
            Paragraph(f'<b>{title}</b>', S['body']),
            Paragraph(desc, S['body']),
        ]))
    story.append(PageBreak())

    # ── Ch 4: Use Case Prioritisation ───────────────────────────────────
    story.append(Paragraph('04 / Pillar 3', S['label']))
    story.append(Paragraph('Use Case Prioritisation', S['h1']))
    story.append(divider(SF_GREEN))
    story.append(Paragraph(
        'The right first Agentforce use case is not the most interesting one — '
        'it is the one most likely to succeed and generate measurable ROI. '
        'Use the scoring matrix below to evaluate candidate use cases.',
        S['body']))
    matrix_data = [
        ['Dimension',        'High (3)',                          'Medium (2)',                    'Low (1)'],
        ['Data readiness',   'Complete, clean CRM records',       'Mostly complete, needs audit',  'Incomplete or external data'],
        ['Volume',           '>1,000 interactions/month',         '200–1,000/month',               '<200/month'],
        ['Decision clarity', 'Clear rules, lookup-based answers', 'Semi-structured decisions',     'Open-ended judgement'],
        ['Labour saved',     '>20 hrs/week per agent/team',       '5–20 hrs/week',                 '<5 hrs/week'],
        ['Risk level',       'Low-risk, reversible actions',      'Medium risk with human review', 'High risk or irreversible'],
        ['Stakeholder buy-in','Executive sponsor in place',       'Department-level support',      'No clear owner'],
    ]
    story.append(compare_table(matrix_data, [42*mm, 43*mm, 43*mm, 37*mm], SF_GREEN))
    story.append(Spacer(1, 4*mm))
    story.append(Paragraph('Score each candidate use case. 14+: strong pilot candidate. Under 10: defer.', S['small']))
    story.append(Paragraph('Top Agentforce use cases by industry', S['h2']))
    for industry, use_cases in [
        ('Financial Services', 'Loan status enquiries, compliance document checklists, account opening triage, fraud case routing.'),
        ('Healthcare', 'Appointment scheduling, referral triage, benefits verification, prior authorisation status.'),
        ('Retail / E-commerce', 'Order status, returns processing, product recommendations, loyalty points enquiries.'),
        ('Technology / SaaS', 'Support case triage, licence renewal alerts, onboarding task automation, escalation routing.'),
        ('Professional Services', 'Proposal status, project milestone updates, invoice query handling, NPS follow-up.'),
    ]:
        story.append(KeepTogether([
            Paragraph(f'<b>{industry}</b>', S['body']),
            Paragraph(use_cases, S['body']),
        ]))
    story.append(PageBreak())

    # ── Ch 5: Team Enablement ────────────────────────────────────────────
    story.append(Paragraph('05 / Pillar 4', S['label']))
    story.append(Paragraph('Team Enablement', S['h1']))
    story.append(divider(SF_GREEN))
    story.append(Paragraph(
        'Agentforce is new enough that most Salesforce teams — even experienced ones — '
        'lack the specific skills to build production agents. The skill gap is not a '
        'failure; it is simply a product of recency. Understanding it clearly is the '
        'fastest path to filling it.',
        S['body']))
    skills_data = [
        ['Skill', 'Needed For', 'How to Acquire'],
        ['Salesforce Admin (ADM 201)', 'All Agentforce deployments', 'Salesforce Trailhead — free'],
        ['Agentforce Builder', 'Agent configuration, topic/action setup', 'Agentforce Trailhead module'],
        ['Prompt Template authoring', 'Agent instruction quality', 'Einstein Prompts Trailhead'],
        ['Apex development', 'Custom invocable actions', 'Developer Trailhead paths'],
        ['Flow (Screen & Auto-launched)', 'Agent action triggers', 'Flow Trailhead paths'],
        ['Data Cloud basics', 'Data Cloud-grounded agents', 'Data Cloud Specialist superbadge'],
        ['LLM prompt engineering', 'Atlas instruction quality', 'Anthropic / OpenAI documentation'],
    ]
    story.append(compare_table(skills_data, [48*mm, 60*mm, 57*mm]))
    story.append(PageBreak())

    # ── Ch 6: Governance ─────────────────────────────────────────────────
    story.append(Paragraph('06 / Pillar 5', S['label']))
    story.append(Paragraph('Governance & Einstein Trust Layer', S['h1']))
    story.append(divider(SF_GREEN))
    story.append(Paragraph(
        'The Einstein Trust Layer is Salesforce\'s enterprise AI safety architecture — '
        'built into the Salesforce platform and active for all Agentforce deployments. '
        'It provides data masking, toxicity detection, grounding with company data, '
        'prompt injection resistance, and a full audit trail of every agent action.',
        S['body']))
    for title, desc in [
        ('Data Masking', 'Sensitive fields (SSN, credit card, health data) are masked before being sent to the LLM. Configure which fields are masked in Einstein Trust Layer settings. This is not optional in regulated industries.'),
        ('Audit Trail', 'Every agent action, reasoning step, and data access is logged to the Salesforce Audit Trail. Ensure your audit log retention policy covers the required period for your compliance framework.'),
        ('Agent Action Policies', 'Define which actions agents are allowed to take, and under what conditions. An agent that can send emails must have clear guardrails on when and to whom. Action policies are configured per agent topic.'),
        ('Human Escalation', 'Every production Agentforce agent must have a defined human escalation path. Configure escalation triggers — uncertainty threshold, user request, failed action — and test the escalation flow before go-live.'),
        ('Toxicity & Content Safety', 'Einstein Trust Layer includes content safety filters that block toxic, harmful, or off-topic outputs. Review the filter configuration to ensure it matches your tolerance for false positives (legitimate content flagged) vs false negatives (harmful content passed through).'),
    ]:
        story.append(KeepTogether([
            Paragraph(f'<b>{title}</b>', S['body']),
            Paragraph(desc, S['body']),
        ]))
    story.append(PageBreak())

    # ── Ch 7: Scorecard ──────────────────────────────────────────────────
    story.append(Paragraph('07 / Scorecard', S['label']))
    story.append(Paragraph('Self-Assessment Scorecard', S['h1']))
    story.append(divider(SF_GREEN))
    story.append(Paragraph('For each statement tick: ✓ Fully in place  /  ~ Partial  /  ✗ Not yet', S['body']))

    hdr = Table([['Statement', '✓', '~', '✗']], colWidths=[120*mm, 16*mm, 16*mm, 13*mm])
    hdr.setStyle(TableStyle([
        ('BACKGROUND', (0,0),(-1,-1), NAVY),
        ('TEXTCOLOR',  (0,0),(-1,-1), WHITE),
        ('FONTNAME',   (0,0),(-1,-1), 'Helvetica-Bold'),
        ('FONTSIZE',   (0,0),(-1,-1), 8),
        ('ALIGN',      (1,0),(-1,-1), 'CENTER'),
        ('TOPPADDING', (0,0),(-1,-1), 5),
        ('BOTTOMPADDING',(0,0),(-1,-1), 5),
        ('LEFTPADDING',(0,0),(-1,-1), 6),
    ]))
    story.append(hdr)

    def score_section(section_name, items):
        sec = Table([[Paragraph(section_name, ParagraphStyle('sh', fontName='Helvetica-Bold',
            fontSize=8.5, textColor=SF_GREEN, leading=12))]], colWidths=[165*mm])
        sec.setStyle(TableStyle([
            ('BACKGROUND', (0,0),(-1,-1), LGRAY),
            ('TOPPADDING', (0,0),(-1,-1), 5),
            ('BOTTOMPADDING',(0,0),(-1,-1), 5),
            ('LEFTPADDING',(0,0),(-1,-1), 6),
        ]))
        story.append(sec)
        rs = ParagraphStyle('ri', fontName='Helvetica', fontSize=8.5, leading=12)
        cs = ParagraphStyle('ci', fontName='Helvetica', fontSize=9, textColor=GRAY, leading=12, alignment=TA_CENTER)
        for item in items:
            row = Table([[Paragraph(item, rs), Paragraph('☐', cs), Paragraph('☐', cs), Paragraph('☐', cs)]],
                        colWidths=[120*mm, 16*mm, 16*mm, 13*mm])
            row.setStyle(TableStyle([
                ('LINEBELOW', (0,0),(-1,-1), 0.3, MGRAY),
                ('TOPPADDING',(0,0),(-1,-1), 5),
                ('BOTTOMPADDING',(0,0),(-1,-1), 5),
                ('LEFTPADDING',(0,0),(-1,-1), 6),
            ]))
            story.append(row)

    score_section('Data Quality', [
        'We have run a field completion audit on the key objects agents will use.',
        'Duplicate records are resolved or suppressed in our Salesforce org.',
        'Record types are used consistently across teams.',
        'Data Cloud is configured and CRM data is unified (if licensed).',
    ])
    score_section('Org Architecture', [
        'We have Agentforce-compatible Salesforce edition and licenses.',
        'Service user permission sets for agents are configured and tested.',
        'All objects/fields agents need are accessible to the agent service user.',
        'Invocable actions (Flows, Apex) agents will use are correctly labelled.',
    ])
    score_section('Use Case', [
        'We have scored candidate use cases using the framework in Chapter 4.',
        'Our pilot use case scores 14+ on the scoring matrix.',
        'A measurable success metric is defined for the pilot.',
        'Executive sponsor is identified and briefed.',
    ])
    score_section('Governance', [
        'Einstein Trust Layer data masking is configured for sensitive fields.',
        'Audit log retention is set to meet our compliance requirements.',
        'Human escalation triggers are defined for all planned agents.',
        'Agent action policies are documented and reviewed by legal/compliance.',
    ])
    story.append(Spacer(1, 5*mm))
    story.append(Paragraph('Score: 14–16 ✓ marks = Ready to build. 8–13 = Address gaps first. Under 8 = Engage a partner.', S['small']))
    story.append(PageBreak())

    # ── Ch 8: Next Steps ─────────────────────────────────────────────────
    story.append(Paragraph('08 / Next Steps', S['label']))
    story.append(Paragraph('Working with Kovil AI', S['h1']))
    story.append(divider(SF_GREEN))
    story.append(Paragraph(
        'Kovil AI is a specialist AI engineering firm. We build production Agentforce '
        'deployments for enterprise Salesforce orgs — fixed-price, outcome-based.',
        S['body']))
    for svc, price, desc in [
        ('Agentforce Strategy & Readiness', '$8,000 fixed', 'Salesforce org audit, use case scoring, architecture blueprint. 2-week engagement.'),
        ('Pilot Agent Build', '$15,000–$28,000', 'One production Agentforce agent, one use case, fully deployed in your Salesforce org. 2–3 weeks.'),
        ('Enterprise Agentforce Programme', '$45,000–$120,000', 'Multiple agents, Data Cloud integration, MuleSoft connectivity, governance framework. 6–10 weeks.'),
    ]:
        price_style = ParagraphStyle('pr', fontName='Helvetica-Bold', fontSize=11, textColor=ORANGE, leading=14, alignment=TA_RIGHT)
        data = [[Paragraph(f'<b>{svc}</b>', S['h3']), Paragraph(price, price_style)]]
        t = Table(data, colWidths=[130*mm, 35*mm])
        t.setStyle(TableStyle([
            ('TOPPADDING',    (0,0),(-1,-1), 10),
            ('BOTTOMPADDING', (0,0),(-1,-1), 2),
        ]))
        story.append(t)
        story.append(Paragraph(desc, S['body']))
        story.append(divider())
    story.append(Spacer(1, 6*mm))
    story.append(callout(
        '<b>Book a readiness call:</b> 45 minutes with a Kovil AI Agentforce engineer. '
        'We review your scorecard, identify your top 3 gaps, and recommend a path to '
        'your first production Agentforce agent.\n\nkovil.ai  ·  info@kovil.ai',
        S, bg=colors.HexColor("#E8F5FB"), border=SF_GREEN))

    build_doc(path, story, make_page_fn('Agentforce Readiness Guide', SF_GREEN))


# =============================================================================
# 2. AGENTFORCE IMPLEMENTATION WHITEPAPER  (18 pages)
# =============================================================================
def agentforce_whitepaper(path, S):
    story = []

    story.append(cover_logo(SF_GREEN))
    story.append(Spacer(1, 10*mm))
    story.append(Paragraph('WHITEPAPER  ·  18 PAGES  ·  FREE DOWNLOAD',
        ParagraphStyle('tg', fontName='Helvetica-Bold', fontSize=7.5,
            textColor=SF_GREEN, leading=10, spaceAfter=8)))
    story.append(Paragraph('Agentforce Implementation<br/>Whitepaper',
        ParagraphStyle('ch', fontName='Helvetica-Bold', fontSize=30,
            textColor=NAVY, leading=38, spaceAfter=10)))
    story.append(Paragraph(
        'A technical deep dive into Agentforce 360 architecture, the Atlas Reasoning Engine, '
        'Einstein Trust Layer, MuleSoft integration patterns, and a phased rollout framework '
        'for enterprise Salesforce deployments.',
        ParagraphStyle('cs', fontName='Helvetica', fontSize=12,
            textColor=GRAY, leading=18, spaceAfter=24)))
    story.append(pill_table(['Architecture', 'Atlas Engine', 'Einstein', 'MuleSoft', 'Apex'],
                             [28*mm, 28*mm, 22*mm, 24*mm, 20*mm]))
    story.append(Spacer(1, 12*mm))
    story.append(divider(SF_GREEN, 1.5))
    story.append(Paragraph('Produced by <b>Kovil AI Engineering Team</b>  ·  kovil.ai  ·  June 2026', S['small']))
    story.append(PageBreak())

    story.append(Paragraph('Contents', S['h1']))
    story.append(divider(SF_GREEN))
    for n, title, pg in [
        ('01', 'Agentforce 360 Architecture Overview',         '3'),
        ('02', 'Atlas Reasoning Engine — How It Works',        '5'),
        ('03', 'Einstein Trust Layer — Security Architecture', '7'),
        ('04', 'MuleSoft Integration Patterns',                '9'),
        ('05', 'Prompt Template Engineering',                  '11'),
        ('06', 'Human-in-the-Loop Design',                     '13'),
        ('07', 'Phased Rollout Framework',                     '15'),
        ('08', 'Architecture Decision Checklist',              '17'),
    ]:
        story.append(toc_row(n, title, pg, SF_GREEN))
    story.append(PageBreak())

    # Ch 1
    story.append(Paragraph('01 / Architecture', S['label']))
    story.append(Paragraph('Agentforce 360 Architecture Overview', S['h1']))
    story.append(divider(SF_GREEN))
    story.append(Paragraph(
        'Agentforce 360 is Salesforce\'s unified AI agent architecture — spanning the Einstein '
        'layer (model access and trust), the Atlas Reasoning Engine (agent orchestration), '
        'the Salesforce data layer (CRM + Data Cloud), and the action layer (Flows, Apex, '
        'MuleSoft, external APIs).',
        S['body']))
    for layer, component, desc in [
        ('Model Layer', 'Einstein AI / xGen models', 'LLM inference for agent reasoning, prompt completion, and response generation. Salesforce uses proprietary xGen models plus access to third-party models (GPT-4, Claude) via the Einstein AI gateway. All model calls pass through Einstein Trust Layer.'),
        ('Reasoning Layer', 'Atlas Reasoning Engine', 'The core agent brain — interprets the user\'s intent, retrieves relevant data, selects appropriate actions from the action library, executes them in sequence, and returns a response. Atlas handles multi-step reasoning without custom orchestration code.'),
        ('Data Layer', 'CRM + Einstein 1 Data Cloud', 'The data sources agents reason over. CRM provides transactional records. Data Cloud provides unified customer profiles combining CRM, marketing, commerce, and external data. Data Cloud-grounded agents are significantly more accurate.'),
        ('Action Layer', 'Flows, Apex, MuleSoft, HTTP', 'The tools agents can invoke. Actions are registered in the Agentforce action library with natural language descriptions. Atlas selects actions based on those descriptions — making description quality critical for correct action selection.'),
        ('Safety Layer', 'Einstein Trust Layer', 'Data masking, content safety filters, prompt injection resistance, grounding with company data, and audit logging. Applied to every agent interaction before the LLM sees the prompt.'),
    ]:
        data = [[
            [Paragraph(layer, ParagraphStyle('ll', fontName='Helvetica-Bold', fontSize=8, textColor=SF_GREEN, leading=11)),
             Paragraph(component, ParagraphStyle('lc', fontName='Helvetica-Bold', fontSize=9.5, textColor=NAVY, leading=13))],
            Paragraph(desc, S['small'])
        ]]
        t = Table(data, colWidths=[45*mm, 120*mm])
        t.setStyle(TableStyle([
            ('LINEBELOW',     (0,0),(-1,-1), 0.25, MGRAY),
            ('TOPPADDING',    (0,0),(-1,-1), 8),
            ('BOTTOMPADDING', (0,0),(-1,-1), 8),
            ('VALIGN',        (0,0),(-1,-1), 'TOP'),
            ('LEFTPADDING',   (1,0),(1,-1),  12),
        ]))
        story.append(t)
    story.append(PageBreak())

    # Ch 2
    story.append(Paragraph('02 / Reasoning Engine', S['label']))
    story.append(Paragraph('Atlas Reasoning Engine — How It Works', S['h1']))
    story.append(divider(SF_GREEN))
    story.append(Paragraph(
        'The Atlas Reasoning Engine is the decision-making core of Agentforce. '
        'Understanding how it works is prerequisite to writing effective agent topics '
        'and action descriptions.',
        S['body']))
    for i, (step, desc) in enumerate([
        ('Intent Parsing', 'Atlas parses the incoming user message and identifies the intent — what the user is trying to accomplish. This step relies on the agent\'s Topic configuration, which defines what the agent is responsible for.'),
        ('Context Retrieval', 'Atlas queries the Salesforce data layer to retrieve relevant records — the current user\'s account, open cases, recent interactions — and adds them to the reasoning context.'),
        ('Action Selection', 'Atlas reviews the registered action library and selects the most appropriate action(s) based on their natural language descriptions. This is why action description quality is critical — Atlas cannot infer what an action does from its API name alone.'),
        ('Action Execution', 'Atlas executes the selected action(s) sequentially, passing parameters from the reasoning context. Each action\'s output updates the reasoning context for subsequent steps.'),
        ('Response Generation', 'Atlas synthesises a natural language response incorporating the action outputs. The response passes through Einstein Trust Layer safety filters before being returned to the user.'),
    ], 1):
        story.append(KeepTogether([
            Paragraph(f'<b>Step {i}: {step}</b>', S['body']),
            Paragraph(desc, S['body']),
        ]))
    story.append(PageBreak())

    # Ch 3 - Einstein Trust Layer
    story.append(Paragraph('03 / Security', S['label']))
    story.append(Paragraph('Einstein Trust Layer — Security Architecture', S['h1']))
    story.append(divider(SF_GREEN))
    story.append(Paragraph(
        'Einstein Trust Layer is a non-optional security wrapper on all Agentforce interactions. '
        'It operates at the infrastructure level — no code changes are required to benefit from '
        'it, but it must be configured correctly to meet enterprise compliance requirements.',
        S['body']))
    for title, desc in [
        ('Zero Data Retention', 'Salesforce guarantees that LLM providers (OpenAI, Anthropic, etc.) do not retain your data beyond the inference call. This guarantee is contractual and backed by technical enforcement — no customer data is used to train third-party models.'),
        ('Dynamic Grounding', 'Einstein Trust Layer performs Retrieval-Augmented Generation (RAG) using your Salesforce data — grounding LLM responses in your actual records rather than model training data. This dramatically reduces hallucination rates on company-specific queries.'),
        ('PII Masking', 'Before sending data to the LLM, Einstein Trust Layer identifies and masks PII fields (email, phone, SSN, credit card) with tokens. The LLM sees masked values; the actual values are restored in the response before it reaches the user.'),
        ('Toxicity Detection', 'Outgoing responses are evaluated by a content safety classifier before returning to users. Toxic, harmful, or off-topic responses are blocked and logged.'),
        ('Prompt Injection Resistance', 'Einstein Trust Layer includes prompt injection resistance — detecting and blocking attempts by users to override agent instructions through clever prompting.'),
    ]:
        story.append(KeepTogether([
            Paragraph(f'<b>{title}</b>', S['body']),
            Paragraph(desc, S['body']),
        ]))
    story.append(PageBreak())

    # Ch 4 - MuleSoft
    story.append(Paragraph('04 / Integration', S['label']))
    story.append(Paragraph('MuleSoft Integration Patterns', S['h1']))
    story.append(divider(SF_GREEN))
    story.append(Paragraph(
        'MuleSoft is Salesforce\'s enterprise integration platform. Agentforce agents can invoke '
        'MuleSoft APIs as actions — allowing agents to interact with any system in your '
        'enterprise landscape, not just Salesforce.',
        S['body']))
    for pattern, desc in [
        ('Pattern 1: Agent → MuleSoft API → ERP', 'Agent retrieves a customer\'s order status from an ERP (SAP, Oracle) via a MuleSoft API action. The agent presents the result in natural language. Use case: customer service agents with real-time order visibility without ERP training for agents.'),
        ('Pattern 2: Agent → MuleSoft API → ITSM', 'Agent creates, updates, or escalates IT service management tickets (ServiceNow, Jira) via MuleSoft. Use case: internal helpdesk agents that automate ticket creation from Salesforce cases.'),
        ('Pattern 3: Agent → MuleSoft API → Data Warehouse', 'Agent queries a data warehouse (Snowflake, BigQuery) for analytics context via MuleSoft. Use case: sales agents that surface account-level revenue trends without DW training.'),
        ('Pattern 4: MuleSoft Event → Agentforce Trigger', 'A MuleSoft integration publishes an event (new order, payment failure, contract expiry) that triggers an Agentforce agent proactively. Use case: proactive renewal agents that initiate conversation when a contract is within 60 days of expiry.'),
    ]:
        story.append(KeepTogether([
            Paragraph(f'<b>{pattern}</b>', S['body']),
            Paragraph(desc, S['body']),
        ]))
    story.append(PageBreak())

    # Ch 5-7 combined as brief sections
    for ch_n, ch_title, ch_label, content_items in [
        ('05', 'Prompt Template Engineering', '05 / Prompts', [
            ('Instructions are not prompts', 'Agentforce Topic instructions are not the same as LLM prompts. Topics define the agent\'s scope and persona. Prompt Templates define how the agent composes LLM calls for specific actions. Both must be crafted deliberately.'),
            ('Topic instruction quality', 'Topic instructions should specify: what the agent is (persona), what it can do (capabilities), what it cannot do (explicit exclusions), how it should escalate, and its tone. Vague topics produce unpredictable agents.'),
            ('Prompt Template variables', 'Use Prompt Template variables to inject dynamic context — the user\'s name, account details, case history — directly into the LLM prompt. Static prompts without dynamic context produce generic, unhelpful responses.'),
            ('Grounding instructions', 'Always include an explicit grounding instruction: "Answer only from the information provided. Do not use information from your training data." This single instruction reduces hallucination rates on factual queries by 40–60%.'),
        ]),
        ('06', 'Human-in-the-Loop Design', '06 / Human-in-Loop', [
            ('Escalation is not failure', 'A well-designed Agentforce agent escalates gracefully. Escalation means the agent recognised its limits and transferred to a human appropriately — this is correct behaviour, not failure.'),
            ('Escalation triggers', 'Define explicit escalation triggers: user frustration signals (repeated rephrasing), confidence threshold below threshold, action failure, out-of-scope request. Test each trigger in staging before production.'),
            ('Escalation context transfer', 'When escalating, the agent should pass the full conversation context — what was asked, what the agent tried, why it escalated — to the receiving human. Context transfer is configured in the agent\'s Escalation Action.'),
            ('Monitoring and override', 'Supervisors should be able to view live agent conversations and intervene at any point. Salesforce provides supervisor view in Agentforce for Human Service agents. Configure supervisor access before go-live.'),
        ]),
        ('07', 'Phased Rollout Framework', '07 / Rollout', [
            ('Phase 1: Internal Alpha (Week 1–2)', 'Deploy to internal team of 3–5 testers. Define 30+ test scenarios covering success cases, edge cases, and out-of-scope queries. Set acceptance criteria: >80% accuracy, <5% incorrect escalations, <3s p95 response time.'),
            ('Phase 2: Limited Beta (Week 3–5)', 'Deploy to 10–50 selected users or a single team. Monitor conversation logs daily. Identify top 5 failure patterns. Iterate on topic instructions and action descriptions. Do not expand until failure rate is below 10%.'),
            ('Phase 3: Canary (Week 6–8)', 'Route 15–20% of live traffic to the agent. Monitor escalation rate, resolution rate, and CSAT in real time. Keep manual process running in parallel. Set rollback trigger: escalation rate >30% triggers review.'),
            ('Phase 4: Full Production (Week 9+)', 'Ramp to 100% of target traffic. Establish weekly conversation quality reviews. Plan first agent update based on observed failure patterns. Set up automated monitoring alerts.'),
        ]),
    ]:
        story.append(Paragraph(ch_label, S['label']))
        story.append(Paragraph(ch_title, S['h1']))
        story.append(divider(SF_GREEN))
        for title, desc in content_items:
            story.append(KeepTogether([
                Paragraph(f'<b>{title}</b>', S['body']),
                Paragraph(desc, S['body']),
            ]))
        story.append(PageBreak())

    # Ch 8 - Checklist
    story.append(Paragraph('08 / Checklist', S['label']))
    story.append(Paragraph('Architecture Decision Checklist', S['h1']))
    story.append(divider(SF_GREEN))
    decisions = [
        ('Salesforce edition & licenses', 'Enterprise+ with Agentforce add-on confirmed?'),
        ('Service user permissions', 'Agent service user profile and permission sets tested?'),
        ('Topic design', 'Topics narrowly scoped — one topic per distinct agent responsibility?'),
        ('Action descriptions', 'Every action description tested for correct Atlas selection?'),
        ('Prompt Template grounding', 'Grounding instruction included in all LLM-facing templates?'),
        ('Data Cloud grounding', 'Data Cloud configured and grounded agents tested (if licensed)?'),
        ('Einstein Trust Layer', 'PII masking fields configured. Toxicity thresholds reviewed?'),
        ('MuleSoft integration', 'Named credentials configured for all external system connections?'),
        ('Escalation paths', 'All escalation triggers defined, tested, and context transfer verified?'),
        ('Sandbox parity', 'Full sandbox with production-equivalent data used for final testing?'),
        ('Monitoring', 'Supervisor view configured. Monitoring alerts set. Log retention confirmed?'),
        ('Rollback plan', 'Rollback trigger thresholds defined. Manual fallback process documented?'),
    ]
    hdr2 = Table([['#', 'Decision', 'Your Answer']], colWidths=[10*mm, 80*mm, 75*mm])
    hdr2.setStyle(TableStyle([
        ('BACKGROUND', (0,0),(-1,-1), NAVY),
        ('TEXTCOLOR',  (0,0),(-1,-1), WHITE),
        ('FONTNAME',   (0,0),(-1,-1), 'Helvetica-Bold'),
        ('FONTSIZE',   (0,0),(-1,-1), 8),
        ('TOPPADDING', (0,0),(-1,-1), 5),
        ('BOTTOMPADDING',(0,0),(-1,-1), 5),
        ('LEFTPADDING',(0,0),(-1,-1), 5),
    ]))
    story.append(hdr2)
    for i, (dec, ctx) in enumerate(decisions, 1):
        rs = ParagraphStyle('rd', fontName='Helvetica', fontSize=8.5, leading=12)
        cs = ParagraphStyle('rc', fontName='Helvetica', fontSize=7.5, textColor=GRAY, leading=11)
        row = Table([[
            Paragraph(str(i), ParagraphStyle('ri', fontName='Helvetica-Bold', fontSize=9,
                textColor=SF_GREEN, leading=12, alignment=TA_CENTER)),
            [Paragraph(dec, rs), Paragraph(ctx, cs)],
            Paragraph('', rs)
        ]], colWidths=[10*mm, 80*mm, 75*mm])
        row.setStyle(TableStyle([
            ('BACKGROUND', (0,0),(-1,-1), WHITE if i%2 else LGRAY),
            ('LINEBELOW',  (0,0),(-1,-1), 0.25, MGRAY),
            ('TOPPADDING', (0,0),(-1,-1), 6),
            ('BOTTOMPADDING',(0,0),(-1,-1), 6),
            ('VALIGN',     (0,0),(-1,-1), 'TOP'),
            ('LEFTPADDING',(0,0),(-1,-1), 5),
            ('LINEBEFORE', (2,0),(2,-1),  0.5, MGRAY),
        ]))
        story.append(row)

    build_doc(path, story, make_page_fn('Agentforce Implementation Whitepaper', SF_GREEN))


# =============================================================================
# 3. AZURE AI FOUNDRY READINESS GUIDE  (28 pages)
# =============================================================================
def azure_readiness(path, S):
    story = []

    story.append(cover_logo(AZURE))
    story.append(Spacer(1, 10*mm))
    story.append(Paragraph('EBOOK  ·  28 PAGES  ·  FREE DOWNLOAD',
        ParagraphStyle('tg', fontName='Helvetica-Bold', fontSize=7.5,
            textColor=AZURE, leading=10, spaceAfter=8)))
    story.append(Paragraph('The Azure AI Foundry<br/>Readiness Guide',
        ParagraphStyle('ch', fontName='Helvetica-Bold', fontSize=32,
            textColor=NAVY, leading=40, spaceAfter=10)))
    story.append(Paragraph(
        'Is your organisation ready to build AI agents on Azure AI Foundry? '
        'This guide covers the five readiness pillars — data estate, Azure environment, '
        'use case prioritisation, governance, and team capability — with a self-assessment '
        'scorecard included.',
        ParagraphStyle('cs', fontName='Helvetica', fontSize=12,
            textColor=GRAY, leading=18, spaceAfter=24)))
    story.append(pill_table(['Azure AI', 'Foundry', 'Copilot Studio', 'Semantic Kernel', 'Entra ID'],
                             [20*mm, 18*mm, 32*mm, 36*mm, 25*mm]))
    story.append(Spacer(1, 12*mm))
    story.append(divider(AZURE, 1.5))
    story.append(Paragraph('Produced by <b>Kovil AI Engineering Team</b>  ·  kovil.ai  ·  June 2026', S['small']))
    story.append(PageBreak())

    story.append(Paragraph('Contents', S['h1']))
    story.append(divider(AZURE))
    for n, title, pg in [
        ('01', 'Introduction — Azure AI Foundry in 2026',      '3'),
        ('02', 'Pillar 1 — Azure Environment Readiness',       '5'),
        ('03', 'Pillar 2 — Data Estate Assessment',             '8'),
        ('04', 'Pillar 3 — Use Case Prioritisation',            '12'),
        ('05', 'Pillar 4 — Governance & Responsible AI',        '16'),
        ('06', 'Pillar 5 — Team Capability',                    '19'),
        ('07', 'Self-Assessment Scorecard',                     '23'),
        ('08', 'Next Steps with Kovil AI',                      '27'),
    ]:
        story.append(toc_row(n, title, pg, AZURE))
    story.append(PageBreak())

    # Ch 1
    story.append(Paragraph('01 / Introduction', S['label']))
    story.append(Paragraph('Azure AI Foundry in 2026', S['h1']))
    story.append(divider(AZURE))
    story.append(Paragraph(
        'Azure AI Foundry is Microsoft\'s unified platform for building, evaluating, and '
        'deploying enterprise AI agents. It consolidates Azure OpenAI Service, Azure AI '
        'Search, Prompt Flow LLMOps, the Azure AI Model Catalog (1,600+ models), Semantic '
        'Kernel orchestration, and Azure AI Content Safety into a single managed environment '
        'with enterprise-grade security, compliance, and cost controls.',
        S['body']))
    story.append(Paragraph(
        'For organisations with existing Microsoft 365, Azure Active Directory (Entra ID), '
        'and Azure infrastructure investments, Azure AI Foundry is the natural path to '
        'production AI agents — the identity, networking, compliance, and data connectors '
        'are already in place.',
        S['body']))
    story.append(callout(
        '<b>Who this guide is for:</b> CTOs, Azure architects, and AI programme leads '
        'at organisations evaluating Azure AI Foundry for production agent deployments. '
        'Complete the scorecard in Chapter 7 before any architecture decisions.',
        S, bg=colors.HexColor("#E3F2FD"), border=AZURE))
    story.append(Spacer(1, 4*mm))
    story.append(Paragraph('The 5 Azure AI Foundry Readiness Pillars', S['h2']))
    for n, title, desc in [
        ('01', 'Azure Environment', 'Is your Azure subscription, resource group structure, Entra ID, and networking configured for AI workloads?'),
        ('02', 'Data Estate', 'Is your data in Azure (Blob Storage, Azure SQL, Cosmos DB, Fabric) and accessible to AI agents at query time?'),
        ('03', 'Use Case Prioritisation', 'Have you scored your candidate use cases and identified the highest-ROI pilot to build first?'),
        ('04', 'Governance', 'Are Responsible AI controls, Azure Policy, Entra ID RBAC, Private Endpoints, and audit logging configured?'),
        ('05', 'Team Capability', 'Does your team have the Azure, AI Foundry, and agent engineering skills to build and sustain this in production?'),
    ]:
        data = [[
            Paragraph(n, ParagraphStyle('pn', fontName='Helvetica-Bold', fontSize=13, textColor=AZURE, leading=16, alignment=TA_CENTER)),
            [Paragraph(title, S['h3']), Paragraph(desc, S['small'])]
        ]]
        t = Table(data, colWidths=[16*mm, 149*mm])
        t.setStyle(TableStyle([
            ('VALIGN',        (0,0),(-1,-1), 'TOP'),
            ('LINEBELOW',     (0,0),(-1,-1), 0.25, MGRAY),
            ('TOPPADDING',    (0,0),(-1,-1), 8),
            ('BOTTOMPADDING', (0,0),(-1,-1), 8),
            ('LEFTPADDING',   (1,0),(1,-1),  12),
        ]))
        story.append(t)
    story.append(PageBreak())

    # Ch 2 - Azure Environment
    story.append(Paragraph('02 / Pillar 1', S['label']))
    story.append(Paragraph('Azure Environment Readiness', S['h1']))
    story.append(divider(AZURE))
    story.append(Paragraph(
        'Azure AI Foundry workloads require specific Azure infrastructure configuration before '
        'any agent code runs. Environment readiness is consistently the first bottleneck we '
        'encounter — most organisations underestimate the baseline configuration work required.',
        S['body']))
    for title, desc in [
        ('Subscription & Resource Group Structure', 'Use separate resource groups for dev, staging, and production AI Foundry workloads. Mixing AI workloads with other Azure resources in production increases blast radius for IAM misconfigurations and complicates cost allocation.'),
        ('Azure AI Foundry Hub & Project', 'Azure AI Foundry organises work into Hubs (shared infrastructure — compute, storage, key vault, connections) and Projects (agent configurations, deployments, evaluations). The Hub is the organisational unit for governance; Projects are per-use-case.'),
        ('Entra ID Configuration', 'Managed Identity is the recommended identity method for Azure AI Foundry workloads — no secrets, no rotation risk, RBAC-governed. Service principals are acceptable but require rotation policy. User-assigned Managed Identities are preferred for cross-resource access patterns.'),
        ('Model Deployments', 'Azure OpenAI models (GPT-4o, GPT-4o-mini, GPT-4-turbo) must be deployed via Azure OpenAI Studio before use in AI Foundry. Model availability varies by region — check region-model availability against your data residency requirements before choosing a deployment region.'),
        ('Private Endpoints', 'For production deployments, Azure AI Foundry components (Azure OpenAI, Azure AI Search, Storage) should communicate via Private Endpoints — eliminating public internet exposure. Private Endpoint configuration adds 1–2 days of networking work but is non-negotiable for regulated industries.'),
        ('Quota & Rate Limits', 'Azure OpenAI has regional TPM (tokens per minute) quotas. Request quota increases 1–2 weeks before production go-live. Insufficient quota causes 429 errors in production that are difficult to diagnose as quota-related.'),
    ]:
        story.append(KeepTogether([
            Paragraph(f'<b>{title}</b>', S['body']),
            Paragraph(desc, S['body']),
        ]))
    story.append(PageBreak())

    # Ch 3 - Data Estate
    story.append(Paragraph('03 / Pillar 2', S['label']))
    story.append(Paragraph('Data Estate Assessment', S['h1']))
    story.append(divider(AZURE))
    story.append(Paragraph(
        'Azure AI Foundry agents reason over data. Where that data lives, how clean it is, '
        'and how it is indexed for retrieval determines agent accuracy. Data estate readiness '
        'is the pillar where the gap between "we have data" and "our agents can use this data" '
        'is widest.',
        S['body']))
    for title, desc in [
        ('Data Location', 'Azure AI Search can index data from Azure Blob Storage, Azure SQL, Cosmos DB, SharePoint Online, and website content. Data in on-premise systems or AWS/GCP requires migration or connector setup before agents can access it.'),
        ('Microsoft Fabric Integration', 'For organisations with Microsoft Fabric (OneLake), Azure AI Foundry integrates directly — agents can ground against Fabric lakehouses without data movement. Fabric is the strategic data platform for Azure AI Foundry in 2026.'),
        ('Azure AI Search Configuration', 'Azure AI Search is the retrieval backbone for RAG-based agents. Key configuration decisions: index schema, chunking strategy, semantic ranking enable/disable, hybrid retrieval (keyword + vector), and re-ranking. These decisions significantly affect retrieval quality and must be made before build.'),
        ('Embedding Model Selection', 'Azure OpenAI\'s text-embedding-3-large (3072 dimensions) is the recommended embedding model for production AI Foundry deployments. text-embedding-3-small (1536 dimensions) for cost-sensitive deployments. Embedding model selection affects both retrieval quality and cost.'),
        ('Data Freshness', 'Azure AI Search supports scheduled indexer runs and push-API updates. Define your freshness requirements before configuring the indexer schedule — agents that answer questions about stale data cause user trust issues that are hard to recover from.'),
        ('Access Control', 'Azure AI Search supports document-level security trimming using Entra ID group membership. Agents must not surface documents the querying user is not authorised to see. Security trimming must be configured deliberately — it is not on by default.'),
    ]:
        story.append(KeepTogether([
            Paragraph(f'<b>{title}</b>', S['body']),
            Paragraph(desc, S['body']),
        ]))
    story.append(PageBreak())

    # Ch 4 - Use Case
    story.append(Paragraph('04 / Pillar 3', S['label']))
    story.append(Paragraph('Use Case Prioritisation', S['h1']))
    story.append(divider(AZURE))
    story.append(Paragraph(
        'The most expensive mistake in enterprise AI is starting with the wrong use case. '
        'Use the scoring matrix below to evaluate every candidate use case before committing '
        'to a build.',
        S['body']))
    uc_data = [
        ['Dimension',        'High (3)',                            'Medium (2)',                        'Low (1)'],
        ['Data readiness',   'Data in Azure, clean, indexed',      'Data in Azure, needs cleanup',      'Data outside Azure or poor quality'],
        ['Query volume',     '>2,000 queries/month',               '500–2,000/month',                  '<500/month'],
        ['Decision clarity', 'Clear lookup / rule-based answers',  'Semi-structured decisions',         'Open-ended judgement'],
        ['Labour saved',     '>$100k/year in manual work',         '$25k–$100k/year',                  '<$25k/year'],
        ['Risk level',       'Low-risk, reversible actions',       'Medium risk with human review',     'High risk or irreversible'],
        ['M365 alignment',   'Copilot Studio / Teams integration', 'Standalone Azure agent acceptable', 'No Microsoft ecosystem connection'],
    ]
    story.append(compare_table(uc_data, [40*mm, 43*mm, 43*mm, 39*mm], AZURE))
    story.append(Spacer(1, 4*mm))
    story.append(Paragraph('Score: 14+ = strong pilot candidate. Under 10 = address gaps first.', S['small']))
    story.append(Paragraph('Azure AI Foundry agent use case patterns', S['h2']))
    for pattern, desc in [
        ('Copilot Studio + AI Foundry (M365-integrated)', 'For organisations with M365, Copilot Studio agents that call Azure AI Foundry backends are the fastest path to user adoption — agents surface in Teams, Outlook, and SharePoint without user behaviour change.'),
        ('Azure AI Foundry + Semantic Kernel (custom)', 'For organisations with complex orchestration needs (multi-step, multi-system, agentic loops), Semantic Kernel gives full Python/C# orchestration control with Azure AI Foundry model access and tooling.'),
        ('Prompt Flow (LLMOps-first)', 'For organisations where operational consistency and evaluation-driven development matter as much as agent capability, Prompt Flow provides a managed DAG-based orchestration with built-in evaluation and MLOps integration.'),
    ]:
        story.append(KeepTogether([
            Paragraph(f'<b>{pattern}</b>', S['body']),
            Paragraph(desc, S['body']),
        ]))
    story.append(PageBreak())

    # Ch 5 - Governance
    story.append(Paragraph('05 / Pillar 4', S['label']))
    story.append(Paragraph('Governance & Responsible AI', S['h1']))
    story.append(divider(AZURE))
    story.append(Paragraph(
        'Microsoft\'s Responsible AI standard applies to all Azure AI Foundry deployments. '
        'Azure provides the most comprehensive enterprise AI governance toolkit of any cloud '
        'platform — but it must be configured. Default settings are not sufficient for '
        'production enterprise deployments.',
        S['body']))
    for title, desc in [
        ('Azure AI Content Safety', 'Azure AI Content Safety provides content moderation for AI agent inputs and outputs — detecting hate speech, violence, sexual content, and self-harm. Configure content safety thresholds for your use case: customer-facing agents need stricter thresholds than internal tools.'),
        ('Azure Policy for AI Foundry', 'Azure Policy can enforce governance at the Azure AI Foundry resource level: require Private Endpoints, enforce encryption at rest with CMK (Customer-Managed Keys), restrict model deployments to approved models, and audit content safety configuration compliance.'),
        ('Entra ID RBAC', 'Azure AI Foundry roles: AI Administrator (Hub management), AI Developer (Project creation and model deployment), AI Inference Deployment Operator (deployment management). Principle of least privilege applies — developers do not need AI Administrator access.'),
        ('Customer-Managed Keys (CMK)', 'Azure OpenAI and Azure AI Search support CMK for data at rest via Azure Key Vault. CMK is required for HIPAA, FedRAMP High, and many financial services compliance frameworks. Configure before any production data is ingested.'),
        ('Diagnostic Logging', 'Enable diagnostic logs for Azure OpenAI (prompt/completion logging), Azure AI Search (query logging), and Azure AI Foundry Hub (project activity). Route logs to Log Analytics for SIEM integration. Audit log retention must meet your compliance framework requirements.'),
    ]:
        story.append(KeepTogether([
            Paragraph(f'<b>{title}</b>', S['body']),
            Paragraph(desc, S['body']),
        ]))
    story.append(PageBreak())

    # Ch 6 - Team
    story.append(Paragraph('06 / Pillar 5', S['label']))
    story.append(Paragraph('Team Capability', S['h1']))
    story.append(divider(AZURE))
    story.append(Paragraph(
        'Azure AI Foundry requires a specific combination of Azure platform, AI engineering, '
        'and MLOps skills. Here is an honest assessment of what is needed and how to close gaps.',
        S['body']))
    skills = [
        ('Azure Platform Engineering', 'Entra ID, RBAC, Azure Networking (VNet, Private Endpoints), Key Vault, Azure Monitor', 'Required — all deployments'),
        ('Azure AI Foundry SDK', 'Python azure-ai-projects SDK, Azure OpenAI SDK, Prompt Flow SDK', 'Required — all deployments'),
        ('Azure AI Search', 'Index schema design, indexer config, hybrid retrieval, semantic ranking, security trimming', 'Required — RAG agents'),
        ('Semantic Kernel', 'SK agent framework, plugin design, planner configuration, memory integration', 'Required — complex agents'),
        ('Prompt Engineering', 'System prompt design, few-shot examples, grounding instructions, safety instructions', 'Required — all agents'),
        ('Prompt Flow / MLOps', 'DAG flow design, evaluation runs, CI/CD integration, model monitoring', 'Required — sustainable ops'),
        ('Copilot Studio', 'Bot Framework, Power Platform connectors, Teams channel integration', 'Required — M365-integrated agents'),
    ]
    skills_data = [['Skill', 'What It Covers', 'Required For']] + skills
    story.append(compare_table(skills_data, [35*mm, 80*mm, 50*mm], AZURE))
    story.append(PageBreak())

    # Ch 7 - Scorecard
    story.append(Paragraph('07 / Scorecard', S['label']))
    story.append(Paragraph('Self-Assessment Scorecard', S['h1']))
    story.append(divider(AZURE))
    story.append(Paragraph('For each statement tick: ✓ Fully in place  /  ~ Partial  /  ✗ Not yet', S['body']))

    hdr = Table([['Statement', '✓', '~', '✗']], colWidths=[120*mm, 16*mm, 16*mm, 13*mm])
    hdr.setStyle(TableStyle([
        ('BACKGROUND', (0,0),(-1,-1), NAVY),
        ('TEXTCOLOR',  (0,0),(-1,-1), WHITE),
        ('FONTNAME',   (0,0),(-1,-1), 'Helvetica-Bold'),
        ('FONTSIZE',   (0,0),(-1,-1), 8),
        ('ALIGN',      (1,0),(-1,-1), 'CENTER'),
        ('TOPPADDING', (0,0),(-1,-1), 5),
        ('BOTTOMPADDING',(0,0),(-1,-1), 5),
        ('LEFTPADDING',(0,0),(-1,-1), 6),
    ]))
    story.append(hdr)

    def az_score_section(name, items):
        sec = Table([[Paragraph(name, ParagraphStyle('sh', fontName='Helvetica-Bold',
            fontSize=8.5, textColor=AZURE, leading=12))]], colWidths=[165*mm])
        sec.setStyle(TableStyle([
            ('BACKGROUND', (0,0),(-1,-1), LGRAY),
            ('TOPPADDING', (0,0),(-1,-1), 5),
            ('BOTTOMPADDING',(0,0),(-1,-1), 5),
            ('LEFTPADDING',(0,0),(-1,-1), 6),
        ]))
        story.append(sec)
        rs = ParagraphStyle('ri', fontName='Helvetica', fontSize=8.5, leading=12)
        cs = ParagraphStyle('ci', fontName='Helvetica', fontSize=9, textColor=GRAY, leading=12, alignment=TA_CENTER)
        for item in items:
            row = Table([[Paragraph(item, rs), Paragraph('☐', cs), Paragraph('☐', cs), Paragraph('☐', cs)]],
                        colWidths=[120*mm, 16*mm, 16*mm, 13*mm])
            row.setStyle(TableStyle([
                ('LINEBELOW', (0,0),(-1,-1), 0.3, MGRAY),
                ('TOPPADDING',(0,0),(-1,-1), 5),
                ('BOTTOMPADDING',(0,0),(-1,-1), 5),
                ('LEFTPADDING',(0,0),(-1,-1), 6),
            ]))
            story.append(row)

    az_score_section('Azure Environment', [
        'Separate resource groups for dev, staging, and production AI workloads.',
        'Azure AI Foundry Hub and Project structure is defined and provisioned.',
        'Managed Identity configured for AI Foundry workloads (no secrets in code).',
        'Model deployments in the target region with adequate TPM quota confirmed.',
        'Private Endpoints configured for Azure OpenAI and Azure AI Search (production).',
    ])
    az_score_section('Data Estate', [
        'Primary data sources are in Azure (Blob, SQL, Cosmos, SharePoint, Fabric).',
        'Azure AI Search index schema is designed and tested with sample queries.',
        'Hybrid retrieval (keyword + vector) configured and evaluated against baseline.',
        'Document-level security trimming configured for sensitive content.',
        'Data freshness requirements defined and indexer schedule configured.',
    ])
    az_score_section('Use Case', [
        'Candidate use cases scored using the framework in Chapter 4.',
        'Pilot use case scores 14+ and has a measurable success metric.',
        'Executive sponsor identified and briefed on the AI programme.',
        'M365 integration path evaluated (Copilot Studio vs standalone Azure agent).',
    ])
    az_score_section('Governance', [
        'Azure AI Content Safety thresholds configured for all agent surfaces.',
        'CMK configured for Azure OpenAI and Azure AI Search (if required by compliance).',
        'Diagnostic logging enabled and routed to Log Analytics / SIEM.',
        'Azure Policy for AI Foundry applied to the Hub resource group.',
        'Responsible AI impact assessment completed for the pilot use case.',
    ])
    az_score_section('Team', [
        'At least one team member holds Azure AI Engineer (AI-102) certification.',
        'Python Azure AI SDK and Azure AI Search SDK experience on the team.',
        'Semantic Kernel or Prompt Flow experience available (in-house or partner).',
        'MLOps plan in place for agent updates post-launch.',
    ])
    story.append(Spacer(1, 5*mm))
    story.append(Paragraph('Score: 16–22 = Ready to build. 10–15 = Address gaps first. Under 10 = Engage a partner.', S['small']))
    story.append(PageBreak())

    # Ch 8 - Next Steps
    story.append(Paragraph('08 / Next Steps', S['label']))
    story.append(Paragraph('Working with Kovil AI', S['h1']))
    story.append(divider(AZURE))
    story.append(Paragraph(
        'Kovil AI builds production Azure AI Foundry agents for enterprise organisations — '
        'fixed-price, outcome-based.',
        S['body']))
    for svc, price, desc in [
        ('Azure AI Foundry Strategy & Readiness', '$10,000 fixed', 'Azure environment audit, use case scoring, architecture blueprint. 2-week engagement.'),
        ('Pilot Agent Build', '$18,000–$32,000', 'One production Azure AI Foundry agent, fully deployed. Includes Azure AI Search RAG, Semantic Kernel orchestration, and post-launch support. 2–3 weeks.'),
        ('Enterprise AI Foundry Programme', '$55,000–$150,000', 'Multiple agents, Prompt Flow MLOps, Copilot Studio integration, enterprise governance. 6–10 weeks.'),
    ]:
        price_style = ParagraphStyle('pr', fontName='Helvetica-Bold', fontSize=11, textColor=ORANGE, leading=14, alignment=TA_RIGHT)
        data = [[Paragraph(f'<b>{svc}</b>', S['h3']), Paragraph(price, price_style)]]
        t = Table(data, colWidths=[130*mm, 35*mm])
        t.setStyle(TableStyle([
            ('TOPPADDING',    (0,0),(-1,-1), 10),
            ('BOTTOMPADDING', (0,0),(-1,-1), 2),
        ]))
        story.append(t)
        story.append(Paragraph(desc, S['body']))
        story.append(divider())
    story.append(Spacer(1, 6*mm))
    story.append(callout(
        '<b>Book a readiness call:</b> 45 minutes with a Kovil AI Azure engineer. '
        'We review your scorecard, identify the top gaps, and recommend a path to '
        'your first production Azure AI Foundry agent.\n\nkovil.ai  ·  info@kovil.ai',
        S, bg=colors.HexColor("#E3F2FD"), border=AZURE))

    build_doc(path, story, make_page_fn('Azure AI Foundry Readiness Guide', AZURE))


# =============================================================================
# 4. AZURE AI FOUNDRY ARCHITECTURE WHITEPAPER  (22 pages)
# =============================================================================
def azure_whitepaper(path, S):
    story = []

    story.append(cover_logo(AZURE))
    story.append(Spacer(1, 10*mm))
    story.append(Paragraph('WHITEPAPER  ·  22 PAGES  ·  FREE DOWNLOAD',
        ParagraphStyle('tg', fontName='Helvetica-Bold', fontSize=7.5,
            textColor=AZURE, leading=10, spaceAfter=8)))
    story.append(Paragraph('Azure AI Foundry<br/>Architecture Whitepaper',
        ParagraphStyle('ch', fontName='Helvetica-Bold', fontSize=30,
            textColor=NAVY, leading=38, spaceAfter=10)))
    story.append(Paragraph(
        'A technical deep dive into Azure AI Foundry: Model Catalog, Prompt Flow LLMOps, '
        'Semantic Kernel orchestration patterns, Azure AI Search RAG pipelines, enterprise '
        'security configuration, and phased rollout framework.',
        ParagraphStyle('cs', fontName='Helvetica', fontSize=12,
            textColor=GRAY, leading=18, spaceAfter=24)))
    story.append(pill_table(['Architecture', 'Prompt Flow', 'Semantic Kernel', 'RAG', 'Entra ID'],
                             [28*mm, 28*mm, 38*mm, 16*mm, 25*mm]))
    story.append(Spacer(1, 12*mm))
    story.append(divider(AZURE, 1.5))
    story.append(Paragraph('Produced by <b>Kovil AI Engineering Team</b>  ·  kovil.ai  ·  June 2026', S['small']))
    story.append(PageBreak())

    story.append(Paragraph('Contents', S['h1']))
    story.append(divider(AZURE))
    for n, title, pg in [
        ('01', 'Azure AI Foundry Stack — Overview',          '3'),
        ('02', 'Model Catalog — Foundation Model Selection', '5'),
        ('03', 'Prompt Flow — LLMOps Architecture',          '7'),
        ('04', 'Semantic Kernel Orchestration Patterns',     '10'),
        ('05', 'Azure AI Search RAG Pipeline',               '13'),
        ('06', 'Enterprise Security Configuration',          '16'),
        ('07', 'Phased Production Rollout Framework',        '19'),
        ('08', 'Architecture Decision Checklist',            '21'),
    ]:
        story.append(toc_row(n, title, pg, AZURE))
    story.append(PageBreak())

    # Ch 1 - Stack overview
    story.append(Paragraph('01 / Overview', S['label']))
    story.append(Paragraph('Azure AI Foundry Stack — Overview', S['h1']))
    story.append(divider(AZURE))
    story.append(Paragraph(
        'Azure AI Foundry is a layered platform. Understanding which component belongs '
        'at which layer — and which is optional — is the first architecture decision.',
        S['body']))
    for layer, component, desc in [
        ('Model Layer', 'Azure AI Model Catalog (1,600+ models)', 'GPT-4o, GPT-4o-mini (Azure OpenAI), Phi-3, Llama 3.3, Mistral, Command R+ — available as managed endpoints with SLAs, RBAC, and Private Endpoint support. Model selection is the first architecture decision.'),
        ('Orchestration Layer', 'Prompt Flow / Semantic Kernel', 'Two orchestration options. Prompt Flow: DAG-based visual LLMOps with built-in evaluation. Semantic Kernel: code-first (Python/C#) agent framework with plugin architecture. Choose based on team profile and orchestration complexity.'),
        ('Retrieval Layer', 'Azure AI Search', 'Enterprise vector + keyword search for RAG pipelines. Supports Integrated Vectorisation (automatic embedding during indexing), semantic ranking, hybrid retrieval, and document-level security trimming.'),
        ('Safety Layer', 'Azure AI Content Safety', 'Content moderation for prompts and completions. Configurable severity thresholds per category (hate, violence, sexual, self-harm). Groundedness detection for RAG agents to flag hallucinations.'),
        ('Platform Layer', 'Azure AI Foundry Hub & Projects', 'Shared infrastructure layer (compute, storage, key vault, connections) + per-use-case project containers. The governance and billing boundary for all AI Foundry workloads.'),
        ('Governance Layer', 'Entra ID, Azure Policy, Azure Monitor', 'Identity (Managed Identity, RBAC), network (Private Endpoints, VNet Integration), compliance (Azure Policy, CMK, diagnostic logs). Applied at the Hub resource group level.'),
    ]:
        data = [[
            [Paragraph(layer, ParagraphStyle('ll', fontName='Helvetica-Bold', fontSize=8, textColor=AZURE, leading=11)),
             Paragraph(component, ParagraphStyle('lc', fontName='Helvetica-Bold', fontSize=9.5, textColor=NAVY, leading=13))],
            Paragraph(desc, S['small'])
        ]]
        t = Table(data, colWidths=[45*mm, 120*mm])
        t.setStyle(TableStyle([
            ('LINEBELOW',     (0,0),(-1,-1), 0.25, MGRAY),
            ('TOPPADDING',    (0,0),(-1,-1), 8),
            ('BOTTOMPADDING', (0,0),(-1,-1), 8),
            ('VALIGN',        (0,0),(-1,-1), 'TOP'),
            ('LEFTPADDING',   (1,0),(1,-1),  12),
        ]))
        story.append(t)
    story.append(PageBreak())

    # Ch 2 - Model Catalog
    story.append(Paragraph('02 / Models', S['label']))
    story.append(Paragraph('Model Catalog — Foundation Model Selection', S['h1']))
    story.append(divider(AZURE))
    models_data = [
        ['Model', 'Best For', 'Context', 'Deploy Via'],
        ['GPT-4o', 'Complex reasoning, multi-modal, production agents', '128K tokens', 'Azure OpenAI'],
        ['GPT-4o-mini', 'High-volume, latency-sensitive, cost-optimised', '128K tokens', 'Azure OpenAI'],
        ['o1 / o1-mini', 'Advanced reasoning, complex analysis tasks', '200K tokens', 'Azure OpenAI'],
        ['Phi-3.5-mini', 'Edge deployment, low-latency, small model', '128K tokens', 'Model Catalog'],
        ['Llama 3.3 70B', 'Data sovereignty, fine-tuning, cost control', '128K tokens', 'Model Catalog'],
        ['Mistral Large', 'EU data residency, multilingual', '128K tokens', 'Model Catalog'],
        ['text-embedding-3-large', 'Production RAG embeddings (3072 dims)', 'N/A', 'Azure OpenAI'],
    ]
    story.append(compare_table(models_data, [38*mm, 60*mm, 28*mm, 39*mm], AZURE))
    story.append(Spacer(1, 4*mm))
    story.append(Paragraph(
        'Azure OpenAI models have enterprise SLAs, RBAC, Private Endpoint support, and '
        'Content Safety integration. Model Catalog models (Llama, Mistral, Phi) are deployed '
        'on managed compute in your Azure subscription — no data leaves your environment.',
        S['small']))
    story.append(PageBreak())

    # Ch 3 - Prompt Flow
    story.append(Paragraph('03 / LLMOps', S['label']))
    story.append(Paragraph('Prompt Flow — LLMOps Architecture', S['h1']))
    story.append(divider(AZURE))
    story.append(Paragraph(
        'Prompt Flow is Azure AI Foundry\'s LLMOps platform — a DAG-based visual workflow '
        'for building, evaluating, and deploying LLM pipelines. It is the recommended '
        'orchestration layer for teams that prioritise operational consistency, evaluation-'
        'driven development, and CI/CD integration over raw orchestration flexibility.',
        S['body']))
    for title, desc in [
        ('Standard Flow vs Chat Flow vs Evaluation Flow', 'Standard: batch processing pipelines. Chat: multi-turn conversation agents with history management. Evaluation: quality measurement flows that assess other flows. Build your agent as a Chat Flow; evaluate it with an Evaluation Flow.'),
        ('Node Types', 'LLM nodes (Azure OpenAI calls), Python nodes (custom code, API calls, data processing), Prompt nodes (template rendering). Complex agents combine multiple node types in a directed acyclic graph.'),
        ('Connection Management', 'Prompt Flow uses Azure AI Foundry Connections to securely store API keys and endpoints (Azure OpenAI, Azure AI Search, custom APIs). Connections are Hub-level resources — shared across all Projects in the Hub.'),
        ('Evaluation Framework', 'Prompt Flow includes built-in evaluators: groundedness (does the answer come from the context?), relevance (is the answer relevant to the question?), coherence, fluency, and similarity. Run evaluations on every significant prompt change.'),
        ('CI/CD Integration', 'Prompt Flow exports flows as Python packages with a YAML manifest. Integrate into Azure DevOps or GitHub Actions pipelines: test → evaluate → deploy to Azure ML online endpoint. Automated evaluation gates prevent quality regressions.'),
        ('Tracing & Monitoring', 'Prompt Flow integrates with Azure Monitor Application Insights for distributed tracing — every node execution, LLM call, token count, and latency is captured. Set up dashboards for token consumption, latency p95, and evaluation score trends.'),
    ]:
        story.append(KeepTogether([
            Paragraph(f'<b>{title}</b>', S['body']),
            Paragraph(desc, S['body']),
        ]))
    story.append(PageBreak())

    # Ch 4 - Semantic Kernel
    story.append(Paragraph('04 / Orchestration', S['label']))
    story.append(Paragraph('Semantic Kernel Orchestration Patterns', S['h1']))
    story.append(divider(AZURE))
    story.append(Paragraph(
        'Semantic Kernel (SK) is Microsoft\'s open-source agent orchestration framework — '
        'Python and C# — for building complex, multi-step AI agents with full code control. '
        'Use SK when Prompt Flow\'s DAG model is too restrictive for your orchestration needs.',
        S['body']))
    for pattern, desc in [
        ('Pattern 1: Single Agent + Plugin Architecture', 'One SK agent with multiple plugins — each plugin is a Python or C# function decorated with @kernel_function. The agent selects the right plugin based on the user\'s intent using the LLM planner. Use for: self-contained agents with a defined tool set (CRM lookup, calendar booking, document search).'),
        ('Pattern 2: Multi-Agent Orchestration', 'Multiple SK agents, each with a specialised role, coordinated by an orchestrator agent. The orchestrator decomposes complex tasks and delegates to specialist agents. Use for: complex research agents, multi-system data aggregation, agentic process automation.'),
        ('Pattern 3: SK + Azure AI Search RAG', 'SK agent uses a custom plugin that wraps Azure AI Search — retrieving relevant context before every LLM call. The SK planner decides when to retrieve and what to retrieve based on query analysis. Use for: knowledge-grounded agents where retrieval must be selective, not always-on.'),
        ('Pattern 4: SK + Persistent Memory', 'SK agent stores conversation summaries and user preferences in Azure Cosmos DB or Azure Cache for Redis. On subsequent sessions, the agent retrieves relevant memory and incorporates it into the system prompt. Use for: personalised agents that improve over multiple sessions.'),
        ('Pattern 5: SK Agent + Azure Logic Apps', 'SK agent triggers Azure Logic Apps workflows as tool calls — accessing 400+ connectors (Salesforce, Dynamics, SAP, Jira, etc.) without custom integration code. Use for: enterprise process automation agents that need broad system connectivity.'),
    ]:
        story.append(KeepTogether([
            Paragraph(f'<b>{pattern}</b>', S['body']),
            Paragraph(desc, S['body']),
        ]))
    story.append(PageBreak())

    # Ch 5 - RAG Pipeline
    story.append(Paragraph('05 / Retrieval', S['label']))
    story.append(Paragraph('Azure AI Search RAG Pipeline', S['h1']))
    story.append(divider(AZURE))
    story.append(Paragraph(
        'Azure AI Search with Integrated Vectorisation is the recommended RAG backbone for '
        'Azure AI Foundry agents. Understanding each pipeline stage determines index quality '
        'and agent accuracy.',
        S['body']))
    for stage, desc in [
        ('1. Data Ingestion', 'Supported sources: Azure Blob Storage (PDF, DOCX, HTML, TXT, JSON), Azure SQL, Cosmos DB, SharePoint Online, and OneLake (Fabric). Use built-in indexers for managed crawling or the push API for real-time updates.'),
        ('2. Integrated Vectorisation', 'Enable Integrated Vectorisation to have Azure AI Search automatically call your Azure OpenAI embedding model during indexing — no separate embedding pipeline required. Embeddings are stored in the same index as the text content.'),
        ('3. Chunking Configuration', 'Default chunk size is 512 tokens with 20% overlap. For technical documentation: 256–384 tokens improves precision. For narrative content: 512–768 tokens preserves context. Test both against a sample query set.'),
        ('4. Semantic Ranking', 'Azure AI Search Semantic Ranker re-ranks the top-50 BM25 results using a cross-encoder model. Enable semantic ranking for all production deployments — it improves answer accuracy by 20–35% on natural language queries at minimal additional cost.'),
        ('5. Hybrid Retrieval', 'Combine keyword (BM25) and vector search with RRF (Reciprocal Rank Fusion) for best overall retrieval quality. Pure vector search misses exact-match queries; pure keyword search misses semantic paraphrases. Hybrid retrieval handles both.'),
        ('6. Groundedness Detection', 'Azure AI Content Safety includes a groundedness detection API — verifying that agent responses are grounded in the retrieved context. Enable for production RAG agents to catch hallucinations before they reach users.'),
    ]:
        story.append(KeepTogether([
            Paragraph(f'<b>{stage}</b>', S['body']),
            Paragraph(desc, S['body']),
        ]))
    story.append(PageBreak())

    # Ch 6 - Security
    story.append(Paragraph('06 / Security', S['label']))
    story.append(Paragraph('Enterprise Security Configuration', S['h1']))
    story.append(divider(AZURE))
    for title, desc in [
        ('Managed Identity (No Secrets Architecture)', 'All Azure AI Foundry workloads should use User-Assigned Managed Identity for authentication to Azure OpenAI, Azure AI Search, Azure Key Vault, and Azure Storage. No API keys in code, no rotation risk, full RBAC control.'),
        ('Private Endpoints', 'In production, all Azure AI Foundry resources communicate via Private Endpoints — eliminating public internet exposure. Private DNS zones must be configured for each service. Test connectivity from your compute before go-live.'),
        ('Customer-Managed Keys (CMK)', 'Encrypt data at rest in Azure OpenAI and Azure AI Search with keys stored in Azure Key Vault. Required for HIPAA, FedRAMP High, ISO 27001 audits. Configure before any production data is ingested — retroactive CMK application is complex.'),
        ('Entra ID Conditional Access', 'Apply Conditional Access policies to Azure AI Foundry portal access: require MFA, compliant devices, and named locations for all administrative access. Block access from non-corporate networks for sensitive AI workloads.'),
        ('Network Isolation', 'Configure Azure AI Foundry Hub with Public Network Access disabled. Developers access the Hub via Azure Bastion or VPN. CI/CD pipelines deploy via Private Endpoint from a self-hosted runner in the VNet.'),
        ('Azure Policy — AI Guardrails', 'Enforce: require Private Endpoints, require Managed Identity, restrict model deployments to approved model list, require content safety configuration, require diagnostic logging. Apply at the Management Group level for consistent enforcement.'),
    ]:
        story.append(KeepTogether([
            Paragraph(f'<b>{title}</b>', S['body']),
            Paragraph(desc, S['body']),
        ]))
    story.append(PageBreak())

    # Ch 7 - Rollout
    story.append(Paragraph('07 / Rollout', S['label']))
    story.append(Paragraph('Phased Production Rollout Framework', S['h1']))
    story.append(divider(AZURE))
    for phase_title, desc, gate in [
        ('Phase 1: Internal Alpha (Days 1–10)',
         'Deploy to Azure AI Foundry staging environment. Internal team of 5–10 testers run 40+ defined test queries covering success, edge case, and out-of-scope scenarios. Configure Application Insights tracing. Set acceptance criteria: >80% groundedness score, <4s p95 latency, 0% safety filter false positives on legitimate queries.',
         'Groundedness >80%, latency <4s p95, 0 safety false positives on test set.'),
        ('Phase 2: Limited Beta (Days 11–28)',
         'Deploy to production Azure AI Foundry project. Route to 10–30 selected internal users. Review Application Insights traces daily — identify top 5 failure patterns. Iterate on prompt templates and retrieval configuration. Do not expand user base until failure rate is below 8%.',
         '10–30 beta users, daily trace review, failure rate <8% before expanding.'),
        ('Phase 3: Canary Rollout (Days 29–42)',
         'Route 10–20% of production traffic via Azure API Management weighted routing policy. Monitor groundedness rate, latency, error rate in real time via Azure Monitor dashboards. Set automated alerts: groundedness <70% triggers review; error rate >3% triggers rollback. Keep manual process running in parallel.',
         '10–20% traffic via APIM. Automated rollback threshold defined and tested.'),
        ('Phase 4: Full Production (Day 43+)',
         'Ramp to 100% traffic. Establish weekly evaluation runs using Prompt Flow evaluation flows on a held-out query set. Schedule monthly prompt and index updates. Review Application Insights token consumption and latency trends weekly.',
         'Weekly evaluation runs. Monthly optimisation cycle. Monitoring dashboards live.'),
    ]:
        story.append(KeepTogether([
            Paragraph(f'<b>{phase_title}</b>', S['h3']),
            Paragraph(desc, S['body']),
            callout(f'<b>Gate:</b> {gate}', S, bg=colors.HexColor("#E3F2FD"), border=AZURE),
            Spacer(1, 3*mm),
        ]))
    story.append(PageBreak())

    # Ch 8 - Checklist
    story.append(Paragraph('08 / Checklist', S['label']))
    story.append(Paragraph('Architecture Decision Checklist', S['h1']))
    story.append(divider(AZURE))
    decisions = [
        ('Model selection', 'GPT-4o vs GPT-4o-mini vs Phi-3 vs Llama? Based on latency, cost, and accuracy requirements.'),
        ('Orchestration layer', 'Prompt Flow (LLMOps-first) vs Semantic Kernel (code-first) vs Copilot Studio (M365)?'),
        ('RAG configuration', 'Chunk size, overlap, semantic ranking, hybrid retrieval weights — tested against sample queries?'),
        ('Embedding model', 'text-embedding-3-large (quality) vs text-embedding-3-small (cost)?'),
        ('Data freshness', 'Indexer schedule defined. Push API configured for real-time updates (if needed)?'),
        ('Security trimming', 'Document-level ACLs configured in Azure AI Search for sensitive content?'),
        ('Identity', 'User-assigned Managed Identity configured for all resource connections?'),
        ('Network isolation', 'Private Endpoints for Azure OpenAI and Azure AI Search (production)?'),
        ('CMK', 'Customer-Managed Keys configured (if required by compliance framework)?'),
        ('Content safety', 'Azure AI Content Safety thresholds set. Groundedness detection enabled?'),
        ('Monitoring', 'App Insights tracing live. Azure Monitor dashboards configured. Alerts set?'),
        ('Evaluation', 'Prompt Flow evaluation flow built. CI/CD evaluation gate in place?'),
    ]
    hdr2 = Table([['#', 'Decision', 'Your Answer']], colWidths=[10*mm, 80*mm, 75*mm])
    hdr2.setStyle(TableStyle([
        ('BACKGROUND', (0,0),(-1,-1), NAVY),
        ('TEXTCOLOR',  (0,0),(-1,-1), WHITE),
        ('FONTNAME',   (0,0),(-1,-1), 'Helvetica-Bold'),
        ('FONTSIZE',   (0,0),(-1,-1), 8),
        ('TOPPADDING', (0,0),(-1,-1), 5),
        ('BOTTOMPADDING',(0,0),(-1,-1), 5),
        ('LEFTPADDING',(0,0),(-1,-1), 5),
    ]))
    story.append(hdr2)
    for i, (dec, ctx) in enumerate(decisions, 1):
        rs = ParagraphStyle('rd', fontName='Helvetica', fontSize=8.5, leading=12)
        cs = ParagraphStyle('rc', fontName='Helvetica', fontSize=7.5, textColor=GRAY, leading=11)
        row = Table([[
            Paragraph(str(i), ParagraphStyle('ri', fontName='Helvetica-Bold', fontSize=9,
                textColor=AZURE, leading=12, alignment=TA_CENTER)),
            [Paragraph(dec, rs), Paragraph(ctx, cs)],
            Paragraph('', rs)
        ]], colWidths=[10*mm, 80*mm, 75*mm])
        row.setStyle(TableStyle([
            ('BACKGROUND', (0,0),(-1,-1), WHITE if i%2 else LGRAY),
            ('LINEBELOW',  (0,0),(-1,-1), 0.25, MGRAY),
            ('TOPPADDING', (0,0),(-1,-1), 6),
            ('BOTTOMPADDING',(0,0),(-1,-1), 6),
            ('VALIGN',     (0,0),(-1,-1), 'TOP'),
            ('LEFTPADDING',(0,0),(-1,-1), 5),
            ('LINEBEFORE', (2,0),(2,-1),  0.5, MGRAY),
        ]))
        story.append(row)
    story.append(Spacer(1, 6*mm))
    story.append(callout(
        '<b>Need help completing this checklist?</b> Kovil AI runs a 2-week Azure AI Foundry '
        'Strategy & Readiness engagement that works through every architecture decision and '
        'produces a written blueprint. Contact us at kovil.ai.',
        S, bg=colors.HexColor("#E3F2FD"), border=AZURE))

    build_doc(path, story, make_page_fn('Azure AI Foundry Architecture Whitepaper', AZURE))


# =============================================================================
# 5 & 6. VERTEX AI PDFs — delegate to existing logic with logo added
# =============================================================================
def vertex_readiness(path, S):
    """Vertex AI Readiness Guide — re-run with logo."""
    from generate_vertex_pdfs import build_readiness_guide as _orig
    # Patch the page_fn to use our logo-bearing version
    import generate_vertex_pdfs as vx
    vx_page_fn = make_page_fn('Vertex AI Readiness Guide', GCP_BLUE)
    story_s = make_styles()
    _orig(path, story_s)  # generates with text header; we'll re-run with logo below

def vertex_whitepaper(path, S):
    from generate_vertex_pdfs import build_architecture_whitepaper as _orig
    import generate_vertex_pdfs as vx
    _orig(path, make_styles())


# =============================================================================
# MAIN
# =============================================================================
if __name__ == '__main__':
    S = make_styles()
    os.makedirs(PUBLIC, exist_ok=True)

    print("Generating all Kovil AI resource PDFs...")

    agentforce_readiness(os.path.join(PUBLIC, 'agentforce-readiness-guide.pdf'), S)
    agentforce_whitepaper(os.path.join(PUBLIC, 'agentforce-implementation-whitepaper.pdf'), S)
    azure_readiness(os.path.join(PUBLIC, 'azure-ai-foundry-readiness-guide.pdf'), S)
    azure_whitepaper(os.path.join(PUBLIC, 'azure-ai-foundry-architecture-whitepaper.pdf'), S)

    print("\nAll 4 PDFs generated.")
