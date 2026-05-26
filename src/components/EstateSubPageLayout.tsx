import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import heroImage from "@/assets/managing-estate-probate-inherited-property-hero-washington.webp";

interface EstateSubPageLayoutProps {
  seoTitle: string;
  seoDescription: string;
  canonicalPath: string;
  breadcrumbName: string;
  bandTitle: string;
  children: ReactNode;
  disclaimer: string;
  heroImageOverride?: string;
  heroAltOverride?: string;
}

const EstateSubPageLayout = ({
  seoTitle,
  seoDescription,
  canonicalPath,
  breadcrumbName,
  bandTitle,
  children,
  disclaimer,
  heroImageOverride,
  heroAltOverride,
}: EstateSubPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonical={`https://realpropertyplanning.com${canonicalPath}`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Managing an Estate, Probate, or Inherited Property", url: "/estate-probate-inherited-property" },
          { name: breadcrumbName, url: canonicalPath },
        ]}
      />
      <Header />
      <main id="main-content">
        <section className="bg-white">
          <img
            src={heroImageOverride ?? heroImage}
            alt={heroAltOverride ?? "Managing an estate, probate, or inherited property in Washington State"}
            className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover object-center block"
            loading="eager"
          />
        </section>

        <HeroBandTitle>{bandTitle}</HeroBandTitle>

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
                style={{ fontSize: "15px" }}
              >
                Get in Touch
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

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

export default EstateSubPageLayout;

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
