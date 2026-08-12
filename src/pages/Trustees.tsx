import Header from "@/components/Header";
import HeroBandTitle from "@/components/HeroBandTitle";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconTrustees from "@/assets/icons/estate-trustees-services-icon-washington.webp";
import CTASection from "@/components/CTASection";
import PageFAQ from "@/components/PageFAQ";

const jsonLd = articleSchema({
  headline: "Trust Property Guide for Trustees",
  description: "Practical real estate guidance for trustees, successor trustees, and fiduciaries managing trust-held property in Washington State.",
  url: "/trustees",
  datePublished: "2026-04-09",
  dateModified: "2026-04-10",
  about: ["Trustees", "Successor trustees", "Trust administration", "Trust property"],
});

const Trustees = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Trustees — Selling Trust-Held Property in Washington"
      description="Practical real estate guidance for trustees and successor trustees selling trust-held property throughout Washington State, with fiduciary care."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[{ name: "Trustees", url: "/trustees" }]} />
    <Header />
    <main id="main-content">

    {/* Hero */}
    <HeroBandTitle as="h1">Trustees</HeroBandTitle>

    {/* Intro — relocated out of the title band. The band carries the
        page title and nothing else, sitewide. */}
    <section className="py-10 md:py-12 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
        <p className="text-muted-foreground leading-relaxed mb-5" style={{ fontSize: "18px" }}>
          This page is for trustees and successor trustees overseeing real property held in a Washington State trust. Practical real estate guidance for trustees managing trust-held property — built around fiduciary duties, beneficiary coordination, and defensible pricing.
        </p>
        </div>
      </div>
    </section>

    <PageFAQ
      faqs={[
        {
          question: "What should a trustee do first when a trust includes real property?",
          answer: "Confirm the trustee appointment in writing (a Certification of Trust or successor trustee acceptance), secure the property and insurance, locate the deed and title information, and obtain a current valuation — typically a date-of-death appraisal if the trust became irrevocable on the grantor's passing. Real Property Planning handles the property-side steps and coordinates with the trust attorney.",
        },
        {
          question: "Does a trustee need a property appraisal before selling?",
          answer: "In most cases, yes. A defensible written valuation — ideally a certified appraisal — protects the trustee from later claims that the property was sold below market value. It also establishes the new tax basis for beneficiaries and supports the trust accounting. This is one of the most common reasons trustees are sued years after a sale, and it is fully avoidable.",
        },
        {
          question: "Can a trustee sell property without beneficiary approval in Washington?",
          answer: "Generally yes, if the trust document grants the trustee the power to sell real property — most modern Washington trusts do. The trustee still has a fiduciary duty to notify beneficiaries, document the pricing rationale, and act in the beneficiaries' best interest. Approval is not the same as notice; confirm both requirements with the trust attorney before listing.",
        },
        {
          question: "What is the trustee's liability if a property sells below market value?",
          answer: "A trustee who acts prudently, obtains an independent valuation, exposes the property to the open market, and documents the decision-making is generally protected — even if a beneficiary later believes the price was too low. Liability arises when the file is thin: no appraisal, limited marketing, or undisclosed conflicts. Real Property Planning builds the documentation file alongside the sale.",
        },
      ]}
      heading="Common Trustee Questions"
      eyebrow="Quick Answers"
      id="trustees-quick"
    />

    <CTASection />
    <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default Trustees;
