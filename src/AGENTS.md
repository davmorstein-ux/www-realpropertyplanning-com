# Source (src/) rules

Moved from the root AGENTS.md (Oct 5, 2026) to keep it short. Section numbers match the original.

## 1. What this is (full detail)

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
