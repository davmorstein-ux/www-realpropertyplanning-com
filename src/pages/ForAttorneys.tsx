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
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import attorneyImage from "@/assets/attorney.png";

const howWeHelp = [
  {
    title: "Probate Property Sales",
    description: "Guiding properties through the sale process when legal authority, court timelines, and family coordination are factors.",
  },
  {
    title: "Inherited Homes",
    description: "Providing market insight, preparation strategy, and sale management for properties passed to heirs or beneficiaries.",
  },
  {
    title: "Trust-Owned Property",
    description: "Supporting trustees with honest property assessments, pricing guidance, and a structured sale plan for trust-held real estate.",
  },
  {
    title: "Senior Housing Transitions",
    description: "Working with families when a move to assisted living, memory care, or a family member's home requires selling a longtime residence.",
  },
  {
    title: "Preparing a Home for Sale",
    description: "Coordinating cleanout, repairs, staging, and vendor management so your client is not burdened with property preparation logistics.",
  },
  {
    title: "Valuation-Related Guidance",
    description: "Offering pricing insight informed by certified appraisal experience, giving attorneys and their clients a clearer picture of market value.",
  },
  {
    title: "Coordinating Service Providers",
    description: "Managing relationships with move managers, estate sale companies, cleanout crews, and other professionals involved in the transition.",
  },
];

const whyRefer = [
  "Clear, professional communication with attorneys and their clients at every stage",
  "Calm, measured handling of sensitive family dynamics and high-emotion situations",
  "Real estate and valuation insight from dual credentials — licensed broker and certified appraiser",
  "Coordination with transition service providers including move managers, estate sale companies, and property preparation teams",
  "Consistent support for clients during stressful, unfamiliar property transitions",
  "Respect for the attorney-client relationship and understanding of fiduciary responsibilities",
];

const processSteps = [
  {
    step: "1",
    title: "Initial Conversation",
    description: "We discuss the client's situation, property details, and any considerations related to the legal matter.",
  },
  {
    step: "2",
    title: "Property Review",
    description: "A thorough assessment of the property's condition, market position, and preparation needs.",
  },
  {
    step: "3",
    title: "Coordination With Client and Family",
    description: "Direct communication with executors, trustees, family members, and other involved parties — keeping you informed without adding complexity.",
  },
  {
    step: "4",
    title: "Preparation Strategy",
    description: "A clear plan for cleanout, repairs, staging, or other steps needed to position the property for the best possible outcome.",
  },
  {
    step: "5",
    title: "Marketing and Sale Process",
    description: "Professional listing, marketing, showing coordination, negotiation, and offer management — handled from start to finish.",
  },
  {
    step: "6",
    title: "Communication Through Closing",
    description: "Milestone updates at key points — listing, offers, inspections, and closing — with availability for questions throughout.",
  },
];

const faqs = [
  {
    question: "When should an attorney involve a real estate professional in a probate or trust matter?",
    answer: "Early involvement often prevents delays. When there are questions about property condition, likely value, preparation needs, or sale timing, a knowledgeable real estate resource can help your client make faster, better-informed decisions.",
  },
  {
    question: "How does Real Property Planning communicate with attorneys during a transaction?",
    answer: "We provide updates at key milestones — property assessment, listing, offers, and closing — and are available by phone or email for questions between updates. We understand the importance of keeping legal counsel informed without creating unnecessary complexity.",
  },
  {
    question: "Can Real Property Planning help with properties that need significant preparation?",
    answer: "Yes. Many estate and inherited homes need cleanout, repairs, or staging before they are ready for the market. We coordinate vendors, evaluate which improvements are worth the investment, and manage the process so your client does not have to.",
  },
  {
    question: "Does Real Property Planning provide formal appraisals?",
    answer: "David Stein is a Washington State Certified Residential Appraiser and can discuss valuation matters in depth. His primary role in most client engagements is as a real estate broker providing pricing strategy and sale execution. Formal appraisals are available separately when needed.",
  },
];

const jsonLd = articleSchema({
  headline: "Real Estate Guidance for Attorneys and Their Clients",
  description: "Real Property Planning works with attorneys and their clients when real property is involved in probate, trust administration, estate transitions, senior moves, and other significant life changes.",
  url: "/for-attorneys",
  datePublished: "2025-01-15",
  dateModified: "2026-03-16",
  about: ["Probate real estate", "Attorney referral", "Fiduciary support", "Estate property", "Trust-owned real estate"],
});

const ForAttorneys = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Real Estate Guidance for Attorneys & Their Clients | Real Property Planning"
        description="Real Property Planning works with attorneys and their clients when real property is involved in probate, trust administration, estate transitions, and senior housing moves across Western Washington."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "For Attorneys", url: "/for-attorneys" }]} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-12 lg:pt-28 lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-bold tracking-widest uppercase mb-4 text-sm">
                For Attorneys &amp; Fiduciaries
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] text-primary-foreground font-semibold leading-tight mb-6">
                Real Estate Guidance for Attorneys and Their Clients
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
                Real Property Planning works with attorneys and their clients when real property is involved in probate, trust administration, estate transitions, senior moves, and other significant life changes. With dual credentials as a licensed broker and certified appraiser, David Stein brings the analytical precision and professional discretion that attorneys expect from a trusted referral resource.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold w-full sm:w-auto px-8 h-[52px] text-base rounded-lg">
                    <Phone className="w-5 h-5 mr-2" />
                    Connect About a Client Situation
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <img
                src={attorneyImage}
                alt="Professional attorneys reviewing estate property documents"
                className="w-80 xl:w-96 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* How Real Property Planning Helps */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-4">
              How Real Property Planning Helps
            </h2>
            <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed mb-10">
              Attorneys involve Real Property Planning when a client's situation includes real property that requires professional guidance. The following are common situations where coordinated support makes a meaningful difference.
            </p>
            <div className="space-y-5">
              {howWeHelp.map((item) => (
                <div key={item.title} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-serif text-lg text-foreground font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Attorneys Refer */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-4">
              Why Attorneys Refer
            </h2>
            <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed mb-8">
              Attorneys who work with Real Property Planning continue to refer clients because the experience is consistently professional, organized, and low-friction.
            </p>
            <ul className="space-y-4">
              {whyRefer.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <span className="text-foreground text-[15px] md:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What the Process Can Look Like */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-4">
              What the Process Can Look Like
            </h2>
            <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed mb-10">
              Every situation is different, but the general workflow follows a clear, professional path designed to keep attorneys informed and clients supported.
            </p>
            <div className="space-y-6">
              {processSteps.map((step) => (
                <div key={step.step} className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="text-primary-foreground font-semibold text-sm">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground font-semibold mb-1">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-[15px] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageFAQ faqs={faqs} heading="Questions Attorneys Commonly Ask" eyebrow="FAQ" />

      {/* Related Resources */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-4">
              Related Resources
            </h2>
            <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed mb-8">
              Explore additional pages that may be relevant to the situations your clients face.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/executors", label: "For Executors & Trustees", desc: "A step-by-step guide for personal representatives managing estate property." },
                { href: "/senior-transitions", label: "Senior Transitions", desc: "Support for families navigating a move from a longtime home." },
                { href: "/resources", label: "Resource Directory", desc: "Trusted professionals who assist with transitions across Western Washington." },
                { href: "/how-to-move-elderly-parents", label: "Moving Elderly Parents", desc: "A compassionate guide for families planning a senior housing transition." },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="group bg-card border border-border rounded-xl p-5 hover:border-gold/40 hover:shadow-md transition-all"
                >
                  <h3 className="font-serif text-base font-semibold text-foreground group-hover:text-accent transition-colors mb-1">
                    {link.label}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {link.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-primary-foreground font-semibold mb-4">
              Have a client with a property that needs professional guidance?
            </h2>
            <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Confidential conversations are always welcome. Real Property Planning will follow up promptly to discuss the situation and how we can help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-light text-foreground font-semibold w-full sm:w-auto px-8 h-[52px] text-base rounded-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Connect About a Client Situation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-gold/50 bg-transparent text-gold hover:bg-gold hover:text-foreground focus-visible:ring-gold w-full sm:w-auto px-8 h-[52px] text-base rounded-lg">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Schedule a Consultation
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

export default ForAttorneys;
