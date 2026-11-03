# Editorial audit progress

Started Nov 3, 2026 on branch `editorial-audit`. Brief: owner's "Master Prompt — Sitewide Editorial Audit".

- `inventory.csv`: every unique content page of 250+ words (284), with source file, subject,
  words, em dashes per 1,000 words, a pattern score and an estimated editing level. Excludes
  AFH directory/listing pages (data-generated), redirects, embeds and translations.
- `originals/`: the three pilot files as they were before editing.

| Page | Status |
|---|---|
| /estate-probate-inherited-property/preparing-the-property | Pilot approved Nov 3 |
| /articles/memory-care-costs | Pilot approved Nov 3 (has an audio narration) |
| /planning-before-a-crisis/legal-documents | Pilot approved Nov 3 |
| Batch 1: /articles/senior-housing-options, senior-housing-costs, independent-living-costs, how-to-choose-senior-housing, aging-in-place, silver-tsunami | Live Nov 3 |
| Batch 2: executor section (overview, first-30-days, common-mistakes, property-decisions, when-you-need-extra-help), executors-guide, planning: when-a-move-is-coming, why-planning-early, property-questions | Live Nov 3 |
| Batch 3: articles library, what-to-do-with-the-house, for-attorneys (+ how-it-works), about, skagit-county, mason-county, lenders-and-financing-specialists, professionals/care-managers; shared county template text | Edited Nov 3, awaiting merge |
| Em-dash-only pass still due: legal-duties, working-with-professionals and every 'none'/'light' page | Not started |
| All other pages | Not started (see inventory.csv status column) |

Rules: no deploy without the owner's word; titles, meta descriptions, URLs, headings levels,
links, schema and FAQ content unchanged unless approved; facts only from verified sources.

## Needs re-recording
- /articles/memory-care-costs
- /articles/senior-housing-options
- /articles/senior-housing-costs
- /articles/independent-living-costs
- /articles/how-to-choose-senior-housing
- /articles/aging-in-place
- /articles/silver-tsunami

## Claims flagged for fact review (meaning left unchanged)
- silver-tsunami: 10,000/day in 2011; wave to ~2030; "Peak 65" most concentrated aging period; "vast majority" prefer aging in place; regional senior housing shortages; 20-25 more years after 65; caregiver shortage worsening. Sourced but not re-checked: 11,000/day and 4.1M/yr (Alliance for Lifetime Income), 1 in 5 by 2030 (Census), AARP 2024 savings figures.
- senior-housing-options: affordable senior housing waitlists "a year or more"; CCRCs offering every level on one campus (depends on contract).
- senior-housing-costs: CCRC "contractual commitment to care" depends on contract type.
- how-to-choose-senior-housing: memory care and affordable housing "book months or years in advance".
- aging-in-place: home modification cost range "a few hundred dollars to tens of thousands".
- batch 2, corrected with already-verified law: creditor notice is optional (24-month bar, RCW 11.40.051); letters only when the estate goes through probate; nonintervention powers for a solvent estate (RCW 11.68.011); filing the will (RCW 11.20.010) vs petitioning; Social Security month-of-death rule; 'licensed' professional fiduciary removed; unsourced '8 to 12' and 'tens of thousands' removed.
- batch 2, still unverified (meaning unchanged): 'home is the largest asset' generalizations; early distribution 'the most costly mistake'; inventory 'required' (filing optional with nonintervention); as-is sales 'will attract lower offers'.
- batch 3, owner decisions pending: em dashes inside two FAQ questions (skagit Burlington question, care-managers 'other professionals' question); lenders' own bios (Bartel, Westermark: em dashes; McGinnis/Westermark promotional first-person claims); listing standard not stated on for-attorneys and lenders pages; 'responds within one business day' (for-attorneys/how-it-works); 'Building Your Professional Team' card says 'coordinated team' (what-to-do-with-the-house).
- batch 3, unverified (meaning unchanged): county market generalizations (buyer pools, premiums, Shelton employment base); 'oyster lease rights' wording (Mason); care-manager 'often a social worker or RN'; Medicare generally does not pay for care management.
