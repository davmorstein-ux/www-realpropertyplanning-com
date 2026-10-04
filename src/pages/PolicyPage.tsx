import { Link, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import HeroBandTitle from "@/components/HeroBandTitle";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import { POLICY_PAGES, policyPageByPath } from "@/data/policyPages";

/**
 * Renders any of the six standards pages from src/data/policyPages.ts (Sept 27,
 * 2026). Edit the words there, not here: the same text is prerendered for
 * crawlers by vite.config.ts.
 */
const CSS = `
.rpp-policy p { font-family: 'DM Sans', sans-serif !important; font-size: 18px !important; line-height: 1.75 !important; color: #1c1917 !important; margin: 0 0 14px !important; }
.rpp-policy h2.rpp-policy-h2 { font-family: 'DM Sans', system-ui, sans-serif !important; font-size: clamp(22px, 3vw, 28px) !important; line-height: 1.25 !important; font-weight: 700 !important; color: #1B3A6B !important; margin: 0 0 12px !important; text-wrap: balance; }
.rpp-policy ul.rpp-policy-ul { list-style: disc !important; padding-left: 24px !important; margin: 0 0 14px !important; }
.rpp-policy ul.rpp-policy-ul li { font-family: 'DM Sans', sans-serif !important; font-size: 18px !important; line-height: 1.6 !important; color: #1c1917 !important; margin: 0 0 6px !important; }
.rpp-policy .rpp-policy-meta { font-size: 16px !important; color: #3f3a35 !important; }
.rpp-policy .rpp-policy-nav { background: #f7f4ef; border: 1px solid #e2dad0; border-radius: 12px; padding: 20px 22px; }
.rpp-policy .rpp-policy-nav ul { list-style: none !important; margin: 0 !important; padding: 0 !important; display: grid; gap: 8px 24px; grid-template-columns: minmax(0, 1fr); }
@media (min-width: 640px) { .rpp-policy .rpp-policy-nav ul { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
.rpp-policy .rpp-policy-nav a { font-family: 'DM Sans', sans-serif; font-size: 17px; color: #1B3A6B !important; text-decoration: underline; text-underline-offset: 3px; }
.rpp-policy .rpp-policy-nav span[aria-current] { font-family: 'DM Sans', sans-serif; font-size: 17px; font-weight: 700; color: #1c1917; }
`;

const PolicyPage = () => {
  const { pathname } = useLocation();
  const page = policyPageByPath(pathname.replace(/\/$/, "")) ?? POLICY_PAGES[0];
  const url = `https://realpropertyplanning.com${page.path}`;

  return (
    <div className="min-h-screen bg-background rpp-policy">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <SEOHead title={page.title} description={page.description} canonical={url} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://realpropertyplanning.com" },
          { name: "About", url: "https://realpropertyplanning.com/about" },
          { name: page.h1, url },
        ]}
      />
      <Header />
      <main id="main-content">
        <HeroBandTitle as="h1">{page.h1}</HeroBandTitle>

        <section style={{ padding: "40px 16px 56px", background: "#ffffff" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p style={{ fontSize: 20 }}>{page.intro}</p>
            <p className="rpp-policy-meta">Last reviewed {page.lastReviewed}</p>

            {page.sections.map((s) => (
              <div key={s.heading} style={{ marginTop: 32 }}>
                <h2 className="rpp-policy-h2">{s.heading}</h2>
                {s.paragraphs.map((para) => (
                  <p key={para.slice(0, 40)}>{para}</p>
                ))}
                {s.bullets && (
                  <ul className="rpp-policy-ul">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* A <div role="navigation">, not <nav>: index.css styles every <nav> as the header menu. */}
            <div role="navigation" aria-label="Our standards" className="rpp-policy-nav" style={{ marginTop: 44 }}>
              <h2 className="rpp-policy-h2" style={{ fontSize: 22 }}>Our standards</h2>
              <ul>
                {POLICY_PAGES.map((p) => (
                  <li key={p.path}>
                    {p.path === page.path ? (
                      <span aria-current="page">{p.navTitle}</span>
                    ) : (
                      <Link to={p.path}>{p.navTitle}</Link>
                    )}
                  </li>
                ))}
                <li>
                  <Link to="/disclaimer">Disclaimer</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default PolicyPage;
