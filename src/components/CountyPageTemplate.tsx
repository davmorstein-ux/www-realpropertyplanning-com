import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, MessageSquare } from "lucide-react";

interface CountyPageProps {
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  headline: string;
  leadParagraph: string;
  supportingParagraph: string;
  secondaryButtonLabel: string;
  section2Headline: string;
  section2Text: string;
  section3Headline: string;
  helpBlocks: { heading: string; text: string }[];
  section4Headline: string;
  situations: string[];
  section5Headline: string;
  features: { heading: string; text: string }[];
  ctaHeadline: string;
  ctaText: string;
  ctaSecondaryLabel: string;
}

const relatedLinks = [
  { href: "/how-the-process-works", label: "How the Process Works" },
  { href: "/why-valuation-matters", label: "Why Valuation Matters" },
  { href: "/for-attorneys", label: "For Attorneys & Fiduciaries" },
  { href: "/for-cpas", label: "For CPAs" },
  { href: "/for-financial-planners", label: "For Financial Planners" },
  { href: "/faq", label: "Frequently Asked Questions" },
  { href: "/cities-we-serve", label: "Cities We Serve" },
  { href: "/contact", label: "Contact David Stein" },
];

const CountyPageTemplate = ({
  seoTitle,
  seoDescription,
  eyebrow,
  headline,
  leadParagraph,
  supportingParagraph,
  secondaryButtonLabel,
  section2Headline,
  section2Text,
  section3Headline,
  helpBlocks,
  section4Headline,
  situations,
  section5Headline,
  features,
  ctaHeadline,
  ctaText,
  ctaSecondaryLabel,
}: CountyPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead title={seoTitle} description={seoDescription} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              {eyebrow}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              {headline}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-5">
              {leadParagraph}
            </p>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-[30px]">
              {supportingParagraph}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" />
                  Request a Confidential Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-medium px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  {secondaryButtonLabel}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Local Knowledge Matters */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Why Local Knowledge Matters
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-[22px]">
              {section2Headline}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              {section2Text}
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: How David Helps */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              How David Helps
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-10">
              {section3Headline}
            </h2>
            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
              {helpBlocks.map((block, index) => (
                <div key={index} className="bg-secondary border border-border rounded-[18px] px-7 py-8 md:px-8 md:py-9">
                  <h3 className="font-serif text-xl md:text-[22px] text-foreground font-semibold mb-3">
                    {block.heading}
                  </h3>
                  <p className="text-muted-foreground leading-[1.75]">{block.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Common Situations */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Representative Situations
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-10">
              {section4Headline}
            </h2>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {situations.map((situation, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2.5 shrink-0" />
                  <p className="text-foreground leading-relaxed">{situation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Why Choose David */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Why David Stein
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-10">
              {section5Headline}
            </h2>
            <div className="grid lg:grid-cols-3 gap-5 lg:gap-6">
              {features.map((item, index) => (
                <div key={index} className="bg-secondary border border-border rounded-[18px] px-7 py-8 md:px-8 md:py-9">
                  <h3 className="font-serif text-xl md:text-[22px] text-foreground font-semibold mb-3">
                    {item.heading}
                  </h3>
                  <p className="text-muted-foreground leading-[1.75]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="pt-10 pb-10 md:pt-14 md:pb-14 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-sm">
              Related Resources
            </p>
            <div className="flex flex-wrap gap-3">
              {relatedLinks.map((link, i) => (
                <span key={link.href} className="flex items-center gap-3">
                  {i > 0 && <span className="text-muted-foreground/40">·</span>}
                  <Link
                    to={link.href}
                    className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm"
                  >
                    {link.label}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <DisclaimerSection />

      {/* Final CTA */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-[84px] lg:pb-[104px] bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <div className="bg-secondary border border-border rounded-[18px] px-7 py-9 md:px-10 md:py-11 text-center">
              <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
                Confidential Consultation
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-4">
                {ctaHeadline}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-3xl mx-auto mb-8">
                {ctaText}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                    <Phone className="w-4 h-4 mr-2" />
                    Request a Confidential Consultation
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-7 py-4 h-auto rounded-lg w-full sm:w-auto">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    {ctaSecondaryLabel}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CountyPageTemplate;
