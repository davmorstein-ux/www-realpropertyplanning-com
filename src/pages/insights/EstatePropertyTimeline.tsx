import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import NextStepBlock from "@/components/NextStepBlock";
import PageFAQ from "@/components/PageFAQ";
import MidPageCTA from "@/components/MidPageCTA";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroIcon from "@/assets/icons/probate-guidance-book-open-icon-washington.webp";

const faqs = [
  { question: "How long does it typically take to sell an estate property in Washington?", answer: "From start to finish — including probate, preparation, listing, and closing — most estate property sales take between 4 and 12 months. Complex estates, contested situations, or properties requiring significant work can take longer." },
  { question: "Can I start preparing the property before probate is complete?", answer: "Yes. While you cannot close a sale without proper legal authority, you can begin cleaning out, assessing condition, getting professional valuations, and lining up vendors during the probate waiting period." },
  { question: "What is the biggest cause of delays?", answer: "The most common delays come from waiting for court authority, family disagreements on pricing or strategy, and underestimating the time needed for property preparation. Starting early on what you can control helps offset delays you cannot." },
  { question: "Does the time of year matter for selling estate property?", answer: "Spring and early summer generally see more buyer activity in Washington, but estate sales follow their own timelines. The best time to sell is when the property is properly prepared and priced — not when the calendar says it's ideal." },
];

const jsonLd = articleSchema({
  headline: "Understanding the Timeline for Selling an Estate Property",
  description: "What affects timing when selling estate property in Washington. Covers probate vs non-probate timelines, preparation phases, and realistic expectations for families and executors.",
  url: "/insights/estate-property-sale-timeline",
  datePublished: "2026-03-27",
  dateModified: "2026-03-27",
  about: ["Estate property timeline", "Probate process", "Selling inherited property", "Washington real estate"],
});

const EstatePropertyTimeline = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Understanding the Timeline for Selling an Estate Property | Real Property Planning"
      description="What affects timing when selling estate property in Washington. Probate vs non-probate timelines, preparation phases, and realistic expectations for families and executors."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[
      { name: "Insights", url: "/insights" },
      { name: "Estate Property Sale Timeline", url: "/insights/estate-property-sale-timeline" },
    ]} />
    <Header />
    <main id="main-content">

    <section className="bg-primary pt-3 md:pt-4 pb-12 md:pb-14">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl">
            <div className="flex justify-center mb-3 md:mb-4">
              <img src={heroIcon} alt="" aria-hidden="true" className="block w-full max-w-[23rem] h-auto object-contain" loading="lazy" />
            </div>

          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">Insights</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            Understanding the Timeline for Selling an Estate Property
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed mb-4">
            Selling estate property rarely follows a typical real estate timeline. Between probate requirements, family coordination, and property preparation, the process often takes longer than families expect — but understanding what drives the timeline helps you plan effectively.
          </p>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            This article breaks down what affects timing, how probate and non-probate situations differ, and what realistic expectations look like.
          </p>
        </div>
      </div>
    </section>

    <TrustStrip />

    {/* What Affects Timing */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">What Affects Timing</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Estate property timelines are shaped by several factors, many of which are outside the family's direct control:
          </p>
          <ul className="space-y-4">
            {[
              "Legal authority — whether probate is required and how quickly the court processes the appointment",
              "Family dynamics — the number of heirs, their level of agreement, and geographic dispersion",
              "Property condition — whether the home needs cleaning, repairs, or significant preparation before listing",
              "Market conditions — local demand, seasonality, and comparable pricing in the area",
              "Professional coordination — how quickly attorneys, appraisers, and agents can align their work",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span className="text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-6">
            The families who experience the smoothest timelines are typically those who begin preparation early — even before they have full legal authority to sell.
          </p>
        </div>
      </div>
    </section>

    {/* Probate vs Non-Probate */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Probate vs. Non-Probate Timing</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            How the property is titled determines whether probate is required — and that has the single biggest impact on your timeline.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Probate situations.</strong> If the property is in the decedent's name alone and there is no trust, probate is typically required. In Washington, obtaining letters testamentary can take several weeks to several months. During this period, you cannot close a sale — but you can prepare.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Trust-held property.</strong> If the home was held in a living trust, the successor trustee may have authority to sell without court involvement. This can significantly shorten the timeline — sometimes by months.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Community property with survivorship.</strong> If the property was held as community property with right of survivorship, it may transfer automatically to the surviving spouse without probate, allowing a sale to proceed on a more conventional timeline.
          </p>
        </div>
      </div>
    </section>

    <MidPageCTA />

    {/* Preparation Phase */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">The Preparation Phase</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            The preparation phase is where families have the most control over the timeline — and where early action pays the biggest dividends.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Cleaning out a lifetime of belongings takes longer than most people expect. Families often underestimate the time required to sort through personal items, coordinate with siblings, arrange donations, and manage disposal of things that cannot be kept.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Property preparation — addressing deferred maintenance, making cosmetic improvements, and ensuring the home shows well — adds additional time. A professional assessment early in the process helps prioritize what matters and what can be skipped.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Families who begin this work during the probate waiting period are often ready to list within days of receiving legal authority — rather than starting from scratch at that point.
          </p>
        </div>
      </div>
    </section>

    {/* Realistic Expectations */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Setting Realistic Expectations</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Most estate property sales in Washington take between four and twelve months from start to finish. That range may feel wide, but the variables are significant.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A well-prepared property in a strong market with aligned heirs and an efficient probate process can close in under four months. A property that needs extensive work, involves family disagreement, or faces a slow court calendar may take a year or more.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The most useful thing you can do is accept that estate sales follow their own rhythm — and focus your energy on the things you can control. Early assessment, clear communication, and professional coordination are the three levers that consistently shorten timelines.
          </p>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <PageFAQ faqs={faqs} />
        </div>
      </div>
    </section>

    <NextStepBlock
      steps={[
        { title: "How Probate Real Estate Works", description: "An overview of the probate sale process in Washington.", href: "/guides/how-probate-real-estate-works" },
        { title: "Probate & Estate Sales", description: "Comprehensive support for estate property decisions.", href: "/probate-estate-sales" },
        { title: "Why Valuation Matters", description: "How professional valuation protects your interests.", href: "/why-valuation-matters" },
      ]}
    />

    {/* CTA */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">A Clear Next Step</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            If you're working through a situation like this and want help thinking through your options, a short conversation can often bring clarity.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-primary font-semibold px-8 py-4 text-lg rounded-lg">
              Schedule a Consultation
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-3">No pressure. Just practical guidance.</p>
        </div>
      </div>
    </section>

    <RelatedServices currentPath="/insights/estate-property-sale-timeline" />
    <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default EstatePropertyTimeline;
