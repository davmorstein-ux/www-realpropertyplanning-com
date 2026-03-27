import GoldCheck3D from "@/components/GoldCheck3D";
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

import people3d from "@/assets/people-3d.png";
import heart3d from "@/assets/heart-3d.png";
import alcaLogo from "@/assets/alca-corporate-partner.png";
import naosaBadge from "@/assets/naosa-badge-clean.png";
import naepcLogo from "@/assets/naepc-logo.png";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";

const transitionSituations = [
  "Downsizing from a longtime family home to a smaller residence",
  "Moving to assisted living, memory care, or a senior living community",
  "Selling a home following a health event or change in care needs",
  "Helping a parent or loved one prepare for a planned housing transition",
  "Managing a sale while coordinating with care professionals and family members",
];

const whatFamiliesNeed = [
  "A patient, respectful approach that honors the emotional weight of these decisions",
  "Clear guidance about timing, preparation, and what to expect from the process",
  "Honest market insight about the home's current value and condition",
  "Practical help with cleanout, repairs, staging, and sale readiness",
  "A professional who communicates clearly with everyone involved",
];

const coordinationPartners = [
  { title: "Family Members", description: "Adult children, spouses, and extended family who may have different perspectives on timing, pricing, and sale decisions." },
  { title: "Care Professionals", description: "Senior move managers, care coordinators, social workers, and placement specialists helping manage the broader transition." },
  { title: "Trusted Advisors", description: "Attorneys, financial planners, CPAs, and fiduciaries who need the real estate side handled with professionalism." },
];

const faqs = [
  {
    question: "How does David help seniors who need to sell their home?",
    answer: "David provides patient, step-by-step guidance through the entire process. He evaluates the home's condition and market position, coordinates preparation and cleanout, manages the listing and sale, and communicates regularly with family members throughout.",
  },
  {
    question: "What if the home needs significant work before selling?",
    answer: "Many longtime family homes need updates before going to market. David evaluates which improvements are likely to improve the sale outcome and which are not worth the investment — then coordinates vendors to handle the work.",
  },
  {
    question: "Can David coordinate with a senior move manager or care team?",
    answer: "Yes. David often works alongside families, senior move managers, care coordinators, and other professionals to ensure the real estate timeline aligns with the broader transition plan.",
  },
  {
    question: "How long does it typically take to sell a senior's home?",
    answer: "Timelines depend on the home's condition, location, and preparation needs. Some homes sell quickly with minimal work; others benefit from a more deliberate approach. David creates a realistic timeline that balances speed with value protection.",
  },
];

const jsonLd = articleSchema({
  headline: "Senior Home Sales & Downsizing Support",
  description: "Compassionate, experienced real estate support for senior housing transitions — downsizing, assisted living moves, and family home sales throughout Washington State.",
  url: "/senior-transitions",
  datePublished: "2025-01-15",
  dateModified: "2026-03-15",
  about: ["Senior transitions", "Downsizing", "Assisted living", "Senior home sales", "Family housing decisions"],
});

const SeniorTransitions = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Senior Home Sales & Transition Support | David Stein | Washington State"
        description="Compassionate, experienced real estate support for senior housing transitions — downsizing, assisted living moves, and family home sales throughout Washington State. Licensed broker and certified appraiser."
        jsonLd={jsonLd}
      />
      <BreadcrumbSchema items={[{ name: "Senior Transitions", url: "/senior-transitions" }]} />
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-16 pb-12 lg:pt-32 lg:pb-28">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-widest uppercase mb-4 text-base">
              Senior Housing Transitions
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
              Selling a Longtime Home Is About More Than Real Estate
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-4">
              Real Property Planning supports seniors and families with downsizing, relocation, and selling a longtime home throughout Washington State. We handle real estate decisions tied to assisted living moves, independent or memory care transitions, and multi-step senior housing plans — with patience and clear communication.
            </p>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-8">
              After 30 or 40 years in the same home, selling is never just a transaction. David Stein works at the family's pace, not a sales quota. He manages the preparation, coordinates with care professionals and family members, prices the home based on real market data, and handles the sale with steady communication that keeps everyone informed and comfortable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
 <Button variant="gold" size="lg"className="hover:-light w-full sm:w-auto">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
                  Schedule a Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-gold/50 bg-transparent text-gold hover:bg-gold hover:text-foreground focus-visible:ring-gold w-full sm:w-auto">
                  Request a Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Professional Affiliations */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <div className="flex items-center gap-6 shrink-0">
              <a href="https://www.aginglifecare.org" target="_blank" rel="noopener noreferrer">
                <img
                  src={alcaLogo}
                  alt="Aging Life Care Association Corporate Partner"
                  className="h-20 md:h-24 w-auto"
                  loading="lazy"
                />
              </a>
              <img
                src={naosaBadge}
                alt="National Association of Senior Advocates - Best Real Estate Agent 2026"
                className="h-48 md:h-56 w-auto"
                loading="lazy"
              />
              <a href="https://www.naepc.org" target="_blank" rel="noopener noreferrer">
                <img
                  src={naepcLogo}
                  alt="National Association of Estate Planners & Councils"
                  className="max-h-[82px] w-auto object-contain"
                  loading="lazy"
                />
              </a>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed">
              Real Property Planning is a Corporate Partner of the Aging Life Care Association, a recognized member of the National Association of Senior Advocates and Advisors, and a member of the National Association of Estate Planners &amp; Councils.
            </p>
          </div>
        </div>
      </section>

      {/* Common Transition Situations */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              When Families Reach Out
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Senior housing transitions take many forms. David works with families in situations including:
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
            <img src={heart3d} alt="" aria-hidden="true" className="w-10 h-10 shrink-0 mb-6" style={{ width: 40, height: 40 }} />
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">
              What Families Need Most During These Transitions
            </h2>
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

      {/* Coordinating With Family and Professionals */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <img src={people3d} alt="" aria-hidden="true" className="w-10 h-10 object-contain mb-6" />
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              Coordinating With Family, Care Professionals & Trusted Advisors
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

      {/* Emotional and Practical Realities */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
              The Emotional and Practical Realities of Selling a Family Home
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A home where someone has lived for 30 or 40 years is not just a house — it holds decades of memories, routines, and identity. The decision to sell often comes during a health crisis, a loss of independence, or a family conversation that nobody wanted to have. These circumstances make every decision more difficult.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              David approaches these situations with the understanding that the timeline is not always his to set. Some families need months to process the decision before listing. Others face urgent timelines driven by care needs or financial pressure. In both cases, David provides honest, patient guidance — helping families understand their options without creating artificial urgency.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Practically, many senior homes present challenges that conventional listings do not. Decades of accumulated belongings need to be sorted, donated, or removed. Systems may be outdated — original furnaces, aging roofs, single-pane windows. Landscaping may be overgrown. David evaluates each property individually and recommends a preparation plan that balances cost, timeline, and likely market impact.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For families coordinating from out of state, David serves as the local point of contact — meeting vendors at the property, overseeing cleanout and repairs, and providing photo updates so everyone stays informed without needing to travel repeatedly.
            </p>
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
              <Link to="/probate-estate-sales" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Probate & Estate Sales</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/executors" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">For Executors</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/how-to-move-elderly-parents" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">How to Move Elderly Parents</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/why-valuation-matters" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Why Valuation Matters</Link>
              <span className="text-muted-foreground/40">·</span>
              <Link to="/how-the-process-works" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">How the Process Works</Link>
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
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-4">
              David welcomes confidential conversations with families and their trusted advisors. There is no pressure — just experienced guidance tailored to your situation.
            </p>
            <p className="text-primary-foreground/50 text-base mb-8">
              A short conversation to understand your family's needs, answer questions, and discuss next steps.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
 <Button variant="gold" size="lg">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default SeniorTransitions;
