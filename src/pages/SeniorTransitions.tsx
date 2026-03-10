import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import nursingHome from "@/assets/nursing-home.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, Heart } from "lucide-react";

const situations = [
  "Downsizing to a smaller home",
  "Selling a long-time family residence",
  "Transitioning to assisted living or independent living",
  "Helping aging parents prepare for a move",
  "Evaluating whether to improve or sell as-is",
  "Coordinating services to reduce burden on the family"
];

const SeniorTransitions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20 lg:pb-28">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-widest uppercase mb-4 text-base">
              Senior Real Estate & Downsizing Help
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
              Thoughtful Real Estate Support for Senior Transitions
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
              Helping seniors and families navigate downsizing, relocation, assisted living transitions, and important housing decisions with professionalism, patience, and care.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-navy font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">
              Real Estate Guidance for a Major Life Transition
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              For many seniors and families, a move involves much more than real estate. It may be connected to health changes, safety concerns, lifestyle shifts, financial planning, or the emotional challenge of leaving a home filled with memories.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              David Stein helps make the real estate side of the transition more manageable. With over 20 years of experience, he provides guidance on timing, market value, preparation, sale strategy, and coordination so families can move forward with greater confidence and less stress.
            </p>
          </div>
        </div>
      </section>

      {/* Common Situations */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="container px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
                Common Situations
              </h2>
              <ul className="space-y-4">
                {situations.map((situation, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span className="text-foreground">{situation}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy rounded-lg p-10 lg:p-12">
              <Heart className="w-10 h-10 text-gold mb-6" />
              <h3 className="font-serif text-2xl text-primary-foreground font-semibold mb-4">
                A Calm, Respectful Approach
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Senior transitions require patience, listening, and careful coordination. David Stein helps clients and families think through the process step by step so the property decisions are clear, practical, and aligned with the family's goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6">
              Ready to Discuss Your Situation?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              David Stein provides experienced, patient guidance for seniors and families navigating important housing transitions.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-navy hover:bg-navy-light text-primary-foreground font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Talk With David Stein
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

export default SeniorTransitions;
