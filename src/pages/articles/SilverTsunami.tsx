import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const sectionBase = "py-14 md:py-20";
const contentWrap = "container px-6 lg:px-8";
const proseWrap = "max-w-3xl mx-auto";
const h2Class = "font-serif text-2xl md:text-3xl font-semibold text-foreground mt-10 mb-5";
const pClass = "text-muted-foreground text-[17px] md:text-lg leading-[1.8] mb-5 last:mb-0";
const inlineLink = "text-gold font-semibold underline underline-offset-2 hover:text-gold/80 transition-colors";

const relatedResources = [
  { title: "Senior Living Advisors", href: "/senior-living-advisors" },
  { title: "Senior Move Managers", href: "/senior-move-managers" },
  { title: "Aging Life Care Managers", href: "/aging-life-care-managers" },
  { title: "Financial Planners & Advisors", href: "/professionals/financial-planners" },
  { title: "Building Your Trusted Professional Team", href: "/building-your-trusted-professional-team" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is the Silver Tsunami? How Aging in America Is Reshaping Housing, Retirement, and Care",
  description:
    "The Silver Tsunami describes the wave of Baby Boomers reaching retirement age, reshaping housing, retirement, and caregiving across America.",
  url: "https://realpropertyplanning.com/articles/silver-tsunami",
};

const SilverTsunami = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="The Silver Tsunami: Aging America's Housing & Care Shift"
        description="How the Silver Tsunami — millions of Baby Boomers turning 65 — is reshaping housing, retirement, caregiving, and senior support across America."
        jsonLd={jsonLd}
      />
      <Header />
      <main id="main-content">
        {/* Blue Banner */}
        <section className="pt-3 md:pt-4 pb-12 md:pb-14 bg-primary">
          <div className={contentWrap}>
            <div className={proseWrap + " text-center"}>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.5rem] font-semibold text-primary-foreground leading-tight">
                The Silver Tsunami
              </h1>
            </div>
          </div>
        </section>

        {/* Article */}
        <section className={sectionBase + " bg-background"}>
          <div className={contentWrap}>
            <article className={proseWrap}>
              <h2 className={h2Class + " mt-0"}>
                What Is the Silver Tsunami? How Aging in America Is Reshaping Housing, Retirement, and Care
              </h2>
              <p className={pClass}>
                The Silver Tsunami is a term used to describe the large wave of Americans reaching retirement age as the Baby Boomer generation grows older. The trend began in 2011, when the first Baby Boomers turned 65, and it will continue through the early 2030s as the youngest Boomers reach that milestone.
              </p>
              <p className={pClass}>
                This is not just a demographic milestone. It is a long-term shift that is changing housing demand, retirement readiness, caregiving needs, health care systems, and the availability of senior support services across the United States.
              </p>

              <h2 className={h2Class}>How many people turn 65 each day?</h2>
              <p className={pClass}>
                For years, the United States has averaged about 10,000 people turning 65 every day. In 2025, that number reached an estimated 11,400 per day, a period sometimes described as "Peak 65."
              </p>
              <p className={pClass}>
                That volume matters because it puts steady pressure on systems that were already strained. As more people cross into retirement age, more families are simultaneously facing decisions about housing, care, finances, transportation, and long-term planning.
              </p>

              <h2 className={h2Class}>When did the Silver Tsunami start and when will it end?</h2>
              <p className={pClass}>
                The Silver Tsunami is generally understood to have started in 2011, when the oldest Baby Boomers turned 65. It is expected to continue until roughly 2029 or 2030, when the youngest Baby Boomers reach 65.
              </p>
              <p className={pClass}>
                Even then, the effects will not simply end. Older adults are projected to represent more than 20% of the U.S. population by 2050, so the country will likely feel the impact of this aging shift for decades beyond the Boomer generation's retirement years.
              </p>

              <h2 className={h2Class}>How long will the country be affected?</h2>
              <p className={pClass}>
                The country will likely be affected well into the 2040s and 2050s, not only because of the size of the Baby Boomer generation, but because Americans are living longer and often need housing, care, and financial support for more years in retirement.
              </p>
              <p className={pClass}>
                That means the challenge is not temporary. It is a sustained pressure on housing supply, affordability, caregiving networks, retirement resources, and community infrastructure.
              </p>

              <h2 className={h2Class}>How will the Silver Tsunami affect the country?</h2>
              <p className={pClass}>
                The impact will be broad and practical. More older adults means greater demand for health care, home care, transportation, assisted living, memory care, estate planning, and age-appropriate housing.
              </p>
              <p className={pClass}>
                At the same time, many communities already face limited staffing, a shortage of caregivers, insufficient affordable senior housing, and too few support services to meet growing demand. This imbalance is one of the central reasons the Silver Tsunami matters so much to families and professionals alike.
              </p>

              <h2 className={h2Class}>Limited housing options for aging adults</h2>
              <p className={pClass}>
                One of the biggest challenges is where people will live. Many older adults want to remain in their homes, but aging in place can become difficult when a home is no longer safe, accessible, or financially sustainable.
              </p>
              <p className={pClass}>
                When a move becomes necessary, the number of realistic alternatives may be limited. Affordable independent living, assisted living, memory care, and smaller age-friendly homes are not always available in the right place, at the right time, or at a price many retirees can manage.
              </p>
              <p className={pClass}>
                In high-cost areas, this problem becomes even more serious. Seniors may hold substantial home equity on paper, yet still struggle with the cost of replacement housing, monthly care fees, or the expense of making a current home safer for long-term living. A{" "}
                <Link to="/senior-living-advisors" className={inlineLink}>Senior Living Advisor</Link>{" "}
                can help families evaluate realistic options before a crisis forces a rushed decision.
              </p>

              <h2 className={h2Class}>Rising housing and care costs</h2>
              <p className={pClass}>
                Housing costs continue to put pressure on retirement security. For older adults on fixed incomes, rising prices for housing, insurance, property taxes, utilities, repairs, and care services can quickly narrow the range of workable options.
              </p>
              <p className={pClass}>
                This can force difficult choices. Some older adults remain in homes that no longer fit their needs because alternatives are too expensive, while others delay needed moves until a medical event or crisis leaves them with fewer choices and less time to plan. Working with a{" "}
                <Link to="/professionals/financial-planners" className={inlineLink}>financial planner or advisor</Link>{" "}
                early can help families understand what they can realistically afford before options narrow.
              </p>

              <h2 className={h2Class}>Retirement savings are often not enough</h2>
              <p className={pClass}>
                The Silver Tsunami also highlights a retirement savings problem. AARP reported that 1 in 5 Americans age 50 and older have no retirement savings, and 61% worry they will not have enough money to support themselves in retirement.
              </p>
              <p className={pClass}>
                For many who do have savings, the issue is not simply whether money exists, but whether it will last. A long retirement, combined with housing costs, inflation, medical expenses, and possible long-term care needs, can cause retirement funds to run out before the end of life.
              </p>
              <p className={pClass}>
                This helps explain why so many families are unprepared for late-life transitions. A person may appear financially stable at retirement, yet still face serious pressure later if income is fixed and expenses rise over time. An{" "}
                <Link to="/aging-life-care-managers" className={inlineLink}>Aging Life Care Manager</Link>{" "}
                can help families anticipate these needs and coordinate the right support before a crisis develops.
              </p>

              <h2 className={h2Class}>Why planning ahead matters</h2>
              <p className={pClass}>
                The Silver Tsunami makes early planning more important than ever. Families who begin discussing housing, finances, and support needs before a crisis generally have more choices and more time to evaluate them carefully.
              </p>
              <p className={pClass}>
                That planning may include understanding future housing needs, reviewing financial resources, learning the likely cost of care, and identifying trusted professionals who can help with legal, financial, housing, and relocation decisions. When a move does become necessary, a{" "}
                <Link to="/senior-move-managers" className={inlineLink}>Senior Move Manager</Link>{" "}
                can make the physical and emotional process far more manageable. In a market with limited resources and limited placement options, waiting often makes a hard situation harder.
              </p>

              <h2 className={h2Class}>Looking ahead</h2>
              <p className={pClass}>
                The Silver Tsunami is not just about aging demographics. It is about the real-world pressure that millions of aging Americans will place on housing, care systems, retirement planning, and family decision-making over the next several decades.
              </p>
              <p className={pClass}>
                For older adults, adult children, executors, and professionals, the key question is not whether this shift is happening. The question is how to prepare for it early enough to preserve options, reduce stress, and make better decisions about housing, finances, and later-life transitions.
              </p>
            </article>
          </div>
        </section>

        {/* Related Resources */}
        <section className={sectionBase + " bg-secondary"}>
          <div className={contentWrap}>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-8">
                Related Resources
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {relatedResources.map((r) => (
                  <Link
                    key={r.href}
                    to={r.href}
                    className="inline-flex items-center justify-center bg-gold hover:bg-gold/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    {r.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default SilverTsunami;
