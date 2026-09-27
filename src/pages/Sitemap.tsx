import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import SiteMapSections from "@/components/SiteMapSections";
import { RPP_SITE_MAP } from "@/data/siteMaps";

/**
 * /sitemap: the Real Property Planning site map, for families, executors,
 * trustees and professionals.
 *
 * Rebuilt Sept 27, 2026. It was a tree of raw addresses in 11px code type with
 * "Links to:" lines under each, generated from src/data/sitemap-data.ts; hard
 * to read for this audience and mixed AFH Club pages in with family pages. It
 * now lists page titles by topic, from src/data/siteMaps.ts, and sends
 * adult family home owners and operators to /afh-club/site-map.
 *
 * Section accents are the header menu colours, so a section here reads as the
 * same place as its menu.
 */
const ACCENTS: Record<string, string> = {
  "estate-probate": "#25597e",
  "senior-transitions": "#1d7239",
  professionals: "#9c5000",
  guides: "#6b30a6",
};

const Sitemap = () => (
  <div className="min-h-screen" style={{ background: "#f7f4ef" }}>
    <SEOHead
      title="Site Map | Real Property Planning"
      description="Every Real Property Planning page by topic: estate and probate, senior transitions, professionals, guides, calculators and local pages. Adult family home owners have their own AFH Club site map."
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "Site Map", url: "https://realpropertyplanning.com/sitemap" },
      ]}
    />
    <Header />
    <main id="main-content">
      <HeroBandTitle as="h1">Site Map</HeroBandTitle>
      <section style={{ padding: "40px 16px 64px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <style>{`
            .smap-intro p.smap-lead { font-family: 'DM Sans', sans-serif !important; font-size: 19px !important; line-height: 1.6 !important; color: #1c1917 !important; margin: 0 0 18px !important; max-width: 760px; }
            .smap-intro .smap-afh { display: flex; flex-wrap: wrap; align-items: center; gap: 10px 18px; background: #ffffff; border: 1px solid #ddd6cc; border-left: 5px solid #7f2028; border-radius: 10px; padding: 16px 20px; margin: 0 0 28px; }
            .smap-intro .smap-afh span { font-family: 'DM Sans', sans-serif; font-size: 18px; line-height: 1.45; color: #1c1917; flex: 1 1 320px; }
            .smap-intro a.smap-afh-link { display: inline-flex; align-items: center; min-height: 48px; padding: 10px 20px !important; background: #7f2028 !important; color: #ffffff !important; border-radius: 6px; font-family: 'DM Sans', sans-serif !important; font-size: 17px !important; font-weight: 700 !important; text-decoration: none !important; }
            .smap-intro a.smap-afh-link::after { content: none !important; display: none !important; }
            @media (hover: hover) { .smap-intro a.smap-afh-link:hover { background: #5e161d !important; } }
          `}</style>
          <div className="smap-intro">
            <p className="smap-lead">
              Every page on Real Property Planning, grouped by topic. Start from the <Link to="/">homepage</Link> or go
              straight to what you need.
            </p>
            <div className="smap-afh">
              <span>
                <strong>Own, run, buy or sell an adult family home?</strong> AFH Club has its own site map.
              </span>
              <Link to="/afh-club/site-map" className="smap-afh-link rpp-dark-surface">
                AFH Club Site Map →
              </Link>
            </div>
          </div>
          <SiteMapSections sections={RPP_SITE_MAP} accents={ACCENTS} />
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Sitemap;
