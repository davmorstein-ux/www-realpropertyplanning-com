import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import heroImage from "@/assets/estate-probate-inherited-property-hero-washington.webp";
import { articleSchema } from "@/lib/schema";

const tiles = [
  {
    title: "First Steps After a Death",
    description:
      "Calm, practical actions to take in the early days — before any major decisions need to be made.",
    href: "/estate-probate-inherited-property/first-steps",
  },
  {
    title: "Understanding Probate & Legal Authority",
    description:
      "Who has the authority to make decisions — and what probate actually means for your family.",
    href: "/estate-probate-inherited-property/probate-and-legal-authority",
  },
  {
    title: "Understanding the Property's Value",
    description:
      "Estate valuation has unique requirements. Here's what a date-of-death appraisal is and why it matters.",
    href: "/estate-probate-inherited-property/property-value",
  },
  {
    title: "Deciding What to Do With the Property",
    description:
      "Sell, keep, rent, or transfer — how to think through the options carefully.",
    href: "/estate-probate-inherited-property/what-to-do-with-the-property",
  },
  {
    title: "Preparing the Property",
    description:
      "From cleanout to repairs — what to handle before the home goes to market.",
    href: "/estate-probate-inherited-property/preparing-the-property",
  },
  {
    title: "Building Your Professional Team",
    description:
      "Who you need, when to engage them, and how a coordinated team protects everyone.",
    href: "/estate-probate-inherited-property/professional-team",
  },
];

const jsonLd = articleSchema({
  headline: "Managing an Estate, Probate, or Inherited Property",
  description:
    "Topics to explore for executors, families, and heirs navigating estate settlement, probate, inherited homes, and property decisions in Washington State.",
  url: "/estate-probate-inherited-property",
  datePublished: "2026-05-08",
  dateModified: "2026-05-14",
  about: ["Probate", "Estate administration", "Inherited property", "Executors", "Trustees"],
});

const EstateProbateInheritedProperty = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Managing an Estate, Probate, or Inherited Property | Real Property Planning"
        description="A guided resource for executors, trustees, heirs, and families navigating estate settlement, probate questions, inherited homes, and property decisions in Washington State."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema
        items={[{ name: "Managing an Estate, Probate, or Inherited Property", url: "/estate-probate-inherited-property" }]}
      />
      <Header />
      <main id="main-content">
        {/* HERO IMAGE */}
        <section className="bg-white">
          <img
            src={heroImage}
            alt="Managing an estate, probate, or inherited property in Washington State"
            className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover object-center block"
            loading="eager"
          />
        </section>

        <HeroBandTitle>Estate, Probate & Inherited Property</HeroBandTitle>

        {/* TOPICS TO EXPLORE */}
        <section className="py-14 md:py-20 bg-cream">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
              <p className="text-gold font-bold tracking-[0.25em] uppercase text-sm md:text-[15px] mb-4">
                Topics to Explore
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
              {tiles.map((t) => (
                <Link
                  key={t.title}
                  to={t.href}
                  className="card-3d-blue block h-full no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                  aria-label={t.title}
                >
                  <div className="card-3d-blue__inner h-full relative">
                    <div className="card-3d-blue__face h-full">
                      <div className="flex h-full flex-col items-center text-center" style={{ padding: "28px 22px" }}>
                        <h3 className="font-serif text-[22px] md:text-[24px] font-semibold text-navy leading-snug mb-3">
                          {t.title}
                        </h3>
                        <p className="text-foreground text-[15px] leading-relaxed">
                          {t.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EstateProbateInheritedProperty;
