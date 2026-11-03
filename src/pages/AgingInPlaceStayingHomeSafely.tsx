import Header from "@/components/Header";
import HeroBandTitle from "@/components/HeroBandTitle";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PageFAQ from "@/components/PageFAQ";
import DisclaimerSection from "@/components/DisclaimerSection";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, HeartHandshake, CheckCircle2 } from "lucide-react";
import { articleSchema } from "@/lib/schema";

import iconHome from "@/assets/icons/senior-home-sales-couple-house-icon-washington.webp";
import iconHeartHands from "@/assets/icons/senior-care-heart-hands-icon-washington.webp";
import iconAssisted from "@/assets/icons/senior-assisted-living-icon-washington.webp";
import iconHelp from "@/assets/icons/property-guidance-help-icon-washington.webp";
import iconBookOpen from "@/assets/icons/probate-guidance-book-open-icon-washington.webp";
import iconTeam from "@/assets/icons/real-estate-people-team-icon-washington.webp";
import iconArrow from "@/assets/icons/property-guidance-arrow-icon-washington.webp";
import iconIndependent from "@/assets/icons/senior-independent-living-icon-washington.webp";
import iconEstatePlanning from "@/assets/icons/estate-wills-planning-icon-washington.webp";
import JourneyOrientation from "@/components/JourneyOrientation";
import WhichGuide from "@/components/WhichGuide";

import RppArrow from "@/components/RppArrow";
interface Pathway {
  letter: string;
  title: string;
  description: string;
  href: string;
  icon: string;
}

const pathways: Pathway[] = [
  {
    letter: "1",
    title: "Understanding Aging in Place",
    description:
      "What aging in place usually involves, and how families weigh safety, support needs, independence and future planning.",
    href: "/understanding-senior-transitions",
    icon: iconHome,
  },
  {
    letter: "2",
    title: "Evaluating Home Safety & Daily Living Concerns",
    description:
      "Mobility, fall prevention, medication management, daily routines, transportation, accessibility and home safety.",
    href: "/understanding-housing-care-options",
    icon: iconHelp,
  },
  {
    letter: "3",
    title: "Understanding Caregiving & Support Options",
    description:
      "In-home care, family caregiving, community resources and other help that may let a senior stay at home longer.",
    href: "/senior-living-and-relocation",
    icon: iconHeartHands,
  },
  {
    letter: "4",
    title: "Planning Before a Crisis Develops",
    description:
      "How planning early may help families avoid rushed decisions after an emergency or a sudden change in health.",
    href: "/planning-before-a-crisis",
    icon: iconBookOpen,
  },
  {
    letter: "5",
    title: "Understanding When Housing Changes May Be Needed",
    description:
      "Signs that a senior may need more support at home, assisted living, memory care or a move.",
    href: "/understanding-housing-care-options",
    icon: iconAssisted,
  },
  {
    letter: "6",
    title: "Building a Support Team",
    description:
      "What caregivers, care advisors, attorneys, financial professionals, housing specialists and property professionals can each help with.",
    href: "/building-your-professional-team",
    icon: iconTeam,
  },
];

const challenges = [
  { title: "Fear of losing independence", body: "Wanting to stay in control of your own life is understandable. Help at home, added early, can let a person live independently for longer." },
  { title: "Resistance to accepting help", body: "Accepting help can feel like giving up autonomy. A small change is usually easier to agree to than a large one." },
  { title: "Caregiver burnout", body: "Family caregivers often juggle jobs, children and their own health. Deciding early how much one person can take on protects the caregiver's health as well as the senior's." },
  { title: "Home safety concerns", body: "Falls, medication mix-ups and mobility problems are the usual worries. A home safety review shows which risks are real and what would reduce them." },
  { title: "Family disagreements", body: "Siblings and relatives may see the situation differently. A meeting led by a neutral professional, such as a care manager, can help the family agree on the facts." },
  { title: "Financial concerns", body: "The cost of care is a common worry. Looking at how to pay for it before it is needed usually leaves more options open." },
  { title: "Transportation limitations", body: "Giving up driving can feel like a loss of freedom. Ride services, community resources and local programs can often cover the trips that matter." },
  { title: "Social isolation", body: "Isolation affects health as well as mood. A plan to stay at home should include regular contact with other people and the wider community." },
  { title: "Medication and health management", body: "Prescriptions, appointments and health conditions can become complicated to manage. Having one person or service coordinate them usually makes the routine simpler." },
  { title: "Fear of making the wrong decision", body: "There is rarely a single correct answer. Decisions can be made one at a time and revisited as needs change." },
];

const considerations = [
  "Home safety",
  "Mobility concerns",
  "Caregiving support",
  "Transportation",
  "Medication management",
  "Financial planning",
  "Social connection",
  "Housing transitions",
  "Future planning",
  "Building a support team",
];

const mistakes = [
  { title: "Waiting until a crisis develops", body: "Decisions made in an emergency are usually rushed and limited to whatever is available at the time. Planning ahead leaves more choices." },
  { title: "Ignoring safety concerns", body: "Small hazards are easier to fix before they cause a fall or an injury than after." },
  { title: "Trying to handle caregiving alone", body: "One person cannot provide all the care indefinitely. Sharing it among family, paid help and community services protects both the caregiver and the senior." },
  { title: "Avoiding difficult conversations", body: "Putting off the conversation usually makes it harder later. Talking early, while the senior can state their own preferences, means the plan reflects what they want." },
  { title: "Delaying planning discussions", body: "Preferences about care, money and housing are easier to discuss before a decision is urgent." },
  { title: "Underestimating caregiver stress", body: "Burnout affects a caregiver's health and judgment. Accepting help before reaching that point keeps care going." },
  { title: "Failing to coordinate support services", body: "Separate services that are not coordinated leave gaps. A single plan, with one person keeping track of it, shows what is covered and what is not." },
  { title: "Avoiding future housing conversations", body: "Looking at housing options before a move is needed keeps choices open and makes a later move less of a shock." },
];

const faqs = [
  {
    question: "How do we know if it is still safe to remain at home?",
    answer:
      "Families often look at fall risk, medication management, ability to prepare meals, mobility around the home, and whether the person can respond in an emergency. A professional home safety assessment can show what is working and what may need attention.",
  },
  {
    question: "What support services may help?",
    answer:
      "In-home care, meal delivery, transportation services, medication management, home modifications, and community programs may all help a person live safely and independently for longer. What helps depends on the individual's needs and preferences.",
  },
  {
    question: "What if a parent refuses help?",
    answer:
      "Resistance is common. Starting with the smallest possible step, respecting their preferences, and involving a neutral third party such as a care advisor or geriatric care manager can often shift the conversation.",
  },
  {
    question: "What home safety concerns should families watch for?",
    answer:
      "Look for recent falls, difficulty with stairs, trouble managing medications, missed appointments, changes in cleanliness or nutrition, and signs of confusion. These often signal that additional support would be beneficial.",
  },
  {
    question: "When should families begin planning?",
    answer:
      "Ideally before a crisis. Talking early about preferences, finances and support options leaves more choices, and more time, when needs change.",
  },
  {
    question: "How do caregiving and housing decisions connect?",
    answer:
      "As care needs increase, the home itself may need changes, or a different living arrangement may become more practical. Looking at care and housing together usually makes any transition smoother.",
  },
  {
    question: "What professionals may help guide the process?",
    answer:
      "Families often work with care managers, in-home care agencies, occupational therapists, elder law attorneys, financial planners, and senior housing advisors. Real estate professionals may also help when property decisions are involved.",
  },
  {
    question: "How do families reduce stress and conflict?",
    answer:
      "Clear communication, shared information, defined roles, and a neutral professional to facilitate discussion typically reduce tension and make it easier to agree on next steps.",
  },
  {
    question: "What if situations change suddenly?",
    answer:
      "Health events can shift needs quickly. Having a basic plan in place, including contact information, financial documents and a sense of the available options, helps families respond more calmly.",
  },
  {
    question: "How do families avoid waiting too long?",
    answer:
      "Schedule regular check-ins, watch for gradual changes, and treat planning as ordinary preparation rather than a sign of decline. Starting the conversation early keeps more options open.",
  },
];

const continueJourney = [
  { href: "/understanding-housing-care-options", title: "Understanding Housing & Care Options", description: "Explore senior living, in-home care, and housing transitions.", icon: iconAssisted },
  { href: "/understanding-senior-transitions", title: "Understanding Senior Transitions", description: "A guided overview of the senior transition process.", icon: iconIndependent },
  { href: "/helping-an-aging-parent", title: "Helping an Aging Parent or Loved One", description: "For adult children handling caregiving and family decisions.", icon: iconHeartHands },
  { href: "/planning-before-a-crisis/legal-documents", title: "Estate Planning & Powers of Attorney", description: "How legal and financial planning may help protect families.", icon: iconEstatePlanning },
  { href: "/what-to-do-with-the-house", title: "What To Do With the House", description: "A guided decision roadmap for property and housing choices.", icon: iconHome },
  { href: "/building-your-professional-team", title: "Building Your Professional Team", description: "Which independent professionals handle each part of a transition.", icon: iconTeam },
];

const nextSteps = [
  "Understand current safety and caregiving concerns",
  "Explore support services and planning options",
  "Discuss future housing and transition considerations",
  "Build a support team",
  "Make decisions one step at a time, and revisit them as needs change",
];

const jsonLd = articleSchema({
  headline: "Aging in Place & Staying at Home Safely",
  description:
    "A calm guided roadmap for seniors and families exploring safety, caregiving support, housing planning, home modifications, future transitions, and staying at home as long as possible in Washington.",
  url: "/aging-in-place-staying-home-safely",
  datePublished: "2026-05-08",
  dateModified: "2026-05-08",
  about: ["Aging in place", "Senior care", "Home safety", "Caregiving", "Senior transitions", "Housing planning"],
});

const AgingInPlaceStayingHomeSafely = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Aging in Place & Staying at Home Safely | Real Property Planning"
        description="A calm guided roadmap for seniors and families exploring safety, caregiving support, housing planning, home modifications, and staying at home as long as possible."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "Aging in Place & Staying at Home Safely", url: "/aging-in-place-staying-home-safely" }]} />
      <Header />
      <main id="main-content">
        {/* HERO */}
        <HeroBandTitle as="h1">Aging in Place & Staying at Home Safely</HeroBandTitle>

        {/* Intro — relocated out of the title band. The band carries the
            page title and nothing else, sitewide. */}
        <section className="py-10 md:py-12 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground leading-relaxed mb-5" style={{ fontSize: "18px" }}>
              Staying at home safely usually comes down to three things: the condition of the home, the help available with daily care, and a plan for what happens if needs change. This guide covers home safety, caregiving support, home modifications, housing planning and future transitions.
            </p>
            </div>
          </div>
        </section>

        <JourneyOrientation
          tone="caregiving"
          items={[
            "A parent or loved one wants to stay in their home",
            "You are evaluating safety, mobility, or daily support",
            "You want to plan ahead, before a fall or crisis",
            "You are weighing in-home care vs. a future move",
            "You want practical guidance, not pressure to sell"
          ]}
        />

        {/* REASSURANCE */}
        <WhichGuide group="agingInPlace" />
        <section className="py-10 lg:py-12 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <HeartHandshake className="w-10 h-10 text-gold mx-auto mb-5" aria-hidden="true" />
              <h2 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-4">
                Many Seniors Want to Remain at Home
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed">
                For many seniors, home means independence, comfort and familiarity. Supporting that
                for as long as possible means weighing it against safety, care needs and health,
                and planning for the point at which staying may no longer work.
              </p>
            </div>
          </div>
        </section>

        {/* PATHWAYS */}
        <section id="pathways" className="py-10 lg:py-14 bg-secondary scroll-mt-20">
          <div className="container px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-7 text-center">
              <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
                {" "}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-3">
                {" "}
              </h2>
              <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                {" "}
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-4">
              {pathways.map((p) => (
                <Link
                  key={p.letter}
                  to={p.href}
                  className="marquee-hover group block bg-white border-2 border-gold/25 rounded-2xl shadow-[0_2px_8px_-4px_rgba(27,43,75,0.10)] hover:border-gold/55 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_-4px_rgba(27,43,75,0.14)] transition-all overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row items-stretch">
                    <div className="md:w-44 bg-gradient-to-br from-navy to-[hsl(var(--navy-dark))] text-cream p-5 md:p-6 flex md:flex-col items-center md:items-start gap-4 md:gap-2">
                      <span className="font-serif text-5xl text-gold font-bold leading-none">
                        {p.letter}
                      </span>
                      <span className="text-cream uppercase tracking-widest text-xs font-bold">
                        Pathway {p.letter}
                      </span>
                    </div>
                    <div className="flex-1 p-5 md:p-6 flex items-center gap-5">
                      <img
                        src={p.icon}
                        alt=""
                        aria-hidden="true"
                        className="w-14 h-14 md:w-16 md:h-16 object-contain shrink-0 hidden sm:block"
                        loading="lazy" sizes="(max-width: 768px) 90px, 90px" decoding="async"/>
                      <div className="flex-1">
                        <h3 className="font-serif text-xl md:text-2xl text-navy font-semibold mb-2 group-hover:text-[hsl(var(--gold-dark))] transition-colors">
                          {p.title}
                        </h3>
                        <p className="text-navy text-base md:text-lg leading-relaxed mb-2">
                          {p.description}
                        </p>
                        <span className="gold-cta mt-auto">
                          Learn More
                          <RppArrow />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CHALLENGES */}
        <section className="py-10 lg:py-14 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-7">
                <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
                  Where It Gets Hard
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-3">
                  Common Challenges Families Face
                </h2>
                <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                  These problems come up often when a senior stays at home.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {challenges.map((c) => (
                  <div
                    key={c.title}
                    className="bg-white border-2 border-gold/25 rounded-2xl p-5 md:p-6 shadow-[0_6px_18px_-10px_rgba(27,43,75,0.2)]"
                  >
                    <h3 className="font-serif text-lg md:text-xl text-navy font-semibold mb-2">
                      {c.title}
                    </h3>
                    <p className="text-navy text-base leading-relaxed">{c.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHAT TO CONSIDER */}
        <section className="py-10 lg:py-14 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-7">
                <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
                  Educational Compass
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-3">
                  Many People Do Not Know What Questions to Ask
                </h2>
                <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                  Families are often unsure which warning signs to watch for, how caregiving stress
                  may affect the family, how quickly needs can change, what support exists, and how
                  housing and property decisions eventually connect.
                </p>
              </div>
              <div className="bg-white border-2 border-gold/25 rounded-2xl p-6 md:p-8 shadow-[0_2px_8px_-4px_rgba(27,43,75,0.10)]">
                <p className="text-navy font-serif text-xl md:text-2xl font-semibold mb-5">
                  Families Often Need to Consider:
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {considerations.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 bg-cream border border-gold/20 rounded-xl px-4 py-3 min-h-[60px]"
                    >
                      <CheckCircle2 className="w-6 h-6 text-gold shrink-0" aria-hidden="true" />
                      <span className="text-navy font-semibold text-base md:text-lg">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* COMMON MISTAKES */}
        <section className="py-10 lg:py-14 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-7">
                <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
                  Avoid These Pitfalls
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-3">
                  Common Mistakes to Avoid
                </h2>
                <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                  Each of these tends to narrow a family's options later.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {mistakes.map((m) => (
                  <div
                    key={m.title}
                    className="bg-white border-2 border-gold/25 rounded-2xl p-5 md:p-6 shadow-[0_6px_18px_-10px_rgba(27,43,75,0.2)]"
                  >
                    <h3 className="font-serif text-lg md:text-xl text-navy font-semibold mb-2">
                      {m.title}
                    </h3>
                    <p className="text-navy text-base leading-relaxed">{m.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <PageFAQ
          faqs={faqs}
          heading="Questions Families Often Ask"
          eyebrow="Common Questions"
          id="aging-in-place-staying-home-safely"
        />

        {/* CONTINUE YOUR JOURNEY */}
        <section className="py-10 lg:py-14 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-7">
                <img src={iconArrow} alt="" aria-hidden="true" className="w-12 h-12 object-contain mx-auto mb-4" loading="lazy" sizes="(max-width: 768px) 90px, 90px" decoding="async" width={512} height={512} />
                <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
                  Keep Going
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-3">
                  Related Guides
                </h2>
                <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                  Guides that cover the questions that usually come next.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {continueJourney.map((c) => (
                  <Link
                    key={c.href + c.title}
                    to={c.href}
                    className="marquee-hover group bg-white border-2 border-gold/25 rounded-2xl p-6 shadow-[0_6px_18px_-10px_rgba(27,43,75,0.2)] hover:border-gold/55 hover:-translate-y-1 hover:shadow-[0_4px_12px_-4px_rgba(27,43,75,0.14)] transition-all flex flex-col"
                  >
                    <img src={c.icon} alt="" aria-hidden="true" className="w-12 h-12 object-contain mb-4" loading="lazy" sizes="(max-width: 768px) 90px, 90px" decoding="async"/>
                    <h3 className="font-serif text-xl text-navy font-semibold mb-2 group-hover:text-[hsl(var(--gold-dark))] transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-navy text-base leading-relaxed mb-4 flex-1">
                      {c.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-gold font-bold text-sm">
                      Continue <RppArrow />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SIMPLE NEXT STEPS */}
        <section className="py-10 lg:py-14 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-7">
                <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
                  Simple Next Steps
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold">
                  A Calm, Clear Action Plan
                </h2>
              </div>
              <ol className="space-y-4">
                {nextSteps.map((step, i) => (
                  <li
                    key={step}
                    className="flex items-center gap-5 bg-white border border-gold/25 rounded-2xl p-5 shadow-[0_4px_14px_-8px_rgba(27,43,75,0.2)]"
                  >
                    <span className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-gold to-[hsl(var(--gold-dark))] text-white font-serif text-2xl font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="text-navy font-semibold text-lg md:text-xl leading-snug">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Removed: a navy CTA band reading "Want to talk it through first? /
            A calm, no-pressure conversation can often clarify the very next
            step." with a "Start the Conversation" button.

            Same reasoning as the line cut from EstateProbateInheritedProperty.
            It was an open-ended offer of a personal conversation, placed at
            the end of pages about probate, inherited property, downsizing and
            aging in place — where readers arrive during a decline or a death
            in the family. Soliciting contact at that moment asks something of
            someone at their least resourced.

            Deliberately NOT replaced with a softer CTA. The footer and
            /contact remain available to anyone who goes looking. */}

        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default AgingInPlaceStayingHomeSafely;
