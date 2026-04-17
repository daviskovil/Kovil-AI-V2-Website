import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  async redirects() {
    return [
      // ── Tool pages moved under /tools/ ────────────────────────────────────────
      {
        source: '/ai-project-estimator',
        destination: '/tools/ai-project-estimator',
        permanent: true,
      },
      {
        source: '/ai-readiness-ad-marketing-agencies',
        destination: '/tools/ai-readiness-ad-marketing-agencies',
        permanent: true,
      },

      // ── High-value old URLs still ranking on Google → 301 to new pages ──────
      // Passes existing page authority to the new site immediately

      // Blog content redirects
      {
        source: '/power-automate-vs-zapier-vs-n8n-vs-make-which-workflow-automation-tool-should-your-team-master-2025',
        destination: '/blog/n8n-vs-zapier-vs-power-automate',
        permanent: true,
      },
      {
        source: '/unlocking-precision-the-magic-of-custom-llm-embeddings-in-ai-solutions',
        destination: '/blog/rag-vs-fine-tuning',
        permanent: true,
      },
      {
        source: '/llm-fine-tuning-guide',
        destination: '/blog/rag-vs-fine-tuning',
        permanent: true,
      },
      {
        source: '/scaling-your-saas-with-offshore-full-stack-developers-a-guide-to-rapid-growth',
        destination: '/blog/build-mvp-4-weeks',
        permanent: true,
      },

      // Service page redirects → managed AI engineer
      {
        source: '/llm-engineers',
        destination: '/engage/managed-ai-engineer',
        permanent: true,
      },
      {
        source: '/hire-fintech-developers',
        destination: '/engage/managed-ai-engineer',
        permanent: true,
      },
      {
        source: '/hire-machine-learning-engineer-offshore-at-low-cost',
        destination: '/hire/machine-learning-engineers',
        permanent: true,
      },
      {
        source: '/hire-ai-software-development-talent-offshore',
        destination: '/engage/managed-ai-engineer',
        permanent: true,
      },
      {
        source: '/hire-a-front-end-developer',
        destination: '/engage/managed-ai-engineer',
        permanent: true,
      },
      {
        source: '/hire-mern-developers',
        destination: '/engage/managed-ai-engineer',
        permanent: true,
      },
      {
        source: '/remote-full-stack-developer',
        destination: '/engage/managed-ai-engineer',
        permanent: true,
      },
      {
        source: '/hire-top-handpicked-pre-vetted-computer-vision-engineers',
        destination: '/hire/computer-vision-engineers',
        permanent: true,
      },
      {
        source: '/big-data-engineer',
        destination: '/engage/managed-ai-engineer',
        permanent: true,
      },
      {
        source: '/salesforce-community-cloud-specialist',
        destination: '/engage/managed-ai-engineer',
        permanent: true,
      },
      {
        source: '/gaming-hire-game-developers',
        destination: '/engage/managed-ai-engineer',
        permanent: true,
      },
      {
        source: '/how-it-works-hire-dedicated-developers',
        destination: '/how-it-works',
        permanent: true,
      },

      // ── /engage specialist pages → /hire (canonical move) ────────────────
      {
        source: '/engage/computer-vision-engineers',
        destination: '/hire/computer-vision-engineers',
        permanent: true,
      },
      {
        source: '/engage/machine-learning-engineers',
        destination: '/hire/machine-learning-engineers',
        permanent: true,
      },

      // Trailing slash variants
      {
        source: '/power-automate-vs-zapier-vs-n8n-vs-make-which-workflow-automation-tool-should-your-team-master-2025/',
        destination: '/blog/n8n-vs-zapier-vs-power-automate',
        permanent: true,
      },
      {
        source: '/llm-engineers/',
        destination: '/engage/managed-ai-engineer',
        permanent: true,
      },
      {
        source: '/hire-fintech-developers/',
        destination: '/engage/managed-ai-engineer',
        permanent: true,
      },
      {
        source: '/hire-machine-learning-engineer-offshore-at-low-cost/',
        destination: '/hire/machine-learning-engineers',
        permanent: true,
      },
      {
        source: '/hire-ai-software-development-talent-offshore/',
        destination: '/engage/managed-ai-engineer',
        permanent: true,
      },
      {
        source: '/hire-a-front-end-developer/',
        destination: '/engage/managed-ai-engineer',
        permanent: true,
      },
      {
        source: '/hire-mern-developers/',
        destination: '/engage/managed-ai-engineer',
        permanent: true,
      },
      {
        source: '/hire-top-handpicked-pre-vetted-computer-vision-engineers/',
        destination: '/hire/computer-vision-engineers',
        permanent: true,
      },
      {
        source: '/engage/computer-vision-engineers/',
        destination: '/hire/computer-vision-engineers',
        permanent: true,
      },
      {
        source: '/engage/machine-learning-engineers/',
        destination: '/hire/machine-learning-engineers',
        permanent: true,
      },
      {
        source: '/scaling-your-saas-with-offshore-full-stack-developers-a-guide-to-rapid-growth/',
        destination: '/blog/build-mvp-4-weeks',
        permanent: true,
      },
      {
        source: '/llm-fine-tuning-guide/',
        destination: '/blog/rag-vs-fine-tuning',
        permanent: true,
      },
      {
        source: '/unlocking-precision-the-magic-of-custom-llm-embeddings-in-ai-solutions/',
        destination: '/blog/rag-vs-fine-tuning',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
