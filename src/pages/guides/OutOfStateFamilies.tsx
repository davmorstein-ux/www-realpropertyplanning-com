import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PremiumTile from "@/components/PremiumTile";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroIcon from "@/assets/icons/probate-guidance-book-open-icon-washington.webp";

const needs = [
  "Someone local to visit the property, document its condition, and provide an honest assessment",
  "A certified appraiser to establish value for estate, trust, or tax purposes",
  "A real estate broker experienced in estate and inherited property sales in Washington State",
  "An estate cleanout or senior move manager to handle belongings without the family needing to travel",
  "An elder law attorney or probate attorney familiar with Washington State law",
  "Clear, regular communication so out-of-state family members stay informed at every step",
];

const cards = [
  {
    title: "Real Estate Broker",
    description: "A broker experienced in estate and inherited property handles listing, showings, negotiations, and closing — keeping out-of-state family informed throughout without requiring travel.",
    href: "/realtor",
  },
  {
    title: "Certified Residential Appraiser",
    description: "An independent appraisal establishes a defensible property value for estate, probate, or tax purposes — completed locally without the family needing to be present.",
    href: "/real-estate-appraiser",
  },
  {
    title: "Estate Cleanout & Move Management",
    description: "Professionals who sort, pack, donate, and remove belongings from the property — coordinating the full cleanout so the home is ready for sale.",
    href: "/senior-move-managers",
  },
  {
    title: "Probate & Estate Attorney",
    description: "Washington State probate and estate attorneys who can advise on legal authority, title issues, and the requirements for selling inherited or estate property.",
    href: "/for-attorneys",
  },
  {
    title: "Estate Sale & Liquidation",
    description: "When a home contains decades of belongings, estate sale professionals handle valuation, sale, and removal — often generating proceeds that offset preparation costs.",
    href: "/estate-liquidation",
  },
  {
    title: "Financial Advisors & CPAs",
    description: "Selling an inherited property has tax implications. A CPA or financial advisor helps out-of-state families understand capital gains, stepped-up basis, and distribution planning.",
    href: "/for-cpas",
  },
];

const jsonLd = articleSchema({
  headline: "Out-of-State Families: Washington State Property Resources",
  description: "A referral hub connecting out-of-state families with trusted Washington State professionals for estate, probate, and inherited property situations.",
  url: "/guides/out-of-state-families",
  datePublished: "2026-03-27",
  dateModified: "2026-05-16",
  about: ["Out-of-state executor", "Remote property management", "Washington property", "Estate coordination", "Inherited property"],
});

const OutOfStateFamilies = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Out-of-State Families | Washington State Property Resources"
      description="A referral hub connecting out-of-state families with trusted Washington State professionals for estate, probate, and inherited property situations."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[
      { name: "Resources", url: "/resources" },
      { name: "Out-of-State Families", url: "/guides/out-of-state-families" },
    ]} />
    <Header />
    <main id="main-content">

      <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex justify-center mb-1.5 md:mb-2">
              <img src={heroIcon} alt="" aria-hidden="true" className="block w-full max-w-[15rem] h-auto object-contain" loading="lazy" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
              Out-of-State Families
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Connecting families managing Washington State property from a distance with the right local professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-foreground text-lg leading-relaxed">
              Managing a Washington State property from another state is one of the most common situations families face during an estate or senior transition. Distance makes every step harder — coordinating access, assessing condition, managing vendors, and staying informed. This page connects out-of-state families with the right local professionals for each part of the process.
            </p>
          </div>
        </div>
      </section>

      {/* What Out-of-State Families Typically Need */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-8">
              What Out-of-State Families Typically Need
            </h2>
            <ul className="space-y-4">
              {needs.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                  <span className="text-foreground text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Who Can Help */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-10 text-center">
              Who Can Help
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cards.map((card) => (
                <PremiumTile
                  key={card.title}
                  to={card.href}
                  title={card.title}
                  description={card.description}
                  cta="Learn More"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              Not Sure Where to Start?
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              Most out-of-state families don't know which professional they need first. Real Property Planning can help identify the right sequence and connect you with trusted professionals throughout Washington State.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="lg">
                Start a Conversation →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default OutOfStateFamilies;
