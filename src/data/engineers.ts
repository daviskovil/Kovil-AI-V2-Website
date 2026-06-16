export type Domain       = 'ai-engineering' | 'data-engineering' | 'ml-engineering' | 'data-science'
export type Availability = 'now' | '1-week' | '2-weeks' | '2h-day' | '20h-week'
export type Gender       = 'male' | 'female'

export interface Engineer {
  id: string
  name: string          // Display name shown large on card  e.g. "Vivek G."
  gender: Gender
  title: string
  domain: Domain
  yearsExp: number
  availability: Availability
  bio: string
  skills: string[]
  stack: {
    languages: string[]
    frameworks: string[]
    cloud: string[]
    tools: string[]
  }
  highlights: string[]
  certifications: string[]
  education: string
  engagementType: string[]
}

export const engineers: Engineer[] = [

  // ─── AI Engineering ───────────────────────────────────────

  {
    id: 'vivek-g',
    name: 'Vivek G.',
    gender: 'male',
    title: 'Senior AI Engineer',
    domain: 'ai-engineering',
    yearsExp: 8,
    availability: 'now',
    bio: 'Specialist in production LLM deployments and RAG architectures. Has built enterprise-grade AI assistants for Fortune 500 clients across legal, finance, and healthcare verticals. Known for optimising context windows and retrieval pipelines for cost-efficiency without sacrificing accuracy.',
    skills: ['LLM Integration', 'RAG Architecture', 'Prompt Engineering', 'LangChain', 'Vector Databases', 'API Design'],
    stack: {
      languages: ['Python', 'TypeScript'],
      frameworks: ['LangChain', 'LlamaIndex', 'FastAPI', 'Next.js'],
      cloud: ['AWS', 'Azure OpenAI'],
      tools: ['Pinecone', 'Weaviate', 'Redis', 'Docker'],
    },
    highlights: [
      'Built a RAG-powered legal document assistant reducing research time by 70% for a top-50 law firm',
      'Deployed a multi-agent customer support system handling 40K+ queries per day with 99.9% uptime',
      'Reduced LLM inference costs by 45% through prompt optimisation and semantic caching strategies',
      'Led a 4-engineer team to deliver an AI underwriting assistant for a Tier-1 insurer in 12 weeks',
    ],
    certifications: ['AWS Certified Solutions Architect', 'Azure AI Engineer Associate'],
    education: 'M.Sc. Computer Science, University of Edinburgh',
    engagementType: ['Full-time Augmentation', 'Fixed-Price Project'],
  },

  {
    id: 'priya-s',
    name: 'Priya S.',
    gender: 'female',
    title: 'AI Automation Engineer',
    domain: 'ai-engineering',
    yearsExp: 6,
    availability: '1-week',
    bio: 'Expert in agentic AI systems and intelligent workflow automation. Combines deep knowledge of n8n, LangChain, and custom Python orchestration to build autonomous pipelines that replace manual back-office processes. Comfortable going from prototype to production in fast-paced startup and enterprise environments.',
    skills: ['AI Agents', 'Workflow Automation', 'n8n', 'LangChain', 'Process Mining', 'API Integration'],
    stack: {
      languages: ['Python', 'JavaScript'],
      frameworks: ['LangChain', 'n8n', 'FastAPI', 'Node.js'],
      cloud: ['AWS', 'GCP'],
      tools: ['Make', 'Twilio', 'Slack API', 'Docker'],
    },
    highlights: [
      'Built an end-to-end AI agent replacing a 12-person data entry team across 3 business units',
      'Automated claims processing for a regional insurer, cutting cycle time from 5 days to 4 hours',
      'Designed a multi-tool LLM agent that autonomously triages and routes 10K+ weekly support tickets',
      'Delivered AI-powered invoice reconciliation saving $2.4M annually for a logistics client',
    ],
    certifications: ['Google Cloud Professional Data Engineer'],
    education: 'B.Eng. Software Engineering, University of Manchester',
    engagementType: ['Full-time Augmentation', 'Fixed-Price Project', 'Part-time / Advisory'],
  },

  {
    id: 'kiran-m',
    name: 'Kiran M.',
    gender: 'male',
    title: 'Staff AI Engineer — Voice & Conversational AI',
    domain: 'ai-engineering',
    yearsExp: 10,
    availability: 'now',
    bio: 'A decade of experience building production-grade conversational AI systems across voice, chat, and multimodal interfaces. Has led AI teams at Series B to public-company scale. Specialises in reducing hallucination, improving response quality, and building robust trust layers between LLMs and enterprise data systems.',
    skills: ['Voice AI', 'Conversational AI', 'LLM Fine-tuning', 'Twilio', 'Deepgram', 'Enterprise AI Architecture'],
    stack: {
      languages: ['Python', 'Go'],
      frameworks: ['LangChain', 'Rasa', 'Twilio Voice', 'FastAPI'],
      cloud: ['AWS', 'Azure'],
      tools: ['Deepgram', 'ElevenLabs', 'Redis', 'PostgreSQL', 'Kubernetes'],
    },
    highlights: [
      'Architected a voice AI patient intake system eliminating 80% of administrative calls at a 200-clinic network',
      'Built a real-time AI co-pilot for call-centre agents, reducing average handle time by 35%',
      'Led fine-tuning of a domain-specific LLM on 50GB of proprietary financial data with RLHF alignment',
      'Designed a conversational AI framework now powering 3 enterprise SaaS products at scale',
    ],
    certifications: ['AWS Certified Machine Learning Specialty', 'CKA — Certified Kubernetes Administrator'],
    education: 'M.Sc. Artificial Intelligence, Imperial College London',
    engagementType: ['Full-time Augmentation', 'Fixed-Price Project'],
  },

  {
    id: 'ananya-r',
    name: 'Ananya R.',
    gender: 'female',
    title: 'AI Engineer — Document Intelligence',
    domain: 'ai-engineering',
    yearsExp: 5,
    availability: '20h-week',
    bio: 'Focused at the intersection of computer vision and document intelligence. Builds systems that extract, classify, and act on information from unstructured documents — PDFs, scanned forms, contracts, invoices — at production scale. Combines traditional CV methods with LLM-based pipelines for best-in-class accuracy.',
    skills: ['Document AI', 'Computer Vision', 'OCR', 'GPT-4 Vision', 'Document Classification', 'Data Extraction'],
    stack: {
      languages: ['Python'],
      frameworks: ['OpenCV', 'Tesseract', 'LangChain', 'FastAPI', 'Hugging Face Transformers'],
      cloud: ['Azure AI', 'AWS Textract', 'GCP Document AI'],
      tools: ['PyMuPDF', 'Camelot', 'Docker', 'PostgreSQL'],
    },
    highlights: [
      'Built a multi-format document extraction pipeline processing 500K+ documents per month for a global insurer',
      'Achieved 97.3% extraction accuracy on mixed handwritten and printed medical forms',
      'Reduced document review time from 8 minutes to 40 seconds through a vision + LLM hybrid pipeline',
      'Integrated with 4 downstream ERP systems achieving zero manual data entry across the workflow',
    ],
    certifications: ['Azure AI Fundamentals', 'Hugging Face NLP Course — Certified'],
    education: 'B.Sc. Computer Science with AI, University of Bath',
    engagementType: ['Fixed-Price Project', '20 hrs / week'],
  },

  // ─── Data Engineering ─────────────────────────────────────

  {
    id: 'suresh-p',
    name: 'Suresh P.',
    gender: 'male',
    title: 'Senior Data Engineer',
    domain: 'data-engineering',
    yearsExp: 9,
    availability: 'now',
    bio: 'Data infrastructure specialist with a track record of building high-throughput, fault-tolerant data platforms from the ground up. Expert in the modern data stack — dbt, Snowflake, Spark, and Airflow. Has led multiple migrations from legacy on-prem systems to fully cloud-native architectures.',
    skills: ['Apache Spark', 'dbt', 'Snowflake', 'Airflow', 'Data Modelling', 'ETL / ELT Pipelines'],
    stack: {
      languages: ['Python', 'SQL', 'Scala'],
      frameworks: ['Apache Spark', 'dbt', 'Apache Airflow'],
      cloud: ['AWS (S3, Glue, Redshift)', 'Snowflake'],
      tools: ['Fivetran', 'Great Expectations', 'Terraform', 'Docker'],
    },
    highlights: [
      'Migrated a 15TB legacy data warehouse to Snowflake, reducing query costs by 60%',
      'Designed a dbt transformation layer serving 80+ downstream analytics consumers across the business',
      'Built real-time inventory data pipelines supporting same-day fulfilment for a $1.8B retailer',
      'Reduced pipeline failure rate from 12% to 0.3% through improved observability, alerting, and testing',
    ],
    certifications: ['Snowflake SnowPro Core', 'dbt Certified Developer', 'AWS Data Analytics Specialty'],
    education: 'B.Sc. Computer Science, University of Waterloo',
    engagementType: ['Full-time Augmentation', 'Fixed-Price Project'],
  },

  {
    id: 'deepa-v',
    name: 'Deepa V.',
    gender: 'female',
    title: 'Data Engineer — Real-Time Streaming',
    domain: 'data-engineering',
    yearsExp: 7,
    availability: '2-weeks',
    bio: 'Specialist in event-driven architectures and real-time data systems. Builds and operates Kafka-based streaming platforms that process millions of events per second with sub-100ms latency. Strong background in both the data engineering and software engineering sides of stream processing.',
    skills: ['Apache Kafka', 'Apache Flink', 'Real-Time Pipelines', 'CDC', 'Stream Processing', 'Event-Driven Architecture'],
    stack: {
      languages: ['Python', 'Java', 'SQL'],
      frameworks: ['Apache Kafka', 'Apache Flink', 'Debezium', 'Spark Streaming'],
      cloud: ['Confluent Cloud', 'AWS MSK', 'GCP Pub/Sub'],
      tools: ['Schema Registry', 'ksqlDB', 'Docker', 'Kubernetes'],
    },
    highlights: [
      'Built a real-time fraud detection pipeline processing 2M+ transactions per day with <50ms end-to-end latency',
      'Implemented Change Data Capture across 18 source systems with zero data loss over 18 months',
      'Reduced data freshness from 4-hour batch cycles to near-real-time for a fintech analytics platform',
      'Designed a streaming analytics platform serving live dashboards to 3,000+ concurrent business users',
    ],
    certifications: ['Confluent Certified Developer for Apache Kafka', 'AWS Certified Data Analytics'],
    education: 'M.Sc. Distributed Systems, TU Delft',
    engagementType: ['Full-time Augmentation', 'Fixed-Price Project'],
  },

  {
    id: 'yogesh-t',
    name: 'Yogesh T.',
    gender: 'male',
    title: 'Lead Data Engineer — Platform Architecture',
    domain: 'data-engineering',
    yearsExp: 11,
    availability: '2h-day',
    bio: 'Senior data platform architect and hands-on engineer who designs and builds enterprise data ecosystems that scale to petabytes. Comfortable presenting data strategy in the boardroom and writing production Spark jobs the same afternoon. Has built data engineering organisations from scratch and mentored 20+ engineers.',
    skills: ['Data Platform Architecture', 'Delta Lake', 'Databricks', 'Data Mesh', 'Data Governance', 'Platform Engineering'],
    stack: {
      languages: ['Python', 'SQL', 'Scala', 'Bash'],
      frameworks: ['Databricks', 'Delta Lake', 'Apache Spark', 'dbt'],
      cloud: ['Azure Synapse', 'Databricks on Azure', 'AWS'],
      tools: ['Unity Catalog', 'Azure Data Factory', 'Terraform', 'Prometheus', 'Grafana'],
    },
    highlights: [
      'Architected a data lakehouse on Databricks serving 50+ certified data products for a global manufacturing group',
      'Implemented a Data Mesh governance model reducing time-to-data-product from 6 months to 3 weeks',
      'Led a 14-engineer data platform team through a 2-year modernisation programme on time and on budget',
      'Built a cloud cost attribution framework saving $1.2M per year in Databricks and storage spend',
    ],
    certifications: ['Databricks Certified Data Engineer Professional', 'Azure Data Engineer Associate'],
    education: 'M.Sc. Data Science, University of Amsterdam',
    engagementType: ['Advisory / Fractional', '2 hrs / day'],
  },

  {
    id: 'kavitha-n',
    name: 'Kavitha N.',
    gender: 'female',
    title: 'Data Engineer — Cloud-Native & Analytics',
    domain: 'data-engineering',
    yearsExp: 6,
    availability: 'now',
    bio: 'Cloud-native data engineer with deep expertise in Google Cloud Platform and modern ELT patterns. Specialises in building scalable, cost-optimised pipelines using BigQuery as the analytical backbone. Brings a product mindset to data engineering — focused on reliable, well-documented, and testable pipelines.',
    skills: ['BigQuery', 'Google Cloud Platform', 'Dataflow', 'dbt', 'ELT Pipelines', 'Analytics Engineering'],
    stack: {
      languages: ['Python', 'SQL'],
      frameworks: ['dbt', 'Apache Beam', 'Google Dataflow', 'Apache Airflow'],
      cloud: ['GCP (BigQuery, GCS, Pub/Sub, Dataflow)', 'Fivetran'],
      tools: ['Looker', 'Great Expectations', 'Terraform', 'GitHub Actions'],
    },
    highlights: [
      'Built a GCP-native data platform ingesting 200+ sources into BigQuery for a SaaS company at Series C',
      'Reduced data warehouse costs by 42% through partition pruning, clustering, and query optimisation',
      'Designed a self-serve analytics layer enabling 150+ non-technical users to query trusted data independently',
      'Delivered an end-to-end customer 360 model unifying CRM, product, and finance data across 4 systems',
    ],
    certifications: ['Google Cloud Professional Data Engineer', 'dbt Certified Developer'],
    education: 'B.Sc. Information Systems, Erasmus University Rotterdam',
    engagementType: ['Full-time Augmentation', 'Fixed-Price Project'],
  },

  // ─── ML Engineering ───────────────────────────────────────

  {
    id: 'arjun-b',
    name: 'Arjun B.',
    gender: 'male',
    title: 'ML Engineer — Training & Deployment',
    domain: 'ml-engineering',
    yearsExp: 8,
    availability: 'now',
    bio: 'End-to-end ML engineer who owns the full model lifecycle from exploratory research through to production deployment and monitoring. Expert in training large-scale models with PyTorch and deploying them efficiently via TorchServe and Triton. Worked across NLP, recommendation systems, and real-time ranking at scale.',
    skills: ['PyTorch', 'MLflow', 'Model Training', 'TorchServe', 'Model Optimisation', 'Feature Engineering'],
    stack: {
      languages: ['Python', 'CUDA'],
      frameworks: ['PyTorch', 'Hugging Face Transformers', 'Scikit-learn', 'MLflow'],
      cloud: ['AWS SageMaker', 'GCP Vertex AI'],
      tools: ['Triton Inference Server', 'Weights & Biases', 'DVC', 'Docker', 'NVIDIA NIM'],
    },
    highlights: [
      'Trained and deployed a product recommendation model serving 8M users with 99.9% uptime and p99 latency <80ms',
      'Reduced model inference latency from 420ms to 38ms through ONNX conversion and INT8 quantisation',
      'Built an MLflow-based model registry managing 200+ model versions across 12 teams at a large enterprise',
      'Achieved 91.4% F1 on a multi-class document routing task using a fine-tuned DistilBERT model',
    ],
    certifications: ['AWS Certified Machine Learning Specialty', 'NVIDIA Deep Learning Institute (DLI) Certified'],
    education: 'M.Sc. Machine Learning, University of Toronto',
    engagementType: ['Full-time Augmentation', 'Fixed-Price Project'],
  },

  {
    id: 'meera-t',
    name: 'Meera T.',
    gender: 'female',
    title: 'Senior ML Engineer — LLM Fine-tuning',
    domain: 'ml-engineering',
    yearsExp: 9,
    availability: '1-week',
    bio: 'One of few engineers with hands-on production experience in both pre-training and post-training LLM alignment. Deep expertise in RLHF, DPO, and instruction fine-tuning. Has worked with models from 7B to 70B parameters and contributed to open-source fine-tuning toolkits used by thousands of engineers worldwide.',
    skills: ['LLM Fine-tuning', 'RLHF', 'DPO', 'LoRA / QLoRA', 'Model Alignment', 'Distributed Training'],
    stack: {
      languages: ['Python'],
      frameworks: ['PyTorch', 'Hugging Face TRL', 'DeepSpeed', 'vLLM', 'Axolotl'],
      cloud: ['AWS (A100 instances)', 'Modal Labs', 'Lambda Labs'],
      tools: ['Weights & Biases', 'LM-Eval Harness', 'PEFT', 'Flash Attention 2'],
    },
    highlights: [
      'Fine-tuned a 13B LLaMA variant on 800K proprietary examples, matching GPT-4 on domain-specific benchmarks',
      'Built a DPO alignment pipeline for a legal AI company, reducing hallucination rate by 62%',
      'Reduced fine-tuning compute cost by 78% by implementing QLoRA across a 4× A100 multi-node cluster',
      'Published two open-source fine-tuning recipes that have accumulated 2,000+ GitHub stars',
    ],
    certifications: ['Hugging Face NLP Specialist', 'DeepLearning.AI MLOps Specialisation'],
    education: 'M.Sc. Computational Linguistics, University of Edinburgh',
    engagementType: ['Full-time Augmentation', 'Fixed-Price Project'],
  },

  {
    id: 'rohit-c',
    name: 'Rohit C.',
    gender: 'male',
    title: 'ML Engineer — Recommendations & Personalisation',
    domain: 'ml-engineering',
    yearsExp: 6,
    availability: '2-weeks',
    bio: 'Specialises in building real-world recommendation and personalisation systems that drive measurable business outcomes. Deep knowledge of collaborative filtering, two-tower retrieval models, and real-time feature stores. Strong product intuition — works closely with product and data teams to define success metrics.',
    skills: ['Recommendation Systems', 'Two-Tower Models', 'Feature Stores', 'A/B Testing', 'Collaborative Filtering', 'Ranking'],
    stack: {
      languages: ['Python', 'SQL'],
      frameworks: ['TensorFlow', 'NVIDIA Merlin', 'Feast', 'Scikit-learn', 'XGBoost'],
      cloud: ['GCP Vertex AI', 'AWS SageMaker'],
      tools: ['Feast Feature Store', 'Kubeflow', 'MLflow', 'Redis', 'Apache Kafka'],
    },
    highlights: [
      'Built a two-tower retrieval model increasing click-through rate by 28% for a 10M-user content platform',
      'Designed a real-time feature pipeline delivering sub-5ms feature serving at 50K requests per second',
      'A/B tested 12 recommendation variants leading to a $6M annual revenue uplift, documented end-to-end',
      'Reduced the cold-start problem for new users by 40% through content-based bootstrapping',
    ],
    certifications: ['TensorFlow Developer Certificate', 'Google Cloud Professional ML Engineer'],
    education: 'B.Sc. Statistics and Computer Science, UCLA',
    engagementType: ['Full-time Augmentation', 'Fixed-Price Project'],
  },

  {
    id: 'divya-l',
    name: 'Divya L.',
    gender: 'female',
    title: 'Staff ML Engineer — MLOps & Platform',
    domain: 'ml-engineering',
    yearsExp: 12,
    availability: '20h-week',
    bio: 'Seasoned ML platform architect who builds the infrastructure that other ML teams depend on. Expert in Kubeflow, Vertex AI Pipelines, and custom ML platform development. Has scaled ML platforms to support hundreds of data scientists across multiple business units. Bridges ML research velocity and reliable production systems.',
    skills: ['MLOps', 'Kubeflow', 'ML Pipelines', 'Model Serving', 'Platform Engineering', 'Team Leadership'],
    stack: {
      languages: ['Python', 'Go', 'Bash'],
      frameworks: ['Kubeflow', 'Vertex AI', 'Seldon Core', 'BentoML'],
      cloud: ['GCP', 'AWS', 'Azure'],
      tools: ['Kubernetes', 'Argo Workflows', 'Prometheus', 'Grafana', 'Terraform', 'Helm'],
    },
    highlights: [
      'Built an internal ML platform used by 300+ data scientists at a Fortune 200 company across 6 business units',
      'Reduced model deployment time from 3 weeks to 2 hours through automated CI/CD and approval pipelines',
      'Achieved 99.95% model serving uptime at 200K+ predictions per minute across 40 production models',
      'Designed a model governance framework tracking 1,500+ models in production with full lineage and audit trail',
    ],
    certifications: ['CKA — Certified Kubernetes Administrator', 'Google Cloud Professional ML Engineer', 'AWS ML Specialty'],
    education: 'M.Sc. Computer Science (Systems), Stanford University',
    engagementType: ['Advisory / Fractional', '20 hrs / week'],
  },

  // ─── Data Science ─────────────────────────────────────────

  {
    id: 'aditya-j',
    name: 'Aditya J.',
    gender: 'male',
    title: 'Senior Data Scientist — NLP & Text Analytics',
    domain: 'data-science',
    yearsExp: 8,
    availability: 'now',
    bio: 'Data scientist with a deep focus on natural language processing and text analytics. Bridges the gap between classical NLP techniques and modern LLM-based approaches. Has productionised NLP systems for sentiment analysis, entity extraction, topic modelling, and document classification at scale in regulated industries.',
    skills: ['NLP', 'Text Classification', 'Sentiment Analysis', 'Named Entity Recognition', 'Topic Modelling', 'Statistical Modelling'],
    stack: {
      languages: ['Python', 'R', 'SQL'],
      frameworks: ['Hugging Face', 'spaCy', 'NLTK', 'Scikit-learn', 'Gensim'],
      cloud: ['AWS', 'Azure'],
      tools: ['Elasticsearch', 'MLflow', 'Jupyter', 'Tableau'],
    },
    highlights: [
      'Built an NLP pipeline classifying 2M+ customer complaints per month with 94% accuracy at a regulated financial firm',
      'Developed a named entity recognition model extracting clinical concepts from free-text nursing notes',
      'Reduced manual review workload by 65% through automated document classification and priority triage',
      'Led NLP capability building across a 20-person data science team, including curriculum and tooling design',
    ],
    certifications: ['DeepLearning.AI NLP Specialisation', 'AWS Certified Data Analytics'],
    education: 'Ph.D. Computational Linguistics, University of Cambridge',
    engagementType: ['Full-time Augmentation', 'Fixed-Price Project', 'Advisory / Fractional'],
  },

  {
    id: 'anita-j',
    name: 'Anita J.',
    gender: 'female',
    title: 'Data Scientist — Predictive Analytics & Forecasting',
    domain: 'data-science',
    yearsExp: 6,
    availability: '1-week',
    bio: 'Practical data scientist focused on building forecasting and predictive models that directly influence operational decisions. Expert in time series methods from classical ARIMA to modern neural approaches. Works closely with finance, supply chain, and operations stakeholders to translate business problems into modelling solutions.',
    skills: ['Time Series Forecasting', 'Predictive Modelling', 'XGBoost', 'Prophet', 'Demand Forecasting', 'Business Analytics'],
    stack: {
      languages: ['Python', 'SQL', 'R'],
      frameworks: ['Scikit-learn', 'XGBoost', 'LightGBM', 'Prophet', 'NeuralProphet', 'Statsmodels'],
      cloud: ['AWS', 'Azure Databricks'],
      tools: ['MLflow', 'Power BI', 'Tableau', 'Jupyter', 'dbt'],
    },
    highlights: [
      'Built a demand forecasting model reducing over-stock costs by $3.2M per year for a global FMCG company',
      'Developed a churn prediction model with 88% recall enabling proactive retention outreach for 500K subscribers',
      'Built a real-time pricing model updated every 15 minutes for a hotel chain across 200 properties',
      'Reduced forecast error (MAPE) from 24% to 9% for a major supply chain client over a 6-month engagement',
    ],
    certifications: ['Databricks Certified ML Professional', 'Microsoft Azure Data Scientist Associate'],
    education: 'M.Sc. Applied Statistics, London School of Economics',
    engagementType: ['Full-time Augmentation', 'Fixed-Price Project'],
  },

  {
    id: 'rajesh-k',
    name: 'Rajesh K.',
    gender: 'male',
    title: 'Lead Data Scientist — Causal Inference & Experimentation',
    domain: 'data-science',
    yearsExp: 10,
    availability: '2h-day',
    bio: 'One of the most rigorous experimentation specialists available. Expert in causal inference, experimental design, and A/B testing at internet scale. Has designed and run thousands of experiments across e-commerce, fintech, and consumer tech. Frequently brought in to rescue experiments yielding misleading results.',
    skills: ['Causal Inference', 'A/B Testing', 'Experimentation Design', 'Difference-in-Differences', 'Synthetic Control', 'Bayesian Statistics'],
    stack: {
      languages: ['Python', 'R', 'SQL'],
      frameworks: ['DoWhy', 'EconML', 'PyMC', 'Statsmodels', 'Scikit-learn'],
      cloud: ['Databricks', 'GCP BigQuery'],
      tools: ['Optimizely', 'LaunchDarkly', 'Tableau', 'Looker', 'dbt'],
    },
    highlights: [
      'Designed an experimentation platform running 400+ concurrent A/B tests for a top-10 global e-commerce company',
      'Identified $8M in misattributed revenue by diagnosing and correcting a flawed holdout group methodology',
      'Built a synthetic control framework enabling experimentation in geographies with no viable holdout groups',
      'Trained 60+ analysts in experiment design and causal inference best practices across 4 business units',
    ],
    certifications: ['MIT MicroMasters in Statistics and Data Science', 'Bayesian Statistics — Johns Hopkins Certified'],
    education: 'M.Sc. Statistics, University of Chicago',
    engagementType: ['Advisory / Fractional', '2 hrs / day'],
  },

  {
    id: 'shreya-h',
    name: 'Shreya H.',
    gender: 'female',
    title: 'Data Scientist — Analytics Engineering & BI',
    domain: 'data-science',
    yearsExp: 5,
    availability: 'now',
    bio: 'Data scientist with a strong analytics engineering foundation who bridges the gap between raw data and business intelligence. Comfortable writing complex dbt models in the morning and presenting executive dashboards in the afternoon. Focused on making data accessible, trustworthy, and immediately actionable.',
    skills: ['Analytics Engineering', 'dbt', 'SQL', 'Business Intelligence', 'Dashboard Design', 'Self-Serve Analytics'],
    stack: {
      languages: ['SQL', 'Python'],
      frameworks: ['dbt', 'Metabase', 'Looker', 'Tableau'],
      cloud: ['Snowflake', 'BigQuery', 'Redshift'],
      tools: ['Fivetran', 'Monte Carlo', 'dbt Cloud', 'GitHub Actions'],
    },
    highlights: [
      'Built a self-serve analytics layer enabling 200+ non-technical users to independently query trusted, governed data',
      'Reduced report generation time from 3 days to real-time for executive dashboards at a Series D SaaS company',
      'Designed a unified semantic metrics layer across 4 business units with 150+ consistently defined KPIs',
      'Improved internal data trust scores (per survey) from 48% to 89% through documentation and quality frameworks',
    ],
    certifications: ['dbt Certified Developer', 'Looker Developer Certified', 'Snowflake SnowPro Core'],
    education: 'B.Sc. Business Information Technology, Maastricht University',
    engagementType: ['Full-time Augmentation', 'Fixed-Price Project'],
  },
]
