import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  "Property review and sale strategy",
  "Market-based pricing guidance",
  "As-is versus improvement analysis",
  "Clean-out coordination",
  "Repair and vendor coordination",
  "Staging and presentation recommendations",
  "Strategic marketing and sale execution",
  "Ongoing communication with involved parties"
];

const ProbateEstateSales = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 lg:pb-28">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-widest uppercase mb-4 text-base">
              Probate Real Estate Services
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
              Experienced Guidance for Probate and Estate Property Sales
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
              Helping attorneys, executors, personal representatives, trustees, and families navigate the sale of real property tied to probate, estate administration, and inherited property matters.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-navy font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Request a Property Review
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">
                Real Estate Support for Estate Settlement and Probate Matters
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Selling a property after the death of an owner often involves more than listing a home for sale. There may be legal procedures, title considerations, multiple heirs, personal property, deferred maintenance, and uncertainty about timing or strategy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                David Stein helps clients and referral partners navigate the real estate side of the process with professionalism and practical guidance. His work includes helping assess the property, understand likely market value, determine the best sale approach, coordinate needed preparation, and manage the transaction through closing.
              </p>
            </div>
            <div className="bg-ivory rounded-lg p-8 lg:p-10">
              <h3 className="font-serif text-xl text-foreground font-semibold mb-6">
                Services Include
              </h3>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-navy">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              Need Help With a Probate or Estate Property?
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              David Stein can help you evaluate the property, understand the likely options, and create a practical path forward.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-navy font-semibold">
                Discuss the Property
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default ProbateEstateSales;
