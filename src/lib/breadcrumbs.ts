/**
 * "You are here" trail (Nov 1, 2026, David): Home › Section › parent › page.
 *
 * Built from the two visitor site maps (src/data/siteMaps.ts), which already
 * place every page in a section and are tested to link only live pages, plus
 * any real parent page in the address (e.g. /helping-an-aging-parent/health-
 * crisis is the parent of …/health-crisis/hospital-discharge). A page in
 * neither map gets no trail rather than a guessed one.
 *
 * Shown only where it adds something: not on the homepage, not on pages that
 * already show their section's tabs (src/lib/sectionStrip.ts), and only when
 * the trail has at least one step between Home and the page itself.
 */
import { AFH_SITE_MAP, RPP_SITE_MAP, type SiteMapSection } from "@/data/siteMaps";

export interface Crumb {
  name: string;
  href?: string;
}

const RPP_SECTION_HOME: Record<string, Crumb> = {
  "estate-probate": { name: "Estate & Probate", href: "/probate-estate-sales" },
  "senior-transitions": { name: "Senior Transitions", href: "/senior-transitions" },
  professionals: { name: "Find a Professional", href: "/featured-professionals" },
  guides: { name: "Guides & Tools", href: "/guides-and-resources" },
  calculators: { name: "Calculators", href: "/calculators" },
  local: { name: "Service Areas", href: "/counties" },
  about: { name: "About", href: "/about" },
};
const AFH_HOME: Crumb = { name: "AFH Club", href: "/afh-club" };

interface Entry {
  title: string;
  section: Crumb;
}

const clean = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p);

const buildIndex = () => {
  const index = new Map<string, Entry>();
  const add = (map: SiteMapSection[], sectionFor: (s: SiteMapSection) => Crumb | undefined) => {
    for (const s of map) {
      const section = sectionFor(s);
      if (!section) continue;
      for (const g of s.groups)
        for (const l of g.links) {
          const href = clean(l.href.split("#")[0].split("?")[0]);
          if (!index.has(href)) index.set(href, { title: l.title, section });
        }
    }
  };
  add(RPP_SITE_MAP, (s) => RPP_SECTION_HOME[s.id]);
  add(AFH_SITE_MAP, () => AFH_HOME);
  return index;
};

let INDEX: Map<string, Entry> | null = null;
const index = () => (INDEX ??= buildIndex());

/** Crumbs stay short: no "(Start Here)"-style tails or "Start Here" prefixes,
 *  and a long "Topic: subtitle" title keeps only the topic. */
const SHORT_TITLE = (title: string) => {
  let t = title
    .replace(/\s*\((?:Start Here|Free[^)]*)\)\s*$/i, "")
    .replace(/:\s*Start Here$/i, "")
    .replace(/(\?)\s*Start Here$/i, "$1")
    .replace(/^Start here:\s*/i, "");
  t = t.charAt(0).toUpperCase() + t.slice(1);
  if (t.length > 45 && t.includes(": ")) t = t.slice(0, t.indexOf(": "));
  return t;
};

/** The trail for a page, or null when there is nothing useful to show. */
export const breadcrumbsFor = (pathname: string): Crumb[] | null => {
  const path = clean(pathname);
  if (path === "/") return null;
  const idx = index();
  const self = idx.get(path);
  // Real parent pages in the address, nearest last.
  const parts = path.split("/").filter(Boolean);
  const parents: { href: string; entry: Entry }[] = [];
  for (let i = 1; i < parts.length; i++) {
    const href = "/" + parts.slice(0, i).join("/");
    const entry = idx.get(href);
    if (entry) parents.push({ href, entry });
  }
  if (!self) return null;
  // A page belongs to its parent's section (a probate guide sub-page sits under
  // Estate & Probate even where the site map also lists it under Guides).
  const section = path.startsWith("/afh-club") ? AFH_HOME : (parents[0]?.entry.section ?? self.section);
  const trail: Crumb[] = [{ name: "Home", href: "/" }];
  if (section.href !== path) trail.push(section);
  for (const p of parents) {
    if (p.href === section.href) continue;
    trail.push({ name: SHORT_TITLE(p.entry.title), href: p.href });
  }
  trail.push({ name: SHORT_TITLE(self.title) });
  return trail.length >= 3 ? trail : null;
};
