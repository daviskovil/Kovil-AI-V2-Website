import type { DiscoveryConfig } from '@/src/types/questionnaire'

const testclient: DiscoveryConfig = {
  clientSlug: 'testclient',
  clientName: 'Test Healthcare Provider Network',
  projectTitle: 'Healthcare Lifecycle Management & Predictive Health Analytics Platform',
  tabs: [
    {
      id: 'business-objectives',
      label: '1. Business & Objectives',
      shortLabel: 'Business',
      questions: [
        {
          id: 'BUS-01',
          question:
            'What are the top 3 organizational outcomes expected from this lifecycle platform in Phase 1 (e.g., reducing appointment no-shows, accelerating triage, increasing care gap closures)?',
          purpose:
            'Anchors project scope and core success criteria; separates baseline requirements from future vision.',
          priority: 'Must-have',
          feedsDocument: 'SOW, Project Plan',
        },
        {
          id: 'BUS-02',
          question:
            'How will project success be measured? Please provide specific target metrics (e.g., reduce readmission rate by 4%, improve patient retention by 12%).',
          purpose:
            'Establishes unambiguous acceptance criteria and shapes the ROI narrative for stakeholders.',
          priority: 'Must-have',
          feedsDocument: 'SOW, POC Criteria',
        },
        {
          id: 'BUS-03',
          question:
            'Who are the primary user cohorts interacting with the output (Care Coordinators, Physicians, Billing Teams, Executives) and what is the estimated seat count for each?',
          purpose:
            'Drives software licensing cost structures, UI/UX workflow layouts, and RBAC security models.',
          priority: 'Must-have',
          feedsDocument: 'SOW, ADR (Auth/RBAC)',
        },
        {
          id: 'BUS-04',
          question:
            'What recurring clinical or operational decisions should this system dynamically assist (e.g., daily nurse staffing allocation, proactive outreach for chronic condition tracking)?',
          purpose:
            'Maps data features to live operational workflows, preventing the creation of unused analytical dashboards.',
          priority: 'Must-have',
          feedsDocument: 'SOW, Product Roadmap',
        },
        {
          id: 'BUS-05',
          question:
            'What is the absolute minimum viable scope (MVP) required for a first compliance-approved live launch versus the complete multi-year system vision?',
          purpose:
            'Enables incremental delivery, controls budget risk, and provides a tight, achievable target timeline.',
          priority: 'Must-have',
          feedsDocument: 'SOW, Project Plan',
        },
      ],
    },
    {
      id: 'data-sources',
      label: '2. Data Sources Inventory',
      shortLabel: 'Data Sources',
      questions: [
        {
          id: 'SRC-01',
          question:
            'Please confirm the core systems holding relevant data (e.g., Epic/Cerner EHR, Salesforce Health Cloud, legacy SQL billing databases, external lab systems).',
          purpose:
            'Maps out the true source landscape for comprehensive ETL ingestion design.',
          priority: 'Must-have',
          feedsDocument: 'Data Architecture, SOW',
        },
        {
          id: 'SRC-02',
          question:
            'For the primary EHR system: what is the underlying deployment type (Cloud-hosted vs On-prem), and what database size, table counts, and transaction growth are expected?',
          purpose:
            'Sizes pipeline capacity, dictates bandwidth requirements, and estimates data warehouse storage costs.',
          priority: 'Must-have',
          feedsDocument: 'Cost Model, Data Architecture',
        },
        {
          id: 'SRC-03',
          question:
            'How many years of historical patient/clinical records are available, and is this data fully normalized and live, or partially archived?',
          purpose:
            'Determines historical data depth available for training machine learning algorithms.',
          priority: 'Must-have',
          feedsDocument: 'ML Design, Data Architecture',
        },
        {
          id: 'SRC-04',
          question:
            'Do you have existing data dictionaries, schema documentation, HL7/FHIR interface specs, or anonymized database samples that can be shared?',
          purpose:
            'Significantly accelerates downstream schema mapping and custom prompt engineering design.',
          priority: 'Important',
          feedsDocument: 'Data Architecture, ML Design',
        },
        {
          id: 'SRC-05',
          question:
            'Are any affiliate clinics, external diagnostic centers, or third-party pharmacy networks in scope for ingestion during this first phase?',
          purpose:
            'Bounds project scope and prevents unexpected data integration creep mid-project.',
          priority: 'Must-have',
          feedsDocument: 'SOW, Project Plan',
        },
      ],
    },
    {
      id: 'data-etl',
      label: '3. Data Consolidation & ETL',
      shortLabel: 'ETL',
      questions: [
        {
          id: 'ETL-01',
          question:
            'Who owns administration and grants API access/credentials for the EHR and CRM systems, and what is the internal SLA for provisioning?',
          purpose:
            'Pipeline setups represent critical paths; integration delays from third parties are a top delivery risk.',
          priority: 'Must-have',
          feedsDocument: 'SOW, Risk Register, Project Plan',
        },
        {
          id: 'ETL-02',
          question:
            'What data freshness is required for the analytics engine — near real-time streaming, hourly updates, or daily overnight batch processing?',
          purpose:
            'Determines batch vs streaming architecture configurations and cloud processing costs.',
          priority: 'Must-have',
          feedsDocument: 'ADR (ETL), Cost Model',
        },
        {
          id: 'ETL-03',
          question:
            'What specific PHI/PII fields must be explicitly masked, hashed, or completely stripped before ingestion into the centralized warehouse (e.g., SSN, full names)?',
          purpose:
            'Controls privacy guardrails, minimizes liability, and solidifies data compliance posture.',
          priority: 'Must-have',
          feedsDocument: 'ADR (Security), Compliance Matrix',
        },
        {
          id: 'ETL-04',
          question:
            'Is there an established, unique patient identifier (e.g., National Health ID, internal master index) to reliably link individuals across clinical, CRM, and billing systems?',
          purpose:
            'Master entity resolution is mandatory for creating a unified 360-degree patient view.',
          priority: 'Must-have',
          feedsDocument: 'Data Architecture, ML Design',
        },
        {
          id: 'ETL-05',
          question:
            'What geographic data residency restrictions apply to the data pipelines or the destination data warehouse?',
          purpose:
            'Confirms the cloud platform region selection and constrains specific allowable cloud services.',
          priority: 'Must-have',
          feedsDocument: 'ADR (Infrastructure), Compliance',
        },
      ],
    },
    {
      id: 'predictive-ml',
      label: '4. Predictive Analytics & ML',
      shortLabel: 'ML Models',
      questions: [
        {
          id: 'PRD-01',
          question:
            'Confirm and prioritize the core predictive models needed (e.g., predicting appointment no-show probabilities, early readmission risks, patient churn/attrition).',
          purpose:
            'Defines the concrete modeling backlog and engineering focus areas.',
          priority: 'Must-have',
          feedsDocument: 'SOW, ML Design',
        },
        {
          id: 'PRD-02',
          question:
            'At what granularity should these predictive models run (e.g., individual patient level, facility/clinic level, regional cohort level, or medical specialty)?',
          purpose:
            'Dictates data aggregation strategies and determines appropriate model architectures.',
          priority: 'Must-have',
          feedsDocument: 'ML Design Document',
        },
        {
          id: 'PRD-03',
          question:
            'Do you possess clearly labeled historical target data to train models on (e.g., clear logs of historical no-shows, confirmed readmissions within 30 days)?',
          purpose:
            'Supervised machine learning algorithms require high-quality labeled outcomes to be viable.',
          priority: 'Must-have',
          feedsDocument: 'ML Design, Risk Register',
        },
        {
          id: 'PRD-04',
          question:
            'How frequently must models update predictions (e.g., real-time evaluation as an EHR note updates vs scheduled nightly batch scoring)?',
          purpose:
            'Drives inference pipeline architecture design and recurring cloud compute cost estimates.',
          priority: 'Must-have',
          feedsDocument: 'ADR (MLOps), Cost Model',
        },
        {
          id: 'PRD-05',
          question:
            'What mathematical or operational error tolerance defines a model as "good enough" to safely trigger automated patient outreach?',
          purpose:
            'Establishes standard evaluation criteria and clinical guardrails for model deployment.',
          priority: 'Must-have',
          feedsDocument: 'SOW, ML Design',
        },
      ],
    },
    {
      id: 'nl-analytics',
      label: '5. Self-Service — NL Analytics',
      shortLabel: 'NL Analytics',
      questions: [
        {
          id: 'NLQ-01',
          question:
            'Please provide 10–15 sample questions that executives, operations managers, or care coordinators would ideally ask the platform in plain natural language.',
          purpose:
            'Serves as the functional anchor for prompt engineering, semantic routing, and user acceptance testing.',
          priority: 'Must-have',
          feedsDocument: 'ML Design, SOW, POC',
        },
        {
          id: 'NLQ-02',
          question:
            'Which exact user personas require an interactive natural-language chat interface versus traditional static dashboards?',
          purpose:
            'Shapes UI design layouts, backend role-based access management, and software seat licensing costs.',
          priority: 'Important',
          feedsDocument: 'ADR (RBAC), UI Design',
        },
        {
          id: 'NLQ-03',
          question:
            'Should this natural-language engine operate strictly as a read-only query tool, or will it eventually require write-back capabilities into systems like the CRM or EHR?',
          purpose:
            'Read-only is heavily recommended for initial phases; write-back significantly increases security and validation boundaries.',
          priority: 'Must-have',
          feedsDocument: 'ADR (Security)',
        },
        {
          id: 'NLQ-04',
          question:
            "What are the system's performance expectations for natural language queries (e.g., complex ad-hoc text queries must return results under 5 seconds)?",
          purpose:
            'Drives underlying caching strategy, data warehouse indexing models, and synchronous vs asynchronous API choices.',
          priority: 'Important',
          feedsDocument: 'ADR (Architecture)',
        },
      ],
    },
    {
      id: 'infra-security',
      label: '6. Infra, Security & Compliance',
      shortLabel: 'Infra & Security',
      questions: [
        {
          id: 'INF-01',
          question:
            'What specific regulatory frameworks must the cloud infrastructure comply with (e.g., HIPAA, HITECH, local health data laws)? Is a Business Associate Agreement (BAA) required?',
          purpose:
            'Mandates strict security configurations, logging requirements, and contract obligations before design work starts.',
          priority: 'Must-have',
          feedsDocument: 'Compliance Document, SOW',
        },
        {
          id: 'INF-02',
          question:
            'What identity provider (IdP) is utilized across the enterprise (e.g., Microsoft Entra ID, Okta), and is Single Sign-On (SSO) required for Day 1?',
          purpose:
            'Determines identity federation integration mechanisms and architectural authentication design.',
          priority: 'Important',
          feedsDocument: 'ADR (Authentication)',
        },
        {
          id: 'INF-03',
          question:
            'Are there any enterprise-wide network isolation constraints that must be handled (e.g., private endpoints, strict IP allow-listing, VPN tunnels to source systems)?',
          purpose:
            'Influences how cloud connectors securely connect to database clusters without exposing public endpoints.',
          priority: 'Important',
          feedsDocument: 'ADR (Infrastructure)',
        },
        {
          id: 'INF-04',
          question:
            'Who manages your target cloud environment, and who holds the administrative privileges required to provision resources, service principals, and IAM policies?',
          purpose:
            'Identifies key execution dependencies and points of contact to avoid onboarding bottlenecks.',
          priority: 'Must-have',
          feedsDocument: 'Project Plan',
        },
      ],
    },
    {
      id: 'team-ops',
      label: '7. Team, Ops & Maintenance',
      shortLabel: 'Team & Ops',
      questions: [
        {
          id: 'OPS-01',
          question:
            'Describe the size, primary technology stack, and expertise of your current data/IT team. Will they co-build the solution or strictly maintain it post-handover?',
          purpose:
            'Coordinates project resource splitting, required training depths, and operational handoff complexity.',
          priority: 'Must-have',
          feedsDocument: 'SOW, Project Plan',
        },
        {
          id: 'OPS-02',
          question:
            'What operational support model is expected after go-live (e.g., fully managed external service, hybrid co-management, or standard 8×5 next-business-day internal escalation)?',
          purpose:
            'Sizes the operational support agreement parameters and recurring operational budgets.',
          priority: 'Must-have',
          feedsDocument: 'SOW, Cost Model',
        },
        {
          id: 'OPS-03',
          question:
            'What is the established internal protocol or change management process for introducing new data sources, schemas, or modified business metrics later on?',
          purpose:
            'Plans out system extensibility pathways, modular data warehouse design, and contract change-order protocols.',
          priority: 'Nice-to-have',
          feedsDocument: 'ADR (Architecture)',
        },
      ],
    },
    {
      id: 'commercials-timeline',
      label: '8. Commercials & Timeline',
      shortLabel: 'Commercials',
      questions: [
        {
          id: 'COM-01',
          question:
            'Is there an indicative financial range or target budget allocated for the implementation phase (Capex) and ongoing monthly platform maintenance (Opex)?',
          purpose:
            'Directly affects design choices (e.g., build vs buy components) to keep solutions within sustainable financial realities.',
          priority: 'Must-have',
          feedsDocument: 'SOW, Cost Model',
        },
        {
          id: 'COM-02',
          question:
            'Are there firm, immutable target dates driven by board commitments, compliance deadlines, or fiscal year rollovers?',
          purpose:
            'Establishes critical-path timelines, resource velocity needs, and phased milestone drops.',
          priority: 'Must-have',
          feedsDocument: 'Project Plan, SOW',
        },
        {
          id: 'COM-03',
          question:
            'For the initial proof-of-concept (POC) phase, what single, focused use case and target metric accuracy would your stakeholders consider a definitive success?',
          purpose:
            'Isolates a small, high-impact component to prove tech stack viability early and build alignment.',
          priority: 'Must-have',
          feedsDocument: 'POC Criteria Document, SOW',
        },
      ],
    },
  ],

  // ── Access credentials (password gate) ───────────────────────────────────
  // Share these with the client when sending the questionnaire link.
  // The password is verified server-side and NEVER reaches the browser bundle.
  accessCredentials: {
    uid: 'TESTCLIENT-2026',
    password: 'discover2026',
  },
}

export default testclient
