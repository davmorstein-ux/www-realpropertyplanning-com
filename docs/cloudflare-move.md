# Moving hosting from Lovable to Cloudflare (done Nov 1, 2026)

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

## Status (Nov 1, 2026, evening)
Done: zone active (nameservers carlos/virginia.ns.cloudflare.com, DNSSEC off at GoDaddy), all
email/verification records copied and DNS only (SPF sub-record `dc-db9e4b7a04._spfm` was added by
hand: the import missed it), Worker `realpropertyplanning` attached as Custom Domain to
`realpropertyplanning.com` and `www.realpropertyplanning.com`, Redirect Rule "Redirect from WWW to
root" (301, preserve query string). First header check on the live domain: `server: cloudflare`,
`cf-cache-status: HIT`, the project's own `cache-control` (Lovable ignored it).
Left: remove the custom domain in Lovable; old Pages project `www-realpropertyplanning-com`
(April) is disconnected from GitHub but not deleted (too many deployments for the dashboard).
Rollback now: re-add `A @ 185.158.133.1` (DNS only) after removing the Worker custom domain, or
put GoDaddy nameservers back (ns47/ns48.domaincontrol.com).
Lovable custom domains removed (Nov 1, 2026). KeyCDN Performance Test after the move, TTFB:
Frankfurt 74 ms, Amsterdam 105, London 107, New York 97, San Francisco 114, Singapore 318,
Sydney 259, Bangalore 241 (Lovable: 254-335 Europe, 444 NY, 720 SF, 1,100-2,360 Asia/Australia).

## Not-found handling (Nov 2, 2026)
`not_found_handling` changed from "single-page-application" to "404-page": an address with no file
now gets dist/404.html (the app shell, noindex) with status 404 instead of the homepage file with
status 200, which Search Console reported as 12 "Soft 404" pages. Checked with wrangler dev: all
7,171 real pages and sitemap addresses answer 200; unknown addresses 404 and show the app's "page not
found" screen. Old addresses from that report now redirect (src/data/redirects.ts). Undo: set it back
to "single-page-application" and redeploy.
