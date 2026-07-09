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
const h3Class = "font-serif text-[22px] font-semibold text-[hsl(215,45%,18%)] mt-8 mb-3";
const pClass = "font-body text-lg leading-[1.8] text-[hsl(220,25%,22%)] mt-6";
const leadClass = "font-body text-lg leading-[1.8] text-[hsl(220,25%,22%)]";
const hrClass = "border-t border-[hsl(220,15%,85%)] my-10";
const inlineLink =
  "underline decoration-1 underline-offset-2 text-[hsl(215,45%,18%)] hover:text-[hsl(215,45%,28%)] transition-colors";

const HospitalDischargePlanning = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Planning Your Hospital Discharge: A Guide for Washington Families"
        description="A comprehensive guide to hospital discharge planning in Washington State — what questions to ask, understanding your options, and how to avoid readmission after a hospital stay."
      />
      <Header />
      <main id="main-content">
        <div className="bg-white">
          <img
            src={heroImage}
            alt="Planning Your Hospital Discharge: A Guide for Washington Families"
            className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover object-center block"
            loading="eager"
            sizes="100vw"
            decoding="async"
            width={1904}
            height={521}
          />
        </div>
        <HeroBandTitle>Planning Your Hospital Discharge: A Guide for Washington Families</HeroBandTitle>

        <section className="bg-[hsl(40,20%,98%)] px-6 pt-12 pb-16">
          <div className="max-w-[760px] mx-auto">
            <h2 className={h2Class + " mt-0"}>Planning Your Hospital Discharge: A Guide for Washington Families</h2>
            <p className={leadClass}>
              The moment of discharge is not the time to start planning. The families who do best are the ones who began
              asking questions on the day of admission.
            </p>

            <div className="mb-6">
              <ArticleAudioPlayer audioSrc="/audio/hospital-discharge-planning.mp3" />
            </div>

            <p className={pClass}>
              A hospital stay rarely ends the way it begins. Someone goes in for one thing and comes out facing a
              different landscape entirely — more fragile than before, with care needs that didn't exist a week ago, and
              a discharge planner standing in the doorway with paperwork and a timeline.
            </p>
            <p className={pClass}>
              For families, this moment can feel overwhelming. The hospital wants the bed. The patient wants to go home.
              And nobody has quite explained what going home is actually going to look like.
            </p>
            <p className={pClass}>
              This guide is designed to change that — to help families in Washington State understand how hospital
              discharge works, what questions to ask, and how to plan a transition that is safe, realistic, and
              genuinely thought through.
            </p>

            <hr className={hrClass} />

            <h2 className={h2Class}>Why Discharge Planning Matters More Than Most Families Realize</h2>
            <p className={pClass}>
              Research on hospital readmissions tells a consistent story: patients who are discharged without adequate
              planning are significantly more likely to return to the hospital within 30 days. In Washington State, as
              across the country, hospital readmissions are common, costly, and frequently preventable.
            </p>
            <p className={pClass}>
              The most common reasons for readmission are not medical failures. They are planning failures. Medications
              that weren't managed correctly at home. Follow-up appointments that weren't made. Care needs that exceeded
              what the family could provide. A home environment that wasn't safe for someone with new limitations.
            </p>
            <p className={pClass}>
              Good discharge planning addresses all of these before the patient leaves the building.
            </p>

            <hr className={hrClass} />

            <h2 className={h2Class}>Who Is Involved in Discharge Planning</h2>
            <p className={pClass}>
              Every hospital patient is entitled to discharge planning services. The primary professional responsible is
              typically a hospital discharge planner — usually a social worker or case manager — whose job is to assess
              the patient's post-discharge needs and help arrange appropriate services and settings.
            </p>
            <p className={pClass}>
              In Washington State, hospitals are required to provide patients and families with a written discharge plan
              that includes information about where the patient is being discharged, what services have been arranged,
              and what follow-up care is needed.
            </p>
            <p className={pClass}>
              The discharge planner is a valuable resource — but they are managing many patients simultaneously, and
              their primary obligation is to the hospital's timeline. Families who engage actively, ask specific
              questions, and advocate clearly for their loved one's needs consistently achieve better outcomes than
              those who defer entirely to the process.
            </p>

            <hr className={hrClass} />

            <h2 className={h2Class}>The Questions Every Family Should Ask</h2>
            <p className={pClass}>
              Before a loved one leaves the hospital, families should have clear answers to the following questions.
              What is the primary diagnosis, and what does recovery typically look like? What are the specific discharge
              instructions, and who is responsible for each element of follow-up care? What medications have been
              prescribed or changed, and does the patient or family understand how to manage them correctly? What level
              of care will be needed at home — and is the home environment set up to provide it safely? Has a follow-up
              appointment been scheduled with the primary care physician or specialist? What warning signs should prompt
              a call to the doctor or a return to the emergency room? If additional care is needed — physical therapy,
              wound care, skilled nursing — has it been arranged, and does the patient know how to access it?
            </p>
            <p className={pClass}>
              These are not difficult questions. But they are frequently left unasked, and the gaps they leave are where
              readmissions happen.
            </p>

            <hr className={hrClass} />

            <h2 className={h2Class}>Understanding Your Discharge Options in Washington</h2>

            <h3 className={h3Class}>Returning Home With Support</h3>
            <p className={pClass}>
              For patients who are stable and have manageable care needs, returning home with professional support is
              often the right choice. This may include in-home care from a home health aide, skilled nursing visits,
              physical or occupational therapy at home, meal delivery, and transportation to follow-up appointments.
            </p>
            <p className={pClass}>
              Washington State has a range of home care agencies and services available. A discharge planner can help
              identify appropriate providers, but families should feel empowered to ask about specific agencies and to
              request referrals to providers they have researched independently.
            </p>

            <h3 className={h3Class}>Short-Term Skilled Nursing Facility Care</h3>
            <p className={pClass}>
              For patients who need more intensive rehabilitation or nursing care than can be safely provided at home, a
              short-term stay in a skilled nursing facility may be recommended. Medicare covers the full cost of skilled
              nursing facility care for the first 20 days, with a daily copayment from day 21 through day 100, when
              coverage ends. Understanding this timeline before agreeing to a skilled nursing placement is essential.
            </p>

            <h3 className={h3Class}>Adult Family Homes and Assisted Living</h3>
            <p className={pClass}>
              For patients whose care needs have changed significantly — and for whom returning to independent living is
              no longer realistic — a hospital discharge may be the catalyst for a longer-term transition to an adult
              family home or assisted living facility.
            </p>
            <p className={pClass}>
              When this happens, the discharge planning process becomes a care planning process. A{" "}
              <Link to="/senior-living-advisors" className={inlineLink}>
                Senior Living Advisor
              </Link>{" "}
              can help families identify appropriate options quickly. An{" "}
              <Link to="/aging-life-care-managers" className={inlineLink}>
                Aging Life Care Manager
              </Link>{" "}
              can conduct a professional assessment of the patient's needs and help the family understand what level of
              care is genuinely required.
            </p>

            <hr className={hrClass} />

            <h2 className={h2Class}>The Role of the Family Caregiver</h2>
            <p className={pClass}>
              Family members who will be providing or coordinating care after discharge play a critical role in the
              process — and they deserve to be treated as full participants, not bystanders.
            </p>
            <p className={pClass}>
              Before discharge, family caregivers should receive hands-on instruction in any care tasks they will be
              performing — wound care, medication management, mobility assistance. They should know exactly who to call
              if something goes wrong. And they should be honest with themselves and with the discharge team about what
              they can realistically provide.
            </p>
            <p className={pClass}>
              Caregiver burnout is real. The families who do best are not the ones who take on everything — they are the
              ones who build a realistic support structure that includes professional help alongside family involvement.
            </p>

            <hr className={hrClass} />

            <h2 className={h2Class}>After Discharge: The First 72 Hours</h2>
            <p className={pClass}>
              The first 72 hours after hospital discharge are statistically the highest-risk period for complications
              and readmission. This is the window when medications get missed, warning signs go unrecognized, and the
              gap between what was planned and what is actually happening becomes apparent.
            </p>
            <p className={pClass}>
              Families should plan to be closely involved during this period — checking in frequently, confirming that
              medications are being taken correctly, watching for the warning signs identified at discharge, and
              ensuring that scheduled follow-up appointments are kept.
            </p>
            <p className={pClass}>
              If something does not feel right in the first 72 hours, calling the doctor is always the right move. The
              cost of a phone call is far lower than the cost of a readmission.
            </p>

            <hr className={hrClass} />

            <h2 className={h2Class}>Planning Before the Crisis</h2>
            <p className={pClass}>
              The best time to think about hospital discharge planning is before anyone is in the hospital.
            </p>
            <p className={pClass}>
              Families who have already discussed care preferences, identified a primary care physician, established
              legal documents such as a durable power of attorney for health care and an advance directive, and built
              relationships with the professionals who can help — an elder law attorney, a financial planner, an Aging
              Life Care Manager — are substantially better positioned when a hospitalization occurs.
            </p>
            <p className={pClass}>
              A hospitalization is a disruption. But for families who have planned ahead, it does not have to be a
              crisis.
            </p>

            <hr className={hrClass} />

            <p className={pClass + " italic"}>
              Real Property Planning connects families in the Puget Sound region with the professionals who can help —{" "}
              <Link to="/senior-living-advisors" className={inlineLink}>
                Senior Living Advisors
              </Link>
              ,{" "}
              <Link to="/aging-life-care-managers" className={inlineLink}>
                Aging Life Care Managers
              </Link>
              ,{" "}
              <Link to="/professionals/elder-law-attorneys" className={inlineLink}>
                elder law attorneys
              </Link>
              , and{" "}
              <Link to="/professionals/financial-planners" className={inlineLink}>
                financial planners
              </Link>{" "}
              who understand the full landscape of care in Washington State.{" "}
              <Link to="/guides-and-resources" className={inlineLink}>
                Explore our full library of resources
              </Link>{" "}
              to start the conversation.
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

export default HospitalDischargePlanning;
