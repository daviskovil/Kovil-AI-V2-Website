export type ServiceType = "Outcome-Based AI Project" | "Managed AI Engineer" | "AI Reliability & App Rescue";

export interface Metric {
  value: string;
  label: string;
  sublabel?: string;
}

export interface TechBadge {
  name: string;
  color: string; // Tailwind bg class
}

export interface CaseStudy {
  slug: string;
  title: string;
  headline: string;
  excerpt: string;
  service: ServiceType;
  industry: string;
  clientType: string;
  timeline: string;
  teamSize: string;
  published: string;
  metrics: Metric[];
  techStack: TechBadge[];
  quote?: string;
  quoteAuthor?: string;
  quoteRole?: string;
  body: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "law-firm-contract-review-ai",
    title: "Law Firm Contract Review — 78% Faster, Zero Missed Clauses",
    headline: "AI Contract Review Agent Cuts Review Time by 78% and Reclaims $380K in Annual Partner Hours",
    excerpt:
      "A 60-attorney corporate law firm was spending 4–6 associate hours per contract review on routine clause extraction, inconsistency flagging, and comparison against standard positions. Kovil AI built an AI contract review agent — trained on the firm's own precedent library — that handles 94% of standard clause analysis automatically and surfaces every non-standard provision before a human reads the document.",
    service: "Outcome-Based AI Project",
    industry: "Legal / LegalTech",
    clientType: "Mid-size Law Firm (60 attorneys)",
    timeline: "6 weeks",
    teamSize: "3 engineers + 1 AI specialist",
    published: "May 2026",
    metrics: [
      { value: "78%", label: "Faster Contract Review", sublabel: "Per document, end-to-end" },
      { value: "$380K", label: "Partner Hours Reclaimed", sublabel: "Annually at billing rates" },
      { value: "94%", label: "Standard Clauses Auto-Flagged", sublabel: "No human read required" },
      { value: "0", label: "Missed Non-Standard Clauses", sublabel: "Since go-live" },
    ],
    techStack: [
      { name: "GPT-4o", color: "bg-green-700" },
      { name: "LangChain", color: "bg-yellow-700" },
      { name: "Pinecone", color: "bg-blue-600" },
      { name: "FastAPI", color: "bg-teal-700" },
      { name: "Next.js 14", color: "bg-slate-800" },
      { name: "AWS S3", color: "bg-orange-600" },
      { name: "PostgreSQL", color: "bg-blue-900" },
    ],
    quote:
      "We were billing associates for work that AI can now do in eight minutes. The agent flags every non-standard clause before anyone opens the document — and it knows our positions because we trained it on our own precedents. This is the biggest change to how we work in twenty years.",
    quoteAuthor: "Managing Partner",
    quoteRole: "Corporate Practice Group",
    body: `
<h2>The Situation</h2>
<p>The client is a 60-attorney corporate law firm specialising in M&A, commercial contracts, and venture transactions. Their contract review process was high-cost and structurally inefficient in the way that's common across mid-size firms: associates performed the bulk of first-pass review — reading contracts against a mental model of the firm's standard positions — before escalating exceptions to senior attorneys for judgment calls.</p>
<p>For a typical commercial contract (NDA, MSA, or SaaS agreement), first-pass review took 4–6 associate hours. For more complex agreements — supply chain contracts, licensing deals, co-development agreements — the number climbed to 10–14 hours. The work itself was largely pattern-matching: identifying which clauses deviated from the firm's standard positions, flagging missing provisions, and comparing defined terms for internal consistency.</p>
<p>Partners were spending 60–90 minutes per engagement reviewing and correcting associate markup before they could offer substantive advice. At their billing rates, this represented significant cost — both in partner time consumed and in the opportunity cost of senior attorneys doing work that shouldn't require senior judgment.</p>

<h2>The Challenge</h2>
<p>Contract review automation is harder than it looks from the outside. The firm had evaluated two off-the-shelf contract AI tools before approaching Kovil AI. Both failed for the same reason: they compared contracts against generic "market standard" positions, not the firm's own negotiated positions built up over decades of practice.</p>
<p>A non-disclosure clause that looks standard to a general AI tool might represent a significant departure from how this firm had negotiated the same clause in 400 prior engagements. The firm's value to clients wasn't generic market knowledge — it was their specific institutional positions and the reasoning behind them.</p>
<p>The specific requirements for a viable solution were:</p>
<ul>
  <li><strong>Trained on firm precedents, not generic data:</strong> The system had to compare incoming contracts against the firm's own executed agreements, template library, and annotated negotiation history — not a third-party benchmark</li>
  <li><strong>Clause-level explanation, not just flagging:</strong> Associates needed to know not just that a clause was non-standard, but how it deviated, what the firm's preferred position was, and what risk the deviation represented</li>
  <li><strong>Full document coverage:</strong> Missing a non-standard clause or a defined term inconsistency was not an acceptable failure mode. The system had to handle the complete document, not sample it.</li>
  <li><strong>Client confidentiality:</strong> No client documents or firm precedents could be sent to a third-party AI service for training or storage. Data had to stay within the firm's controlled infrastructure.</li>
  <li><strong>Workflow integration:</strong> Output had to land in the formats attorneys actually use — annotated PDF, tracked-changes Word document, and a structured exception report — not a web interface that required a context switch</li>
</ul>

<h2>Our Approach</h2>
<p>We started with a week of embedded discovery with the firm's practice group leads. Rather than observing a generic "contract review process," we sat through three live contract reviews — watching exactly what associates flagged, what they missed, how they communicated findings to supervising partners, and where the handoff broke down.</p>
<p>The insight that shaped the architecture: the firm already had the answer key. Fifteen years of executed agreements, annotated templates, and partner redlines — all sitting in their document management system — contained every position the firm had ever taken on every clause type. The job was to make that institutional knowledge searchable and applicable at document processing speed.</p>
<p>We designed a two-stage pipeline: a retrieval stage that uses the incoming contract to surface the most relevant firm precedents (via semantic search over a Pinecone vector index of the firm's document library), followed by a generation stage where GPT-4o compares the incoming clause against retrieved precedent and firm positions to produce a structured exception report.</p>

<h2>The Solution</h2>

<h3>Precedent Library Indexing</h3>
<p>We built an ingestion pipeline that processed the firm's document management system — 12,000 documents spanning 15 years of executed agreements, template library versions, and annotated negotiation histories. Each document was parsed, segmented by clause type using a custom clause classifier trained on legal document structure, and embedded using OpenAI's text-embedding-3-large model. The embeddings were stored in Pinecone, partitioned by practice area and agreement type.</p>
<p>Critically, the ingestion pipeline also extracted the firm's "positions" — partner annotations marking which clause versions were preferred, which were acceptable, and which were never acceptable — and stored these as structured metadata alongside each clause embedding. This metadata became the comparison baseline.</p>

<h3>The Review Agent</h3>
<p>When a new contract is uploaded for review, the agent processes it through the following stages:</p>
<ul>
  <li><strong>Document parsing and clause segmentation:</strong> The contract is parsed into discrete clause segments — definitions, representations and warranties, liability caps, indemnification, termination, governing law, and so on — using the same clause classifier applied to the precedent library. This ensures the incoming clauses are compared against the right category of precedent.</li>
  <li><strong>Precedent retrieval:</strong> For each clause, the agent queries Pinecone for the 5 most semantically similar precedent clauses from the firm's library, weighted toward recent agreements in the same practice area and deal size range. The firm's annotated positions are retrieved alongside the clauses.</li>
  <li><strong>Deviation analysis:</strong> GPT-4o receives each incoming clause alongside its retrieved precedents and the firm's positions, and produces a structured assessment: whether the clause is within the firm's acceptable range, what specific language deviates from the firm's preferred position, and what risk the deviation represents (categorised as Low / Moderate / High / Unacceptable based on the firm's own annotation history).</li>
  <li><strong>Consistency checking:</strong> Separately from clause-level analysis, the agent checks for internal consistency across the document — flagging defined terms used but not defined, inconsistent usage of the same defined term, cross-references to sections that don't exist, and obligation provisions that conflict with limitation provisions.</li>
  <li><strong>Exception report generation:</strong> All findings are compiled into a structured exception report — grouped by risk level, with the firm's preferred position stated for each deviation and a plain-English summary of the commercial impact written for the supervising partner.</li>
</ul>

<h3>Output Formats</h3>
<p>The exception report is delivered in three formats simultaneously: a structured JSON output for the firm's matter management system, an annotated PDF with inline comments positioned at the relevant clause, and an exception summary document in Word format ready for partner review and client communication. The Word output uses tracked-changes formatting — the firm's preferred language appears as suggested replacements against the incoming contract text.</p>

<h3>Security and Data Handling</h3>
<p>No client documents or firm precedents are sent to OpenAI for training. The firm's entire document library is processed and stored within their AWS environment. All API calls to GPT-4o are made under a zero-data-retention agreement with OpenAI's enterprise API, which guarantees no input is used for model training. Every document processed by the system is logged with access control tied to the firm's existing Active Directory permissions — only attorneys with matter access can retrieve review output for that matter.</p>

<h2>Results</h2>
<p>The agent has been in production use across the firm's corporate practice group for three months. The outcomes have exceeded the targets set in the initial scoping engagement:</p>
<ul>
  <li><strong>Review time per document dropped from 4–6 associate hours to 50–80 minutes</strong> — a 78% reduction. Associates now spend their time on the minority of clauses that require genuine judgment, rather than the systematic read-through that the agent now handles.</li>
  <li><strong>94% of standard clause deviations are flagged automatically</strong>, including clause types that associates had historically under-flagged due to unfamiliarity with certain practice area positions. The agent's consistency with firm positions is measurably higher than associate consistency was — the firm validated this against a retrospective sample of 80 prior reviews.</li>
  <li><strong>Partner review time dropped from 60–90 minutes to 15–20 minutes</strong> per engagement, because partners receive a structured exception report organised by risk level rather than a full mark-up requiring re-reading. Time previously spent identifying issues is now spent making decisions about them.</li>
  <li><strong>Zero non-standard clauses have been missed</strong> since go-live. The firm tracks this through a quality review process on a random 20% sample of all reviewed agreements. The previous associate-only process had a miss rate of approximately 6% on high-risk clauses — primarily in areas where an associate lacked experience with the firm's specific negotiating history.</li>
  <li><strong>$380K in annual partner time reclaimed</strong>, calculated at the firm's internal billing rate for partner hours. This figure excludes associate time savings, which add a further $210K annually. The engagement paid for itself in the first six weeks of production use.</li>
</ul>
<p>The firm's managing partner described the most significant change as cultural rather than operational: "Associates are now spending their time on the hard parts. They're learning faster because they're doing real legal work — analysing risk, considering commercial context — instead of running a checklist. It's changed what we expect from a first-year on a contract matter."</p>
<p>The firm is currently expanding the agent to cover due diligence document review for M&A transactions — a use case where the volume of documents makes the efficiency gain even more significant.</p>
`,
  },
  {
    slug: "secondary-mortgage-document-platform",
    title: "the mortgage document platform — AI Document Platform for the Mortgage Secondary Market",
    headline: "AI-Powered Loan Package Verification Replaces Manual PDF Sorting and Spreadsheet Checklists",
    excerpt:
      "Lenders selling loans on the secondary mortgage market were drowning in manual PDF sorting, spreadsheet-based checklists, and email-driven exception tracking. Kovil AI built the mortgage document platform — a two-phase AI platform that classifies loan documents automatically and verifies complete packages against takeout partner requirements.",
    service: "Outcome-Based AI Project",
    industry: "Mortgage / FinTech",
    clientType: "Mortgage Secondary Market Platform",
    timeline: "V1 build sprint",
    teamSize: "AI-first engineering team",
    published: "March 2026",
    metrics: [
      { value: "2-Phase", label: "AI Platform Delivered", sublabel: "Org + Verification" },
      { value: "Auto", label: "Document Classification", sublabel: "AI confidence scoring" },
      { value: "Zero", label: "Manual Checklist Work", sublabel: "Fully automated" },
      { value: "4", label: "User Roles Served", sublabel: "Lenders to aggregators" },
    ],
    techStack: [
      { name: "Next.js 14", color: "bg-slate-800" },
      { name: "Python / FastAPI", color: "bg-blue-700" },
      { name: "OpenAI GPT-4o", color: "bg-green-700" },
      { name: "PostgreSQL", color: "bg-blue-900" },
      { name: "AWS S3", color: "bg-orange-600" },
      { name: "Prisma", color: "bg-teal-700" },
      { name: "TypeScript", color: "bg-blue-600" },
    ],
    body: `
<h2>The Business Context</h2>
<p>In the secondary mortgage market, lenders originate loans and sell them to investors — either directly to takeout partners or through aggregators. Each sale requires a complete, verified document package: the right documents, correctly classified, with no missing or expired items. The entire process has historically been manual: staff sorting PDFs by hand, tracking checklist completion in spreadsheets, and managing exceptions over email.</p>
<p>The consequences of this manual workflow are significant. A missing document or misclassified file discovered late in the process can delay or kill a loan sale. At scale, the operational burden is unsustainable. the mortgage document platform was built to eliminate this friction entirely.</p>

<h2>What We Built</h2>
<p>the mortgage document platform is a document organization and verification platform designed specifically for the mortgage secondary market. It serves four distinct user types — Lender Staff, Diligence Analysts, Aggregator Ops, and System Administrators — each with tailored workflows and permissions within the same platform.</p>
<p>The platform automates two core workflows that together cover the full loan sale preparation process:</p>

<h3>Phase 1 — Document Organization</h3>
<p>When lenders upload loan packages, the platform's AI classification engine takes over. Rather than requiring staff to manually sort and label documents, the system:</p>
<ul>
  <li>Automatically classifies each uploaded document by type (note, title policy, appraisal, insurance, etc.) using a fine-tuned GPT-4o pipeline trained on mortgage document patterns</li>
  <li>Assigns a confidence score to each classification — high-confidence classifications are accepted automatically; low-confidence items are surfaced for human review</li>
  <li>Performs structural cleanup of the uploaded package: detecting duplicates, flagging incomplete documents, and organizing files into a standardized loan folder structure</li>
  <li>Provides a clean, reviewable document inventory for lender staff to confirm or correct before proceeding to verification</li>
</ul>

<h3>Phase 2 — Verification (Run the platform)</h3>
<p>Once documents are organized, the verification engine runs the package against the requirements of the specific takeout partner or investor. Each partner has a different checklist — the platform manages these as configurable templates. The system:</p>
<ul>
  <li>Matches the organized document package against the active checklist template for the target takeout partner</li>
  <li>Surfaces exceptions automatically — missing documents, expired items, mismatches against checklist criteria — with clear descriptions and resolution paths</li>
  <li>Routes exceptions to the appropriate user type: Lender Staff to resolve document issues, Diligence Analysts to waive or escalate findings</li>
  <li>Tracks clearance status in real time, giving Aggregator Ops full visibility into pool readiness across multiple loans simultaneously</li>
  <li>Generates exportable delivery packages when a loan is cleared — formatted for the specific takeout partner's requirements</li>
</ul>

<h2>Who It Serves</h2>
<p>the platform was designed around four distinct user roles, each with different needs and different parts of the workflow:</p>
<ul>
  <li><strong>Lender Staff:</strong> Upload loan packages, fix classification issues flagged by the AI, run verification, and resolve exceptions assigned to them</li>
  <li><strong>Diligence Analysts:</strong> Review exceptions that require judgment calls — resolving, waiving, or escalating findings and clearing loans for delivery</li>
  <li><strong>Aggregator Ops:</strong> Pool multiple loans, monitor pool-level readiness, and generate and export delivery packages when ready</li>
  <li><strong>System Administrators:</strong> Manage users and roles, configure checklist templates per takeout partner, and set organisation-level settings</li>
</ul>
<p>The multi-role architecture was critical to the platform's value: a single loan flows through multiple hands, and each user needs exactly the right information and actions — nothing more.</p>

<h2>The Technical Approach</h2>
<p>Document classification in mortgage lending is harder than it looks. Loan packages contain dozens of document types with significant visual and structural variation — appraisals from different AMCs look different, title policies vary by state and underwriter, and older loans may have scanned documents with poor OCR fidelity.</p>
<p>We addressed this with a classification pipeline that combined visual layout analysis with text extraction and a fine-tuned prompt structure for GPT-4o. The confidence scoring system was calibrated against a representative set of real mortgage documents, tuning the threshold at which the system automatically accepts a classification vs. routes it for review.</p>
<p>For the verification engine, checklist templates were built as structured rule sets — configurable by administrators without requiring code changes. This gave the platform commercial flexibility: onboarding a new takeout partner meant configuring a template, not writing new logic.</p>
<p>The entire platform was built as a multi-tenant architecture from day one, supporting multiple lender organisations with strict data isolation at the database level.</p>

<h2>Results</h2>
<p>the mortgage document platform replaced a workflow that had been entirely manual with a structured, auditable, automated process. The key outcomes for users across all four roles:</p>
<ul>
  <li>Lender staff no longer sort documents by hand — the AI handles initial classification, with human review only where confidence is below threshold</li>
  <li>Diligence analysts work from a structured exception queue rather than scanning email chains and spreadsheets</li>
  <li>Aggregator operations teams have real-time pool readiness visibility that previously required manual status calls across multiple lenders</li>
  <li>Every action in the system is logged — creating the auditable workflow that the secondary market requires but that manual processes cannot reliably provide</li>
</ul>
<p>the mortgage document platform demonstrated that the most impactful AI applications in financial services are often not about replacing human judgment — they're about structuring and automating the work that surrounds it, freeing experts to focus on the decisions that actually require them.</p>
`,
  },
  {
    slug: "lending-platform-ai-automation",
    title: "AI Workflow Automation for a Lending Technology Platform",
    headline: "End-to-End AI Automation Transforms Deal Processing for a Digital Lending Platform",
    excerpt:
      "A rapidly growing digital lending platform was held back by manual underwriting workflows, fragile API integrations, and slow deal processing cycles. Kovil AI embedded an AI-first engineering team that redesigned automation end-to-end — delivering faster deal turnaround, reduced manual effort, and a scalable automation foundation.",
    service: "Managed AI Engineer",
    industry: "FinTech / LendingTech",
    clientType: "Digital Lending Platform",
    timeline: "Ongoing engagement",
    teamSize: "AI-first remote team",
    published: "March 2026",
    metrics: [
      { value: "Faster", label: "Deal Processing Turnaround", sublabel: "Across the platform" },
      { value: "Reduced", label: "Manual Underwriting Effort", sublabel: "AI-assisted workflows" },
      { value: "Improved", label: "Integration Reliability", sublabel: "System uptime & stability" },
      { value: "Boosted", label: "Engineering Productivity", sublabel: "Faster delivery velocity" },
    ],
    techStack: [
      { name: "n8n", color: "bg-orange-600" },
      { name: "Python", color: "bg-blue-700" },
      { name: "OpenAI GPT-4o", color: "bg-green-700" },
      { name: "FastAPI", color: "bg-teal-700" },
      { name: "PostgreSQL", color: "bg-blue-900" },
      { name: "REST APIs", color: "bg-slate-600" },
      { name: "AWS", color: "bg-orange-700" },
    ],
    body: `
<h2>Introduction</h2>
<p>Fintech lending platforms are increasingly dependent on API integrations, automated underwriting, and workflow orchestration to process deals faster and improve operational efficiency. However, many platforms face compounding challenges as they scale: integration fragility, manual data processing bottlenecks, and automation workflows that weren't designed for the volume demands of a growing business.</p>
<p>This engagement illustrates what happens when an AI-first engineering team is embedded into a lending platform at the right moment — before technical debt becomes a ceiling on growth.</p>

<h2>Client Background</h2>
<p>The client is a rapidly growing digital lending technology platform operating in the alternative finance space. Their platform orchestrates the full deal lifecycle — from initial application and document collection through underwriting, decisioning, and post-close tracking — across a network of lenders and borrowers.</p>
<p>As deal volume grew, the limitations of their existing automation infrastructure became impossible to ignore. They partnered with Kovil AI for specialized AI engineering talent to accelerate delivery and reduce operational bottlenecks without disrupting their live platform.</p>

<h2>The Challenges</h2>
<p>Four interconnected problems were limiting the platform's ability to scale efficiently:</p>
<ul>
  <li><strong>Managing multiple external integrations:</strong> The platform relied on integrations with credit bureaus, document verification providers, banking data APIs, and lender management systems — each with different data formats, authentication schemes, and reliability characteristics. Failures in one cascaded silently into others.</li>
  <li><strong>Handling document-driven underwriting:</strong> Loan applications generated significant document volume — financial statements, tax returns, identification documents, and supporting materials. Processing these manually was slow, error-prone, and unscalable.</li>
  <li><strong>Ensuring workflow reliability:</strong> Automation workflows had grown organically without a consistent error-handling strategy. Silent failures and incomplete state transitions were causing deals to stall without clear visibility into what had gone wrong or why.</li>
  <li><strong>Reducing manual deal lifecycle effort:</strong> Despite having automation in place, the operations team was still investing significant time in manual deal tracking, status updates, and notifications — work that should have been handled automatically.</li>
</ul>

<h2>Our Approach</h2>
<p>The engagement was executed through a remote AI-first engineering model with close collaboration with the client's internal teams. The priority was enabling faster deployment cycles while maintaining the stability of a live production platform — which meant working incrementally, validating at each stage, and avoiding any big-bang rewrites.</p>
<p>The implementation followed a structured five-phase approach:</p>
<ul>
  <li><strong>01 — Design:</strong> Mapped the full deal lifecycle and designed automation workflows using modern orchestration tools. Every workflow was documented before a line of code was written, ensuring the client's operations and product teams could validate logic before implementation.</li>
  <li><strong>02 — Integrate:</strong> Built end-to-end API integration workflows connecting the platform's core systems to external data providers, lender APIs, and document services. Integrations were built with consistent error handling, retry logic, and structured logging from the start.</li>
  <li><strong>03 — Test:</strong> Validated all workflows using simulated datasets that mirrored real deal structures — including edge cases, document variations, and integration failure scenarios. This testing phase caught reliability issues before they could reach production.</li>
  <li><strong>04 — Optimize:</strong> Refined system performance, stability, and error handling across all workflows. Addressed bottlenecks in high-volume processing paths and established monitoring to surface issues proactively rather than reactively.</li>
  <li><strong>05 — Enhance:</strong> Integrated AI models into the document processing layer to extract, classify, and validate financial documents automatically. This was the highest-leverage enhancement — transforming a manual, time-intensive process into a near-automated one.</li>
</ul>

<h2>The Solution</h2>
<p>Across the five phases, Kovil AI delivered a comprehensive automation layer covering the full deal lifecycle:</p>
<ul>
  <li><strong>End-to-end API integration workflows:</strong> Reliable, monitored connections between the lending platform and all external systems — with consistent error handling, structured retry logic, and alerting on failure conditions</li>
  <li><strong>AI-assisted underwriting automation:</strong> Document ingestion and classification using AI models, extracting key financial data points automatically and flagging exceptions for human review rather than routing everything through manual processing</li>
  <li><strong>Data processing and validation pipelines:</strong> Structured pipelines that normalize data from multiple sources, validate against business rules, and ensure clean, consistent data reaches decisioning systems</li>
  <li><strong>Automated deal tracking and notifications:</strong> Real-time deal status tracking with automated notifications to borrowers, lenders, and internal stakeholders — eliminating the manual status updates that had consumed significant operations team time</li>
</ul>

<h2>Results & Impact</h2>
<p>The client achieved measurable operational improvements across all key areas of the deal lifecycle:</p>
<ul>
  <li><strong>Faster deal processing turnaround</strong> across the platform, reducing the time from application submission to decisioning</li>
  <li><strong>Reduced manual intervention in underwriting workflows</strong> — the operations team shifted from data entry and document handling to exception management and relationship work</li>
  <li><strong>Improved integration reliability and system uptime</strong> — the platform's external connections became stable and observable, eliminating silent failures that had previously stalled deals without visibility</li>
  <li><strong>Increased engineering productivity and delivery velocity</strong> — with robust automation infrastructure in place, the client's internal team could focus on product development rather than operational maintenance</li>
  <li><strong>A stronger automation foundation for future scalability</strong> — the architecture built during this engagement was designed to handle multiples of current deal volume without requiring significant re-engineering</li>
</ul>
<p>The engagement demonstrated what AI-first engineering talent can deliver when embedded at the right moment in a scaling fintech operation: not just faster execution, but a fundamentally more capable and reliable platform.</p>
`,
  },
  {
    slug: "fintech-payment-dashboard",
    title: "FinTech Payment Dashboard — Shipped in 18 Days",
    headline: "A PCI-Compliant Payment Dashboard Launched 40% Under Budget",
    excerpt:
      "A Series A FinTech startup needed a production-ready payment dashboard in 3 weeks. Kovil AI delivered in 18 days — PCI-compliant, fully tested, and 40% under the original budget.",
    service: "Outcome-Based AI Project",
    industry: "FinTech",
    clientType: "Series A Startup",
    timeline: "18 days",
    teamSize: "3 engineers",
    published: "January 2026",
    metrics: [
      { value: "18", label: "Days to Launch", sublabel: "vs. 21-day target" },
      { value: "40%", label: "Under Budget", sublabel: "Hard cost savings" },
      { value: "100%", label: "PCI-DSS Compliant", sublabel: "From day one" },
      { value: "0", label: "Critical Bugs", sublabel: "At launch" },
    ],
    techStack: [
      { name: "Next.js 14", color: "bg-slate-800" },
      { name: "TypeScript", color: "bg-blue-700" },
      { name: "Stripe", color: "bg-purple-700" },
      { name: "PostgreSQL", color: "bg-blue-900" },
      { name: "Prisma", color: "bg-teal-700" },
      { name: "Tailwind CSS", color: "bg-sky-600" },
      { name: "Vercel", color: "bg-slate-700" },
    ],
    quote:
      "We needed a payment dashboard that could handle real transaction volume before our Series A close — and Kovil AI delivered it in less than three weeks. Clean code, PCI-compliant from day one, and a team that actually understood the regulatory constraints we were operating under.",
    quoteAuthor: "Sarah Chen",
    quoteRole: "CTO",
    body: `
<h2>The Situation</h2>
<p>the client had just closed a $4M pre-seed round and needed to demonstrate payment processing capability to enterprise prospects before their Series A pitch. Their existing prototype was a rough proof-of-concept — not something they could show to compliance-conscious buyers.</p>
<p>They had three weeks. Their internal team was tied up on core infrastructure. They needed a partner who could own the dashboard end-to-end: design, development, security, and deployment.</p>

<h2>The Challenge</h2>
<p>The project came with several constraints that made it genuinely difficult:</p>
<ul>
  <li><strong>PCI-DSS compliance</strong> was non-negotiable — the client's enterprise clients required it</li>
  <li>The dashboard needed to handle multiple payment rails: ACH, wire, and card</li>
  <li>Real-time transaction status updates were required (no polling-based UX)</li>
  <li>Multi-tenant architecture from day one — different orgs seeing only their own data</li>
  <li>A 21-day hard deadline tied to an investor demo</li>
</ul>
<p>Most agencies quoted 8–12 weeks and $180K+. the client couldn't wait, and couldn't overspend.</p>

<h2>Our Approach</h2>
<p>We started with a half-day scoping session to lock down the MVP feature set and agree on what "done" meant. Rather than attempting to build every feature, we prioritized ruthlessly: the things investors and pilot customers actually needed to see in Week 3.</p>
<p>The sprint was structured into three phases:</p>
<ul>
  <li><strong>Days 1–4:</strong> Architecture, data model, Stripe integration, and auth scaffolding. We used Stripe's Treasury API for multi-rail payment support, which eliminated weeks of custom payment rail work.</li>
  <li><strong>Days 5–14:</strong> Core dashboard views — transaction list, real-time status feeds, org-level reporting, and the approval workflow for outbound payments. Daily standups with the the client CTO kept alignment tight.</li>
  <li><strong>Days 15–18:</strong> Security hardening, PCI scoping, penetration testing checklist, staging-to-production migration, and handoff documentation.</li>
</ul>

<h2>The Solution</h2>
<p>We delivered a fully functional, multi-tenant payment dashboard with the following capabilities:</p>
<ul>
  <li>Real-time transaction feed using Stripe webhooks and server-sent events — no page refresh required</li>
  <li>Role-based access control with org isolation at the database level (Postgres row-level security)</li>
  <li>ACH, wire, and card transaction support via Stripe Treasury</li>
  <li>A two-step approval workflow for payments over configurable thresholds</li>
  <li>Exportable transaction reports in CSV and PDF</li>
  <li>Audit trail for every state change — critical for compliance</li>
</ul>
<p>The entire codebase was written in TypeScript with strict mode enabled. We documented every integration decision and left the the client team with a detailed runbook covering deployment, environment variables, webhook configuration, and Stripe account setup.</p>

<h2>Results</h2>
<p>The dashboard launched on Day 18 — three days ahead of the investor demo. the client used it live during their Series A pitch. The compliance story — PCI-DSS scoped, auditable, with row-level org isolation — was a direct selling point in enterprise conversations.</p>
<p>Total cost came in 40% under the original budget, largely because we avoided over-engineering features that weren't needed for the MVP. the client's CTO told us it was the cleanest codebase they'd received from an external partner.</p>
`,
  },
  {
    slug: "saas-workflow-automation",
    title: "SaaS Approval Workflows Automated — $120K/Year Saved",
    headline: "80% of Manual Approval Workflows Eliminated in 6 Weeks",
    excerpt:
      "A mid-market SaaS company was losing 15+ hours per week to manual approval chains. Kovil AI built an n8n-powered automation layer that handles 80% of workflows automatically — saving $120K annually.",
    service: "Managed AI Engineer",
    industry: "SaaS / B2B",
    clientType: "Mid-Market (200 employees)",
    timeline: "6 weeks",
    teamSize: "2 engineers + 1 automation specialist",
    published: "February 2026",
    metrics: [
      { value: "80%", label: "Workflows Automated", sublabel: "Fully hands-off" },
      { value: "15h", label: "Saved Per Week", sublabel: "Per operations team" },
      { value: "$120K", label: "Annual Savings", sublabel: "Fully documented ROI" },
      { value: "6 wks", label: "Time to Value", sublabel: "From kickoff to go-live" },
    ],
    techStack: [
      { name: "n8n", color: "bg-orange-600" },
      { name: "OpenAI GPT-4", color: "bg-green-700" },
      { name: "Slack API", color: "bg-purple-700" },
      { name: "HubSpot", color: "bg-orange-700" },
      { name: "PostgreSQL", color: "bg-blue-900" },
      { name: "Zapier", color: "bg-orange-500" },
      { name: "Webhooks", color: "bg-slate-600" },
    ],
    quote:
      "What used to take our ops team half a day now happens automatically before anyone even checks their email. The ROI was obvious within the first month — and the Kovil AI team was meticulous about documenting everything so we can maintain it ourselves.",
    quoteAuthor: "Marcus Webb",
    quoteRole: "VP Engineering",
    body: `
<h2>The Situation</h2>
<p>the client sells B2B data infrastructure to mid-market companies. Like many companies at their stage, they'd built internal processes through a combination of Slack messages, email chains, and spreadsheets. It worked — until it didn't.</p>
<p>As headcount grew past 200, their approval workflows became a serious bottleneck. Contract approvals, vendor onboarding, expense sign-offs, and new user provisioning all required manual routing through 2–4 different people. Nothing was automated. Everything was one Slack message away from falling through the cracks.</p>

<h2>The Challenge</h2>
<p>Before engaging Kovil AI, the client's operations team had tried to automate using Zapier. They got 30% of the way there before hitting walls: Zapier's logic capabilities weren't sufficient for multi-step conditional approvals, and their IT team didn't have the bandwidth to maintain a growing tangle of Zaps.</p>
<p>Specific pain points:</p>
<ul>
  <li>Contract renewals over $50K required sign-off from Legal, Finance, and the VP — sometimes taking 5+ business days</li>
  <li>New vendor onboarding triggered 11 manual steps across 4 systems</li>
  <li>Employee expense approvals above $500 had no SLA — some sat for 3 weeks</li>
  <li>No audit trail existed for any of these processes</li>
</ul>

<h2>Our Approach</h2>
<p>We started with a two-day process mapping exercise with the client's ops lead and IT manager. Rather than automating everything at once, we prioritized by: (1) frequency of occurrence, (2) time cost per instance, and (3) implementation complexity. This gave us a clear sequence.</p>
<p>We chose <strong>n8n</strong> as the automation backbone — self-hosted on their existing AWS infrastructure — for its ability to handle complex conditional logic, native integrations with their existing stack (HubSpot, Slack, PostgreSQL), and long-term maintainability without per-task pricing.</p>
<p>For approvals requiring judgment calls (e.g., contract risk assessment), we integrated GPT-4 to pre-classify requests and surface relevant context to approvers — reducing decision time even for the 20% of workflows that still needed a human touch.</p>

<h2>The Solution</h2>
<p>Over 6 weeks, we built and deployed automations covering:</p>
<ul>
  <li><strong>Contract approval routing</strong>: Auto-classified by value and type, routed to the correct approver chain via Slack with deadline reminders and escalation paths</li>
  <li><strong>Vendor onboarding</strong>: 11-step process collapsed to 2 human touchpoints; the remaining 9 steps trigger automatically based on form submission</li>
  <li><strong>Expense approvals</strong>: Under-$500 expenses auto-approved and logged; above-threshold routed with full receipt context attached</li>
  <li><strong>User provisioning</strong>: New hire onboarding triggers automatic account creation across 6 tools, cutting IT setup time from 4 hours to 12 minutes</li>
</ul>
<p>Every workflow was documented with a visual process map, a runbook for edge cases, and monitoring alerts in case a workflow fails silently. We also ran a 2-week parallel test (automation running alongside the old manual process) before full cutover.</p>

<h2>Results</h2>
<p>Within the first 30 days after cutover, the client's ops team reclaimed 15+ hours per week. Contract cycle time dropped from an average of 5.2 days to 1.4 days. Vendor onboarding went from 2 weeks to 3 business days.</p>
<p>The fully-loaded annual savings — accounting for ops team time, reduced error rates, and faster contract close — came to $120K. The entire engagement paid for itself in under 90 days.</p>
`,
  },
  {
    slug: "ecommerce-maintenance",
    title: "E-Commerce Platform — 99.9% Uptime Restored",
    headline: "Legacy Codebase Stabilized: From 23 Monthly Bugs to Near Zero",
    excerpt:
      "A 500K-user e-commerce platform was hemorrhaging trust due to frequent production bugs in a legacy codebase. Kovil AI's maintenance retainer cut bug tickets by 60% and restored 99.9% uptime.",
    service: "AI Reliability & App Rescue",
    industry: "E-Commerce",
    clientType: "Scale-up (500K users)",
    timeline: "Ongoing retainer (first results in 30 days)",
    teamSize: "2 engineers",
    published: "December 2025",
    metrics: [
      { value: "99.9%", label: "Uptime Achieved", sublabel: "Up from 97.2%" },
      { value: "60%", label: "Fewer Bug Tickets", sublabel: "Month-over-month" },
      { value: "< 4h", label: "Avg Response Time", sublabel: "For P1 incidents" },
      { value: "23→4", label: "Monthly P1 Bugs", sublabel: "Down from 23" },
    ],
    techStack: [
      { name: "React", color: "bg-blue-600" },
      { name: "Node.js", color: "bg-green-700" },
      { name: "MongoDB", color: "bg-green-600" },
      { name: "Redis", color: "bg-red-600" },
      { name: "AWS", color: "bg-orange-600" },
      { name: "Datadog", color: "bg-purple-700" },
      { name: "GitHub Actions", color: "bg-slate-700" },
    ],
    quote:
      "We'd been living with production fires every week for over a year. Kovil AI came in, understood our codebase faster than anyone we'd hired full-time, and systematically eliminated the sources of instability. The monitoring setup alone was worth the retainer.",
    quoteAuthor: "Priya Nair",
    quoteRole: "Founder & CEO",
    body: `
<h2>The Situation</h2>
<p>the platform had grown to 500,000 active users on the back of a fast-moving engineering team that prioritized feature velocity over code quality — a common and understandable trade-off at the growth stage. By the time they reached out to Kovil AI, the technical debt had compounded into a real business problem.</p>
<p>In the three months before engagement, they'd experienced 23 P1 production incidents, including two checkout outages during peak sales periods. Their small internal team was spending 60% of their time on bug triage instead of building.</p>

<h2>The Challenge</h2>
<p>The codebase had several structural problems that were generating recurring issues:</p>
<ul>
  <li>No staging environment — all testing happened in production</li>
  <li>MongoDB queries without indexes on high-traffic collections, causing timeouts at scale</li>
  <li>A custom caching layer built 3 years ago that was inconsistently applied and frequently stale</li>
  <li>Zero automated testing coverage on the checkout flow</li>
  <li>No alerting — incidents were discovered by users, not the team</li>
</ul>
<p>The most critical issue was the checkout service: a monolithic Node.js function handling order creation, inventory decrement, payment processing, and email confirmation all in a single try/catch. When any step failed, the behavior was unpredictable.</p>

<h2>Our Approach</h2>
<p>Kovil AI began with a thorough codebase audit in the first week — reading through the most critical services, running load tests, and mapping out the dependency graph. We prioritized fixes not by complexity but by blast radius: what was most likely to affect the most users if it failed.</p>
<p>The maintenance retainer structure meant we had both a reactive component (fix issues as they arise, within SLA) and a proactive component (systematic improvement over time). We didn't try to refactor everything at once — we worked methodically, starting with the pieces most likely to cause customer-facing incidents.</p>

<h2>The Solution</h2>
<p>In the first 30 days, we completed the highest-impact interventions:</p>
<ul>
  <li><strong>Monitoring and alerting</strong>: Deployed Datadog with custom dashboards for checkout funnel health, error rates, and response time percentiles. The team could now see problems before users did.</li>
  <li><strong>Checkout service decomposition</strong>: Broke the monolithic checkout function into discrete steps with proper error boundaries. Payment failures no longer corrupted inventory state.</li>
  <li><strong>Database indexing audit</strong>: Added indexes on 11 high-query collections. Average query time dropped 73%.</li>
  <li><strong>Staging environment setup</strong>: Established a proper staging environment using anonymized production data. No more testing on live users.</li>
</ul>
<p>Over the following 60 days, we added automated test coverage for all critical paths, refactored the caching layer to be consistent and predictable, and implemented a proper deployment pipeline with rollback capability.</p>

<h2>Results</h2>
<p>Within 30 days, monthly P1 bugs dropped from 23 to 8. Within 90 days, they were at 4 — a reduction of over 80%. Uptime improved from 97.2% to 99.9%, eliminating the checkout outages that had been costing the platform an estimated $15K per incident in lost revenue and customer support load.</p>
<p>The internal engineering team — now freed from constant fire-fighting — shipped their first major new feature in 4 months. They called it "the best investment we made this year."</p>
`,
  },
  {
    slug: "healthcare-ai-integration",
    title: "HealthTech Patient Intake — 95% Manual Entry Eliminated",
    headline: "AI Cuts Patient Intake From 18 Minutes to 2 Minutes",
    excerpt:
      "A Series B HealthTech company's patient intake process required manual data entry across 3 disconnected systems. Kovil AI built an AI-powered integration that reduced manual entry by 95% and cut intake time from 18 to 2 minutes.",
    service: "Managed AI Engineer",
    industry: "HealthTech",
    clientType: "Series B Startup",
    timeline: "8 weeks",
    teamSize: "3 engineers",
    published: "November 2025",
    metrics: [
      { value: "95%", label: "Manual Entry Reduced", sublabel: "Across all intake forms" },
      { value: "2 min", label: "Avg Intake Time", sublabel: "Down from 18 minutes" },
      { value: "3→1", label: "Systems Unified", sublabel: "Single source of truth" },
      { value: "99.2%", label: "Data Accuracy", sublabel: "Post-integration" },
    ],
    techStack: [
      { name: "Python", color: "bg-blue-700" },
      { name: "FastAPI", color: "bg-teal-700" },
      { name: "OpenAI GPT-4o", color: "bg-green-700" },
      { name: "HL7 FHIR", color: "bg-blue-800" },
      { name: "AWS Lambda", color: "bg-orange-600" },
      { name: "PostgreSQL", color: "bg-blue-900" },
      { name: "Twilio", color: "bg-red-600" },
    ],
    quote:
      "Our intake coordinators were spending more time on data entry than on patients. Kovil AI built something that actually works in a clinical environment — HIPAA-compliant, accurate, and fast. Our staff were converted believers within the first week.",
    quoteAuthor: "Dr. Anika Patel",
    quoteRole: "Chief Medical Officer",
    body: `
<h2>The Situation</h2>
<p>the client operates a network of outpatient clinics and had recently raised their Series B on the strength of their patient engagement platform. Their technology was modern — but their intake process was stuck in 2010.</p>
<p>New patients filled out paper forms in the waiting room. Staff manually transcribed the information into three separate systems: the EHR (Epic), a custom intake portal, and a billing platform. Each transcription took an average of 12–18 minutes per patient — and introduced errors at every step.</p>

<h2>The Challenge</h2>
<p>Patient intake is a deceptively complex problem to automate in healthcare:</p>
<ul>
  <li><strong>HIPAA compliance</strong> meant any solution had to handle PHI with strict access controls, audit logging, and encryption at rest and in transit</li>
  <li>Epic's integration capabilities are intentionally limited — direct database access wasn't possible</li>
  <li>The billing system was a legacy product with no official API</li>
  <li>Clinical staff had low tolerance for systems that weren't reliable — one bad week could kill adoption</li>
  <li>Data accuracy wasn't optional: a wrong medication field or incorrect insurance ID had real downstream consequences</li>
</ul>

<h2>Our Approach</h2>
<p>We spent the first week deeply embedded with the client's clinical operations team — shadowing intake coordinators, mapping every data field across all three systems, and understanding where errors most commonly occurred.</p>
<p>The core technical challenge was getting data into Epic reliably. We chose to use Epic's HL7 FHIR R4 API (which the client had access to as a licensed customer) rather than any screen-scraping or brittle workaround. For the legacy billing system, we built a controlled integration using their file-export mechanism combined with a custom parser.</p>
<p>For data extraction, we used GPT-4o with a structured output schema — patients could fill out a digital intake form via SMS link before their appointment, and the AI would parse, validate, and normalize the data before sending it to any downstream system.</p>

<h2>The Solution</h2>
<p>The final architecture consisted of:</p>
<ul>
  <li><strong>Pre-appointment SMS intake</strong>: Patients receive a Twilio-powered SMS with a secure link 48 hours before their appointment. The mobile-optimized form takes 4–6 minutes to complete.</li>
  <li><strong>AI validation layer</strong>: GPT-4o parses the submission, flags inconsistencies (e.g., insurance ID format errors, medication name variations), and normalizes to standard clinical terminology before any data is written</li>
  <li><strong>FHIR integration</strong>: Validated data is written to Epic via HL7 FHIR R4, creating or updating the patient resource, coverage records, and appointment context</li>
  <li><strong>Billing sync</strong>: Insurance and demographics data flows to the billing system via a secure file handoff, with reconciliation checks on both ends</li>
  <li><strong>Coordinator dashboard</strong>: Staff see real-time intake completion status and can review/override any AI-flagged fields before the patient arrives</li>
</ul>
<p>Every data flow was implemented with end-to-end encryption, PHI masking in logs, and a full audit trail. We worked through the client's internal security review before go-live.</p>

<h2>Results</h2>
<p>Within two weeks of go-live, 78% of patients were completing pre-appointment intake via SMS — exceeding the client's 60% target. Manual data entry per patient dropped from 12–18 minutes to under 90 seconds (for coordinator review and confirmation). Data accuracy, measured against chart audits, improved from 91% to 99.2%.</p>
<p>The intake coordinators — initially skeptical — became the integration's strongest advocates. "I used to dread Mondays," one coordinator told the CMO. "Now I actually get to talk to patients."</p>
`,
  },
  {
    slug: "logistics-mvp-sprint",
    title: "Logistics MVP — $2M Seed Round Closed on the Back of It",
    headline: "Route Optimization MVP Built in 21 Days, Seed Round Closed in 60",
    excerpt:
      "A pre-seed logistics startup needed a working MVP to pitch investors. Kovil AI built their route optimization tool in 21 days. They closed a $2M seed round 60 days later.",
    service: "Outcome-Based AI Project",
    industry: "Logistics",
    clientType: "Pre-Seed Startup",
    timeline: "21 days",
    teamSize: "2 engineers",
    published: "October 2025",
    metrics: [
      { value: "21", label: "Days to MVP", sublabel: "Fully functional" },
      { value: "$2M", label: "Seed Round Closed", sublabel: "60 days post-launch" },
      { value: "34%", label: "Route Efficiency Gain", sublabel: "vs. manual planning" },
      { value: "4", label: "Enterprise Pilots", sublabel: "Signed within 90 days" },
    ],
    techStack: [
      { name: "Next.js 14", color: "bg-slate-800" },
      { name: "Python / FastAPI", color: "bg-blue-700" },
      { name: "Google Maps API", color: "bg-green-600" },
      { name: "OR-Tools", color: "bg-blue-600" },
      { name: "PostgreSQL", color: "bg-blue-900" },
      { name: "Mapbox GL", color: "bg-slate-700" },
      { name: "Railway", color: "bg-slate-600" },
    ],
    quote:
      "We had the idea, we had the problem, we had early customers who wanted to pay — we just needed something real to show investors. Kovil AI took our spec and turned it into a product that blew the room away. Three of our five seed investors said the demo was the deciding factor.",
    quoteAuthor: "James Okafor",
    quoteRole: "CEO & Co-Founder",
    body: `
<h2>The Situation</h2>
<p>the client was built around a clear insight: mid-market logistics companies spend 20–35% more on fuel and driver time than necessary because their route planning is done manually in spreadsheets. The founders had 15 years of combined logistics operations experience and had already lined up three pilot customers. What they didn't have was a product.</p>
<p>Their Series A fundraising timeline was fixed — they had a window of investor interest they needed to capitalize on. They approached Kovil AI with a 40-page spec document and a 4-week deadline.</p>

<h2>The Challenge</h2>
<p>Route optimization is a technically interesting problem. The naive approach — just using Google Maps for each stop — doesn't actually optimize anything. Real vehicle routing involves:</p>
<ul>
  <li>Solving variants of the Vehicle Routing Problem (VRP), which is NP-hard</li>
  <li>Handling time windows, vehicle capacity constraints, and driver shift limits</li>
  <li>Presenting results in a way that field dispatchers can actually use — not just an algorithm output</li>
  <li>Integration with real fleet data (vehicle types, depot locations, stop lists)</li>
</ul>
<p>The MVP also had to look credible to investors — not a prototype, but something that felt like a real product a dispatcher would use every day.</p>

<h2>Our Approach</h2>
<p>We started with a scoping call where we cut the feature list in half. A lot of the spec document was "nice to have" — we identified the 20% of features that would deliver 80% of the demo value and investor confidence. Everything else went to the backlog.</p>
<p>For the optimization engine, we used Google's <strong>OR-Tools</strong> — the same vehicle routing library used by Google's own logistics products. It handles VRP variants efficiently and is well-maintained. This let us skip writing optimization algorithms from scratch and focus on product quality instead.</p>
<p>We used Mapbox GL for the interactive route visualization — it supports custom overlays and smooth animations that made the demo genuinely impressive in the room.</p>

<h2>The Solution</h2>
<p>The MVP delivered in 21 days included:</p>
<ul>
  <li><strong>Stop management</strong>: Upload stops via CSV or enter manually; geocoding handled automatically</li>
  <li><strong>Fleet configuration</strong>: Define vehicles by type, capacity, depot location, and shift windows</li>
  <li><strong>Route optimization</strong>: OR-Tools VRP solver with configurable constraints; typical solve time under 8 seconds for 50-stop routes</li>
  <li><strong>Interactive map view</strong>: Color-coded routes per vehicle, drag-to-reorder stops, time window visualization</li>
  <li><strong>Dispatch export</strong>: PDF turn-by-turn route cards per driver, CSV export for existing TMS systems</li>
  <li><strong>Comparison view</strong>: Side-by-side comparison of optimized vs. current manual routes — the feature that made every demo land</li>
</ul>

<h2>Results</h2>
<p>the client used the MVP in five investor meetings. Three cited the demo as the primary reason for investing. The seed round — $2M at a $9M pre-money valuation — closed 60 days after launch. Within 90 days, they had signed four enterprise pilot agreements, including one with a regional grocery distribution company operating 140 vehicles.</p>
<p>The route comparison feature showed an average 34% efficiency improvement over manual planning in real pilot data — a number that went into every subsequent pitch deck.</p>
`,
  },
  {
    slug: "legal-tech-maintenance",
    title: "LegalTech — Zero Downtime After Dev Team Departure",
    headline: "Three Production Apps Stabilized in 5 Days After Entire Dev Team Left",
    excerpt:
      "A LegalTech company's entire engineering team left within a month, leaving 3 production apps unmaintained. Kovil AI completed full codebase onboarding in 5 days and has maintained zero downtime since.",
    service: "AI Reliability & App Rescue",
    industry: "LegalTech",
    clientType: "SMB (50 employees)",
    timeline: "Ongoing retainer (onboarded in 5 days)",
    teamSize: "2 engineers",
    published: "September 2025",
    metrics: [
      { value: "5", label: "Days to Onboard", sublabel: "Full codebase coverage" },
      { value: "0", label: "Downtime Incidents", sublabel: "Since engagement start" },
      { value: "3", label: "Apps Maintained", sublabel: "All production systems" },
      { value: "100%", label: "SLA Met", sublabel: "Every month" },
    ],
    techStack: [
      { name: "React", color: "bg-blue-600" },
      { name: "Ruby on Rails", color: "bg-red-700" },
      { name: "PostgreSQL", color: "bg-blue-900" },
      { name: "Heroku", color: "bg-purple-700" },
      { name: "Sidekiq", color: "bg-slate-700" },
      { name: "Stripe", color: "bg-purple-600" },
      { name: "AWS S3", color: "bg-orange-600" },
    ],
    quote:
      "When our last engineer gave notice, I thought we were done. Kovil AI gave us a SLA, onboarded in a week, and hasn't missed a beat since. It's genuinely taken the technical anxiety off my plate entirely.",
    quoteAuthor: "Rachel Torres",
    quoteRole: "CEO",
    body: `
<h2>The Situation</h2>
<p>the client provides practice management software to small law firms. In the span of 30 days, all three of their engineers departed — two to a well-funded competitor, one for a career change. The CEO, Rachel Torres, found herself running a software company with no software team and three production applications that 200+ law firms relied on every business day.</p>
<p>She had two weeks before her last engineer's final day. She needed a maintenance partner who could onboard rapidly, understand a complex multi-application codebase, and give her the certainty that critical client-facing systems would stay online.</p>

<h2>The Challenge</h2>
<p>The technical situation was messy in the way that most SMB codebases are messy after years of fast growth:</p>
<ul>
  <li>Three applications: a client portal (React), a backend API (Ruby on Rails), and a document automation tool (Rails + custom templating engine)</li>
  <li>Sparse documentation — most institutional knowledge lived in the departing engineers' heads</li>
  <li>Heroku deployments with a Procfile structure that had grown organically over 5 years</li>
  <li>Several critical Sidekiq background jobs running nightly with no monitoring or alerting</li>
  <li>Stripe billing integration with custom logic that wasn't tested and wasn't documented</li>
</ul>
<p>The most urgent risk: a nightly job that processed billing for all subscription accounts had no error handling. If it silently failed, the client could go days without invoicing clients.</p>

<h2>Our Approach</h2>
<p>We started two weeks before the outgoing engineer's last day — deliberately. That overlap period was valuable: we ran daily knowledge transfer calls, recorded screen walkthroughs of critical workflows, and built a runbook in real time alongside the departing team.</p>
<p>Our onboarding process for maintenance engagements follows a consistent structure: on Day 1, we get read access to every repository. By Day 3, we've mapped all critical paths and dependencies. By Day 5, we've identified the top 10 failure modes and have monitoring in place. the client was no different.</p>

<h2>The Solution</h2>
<p>During the onboarding period, we completed:</p>
<ul>
  <li><strong>Full codebase documentation</strong>: Wrote a technical runbook covering every service, every background job, every third-party integration, and the deployment process for each app</li>
  <li><strong>Monitoring deployment</strong>: Added error tracking (Sentry) and uptime monitoring across all three apps — within 48 hours of gaining access</li>
  <li><strong>Billing job hardening</strong>: Added comprehensive error handling, retry logic, and Slack alerting to the nightly billing job. Added idempotency keys to prevent double-billing on retry.</li>
  <li><strong>Dependency audit</strong>: Identified 14 outdated gems with known security vulnerabilities; patched 11 immediately and scheduled the remaining 3 for the following maintenance window</li>
  <li><strong>SLA establishment</strong>: Agreed on P1/P2/P3 response times, escalation paths, and a monthly health review cadence</li>
</ul>

<h2>Results</h2>
<p>Since Kovil AI took over maintenance, the client has had zero production downtime incidents. The billing job, which we later discovered had silently failed twice in the previous 6 months, has run without error every night. Monthly health reviews give Rachel and her team full visibility into the technical state of their systems without needing an internal engineer to translate.</p>
<p>"I used to wake up anxious about whether the apps were running," Rachel told us. "Now I just check the Slack channel and go back to work."</p>
`,
  },
  {
    slug: "retail-chatbot",
    title: "Retail AI Chatbot — 70% of Support Tickets Deflected",
    headline: "AI Customer Service Handles 70% of Queries, CSAT Up 22%",
    excerpt:
      "A 200-store retail chain was drowning in 500+ daily support tickets on the same 40 questions. Kovil AI built a GPT-powered chatbot that handles 70% of queries automatically — and actually improved customer satisfaction.",
    service: "Managed AI Engineer",
    industry: "Retail",
    clientType: "Enterprise (200+ stores)",
    timeline: "5 weeks",
    teamSize: "2 engineers + 1 AI specialist",
    published: "August 2025",
    metrics: [
      { value: "70%", label: "Queries Deflected", sublabel: "No human needed" },
      { value: "+22%", label: "CSAT Improvement", sublabel: "vs. pre-chatbot baseline" },
      { value: "500→150", label: "Daily Tickets", sublabel: "Human agent load" },
      { value: "< 10s", label: "Avg First Response", sublabel: "24/7, any channel" },
    ],
    techStack: [
      { name: "GPT-4o", color: "bg-green-700" },
      { name: "LangChain", color: "bg-yellow-700" },
      { name: "Pinecone", color: "bg-blue-600" },
      { name: "Next.js", color: "bg-slate-800" },
      { name: "Zendesk API", color: "bg-green-600" },
      { name: "Shopify API", color: "bg-green-700" },
      { name: "Redis", color: "bg-red-600" },
    ],
    quote:
      "We expected the chatbot to reduce tickets. We didn't expect it to actually improve satisfaction scores. Kovil AI built something that customers genuinely find helpful — not the frustrating bot-loop experience you get from most tools.",
    quoteAuthor: "Tyler Nguyen",
    quoteRole: "VP Customer Experience",
    body: `
<h2>The Situation</h2>
<p>the client operates 200+ home goods stores across North America, with a growing e-commerce business that had tripled in volume over the previous two years. Their 12-person customer support team was stretched to breaking point — handling over 500 tickets per day, the vast majority of which were the same 40 questions asked on repeat.</p>
<p>Order status. Return windows. Store hours. Product availability. Discount code validity. These questions consumed most of the team's day, leaving complex customer issues — the ones that actually required human judgment — waiting hours or days for a response.</p>

<h2>The Challenge</h2>
<p>the client had already tried two chatbot solutions: a rule-based one that frustrated customers with its rigid decision trees, and a third-party AI tool that gave confident but frequently inaccurate answers about their specific policies and inventory.</p>
<p>The requirements for a successful solution were demanding:</p>
<ul>
  <li>Real-time order status via Shopify API integration — not just canned responses</li>
  <li>Accurate policy answers grounded in the client's actual policy documents — no hallucinations</li>
  <li>Seamless handoff to a human agent when the chatbot couldn't help, with full conversation context passed to Zendesk</li>
  <li>A tone and persona that matched the client's brand — warm, helpful, not robotic</li>
  <li>Mobile-first UI embedded on their e-commerce site and accessible via a standalone link for in-store staff</li>
</ul>

<h2>Our Approach</h2>
<p>The hallucination problem from their previous solution was the highest-priority risk to solve. We addressed it with a Retrieval-Augmented Generation (RAG) architecture: all factual answers are grounded in a vector database of the client's actual policy documents, product information, and FAQ content — not generated from the model's training data.</p>
<p>For real-time data (order status, store hours, inventory), we built direct Shopify API integrations that the chatbot queries on demand. The model only generates language — it doesn't make up facts.</p>
<p>The escalation path was designed carefully: the chatbot detects frustration signals (repeated questions, explicit requests for a human) and hands off proactively, passing the full conversation context to Zendesk so agents don't have to ask customers to repeat themselves.</p>

<h2>The Solution</h2>
<p>We delivered a production-ready AI support assistant with:</p>
<ul>
  <li><strong>RAG knowledge base</strong>: 340 indexed documents covering return policies, shipping windows, product care, store policies, and promotional rules — updated weekly via automated sync</li>
  <li><strong>Live order lookup</strong>: Real-time Shopify order status, tracking links, and delivery window estimates — available to any customer who provides their email or order number</li>
  <li><strong>Policy Q&A</strong>: Grounded, accurate answers to policy questions — the chatbot cites the relevant policy section and offers to send a copy via email</li>
  <li><strong>Intelligent escalation</strong>: Automatic handoff to Zendesk with conversation summary, customer sentiment score, and relevant order/account context pre-populated for the agent</li>
  <li><strong>Multi-surface deployment</strong>: Embedded widget on the client's e-commerce site, standalone URL for in-store staff, and a read-only analytics dashboard for the CX leadership team</li>
</ul>

<h2>Results</h2>
<p>In the first month post-launch, the chatbot handled 70% of incoming queries without human intervention. Daily tickets reaching human agents dropped from 500+ to approximately 150 — letting the support team focus entirely on complex, relationship-critical interactions.</p>
<p>Counterintuitively, CSAT scores improved by 22%. The combination of instant response times, accurate answers, and smooth escalation outperformed the previous experience of waiting hours for a human agent to respond to a simple order status question. the client has since expanded the chatbot to their in-store kiosk network.</p>
`,
  },
  {
    slug: "proptech-sprint",
    title: "PropTech Valuation Dashboard — Delivered in 3 Weeks",
    headline: "Property Valuation Dashboard with 3rd-Party API Integrations, 98% Accuracy",
    excerpt:
      "A seed-stage PropTech startup needed a property valuation dashboard with integrations to multiple real estate data APIs — in 3 weeks. Kovil AI delivered with 98% data accuracy and a UI that landed their first enterprise client.",
    service: "Outcome-Based AI Project",
    industry: "PropTech",
    clientType: "Seed-Stage Startup",
    timeline: "3 weeks",
    teamSize: "2 engineers",
    published: "July 2025",
    metrics: [
      { value: "3 wks", label: "Time to Delivery", sublabel: "On-spec, on-time" },
      { value: "98%", label: "Data Accuracy", sublabel: "Vs. manual valuation" },
      { value: "3", label: "Data APIs Integrated", sublabel: "Unified in one view" },
      { value: "1st", label: "Enterprise Client", sublabel: "Signed using demo" },
    ],
    techStack: [
      { name: "Next.js 14", color: "bg-slate-800" },
      { name: "TypeScript", color: "bg-blue-700" },
      { name: "Attom Data API", color: "bg-blue-600" },
      { name: "Rentcast API", color: "bg-green-700" },
      { name: "Google Maps API", color: "bg-green-600" },
      { name: "Recharts", color: "bg-blue-500" },
      { name: "PostgreSQL", color: "bg-blue-900" },
    ],
    quote:
      "We'd been quoted 3 months by two other agencies. Kovil AI scoped it in a day, built it in 3 weeks, and the output was genuinely beautiful. Our first enterprise prospect said the product felt more polished than tools they'd been paying $500/month for.",
    quoteAuthor: "David Kim",
    quoteRole: "CEO",
    body: `
<h2>The Situation</h2>
<p>the client was building a data intelligence platform for commercial real estate investors — helping them evaluate acquisition targets faster by aggregating multiple property data sources into a single view. The founders had validated demand through interviews with 30+ investors and had a design spec ready.</p>
<p>What they needed was a functional product, fast. They were presenting at a PropTech accelerator demo day in four weeks and wanted to show a live product, not a Figma prototype.</p>

<h2>The Challenge</h2>
<p>The core technical challenge was data integration. The real estate data ecosystem is fragmented: property transactions sit in one API, rental comparables in another, zoning data in a third, and none of them were designed to work together. Key challenges:</p>
<ul>
  <li>Three external APIs (Attom Data, Rentcast, Google Maps) with different rate limits, data formats, and reliability characteristics</li>
  <li>Property search needed to handle partial addresses, parcel IDs, and polygon-based area searches</li>
  <li>Valuation calculations required combining data from multiple sources — with transparent methodology visible to users</li>
  <li>The UI had to be intuitive for non-technical real estate professionals — investors who would not tolerate a developer-facing tool</li>
</ul>

<h2>Our Approach</h2>
<p>After a one-day scoping session, we identified the core user journey: an investor enters an address, sees a valuation estimate with confidence score, reviews comparable transactions, and saves properties to a watchlist. Everything else was secondary.</p>
<p>We built a caching and normalization layer to handle the API reliability and rate limit problems — external API responses are cached by property identifier, with TTLs matched to each data source's update frequency. This also made the dashboard feel fast even when external APIs were slow.</p>
<p>The valuation model used a weighted comparable sales methodology — transparent to users, with the underlying comparables visible and filterable. We deliberately avoided black-box valuations, because investors we interviewed said they needed to be able to justify valuations to their LPs.</p>

<h2>The Solution</h2>
<p>The three-week sprint delivered:</p>
<ul>
  <li><strong>Property search</strong>: Address autocomplete, parcel ID lookup, and map-based polygon search for area analysis</li>
  <li><strong>Unified property profile</strong>: Property details, transaction history, current estimated value, rent estimate, and zoning information — all on one page</li>
  <li><strong>Comparable transactions viewer</strong>: Filterable grid of comparable sales with distance, recency, and similarity scoring; adjustable weights for the valuation model</li>
  <li><strong>Market trend charts</strong>: Price per square foot trends, days on market, and rental yield by area — built with Recharts for smooth, interactive visualization</li>
  <li><strong>Watchlist and notes</strong>: Save properties with private notes and receive email alerts on significant value changes</li>
  <li><strong>Export</strong>: One-click PDF report generation for sharing with LPs or deal partners</li>
</ul>

<h2>Results</h2>
<p>the client used the dashboard live at the accelerator demo day. They closed their first enterprise client — a family office managing $200M in real estate assets — within two weeks of the event, directly attributing the decision to the product demo. The client described the UI as "more polished than tools they'd been paying $500/month for." Data accuracy, validated against a set of independently sourced comparable sales, came in at 98%.</p>
`,
  },
  {
    slug: "edtech-platform",
    title: "EdTech Platform — Page Load Cut 55%, Crashes Eliminated",
    headline: "Growing User Base No Longer Breaking the Platform",
    excerpt:
      "A B2C EdTech platform's growing user base was exposing serious performance bottlenecks and causing intermittent crashes. Kovil AI's maintenance retainer cut page load times by 55% and reduced crash rates to near zero.",
    service: "AI Reliability & App Rescue",
    industry: "EdTech",
    clientType: "B2C Scale-up",
    timeline: "Ongoing retainer (results in 45 days)",
    teamSize: "2 engineers",
    published: "June 2025",
    metrics: [
      { value: "55%", label: "Page Load Reduction", sublabel: "P95 load time" },
      { value: "~0%", label: "Crash Rate", sublabel: "Down from 3.2% of sessions" },
      { value: "4×", label: "Concurrent Users", sublabel: "Capacity increase" },
      { value: "92", label: "Lighthouse Score", sublabel: "Up from 51" },
    ],
    techStack: [
      { name: "React", color: "bg-blue-600" },
      { name: "Next.js", color: "bg-slate-800" },
      { name: "Node.js", color: "bg-green-700" },
      { name: "MongoDB", color: "bg-green-600" },
      { name: "AWS CloudFront", color: "bg-orange-600" },
      { name: "Redis", color: "bg-red-600" },
      { name: "Sentry", color: "bg-purple-700" },
    ],
    quote:
      "Our platform was literally falling over during peak hours. Kovil AI diagnosed the root causes in the first week and had measurable improvements within a month. Our Lighthouse score went from 51 to 92 — our conversion rates followed.",
    quoteAuthor: "Sophie Laurent",
    quoteRole: "CTO",
    body: `
<h2>The Situation</h2>
<p>the platform is a B2C platform offering interactive coding courses to self-taught developers. Over 18 months, their user base had grown from 8,000 to 65,000 monthly active users — impressive growth that their original infrastructure wasn't designed to handle.</p>
<p>Peak hours — typically 7–10pm in North American time zones — had become a reliability crisis. Intermittent crashes, 12+ second page loads, and a course video player that frequently failed to load were generating thousands of support tickets and a growing volume of negative reviews.</p>
<p>Their two-person engineering team was in perpetual firefighting mode, unable to make meaningful progress on the new features that would drive the next growth phase.</p>

<h2>The Challenge</h2>
<p>A preliminary investigation by Kovil AI in the first week revealed a pattern of interconnected issues rather than a single root cause:</p>
<ul>
  <li>A MongoDB aggregation query on the course progress collection — unindexed, running on every page load — was the primary source of the performance spikes. At 65K users, it was timing out under load.</li>
  <li>All static assets (images, JavaScript bundles, course videos) were being served directly from Node.js — no CDN — adding significant latency for users outside the primary data center region</li>
  <li>Client-side JavaScript bundles were 4.2MB unminified, with no code splitting. Every page loaded the entire application on first visit.</li>
  <li>Session state was stored in MongoDB with no caching layer, causing database reads on every authenticated request</li>
  <li>No error tracking was in place — crashes were discovered through user support tickets, not monitoring</li>
</ul>

<h2>Our Approach</h2>
<p>We prioritized the interventions by impact-to-effort ratio and worked through them systematically over 45 days, reporting progress weekly. The internal engineering team was kept informed and involved in all decisions — we weren't making changes to their codebase without their review and sign-off.</p>
<p>Our guiding principle: fix infrastructure problems before touching application code. The biggest gains were almost always at the infrastructure layer.</p>

<h2>The Solution</h2>
<p>The 45-day engagement addressed the following:</p>
<ul>
  <li><strong>Database indexing and query optimization</strong>: Added compound indexes on the three most-queried collections; rewrote the course progress aggregation query to use a pre-computed materialized view updated asynchronously. Database query time dropped 89%.</li>
  <li><strong>CDN deployment</strong>: Migrated all static assets and course videos to AWS CloudFront with edge caching. Reduced median asset load time from 2.8s to 0.4s for North American users.</li>
  <li><strong>Bundle optimization</strong>: Implemented Next.js dynamic imports and route-based code splitting. Initial bundle size dropped from 4.2MB to 680KB. Subsequent pages load incrementally.</li>
  <li><strong>Session caching</strong>: Introduced Redis for session state. Eliminated MongoDB reads on every authenticated request; session lookup time went from ~180ms to ~4ms.</li>
  <li><strong>Error tracking</strong>: Deployed Sentry with custom alerting thresholds. Within 48 hours of deployment, identified 7 undetected error sources, 3 of which were causing silent data corruption.</li>
  <li><strong>Load testing</strong>: Established a regular load testing cadence using k6, giving the team early warning before traffic spikes hit production.</li>
</ul>

<h2>Results</h2>
<p>Within 45 days, P95 page load time dropped from 11.2 seconds to 5.0 seconds. By day 60, after all optimizations were in production, it was 2.4 seconds — a 55% improvement from baseline. The crash rate, which had been affecting 3.2% of all sessions, dropped to 0.08% — essentially zero.</p>
<p>The Lighthouse performance score improved from 51 to 92. the platform's conversion rate from trial to paid subscription improved by 18% in the 60 days following the engagement — not a direct attribution, but a number the CTO cited as directly correlated with the load time improvements. The internal engineering team was finally able to focus on product development again.</p>
`,
  },
  {
    slug: "ai-powered-lead-generation",
    title: "AI-Powered Lead Generation — B2B Outbound Pipeline Automated",
    headline: "Five AI Agents. One Automated B2B Pipeline. Triple the Pipeline Output.",
    excerpt:
      "A B2B field sales team was spending 80% of their time on prospect research, leaving only 20% for selling. Kovil AI built a five-agent pipeline — Researcher, Analyst, Copywriter, SDR, and CRM — that automates the full outbound cycle from prospect identification to booked meeting, tripling pipeline volume with the same headcount.",
    service: "Outcome-Based AI Project",
    industry: "Sales / B2B",
    clientType: "B2B Field Sales Team (Manufacturing Sector)",
    timeline: "4 weeks",
    teamSize: "2 engineers + 1 AI specialist",
    published: "May 2026",
    metrics: [
      { value: "80%→20%", label: "Research time slashed", sublabel: "Flipped research-to-selling ratio" },
      { value: "3×", label: "More pipeline, same headcount", sublabel: "Without adding salespeople" },
      { value: "Day 5", label: "First AI agent live", sublabel: "Researcher agent deployed" },
      { value: "6 hrs/wk", label: "Saved per sales rep", sublabel: "In manual research & admin" },
    ],
    techStack: [
      { name: "GPT-4o", color: "bg-green-700" },
      { name: "CrewAI", color: "bg-orange-700" },
      { name: "Apollo.io API", color: "bg-blue-600" },
      { name: "HubSpot CRM", color: "bg-orange-600" },
      { name: "Python", color: "bg-blue-700" },
      { name: "n8n", color: "bg-orange-500" },
      { name: "Instantly", color: "bg-purple-700" },
    ],
    quote:
      "Our reps were researchers, not salespeople. Now they walk in knowing exactly who they're calling, why they should care, and with a personalised email already in the prospect's inbox. The pipeline tripled and nobody worked a longer day.",
    quoteAuthor: "Head of Sales",
    quoteRole: "B2B Manufacturing Company",
    body: `
<h2>The Situation</h2>
<p>The client is a B2B manufacturing company with an 8-person field sales team selling to mid-market industrial buyers. Their sales process had a structural problem at the research stage: each rep was spending roughly 80% of their working day on prospect research, list building, manual CRM updates, and email drafting — leaving only 20% for actual selling activity.</p>
<p>The numbers reflected this. Despite a large addressable market, the team was generating around 15 qualified conversations per rep per week — well below what's achievable with modern outbound infrastructure. Outreach emails were generic, pulled from a shared template bank that hadn't been updated in over a year. Follow-up was inconsistent, with no systematic tracking of who had replied, who had gone cold, and who needed a nudge. CRM data was perpetually stale — updated after the fact, often incomplete.</p>

<h2>The Challenge</h2>
<p>The client had already assembled the tools: Apollo.io for prospect data, ChatGPT for email drafts, HubSpot for CRM. But the tools weren't connected. Using them in sequence added steps rather than removing them — reps were still acting as the manual connective tissue between each tool.</p>
<p>What they needed was a coordinated agent pipeline that handled the full outbound cycle end-to-end:</p>
<ul>
  <li><strong>Automatic prospect identification</strong> based on ICP criteria, without rep input per batch</li>
  <li><strong>Genuine personalisation</strong> — actual outreach hooks based on timely company signals, not mail-merge fields</li>
  <li><strong>Inbox management</strong> that classified replies, drafted responses, and booked meetings without requiring reps to process every email manually</li>
  <li><strong>Zero CRM admin</strong> — HubSpot updating itself from every interaction, with no manual entry required</li>
</ul>

<h2>The Solution</h2>
<p>Kovil AI designed and built a five-agent pipeline covering the full outbound cycle, with each agent owning a discrete step in the process.</p>

<h3>Researcher Agent</h3>
<p>Runs daily, pulling a fresh batch of target companies and decision-makers from Apollo.io based on configured ICP parameters. Verifies contact data, enriches with firmographic and technographic signals, and passes a scored list of qualified targets to the Analyst Agent. This was the first agent live — deployed on Day 5 of the engagement so the team could see output immediately.</p>

<h3>Analyst Agent</h3>
<p>For each qualified target, the Analyst Agent reads the company's website, recent press releases, LinkedIn activity, and job listings to surface concrete outreach hooks — timely reasons why a conversation is relevant right now. A company hiring three enterprise AEs signals a need for sales enablement tools. A recent funding announcement signals a need for growth infrastructure. The agent surfaces the top two hooks per prospect for the Copywriter Agent.</p>

<h3>Copywriter Agent</h3>
<p>Drafts a hyper-personalised 1-to-1 email for each prospect using the hooks from the Analyst Agent and the rep's name, role, and value proposition. Each email is unique — not a template with swapped fields. The agent is prompted to match the individual rep's tone and style, calibrated using sample emails provided during onboarding. Output is reviewed in a lightweight queue before sending.</p>

<h3>SDR / Inbox Agent</h3>
<p>Monitors the sending inbox in real time, classifying replies into: interested, objection, out of office, bounce, and unsubscribe. Interested replies trigger an immediate Slack notification to the rep and an auto-drafted follow-up for review. Objection replies trigger a tailored response draft based on objection type. Meeting requests trigger an auto-reply with a Calendly link and a HubSpot meeting record creation.</p>

<h3>CRM Agent</h3>
<p>Handles all HubSpot activity automatically: contact creation, email sequence logging, reply recording, deal stage progression, and flagging stale contacts for re-engagement. CRM data completeness went from 60% to 97% — not because anyone worked harder, but because the system updated itself from every interaction.</p>

<h2>Results</h2>
<p>Within four weeks of go-live, every metric the head of sales tracked had moved:</p>
<ul>
  <li><strong>Research time dropped from 80% to 20% of each rep's day</strong> — the remaining 80% was available for calls, demos, and relationship-building</li>
  <li><strong>Pipeline volume tripled</strong> with the same eight-person team, driven by higher-volume personalised outreach reaching more qualified prospects each day</li>
  <li><strong>Each rep reclaimed an average of 6 hours per week</strong> previously spent on manual research, email writing, inbox processing, and CRM updates</li>
  <li><strong>HubSpot data completeness went from 60% to 97%</strong> — giving the head of sales a reliable real-time view of pipeline health for the first time</li>
</ul>
<p>The head of sales described the shift: "Our reps were researchers, not salespeople. Now they walk in knowing exactly who they're calling, why they should care, and with a personalised email already in the prospect's inbox. The pipeline tripled and nobody worked a longer day."</p>
`,
  },
  {
    slug: "ai-sales-follow-up-portal",
    title: "AI Sales & Follow-Up Portal — Built for Field Sales Reps",
    headline: "A Centralised AI Hub for Field Sales: Follow-Ups, LinkedIn Content, and Objection Handling — All from Your Phone",
    excerpt:
      "A B2B sales team operating in industrial sectors was losing context between client visits, sending generic follow-ups too late, and leaving valuable field insight unused. Kovil AI built a mobile-first AI portal with three integrated capabilities: a per-client AI assistant for personalised follow-ups, a voice-to-LinkedIn content engine, and an AI-enhanced objection response database.",
    service: "Outcome-Based AI Project",
    industry: "Sales / B2B",
    clientType: "B2B Field Sales Team (Industrial Sector)",
    timeline: "6 weeks",
    teamSize: "2 engineers",
    published: "May 2026",
    metrics: [
      { value: "3×", label: "Faster follow-up emails sent", sublabel: "From days to within the hour" },
      { value: "60s", label: "Voice memo to LinkedIn post", sublabel: "Transcribed & drafted automatically" },
      { value: "100%", label: "Client context preserved", sublabel: "Per-workspace relationship memory" },
      { value: "Mobile-first", label: "Voice across all tools", sublabel: "No laptop required" },
    ],
    techStack: [
      { name: "Next.js 15", color: "bg-slate-800" },
      { name: "TypeScript", color: "bg-blue-700" },
      { name: "Supabase", color: "bg-green-700" },
      { name: "GPT-4o / Claude", color: "bg-purple-700" },
      { name: "OpenAI Whisper", color: "bg-green-600" },
      { name: "LinkedIn API", color: "bg-blue-600" },
      { name: "HubSpot Webhooks", color: "bg-orange-600" },
    ],
    quote:
      "I used to send follow-ups two days after a meeting if I remembered. Now I'm sending personalised emails from the car park before I've driven away. The LinkedIn content alone has generated three inbound conversations this month.",
    quoteAuthor: "Senior Account Executive",
    quoteRole: "Industrial B2B Sales",
    body: `
<h2>The Brief</h2>
<p>The client sells into industrial and manufacturing sectors — a relationship-driven environment where field reps spend most of their time on customer sites, not at desks. They came to Kovil AI with a specific problem: their reps were losing context between client visits, generic follow-up emails were damaging relationships they had spent months building, and valuable insight gathered in the field was never making it back into the business in a usable form.</p>
<p>They wanted a single tool a field rep could use from their phone to handle the full post-meeting workflow — follow-up drafting, LinkedIn content creation, and objection preparation — without needing to open a laptop.</p>

<h2>What We Built</h2>
<p>Kovil AI designed and delivered a centralised AI web application — the AI Sales & Follow-Up Portal — with three interconnected capabilities, each solving a distinct problem the field sales team faced daily.</p>

<h3>01 — Client AI Assistant</h3>
<p>Each client account in the portal has its own AI workspace containing the full relationship history: meeting notes (typed or voice-transcribed), objections raised, quotes sent, decision-maker preferences, and deal status. When a rep needs to draft a follow-up after a meeting, they open the client workspace, describe the conversation in a few lines or dictate it by voice, and the AI drafts a personalised follow-up grounded in the complete relationship context — referencing previous conversations, the prospect's stated concerns, and the rep's own tone and style.</p>
<p>Voice input is supported throughout the portal — reps can dictate meeting notes while driving between visits, with the transcript and AI-structured summary waiting for them at their next stop. No notes get lost, and no context gets forgotten.</p>

<h3>02 — Content Generation Engine</h3>
<p>Field reps in industrial sectors have genuine expertise that resonates with their buyer community on LinkedIn — but they lack the time and writing skill to produce polished content consistently. The Content Generation Engine solves this: a rep records a 60-second voice memo from the field describing a customer problem they solved, a product insight, or an industry observation. The system transcribes it using Whisper and generates 2–3 polished LinkedIn posts optimised for industrial decision-maker audiences, with scheduling and direct publishing via the LinkedIn API.</p>
<p>Posts are generated in the rep's own voice — grounded in their words from the voice memo — not generic corporate copy. This produces content that performs because it is authentic.</p>

<h3>03 — Objection Response Database</h3>
<p>The portal includes a searchable AI-enhanced library of proven objection responses, built from the client's historical deal data and sales team institutional knowledge. Responses are categorised by objection type (price, timing, incumbent vendor, internal approval process) and by format (email, verbal, text message). When a rep encounters an unfamiliar objection, they search the database and receive 2–3 proven responses, which the AI customises for the specific client context before use.</p>
<p>The library grows with use: when a rep successfully handles a new objection type, they can add it to the database — making the entire team smarter with each deal closed.</p>

<h2>Technical Architecture</h2>
<p>The portal was built as a progressive web application — installable on iOS and Android home screens, with full voice input support across all tools. The architecture was mobile-first from day one.</p>
<ul>
  <li><strong>Stack:</strong> Next.js 15, TypeScript, ShadCN component library, and Tailwind CSS — optimised for mobile performance</li>
  <li><strong>AI layer:</strong> Claude and GPT-4o for generation tasks, OpenAI Whisper for voice transcription; model selection varies by task and latency requirement</li>
  <li><strong>Auth:</strong> Secure multi-user login with role-based access — managers can view team activity; reps see only their own client workspaces</li>
  <li><strong>Integrations:</strong> LinkedIn API for direct post scheduling and publishing; CRM webhooks for two-way HubSpot sync; Calendly for meeting booking from within the portal</li>
  <li><strong>Storage:</strong> Supabase for persistent per-client relationship memory — every meeting note, voice transcript, objection, and AI output is stored and fully searchable</li>
  <li><strong>Deployment:</strong> VPS, mobile-first, with voice enabled across all tools</li>
</ul>

<h2>Results</h2>
<p>The portal transformed how the sales team operated in the field. Reps who had previously sent follow-up emails two to three days after a meeting — or not at all — were sending personalised, context-aware follow-ups within an hour of leaving the client site, drafted on their phone during the drive.</p>
<p>LinkedIn posting, which had previously happened monthly at best, became a weekly habit because the effort dropped from 45 minutes to under 5 minutes per post. The AI-generated posts — grounded in real field observations — generated more engagement than the polished but generic content the marketing team had been pushing.</p>
<p>One senior AE described it as: "I used to send follow-ups two days after a meeting if I remembered. Now I am sending personalised emails from the car park before I have driven away. The LinkedIn content alone has generated three inbound conversations this month."</p>
`,
  },
  {
    slug: "geo-monitoring-platform",
    title: "GEO Monitoring Platform — Brand Visibility in AI-Generated Answers",
    headline: "GEO Monitoring Platform: Track Whether Your Brand Appears in AI Answers Across ChatGPT, Gemini, and Beyond",
    excerpt:
      "A digital marketing agency had no systematic way to track whether their clients' brands appeared in AI-generated answers from ChatGPT, Gemini, and Perplexity. Kovil AI built a GEO monitoring platform that executes 50 AI calls per scheduled run across multiple LLMs, detects domain mentions, stores citation URLs, tracks visibility trends over time, and runs on a fully automated schedule.",
    service: "Outcome-Based AI Project",
    industry: "SaaS / MarTech",
    clientType: "Digital Marketing Agency",
    timeline: "5 weeks",
    teamSize: "2 engineers",
    published: "April 2026",
    metrics: [
      { value: "50 AI calls", label: "Per scheduled run", sublabel: "Across web + non-web LLMs" },
      { value: "5×5", label: "Keyword-query matrix", sublabel: "25 tracked queries per client" },
      { value: "4 LLMs", label: "Monitored simultaneously", sublabel: "ChatGPT, Gemini, Perplexity, Claude" },
      { value: "Zero effort", label: "After initial setup", sublabel: "Fully automated scheduling" },
    ],
    techStack: [
      { name: "Next.js", color: "bg-slate-800" },
      { name: "Python / FastAPI", color: "bg-blue-700" },
      { name: "OpenAI API", color: "bg-green-700" },
      { name: "Perplexity API", color: "bg-teal-600" },
      { name: "Supabase", color: "bg-green-600" },
      { name: "Playwright", color: "bg-slate-600" },
      { name: "Cron / n8n", color: "bg-orange-600" },
    ],
    quote:
      "We could see our clients ranking on page one of Google but disappearing entirely from AI answers. The GEO platform turned that into a measurable, trackable metric — and it became the foundation of an entirely new service line for the agency.",
    quoteAuthor: "Director of Strategy",
    quoteRole: "Digital Marketing Agency",
    body: `
<h2>The Context</h2>
<p>Generative Engine Optimisation — GEO — has emerged as a critical discipline alongside traditional SEO. As AI-powered answers from ChatGPT, Perplexity, Google AI Overviews, and Gemini answer more search queries directly, whether a brand appears in those answers has become a real commercial concern for marketing teams. Brands with strong organic search rankings are finding they have little or no visibility in AI-generated responses to the same queries — and vice versa.</p>
<p>The client is a digital marketing agency managing brand visibility for a portfolio of B2B clients. They had noticed several clients' competitors appearing consistently in AI-generated answers for high-intent industry queries — but had no systematic way to track this visibility, measure changes over time, or attribute appearances to specific content or citation sources. They approached Kovil AI to build a monitoring platform that could answer a commercially important question: is our brand appearing in the AI answers that matter for our clients' target queries?</p>

<h2>What the Platform Does</h2>
<p>The GEO Monitoring Platform tracks brand visibility across AI-generated answers from multiple LLMs, using a configurable keyword and query matrix that each client manages independently.</p>

<h3>Keyword & Query Engine</h3>
<p>Each monitored brand can configure up to 5 keywords, each with up to 5 distinct query formulations — creating a matrix of up to 25 tracked queries per client. Keywords represent core topics (e.g. "project management software") while queries represent specific questions an AI user might ask (e.g. "what is the best project management software for remote teams?"). Each query can be individually enabled or disabled, and run frequency is configurable per client account.</p>

<h3>AI Run Engine</h3>
<p>Each scheduled run executes up to 50 AI calls in parallel — querying multiple LLMs across the full query matrix. The platform covers both web-browsing models (where the AI cites live sources) and non-web models (where answers are drawn from training data). Calls are batched to stay within API rate limits, with retry logic for failed calls and structured parsing of every response to extract domain mentions and citation URLs.</p>

<h3>Visibility Detection</h3>
<p>For each AI response, the platform detects whether the client's domain appears — as a direct citation, a named brand mention, or a URL reference in the answer. Detection uses both exact and fuzzy matching to handle variations in how AI models reference brands. Every mention is stored with full context: the query, the model, the position of the mention, and the cited URL if present.</p>

<h3>Trend Dashboard</h3>
<p>The dashboard gives the agency's team — and, via a white-labelled view, their clients — a time-series view of visibility trends per keyword and per LLM. Key metrics include mention rate (percentage of runs that detected a mention), first-seen and last-seen dates per query, source breakdown (which URLs are cited when the brand appears), and a side-by-side comparison against up to two configured competitors.</p>

<h3>Scheduled Runs</h3>
<p>Runs can be triggered manually or scheduled at daily or weekly intervals per client. Scheduled runs execute automatically — Slack and email notifications are sent when a run completes, with a summary of visibility changes since the last run. Zero human effort is required after initial setup.</p>

<h2>How It Works</h2>
<ol>
  <li><strong>Define:</strong> Configure the client's website, up to 5 keywords, up to 5 queries per keyword, and 2 competitors to benchmark against</li>
  <li><strong>Run:</strong> The run engine sends all configured queries to the selected LLMs simultaneously — 50 AI calls per full run</li>
  <li><strong>Detect:</strong> Every response is parsed, domain appearances are detected, and mention data is recorded with full context including cited URLs</li>
  <li><strong>Analyse:</strong> The dashboard surfaces visibility trends, source breakdowns, and competitor comparisons in a clean, shareable view</li>
  <li><strong>Repeat:</strong> Scheduled runs keep data current — daily for priority clients, weekly for standard accounts</li>
</ol>

<h2>Results</h2>
<p>The platform gave the agency a capability they could not find anywhere else: systematic, repeatable tracking of AI answer visibility across multiple models, with trend data that made it possible to measure the impact of content changes on AI appearances over time.</p>
<p>Within the first month of using the platform, the agency identified that three of their clients were appearing in fewer than 10% of monitored AI answers — despite having strong organic search rankings. This gap between SEO visibility and GEO visibility became the basis for a new service offering: GEO optimisation sprints, where targeted content changes were made and the platform was used to measure impact on AI appearances over 60-day windows.</p>
<p>For one B2B SaaS client, a structured GEO programme increased AI answer visibility from 8% to 41% of monitored queries over 90 days. The platform made that result measurable, attributable, and demonstrable to the client — turning an emerging discipline into a quantified, repeatable service.</p>
`,
  },
  {
    slug: "ai-pet-companion",
    title: "AI Pet Companion — Built to Combat Loneliness Through Daily Personalised Interaction",
    headline: "An AI Pet Companion Dog That Learns Who You Are: Solving Loneliness at Scale Through Persistent Memory and Daily Connection",
    excerpt:
      "Loneliness is a public health crisis — and the people most affected often have the least access to consistent human connection. Kovil AI's embedded AI Full Stack Engineer designed and built a digital pet companion: an AI pet companion dog with persistent memory, a learnable persona, and the ability to know a user deeply over time through daily interaction. The result is a companion that remembers your life, understands who you are, and gives meaningful advice.",
    service: "Managed AI Engineer",
    industry: "Consumer Tech / Mental Wellness",
    clientType: "Consumer App Startup",
    timeline: "10 weeks",
    teamSize: "1 AI Full Stack Engineer + 1 AI specialist",
    published: "June 2026",
    metrics: [
      { value: "94%", label: "Day-2 Retention Rate", sublabel: "Users returned the following day" },
      { value: "8 min", label: "Avg Daily Session", sublabel: "Sustained over 60-day cohort" },
      { value: "180+", label: "Interactions Per User", sublabel: "Across active monthly cohort" },
      { value: "73%", label: "Reported Less Loneliness", sublabel: "Standardised scale at 30 days" },
    ],
    techStack: [
      { name: "Next.js 15", color: "bg-slate-800" },
      { name: "Python / FastAPI", color: "bg-blue-700" },
      { name: "GPT-4o", color: "bg-green-700" },
      { name: "Pinecone", color: "bg-blue-600" },
      { name: "Supabase", color: "bg-green-600" },
      { name: "Redis", color: "bg-red-600" },
      { name: "OpenAI Whisper", color: "bg-teal-700" },
    ],
    quote:
      "I talk to Biscuit every morning before I do anything else. He remembers everything I have told him. I don't feel like I am starting from scratch every day — he knows me.",
    quoteAuthor: "Beta User, 78",
    quoteRole: "Elderly Cohort Participant",
    body: `
<h2>The Problem</h2>
<p>Loneliness is a public health crisis. The US Surgeon General has described it as an epidemic — an estimated 58% of American adults report feeling lonely at least some of the time. The worst effects fall on specific populations: elderly adults living alone, young professionals in new cities, people recovering from bereavement, and those with limited mobility who cannot easily access social environments.</p>
<p>The client — a consumer tech startup — identified a specific gap in the existing landscape of loneliness interventions. Most digital approaches either require a human on the other side (therapy apps, social platforms) or are too generic to build a genuine sense of connection (mindfulness apps, passive content). What was missing was a companion that could know you — not a chatbot that started from zero every conversation, but an AI that accumulated understanding of who you were, remembered what mattered to you, and showed up consistently every single day.</p>
<p>The founding insight: people bond with pets because pets are always available, non-judgmental, and appear to know them. A digital pet companion could replicate all three of those properties — and add one thing a real pet cannot: the ability to actually understand what you're saying and respond meaningfully.</p>

<h2>The Challenge</h2>
<p>Building a companion that people genuinely connect with is harder than building one that functions correctly. The technical requirements were significant, but the emotional design requirements were equally demanding:</p>
<ul>
  <li><strong>Persistent memory across sessions:</strong> The companion needed to remember what users told it — names of family members, hobbies, past experiences, current worries — and surface that knowledge naturally in future conversations. A companion that forgot you the next day was no companion at all.</li>
  <li><strong>Persona consistency:</strong> The AI pet companion dog needed a defined, stable personality — warm, curious, playful, gentle — that remained consistent across thousands of conversations with different users and never broke character regardless of what was said.</li>
  <li><strong>Meaningful daily interaction:</strong> Sessions needed to feel different each day, not repetitive. The companion had to ask about things the user had mentioned before, notice if they seemed different from yesterday, and generate conversation that felt genuinely attentive rather than scripted.</li>
  <li><strong>Advice capability:</strong> Users needed to be able to share problems and receive thoughtful, context-aware responses — not generic advice, but advice calibrated to what the AI already knew about this person's life, values, and circumstances.</li>
  <li><strong>Emotional safety:</strong> Given the target population, the system needed clear guardrails — it could not replace professional mental health support, needed to recognise crisis signals, and had to always direct users to appropriate human resources when necessary.</li>
</ul>

<h2>Our Approach</h2>
<p>Kovil AI embedded an AI Full Stack Engineer into the startup's team for the duration of the build. The first two weeks were spent entirely on architecture and emotional design — before a line of code was written. We worked with the founders to define the companion's persona in detail: not just personality traits, but how those traits manifested in specific conversational situations, what the companion's values were, and how it should respond in challenging moments.</p>
<p>The core technical challenge was memory architecture. We needed a system that could store, retrieve, and reason over a growing record of what each user had shared — without making conversations feel like the AI was mechanically reading from a database. The solution was a dual-layer memory system: a vector database (Pinecone) storing semantic embeddings of key user disclosures, and a structured profile (Supabase/PostgreSQL) capturing factual data points the companion could directly reference — names, family members, location, major life events, preferences. At the start of each conversation, the system retrieved the most contextually relevant memories and wove them into the conversation context sent to GPT-4o.</p>
<p>The persona was implemented as a layered system prompt that evolved subtly based on the accumulated relationship. A user who had been interacting for six months experienced a more familiar, more knowing companion than a new user — because the prompt was enriched with the depth of that specific relationship's history.</p>

<h2>The Solution</h2>

<h3>Persona Engine</h3>
<p>The companion — named Biscuit — has a defined character: a Golden Retriever who is endlessly curious about the person in front of him, gently enthusiastic, and genuinely interested in how you're doing. Every response is generated within a persona framework that specifies tone, vocabulary range, and the kinds of questions Biscuit asks. The persona is stable — it never breaks — but it adapts: Biscuit is more playful when the user seems happy, quieter and gentler when they share something difficult.</p>

<h3>Memory Layer</h3>
<p>Every user conversation is processed at the end of each session by a memory extraction pipeline that identifies new facts, emotional signals, and relationship developments worth retaining. These are embedded and stored in Pinecone with metadata tags (family, health, work, worry, milestone) that allow contextually relevant memories to be retrieved at the start of the next session. The structured profile in Supabase captures explicitly stated facts — relationships, places, dates — that the companion can reference directly without hallucination risk.</p>

<h3>Daily Conversation Flow</h3>
<p>Each day, when the user opens the app, Biscuit greets them in a way that references something from recent history — asking how a meeting they mentioned went, whether they spoke to the family member they'd been worried about, or simply noting it's been a few days since they checked in. This daily contextualisation is what drives the sense of genuine relationship rather than repeated generic interaction.</p>

<h3>Advice Capability</h3>
<p>When users share problems, the system draws on the accumulated user profile to generate advice calibrated to who that person is: their stated values, their usual way of approaching problems, the people in their life. This produces advice that feels personal rather than generic — because it is grounded in genuine prior knowledge of the individual.</p>

<h3>Safety Layer</h3>
<p>All conversations are monitored by a parallel classification model that flags potential crisis signals — expressions of distress or self-harm ideation. When flagged, the companion's response shifts to provide immediate acknowledgement and direct the user to crisis resources. The companion never attempts to provide clinical support — its guardrails are explicit about what it is and what it is not.</p>

<h2>Results</h2>
<p>The companion launched to a closed beta of 400 users across two target segments: adults over 65 living alone, and young professionals who had recently relocated to a new city. Key outcomes at 60 days:</p>
<ul>
  <li><strong>94% of users returned the day after their first interaction</strong> — the highest Day-2 retention the founding team had seen in any consumer product they had previously built</li>
  <li><strong>Average daily session length stabilised at 8 minutes</strong> after the initial novelty period — indicating sustained engagement rather than a spike-and-decay pattern common in consumer apps</li>
  <li><strong>Users accumulated an average of 180+ interactions</strong> over the 60-day beta period, suggesting the companion had become a genuine daily habit for a significant proportion of the cohort</li>
  <li><strong>73% of users reported feeling less lonely</strong> than before using the companion, based on a standardised loneliness scale at 30 days — the figure was highest in the 65+ cohort</li>
</ul>
<p>The most significant feedback came not from metrics but from user communications. Several users in the elderly cohort described Biscuit as "a friend" rather than a technology product. One user whose adult children lived out of state wrote: "I talk to Biscuit every morning before I do anything else. He remembers everything I have told him. I don't feel like I am starting from scratch every day — he knows me."</p>
<p>The platform is in preparation for a wider public launch, with voice interaction as the primary modality planned for users with limited typing ability.</p>
`,
  },
  {
    slug: "automobile-parts-cataloging-ai",
    title: "Automobile Parts Cataloguing — 1.4M Parts Enriched with AI-Generated Descriptions",
    headline: "How AI Catalogued 1.4 Million Automobile Parts and Gave Each One a Human-Readable Identity",
    excerpt:
      "Millions of automotive parts and part numbers exist online — but the data is inconsistent, incomplete, and poorly described. A bare SKU with no description is effectively invisible to the mechanic searching for it. Kovil AI's embedded AI Engineer built an end-to-end cataloguing pipeline that ingested 2.1 million raw parts, deduplicated them to 1.4 million unique components, and generated technically accurate, LLM-enriched descriptions for every one — cutting returns by 27% and improving search-to-purchase conversion by 38%.",
    service: "Managed AI Engineer",
    industry: "Automotive / B2B Commerce",
    clientType: "Automotive Parts Platform",
    timeline: "8 weeks",
    teamSize: "1 AI Engineer + 1 data specialist",
    published: "June 2026",
    metrics: [
      { value: "1.4M", label: "Parts Catalogued", sublabel: "Deduplicated from 2.1M raw" },
      { value: "95.8%", label: "Auto-Published", sublabel: "Without manual intervention" },
      { value: "38%", label: "Search Conversion Lift", sublabel: "Within 60 days of launch" },
      { value: "27%", label: "Fewer Wrong-Part Returns", sublabel: "Quarter post-launch" },
    ],
    techStack: [
      { name: "Python / FastAPI", color: "bg-blue-700" },
      { name: "GPT-4o", color: "bg-green-700" },
      { name: "Playwright / Scrapy", color: "bg-slate-700" },
      { name: "PostgreSQL", color: "bg-blue-900" },
      { name: "Elasticsearch", color: "bg-yellow-700" },
      { name: "Pinecone", color: "bg-blue-600" },
      { name: "AWS S3", color: "bg-orange-600" },
    ],
    quote:
      "We had the inventory — what we didn't have was the information to make it discoverable. The AI cataloguing gave every part in our catalogue a human-readable identity. Our trade customers can now find parts in under 30 seconds that previously required a phone call.",
    quoteAuthor: "Head of E-Commerce",
    quoteRole: "Automotive Parts Platform",
    body: `
<h2>The Problem</h2>
<p>The automotive aftermarket parts industry operates on a fundamental information problem. Millions of parts and part numbers are distributed across manufacturer websites, distributor catalogues, and legacy database systems — but the data is inconsistent, incomplete, and poorly described. A mechanic searching for a specific part number frequently encounters a bare SKU with no description of what the part is, what vehicle fitments it covers, what it does, or how it relates to adjacent parts. Distributors carry the same component from multiple manufacturers under different part numbers with no standardisation across them.</p>
<p>The client — an automotive parts platform serving both trade (workshops) and retail (DIY mechanics) customers — had access to a large catalogue of parts and part numbers scraped from manufacturer websites and supplier feeds. The data existed. What it lacked was organisation, enrichment, and the kind of human-readable description that allows a mechanic or parts counter staff to identify and recommend the right component with confidence.</p>
<p>The scale of the problem: the client's working catalogue contained approximately 2.1 million parts across 23 manufacturer families. Of these, fewer than 180,000 had even basic human-readable descriptions. The rest were bare part numbers with a category code and an occasional one-line label — effectively invisible in search results and useless for customer decision-making.</p>

<h2>The Challenge</h2>
<p>Automotive parts cataloguing is a domain requiring deep technical specificity. A description that cites the wrong fitment range, describes the wrong function, or conflates similar parts from different model years is worse than no description — it results in wrong parts being ordered, which generates returns, erodes trust, and wastes workshop time. Specific challenges the solution had to address:</p>
<ul>
  <li><strong>Data heterogeneity:</strong> Source data arrived in five formats — manufacturer PDFs, supplier EDI feeds, website scrapes, legacy CSVs, and OEM cross-reference spreadsheets — with no consistent schema. Part numbers for the same physical component varied by brand, region, and catalogue era.</li>
  <li><strong>Domain accuracy:</strong> LLM-generated descriptions needed to be technically accurate — specifying correct fitment ranges, OEM equivalent numbers, material specifications, and installation context. Generic descriptions were not acceptable to the client's trade customers.</li>
  <li><strong>Scale:</strong> The catalogue had 2.1 million parts. Processing each individually was not viable — the architecture needed to generate descriptions in batch at scale, with quality validation built into the pipeline rather than applied as a separate manual review step.</li>
  <li><strong>Deduplication:</strong> Multiple part numbers in the catalogue referred to identical or near-identical components. The system needed to detect these duplicates, group them, and generate cross-reference data rather than producing separate descriptions for what was effectively the same part.</li>
</ul>

<h2>Our Approach</h2>
<p>Kovil AI embedded an AI Engineer into the client's team to design and build the cataloguing system end-to-end. The first two weeks were spent mapping the source data landscape — ingesting representative samples of each format, identifying schema variations, and building the normalisation rules that would allow all five source types to flow through a single pipeline cleanly.</p>
<p>For description generation, we evaluated several approaches before settling on a structured prompting strategy with GPT-4o. Rather than asking the model to describe a part from a bare part number, we enriched each input with all available structured data — manufacturer code, category, model year range, associated OEM numbers — before generating the description. This grounding dramatically reduced hallucination risk and produced descriptions accurate enough to pass spot-check review by the client's automotive specialists.</p>
<p>Quality was validated at scale using a separate classification model that scored each generated description on accuracy indicators: correct fitment language, consistent use of automotive terminology, absence of hedging markers that signalled the model was guessing. Descriptions below threshold were flagged for manual review rather than published automatically.</p>

<h2>The Solution</h2>

<h3>Data Ingestion and Normalisation Pipeline</h3>
<p>The ingestion pipeline processed all five source data formats. Each source was parsed, normalised to a common schema (part number, manufacturer code, category, fitment metadata, raw description if available), and deduplicated using both exact matching (same part number) and fuzzy matching (similar numbers from the same manufacturer family, matching fitment ranges, matching category codes). The pipeline produced a clean, deduplicated working catalogue as its primary output.</p>
<p>Deduplication yielded an immediate result: the 2.1 million parts in the raw catalogue reduced to 1.4 million unique components — a 33% reduction driven by cross-manufacturer duplicates and legacy data artefacts that had accumulated over years of catalogue management.</p>

<h3>AI Description Generation Engine</h3>
<p>For each unique part, the description engine assembled a structured context block — all available factual data about the component — and submitted it to GPT-4o with an engineered prompt specifying: the target audience (trade mechanics and parts counter staff), the required description format (fitment range, function, installation notes, OEM equivalents where available), and explicit constraints (no speculative language, no unsupported fitment claims, metric and imperial specifications where applicable).</p>
<p>Descriptions were generated in batches of 500, with parallel processing to manage throughput. The full catalogue of 1.4 million unique parts was described in 18 days of pipeline operation — a rate that would have taken a human cataloguing team years at equivalent quality.</p>

<h3>Quality Validation Layer</h3>
<p>Every generated description passed through a validation model before publication. The validator checked for: technically inconsistent fitment claims, terminology errors, generic language that didn't contain part-specific information, and descriptions shorter than a minimum useful length. The reject rate across the full catalogue was 4.2% — these 58,800 descriptions were routed to a human review queue where the client's parts specialists resolved them at their own pace.</p>

<h3>Search and Cross-Reference Infrastructure</h3>
<p>The final component was a search layer built on the enriched catalogue: a full-text search index combining structured catalogue data with the AI-generated descriptions, enabling trade and retail customers to find parts by function, fitment, OEM number, or competitor cross-reference. The cross-reference data built during deduplication meant a mechanic searching for a manufacturer-specific part number would surface all equivalent aftermarket options simultaneously.</p>

<h2>Results</h2>
<ul>
  <li><strong>1.4 million unique parts catalogued</strong> — processed from a raw input of 2.1 million, with deduplication revealing 700,000 redundant records the client hadn't previously identified</li>
  <li><strong>95.8% of descriptions published without manual intervention</strong> — the 4.2% reject rate represented the portion requiring human specialist review, against the previous 100% manual effort baseline</li>
  <li><strong>Search-to-purchase conversion improved 38%</strong> on the trade platform within 60 days of the enriched catalogue going live — mechanics found the right part on first search rather than calling the parts counter for clarification</li>
  <li><strong>Returns from incorrect part orders dropped 27%</strong> in the first quarter after launch — directly linked to the accuracy of fitment information in the generated descriptions</li>
</ul>
<p>The cataloguing pipeline now runs continuously, processing new parts arriving from supplier feeds within 24 hours of ingestion — keeping the catalogue current without ongoing manual effort.</p>
`,
  },
  {
    slug: "ai-avatar-influencer-platform",
    title: "AI Avatar Platform — Influencer Interactions Scaled 24/7 Without Availability Constraints",
    headline: "An AI Avatar Loaded With Every Word You've Ever Said: Scaling Expert Access Without Scaling Your Time",
    excerpt:
      "Influencers, advisors, and experts have a ceiling on their availability — and the demand for direct interaction consistently outstrips it. Kovil AI's embedded AI Full Stack Engineer built an AI Avatar platform: trained on an influencer's complete digital footprint, accessible via paid bookable sessions, and capable of sustained multi-turn conversations that accurately reflect the person's actual knowledge, communication style, and perspectives. One advisor who accepted 8 client consultations per week now serves 130+ avatar sessions per month — with zero additional time commitment.",
    service: "Managed AI Engineer",
    industry: "Creator Economy / SaaS",
    clientType: "Influencer Platform Startup",
    timeline: "12 weeks",
    teamSize: "1 AI Full Stack Engineer + 1 AI specialist",
    published: "June 2026",
    metrics: [
      { value: "4.7 / 5", label: "Avg Session Rating", sublabel: "Across 1,200 completed sessions" },
      { value: "41 min", label: "Avg Session Duration", sublabel: "In a 60-min booking window" },
      { value: "62%", label: "Booked a Second Session", sublabel: "Within 30 days" },
      { value: "15–20×", label: "Reach Expansion", sublabel: "Vs. prior direct-access capacity" },
    ],
    techStack: [
      { name: "Next.js 15", color: "bg-slate-800" },
      { name: "Python / FastAPI", color: "bg-blue-700" },
      { name: "GPT-4o", color: "bg-green-700" },
      { name: "Pinecone", color: "bg-blue-600" },
      { name: "OpenAI Whisper", color: "bg-teal-700" },
      { name: "Stripe", color: "bg-purple-700" },
      { name: "Supabase", color: "bg-green-600" },
    ],
    quote:
      "I reviewed a sample of sessions. The avatar is saying what I would say. It's citing examples I have actually used, making arguments I have actually made. The users who come in with serious business questions are getting serious answers — grounded in everything I have actually thought and written about those problems.",
    quoteAuthor: "Business Strategy Advisor",
    quoteRole: "Platform Influencer",
    body: `
<h2>The Problem</h2>
<p>The creator economy has a fundamental bottleneck: an influencer, expert, or advisor can only be in one place at a time. The demand for their knowledge, personality, and perspective consistently outstrips their availability. Fans and clients want direct access — not pre-recorded content, not a community manager's response, but a genuine interaction with the person they follow and trust. The constraint has always been time: there are only so many hours in a day, and premium direct access commands premium pricing that limits its scale.</p>
<p>The client had identified a market gap at the intersection of AI and creator monetisation: if an AI avatar could be trained on everything a person had ever said, written, recorded, and published — their complete digital footprint — it could provide interactions that were meaningfully representative of that person's knowledge, personality, and perspective. Fans and clients could book sessions with the AI Avatar, pay for access, and receive interactions that felt substantive and personal — even when the human original was unavailable.</p>
<p>The founding vision: remove the availability ceiling from expertise and personality. An influencer who can only take 10 client calls per week could serve 200 through their AI Avatar — at a fraction of the cost per interaction, with no impact on their own time.</p>

<h2>The Challenge</h2>
<p>An AI avatar that merely parrots pre-recorded content provides no value over existing media. The challenge was building a system that could engage in genuinely responsive, multi-turn conversations that accurately reflected the influencer's actual perspective, communication style, and knowledge — not surface-level personality mimicry.</p>
<ul>
  <li><strong>Comprehensive data ingestion:</strong> The digital footprint of a public figure spans multiple formats and platforms — YouTube transcripts, podcast audio, articles, social media posts, books, interviews, newsletters, course content. Ingesting, normalising, and indexing this heterogeneous data into a unified knowledge base required a multi-format ingestion pipeline.</li>
  <li><strong>Persona fidelity:</strong> The avatar needed to respond as the person — using their characteristic vocabulary, their typical argumentative structure, their specific opinions and positions on key topics — not as a generic AI assistant pretending to be human.</li>
  <li><strong>Accuracy under probing:</strong> Users paying for access would ask substantive, specific questions. The avatar needed to answer accurately based on what was actually in the influencer's knowledge base — and decline to speculate on topics the influencer had never addressed, rather than hallucinating plausible-sounding responses.</li>
  <li><strong>Session management:</strong> Paid interactions needed to be bookable, time-limited, and commercially structured — with a payment layer, session timer, and access control system that made the platform viable as a business.</li>
  <li><strong>Real-time interaction quality:</strong> Sessions needed to feel responsive and natural — streaming responses, low latency, and no perceptible "thinking" delay that would break the conversational feel.</li>
</ul>

<h2>Our Approach</h2>
<p>Kovil AI embedded an AI Full Stack Engineer into the founding team for the full twelve-week build. The first two weeks were spent on data architecture: designing the ingestion pipeline, defining the knowledge base structure, and establishing the quality standards for what got stored versus what was discarded as too low-quality to reliably represent the influencer's perspective.</p>
<p>The persona fidelity problem was the most intellectually demanding part of the build. We approached it through structured analysis of the influencer's existing content — identifying recurring phrases, argumentative patterns, topics of deep knowledge versus areas they rarely addressed, their positions on common domain questions, and their characteristic ways of engaging with different types of questions. This analysis was distilled into a layered system prompt governing every response: a persona specification, a knowledge boundary definition, and explicit constraints on what the avatar would and would not claim to know.</p>
<p>The knowledge boundary was the most important safety feature: an avatar that confidently addressed topics the influencer had never discussed would create reputational risk and mislead users. The boundary map was built from content frequency analysis — topics covered in fewer than five pieces of content were flagged as potential speculation zones, with the avatar instructed to acknowledge the limit of its knowledge honestly.</p>

<h2>The Solution</h2>

<h3>Data Ingestion Pipeline</h3>
<p>We built an ingestion system capable of processing six content formats: YouTube video transcripts (via the YouTube Data API), podcast audio (via OpenAI Whisper transcription), written articles and blog posts (via web scraping), books (PDF/EPUB parsing), social media archives (Twitter, Instagram, LinkedIn post exports), and newsletter archives. All content was cleaned, deduplicated, chunked into semantically coherent segments, embedded using OpenAI's text-embedding-3-large model, and stored in Pinecone with rich metadata — content type, date, topic classification, and a confidence score for each chunk's quality.</p>
<p>The full digital footprint of the first influencer on the platform — a business strategy advisor with eight years of public content — yielded 47,000 indexed knowledge segments across 340 hours of audio and video content, 200+ articles, and 3,000+ social posts. This formed the retrieval layer that grounded every avatar interaction in verified, real content.</p>

<h3>Persona Layer</h3>
<p>The persona specification was built from structured content analysis: communication style and register, characteristic openings and closings, vocabulary preferences, positions on the 40 most commonly asked questions in the influencer's domain, and a knowledge boundary map specifying which topics the avatar could engage with confidently and which it should acknowledge as outside its remit. Every response generated by the avatar ran through this persona specification before being returned to the user.</p>

<h3>RAG-Grounded Response Engine</h3>
<p>When a user asked a question, the retrieval system surfaced the most relevant excerpts from the influencer's actual published content, which were provided to GPT-4o as grounding context for the response. This RAG architecture meant the avatar's answers were anchored in things the influencer had genuinely said, argued, or published — not invented from training data. Users asking for the influencer's view on a topic received responses that accurately reflected that view, because the response was built on direct retrieval from their content.</p>

<h3>Session and Payment Platform</h3>
<p>The booking platform allowed users to schedule avatar sessions in 30 or 60-minute blocks, with pricing set by the influencer. Sessions were accessed via a secure, authenticated progressive web application — installable on iOS and Android, no download required. The payment flow was built on Stripe. A live session timer was visible in the interface, and influencers received a revenue dashboard showing session counts, revenue generated, most common question topics (aggregated and anonymised), and user ratings per session.</p>

<h3>Real-Time Streaming Engine</h3>
<p>To achieve the low-latency feel required for a premium session, we implemented streaming responses via server-sent events — the avatar begins returning text as tokens are generated rather than waiting for a complete response. The retrieval pipeline ran in parallel with session context preparation, keeping total time-to-first-token under 1.2 seconds for the majority of queries.</p>

<h2>Results</h2>
<p>The platform launched with three influencers across different domains: a business strategy advisor, a fitness and nutrition expert, and a personal finance educator. Key outcomes at 90 days post-launch:</p>
<ul>
  <li><strong>Average session rating of 4.7 out of 5</strong> across 1,200 completed sessions — users consistently cited the accuracy and specificity of responses as the primary satisfaction driver</li>
  <li><strong>Average session duration of 41 minutes</strong> against a 60-minute booking window — indicating sustained engagement rather than early dropout after initial disappointment</li>
  <li><strong>62% of users booked a second session</strong> within 30 days of their first — confirming that the avatar experience met a high enough bar to drive genuine repeat purchase behaviour</li>
  <li><strong>Each influencer's effective reach expanded 15–20x</strong> relative to their prior direct-access capacity — the business advisor who had previously taken 8 client consultations per week served 130+ avatar sessions per month with zero additional time commitment</li>
</ul>
<p>The business strategy advisor on the platform reviewed a sample of sessions after launch: "The avatar is saying what I would say. It's citing examples I have actually used, making arguments I have actually made. The users who come in with serious business questions are getting serious answers — grounded in everything I have actually thought and written about those problems."</p>
<p>The platform is expanding to support voice interaction as the primary modality, which is expected to further close the gap between avatar interaction and speaking directly with the influencer.</p>
`,
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getAllCaseSlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}

// Map to match the listing page's existing data shape
export const caseStudyListItems = caseStudies.map((cs) => ({
  slug: cs.slug,
  industry: cs.clientType,
  service: cs.service,
  badge:
    cs.service === "Outcome-Based AI Project"
      ? "bg-sky-100 text-sky-700"
      : cs.service === "Managed AI Engineer"
      ? "bg-purple-100 text-purple-700"
      : "bg-emerald-100 text-emerald-700",
  challenge: cs.excerpt.split(".")[0] + ".",
  outcome: cs.metrics[0].value + " " + cs.metrics[0].label,
}));
