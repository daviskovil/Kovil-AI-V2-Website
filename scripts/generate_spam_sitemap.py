"""
generate_spam_sitemap.py
────────────────────────
Generates public/trash-cleanup-sitemap.xml from a Google Search Console URL export.

PURPOSE
───────
The "Temporary Delete Sitemap" strategy forces Googlebot to burst-crawl all
19.7k spam URLs within 24-48 hours. Each one returns HTTP 410 Gone (handled
by middleware.ts), which Google treats as a permanent removal signal —
dramatically faster than waiting for natural recrawl cycles.

USAGE
─────
1. In GSC → Performance → Pages → filter "Indexed" (not by robots.txt) → Export CSV
2. Save the file as:  C:/Users/davis/Projects/Kovil-AI-V2-Website/scripts/gsc_pages_export.csv
3. Run:  python scripts/generate_spam_sitemap.py
4. Output:  public/trash-cleanup-sitemap.xml
5. Deploy the site (or manually push the file to production)
6. In GSC → Sitemaps → Add: https://kovil.ai/trash-cleanup-sitemap.xml
7. Wait 2-4 weeks → check GSC Coverage report for indexed count drop
8. Once indexed spam ≈ 0: delete public/trash-cleanup-sitemap.xml, remove from GSC

WHAT COUNTS AS SPAM
───────────────────
URLs matching any of the patterns below are included in the output sitemap.
URLs NOT matching these patterns are skipped — legit pages stay untouched.
"""

import csv
import os
import sys
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from urllib.parse import urlparse

# ── Spam URL patterns ────────────────────────────────────────────────────────
# Must stay in sync with middleware.ts SPAM_PREFIXES + config.matcher

SPAM_PREFIXES = [
    # Directory-style spam paths
    "/onlines/",
    "/shop/",
    "/product/",
    "/category/",
    "/blogs/",
    # Same-segment prefix patterns
    "/adobe-",
    "/workday-",
    "/servicenow-",
    # 23 individual spam slugs
    "/the-high-business-council",
    "/ultimate-business-advisor",
    "/founders-friend",
    "/web-design-wizard",
    "/database-administrator",
    "/cloud-migration-specialist",
    "/cloud-consultant",
    "/senior-ai",
    "/ai-studio",
    "/events",
    "/saas-quick",
    "/macky-ai",
    "/chris-worths-ai-alter-ego",
    "/smartsheet-2",
    "/streamlabs-podcast-editor",
    "/supaclip-pro",
    "/img2prompt",
    "/ellipsis-ai",
    "/leania-ai",
    "/astria-ai",
    "/entelligence-ai",
    "/webwave-ai",
    "/weaverse-ai",
]


def is_spam(url: str) -> bool:
    """Return True if the URL path matches any known spam pattern."""
    try:
        path = urlparse(url).path
    except Exception:
        return False
    return any(path.startswith(prefix) for prefix in SPAM_PREFIXES)


def find_url_column(headers: list[str]) -> int:
    """
    GSC exports vary: sometimes column 0 is 'Top pages', sometimes 'URL'.
    Return the index of whichever column holds full URLs.
    """
    for i, h in enumerate(headers):
        if "page" in h.lower() or "url" in h.lower():
            return i
    # Fall back to column 0 — GSC almost always puts URLs there
    return 0


def build_sitemap(urls: list[str]) -> str:
    """Build a minimal XML sitemap string from a list of URLs."""
    root = ET.Element(
        "urlset",
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9",
    )
    for url in sorted(set(urls)):
        url_el = ET.SubElement(root, "url")
        ET.SubElement(url_el, "loc").text = url
        # lastmod = today; signals to Googlebot this is fresh
        ET.SubElement(url_el, "lastmod").text = datetime.now(timezone.utc).strftime("%Y-%m-%d")

    tree = ET.ElementTree(root)
    ET.indent(tree, space="  ")
    # Build as string
    from io import BytesIO
    buf = BytesIO()
    tree.write(buf, encoding="utf-8", xml_declaration=True)
    return buf.getvalue().decode("utf-8")


def main() -> None:
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(script_dir)

    # Input: GSC Pages export CSV
    csv_path = os.path.join(script_dir, "gsc_pages_export.csv")
    if not os.path.exists(csv_path):
        print()
        print("  ERROR: GSC export file not found.")
        print(f"  Expected: {csv_path}")
        print()
        print("  Steps:")
        print("    1. Open GSC → Performance → Pages")
        print("    2. Filter: Coverage → 'Indexed, not submitted in sitemap'")
        print("       (or just export all indexed pages — this script filters for spam)")
        print("    3. Export → Download CSV")
        print(f"    4. Save as: gsc_pages_export.csv  in  scripts/")
        print("    5. Re-run this script")
        print()
        sys.exit(1)

    # Output: public/trash-cleanup-sitemap.xml
    output_path = os.path.join(project_root, "public", "trash-cleanup-sitemap.xml")

    # Read CSV and filter spam URLs
    spam_urls: list[str] = []
    skipped = 0
    col_idx = None

    with open(csv_path, newline="", encoding="utf-8-sig") as f:
        reader = csv.reader(f)
        headers = next(reader, None)
        if headers is None:
            print("  ERROR: CSV file is empty.")
            sys.exit(1)

        col_idx = find_url_column(headers)
        print(f"  Reading URLs from column {col_idx}: '{headers[col_idx]}'")

        for row in reader:
            if not row or col_idx >= len(row):
                continue
            url = row[col_idx].strip()
            if not url or not url.startswith("http"):
                skipped += 1
                continue
            if is_spam(url):
                spam_urls.append(url)
            else:
                skipped += 1

    if not spam_urls:
        print()
        print("  No spam URLs found in the export.")
        print("  Check that the CSV contains full kovil.ai URLs matching known spam patterns.")
        print(f"  Total rows skipped (legit or empty): {skipped}")
        sys.exit(0)

    # Write sitemap
    sitemap_xml = build_sitemap(spam_urls)
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(sitemap_xml)

    print()
    print(f"  Spam URLs found:   {len(spam_urls):,}")
    print(f"  Legit rows skipped: {skipped:,}")
    print(f"  Output written to:  {output_path}")
    print()
    print("  NEXT STEPS:")
    print("    1. git add public/trash-cleanup-sitemap.xml && git commit -m 'add trash-cleanup-sitemap'")
    print("    2. Deploy to production (Vercel auto-deploys on push to main)")
    print("    3. Verify live: https://kovil.ai/trash-cleanup-sitemap.xml")
    print("    4. In GSC → Sitemaps → Add sitemap URL → submit")
    print("    5. Wait 2-4 weeks and monitor Coverage report")
    print("    6. Once spam indexed count ≈ 0:")
    print("       - Delete public/trash-cleanup-sitemap.xml")
    print("       - Remove from GSC Sitemaps")
    print("       - Remove spamPatterns from robots.ts")
    print()


if __name__ == "__main__":
    main()
