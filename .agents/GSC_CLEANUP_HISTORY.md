# Google Search Console Indexation Cleanup History

This log tracks GSC indexation metrics over time to verify that legacy spam URLs are steadily declining toward our target.

## Indexation Metrics Log

| Check Date | Indexed Pages | Not Indexed | Blocked Warnings | Status & Notes |
| :--- | :--- | :--- | :--- | :--- |
| **15 July 2026** | 5,740 (Baseline) | 651,000 | 752 | Deployed unblocked `robots.txt` rules and submitted `/trash-cleanup-sitemap.xml`. |
| **19 July 2026** | 5,740 | 651,000 | 752 | Curated Shopify expansion batch deployed. GSC dashboard lagging (expected). |
| **26 July 2026** | 5,740 | 651,000 | 752 | Verified live production headers correctly return HTTP 410 Gone and X-Robots-Tag: noindex. GSC numbers unchanged, typical for 4–8 week crawl windows. |
| **29 July 2026** | 3,900 | 676,000 | *Pending* | GSC dashboard updated: indexed pages dropped from 5.74k to 3.9k, and Not Indexed increased to 676k. Active pruning is working. |
| **11 August 2026** | 2,890 | 737,000 | 23 | Significant progress: indexed pages down to 2.89k, and "Indexed, though blocked by robots.txt" warnings dropped from 752 to just 23. Not Indexed count is up to 737k as spam pages are recrawled and marked excluded. |
| **20 August 2026** | 276 | 741,000 | *Pending* | Massive drop: Indexed count plummeted to 276 (below the 329 sitemap consensus). Spammed index successfully pruned. Investigation confirms unindexed pages are pending recrawl. |
| **Early September 2026** | *Pending* | *Pending* | *Pending* | Next scheduled check date. |

## Target Goals
*   **Target Indexed Pages:** < 1,000 (representing only our core whitelisted pages, currently at 319).
*   **Target Blocked Warnings:** 0 (all `/onlines/` and `/shop/` URLs successfully crawled, hit 410, and removed).
