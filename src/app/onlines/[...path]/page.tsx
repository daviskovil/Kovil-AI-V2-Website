import { notFound } from 'next/navigation'

// All /onlines/* URLs are from the old website and no longer exist.
// Return 404 so Google deindexes them and stops wasting crawl budget.
export default function OldOnlinesPage() {
  notFound()
}
