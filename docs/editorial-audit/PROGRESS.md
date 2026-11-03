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
| Batch 5: spokane-probate-estate-real-estate, wills (+ secure will box), articles/wills-trusts-other-options, long-term-care/how-to-choose-care-settings, articles/ccrc-costs, san-juan-county, for-family-law-attorneys, articles/affordable-senior-housing. /probate-estate-sales deferred: its text lives in src/i18n/locales/en.json | Live Nov 3 |
| Batch 6: jefferson-county, island-county, pacific-county, bellingham-probate-estate-real-estate, estate probate-and-legal-authority, articles/senior-housing-guide, guides/senior-transition-differences, estate-liquidation/learn-more, planning conversations-to-have | Live Nov 3 |
| Batch 7: benton, lewis, pierce, snohomish, grays-harbor, skamania counties; resources/cpas-financial-advisors, understanding-senior-transitions, understanding-housing-care-options, professionals/home-preparation, estate professional-team, aging-in-place-staying-home-safely, guides/who-has-authority-sell-probate-property-washington, afh-club/how-to-finance-an-afh | Live Nov 3 |
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
- /articles/wills-trusts-other-options
- /long-term-care/how-to-choose-care-settings
- /articles/ccrc-costs
- /articles/affordable-senior-housing
- /articles/senior-housing-guide

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
- BATCH 5 FLAGS:
- san-juan-county: "Washington's only island county" doubtful (Island County); "Eastsound is the largest community" (Friday Harbor is the only incorporated town); "172 named islands", Orcas highest prices, family mostly in King/Snohomish/Pierce unsourced.
- for-family-law-attorneys: neutrality / dual-agency wording still needs eXp designated broker review (existing code note); "methodology-based rather than opinion-based" BPO claim; service area "Washington State" vs "Puget Sound area" inconsistent.
- spokane: "well-priced homes typically sell within a few weeks" unsourced.
- wills: "the will determines who has the authority" loose (court appoints PR); broker valuations "hold up to legal scrutiny". Secure will box: "cannot be altered, lost, or misplaced" is absolute, and the box does not say the court needs the original signed will.
- affordable-senior-housing: no sources or review date; Section 202 "about half have a service coordinator" unsourced; 30% of adjusted income / 62+ / 50% AMI uncited (match HUD rules).
- wills-trusts-other-options: gifting line now "creditors, divorce, or financial trouble can become a risk to the family home".
- BATCH 6 FLAGS:
- jefferson-county: Sequim is in Clallam County but appears throughout (cities, SEO description, body, FAQs); "premier retirement destination", Victorian homes "among the most architecturally significant" unsourced; "relocated from Western Washington" though Jefferson is Western Washington.
- island-county: "longest island in the contiguous US" disputed; "over 55 miles" unverified; "Admiralty Bay" in city list is a bay; ferry FAQ fits Whidbey, not Camano (bridge).
- pacific-county: Skamokawa (Wahkiakum County) in city list; Raymond called a governmental center (South Bend is the seat); "most remote", Long Beach "most active market", "28-mile" spit unsourced.
- probate-and-legal-authority: "joint tenancy passes automatically" needs "with right of survivorship" qualifier (RCW 64.28.010); administrator "closest next of kin" (spouse first, RCW 11.28.120).
- estate-liquidation: 30-50% commission, 1-3 day sales unsourced.
- senior-housing-guide: "families consistently report relief", "demand consistently outpaces supply" unsourced.
- COUNTY FACT FIXES (branch county-fact-fixes, Nov 3): Wahkiakum "smallest county" -> "one of the least populated" (Garfield is smallest); Naselle/Lebam removed from Wahkiakum list; Puget Island now "connected to Cathlamet by bridge and to Westport, Oregon by the Wahkiakum County ferry"; Cathlamet removed from Cowlitz list; Skamokawa removed from Pacific list; South Bend named as Pacific county seat; San Juan "only island county" -> "only county with no road connection to the mainland"; Friday Harbor "only incorporated town", Eastsound "main village on Orcas"; Admiralty Bay removed from Island list; Sequim removed from Jefferson lists/SEO description and described as "just across the county line in Clallam County" where it is discussed. Still open: Whidbey "longest island", "172 named islands", other unsourced superlatives.
- BATCH 7 FIXES/FLAGS:
- Fixed: South Bend removed from Grays Harbor list (Pacific County seat); White Salmon (Klickitat) and Washougal (Clark) removed from Skamania list; who-has-authority now says nonintervention powers come from a court grant to the PR of a solvent estate (RCW 11.68.011) and that the Letters requirement applies when the estate goes through probate.
- Open: Snohomish SEO description names Woodinville (King County); Bothell/Milton/Auburn straddle county lines; Benton "southern end of the Tri-Cities"; Skamania "the Washington side of the Gorge" and Mount Hood skiing; Benton uses the template's generic closing (no closingCtaBody) and has unrendered props with "his clients".
- how-to-finance-an-afh: "SBA 7(a) is the only route that finances the business" vs seller financing on same page; "SBA finances most AFH sales", 25-35% commercial down, SBA ~10%/25 yr, 45-90 day close, 1.25x DSCR unsourced; "ECS, SBS and DDA contracts do not transfer on a sale" to verify with DSHS; ceiling calc uses hardcoded +3 spread instead of SBA_RATE_BOX.spreads; lane text in src/data/afhLenders.ts still has em dashes.
- who-has-authority: nonresident PR resident-agent requirement (RCW 11.36.010) not mentioned; co-owner card wording for survivorship.
- home-preparation: "2-6 weeks" unsourced.
- Shared "Take this at your own pace — there's no rush." line still has an em dash (shared component).
