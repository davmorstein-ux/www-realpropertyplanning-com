import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BackToResources from "@/components/BackToResources";
import DisclaimerSection from "@/components/DisclaimerSection";
import HeroBandTitle from "@/components/HeroBandTitle";
import heroImage from "@/assets/articles-hero-banner.webp";
import { Link } from "react-router-dom";

const h2Class = "font-serif text-[28px] font-semibold text-[hsl(215,45%,18%)] mt-10 mb-4";
const pClass = "font-body text-lg leading-[1.8] text-[hsl(220,25%,22%)] mt-6";
const leadClass = "font-body text-lg leading-[1.8] text-[hsl(220,25%,22%)]";
const hrClass = "border-t border-[hsl(220,15%,85%)] my-10";
const inlineLink = "underline decoration-1 underline-offset-2 text-[hsl(215,45%,18%)] hover:text-[hsl(215,45%,28%)] transition-colors";

const MedicaidAndLongTermCare = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Medicaid & Long-Term Care in Washington State: What Families Need to Know"
        description="A comprehensive guide to Medicaid long-term care coverage in Washington State — eligibility, spend-down, adult family homes, assisted living, WA Cares, and why early planning matters."
      />
      <Header />
      <main id="main-content">
        <div className="bg-white">
          <img
            src={heroImage}
            alt="Medicaid & Long-Term Care in Washington State"
            className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover object-center block"
            loading="eager"
            sizes="100vw"
            decoding="async"
            width={1904}
            height={521}
          />
        </div>
        <HeroBandTitle>Medicaid &amp; Long-Term Care in Washington State: What Families Need to Know</HeroBandTitle>

        <section className="bg-[hsl(40,20%,98%)] px-6 pt-12 pb-16">
          <div className="max-w-[760px] mx-auto">
            <h2 className={h2Class + " mt-0"}>Medicaid &amp; Long-Term Care in Washington State: What Families Need to Know</h2>
            <p className={leadClass}>Medicaid is the largest payer of long-term care in America. Yet most families don&apos;t think about it until a crisis forces the conversation. Here is what to know before that moment arrives.</p>

            <p className={pClass}>There is a common misconception about Medicaid that costs families dearly. Many people believe it is a program for the very poor — something that doesn&apos;t apply to them, something they will never need. Then a parent needs nursing home care. Then the bills arrive. Then savings begin to disappear faster than anyone anticipated.</p>
            <p className={pClass}>Medicaid is not just for the poor. It is for anyone who lives long enough to need significant long-term care — which, statistically, is most of us.</p>

            <hr className={hrClass} />

            <h2 className={h2Class}>What Medicaid Covers for Long-Term Care in Washington</h2>
            <p className={pClass}>In Washington State, Medicaid covers a broad range of long-term care services for eligible individuals. This includes nursing home care, adult family home care, assisted living facility care, in-home care and personal care services, adult day health programs, and case management services.</p>
            <p className={pClass}>The program that covers most of these services in Washington is called Apple Health — Washington&apos;s Medicaid program — administered through the Department of Social and Health Services (DSHS) and its Aging and Long-Term Support Administration (ALTSA).</p>
            <p className={pClass}>For older adults and individuals with disabilities who need long-term care, the relevant program is typically the Community Options Program Entry System, known as COPES, or the Medicaid Personal Care program. These programs help people receive care in the least restrictive setting possible — meaning at home or in a smaller residential setting — before moving to a nursing facility.</p>

            <hr className={hrClass} />

            <h2 className={h2Class}>Who Qualifies for Medicaid Long-Term Care in Washington</h2>
            <p className={pClass}>Medicaid eligibility for long-term care in Washington involves two separate tests: a medical need test and a financial eligibility test. Both must be met.</p>
            <p className={pClass}>The medical need test requires that the individual have a level of care need that meets the state&apos;s criteria for nursing facility level of care. This does not mean they must be in a nursing home. It means their care needs are significant enough that they could qualify for that level of support.</p>
            <p className={pClass}>The financial eligibility test looks at both income and assets. In Washington State, individuals applying for Medicaid nursing home coverage may have income up to approximately $2,829 per month in 2025. Asset limits are $2,000 for a single individual. A primary residence, one vehicle, personal belongings, and certain other assets are exempt from the asset calculation.</p>
            <p className={pClass}>For married couples, the rules are more complex. The community spouse — the partner who remains at home — is entitled to keep a portion of the couple&apos;s assets, known as the Community Spouse Resource Allowance, as well as a minimum monthly income. These protections exist specifically to prevent the healthy spouse from being impoverished by the cost of the other&apos;s care.</p>

            <hr className={hrClass} />

            <h2 className={h2Class}>The Medicaid Spend-Down in Washington</h2>
            <p className={pClass}>Many families find themselves in what is called the spend-down — the process of using their own assets to pay for care until they reach Medicaid eligibility thresholds.</p>
            <p className={pClass}>This is not a failure of planning. It is how the system is designed to work. Medicaid is a payer of last resort, meaning it steps in after other resources have been used. But the way assets are spent down matters enormously. Money spent on care is treated differently than money transferred to family members. Washington State has a five-year look-back period for asset transfers — meaning that gifts or transfers made within five years of applying for Medicaid may be counted against eligibility.</p>
            <p className={pClass}>This is precisely why early planning with an elder law attorney is so valuable. The strategies available to families who plan five or more years in advance are substantially greater than those available to families who begin planning after a crisis.</p>

            <hr className={hrClass} />

            <h2 className={h2Class}>Medicaid and Adult Family Homes in Washington</h2>
            <p className={pClass}>One of the most important things families in Washington State should know is that Medicaid covers care in adult family homes — not just nursing homes.</p>
            <p className={pClass}>Adult family homes that are licensed by the state and contracted with DSHS can accept Medicaid residents. For many families, this opens up a genuinely appealing option: a small, home-like residential setting with personalized care, in a familiar neighborhood, at a cost covered by Medicaid.</p>
            <p className={pClass}>Not all adult family homes accept Medicaid, and those that do may have limited Medicaid beds. Families who anticipate needing Medicaid coverage for an adult family home placement should begin researching options well before the need becomes urgent — because availability is limited and waitlists are common.</p>

            <hr className={hrClass} />

            <h2 className={h2Class}>Medicaid and Assisted Living in Washington</h2>
            <p className={pClass}>Washington State also contracts with certain assisted living facilities to provide Medicaid-funded care. These facilities offer three levels of service packages, ranging from basic personal care to more intensive support. The level of service and the corresponding Medicaid reimbursement are determined by an assessment of the individual&apos;s care needs.</p>
            <p className={pClass}>As with adult family homes, not all assisted living facilities in Washington accept Medicaid. Finding a Medicaid-contracted assisted living facility with available space in a location that works for the family requires time and advance planning.</p>

            <hr className={hrClass} />

            <h2 className={h2Class}>WA Cares: Washington&apos;s Long-Term Care Insurance Program</h2>
            <p className={pClass}>Washington State has taken a step that no other state has taken: creating a mandatory public long-term care insurance program for workers. Called WA Cares, the program began collecting premiums in 2023 and started paying benefits in July 2026.</p>
            <p className={pClass}>Eligible workers who have paid into the program and meet the benefit triggers can receive up to $36,500 in lifetime benefits — adjusted annually for inflation — to use for a range of long-term care services including personal care, facility care, transportation, meal delivery, and home modifications.</p>
            <p className={pClass}>WA Cares is not a substitute for Medicaid. It is a supplemental benefit — a first layer of coverage that can help families delay or reduce their reliance on Medicaid. For families with working members, understanding how WA Cares fits into their long-term care plan is increasingly important.</p>

            <hr className={hrClass} />

            <h2 className={h2Class}>The Role of Medicaid Planning in Washington</h2>
            <p className={pClass}>Medicaid planning is not about hiding assets or gaming the system. It is about understanding the rules — which are complex, consequential, and frequently misunderstood — and making informed decisions with enough time to make them well.</p>
            <p className={pClass}>The families who navigate Medicaid most successfully are the ones who started the conversation early. They worked with an elder law attorney to understand their options. They worked with a financial planner who understands long-term care costs. They made decisions deliberately, not under duress.</p>
            <p className={pClass}>A financial planner who specializes in senior care costs can help families model realistic scenarios — what care might cost, how long assets might last, when Medicaid might become relevant, and what steps can be taken now to preserve options later.</p>

            <hr className={hrClass} />

            <h2 className={h2Class}>Starting the Medicaid Conversation Early</h2>
            <p className={pClass}>If Medicaid may be part of your family&apos;s long-term care picture — even years from now — the time to begin the conversation is today. Not because the rules are about to change, though they may. But because the strategies available to you narrow significantly the closer you get to needing care.</p>
            <p className={pClass}>The families who plan early find themselves with choices. The families who wait find themselves with fewer.</p>

            <hr className={hrClass} />

            <p className={pClass + " italic"}>Real Property Planning connects families in the Puget Sound region with the professionals who can help — <Link to="/professionals/elder-law-attorneys" className={inlineLink}>elder law attorneys</Link>, <Link to="/professionals/financial-planners" className={inlineLink}>financial planners</Link>, and <Link to="/senior-living-advisors" className={inlineLink}>senior living advisors</Link> who understand the full landscape of long-term care in Washington State. Explore our full library of resources to start the conversation.</p>
          </div>
        </section>

        <BackToResources />
        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default MedicaidAndLongTermCare;
