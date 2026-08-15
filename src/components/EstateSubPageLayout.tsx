import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import RoadmapDropdown from "@/components/RoadmapDropdown";
import { estateProbateTopics } from "@/lib/estateProbateTopics";
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
            sizes="100vw"
            decoding="async"
          />
        </section>

        {/* `as="h1"` is load-bearing twice over. Without it HeroBandTitle
            defaults to `as="div"`, so all six pages using this layout shipped
            with NO h1 at all — a WCAG 1.3.1 / 2.4.6 failure and a real
            problem for an audience that navigates by screen reader and by
            heading structure. It also drives typography: HeroBandTitle keys
            `textTransform` off `isH1`, so a non-h1 band renders ALL CAPS.
            That is why these six read as shouty while their hub renders in
            Title Case. One attribute fixes both. */}
        <HeroBandTitle as="h1">{bandTitle}</HeroBandTitle>

        <section className="py-14 md:py-20 bg-cream">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto mb-10 md:mb-14">
              <RoadmapDropdown
                topics={estateProbateTopics}
                accentColor="#721d24"
                currentPath={canonicalPath}
                mode="list"
              />
            </div>
            <article className="max-w-3xl mx-auto text-foreground" style={{ fontSize: "18px", lineHeight: 1.75 }}>
              {children}
            </article>
          </div>
        </section>

        {/* Removed: a "Have Questions? We're Here to Help." band carrying the
            office phone, the info@ address and a "Get in Touch" button.

            This is the same block, and the same reasoning, as the CTA deleted
            from the hub page at /estate-probate-inherited-property. Two
            problems. "We're here to help" attributes help to Real Property
            Planning, which is a neutral educational hub that provides no
            services — the misattribution corrected in ForAttorneysHowItWorks
            and across the attorney pages. And it was an unbounded promise of
            individual guidance to every visitor on pages about probate and
            inherited property, where readers arrive in distress and at all
            hours.

            Deliberately not replaced with a softer version. The hub made that
            call and the six pages beneath it were still contradicting it. The
            footer and /contact remain available to anyone who wants them.

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

export default EstateSubPageLayout;

export const SubH2 = ({ children }: { children: ReactNode }) => (
  <h2 className="font-serif text-[26px] md:text-[32px] font-semibold text-navy leading-tight mt-10 mb-4 first:mt-0">
    {children}
  </h2>
);

export const SubH3 = ({ children }: { children: ReactNode }) => (
  <h3 className="font-serif text-[20px] md:text-[23px] font-semibold text-navy leading-snug mt-7 mb-3">{children}</h3>
);

export const P = ({ children }: { children: ReactNode }) => <p className="mb-5">{children}</p>;

export const UL = ({ children }: { children: ReactNode }) => (
  <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>
);

export const Divider = () => <hr className="my-10 border-border/60" />;
