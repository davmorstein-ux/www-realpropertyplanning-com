import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BackToLongTermCare from "@/components/BackToLongTermCare";
import DisclaimerSection from "@/components/DisclaimerSection";
import HeroBandTitle from "@/components/HeroBandTitle";
import heroImage from "@/assets/articles-hero-banner.webp";
import { Link } from "react-router-dom";

const h2Class = "font-serif text-[28px] font-semibold text-[hsl(215,45%,18%)] mt-10 mb-4";
const h3Class = "font-serif text-[22px] font-semibold text-[hsl(215,45%,18%)] mt-8 mb-3";
const pClass = "font-body text-lg leading-[1.8] text-[hsl(220,25%,22%)] mt-6";
const leadClass = "font-body text-lg leading-[1.8] text-[hsl(220,25%,22%)]";
const hrClass = "border-t border-[hsl(220,15%,85%)] my-10";
const inlineLink = "underline decoration-1 underline-offset-2 text-[hsl(215,45%,18%)] hover:text-[hsl(215,45%,28%)] transition-colors";

const HowToChooseCareSettings = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How to Choose Between Care Settings: A Guide for Washington Families"
        description="A practical guide to choosing between aging in place, adult family homes, assisted living, memory care, and nursing homes in Washington State — matched to actual care needs and budget."
      />
      <Header />
      <main id="main-content">
        <div className="bg-white">
          <img
            src={heroImage}
            alt="How to Choose Between Care Settings: A Guide for Washington Families"
            className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover object-center block"
            loading="eager"
            sizes="100vw"
            decoding="async"
            width={1904}
            height={521}
          />
        </div>
        <HeroBandTitle>How to Choose Between Care Settings: A Guide for Washington Families</HeroBandTitle>

        <section className="bg-[hsl(40,20%,98%)] px-6 pt-12 pb-16">
          <div className="max-w-[760px] mx-auto">
            <h2 className={h2Class + " mt-0"}>How to Choose Between Care Settings: A Guide for Washington Families</h2>
            <p className={leadClass}>The right level of care is not the most intensive one available. It is the one that matches where someone actually is — today, and in the years ahead.</p>

            <p className={pClass}>One of the most disorienting moments a family can face is knowing that something needs to change but not knowing what that something is. A parent who used to manage everything alone is struggling. A spouse whose memory is slipping. A sibling who had a fall and has not quite bounced back.</p>
            <p className={pClass}>The question that follows is harder than it sounds: what kind of care does this person actually need?</p>
            <p className={pClass}>Washington State offers a genuine spectrum of care settings — from support at home to adult family homes, assisted living facilities, memory care communities, and nursing homes. Each serves a different level of need. Each carries a different cost. And each fits a different kind of person at a different moment in their life.</p>
            <p className={pClass}>This guide helps families think through that choice clearly.</p>

            <hr className={hrClass} />

            <h2 className={h2Class}>Start With the Person, Not the Setting</h2>
            <p className={pClass}>The most common mistake families make is starting with a setting before understanding whether it is actually the right fit — researching assisted living facilities, for example, before knowing if assisted living is even necessary.</p>
            <p className={pClass}>The better starting point is an honest assessment of the person's current needs and likely trajectory. What can they do independently? What do they need help with? What is becoming unsafe? What might change in the next one, two, or five years?</p>
            <p className={pClass}>This assessment does not have to be done alone. An <Link to="/aging-life-care-managers" className={inlineLink}>Aging Life Care Manager</Link> — a professional trained to evaluate the full picture of an older adult's needs — can conduct a formal assessment and translate it into a realistic set of options. Their perspective is grounded in clinical knowledge and practical experience, and it can save families enormous time, money, and heartache.</p>

            <hr className={hrClass} />

            <h2 className={h2Class}>The Washington State Care Spectrum</h2>

            <h3 className={h3Class}>Aging in Place With Support</h3>
            <p className={pClass}>For older adults who are generally healthy and safe at home, aging in place with professional support is often the right first step. This means layering services onto an existing home — in-home care, meal delivery, transportation, housekeeping, and safety modifications such as grab bars and ramp installations.</p>
            <p className={pClass}>Aging in place preserves familiarity, autonomy, and continuity. For many people, it is the right answer, at least for a period of time. The honest caveat is that costs can climb significantly as care needs grow. What begins as a few hours of help each week can evolve into full-time care — at a cost that rivals or exceeds a residential setting.</p>

            <h3 className={h3Class}>Adult Family Homes in Washington</h3>
            <p className={pClass}>Adult family homes are licensed residential homes in Washington State that serve two to six residents. They are among the most distinctive options in the state's care landscape — offering a genuinely home-like environment, smaller staff-to-resident ratios, and a level of personalization that larger facilities often cannot match.</p>
            <p className={pClass}>They are particularly well-suited for individuals who need consistent personal care and supervision, but who thrive in a smaller, quieter, more residential setting. For families who have found assisted living facilities too large or institutional, adult family homes are frequently a revelation.</p>
            <p className={pClass}>Adult family homes vary significantly in the level of care they provide. Some serve residents with complex medical needs, including those who require nurse-delegated care. Others focus on residents with dementia or specific cultural preferences. Finding the right home requires asking the right questions — and ideally visiting in person.</p>

            <h3 className={h3Class}>Assisted Living Facilities in Washington</h3>
            <p className={pClass}>Assisted living facilities in Washington are licensed for seven or more residents and provide housing, meals, personal care assistance, and social programming. They are designed for individuals who need regular support with daily activities but do not require the intensive medical oversight of a nursing facility.</p>
            <p className={pClass}>The care in assisted living is typically tiered. A base rate covers housing and a baseline of support, with additional charges as care needs increase. Understanding this pricing structure before choosing a community is essential, because the gap between the entry-level cost and the cost at a higher care tier can be substantial.</p>
            <p className={pClass}>Assisted living is often a good fit for individuals who would benefit from a more active social environment and structured programming, and who do not need the smaller, quieter setting of an adult family home.</p>

            <h3 className={h3Class}>Memory Care for Alzheimer's and Dementia in Washington</h3>
            <p className={pClass}>Memory care communities are purpose-built for individuals living with Alzheimer's disease or other forms of dementia. They provide secure environments, enhanced staffing ratios, and structured daily programming designed around the specific challenges of cognitive decline.</p>
            <p className={pClass}>The transition to memory care is often one of the most emotionally difficult decisions a family makes. What families consistently report afterward is relief — that their person is safe, that trained professionals are present, and that the burden of constant vigilance has lifted.</p>
            <p className={pClass}>Memory care may be offered as a standalone community or as a dedicated wing within a larger assisted living facility. The quality and philosophy of care varies significantly between providers, and visiting in person — asking specific questions about staffing, programming, and how the community handles behavioral challenges — is essential.</p>

            <h3 className={h3Class}>Nursing Homes in Washington State</h3>
            <p className={pClass}>Nursing homes provide the most intensive level of residential care — 24-hour supervised nursing, medical management, rehabilitation therapy, and comprehensive personal care. They are appropriate for individuals whose medical needs require continuous clinical oversight that cannot be safely provided in a less intensive setting.</p>
            <p className={pClass}>Nursing homes are not always permanent placements. Many admissions are short-term — for post-surgical rehabilitation or recovery from a serious illness — with the goal of returning home or to a less intensive setting.</p>

            <hr className={hrClass} />

            <h2 className={h2Class}>The Questions That Actually Matter</h2>
            <p className={pClass}>Choosing between care settings ultimately comes down to a small number of honest questions. What level of support does this person genuinely need right now — and what might they need in two or three years? Is the current home truly safe, not just familiar? What can the family realistically afford over the long term, not just this month? What does the person at the center of this decision actually want? And is this a decision being made with them, or for them?</p>
            <p className={pClass}>That last question matters more than most families realize. The older adult whose care is being arranged is not a passive recipient of decisions made by others. They have preferences, fears, and things that matter deeply. The decisions made with their input — even when the conversation is hard — tend to be the ones that hold.</p>

            <hr className={hrClass} />

            <h2 className={h2Class}>When to Ask for Professional Help in Washington</h2>
            <p className={pClass}>If the assessment feels too complex, the options too numerous, or the emotions too close to the surface, asking for professional guidance is not a sign of failure. It is a sign of good judgment.</p>
            <p className={pClass}>A <Link to="/senior-living-advisors" className={inlineLink}>Senior Living Advisor</Link> can help families navigate the options available in a specific area — matching care needs, preferences, and budget to realistic choices. An <Link to="/aging-life-care-managers" className={inlineLink}>Aging Life Care Manager</Link> can conduct a formal needs assessment and provide clinical context that helps families understand what level of care is genuinely appropriate.</p>
            <p className={pClass}>The goal is not to find the most intensive setting available. The goal is to find the right one — the setting that fits where this person is today, with room to adapt as things change.</p>

            <hr className={hrClass} />

            <p className={pClass + " italic"}>Real Property Planning connects families in the Puget Sound region with the professionals who can help — <Link to="/senior-living-advisors" className={inlineLink}>Senior Living Advisors</Link>, <Link to="/aging-life-care-managers" className={inlineLink}>Aging Life Care Managers</Link>, and <Link to="/professionals/financial-planners" className={inlineLink}>financial planners</Link> who understand the full landscape of care in Washington State. <Link to="/guides-and-resources" className={inlineLink}>Explore our full library of resources</Link> to start the conversation.</p>
          </div>
        </section>

        <BackToLongTermCare />
        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default HowToChooseCareSettings;