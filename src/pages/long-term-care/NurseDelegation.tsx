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

const NurseDelegation = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="The Nurse Delegation Program in Washington State: What Families Need to Know"
        description="Learn how Washington State's Nurse Delegation Program allows trained caregivers to perform nursing tasks in home care and adult family home settings — and how Medicaid covers the cost."
      />
      <Header />
      <main id="main-content">
        <div className="bg-white">
          <img
            src={heroImage}
            alt="The Nurse Delegation Program in Washington State"
            className="w-full h-[280px] md:h-[420px] lg:h-[520px] object-cover object-center block"
            loading="eager"
            sizes="100vw"
            decoding="async"
            width={1904}
            height={521}
          />
        </div>
        <HeroBandTitle as="h1">The Nurse Delegation Program in Washington State: What Families Need to Know</HeroBandTitle>

        <section className="bg-[hsl(40,20%,98%)] px-6 pt-12 pb-16">
          <div className="max-w-[760px] mx-auto">
            <h2 className={h2Class + " mt-0"}>
              The Nurse Delegation Program in Washington State: What Families Need to Know
            </h2>
            <p className={leadClass}>
              For older adults in Washington who need nursing-level care but want to stay home — or in a smaller
              residential setting — the Nurse Delegation Program opens a door many families don't know exists.
            </p>

            <div className="mb-6">
              <ArticleAudioPlayer audioSrc="/audio/nurse-delegation.mp3" />
            </div>

            <p className={pClass}>
              There is a gap in senior care that frustrates families across Washington State. On one side is an older
              adult who needs help with medical tasks — insulin injections, wound care, medication management — but who
              is otherwise stable and does not need a nursing home. On the other side is the assumption that only a
              licensed nurse can perform those tasks, which makes staying home, or staying in an adult family home, feel
              impossible.
            </p>
            <p className={pClass}>Washington's Nurse Delegation Program was designed to close that gap.</p>

            <hr className={hrClass} />

            <h2 className={h2Class}>What Is Nurse Delegation?</h2>
            <p className={pClass}>
              Nurse delegation is a formal process where a registered nurse trains and authorizes an unlicensed
              caregiver — called a home care aide or adult family home provider — to perform specific nursing tasks for
              a specific client.
            </p>
            <p className={pClass}>
              This is not a workaround or a compromise. It is a legally recognized, carefully regulated program
              administered by the Washington State Department of Social and Health Services (DSHS). The delegating nurse
              retains clinical oversight and responsibility. The trained caregiver performs the tasks under that nurse's
              supervision. The client receives the care they need in the setting they prefer.
            </p>

            <hr className={hrClass} />

            <h2 className={h2Class}>Who Can Benefit From Nurse Delegation in Washington?</h2>
            <p className={pClass}>
              Nurse delegation is available to adults receiving home care services or living in an adult family home who
              need assistance with tasks that would otherwise require a licensed nurse.
            </p>
            <p className={pClass}>
              To be eligible, the client must be medically stable. The nursing tasks must be ones that can be safely
              taught to and performed by an unlicensed caregiver. And the registered nurse overseeing the delegation
              must determine that the arrangement is appropriate for that specific individual.
            </p>
            <p className={pClass}>
              Common tasks that can be delegated include insulin administration, oral medication management, wound care
              and dressing changes, catheter care, and monitoring of specific health conditions such as blood pressure
              or blood glucose levels.
            </p>
            <p className={pClass}>
              Tasks that cannot be delegated include those requiring ongoing clinical judgment — situations where the
              nature of the task changes based on the client's condition in ways that require a nurse's real-time
              assessment.
            </p>

            <hr className={hrClass} />

            <h2 className={h2Class}>How the Program Works in Practice</h2>
            <p className={pClass}>
              The process begins with a registered nurse — typically a community nurse working with DSHS or a home
              health agency — conducting an assessment of the client's needs and the proposed caregiver's capability.
            </p>
            <p className={pClass}>
              If the nurse determines that delegation is appropriate, they provide hands-on training to the caregiver
              for each specific task. The caregiver must demonstrate competency before performing the task
              independently. The nurse then documents the delegation formally and establishes a plan for ongoing
              oversight — including regular visits to monitor the client and check in with the caregiver.
            </p>
            <p className={pClass}>
              The delegation is client-specific and task-specific. A caregiver delegated to administer insulin for one
              client is not automatically authorized to perform that task for another. Each delegation is its own formal
              arrangement.
            </p>

            <hr className={hrClass} />

            <h2 className={h2Class}>Nurse Delegation in Adult Family Homes</h2>
            <p className={pClass}>
              Adult family homes are one of the primary settings where nurse delegation makes a meaningful difference.
              Because adult family homes are smaller residential settings — licensed for two to six residents — they are
              not required to have a nurse on staff around the clock. Without delegation, residents who develop
              nursing-level care needs may face a difficult choice: move to a higher level of care, or go without.
            </p>
            <p className={pClass}>
              Nurse delegation allows adult family home providers to meet those needs legally and safely — keeping
              residents in a familiar, home-like environment rather than requiring a disruptive transition to a nursing
              facility.
            </p>
            <p className={pClass}>
              For families considering an adult family home for a loved one with medical needs, asking whether the
              provider works with a delegating nurse is one of the most important questions to raise during the
              evaluation process.
            </p>

            <hr className={hrClass} />

            <h2 className={h2Class}>Nurse Delegation and Medicaid in Washington State</h2>
            <p className={pClass}>
              Washington State's Medicaid program covers nurse delegation services for eligible clients. For older
              adults and individuals with disabilities who qualify for Medicaid long-term care services, the cost of the
              delegating nurse's assessments, training, and oversight visits is covered — not paid out of pocket by the
              family.
            </p>
            <p className={pClass}>
              This makes nurse delegation not just clinically valuable but financially accessible. For families
              navigating the intersection of medical need, residential preference, and limited resources, it can be one
              of the most practical tools available.
            </p>

            <hr className={hrClass} />

            <h2 className={h2Class}>What Families Should Know</h2>
            <p className={pClass}>
              If a loved one has medical care needs that have made staying home — or staying in a smaller residential
              setting — feel uncertain, nurse delegation is worth exploring. The program is not widely advertised, and
              many families discover it only after being told that a nursing home is the only option. It often isn't.
            </p>
            <p className={pClass}>
              A conversation with a DSHS case manager, a home health agency, or an Aging Life Care Manager can help
              determine whether nurse delegation is appropriate for a specific situation. An Aging Life Care Manager is
              particularly well-positioned to assess the full picture — medical needs, living situation, caregiver
              capacity — and help families understand what is actually possible.
            </p>
            <p className={pClass}>
              The goal of the Nurse Delegation Program is the same goal most families share: to help an older adult
              receive the care they need, in the place they want to be, with as much dignity and continuity as possible.
            </p>

            <hr className={hrClass} />

            <p className={pClass + " italic"}>
              Real Property Planning helps families in the Puget Sound region navigate senior care decisions with
              clarity and confidence.{" "}
              <Link to="/guides-and-resources" className={inlineLink}>
                Explore our full library of resources
              </Link>{" "}
              or{" "}
              <Link to="/aging-life-care-managers" className={inlineLink}>
                connect with an Aging Life Care Manager
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

export default NurseDelegation;
