import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { articleSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";

const contentBlocks = [
  {
    heading: "Clear Real Estate Guidance",
    text: "David Stein helps clients and professional advisors understand property condition, likely market position, preparation options, pricing considerations, and the practical steps involved in bringing real estate to market.",
  },
  {
    heading: "Valuation-Informed Perspective",
    text: "As both a real estate broker and Washington state certified real estate appraiser, David Stein brings added perspective to questions of value, marketability, and sale strategy during estate-related property transitions.",
  },
  {
    heading: "Coordination With Professional Advisors",
    text: "David Stein works alongside attorneys, fiduciaries, trustees, and other advisors by providing real-estate-related insight, communication, and follow-through within the scope of his professional role.",
  },
  {
    heading: "Support for Executors and Families",
    text: "Executors, personal representatives, trustees, heirs, and family members are often navigating unfamiliar responsibilities. David Stein helps bring order, clarity, and a more structured process to the real estate side of those decisions.",
  },
  {
    heading: "Focus on Important Property Transitions",
    text: "The goal is not simply to list a property. The goal is to help clients make informed decisions, protect value, reduce confusion, and move forward with a plan that fits the needs of the estate, trust, or family.",
  },
  {
    heading: "Experience Across Washington State",
    text: "David Stein serves clients throughout Washington State, with deep experience in King County, Snohomish County, Pierce County, and Kitsap County. Through eXp Realty's referral network, he can also connect clients with trusted brokers across the U.S. and internationally.",
  },
];

const HowWeWork = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How David Stein Works With Attorneys, Executors, Trustees & Families | Washington State"
        description="Learn how David Stein collaborates with attorneys, executors, trustees, and families to provide real estate guidance, valuation insight, and practical coordination during probate, trust, and estate property transitions."
        jsonLd={articleSchema({
          headline: "How David Stein Works With Attorneys, Executors, Trustees & Families",
          description: "How David Stein collaborates with attorneys, executors, trustees, and families during probate, trust, and estate property transitions.",
          url: "/how-we-work",
          datePublished: "2025-01-15",
          dateModified: "2026-03-15",
          about: ["Real estate guidance", "Probate coordination", "Estate property", "Attorney collaboration"],
        })}
      />
      <BreadcrumbSchema items={[{ name: "How We Work", url: "/how-we-work" }]} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-12 md:pt-32 md:pb-20 lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Professional Real Estate Resource
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
              How David Stein Works With Attorneys, Executors, Trustees, and Families
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Important property transitions often involve more than a standard home sale. Probate, trust administration, inherited real estate, and estate-related property decisions can require coordination among attorneys, fiduciaries, executors, trustees, personal representatives, heirs, and family members. Important property transitions often involve more than a standard home sale. Probate, trust administration, inherited real estate, and estate-related property decisions can require coordination among attorneys, fiduciaries, executors, trustees, personal representatives, heirs, and family members. David Stein works as a real estate and valuation resource to help bring structure, market clarity, and experienced guidance to the real-property side of these matters throughout Washington State.
            </p>
          </div>
        </div>
      </section>

      {/* Content Blocks */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-[88px] lg:pb-[88px] bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
              {contentBlocks.map((block, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-[18px] px-7 py-8 md:px-8 md:py-9"
                >
                  <h2 className="font-serif text-xl md:text-[22px] text-foreground font-semibold mb-3">
                    {block.heading}
                  </h2>
                  <p className="text-muted-foreground leading-[1.75]">
                    {block.text}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 bg-card border border-border rounded-[18px] px-7 py-9 md:px-10 md:py-11 text-center">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-4">
                Discuss a Property Transition With David Stein
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-3xl mx-auto mb-8">
                If you are an attorney, executor, trustee, fiduciary, or family member navigating probate property, inherited real estate, or trust-owned property anywhere in Washington State, David Stein provides experienced real estate guidance grounded in market knowledge, valuation insight, and a practical understanding of complex property transitions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Link to="/contact">
                  <Button
                    variant="navy3d"
                    size="lg"
                  >
                    <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>
                    Request a Confidential Consultation
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline3d"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-7 py-4 h-auto rounded-lg w-full sm:w-auto"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Discuss a Property Matter
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="pt-10 pb-10 md:pt-14 md:pb-14 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">Related Resources</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/how-the-process-works" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-base">How the Process Works</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/why-valuation-matters" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-base">Why Valuation Matters</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/for-attorneys" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-base">For Attorneys</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/executors" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-base">For Executors</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/faq" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-base">FAQ</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/contact" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-base">Contact</Link>
            </div>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default HowWeWork;
