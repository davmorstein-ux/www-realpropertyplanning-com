import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const serviceCards = [
  {
    title: "Senior Relocation Home Sales",
    description: "Helping seniors and their families plan and complete the sale of a long‑time home, including timing, preparation, and coordinating trusted local vendors.",
    link: "/senior-transitions",
  },
  {
    title: "Estate & Inherited Property Sales",
    description: "Guiding executors and heirs through pricing, preparation, and sale of inherited homes so the estate can be settled with clarity and minimal stress.",
    link: "/probate-estate-sales",
  },
  {
    title: "Probate Real Estate Sales",
    description: "Working alongside probate attorneys and personal representatives to market and sell property within court and estate timelines.",
    link: "/probate-estate-sales",
  },
  {
    title: "Trust & Fiduciary Property Sales",
    description: "Assisting trustees and fiduciaries with valuation, marketing, and sale of residential real estate while honoring their legal responsibilities.",
    link: "/executors",
  },
  {
    title: "Clean‑Out & Preparation Coordination",
    description: "Coordinating clean‑out, haul‑away, basic repairs, and staging resources so the property is ready for market without the family managing every detail.",
    link: "/how-the-process-works",
  },
  {
    title: "Home Value & Market Analysis",
    description: "Providing clear, data‑driven opinions of value and market conditions for seniors, executors, and attorneys who need to understand their options before selling.",
    link: "/why-valuation-matters",
  },
];

const Services = () => {
  return (
    <>
      <SEOHead
        title="Senior Relocation & Estate Real Estate Services | Real Property Planning"
        description="Real Property Planning provides senior relocation home sales, estate and inherited property sales, probate real estate, trust property sales, clean-out coordination, and market analysis throughout Washington State."
        canonical="https://www.realpropertyplanning.com/services"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.realpropertyplanning.com/" },
          { name: "Services", url: "https://www.realpropertyplanning.com/services" },
        ]}
      />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-3 md:pt-4 pb-12 md:pb-14 bg-primary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-sm">
                Services
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-semibold mb-6">
                Real Estate Services for Estate, Probate &amp; Senior Transitions
              </h1>
              <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-2xl mx-auto">
                Every situation is different. These are the areas where Real Property Planning's experience as a licensed brokerage with certified appraisal expertise makes the biggest difference.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {serviceCards.map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  className="card-3d group p-8"
                >
                  <h2 className="font-serif text-xl text-foreground font-medium mb-3">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-[15px] font-medium text-primary group-hover:text-gold transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <DisclaimerSection />
      <Footer />
    </>
  );
};

export default Services;
