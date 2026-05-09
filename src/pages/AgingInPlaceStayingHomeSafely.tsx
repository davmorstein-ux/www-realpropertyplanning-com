import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PageFAQ from "@/components/PageFAQ";
import DisclaimerSection from "@/components/DisclaimerSection";
import { Button } from "@/components/ui/button";
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
import iconPhone from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconMemoryCare from "@/assets/icons/senior-memory-care-3d-icon-washington.webp";
import iconIndependent from "@/assets/icons/senior-independent-living-icon-washington.webp";
import iconEstatePlanning from "@/assets/icons/estate-wills-planning-icon-washington.webp";
import iconExecutors from "@/assets/icons/probate-executors-services-icon-washington.webp";
import JourneyOrientation from "@/components/JourneyOrientation";

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
      "Learn what aging in place typically involves and how families often evaluate safety, support needs, independence, and future planning.",
    href: "/understanding-senior-transitions",
    icon: iconHome,
  },
  {
    letter: "2",
    title: "Evaluating Home Safety & Daily Living Concerns",
    description:
      "Guidance involving mobility, fall prevention, medication management, daily routines, transportation, accessibility, and home safety considerations.",
    href: "/understanding-housing-care-options",
    icon: iconHelp,
  },
  {
    letter: "3",
    title: "Understanding Caregiving & Support Options",
    description:
      "Explore caregiving support, in-home care, family coordination, community resources, and assistance options that may help seniors remain at home longer.",
    href: "/senior-living-and-relocation",
    icon: iconHeartHands,
  },
  {
    letter: "4",
    title: "Planning Before a Crisis Develops",
    description:
      "Understand how early planning may help families avoid rushed decisions during emergencies or sudden health changes.",
    href: "/estate-planning-powers-of-attorney",
    icon: iconBookOpen,
  },
  {
    letter: "5",
    title: "Understanding When Housing Changes May Be Needed",
    description:
      "Guidance for families trying to recognize when additional support, assisted living, memory care, or housing transitions may need to be explored.",
    href: "/understanding-housing-care-options",
    icon: iconAssisted,
  },
  {
    letter: "6",
    title: "Building the Right Support Team",
    description:
      "Understanding how caregivers, care advisors, attorneys, financial professionals, housing specialists, and property professionals may help guide the process.",
    href: "/building-your-trusted-professional-team",
    icon: iconTeam,
  },
];

const challenges = [
  { title: "Fear of losing independence", body: "Wanting to stay in control is natural. Most families find that the right support actually preserves independence longer." },
  { title: "Resistance to accepting help", body: "Many seniors worry that accepting help means giving up autonomy. Small, gradual steps often feel easier than big changes." },
  { title: "Caregiver burnout", body: "Family caregivers often juggle jobs, children, and their own health. Recognizing limits early helps everyone stay healthier." },
  { title: "Home safety concerns", body: "Falls, medication mix-ups, and mobility risks are common worries. A home safety review usually brings clarity and peace of mind." },
  { title: "Family disagreements", body: "Siblings and relatives may see the situation differently. A shared conversation with a neutral professional often aligns perspectives." },
  { title: "Financial concerns", body: "Worrying about paying for care is normal. Exploring options early usually reveals more flexibility than families expect." },
  { title: "Transportation limitations", body: "Driving changes can feel like losing freedom. Community resources, ride services, and local programs often fill the gap." },
  { title: "Social isolation", body: "Staying connected matters for health and happiness. Planning for companionship and community is part of aging well at home." },
  { title: "Medication and health management", body: "Managing prescriptions, appointments, and conditions can become complex. Coordinated support often simplifies the routine." },
  { title: "Fear of making the wrong decision", body: "Most families feel this. The goal is not perfection — it is informed, caring decisions made one step at a time." },
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
  "Building a trusted support team",
];

const mistakes = [
  { title: "Waiting until a crisis develops", body: "Emergency decisions are usually more stressful and more limited. Early planning creates calmer, better options." },
  { title: "Ignoring safety concerns", body: "Small risks often become bigger problems. Addressing them early typically prevents larger consequences." },
  { title: "Trying to handle caregiving alone", body: "One person cannot sustainably do it all. Building a small support team protects both the caregiver and the senior." },
  { title: "Avoiding difficult conversations", body: "Silence usually increases anxiety. Honest, gentle conversations tend to bring families closer together." },
  { title: "Delaying planning discussions", body: "It is never too early to talk about preferences and possibilities. Most families wish they had started sooner." },
  { title: "Underestimating caregiver stress", body: "Burnout affects decision-making and health. Recognizing limits and accepting help is a strength, not a failure." },
  { title: "Failing to coordinate support services", body: "Fragmented help often leaves gaps. A coordinated plan usually connects the right services at the right time." },
  { title: "Avoiding future housing conversations", body: "Exploring options before they are needed keeps choices open and reduces fear about what might come next." },
];

const faqs = [
  {
    question: "How do we know if it is still safe to remain at home?",
    answer:
      "Families often look at fall risk, medication management, ability to prepare meals, mobility around the home, and whether the person can respond in an emergency. A professional home safety assessment can help clarify what is working and what may need attention.",
  },
  {
    question: "What support services may help?",
    answer:
      "In-home care, meal delivery, transportation services, medication management, home modifications, and community programs may all help extend safe, independent living. The right mix depends on the individual's needs and preferences.",
  },
  {
    question: "What if a parent refuses help?",
    answer:
      "Resistance is common and understandable. Starting with the smallest possible step, respecting their preferences, and involving a neutral third party such as a care advisor or geriatric care manager can often shift the conversation.",
  },
  {
    question: "What home safety concerns should families watch for?",
    answer:
      "Look for recent falls, difficulty with stairs, trouble managing medications, missed appointments, changes in cleanliness or nutrition, and signs of confusion. These often signal that additional support would be beneficial.",
  },
  {
    question: "When should families begin planning?",
    answer:
      "Ideally before a crisis. Early conversations about preferences, finances, and support options give families more flexibility and calmer decision-making when needs change.",
  },
  {
    question: "How do caregiving and housing decisions connect?",
    answer:
      "As care needs increase, the home itself may need changes — or a different living arrangement may become more practical. Evaluating both together usually leads to smoother transitions.",
  },
  {
    question: "What professionals may help guide the process?",
    answer:
      "Families often work with care managers, in-home care agencies, occupational therapists, elder law attorneys, financial planners, and senior housing advisors. Real estate professionals may also help when property decisions are involved.",
  },
  {
    question: "How do families reduce stress and conflict?",
    answer:
      "Clear communication, shared information, defined roles, and a neutral professional to facilitate discussion typically reduce tension and help families move forward together.",
  },
  {
    question: "What if situations change suddenly?",
    answer:
      "Health events can shift needs quickly. Having a basic plan in place — including contact information, financial documents, and a sense of available options — helps families respond more calmly.",
  },
  {
    question: "How do families avoid waiting too long?",
    answer:
      "Schedule regular check-ins, watch for gradual changes, and normalize planning as a caring act rather than a sign of decline. Starting the conversation early keeps more options open.",
  },
];

const continueJourney = [
  { href: "/understanding-housing-care-options", title: "Understanding Housing & Care Options", description: "Explore senior living, in-home care, and housing transitions.", icon: iconAssisted },
  { href: "/understanding-senior-transitions", title: "Understanding Senior Transitions", description: "A guided overview of the senior transition process.", icon: iconIndependent },
  { href: "/helping-aging-parents", title: "Helping an Aging Parent or Loved One", description: "Support for adult children navigating caregiving and family decisions.", icon: iconHeartHands },
  { href: "/estate-planning-powers-of-attorney", title: "Estate Planning & Powers of Attorney", description: "How legal and financial planning may help protect families.", icon: iconEstatePlanning },
  { href: "/what-to-do-with-the-house", title: "What To Do With the House", description: "A guided decision roadmap for property and housing choices.", icon: iconHome },
  { href: "/building-your-trusted-professional-team", title: "Building Your Trusted Professional Team", description: "Meet the coordinated team supporting Washington families.", icon: iconTeam },
];

const nextSteps = [
  "Understand current safety and caregiving concerns",
  "Explore support services and planning options",
  "Discuss future housing and transition considerations",
  "Build the right support team",
  "Make informed decisions one step at a time",
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
        <section className="bg-primary pt-12 pb-10 lg:pt-20 lg:pb-14">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-gold font-bold tracking-[0.2em] uppercase mb-4 text-sm">
                Guided Roadmap
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-primary-foreground font-semibold leading-tight mb-5">
                Aging in Place & Staying at Home Safely
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-7 max-w-2xl">
                A guided roadmap for seniors and families exploring safety, caregiving support,
                housing planning, home modifications, future transitions, and staying at home
                as long as possible.
              </p>
              <a href="#pathways">
                <Button variant="gold" size="lg" className="px-8 h-[56px] text-base rounded-lg">
                  <Compass className="w-5 h-5 mr-2" aria-hidden="true" />
                  Start Here
                </Button>
              </a>
            </div>
          </div>
        </section>

        <JourneyOrientation
          tone="caregiving"
          items={[
            "A parent or loved one wants to stay in their home",
            "You are evaluating safety, mobility, or daily support",
            "You want to plan ahead — before a fall or crisis",
            "You are weighing in-home care vs. a future move",
            "You want practical guidance, not pressure to sell"
          ]}
        />

        {/* REASSURANCE */}
        <section className="py-10 lg:py-12 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <HeartHandshake className="w-10 h-10 text-gold mx-auto mb-5" aria-hidden="true" />
              <h2 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-4">
                Many Seniors Want to Remain at Home
              </h2>
              <p className="text-navy text-lg md:text-xl leading-relaxed">
                For many seniors, remaining at home represents independence, comfort, familiarity,
                and emotional connection. Families often hope to support aging in place as long as
                possible while also balancing safety, caregiving needs, health concerns, and future
                planning. This guide is designed to help simplify the process and provide a calmer
                path forward.
              </p>
            </div>
          </div>
        </section>

        {/* PATHWAYS */}
        <section id="pathways" className="py-10 lg:py-14 bg-secondary scroll-mt-20">
          <div className="container px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-7 text-center">
              <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
                Choose a Pathway
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-3">
                What Part of the Process Are You Trying to Understand?
              </h2>
              <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                Pick the area closest to your situation. Each opens a calm, guided overview.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-4">
              {pathways.map((p) => (
                <Link
                  key={p.letter}
                  to={p.href}
                  className="group block bg-white border-2 border-gold/25 rounded-2xl shadow-[0_8px_24px_-12px_rgba(27,43,75,0.18)] hover:border-gold/55 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-12px_rgba(27,43,75,0.28)] transition-all overflow-hidden"
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
                        loading="lazy"
                      />
                      <div className="flex-1">
                        <h3 className="font-serif text-xl md:text-2xl text-navy font-semibold mb-2 group-hover:text-[hsl(var(--gold-dark))] transition-colors">
                          {p.title}
                        </h3>
                        <p className="text-navy text-base md:text-lg leading-relaxed mb-2">
                          {p.description}
                        </p>
                        <span className="inline-flex items-center gap-2 text-gold font-bold text-sm">
                          Learn More <ArrowRight className="w-4 h-4" aria-hidden="true" />
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
                  You Are Not Alone
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-3">
                  Common Challenges Families Face
                </h2>
                <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                  Naming what's hard often makes it easier to move forward.
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
                  Most families are unsure what warning signs to watch for, how caregiving stress
                  may affect family dynamics, how quickly needs may change, what support options
                  may exist, or how housing and property decisions may eventually connect.
                </p>
              </div>
              <div className="bg-white border-2 border-gold/25 rounded-2xl p-6 md:p-8 shadow-[0_8px_24px_-12px_rgba(27,43,75,0.18)]">
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
                  Naming what often goes wrong makes it easier to plan well.
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
                <img src={iconArrow} alt="" aria-hidden="true" className="w-12 h-12 object-contain mx-auto mb-4" loading="lazy" />
                <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3 text-sm">
                  Keep Going
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-3">
                  Continue Your Journey
                </h2>
                <p className="text-navy text-lg leading-relaxed max-w-2xl mx-auto">
                  Families exploring aging in place often continue with these next steps.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {continueJourney.map((c) => (
                  <Link
                    key={c.href + c.title}
                    to={c.href}
                    className="group bg-white border-2 border-gold/25 rounded-2xl p-6 shadow-[0_6px_18px_-10px_rgba(27,43,75,0.2)] hover:border-gold/55 hover:-translate-y-1 hover:shadow-[0_12px_28px_-12px_rgba(27,43,75,0.28)] transition-all flex flex-col"
                  >
                    <img src={c.icon} alt="" aria-hidden="true" className="w-12 h-12 object-contain mb-4" loading="lazy" />
                    <h3 className="font-serif text-xl text-navy font-semibold mb-2 group-hover:text-[hsl(var(--gold-dark))] transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-navy text-base leading-relaxed mb-4 flex-1">
                      {c.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-gold font-bold text-sm">
                      Continue <ArrowRight className="w-4 h-4" aria-hidden="true" />
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

        {/* CTA */}
        <section className="py-10 lg:py-14 bg-primary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-4">
                Want to talk it through first?
              </h2>
              <p className="text-primary-foreground/85 text-lg leading-relaxed mb-7">
                A calm, no-pressure conversation can often clarify the very next step.
              </p>
              <Link to="/contact">
                <Button variant="gold" size="lg" className="px-8 h-[56px] text-base rounded-lg">
                  <img src={iconPhone} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain" loading="lazy" />
                  Start the Conversation
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default AgingInPlaceStayingHomeSafely;
