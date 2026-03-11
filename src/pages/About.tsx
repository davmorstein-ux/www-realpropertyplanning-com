import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import TrustStrip from "@/components/TrustStrip";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import daveHeadshot from "@/assets/dave-headshot.jpg";

const whoWorksWith = [
  "Attorneys",
  "Executors",
  "Personal representatives",
  "Trustees",
  "Fiduciaries",
  "Adult children and family members",
  "Seniors and households navigating major home transitions",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="About David Stein | Real Property Planning"
        description="Learn more about David Stein, the Washington real estate broker and state certified residential appraiser behind Real Property Planning."
      />
      <BreadcrumbSchema items={[{ name: "About", url: "/about" }]} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              About
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight">
              About David Stein
            </h1>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Bio */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  David Stein is the professional behind Real Property Planning, a service focused on probate real estate, inherited homes, estate sales, trust-related property matters, valuation-related decisions, and senior housing transitions throughout Western Washington.
                </p>
                <p>
                  As a Washington real estate broker and state certified residential appraiser with more than 20 years of experience, David provides practical guidance in situations that often require more than a standard sale process.
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-lg overflow-hidden border-2 border-gold/20 shadow-lg">
                <img
                  src={daveHeadshot}
                  alt="David Stein — Washington Real Estate Broker and Certified Appraiser"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who David Works With */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Who David Works With
            </h2>
            <ul className="space-y-4">
              {whoWorksWith.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground text-lg leading-relaxed">
              David's goal is to be a calm, knowledgeable, and dependable resource when property decisions carry legal, emotional, financial, or logistical weight.
            </p>
          </div>
        </div>
      </section>

      <RelatedServices currentPath="/about" />

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              Ready to connect?
            </h2>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold">
                  Contact David
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default About;
