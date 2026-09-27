import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import BackToAFHClub from "@/components/BackToAFHClub";
import SiteMapSections from "@/components/SiteMapSections";
import { AFH_SITE_MAP } from "@/data/siteMaps";

/**
 * /afh-club/site-map: every AFH Club page by topic, for adult family home
 * buyers, sellers, owners and operators (Sept 27, 2026). The ~4,500 licensed
 * home pages are reached through the directory, not listed here.
 * Data: src/data/siteMaps.ts. Families are sent to /sitemap.
 */
const SITE = "https://realpropertyplanning.com";

const AFHSiteMap = () => (
  <div className="min-h-screen" style={{ background: "#f7f4ef" }}>
    <SEOHead
      title="AFH Club Site Map | Real Property Planning"
      description="Every AFH Club page by topic: buying and selling an adult family home, homes for sale, licensing and WABO, how AFHs get paid, calculators and professionals."
      canonical={`${SITE}/afh-club/site-map`}
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: SITE },
        { name: "AFH Club", url: `${SITE}/afh-club` },
        { name: "AFH Club Site Map", url: `${SITE}/afh-club/site-map` },
      ]}
    />
    <Header />
    <main id="main-content">
      <HeroBandTitle as="h1">AFH Club Site Map</HeroBandTitle>
      <section style={{ padding: "40px 16px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <style>{`
            .smap-intro p.smap-lead { font-family: 'DM Sans', sans-serif !important; font-size: 19px !important; line-height: 1.6 !important; color: #1c1917 !important; margin: 0 0 12px !important; max-width: 820px; }
            .smap-intro p.smap-note { font-family: 'DM Sans', sans-serif !important; font-size: 17px !important; line-height: 1.55 !important; color: #1c1917 !important; margin: 0 0 28px !important; max-width: 820px; }
          `}</style>
          <div className="smap-intro">
            <p className="smap-lead">
              Every AFH Club page, grouped by topic, for people who own, run, buy or sell an adult family home in
              Washington.
            </p>
            <p className="smap-note">
              Looking for a specific licensed home? Use the <Link to="/afh-club/homes">directory of licensed adult family homes</Link>.
              Planning care for a family member instead? See the <Link to="/sitemap">Real Property Planning site map</Link>.
            </p>
          </div>
          <SiteMapSections sections={AFH_SITE_MAP} />
        </div>
      </section>
      <BackToAFHClub />
    </main>
    <Footer />
  </div>
);

export default AFHSiteMap;
