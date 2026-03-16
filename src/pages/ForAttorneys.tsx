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
import { Phone, ArrowRight, CheckCircle, Shield, Scale, Users, MessageSquare } from "lucide-react";
import attorneyImage from "@/assets/attorney.png";

const howWeHelp = [
  {
    title: "Probate Property Sales",
    description: "When real property is part of a probate matter, the executor or personal representative faces legal timelines, court oversight, and family expectations. David provides the property assessment, pricing strategy, preparation coordination, and sale management that allow your client to fulfill their fiduciary obligations confidently — while you focus on the legal work.",
  },
  {
    title: "Trust Administration and Real Estate",
    description: "Trustees managing real property within a trust need accurate market data, clear communication with beneficiaries, and a structured path to sale. David works with trustees and their legal counsel to evaluate the property, recommend preparation steps, price it appropriately, and manage the transaction with the discretion that trust situations require.",
  },
  {
    title: "Guardianship and Conservatorship Property Sales",
    description: "When a guardian or conservator needs to sell property on behalf of a protected person, the stakes are high and the oversight is significant. David's appraisal credentials and structured process provide the documentation and market analysis that courts and interested parties expect.",
  },
  {
    title: "Senior Housing Transitions",
    description: "When an aging client needs to move from a longtime home to assisted living, memory care, or a family member's residence, the property sale is often the most financially significant part of the transition. David coordinates with families, care managers, and move professionals to handle the real estate side with sensitivity and efficiency.",
  },
  {
    title: "Preparing Estate Homes for Sale",
    description: "Most estate properties need work before they are ready for the market — cleanout, repairs, landscaping, or staging. David coordinates vendors, evaluates which improvements are worth the investment, and manages the preparation timeline so attorneys and their clients are not burdened with logistics.",
  },
  {
    title: "Valuation-Informed Pricing Strategy",
    description: "As a Washington State Certified Residential Appraiser, David brings analytical depth to pricing decisions that goes well beyond a comparative market analysis. This is especially valuable when properties have deferred maintenance, unusual features, or condition issues that make standard comparables unreliable.",
  },
  {
    title: "Multi-Party Coordination",
    description: "Estate and trust situations often involve multiple heirs, co-trustees, out-of-state family members, and legal counsel. David manages communication across all parties — providing consistent updates, fielding questions, and keeping the process moving forward without creating confusion or friction.",
  },
];

const whyRefer = [
  "Clear, professional communication with attorneys and their clients at every stage of the engagement",
  "Calm, measured handling of sensitive family dynamics, disagreements, and high-emotion situations",
  "Dual credentials — licensed broker and certified appraiser — providing analytical rigor in pricing and market positioning",
  "Coordination with transition service providers including move managers, estate sale companies, and property preparation teams",
  "Consistent, proactive support for clients during stressful, unfamiliar property transitions",
  "Deep respect for the attorney-client relationship and clear understanding of fiduciary responsibilities",
  "Willingness to speak directly with clients, family members, and other professionals — reducing your administrative burden",
  "Experience with court-supervised sales, guardianship dispositions, and situations requiring documented market analysis",
];

const processSteps = [
  {
    step: "1",
    title: "Initial Conversation",
    description: "You share the client situation — property type, legal context, timeline, and any known complications. David listens carefully and outlines how he can help without overstepping the attorney-client relationship.",
  },
  {
    step: "2",
    title: "Property Review and Assessment",
    description: "David visits the property to evaluate condition, identify preparation needs, and begin forming a realistic market perspective. He provides a written summary of findings that you and your client can review together.",
  },
  {
    step: "3",
    title: "Valuation and Pricing Discussion",
    description: "Drawing on his appraisal background, David presents pricing considerations based on the property's actual condition, comparable sales, and current market dynamics — not aspirational numbers or automated estimates.",
  },
  {
    step: "4",
    title: "Preparation Strategy and Vendor Coordination",
    description: "If the property needs cleanout, repairs, staging, or other work, David creates a preparation plan with timeline and cost estimates. He coordinates vendors directly, keeping your client informed without requiring their day-to-day involvement.",
  },
  {
    step: "5",
    title: "Marketing, Showings, and Offer Management",
    description: "Professional listing, strategic marketing, showing coordination, and thorough offer review — all managed with attention to the legal context and fiduciary duties that distinguish estate transactions from standard residential sales.",
  },
  {
    step: "6",
    title: "Communication Through Closing",
    description: "Milestone updates at key points — listing, offers, inspections, appraisal, and closing — with availability for questions throughout. David keeps you informed at the level of detail you prefer, whether that's a brief email or a detailed status call.",
  },
];

const faqs = [
  {
    question: "When should an attorney involve a real estate professional in a probate or trust matter?",
    answer: "Early involvement often prevents delays and costly missteps. When there are questions about property condition, likely value, preparation needs, or sale timing, having a knowledgeable real estate resource in place allows your client to make faster, better-informed decisions — and gives you reliable market data to support fiduciary obligations.",
  },
  {
    question: "How does David communicate with attorneys during a transaction?",
    answer: "David provides updates at key milestones — property assessment, listing, offers, and closing — and is available by phone or email for questions between updates. He understands that attorneys need concise, relevant information without unnecessary noise, and he tailors his communication style accordingly.",
  },
  {
    question: "Can David help with properties that need significant preparation before listing?",
    answer: "Yes. Many estate and inherited homes need cleanout, repairs, or staging before they are ready for the market. David coordinates vendors, evaluates which improvements offer meaningful return on investment, and manages the entire preparation process so your client does not have to.",
  },
  {
    question: "Does David provide formal appraisals for estate or probate purposes?",
    answer: "David is a Washington State Certified Residential Appraiser and can discuss valuation matters in depth. His primary role in most client engagements is as a real estate broker providing pricing strategy and sale execution. Formal appraisals are available separately when needed for court filings, tax purposes, or trust documentation.",
  },
  {
    question: "How does David handle situations where family members disagree about the property?",
    answer: "With patience, professionalism, and data. David presents objective market information that helps all parties understand the property's realistic value and the options available. His appraisal background gives him credibility when explaining pricing decisions, and his experience with multi-party situations helps him navigate disagreements without taking sides.",
  },
];

const jsonLd = articleSchema({
  headline: "Real Estate Guidance for Attorneys and Their Clients",
  description: "Real Property Planning works with attorneys and their clients when real property is involved in probate, trust administration, guardianship, estate transitions, and senior moves across Western Washington.",
  url: "/for-attorneys",
  datePublished: "2025-01-15",
  dateModified: "2026-03-16",
  about: ["Probate real estate", "Attorney referral", "Fiduciary support", "Estate property", "Trust-owned real estate", "Guardianship property sales"],
});

const ForAttorneys = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Real Estate Guidance for Attorneys & Their Clients | Real Property Planning"
        description="Real Property Planning works with attorneys and their clients when real property is involved in probate, trust administration, guardianship, estate transitions, and senior housing moves across Western Washington."
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
              <p className="text-lg text-primary-foreground/80 leading-relaxed mb-4">
                Real Property Planning works with attorneys and their clients when real property is involved in probate, trust administration, guardianship, conservatorship, estate transitions, and senior housing moves. David Stein brings dual credentials as a licensed broker and certified appraiser — offering the analytical precision, professional discretion, and structured coordination that attorneys expect from a trusted referral resource.
              </p>
              <p className="text-base text-primary-foreground/70 leading-relaxed mb-8">
                Whether your client is a first-time executor overwhelmed by the process, a trustee managing assets from out of state, or a family navigating a difficult senior transition, David provides hands-on property guidance that reduces your workload and protects your client's interests.
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
                alt="Attorneys and fiduciaries reviewing probate estate property documents with real estate guidance"
                className="w-80 xl:w-96 rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* How Valuation Experience Helps */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-4">
              How Valuation Experience Supports Better Outcomes
            </h2>
            <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed mb-6">
              Most real estate agents can provide a comparative market analysis. David Stein brings something different: over two decades of certified appraisal experience that informs every pricing recommendation, preparation decision, and negotiation strategy.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-6">
              <div className="bg-card border border-border rounded-xl p-5">
                <Scale className="w-6 h-6 text-gold mb-3" />
                <h3 className="font-serif text-base font-semibold text-foreground mb-2">Pricing Precision</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Estate properties rarely fit neatly into automated valuation models. Deferred maintenance, unusual layouts, outdated systems, and condition issues require trained judgment — not algorithms.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <Shield className="w-6 h-6 text-gold mb-3" />
                <h3 className="font-serif text-base font-semibold text-foreground mb-2">Fiduciary Confidence</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  When executors and trustees need to demonstrate that a property was sold at fair market value, David's appraisal background provides credible, defensible pricing support.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <Users className="w-6 h-6 text-gold mb-3" />
                <h3 className="font-serif text-base font-semibold text-foreground mb-2">Family Alignment</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  When heirs disagree about pricing, objective market data presented by someone with appraisal credentials carries weight that a standard agent's opinion does not.
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-[15px] leading-relaxed">
              This dual perspective — understanding both how properties are valued and how they are sold — means David can identify opportunities and risks that other agents may miss, and communicate them in terms that attorneys and their clients can act on confidently.
            </p>
          </div>
        </div>
      </section>

      {/* How Real Property Planning Helps */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-4">
              Situations Where Attorneys Involve Real Property Planning
            </h2>
            <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed mb-10">
              Attorneys involve Real Property Planning when a client's legal matter includes real property that requires professional guidance. The following are common situations where coordinated support makes a meaningful difference in outcomes, timelines, and client satisfaction.
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

      {/* Communication, Discretion, Coordination */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-4">
              Communication, Discretion, and Coordination in Fiduciary Situations
            </h2>
            <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed mb-6">
              Estate and trust property transactions are different from standard residential sales. They involve legal obligations, emotional complexity, multiple stakeholders, and situations where poor communication creates real liability. David structures every engagement with these realities in mind.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-lg text-foreground font-semibold mb-2">
                  Respecting the Attorney-Client Relationship
                </h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  David works alongside attorneys — never around them. He understands that legal counsel directs the overall matter, and he keeps attorneys informed about property developments without creating confusion about roles or decision-making authority.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground font-semibold mb-2">
                  Handling Sensitive Family Dynamics
                </h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  Grief, disagreement among heirs, estranged family members, and financial pressure are common in estate situations. David approaches these dynamics with patience and professionalism — presenting facts clearly, listening carefully, and avoiding the kind of pushy sales behavior that escalates already-stressful situations.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground font-semibold mb-2">
                  Proactive, Structured Communication
                </h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  David provides updates at meaningful milestones — not just when there's a problem. Attorneys, executors, and family members know where things stand at every stage, which reduces anxiety, prevents misunderstandings, and keeps the process moving forward efficiently.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground font-semibold mb-2">
                  Confidentiality and Professional Judgment
                </h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  David handles sensitive information with the discretion it deserves. He understands that estate matters often involve private financial details, family conflicts, and legal considerations that require careful handling — both in how information is shared and how it is documented.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Attorneys Refer */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-4">
              Why Attorneys Continue to Refer
            </h2>
            <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed mb-8">
              Attorneys who work with Real Property Planning continue to refer clients because the experience is consistently professional, organized, and low-friction — and because their clients report feeling supported rather than pressured.
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
              What the Process Looks Like When You Refer a Client
            </h2>
            <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed mb-10">
              Every situation is different, but the general workflow follows a clear, professional path designed to keep attorneys informed and clients supported throughout.
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
              Have a Client With a Property That Needs Professional Guidance?
            </h2>
            <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed mb-4 max-w-2xl mx-auto">
              Whether you are a probate attorney, estate planning counsel, elder law practitioner, or fiduciary professional — confidential conversations are always welcome. David will follow up promptly to discuss the situation and how Real Property Planning can support your client.
            </p>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-8 max-w-2xl mx-auto">
              Real Property Planning works with attorneys, fiduciaries, CPAs, financial planners, and senior living professionals throughout King, Snohomish, Pierce, Kitsap, and Skagit counties.
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
