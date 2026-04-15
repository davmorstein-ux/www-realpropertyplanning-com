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
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconRealEstateAttorney from "@/assets/icons/real-estate-attorney-services-icon-washington.webp";

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
  "Property valuation insight — condition-adjusted market analysis from a certified appraisal perspective",
  "Pricing strategy — positioning the property accurately for current market conditions in the specific neighborhood",
  "Market analysis — comparable sales data and market trend context to support legal proceedings or settlement negotiations",
  "Sale preparation recommendations — honest assessment of what to address before listing and what to leave",
  "Vendor coordination — connecting clients with trusted local professionals for cleanout, repairs, and staging",
  "Full sale management — listing, marketing, showings, negotiation, and closing coordination",
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
    answer: "No. Real Property Planning does not provide legal advice. When legal questions arise, clients should consult a qualified real estate attorney. Real Property Planning helps with the real estate, valuation, and practical property side of the situation.",
  },
  {
    question: "When should I contact a real estate attorney?",
    answer: "A real estate attorney may be helpful when a property matter involves contracts, disputes, title problems, ownership questions, easements, litigation, or other legal complexity.",
  },
  {
    question: "Can a real estate attorney help with title or ownership issues?",
    answer: "Yes. Real estate attorneys often help clients address title problems, ownership disputes, deed questions, easements, boundary issues, and other legal matters tied to property rights.",
  },
  {
    question: "Can you work with my attorney?",
    answer: "Yes. Real Property Planning can work alongside your attorney and other advisors to help with pricing, valuation insight, sale preparation, and practical coordination related to the property.",
  },
  {
    question: "Do all real estate transactions need an attorney?",
    answer: "Not always. Many transactions do not require one. However, when legal complexity arises, an attorney can be an important part of the team.",
  },
];

const ForRealEstateAttorneys = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Real Estate Brokerage Support for Real Estate Attorneys in Washington State | Real Property Planning"
      description="Real Property Planning works alongside real estate attorneys to provide market analysis, property coordination, and sale management when clients need both legal and real estate expertise."
    />
    <BreadcrumbSchema
      items={[
        { name: "For Attorneys", url: "/for-attorneys" },
        { name: "Real Estate Attorneys", url: "/real-estate-attorneys" },
      ]}
    />
    <Header />
    <main id="main-content">

    {/* Hero */}
    <section className="bg-primary pt-3 md:pt-4 pb-12 md:pb-14">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <img src={iconRealEstateAttorney} alt="Real estate attorney property coordination Washington State" className="mx-auto max-w-[23rem] w-full h-auto object-contain mb-3" loading="lazy"/>
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
            For Real Estate Attorneys
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            Working Alongside Real Estate Attorneys in Washington State
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-3">
            When Property Decisions Involve Both Legal and Market Expertise
          </p>
          <Link to="/contact">
            <Button variant="gold" size="lg" className="px-7 py-4 h-auto rounded-lg">
              <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy"/>
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Opening */}
    <section className="py-16 lg:py-20 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Real estate matters don't always fit neatly into either the legal category or the brokerage category. Sometimes a client needs both — legal counsel to navigate rights, risks, and obligations, and an experienced real estate professional to assess the property, understand the market, and manage the practical path forward.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Real Property Planning works alongside real estate attorneys to provide the property side of that equation — market analysis, valuation insight, preparation coordination, and sale management — while leaving the legal guidance where it belongs.
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
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Real Property Planning does not provide legal advice. Instead, David provides the real estate expertise that complements legal counsel — particularly in situations where property condition, market value, or sale logistics are part of a larger legal matter:
          </p>
          <ul className="space-y-4">
            {howWeHelp.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <GoldCheck3D size={20} className="mt-0.5 shrink-0" />
                <span className="text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Common Situations */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
            Common Situations Where Clients May Need Both Attorney and Real Estate Guidance
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Real estate attorneys and their clients benefit from Real Property Planning's support in situations including:
          </p>
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

    <PageFAQ
      faqs={faqs}
      heading="Frequently Asked Questions About Real Estate Attorneys"
    />

    {/* CTA */}
    <section className="py-20 lg:py-28 bg-primary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-5">
            Discuss a Client Situation
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-4">
            When a client's legal matter involves real property in Washington State, Real Property Planning provides a reliable, professional resource for the market and logistics side of the situation.
          </p>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
            David serves clients throughout{" "}
            <Link to="/counties" className="text-gold hover:text-gold/80 underline underline-offset-4 transition-colors">King County, Snohomish County, Pierce County, Kitsap County</Link>, and across Washington State. A brief conversation is usually the most efficient way to determine how we can support your client's situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+12069003015">
              <Button variant="gold" size="lg" className="px-8 py-4 h-auto">
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy"/>
                Call (206) 900-3015
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="px-8 py-4 h-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Send a Message
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <RelatedServices currentPath="/real-estate-attorneys" />
    <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default ForRealEstateAttorneys;
