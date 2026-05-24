import { Link } from "react-router-dom";
import { useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { SITEMAP_PAGES, SITEMAP_REDIRECTS, type SitemapPage } from "@/data/sitemap-data";
import HeroBandTitle from "@/components/HeroBandTitle";

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
    <div className="rpp-sitemap min-h-screen bg-background">
      <style>{`
        .rpp-sitemap h1 { font-size: 22px !important; }
        .rpp-sitemap h2, .rpp-sitemap h3, .rpp-sitemap h4 { font-size: 14px !important; }
        .rpp-sitemap p { font-size: 12px !important; }
        .rpp-sitemap .rpp-sitemap-counter { font-size: 11px !important; }
        .rpp-sitemap main a,
        .rpp-sitemap main .font-mono,
        .rpp-sitemap main .font-mono span,
        .rpp-sitemap main .font-mono a { font-size: 11px !important; }
      `}</style>
      <SEOHead
        title="Site Map | Real Property Planning"
        description="Complete site map of Real Property Planning showing every page, its URL, and the internal links each page contains."
      />
      <Header />
      <main id="main-content">
        <section className="bg-white">
          <img
            src="/Probate-inherited_property_carride_cropped.png"
            alt="Site map — Real Property Planning"
            className="w-full h-auto block"
            loading="eager"
          />
        </section>

        <HeroBandTitle>Site Map</HeroBandTitle>


        <section className="py-16 lg:py-20 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-5xl">
              <div className="mb-10" style={{ lineHeight: 1.4 }}>
                <Link to="/" className="font-mono text-primary hover:text-gold font-semibold" style={{ fontSize: "12px" }}>
                  /
                </Link>
                <span className="ml-3 text-muted-foreground" style={{ fontSize: "13px" }}>(Homepage)</span>
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
                <p className="text-muted-foreground mb-6" style={{ fontSize: "13px" }}>
                  Older URLs that automatically forward to their current canonical page.
                </p>
                <div className="grid gap-1">
                  {SITEMAP_REDIRECTS.map((r) => (
                    <div key={r.from} className="font-mono py-1 flex flex-wrap gap-2 items-center" style={{ fontSize: "11px", lineHeight: 1.4 }}>
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
