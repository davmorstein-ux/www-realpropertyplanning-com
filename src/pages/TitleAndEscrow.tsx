import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import DisclaimerSection from "@/components/DisclaimerSection";
import CTASection from "@/components/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";

const faqs = [
  {
    q: "What is the role of a title company in a real estate transaction?",
    a: "A title company researches the history of a property to confirm legal ownership, identifies any liens, encumbrances, or claims against the title, and issues title insurance to protect the buyer and lender from future disputes. In Washington State, the title company also typically facilitates the closing process alongside the escrow officer.",
  },
  {
    q: "What is escrow and how does it work?",
    a: "Escrow is a neutral third-party process that holds funds, documents, and instructions during a real estate transaction until all conditions of the sale are met. The escrow officer ensures that the buyer's funds, the seller's deed, and all required documents are properly exchanged at closing. This protects both parties from risk during the transfer.",
  },
  {
    q: "Why is title insurance important in probate and estate sales?",
    a: "Estate and probate properties often have complex ownership histories — multiple heirs, outdated deeds, unresolved liens, or court orders. Title insurance protects the buyer (and their lender) against claims that may arise from these issues after the sale closes. Without it, a buyer could face legal challenges to their ownership.",
  },
  {
    q: "Who pays for title insurance in Washington State?",
    a: "In Washington, the seller traditionally pays for the owner's title insurance policy, while the buyer pays for the lender's title insurance policy. However, these costs are negotiable and can vary by county or by the terms of the purchase agreement.",
  },
  {
    q: "How long does the escrow process take?",
    a: "A typical residential escrow in Washington State takes 30 to 45 days from mutual acceptance to closing. Probate and estate sales may take longer depending on court timelines, heir coordination, and title clearing requirements. An experienced escrow team can help manage the timeline and keep all parties informed.",
  },
  {
    q: "What is a title search and why is it required?",
    a: "A title search is a thorough examination of public records to verify the property's legal ownership and uncover any liens, easements, judgments, or other encumbrances. It is required before title insurance can be issued and before a lender will approve financing. For estate properties, this step is especially important to confirm that the personal representative or trustee has proper authority to sell.",
  },
];

const TitleAndEscrow = () => (
  <>
    <SEOHead
      title="Title & Escrow Services in Washington State | Real Property Planning"
      description="Learn how title and escrow services protect buyers, sellers, and families during probate and estate real estate transactions in Washington State."
      canonical="https://realpropertyplanning.com/title-and-escrow"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "Title & Escrow", url: "https://realpropertyplanning.com/title-and-escrow" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-sm">Real Estate Closings</p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-primary-foreground leading-tight mb-4">
              Title &amp; Escrow Services in Washington State
            </h1>
            <p className="text-primary-foreground font-semibold text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-3">
              Title and escrow professionals are essential partners in every real estate closing. For probate, estate,
              and senior transition sales, their role is even more critical — ensuring clean title transfer, protecting
              all parties, and coordinating the details that bring a transaction to a successful close.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="lg" className="px-7 py-4 h-auto rounded-lg">
                <img src={iconPhone3d} alt="" className="w-6 h-6 mr-2" loading="lazy" />
                Get Connected
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What Title & Escrow Professionals Do */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              What Title and Escrow Professionals Do
            </h2>
            <p className="text-foreground text-lg leading-relaxed mb-6">
              Every real estate transaction involves two critical functions: confirming that the seller has clear legal
              ownership of the property (title), and managing the secure exchange of funds and documents between buyer
              and seller (escrow). These functions protect everyone involved — buyers, sellers, lenders, heirs, and
              personal representatives.
            </p>

            <div className="space-y-6">
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Title Services</h3>
                <p className="text-foreground text-base leading-relaxed">
                  Title professionals research the complete ownership history of a property, identify any liens or
                  encumbrances, resolve title defects, and issue title insurance policies that protect buyers and
                  lenders from future claims against the property.
                </p>
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">Escrow Services</h3>
                <p className="text-foreground text-base leading-relaxed">
                  Escrow officers act as neutral third parties who hold and distribute funds, collect signatures on
                  closing documents, coordinate with lenders and agents, and ensure that all conditions of the sale
                  are satisfied before the transaction is finalized and recorded.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters for Estates */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Why Title and Escrow Matter in Estate and Probate Sales
            </h2>
            <p className="text-foreground text-lg leading-relaxed mb-6">
              Estate and probate real estate transactions are more complex than standard home sales. The property may
              have been owned for decades, with outdated deeds, unrecorded transfers, or liens that surface only during
              a title search. The seller is often a personal representative or trustee acting on behalf of the estate —
              not the original owner.
            </p>
            <p className="text-foreground text-lg leading-relaxed mb-6">
              An experienced title and escrow team understands these complexities. They know how to work with court
              documents, Letters Testamentary, trust certifications, and multi-heir situations. They can identify
              potential issues early, coordinate with the estate attorney, and keep the closing on track even when
              the circumstances are unusual.
            </p>
            <p className="text-foreground text-lg leading-relaxed">
              For families navigating these transactions — especially from out of state — having a reliable title and
              escrow partner provides peace of mind that the legal and financial details are being handled with precision
              and care.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-border rounded-lg px-6 bg-secondary"
                >
                  <AccordionTrigger className="text-left font-serif text-foreground hover:text-gold hover:no-underline px-6 py-5" style={{ fontSize: '20px', fontWeight: '700' }}>
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground text-base leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Featured Providers */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Featured Title &amp; Escrow Providers
            </h2>
            <div className="bg-background border border-border rounded-lg p-10">
              <p className="text-foreground text-lg font-semibold mb-2">
                Trusted providers coming soon.
              </p>
              <p className="text-foreground text-base">
                Check back shortly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default TitleAndEscrow;
