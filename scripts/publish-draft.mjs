#!/usr/bin/env node
/**
 * publish-draft.mjs
 * Publishes a scheduled blog post from drafts.ts → posts.ts
 *
 * Usage: node scripts/publish-draft.mjs <slug>
 *
 * What it does:
 *  1. Reads the post entry from src/data/drafts.ts by slug
 *  2. Appends it to src/data/posts.ts (before the closing `];`)
 *  3. Adds the URL to public/sitemap.xml (before </urlset>)
 *  4. Adds the CTA config to src/pages/BlogPostPage.tsx (before DEFAULT_CTA)
 *  5. Exits 0 on success, 1 on error (already published counts as success)
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const slug = process.argv[2];
if (!slug) {
  console.error('Usage: node scripts/publish-draft.mjs <slug>');
  process.exit(1);
}

console.log(`\n📝 Publishing blog post: ${slug}\n`);

// ─── File paths ────────────────────────────────────────────────────────────
const DRAFTS_PATH   = resolve(ROOT, 'src/data/drafts.ts');
const POSTS_PATH    = resolve(ROOT, 'src/data/posts.ts');
const SITEMAP_PATH  = resolve(ROOT, 'public/sitemap.xml');
const CTAPAGE_PATH  = resolve(ROOT, 'src/pages/BlogPostPage.tsx');

// ─── Step 1: Read files ────────────────────────────────────────────────────
const draftsContent  = readFileSync(DRAFTS_PATH,  'utf8');
const postsContent   = readFileSync(POSTS_PATH,   'utf8');
const sitemapContent = readFileSync(SITEMAP_PATH, 'utf8');
const ctaContent     = readFileSync(CTAPAGE_PATH, 'utf8');

// ─── Step 2: Idempotency check ─────────────────────────────────────────────
if (postsContent.includes(`slug: "${slug}"`)) {
  console.log(`✅ Post "${slug}" is already published — nothing to do.`);
  process.exit(0);
}

// ─── Step 3: Extract post entry from drafts.ts ─────────────────────────────
// Find the slug marker, then find the opening { that starts that entry,
// then find the matching closing }, using brace counting.
const slugMarker = `slug: "${slug}"`;
const slugIdx = draftsContent.indexOf(slugMarker);
if (slugIdx === -1) {
  console.error(`❌ Slug "${slug}" not found in drafts.ts`);
  process.exit(1);
}

// Walk backwards to find the opening `  {` of this post object
let openBrace = slugIdx;
while (openBrace > 0 && draftsContent[openBrace] !== '{') openBrace--;

// Walk forward from openBrace to find the matching closing `}`
// We need to skip the closing `},` of the top-level object
let depth = 0;
let closeBrace = openBrace;
let inTemplateLiteral = false;
let i = openBrace;

while (i < draftsContent.length) {
  const ch = draftsContent[i];

  // Track template literals (backtick strings) to avoid counting braces inside them
  if (ch === '`' && draftsContent[i - 1] !== '\\') {
    inTemplateLiteral = !inTemplateLiteral;
  }

  if (!inTemplateLiteral) {
    if (ch === '{') depth++;
    if (ch === '}') {
      depth--;
      if (depth === 0) {
        closeBrace = i;
        break;
      }
    }
  }
  i++;
}

// Extract the post entry (the full object text including trailing comma if present)
let postEntry = draftsContent.slice(openBrace, closeBrace + 1);
// Ensure trailing comma
if (!postEntry.trimEnd().endsWith(',')) postEntry = postEntry + ',';

console.log(`✅ Found post entry in drafts.ts (${postEntry.length} chars)`);

// ─── Step 4: Insert into posts.ts ─────────────────────────────────────────
// Insert before the closing `];` that precedes `export function getPost`
const postsInsertMarker = '];\n\nexport function getPost';
const postsInsertIdx = postsContent.indexOf(postsInsertMarker);
if (postsInsertIdx === -1) {
  console.error('❌ Could not find insertion point in posts.ts');
  process.exit(1);
}

const newPostsContent =
  postsContent.slice(0, postsInsertIdx) +
  '\n  ' + postEntry.split('\n').join('\n  ').trimEnd() + '\n' +
  postsContent.slice(postsInsertIdx);

writeFileSync(POSTS_PATH, newPostsContent, 'utf8');
console.log(`✅ Appended to posts.ts`);

// ─── Step 5: Update sitemap.xml ───────────────────────────────────────────
const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
const sitemapEntry = `
  <url>
    <loc>https://kovil.ai/blog/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;

const newSitemapContent = sitemapContent.replace('</urlset>', sitemapEntry + '</urlset>');
writeFileSync(SITEMAP_PATH, newSitemapContent, 'utf8');
console.log(`✅ Updated sitemap.xml`);

// ─── Step 6: Update CTA_MAP in BlogPostPage.tsx ───────────────────────────
// CTA configs keyed by slug — add new slugs here when writing new draft posts
const CTA_CONFIGS = {
  'gpt-4o-vs-claude-vs-gemini': `
  'gpt-4o-vs-claude-vs-gemini': {
    label: 'Kovil AI · AI Engineering',
    teaser: 'Not sure which AI model to build on? Our engineers work across GPT-4o, Claude, and Gemini.',
    headline: 'Need help choosing the right AI model for your business?',
    body: "The wrong model choice can double your inference costs or cut your accuracy in half. Our engineers have built production systems on all three — we'll help you choose and build right.",
    defaultGoal: 'project',
    primary: { text: 'Talk to Our Engineers →', href: '/contact' },
    secondary: { text: 'See Our Work', href: '/case-studies' },
  },`,

  'how-much-does-an-ai-project-cost': `
  'how-much-does-an-ai-project-cost': {
    label: 'Kovil AI · Fixed-Cost AI Builds',
    teaser: 'We scope AI projects upfront with clear pricing — no surprises mid-build.',
    headline: 'Want to know what your AI project will cost before you commit?',
    body: "We scope AI projects in 48 hours and give you a fixed price before any work begins — whether it's a chatbot, an automation, or a full AI product build.",
    defaultGoal: 'project',
    primary: { text: 'Get a Fixed Scope →', href: '/engage/outcome-based-project' },
    secondary: { text: "See What We've Built", href: '/case-studies' },
  },`,

  'what-is-a-vector-database': `
  'what-is-a-vector-database': {
    label: 'Kovil AI · AI Engineering',
    teaser: 'We build RAG systems and AI search applications powered by the right vector infrastructure.',
    headline: 'Ready to build a RAG system or AI-powered search for your business?',
    body: "We design and build vector database pipelines, embedding workflows, and RAG systems in production — connected to your documents, your data, and your existing stack.",
    defaultGoal: 'project',
    primary: { text: 'Talk to Our Engineers →', href: '/contact' },
    secondary: { text: 'See Our Work', href: '/case-studies' },
  },`,
};

const ctaConfig = CTA_CONFIGS[slug];
if (!ctaConfig) {
  console.warn(`⚠️  No CTA config found for slug "${slug}" — skipping CTA_MAP update`);
} else {
  const ctaMarker = 'const DEFAULT_CTA: CtaConfig = {';
  const ctaIdx = ctaContent.indexOf(ctaMarker);
  if (ctaIdx === -1) {
    console.warn('⚠️  Could not find DEFAULT_CTA marker in BlogPostPage.tsx — skipping CTA update');
  } else {
    const newCtaContent =
      ctaContent.slice(0, ctaIdx) +
      ctaConfig + '\n\n' +
      ctaContent.slice(ctaIdx);
    writeFileSync(CTAPAGE_PATH, newCtaContent, 'utf8');
    console.log(`✅ Added CTA config for "${slug}" to BlogPostPage.tsx`);
  }
}

console.log(`\n🚀 Done! Post "${slug}" is ready. Commit and push to deploy.\n`);
