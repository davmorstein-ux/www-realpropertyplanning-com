import GoldCheck3D from "@/components/GoldCheck3D";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


interface AttorneyPageProps {
  title: string;
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";
  seoTitle: string;
  seoDescription: string;
  path: string;
  heroLabel: string;
  heroHeadline: string;
  heroSubtext: string;
  introHeading: string;
  introText: string[];
  scenarios: { title: string; description: string }[];
  howWeHelp: string[];
  whyItMatters: string[];
}

const AttorneyPageTemplate = ({
  title,
  seoTitle,
  seoDescription,
  path,
  heroLabel,
  heroHeadline,
  heroSubtext,
  introHeading,
  introText,
  scenarios,
  howWeHelp,
  whyItMatters,
}: AttorneyPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead title={seoTitle} description={seoDescription} />
      <BreadcrumbSchema
        items={[
          { name: "For Attorneys", url: "/for-attorneys" },
          { name: title, url: path },
        ]}
      />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              {heroLabel}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
              {heroHeadline}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8">
              {heroSubtext}
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold px-7 py-4 h-auto rounded-lg">
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-4 h-4 mr-2 object-contain shrink-0" />
                Schedule a Conversation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-5">
              {introHeading}
            </h2>
            {introText.map((p, i) => (
              <p key={i} className="text-muted-foreground text-lg leading-relaxed mb-4 last:mb-0">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Common Scenarios */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[900px] mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              Common Scenarios
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              These are typical situations where Real Property Planning provides value:
            </p>
            <div className="grid gap-5">
              {scenarios.map((s, i) => (
                <div key={i} className="bg-card border border-border rounded-xl px-7 py-6">
                  <h3 className="font-serif text-xl text-foreground font-semibold mb-2">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              How Real Property Planning Helps
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              David Stein brings dual credentials as a licensed broker and certified residential appraiser to every engagement:
            </p>
            <ul className="space-y-4">
              {howWeHelp.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <GoldCheck3D size={20} className="mt-0.5" />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              Why This Matters
            </h2>
            <ul className="space-y-4">
              {whyItMatters.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <GoldCheck3D size={20} className="mt-0.5" />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-5">
              Ready to Discuss a Client Situation?
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              Confidential conversations are always welcome. David will follow up promptly — no pressure, no obligation.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold">
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
                Schedule a Conversation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <RelatedServices currentPath={path} />
      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default AttorneyPageTemplate;
