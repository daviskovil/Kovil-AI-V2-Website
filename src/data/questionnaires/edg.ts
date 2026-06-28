import type { DiscoveryConfig } from '@/src/types/questionnaire'

const edg: DiscoveryConfig = {
  clientSlug: 'edg',
  clientName: 'Excellence Driving Group',
  projectTitle: 'AI Data Analytics & Predictive Platform',
  tabs: [
    // ── 1. Business & Objectives ───────────────────────────────────────────────
    {
      id: 'business-objectives',
      label: '1. Business & Objectives',
      shortLabel: 'Business',
      questions: [
        {
          id: 'BUS-01',
          question:
            'What are the top 3 business outcomes you expect from this solution in the first phase?',
          purpose:
            'Anchors scope and success criteria; separates must-haves from vision.',
          priority: 'Must-have',
          feedsDocument: 'SOW, Project Plan',
        },
        {
          id: 'BUS-02',
          question:
            'How will success be measured? Please give concrete KPIs and target values (e.g. reduce instructor idle time by X%).',
          purpose: 'Defines acceptance criteria and ROI narrative.',
          priority: 'Must-have',
          feedsDocument: 'SOW, POC',
        },
        {
          id: 'BUS-03',
          question:
            'Who are the primary users (executives, ops managers, branch managers, customer service) and roughly how many of each?',
          purpose: 'Drives licensing, RBAC design and UI priorities.',
          priority: 'Must-have',
          feedsDocument: 'SOW, ADR (Auth/RBAC)',
        },
        {
          id: 'BUS-04',
          question: 'Who is the final decision-maker and owner for this initiative?',
          purpose: 'Identifies approval path and keeps momentum.',
          priority: 'Must-have',
          feedsDocument: 'SOW',
        },
        {
          id: 'BUS-05',
          question:
            'What recurring operational decisions should the system support (capacity planning, hiring, fleet allocation, marketing spend)?',
          purpose: 'Maps features to real decisions, avoids building unused reports.',
          priority: 'Must-have',
          feedsDocument: 'SOW, Project Plan',
        },
        {
          id: 'BUS-06',
          question:
            'Are there existing reports or dashboards this must replace or complement?',
          purpose: 'Avoids duplication; identifies migration scope.',
          priority: 'Important',
          feedsDocument: 'SOW, Data Architecture',
        },
        {
          id: 'BUS-07',
          question:
            'What is the minimum viable scope you would accept for a first go-live, versus the full vision?',
          purpose: 'Enables phased delivery and a credible MVP.',
          priority: 'Must-have',
          feedsDocument: 'SOW, Project Plan',
        },
        {
          id: 'BUS-08',
          question:
            'Are there board-level, group-level or regulatory (e.g. RTA) reports this should feed?',
          purpose: 'Surfaces compliance and reporting obligations early.',
          priority: 'Important',
          feedsDocument: 'SOW, ADR (Reporting)',
        },
      ],
    },

    // ── 2. Data Sources Inventory ──────────────────────────────────────────────
    {
      id: 'data-sources',
      label: '2. Data Sources Inventory',
      shortLabel: 'Data Sources',
      questions: [
        {
          id: 'SRC-01',
          question:
            "Please confirm the complete list of systems holding relevant data (EDC/MongoDB, Odoo ERP, Zoho CRM, social platforms, BigQuery) and add any we've missed.",
          purpose: 'Establishes the true source landscape for the ETL design.',
          priority: 'Must-have',
          feedsDocument: 'Data Architecture, SOW',
        },
        {
          id: 'SRC-02',
          question:
            'For the EDC app on MongoDB: approximate data size (GB / document count), number of collections, and monthly growth?',
          purpose: 'Sizes ingestion and BigQuery storage cost.',
          priority: 'Must-have',
          feedsDocument: 'Cost Model, Data Architecture',
        },
        {
          id: 'SRC-03',
          question:
            'How many years of history exist per source, and is full history retained or archived/truncated?',
          purpose: 'Determines training depth available for forecasting.',
          priority: 'Must-have',
          feedsDocument: 'ML Design, Data Architecture',
        },
        {
          id: 'SRC-04',
          question:
            'Odoo ERP: version, hosting (Odoo Online / on-prem / partner-hosted) and is read access available via API or direct PostgreSQL?',
          purpose: 'Defines feasibility and method of Odoo extraction.',
          priority: 'Must-have',
          feedsDocument: 'ADR (Connectors), Data Architecture',
        },
        {
          id: 'SRC-05',
          question:
            'Zoho CRM: which edition, is API access available, is Zia in use, and approximate lead volume per month?',
          purpose: 'Defines Zoho extraction approach and lead-flow modelling.',
          priority: 'Must-have',
          feedsDocument: 'ADR (Connectors), Data Architecture',
        },
        {
          id: 'SRC-06',
          question:
            'Which social media platforms generate leads, and how do they currently flow into Zoho (native integration / manual / Ads APIs)?',
          purpose: 'Clarifies whether social data needs separate ingestion.',
          priority: 'Important',
          feedsDocument: 'Data Architecture',
        },
        {
          id: 'SRC-07',
          question:
            'Current MongoDB → BigQuery sync: what tool/method, what frequency, which collections, and is it reliable?',
          purpose: 'We can reuse or replace this; affects ETL critical path.',
          priority: 'Must-have',
          feedsDocument: 'Data Architecture, ADR (ETL)',
        },
        {
          id: 'SRC-08',
          question:
            'Are there data dictionaries, schema docs or ER diagrams for any source? Can anonymised samples be shared?',
          purpose: 'Accelerates schema mapping and prompt/model design.',
          priority: 'Important',
          feedsDocument: 'Data Architecture, ML Design',
        },
        {
          id: 'SRC-09',
          question:
            'Are the group companies (limousine, garage, courier) in scope now, in a later phase, or out of scope?',
          purpose: 'Bounds the engagement and prevents scope creep.',
          priority: 'Must-have',
          feedsDocument: 'SOW, Project Plan',
        },
        {
          id: 'SRC-10',
          question:
            'Are there unstructured sources (call recordings, emails, documents, chat) relevant to feedback or analytics?',
          purpose: 'Determines NLP/unstructured ingestion needs.',
          priority: 'Important',
          feedsDocument: 'Data Architecture, ML Design',
        },
      ],
    },

    // ── 3. Data Consolidation & ETL ────────────────────────────────────────────
    {
      id: 'data-etl',
      label: '3. Data Consolidation & ETL',
      shortLabel: 'ETL',
      questions: [
        {
          id: 'ETL-01',
          question:
            'For the third-party-managed Odoo and Zoho: who authorises and provides API credentials / read access, and what is the typical lead time?',
          purpose: 'ETL is the critical path; third-party access is the top risk.',
          priority: 'Must-have',
          feedsDocument: 'SOW, Risk Register, Project Plan',
        },
        {
          id: 'ETL-02',
          question:
            'What data freshness do analytics require — real-time, hourly, daily overnight batch, or weekly? Does it differ per use case?',
          purpose: 'Determines batch vs streaming architecture and cost.',
          priority: 'Must-have',
          feedsDocument: 'ADR (ETL), Cost Model',
        },
        {
          id: 'ETL-03',
          question:
            'Is it acceptable to keep source systems as-is and centralise into BigQuery, or is there a constraint requiring data to stay in source?',
          purpose: 'Confirms the recommended warehouse-centric pattern.',
          priority: 'Must-have',
          feedsDocument: 'ADR (Architecture)',
        },
        {
          id: 'ETL-04',
          question:
            'What known data-quality issues exist (duplicate customers across systems, inconsistent IDs, missing fields, name/nationality formatting)?',
          purpose: 'Data cleansing effort is a major sizing driver.',
          priority: 'Must-have',
          feedsDocument: 'SOW, Data Architecture',
        },
        {
          id: 'ETL-05',
          question:
            'Is there a common key to link one customer across EDC, Odoo and Zoho (phone, Emirates ID, email)?',
          purpose: 'Entity resolution is essential for a unified data lake.',
          priority: 'Must-have',
          feedsDocument: 'Data Architecture, ML Design',
        },
        {
          id: 'ETL-06',
          question:
            'Which PII/sensitive fields must be masked, hashed or excluded from the warehouse (Emirates ID, passport, payment data)?',
          purpose: 'Drives privacy controls and compliance posture.',
          priority: 'Must-have',
          feedsDocument: 'ADR (Security), Compliance',
        },
        {
          id: 'ETL-07',
          question:
            'Is there a data-residency requirement (must data physically reside in a specific region / GCP location)?',
          purpose: 'Sets the GCP region and may constrain services.',
          priority: 'Must-have',
          feedsDocument: 'ADR (Infra), Compliance',
        },
        {
          id: 'ETL-08',
          question:
            'What total data volume will be centralised, and what is the expected monthly growth?',
          purpose: 'Primary input to BigQuery and pipeline cost.',
          priority: 'Must-have',
          feedsDocument: 'Cost Model',
        },
        {
          id: 'ETL-09',
          question:
            'Any preference on ETL tooling — managed connectors (Fivetran/Airbyte), GCP-native (Dataflow/Datastream), or custom? Any licences already held?',
          purpose: 'Build-vs-buy decision affecting opex and timeline.',
          priority: 'Important',
          feedsDocument: 'ADR (ETL), Cost Model',
        },
      ],
    },

    // ── 4. Predictive Analytics & ML ──────────────────────────────────────────
    {
      id: 'predictive-ml',
      label: '4. Predictive Analytics & ML',
      shortLabel: 'ML Models',
      questions: [
        {
          id: 'PRD-01',
          question:
            'Please confirm and prioritise the forecasting targets (e.g. enrollments → instructors, vehicles, slots). What else should be predicted?',
          purpose: 'Defines the modelling backlog.',
          priority: 'Must-have',
          feedsDocument: 'SOW, ML Design',
        },
        {
          id: 'PRD-02',
          question:
            'At what granularity should forecasts run (per branch, per test centre, per vehicle category, per nationality/segment, overall)?',
          purpose: 'Determines model structure and data aggregation.',
          priority: 'Must-have',
          feedsDocument: 'ML Design',
        },
        {
          id: 'PRD-03',
          question:
            'What forecast horizon matters most (next week / month / quarter), and how far back is the history reliable?',
          purpose: 'Sets model type and validation windows.',
          priority: 'Must-have',
          feedsDocument: 'ML Design',
        },
        {
          id: 'PRD-04',
          question:
            'Do you have clean, labelled historical outcomes to train on (actual enrollments, pass/fail, no-shows, churn)?',
          purpose: "Without labels, supervised forecasting isn't feasible.",
          priority: 'Must-have',
          feedsDocument: 'ML Design, Risk Register',
        },
        {
          id: 'PRD-05',
          question:
            '"ML that keeps learning": is scheduled periodic retraining acceptable, or do you expect continuous/online learning?',
          purpose: 'Defines MLOps scope and recurring cost.',
          priority: 'Must-have',
          feedsDocument: 'ADR (MLOps), Cost Model',
        },
        {
          id: 'PRD-06',
          question:
            'Which external factors should models account for (seasonality, Ramadan/holidays, RTA rule changes, campaigns, weather)?',
          purpose: 'Improves accuracy; identifies extra data feeds.',
          priority: 'Important',
          feedsDocument: 'ML Design, Data Architecture',
        },
        {
          id: 'PRD-07',
          question:
            'Beyond demand, what predictions add value (learner pass likelihood, dropout risk, demand by nationality, vehicle maintenance demand)?',
          purpose: 'Builds a prioritised predictive roadmap.',
          priority: 'Important',
          feedsDocument: 'SOW, ML Design',
        },
        {
          id: 'PRD-08',
          question:
            'How will you judge a forecast is "good enough" to act on (acceptable error / tolerance)?',
          purpose: 'Sets ML acceptance criteria.',
          priority: 'Must-have',
          feedsDocument: 'SOW, ML Design',
        },
        {
          id: 'PRD-09',
          question:
            'Who consumes forecasts and how should they be delivered (dashboard, alerts, exported capacity plan)?',
          purpose: 'Defines the consumption layer.',
          priority: 'Important',
          feedsDocument: 'SOW, UI Design',
        },
      ],
    },

    // ── 5. Self-Service — NL Analytics ────────────────────────────────────────
    {
      id: 'nl-analytics',
      label: '5. Self-Service — NL Analytics',
      shortLabel: 'NL Analytics',
      questions: [
        {
          id: 'NLQ-01',
          question:
            'Please provide 10–15 real questions executives and managers would ask the system in plain language.',
          purpose: 'Anchors prompt design and forms NL acceptance tests.',
          priority: 'Must-have',
          feedsDocument: 'ML Design, SOW, POC',
        },
        {
          id: 'NLQ-02',
          question:
            'Which roles need interactive natural-language querying versus view-only dashboards?',
          purpose: 'Shapes UI, RBAC and licensing.',
          priority: 'Important',
          feedsDocument: 'ADR (RBAC), UI Design',
        },
        {
          id: 'NLQ-03',
          question:
            'Which standard dashboards/KPIs should be available on day one (vehicle utilisation, branch performance, funnel, pass rates)?',
          purpose: 'Defines the pre-built descriptive layer.',
          priority: 'Must-have',
          feedsDocument: 'SOW, UI Design',
        },
        {
          id: 'NLQ-04',
          question:
            'What query response time is acceptable (a few seconds vs tens of seconds)?',
          purpose: 'Sync vs async architecture decision.',
          priority: 'Important',
          feedsDocument: 'ADR (Architecture)',
        },
        {
          id: 'NLQ-05',
          question:
            'Should the analytics layer be strictly read-only, or are any write-backs to source needed?',
          purpose: 'Read-only is recommended; confirms security boundary.',
          priority: 'Must-have',
          feedsDocument: 'ADR (Security)',
        },
      ],
    },

    // ── 6. Feedback & Complaint Intelligence ──────────────────────────────────
    {
      id: 'feedback-complaint',
      label: '6. Feedback & Complaint Intel',
      shortLabel: 'Feedback',
      questions: [
        {
          id: 'FBK-01',
          question:
            'Where does customer feedback currently live (Zoho, surveys, Google reviews, social, call centre, WhatsApp)?',
          purpose: 'Locates feedback sources for ingestion.',
          priority: 'Must-have',
          feedsDocument: 'Data Architecture',
        },
        {
          id: 'FBK-02',
          question:
            'Approximately how many feedback items / complaints arrive per month?',
          purpose: 'Sizes processing volume and LLM cost.',
          priority: 'Important',
          feedsDocument: 'Cost Model',
        },
        {
          id: 'FBK-03',
          question:
            'In which languages does feedback arrive (English, Arabic, Hindi, Urdu, etc.)?',
          purpose: 'Determines multilingual sentiment/triage scope.',
          priority: 'Must-have',
          feedsDocument: 'ML Design',
        },
        {
          id: 'FBK-04',
          question:
            'How do you define a "critical" complaint today? Please give examples of critical vs routine.',
          purpose: 'Defines the triage labels and severity logic.',
          priority: 'Must-have',
          feedsDocument: 'ML Design, SOW',
        },
        {
          id: 'FBK-05',
          question:
            'What is the current complaint-handling workflow and SLA, and in which tool does it run?',
          purpose: 'Lets us route AI output into the existing process.',
          priority: 'Important',
          feedsDocument: 'SOW, UI Design',
        },
        {
          id: 'FBK-06',
          question:
            'Desired output: a ranked queue, alerts, categorisation, sentiment trends, or routing to a specific team?',
          purpose: 'Defines the feedback feature deliverable.',
          priority: 'Important',
          feedsDocument: 'SOW, UI Design',
        },
        {
          id: 'FBK-07',
          question:
            'Do you have historical labelled complaints (resolved/escalated) we could learn from?',
          purpose: 'Enables a higher-accuracy triage model.',
          priority: 'Nice-to-have',
          feedsDocument: 'ML Design',
        },
      ],
    },

    // ── 7. Infra, Security & Compliance ───────────────────────────────────────
    {
      id: 'infra-security',
      label: '7. Infra, Security & Compliance',
      shortLabel: 'Infra & Security',
      questions: [
        {
          id: 'INF-01',
          question:
            'Please confirm your GCP setup: single or multiple projects, existing BigQuery dataset structure, org/folder hierarchy.',
          purpose: 'Defines deployment target and IAM boundaries.',
          priority: 'Must-have',
          feedsDocument: 'ADR (Infra)',
        },
        {
          id: 'INF-02',
          question:
            'Who administers your GCP environment and can provision resources and IAM roles?',
          purpose: 'Identifies who grants access during build.',
          priority: 'Must-have',
          feedsDocument: 'Project Plan',
        },
        {
          id: 'INF-03',
          question:
            'What access tiers do you need (admin, analyst, branch-scoped viewer, etc.)?',
          purpose: 'Drives the RBAC/multi-tenant model.',
          priority: 'Must-have',
          feedsDocument: 'ADR (RBAC)',
        },
        {
          id: 'INF-04',
          question:
            'Which governance/compliance frameworks apply (UAE PDPL, ISO, internal policies)? Is a DPA required?',
          purpose: 'Defines compliance deliverables and contracts.',
          priority: 'Must-have',
          feedsDocument: 'Compliance, SOW',
        },
        {
          id: 'INF-05',
          question:
            'What data retention and deletion policies must be enforced?',
          purpose: 'Shapes lifecycle and erasure features.',
          priority: 'Important',
          feedsDocument: 'ADR (Security), Compliance',
        },
        {
          id: 'INF-06',
          question:
            'Is single sign-on required (Google Workspace or another IdP)?',
          purpose: 'Determines auth integration.',
          priority: 'Important',
          feedsDocument: 'ADR (Auth)',
        },
        {
          id: 'INF-07',
          question:
            'Are there existing monitoring/logging standards we must integrate with?',
          purpose: 'Aligns observability with your estate.',
          priority: 'Nice-to-have',
          feedsDocument: 'ADR (Observability)',
        },
        {
          id: 'INF-08',
          question:
            'Any network constraints (VPC, private connectivity, IP allow-listing) for reaching source databases?',
          purpose: 'Affects connector design and security.',
          priority: 'Important',
          feedsDocument: 'ADR (Infra)',
        },
      ],
    },

    // ── 8. Team, Ops & Maintenance ────────────────────────────────────────────
    {
      id: 'team-ops',
      label: '8. Team, Ops & Maintenance',
      shortLabel: 'Team & Ops',
      questions: [
        {
          id: 'OPS-01',
          question:
            "Your 4-developer team: what is their stack/skillset, and will they co-build, maintain, or only liaise?",
          purpose: 'Determines knowledge transfer and division of work.',
          priority: 'Must-have',
          feedsDocument: 'SOW, Project Plan',
        },
        {
          id: 'OPS-02',
          question:
            'Who owns and operates the solution after go-live — in-house, KOVIL managed service, or hybrid?',
          purpose: 'Defines support model and recurring commercials.',
          priority: 'Must-have',
          feedsDocument: 'SOW, Cost Model',
        },
        {
          id: 'OPS-03',
          question:
            'What level of post-go-live support is expected (business hours, 24/7, SLA targets)?',
          purpose: 'Sizes the support offering and opex.',
          priority: 'Important',
          feedsDocument: 'SOW, Cost Model',
        },
        {
          id: 'OPS-04',
          question:
            'What training is needed for end-users and for your dev team (handover/enablement)?',
          purpose: 'Scopes enablement deliverables.',
          priority: 'Important',
          feedsDocument: 'SOW',
        },
        {
          id: 'OPS-05',
          question:
            'Who are the contacts and SLAs for the third parties managing Odoo and Zoho?',
          purpose: 'Critical dependency for ETL coordination.',
          priority: 'Must-have',
          feedsDocument: 'Risk Register, Project Plan',
        },
        {
          id: 'OPS-06',
          question:
            'What is your process for adding new data sources or metrics later?',
          purpose: 'Plans for extensibility and change control.',
          priority: 'Nice-to-have',
          feedsDocument: 'ADR (Architecture)',
        },
      ],
    },

    // ── 9. Commercials & Timeline ──────────────────────────────────────────────
    {
      id: 'commercials-timeline',
      label: '9. Commercials & Timeline',
      shortLabel: 'Commercials',
      questions: [
        {
          id: 'COM-01',
          question:
            'What indicative budget range (build/capex) are you working with? Even a band helps right-size the solution.',
          purpose: 'Aligns scope to budget before detailed estimating.',
          priority: 'Must-have',
          feedsDocument: 'SOW, Cost Model',
        },
        {
          id: 'COM-02',
          question:
            'You flagged recurring operational cost as the most important factor — what monthly opex range is sustainable?',
          purpose: 'Opex is the stated decision driver; shapes architecture.',
          priority: 'Must-have',
          feedsDocument: 'Cost Model, ADR (Architecture)',
        },
        {
          id: 'COM-03',
          question:
            'Is there a target go-live date or any hard deadline (board commitment, fiscal year)?',
          purpose: 'Sets the delivery timeline and phasing.',
          priority: 'Must-have',
          feedsDocument: 'Project Plan, SOW',
        },
        {
          id: 'COM-04',
          question:
            'What is your appetite for phased delivery (POC → MVP → scale) versus a single delivery?',
          purpose: 'Confirms a de-risked, incremental approach.',
          priority: 'Important',
          feedsDocument: 'SOW, Project Plan',
        },
        {
          id: 'COM-05',
          question:
            'For a POC, what specific outcome and use case would you consider a success?',
          purpose: 'Defines a crisp, winnable POC scope.',
          priority: 'Must-have',
          feedsDocument: 'POC, SOW',
        },
      ],
    },
  ],

  // ── Access credentials (password gate) ─────────────────────────────────────
  // Share the URL + these credentials with Romi Verma at EDG.
  // The password is verified server-side and NEVER reaches the browser bundle.
  accessCredentials: {
    uid: 'romi.v@e-dc.com',
    password: 'Edgdiscover2026',
  },
}

export default edg
