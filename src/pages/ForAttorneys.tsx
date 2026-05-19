import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconAttorneys from "@/assets/icons/probate-attorney-services-icon-washington.webp";
import CTASection from "@/components/CTASection";
import PageFAQ from "@/components/PageFAQ";
import FeaturedAttorneys from "@/components/FeaturedAttorneys";
import HeroBandTitle from "@/components/HeroBandTitle";

const ForAttorneys = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Real Estate Partner for Washington Estate, Probate & Family Law Attorneys"
      description="A single, valuation-trained real estate point of contact for Washington attorneys — handling property, pricing, and coordination so legal counsel stays focused on the file."
    />
    <BreadcrumbSchema items={[{ name: "For Attorneys", url: "/for-attorneys" }]} />
    <Header />
    <main id="main-content">

    {/* Hero image + navy band */}
    <section className="w-full overflow-hidden" style={{ marginTop: 0, paddingTop: 0 }}>
      <div style={{ lineHeight: 0 }}>
        <img
          src="/images/hero_attorneys.png"
          alt="Real Property Planning for Washington attorneys — estate, probate, and family law referral partner"
          className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover object-center block"
          loading="eager"
        />
        <HeroBandTitle>Attorneys</HeroBandTitle>
      </div>
    </section>

    {/* Attorney Specialty Tiles */}
    <FeaturedAttorneys />

    {/* Attorney type definitions */}
    <section className="pt-6 md:pt-8 pb-8 md:pb-10 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-5 md:space-y-6">
          {[
            ["Probate Attorneys", "Handle estate administration after death, including court process, creditor issues, and transfer or sale of property."],
            ["Estate Planning Attorneys", "Plan ahead with wills, trusts, powers of attorney, and directives for how assets should be handled."],
            ["Elder Law Attorneys", "Help with aging, care planning, Medicaid, incapacity issues, and asset protection."],
            ["Family Law Attorneys", "Handle family-related legal matters involving spouses, children, custody, support, and shared assets."],
            ["Divorce Attorneys", "Guide clients through divorce, property division, support, and real estate decisions tied to separation."],
            ["Real Estate Attorneys", "Advise on title, contracts, disputes, ownership rights, and transaction-related legal risk."],
          ].map(([title, desc]) => (
            <p key={title} className="text-2xl md:text-[1.7rem] leading-relaxed">
              <strong className="text-[#8B6914]">{title}</strong>
              <span className="text-[#131F36]"> — </span>
              <span className="text-[#131F36]">{desc}</span>
            </p>
          ))}
        </div>
      </div>
    </section>

    {/* Introductory copy below definitions */}
    <section className="py-8 md:py-12 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#1B2B4B] text-2xl md:text-[1.7rem] leading-[1.8]">
            Attorneys working in probate, estate planning, elder law, family law, and divorce regularly encounter real estate questions that fall outside the scope of legal counsel. When a client needs honest property valuation, coordinated sale management, or a professional who can hold a complex multi-party process together — that's where Real Property Planning fits in.
          </p>
        </div>
      </div>
    </section>

    {/* More information link */}
    <section className="py-6 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Link to="/for-attorneys/learn-more" className="text-[#8B6914] hover:text-[#6B4F0E] underline underline-offset-4 text-lg md:text-xl font-semibold transition-colors">
            More information about working with Attorneys →
          </Link>
          <div className="mt-4">
            <Link to="/for-attorneys/how-it-works" className="text-[#8B6914] hover:text-[#6B4F0E] underline underline-offset-4 text-lg md:text-xl font-semibold transition-colors">
              See how the referral process works →
            </Link>
          </div>
        </div>
      </div>
    </section>

    <PageFAQ
      faqs={[
        {
          question: "What types of real estate matters does Real Property Planning handle for attorney referrals?",
          answer: "Real Property Planning handles probate sales, trust property sales, estate liquidations, divorce-related real estate, elder law transitions (including sales tied to assisted living or memory care moves), date-of-death and retrospective valuations, and partition or co-owner buyout valuations. The platform covers the full property workstream so attorneys can stay focused on the legal file.",
        },
        {
          question: "Can Real Property Planning provide date-of-death valuations for estate cases?",
          answer: "Yes. Real Property Planning includes a Washington State Certified Real Estate Appraiser, so date-of-death and retrospective valuations are produced in-house with proper USPAP-compliant documentation. These are accepted by estate attorneys, CPAs, and the IRS for basis-step-up and estate tax filings.",
        },
        {
          question: "How quickly can Real Property Planning respond to a new attorney referral?",
          answer: "Attorney referrals receive a response within one business day, often the same day. The first contact includes a recommended scope, a single point of contact for the file, and confirmation that the client will not be contacted without the attorney's direction.",
        },
        {
          question: "Does Real Property Planning work with out-of-state heirs or executors?",
          answer: "Yes — out-of-state personal representatives and trustees are one of the most common client types. Real Property Planning handles in-person walk-throughs, vendor coordination, cleanout, photo and video updates, showings, and offer presentation by phone or video so the fiduciary rarely needs to travel.",
        },
      ]}
      heading="Attorney Referral Questions"
      eyebrow="Quick Answers"
      id="for-attorneys-quick"
    />

    <CTASection
      eyebrow="For Counsel"
      heading="Refer the Property Workstream — Stay the Legal Lead"
      body="When you have a file where the real estate side is starting to consume billable time you'd rather spend on the legal work, we'll take it. Send a brief situation overview and our team will respond within one business day with a recommended scope and a single point of contact for your file."
      callLabel="Direct Line — (206) 900-3015"
      messageLabel="Send a File Overview"
      microcopy="Attorney-to-broker communication. We never contact your client without your direction."
    />
    <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default ForAttorneys;
