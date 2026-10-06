# Washington AFH Market Report: monthly steps

Added Oct 6, 2026. One edition per DSHS download (aim for monthly).

1. **Download** the DSHS Advanced Lookup CSV for each county (all Specific
   Criteria unticked), as for any directory refresh.
2. **Import** each county: `node scripts/import-dshs-export.mjs raw/<county>.csv > src/data/afh/<county>-county.json`,
   then `node scripts/split-afh-data.mjs src/data/afh/*-county.json src/data/afh/cities`
   and refresh `stats.json` as usual.
3. **Snapshot** the new data with the download date:
   `node scripts/afh-snapshot.mjs YYYY-MM-DD`
4. **Compare** with the previous snapshot:
   `node scripts/afh-compare-snapshots.mjs <previous-date> <new-date>`
   (writes `src/data/afh/changes/<previous>_<new>.json`).
5. **Write the edition** after checking listings and sales are current in
   `src/data/afhListings.ts`:
   `node scripts/build-afh-market-report.mjs YYYY-MM <previous>_<new>`
   (writes `src/data/afh/market/YYYY-MM.json`; never edit an old edition).
6. **Publish**: in `src/data/afhMarketReport.ts`, import the new edition and add
   it first in `EDITIONS`, and point `LATEST_CHANGES` at the new changes file.
   Add `/afh-club/market-report/YYYY-MM` to `public/sitemap.xml`,
   `src/data/sitemap-data.ts` and the AFH site map. Run the tests and build.
7. **Email** the summary paragraph to the market-report subscribers
   (MailerLite source tag `afh-market-report`).

Notes
- The first edition (October 2026) compares only King, Pierce and Snohomish,
  because the earlier snapshot (July 31 / August 1 locator pastes) covered only
  those counties. From the next download, comparisons are statewide.
- A new license at an address where a different license ended is reported as a
  likely ownership change (DSHS issues a new license at a change of ownership).
- Closed homes are counted, not listed by name.
