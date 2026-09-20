# Working on this repository: read this first

This file is for anyone about to change this codebase: an AI assistant (Claude,
ChatGPT/Codex, or another), or a human developer. It records ground rules and
hard-won lessons so nobody has to rediscover them. Keep it current: if you learn
something the next person needs, add it here in the same commit.

Last substantial update: September 20, 2026.

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
   `node scripts/check-sitemap.mjs`; it must report no drift.
4. `vite.config.ts`: a route-metadata entry (title, description, h1, quick
   answer, intro, FAQs) so crawlers get real content.
5. If it is an AFH Club guide: the grid **and** the carousel in
   `src/pages/AFHResources.tsx` (two separate lists), with a 3:4 cover at
   1024 x 1365 WebP in `public/`.
6. If it is an AFH Club calculator: a tile in `src/pages/AFHCalculators.tsx`,
   and the "AFH Calculators" card description, which lives in **eight** locale
   files under `src/i18n/locales/` (key `calculators.description`).
7. If buyers should find it from listings: `src/data/afhBuyerGuides.ts`.
8. `npm run build`, `npm test`, then look at it at 390px and at desktop width.

## 7. Single sources of truth. Edit these, not the pages.

| What | File |
|---|---|
| DSHS Medicaid base daily rates, all 17 CARE classifications, both rate areas | `src/data/afhMedicaidRates.ts` |
| CBHS / IBSS per diems, ECS, SBS, Community Integration, stacking rules | `src/data/afhBehavioralRates.ts` |
| Private-pay ranges by market (only `confirmed: true` bands render) | `src/data/afhPrivatePayRanges.ts` |
| Which guides a listing page links to (used by React **and** the prerender) | `src/data/afhBuyerGuides.ts` |
| AFH Property Score: every question, point, flag, band, checklist line | `src/data/afhPropertyScore.ts` (tests: `src/test/afhPropertyScore.test.ts`, including every correction from outside review) |
| DSHS licensed-home directory | `src/data/afh/` (public state data) |
| For-sale and sold listings | `src/data/afhListings.ts` |

Pages compute their figures from these files so numbers cannot drift apart.
`src/pages/AFHCareClassifications.tsx` hard-codes no dollar amounts at all.
Files imported by the build-time prerender run in Node: no React, no browser
APIs, and **relative imports, not the `@/` alias**.

## 8. Content rules and what has been verified

**Audience.** AFH Club is for buyers, sellers, owners and investors. Content for a
family placing a parent belongs on the senior-housing side of the site, never in
AFH Club.

**Standing rules from the owner.**
- On `/afh-club`, the "five kinds of professional" list describes every role
  generically ("Independent real estate broker"). No personal names, firm names
  or license numbers in that list. The compensation disclosure lower on the page
  carries the required identification and stays as written.
- Calls to action say "an AFH expert resource", not a person's name.
- Never display a Property Score on a listing page. A score exists only from a
  user's own answers in their own session. Most listings belong to other brokers.
- Never score or comment on a **neighborhood**. AFH residents are a protected
  class under fair housing law. Physical site facts (slope, parking) are fine.
- Tools never say *approved, compliant, licensable, fails,* or *bad property*.
  A test enforces this for the Property Score.
- The Property Score measures the building only. Licensing, occupancy, income
  and staffing are never scored; they belong to the unscored Acquisition Review.
- Every tool is framed for **understanding and verifying** a home's income or
  suitability, not for maximizing reimbursement.

**Verified against primary sources, September 2026.**
- Base AFH Medicaid rates on the site come from the DSHS rate workbook and are
  what a home is actually paid. The 2025-27 collective bargaining agreement's
  Appendix A is **$0.62/day lower in every cell**, because a side memo (MOU E)
  adds a bed license fee add-on. Anyone quoting Appendix A alone is short.
- CBHS and IBSS share one six-tier per diem table ($36.30 to $528.00) in CBA
  Art. 7.13. Managed care organizations "shall pay" it, so the rate does not vary
  by home. A resident has CBHS or IBSS, never both.
- ECS is the **greater of** the ECS rate or the base rate, not an add-on.
  SBS **is** an add-on ($178.00/day from July 1, 2026).
- WAC 388-106-0336(11): for assessments on or after July 1, 2025, a person must
  be found **not** eligible for CBHS before receiving SBS. They never stack.
- ECS and SBS specialty contracts do not transfer in a change of ownership.
- HCS Meaningful Day: funding was eliminated July 1, 2025. Status since then is
  contested and unconfirmed. Do not present it as current income. Three older
  pages still name it in a "does not transfer" list.
- WAC 388-106-1800 to -1815 (a five-tier hours system, 2026) is **in-home
  presumptive eligibility**. It has nothing to do with AFHs.
- Property requirements: bedrooms 80 sq ft usable single / 120 double (WAC
  388-76-10690); window sill max 44 in, opening min 24 x 20 in and 5.7 sq ft,
  5.0 at grade (WAC 388-76-10795); ramps max 1:12, showers min 30 x 48 in, no
  step accepted as a sill workaround (WAC 51-51-0330, IRC R330); residents who
  need evacuation assistance must have an exit path with no stairs, and lifts
  do not count (WAC 388-76-10865); one toilet per five persons (WAC 388-76-10780).
- RCW 70.128.140(2): an AFH is a residential use, permitted in every residential
  and commercial zone. Zoning is a reassurance, not a risk, in Washington.
- RCW 64.38.060: HOA governing documents may **not** limit the operation of a
  licensed AFH. It applies retroactively and makes conflicting provisions
  unenforceable. Reasonable rules covering every home (signs, landscaping) still
  apply. A companion provision in chapter 70.128 RCW covers restrictive
  covenants. Chapter 64.38 is scheduled for repeal on January 1, 2028, when
  chapter 64.90 takes over, so re-check the citation then. *(An earlier version
  of the Property Score wrongly implied a covenant could block an AFH.)*
- WAC 388-76-10780, as amended effective March 4, 2025: one accessible indoor
  flush toilet per five persons, counting residents **and household members who
  live in the home**, reachable without going through another person's room.
  Ensuite toilets can count. **The rule counts toilets, not full bathrooms.**
- IRC R311.2: the required exit door is side-hinged, 32 in clear width, 78 in
  high. IRC R311.8.2: ramp landings at least 3 x 3 ft at the top, the bottom,
  where a door opens onto the ramp, and at any turn.
- "Closets and door swings do not count" toward bedroom floor area comes from
  DSHS's Resident Bedroom and AFH Characteristics information sheets, not from
  the text of WAC 388-76-10690. Cite the sheets.
- **Proposed, not adopted:** DSHS opened rulemaking on chapter 388-76 in June
  2026. One proposal would require 36 in of clear space outside a bedroom escape
  window in newly licensed homes. Check its status before calling it a rule.
- **WSR 26-17-004 (filed Aug 5, 2026, effective September 20, 2026)** amended
  several sections of chapter 388-76 WAC. Among them, WAC 388-76-10715(6): in
  homes licensed after that date, every interior door residents pass through,
  other than the designated emergency exit, must be at least **27 inches** wide.
  Until that date 27 inches was an unwritten licensor practice. Whether it
  reaches a buyer of an already-licensed home (who applies for a new license)
  is a question for DSHS.
- WAC 388-76-10031: a home must hold its initial license 24 months before
  applying to increase from six beds to seven or eight, and a seven or eight bed
  home without sprinklers may not serve residents who need evacuation
  assistance. A new operator cannot start at seven or eight.

> **A lesson recorded on purpose.** An earlier version of this file said the
> September 20, 2026 amendment had been "checked and not found." That was wrong.
> A web search had missed it, and the absence of a search result was written
> down as if it were verification. It is not. **To check whether a WAC section
> changed, open that section on apps.leg.wa.gov and read the history line at the
> bottom, which lists every filing and effective date.** A chapter-level "last
> update" date is not reliable for this. When another reviewer cites a specific
> filing number, look up the filing before disagreeing.

**Not yet verified. Do not state numbers for these.**
- Which other sections WSR 26-17-004 changed, beyond the door-width rule. The
  filing reportedly also touched evacuation drill timing and licensing
  provisions; read it before relying on older text in those areas.
- What a new owner must have in place for **CBHS payments to continue after a
  change of ownership**. Nothing published answers it. Pages pose it as a
  question to the reader.
- Property Score weights are provisional: they follow AI-estimated cost-to-cure
  ranges, not field data. Replace with real conversion costs when available.

## 9. This repository is public

Anyone can read every file and the full history. Therefore:

- Never commit client names, prospect or lead lists, outreach letters, call
  notes, valuation worksheets, or anything about a specific owner or buyer.
- Never commit credentials. The committed `.env` holds only Supabase's public
  "anon" key, which is designed to ship to browsers. A service-role key must
  never appear here.
- Keep code comments free of client or deal references.
- Access tokens are issued per session and revoked afterward. Never write one
  into a file, a commit message, or the git remote URL you leave behind.

## 10. Languages

Eight locale files in `src/i18n/locales/`: en, es, ro, ti, tl, vi, zh-CN, zh-TW.
When English UI text changes, update the others. **Tigrinya (`ti`) needs a
native speaker**; it has been left unchanged where a confident translation was
not possible, so it may lag the others.

## 11. Open work, as of the date above

- A magazine-style cover for the AFH Property Score (a placeholder is in place).
- "Email me my checklist" for the Property Score. The site has no form backend
  yet, only `mailto:` links; answers are currently saved in the result link.
- Stage 2 of the Property Score: returning after a showing to replace each
  "not sure" with a measured answer.
- A Medicaid reimbursement and six-bed revenue simulator. The plan is to extend
  `AFHRevenueBuilder`, not build a parallel tool, and to omit any "compare
  programs" table, since a resident's program is not a choice.
- A fourth payment-series article on change of ownership, waiting on answers
  from DSHS and the Health Care Authority.
- The sitewide `!important` cleanup described in section 4.
