# Moving hosting from Lovable to Cloudflare (started Nov 1, 2026)

Why: Lovable serves every page uncached from its origin (`cache-control: no-cache`, no
`cf-cache-status`), so Time to First Byte was 0.25 s in Europe, 0.72 s in San Francisco and
over 2 s in Asia (KeyCDN, Nov 1, 2026); real-user TTFB 1.8 s, LCP 3.0 s (failing).
Cloudflare serves the prebuilt files from its edge.

What went wrong in April 2026: nameservers moved to Cloudflare, a Worker was created, but
the A/CNAME records for `@` and `www` were never added, so the domain resolved nowhere; the
site was also still a client-only SPA then (every URL served the homepage HTML). Both are
addressed below: one host only, the domain attached through the Worker's Custom Domains
(Cloudflare creates the records), and every route now has its own prerendered file.

## How it is wired
- `wrangler.jsonc`: assets-only Worker `realpropertyplanning`, `html_handling:
  drop-trailing-slash`, SPA fallback. `_redirects` (301s) and `_headers` in `dist/` apply.
- `.github/workflows/deploy-cloudflare.yml`: every push to main builds and uploads.
  Secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.
- Supabase (forms, MCP, push alerts) is separate and unaffected.

## Phases
1. Cloudflare account: log in, list leftovers from April (old zone, old Worker); remove them.
2. API token (template "Edit Cloudflare Workers") and Account ID into GitHub secrets.
3. First deploy to `realpropertyplanning.<subdomain>.workers.dev`; test pages, redirects,
   forms, speed. Live site untouched.
4. Record every GoDaddy DNS record (screenshot): A, CNAME, MX, TXT (SPF, DKIM, Resend /
   MailerLite / Google verification), `_lovable` TXT.
5. Add the domain to Cloudflare (Free plan); compare imported records line by line; add any
   missing. Do not change nameservers yet.
6. Attach `realpropertyplanning.com` and `www.realpropertyplanning.com` to the Worker
   (Settings → Domains & Routes → Custom Domain); redirect rule www → apex (301).
7. At GoDaddy, change nameservers to the two Cloudflare ones. Check site, email, forms.
8. Lovable: remove the custom domain from the project (it stays the editor).

## Rollback
At GoDaddy, set nameservers back to GoDaddy's defaults; GoDaddy's DNS still holds
`A @ 185.158.133.1` (Lovable). Keep the Step 4 screenshot until the move is settled.
