/**
 * convert-webp.mjs
 * Converts all blog hero images and site hero images to WebP using sharp.
 * Keeps originals in place, only creates .webp files if they don't already exist.
 * Run: node scripts/convert-webp.mjs
 */
import sharp from 'sharp'
import { readdir, access } from 'fs/promises'
import path from 'path'

const PUBLIC = 'C:/Users/davis/Projects/Kovil-AI-V2-Website/public'

// Files to convert — blog images + hero images (skip OG images and logos, already handled)
const PATTERNS = [
  /^blog-.*\.(jpg|jpeg|png)$/i,
  /^hero-.*\.(jpg|jpeg|png)$/i,
  /^team-.*\.(jpg|jpeg|png)$/i,
  /^AI-Development-Lifecycle\.(png)$/i,
  /^real-cost-building-mvp.*\.(jpg|jpeg|png)$/i,
  /^build-mvp-4-weeks\.(jpg|jpeg|png)$/i,
  /^n8n-vs-zapier.*\.(png)$/i,
  /^what-is-ai-integration\.(jpg|jpeg|png)$/i,
  /^llm-chatbot-for-business\.(jpg|jpeg|png)$/i,
]

const files = await readdir(PUBLIC)
let converted = 0
let skipped = 0

for (const file of files) {
  // Match against our patterns
  const match = PATTERNS.some(p => p.test(file))
  if (!match) continue

  const ext = path.extname(file)
  const base = path.basename(file, ext)
  const srcPath = path.join(PUBLIC, file)
  const outPath = path.join(PUBLIC, `${base}.webp`)

  // Skip if WebP already exists
  try {
    await access(outPath)
    console.log(`⏭  skip (exists): ${base}.webp`)
    skipped++
    continue
  } catch {
    // file doesn't exist, proceed
  }

  try {
    await sharp(srcPath)
      .webp({ quality: 82, effort: 4 })
      .toFile(outPath)
    const srcStat = (await import('fs')).default.statSync(srcPath)
    const outStat = (await import('fs')).default.statSync(outPath)
    const saving = (((srcStat.size - outStat.size) / srcStat.size) * 100).toFixed(0)
    console.log(`✅  ${file} → ${base}.webp  (${saving}% smaller)`)
    converted++
  } catch (err) {
    console.error(`❌  failed: ${file}`, err.message)
  }
}

console.log(`\nDone. Converted: ${converted}, Skipped (already exist): ${skipped}`)
