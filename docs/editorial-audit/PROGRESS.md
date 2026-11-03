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
| Batch 3: articles library, what-to-do-with-the-house, for-attorneys (+ how-it-works), about, skagit-county, mason-county, lenders-and-financing-specialists, professionals/care-managers; shared county template text | Live Nov 3 |
| Batch 4: long-term-care/nurse-delegation, long-term-care/nursing-homes, king-county, wahkiakum-county, cowlitz-county, estate first-steps, executors, guides/sell-inherited-house-as-is-or-fix, guides/probate-vs-trust-sale-washington, gray-divorce (+ its background component) | Live Nov 3 |
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
- /long-term-care/nurse-delegation
- /long-term-care/nursing-homes

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
- BATCH 4 FLAGS:
- wahkiakum-county: "Washington's smallest county by population" (Garfield is generally smallest; check OFM); city list includes Naselle and Lebam (Pacific County); Puget Island "ferry-dependent" (bridge to Cathlamet; ferry goes to Westport, OR); "one of Washington's largest river islands", "most rural river-delta county" unsourced.
- cowlitz-county: city list includes Cathlamet (Wahkiakum County seat); Longview "one of the first planned cities in the PNW" unsourced.
- king-county: "over 2,100 square miles", "$50,000 or more" pricing gap, tech-buyer generalisation, broker Capitol Hill/Mercer Island experience claim unsourced.
- nurse-delegation: Medicaid-coverage line silent on private pay; never-delegable task list and "every 90 days" supervision to check against RCW 18.79.260 / WAC 246-840-960; "stable and predictable" is the RN's judgment; core/diabetes training not mentioned.
- nursing-homes: "Every nursing home ... receives a star rating" (only certified facilities; some unrated); RN 24-hour rule lacks size threshold (RCW 74.42.360); several "consistently report" outcome lines unsourced.
- first-steps: fixed to say the named PR acts once the court appoints them and issues letters; "8 to 12" death certificates and "within two weeks" unsourced.
- executors: "most" estates get nonintervention powers unsourced; "establishes the estate's tax basis" loose (heirs' stepped-up basis); POA described as only for incapacity.
- sell-inherited-house: "few thousand dollars ... add significantly more", paint "highest-return" unsourced.
- probate-vs-trust: trustee "immediate authority" overstates (acceptance, certification of trust); "non-supervised probate state" simplifies; pricing "protects" trustee is absolute; table row ignores community property exception.
- gray-divorce: "risen sharply since 1990" and standard-of-living research uncited; $500,000 exclusion conditions omitted; community property presumption is rebuttable; WA revokes ex-spouse on many non-probate assets (RCW 11.07.010) but not ERISA plans; "dual perspective most agents can't offer" promotional.
