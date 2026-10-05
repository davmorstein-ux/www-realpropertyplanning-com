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
- The MCP server requires OAuth via the project's sign-in (since Oct 5, 2026, security fix); verify_jwt stays false because the SDK verifies tokens in code.
- The Tailwind `Unexpected "section"` build warning is harmless.
