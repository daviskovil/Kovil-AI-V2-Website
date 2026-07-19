# Google Search Console Indexation Cleanup History

This log tracks GSC indexation metrics over time to verify that legacy spam URLs are steadily declining toward our target.

## Indexation Metrics Log

| Check Date | Indexed Pages | Not Indexed | Blocked Warnings | Status & Notes |
| :--- | :--- | :--- | :--- | :--- |
| **15 July 2026** | 5,740 (Baseline) | 651,000 | 752 | Deployed unblocked `robots.txt` rules and submitted `/trash-cleanup-sitemap.xml`. |
| **19 July 2026** | 5,740 | 651,000 | 752 | Curated Shopify expansion batch deployed. GSC dashboard lagging (expected). |
| **22-23 July 2026** | *Pending* | *Pending* | *Pending* | Next scheduled check date. |

## Target Goals
*   **Target Indexed Pages:** < 1,000 (representing only our core whitelisted pages, currently at 319).
*   **Target Blocked Warnings:** 0 (all `/onlines/` and `/shop/` URLs successfully crawled, hit 410, and removed).
