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
