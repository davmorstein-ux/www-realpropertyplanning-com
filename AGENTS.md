# Working on this repository: read this first

This file is for anyone about to change this codebase: an AI assistant (Claude,
ChatGPT/Codex, or another), or a human developer. It records ground rules and
hard-won lessons so nobody has to rediscover them. Keep it current: if you learn
something the next person needs, add it here in the same commit.

Last substantial update: September 25, 2026.

## 1. What this is

`realpropertyplanning.com`: Real Property Planning, a neutral educational hub for
families dealing with probate, inherited property, estate sales and senior
housing, plus **AFH Club**, a marketplace and resource section for Washington
adult family homes (AFHs).

- React + TypeScript + Vite + Tailwind, with a lot of inline JSX styles.
- Originally generated in Lovable. **The `main` branch deploys to the live site.**
  There is no staging environment and no review step.
- Pages are client-rendered, and a build step in `vite.config.ts` also writes
  static HTML for each route (titles, descriptions, quick answers, FAQs, and the
  AFH listing/directory pages). Search and AI crawlers mostly read that static
  HTML, not the React app. **If a change matters for SEO, it must exist in the
  prerendered output too.**
- **Voice of the prerendered copy (`ROUTE_METADATA` in `vite.config.ts`).** Real
  Property Planning is a free educational hub, not a brokerage. The static copy
  never says "our team", "we handle / price / manage", "our clients", or
  "serving clients"; the subject is the page ("This guide explains…") or the hub
  ("Real Property Planning can connect you with a featured Washington licensed
  broker or certified appraiser"). Licensed work is done by featured
  professionals through their own practices. Routes that only redirect (the old
  `/services/*` URLs) get no `ROUTE_METADATA` entry, because a prerendered file
  for a redirect route is what crawlers read instead of the redirect. Sept 22,
  2026: 30 entries and the sitewide footer line were rewritten to this voice
  after an outside audit found the indexed pages still describing a brokerage.
- **Live counts in for-sale snippets.** A `ROUTE_METADATA` entry with `afhInventory` may use `{{live}}`, `{{active}}`, `{{pending}}`, `{{cities}}`, `{{sold}}` in its title, description, h1 or quick answer; `vite.config.ts` fills them from `src/data/afhListings.ts` at build time (city pages get a sentence built to read at 0, 1 or many). The state page `/afh-club/listings` is the one page targeting "adult family homes for sale in Washington"; the business/property sub-pages and the 17 city pages target their narrower phrases and link up to it. Do not create another page aimed at the state-level phrase.
- **This repository is public.** See section 9.

## 2. Ground rules when more than one assistant has access

As of September 20, 2026 the **ChatGPT Codex Connector** GitHub app is installed
on this repository with read **and write** access to code, pull requests,
issues, actions and workflows. Claude works through short-lived access tokens
issued per session. Neither can see the other's sessions.


1. **`main` is production.** A push is live within minutes. Build and test first.
2. **One writer at a time.** Assistants cannot see each other's sessions. Before
   changing anything, read `git log -15` and the diff of recent commits so you
   know what was just done and why. Do not revert or "tidy" a recent change you
   do not understand; the commit messages and code comments here are detailed on
   purpose.
3. **If you were not asked directly by the site owner in the current session to
   push to `main`, work on a branch and open a pull request.** Never force-push.
4. **Do not rewrite for style.** Many odd-looking lines are deliberate workarounds
   (section 4). If a comment explains why something is strange, believe it.
5. **Verify facts against primary sources before publishing them.** Rates, rule
   citations and program rules on this site are read by people making financial
   decisions. Section 8 lists what has been verified and what has not. An AI
   summary of a regulation is not a source.
6. **When a requirement is ambiguous, stop and ask the owner.** He prefers a
   question to a wrong guess, direct assessments over diplomatic ones, and
   complete replacement files over diffs.

## 3. Commands

```sh
npm run build        # vite build + prerender. Takes ~4 minutes. Must pass before any push.
npm test             # vitest. Must pass.
node scripts/check-sitemap.mjs   # every live route must be in public/sitemap.xml, alphabetically
npx tsc --noEmit -p tsconfig.app.json
```

Known quirks:

- `package-lock.json` points at a private Lovable package registry that outside
  environments cannot reach. If `npm ci` fails with a 403, install with
  `npm install --no-package-lock --registry https://registry.npmjs.org` and
  **do not commit lockfile changes.**
- `npm run build` regenerates `supabase/functions/mcp/index.ts` (the public MCP
  server, bundled from `src/lib/mcp`). If you did not touch `src/lib/mcp` or
  `src/data/featuredProfessionals.ts`, discard that change
  (`git checkout -- supabase/functions/mcp/index.ts`). If you did, commit the
  regenerated file AND run `npx lovable-mcp-extract-manifest` and commit
  `.lovable/mcp/manifest.json`, or the deployed server will not match.
- A Tailwind CSS warning, `Unexpected "section"`, appears in every build. It
  predates everything here and is harmless.

## 4. The stylesheet will override you. Read this before writing any CSS.

`src/index.css` is about 5,500 lines and contains roughly **1,000 `!important`
rules**, many on bare element selectors. Inline styles and ordinary classes lose
to them silently: your code asks for one thing and the browser renders another,
with no error. Always check the computed style in a browser, not the source.

What has bitten people so far:

| You write | What actually renders | Why |
|---|---|---|
| `margin-bottom: 20px` on a `<p>` (inline or class) | 9.6px | `p { margin-bottom: .6rem !important; line-height: 1.4 !important }` at the top of the file |
| `margin-bottom` on any `h1`-`h4` | 6.4px | `h1,h2,h3,h4 { margin-bottom: .4rem !important; line-height: 1.2 !important }` |
| `font-size: 26px` on an `h2` | can render ~42px on a phone | global heading size rules with `!important` |
| a `font-size` on a `<button>` | 18px | `button:not([data-nav-button]) { font-size: 18px !important }` |
| a class name containing `card`, `Card`, `tile` or `Tile` | becomes `display:flex; flex-direction:column; width:100%; overflow:hidden` | `[class*="card"]`, `[class*="tile"]` attribute selectors |
| a class name containing `btn` or `cta` | picks up legacy button styling | substring selectors |
| an inline `min-width` inside `<main>` on a phone | `min-width: 0` | the mobile overflow safety net |
| an inline 3-5 column grid on a phone | two columns | same block |

**Dark sections and coloured buttons: add `className="rpp-dark-surface"`.** Near the
end of `index.css`, "safety net" rules darken any element whose inline `style`
attribute contains strings like `rgb(20` or `color: #c`. They cannot tell text colour
from background or border colour, so a red button (`background:#ca2b38` becomes
`rgb(202, 43, 56)`) gets its white label painted dark. Anything on or inside
`.rpp-dark-surface` is exempt, and that class makes its text white. The exemption is
wrapped in `:where()` on purpose: a bare `:not(.class)` adds specificity and
overrode the button fixes for `.rpp-afh-return` and `.rpp-filled` (Sept 27, 2026).
Body text is near-black `#1c1917` (owner's choice); do not introduce text lighter than about 7:1 on its
background. The audience is older and people have said so.

**How to win:** put the rule in a page-scoped `<style>` block (see `PAGE_CSS` in
`src/pages/AFHClub.tsx` and `src/pages/AFHPropertyScore.tsx`), use a selector
with real specificity (`.page-root h2.my-heading`), and mark it `!important`.
Pick class names that avoid the substrings above (the Property Score uses an
`aps-` prefix). Keep any inline value in step with the CSS so the JSX does not
lie about what renders.

Fixing the global rules properly is a worthwhile project, but it would shift
spacing on most pages at once. It needs before-and-after measurements across a
sample of 15-20 pages and the owner's sign-off. Do not do it as a side effect.

Also: many page heroes carry `paddingTop: "var(--header-height)"`. The header is
in the document flow (section 5), so that padding is a leftover from an older
fixed-header design and produces a blank band. New pages should not copy it.

## 5. Mobile. The owner tests on an iPhone in Safari.

Test at 390px wide before pushing anything visual. Headless browsers do not
reproduce real touch scrolling, so "it passes in Playwright" is necessary, not
sufficient; ask for a screenshot from the real phone when it matters.

- **The header is `position: fixed` on phones and `sticky` on desktop**
  (`src/components/Header.tsx`). A sticky header shook visibly during touch
  scrolling on iOS. A spacer `<div data-header-spacer>` right after `</header>`
  holds its place in the flow. **The fixed header and the spacer are a pair.**
  If the mobile header ever goes back to sticky, remove the spacer too.
- **Tables:** on phones, `main table` scrolls sideways inside its own box. Table
  cells use `overflow-wrap: break-word`, never `anywhere`. With `anywhere` the
  browser lets a column shrink to one character wide, so tables with one long
  column crushed the others ("Whe / re / they / live"). For a table whose last
  column is prose, give phones a stacked layout instead (see the hospice guide).
- **Carousel** (`src/components/AFHCarousel.tsx`): the active card is centred by
  `--afh-carousel-offset`. Never centre the overflowing track with
  `justify-content: center`; it only lands on a card when the item count is odd.
  On phones the dots are replaced by an "N of M" counter, because a long dot row
  pushed the arrows off the screen.
- **Sticky hover:** iOS keeps `:hover` on the last place touched. Wrap hover
  styles in `@media (hover: hover)` for anything that re-renders under the
  finger, or the next screen's option looks pre-selected.
- **Images:** give an image box the image's own aspect ratio. A fixed pixel
  height with `object-fit: cover` cropped a fifth off the homepage photos on
  phones and tablets.
- Minimum tap target 44px; the newer tools use 54-58px.

## 6. Adding a page: the full checklist

1. The page in `src/pages/`.
2. `src/App.tsx`: the lazy import and the `<Route>`.
3. `public/sitemap.xml`: alphabetical, same format as neighbours. Then run
   `node scripts/check-sitemap.mjs`; it must report no drift. This is the one
   file to edit: the build splits it into `sitemap-main.xml`,
   `sitemap-afh-club.xml` and `sitemap-afh-directory.xml` behind a sitemap
   index at `/sitemap.xml` (dist only, see the end of `vite.config.ts`).
   Also put the page on a visitor site map in `src/data/siteMaps.ts`, unless a
   header menu, the guide library or the calculator index already lists it;
   `src/test/siteMaps.test.ts` fails on any live page on neither map.
4. `vite.config.ts`: a route-metadata entry (title, description, h1, quick
   answer, intro, FAQs) so crawlers get real content.
5. If it is an AFH Club guide: the grid **and** the carousel in
   `src/pages/AFHResources.tsx` (two separate lists), with a 3:4 cover at
   1024 x 1365 WebP in `public/`. **Name the file `something-cover.webp`.** A
   rule in `index.css` gives every image with `-cover` in its filename a
   thin edge (2px at 40% dark), which light covers need to stay distinct from the cream
   page. Older cover art not named that way gets it via the `rpp-cover-edge`
   class. Do not add borders to covers by hand.
6. If it is an AFH Club calculator: a tile in `src/pages/AFHCalculators.tsx`,
   and the "AFH Calculators" card description, which lives in `src/i18n/locales/en.json` (key `calculators.description`).
7. If buyers should find it from listings: `src/data/afhBuyerGuides.ts`.
8. `npm run build`, `npm test`, then look at it at 390px and at desktop width.

## 7. Single sources of truth. Edit these, not the pages.

| What | File |
|---|---|
| **Structured data.** The site-wide graph (`src/lib/schema.ts` `hubOrganizationSchema`, and the static copy in `index.html`) is exactly an `Organization` plus a `WebSite` node — never `LocalBusiness` or `RealEstateAgent` (owner's decision Sept 27, 2026: the hub provides no services), never with `founder`/`employee`/`hasOfferCatalog`/`priceRange`/opening hours. The featured broker's Person node (`#featured-broker`) and the Service nodes naming him as `provider` appear only on his profile pages, via `featuredProfessionalProfileSchema`. County pages emit a `WebPage` about the county that `mentions` the Person. `RealEstateAgent` appears only as the actual listing broker on AFH listing schemas | `src/lib/schema.ts`, `index.html` |
| **The featured broker and the featured appraiser** — name, brokerage, firm, license numbers, phone, email; the attribution sentences every disclosure uses; the schema Person | `src/data/featuredProfessionals.ts` (Node-safe, no assets) and `src/data/featuredProfessionalAssets.ts` (photos, logos, page bios). Real Property Planning holds no licenses; licensed work is attributed to the person, never the hub. The name may appear literally only in these two files, the About page's founder story, and the old `/about-david-stein` redirect; `node scripts/audit-david-stein.mjs` lists everything else (page prose still naming him as the actor — being reworded so the actor is "the featured broker" or a licensed professional). When another appraiser or broker takes the spot, change the record here; nothing else should need editing. The audit runs in `npm test` (strict): a literal "David Stein" or bare "David" in page copy fails the build. Comments, quoted Zillow reviews, other people named David, and the DSHS JSON data are ignored. On hub pages, prose refers to the person as `FEATURED_BROKER.role` ("the featured broker"; `.Role` sentence-initial, `.roleTitle` in headings) and `.pronoun`; the name (`.name`) appears only in the required attribution sentences (`brokerageAttribution` / `appraisalAttribution`, now in DisclaimerSection on every page), in contact CTAs ("Contact David Stein"), and on the person's own pages (/realtor, /real-estate-appraiser, the AFH broker page, Find a Professional). The hub is not about the person |
| DSHS Medicaid base daily rates, all 17 CARE classifications, both rate areas | `src/data/afhMedicaidRates.ts` |
| CBHS / IBSS per diems, ECS, SBS, Community Integration, stacking rules | `src/data/afhBehavioralRates.ts` |
| Private-pay ranges by market (only `confirmed: true` bands render) | `src/data/afhPrivatePayRanges.ts` |
| Which guides a listing page links to (used by React **and** the prerender) | `src/data/afhBuyerGuides.ts` |
| AFH Property Score: every question, point, flag, band, checklist line | `src/data/afhPropertyScore.ts` (tests: `src/test/afhPropertyScore.test.ts`, including every correction from outside review) |
| The guides & articles library, and the homepage's "90+" figure | `src/data/guideLibrary.ts` (tests: `src/test/guideLibrary.test.ts`). Rendered by `/guides-and-resources`, written into its static HTML, and counted. **The count is exactly 90, with no slack:** remove a piece without adding one and the test fails. Change the homepage figure rather than let it overstate. AFH content and `/resources/*` directory pages are deliberately not counted |
| Every calculator, and the homepage's "10+" figure | `src/data/calculatorIndex.ts` (tests: `src/test/calculatorIndex.test.ts`). Rendered by `/calculators` |
| AFH Club's featured professionals, and each person's details | `src/data/afhProfessionals.ts` (tests: `src/test/afhProfessionals.test.ts`). Read by `/afh-club/find-a-professional`, `/afh-club/real-estate-broker` and `/bookkeeping-services`, so a phone number is changed once. **The listing standard is on the page and must stay true:** people the owner has met with personally (never "vetted"); a courtesy, nobody pays, RPP receives nothing; the one exception (the owner is compensated when hired as broker) is stated on his own listing. Group text explains why a ROLE matters and never makes a claim about a person. Empty groups are not rendered |
| **Every redirect** | `src/data/redirects.ts` (tests: `src/test/redirects.test.ts`). The build writes it to `dist/_redirects`, but Lovable's host ignores that file (httpstatus.io, Sept 29, 2026: old addresses answered 200), so the build also writes a forwarding page at each exact old address (`<from>/index.html`: instant meta refresh, canonical to the new address, noindex); App.tsx renders it as `<Navigate>` for in-app links. Never write a `<Navigate>` route in App.tsx directly, never give a redirect address a `ROUTE_METADATA` entry (the prerendered file would shadow the 301 on Netlify), and never redirect to another redirect. Each county has one address, `/<county>-county`; `/counties/<county>` redirects there (Sept 27, 2026) |
| The two visitor site maps, `/sitemap` (families) and `/afh-club/site-map` (AFH owners and operators) | `src/data/siteMaps.ts` (tests: `src/test/siteMaps.test.ts`). Built mostly from `PRIMARY_NAV`, the guide library and the calculator index; the rest is listed by hand. The audience rule decides the map. `/counties/<slug>` now 301s to `/<slug>-county` |
| DSHS licensed-home directory | `src/data/afh/` (public state data) |
| For-sale and sold listings | `src/data/afhListings.ts`. Refresh NWMLS entries every two weeks with `node scripts/refresh-nwmls-listings.mjs --numbers` (MLS numbers to paste into Matrix), then the owner's Matrix "Full" export: `node scripts/refresh-nwmls-listings.mjs <export.txt>` to review, `--apply` to write (status, price, sold data, lastVerified; deletes expired/cancelled listings with photo and redirect). NWMLS exports carry no agent email: when a listing's broker changes, the script clears the email and the owner supplies it from the Matrix roster card — never from a web search |

Pages compute their figures from these files so numbers cannot drift apart.
`src/pages/AFHCareClassifications.tsx` hard-codes no dollar amounts at all.
Files imported by the build-time prerender run in Node: no React, no browser
APIs, and **relative imports, not the `@/` alias**.

## 8. Content rules and what has been verified

- **Contact addresses (owner, Sept 29, 2026):** The old Stein Appraisal email address is DEAD (unused 6+ years) and must never appear anywhere; src/test/deadEmail.test.ts fails if it does. Appraisal inquiries and the appraiser's shown email use david@realpropertyplanning.com. Never publish or route to an email address the owner has not confirmed in conversation.

- **AFH annual license fee — ANSWERED in writing by DSHS, Sept 29, 2026:** $450 per licensed bed, in place since July 2025, set in the biennial omnibus appropriations act; DSHS announces changes in provider letters and mails a billing statement 60 days before the license anniversary month. Cite it as DSHS's written answer. DSHS's AFH License Application Process slideshow: https://www.dshs.wa.gov/sites/default/files/2026-04/AFH-License-Application-Process-Informational-Slideshow.pptx (linked from the prospective-providers page).

- **27-inch interior doors (WAC 388-76-10715, eff. Sept 20, 2026) and a change of ownership — ANSWERED in writing by DSHS Residential Care Services, Sept 28, 2026:** a continuously licensed home that changes owners is held to the rules in place when it was first licensed, so the rule does NOT apply to that buyer. A home that was once an AFH but is not licensed now must meet current rules, including this one. DSHS will not estimate how long a change-of-ownership license takes; its posted BAAU queue (dshs.wa.gov/altsa/baau-application-processing-timeline) is what pages quote. Still open with DSHS: ECS/SBS before closing and the 12-month rule (Pamela Young / James Selby), CBHS at a change of ownership (Ethan Leon).

**Audience.** AFH Club is for buyers, sellers, owners and investors. Content for a
family placing a parent belongs on the senior-housing side of the site, never in
AFH Club.

**Standing rules from the owner.**
- Professionals are never described as "vetted" (owner's decision Sept 27, 2026: it implies an endorsement the Disclaimer denies). AFH Club says "met with personally". Directories list categories A to Z and people A to Z by last name, sorted in code.
- Professionals are never described as "trusted" either (owner's decision Sept 27, 2026, second outside audit; ~200 instances replaced in every locale but Tigrinya). Say "independent", "featured" or "listed in the directory"; never swap in "screened", "verified", "recommended" or "reputable". "Trusted" stays only for a person in the reader's own life (a trusted family member, a will's trusted contact) and in business names. The guide is now "Building Your Professional Team" at /building-your-professional-team (old URL redirects).
- Contact form routing (Sept 27, 2026): the first question decides who receives the message and the form says so before sending. Brokerage, estate-property and AFH buy/sell questions go to the featured broker by name at the brokerage address; appraisal questions to the featured appraiser at the firm; everything else to info@realpropertyplanning.com. The table is `src/data/contactRouting.ts`, copied into `supabase/functions/send-contact-email/index.ts` (separate deploy: Lovable must redeploy the function before routing takes effect); `src/test/contactRouting.test.ts` fails if they drift or if the addresses stop matching `featuredProfessionals.ts`.
- AFH Club's professionals section reads "Five professional categories, independently engaged"; visitors contact each professional directly. Do not reintroduce "one point of contact" or "you are introduced to". Footer tagline: "Independent education and professional resources for Washington families."
- Standards pages (Sept 27, 2026): /editorial-standards, /research-methodology, /corrections-policy, /professional-inclusion-standards, /compensation-disclosure, /authors. Words live ONLY in `src/data/policyPages.ts` (rendered by `src/pages/PolicyPage.tsx` and prerendered from the same data in vite.config.ts). Facts the owner stated and the pages rely on: the hub pays no one, has no bank account and makes no profit; no ads or affiliate links; professionals are paid by their own clients; the featured broker is paid a commission only when a property sells; no outside reviewer yet; corrections go to info@; the featured broker takes a referral fee only for out-of-state referrals; every listed professional has been met with personally. AI-assisted drafting is disclosed there. If any fact changes, change that file the same day.
- Washington AFH data page (Sept 28, 2026): /afh-club/washington-afh-data and public/data/washington-afh-by-county.csv are generated from the directory data by `node scripts/build-afh-stats.mjs` into src/data/afh/stats.json. Rerun it after every directory refresh; `src/test/afhStats.test.ts` fails when stats.json is stale. Never type a figure into that page by hand.
- Probate pillar page and glossary (Sept 30, 2026): /washington-probate-guide ("start here" for the family side; words the prerender needs in `src/data/probatePillar.ts`, layout in `src/pages/ProbatePillarGuide.tsx`) and /probate-glossary (words ONLY in `src/data/probateGlossary.ts`; `src/test/probateGlossary.test.ts`). Every claim was checked against its RCW, DOR or IRS source on Sept 30, 2026 by an independent pass. Washington estate tax (DOR table): exclusion $3,000,000 for deaths from July 1, 2026 and rates 10-20% (ESB 6347, 2026); the 10-35% rates applied only to deaths July 1, 2025 to June 30, 2026; $3,076,000 for Jan-June 2026; $2.193 million is the pre-July-2025 figure and must not reappear. Other traps: the small estate affidavit's $100,000 test counts real estate but cannot transfer it; a special-notice request gives notice of court filings, and a nonintervention sale has none; RCW 11.02.005 "nonprobate asset" excludes life insurance and employer plans; estate recovery reaches nonprobate assets (43.20B.080, 74.39A.170); a personal representative is exempt from Form 17 (RCW 64.06.010(6)); Washington's capital gains tax excludes all real estate (RCW 82.87.050). Statute links use lawfilesext.leg.wa.gov via `rcw()` (app.leg.wa.gov served wrong pages to automated readers). Cover: public/washington-probate-guide-cover.webp (owner art, Sept 30, 2026).
- Probate "start here" band (Sept 30, 2026): 48 probate, executor, trustee, valuation and city-probate pages carry `<ProbateStartHere />` as the FIRST child of `<main>` (the Estate/Executor sub-page layouts include it). The route list is `src/data/probateStartHere.ts`; vite.config.ts writes the same line into each route's static HTML; `src/test/probateStartHere.test.ts` fails if a listed page lacks it. The component re-applies index.css's first-child hero reset to the element after it, so heroes render as before. Adding a probate guide: add its route there and the component to its page. Links with a #hash (e.g. /probate-glossary#letters-testamentary) now scroll to the target (`src/components/ScrollToTop.tsx`); glossary and pillar anchors use scroll-margin-top 180px to clear the sticky header. County pages say local probates are "usually" filed in that county's superior court: RCW 11.96A.050(4) lets the petitioner file in any county.
- Senior housing & care fact-check (Sept 30, 2026): ~50 family-side pages (long-term care, Medicaid, WA Cares, care costs and calculators, senior housing, hospice, powers of attorney, wills, gray divorce, FAQ, the aging-parent flow) were checked against primary sources by four independent reviewers and corrected. Facts to keep: the 2024 federal nursing-home staffing minimum (3.48 HPRD, 24/7 RN) was REPEALED effective Feb 2, 2026; Washington still requires 3.4 hours (RCW 74.42.360). Medicare SNF days 21-100: $217/day in 2026, after a 3-day formal inpatient stay (observation does not count). Apple Health LTC 2026: $2,000 resources, $2,982 special income level for COPES, NO fixed income cap for nursing homes, $1,130,000 home-equity limit, $162,660 spousal maximum, 60-month look-back (not for CFC alone). ALTSA's programs moved to the Home and Community Living Administration (HCLA) in May 2025. Apple Health hospice is chapter 182-551 WAC (HCA), not 388-551. Washington POAs: notarized OR two qualified witnesses (RCW 11.125.050); NOT durable by default (11.125.040); co-agents act jointly by default (.110); a notarized POA must be accepted or a certification requested within 7 business days (.200); recording is title-company practice. Care costs: ONE source, `src/lib/careTypes.ts` (CareScout 2025 Washington medians; memory care, AFH, independent living and CCRC are labeled estimates; the source line `COST_SOURCE_LINE` shows on every calculator). When CareScout publishes new data, update careTypes.ts and the hand-written ranges in aging-parent-flow.ts, senior-living/*.tsx, NursingHomes.tsx and SellHouseFundSeniorLiving.tsx together. Descriptions never call the hub a "Licensed Broker & Certified Appraiser" and never carry the phone number.
- Owner decisions, Sept 30, 2026: (1) no "years of experience" claim anywhere (the `yearsExperience` field was removed from featuredProfessionals.ts; do not reintroduce "20+ years"); (2) the featured broker and appraiser work STATEWIDE: never describe their area as King/Snohomish/Pierce/Kitsap or "focused on the Puget Sound region"; (3) the "Family Member" and "Executor, Snohomish County" quotes were not real reviews and were removed; quotes may only come from src/data/testimonials.ts (real, permitted, credited as the person asked).
- Attorneys listed (owner, Sept 30, 2026): James Jackson (Ketter, Sheppard & Jackson) on /for-probate-attorneys and /for-estate-planning-attorneys; Scott R. Schill on /for-elder-law-attorneys and /featured-professionals; Dominik Musafia, the one divorce attorney, on /for-divorce-attorneys. Every other attorney page says "Coming Soon". "Real Property Planning does not refer clients to attorneys" stays true: visitors contact a listed attorney directly. Never write that the directory lists no attorneys.
- Probate guide is a FLOW CHART (owner, Oct 1, 2026: the one-page guide was "a tidal wave of text… break it up into multiple pages and work like a simple, easy to navigate flow chart"). /washington-probate-guide is only the title and the chart (src/components/probate/ProbateFlowChart.tsx); each box opens a short page (/washington-probate-guide/{house-in-a-trust,no-probate-needed,executor,heir,selling-the-house}, one template src/pages/probate/ProbateFlowPage.tsx, words in src/data/probateFlow.ts); the rules table, key questions and FAQ live on /washington-probate-guide/deadlines-and-key-rules. Keep the start page short and each branch page to a short summary, a few steps and at most three "watch out for" items. New probate articles go into a branch page's steps, not onto the start page.
- AFH guide is a FLOW CHART too (owner, Oct 1, 2026), same template: /afh-club/washington-adult-family-home-guide is the title plus src/components/afh/AFHFlowChart.tsx ("What do you want to do?" open / buy (operating home or house to convert) / sell / already run one / run the numbers); branch pages /afh-club/washington-adult-family-home-guide/{opening,buying,selling,running,evaluating} (words in src/data/afhFlow.ts, page src/pages/afh/AFHFlowPage.tsx); the figures table, key questions, terms and FAQ live on .../rules-and-key-figures (src/pages/afh/AFHRulesAndFigures.tsx). Both guides share src/components/flow/FlowBranchPage.tsx; keep them short.
- Quick answers (Oct 4, 2026, Question Map step 5). `src/data/quickAnswers.ts` holds short, direct answers to the questions a page's readers ask most, rendered near the top by `<QuickAnswers />` (8 pages). Every fact in it must already be stated and cited elsewhere on the site; the answer repeats the source. Medicaid figures carry their year: recheck them each January with MedicaidAndLongTermCare.tsx and SellHouseFundSeniorLiving.tsx. The care-cost table reads careTypes.ts directly. `src/test/quickAnswers.test.ts` enforces 30–90 words, a source or link on each answer, live routes and no placeholder text.
- Decision-path links (Oct 4, 2026, Question Map step 4). "Your next questions" tiles come from `src/data/nextQuestions.ts` (path → questions) and render through `<NextQuestions />`, which reads the current path and renders nothing where a page has no entry. It sits before `</main>` on 14 pages and in ExecutorSubPageLayout, ChoiceFlowPage (the Helping an Aging Parent steps) and CountyPageTemplate. Add or change links in the data file only; titles are the reader's next question, and `src/test/nextQuestions.test.ts` fails on a dead path, a missing glossary anchor or a title that isn't a question.
- Full page content for crawlers (Oct 4, 2026). Most AI crawlers do not run JavaScript, so `vite.config.ts` (`renderPagesForCrawlers`) bundles the app for Node after the browser build (`src/entry-server.tsx`) and renders every ROUTE_METADATA page into its static `index.html`, inside `<div id="root" data-prerendered>`; `src/main.tsx` hydrates those pages instead of re-rendering them. Crawlers went from ~91,000 to ~320,000 readable words. Rules for page code: (1) never read `window`, `document`, `localStorage` or screen size during render or in a `useState` initializer: start from the server value and set the real one in an effect (Header's `isMobile` uses a layout effect so phones never flicker); (2) write CSS blocks as `<style dangerouslySetInnerHTML={{ __html: css }} />`, never `<style>{css}</style>` (the server escapes `>` in children, breaking selectors and hydration); (3) a page that fails to render keeps its metadata summary and the build logs it, so check the `full-page-render:` line in the build output. FAQ answers stay in the DOM when collapsed (PageFAQ/HomepageFAQ `hidden`, accordion `forceMount`). To test hydration locally, open pages with a trailing slash (`/trustees/`): `vite preview` serves the homepage file for clean URLs, unlike the live host, and every page then looks like a mismatch.
- AI-readable site (owner, Oct 1, 2026: "make the site the source AI assistants quote"). The build writes dist/ai/*.json (pages, glossary, AFH rule changes, AFH directory of all licensed homes, AFH stats, listings overview, AFH professionals, guide library), dist/llms.txt and dist/llms-full.txt, all from src/lib/aiData.ts (called by writeAiData in vite.config.ts) — so llms.txt is generated; there is no public/llms.txt to edit. The public MCP server (src/lib/mcp, Supabase function `mcp`, verify_jwt = false, no auth) is read-only and fetches those JSON files from the live site, so it answers with what was last published. NWMLS: listing details (address, price, photos, broker) must NOT go into these files or tools — counts and links only — unless the owner confirms with NWMLS that third-party/AI redistribution is allowed. Tests: src/test/mcpServer.test.ts (runs the real MCP protocol). To try the server locally: build, `vite preview`, copy the generated function with the site URL pointed at the preview, and run it with Deno (`npm i deno`).
- AFH Club quick links (owner, Oct 1, 2026): a dark AFH-green bar (red-door glyph + "AFH Club" on the left, thin red rule under it) under the site menu on EVERY AFH Club page (/afh-club/*, /afh-submit) with AFH Club Home, Start Here, Listings for Sale, Home Directory, Find a Professional, Calculators, Resources & Articles; the current section is a cream pill, with "|" between the links (owner, Oct 1). The bar also adds 28px (20px on phones) above the first block of #main-content on AFH pages, because index.css zeroes that padding and headings sat against the bar (owner: "too close… cluttered"); don't remove it. AFH pages with their own <main> must NOT add paddingTop: var(--header-height) (old fixed-header leftover; it left a ~200px empty band). Rendered once by Header.tsx (src/components/AFHClubQuickLinks.tsx, outside <main>), so pages add nothing. Links and highlighting rules live in src/lib/afhQuickLinks.ts, which vite.config.ts also writes into every AFH page's static HTML (incl. the ~4,500 directory and listing pages). Phones: one row that scrolls sideways, current link centered. Test: src/test/afhQuickLinks.test.ts.
- AFH pillar page and glossary (Sept 29, 2026): /afh-club/washington-adult-family-home-guide ("start here", `src/pages/AFHPillarGuide.tsx`) and /afh-club/glossary (words ONLY in `src/data/afhGlossary.ts`, which the page and the prerender both read; `src/test/afhGlossary.test.ts`). Every fact on both was checked against its WAC/RCW on Sept 29, 2026 by an independent pass. If a guide's fact changes, change the pillar and the glossary the same day. The pillar's "Terms to know" and the prerender pull from the glossary so wording can't drift. Evacuation drills are "at least every two months" per WSR 26-17-004 (the WAC website may still show the old "sixty days"). ALTSA was merged into the Home and Community Living Administration in May 2025. Administrator training is for new license applicants and entity representatives, not resident managers. The hub's start-here line uses `afhClubPage.startHere.*` keys in en.json only (other languages fall back to English).
- Article covers on the article itself (owner, Sept 29, 2026): every article whose cover appears on a library tile or carousel also shows that cover at the top of the page, via `src/components/ArticleCover.tsx` (floats right beside the title on 760px+, centered above it on phones; pass the file's real width/height). A new article with a cover gets it on both. Category photos (the /tiles/ set used for professional types and situations) are not article covers and are not added. The "Find a Professional" artwork (afh-find-professional.webp) says "TRUSTED EXPERTS" and must not be used; use afh-professionals-cover.webp.
- Analytics events (Sept 30, 2026): `generate_lead` fires from src/lib/leadTracking.ts only after the contact form's server call succeeds, with contact_reason, recipient_group and source_page (the in-site page visited before /contact). Never add names, emails, phones or message text; the privacy page describes exactly these fields. The owner marks generate_lead as a key event in GA (Admin > Key events). provider_contact_click (src/lib/providerTracking.ts) counts clicks on professionals' contact links.
- English only (owner's decision, Sept 30, 2026): the seven translated languages (es, zh-TW, zh-CN, tl, vi, ro, ti) were retired after Google Analytics showed 241 views in 90 days, nearly all 0-second visits. The flag switcher, the 49 translated routes and the locale files are gone (still in git history); every old /<lang>/... address redirects to its English page (src/data/redirects.ts). `src/i18n/locales/en.json` and `t()` calls remain as the English string store. Visitors who want another language use their browser's built-in translation. Do not reintroduce translated routes without a native-speaker reviewer.
- No "connects you" wording (second audit; done Sept 30, 2026): the hub never "connects", "introduces" or "matches" people with professionals. Say it explains what each professional does and that its Find a Professional page lists independent professionals visitors contact and hire directly. The directory lists NO probate or estate-planning attorney and no contractors: never imply the site can supply one; attorney pages say the site does not refer clients to attorneys and point to wsba.org to check a license. The featured broker speaking for himself (e.g. out-of-state referrals) is fine. `src/test/noConnectsWording.test.ts` enforces this on live files, en.json and vite.config.ts.
- Directory inspection records (Sept 30, 2026): every licensed-home page shows an "Inspection and enforcement record" block, and every city-list row a "DSHS inspection record" link, to DSHS's per-license page `AFHForms.aspx?lic=<license number>` (checked against two homes: names matched). Words live ONLY in `src/data/afh/inspectionRecord.ts` (page and prerender). Never link `AFHServices.aspx?lic=`; it returned a different home's name. "Documents posted" reflects `hasReports` at the retrieval date, not today.
- AFH rule-change tracker (Sept 29, 2026): /afh-club/washington-afh-rule-changes. Every row lives ONLY in `src/data/afhRuleChanges.ts` (page and prerender read it). A row goes in ADOPTED only after its WSR filing, session law, court opinion or DSHS notice has been opened; proposals (CR-101/102) stay in PENDING_RULES until a CR-103 exists. `src/test/afhRuleChanges.test.ts` FAILS when any row's `verified` date is over 120 days old: that is the quarterly review reminder; re-check each filing and bump `verified`, never just the date. The codified WAC page can lag an adopted filing (10895 still showed "sixty days"); the WSR controls. Verified Sept 29, 2026: bedroom approval before a resident sleeps in an uninspected room (WAC 388-76-10685(14), eff. 9/20/26); administrator training rule is 48 hours since 4/5/24 (was 54); HCA certification 365/425 days through 12/31/27; 7-8 beds without sprinklers allowed since 3/4/25 if all residents evacuate unaided; toilet ratio 1:5 since 3/4/25; Bolina v. AssureCare (7/9/26) ended the live-in caregiver wage exemption for AFHs.
- "Back to <previous page>" links (Sept 29, 2026): `src/components/BackToPreviousPage.tsx` shows the in-site page the visitor came from (recorded in memory by ScrollToTop when an internal link is clicked, `src/lib/navHistory.ts`; nothing stored in the browser, so the privacy page is unchanged) and a fixed fallback on direct visits. Used on /how-the-process-works (fallback: Probate & Estate Sales), which also now opens with "What process is this?" (selling an estate, probate, trust or inherited home; who it is for; who can sign; what the page is not). The h1 stays "How the Process Works".
- Article records (Sept 28, 2026): `src/data/articleRecords.ts` gives a guide its "first published / last reviewed against its sources / what changed / primary sources" block, rendered inside AuthorByline (and the payment-series shell) by path. A page gets a record ONLY after it has actually been read against its sources; `reviewed` is that date, never the date of a sitewide wording sweep. Git history before Aug 23, 2026 was imported in one commit, so don't date older pages from git. `src/test/articleRecords.test.ts` checks routes and date order.
