import { useParams, Link, Navigate } from "react-router-dom"
import { ArrowLeft, Clock, Calendar, User } from "lucide-react"
import { getPost } from "../data/posts"

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPost(slug) : undefined

  if (!post) return <Navigate to="/blog" replace />

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Back link */}
      <div className="max-w-3xl mx-auto px-6 pt-10 pb-4">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
      </div>

      {/* Article header */}
      <article className="max-w-3xl mx-auto px-6 pb-24">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">{post.category}</span>
          </div>
          <h1 className="font-display font-bold text-4xl lg:text-5xl tracking-tight text-balance leading-[1.1] mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">{post.excerpt}</p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pb-8 border-b border-border">
            <span className="flex items-center gap-1.5"><User className="h-4 w-4" />{post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />{post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{post.readTime}</span>
          </div>
        </header>

        {/* Article body */}
        <div
          className="prose-content"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </article>
    </div>
  )
}
