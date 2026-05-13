import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import heroImage from "@/assets/planning-before-a-crisis-hero-washington.webp";

interface PlanningSubPageLayoutProps {
  /** Browser tab + meta title */
  seoTitle: string;
  /** Meta description */
  seoDescription: string;
  /** URL path (no domain), e.g. /planning-before-a-crisis/why-planning-early */
  canonicalPath: string;
  /** Breadcrumb name for this leaf page */
  breadcrumbName: string;
  /** Blue band ALL CAPS title */
  bandTitle: string;
  /** Body sections */
  children: ReactNode;
  /** Italic disclaimer line at the bottom of the content (above sitewide footer) */
  disclaimer: string;
}

const PlanningSubPageLayout = ({
  seoTitle,
  seoDescription,
  canonicalPath,
  breadcrumbName,
  bandTitle,
  children,
  disclaimer,
}: PlanningSubPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonical={`https://realpropertyplanning.com${canonicalPath}`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Planning Before a Crisis", url: "/planning-before-a-crisis" },
          { name: breadcrumbName, url: canonicalPath },
        ]}
      />
      <Header />
      <main id="main-content">
        {/* HERO — placeholder navy gradient until hero images are provided */}
        <section
          className="bg-primary text-white"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(220 45% 18%) 100%)",
          }}
        >
          <div className="container px-5 md:px-8 py-16 md:py-24 lg:py-28">
            <div className="max-w-4xl">
              <h1
                className="font-serif font-semibold leading-tight mb-5"
                style={{
                  color: "#ffffff",
                  fontSize: "clamp(30px, 4.6vw, 52px)",
                  lineHeight: 1.15,
                }}
              >
                {heroHeadline}
              </h1>
              <p
                className="font-sans"
                style={{
                  color: "#ffffff",
                  fontSize: "clamp(17px, 1.5vw, 21px)",
                  lineHeight: 1.6,
                }}
              >
                {heroSubheadline}
              </p>
            </div>
          </div>
        </section>

        {/* BLUE BAND */}
        <HeroBandTitle>{bandTitle}</HeroBandTitle>

        {/* BODY */}
        <section className="py-14 md:py-20 bg-cream">
          <div className="container px-5 md:px-8">
            <article
              className="max-w-3xl mx-auto text-foreground"
              style={{ fontSize: "18px", lineHeight: 1.75 }}
            >
              {children}
            </article>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 md:py-20 bg-secondary">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-[28px] md:text-[36px] font-semibold text-navy leading-tight mb-6">
                Have Questions? We're Here to Help.
              </h2>
              <p className="text-foreground text-[18px] md:text-[19px] leading-relaxed mb-8">
                <strong>Call:</strong>{" "}
                <a href="tel:+12069003015" className="text-navy underline hover:no-underline">
                  (206) 900-3015
                </a>
                <span className="mx-3 text-muted-foreground">·</span>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@realpropertyplanning.com"
                  className="text-navy underline hover:no-underline break-words"
                >
                  info@realpropertyplanning.com
                </a>
              </p>
              <Link
                to="/contact"
                className="gold-cta inline-flex items-center"
                style={{ padding: "14px 28px", fontSize: "17px" }}
              >
                Get in Touch
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* DISCLAIMER — small muted italic */}
        <section className="py-8 bg-cream">
          <div className="container px-5 md:px-8">
            <p className="max-w-3xl mx-auto text-center text-muted-foreground text-sm italic leading-relaxed">
              {disclaimer}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PlanningSubPageLayout;

/**
 * Small content helpers so each page reads cleanly.
 */
export const SubH2 = ({ children }: { children: ReactNode }) => (
  <h2 className="font-serif text-[26px] md:text-[32px] font-semibold text-navy leading-tight mt-10 mb-4 first:mt-0">
    {children}
  </h2>
);

export const SubH3 = ({ children }: { children: ReactNode }) => (
  <h3 className="font-serif text-[20px] md:text-[23px] font-semibold text-navy leading-snug mt-7 mb-3">
    {children}
  </h3>
);

export const P = ({ children }: { children: ReactNode }) => (
  <p className="mb-5">{children}</p>
);

export const UL = ({ children }: { children: ReactNode }) => (
  <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>
);

export const Divider = () => <hr className="my-10 border-border/60" />;
