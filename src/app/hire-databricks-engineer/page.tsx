import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hire Databricks Engineers | Delta Lake, Unity Catalog & Medallion Architecture',
  description: 'Hire vetted Databricks data engineers and Lakehouse architects from Kovil AI. Embedded in your team in under 10 days. PySpark, Delta Lake, Unity Catalog, DLT, and Photon engine specialists.',
  keywords: ['hire Databricks engineer', 'Databricks data engineer', 'Delta Lake engineer', 'Unity Catalog architect', 'Medallion architecture', 'Lakehouse engineer', 'PySpark engineer', 'Databricks staff augmentation', 'Databricks consultant'],
  openGraph: {
    title: 'Hire Databricks Engineers | Kovil AI — Embedded Lakehouse Specialists',
    description: 'Embed vetted Databricks engineers into your team in under 10 days. Delta Lake, Unity Catalog, Medallion Architecture, Photon tuning, and Lakehouse migration specialists.',
    images: [{ url: 'https://kovil.ai/hire-databricks-engineer.webp', width: 1200, height: 630 }],
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kovil AI',
  url: 'https://kovil.ai',
  logo: 'https://kovil.ai/kovil-logo.png',
  description: 'Managed Databricks engineering talent: vetted PySpark, Delta Lake, Unity Catalog, and Medallion Architecture specialists embedded directly into engineering teams.',
  sameAs: ['https://www.linkedin.com/company/kovil-ai'],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Staff Augmentation', item: 'https://kovil.ai/staff-augmentation' },
    { '@type': 'ListItem', position: 3, name: 'Hire Databricks Engineer', item: 'https://kovil.ai/hire-databricks-engineer' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Databricks Engineering Staff Augmentation',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  areaServed: 'Worldwide',
  description: 'On-demand Databricks data engineers and Lakehouse architects: Delta Lake, Unity Catalog, PySpark, Photon engine, Medallion Architecture, and cloud Lakehouse migration specialists embedded in your team.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do Kovil AI Databricks engineers prevent runaway cluster cost overruns?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our engineers address cost overruns across four dimensions. First, cluster segmentation: interactive clusters (for notebook exploration) are strictly separated from job clusters (for production pipelines). Interactive clusters are never used for production ETL. Second, auto-termination policies: every interactive cluster gets a hard auto-termination limit (typically 30-60 minutes idle), enforced via cluster policies attached at the workspace level in Unity Catalog. Third, instance sizing: we right-size worker node counts using Databricks cluster utilisation metrics from the Ganglia UI and Spark UI stage timelines before locking configurations. Fourth, spot instance policies: production job clusters run on spot/preemptible workers with an on-demand driver node, reducing DBU-hour spend by 40-70% on fault-tolerant batch workloads. All cluster policies are codified in Terraform (databricks_cluster_policy resources) and version-controlled, not set ad hoc in the UI.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do your Databricks engineers integrate into our existing CI/CD pipelines?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kovil AI engineers work natively inside your existing toolchain. For Databricks-specific deployment, we use Databricks Asset Bundles (DABs) — the modern replacement for dbx — to define jobs, pipelines, and permissions as versioned YAML manifests. These are committed to your Git repository and deployed via GitHub Actions or Azure DevOps pipelines, eliminating manual workspace UI changes. Terraform (with the official Databricks provider) manages workspace configuration: Unity Catalog grants, cluster policies, instance profiles, and secret scopes. For notebook-based workflows, Databricks Repos (now Workspace Files) gives engineers a Git-backed development loop with pull request reviews before any merge to production. Every pipeline promotion (dev → staging → prod) happens through the CI runner, with environment-specific bundle targets controlling which workspace receives the deployment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the onboarding process and how quickly does a Kovil AI Databricks engineer reach full velocity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Week 1 is access and architecture onboarding: the engineer gets workspace access, reviews your existing job configurations and cluster policies, audits Delta table schemas and Unity Catalog grants, and attends your sprint kickoff. By the end of Day 5 they have submitted their first pull request — typically a small pipeline fix or a cluster policy tightening. Week 2 is active delivery: they are in your daily standup, working tickets from your backlog (Jira, Linear, or GitHub Issues), and making substantive pipeline commits. Full velocity — meaning they can independently architect, implement, and deploy a new Bronze-to-Gold Delta Live Tables pipeline — is typically reached by sprint 3. The match itself takes under 48 hours: you share your stack requirements (cloud provider, workspace tier, Unity Catalog vs legacy metastore, streaming vs batch workloads) and we return vetted profiles the same business day.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the correct architecture for Unity Catalog governance in a multi-team Databricks workspace?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The standard production pattern our engineers implement is a three-tier catalog hierarchy: a catalog per environment (prod, staging, dev) with schemas (databases) per domain (finance, product, logistics) and tables per entity. Access is granted at the schema level using Unity Catalog GRANT statements: data engineers get CREATE and MODIFY on their domain schema, analysts get SELECT on Gold-layer schemas, and no principal gets SELECT on Bronze-layer raw tables outside the pipeline service principal. Row-level security is implemented via Unity Catalog row filters (Python UDFs registered as filters on a table), and column-level masking via dynamic view functions for PII fields. All grants are managed via Terraform (databricks_grants resources), so access changes go through a pull request approval process rather than ad hoc UI grants. Data lineage is captured automatically by Unity Catalog across all Delta tables accessed via the SQL warehouse or a Databricks cluster with Unity Catalog metastore attached.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should we use Delta Live Tables (DLT) versus standard Databricks Workflows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Delta Live Tables is the right choice when: (1) you need declarative pipeline definitions with built-in data quality expectations (CONSTRAINT clauses that quarantine or fail on bad records), (2) you want automatic dependency graph resolution between Bronze, Silver, and Gold tables without manually ordering tasks, and (3) you are running Structured Streaming sources (Kafka, Auto Loader, Kinesis) that need continuous or triggered refresh with exactly-once semantics via DLT\'s internal checkpointing. Standard Databricks Workflows are the right choice when: your pipeline includes non-Spark steps (Python scripts, dbt runs, ML training jobs, or external API calls), you need fine-grained control over cluster configuration per task, or you are running one-time or infrequent batch jobs where the DLT cluster startup overhead is not justified. Most mature Lakehouses use both: DLT for the core ingestion and transformation tiers, Workflows for orchestrating dbt transformations on top of Gold tables and triggering downstream ML jobs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do Kovil AI engineers approach a migration from Snowflake or Redshift to Databricks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We run migrations in four phases. Phase 1 (2 weeks): audit — inventory all Snowflake/Redshift objects (tables, views, stored procedures, tasks/scheduled queries), classify them by complexity (SQL-compatible vs requiring rewrite), and map to a target Databricks object type (Delta table, DLT pipeline, Databricks Workflow). Phase 2 (2-4 weeks): infrastructure — provision Unity Catalog structure, configure cloud storage (S3/ADLS Gen2/GCS) with appropriate IAM roles, set up instance profiles, and deploy cluster policies. Phase 3 (4-8 weeks): pipeline migration — translate Snowflake Streams/Tasks or Redshift Spectrum queries into PySpark or Databricks SQL, implement Auto Loader for incremental ingestion from the source S3/blob, and run parallel validation (row counts, aggregation checks, statistical distribution comparisons between old and new). Phase 4 (1-2 weeks): cutover — redirect upstream producers to the new landing zone, deprecate the legacy connection strings, and monitor the first 5 production pipeline runs before declaring migration complete. We maintain zero pipeline downtime by running old and new systems in parallel through Phase 3.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Photon engine accelerate Databricks workloads, and when does it not help?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Photon is a vectorized query engine written in C++ that replaces Spark\'s JVM-based Volcano execution model for SQL and DataFrame operations. It accelerates workloads that are CPU-bound on large scans, joins, and aggregations — typically 2-8x faster on Databricks SQL warehouses and Delta Live Tables pipelines on Photon-enabled compute. Photon is most beneficial for: large table scans on Delta tables with Z-ordering (Photon skips files faster), complex aggregations and window functions in SQL analytics queries, and GROUP BY / JOIN operations on Silver-to-Gold transformation pipelines. Photon does not help for: UDF-heavy workloads (Python and Scala UDFs bypass Photon and fall back to JVM), workloads that are I/O-bound rather than compute-bound (where the bottleneck is object store read latency, not CPU), and ML training jobs using MLlib or custom Spark ML pipelines. Our engineers run Spark UI stage-level profiling to determine whether a bottleneck is compute-bound (Photon will help) or I/O/shuffle-bound (requiring partition tuning, Z-ordering, or liquid clustering changes instead).',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a production-grade Medallion Architecture look like on Databricks, and what are the most common structural mistakes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A production Medallion Architecture on Databricks has three layers. Bronze (raw): Delta tables landing raw data exactly as received from sources — no transformations, schema-on-read, append-only. Ingested via Auto Loader (cloudFiles format) with schema inference and evolution enabled. Bronze tables retain data permanently (or per retention policy) for full reprocessing. Silver (cleaned and conformed): DLT streaming tables applying deduplication (EXCEPT with watermarking or MERGE INTO with row_hash keys), type casting, PII masking, and data quality EXPECT constraints. Silver tables are the authoritative, source-of-truth layer for domain entities. Gold (aggregated for consumption): Static or materialised DLT tables aggregating Silver data into business metrics, pre-joined denormalised fact tables for BI tools, or feature tables for ML. Served via Databricks SQL warehouses with serverless auto-scaling. The most common structural mistakes are: (1) skipping Bronze and landing pre-transformed data directly into Silver, removing the ability to replay historical loads; (2) using managed tables in the default Hive metastore instead of Unity Catalog external tables, which prevents cross-workspace access; (3) writing Gold transformations as heavy PySpark jobs instead of using Databricks SQL for analyst-maintainability; and (4) over-partitioning Bronze tables by date on small datasets, causing the "small files problem" that Liquid Clustering solves.',
      },
    },
  ],
}

const problemCards = [
  {
    icon: '💸',
    title: 'Runaway Cluster Spend',
    desc: 'Interactive clusters left running overnight. Job clusters over-provisioned with on-demand workers. No cluster policies enforced at the workspace level. Databricks bills accumulate without a single production query running.',
    metric: 'Avg 40-65% of Databricks spend is waste without policy enforcement',
  },
  {
    icon: '🏗',
    title: 'Broken Medallion Pipelines',
    desc: 'Bronze tables accumulating duplicate records. Silver transformations with no data quality constraints. Gold aggregations silently returning wrong numbers because upstream schema changed and nobody noticed.',
    metric: 'Schema evolution breaks ~1 in 3 Spark pipelines within 6 months without EXPECT clauses',
  },
  {
    icon: '🔒',
    title: 'Unity Catalog Debt',
    desc: 'Workspaces still on legacy Hive metastore with no column-level security, no row filters, and no data lineage. Every analyst has SELECT on Bronze raw tables. PII visible to anyone who can open a notebook.',
    metric: 'Legacy metastore workspaces cannot enforce column masking or row-level security natively',
  },
  {
    icon: '🔄',
    title: 'Migration Lock-In Risk',
    desc: 'Snowflake or Redshift migration projects stalling because stored procedures cannot be directly translated to PySpark. Parallel validation skipped. Cutover attempted without row-count reconciliation.',
    metric: '67% of data platform migrations exceed timeline when parallel validation is skipped',
  },
  {
    icon: '🐌',
    title: 'Untuned Photon + Spark',
    desc: 'Photon enabled but workloads are UDF-heavy — bypassing the engine entirely. Shuffle partitions set to the Spark default of 200 on a 50-billion-row aggregation. Stage skew undetected in Spark UI.',
    metric: 'Default shuffle partition count causes 3-10x slowdowns on large aggregation workloads',
  },
  {
    icon: '🚫',
    title: 'No CI/CD for Pipelines',
    desc: 'Notebook changes pushed directly to production workspaces. No DABs bundle. No Terraform for workspace config. Cluster policies, secret scopes, and Unity Catalog grants changed via the UI with no audit trail.',
    metric: 'Manual workspace changes are the leading cause of production regression in Databricks environments',
  },
]

const comparisonRows = [
  { dimension: 'PySpark & SQL proficiency', generic: 'Basic DataFrame API, limited Catalyst optimizer awareness', kovil: 'Full query plan analysis, stage-level profiling, AQE tuning, broadcast join control' },
  { dimension: 'Delta Lake ACID properties', generic: 'Treats Delta tables as Parquet. No MERGE INTO, no time travel, no VACUUM strategy', kovil: 'MERGE INTO with change data capture, OPTIMIZE with Z-ordering, VACUUM with retention policies, schema evolution config' },
  { dimension: 'Unity Catalog governance', generic: 'Legacy Hive metastore. No column masking. Row filters not implemented', kovil: 'Row filters + dynamic view masking for PII. Attribute-based access via catalog grants. Full lineage tracking' },
  { dimension: 'CI/CD pipeline integration', generic: 'Notebook exports or dbx (deprecated). No Terraform. Manual UI deploys', kovil: 'Databricks Asset Bundles (DABs) in Git. Terraform for workspace config. GitHub Actions or Azure DevOps runners' },
  { dimension: 'Cluster cost governance', generic: 'Ad hoc cluster sizing. No auto-termination enforcement. No spot instance policy', kovil: 'Cluster policies via Terraform. Spot/preemptible workers on batch jobs. DBU spend dashboards per team' },
  { dimension: 'DLT and streaming', generic: 'Batch-only. Structured Streaming used without checkpointing. No EXPECT constraints', kovil: 'DLT declarative pipelines with EXPECT constraints. Auto Loader for cloud file ingestion. Exactly-once guarantees' },
  { dimension: 'Sprint embedding', generic: 'Async delivery. Separate Slack workspace. Updates weekly or on request', kovil: 'Daily standup in your Slack. Tickets in your Jira/Linear. PRs in your Git repo by end of Day 5' },
  { dimension: 'Migration capability', generic: 'Can translate SQL. Cannot handle Snowflake Streams, Redshift Spectrum, or parallel validation', kovil: 'Full audit, object classification, parallel pipeline validation, and zero-downtime cutover protocol' },
]

const pillars = [
  {
    number: '01',
    title: 'Managed Databricks Engineers',
    subtitle: 'Embedded in your team. Working in your repo.',
    desc: 'A Kovil AI Databricks engineer joins your daily standup, works from your backlog, and commits to your Git repository. They are not a vendor contact who sends weekly updates — they are an embedded team member who happens to be a Databricks specialist.',
    capabilities: [
      'PySpark DataFrame API and Catalyst optimizer tuning',
      'Delta Lake MERGE INTO, time travel, OPTIMIZE, and VACUUM strategies',
      'Photon engine profiling via Spark UI stage timeline analysis',
      'Auto Loader (cloudFiles) for incremental cloud file ingestion',
      'Delta Live Tables (DLT) with EXPECT data quality constraints',
      'Databricks Asset Bundles (DABs) for version-controlled pipeline deployment',
      'Databricks Workflows with multi-task job graphs and dbt integration',
      'MLflow experiment tracking and model registry for ML pipelines',
    ],
  },
  {
    number: '02',
    title: 'Cloud Lakehouse Projects',
    subtitle: 'Migrate legacy warehouses with zero pipeline downtime.',
    desc: 'We run structured migrations from Snowflake, Redshift, BigQuery, or legacy Hadoop/HDFS to a unified Databricks Lakehouse. Every migration includes a parallel validation phase — old and new pipelines run simultaneously, row counts and statistical distributions are reconciled before cutover.',
    capabilities: [
      'Snowflake Streams/Tasks → DLT Structured Streaming translation',
      'Redshift Spectrum → Databricks SQL external table migration',
      'Hadoop/HDFS → Delta Lake on S3/ADLS Gen2/GCS with schema enforcement',
      'AWS Glue → Databricks Workflows job graph migration',
      'Azure Data Factory → Databricks Workflows with ADF trigger replacement',
      'Unity Catalog migration from legacy Hive metastore with grant reconciliation',
      'Parallel validation: row-count checks, aggregation reconciliation, distribution comparison',
      'Zero-downtime cutover: dual-write during transition, upstream redirect only after validation',
    ],
  },
  {
    number: '03',
    title: 'Lakehouse Rescue (Audit and Recovery)',
    subtitle: 'Diagnose what is broken. Fix it without rebuilding from scratch.',
    desc: 'If your Databricks environment has accumulated technical debt — runaway compute costs, failing pipelines, ad hoc Unity Catalog grants with no governance, or a Medallion Architecture where Gold tables are returning wrong numbers — our engineers audit, diagnose, and systematically repair without requiring a full rebuild.',
    capabilities: [
      'Cluster spend audit: identify idle interactive clusters, oversized job clusters, missing auto-termination policies',
      'Pipeline reliability review: locate missing EXPECT constraints, unhandled schema evolution, missing checkpoints',
      'Unity Catalog governance remediation: PII column masking, row filter implementation, ABAC grant restructuring',
      'Medallion architecture review: Bronze deduplication strategy, Silver entity conformance, Gold aggregation correctness',
      'Spark performance diagnosis: query plan analysis, shuffle partition tuning, skew detection, Photon utilisation review',
      'Liquid Clustering vs Z-ordering assessment for large Delta table query patterns',
      'Secret scope and service principal security audit',
      'Terraform import of existing manual workspace configuration for future IaC governance',
    ],
  },
]

export default function HireDatabricksEngineerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="flex items-center gap-2 text-sm text-[#9B9B9B] mb-6">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/staff-augmentation" className="hover:text-white transition-colors">Staff Augmentation</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Hire Databricks Engineer</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-[#FF4F00]/10 border border-[#FF4F00]/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-[#FF4F00] rounded-full animate-pulse" />
                <span className="text-[#FF4F00] text-sm font-medium">Embedded in Your Team in Under 10 Days</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                On-Demand Databricks Engineers and Lakehouse Architects
              </h1>
              <p className="text-lg text-[#9B9B9B] leading-relaxed mb-8">
                Vetted Databricks specialists embedded directly into your standup, your Git repo, and your sprint cycle. PySpark, Delta Lake, Unity Catalog, Medallion Architecture, Photon tuning, and cloud Lakehouse migration — from engineers who have run these systems in production, not just certified on paper.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { value: '<10 days', label: 'To first commit' },
                  { value: 'Top 3%', label: 'Databricks talent' },
                  { value: '48h', label: 'Profiles matched' },
                ].map(stat => (
                  <div key={stat.label} className="bg-white/5 rounded-xl border border-white/10 p-4 text-center">
                    <div className="text-xl font-bold text-[#FF4F00]">{stat.value}</div>
                    <div className="text-xs text-[#9B9B9B] mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#e64400] transition-colors">
                  Deploy Databricks Engineers
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-[#3A3A3A] text-white font-semibold px-8 py-4 rounded-lg hover:border-white transition-colors">
                  Request Technical Profiles
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              <Image
                src="/hire-databricks-engineer.webp"
                alt="Databricks Lakehouse architecture diagram showing Medallion pipeline with Auto Loader, Delta Live Tables, Unity Catalog, and Photon engine"
                width={540}
                height={304}
                className="relative rounded-2xl border border-[#2A2A2A] shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust bar ────────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-[#E5E2D9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-[#4B4B4B]">
            {['Delta Lake ACID Certified', 'Unity Catalog Governance', 'Photon Engine Tuning', 'DABs + Terraform CI/CD', 'AWS / Azure / GCP Lakehouse', 'Medallion Architecture'].map(t => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF4F00] flex-shrink-0" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Problem matrix ───────────────────────────────────────────────── */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">Why Databricks Environments Go Wrong at Scale</h2>
            <p className="text-[#4B4B4B] max-w-2xl mx-auto">The six failure modes that surface when a Databricks workspace grows beyond a small team without dedicated platform engineering support.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {problemCards.map(card => (
              <div key={card.title} className="bg-white rounded-xl border border-[#E5E2D9] p-6">
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="font-semibold text-[#0A0A0A] mb-2">{card.title}</h3>
                <p className="text-sm text-[#4B4B4B] leading-relaxed mb-3">{card.desc}</p>
                <div className="text-xs font-medium text-[#FF4F00] bg-[#FF4F00]/5 border border-[#FF4F00]/20 rounded-lg px-3 py-2">{card.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* ── Three pillars ─────────────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-4">Three Ways Kovil AI Databricks Engineers Deliver</h2>
            <p className="text-[#9B9B9B] max-w-2xl mx-auto">Whether you need an embedded engineer, a Lakehouse migration, or a rescue audit, the engagement is direct, technical, and measurable.</p>
          </div>
          <div className="space-y-8">
            {pillars.map((pillar) => (
              <div key={pillar.number} className="rounded-2xl border border-[#2A2A2A] p-8 lg:p-10">
                <div className="grid lg:grid-cols-5 gap-8">
                  <div className="lg:col-span-2">
                    <div className="text-5xl font-bold text-[#FF4F00]/20 mb-2">{pillar.number}</div>
                    <h3 className="text-xl font-bold text-white mb-1">{pillar.title}</h3>
                    <p className="text-[#FF4F00] text-sm font-medium mb-4">{pillar.subtitle}</p>
                    <p className="text-[#9B9B9B] text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                  <div className="lg:col-span-3">
                    <div className="grid sm:grid-cols-2 gap-2">
                      {pillar.capabilities.map(cap => (
                        <div key={cap} className="flex items-start gap-2 text-sm text-[#9B9B9B]">
                          <CheckCircle2 className="w-4 h-4 text-[#FF4F00] flex-shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#2A2A2A]" />

      {/* ── Comparison table ─────────────────────────────────────────────── */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">Generic Generalist Outsourcing vs Kovil AI Databricks Engineers</h2>
            <p className="text-[#4B4B4B] max-w-2xl mx-auto">Eight dimensions that determine whether a data engineer will run your Databricks environment or accumulate technical debt in it.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-[#E5E2D9]">
            <table className="w-full text-sm">
              <thead className="bg-[#0A0A0A] text-white">
                <tr>
                  <th className="text-left py-4 px-5 font-semibold w-1/3">Dimension</th>
                  <th className="text-left py-4 px-5 font-semibold text-[#9B9B9B]">Generic Outsourcing</th>
                  <th className="text-left py-4 px-5 font-semibold text-[#FF4F00]">Kovil AI Databricks Engineers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E2D9] bg-white">
                {comparisonRows.map((row, i) => (
                  <tr key={row.dimension} className={i % 2 === 0 ? '' : 'bg-[#FAF8F4]'}>
                    <td className="py-4 px-5 font-medium text-[#0A0A0A]">{row.dimension}</td>
                    <td className="py-4 px-5 text-[#9B9B9B]">{row.generic}</td>
                    <td className="py-4 px-5 text-[#4B4B4B]">{row.kovil}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* ── Architecture section ─────────────────────────────────────────── */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">What a Production-Grade Medallion Architecture Looks Like</h2>
            <p className="text-[#4B4B4B] max-w-2xl mx-auto">A concrete architecture our engineers implemented for a SaaS company processing multi-source telemetry and transactional event data.</p>
          </div>

          {/* Architecture diagram placeholder */}
          <div className="bg-[#0A0A0A] rounded-2xl border border-[#2A2A2A] p-8 mb-8">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#FF4F00] mb-6">Architecture: Medallion Pipeline on Databricks + AWS</div>
            <div className="grid md:grid-cols-4 gap-0 relative">
              {[
                {
                  layer: 'Bronze',
                  color: 'border-amber-700/50 bg-amber-900/10',
                  labelColor: 'text-amber-400',
                  tech: 'Auto Loader (cloudFiles)',
                  detail: 'Raw JSON/Avro from S3 event bucket. Schema inference + evolution enabled. Append-only. Retained indefinitely for replay.',
                },
                {
                  layer: 'Silver',
                  color: 'border-slate-500/50 bg-slate-800/30',
                  labelColor: 'text-slate-300',
                  tech: 'DLT Streaming Tables',
                  detail: 'Deduplication via MERGE on composite key. EXPECT constraints quarantine malformed records. PII columns masked via Unity Catalog row filters.',
                },
                {
                  layer: 'Gold',
                  color: 'border-yellow-600/50 bg-yellow-900/10',
                  labelColor: 'text-yellow-400',
                  tech: 'Photon-powered DLT Live Tables',
                  detail: 'Pre-aggregated fact tables for BI. Materialised daily and hourly. Served via Databricks SQL serverless warehouse to Tableau/Looker.',
                },
                {
                  layer: 'Governance',
                  color: 'border-[#FF4F00]/40 bg-[#FF4F00]/5',
                  labelColor: 'text-[#FF4F00]',
                  tech: 'Unity Catalog',
                  detail: 'Catalog-per-environment. Schema-per-domain. Automated data lineage. Column-level masking on PII. All grants managed via Terraform.',
                },
              ].map((step, i) => (
                <div key={step.layer} className="relative">
                  <div className={`rounded-xl border ${step.color} p-5 mx-2`}>
                    <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${step.labelColor}`}>{step.layer}</div>
                    <div className="text-white font-medium text-sm mb-2">{step.tech}</div>
                    <p className="text-[#9B9B9B] text-xs leading-relaxed">{step.detail}</p>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:flex absolute top-1/2 -right-3 z-10 items-center justify-center w-6 h-6 bg-[#FF4F00] rounded-full -translate-y-1/2">
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Narrative */}
          <div className="bg-white rounded-2xl border border-[#E5E2D9] p-8">
            <h3 className="font-semibold text-[#0A0A0A] mb-4 text-lg">The Problem and What We Built</h3>
            <p className="text-[#4B4B4B] leading-relaxed mb-4">
              A B2B SaaS company was ingesting telemetry events from 47 customer integrations plus transactional data from three internal PostgreSQL databases into an aging Redshift cluster. Ingestion lag averaged 4 hours. Analysts were querying stale data. The Redshift bill was growing with declining query performance as row counts crossed 800 billion.
            </p>
            <p className="text-[#4B4B4B] leading-relaxed mb-4">
              A two-engineer Kovil AI team migrated the stack to Databricks on AWS over 12 weeks. Auto Loader ingests raw JSON from S3 event buckets into a Bronze Delta table, with schema evolution enabled so new event types from customer integrations do not break the pipeline. A DLT Structured Streaming graph processes Bronze into Silver: deduplication via MERGE on a composite (customer_id, event_id, event_timestamp) key, EXPECT constraints quarantine malformed records into a dead-letter Silver table, and PII fields are masked via Unity Catalog row filters before Silver tables are readable by analysts.
            </p>
            <p className="text-[#4B4B4B] leading-relaxed mb-6">
              Gold materialised tables are built by Photon-powered DLT pipelines running on a triggered schedule: hourly for operational dashboards, daily for executive reporting. Served via a Databricks SQL serverless warehouse — no fixed cluster to manage. Unity Catalog manages access: the engineering service principal writes to Bronze and Silver, analysts have SELECT on Gold schemas only.
            </p>
            <div className="grid sm:grid-cols-3 gap-5">
              <div className="bg-[#FAF8F4] rounded-xl p-5 border border-[#E5E2D9]">
                <div className="text-2xl font-bold text-[#FF4F00] mb-1">4h → real-time</div>
                <div className="text-sm text-[#4B4B4B]">ingestion lag eliminated with DLT Structured Streaming replacing batch Redshift COPY</div>
              </div>
              <div className="bg-[#FAF8F4] rounded-xl p-5 border border-[#E5E2D9]">
                <div className="text-2xl font-bold text-[#FF4F00] mb-1">38%</div>
                <div className="text-sm text-[#4B4B4B]">reduction in cloud data spend via job cluster separation, spot instance policies, and Photon acceleration</div>
              </div>
              <div className="bg-[#FAF8F4] rounded-xl p-5 border border-[#E5E2D9]">
                <div className="text-2xl font-bold text-[#FF4F00] mb-1">12 weeks</div>
                <div className="text-sm text-[#4B4B4B]">Redshift to Databricks with parallel validation, zero downtime cutover, and full Unity Catalog governance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* ── Mid-page CTA ─────────────────────────────────────────────────── */}
      <section className="bg-[#0A0A0A] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Request a Databricks Architecture Audit or Engineering Profiles</h2>
              <p className="text-[#9B9B9B] leading-relaxed mb-2">
                Share your current stack (workspace tier, cloud provider, whether you are on Unity Catalog or legacy metastore, and whether you are running batch or streaming workloads) and we return one of two things within 24 hours:
              </p>
              <ul className="space-y-2 mt-4">
                {[
                  'Technical engineering profiles matched to your stack if you need embedded capacity',
                  'A structured audit scope if your existing Databricks environment needs diagnosis first',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-[#9B9B9B] text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#FF4F00] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#e64400] transition-colors text-lg">
                Deploy Databricks Engineers <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-[#3A3A3A] text-white font-semibold px-8 py-4 rounded-lg hover:border-white transition-colors">
                Request a Lakehouse Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#2A2A2A]" />

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0A0A0A] mb-10 text-center">Databricks Engineering: Technical Questions Answered</h2>
          <div className="divide-y divide-[#E5E2D9]">
            {faqSchema.mainEntity.map((faq) => (
              <div key={faq.name} className="py-6">
                <h3 className="font-semibold text-[#0A0A0A] mb-3 leading-snug">{faq.name}</h3>
                <p className="text-[#4B4B4B] text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* ── Related links ────────────────────────────────────────────────── */}
      <section className="bg-[#FAF8F4] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#0A0A0A] mb-4">Related engineering roles and services</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Hire Data Engineer', href: '/hire/data-engineer' },
              { label: 'Hire AI Engineer', href: '/hire/ai-engineer' },
              { label: 'Hire ML Engineer', href: '/hire/ml-engineer' },
              { label: 'AI Staff Augmentation', href: '/ai-staff-augmentation' },
              { label: 'Dedicated AI Team', href: '/dedicated-ai-team' },
              { label: 'Managed AI Engineering', href: '/managed-ai-engineering' },
              { label: 'IT Staff Augmentation', href: '/it-staff-augmentation' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="inline-flex items-center gap-1 text-sm text-[#4B4B4B] border border-[#E5E2D9] rounded-full px-4 py-2 hover:border-[#FF4F00] hover:text-[#FF4F00] transition-colors">
                {link.label} <ChevronRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* ── Bottom CTA ───────────────────────────────────────────────────── */}
      <section className="bg-[#FF4F00] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Your Lakehouse Should Be an Asset, Not a Liability</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
            Tell us your stack. We will match you with a Databricks engineer who has run production Lakehouses at your scale and embed them in your team in under 10 days.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#FF4F00] font-bold px-10 py-4 rounded-lg hover:bg-[#FAF8F4] transition-colors text-lg">
            Deploy Databricks Engineers <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
