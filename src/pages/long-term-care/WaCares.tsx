import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BackToLongTermCare from "@/components/BackToLongTermCare";
import DisclaimerSection from "@/components/DisclaimerSection";
import HeroBandTitle from "@/components/HeroBandTitle";
import ArticleAudioPlayer from "@/components/ArticleAudioPlayer";
import heroImage from "@/assets/articles-hero-banner.webp";
import { Link } from "react-router-dom";

const h2Class = "font-serif text-[28px] font-semibold text-[hsl(215,45%,18%)] mt-10 mb-4";
const pClass = "font-body text-lg leading-[1.8] text-[hsl(220,25%,22%)] mt-6";
const leadClass = "font-body text-lg leading-[1.8] text-[hsl(220,25%,22%)]";
const hrClass = "border-t border-[hsl(220,15%,85%)] my-10";
const inlineLink =
  "underline decoration-1 underline-offset-2 text-[hsl(215,45%,18%)] hover:text-[hsl(215,45%,28%)] transition-colors";

const WaCares = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="WA Cares Fund: How It Fits Into Long-Term Care Planning and Housing Decisions"
        description="A guide to Washington's WA Cares Fund — how it's funded, what it may pay for, who qualifies, and how it fits alongside home equity, Medicaid, and other long-term care planning strategies."
      />
      <Header />
      <main id="main-content">
        <div className="bg-white">
          <img
            src={heroImage}
            alt="WA Cares Fund: Washington's Long-Term Care Insurance"
            className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover object-center block"
            loading="eager"
            sizes="100vw"
            decoding="async"
            width={1904}
            height={521}
          />
        </div>
        <HeroBandTitle>
          WA Cares Fund: How WA Cares Fits Into Long-Term Care Planning and Housing Decisions
        </HeroBandTitle>

        <section className="bg-[hsl(40,20%,98%)] px-6 pt-12 pb-16">
          <div className="max-w-[760px] mx-auto">
            <h2 className={h2Class + " mt-0"}>Why This Matters</h2>
            <p className={leadClass}>
              Long-term care planning is about more than healthcare. For many families, the real question is simple:
              where will I live if I eventually need help?
            </p>

            <div className="mb-6">
              <ArticleAudioPlayer audioSrc="/audio/wa-cares.mp3" />
            </div>

            <p className={pClass}>
              Some people hope to remain at home for as long as possible. Others may eventually need an Adult Family
              Home, assisted living, memory care, or skilled nursing. Too often, those decisions are delayed until a
              medical crisis forces fast choices.
            </p>
            <p className={pClass}>
              That is why housing decisions and long-term care planning should be part of the same conversation.
            </p>

            <hr className={hrClass} />

            <h2 className={h2Class}>What Is the WA Cares Fund?</h2>
            <p className={pClass}>
              The WA Cares Fund is Washington State&apos;s public long-term care insurance program.
            </p>
            <p className={pClass}>
              Most Washington workers contribute through payroll deductions during their working years, and eligible
              participants may later use benefits to help pay for qualified long-term care services.
            </p>
            <p className={pClass}>
              WA Cares is designed to provide financial help, but it is not meant to cover the full cost of long-term
              care.
            </p>

            <hr className={hrClass} />

            <h2 className={h2Class}>How WA Cares Is Funded</h2>
            <p className={pClass}>
              Most Washington workers contribute 0.58% of their gross wages through automatic payroll deductions. Here
              is what that roughly looks like:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li className={pClass + " mt-0"}>$50,000 annual income = about $290 per year</li>
              <li className={pClass + " mt-0"}>$75,000 annual income = about $435 per year</li>
              <li className={pClass + " mt-0"}>$100,000 annual income = about $580 per year</li>
              <li className={pClass + " mt-0"}>$150,000 annual income = about $870 per year</li>
            </ul>
            <p className={pClass}>
              Unlike many private long-term care insurance policies, WA Cares generally does not require medical
              underwriting.
            </p>

            <hr className={hrClass} />

            <h2 className={h2Class}>What WA Cares May Pay For</h2>
            <p className={pClass}>
              If you qualify, WA Cares provides a lifetime benefit starting at $36,500, adjusted over time for
              inflation. Approved uses may include:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li className={pClass + " mt-0"}>In-home personal care</li>
              <li className={pClass + " mt-0"}>Home health aides</li>
              <li className={pClass + " mt-0"}>Adult Family Homes</li>
              <li className={pClass + " mt-0"}>Assisted living communities</li>
              <li className={pClass + " mt-0"}>Memory care</li>
              <li className={pClass + " mt-0"}>Skilled nursing facilities</li>
              <li className={pClass + " mt-0"}>Home modifications such as ramps and grab bars</li>
              <li className={pClass + " mt-0"}>Durable medical equipment</li>
              <li className={pClass + " mt-0"}>Transportation services</li>
              <li className={pClass + " mt-0"}>Meal delivery</li>
              <li className={pClass + " mt-0"}>Respite care</li>
              <li className={pClass + " mt-0"}>Support for family caregivers</li>
            </ul>
            <p className={pClass}>
              One of the biggest advantages of WA Cares is flexibility. It may help people stay in their homes longer
              before moving into a care setting.
            </p>

            <hr className={hrClass} />

            <h2 className={h2Class}>Who May Qualify</h2>
            <p className={pClass}>Eligibility generally has two parts.</p>
            <p className={pClass}>
              First, a person must meet the program&apos;s contribution requirements based on work and payroll
              contributions. Current program materials describe multiple pathways, including longer-term contribution
              history, more recent contribution history, and partial benefits for certain older workers.
            </p>
            <p className={pClass}>
              Second, a person must need help with three or more activities of daily living for at least 90 days. These
              activities can include bathing, dressing, eating, toileting, mobility, and medication-related help.
            </p>
            <p className={pClass}>A formal assessment is used to determine benefit eligibility.</p>

            <hr className={hrClass} />

            <h2 className={h2Class}>Why Long-Term Care Planning Still Matters</h2>
            <p className={pClass}>
              Even with WA Cares, long-term care can still be expensive. Depending on the type of care and level of
              support needed, monthly costs may range from several thousand dollars to well over $10,000.
            </p>
            <p className={pClass}>
              That is why it helps to understand the most common housing and care options before a crisis happens.
            </p>

            <hr className={hrClass} />

            <h2 className={h2Class}>Aging in Place</h2>
            <p className={pClass}>
              Many people want to remain in their own homes for as long as possible. That may require home
              modifications, in-home caregivers, transportation help, meal support, or visiting medical providers.
            </p>
            <p className={pClass}>For many homeowners, aging in place offers the greatest sense of independence.</p>

            <hr className={hrClass} />

            <h2 className={h2Class}>Adult Family Homes</h2>
            <p className={pClass}>
              Washington has a strong network of licensed{" "}
              <Link to="/afh-marketplace" className={inlineLink}>
                Adult Family Homes
              </Link>
              , which are an important part of long-term care planning for many families.
            </p>
            <p className={pClass}>
              These smaller residential homes typically care for two to six residents in a home-like setting. Families
              often appreciate the more personal environment, lower resident count, and closer caregiver attention.
            </p>
            <p className={pClass}>
              For some older adults, an Adult Family Home can be the right fit when living alone is no longer safe, but
              a larger facility is not yet necessary.
            </p>

            <hr className={hrClass} />

            <h2 className={h2Class}>Assisted Living and Higher Care</h2>
            <p className={pClass}>
              Assisted living communities offer a balance of independence and support. Residents may receive help with
              meals, housekeeping, medication reminders, and daily activities.
            </p>
            <p className={pClass}>
              Memory care is designed for people living with Alzheimer&apos;s disease or other forms of dementia and
              usually includes specialized staffing and added safety features.
            </p>
            <p className={pClass}>
              Skilled nursing facilities provide the highest level of residential care and are often the most expensive
              option.
            </p>

            <hr className={hrClass} />

            <h2 className={h2Class}>Will WA Cares Cover Everything?</h2>
            <p className={pClass}>
              Probably not. The WA Cares Fund was designed to help with long-term care expenses, not fully pay for years
              of care.
            </p>
            <p className={pClass}>
              Many families still rely on a combination of retirement savings, Social Security, pension income, private
              insurance, Medicaid if eligible, family caregiving, and home equity.
            </p>
            <p className={pClass}>The earlier planning begins, the more options people usually have.</p>

            <hr className={hrClass} />

            <h2 className={h2Class}>Why Your Home Is Often Part of the Plan</h2>
            <p className={pClass}>For many Washington homeowners, the home is their largest financial asset.</p>
            <p className={pClass}>
              Over time, home equity may become an important part of long-term care planning. Depending on the
              situation, it may help support:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li className={pClass + " mt-0"}>Home modifications for aging in place</li>
              <li className={pClass + " mt-0"}>In-home care services</li>
              <li className={pClass + " mt-0"}>Assisted living expenses</li>
              <li className={pClass + " mt-0"}>Adult Family Home care</li>
              <li className={pClass + " mt-0"}>Memory care</li>
              <li className={pClass + " mt-0"}>Skilled nursing</li>
              <li className={pClass + " mt-0"}>Downsizing to a smaller home</li>
              <li className={pClass + " mt-0"}>A move closer to family</li>
            </ul>
            <p className={pClass}>
              Because of this, housing decisions should be considered alongside retirement planning and future care
              needs.
            </p>

            <hr className={hrClass} />

            <h2 className={h2Class}>Planning Ahead Creates More Choices</h2>
            <p className={pClass}>
              One of the most common mistakes families make is waiting until a health event forces a housing decision.
            </p>
            <p className={pClass}>
              Planning ahead gives families time to understand care options, compare costs, explore neighborhoods and
              communities, organize legal and financial documents, discuss family wishes, prepare the home for future
              accessibility, and review funding strategies before they become urgent.
            </p>
            <p className={pClass}>That kind of preparation often reduces stress and leads to better decisions.</p>

            <hr className={hrClass} />

            <h2 className={h2Class}>How Real Property Planning Can Help</h2>
            <p className={pClass}>
              At Real Property Planning, housing is viewed as a key part of long-term care planning. Resources may help
              families better understand WA Cares Fund planning, Adult Family Homes, assisted living communities, senior
              housing options, aging in place, downsizing strategies, estate and probate real estate, housing transition
              planning, and home valuation and market insight.
            </p>
            <p className={pClass}>
              Whether planning years in advance or helping a loved one through an unexpected transition, having clear
              information can make a meaningful difference.
            </p>

            <hr className={hrClass} />

            <h2 className={h2Class}>Final Thoughts</h2>
            <p className={pClass}>
              The WA Cares Fund is an important step in helping Washington residents prepare for future long-term care
              needs.
            </p>
            <p className={pClass}>
              While it may not cover every expense, it can provide valuable support when combined with thoughtful
              housing decisions, retirement planning, and other financial resources.
            </p>
            <p className={pClass}>The best time to begin long-term care planning is before care is needed.</p>

            <hr className={hrClass} />

            <p className={pClass + " italic"}>
              Real Property Planning connects families in the Puget Sound region with the professionals who can help —{" "}
              <Link to="/professionals/elder-law-attorneys" className={inlineLink}>
                elder law attorneys
              </Link>
              ,{" "}
              <Link to="/professionals/financial-planners" className={inlineLink}>
                financial planners
              </Link>
              , and{" "}
              <Link to="/senior-living-advisors" className={inlineLink}>
                senior living advisors
              </Link>{" "}
              who understand the full landscape of long-term care in Washington State. Explore our full library of
              resources to start the conversation.
            </p>
          </div>
        </section>

        <BackToLongTermCare />
        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default WaCares;
