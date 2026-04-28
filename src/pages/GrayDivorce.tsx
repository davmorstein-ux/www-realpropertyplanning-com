import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import grayDivorceIcon from "@/assets/gray-divorce-washington.webp";

const GrayDivorce = () => {
  return (
    <>
      <SEOHead
        title="Gray Divorce and the Family Home in Washington State | Real Property Planning"
        description="Guidance for Washington State couples over 50 navigating the family home during divorce. Calm, neutral real estate coordination from a Licensed Broker & Certified Appraiser."
        canonical="https://www.realpropertyplanning.com/gray-divorce"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.realpropertyplanning.com/" },
          { name: "Gray Divorce", url: "https://www.realpropertyplanning.com/gray-divorce" },
        ]}
      />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-3 md:pt-4 pb-14 md:pb-16 bg-primary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <img
                src={grayDivorceIcon}
                alt=""
                aria-hidden="true"
                className="mx-auto max-w-[18rem] w-full h-auto object-contain mb-4"
                loading="lazy"
              />
              <p className="font-sans text-sm md:text-base tracking-[0.2em] uppercase text-gold font-semibold mb-4">
                Planning &amp; Next Steps
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-semibold mb-6 leading-tight">
                Gray Divorce and Your Home — What Washington Couples Need to Know
              </h1>
              <p className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                When a long marriage ends after 50, the family home is often the most complex — and emotional — asset to navigate. Real Property Planning helps separating couples understand their options clearly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="navy3d" size="lg" className="px-8 py-4 h-auto !border-2 !border-gold w-full sm:w-auto">
                    Schedule a Consultation
                  </Button>
                </Link>
              </div>
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
                Gray divorce refers to the growing trend of couples over age 50 ending long-term marriages. While divorce rates among younger adults have actually declined in recent years, divorce among those over 50 has more than doubled since 1990. Today, nearly 1 in 4 divorces in the U.S. involves someone over age 50, and among adults over 65, divorce rates continue to climb. The reasons are varied — empty nest syndrome, growing apart after decades together, differing retirement goals, infidelity, and increased financial independence among women. Whatever the reason, gray divorce brings unique challenges that younger couples rarely face, particularly when it comes to real estate, retirement assets, and long-term financial security.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 — Washington Community Property */}
        <section className="py-14 lg:py-20 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6 leading-tight">
                Washington State Is a Community Property State
              </h2>
              <p className="text-foreground/90 text-lg leading-[1.7]">
                This matters enormously in a gray divorce. Washington's community property laws treat most assets and debts acquired during marriage as equally owned by both spouses — including the family home, retirement accounts, rental properties, and business interests — regardless of whose name appears on the title or who earned the income. However, Washington courts aim for a "just and equitable" division rather than an automatic 50/50 split, taking into account factors like the length of the marriage, each spouse's earning capacity, age, health, and career sacrifices made during the marriage.
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
                  "The court orders a partition by sale if the couple cannot agree",
                ].map((option, i) => (
                  <div key={i} className="card-3d p-6 flex flex-col">
                    <span className="font-serif text-2xl text-gold font-semibold mb-3">{i + 1}</span>
                    <p className="text-foreground/90 text-base leading-[1.6]">{option}</p>
                  </div>
                ))}
              </div>
              <p className="text-foreground/90 text-lg leading-[1.7]">
                If the home was your primary residence for at least two years, you may qualify for a capital gains tax exemption on up to $250,000 of the gain — or $500,000 if filing jointly before the divorce is finalized. This is an important consideration when deciding whether to sell before or after the divorce is complete. Working with both a divorce attorney and an experienced real estate professional is essential to making an informed decision about the home.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 — Where Real Property Planning Can Help */}
        <section className="py-14 lg:py-20 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6 leading-tight text-center">
                Where Real Property Planning Can Help
              </h2>
              <p className="text-foreground/90 text-lg leading-[1.7] mb-10 text-center max-w-3xl mx-auto">
                Gray divorce often triggers one or both of the following real estate needs.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "Selling the Family Home",
                    body: "Whether it's a straightforward sale or a more complex situation involving an estate, trust, or court oversight, David Stein has the experience to guide both parties through the process with sensitivity and professionalism.",
                  },
                  {
                    title: "Pricing & Valuation",
                    body: "As both a licensed real estate broker and a Washington State Certified Residential Appraiser, David brings a dual perspective to pricing that most agents simply can't offer. An accurate, defensible valuation matters in divorce proceedings.",
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
                The financial impact of gray divorce is significant and often underestimated. Women who divorce after age 50 experience an average 45% drop in their standard of living. Men experience a 21% drop. Both face the challenge of rebuilding financial security with less time before retirement. Gray divorce also necessitates comprehensive updates to estate planning documents — wills, trusts, beneficiary designations, and powers of attorney all require revision. Key financial considerations include:
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

        {/* Section 6 — Working With the Right Team */}
        <section className="py-14 lg:py-20 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6 leading-tight">
                Working With the Right Team
              </h2>
              <p className="text-foreground/90 text-lg leading-[1.7]">
                Gray divorce is not a situation to navigate alone. The professionals you'll want on your side include a family law attorney experienced in gray divorce, a CPA or financial planner familiar with retirement asset division, a real estate professional who understands the sensitivity of the situation, and potentially a senior living advisor if downsizing is part of the plan. Real Property Planning works alongside attorneys, CPAs, and financial planners throughout Washington State to help separating couples handle the real estate side of gray divorce with clarity and care.
              </p>
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
                Whether you need a home valuation, help selling the family home, or simply want to understand your options, David Stein is here to help — with no pressure and no judgment.
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
