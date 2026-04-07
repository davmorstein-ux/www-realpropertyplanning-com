import GoldCheck3D from "@/components/GoldCheck3D";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import PageFAQ from "@/components/PageFAQ";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";
import ServicePageNav from "@/components/ServicePageNav";

const whatTheyDo = [
  "Reviewing or drafting purchase and sale agreements",
  "Resolving title issues or ownership disputes",
  "Assisting with easements, boundary matters, or encroachments",
  "Handling contract disputes",
  "Advising on landlord-tenant matters",
  "Helping with partnership, inheritance, or trust-related property questions",
  "Supporting litigation or settlement negotiations involving real estate",
];

const whenHelpful = [
  "Ownership is unclear",
  "Multiple parties disagree about what should happen with a property",
  "A title issue creates delays or uncertainty",
  "A contract problem has developed",
  "There is a dispute involving heirs, trusts, tenants, neighbors, or business partners",
  "A sale or transfer involves unusual legal complexity",
  "A client wants added legal review before making a major decision",
];

const howWeHelp = [
  "Property valuation insight",
  "Pricing strategy",
  "Market analysis",
  "Sale preparation recommendations",
  "Coordination with attorneys, fiduciaries, and family members",
  "Help navigating the practical steps required before a property is sold",
];

const commonSituations = [
  "Property disputes between family members",
  "Inherited homes with ownership complications",
  "Trust or estate property questions",
  "Title defects that must be resolved before sale",
  "Boundary or access disputes",
  "Partition actions or co-owner disagreements",
  "Landlord-tenant conflicts affecting sale timing",
  "Contract or disclosure disagreements",
  "Commercial or mixed-use property issues",
  "Real estate matters involving litigation or settlement",
];

const faqs = [
  {
    question: "Do you provide legal advice?",
    answer:
      "No. Real Property Planning does not provide legal advice. When legal questions arise, clients should consult a qualified real estate attorney. David Stein helps with the real estate, valuation, and practical property side of the situation.",
  },
  {
    question: "When should I contact a real estate attorney?",
    answer:
      "A real estate attorney may be helpful when a property matter involves contracts, disputes, title problems, ownership questions, easements, litigation, or other legal complexity.",
  },
  {
    question: "Can a real estate attorney help with title or ownership issues?",
    answer:
      "Yes. Real estate attorneys often help clients address title problems, ownership disputes, deed questions, easements, boundary issues, and other legal matters tied to property rights.",
  },
  {
    question: "Can you work with my attorney?",
    answer:
      "Yes. Real Property Planning can work alongside your attorney and other advisors to help with pricing, valuation insight, sale preparation, and practical coordination related to the property.",
  },
  {
    question: "Do all real estate transactions need an attorney?",
    answer:
      "Not always. Many transactions do not require one. However, when legal complexity arises, an attorney can be an important part of the team.",
  },
];

const ForRealEstateAttorneys = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Real Estate Attorneys | Real Property Planning"
      description="Learn how real estate attorneys can help with contracts, title issues, disputes, transactions, and complex property matters. Real Property Planning works alongside attorneys to support informed real estate decisions."
    />
    <BreadcrumbSchema
      items={[
        { name: "For Attorneys", url: "/for-attorneys" },
        { name: "Real Estate Attorneys", url: "/real-estate-attorneys" },
      ]}
    />
    <Header />

    {/* Hero */}
    <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
            For Real Estate Attorneys
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            Real Estate Attorneys
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-4">
            Helping clients navigate contracts, title issues, disputes, transactions, and important real estate decisions with the right legal guidance.
          </p>
          <p className="text-base md:text-lg text-primary-foreground/60 leading-relaxed mb-8">
            Need help with a property issue involving legal questions? Let's talk through the situation.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="lg" className="px-7 py-4 h-auto rounded-lg">
              <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Intro */}
    <section className="py-16 lg:py-20 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Real estate matters are not always straightforward. In some situations, clients benefit from the support of a real estate attorney, especially when legal documents, title concerns, ownership questions, or disputes are involved.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Real Property Planning works alongside trusted professionals so clients can move forward with clarity and confidence.
          </p>
        </div>
      </div>
    </section>

    {/* What Does a Real Estate Attorney Do? */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
            What Does a Real Estate Attorney Do?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            A real estate attorney helps clients address legal issues connected to property ownership, contracts, transactions, and disputes. Their role can vary depending on the situation, but they are often called upon when a matter goes beyond the scope of a standard real estate transaction.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Common areas where a real estate attorney may help include:
          </p>
          <ul className="space-y-4">
            {whatTheyDo.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <GoldCheck3D size={20} className="mt-0.5 shrink-0" />
                <span className="text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* When a Real Estate Attorney May Be Helpful */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
            When a Real Estate Attorney May Be Helpful
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Some real estate situations involve more than pricing, marketing, or transaction coordination. Legal guidance may be especially important when:
          </p>
          <ul className="space-y-4">
            {whenHelpful.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <GoldCheck3D size={20} className="mt-0.5 shrink-0" />
                <span className="text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* How Real Property Planning Works Alongside Real Estate Attorneys */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
            How Real Property Planning Works Alongside Real Estate Attorneys
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Real Property Planning does not provide legal advice. Instead, David Stein works alongside attorneys and other trusted professionals to help clients understand the real estate side of the decision.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            That may include:
          </p>
          <ul className="space-y-4">
            {howWeHelp.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <GoldCheck3D size={20} className="mt-0.5 shrink-0" />
                <span className="text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground text-lg leading-relaxed mt-8">
            This collaborative approach can be especially valuable when a property decision involves both legal and market-related considerations.
          </p>
        </div>
      </div>
    </section>

    {/* Why This Matters */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
            Why This Matters
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            When legal and real estate issues intersect, clients often need both sound legal guidance and practical property expertise. Having the right professionals involved early can help reduce confusion, avoid delays, and support better decisions.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Real Property Planning helps clients understand the property itself, the market, and the practical path forward, while legal counsel can advise on rights, risks, obligations, and legal strategy.
          </p>
        </div>
      </div>
    </section>

    {/* Common Situations */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-8">
            Common Situations Where Clients May Need Both Attorney and Real Estate Guidance
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {commonSituations.map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl px-6 py-5">
                <div className="flex items-start gap-3">
                  <GoldCheck3D size={20} className="mt-0.5 shrink-0" />
                  <span className="text-foreground leading-relaxed">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* A Calm, Practical Starting Point */}
    <section className="py-16 lg:py-20 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-5">
            A Calm, Practical Starting Point
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Many clients are not sure whether they need a real estate attorney, a real estate professional, or both. That is understandable. In many cases, the first step is simply understanding the situation clearly.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            David Stein helps clients think through the real estate side of complex property matters and works professionally with <Link to="/for-attorneys" className="text-primary underline hover:no-underline">attorneys</Link> and other advisors when needed.
          </p>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 lg:py-28 bg-primary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-5">
            Need Help Navigating a Complex Property Situation?
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
            If your real estate situation involves legal questions, title concerns, ownership issues, or added complexity, Real Property Planning can help you think through the next steps and coordinate with the right professionals.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="lg">
              <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
              Schedule a Consultation
            </Button>
          </Link>
          <p className="text-primary-foreground/50 text-sm mt-4">No pressure. Just practical guidance.</p>
        </div>
      </div>
    </section>

    <PageFAQ
      faqs={faqs}
      heading="Frequently Asked Questions About Real Estate Attorneys"
    />

    {/* Internal links section */}
    <section className="py-14 lg:py-20 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-serif text-xl text-foreground font-semibold mb-6">Related Resources</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/for-attorneys" className="text-primary underline hover:no-underline">For Attorneys &amp; Fiduciaries</Link>
              <span className="text-muted-foreground"> — How David supports attorneys with real estate during probate and estate matters.</span>
            </li>
            <li>
              <Link to="/probate-estate-sales" className="text-primary underline hover:no-underline">Probate &amp; Estate Sales</Link>
              <span className="text-muted-foreground"> — Guidance for families and fiduciaries navigating property sales during probate.</span>
            </li>
            <li>
              <Link to="/executors" className="text-primary underline hover:no-underline">For Executors</Link>
              <span className="text-muted-foreground"> — A clear roadmap for executors managing estate real property in Washington State.</span>
            </li>
            <li>
              <Link to="/why-valuation-matters" className="text-primary underline hover:no-underline">Why Valuation Matters</Link>
              <span className="text-muted-foreground"> — Understanding the role of accurate property valuation in estate and transition planning.</span>
            </li>
            <li>
              <Link to="/contact" className="text-primary underline hover:no-underline">Contact David</Link>
              <span className="text-muted-foreground"> — Start a confidential conversation about your property situation.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <RelatedServices currentPath="/real-estate-attorneys" />
    <ServicePageNav />
    <DisclaimerSection />
    <Footer />
  </div>
);

export default ForRealEstateAttorneys;
