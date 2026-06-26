"""Generate Vertex AI resource PDFs for public/ directory."""

from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.utils import ImageReader
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, HRFlowable, KeepTogether, Image as RLImage
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT
import os

# ── Brand colours ─────────────────────────────────────────────────────────────
ORANGE  = colors.HexColor("#FF4F00")
NAVY    = colors.HexColor("#05080D")
DARK    = colors.HexColor("#1E293B")
GRAY    = colors.HexColor("#64748B")
LGRAY   = colors.HexColor("#F1F5F9")
MGRAY   = colors.HexColor("#CBD5E1")
GCP_BLUE= colors.HexColor("#4285F4")
WHITE   = colors.white

OUTPUT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "public"))
LOGO_PATH  = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "public", "kovil-logo-dark.png"))

# ── Styles ────────────────────────────────────────────────────────────────────
def make_styles():
    base = getSampleStyleSheet()
    s = {}
    s['h1'] = ParagraphStyle('h1', fontName='Helvetica-Bold', fontSize=26,
        textColor=NAVY, leading=32, spaceBefore=0, spaceAfter=8)
    s['h2'] = ParagraphStyle('h2', fontName='Helvetica-Bold', fontSize=16,
        textColor=NAVY, leading=20, spaceBefore=18, spaceAfter=6)
    s['h3'] = ParagraphStyle('h3', fontName='Helvetica-Bold', fontSize=12,
        textColor=DARK, leading=16, spaceBefore=12, spaceAfter=4)
    s['body'] = ParagraphStyle('body', fontName='Helvetica', fontSize=9.5,
        textColor=DARK, leading=15, spaceBefore=0, spaceAfter=8)
    s['small'] = ParagraphStyle('small', fontName='Helvetica', fontSize=8,
        textColor=GRAY, leading=12, spaceBefore=0, spaceAfter=4)
    s['label'] = ParagraphStyle('label', fontName='Helvetica-Bold', fontSize=7.5,
        textColor=ORANGE, leading=10, spaceBefore=6, spaceAfter=2,
        wordWrap='CJK')
    s['center'] = ParagraphStyle('center', fontName='Helvetica', fontSize=10,
        textColor=GRAY, leading=14, alignment=TA_CENTER)
    s['subtitle'] = ParagraphStyle('subtitle', fontName='Helvetica', fontSize=12,
        textColor=GRAY, leading=18, spaceBefore=4, spaceAfter=16)
    s['callout'] = ParagraphStyle('callout', fontName='Helvetica', fontSize=9,
        textColor=DARK, leading=14, leftIndent=10, spaceBefore=4, spaceAfter=4)
    s['toc'] = ParagraphStyle('toc', fontName='Helvetica', fontSize=9.5,
        textColor=DARK, leading=16, leftIndent=8)
    s['toc_n'] = ParagraphStyle('toc_n', fontName='Helvetica-Bold', fontSize=9.5,
        textColor=ORANGE, leading=16)
    return s

# ── Page template with header/footer (real logo image) ───────────────────────
def make_page_fn(title, doc_type=None, total_est=None):
    logo_reader = ImageReader(LOGO_PATH)
    logo_w_px, logo_h_px = logo_reader.getSize()
    logo_h = 6.5 * mm
    logo_w = (logo_w_px / logo_h_px) * logo_h

    def page_fn(canv, doc):
        canv.saveState()
        w, h = A4
        # White header strip
        canv.setFillColor(WHITE)
        canv.rect(0, h - 13*mm, w, 13*mm, fill=1, stroke=0)
        # GCP-blue accent rule beneath header
        canv.setFillColor(GCP_BLUE)
        canv.rect(0, h - 13*mm, w, 0.8*mm, fill=1, stroke=0)
        # Logo image
        canv.drawImage(logo_reader,
                       15*mm, h - 13*mm + (13*mm - logo_h) / 2,
                       width=logo_w, height=logo_h, mask='auto')
        # Document title (right-aligned)
        canv.setFont('Helvetica', 6.5)
        canv.setFillColor(GRAY)
        canv.drawRightString(w - 15*mm, h - 13*mm + 13*mm / 2 - 2, title.upper())
        # Footer
        canv.setFillColor(NAVY)
        canv.rect(0, 0, w, 10*mm, fill=1, stroke=0)
        canv.setFont('Helvetica', 7)
        canv.setFillColor(WHITE)
        canv.drawString(15*mm, 3.5*mm, 'kovil.ai  ·  info@kovil.ai  ·  Confidential')
        canv.drawRightString(w - 15*mm, 3.5*mm, f'Page {doc.page}')
        canv.restoreState()
    return page_fn

def divider(color=MGRAY, thickness=0.5):
    return HRFlowable(width='100%', thickness=thickness, color=color, spaceAfter=6, spaceBefore=6)

def callout_box(text, S, bg=None, border_color=None):
    bg = bg or colors.HexColor("#FFF5F0")
    border_color = border_color or ORANGE
    data = [[Paragraph(text, S['callout'])]]
    t = Table(data, colWidths=[165*mm])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), bg),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('LINEAFTER', (0,0), (0,-1), 0, colors.white),
        ('LINEBEFORE', (0,0), (0,-1), 3, border_color),
        ('ROUNDEDCORNERS', [4]),
    ]))
    return t

def score_row(label, q1, q2, q3, S):
    header_style = ParagraphStyle('sh', fontName='Helvetica-Bold', fontSize=8,
        textColor=WHITE, leading=10, alignment=TA_CENTER)
    row_style = ParagraphStyle('sr', fontName='Helvetica', fontSize=8.5,
        textColor=DARK, leading=12)
    check_style = ParagraphStyle('sc', fontName='Helvetica', fontSize=9,
        textColor=GRAY, leading=12, alignment=TA_CENTER)
    data = [
        [Paragraph(label, row_style),
         Paragraph('☐', check_style), Paragraph('☐', check_style), Paragraph('☐', check_style)]
    ]
    t = Table(data, colWidths=[100*mm, 20*mm, 20*mm, 20*mm])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.white),
        ('LINEBELOW', (0,0), (-1,-1), 0.3, MGRAY),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 4),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
    ]))
    return t

# ═════════════════════════════════════════════════════════════════════════════
# DOCUMENT 1 — Vertex AI Readiness Guide
# ═════════════════════════════════════════════════════════════════════════════

def build_readiness_guide(path, S):
    doc = SimpleDocTemplate(
        path, pagesize=A4,
        leftMargin=15*mm, rightMargin=15*mm,
        topMargin=18*mm, bottomMargin=18*mm,
    )
    story = []

    # ── COVER ──────────────────────────────────────────────────────────────
    # Logo: explicit h=14mm, w computed from PIL aspect ratio (559×186 → 42mm)
    _logo_img = RLImage(LOGO_PATH, width=42*mm, height=14*mm)
    _logo_img.hAlign = 'LEFT'
    story.append(_logo_img)
    story.append(Spacer(1, 20*mm))
    story.append(Paragraph('EBOOK  ·  26 PAGES  ·  FREE DOWNLOAD', ParagraphStyle(
        'tag', fontName='Helvetica-Bold', fontSize=7.5, textColor=GCP_BLUE,
        leading=10, spaceAfter=8)))
    story.append(Paragraph('The Vertex AI<br/>Readiness Guide', ParagraphStyle(
        'cover_h1', fontName='Helvetica-Bold', fontSize=34,
        textColor=NAVY, leading=42, spaceAfter=12)))
    story.append(Paragraph(
        'Is your organisation ready to build AI agents on Google Cloud? '
        'This guide covers the 5 readiness pillars — GCP environment, data estate, '
        'use case prioritisation, security posture, and team capability — with a '
        'self-assessment scorecard and Vertex AI stack selection framework.',
        ParagraphStyle('cover_sub', fontName='Helvetica', fontSize=13,
            textColor=GRAY, leading=20, spaceAfter=20)))

    # Pill badges
    pills_data = [['GCP', 'Vertex AI', 'Gemini', 'Agent Builder', 'Enterprise AI']]
    pills = Table(pills_data, colWidths=[22*mm, 26*mm, 22*mm, 30*mm, 30*mm])
    pills.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), LGRAY),
        ('TEXTCOLOR', (0,0), (-1,-1), DARK),
        ('FONTNAME', (0,0), (-1,-1), 'Helvetica-Bold'),
        ('FONTSIZE', (0,0), (-1,-1), 7),
        ('ALIGN', (0,0), (-1,-1), 'CENTER'),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('ROUNDEDCORNERS', [10]),
    ]))
    story.append(pills)
    story.append(Spacer(1, 55*mm))
    story.append(divider(GCP_BLUE, 1.5))
    story.append(Spacer(1, 4*mm))
    story.append(Paragraph('Produced by <b>Kovil AI Engineering Team</b>  ·  kovil.ai  ·  June 2026',
        S['small']))
    story.append(PageBreak())

    # ── TABLE OF CONTENTS ──────────────────────────────────────────────────
    story.append(Spacer(1, 4*mm))
    story.append(Paragraph('Contents', S['h1']))
    story.append(divider(ORANGE))
    story.append(Spacer(1, 4*mm))

    toc_items = [
        ('01', 'Introduction: The Vertex AI Opportunity', '3'),
        ('02', 'Pillar 1 — GCP Environment Readiness', '5'),
        ('03', 'Pillar 2 — Data Estate Assessment', '8'),
        ('04', 'Pillar 3 — Use Case Prioritisation', '11'),
        ('05', 'Pillar 4 — Security Posture', '14'),
        ('06', 'Pillar 5 — Team Capability', '17'),
        ('07', 'Self-Assessment Scorecard', '20'),
        ('08', 'Vertex AI Stack Selection Framework', '23'),
        ('09', 'Next Steps with Kovil AI', '25'),
    ]
    for n, title, pg in toc_items:
        data = [[
            Paragraph(n, ParagraphStyle('tn', fontName='Helvetica-Bold', fontSize=9.5,
                textColor=ORANGE, leading=14)),
            Paragraph(title, S['toc']),
            Paragraph(pg, ParagraphStyle('tp', fontName='Helvetica', fontSize=9.5,
                textColor=GRAY, leading=14, alignment=TA_RIGHT)),
        ]]
        t = Table(data, colWidths=[14*mm, 138*mm, 13*mm])
        t.setStyle(TableStyle([
            ('LINEBELOW', (0,0), (-1,-1), 0.25, MGRAY),
            ('TOPPADDING', (0,0), (-1,-1), 6),
            ('BOTTOMPADDING', (0,0), (-1,-1), 6),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
        ]))
        story.append(t)

    story.append(PageBreak())

    # ── CHAPTER 1: INTRODUCTION ───────────────────────────────────────────
    story.append(Paragraph('01 / Introduction', S['label']))
    story.append(Paragraph('The Vertex AI Opportunity', S['h1']))
    story.append(divider(ORANGE))
    story.append(Paragraph(
        'Google Cloud Vertex AI is the enterprise platform for building, deploying, and scaling '
        'AI agents in production. It brings together 150+ foundation models through Model Garden '
        '(including Gemini 2.0 Flash, Gemini 2.0 Pro, Claude 3.5 via Model Garden, and Llama 3.3), '
        'Vertex AI Agent Builder for managed agent creation, Reasoning Engine for complex '
        'multi-step orchestration, Vertex AI Search for enterprise RAG, BigQuery ML for '
        'data-native modelling, and Document AI for structured extraction.',
        S['body']))
    story.append(Paragraph(
        'Unlike the Gemini API — designed for prototyping and consumer use cases — Vertex AI '
        'adds the enterprise controls organisations require: VPC Service Controls for network '
        'isolation, IAM and CMEK for data governance, audit logs for compliance, and Vertex AI '
        'Pipelines for MLOps. For any production enterprise deployment, Vertex AI is the correct '
        'choice.',
        S['body']))
    story.append(callout_box(
        '<b>Who this guide is for:</b> CTOs, engineering leads, and AI programme managers '
        'evaluating whether their organisation is ready to build production AI agents on GCP. '
        'Complete the scorecard in Chapter 7 to get your readiness score.',
        S))
    story.append(Spacer(1, 4*mm))
    story.append(Paragraph('The 5 Readiness Pillars', S['h2']))
    story.append(Paragraph(
        'Kovil AI has identified five pillars that determine whether an organisation can '
        'successfully build and sustain production Vertex AI agents. This guide walks through '
        'each pillar, provides diagnostic questions, and concludes with a self-assessment '
        'scorecard and stack selection framework.',
        S['body']))

    pillars = [
        ('01', 'GCP Environment', 'Is your GCP project configured with the right APIs, IAM, and networking baseline to host Vertex AI workloads?'),
        ('02', 'Data Estate', 'Is your data in GCP, clean, structured, and accessible to AI agents at query time?'),
        ('03', 'Use Case Prioritisation', 'Have you identified the highest-ROI AI agent use case to pilot — and do you have a clear success metric?'),
        ('04', 'Security Posture', 'Are VPC Service Controls, CMEK, IAM, and audit logging configured to meet your compliance requirements?'),
        ('05', 'Team Capability', 'Does your team have the GCP skills, agent architecture knowledge, and MLOps practices to build and sustain this?'),
    ]
    for n, title, desc in pillars:
        data = [[
            Paragraph(n, ParagraphStyle('pn', fontName='Helvetica-Bold', fontSize=14,
                textColor=ORANGE, leading=18, alignment=TA_CENTER)),
            [Paragraph(title, S['h3']), Paragraph(desc, S['small'])]
        ]]
        t = Table(data, colWidths=[16*mm, 149*mm])
        t.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('LINEBELOW', (0,0), (-1,-1), 0.25, MGRAY),
            ('TOPPADDING', (0,0), (-1,-1), 8),
            ('BOTTOMPADDING', (0,0), (-1,-1), 8),
            ('LEFTPADDING', (1,0), (1,-1), 12),
        ]))
        story.append(t)

    story.append(PageBreak())

    # ── CHAPTER 2: GCP ENVIRONMENT ────────────────────────────────────────
    story.append(Paragraph('02 / Pillar 1', S['label']))
    story.append(Paragraph('GCP Environment Readiness', S['h1']))
    story.append(divider(ORANGE))
    story.append(Paragraph(
        'Before any Vertex AI workload can run in production, your GCP environment must be '
        'correctly configured. Environment readiness is the most common bottleneck we '
        'encounter — organisations underestimate the configuration work required to go from '
        '"we have a GCP account" to "we can run a production AI agent."',
        S['body']))
    story.append(Paragraph('What environment readiness covers', S['h2']))
    env_items = [
        ('GCP Project Structure', 'Separate projects for dev, staging, and production. Vertex AI workloads should not share a project with other GCP services in production — this affects billing isolation, IAM scope, and quota management.'),
        ('API Enablement', 'Vertex AI API, Vertex AI Agent Builder API, Vertex AI Search API, BigQuery API, Cloud Storage API, Secret Manager API, and Cloud Logging API must all be enabled. Missing API enablement is the single most common early blocker.'),
        ('IAM Configuration', 'Service accounts for Vertex AI workloads need the correct minimum-privilege roles: Vertex AI User, BigQuery Data Viewer, Storage Object Viewer, and Secret Accessor. Over-permissioning is a security risk; under-permissioning causes runtime failures.'),
        ('Networking Baseline', 'VPC configuration for Vertex AI workloads — including Private Google Access for Cloud NAT, firewall rules for Vertex AI endpoint access, and (for regulated industries) VPC Service Controls perimeter setup.'),
        ('Quota Configuration', 'Vertex AI has per-region quotas on model requests per minute and concurrent prediction requests. Production workloads require quota increase requests submitted 1–2 weeks before go-live.'),
        ('Region Selection', 'Choose your primary region before any deployment. Vertex AI has regional model availability variations — not all models are available in all regions. Data residency requirements (GDPR, HIPAA) must be satisfied at the region level.'),
    ]
    for title, desc in env_items:
        story.append(KeepTogether([
            Paragraph(f'<b>{title}</b>', S['body']),
            Paragraph(desc, S['body']),
        ]))
    story.append(callout_box(
        '<b>Kovil AI environment audit:</b> Our Strategy & Readiness engagement includes a '
        'full GCP environment audit — reviewing project structure, IAM, networking, and quota '
        'against the Vertex AI production checklist. Most organisations have 8–15 '
        'configuration gaps before their first agent workload can run.',
        S, bg=colors.HexColor('#EBF5FB'), border_color=GCP_BLUE))
    story.append(PageBreak())

    # ── CHAPTER 3: DATA ESTATE ────────────────────────────────────────────
    story.append(Paragraph('03 / Pillar 2', S['label']))
    story.append(Paragraph('Data Estate Assessment', S['h1']))
    story.append(divider(ORANGE))
    story.append(Paragraph(
        'AI agents are only as good as the data they reason over. Data estate readiness '
        'determines whether your agents will answer accurately and whether they can be '
        'grounded in authoritative, up-to-date information. This pillar is where most '
        'organisation underestimate the work required.',
        S['body']))
    story.append(Paragraph('The data readiness dimensions', S['h2']))

    data_dims = [
        ('Data Location', 'Is your data already in GCP? Vertex AI Search can index data from Cloud Storage, BigQuery, Cloud SQL, and website content. Data that lives in on-premise systems, AWS S3, or Azure Blob Storage requires migration or connector setup before agents can access it.'),
        ('Data Quality', 'Agent accuracy is directly correlated with data quality. Incomplete records, inconsistent field formats, duplicated entries, and stale data degrade agent performance in ways that are difficult to debug post-deployment. A data quality audit before agent build is strongly recommended.'),
        ('Data Structure', 'Structured data (BigQuery tables with clear schemas) is the easiest to ground agents in. Semi-structured (JSON, XML in GCS) requires parsing configuration. Unstructured (PDFs, Word docs, email) requires chunking and embedding strategy — which Vertex AI Search handles, but with configuration choices that significantly affect retrieval quality.'),
        ('Data Freshness', 'How frequently does your data change, and how quickly must agents reflect those changes? Vertex AI Search supports scheduled re-indexing and real-time updates via the data ingestion API. Your freshness requirements determine the indexing architecture.'),
        ('Data Access Control', 'In regulated industries, agents must only surface information the querying user is authorised to see. Vertex AI Search supports access control lists (ACLs) that map to IAM identities — but this must be configured deliberately. An agent without access control will happily surface restricted data to any user.'),
    ]
    for title, desc in data_dims:
        story.append(KeepTogether([
            Paragraph(f'<b>{title}</b>', S['body']),
            Paragraph(desc, S['body']),
        ]))

    story.append(Paragraph('BigQuery as the data backbone', S['h2']))
    story.append(Paragraph(
        'Organisations with data already in BigQuery are in the strongest position for Vertex AI '
        'agent builds. BigQuery ML allows ML models to run directly against the data warehouse '
        '— no data movement, no ETL, no latency from API calls to an external ML service. '
        'Gemini in BigQuery (BQML integration) allows SQL queries to invoke Gemini for '
        'summarisation, classification, and entity extraction inline with analytics queries.',
        S['body']))
    story.append(PageBreak())

    # ── CHAPTER 4: USE CASE PRIORITISATION ───────────────────────────────
    story.append(Paragraph('04 / Pillar 3', S['label']))
    story.append(Paragraph('Use Case Prioritisation', S['h1']))
    story.append(divider(ORANGE))
    story.append(Paragraph(
        'The most common mistake in enterprise AI programmes is starting with the most '
        'technically interesting use case rather than the highest-ROI use case. '
        'Vertex AI agents are expensive to build correctly — scoping the first use case '
        'well is the difference between a programme that generates demonstrable value in '
        'three months and one that produces a proof of concept that never reaches production.',
        S['body']))

    story.append(Paragraph('The use case selection framework', S['h2']))
    matrix = [
        ['Dimension', 'High Score (3)', 'Medium Score (2)', 'Low Score (1)'],
        ['Data readiness', 'Data in GCS/BQ, clean, updated daily', 'Data in GCP, needs cleaning', 'Data outside GCP or poor quality'],
        ['Query volume', '>5,000 queries/month on this use case', '500–5,000/month', '<500/month'],
        ['Resolution clarity', 'Clear right/wrong answer (FAQ, lookup)', 'Semi-structured decision', 'Open-ended judgement call'],
        ['Labour cost', 'High-cost manual process (>$200k/year)', 'Moderate cost ($50k–$200k)', 'Low-cost process (<$50k)'],
        ['Risk tolerance', 'Low-risk, reversible actions', 'Medium risk with human review', 'High-risk or irreversible actions'],
        ['Stakeholder buy-in', 'Executive sponsor identified', 'Department-level support', 'No clear owner'],
    ]
    col_widths = [40*mm, 43*mm, 43*mm, 39*mm]
    t = Table(matrix, colWidths=col_widths, repeatRows=1)
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), NAVY),
        ('TEXTCOLOR', (0,0), (-1,0), WHITE),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('FONTSIZE', (0,0), (-1,-1), 8),
        ('FONTNAME', (0,0), (0,-1), 'Helvetica-Bold'),
        ('FONTSIZE', (0,0), (0,-1), 8),
        ('BACKGROUND', (0,1), (-1,-1), colors.white),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, LGRAY]),
        ('GRID', (0,0), (-1,-1), 0.25, MGRAY),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('LEFTPADDING', (0,0), (-1,-1), 5),
        ('ALIGN', (0,0), (-1,0), 'CENTER'),
    ]))
    story.append(t)
    story.append(Spacer(1, 4*mm))
    story.append(Paragraph(
        'Score each candidate use case across these six dimensions. '
        'Use cases scoring 14+ are strong candidates for your first pilot. '
        'Use cases scoring under 10 should be deferred until data and infrastructure are ready.',
        S['small']))
    story.append(PageBreak())

    # ── CHAPTER 5: SECURITY POSTURE ───────────────────────────────────────
    story.append(Paragraph('05 / Pillar 4', S['label']))
    story.append(Paragraph('Security Posture', S['h1']))
    story.append(divider(ORANGE))
    story.append(Paragraph(
        'Enterprise AI on GCP requires a deliberate security configuration. The good news: '
        'Google Cloud Vertex AI provides more enterprise security controls than any other '
        'AI platform — VPC Service Controls, IAM, CMEK, audit logging, and data residency '
        'guarantees. The risk: those controls only protect you if they are configured correctly.',
        S['body']))

    sec_items = [
        ('VPC Service Controls', 'VPC Service Controls create a security perimeter around your Vertex AI workloads, preventing data exfiltration by restricting which services can communicate with Vertex AI APIs. This is a hard requirement for HIPAA, PCI-DSS, and SOC 2 Type II deployments. Configuration is non-trivial — incorrect perimeter rules break agent functionality in ways that are difficult to debug.'),
        ('Customer-Managed Encryption Keys (CMEK)', 'By default, Google encrypts Vertex AI data at rest with Google-managed keys. CMEK allows you to use your own Cloud KMS keys — a requirement for many regulated industries and a strong preference for organisations with sensitive IP in their training data or agent prompts.'),
        ('IAM Least Privilege', 'Vertex AI service accounts should follow least-privilege: only the specific roles required for the workload, scoped to the specific project. The common mistake is using owner-level service accounts during development and carrying that into production. We audit IAM configuration as part of every pre-launch review.'),
        ('Audit Logging', 'Cloud Audit Logs for Vertex AI captures all API calls — model invocations, data access, configuration changes. For compliance, audit logs must be enabled, retained for the required period, and exported to a SIEM. This is often configured after the fact — it should be configured before the first production request.'),
        ('Data Residency', 'Vertex AI allows you to specify the region where data is processed and stored. GDPR Article 44 requirements and data sovereignty laws (UK, EU, India, Australia) must be satisfied at the region level. Choosing the wrong region at build time means a migration later.'),
        ('Einstein Trust Layer equivalent', 'Vertex AI does not have a branded safety layer like Salesforce, but provides equivalent controls: Responsible AI safety filters, custom model safety thresholds, output monitoring, and the ability to run PII detection (via DLP API) on all agent inputs and outputs before logging.'),
    ]
    for title, desc in sec_items:
        story.append(KeepTogether([
            Paragraph(f'<b>{title}</b>', S['body']),
            Paragraph(desc, S['body']),
        ]))
    story.append(PageBreak())

    # ── CHAPTER 6: TEAM CAPABILITY ────────────────────────────────────────
    story.append(Paragraph('06 / Pillar 5', S['label']))
    story.append(Paragraph('Team Capability', S['h1']))
    story.append(divider(ORANGE))
    story.append(Paragraph(
        'Building production Vertex AI agents requires a specific combination of skills that '
        'most organisations do not have in-house — and that is not a criticism. The Vertex AI '
        'stack is 18 months old in its current form; there is no large pool of engineers '
        'with 3+ years of Vertex AI Agent Builder and Reasoning Engine experience. '
        'Understanding your team gaps honestly is the fastest path to a successful build.',
        S['body']))

    story.append(Paragraph('Skills required for production Vertex AI agents', S['h2']))
    skills = [
        ('GCP Platform Engineering', 'VPC, IAM, Cloud KMS, Secret Manager, Cloud Logging, Cloud Run, GKE — the GCP platform skills that form the foundation every Vertex AI deployment runs on.', 'Required'),
        ('Vertex AI SDK & APIs', 'Python SDK for Vertex AI, Agent Builder API, Reasoning Engine SDK, Vertex AI Search API, BigQuery ML SQL extensions.', 'Required'),
        ('LLM Prompt Engineering', 'System prompt design, few-shot examples, grounding instruction, persona definition, safety instruction — the engineering of agent behaviour through prompts.', 'Required'),
        ('Agent Orchestration', 'Reasoning Engine deployment, LangChain / LlamaIndex integration, multi-step tool calling, memory management, session handling.', 'Required for complex agents'),
        ('BigQuery ML', 'SQL-based ML model creation, BQML model types (logistic regression, boosted trees, time series), Gemini in BigQuery integration.', 'Required for data-intensive agents'),
        ('MLOps', 'Vertex AI Pipelines, Model Monitoring, Explainable AI, automated retraining triggers, canary deployment.', 'Required for sustainable operations'),
        ('RAG Architecture', 'Chunking strategy, embedding model selection, hybrid retrieval tuning, re-ranking, hallucination guardrails, retrieval evaluation.', 'Required for knowledge-grounded agents'),
    ]
    for skill, desc, req in skills:
        data = [[
            Paragraph(f'<b>{skill}</b><br/><font color="#64748B" size="8">{desc}</font>',
                ParagraphStyle('sk', fontName='Helvetica', fontSize=9, leading=13)),
            Paragraph(req, ParagraphStyle('sr', fontName='Helvetica-Bold', fontSize=8,
                textColor=ORANGE if req == 'Required' else GRAY,
                leading=12, alignment=TA_CENTER))
        ]]
        t = Table(data, colWidths=[138*mm, 27*mm])
        t.setStyle(TableStyle([
            ('LINEBELOW', (0,0), (-1,-1), 0.25, MGRAY),
            ('TOPPADDING', (0,0), (-1,-1), 6),
            ('BOTTOMPADDING', (0,0), (-1,-1), 6),
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ]))
        story.append(t)
    story.append(PageBreak())

    # ── CHAPTER 7: SCORECARD ──────────────────────────────────────────────
    story.append(Paragraph('07 / Self-Assessment', S['label']))
    story.append(Paragraph('Readiness Scorecard', S['h1']))
    story.append(divider(ORANGE))
    story.append(Paragraph(
        'Complete this scorecard honestly before your Vertex AI programme kickoff. '
        'For each statement, tick: ✓ Fully in place  /  ~ Partially in place  /  ✗ Not yet.',
        S['body']))

    scorecard_sections = [
        ('GCP Environment', [
            'We have separate GCP projects for dev, staging, and production.',
            'All required Vertex AI APIs are enabled in our production project.',
            'IAM service accounts for AI workloads follow least-privilege principles.',
            'Our VPC is configured with Private Google Access enabled.',
            'We have submitted quota increase requests for Vertex AI endpoints.',
            'Our primary region is selected and satisfies data residency requirements.',
        ]),
        ('Data Estate', [
            'The data our agents will reason over is stored in GCS or BigQuery.',
            'We have run a data quality audit on the target data sources.',
            'We understand the freshness requirements and have an indexing schedule.',
            'Access control lists are in place for sensitive data in Vertex AI Search.',
            'We have a data governance policy that covers AI agent data access.',
        ]),
        ('Use Case', [
            'We have identified and agreed our highest-ROI pilot use case.',
            'We have defined a measurable success metric for the pilot.',
            'The use case involves data that is ready for agent access today.',
            'We have executive-level sponsorship for the AI programme.',
            'We have completed the use case scoring framework in Chapter 4.',
        ]),
        ('Security', [
            'VPC Service Controls perimeter is configured for Vertex AI.',
            'CMEK is enabled or evaluated for our data classification requirements.',
            'Cloud Audit Logs for Vertex AI are enabled and exported to SIEM.',
            'We have completed a threat model for our AI agent architecture.',
        ]),
        ('Team', [
            'At least one team member has GCP Professional ML Engineer certification.',
            'We have Python SDK experience on the team (or a partner engaged).',
            'We have a plan for ongoing agent monitoring and optimisation post-launch.',
            'We have engaged or evaluated a Vertex AI implementation partner.',
        ]),
    ]

    # Header row
    hdr_data = [['Statement', '✓', '~', '✗']]
    hdr_style = ParagraphStyle('hh', fontName='Helvetica-Bold', fontSize=8, textColor=WHITE)
    hdr = Table(hdr_data, colWidths=[120*mm, 16*mm, 16*mm, 13*mm])
    hdr.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), NAVY),
        ('TEXTCOLOR', (0,0), (-1,-1), WHITE),
        ('FONTNAME', (0,0), (-1,-1), 'Helvetica-Bold'),
        ('FONTSIZE', (0,0), (-1,-1), 8),
        ('ALIGN', (1,0), (-1,-1), 'CENTER'),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
    ]))
    story.append(hdr)

    for section_title, items in scorecard_sections:
        # Section header
        sec_data = [[Paragraph(section_title, ParagraphStyle('sh2', fontName='Helvetica-Bold',
            fontSize=8.5, textColor=ORANGE, leading=12))]]
        sec = Table(sec_data, colWidths=[165*mm])
        sec.setStyle(TableStyle([
            ('BACKGROUND', (0,0), (-1,-1), LGRAY),
            ('TOPPADDING', (0,0), (-1,-1), 5),
            ('BOTTOMPADDING', (0,0), (-1,-1), 5),
            ('LEFTPADDING', (0,0), (-1,-1), 6),
        ]))
        story.append(sec)
        for item in items:
            story.append(score_row(item, '', '', '', S))

    story.append(Spacer(1, 5*mm))
    story.append(Paragraph('Scoring: Count your ✓ marks. 18–24: Ready to build. 10–17: Address gaps before building. Under 10: Engage a partner before starting.', S['small']))
    story.append(PageBreak())

    # ── CHAPTER 8: STACK SELECTION FRAMEWORK ─────────────────────────────
    story.append(Paragraph('08 / Framework', S['label']))
    story.append(Paragraph('Vertex AI Stack Selection Framework', S['h1']))
    story.append(divider(ORANGE))
    story.append(Paragraph(
        'The right Vertex AI stack depends on your use case, data structure, team capability, '
        'and latency requirements. This framework maps the most common agent types to the '
        'recommended Vertex AI components.',
        S['body']))

    stack_data = [
        ['Use Case Type', 'Recommended Stack', 'Avoid'],
        ['Customer-facing FAQ / service deflection',
         'Agent Builder + Vertex AI Search (RAG) + Gemini Flash',
         'Reasoning Engine (over-engineered for this pattern)'],
        ['Complex multi-step internal agent\n(e.g. SDR research, ops automation)',
         'Reasoning Engine + LangChain/LlamaIndex + Gemini Pro',
         'Agent Builder (insufficient orchestration control)'],
        ['Structured data analytics / prediction',
         'BigQuery ML + Gemini in BigQuery + Looker',
         'Vertex AI Search (wrong tool for structured data)'],
        ['Document processing & extraction',
         'Document AI + Vertex AI Search + Gemini Vision',
         'BigQuery ML (wrong tool for unstructured docs)'],
        ['Real-time personalisation',
         'Vertex AI Matching Engine + Bigtable + Gemini embeddings',
         'Vertex AI Search (latency too high for real-time rec)'],
        ['MLOps / model lifecycle management',
         'Vertex AI Pipelines + Model Registry + Model Monitoring',
         'Custom orchestration (re-inventing managed infrastructure)'],
    ]
    frame_t = Table(stack_data, colWidths=[45*mm, 75*mm, 45*mm], repeatRows=1)
    frame_t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), NAVY),
        ('TEXTCOLOR', (0,0), (-1,0), WHITE),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('FONTNAME', (0,0), (0,-1), 'Helvetica-Bold'),
        ('FONTSIZE', (0,0), (-1,-1), 8),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, LGRAY]),
        ('GRID', (0,0), (-1,-1), 0.25, MGRAY),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('LEFTPADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(frame_t)
    story.append(PageBreak())

    # ── CHAPTER 9: NEXT STEPS ─────────────────────────────────────────────
    story.append(Paragraph('09 / Next Steps', S['label']))
    story.append(Paragraph('Working with Kovil AI', S['h1']))
    story.append(divider(ORANGE))
    story.append(Paragraph(
        'Kovil AI is a specialist AI engineering firm that builds production Vertex AI agents '
        'for enterprise organisations. We operate fixed-price only — you pay for a working '
        'agent in production, not for hours.',
        S['body']))

    services = [
        ('Vertex AI Strategy & Readiness', '$12,000 fixed price', 'GCP environment audit, use case prioritisation, architecture blueprint, and vendor negotiation support. 2-week engagement, remote-first.'),
        ('Pilot Agent Build', '$18,000–$35,000', 'One production agent, one use case, fully configured and deployed on Vertex AI in 2–3 weeks. Includes post-launch support.'),
        ('Full Multi-Agent Programme', '$60,000–$180,000', 'Multiple agents, Reasoning Engine orchestration, Vertex AI Search RAG, BigQuery ML integration, and MLOps pipeline. 6–10 weeks.'),
    ]
    for svc, price, desc in services:
        data = [[
            Paragraph(f'<b>{svc}</b>', S['h3']),
            Paragraph(price, ParagraphStyle('pr', fontName='Helvetica-Bold', fontSize=11,
                textColor=ORANGE, leading=14, alignment=TA_RIGHT))
        ]]
        t = Table(data, colWidths=[130*mm, 35*mm])
        t.setStyle(TableStyle([
            ('TOPPADDING', (0,0), (-1,-1), 10),
            ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ]))
        story.append(t)
        story.append(Paragraph(desc, S['body']))
        story.append(divider())

    story.append(Spacer(1, 6*mm))
    story.append(callout_box(
        '<b>Book a readiness call:</b> 45-minute call with a Kovil AI engineer. We review '
        'your scorecard results, identify the top 3 gaps, and recommend a path to your '
        'first production Vertex AI agent. No cost, no obligation.\n\nkovi.ai  ·  Book at kovil.ai/engage/outcome-based-project',
        S))

    # Build
    doc.build(story, onFirstPage=make_page_fn('Vertex AI Readiness Guide', 'EBOOK'),
              onLaterPages=make_page_fn('Vertex AI Readiness Guide', 'EBOOK'))
    print(f"  OK  {path}")


# ═════════════════════════════════════════════════════════════════════════════
# DOCUMENT 2 — GCP AI Agent Architecture Whitepaper
# ═════════════════════════════════════════════════════════════════════════════

def build_architecture_whitepaper(path, S):
    doc = SimpleDocTemplate(
        path, pagesize=A4,
        leftMargin=15*mm, rightMargin=15*mm,
        topMargin=18*mm, bottomMargin=18*mm,
    )
    story = []

    # ── COVER ──────────────────────────────────────────────────────────────
    _logo_wp = RLImage(LOGO_PATH, width=42*mm, height=14*mm)
    _logo_wp.hAlign = 'LEFT'
    story.append(_logo_wp)
    story.append(Spacer(1, 20*mm))
    story.append(Paragraph('WHITEPAPER  ·  20 PAGES  ·  FREE DOWNLOAD', ParagraphStyle(
        'tag', fontName='Helvetica-Bold', fontSize=7.5, textColor=GCP_BLUE,
        leading=10, spaceAfter=8)))
    story.append(Paragraph('GCP AI Agent<br/>Architecture Whitepaper', ParagraphStyle(
        'cover_h1', fontName='Helvetica-Bold', fontSize=32,
        textColor=NAVY, leading=40, spaceAfter=12)))
    story.append(Paragraph(
        'A technical deep dive into the Vertex AI agent stack: Model Garden, '
        'Agent Builder vs Reasoning Engine, Vertex AI Search RAG pipelines, '
        'BigQuery ML integration patterns, VPC Service Controls configuration, '
        'and phased production rollout framework.',
        ParagraphStyle('cover_sub', fontName='Helvetica', fontSize=12,
            textColor=GRAY, leading=18, spaceAfter=20)))

    pills_data = [['Architecture', 'Vertex AI', 'Gemini', 'RAG', 'BigQuery ML', 'VPC']]
    pills = Table(pills_data, colWidths=[28*mm, 26*mm, 22*mm, 16*mm, 28*mm, 16*mm])
    pills.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), LGRAY),
        ('TEXTCOLOR', (0,0), (-1,-1), DARK),
        ('FONTNAME', (0,0), (-1,-1), 'Helvetica-Bold'),
        ('FONTSIZE', (0,0), (-1,-1), 7),
        ('ALIGN', (0,0), (-1,-1), 'CENTER'),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('ROUNDEDCORNERS', [10]),
    ]))
    story.append(pills)
    story.append(Spacer(1, 58*mm))
    story.append(divider(GCP_BLUE, 1.5))
    story.append(Spacer(1, 4*mm))
    story.append(Paragraph('Produced by <b>Kovil AI Engineering Team</b>  ·  kovil.ai  ·  June 2026', S['small']))
    story.append(PageBreak())

    # ── TABLE OF CONTENTS ──────────────────────────────────────────────────
    story.append(Spacer(1, 4*mm))
    story.append(Paragraph('Contents', S['h1']))
    story.append(divider(GCP_BLUE))

    toc_items = [
        ('01', 'The Vertex AI Agent Stack — Overview', '3'),
        ('02', 'Model Garden — Foundation Model Selection', '5'),
        ('03', 'Agent Builder vs Reasoning Engine', '7'),
        ('04', 'Vertex AI Search RAG Pipeline Architecture', '10'),
        ('05', 'BigQuery ML Integration Patterns', '13'),
        ('06', 'VPC Service Controls Configuration', '15'),
        ('07', 'Phased Production Rollout Framework', '17'),
        ('08', 'Architecture Decision Checklist', '19'),
    ]
    for n, title, pg in toc_items:
        data = [[
            Paragraph(n, ParagraphStyle('tn', fontName='Helvetica-Bold', fontSize=9.5,
                textColor=GCP_BLUE, leading=14)),
            Paragraph(title, S['toc']),
            Paragraph(pg, ParagraphStyle('tp', fontName='Helvetica', fontSize=9.5,
                textColor=GRAY, leading=14, alignment=TA_RIGHT)),
        ]]
        t = Table(data, colWidths=[14*mm, 138*mm, 13*mm])
        t.setStyle(TableStyle([
            ('LINEBELOW', (0,0), (-1,-1), 0.25, MGRAY),
            ('TOPPADDING', (0,0), (-1,-1), 6),
            ('BOTTOMPADDING', (0,0), (-1,-1), 6),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
        ]))
        story.append(t)
    story.append(PageBreak())

    # ── CHAPTER 1: OVERVIEW ───────────────────────────────────────────────
    story.append(Paragraph('01 / Overview', S['label']))
    story.append(Paragraph('The Vertex AI Agent Stack', S['h1']))
    story.append(divider(GCP_BLUE))
    story.append(Paragraph(
        'Google Cloud Vertex AI is not a single product — it is a layered platform of '
        'components, each with a specific role in the agent architecture. Understanding which '
        'component belongs where, and when to use each, is the core architectural decision '
        'that determines build complexity, cost, latency, and maintainability.',
        S['body']))

    stack_layers = [
        ('Foundation Models', 'Model Garden', 'The model selection layer — 150+ foundation models available as managed endpoints. Includes Gemini 2.0 Flash (speed/cost), Gemini 2.0 Pro (reasoning), Claude 3.5 (complex analysis), Llama 3.3 (open weight, controllable), and Mistral (European data residency). Model selection is the first architecture decision.'),
        ('Agent Orchestration', 'Agent Builder / Reasoning Engine', 'The agent execution layer — where agent logic, tool calling, grounding, and multi-step reasoning happen. Two options with different trade-offs: Agent Builder (managed, lower engineering effort) and Reasoning Engine (custom, higher control). Detailed comparison in Chapter 3.'),
        ('Retrieval & Grounding', 'Vertex AI Search', 'The knowledge retrieval layer — indexes your enterprise data and retrieves semantically relevant chunks to ground agent responses. Supports hybrid (keyword + vector) retrieval. The backbone of RAG architectures on GCP.'),
        ('Structured Intelligence', 'BigQuery ML', 'The structured data reasoning layer — ML models running directly in BigQuery. Integrates with Vertex AI agents for prediction tasks (churn, demand, fraud) without moving data out of the warehouse.'),
        ('Governance', 'IAM / VPC Service Controls / Cloud Audit Logs', 'The security and compliance layer — controls who can access which AI capabilities, enforces network isolation, and provides audit trails for regulatory requirements.'),
    ]
    for layer, component, desc in stack_layers:
        data = [[
            [Paragraph(layer, ParagraphStyle('ll', fontName='Helvetica-Bold', fontSize=8,
                textColor=GCP_BLUE, leading=11)),
             Paragraph(component, ParagraphStyle('lc', fontName='Helvetica-Bold', fontSize=9.5,
                textColor=NAVY, leading=13))],
            Paragraph(desc, S['small'])
        ]]
        t = Table(data, colWidths=[45*mm, 120*mm])
        t.setStyle(TableStyle([
            ('LINEBELOW', (0,0), (-1,-1), 0.25, MGRAY),
            ('TOPPADDING', (0,0), (-1,-1), 8),
            ('BOTTOMPADDING', (0,0), (-1,-1), 8),
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('LEFTPADDING', (1,0), (1,-1), 12),
        ]))
        story.append(t)
    story.append(PageBreak())

    # ── CHAPTER 2: MODEL GARDEN ───────────────────────────────────────────
    story.append(Paragraph('02 / Foundation Models', S['label']))
    story.append(Paragraph('Model Garden — Foundation Model Selection', S['h1']))
    story.append(divider(GCP_BLUE))
    story.append(Paragraph(
        'Model Garden is Vertex AI\'s managed model registry — 150+ foundation models available '
        'as API endpoints with enterprise SLAs, VPC isolation, and Vertex AI IAM controls. '
        'Selecting the right model for your use case is the most consequential architecture '
        'decision in your agent build.',
        S['body']))

    models = [
        ('Gemini 2.0 Flash', 'Best for: high-volume, latency-sensitive agents (FAQ deflection, real-time classification). ~1M token context. Lowest cost in the Gemini family. Fastest inference. Use this for any agent that needs to respond in under 2 seconds.'),
        ('Gemini 2.0 Pro', 'Best for: complex reasoning, multi-step planning, long-document analysis. Use when accuracy on complex queries matters more than speed or cost. The recommended model for Reasoning Engine-based agents.'),
        ('Claude 3.5 Sonnet (via Model Garden)', 'Best for: nuanced analysis, instruction-following, long-context document processing (200K tokens). Available via Vertex AI Model Garden in supported regions. Enterprise SLA applies. Use when Gemini Pro underperforms on specific reasoning tasks.'),
        ('Llama 3.3 70B (via Model Garden)', 'Best for: workloads requiring data sovereignty, IP control, or cost control at scale. Open-weight model — can be fine-tuned on proprietary data. Use when you need model-level customisation or when regulatory requirements prohibit third-party model APIs.'),
        ('Gemini Embedding Models', 'Best for: Vertex AI Search grounding, semantic similarity, RAG retrieval. text-embedding-004 is the current recommended embedding model for GCP RAG pipelines. Dimensionality: 768. Supports task-type specification (retrieval, classification, clustering).'),
    ]
    for model, desc in models:
        story.append(KeepTogether([
            Paragraph(f'<b>{model}</b>', S['body']),
            Paragraph(desc, S['body']),
        ]))
    story.append(PageBreak())

    # ── CHAPTER 3: AGENT BUILDER vs REASONING ENGINE ─────────────────────
    story.append(Paragraph('03 / Orchestration', S['label']))
    story.append(Paragraph('Agent Builder vs Reasoning Engine', S['h1']))
    story.append(divider(GCP_BLUE))
    story.append(Paragraph(
        'This is the most common architecture question in Vertex AI agent builds. '
        'Agent Builder and Reasoning Engine serve different agent complexity profiles — '
        'choosing the wrong one creates technical debt that is expensive to resolve post-launch.',
        S['body']))

    compare_data = [
        ['Dimension', 'Agent Builder', 'Reasoning Engine'],
        ['Engineering effort', 'Low — visual + config-driven', 'High — Python SDK, custom code'],
        ['Orchestration control', 'Managed flows, limited branching', 'Full control (LangChain, custom)'],
        ['Tool calling', 'Built-in data stores, Dialogflow CX', 'Any REST API, custom Python functions'],
        ['Memory management', 'Session-level, managed', 'Custom — Redis, Firestore, Spanner'],
        ['Multi-agent patterns', 'Not supported natively', 'Full support via orchestration code'],
        ['Latency (avg)', '800ms–2s p95', '1.2s–4s p95 (higher due to custom code)'],
        ['Recommended for', 'FAQ deflection, conversational service, simple lookup agents', 'SDR research, complex ops automation, multi-source data agents'],
        ['Go-live timeline', '1–2 weeks for first agent', '2–4 weeks for first agent'],
    ]
    comp_t = Table(compare_data, colWidths=[45*mm, 58*mm, 62*mm], repeatRows=1)
    comp_t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), NAVY),
        ('TEXTCOLOR', (0,0), (-1,0), WHITE),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('FONTNAME', (0,0), (0,-1), 'Helvetica-Bold'),
        ('FONTSIZE', (0,0), (-1,-1), 8),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, LGRAY]),
        ('GRID', (0,0), (-1,-1), 0.25, MGRAY),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('LEFTPADDING', (0,0), (-1,-1), 5),
        ('FONTNAME', (0,-1), (-1,-1), 'Helvetica-Bold'),
        ('TEXTCOLOR', (1,-1), (1,-1), colors.HexColor('#047857')),
        ('TEXTCOLOR', (2,-1), (2,-1), GCP_BLUE),
    ]))
    story.append(comp_t)
    story.append(PageBreak())

    # ── CHAPTER 4: RAG PIPELINE ───────────────────────────────────────────
    story.append(Paragraph('04 / Retrieval', S['label']))
    story.append(Paragraph('Vertex AI Search RAG Pipeline Architecture', S['h1']))
    story.append(divider(GCP_BLUE))
    story.append(Paragraph(
        'Vertex AI Search is Google Cloud\'s managed enterprise search service and the '
        'recommended retrieval layer for RAG pipelines on GCP. Understanding the pipeline '
        'architecture — from document ingestion to grounded generation — is prerequisite '
        'to configuring a production agent correctly.',
        S['body']))

    story.append(Paragraph('The RAG pipeline stages', S['h2']))
    rag_stages = [
        ('1. Data Ingestion', 'Data sources supported: Cloud Storage (GCS) for unstructured documents (PDF, HTML, DOCX, TXT), BigQuery for structured records, Cloud SQL, websites via web crawl, and custom data via the API. Each source type has different configuration — GCS is simplest, web crawl requires URL pattern configuration, custom API requires schema mapping.'),
        ('2. Chunking Strategy', 'Vertex AI Search handles chunking automatically, but the chunking configuration significantly affects retrieval quality. Default: ~500-word chunks with 50-word overlap. For technical documentation: smaller chunks (200–300 words) improve precision. For narrative documents: larger chunks (800–1000 words) improve context preservation. Test both on a sample query set before locking in a strategy.'),
        ('3. Embedding Generation', 'Vertex AI Search uses Google\'s text-embedding-004 model to generate vector representations of each chunk. These embeddings are stored in a managed vector index. You do not need to manage embedding infrastructure — this is handled by Vertex AI Search.'),
        ('4. Index Configuration', 'The search index supports three retrieval modes: keyword-only (fast, lower accuracy), vector-only (semantic, medium accuracy), and hybrid (recommended for most production deployments). Hybrid retrieval combines keyword precision with semantic recall, then applies semantic re-ranking to the merged result set.'),
        ('5. Re-ranking', 'Vertex AI Search includes a managed re-ranker that scores retrieved chunks by relevance to the query before passing them to Gemini. Re-ranking typically improves grounded response accuracy by 15–25% compared to first-pass retrieval alone. Enable it — it adds minimal latency (<100ms) and significant quality improvement.'),
        ('6. Grounded Generation', 'The top-k retrieved chunks (typically k=5–10) are injected into the Gemini prompt as grounding context. The agent is instructed to answer from the grounding context only, with citations. Hallucination rate on well-configured RAG pipelines is typically <3% on in-scope queries.'),
    ]
    for stage, desc in rag_stages:
        story.append(KeepTogether([
            Paragraph(f'<b>{stage}</b>', S['body']),
            Paragraph(desc, S['body']),
        ]))
    story.append(PageBreak())

    # ── CHAPTER 5: BIGQUERY ML ────────────────────────────────────────────
    story.append(Paragraph('05 / Data Intelligence', S['label']))
    story.append(Paragraph('BigQuery ML Integration Patterns', S['h1']))
    story.append(divider(GCP_BLUE))
    story.append(Paragraph(
        'BigQuery ML allows ML models to run directly inside BigQuery — no data movement, '
        'no separate ML infrastructure, no ETL pipeline. For Vertex AI agents that need to '
        'incorporate structured predictions (demand forecasting, churn scoring, fraud detection), '
        'BigQuery ML is the most cost-effective and lowest-latency integration pattern.',
        S['body']))

    bqml_patterns = [
        ('Pattern 1: Agent → BigQuery ML → Gemini Explanation', 'The agent calls a BigQuery ML model via a BigQuery API tool, receives the prediction (e.g. churn_score=0.87), then passes the result to Gemini to generate a plain-language explanation. Use case: sales agent explaining churn risk to a rep, combined with recommended actions.'),
        ('Pattern 2: Scheduled BQML → GCS → Vertex AI Search', 'Run BigQuery ML predictions on a schedule (e.g. daily churn scores for all accounts). Store results in GCS as structured documents. Index in Vertex AI Search. Agent retrieves current predictions via RAG. Use case: agents that need to reference predictions without triggering live BQML calls at query time.'),
        ('Pattern 3: Gemini in BigQuery (BQML Extension)', 'Use the ML.GENERATE_TEXT and ML.CLASSIFY functions in BigQuery SQL to run Gemini inline with analytics queries. Use case: content moderation at scale, entity extraction from customer feedback at rest, automated classification of BigQuery table contents. Runs as a BigQuery job — not an agent call, but can be triggered by an agent via a BigQuery API tool.'),
        ('Pattern 4: BQML Forecasting → Vertex AI Dashboard Agent', 'Train a BigQuery ML ARIMA_PLUS time-series model on historical demand data. Agent queries the model endpoint for current forecasts and surfaces them in conversational format to planners. Use case: supply chain, inventory management, revenue forecasting agents.'),
    ]
    for pattern, desc in bqml_patterns:
        story.append(KeepTogether([
            Paragraph(f'<b>{pattern}</b>', S['body']),
            Paragraph(desc, S['body']),
        ]))
    story.append(PageBreak())

    # ── CHAPTER 6: VPC SERVICE CONTROLS ──────────────────────────────────
    story.append(Paragraph('06 / Security', S['label']))
    story.append(Paragraph('VPC Service Controls Configuration', S['h1']))
    story.append(divider(GCP_BLUE))
    story.append(Paragraph(
        'VPC Service Controls (VPC-SC) create a security perimeter around your GCP services '
        'that prevents data exfiltration even if IAM credentials are compromised. For '
        'regulated industries (financial services, healthcare, government), VPC-SC is not '
        'optional — it is the difference between a deployment that can pass a security review '
        'and one that cannot.',
        S['body']))

    vpc_items = [
        ('Perimeter Architecture', 'A VPC-SC perimeter is defined at the project level and specifies which services are included (Vertex AI, BigQuery, Cloud Storage, Cloud Run, etc.). Requests from outside the perimeter to services inside it are blocked — even with valid IAM credentials. The perimeter is the outer boundary of your enterprise AI security posture.'),
        ('Access Policies', 'Access policies define who can cross the perimeter boundary under what conditions. An access level might specify: requests from corporate IP ranges only, or requests using device certificates only. This allows your internal developers and agent service accounts to operate normally while blocking external requests.'),
        ('Ingress and Egress Rules', 'Ingress rules allow specific external sources to access services inside the perimeter. Egress rules allow services inside the perimeter to call specific external APIs. For Vertex AI agents that call external REST APIs (via Reasoning Engine tool calls), explicit egress rules must be configured for each external endpoint.'),
        ('Dry-run Mode', 'Always configure VPC-SC in dry-run mode before enforcement. Dry-run mode logs violations without blocking — allowing you to identify which services and service accounts need perimeter access before turning on enforcement. Most organisations discover 5–15 unexpected dependencies in dry-run mode.'),
        ('Common Configuration Mistakes', 'Not including Cloud Run in the perimeter (agent execution environment). Missing egress rule for Vertex AI Search indexing from GCS. Forgetting to add Secret Manager to the perimeter (agent credentials). Not configuring access levels for CI/CD pipelines that deploy to Cloud Run.'),
    ]
    for title, desc in vpc_items:
        story.append(KeepTogether([
            Paragraph(f'<b>{title}</b>', S['body']),
            Paragraph(desc, S['body']),
        ]))
    story.append(PageBreak())

    # ── CHAPTER 7: ROLLOUT FRAMEWORK ─────────────────────────────────────
    story.append(Paragraph('07 / Rollout', S['label']))
    story.append(Paragraph('Phased Production Rollout Framework', S['h1']))
    story.append(divider(GCP_BLUE))
    story.append(Paragraph(
        'A phased rollout reduces production risk and creates feedback loops before '
        'full-scale deployment. Kovil AI uses a four-phase framework for every Vertex AI '
        'agent deployment.',
        S['body']))

    phases = [
        ('Phase 1: Internal Alpha (Days 1–7)',
         'Deploy the agent in a staging environment with no external traffic. Internal team members test against a defined set of 50+ test queries covering success cases, edge cases, and out-of-scope queries. Acceptance criteria: >80% accuracy on in-scope queries, 0% hallucination rate on measurable factual queries, <3 second p95 latency.',
         '50 test queries, accuracy baseline, latency baseline, no external users'),
        ('Phase 2: Limited Beta (Days 8–21)',
         'Deploy to a controlled group of 5–20 internal users or a single customer account. Monitor conversation logs daily. Track resolution rate (did the agent resolve the query without escalation), user satisfaction (thumbs up/down), and escalation patterns. Tune agent instructions and grounding configuration based on failure patterns.',
         '5–20 beta users, daily log review, 2-week minimum'),
        ('Phase 3: Canary Rollout (Days 22–35)',
         'Route 10–20% of production traffic to the agent. Monitor all key metrics in real time via Cloud Monitoring dashboards. Set alerting thresholds: escalation rate >25% triggers review, p95 latency >5 seconds triggers investigation, error rate >2% triggers rollback. Keep the previous manual process running in parallel for 100% of queries during this phase.',
         '10–20% traffic, parallel human process, real-time monitoring'),
        ('Phase 4: Full Production (Day 36+)',
         'Ramp to 100% of target traffic. Establish weekly conversation quality reviews — sampling 50–100 conversations per week and assessing quality against the rubric defined in Phase 1. Plan first model or instruction update for week 6 based on observed failure patterns. Set up automated re-indexing schedule for Vertex AI Search data sources.',
         'Weekly quality review, monthly optimisation cycle'),
    ]
    for phase_title, desc, metrics in phases:
        story.append(KeepTogether([
            Paragraph(f'<b>{phase_title}</b>', S['h3']),
            Paragraph(desc, S['body']),
            callout_box(f'<b>Gate criteria:</b> {metrics}', S,
                bg=colors.HexColor('#EBF5FB'), border_color=GCP_BLUE),
            Spacer(1, 3*mm),
        ]))
    story.append(PageBreak())

    # ── CHAPTER 8: CHECKLIST ──────────────────────────────────────────────
    story.append(Paragraph('08 / Checklist', S['label']))
    story.append(Paragraph('Architecture Decision Checklist', S['h1']))
    story.append(divider(GCP_BLUE))
    story.append(Paragraph(
        'Before writing a single line of agent code, these 12 architecture decisions must '
        'be made and documented. Changes to any of these decisions post-build are expensive.',
        S['body']))

    decisions = [
        ('Model selection', 'Which Gemini model (Flash/Pro) or alternative (Claude, Llama) for the core reasoning task?'),
        ('Orchestration layer', 'Agent Builder or Reasoning Engine? (See Chapter 3 comparison matrix.)'),
        ('Grounding strategy', 'Pure RAG (Vertex AI Search), structured query (BigQuery ML), or hybrid?'),
        ('Chunking configuration', 'Chunk size and overlap for Vertex AI Search index? (Document type dependent.)'),
        ('Retrieval mode', 'Hybrid (recommended), vector-only, or keyword-only for Vertex AI Search?'),
        ('Memory architecture', 'Session-only memory, or persistent memory (Firestore/Redis) across sessions?'),
        ('Tool set', 'Which external APIs and internal data sources will the agent call? Are egress rules configured?'),
        ('Human handoff', 'What triggers escalation to a human? What data is passed at handoff?'),
        ('VPC-SC perimeter', 'Which services are in the perimeter? Are ingress/egress rules configured?'),
        ('Region', 'Which GCP region for all Vertex AI services? Data residency requirements satisfied?'),
        ('MLOps pipeline', 'How will agent instructions and grounding data be updated post-launch? Who owns this?'),
        ('Evaluation framework', 'What query set will be used to measure agent quality? Who reviews conversation logs?'),
    ]

    hdr_d = [['#', 'Decision', 'Your Answer']]
    hdr_t = Table(hdr_d, colWidths=[10*mm, 80*mm, 75*mm])
    hdr_t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), NAVY),
        ('TEXTCOLOR', (0,0), (-1,-1), WHITE),
        ('FONTNAME', (0,0), (-1,-1), 'Helvetica-Bold'),
        ('FONTSIZE', (0,0), (-1,-1), 8),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('LEFTPADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(hdr_t)

    for i, (decision, context) in enumerate(decisions, 1):
        row_style = ParagraphStyle('rd', fontName='Helvetica', fontSize=8.5, leading=12)
        ctx_style = ParagraphStyle('rc', fontName='Helvetica', fontSize=7.5,
            textColor=GRAY, leading=11)
        data = [[
            Paragraph(str(i), ParagraphStyle('ri', fontName='Helvetica-Bold', fontSize=9,
                textColor=GCP_BLUE, leading=12, alignment=TA_CENTER)),
            [Paragraph(decision, row_style), Paragraph(context, ctx_style)],
            Paragraph('', row_style)
        ]]
        t = Table(data, colWidths=[10*mm, 80*mm, 75*mm])
        t.setStyle(TableStyle([
            ('BACKGROUND', (0,0), (-1,-1), colors.white if i % 2 else LGRAY),
            ('LINEBELOW', (0,0), (-1,-1), 0.25, MGRAY),
            ('TOPPADDING', (0,0), (-1,-1), 6),
            ('BOTTOMPADDING', (0,0), (-1,-1), 6),
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('LEFTPADDING', (0,0), (-1,-1), 5),
            ('LINEBEFORE', (2,0), (2,-1), 0.5, MGRAY),
        ]))
        story.append(t)

    story.append(Spacer(1, 5*mm))
    story.append(callout_box(
        '<b>Need help completing this checklist?</b> Kovil AI runs a 2-week Vertex AI '
        'Strategy & Readiness engagement that works through every decision in this checklist '
        'and produces a written architecture blueprint. Contact us at kovil.ai.',
        S, bg=colors.HexColor('#EBF5FB'), border_color=GCP_BLUE))

    doc.build(story, onFirstPage=make_page_fn('GCP AI Agent Architecture Whitepaper', 'WHITEPAPER'),
              onLaterPages=make_page_fn('GCP AI Agent Architecture Whitepaper', 'WHITEPAPER'))
    print(f"  OK  {path}")


# ═════════════════════════════════════════════════════════════════════════════
if __name__ == '__main__':
    S = make_styles()
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    print("Generating Vertex AI PDFs...")
    build_readiness_guide(
        os.path.join(OUTPUT_DIR, "vertex-ai-readiness-guide.pdf"), S)
    build_architecture_whitepaper(
        os.path.join(OUTPUT_DIR, "vertex-ai-architecture-whitepaper.pdf"), S)
    print("Done.")
