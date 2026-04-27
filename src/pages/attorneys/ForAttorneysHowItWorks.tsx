import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconAttorneys from "@/assets/icons/probate-attorney-services-icon-washington.webp";

const STEPS: { n: string; title: string; body: string }[] = [
  {
    n: "1",
    title: "Initial contact",
    body: "Real Property Planning responds to your referral within one business day, confirms scope with you in writing, and identifies the single point of contact for the file.",
  },
  {
    n: "2",
    title: "Property assessment",
    body: "Real Property Planning conducts an on-site condition review and produces a date-of-death or current-market valuation supported by appraisal-grade analysis — defensible if the file ever requires it.",
  },
  {
    n: "3",
    title: "Coordination with the estate or probate timeline",
    body: "Real Property Planning aligns property work — securing, cleanout, vendor scheduling, and listing readiness — with letters testamentary, court calendars, and beneficiary timing as you direct.",
  },
  {
    n: "4",
    title: "Listing or valuation delivery",
    body: "Where a sale is the path, Real Property Planning manages preparation, pricing, marketing, offers, and negotiation. Where only a valuation is required, the report is delivered in a format suitable for court, IRS, or beneficiary use.",
  },
  {
    n: "5",
    title: "Closing and reporting back to attorney",
    body: "Real Property Planning manages escrow through closing and provides a written close-out summary — net proceeds, key dates, signed documents, and any items the file should retain.",
  },
];

const HANDLED: string[] = [
  "Property condition coordination — securing the home, vendor scheduling, cleanout, and preparation",
  "Date-of-death and current-market valuations produced by a Washington State Certified Residential Appraiser",
  "Direct executor and personal-representative communication, with you copied as you direct",
  "Timeline management aligned with court dates, letters testamentary, and beneficiary expectations",
  "Out-of-state heir coordination — remote document signing, family video updates, and travel-free sale management",
  "Beneficiary and sibling communication during multi-party situations",
  "Written status updates suitable for the file",
];

const ForAttorneysHowItWorks = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="How Real Property Planning Works With Attorneys | Referral Process"
      description="A clear, document-style walkthrough of how Real Property Planning supports Washington estate, probate, and family law attorneys from referral through closing — including what we handle and how to make a referral."
      canonical="https://www.realpropertyplanning.com/for-attorneys/how-it-works"
    />
    <BreadcrumbSchema
      items={[
        { name: "For Attorneys", url: "/for-attorneys" },
        { name: "How It Works", url: "/for-attorneys/how-it-works" },
      ]}
    />
    <Header />
    <main id="main-content">

      {/* Hero — clean, no video ribbon */}
      <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-1.5 md:mb-2">
              <img
                src={iconAttorneys}
                alt="Referral process for Washington estate and probate attorneys"
                className="block w-full max-w-[15rem] h-auto object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-sm">
              For Attorneys — Referral Process
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-primary-foreground leading-tight mb-4">
              How Real Property Planning Works With Attorneys
            </h1>
            <p className="text-primary-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
              This page is for Washington State estate and probate attorneys who refer clients for real estate services. It walks through exactly what happens after the referral, what Real Property Planning handles on your behalf, and how to send a file over.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="gold" size="lg" className="px-7 py-4 h-auto rounded-lg">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy"/>
                  Make a Referral
                </Button>
              </Link>
              <Link to="/for-attorneys">
                <Button
                  size="lg"
                  className="px-7 py-4 h-auto rounded-lg bg-[hsl(215,60%,38%)] text-white hover:bg-[hsl(215,60%,32%)]"
                >
                  ← Back to For Attorneys
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 — What Happens After You Make the Referral */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-bold mb-3">
              What Happens After You Make the Referral
            </h2>
            <p className="text-[#1B2B4B] text-lg md:text-xl leading-[1.8] mb-8">
              Five steps, in order. Each step ends with written confirmation back to your office.
            </p>
            <ol className="space-y-6">
              {STEPS.map(({ n, title, body }) => (
                <li
                  key={n}
                  className="flex gap-5 p-6 rounded-xl border border-[#E5DCC4] bg-[#FAF7EE]"
                >
                  <div
                    aria-hidden="true"
                    className="flex-none w-12 h-12 rounded-full bg-[#1B2B4B] text-[#C9A84C] font-serif font-bold text-xl flex items-center justify-center"
                  >
                    {n}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl md:text-2xl text-[#1B2B4B] font-bold mb-2 leading-snug">
                      <span className="sr-only">Step {n}: </span>
                      {title}
                    </h3>
                    <p className="text-[#1B2B4B] text-lg leading-[1.7]">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Section 2 — What We Handle */}
      <section className="py-12 md:py-16 bg-[#FAF7EE]">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-bold mb-3">
              What Real Property Planning Handles So You Don't Have To
            </h2>
            <p className="text-[#1B2B4B] text-lg md:text-xl leading-[1.8] mb-6">
              You stay the legal lead. Real Property Planning owns the property workstream end-to-end and reports back in writing.
            </p>
            <ul className="space-y-4">
              {HANDLED.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[#1B2B4B] text-lg md:text-xl leading-[1.7]"
                >
                  <span
                    aria-hidden="true"
                    className="flex-none mt-2 w-2.5 h-2.5 rounded-full bg-[#C9A84C]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3 — What You Can Tell Your Client */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-bold mb-3">
              What You Can Tell Your Client
            </h2>
            <p className="text-[#1B2B4B] text-lg md:text-xl leading-[1.8] mb-6">
              Plain language you can use verbatim or adapt — written for elderly clients and grieving families.
            </p>
            <blockquote className="p-6 md:p-8 rounded-xl border-l-4 border-[#C9A84C] bg-[#FAF7EE]">
              <p className="text-[#1B2B4B] text-xl md:text-2xl leading-[1.8] font-serif italic">
                &ldquo;I work with a real estate firm called Real Property Planning that handles homes tied to estates, trusts, and family transitions across Washington State. They are calm, experienced, and used to working with families during difficult times. They will take care of the property side from start to finish — assessing the home, coordinating any preparation, pricing it appropriately, and managing the sale — and they will keep me informed along the way. You will have one steady point of contact. There is no pressure and no rush.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Section 4 — How to Make a Referral */}
      <section className="py-12 md:py-16 bg-[#FAF7EE]">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-bold mb-3">
              How to Make a Referral
            </h2>
            <p className="text-[#1B2B4B] text-lg md:text-xl leading-[1.8] mb-8">
              Send a brief overview by phone or email. Real Property Planning responds within one business day.
            </p>

            <div className="space-y-5 mb-8">
              <p className="text-[#1B2B4B] text-xl md:text-2xl leading-relaxed">
                <strong className="text-[#8B6914]">Direct Line</strong>
                <span> — </span>
                <a href="tel:2069003015" className="underline underline-offset-4 hover:text-[#8B6914]">
                  (206) 900-3015
                </a>
              </p>
              <p className="text-[#1B2B4B] text-xl md:text-2xl leading-relaxed">
                <strong className="text-[#8B6914]">Email</strong>
                <span> — </span>
                <a
                  href="mailto:info@realpropertyplanning.com"
                  className="underline underline-offset-4 hover:text-[#8B6914] break-words"
                >
                  info@realpropertyplanning.com
                </a>
              </p>
              <p className="text-[#1B2B4B] text-lg md:text-xl leading-[1.8]">
                <strong className="text-[#8B6914]">What to include:</strong> client name, property address (or county), the legal posture of the matter (probate stage, trust, family law), and whether you need a sale, a valuation, or both. One paragraph is enough.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="gold" size="lg" className="px-7 py-4 h-auto rounded-lg">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy"/>
                  Send a File Overview
                </Button>
              </Link>
              <Link to="/for-attorneys">
                <Button
                  size="lg"
                  className="px-7 py-4 h-auto rounded-lg bg-[hsl(215,60%,38%)] text-white hover:bg-[hsl(215,60%,32%)]"
                >
                  ← Back to For Attorneys
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

export default ForAttorneysHowItWorks;
