import GoldCheck3D from "@/components/GoldCheck3D";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import PageFAQ from "@/components/PageFAQ";
import MidPageCTA from "@/components/MidPageCTA";
import ProofCallout from "@/components/ProofCallout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import people3d from "@/assets/real-estate-agent-team-icon-washington.webp";
import heart3d from "@/assets/senior-care-heart-icon-washington.webp";
import seniorHomeSalesIcon from "@/assets/icons/senior-home-sales-for-sale-icon-washington.webp";
import AffiliationBadgeGrid from "@/components/AffiliationBadgeGrid";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import seniorTransitionsHero from "@/assets/senior-transitions-hero.png";

import HeroBandTitle from "@/components/HeroBandTitle";

const transitionSituations = [
  "A parent moving to assisted living, memory care, or an independent senior community",
  "Downsizing from a longtime family home to something more manageable",
  "Selling after a health event, hospitalization, or change in care needs",
  "A planned transition the family has been preparing for over months or years",
  "Managing a sale while simultaneously coordinating with care professionals, attorneys, and financial advisors",
  "Out-of-state family members who need a trusted local professional to handle the property",
];

const whatFamiliesNeed = [
  "A patient, respectful approach — someone who understands that this home holds 30 or 40 years of a family's life",
  "Honest guidance on timing — when to list, what to fix, and what to leave alone",
  "Realistic market insight — what the home is worth in its actual condition, without inflated projections",
  "Practical coordination — help connecting the right people: move managers, cleanout crews, contractors, attorneys",
  "Clear communication — regular updates in plain language, so no one feels left out or surprised",
  "No pressure — a professional who moves at the family's pace, not a commission deadline",
];

const coordinationPartners = [
  {
    title: "Family Members",
    description: "Adult children, spouses, and extended family members are almost always involved — and they don't always agree. Some family members want to sell quickly; others want to hold on. Some are local; others are managing everything from another state. Real Property Planning works with all of them, providing consistent communication and clear guidance that keeps the process moving without pressure.",
  },
  {
    title: "Care Professionals",
    description: (
      <>
        Senior move managers, care coordinators, social workers, and placement specialists are often working alongside families during a transition. Real Property Planning coordinates with the care team to make sure the real estate timeline fits the broader plan — not the other way around. Real Property Planning has established relationships with senior move professionals in the Puget Sound area, including{" "}
        <a href="https://hbmovemanagement.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gold underline underline-offset-4">HB Move Management</a>, a division of Hansen Bros. Moving &amp; Storage, one of the most experienced senior moving services in Western Washington.
      </>
    ),
  },
  {
    title: "Trusted Advisors",
    description: (
      <>
        Attorneys, financial planners, CPAs, and fiduciaries need the real estate side of a senior transition handled with accuracy and professionalism. A background as a{" "}
        <Link to="/real-estate-appraiser" className="text-accent hover:text-gold underline underline-offset-4">certified appraiser</Link> means advisors receive reliable valuation guidance — not listing estimates — which matters for financial planning, Medicaid planning, and estate documentation purposes.
      </>
    ),
  },
];

const jsonLd = articleSchema({
  headline: "Senior Housing Transitions in Washington State",
  description: "Patient, experienced guidance for families helping a senior sell their home in Washington State. Serving King, Snohomish, Pierce & Kitsap Counties.",
  url: "/senior-transitions",
  datePublished: "2025-01-15",
  dateModified: "2026-04-14",
  about: ["Senior transitions", "Downsizing", "Assisted living", "Senior home sales", "Family housing decisions"],
});

const SeniorTransitions = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Senior Home Sales & Downsizing in Washington | Family-Paced Guidance"
        description="Help for Washington families selling a longtime home during a move to assisted living, memory care, or downsizing. Coordinated with care teams, attorneys, and out-of-state siblings."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "Senior Transitions", url: "/senior-transitions" }]} />
      <Header />
      <main id="main-content">

      {/* Hero image + brand band — matches site-wide HeroBandTitle pattern */}
      <section className="w-full overflow-hidden" style={{ lineHeight: 0 }}>
        <img
          src={seniorTransitionsHero}
          alt="Senior couple in front of their longtime Washington home with a Real Property Planning For Sale sign"
          className="w-full h-auto object-cover"
          style={{ display: "block" }}
          loading="eager"
          fetchPriority="high"
        />
        <HeroBandTitle as="h2">Selling A Senior's Home</HeroBandTitle>
      </section>

      {/* What Goes Into a Senior Transition */}
      <section className="py-20 lg:py-28 bg-background border-b border-border">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              What Goes Into a Senior Transition?
            </h2>
            <p className="text-foreground text-lg leading-[1.7]">
              When a senior leaves a longtime home — whether moving to assisted living, a memory care community, a smaller residence, or closer to family — it rarely involves just real estate. It's a coordinated process that touches nearly every part of a family's life. Real Property Planning connects families and professionals to the right people for each step.
            </p>
          </div>
        </div>
      </section>

      {/* Who Helps With a Senior Transition */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4 text-center">
              Who Helps With a Senior Transition?
            </h2>
            <p className="text-foreground text-base leading-[1.7] text-center mb-10">
              Tap any role below to learn more about what they do and how they fit into a senior transition.
            </p>
            <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
              {[
                {
                  title: "Senior Move Managers",
                  description: "Specialists who handle the physical side of a move — sorting, packing, coordinating movers, and setting up the new home. They work at the family's pace and are trained to handle the emotional weight of leaving a longtime residence.",
                  linkText: "Find a Senior Move Manager",
                  href: "/senior-move-managers",
                },
                {
                  title: "Senior Living Advisors",
                  description: "Professionals who help families evaluate and choose the right next home — whether that's independent living, assisted living, memory care, or in-home support. They know local communities, availability, and costs.",
                  linkText: "Find a Senior Living Advisor",
                  href: "/senior-placement",
                },
                {
                  title: "Estate Sale & Liquidation Services",
                  description: "When a home contains decades of belongings, estate sale professionals help families sort, value, and sell or donate items — clearing the home efficiently and respectfully before it goes on the market.",
                  linkText: "Learn more",
                  href: "/estate-liquidation",
                },
                {
                  title: "Real Estate Broker (Probate & Senior Transition Specialist)",
                  description: "A broker experienced in senior transitions understands condition-based pricing, family dynamics, and the need for patience. Real Property Planning connects families with brokers who specialize in this work throughout Washington State.",
                  linkText: "Learn more",
                  href: "/realtor",
                },
                {
                  title: "Certified Residential Appraiser",
                  description: "An independent appraisal gives families an honest, defensible value for the home — separate from any listing pressure. Useful for estate planning, trust administration, or simply knowing where you stand before making decisions.",
                  linkText: "Learn more",
                  href: "/real-estate-appraiser",
                },
                {
                  title: "Estate Attorneys",
                  description: "Many senior transitions intersect with trust administration, power of attorney, or estate planning. An attorney ensures the legal side of the transition is handled properly alongside the real estate process.",
                  linkText: "Find an Estate Attorney",
                  href: "/for-attorneys",
                },
                {
                  title: "Financial Advisors & CPAs",
                  description: "Selling a longtime home has tax implications — capital gains, stepped-up basis, trust distributions. A financial planner or CPA helps families understand the financial picture before and after the sale.",
                  linkText: "Find a Financial Advisor or CPA",
                  href: "/for-financial-planners",
                },
              ].map((card, idx) => (
                <AccordionItem
                  key={card.title}
                  value={`item-${idx}`}
                  className="bg-card border border-border rounded-xl px-6"
                >
                  <AccordionTrigger className="font-serif text-xl text-foreground font-semibold hover:no-underline text-left">
                    {card.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-foreground text-base leading-[1.7] mb-4">{card.description}</p>
                    <Link to={card.href} className="text-accent hover:text-gold font-semibold underline underline-offset-4 inline-block">
                      {card.linkText} →
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Not Sure Where to Start */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Not Sure Where to Start?
            </h2>
            <p className="text-foreground text-lg leading-[1.7] mb-8">
              Most families don't know which professional they need first. That's okay. Real Property Planning helps you figure out the right sequence and connects you with trusted professionals throughout the Puget Sound area.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="lg">
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy" />
                Start a Conversation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Professional Affiliations */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 sm:gap-8">
            <AffiliationBadgeGrid />
            <p className="text-foreground text-base leading-[1.7] text-center max-w-3xl">
              Real Property Planning is a Corporate Partner of the{" "}
              <a href="https://www.aginglifecare.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gold underline underline-offset-4">Aging Life Care Association</a>, a recognized member of the{" "}
              <a href="https://www.naosa.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gold underline underline-offset-4">National Association of Senior Advocates</a> and Advisors, and a member of the National Association of Estate Planners &amp; Councils.
            </p>
          </div>
        </div>
      </section>

      {/* Common Transition Situations */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              When Do Families Reach Out About Senior Home Sales?
            </h2>
            <p className="text-foreground text-lg leading-[1.7] mb-8">
              There is no single moment that brings a family to this conversation. Some reach out after a health event changes everything overnight. Others have been watching a parent slow down for years and finally feel it's time to act. Real Property Planning works with families across King County, Snohomish County, Pierce County, Kitsap County, and throughout Washington State — in situations including:
            </p>
            <ul className="space-y-4">
              {transitionSituations.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What Families Need Most */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <img src={heart3d} alt="" aria-hidden="true" className="w-10 h-10 shrink-0 mb-6" style={{ width: 40, height: 40 }} loading="lazy" />
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              What Do Families Need Most During a Senior Home Sale?
            </h2>
            <p className="text-foreground text-lg leading-[1.7] mb-8">
              Most families navigating a senior home sale have never done this before. They're often managing a parent's emotions alongside their own, coordinating with siblings who may not agree, and trying to understand a real estate process they're unfamiliar with — all at the same time. What they consistently say they needed most:
            </p>
            <ul className="space-y-4">
              {whatFamiliesNeed.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <GoldCheck3D size={20} className="mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* NEW: Why Selling a Senior's Home Is Different */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              Why Selling a Senior's Home Is Different From a Typical Home Sale
            </h2>
            <p className="text-foreground text-lg leading-[1.7] mb-6">
              A senior housing transition isn't a standard real estate transaction — and treating it like one is where many families run into problems.
            </p>
            <p className="text-foreground text-base leading-[1.7] mb-6">
              The home may have decades of deferred maintenance. The seller may be emotionally attached in ways that make pricing conversations difficult. Family members may disagree about timing or repairs. There may be a care team, an attorney, and a financial planner all involved — each with their own timeline and priorities. And the senior themselves may still be living in the home during the sale process.
            </p>
            <p className="text-foreground text-base leading-[1.7] mb-6">
              Real Property Planning's dual background as a licensed real estate broker and a Washington State{" "}
              <Link to="/real-estate-appraiser" className="text-accent hover:text-gold underline underline-offset-4">Certified Residential Appraiser</Link> means our team approaches every senior transition sale differently than a typical listing agent. Our team can assess the home's true condition and value before any pricing conversation begins — which means families get honest guidance from the start, not a number that sounds good but leads to price reductions later.
            </p>
            <p className="text-foreground text-base leading-[1.7]">
              His affiliation with the{" "}
              <a href="https://www.aginglifecare.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gold underline underline-offset-4">Aging Life Care Association</a> and the{" "}
              <a href="https://www.naosa.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gold underline underline-offset-4">National Association of Senior Advocates</a> reflects a commitment to this work that goes beyond real estate. The goal isn't just to sell a house. It's to make one of life's most significant transitions as manageable as possible for everyone involved.
            </p>
          </div>
        </div>
      </section>

      {/* Coordinating With Family and Professionals */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <img src={people3d} alt="" aria-hidden="true" className="w-10 h-10 object-contain mb-6" loading="lazy" />
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              Coordinating With Family, Care Professionals &amp; Trusted Advisors
            </h2>
            <p className="text-foreground text-lg leading-[1.7] mb-8">
              Senior transitions rarely involve just one person. Real Property Planning works collaboratively with everyone involved to keep the real estate process aligned with the broader plan:
            </p>
            <div className="space-y-6">
              {coordinationPartners.map((partner, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-serif text-lg text-foreground font-semibold mb-2">{partner.title}</h3>
                  <p className="text-foreground text-base leading-[1.7]">{partner.description}</p>
                </div>
              ))}
            </div>
            <p className="text-foreground mt-8 text-base leading-[1.7]">
              Attorneys and financial planners who work with senior clients can learn more about our <Link to="/for-attorneys" className="text-accent hover:text-gold underline underline-offset-4">referral approach for legal professionals</Link> or the <Link to="/how-the-process-works" className="text-accent hover:text-gold underline underline-offset-4">step-by-step sale process</Link>.
            </p>
          </div>
        </div>
      </section>

      <MidPageCTA
        heading="Planning a Senior Housing Transition?"
        body="Real Property Planning works at the family's pace — with patience, clear communication, and experienced coordination."
        buttonText="Schedule a Consultation"
        microcopy="No pressure. Just practical guidance for your family's situation."
      />

      {/* Emotional and Practical Realities — Accordion */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              What Are the Emotional and Practical Realities of Selling a Family Home?
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  value: "emotional",
                  q: "How does Real Property Planning handle the emotional side of a senior home sale?",
                  a: "Slowly, and with respect. Most families reach out during one of the hardest periods they've been through — a parent's health declining, a difficult family decision, the end of an era. Our team doesn't rush the conversation or the process. He listens first, asks questions about the family's situation and priorities, and builds a plan that fits the family's pace — not a standard listing timeline. Many clients say what they appreciated most wasn't the sale itself, but the way it was handled.",
                },
                {
                  value: "condition",
                  q: "What about a home with decades of deferred maintenance?",
                  a: "This is one of the most common situations Real Property Planning works with, and it's where our appraisal background genuinely helps. Rather than guessing what the home might sell for, we can assess the property's current condition and give families an honest picture of their options: sell as-is, make targeted improvements, or something in between. We can also help coordinate the cleanout, repairs, and staging process through trusted local contractors and service providers — so families don't have to manage that on their own.",
                },
                {
                  value: "remote",
                  q: "Can families coordinate from out of state?",
                  a: "Yes — and this is more common than most people expect. Many of the families Real Property Planning works with have adult children managing the process from out of state, sometimes from across the country. Our team provides consistent written updates, is available for calls at times that work across time zones, and can manage the full property preparation and sale process locally so family members don't need to be physically present for every step.",
                },
                {
                  value: "timeline",
                  q: "How long does it typically take to sell a senior's home?",
                  a: "There's no single answer, because every family's situation is different. Some families are ready to move quickly; others need months of preparation before the home is ready to list. Real Property Planning works backward from the family's actual timeline — whether that's driven by a care facility move-in date, a financial need, or simply when the family feels ready. The goal is a sale that happens at the right time, not just the fastest time.",
                },
              ].map((item) => (
                <AccordionItem key={item.value} value={item.value} className="bg-card border border-border rounded-2xl overflow-hidden data-[state=open]:border-gold/25 transition-colors">
                  <AccordionTrigger className="text-left font-serif text-foreground hover:text-gold hover:no-underline px-6 py-5" style={{ fontSize: '20px', fontWeight: '700' }}>
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 pt-0 text-foreground text-base leading-[1.7]">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-14 lg:py-16 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ProofCallout
              quote="We appreciated our team's patience, thoughtful communication, and realistic guidance throughout the sale of our family property."
              attribution="Family Review"
              context="Inherited home and sale preparation"
              variant="accent"
            />
          </div>
        </div>
      </section>

      <PageFAQ
        faqs={[
          {
            question: "How do we know it's actually time to sell mom or dad's house?",
            answer: "Usually the trigger isn't a real estate question — it's a care question. A fall, a hospitalization, a memory-care evaluation, or a frank conversation with the doctor. The real estate decision follows. We help families separate the two: first, what does the care plan look like and on what timeline? Then, working backwards from that, when does the home actually need to be on the market? Often there's more time — and more options — than families assume in the first stressful week.",
          },
          {
            question: "Mom is still living in the house. Can you list it without disrupting her?",
            answer: "Yes, and we do this often. Showings are scheduled around her routine, not the buyer's convenience. We use lockbox protocols that keep her safe, coordinate with caregivers or family for showing windows, and stage in a way that respects what's still her home. For seniors with cognitive changes, we sometimes recommend listing only after the move — the right answer depends on the person, not a script.",
          },
          {
            question: "How do we handle 40 years of belongings without traumatizing a parent?",
            answer: "Slowly, and with the right people. We coordinate with senior move managers — including HB Move Management, a division of Hansen Bros. — who specialize in this exact work: room-by-room sorting, what-stays/what-goes conversations, donations, family heirloom distribution, and estate-sale referrals for the rest. The real estate timeline gets built around their pace, not ahead of it.",
          },
          {
            question: "Will selling the house affect her Medicaid eligibility or care funding?",
            answer: "It can — and this is a question for an elder law attorney or care planner before the home is listed, not after. We frequently coordinate with elder law attorneys and Aging Life Care professionals throughout Western Washington and will pause or sequence the sale around their guidance. If you don't have an elder law attorney yet, we can refer you to several we work with regularly.",
          },
          {
            question: "We're three siblings in three different cities. How do you keep us all aligned?",
            answer: "One designated point of contact in the family, weekly written updates to everyone, and decisions documented in writing. Most senior-transition stress comes from siblings hearing different things at different times. We treat the family as one client and make sure no one is finding out important news from another sibling.",
          },
          {
            question: "How do I help a parent sell their home when they are moving to assisted living?",
            answer: "Start by aligning the home sale timeline with the assisted living move-in date — the two rarely need to happen simultaneously. Real Property Planning coordinates with the senior move manager, handles cleanout and light preparation, and sequences the listing so proceeds are available when needed for care costs. The parent does not need to be present for showings or vendor visits.",
          },
          {
            question: "What is the difference between downsizing and a senior transition?",
            answer: "Downsizing is moving from a larger home to a smaller one — often by choice and on the senior's own timeline. A senior transition is broader: it usually involves a move into assisted living, memory care, or family housing, and is often driven by a health event or care need. Senior transitions typically involve more coordination with care professionals, family members, and sometimes attorneys or financial advisors.",
          },
          {
            question: "How far in advance should we start planning a senior home sale?",
            answer: "Ideally three to six months before the move, though Real Property Planning regularly works with families on shorter timelines. Earlier planning gives time for thoughtful sorting, gradual cleanout, and decisions about what to keep, gift, or sell — without the pressure of a deadline. When the move is urgent, the platform compresses the timeline while keeping the family informed at every step.",
          },
          {
            question: "What professionals should be involved in a senior housing transition?",
            answer: "Most transitions involve a senior move manager (sorting, packing, settling in), a real estate professional with senior transition experience, a placement specialist or care advisor, and sometimes an elder law attorney, financial planner, or CPA. Real Property Planning coordinates with all of these professionals so the family has one consistent point of contact for the property side.",
          },
        ]}
        heading="Frequently Asked Questions"
        id="senior-transitions-faq"
      />

      {/* Educational Links */}
      <section className="py-12 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-muted-foreground mb-3">Related Resources</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/probate-estate-sales" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Probate &amp; Estate Sales</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/executors" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">For Executors</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/insights-guidance/how-to-move-elderly-parents-safely-and-respectfully" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">How to Move Elderly Parents</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/why-valuation-matters" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Why Valuation Matters</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/how-the-process-works" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">How the Process Works</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/guides/out-of-state-families" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Out-of-State Families</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/resources" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Resources</Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentPath="/senior-transitions" />

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">
              Planning a Senior Housing Transition?
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-4">
              Most families start with a single question. That's enough to get started.
            </p>
            <p className="text-primary-foreground/70 text-base leading-relaxed mb-4">
              Real Property Planning welcomes confidential conversations with families at any stage — whether you're just beginning to think about a transition or are already in the middle of one. There is no pressure, no obligation, and no sales pitch. Just experienced, honest guidance for your family's situation.
            </p>
            <p className="text-primary-foreground/60 text-base leading-relaxed mb-8">
              Families throughout King County, Snohomish County, Pierce County, Kitsap County, and across Washington State are welcome to reach out. Through our eXp Realty network, Real Property Planning can also connect families with a trusted broker anywhere in the country.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+12069003015">
                <Button variant="gold" size="lg">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy" />
                  Call (206) 900-3015
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline3d" className="border-gold/50 bg-transparent text-gold hover:bg-gold hover:text-foreground focus-visible:ring-gold">
                  Send a Message
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default SeniorTransitions;
