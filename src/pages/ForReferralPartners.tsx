import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Handshake, BookOpen, Mail } from "lucide-react";
import people3d from "@/assets/people-3d.png";

const professionalTypes = [
  "Probate and Estate Attorneys",
  "CPAs and Financial Advisors",
  "Senior Move Managers",
  "Estate Sale Companies",
  "Senior Living Communities",
  "Professional Organizers",
  "Property Preparation Services",
];

const SITE_URL = "https://realpropertyplanning.com";

const ForReferralPartners = () => {
  const pageSchema = {
    ...articleSchema,
    headline: "For Professional Referral Partners",
    description:
      "How Real Property Planning collaborates with professionals who assist families navigating probate property, estate transitions, downsizing, and senior housing decisions.",
    url: `${SITE_URL}/for-referral-partners`,
    about: [
      { "@type": "Thing", name: "Professional Collaboration" },
      { "@type": "Thing", name: "Referral Partnerships" },
      { "@type": "Thing", name: "Estate Property Transitions" },
    ],
  };

  return (
    <>
      <SEOHead
        title="For Professional Referral Partners | Real Property Planning"
        description="Learn how Real Property Planning collaborates with attorneys, CPAs, senior move managers, and other professionals who assist families navigating probate property, estate transitions, and senior housing decisions."
        canonical={`${SITE_URL}/for-referral-partners`}
        jsonLd={pageSchema}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "For Professional Referral Partners", url: `${SITE_URL}/for-referral-partners` },
        ]}
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-secondary py-14 md:py-20">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-sm">
                Professional Collaboration
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-foreground leading-tight mb-4">
                For Professional Referral Partners
              </h1>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Many families navigating estate property transitions require coordinated support from
                multiple professionals. Real Property Planning works with a network of trusted
                partners to ensure every aspect of a property transition is handled with care,
                competence, and clear communication.
              </p>
            </div>
          </div>
        </section>

        {/* Collaborative Professional Network */}
        <section className="py-14 md:py-20">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <img src={people3d} alt="" aria-hidden="true" className="w-6 h-6 object-contain shrink-0" />
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                  Collaborative Professional Network
                </h2>
              </div>
              <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed mb-8">
                Estate property transitions often involve a range of professionals, each contributing
                specialized knowledge to support the family and protect the estate's interests.
                The following types of professionals frequently coordinate during these situations:
              </p>
              <ul className="space-y-3 mb-8">
                {professionalTypes.map((type) => (
                  <li
                    key={type}
                    className="flex items-start gap-3 text-foreground text-[15px] md:text-base leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    {type}
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-base leading-relaxed">
                When these professionals work together, families benefit from a more organized,
                less stressful transition — and each professional can focus on their area of
                expertise with confidence that the broader picture is being managed.
              </p>
            </div>
          </div>
        </section>

        {/* Why Collaboration Matters */}
        <section className="bg-secondary py-14 md:py-20">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Handshake className="w-6 h-6 text-accent shrink-0" />
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                  Why Collaboration Matters
                </h2>
              </div>
              <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed mb-6">
                Estate property and senior housing transitions rarely involve a single decision or
                a single discipline. Legal considerations intersect with financial planning.
                Property preparation overlaps with timing decisions. Housing choices affect sale
                strategy. When professionals communicate and coordinate, families experience fewer
                surprises, fewer delays, and better outcomes.
              </p>
              <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed">
                Real Property Planning values these professional relationships and approaches every
                engagement with the understanding that good coordination between{" "}
                <Link to="/services" className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors">
                  service providers
                </Link>{" "}
                leads to stronger results for the families involved.
              </p>
            </div>
          </div>
        </section>

        {/* Resource Directory */}
        <section className="py-14 md:py-20">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-accent shrink-0" />
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                  Resource Directory
                </h2>
              </div>
              <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed mb-8">
                This website maintains a curated directory of professionals who assist families
                during estate property and senior housing transitions across Western Washington.
                The directory is organized by specialty and is intended to connect families with
                knowledgeable, experienced providers.
              </p>
              <Link to="/resources">
                <Button
                  variant="outline"
                  className="border-border text-foreground hover:bg-muted font-semibold px-8 rounded-lg text-base h-[52px]"
                >
                  Browse the Resource Directory
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Invitation to Connect */}
        <section className="bg-secondary py-14 md:py-20">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-6 h-6 text-accent shrink-0" />
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                  Invitation to Connect
                </h2>
              </div>
              <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed mb-6">
                If you are a professional who works with families during estate property transitions,
                probate matters, downsizing, or senior housing decisions, Real Property Planning
                welcomes the opportunity to connect. Whether you are interested in being included
                as a resource for families or simply want to learn more about how coordination
                between professionals can improve client outcomes, we encourage you to reach out.
              </p>
              <Link to="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 rounded-lg text-base h-[52px]">
                  Get in Touch
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <RelatedServices currentPath="/for-referral-partners" />
        <DisclaimerSection />
      </main>

      <Footer />
    </>
  );
};

export default ForReferralPartners;
