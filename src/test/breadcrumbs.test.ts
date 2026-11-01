import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { breadcrumbsFor } from "@/lib/breadcrumbs";
import { RPP_SITE_MAP, AFH_SITE_MAP } from "@/data/siteMaps";
import { REDIRECTS } from "@/data/redirects";

const app = readFileSync("src/App.tsx", "utf8");
const routes = new Set([...app.matchAll(/<Route\s+path=\{?"([^"]+)"/g)].map((m) => m[1]));
const redirects = new Set(REDIRECTS.map((r) => r.from));
const dynamic = [...routes].filter((p) => p.includes(":")).map((d) => new RegExp("^" + d.replace(/:[^/]+/g, "[^/]+") + "$"));
const isLive = (href: string) => (routes.has(href) && !redirects.has(href)) || dynamic.some((rx) => rx.test(href));
const pages = [...RPP_SITE_MAP, ...AFH_SITE_MAP].flatMap((s) => s.groups.flatMap((g) => g.links.map((l) => l.href.split("#")[0])));

describe("breadcrumb trail", () => {
  it("every crumb link goes to a live page, never a redirect", () => {
    for (const p of pages) for (const c of breadcrumbsFor(p) ?? []) if (c.href) expect(isLive(c.href), `${p}: ${c.name} -> ${c.href}`).toBe(true);
  });
  it("no trail on the homepage; probate guide pages sit under Estate & Probate", () => {
    expect(breadcrumbsFor("/")).toBeNull();
    expect(breadcrumbsFor("/washington-probate-guide/selling-the-house")?.map((c) => c.name).slice(0, 3)).toEqual([
      "Home",
      "Estate & Probate",
      "Washington State Probate Guide",
    ]);
  });
});
