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
- `npm run build` rewrites a few lines of `supabase/functions/mcp/index.ts` as a
  side effect. Discard that change (`git checkout -- supabase`); never commit it.
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
   and the "AFH Calculators" card description, which lives in **eight** locale
   files under `src/i18n/locales/` (key `calculators.description`).
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
| For-sale and sold listings | `src/data/afhListings.ts` |

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
- AFH pillar page and glossary (Sept 29, 2026): /afh-club/washington-adult-family-home-guide ("start here", `src/pages/AFHPillarGuide.tsx`) and /afh-club/glossary (words ONLY in `src/data/afhGlossary.ts`, which the page and the prerender both read; `src/test/afhGlossary.test.ts`). Every fact on both was checked against its WAC/RCW on Sept 29, 2026 by an independent pass. If a guide's fact changes, change the pillar and the glossary the same day. The pillar's "Terms to know" and the prerender pull from the glossary so wording can't drift. Evacuation drills are "at least every two months" per WSR 26-17-004 (the WAC website may still show the old "sixty days"). ALTSA was merged into the Home and Community Living Administration in May 2025. Administrator training is for new license applicants and entity representatives, not resident managers. The hub's start-here line uses `afhClubPage.startHere.*` keys in en.json only (other languages fall back to English).
- Article covers on the article itself (owner, Sept 29, 2026): every article whose cover appears on a library tile or carousel also shows that cover at the top of the page, via `src/components/ArticleCover.tsx` (floats right beside the title on 760px+, centered above it on phones; pass the file's real width/height). A new article with a cover gets it on both. Category photos (the /tiles/ set used for professional types and situations) are not article covers and are not added. The "Find a Professional" artwork (afh-find-professional.webp) says "TRUSTED EXPERTS" and must not be used; use afh-professionals-cover.webp.
- Directory inspection records (Sept 30, 2026): every licensed-home page shows an "Inspection and enforcement record" block, and every city-list row a "DSHS inspection record" link, to DSHS's per-license page `AFHForms.aspx?lic=<license number>` (checked against two homes: names matched). Words live ONLY in `src/data/afh/inspectionRecord.ts` (page and prerender). Never link `AFHServices.aspx?lic=`; it returned a different home's name. "Documents posted" reflects `hasReports` at the retrieval date, not today.
- AFH rule-change tracker (Sept 29, 2026): /afh-club/washington-afh-rule-changes. Every row lives ONLY in `src/data/afhRuleChanges.ts` (page and prerender read it). A row goes in ADOPTED only after its WSR filing, session law, court opinion or DSHS notice has been opened; proposals (CR-101/102) stay in PENDING_RULES until a CR-103 exists. `src/test/afhRuleChanges.test.ts` FAILS when any row's `verified` date is over 120 days old: that is the quarterly review reminder; re-check each filing and bump `verified`, never just the date. The codified WAC page can lag an adopted filing (10895 still showed "sixty days"); the WSR controls. Verified Sept 29, 2026: bedroom approval before a resident sleeps in an uninspected room (WAC 388-76-10685(14), eff. 9/20/26); administrator training rule is 48 hours since 4/5/24 (was 54); HCA certification 365/425 days through 12/31/27; 7-8 beds without sprinklers allowed since 3/4/25 if all residents evacuate unaided; toilet ratio 1:5 since 3/4/25; Bolina v. AssureCare (7/9/26) ended the live-in caregiver wage exemption for AFHs.
- "Back to <previous page>" links (Sept 29, 2026): `src/components/BackToPreviousPage.tsx` shows the in-site page the visitor came from (recorded in memory by ScrollToTop when an internal link is clicked, `src/lib/navHistory.ts`; nothing stored in the browser, so the privacy page is unchanged) and a fixed fallback on direct visits. Used on /how-the-process-works (fallback: Probate & Estate Sales), which also now opens with "What process is this?" (selling an estate, probate, trust or inherited home; who it is for; who can sign; what the page is not). The h1 stays "How the Process Works".
- Article records (Sept 28, 2026): `src/data/articleRecords.ts` gives a guide its "first published / last reviewed against its sources / what changed / primary sources" block, rendered inside AuthorByline (and the payment-series shell) by path. A page gets a record ONLY after it has actually been read against its sources; `reviewed` is that date, never the date of a sitewide wording sweep. Git history before Aug 23, 2026 was imported in one commit, so don't date older pages from git. `src/test/articleRecords.test.ts` checks routes and date order.
