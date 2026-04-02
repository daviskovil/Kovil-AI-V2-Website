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
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://kovil.ai/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
    },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()
  return <div className="pt-20"><BlogPostPage /></div>
}
