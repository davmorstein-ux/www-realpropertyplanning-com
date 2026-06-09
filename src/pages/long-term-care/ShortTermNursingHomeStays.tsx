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

const ShortTermNursingHomeStays = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Short-Term Nursing Home Stays in Washington State: What Families Need to Know"
        description="Learn how short-term skilled nursing care works in Washington State — Medicare coverage, rehabilitation quality, discharge planning, and how to navigate the transition back home."
      />
      <Header />
      <main id="main-content">
        <div className="bg-white">
          <img
            src={heroImage}
            alt="Short-Term Nursing Home Stays in Washington State"
            className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover object-center block"
            loading="eager"
            sizes="100vw"
            decoding="async"
            width={1904}
            height={521}
          />
        </div>
        <HeroBandTitle>Short-Term Nursing Home Stays in Washington State: What Families Need to Know</HeroBandTitle>

        <section className="bg-[hsl(40,20%,98%)] px-6 pt-12 pb-16">
          <div className="max-w-[760px] mx-auto">
            <h2 className={h2Class + " mt-0"}>Short-Term Nursing Home Stays in Washington State: What Families Need to Know</h2>
            <p className={leadClass}>A nursing home admission does not always mean a permanent move. For many older adults in Washington, a short-term stay is a bridge between hospital and home — and knowing how to cross it makes all the difference.</p>

            <p className={pClass}>Most people hear the words "nursing home" and think of long-term care. A final chapter. A place you go and don't come back from. That assumption causes real harm — because it leads families to resist a level of care that could genuinely help, at exactly the moment when help is most needed.</p>
            <p className={pClass}>The truth is more hopeful. Skilled nursing stays are often temporary. They help older adults recover after surgery, illness, or a medical setback — and then return to the life they were living before.</p>

            <hr className={hrClass} />

            <h2 className={h2Class}>What Is a Short-Term Nursing Home Stay?</h2>
            <p className={pClass}>A short-term nursing home stay — also called skilled nursing care or post-acute care — is a medically supervised rehabilitation stay in a licensed nursing facility.</p>
            <p className={pClass}>Common reasons include recovery after hip or knee replacement, stroke rehabilitation, recovery from a serious infection, managing a new or changing medical condition, and wound care that requires clinical oversight.</p>
            <p className={pClass}>The goal is to help the person regain function, stability, and independence so they can return home, or to an assisted living facility or adult family home in Washington State.</p>

            <hr className={hrClass} />

            <h2 className={h2Class}>How Medicare Covers Short-Term Nursing Home Stays</h2>
            <p className={pClass}>For many families, the financial picture of a short-term stay is less daunting than expected — because Medicare covers skilled nursing facility care under specific conditions.</p>
            <p className={pClass}>To qualify, the individual must have had a hospital stay of at least three consecutive days, be admitted to a Medicare-certified skilled nursing facility within 30 days of that hospital stay, and require skilled nursing or rehabilitation services on a daily basis.</p>
            <p className={pClass}>When those conditions are met, Medicare covers the full cost for the first 20 days. From day 21 through day 100, a daily copayment applies — in 2025, that copayment is $204 per day. After day 100, Medicare coverage ends entirely.</p>
            <p className={pClass}>Knowing the timeline and copayment rules before a stay begins allows families to plan rather than react.</p>

            <hr className={hrClass} />

            <h2 className={h2Class}>What Good Rehabilitation Looks Like in Washington Nursing Homes</h2>
            <p className={pClass}>Not all skilled nursing facilities offer the same quality of rehabilitation. Strong therapy programs lead to faster recovery and better outcomes.</p>
            <p className={pClass}>When choosing a facility for a short-term stay, look for on-site physical therapy, occupational therapy, and speech-language pathology. Ask how many therapy hours are provided each day, whether therapy is available seven days a week, and what percentage of short-term residents return home successfully.</p>
            <p className={pClass}>Washington State nursing home inspection records and Medicare's Care Compare website include quality measures specifically relevant to short-term care — including community discharge rates and functional improvement during recovery. These are public records, and reviewing them before choosing a facility is time well spent.</p>

            <hr className={hrClass} />

            <h2 className={h2Class}>Planning Discharge Before the Stay Begins</h2>
            <p className={pClass}>The families who navigate short-term nursing home stays most successfully share one habit: they begin planning the discharge on day one.</p>
            <p className={pClass}>Ask from the very beginning what the goals of the stay are, what milestones must be reached before returning home, and what support will be needed upon discharge — grab bars, a hospital bed, in-home care, meal delivery. Know who will coordinate the transition and what the plan looks like if recovery takes longer than expected.</p>
            <p className={pClass}>Hospital discharge planners and nursing home social workers are valuable allies in this process. But families who stay engaged, ask specific questions, and advocate for a clear discharge plan consistently see better outcomes than those who leave the planning entirely to others.</p>

            <hr className={hrClass} />

            <h2 className={h2Class}>When a Short-Term Stay Becomes Long-Term</h2>
            <p className={pClass}>Sometimes recovery takes longer than expected. Sometimes a short-term stay reveals that returning to the previous living situation is no longer safe or realistic.</p>
            <p className={pClass}>If that happens, talk about next steps early — not at the point of crisis. A Senior Living Advisor can help families assess realistic options, from remaining in the nursing facility long-term to transitioning to an assisted living facility or adult family home in Washington. An Aging Life Care Manager can conduct a professional assessment and help coordinate whatever comes next.</p>
            <p className={pClass}>The goal is always the same: the right level of care, in the right setting, with enough time to make a thoughtful decision.</p>

            <hr className={hrClass} />

            <h2 className={h2Class}>A Bridge, Not a Destination</h2>
            <p className={pClass}>A well-managed short-term nursing home stay is one of the most effective tools available for recovering from a major health event. It is intensive, focused, and time-limited — a bridge between crisis and stability.</p>
            <p className={pClass}>Families do best when they understand the purpose of the stay, plan for the transition, and keep the goal of returning home in view from the very first day.</p>

            <hr className={hrClass} />

            <p className={pClass + " italic"}>Real Property Planning helps families in the Puget Sound region navigate senior care decisions with clarity and confidence. <Link to="/guides-and-resources" className={inlineLink}>Explore our full library of resources</Link> or <Link to="/senior-living-advisors" className={inlineLink}>connect with a senior living advisor</Link> to start the conversation.</p>
          </div>
        </section>

        <BackToResources />
        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default ShortTermNursingHomeStays;
