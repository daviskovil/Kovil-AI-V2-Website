import sitemap from '../src/app/sitemap';
import { posts } from '../src/data/posts';
import { caseStudies } from '../src/data/case-studies';
import { agentforceCaseStudies } from '../src/data/agentforce-case-studies';

try {
  const urls = sitemap();
  console.log('--- SITEMAP PAGES CONSENSUS ---');
  console.log(`Total URLs in sitemap.xml: ${urls.length}`);
  console.log(`Blog Posts: ${posts.length}`);
  console.log(`Case Studies: ${caseStudies.length}`);
  console.log(`Agentforce Case Studies: ${agentforceCaseStudies.length}`);
  
  // Calculate static count
  const staticCount = urls.length - posts.length - caseStudies.length - agentforceCaseStudies.length;
  console.log(`Static Core Pages: ${staticCount}`);
} catch (err) {
  console.error('Error running sitemap:', err);
}
