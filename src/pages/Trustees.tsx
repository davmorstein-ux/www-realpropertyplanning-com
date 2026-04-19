import Header from "@/components/Header";
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
      title="Trustees — Real Estate Guidance for Trust-Held Property | Real Property Planning"
      description="Practical real estate guidance for trustees and successor trustees selling trust-held property throughout Washington State."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[{ name: "Trustees", url: "/trustees" }]} />
    <Header />
    <main id="main-content">

    {/* Hero */}
    <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-1.5 md:mb-2">
            <img src={iconTrustees} alt="Real estate guidance for trustees managing trust property in Washington State" className="block w-full max-w-[15rem] h-auto object-contain"  loading="lazy"/>
          </div>
          <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-sm">
            Fiduciary Support
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-primary-foreground leading-tight mb-4">
            Trustees
          </h1>
          <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-3" style={{ maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }}>
            This page is for trustees and successor trustees overseeing real property held in a Washington State trust. Practical real estate guidance for trustees managing trust-held property — built around fiduciary duties, beneficiary coordination, and defensible pricing.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="lg" className="px-7 py-4 h-auto rounded-lg">
              <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>
              Schedule a Conversation
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* More information link */}
    <section className="py-6 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Link to="/trustees/learn-more" className="text-accent hover:text-gold underline underline-offset-4 text-base font-medium transition-colors">
            More information about Trustees →
          </Link>
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
