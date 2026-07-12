"""
fetch_gsc_indexed_pages.py
──────────────────────────
Fetches ALL indexed pages from Google Search Console via the Search Analytics API
(up to 25,000 per request, paginated), then generates public/trash-cleanup-sitemap.xml
containing only spam URLs.

IMPORTANT LIMITATION
────────────────────
The Search Analytics API only returns pages that appeared in Google Search results
(had ≥1 impression). Spam pages with exactly 0 impressions won't be included.
In practice: expect to capture 60-90% of the spam footprint this way.
The remaining pages will deindex passively as Googlebot recrawls them and hits 410.

ONE-TIME SETUP (do this before running)
────────────────────────────────────────
1. Go to: https://console.cloud.google.com/
2. Create a project (or use an existing one)
3. APIs & Services → Enable APIs → search "Google Search Console API" → Enable
4. APIs & Services → Credentials → Create Credentials → OAuth 2.0 Client ID
   Application type: Desktop app
   Name: kovil-gsc-script
5. Download the JSON → save as:
   C:/Users/davis/Projects/Kovil-AI-V2-Website/scripts/gsc_credentials.json
6. Install dependencies (one-time):
   pip install google-api-python-client google-auth-oauthlib

USAGE
─────
python scripts/fetch_gsc_indexed_pages.py

First run: opens your browser for Google login + GSC permission grant.
Token is saved to scripts/gsc_token.json so subsequent runs don't ask again.

OUTPUT
──────
public/trash-cleanup-sitemap.xml — XML sitemap with all discovered spam URLs
"""

import csv
import json
import os
import sys
import time
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from io import BytesIO
from urllib.parse import urlparse

# ── Spam URL patterns (must match middleware.ts) ─────────────────────────────
SPAM_PREFIXES = [
    "/onlines/",
    "/shop/",
    "/product/",
    "/category/",
    "/blogs/",
    "/adobe-",
    "/workday-",
    "/servicenow-",
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

SITE_URL = "https://kovil.ai/"   # trailing slash required for domain property
ROW_LIMIT = 25_000               # GSC API maximum per request
# Cover 16 months — catches anything Google indexed historically
START_DATE = "2025-01-01"
END_DATE   = datetime.now(timezone.utc).strftime("%Y-%m-%d")

SCRIPT_DIR   = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)
CREDS_PATH   = os.path.join(SCRIPT_DIR, "gsc_credentials.json")
TOKEN_PATH   = os.path.join(SCRIPT_DIR, "gsc_token.json")
OUTPUT_PATH  = os.path.join(PROJECT_ROOT, "public", "trash-cleanup-sitemap.xml")


def is_spam(url: str) -> bool:
    try:
        path = urlparse(url).path
    except Exception:
        return False
    return any(path.startswith(p) for p in SPAM_PREFIXES)


def get_service():
    """Authenticate and return the GSC API service object."""
    try:
        from google.oauth2.credentials import Credentials
        from google_auth_oauthlib.flow import InstalledAppFlow
        from google.auth.transport.requests import Request
        from googleapiclient.discovery import build
    except ImportError:
        print()
        print("  Missing dependencies. Run:")
        print("  pip install google-api-python-client google-auth-oauthlib")
        print()
        sys.exit(1)

    if not os.path.exists(CREDS_PATH):
        print()
        print("  ERROR: gsc_credentials.json not found.")
        print(f"  Expected: {CREDS_PATH}")
        print()
        print("  Setup steps:")
        print("  1. https://console.cloud.google.com/")
        print("  2. APIs & Services → Enable → 'Google Search Console API'")
        print("  3. Credentials → Create → OAuth 2.0 Client ID → Desktop app")
        print("  4. Download JSON → save as scripts/gsc_credentials.json")
        print()
        sys.exit(1)

    SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"]
    creds = None

    if os.path.exists(TOKEN_PATH):
        creds = Credentials.from_authorized_user_file(TOKEN_PATH, SCOPES)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(CREDS_PATH, SCOPES)
            creds = flow.run_local_server(port=0)
        with open(TOKEN_PATH, "w") as f:
            f.write(creds.to_json())
        print("  Auth token saved to scripts/gsc_token.json")

    return build("searchconsole", "v1", credentials=creds)


def fetch_all_pages(service) -> list[str]:
    """
    Paginate through Search Analytics API to get all pages.
    API returns pages with ≥1 impression over the date range.
    Paginates in chunks of 25,000 until a short page is returned.
    """
    all_urls: list[str] = []
    start_row = 0
    page = 1

    print(f"\n  Querying GSC Search Analytics API ({START_DATE} -> {END_DATE})")
    print(f"  Site: {SITE_URL}")

    while True:
        print(f"  Page {page}: rows {start_row:,} - {start_row + ROW_LIMIT - 1:,} ...", end=" ", flush=True)

        try:
            response = service.searchanalytics().query(
                siteUrl=SITE_URL,
                body={
                    "startDate": START_DATE,
                    "endDate": END_DATE,
                    "dimensions": ["page"],
                    "rowLimit": ROW_LIMIT,
                    "startRow": start_row,
                    "dataState": "final",  # include all finalized data
                },
            ).execute()
        except Exception as e:
            print(f"\n  API error: {e}")
            break

        rows = response.get("rows", [])
        print(f"{len(rows):,} rows")

        for row in rows:
            url = row["keys"][0]
            all_urls.append(url)

        if len(rows) < ROW_LIMIT:
            break  # Last page — done

        start_row += ROW_LIMIT
        page += 1
        time.sleep(0.5)  # Be polite to the API

    return all_urls


def build_sitemap(urls: list[str]) -> str:
    root = ET.Element("urlset", xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")
    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    for url in sorted(set(urls)):
        url_el = ET.SubElement(root, "url")
        ET.SubElement(url_el, "loc").text = url
        ET.SubElement(url_el, "lastmod").text = today
    tree = ET.ElementTree(root)
    ET.indent(tree, space="  ")
    buf = BytesIO()
    tree.write(buf, encoding="utf-8", xml_declaration=True)
    return buf.getvalue().decode("utf-8")


def merge_existing_sitemap(spam_urls: set[str]) -> set[str]:
    """If a trash-cleanup-sitemap.xml already exists, merge its URLs in."""
    if not os.path.exists(OUTPUT_PATH):
        return spam_urls
    try:
        tree = ET.parse(OUTPUT_PATH)
        root = tree.getroot()
        ns = "http://www.sitemaps.org/schemas/sitemap/0.9"
        for loc in root.findall(f"{{{ns}}}url/{{{ns}}}loc"):
            url = (loc.text or "").strip()
            if url and is_spam(url):
                spam_urls.add(url)
        print(f"  Merged existing sitemap -> {len(spam_urls):,} total unique spam URLs")
    except Exception:
        pass
    return spam_urls


def main():
    service = get_service()
    all_pages = fetch_all_pages(service)

    print(f"\n  Total pages returned by API: {len(all_pages):,}")

    spam_urls: set[str] = set()
    legit_count = 0
    for url in all_pages:
        if is_spam(url):
            spam_urls.add(url)
        else:
            legit_count += 1

    print(f"  Spam URLs identified:        {len(spam_urls):,}")
    print(f"  Legit pages (skipped):       {legit_count:,}")

    # Merge with any previously fetched URLs (e.g. from UI export)
    spam_urls = merge_existing_sitemap(spam_urls)

    if not spam_urls:
        print("\n  No spam URLs found. Check that SITE_URL matches your GSC property exactly.")
        sys.exit(0)

    sitemap_xml = build_sitemap(list(spam_urls))
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        f.write(sitemap_xml)

    print(f"\n  Sitemap written: {OUTPUT_PATH}")
    print(f"  URLs in sitemap: {len(spam_urls):,}")
    print()
    print("  NEXT STEPS:")
    print("  1. git add public/trash-cleanup-sitemap.xml && git commit && git push")
    print("  2. Verify live: https://kovil.ai/trash-cleanup-sitemap.xml")
    print("  3. GSC -> Sitemaps -> Add: https://kovil.ai/trash-cleanup-sitemap.xml -> Submit")
    print("  4. Monitor Coverage report over 2-4 weeks")
    print("  5. Once indexed spam ~ 0: delete file, remove from GSC, clean up robots.ts")
    print()


if __name__ == "__main__":
    main()
