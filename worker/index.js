/**
 * Tiny Worker in front of the static site (Nov 1, 2026). It only runs for
 * /.well-known/* (see run_worker_first in wrangler.jsonc); every other address
 * is served straight from the static files, with no Worker involved.
 *
 * Why: the site's "single-page-application" fallback answers ANY unknown
 * address with the homepage HTML and status 200. AI agents and registries
 * probe standard files such as /.well-known/ard.json; getting HTML back made
 * PageSpeed report "ARD manifest is invalid" (Lovable answered those probes
 * with a 404). A real file in public/.well-known/ is still served as-is; an
 * address there with no file now gets an honest 404.
 */
export default {
  async fetch(request, env) {
    const res = await env.ASSETS.fetch(request);
    const type = res.headers.get("content-type") || "";
    if (res.status === 200 && type.includes("text/html")) {
      return new Response("Not found\n", {
        status: 404,
        headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=300" },
      });
    }
    return res;
  },
};
