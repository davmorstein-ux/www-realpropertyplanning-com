import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import heroImage from "@/assets/executor-trustee-hero-washington.webp";

interface ExecutorSubPageLayoutProps {
  seoTitle: string;
  seoDescription: string;
  canonicalPath: string;
  breadcrumbName: string;
  bandTitle: string;
  children: ReactNode;
  disclaimer: string;
}

const ExecutorSubPageLayout = ({
  seoTitle,
  seoDescription,
  canonicalPath,
  breadcrumbName,
  bandTitle,
  children,
  disclaimer,
}: ExecutorSubPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonical={`https://realpropertyplanning.com${canonicalPath}`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Serving as Executor & Trustee", url: "/executor-responsibilities-first-steps" },
          { name: breadcrumbName, url: canonicalPath },
        ]}
      />
      <Header />
      <main id="main-content">
        <section className="bg-white">
          <img
            src={heroImage}
            alt="Serving as executor and trustee — guidance for Washington families"
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

export default ExecutorSubPageLayout;
