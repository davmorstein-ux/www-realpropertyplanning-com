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
import AffiliationBadgeGrid from "@/components/AffiliationBadgeGrid";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import DirectAnswerBlock from "@/components/DirectAnswerBlock";

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
    description: "Adult children, spouses, and extended family members are almost always involved — and they don't always agree. Some family members want to sell quickly; others want to hold on. Some are local; others are managing everything from another state. David works with all of them, providing consistent communication and clear guidance that keeps the process moving without pressure.",
  },
  {
    title: "Care Professionals",
    description: (
      <>
        Senior move managers, care coordinators, social workers, and placement specialists are often working alongside families during a transition. David coordinates with the care team to make sure the real estate timeline fits the broader plan — not the other way around. Real Property Planning has established relationships with senior move professionals in the Puget Sound area, including{" "}
        <a href="https://hbmovemanagement.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gold underline underline-offset-4">HB Move Management</a>, a division of Hansen Bros. Moving &amp; Storage, one of the most experienced senior moving services in Western Washington.
      </>
    ),
  },
  {
    title: "Trusted Advisors",
    description: (
      <>
        Attorneys, financial planners, CPAs, and fiduciaries need the real estate side of a senior transition handled with accuracy and professionalism. David's background as a{" "}
        <Link to="/real-estate-appraiser" className="text-accent hover:text-gold underline underline-offset-4">certified appraiser</Link> means advisors receive reliable valuation guidance — not listing estimates — which matters for financial planning, Medicaid planning, and estate documentation purposes.
      </>
    ),
  },
];

const faqs = [
  {
    question: "How does Real Property Planning help seniors who need to sell their home?",
    answer: "David Stein provides full-service real estate guidance specifically designed for senior housing transitions — from the first conversation about timing and options, through property preparation, pricing, listing, and closing. As both a licensed broker and a certified appraiser, he can give families an honest picture of the home's value in its current condition before any decisions are made. He also coordinates with senior move managers, care teams, attorneys, and family members throughout the process, so the real estate side stays aligned with everything else that's happening.",
  },
  {
    question: "What if the home needs significant work before selling?",
    answer: "Many senior homes haven't been updated in years — and that's completely normal. David helps families think through which improvements are worth making before listing and which aren't. In some cases, selling as-is is the right answer. In others, targeted repairs or staging can meaningfully improve the sale price. Because David can assess value from an appraiser's perspective, families get an honest cost-benefit analysis rather than pressure to renovate.",
  },
  {
    question: "Can Real Property Planning coordinate with a senior move manager or care team?",
    answer: "Yes — and this coordination is often essential. David works regularly with senior move managers, care coordinators, and placement specialists throughout the Puget Sound area. Real Property Planning has an established relationship with HB Move Management (a division of Hansen Bros. Moving & Storage), one of the most experienced senior moving services in Western Washington. David can make introductions and help align timelines across the full team.",
  },
  {
    question: "How long does it typically take to sell a senior's home?",
    answer: "It depends on the family's situation, the home's condition, and the current market. Some properties are ready to list within weeks; others require months of preparation. David works at the family's pace and helps set realistic expectations from the beginning — including an honest assessment of market timing, neighborhood conditions, and what buyers in that area are looking for. The goal is always the right outcome, not the fastest one.",
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
        title="Senior Housing Transitions | Helping Families in Puget Sound & Washington State | Real Property Planning"
        description="Patient, experienced guidance for families helping a senior sell their home in Washington State. Serving King, Snohomish, Pierce & Kitsap Counties."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "Senior Transitions", url: "/senior-transitions" }]} />
      <Header />
      <main id="main-content">

      {/* Hero */}
      <section className="bg-primary pt-16 pb-12 lg:pt-32 lg:pb-28">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-widest uppercase mb-4 text-base">
              Selling a Longtime Home Is About More Than Real Estate
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
              Senior Housing Transitions in Washington State
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
              When a parent or loved one needs to leave the home they've lived in for decades, the decision rarely feels simple — and it rarely is. Families throughout the Puget Sound area reach out to Real Property Planning not because they have a plan, but because they need one. David Stein works at your family's pace, coordinating the real estate side of the transition with patience, clear communication, and experience that comes from years of working alongside families, care professionals, and trusted advisors across Western Washington.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="gold" size="lg" className="w-full sm:w-auto">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy" />
                  Schedule a Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline3d" className="border-gold/50 bg-transparent text-gold hover:bg-gold hover:text-foreground focus-visible:ring-gold w-full sm:w-auto">
                  Request a Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DirectAnswerBlock
        question="How does Real Property Planning support senior housing transitions?"
        answer="Real Property Planning provides step-by-step guidance for seniors and families navigating the sale of a longtime home — whether the next step is assisted living, a memory care community, a smaller residence, or a move closer to family. As both a licensed real estate broker and a Washington State Certified Residential Appraiser, David Stein brings something most agents can't offer: an honest, valuation-based understanding of what the home is actually worth in its current condition — not an inflated number designed to win a listing."
        supportBullets={[
          "Patient, respectful coordination that honors the emotional weight of the transition",
          "Valuation-informed pricing based on actual condition — not automated estimates or pressure to list quickly",
          "Practical help with cleanout coordination, repairs, staging, and sale readiness",
          "Clear communication with adult children, out-of-state family members, care teams, and attorneys",
          "Referral connections to trusted senior move managers, care advisors, and estate professionals throughout the Puget Sound area",
        ]}
        supportSteps={[
          "The process is built around your family's timeline, not a sales calendar. From initial conversation through closing, David coordinates preparation, pricing, and the sale itself — keeping every family member and professional advisor informed at every step.",
        ]}
      />

      <TrustStrip />

      {/* Professional Affiliations */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 sm:gap-8">
            <AffiliationBadgeGrid />
            <p className="text-muted-foreground text-base leading-relaxed text-center max-w-3xl">
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
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              There is no single moment that brings a family to this conversation. Some reach out after a health event changes everything overnight. Others have been watching a parent slow down for years and finally feel it's time to act. David works with families across King County, Snohomish County, Pierce County, Kitsap County, and throughout Washington State — in situations including:
            </p>
            <ul className="space-y-4">
              {transitionSituations.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
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
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
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
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A senior housing transition isn't a standard real estate transaction — and treating it like one is where many families run into problems.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The home may have decades of deferred maintenance. The seller may be emotionally attached in ways that make pricing conversations difficult. Family members may disagree about timing or repairs. There may be a care team, an attorney, and a financial planner all involved — each with their own timeline and priorities. And the senior themselves may still be living in the home during the sale process.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              David Stein's dual background as a licensed real estate broker and a Washington State{" "}
              <Link to="/real-estate-appraiser" className="text-accent hover:text-gold underline underline-offset-4">Certified Residential Appraiser</Link> means he approaches every senior transition sale differently than a typical listing agent. He can assess the home's true condition and value before any pricing conversation begins — which means families get honest guidance from the start, not a number that sounds good but leads to price reductions later.
            </p>
            <p className="text-muted-foreground leading-relaxed">
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
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Senior transitions rarely involve just one person. David works collaboratively with everyone involved to keep the real estate process aligned with the broader plan:
            </p>
            <div className="space-y-6">
              {coordinationPartners.map((partner, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-serif text-lg text-foreground font-semibold mb-2">{partner.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{partner.description}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-8 leading-relaxed">
              Attorneys and financial planners who work with senior clients can learn more about David's <Link to="/for-attorneys" className="text-accent hover:text-gold underline underline-offset-4">referral approach for legal professionals</Link> or the <Link to="/how-the-process-works" className="text-accent hover:text-gold underline underline-offset-4">step-by-step sale process</Link>.
            </p>
          </div>
        </div>
      </section>

      <MidPageCTA
        heading="Planning a Senior Housing Transition?"
        body="David works at the family's pace — with patience, clear communication, and experienced coordination."
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
                  q: "How does David handle the emotional side of a senior home sale?",
                  a: "Slowly, and with respect. Most families reach out during one of the hardest periods they've been through — a parent's health declining, a difficult family decision, the end of an era. David doesn't rush the conversation or the process. He listens first, asks questions about the family's situation and priorities, and builds a plan that fits the family's pace — not a standard listing timeline. Many clients say what they appreciated most wasn't the sale itself, but the way it was handled.",
                },
                {
                  value: "condition",
                  q: "What about a home with decades of deferred maintenance?",
                  a: "This is one of the most common situations David works with, and it's where his appraisal background genuinely helps. Rather than guessing what the home might sell for, David can assess the property's current condition and give families an honest picture of their options: sell as-is, make targeted improvements, or something in between. He can also help coordinate the cleanout, repairs, and staging process through trusted local contractors and service providers — so families don't have to manage that on their own.",
                },
                {
                  value: "remote",
                  q: "Can families coordinate from out of state?",
                  a: "Yes — and this is more common than most people expect. Many of the families David works with have adult children managing the process from out of state, sometimes from across the country. David provides consistent written updates, is available for calls at times that work across time zones, and can manage the full property preparation and sale process locally so family members don't need to be physically present for every step.",
                },
                {
                  value: "timeline",
                  q: "How long does it typically take to sell a senior's home?",
                  a: "There's no single answer, because every family's situation is different. Some families are ready to move quickly; others need months of preparation before the home is ready to list. David works backward from the family's actual timeline — whether that's driven by a care facility move-in date, a financial need, or simply when the family feels ready. The goal is a sale that happens at the right time, not just the fastest time.",
                },
              ].map((item) => (
                <AccordionItem key={item.value} value={item.value} className="bg-card border border-border rounded-2xl overflow-hidden data-[state=open]:border-gold/25 transition-colors">
                  <AccordionTrigger className="text-left font-serif text-base md:text-lg font-semibold text-foreground hover:text-gold hover:no-underline px-6 py-5">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 pt-0 text-muted-foreground leading-relaxed">
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
              quote="We appreciated David's patience, thoughtful communication, and realistic guidance throughout the sale of our family property."
              attribution="Family Review"
              context="Inherited home and sale preparation"
              variant="accent"
            />
          </div>
        </div>
      </section>

      <PageFAQ faqs={faqs} heading="Senior Transition FAQs" />

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
              David welcomes confidential conversations with families at any stage — whether you're just beginning to think about a transition or are already in the middle of one. There is no pressure, no obligation, and no sales pitch. Just experienced, honest guidance for your family's situation.
            </p>
            <p className="text-primary-foreground/60 text-base leading-relaxed mb-8">
              Families throughout King County, Snohomish County, Pierce County, Kitsap County, and across Washington State are welcome to reach out. David can also connect families with trusted brokers in other states through eXp Realty's national referral network.
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
