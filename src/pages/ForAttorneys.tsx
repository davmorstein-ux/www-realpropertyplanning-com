import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import PageFAQ from "@/components/PageFAQ";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, ArrowRight, MapPin, Shield, Users, Scale } from "lucide-react";
import attorneyImage from "@/assets/attorney.png";

const whenToRefer = [
  "A probate property needs to be evaluated, prepared, and sold",
  "A trust-owned home requires market analysis before a distribution or sale decision",
  "An inherited property has deferred maintenance, cleanout needs, or condition concerns",
  "Family members or co-heirs disagree about timing, pricing, or sale strategy",
  "A fiduciary needs a reliable, professional resource for the real estate side of a matter",
  "A senior client's housing transition involves selling a longtime home",
];

const howISupport = [
  "Provide honest property assessments — condition, value, and realistic sale expectations",
  "Coordinate preparation, cleanout, repairs, and staging without burdening your client",
  "Communicate directly with executors, trustees, family members, and other parties",
  "Offer pricing insight informed by certified appraisal experience",
  "Manage the listing, marketing, negotiation, and closing process from start to finish",
  "Keep you informed at key milestones without unnecessary noise",
];

const commonSituations = [
  {
    title: "Probate Property Sales",
    description: "Properties requiring legal authority to sell, often with deferred maintenance, occupancy concerns, or family coordination needs.",
  },
  {
    title: "Trust-Owned Real Estate",
    description: "Homes held in revocable or irrevocable trusts where the trustee needs market guidance, valuation perspective, or a full sale plan.",
  },
  {
    title: "Inherited Homes With Multiple Heirs",
    description: "Situations involving disagreement, distance, or uncertainty about how to handle a family property.",
  },
  {
    title: "Senior Transition Homes",
    description: "Longtime residences where a move to assisted living or a family member's care requires a thoughtful, well-timed sale.",
  },
];

const faqs = [
  {
    question: "When should an attorney involve a real estate professional in a probate or trust matter?",
    answer: "Early involvement often prevents delays. When there are questions about property condition, likely value, preparation needs, or sale timing, a knowledgeable real estate resource can help your client make faster, better-informed decisions.",
  },
  {
    question: "How does David communicate with attorneys during a transaction?",
    answer: "David provides updates at key milestones — property assessment, listing, offers, and closing — and is available by phone or email for questions between updates. He understands the importance of keeping legal counsel informed without creating unnecessary complexity.",
  },
  {
    question: "Can David help with properties that need significant preparation?",
    answer: "Yes. Many estate and inherited homes need cleanout, repairs, or staging before they are ready for the market. David coordinates vendors, evaluates which improvements are worth the investment, and manages the process so your client doesn't have to.",
  },
  {
    question: "Does David provide formal appraisals?",
    answer: "David is a Washington state certified residential appraiser and can discuss valuation matters in depth. His primary role in most client engagements is as a real estate broker providing pricing strategy and sale execution. Formal appraisals are available separately when needed.",
  },
];

const jsonLd = articleSchema({
  headline: "Probate Real Estate Resource for Attorneys & Fiduciaries",
  description: "David Stein provides probate real estate guidance, inherited property sales support, and practical coordination for estate planning attorneys, probate attorneys, elder law professionals, and fiduciaries across Western Washington.",
  url: "/for-attorneys",
  datePublished: "2025-01-15",
  dateModified: "2026-03-15",
  about: ["Probate real estate", "Attorney referral", "Fiduciary support", "Estate property", "Trust-owned real estate"],
});

const ForAttorneys = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Probate Real Estate Resource for Attorneys & Fiduciaries | Real Property Planning"
        description="When your client has a property tied to probate, a trust, or an estate, David Stein handles the real estate side — assessment, preparation, pricing, and sale — so you can focus on the legal work."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "For Attorneys & Fiduciaries", url: "/for-attorneys" }]} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-12 lg:pt-32 lg:pb-28">
        <div className="container px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-bold tracking-widest uppercase mb-4 text-base">
                For Attorneys & Fiduciaries
              </p>
              <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
                A Real Estate Partner You Can Refer With Confidence
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed mb-4">
                Attorneys refer clients to David Stein because he understands what they need: a real estate professional who can assess a property honestly, communicate with multiple parties without creating complications, price the home accurately, and manage the sale from start to finish — all while keeping legal counsel informed at the right moments.
              </p>
              <p className="text-lg text-primary-foreground/70 leading-relaxed mb-8">
                Unlike a general listing agent, David holds both a broker license and a state certified appraiser credential, giving him the analytical precision and market knowledge that estate, probate, and elder law situations require. Over 20 years of focused experience means fewer surprises and better outcomes for your clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold w-full sm:w-auto">
                    <Phone className="w-5 h-5 mr-2" />
                    Discuss a Referral
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-gold/50 bg-transparent text-gold hover:bg-gold hover:text-foreground focus-visible:ring-gold w-full sm:w-auto">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Schedule a Consultation
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <img src={attorneyImage} alt="Professional attorneys reviewing estate documents" className="w-80 xl:w-96 rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* When to Refer a Client */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              When to Refer a Client
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Consider involving Real Property Planning when a client's property situation includes any of the following:
            </p>
            <ul className="space-y-4">
              {whenToRefer.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How I Support Attorneys and Their Clients */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              How I Support Attorneys and Their Clients
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              David handles the real estate side so you can focus on the legal side. Here is what that looks like in practice:
            </p>
            <ul className="space-y-4">
              {howISupport.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why My Background Matters */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Why My Background Matters
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <Scale className="w-8 h-8 text-gold mx-auto mb-3" />
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Dual Credentials</h3>
                <p className="text-muted-foreground text-sm">Licensed broker and state certified appraiser — a combination that provides deeper insight into pricing and value.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <Shield className="w-8 h-8 text-gold mx-auto mb-3" />
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">20+ Years Focused</h3>
                <p className="text-muted-foreground text-sm">Two decades of experience in real estate and valuation, with a focus on estate, probate, and trust property situations.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <Users className="w-8 h-8 text-gold mx-auto mb-3" />
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Professional Discretion</h3>
                <p className="text-muted-foreground text-sm">Experienced in working alongside attorneys, trustees, and families during sensitive and high-stakes transitions.</p>
              </div>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Most agents can sell a house. Few understand the dynamics of estate settlement — legal timelines, fiduciary duties, family tension, and the importance of accurate valuation. That understanding is what sets this practice apart and why attorneys continue to refer with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Common Property Situations I Help Resolve */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-8">
              Common Property Situations I Help Resolve
            </h2>
            <div className="space-y-6">
              {commonSituations.map((situation, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-serif text-lg text-foreground font-semibold mb-2">{situation.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{situation.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageFAQ faqs={faqs} heading="Questions Attorneys Commonly Ask" eyebrow="FAQ" />

      {/* Service Area */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <MapPin className="w-10 h-10 text-gold mb-6" />
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Serving Attorneys Throughout Western Washington
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              David works with attorneys and fiduciaries across <Link to="/counties/king" className="text-accent hover:text-gold underline underline-offset-4">King</Link>, <Link to="/counties/snohomish" className="text-accent hover:text-gold underline underline-offset-4">Snohomish</Link>, <Link to="/counties/pierce" className="text-accent hover:text-gold underline underline-offset-4">Pierce</Link>, and <Link to="/counties/kitsap" className="text-accent hover:text-gold underline underline-offset-4">Kitsap</Link> Counties.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether the property is in downtown Seattle, suburban Bellevue, or a smaller community across the region, David brings local market knowledge and consistent professionalism to every engagement.
            </p>
          </div>
        </div>
      </section>

      <RelatedServices currentPath="/for-attorneys" />

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              Have a client with a property that needs professional guidance?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold w-full sm:w-auto">
                  <Phone className="w-5 h-5 mr-2" />
                  Discuss a Referral
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-gold/50 bg-transparent text-gold hover:bg-gold hover:text-foreground focus-visible:ring-gold w-full sm:w-auto">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
            <p className="text-primary-foreground/70 text-lg leading-relaxed">
              Confidential consultations are always welcome. David will follow up promptly to discuss the situation and how he can help.
            </p>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default ForAttorneys;
