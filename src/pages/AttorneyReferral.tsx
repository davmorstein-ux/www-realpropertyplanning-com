import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { articleSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare } from "lucide-react";
import iconPhone3d from "@/assets/icons/icon-phone-3d.webp";

const whyReferCards = [
  {
    heading: "Valuation-Informed Guidance",
    text: "As both a real estate broker and Washington state certified real estate appraiser, David Stein brings added perspective to pricing, property condition, marketability, and sale strategy.",
  },
  {
    heading: "Experienced With Sensitive Transitions",
    text: "Probate, inherited property, trust sales, and estate-related transitions often require discretion, patience, and a measured approach. David helps clients move forward with clarity and professionalism.",
  },
  {
    heading: "Reliable Communication",
    text: "Attorneys and fiduciaries value professionals who communicate clearly, follow through, and help reduce unnecessary confusion during important real property decisions.",
  },
  {
    heading: "Local Market Knowledge",
    text: "David Stein serves King County, Snohomish County, Pierce County, and Kitsap County with local insight that helps inform value, preparation strategy, and market positioning across different property types and communities.",
  },
];

const howWeWorkBlocks = [
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

const situations = [
  "Probate property sales",
  "Inherited homes",
  "Trust-owned real estate",
  "Estate-related home sales",
  "Real property transitions after death",
  "Preparation strategy for estate property",
  "Sale timing and market positioning",
  "Property condition and as-is sale considerations",
  "Coordination involving executors, trustees, and family decision-makers",
  "Real estate matters involving attorneys and fiduciaries",
  "Value-related questions affecting sale strategy",
  "Out-of-area heirs or family members needing local guidance",
];

const differentiators = [
  {
    heading: "Over 20 Years of Real Estate Experience",
    text: "David Stein brings more than two decades of experience helping clients make informed real estate decisions across changing markets, property types, and life transitions.",
  },
  {
    heading: "Brokerage Expertise Combined With Valuation Insight",
    text: "Few real estate professionals bring both brokerage experience and Washington state certified appraisal credentials to estate-related property transitions. That combination helps clients evaluate pricing, condition, preparation, and sale strategy with greater clarity.",
  },
  {
    heading: "A Calm, Professional Approach to Complex Property Matters",
    text: "Estate and inherited property situations often involve emotional, practical, and professional complexities at the same time. David Stein is known for a measured approach focused on communication, preparation, value protection, and forward progress.",
  },
];

const AttorneyReferral = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Attorney and Professional Referral Resource for Probate Real Estate | David Stein"
        description="David Stein is a real estate and valuation resource for attorneys, trustees, executors, and fiduciaries handling probate, trust, and estate property matters throughout Washington State."
        jsonLd={articleSchema({
          headline: "Attorney and Professional Referral Resource for Probate Real Estate",
          description: "David Stein is a real estate and valuation resource for attorneys, trustees, executors, and fiduciaries handling probate, trust, and estate property matters.",
          url: "/attorney-referral",
          datePublished: "2025-01-15",
          dateModified: "2026-03-15",
          about: ["Attorney referral", "Probate real estate", "Trust property", "Fiduciary support", "Estate property sales"],
        })}
      />
      <BreadcrumbSchema items={[{ name: "Attorney Referral", url: "/attorney-referral" }]} />
      <Header />
      <main id="main-content">

      {/* Section 1: Hero */}
      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Attorney and Professional Referral Resource
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              A Real Estate and Valuation Resource for Probate, Trust, and Estate Property Transitions
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-5">
              Attorneys, fiduciaries, trustees, personal representatives, executors, and family decision-makers often need more than a traditional real estate broker when a property is connected to probate, trust administration, inherited ownership, or estate settlement. David Stein is a licensed real estate broker in the State of Washington and a Washington state certified real estate appraiser with Attorneys, fiduciaries, trustees, personal representatives, executors, and family decision-makers often need more than a traditional real estate broker when a property is connected to probate, trust administration, inherited ownership, or estate settlement. David Stein is a licensed real estate broker in the State of Washington and a Washington state certified real estate appraiser with over 20 years of experience helping clients make informed decisions about important property transitions throughout Washington State.
            </p>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-[30px]">
              His work is focused on inherited homes, probate property, trust-owned real estate, estate-related sales, and situations where valuation insight, local market knowledge, communication, and practical coordination matter. David works alongside attorneys and related professionals as a real estate resource to help clients move forward with greater clarity, stronger preparation, and a more organized sale strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/contact">
                <Button variant="gold"
                  size="lg"
 className="hover:-light px-7 py-4 h-auto rounded-lg w-full sm:w-auto"
                >
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>
                  Request a Confidential Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline3d"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-medium px-7 py-4 h-auto rounded-lg w-full sm:w-auto"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Discuss a Referral Opportunity
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Attorneys Refer */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Professional Perspective
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-[22px]">
              Why Attorneys, Trustees, and Fiduciaries Refer David Stein
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-10">
              Estate-related real property often requires a level of judgment and coordination that goes beyond a standard listing approach. Attorneys and related professionals often need a real estate resource who understands that these matters can involve timing concerns, valuation questions, sensitive family dynamics, title issues, preparation decisions, documentation, and the need for calm communication throughout the process.
            </p>
            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
              {whyReferCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-[18px] px-7 py-8 md:px-8 md:py-9"
                >
                  <h3 className="font-serif text-xl md:text-[22px] text-foreground font-semibold mb-3">
                    {card.heading}
                  </h3>
                  <p className="text-muted-foreground leading-[1.75]">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: How David Works */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Professional Real Estate Resource
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-[22px]">
              How David Stein Works With Attorneys, Executors, Trustees, and Families
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-10">
              Important property transitions often involve more than a standard home sale. Probate, trust administration, inherited real estate, and estate-related property decisions can require coordination among attorneys, fiduciaries, executors, trustees, personal representatives, heirs, and family members. Important property transitions often involve more than a standard home sale. Probate, trust administration, inherited real estate, and estate-related property decisions can require coordination among attorneys, fiduciaries, executors, trustees, personal representatives, heirs, and family members. David Stein works as a real estate and valuation resource to help bring structure, market clarity, and experienced guidance to the real-property side of these matters throughout Washington State.
            </p>
            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
              {howWeWorkBlocks.map((block, index) => (
                <div
                  key={index}
                  className="bg-secondary border border-border rounded-[18px] px-7 py-8 md:px-8 md:py-9"
                >
                  <h3 className="font-serif text-xl md:text-[22px] text-foreground font-semibold mb-3">
                    {block.heading}
                  </h3>
                  <p className="text-muted-foreground leading-[1.75]">
                    {block.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Situations */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Representative Matters
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-[22px]">
              Situations Where David Stein Can Help
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-10">
              Not every property transition follows the same path. David Stein helps clients and referring professionals navigate a wide range of real-estate-related situations connected to probate, trusts, inherited ownership, and estate settlement.
            </p>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-10">
              {situations.map((situation, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2.5 shrink-0" />
                  <p className="text-foreground leading-relaxed">{situation}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              Whether the property is a longtime family home, an outdated inherited residence, a trust-owned property, or an estate asset that needs to be evaluated and prepared for sale, David Stein helps clients move from uncertainty toward a more informed and organized process.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: What Makes David Different */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-[84px] lg:pb-[84px] bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
              Why David Stein
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-10">
              What Makes David Stein Different
            </h2>
            <div className="grid lg:grid-cols-3 gap-5 lg:gap-6 mb-10">
              {differentiators.map((item, index) => (
                <div
                  key={index}
                  className="bg-secondary border border-border rounded-[18px] px-7 py-8 md:px-8 md:py-9"
                >
                  <h3 className="font-serif text-xl md:text-[22px] text-foreground font-semibold mb-3">
                    {item.heading}
                  </h3>
                  <p className="text-muted-foreground leading-[1.75]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-8">
              For attorneys, fiduciaries, executors, trustees, and families seeking a knowledgeable real estate resource in King County, Snohomish County, Pierce County, or Kitsap County, David Stein offers experience that extends beyond a conventional listing approach.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/for-attorneys" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">For Attorneys & Fiduciaries</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/for-cpas" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">For CPAs</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/for-financial-planners" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">For Financial Planners</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/how-the-process-works" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">How the Process Works</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/faq" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">FAQ</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/contact" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Contact</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Professional Disclaimer */}
      <DisclaimerSection />

      {/* Section 7: Final CTA */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-20 lg:pt-[84px] lg:pb-[104px] bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto">
            <div className="bg-secondary border border-border rounded-[18px] px-7 py-9 md:px-10 md:py-11 text-center">
              <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
                Confidential Consultation
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-4">
                Discuss a Property Transition With David Stein
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-3xl mx-auto mb-8">
                If you are an attorney, executor, trustee, fiduciary, personal representative, or family decision-maker navigating probate property, inherited real estate, trust-owned property, or an estate-related home sale in King County, Snohomish County, Pierce County, or Kitsap County, David Stein provides experienced real estate guidance grounded in market knowledge, valuation insight, and a practical understanding of important property transitions.
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
                    Discuss a Referral Opportunity
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
};

export default AttorneyReferral;
