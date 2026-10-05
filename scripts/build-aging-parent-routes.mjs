#!/usr/bin/env node
/**
 * Writes src/data/agingParentRoutes.json: every /helping-an-aging-parent page
 * with the title, description and h1 the prerender needs (Oct 4, 2026).
 *
 * src/lib/aging-parent-flow.ts imports icons and images, so vite.config.ts
 * (plain Node) cannot import it. This bundles it with those imports stubbed
 * and writes the plain data. src/test/agingParentRoutes.test.ts fails if the
 * JSON drifts from the flow file: rerun this script after editing the flow.
 *
 *   node scripts/build-aging-parent-routes.mjs
 */
import { build } from "esbuild";
import { writeFileSync, mkdtempSync } from "node:fs";
import { join, resolve } from "node:path";
import { tmpdir } from "node:os";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const out = join(mkdtempSync(join(tmpdir(), "apf-")), "flow.mjs");
await build({
  entryPoints: [join(root, "src/lib/aging-parent-flow.ts")],
  bundle: true, format: "esm", platform: "node", outfile: out, logLevel: "error",
  plugins: [{
    name: "stub",
    setup(b) {
      b.onResolve({ filter: /^lucide-react$/ }, () => ({ path: "lucide", namespace: "stub" }));
      b.onResolve({ filter: /\.(webp|png|jpe?g|svg)$/ }, (a) => ({ path: a.path, namespace: "asset" }));
      b.onLoad({ filter: /.*/, namespace: "stub" }, () => ({ contents: "export default new Proxy({}, {get:()=>null}); export const Home=null,HeartHandshake=null,Building2=null,Activity=null,Scale=null,DollarSign=null,ClipboardCheck=null,MessageCircle=null,ShieldAlert=null,Hospital=null,Users=null,HandHelping=null,Stethoscope=null,Wrench=null,Calendar=null,FileText=null,KeyRound=null,Landmark=null,Banknote=null;", loader: "js" }));
      b.onLoad({ filter: /.*/, namespace: "asset" }, (a) => ({ contents: `export default ${JSON.stringify(a.path)};`, loader: "js" }));
    },
  }],
  alias: { "@": join(root, "src") },
});
const { AGING_PARENT_LOOKUP } = await import(pathToFileURL(out).href);
const clip = (s, n = 158) => (s.length <= n ? s : s.slice(0, s.lastIndexOf(" ", n - 1)) + "…");
const routes = [...AGING_PARENT_LOOKUP.values()].map(({ node }) => ({
  path: node.path,
  title: `${node.label} | Real Property Planning`,
  h1: node.heroBandTitle || node.label,
  description: clip(node.content?.intro || node.subtext || node.label),
}));
writeFileSync(join(root, "src/data/agingParentRoutes.json"), JSON.stringify(routes, null, 2) + "\n");
console.log(`wrote ${routes.length} aging-parent routes`);
