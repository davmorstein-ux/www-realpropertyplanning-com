import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Senior Relocation Home Sales",
    description: "Helping seniors and their families plan and complete the sale of a long‑time home, including timing, preparation, and coordinating trusted local vendors.",
    link: "/senior-transitions"
  },
  {
    title: "Estate & Inherited Property Sales",
    description: "Guiding executors and heirs through pricing, preparation, and sale of inherited homes so the estate can be settled with clarity and minimal stress.",
    link: "/probate-estate-sales"
  },
  {
    title: "Probate Real Estate Sales",
    description: "Working alongside probate attorneys and personal representatives to market and sell property within court and estate timelines.",
    link: "/probate-estate-sales"
  },
  {
    title: "Trust & Fiduciary Property Sales",
    description: "Assisting trustees and fiduciaries with valuation, marketing, and sale of residential real estate while honoring their legal responsibilities.",
    link: "/executors"
  },
  {
    title: "Clean‑Out & Preparation Coordination",
    description: "Coordinating clean‑out, haul‑away, basic repairs, and staging resources so the property is ready for market without the family managing every detail.",
    link: "/how-the-process-works"
  },
  {
    title: "Home Value & Market Analysis",
    description: "Providing clear, data‑driven opinions of value and market conditions for seniors, executors, and attorneys who need to understand their options before selling.",
    link: "/why-valuation-matters"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-bold tracking-wider uppercase mb-3 text-base">
            Services
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-medium mb-4">
            Senior Relocation & Estate Real Estate Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Specialized knowledge and experience to guide you through senior relocation, estate property sales, probate real estate, and trust transactions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group p-8 bg-card rounded-lg border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-serif text-xl text-foreground font-medium mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
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
  );
};

export default ServicesSection;
