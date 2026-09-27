import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { RPP_SITE_MAP, AFH_SITE_MAP, SITE_MAP_EXCLUDED, type SiteMapSection } from "@/data/siteMaps";

const app = readFileSync("src/App.tsx", "utf8");
const allRoutes = new Set([...app.matchAll(/<Route\s+path=\{?"([^"]+)"/g)].map((m) => m[1]));
const redirects = new Set([...app.matchAll(/<Route\s+path=\{?"([^"]+)"\}?\s+element=\{<Navigate/g)].map((m) => m[1]));
const liveStatic = [...allRoutes].filter((p) => !p.includes(":") && !p.includes("*") && !redirects.has(p));
const dynamic = [...allRoutes].filter((p) => p.includes(":")).map((d) => new RegExp("^" + d.replace(/:[^/]+/g, "[^/]+") + "$"));
const isLive = (href: string) => (allRoutes.has(href) && !redirects.has(href)) || dynamic.some((rx) => rx.test(href));

const links = (map: SiteMapSection[]) => map.flatMap((s) => s.groups.flatMap((g) => g.links));

describe("the two visitor site maps", () => {
  it("every link on either map goes to a live page, never a redirect", () => {
    for (const l of [...links(RPP_SITE_MAP), ...links(AFH_SITE_MAP)]) expect(isLive(l.href), `${l.title} -> ${l.href}`).toBe(true);
  });

  it("every live page is on a map or excluded with a reason", () => {
    const listed = new Set([...links(RPP_SITE_MAP), ...links(AFH_SITE_MAP)].map((l) => l.href));
    const missing = liveStatic.filter((p) => !listed.has(p) && !(p in SITE_MAP_EXCLUDED));
    expect(missing, `add these to src/data/siteMaps.ts (or to SITE_MAP_EXCLUDED with a reason): ${missing.join(", ")}`).toEqual([]);
  });

  it("nothing is listed twice on the same map, and every link has a title", () => {
    for (const map of [RPP_SITE_MAP, AFH_SITE_MAP]) {
      const hrefs = links(map).map((l) => l.href);
      expect(new Set(hrefs).size).toBe(hrefs.length);
      for (const l of links(map)) expect(l.title.trim().length, l.href).toBeGreaterThan(0);
    }
  });

  it("the AFH Club map stays about adult family homes", () => {
    const allowedOutside = new Set(["/afh-submit", "/adult-family-home-costs"]);
    for (const l of links(AFH_SITE_MAP)) expect(l.href.startsWith("/afh-club") || allowedOutside.has(l.href), l.href).toBe(true);
  });

  it("the two map pages link to each other", () => {
    expect(readFileSync("src/pages/Sitemap.tsx", "utf8")).toContain('"/afh-club/site-map"');
    expect(readFileSync("src/pages/AFHSiteMap.tsx", "utf8")).toContain('"/sitemap"');
  });
});
