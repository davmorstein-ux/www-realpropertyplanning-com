import { Scale, Heart, Home, FileText, Clock, Shield } from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Probate Property Sales",
    description: "Expert guidance through court-supervised sales, ensuring compliance with legal requirements while maximizing property value."
  },
  {
    icon: Heart,
    title: "Estate Sales",
    description: "Compassionate support for families during difficult transitions, handling every detail of the property sale process."
  },
  {
    icon: Home,
    title: "Property Valuation",
    description: "Accurate market assessments for estate planning, probate filings, and informed decision-making."
  },
  {
    icon: FileText,
    title: "Legal Coordination",
    description: "Seamless collaboration with attorneys and courts, ensuring all documentation meets legal standards."
  },
  {
    icon: Clock,
    title: "Expedited Closings",
    description: "Streamlined processes to help estates close efficiently without sacrificing value or compliance."
  },
  {
    icon: Shield,
    title: "Fiduciary Protection",
    description: "Protecting executors and administrators from liability through proper procedures and documentation."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-medium tracking-wider uppercase mb-3 text-sm">
            Comprehensive Services
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-medium mb-4">
            Expertise You Can Trust
          </h2>
          <p className="text-muted-foreground text-lg">
            Specialized knowledge and experience to guide you through every step of the probate and estate sale process.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-card rounded-lg border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
                <service.icon className="w-6 h-6 text-primary group-hover:text-gold transition-colors" />
              </div>
              <h3 className="font-serif text-xl text-foreground font-medium mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
