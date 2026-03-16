import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Scale, Users, Handshake, FileText, Heart, Clock, Briefcase, ArrowRight } from "lucide-react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const serviceCards = [
  {
    icon: Scale,
    title: "Probate & Estate Sales",
    description: "Strategic guidance for properties in probate, active estate administration, and court-supervised sales.",
    link: "/probate-estate-sales",
  },
  {
    icon: Users,
    title: "For Executors & Trustees",
    description: "Step-by-step property support for executors, personal representatives, and trustees managing estate real estate.",
    link: "/executors",
  },
  {
    icon: Handshake,
    title: "For Attorneys & Fiduciaries",
    description: "A dependable referral resource for estate planning, probate, and elder law professionals.",
    link: "/for-attorneys",
  },
  {
    icon: FileText,
    title: "Why Valuation Matters",
    description: "How broker and certified appraiser expertise prevents costly pricing mistakes in estate property.",
    link: "/why-valuation-matters",
  },
  {
    icon: Heart,
    title: "Senior Transitions",
    description: "Compassionate support for downsizing, assisted living moves, and family home sales during life changes.",
    link: "/senior-transitions",
  },
  {
    icon: Clock,
    title: "How the Process Works",
    description: "A transparent, six-step process from initial consultation through closing day.",
    link: "/how-the-process-works",
  },
  {
    icon: Briefcase,
    title: "For CPAs & Financial Planners",
    description: "Property guidance for CPAs and financial planners advising clients through estate or life transitions.",
    link: "/for-cpas",
  },
];

const Services = () => {
  return (
    <>
      <SEOHead
        title="Services | Real Property Planning"
        description="Explore Real Property Planning's services including probate property sales, senior transitions, executor support, and estate-related real estate guidance in Western Washington."
        canonical="https://www.realpropertyplanning.com/services"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.realpropertyplanning.com/" },
          { name: "Services", url: "https://www.realpropertyplanning.com/services" },
        ]}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-sm">
                Our Services
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-semibold mb-6">
                Estate & Transition Real Estate Services
              </h1>
              <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-2xl mx-auto">
                Real Property Planning helps families, executors, trustees, attorneys, and financial professionals navigate probate property sales, inherited homes, estate-related transactions, and senior housing transitions throughout Western Washington.
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
                  className="group p-8 bg-card rounded-xl border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
                    <service.icon className="w-6 h-6 text-primary group-hover:text-gold transition-colors" />
                  </div>
                  <h2 className="font-serif text-xl text-foreground font-medium mb-3">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary group-hover:text-gold transition-colors">
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
