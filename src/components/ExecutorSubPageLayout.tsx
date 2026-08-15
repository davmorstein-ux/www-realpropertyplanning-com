import { ReactNode } from "react";
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
            loading="eager" sizes="100vw" decoding="async" width={1806} height={820} />
        </section>

        {/* `as="h1"` is load-bearing twice over. Without it HeroBandTitle
            defaults to `as="div"`, so all six pages using this layout shipped
            with NO h1 at all — a WCAG 1.3.1 / 2.4.6 failure and a real
            problem for an audience that navigates by screen reader and by
            heading structure. It also drives typography: HeroBandTitle keys
            `textTransform` off `isH1`, so a non-h1 band renders ALL CAPS.
            One attribute fixes both. */}
        <HeroBandTitle as="h1">{bandTitle}</HeroBandTitle>

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

        {/* Removed: a "Have Questions? We're Here to Help." band carrying the
            office phone, the info@ address and a "Get in Touch" button.

            Same block and same reasoning as the CTA deleted from the
            /estate-probate-inherited-property hub. "We're here to help"
            attributes help to Real Property Planning, which is a neutral
            educational hub that provides no services. And it was an unbounded
            promise of individual guidance on pages read by people who have
            just been handed fiduciary responsibility for a dead relative's
            estate — often at 2am, often before they have any authority to act.

            Deliberately not replaced with a softer version. The footer and
            /contact remain available to anyone who wants them.

            If a property-specific CTA is ever wanted on an individual page,
            use <MidPageCTA /> in the page body rather than reinstating a
            blanket band here — its copy is already scoped to the real estate
            side and attributed to David Stein personally. */}

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
