import GoldCheck3D from "@/components/GoldCheck3D";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconResources from "@/assets/icons/probate-estate-resources-icon-washington.webp";

const whoIWorkWith = [
  {
    title: "Estate Planning and Probate Attorneys",
    text: "Real Property Planning works with attorneys whose clients face real property decisions during probate, trust administration, guardianship, or conservatorship. He provides the property assessment, pricing guidance, and sale coordination that allow attorneys to focus on the legal matter — confident that the real estate side is handled with professionalism and discretion.",
  },
  {
    title: "Personal Representatives and Executors",
    text: "Most executors are managing an estate for the first time. Real Property Planning walks them through the real estate process step by step — from property evaluation to preparation, pricing, and closing — with clear communication and practical guidance that reduces stress and prevents costly mistakes.",
  },
  {
    title: "Trustees and Fiduciaries",
    text: "Trustees managing trust-owned real estate need accurate market data, honest condition assessments, and a structured path to sale. Real Property Planning provides valuation-informed pricing and professional coordination that supports fiduciary obligations and keeps beneficiaries informed.",
  },
  {
    title: "CPAs and Financial Professionals",
    text: "When estate property decisions intersect with tax planning, capital gains considerations, or financial advisory work, Real Property Planning provides the real estate and valuation perspective that helps CPAs and financial advisors give their clients well-rounded guidance.",
  },
  {
    title: "Senior Move Managers and Transition Professionals",
    text: "Real Property Planning works with senior move managers and care professionals who need a reliable real estate partner for clients transitioning out of longtime homes. He coordinates seamlessly with transition teams, handling property preparation and sale while the care side focuses on the client's wellbeing.",
  },
  {
    title: "Families Handling Inherited or Transition-Related Property",
    text: "Whether the situation involves an inherited home, a parent moving to assisted living, or siblings coordinating from different states, Real Property Planning provides the steady, experienced guidance that helps families make informed decisions during an emotional and unfamiliar process.",
  },
];

const whyRefer = [
  {
    title: "Real Estate Broker and State-Certified Appraiser Perspective",
    text: "Real Property Planning holds dual credentials that few real estate professionals carry. The appraisal background informs every pricing recommendation and preparation decision — providing analytical depth that protects estate value and supports fiduciary obligations.",
  },
  {
    title: "Calm, Practical Guidance in Sensitive Situations",
    text: "Estate and transition-related property decisions often involve grief, family conflict, financial pressure, and uncertainty. Real Property Planning approaches every engagement with patience, professionalism, and a measured pace that respects the weight of the circumstances.",
  },
  {
    title: "Clear Communication Throughout the Process",
    text: "Referring professionals and their clients receive consistent updates at meaningful milestones — not just when problems arise. Our team communicates in plain language, keeps all parties informed, and is available for questions between scheduled updates.",
  },
  {
    title: "Help Coordinating Vendors, Cleanout, Repairs, and Preparation",
    text: "Many estate and transition properties need significant work before they are ready for the market. Our team coordinates the entire preparation process — scheduling vendors, overseeing cleanout, managing repairs, and evaluating which improvements are worth the investment.",
  },
  {
    title: "Respect for Family Dynamics and Fiduciary Responsibilities",
    text: "Our team understands that estate and trust situations involve legal obligations, emotional complexity, and multiple stakeholders with different perspectives. He navigates these dynamics with care — presenting facts clearly, listening carefully, and never taking sides.",
  },
  {
    title: "Local Knowledge of Washington State Markets",
    text: "Our team serves clients throughout Washington State — with detailed knowledge of neighborhood-level pricing patterns, buyer expectations, and the practical realities of selling estate properties in each market.",
  },
];

const referralSituations = [
  "Probate property sales requiring court-aware coordination and fiduciary-level pricing",
  "Trust and estate-related real estate decisions where accurate valuation matters",
  "Inherited homes where heirs need guidance on preparation, pricing, and sale strategy",
  "Senior downsizing and transition moves involving longtime family residences",
  "Properties with deferred maintenance or condition issues that affect value and marketability",
  "Homes that need cleanout, repair coordination, or preparation before listing",
  "Families who need help understanding their property's value and realistic options",
  "Out-of-area heirs or decision-makers who need local, hands-on coordination",
];

const processSteps = [
  { title: "Initial Confidential Conversation", text: "A private discussion about the property, the people involved, and the circumstances — with no obligation and no pressure." },
  { title: "Property and Situation Review", text: "An in-person assessment of the home's condition, location, and any factors that affect value, timeline, or preparation needs." },
  { title: "Valuation-Informed Pricing Discussion", text: "A realistic pricing perspective grounded in certified appraisal experience — not automated estimates or aspirational numbers." },
  { title: "Preparation, Cleanout, and Repair Strategy", text: "A clear plan for getting the property market-ready, including vendor coordination and cost-benefit analysis of potential improvements." },
  { title: "Listing, Marketing, Negotiation, and Closing", text: "Professional marketing, thorough offer evaluation, skilled negotiation, and attentive transaction management through closing day." },
  { title: "Consistent Communication From Start to Finish", text: "Regular updates to all stakeholders — the referring professional, the client, family members, and legal counsel — so everyone stays informed." },
];

const goodFit = [
  "The client needs both real estate guidance and valuation insight",
  "The property is part of a probate, trust, or estate matter",
  "The family needs practical help coordinating next steps for a property",
  "The home may need repairs, cleanout, staging, or other preparation",
  "The decision-makers are overwhelmed and need a steady, experienced guide",
  "A professional wants a trusted real estate resource for property situations throughout Washington State",
];

const jsonLd = articleSchema({
  headline: "A Professional Real Estate Resource for Important Property Transitions",
  description: "A trusted real estate resource for attorneys, fiduciaries, and professionals helping clients with probate, estate, inherited property, and senior transition decisions.",
  url: "/professional-referral-resource",
  datePublished: "2026-03-16",
  dateModified: "2026-03-16",
  about: ["Professional referral", "Probate real estate", "Estate property", "Fiduciary support", "Senior transitions", "Inherited property"],
});

const ProfessionalReferralResource = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Professional Referral Resource | Real Property Planning"
        description="A trusted real estate resource for attorneys, fiduciaries, and professionals helping clients with probate, estate, inherited property, and senior transition decisions."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "Professional Referral Resource", url: "/professional-referral-resource" }]} />
      <Header />
      <main id="main-content">

      {/* Hero */}
      <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <img src={iconResources} alt="" aria-hidden="true" className="mx-auto max-w-[15rem] w-full h-auto object-contain mb-1.5"  loading="lazy"/>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] text-primary-foreground font-semibold leading-tight mb-6">
              A Professional Real Estate Resource for Important Property Transitions
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-4">
              Real estate guidance for attorneys, fiduciaries, executors, trustees, seniors, and families navigating probate, estate property sales, inherited homes, and major housing transitions throughout Washington State.
            </p>
            <p className="text-base text-primary-foreground/70 leading-relaxed mb-3">
              Real Property Planning is a licensed real estate brokerage with state-certified residential appraisal expertise, helping clients make informed property decisions during complex and often emotional transitions. We work closely with professional referral partners who want their clients served with care, discretion, responsiveness, and practical follow-through.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
 <Button variant="gold" size="lg"className="hover:-light w-full sm:w-auto px-8 h-[52px] text-base rounded-lg">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>
                  Schedule a Confidential Conversation
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline3d" className="border-gold/50 bg-transparent text-gold hover:bg-gold hover:text-foreground focus-visible:ring-gold w-full sm:w-auto px-8 h-[52px] text-base rounded-lg">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Who I Work With */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-10">
              Who I Work With
            </h2>
            <div className="space-y-5">
              {whoIWorkWith.map((item) => (
                <div key={item.title} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-serif text-lg text-foreground font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Professionals Refer */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-10">
              Why Professionals Choose to Refer Clients Here
            </h2>
            <div className="space-y-6">
              {whyRefer.map((item) => (
                <div key={item.title}>
                  <h3 className="font-serif text-lg text-foreground font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Referral Situations */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-4">
              Common Referral Situations
            </h2>
            <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed mb-8">
              Professional partners refer clients to Real Property Planning when the situation involves complexity, sensitivity, or the need for both real estate and valuation expertise. Common referral situations include:
            </p>
            <ul className="space-y-4">
              {referralSituations.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                  <span className="text-muted-foreground text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-[900px] mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-10">
              What to Expect
            </h2>
            <div className="grid gap-5 lg:gap-6">
              {processSteps.map((step, index) => (
                <div key={step.title} className="bg-card border border-border rounded-[18px] px-7 py-7 md:px-9 md:py-8 flex gap-5 md:gap-7 items-start">
                  <span className="text-muted-foreground/30 font-serif text-3xl md:text-4xl font-semibold leading-none pt-1 select-none shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl md:text-[22px] text-foreground font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-[1.75]">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Referral Partner Promise */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-6">
              My Commitment to Referral Partners
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              When you refer a client to Real Property Planning, that referral reflects your professional judgment and your relationship with the client. Our team treats every referral accordingly — with responsiveness, discretion, and the kind of thorough follow-through that reinforces your credibility.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              The goal is straightforward: serve your client well, communicate clearly with everyone involved, handle the process responsibly, and make you confident in recommending this resource again. That means no surprises, no pressure tactics, and no shortcuts — just experienced, principled real estate guidance delivered with the professionalism your clients deserve.
            </p>
          </div>
        </div>
      </section>

      {/* When This Is a Good Fit */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-4">
              When This Resource Is a Good Fit
            </h2>
            <p className="text-muted-foreground text-base md:text-[17px] leading-relaxed mb-8">
              Real Property Planning is especially well-suited when:
            </p>
            <ul className="space-y-4">
              {goodFit.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <GoldCheck3D size={20} className="mt-0.5" />
                  <span className="text-foreground text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-4">
              Learn More About How our team Helps
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Explore these pages for additional detail on specific situations and services.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/for-attorneys", label: "For Attorneys", desc: "How Real Property Planning works with attorneys on probate, trust, and estate property matters." },
                { href: "/executors", label: "For Executors & Trustees", desc: "Step-by-step guidance for personal representatives managing estate property." },
                { href: "/probate-estate-sales", label: "Probate & Estate Sales", desc: "Overview of probate and estate-related real estate services." },
                { href: "/how-the-process-works", label: "How the Process Works", desc: "A seven-step process from consultation through closing and beyond." },
                { href: "/why-valuation-matters", label: "Why Valuation Matters", desc: "How appraisal experience prevents costly pricing mistakes." },
                { href: "/senior-transitions", label: "Senior Transitions", desc: "Support for families navigating downsizing and housing transitions." },
                { href: "/counties", label: "Counties & Service Areas", desc: "Local expertise throughout Washington State." },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="card-3d group p-5"
                >
                  <h3 className="font-serif text-base font-semibold text-foreground group-hover:text-accent transition-colors mb-1">
                    {link.label}
                  </h3>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">
                    {link.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-primary-foreground font-semibold mb-4">
              Let's Talk Through the Situation
            </h2>
            <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              If you have a client, family, or estate-related property situation that would benefit from experienced real estate and valuation guidance, I welcome the opportunity to have a confidential conversation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
 <Button variant="gold" size="lg"className="hover:-light w-full sm:w-auto px-8 h-[52px] text-base rounded-lg">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>
                  Schedule a Confidential Conversation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline3d" className="border-gold/50 bg-transparent text-gold hover:bg-gold hover:text-foreground focus-visible:ring-gold w-full sm:w-auto px-8 h-[52px] text-base rounded-lg">
                  Contact Real Property Planning
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default ProfessionalReferralResource;
