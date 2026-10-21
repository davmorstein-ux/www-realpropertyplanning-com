# Working on this repository: read this first

For any AI assistant or developer. Keep it current and short; detailed rules live in
`src/AGENTS.md` (site overview, CSS overrides, mobile), `src/pages/AGENTS.md` (adding a
page checklist) and `src/data/AGENTS.md` (single sources of truth, content rules, verified
facts). Read the one for the area you touch.

## What this is
`realpropertyplanning.com`: a neutral educational hub (probate, inherited property, estate
sales, senior housing) plus AFH Club for Washington adult family homes. React + TS + Vite +
Tailwind. `main` deploys straight to the live site, no staging. A build step in
`vite.config.ts` prerenders static HTML per route; crawlers read that, so SEO changes must
exist in the prerendered output. The repository is public.

## Ground rules (several assistants have write access)
1. `main` is production; build and test before pushing.
2. One writer at a time: read `git log -15` and recent diffs first; never revert or "tidy" a recent change you do not understand.
3. Unless the owner asked in this session to push to `main`, use a branch and PR. Never force-push.
4. Do not rewrite for style; odd lines are often deliberate workarounds (see `src/AGENTS.md`).
5. Verify facts against primary sources before publishing; an AI summary is not a source.
6. When ambiguous, ask the owner. He prefers direct assessments and complete replacement files.

## Commands
```sh
npm run build                     # vite build + prerender (~4 min); must pass before any push
npm test                          # vitest; must pass
node scripts/check-sitemap.mjs    # every live route in public/sitemap.xml, alphabetical
npx tsc --noEmit -p tsconfig.app.json
```
- If `npm ci` 403s (private registry), use `npm install --no-package-lock --registry https://registry.npmjs.org`; do not commit lockfile changes.
- The build regenerates `supabase/functions/mcp/index.ts` from `src/lib/mcp`. If you did not touch `src/lib/mcp` or `src/data/featuredProfessionals.ts`, discard that change; if you did, commit it and run `npx lovable-mcp-extract-manifest`.
- Two things keep that generated file passing the platform's `deno check`: the root `deno.json` (it turns `noImplicitAny` off, because the bundler strips every annotation) and the `asResult` pass-through in `src/lib/mcp/data.ts` (without it the emitted tool results say `type: string` where the SDK needs the literal `"text"`). Both fail the same way — the whole function stops building — so never drop either one.
- The MCP server is public with no sign-in, on purpose: every tool is read-only and returns only what is already on the public site, and outside AI assistants must be able to call it. A sign-in requirement added as a "security fix" on Oct 5, 2026 locked them all out and was reverted the same day at the owner's call. Do not add `auth` unless a tool ever exposes something private.
- The Tailwind `Unexpected "section"` build warning is harmless.
- Every indexable route needs a prerendered page (an entry in `ROUTE_METADATA` in `vite.config.ts`, or a generated route list). A route without one is served the **homepage HTML** to crawlers — homepage title and canonical — so Google files it as a copy of the homepage. The Oct 8, 2026 audit found eleven such pages (privacy, bookkeeping, legal plans, both AFH financing pages, six cost-of-care calculators). The build now prints `all N static routes have a prerendered page` or a ⚠ list; dynamic routes (`:slug`, `/*`) are not covered by that check, so add their entries by hand.
- Link to a page's current address, never one in `src/data/redirects.ts` (use `currentPath()` from that file for computed links), and never to a directory filter page with zero homes (those are not prerendered).

## AFH listing push alerts ("Real Plan" home-screen app, Oct 18, 2026)
- Feed: `src/data/afhAlerts.ts` → `dist/afh-alert-feed.json` at build. It must never carry a listing's address, price, photo or beds (NWMLS; same rule as `src/lib/aiData.ts`); `src/test/afhAlerts.test.ts` fails if it does.
- Sending: `supabase/functions/push-check` (pg_cron every 15 min, diffs the LIVE feed, so alerts follow Publish). Sign-ups: `supabase/functions/push-subscribe`; box: `src/components/AFHPushAlerts.tsx`; browser side `src/lib/pushAlerts.ts`; `public/sw.js` has no fetch handler on purpose (never cache pages).
- Web Push is hand-written on Web Crypto (`_shared/webpush.ts`); the npm `web-push` package needs Node ECDH that Deno lacks. Tests decrypt its output independently.
- Keys: public key in `src/lib/pushAlerts.ts` and `supabase/functions/_shared/vapid.ts` (must match); private key only in the Supabase secret `VAPID_PRIVATE_KEY`. Replacing the pair cancels every subscription.
- More than 12 changes in one publish are saved without sending (treated as a data update). Adding a past sale for the sold page sends nothing.

## Double-pulse click effect (Oct 20, 2026)

- What pulses is decided by `pulseHost()` in `src/lib/pulseTargets.ts`: `data-pulse`, a short class list, and a shape rule (any other link or button in <main> at least 100x32 with its own fill, border, shadow or picture, not a text link in a sentence, not a form/menu/accordion/toggle control). Add `data-pulse` to force one in and it gives two gentle heartbeats when clicked; internal links navigate after the pulse. The shared `<Button>` adds `data-pulse` itself for full-size variants. One listener in `src/components/PulseNavigator.tsx` does it sitewide; never copy animation code into a component. `data-no-pulse` opts an element out; header and footer never pulse.
- Timing and scale are set ONLY in `src/index.css` (`--rpp-pulse-duration` 900ms, `--rpp-pulse-scale` 1.03, `--rpp-pulse-easing`). The script reads the duration from there.
- Not for text links, form fields, dropdowns, checkboxes or small controls. Reduced-motion visitors get no animation and no delay. Approved by David on the homepage tiles and rolled out sitewide Oct 20, 2026. The keyframes animate the `scale` property, not `transform`, because several tiles set transform with !important.
- The site never speaks as "we" or "I" (David, Oct 20, 2026); see the wording rules before writing copy.

## Page endings and professionals (Oct 20, 2026)

- "People who help with this": `src/data/topicProfessionals.ts` is the one map (page path → 1-3 categories). The three homepage paths place the box in their own layouts; every other guide gets it from `GuideProfessionals`, placed once in `DisclaimerSection` and `ExecutorSubPageLayout`, so listing a path is enough. Rules (tests enforce): no attorneys on estate/probate pages until a probate attorney is listed; real estate & appraisal only on property topics; a page that lists an attorney must not say "does not refer clients to attorneys" (use "The site doesn't make referrals. The people listed below are ones the site's founder has met in person.").
- `/ai/pages.json` text for the guided paths comes from the page as rendered at build (`sectionsFromRenderedHtml` in `src/lib/aiData.ts`), because their text lives in components, not ROUTE_METADATA. Hubs and choice pages stay without sections on purpose.
- GA4 `next_step_click`: mark a related-reading or professionals block with `data-track-block="<name>"` and its link clicks are counted (siteTracking.ts; keep the privacy page in step).

## My Real Property Plan (/my-plan, Oct 18, 2026)
- Questions, rules, wording and every link: `src/data/myPlan.ts` only; `src/pages/MyPlan.tsx` just renders. `src/test/myPlan.test.ts` builds every answer combination and fails on any link that isn't a live route or that redirects.
- No AI, never gated (owner's decisions). Answers live in the URL fragment only; never send them to analytics, MailerLite or anywhere (care and Medicaid answers). Family side only; AFH buyers go to AFH Club.
- Newsletter offers after results: `src/components/ResultSignup.tsx` (care-cost and remodel pages). Keep source tags generic (no care type).

## Buttons: flat navy (Oct 21, 2026)

One look for every button: solid #1B3A6B, white text, gently rounded, no
gradient, shine or shadow. Hover #142c52. Secondary buttons: white with a
navy outline and navy text (`variant="outline3d"`, `.article-resource-btn`).
On a dark band, a button is white with navy text, never navy on navy.
`variant="gold"` and `"navy3d"` in src/components/ui/button.tsx are the flat
navy style (names kept for the call sites). The global
`main a[class*="btn"]` / `[class*="cta"]` rule in index.css is navy too, so a
class name holding "btn" on a dark band needs its own white override.
Maroon (#6b1b22 / #7f1d1d) is retired; do not bring it back for buttons.
