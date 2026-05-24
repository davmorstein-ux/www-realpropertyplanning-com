import { Link } from "react-router-dom";
import { useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { SITEMAP_PAGES, SITEMAP_REDIRECTS, type SitemapPage } from "@/data/sitemap-data";

interface TreeNode {
  segment: string;
  fullPath: string;
  page?: SitemapPage;
  children: Map<string, TreeNode>;
}

function buildTree(pages: SitemapPage[]): TreeNode {
  const root: TreeNode = { segment: "", fullPath: "/", children: new Map(), page: pages.find((p) => p.path === "/") };
  for (const page of pages) {
    if (page.path === "/" || page.path === "*" || page.path.includes(":")) continue;
    const segments = page.path.split("/").filter(Boolean);
    let node = root;
    let acc = "";
    for (const seg of segments) {
      acc += "/" + seg;
      let next = node.children.get(seg);
      if (!next) {
        next = { segment: seg, fullPath: acc, children: new Map() };
        node.children.set(seg, next);
      }
      node = next;
    }
    node.page = page;
  }
  return root;
}

const TreeRow = ({ node, depth }: { node: TreeNode; depth: number }) => {
  const children = [...node.children.values()].sort((a, b) => a.segment.localeCompare(b.segment));
  const hasPage = !!node.page;
  return (
    <div>
      <div
        className="py-2 border-l-2 border-gold/20 pl-4"
        style={{ marginLeft: `${depth * 1.25}rem`, lineHeight: 1.4 }}
      >
        <div className="flex flex-wrap items-baseline gap-x-3">
          {hasPage ? (
            <Link
              to={node.fullPath}
              className="font-mono text-primary hover:text-gold transition-colors font-semibold"
              style={{ fontSize: "12px", lineHeight: 1.4 }}
            >
              {node.fullPath}
            </Link>
          ) : (
            <span className="font-mono text-muted-foreground" style={{ fontSize: "12px", lineHeight: 1.4 }}>
              {node.fullPath}/
            </span>
          )}
        </div>
        {hasPage && node.page!.links.length > 0 && (
          <div className="mt-1 ml-1 text-muted-foreground" style={{ fontSize: "11px", lineHeight: 1.4 }}>
            <span className="text-gold uppercase tracking-wide font-semibold mr-2" style={{ fontSize: "11px" }}>
              Links to:
            </span>
            {node.page!.links.map((l, i) => (
              <span key={l}>
                <Link to={l} className="font-mono hover:text-gold transition-colors" style={{ fontSize: "11px" }}>
                  {l}
                </Link>
                {i < node.page!.links.length - 1 && <span className="text-muted-foreground/40"> · </span>}
              </span>
            ))}
          </div>
        )}
      </div>
      {children.map((c) => (
        <TreeRow key={c.fullPath} node={c} depth={depth + 1} />
      ))}
    </div>
  );
};


const Sitemap = () => {
  const tree = useMemo(() => buildTree(SITEMAP_PAGES), []);
  const topChildren = useMemo(
    () => [...tree.children.values()].sort((a, b) => a.segment.localeCompare(b.segment)),
    [tree],
  );
  const totalPages = SITEMAP_PAGES.filter((p) => !p.path.includes(":") && p.path !== "*").length;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Site Map | Real Property Planning"
        description="Complete site map of Real Property Planning showing every page, its URL, and the internal links each page contains."
      />
      <Header />
      <main id="main-content">
        <section className="bg-primary text-primary-foreground py-16 lg:py-20">
          <div className="container px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-4">
                Reference
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4">Site Map</h1>
              <p className="text-primary-foreground text-lg max-w-2xl leading-relaxed">
                Every page on the site, organized by URL hierarchy. Each entry shows the page path
                and lists the internal links contained on that page.
              </p>
              <p className="text-primary-foreground/80 text-sm mt-4">
                {totalPages} pages · {SITEMAP_REDIRECTS.length} legacy redirects
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-5xl">
              <div className="mb-10">
                <Link to="/" className="font-mono text-[15px] text-primary hover:text-gold font-semibold">
                  /
                </Link>
                <span className="ml-3 text-muted-foreground text-sm">(Homepage)</span>
              </div>

              {topChildren.map((node) => (
                <div key={node.fullPath} className="mb-10">
                  <h2 className="font-serif text-2xl text-primary font-semibold mb-3 border-b border-gold/30 pb-2">
                    /{node.segment}
                  </h2>
                  <TreeRow node={node} depth={0} />
                </div>
              ))}

              <div className="mt-16 pt-10 border-t border-gold/30">
                <h2 className="font-serif text-2xl text-primary font-semibold mb-4">
                  Legacy Redirects
                </h2>
                <p className="text-muted-foreground mb-6">
                  Older URLs that automatically forward to their current canonical page.
                </p>
                <div className="grid gap-1">
                  {SITEMAP_REDIRECTS.map((r) => (
                    <div key={r.from} className="font-mono text-[13px] py-1 flex flex-wrap gap-2 items-center">
                      <span className="text-muted-foreground">{r.from}</span>
                      <span className="text-gold">→</span>
                      <Link to={r.to} className="text-primary hover:text-gold">
                        {r.to}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sitemap;
