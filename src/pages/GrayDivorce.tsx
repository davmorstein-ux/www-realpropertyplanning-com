import Header from "@/components/Header";
import HeroBandTitle from "@/components/HeroBandTitle";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import grayDivorceIcon from "@/assets/gray-divorce-hero-icon.webp";
import { FEATURED_BROKER } from "@/data/featuredProfessionals";
import GreyDivorceBackground from "@/components/guides/GreyDivorceBackground";

const GrayDivorce = () => {
  return (
    <>
      <SEOHead
        title="Gray Divorce and the Family Home in Washington State | Real Property Planning"
        description="Guidance for Washington State couples over 50 navigating the family home during divorce. How Washington divides the home, the federal home-sale tax exclusion, and which independent professionals handle each part."
        canonical="https://realpropertyplanning.com/gray-divorce"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://realpropertyplanning.com/" },
          { name: "Gray Divorce", url: "https://realpropertyplanning.com/gray-divorce" },
        ]}
      />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <HeroBandTitle as="h1">Gray Divorce and Your Home — What Washington Couples Need to Know</HeroBandTitle>

        {/* Intro — relocated out of the title band. The band carries the
            page title and nothing else, sitewide. */}
        <section className="py-10 md:py-12 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground leading-relaxed mb-5" style={{ fontSize: "18px" }}>
              When a long marriage ends after 50, the family home is often the most complex — and emotional — asset to navigate. This guide explains the options separating couples usually weigh.
            </p>
            </div>
          </div>
        </section>

        {/* Section 1 — What Is Gray Divorce */}
        <section className="py-14 lg:py-20 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6 leading-tight">
                What Is Gray Divorce?
              </h2>
              <p className="text-foreground/90 text-lg leading-[1.7]">
                Gray divorce refers to the growing trend of couples over age 50 ending long-term marriages. While divorce rates among younger adults have declined, divorce among people over 50 has risen sharply since 1990, and people over 50 now make up a much larger share of all divorces than they once did. The reasons are varied — empty nest syndrome, growing apart after decades together, differing retirement goals, infidelity, and increased financial independence among women. Whatever the reason, gray divorce brings unique challenges that younger couples rarely face, particularly when it comes to real estate, retirement assets, and long-term financial security.
              </p>
            </div>
          </div>
        </section>

        <GreyDivorceBackground part="why" />

        {/* Section 2 — Washington Community Property */}
        <section className="py-14 lg:py-20 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6 leading-tight">
                Washington State Is a Community Property State
              </h2>
              <p className="text-foreground/90 text-lg leading-[1.7]">
                This matters enormously in a gray divorce. Washington's community property laws treat most assets and debts acquired during marriage as owned by both spouses — including the family home, retirement accounts, rental properties, and business interests — regardless of whose name appears on the title or who earned the income. However, Washington courts divide both community and separate property in a way that is "just and equitable" (RCW 26.09.080) rather than by an automatic 50/50 split, considering the nature and extent of the community and separate property, the length of the marriage, and each spouse's economic circumstances — which in practice includes earning capacity, age, and health.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 — What Happens to the Family Home */}
        <section className="py-14 lg:py-20 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6 leading-tight">
                What Happens to the Family Home?
              </h2>
              <p className="text-foreground/90 text-lg leading-[1.7] mb-8">
                The family home is usually the largest asset — and the most emotionally charged. In Washington, separating couples generally have three options:
              </p>
              <div className="grid gap-4 md:grid-cols-3 mb-8">
                {[
                  "One spouse buys out the other and refinances the mortgage in their own name",
                  "The home is sold and the proceeds are divided",
                  "If the couple cannot agree, the judge decides — awarding the home to one spouse (often with an offsetting payment) or ordering it sold",
                ].map((option, i) => (
                  <div key={i} className="card-3d p-6 flex flex-col">
                    <span className="font-serif text-2xl text-gold font-semibold mb-3">{i + 1}</span>
                    <p className="text-foreground/90 text-base leading-[1.6]">{option}</p>
                  </div>
                ))}
              </div>
              <p className="text-foreground/90 text-lg leading-[1.7]">
                If you owned and lived in the home at least two of the five years before the sale, up to $250,000 of the gain per person is excluded from federal income tax (IRC section 121). Up to $500,000 can be excluded on a joint return, and a joint return is possible only if the divorce is not final by December 31 of the year of the sale. A spouse who moved out can still count the time the other spouse lived there under the divorce decree. This is an important consideration when deciding whether to sell before or after the divorce is complete. Working with both a divorce attorney and an experienced real estate professional is essential to making an informed decision about the home.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 — Where Real Property Planning Can Help */}
        <section className="py-14 lg:py-20 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6 leading-tight text-center">
                Where the Real Estate Side Comes In
              </h2>
              <p className="text-foreground/90 text-lg leading-[1.7] mb-10 text-center max-w-3xl mx-auto">
                Gray divorce often triggers one or both of the following real estate needs.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "Selling the Family Home",
                    body: "Whether it's a straightforward sale or a more complex situation involving an estate, trust, or court oversight, an experienced broker can guide both parties through the process with sensitivity and professionalism.",
                  },
                  {
                    title: "Pricing & Valuation",
                    body: `As both a licensed real estate broker and a Washington State Certified Residential Appraiser, ${FEATURED_BROKER.role} brings a dual perspective to pricing that most agents simply can't offer. An accurate, defensible valuation matters in divorce proceedings.`,
                  },
                  {
                    title: "Neutral Coordination",
                    body: "When emotions run high, having a calm, experienced professional who can work with both parties — and their respective attorneys — helps keep the process moving forward.",
                  },
                ].map((card) => (
                  <div key={card.title} className="card-3d p-6 flex flex-col">
                    <h3 className="font-serif text-xl text-foreground font-semibold mb-3">{card.title}</h3>
                    <p className="text-foreground/90 text-base leading-[1.6]">{card.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 — Financial Realities */}
        <section className="py-14 lg:py-20 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6 leading-tight">
                The Financial Realities of Gray Divorce
              </h2>
              <p className="text-foreground/90 text-lg leading-[1.7] mb-8">
                The financial impact of gray divorce is significant and often underestimated. Research on people who divorce after 50 has found that both women and men see their standard of living fall, and women's typically falls further. Both face the challenge of rebuilding financial security with less time before retirement. Gray divorce also necessitates comprehensive updates to estate planning documents — wills, trusts, beneficiary designations, and powers of attorney all require revision. Washington law does some of this automatically: filing for divorce ends a spouse's authority as agent under a power of attorney unless the document says otherwise (RCW 11.125.100), and a final divorce revokes gifts to the former spouse in a will (RCW 11.12.051). Beneficiary forms on employer retirement plans are not changed automatically, so update them directly. Key financial considerations include:
              </p>
              <ul className="space-y-3">
                {[
                  "Dividing retirement accounts and pensions",
                  "Loss of spousal health insurance coverage",
                  "Housing costs for two households instead of one",
                  "Legal fees that can add up quickly in contested cases",
                  "Tax implications of selling or transferring the family home",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground/90 text-lg leading-[1.6]">
                    <span className="text-gold font-bold mt-1 shrink-0" aria-hidden="true">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <GreyDivorceBackground part="different" />

        {/* Section 6 — Working With the Right Team */}
        <section className="py-14 lg:py-20 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6 leading-tight">
                Working With the Right Team
              </h2>
              <p className="text-foreground/90 text-lg leading-[1.7]">
                Gray divorce is not a situation to navigate alone. The professionals you'll want on your side include a family law attorney experienced in gray divorce, a CPA or financial planner familiar with retirement asset division, a real estate professional who understands the sensitivity of the situation, and potentially a senior living advisor if downsizing is part of the plan. {FEATURED_BROKER.Role}, working through {FEATURED_BROKER.pronoun.possessive} own brokerage, works alongside attorneys, CPAs, and financial planners on the real estate side of gray divorce. Real Property Planning does not refer clients to attorneys; choose a Washington-licensed family law attorney and confirm their license with the Washington State Bar Association (wsba.org).
              </p>
            </div>
          </div>
        </section>

        {/* Featured Divorce Attorneys callout */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Link
                to="/for-divorce-attorneys"
                className="marquee-hover block bg-primary border-2 border-gold rounded-xl px-8 py-8 md:px-10 md:py-10 text-center shadow-md hover:shadow-lg transition-shadow duration-300 group"
              >
                <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-sm">
                  Divorce Attorneys
                </p>
                <p className="font-serif text-2xl md:text-3xl text-primary-foreground font-semibold leading-snug">
                  What a Divorce Attorney Does — and the Divorce Attorneys Listed in the Directory{" "}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-semibold mb-6 leading-tight">
                Going Through a Gray Divorce? Let's Talk.
              </h2>
              <p className="text-primary-foreground/90 text-lg md:text-xl leading-[1.7] mb-10 max-w-2xl mx-auto">
                Whether you need a home valuation, help selling the family home, or simply want to understand your options, the featured broker and appraiser are available for a no-pressure conversation through their own practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="navy3d" size="lg" className="px-8 py-4 h-auto !border-2 !border-gold w-full sm:w-auto">
                    Schedule a Consultation
                  </Button>
                </Link>
                <a href="tel:2069003015">
                  <Button variant="navy3d" size="lg" className="px-8 py-4 h-auto !border-2 !border-gold w-full sm:w-auto">
                    Call (206) 900-3015
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <DisclaimerSection />
      </main>
      <Footer />
    </>
  );
};

export default GrayDivorce;
