import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BackToLongTermCare from "@/components/BackToLongTermCare";
import DisclaimerSection from "@/components/DisclaimerSection";
import HeroBandTitle from "@/components/HeroBandTitle";
import ArticleAudioPlayer from "@/components/ArticleAudioPlayer";
import { Link } from "react-router-dom";
import NextQuestions from "@/components/NextQuestions";
import QuickAnswers from "@/components/QuickAnswers";

const h2Class = "font-serif text-[28px] font-semibold text-[hsl(215,45%,18%)] mt-10 mb-4";
const h3Class = "font-serif text-[22px] font-semibold text-[hsl(215,45%,18%)] mt-8 mb-3";
const pClass = "font-body text-lg leading-[1.8] text-[hsl(220,25%,22%)] mt-6";
const leadClass = "font-body text-lg leading-[1.8] text-[hsl(220,25%,22%)]";
const hrClass = "border-t border-[hsl(220,15%,85%)] my-10";
const inlineLink =
  "underline decoration-1 underline-offset-2 text-[hsl(215,45%,18%)] hover:text-[hsl(215,45%,28%)] transition-colors";

const HowToChooseCareSettings = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="How to Choose Between Care Settings: A Guide for Washington State Families"
        description="A practical guide to choosing between aging in place, adult family homes, assisted living, memory care, and nursing homes in Washington State (WA) — matched to actual care needs and budget."
      />
      <Header />
      <main id="main-content">
<HeroBandTitle as="h1">How to Choose Between Care Settings: A Guide for Washington State Families</HeroBandTitle>
<QuickAnswers />

        <section className="bg-[hsl(40,20%,98%)] px-6 pt-12 pb-16">
          <div className="max-w-[760px] mx-auto">
            <h2 className={h2Class + " mt-0"}>How to Choose Between Care Settings: A Guide for Washington State Families</h2>
            <p className={leadClass}>
              Choose the setting that matches the care a person needs now and is likely to need in the next few years,
              not the most intensive one available.
            </p>

            <div className="mb-6">
              <ArticleAudioPlayer audioSrc="/audio/how-to-choose-care-settings.mp3" />
            </div>

            <p className={pClass}>
              The usual starting point is a change at home: a parent who managed alone is struggling, a spouse's memory
              is slipping, or someone has had a fall and not fully recovered. The first question is what kind of care
              that person needs.
            </p>
            <p className={pClass}>
              Washington State has a range of care settings: support at home, adult family homes, assisted living
              facilities, memory care communities and nursing homes. Each serves a different level of need, at a
              different cost.
            </p>
            <p className={pClass}>This guide sets out how each one fits and the questions that decide the choice.</p>

            <hr className={hrClass} />

            <h2 className={h2Class}>Start With the Person, Not the Setting</h2>
            <p className={pClass}>
              A common mistake is to start with a setting, for example researching assisted living facilities before
              knowing whether assisted living is needed.
            </p>
            <p className={pClass}>
              Start instead with an honest assessment of the person's current needs and how they are likely to change.
              What can they do independently? What do they need help with? What is becoming unsafe? What might change in
              the next one, two, or five years?
            </p>
            <p className={pClass}>
              An{" "}
              <Link to="/aging-life-care-managers" className={inlineLink}>
                Aging Life Care Manager
              </Link>{" "}
              (a professional trained to evaluate the full range of an older adult's needs) can do a
              formal assessment and turn it into a realistic set of options, which can save time and money.
            </p>

            <hr className={hrClass} />

            <h2 className={h2Class}>The Washington State Care Spectrum</h2>

            <h3 className={h3Class}>Aging in Place With Support</h3>
            <p className={pClass}>
              For older adults who are generally healthy and safe at home, aging in place with professional support is
              often the first step. This means adding services to the existing home: in-home care, meal delivery,
              transportation, housekeeping, and safety modifications such as grab bars and ramps.
            </p>
            <p className={pClass}>
              Aging in place keeps familiar surroundings, independence and routine, and it often works for a period of
              time. The drawback is that costs can climb as care needs grow. A few hours of help each week can become
              full-time care, at a cost that matches or exceeds a residential setting.
            </p>

            <h3 className={h3Class}>Adult Family Homes in Washington</h3>
            <p className={pClass}>
              Adult family homes are licensed residential homes in Washington State that serve two to six residents, or
              up to eight with DSHS approval.
              They offer a home-like environment, fewer residents per caregiver, and more individual attention than
              larger facilities can usually give.
            </p>
            <p className={pClass}>
              They suit people who need consistent personal care and supervision but do better in a smaller, quieter,
              residential setting. Families who find assisted living facilities too large or institutional often look
              at adult family homes next.
            </p>
            <p className={pClass}>
              Adult family homes vary widely in the level of care they provide. Some serve residents with complex
              medical needs, including those who require nurse-delegated care. Others focus on residents with dementia
              or specific cultural preferences. Ask each home what care it provides and, ideally, visit in person.
            </p>

            <h3 className={h3Class}>Assisted Living Facilities in Washington</h3>
            <p className={pClass}>
              Assisted living facilities in Washington are licensed by DSHS for seven or more residents and provide housing,
              meals, personal care assistance, and social programming. They are designed for individuals who need
              regular support with daily activities but do not require the intensive medical oversight of a nursing
              facility.
            </p>
            <p className={pClass}>
              Assisted living care is usually priced in tiers. A base rate covers housing and a baseline of support,
              with additional charges as care needs increase. Ask how the tiers work before choosing a community,
              because the gap between the entry-level cost and the cost at a higher care tier can be substantial.
            </p>
            <p className={pClass}>
              Assisted living often suits people who would benefit from a more active social environment and
              structured programming, and who do not need the smaller, quieter setting of an adult family home.
            </p>

            <h3 className={h3Class}>Memory Care for Alzheimer's and Dementia in Washington</h3>
            <p className={pClass}>
              Memory care communities are purpose-built for individuals living with Alzheimer's disease or other forms
              of dementia. They provide secure environments, enhanced staffing ratios, and structured daily programming
              designed around the specific challenges of cognitive decline.
            </p>
            <p className={pClass}>
              The move to memory care is often an emotionally hard decision. Afterward, families often describe relief
              that the person is safe, that trained staff are present, and that they no longer have to watch over them
              constantly.
            </p>
            <p className={pClass}>
              Memory care may be offered as a standalone community or as a dedicated wing within a larger assisted
              living facility. Quality and approach vary widely between providers, so visit in person and ask specific
              questions about staffing, programming, and how the community handles behavioral challenges.
            </p>

            <h3 className={h3Class}>Nursing Homes in Washington State</h3>
            <p className={pClass}>
              Nursing homes provide the most intensive level of residential care: 24-hour supervised nursing, medical
              management, rehabilitation therapy, and comprehensive personal care. They are appropriate for people
              whose medical needs require continuous clinical oversight that cannot be safely provided in a less
              intensive setting.
            </p>
            <p className={pClass}>
              Nursing homes are not always permanent placements. Many admissions are short-term, for rehabilitation
              after surgery or recovery from a serious illness, with the goal of returning home or to a less intensive
              setting.
            </p>

            <hr className={hrClass} />

            <h2 className={h2Class}>The Questions That Actually Matter</h2>
            <p className={pClass}>
              The choice comes down to a few questions: what level of support the person needs now, and what they might
              need in two or three years; whether the current home is safe, not just familiar; what the family can
              afford over the long term, not just this month; what the person wants; and whether the decision is being
              made with them or for them.
            </p>
            <p className={pClass}>
              The last question matters most. The older adult has preferences and fears of their own, and decisions made
              with their input, even when the conversation is hard, tend to be the ones that hold.
            </p>

            <hr className={hrClass} />

            <h2 className={h2Class}>When to Ask for Professional Help in Washington</h2>
            <p className={pClass}>
              Professional help is worth it when the assessment is complex, the options are many, or emotions are running
              high.
            </p>
            <p className={pClass}>
              A{" "}
              <Link to="/senior-living-advisors" className={inlineLink}>
                Senior Living Advisor
              </Link>{" "}
              can explain the options available in a specific area and match care needs, preferences and budget to
              realistic choices. An{" "}
              <Link to="/aging-life-care-managers" className={inlineLink}>
                Aging Life Care Manager
              </Link>{" "}
              can conduct a formal needs assessment and provide clinical context on what level of care is appropriate.
            </p>
            <p className={pClass}>
              The aim is a setting that fits the person's needs today and can adapt as they change, not the most
              intensive one available.
            </p>

            <hr className={hrClass} />

            <p className={pClass + " italic"}>
              Professionals who can help include{" "}
              <Link to="/senior-living-advisors" className={inlineLink}>
                Senior Living Advisors
              </Link>
              ,{" "}
              <Link to="/aging-life-care-managers" className={inlineLink}>
                Aging Life Care Managers
              </Link>
              , and{" "}
              <Link to="/professionals/financial-planners" className={inlineLink}>
                financial planners
              </Link>{" "}
              who understand the care options in Washington State.{" "}
              <Link to="/guides-and-resources" className={inlineLink}>
                Explore the full library of resources
              </Link>{" "}
              to start the conversation.
            </p>
          </div>
        </section>

        <BackToLongTermCare />
        <DisclaimerSection />
        <NextQuestions />
      </main>
      <Footer />
    </div>
  );
};

export default HowToChooseCareSettings;
