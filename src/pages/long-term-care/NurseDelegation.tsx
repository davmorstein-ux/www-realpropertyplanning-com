import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BackToLongTermCare from "@/components/BackToLongTermCare";
import DisclaimerSection from "@/components/DisclaimerSection";
import HeroBandTitle from "@/components/HeroBandTitle";
import ArticleAudioPlayer from "@/components/ArticleAudioPlayer";
import { Link } from "react-router-dom";
import NextQuestions from "@/components/NextQuestions";

const h2Class = "font-serif text-[28px] font-semibold text-[hsl(215,45%,18%)] mt-10 mb-4";
const pClass = "font-body text-lg leading-[1.8] text-[hsl(220,25%,22%)] mt-6";
const leadClass = "font-body text-lg leading-[1.8] text-[hsl(220,25%,22%)]";
const hrClass = "border-t border-[hsl(220,15%,85%)] my-10";
const inlineLink =
  "underline decoration-1 underline-offset-2 text-[hsl(215,45%,18%)] hover:text-[hsl(215,45%,28%)] transition-colors";

const NurseDelegation = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="The Nurse Delegation Program in Washington State: What Families Need to Know"
        description="Learn how Washington State's Nurse Delegation Program allows trained caregivers to perform nursing tasks at home, in adult family homes, and in assisted living — and how Medicaid covers the cost."
      />
      <Header />
      <main id="main-content">
<HeroBandTitle as="h1">The Nurse Delegation Program in Washington State: What Families Need to Know</HeroBandTitle>

        <section className="bg-[hsl(40,20%,98%)] px-6 pt-12 pb-16">
          <div className="max-w-[760px] mx-auto">
            <h2 className={h2Class + " mt-0"}>
              The Nurse Delegation Program in Washington State: What Families Need to Know
            </h2>
            <p className={leadClass}>
              Washington&apos;s Nurse Delegation Program lets a trained caregiver perform certain nursing tasks for an
              older adult at home, in an adult family home or in assisted living, so needing nursing-level care does
              not always mean moving to a nursing home.
            </p>

            <div className="mb-6">
              <ArticleAudioPlayer audioSrc="/audio/nurse-delegation.mp3" />
            </div>

            <p className={pClass}>
              Some older adults need help with medical tasks (insulin injections, wound care, medication management)
              but are otherwise stable and do not need a nursing home. Families often assume only a licensed nurse can
              perform those tasks, which seems to rule out staying home or staying in an adult family home.
            </p>
            <p className={pClass}>Washington's Nurse Delegation Program was designed to close that gap.</p>

            <hr className={hrClass} />

            <h2 className={h2Class}>What Is Nurse Delegation?</h2>
            <p className={pClass}>
              Nurse delegation is a formal process in which a registered nurse trains and authorizes a credentialed
              caregiver to perform specific nursing tasks for a specific client. The caregiver must be a registered or
              certified nursing assistant, or a certified home care aide, who has completed nurse delegation training.
            </p>
            <p className={pClass}>
              It is a legally recognized, closely regulated practice, governed by state nursing law (RCW 18.79.260) and Nursing Commission rules (WAC 246-840-910 to -970). The
              Washington State Department of Social and Health Services (DSHS) provides caregiver training and pays
              for delegation for Medicaid clients. The delegating nurse
              retains clinical oversight and responsibility. The trained caregiver performs the tasks under that nurse's
              supervision. The client receives the care they need in the setting they prefer.
            </p>

            <hr className={hrClass} />

            <h2 className={h2Class}>Who Can Benefit From Nurse Delegation in Washington?</h2>
            <p className={pClass}>
              Nurse delegation is available to adults receiving care at home, in an adult family home, or in an assisted
              living facility who need assistance with tasks that would otherwise require a licensed nurse. (It is not
              used in nursing homes, which have licensed nurses on staff.)
            </p>
            <p className={pClass}>
              To be eligible, the client&apos;s condition must be stable and predictable. The nursing tasks must be ones
              that can be safely taught to and performed by a trained nursing assistant or home care aide. And the registered nurse overseeing the delegation
              must determine that the arrangement is appropriate for that specific individual.
            </p>
            <p className={pClass}>
              Common tasks that can be delegated include insulin administration, oral medication management, wound care
              and dressing changes, catheter care, and monitoring of specific health conditions such as blood pressure
              or blood glucose levels.
            </p>
            <p className={pClass}>
              Washington law says some tasks can never be delegated: injections other than insulin, sterile procedures,
              central line care, and any task that requires a nurse&apos;s judgment (situations where the nature of the
              task changes based on the client&apos;s condition in ways that require a nurse&apos;s real-time
              assessment).
            </p>

            <hr className={hrClass} />

            <h2 className={h2Class}>How the Program Works in Practice</h2>
            <p className={pClass}>
              The process begins with a registered nurse (typically a community nurse working with DSHS or a home
              health agency) assessing the client's needs and the proposed caregiver's capability.
            </p>
            <p className={pClass}>
              If the nurse determines that delegation is appropriate, they provide hands-on training to the caregiver
              for each specific task. The caregiver must demonstrate competency before performing the task
              independently. The nurse then documents the delegation formally and establishes a plan for ongoing
              oversight, including regular visits, at least every 90 days, to monitor the client and check in with the
              caregiver.
            </p>
            <p className={pClass}>
              The delegation is client-specific and task-specific. A caregiver delegated to administer insulin for one
              client is not automatically authorized to perform that task for another. Each delegation is its own formal
              arrangement.
            </p>

            <hr className={hrClass} />

            <h2 className={h2Class}>Nurse Delegation in Adult Family Homes</h2>
            <p className={pClass}>
              Adult family homes are a primary setting for nurse delegation. Because they are small residential
              settings (licensed for two to six residents, or up to eight with DSHS approval), they are not required
              to have a nurse on staff around the clock. Without delegation, residents who develop nursing-level care
              needs may have to choose between moving to a higher level of care and going without.
            </p>
            <p className={pClass}>
              Nurse delegation allows adult family home providers to meet those needs legally and safely, so residents
              can stay in a familiar, home-like setting instead of moving to a nursing facility.
            </p>
            <p className={pClass}>
              When evaluating an adult family home for someone with medical needs, ask whether the provider works with
              a delegating nurse. It is a key question.
            </p>

            <hr className={hrClass} />

            <h2 className={h2Class}>Nurse Delegation and Medicaid in Washington State</h2>
            <p className={pClass}>
              Washington State's Medicaid program covers nurse delegation services for eligible clients. For older
              adults and individuals with disabilities who qualify for Medicaid long-term care services, the cost of the
              delegating nurse's assessments, training, and oversight visits is covered by Medicaid rather than paid out
              of pocket by the family.
            </p>
            <p className={pClass}>
              For a family with medical needs to meet, a preferred living setting and limited resources, that coverage
              can make nurse delegation a practical option.
            </p>

            <hr className={hrClass} />

            <h2 className={h2Class}>What Families Should Know</h2>
            <p className={pClass}>
              If medical care needs have put a family member&apos;s ability to stay home, or in a smaller residential
              setting, in doubt, ask about nurse delegation. The program is not widely advertised, and some families
              learn of it only after being told that a nursing home is the only option. It often isn&apos;t.
            </p>
            <p className={pClass}>
              A conversation with a DSHS case manager, a home health agency, or an Aging Life Care Manager can help
              determine whether nurse delegation is appropriate for a specific situation. An Aging Life Care Manager is
              well placed to assess the full picture (medical needs, living situation, caregiver capacity) and explain
              what is actually possible.
            </p>
            <p className={pClass}>
              The program&apos;s purpose is to let an older adult receive the care they need in the place they want to
              live, with as much continuity as possible.
            </p>

            <hr className={hrClass} />

            <p className={pClass + " italic"}>
              Real Property Planning is a free educational resource for Washington families making senior care
              decisions.{" "}
              <Link to="/guides-and-resources" className={inlineLink}>
                Explore the full library of resources
              </Link>{" "}
              or{" "}
              <Link to="/aging-life-care-managers" className={inlineLink}>
                learn what an independent Aging Life Care Manager does
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

export default NurseDelegation;
