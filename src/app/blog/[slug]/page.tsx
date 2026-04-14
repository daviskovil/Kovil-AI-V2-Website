import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { posts, getPost } from '@/src/data/posts'
import BlogPostPage from '@/src/pages/BlogPostPage'

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  const ogImage = post.heroImage
    ? [{ url: `https://kovil.ai${post.heroImage}`, width: 1200, height: 630, alt: post.title }]
    : [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Kovil AI' }]
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://kovil.ai/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `https://kovil.ai/blog/${post.slug}`,
      siteName: 'Kovil AI',
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      images: ogImage,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: ogImage.map(i => i.url),
    },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Organization', name: post.author, url: 'https://kovil.ai' },
    publisher: {
      '@type': 'Organization',
      name: 'Kovil AI',
      url: 'https://kovil.ai',
      logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo.png' },
    },
    datePublished: new Date(post.date).toISOString(),
    url: `https://kovil.ai/blog/${post.slug}`,
    ...(post.heroImage && { image: `https://kovil.ai${post.heroImage}` }),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <div className="pt-20"><BlogPostPage /></div>
    </>
  )
}
