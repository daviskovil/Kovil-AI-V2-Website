import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Staff Augmentation | Add Vetted AI Engineers to Your Team',
  description: 'AI staff augmentation: extend your team with pre-vetted AI engineers, LLM specialists, and ML engineers. Match in 48 hours. Your management, your tools, your priorities.',
  keywords: ['AI staff augmentation', 'AI engineer augmentation', 'hire AI engineer', 'LLM engineer augmentation', 'AI talent augmentation', 'augment team with AI engineers', 'AI staff augmentation services'],
  openGraph: {
    title: 'AI Staff Augmentation | Add Vetted AI Engineers to Your Team',
    description: 'AI staff augmentation: extend your team with pre-vetted AI engineers, LLM specialists, and ML engineers. Match in 48 hours. Your management, your tools, your priorities.',
    images: [{ url: 'https://kovil.ai/staff-aug-ai.webp', width: 1200, height: 630 }],
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kovil AI',
  url: 'https://kovil.ai',
  logo: 'https://kovil.ai/kovil-logo.png',
  description: 'AI staff augmentation company providing vetted AI engineers, LLM specialists, and ML engineers to extend client teams on demand.',
  sameAs: ['https://www.linkedin.com/company/kovil-ai'],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'AI Staff Augmentation', item: 'https://kovil.ai/ai-staff-augmentation' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AI Staff Augmentation',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  areaServed: 'Worldwide',
  description: 'On-demand AI staff augmentation: vetted AI engineers, LLM specialists, ML engineers, and generative AI developers integrated into your team under your management.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is AI staff augmentation?',
      acceptedAnswer: { '@type': 'Answer', text: 'AI staff augmentation is extending your existing engineering team with specialist AI talent — LLM engineers, AI engineers, ML engineers, and generative AI developers — who work under your management on your projects. You retain full control over the work while gaining skills your team does not currently have, without the 3-6 month timeline of a full-time hire.' },
    },
    {
      '@type': 'Question',
      name: 'What AI roles can be augmented through Kovil AI?',
      acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI provides AI engineers (LangChain, RAG, agents), LLM engineers (fine-tuning, RLHF, LLMOps), generative AI developers (GPT-4o/Claude integrations, prompt engineering), ML engineers (PyTorch, model training, MLOps), and AI-fluent full-stack engineers who can build the full application layer around an AI backend.' },
    },
    {
      '@type': 'Question',
      name: 'How do you vet AI engineers specifically?',
      acceptedAnswer: { '@type': 'Answer', text: 'Our AI-specific vetting goes beyond general coding ability. We test: LLM API integration proficiency (token management, streaming, structured output), RAG system design (chunking strategies, vector store selection, retrieval evaluation), agent architecture (LangGraph, tool use, loop control), fine-tuning methodology (LoRA, QLoRA, dataset preparation), and production deployment experience (LangSmith, monitoring, cost management). Less than 3% of AI applicants pass.' },
    },
    {
      '@type': 'Question',
      name: 'How quickly can an AI engineer join my team?',
      acceptedAnswer: { '@type': 'Answer', text: 'We present screened candidates within 48 hours of your brief. Typical end-to-end time from brief to engineer starting: 10-14 days, accounting for your interview schedule, selection, and access provisioning. Compare this to 3-6 months for a full-time AI engineer hire in the current market.' },
    },
    {
      '@type': 'Question',
      name: 'My team has no AI experience — will an augmented AI engineer work independently?',
      acceptedAnswer: { '@type': 'Answer', text: 'Augmented AI engineers are selected for their ability to work autonomously within your team structure. They can define AI architecture, make technology choices, and implement independently. If your team has no AI context at all, we recommend starting with an AI tech lead who can set direction before adding more engineers. We will advise the right structure during the brief.' },
    },
    {
      '@type': 'Question',
      name: 'What does AI staff augmentation cost compared to full-time hiring?',
      acceptedAnswer: { '@type': 'Answer', text: 'A senior AI engineer costs $160K-$200K+ annually in base salary in the US, plus 20-30% in benefits, taxes, and employer costs — totalling $195K-$260K per year fully loaded. AI staff augmentation via Kovil AI provides comparable seniority at lower total cost, with no benefits overhead, no 4-month recruitment timeline, and the ability to scale down when the AI project phase ends.' },
    },
    {
      '@type': 'Question',
      name: 'Can augmented AI engineers work on greenfield AI projects?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Many clients bring in augmented AI engineers specifically to start greenfield AI projects that the existing team does not have the skills to build. A common pattern: 1 AI tech lead sets architecture and makes core decisions, 1-2 AI engineers build and implement, and your existing team handles integrations with the rest of the product. The AI team hands over the system with documentation and a knowledge transfer session.' },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum engagement length for AI staff augmentation?',
      acceptedAnswer: { '@type': 'Answer', text: 'Our minimum engagement is 3 months. AI projects rarely benefit from shorter windows — there is significant ramp-up time for context, and the first month is often spent on architecture and foundational work before meaningful feature velocity kicks in. Most AI staff augmentation engagements run 3-12 months, with many clients retaining engineers on a rolling basis as their AI roadmap expands.' },
    },
  ],
}

const aiRoles = [
  {
    title: 'AI Engineer',
    icon: '🤖',
    skills: ['LangChain / LangGraph', 'RAG pipeline design', 'LLM API integration', 'Agent architecture', 'LangSmith + observability'],
    matchTime: '48 hrs',
    seniorityLevels: 'Mid / Senior / Lead',
  },
  {
    title: 'LLM Engineer',
    icon: '🧠',
    skills: ['Fine-tuning (LoRA / QLoRA)', 'RLHF + alignment', 'Evaluation frameworks', 'Private model hosting', 'LLMOps + drift detection'],
    matchTime: '48 hrs',
    seniorityLevels: 'Senior / Lead',
  },
  {
    title: 'Generative AI Developer',
    icon: '✨',
    skills: ['GPT-4o / Claude APIs', 'Prompt engineering', 'LlamaIndex / LangChain', 'Multimodal pipelines', 'RAGAS evaluation'],
    matchTime: '48 hrs',
    seniorityLevels: 'Mid / Senior',
  },
  {
    title: 'ML Engineer',
    icon: '📊',
    skills: ['PyTorch / TensorFlow', 'MLflow + Kubeflow', 'SageMaker / Vertex AI', 'Feature store engineering', 'Computer vision / NLP'],
    matchTime: '48-72 hrs',
    seniorityLevels: 'Mid / Senior / Lead',
  },
  {
    title: 'AI-Fluent Full-Stack Engineer',
    icon: '🔗',
    skills: ['React / Next.js + TypeScript', 'FastAPI + Python', 'Streaming LLM UI', 'OpenAI / Anthropic APIs', 'Vector DB integration'],
    matchTime: '48 hrs',
    seniorityLevels: 'Mid / Senior',
  },
  {
    title: 'MLOps / LLMOps Engineer',
    icon: '⚙️',
    skills: ['CI/CD for ML', 'Model monitoring + drift', 'Kubernetes + GPU clusters', 'AWS Bedrock / GCP Vertex', 'Cost monitoring + budgets'],
    matchTime: '48-72 hrs',
    seniorityLevels: 'Senior / Lead',
  },
]

const vettingStages = [
  { stage: 'Async Technical Screen', detail: 'Role-specific AI engineering assessment: LLM API task, RAG design question, and architecture scenario. Timed and auto-scored.' },
  { stage: 'Live Technical Interview', detail: '60-minute interview with a Kovil AI senior engineer. Code review, system design, AI architecture deep-dive. We see how they think, not just what they know.' },
  { stage: 'Communication Assessment', detail: 'We assess English fluency, async written communication, ability to explain complex AI concepts to non-technical stakeholders, and remote collaboration habits.' },
  { stage: 'Reference Verification', detail: 'We speak directly with former managers or tech leads. We verify specific AI project contributions, delivery reliability, and team integration quality.' },
]

const marketStats = [
  { value: 'Top 3%', label: 'of AI engineering applicants pass our 4-stage vetting process — technical screen, live interview, comms, reference check' },
  { value: '4x', label: 'faster to productive contribution vs a full-time AI hire: 2 weeks vs 6-8 months (recruit + ramp)' },
  { value: '189%', label: 'growth in LLM engineer job postings in 2025 — making AI talent the hardest engineering role to fill' },
]

const useCases = [
  { scenario: 'You are shipping an AI feature in Q3 but have no LLM engineers', solution: 'Add 1-2 AI engineers for the sprint. They design the architecture, build, and hand over to your team with docs.' },
  { scenario: 'Your RAG chatbot is performing poorly and your team does not know why', solution: 'Bring in an AI engineer to audit the retrieval pipeline, tune re-ranking, and set up RAGAS eval. Fixed in weeks, not months.' },
  { scenario: 'You hired an AI engineer 6 months ago but velocity is low and quality is inconsistent', solution: 'Augment with a senior AI tech lead who can upskill your hire, improve the architecture, and pair-program on the hard problems.' },
  { scenario: 'You want to fine-tune a model on your proprietary data but have no ML team', solution: 'Bring in an LLM engineer with LoRA/QLoRA experience for a focused 3-month fine-tuning engagement.' },
]

export default function AIStaffAugmentationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-[#0A0A0A] py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="flex items-center gap-2 text-sm text-[#9B9B9B] mb-6">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/staff-augmentation" className="hover:text-white transition-colors">Staff Augmentation</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">AI Staff Augmentation</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-[#FF4F00]/10 border border-[#FF4F00]/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-[#FF4F00] rounded-full animate-pulse" />
                <span className="text-[#FF4F00] text-sm font-medium">Top 3% AI Engineers. Matched in 48 Hours.</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Add Vetted AI Engineers to Your Team Without the 6-Month Hire
              </h1>
              <p className="text-lg text-[#9B9B9B] leading-relaxed mb-8">
                The AI talent market is brutally competitive. Kovil AI pre-screens AI engineers, LLM specialists, and ML engineers so you can extend your team with senior AI talent in days, not months. Your management, your tools, your roadmap.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#e64400] transition-colors">
                  Get AI Engineers in 48 Hours
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/hire/ai-engineer" className="inline-flex items-center justify-center gap-2 border border-[#3A3A3A] text-white font-semibold px-8 py-4 rounded-lg hover:border-white transition-colors">
                  View AI Engineer Profile
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              <Image
                src="/staff-aug-ai.webp"
                alt="AI staff augmentation showing vetted AI engineers, LLM specialists and ML engineers joining your team"
                width={540}
                height={304}
                className="relative rounded-2xl border border-[#2A2A2A] shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-white border-b border-[#E5E2D9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-[#4B4B4B]">
            {['LangChain / LangGraph', 'RAG + LlamaIndex', 'LLM Fine-Tuning', 'MLOps / LLMOps', 'OpenAI / Anthropic / Llama 3', 'LangSmith Tracing'].map(t => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF4F00] flex-shrink-0" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why AI talent is hard + stats */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">Why AI Talent is the Hardest Engineering Hire Right Now</h2>
              <p className="text-[#4B4B4B] leading-relaxed mb-4">
                LLM engineer job postings grew 189% in 2025. Senior AI engineers are fielding 5-10 recruiter messages per week. The gap between demand and supply is widening, not closing — because training AI engineers takes years and the field is moving too fast for traditional education to keep up.
              </p>
              <p className="text-[#4B4B4B] leading-relaxed mb-4">
                For most companies, waiting 3-6 months to hire an AI engineer means missing the market window. A competitor ships an AI feature. A prospect chooses a product that already has AI. The opportunity cost is real.
              </p>
              <p className="text-[#4B4B4B] leading-relaxed">
                AI staff augmentation solves this by giving you access to a pre-vetted bench of AI engineers who are ready to start in 2 weeks. The hiring risk, the vetting effort, and the talent search are done. You just interview the final 2-3 candidates and choose.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {marketStats.map(stat => (
                <div key={stat.value} className="bg-white rounded-xl border border-[#E5E2D9] p-6 flex items-start gap-4">
                  <span className="text-3xl font-bold text-[#FF4F00] leading-none flex-shrink-0">{stat.value}</span>
                  <span className="text-[#4B4B4B] text-sm leading-relaxed pt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* AI Role cards */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">AI Engineering Roles Available for Augmentation</h2>
            <p className="text-[#4B4B4B] max-w-2xl mx-auto">Six specialist AI roles, each with a dedicated vetting track. Every candidate is assessed on production-grade AI experience, not just theoretical knowledge.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {aiRoles.map(role => (
              <div key={role.title} className="bg-white rounded-xl border border-[#E5E2D9] p-6 hover:border-[#FF4F00]/40 transition-colors">
                <div className="text-3xl mb-3">{role.icon}</div>
                <h3 className="font-semibold text-[#0A0A0A] mb-1">{role.title}</h3>
                <div className="flex gap-2 mb-3">
                  <span className="text-xs bg-[#FAF8F4] border border-[#E5E2D9] rounded-full px-2 py-0.5 text-[#4B4B4B]">Match: {role.matchTime}</span>
                  <span className="text-xs bg-[#FAF8F4] border border-[#E5E2D9] rounded-full px-2 py-0.5 text-[#4B4B4B]">{role.seniorityLevels}</span>
                </div>
                <ul className="space-y-1.5">
                  {role.skills.map(s => (
                    <li key={s} className="flex items-center gap-2 text-sm text-[#4B4B4B]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4F00] flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* Vetting process */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">How We Vet AI Engineers (So You Do Not Have To)</h2>
            <p className="text-[#4B4B4B] max-w-2xl mx-auto">Four stages. Less than 3% pass. You only interview candidates who have already cleared every gate.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {vettingStages.map((v, i) => (
              <div key={v.stage} className="bg-white rounded-xl border border-[#E5E2D9] p-6">
                <span className="text-3xl font-bold text-[#FF4F00] opacity-30 block mb-3">0{i + 1}</span>
                <h3 className="font-semibold text-[#0A0A0A] mb-2 text-sm">{v.stage}</h3>
                <p className="text-xs text-[#4B4B4B] leading-relaxed">{v.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-[#0A0A0A] rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white font-semibold">2-week trial period on every placement. Not the right fit? We replace at no cost.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF4F00] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#e64400] transition-colors flex-shrink-0 text-sm">
              Start the Brief <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* Mid CTA */}
      <section className="bg-[#0A0A0A] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">What AI Skill Does Your Team Need Right Now?</h2>
          <p className="text-[#9B9B9B] max-w-xl mx-auto mb-8">RAG engineer? LLM fine-tuning specialist? AI tech lead? Brief us and we will have pre-screened candidates ready in 48 hours.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#e64400] transition-colors">
            Brief Us Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* Use cases */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">When AI Staff Augmentation Is the Right Call</h2>
            <p className="text-[#4B4B4B] max-w-2xl mx-auto">Four common scenarios where AI staff augmentation solves the problem faster than any other model.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {useCases.map((uc, i) => (
              <div key={i} className="bg-white rounded-xl border border-[#E5E2D9] p-6">
                <p className="text-sm font-semibold text-[#9B9B9B] uppercase tracking-widest mb-2">Scenario {i + 1}</p>
                <p className="text-[#0A0A0A] font-medium mb-3 leading-snug">{uc.scenario}</p>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4F00] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[#4B4B4B] leading-relaxed">{uc.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* Case study */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A0A0A] rounded-2xl p-8 lg:p-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#FF4F00] mb-4">AI Augmentation Case Study</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Healthcare SaaS: LLM Engineer Augmentation for Clinical NLP Pipeline</h2>
            <p className="text-[#9B9B9B] leading-relaxed mb-8 max-w-2xl">
              A healthcare SaaS platform needed to extract structured data from unstructured clinical notes. Their engineering team was strong on the backend but had zero NLP or LLM experience. We matched a senior LLM engineer with healthcare NLP background in 48 hours. He joined their GitHub, their Slack, and their sprint ceremonies. Within 10 weeks he had shipped a production extraction pipeline processing 15,000 notes per day with 91% field-level accuracy.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="text-3xl font-bold text-[#FF4F00] mb-1">48 hrs</div>
                <div className="text-sm text-[#9B9B9B]">from brief to 3 screened LLM engineer candidates presented</div>
              </div>
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="text-3xl font-bold text-[#FF4F00] mb-1">91%</div>
                <div className="text-sm text-[#9B9B9B]">field-level extraction accuracy on clinical notes in production</div>
              </div>
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="text-3xl font-bold text-[#FF4F00] mb-1">15K</div>
                <div className="text-sm text-[#9B9B9B]">clinical notes processed per day, saving 4 hours of manual coding per clinician</div>
              </div>
            </div>
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#FF4F00] transition-colors">
              Read more case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* FAQs */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0A0A0A] mb-10 text-center">AI Staff Augmentation: Frequently Asked Questions</h2>
          <div className="divide-y divide-[#E5E2D9]">
            {faqSchema.mainEntity.map((faq) => (
              <div key={faq.name} className="py-6">
                <h3 className="font-semibold text-[#0A0A0A] mb-2">{faq.name}</h3>
                <p className="text-[#4B4B4B] text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      <section className="bg-[#FAF8F4] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#0A0A0A] mb-4">Related services</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Staff Augmentation', href: '/staff-augmentation' },
              { label: 'IT Staff Augmentation', href: '/it-staff-augmentation' },
              { label: 'Dedicated AI Team', href: '/dedicated-ai-team' },
              { label: 'Managed AI Engineering', href: '/managed-ai-engineering' },
              { label: 'Hire AI Engineers', href: '/hire/ai-engineer' },
              { label: 'Hire LLM Engineers', href: '/hire/llm-engineer' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="inline-flex items-center gap-1 text-sm text-[#4B4B4B] border border-[#E5E2D9] rounded-full px-4 py-2 hover:border-[#FF4F00] hover:text-[#FF4F00] transition-colors">
                {link.label} <ChevronRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      <section className="bg-[#FF4F00] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Need AI Engineers on Your Team This Month?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">Tell us the AI role, the skills, and your timeline. Pre-screened candidates in 48 hours. Two-week trial on every placement.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#FF4F00] font-bold px-10 py-4 rounded-lg hover:bg-[#FAF8F4] transition-colors text-lg">
            Brief Us Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
