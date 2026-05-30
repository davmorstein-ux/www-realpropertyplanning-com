import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import greyDivorceCircle from "@/assets/grey-divorce-circle-transparent.webp";

const whyReasons = [
  { title: "Empty Nest Transitions", body: "When children leave home, couples may realize they've grown apart. The shared purpose of parenting no longer masks deeper incompatibilities." },
  { title: "Longer Life Expectancy", body: "People are living longer and healthier lives. A 60-year-old today may have 25+ years ahead — too long to spend in an unhappy marriage." },
  { title: "Greater Financial Independence", body: "More women have independent careers and retirement savings, making divorce a financially viable option later in life." },
  { title: "Retirement Stress", body: "The transition to retirement can expose differences in lifestyle goals, spending habits, and how couples want to spend their time." },
  { title: "Caregiving Pressure", body: "Caring for aging parents or a spouse with health issues can create strain that becomes unsustainable over time." },
  { title: "Blended Families and Adult Children", body: "Second or third marriages involving stepchildren and complex family dynamics often face unique tensions that intensify with age." },
  { title: "Different Visions for Later Life", body: "One spouse may want to travel and downsize while the other wants to stay in the family home. These fundamental disagreements can become deal-breakers." },
];

const keyDifferences = [
  { title: "Retirement assets may be hard to rebuild", body: "Dividing 401(k)s, pensions, and Social Security benefits at 55 or 65 leaves less time to recover financially." },
  { title: "Income may be fixed or reduced", body: "Post-retirement income is often limited. Supporting two households on one retirement plan is a significant challenge." },
  { title: "Health insurance and medical costs matter more", body: "Losing spousal health coverage before Medicare eligibility can create a costly gap. Medical expenses increase with age." },
  { title: "The home may be the largest asset", body: "For many older couples, the family home represents the majority of their net worth — making its disposition the most critical financial decision." },
  { title: "Estate plans may become outdated immediately", body: "Wills, trusts, beneficiary designations, and powers of attorney all need immediate revision after a grey divorce." },
];

const realEstateIssues = [
  { num: 1, title: "Should the home be sold?", body: "Selling may be the cleanest path — especially when neither spouse can comfortably afford the mortgage, taxes, and upkeep alone. A sale provides liquidity for both parties to start fresh." },
  { num: 2, title: "Can one spouse keep the home?", body: "Buyouts require refinancing in one name, which depends on income, credit, and the ability to compensate the other spouse for their share of equity." },
  { num: 3, title: "What is the home actually worth?", body: "An accurate, defensible valuation is essential. A Certified Residential Appraiser provides an independent opinion of value that holds up in court proceedings." },
  { num: 4, title: "Deferred maintenance can affect equity", body: "Homes owned for decades may have deferred repairs that reduce market value. Understanding the true condition helps set realistic expectations." },
  { num: 5, title: "Timing can affect the outcome", body: "Market conditions, tax implications, and the divorce timeline all influence when to list and sell. Selling before or after finalization can have different financial consequences." },
];

const mistakes = [
  "Assuming home value without market support — online estimates are not appraisals and rarely hold up in legal proceedings.",
  "Keeping the home for emotional reasons only — attachment to the house can lead to financial overextension.",
  "Waiting too long to prepare the property — deferred maintenance and market timing can cost tens of thousands.",
  "Ignoring tax and retirement consequences — capital gains, stepped-up basis rules, and QDRO requirements all matter.",
  "Leaving estate documents unchanged — failing to update wills, trusts, and beneficiaries can create unintended consequences.",
];

const teamCol1 = [
  "Divorce / Family Law Attorney",
  "Estate Planning Attorney",
  "Certified Residential Appraiser",
  "Licensed Real Estate Broker",
  "CPA / Tax Advisor",
];

const teamCol2 = [
  "Financial Planner / Wealth Advisor",
  "Senior Move Manager",
  "Care Manager / Aging Life Care Professional",
  "Mediator",
  "Senior Living Advisor",
];

const GreyDivorce = () => (
  <>
    <SEOHead
      title="Grey Divorce and the Grey Tsunami: Real Estate, Retirement and Family Planning After 50"
      description="Learn what grey divorce means, how it connects to the Grey Tsunami, and why real estate, retirement, estate planning, and senior housing decisions matter for adults divorcing after age 50."
      canonical="https://realpropertyplanning.com/grey-divorce"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "/" },
        { name: "Grey Divorce", url: "/grey-divorce" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <section className="pt-6 md:pt-8 pb-14 md:pb-20 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <img
              src={greyDivorceCircle}
              alt="Older couple facing grey divorce with divorce agreement and house keys"
              className="block mx-auto w-[220px] md:w-[260px] h-auto object-contain mb-6"
              loading="eager"
            />
            <p className="font-sans text-sm md:text-base tracking-[0.2em] uppercase text-gold font-semibold mb-4">
              Planning &amp; Next Steps
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-semibold mb-6 leading-tight">
              Grey Divorce and the Grey Tsunami
            </h1>
            <p className="text-primary-foreground text-lg md:text-xl leading-relaxed mb-4">
              A clear guide to late-life divorce, aging, real estate decisions, retirement planning, and family transitions after age 50.
            </p>
            <p className="text-primary-foreground text-base md:text-lg leading-relaxed">
              Grey divorce refers to divorce after age 50. As America's older population grows, more families are facing late-life decisions involving marriage, housing, retirement, care, estate planning, and the family home. This guide explains how grey divorce and the Grey Tsunami connect — and why thoughtful real estate planning matters.
            </p>
          </div>
        </div>
      </section>

      {/* 1. What Is Grey Divorce? */}
      <section className="py-14 lg:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6 leading-tight">
              What Is Grey Divorce?
            </h2>
            <p className="text-foreground text-lg leading-[1.7]">
              Grey divorce refers to divorce involving adults age 50 and older — often couples married for decades who have built shared retirement plans, homes, and finances. Unlike divorce earlier in life, grey divorce happens when people are approaching or already in retirement, managing health changes, and making major housing decisions. The marital home is frequently the central question: Should it be sold? Can one spouse keep it? What is it actually worth?
            </p>
          </div>
        </div>
      </section>

      {/* 2. Why Grey Divorce Is Becoming More Common */}
      <section className="py-14 lg:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6 leading-tight">
              Why Grey Divorce Is Becoming More Common
            </h2>
            <p className="text-foreground text-lg leading-[1.7]">
              Research from Bowling Green State University's National Center for Family &amp; Marriage Research found the divorce rate for adults 50 and older doubled between 1990 and 2010. Pew Research Center reported that by 2023, the divorce rate among married women 50 and older remained nearly three times higher than in 1990. Grey divorce is no longer a rare exception — it is now a meaningful part of the aging and housing conversation.
            </p>
          </div>
        </div>
      </section>

      {/* 3. What Is the Grey Tsunami? */}
      <section className="py-14 lg:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6 leading-tight">
              What Is the Grey Tsunami?
            </h2>
            <p className="text-foreground text-lg leading-[1.7]">
              The Grey Tsunami (also called the Silver Tsunami) refers to the demographic wave caused by the aging Baby Boomer generation (born 1946–1964). By 2030, every Baby Boomer will be 65 or older. The U.S. Census Bureau projects that by 2030, older Americans will make up about 21% of the U.S. population — and by 2060, nearly one in four Americans will be 65 or older. This affects housing, healthcare, estate planning, retirement, probate, and the transfer of wealth between generations.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Why Older Couples Divorce */}
      <section className="py-14 lg:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-10 leading-tight text-center">
              Why Older Couples Divorce After Decades of Marriage
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {whyReasons.map((r) => (
                <div key={r.title} className="card-3d p-6 flex flex-col">
                  <h3 className="font-serif text-xl text-foreground font-semibold mb-3">{r.title}</h3>
                  <p className="text-foreground text-base leading-[1.6]">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Grey Divorce Is Different */}
      <section className="py-14 lg:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-8 leading-tight">
              Why Grey Divorce Is Different From Divorce Earlier in Life
            </h2>
            <div className="space-y-4">
              {keyDifferences.map((d) => (
                <div key={d.title} className="card-3d p-6">
                  <h3 className="font-serif text-lg text-foreground font-semibold mb-2">{d.title}</h3>
                  <p className="text-foreground text-base leading-[1.6]">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Real Estate Issues */}
      <section className="py-14 lg:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-8 leading-tight">
              Real Estate Issues in Grey Divorce
            </h2>
            <div className="space-y-6">
              {realEstateIssues.map((item) => (
                <div key={item.num} className="flex gap-4 items-start">
                  <span className="font-serif text-3xl text-gold font-bold shrink-0 mt-1">{item.num}</span>
                  <div>
                    <h3 className="font-serif text-xl text-foreground font-semibold mb-2">{item.title}</h3>
                    <p className="text-foreground text-base leading-[1.6]">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Common Mistakes */}
      <section className="py-14 lg:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-8 leading-tight">
              Common Mistakes to Avoid
            </h2>
            <div className="space-y-4">
              {mistakes.map((m, i) => (
                <div key={i} className="card-3d p-5 flex items-start gap-4 border-l-4 border-gold">
                  <span className="text-gold font-bold text-lg shrink-0" aria-hidden="true">⚠</span>
                  <p className="text-foreground text-base leading-[1.6]">{m}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Professional Team */}
      <section className="py-14 lg:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-8 leading-tight text-center">
              The Professional Team Often Involved
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <ul className="space-y-3">
                {teamCol1.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-foreground text-lg leading-[1.6]">
                    <span className="text-gold font-bold mt-1 shrink-0" aria-hidden="true">•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {teamCol2.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-foreground text-lg leading-[1.6]">
                    <span className="text-gold font-bold mt-1 shrink-0" aria-hidden="true">•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. How Real Property Planning Helps */}
      <section className="py-14 lg:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-6 leading-tight">
              How Real Property Planning Helps
            </h2>
            <p className="text-foreground text-lg leading-[1.7]">
              Real Property Planning serves as an educational and professional resource hub for families, seniors, fiduciaries, and attorneys navigating complex real estate and life transitions involving grey divorce. Whether the question is about home valuation, timing a sale, coordinating with legal counsel, or understanding senior housing options, Real Property Planning connects people with the knowledge and professionals they need to make informed decisions during one of life's most challenging transitions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary-foreground text-lg md:text-xl leading-[1.7] mb-8 max-w-2xl mx-auto">
              Working with a Divorce Attorney? Learn how Real Property Planning supports Divorce Attorneys and their clients with real estate, valuation, and senior transition services.
            </p>
            <Link to="/for-attorneys">
              <Button variant="navy3d" size="lg" className="px-8 py-4 h-auto !border-2 !border-gold">
                Divorce Attorney Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default GreyDivorce;
