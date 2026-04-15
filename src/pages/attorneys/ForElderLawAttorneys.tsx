import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import GoldCheck3D from "@/components/GoldCheck3D";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";
import iconElderLaw from "@/assets/icons/attorney-elder-law-icon-washington.webp";

const intersections = [
  "Accurate property valuation to support Medicaid planning or spend-down analysis",
  <>Selling a senior's home as part of a planned or unplanned transition to assisted living or <Link to="/senior-living/memory-care" className="text-accent hover:text-gold underline underline-offset-4">memory care</Link></>,
  "Coordinating a property sale with a care team, senior move manager, and family members",
  "Managing a property when the owner is no longer able to participate in decisions",
  "Preparing a longtime family home — often with significant deferred maintenance — for sale",
  "Coordinating among adult children who may be geographically dispersed and not in agreement",
];

const services = [
  {
    title: "Accurate Valuation for Planning Purposes",
    description: (
      <>
        David's background as a <Link to="/real-estate-appraiser" className="text-accent hover:text-gold underline underline-offset-4">Washington State Certified Residential Appraiser</Link> makes him an especially useful resource when valuation needs to support Medicaid planning, benefit calculations, or financial analysis. The assessment goes beyond a listing agent's price opinion — it's a condition-adjusted, methodology-based market analysis that advisors and attorneys can rely on.
      </>
    ),
  },
  {
    title: "Patient, Respectful Sale Coordination",
    description: (
      <>
        <Link to="/senior-transitions" className="text-accent hover:text-gold underline underline-offset-4">Senior home sales</Link> are not standard transactions. David works at the family's pace — allowing time for emotional preparation, coordinating with the care team, and managing the property preparation and sale in a way that respects the weight of the transition. His affiliation with the <a href="https://www.aginglifecare.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-gold underline underline-offset-4">Aging Life Care Association</a> and the National Association of Senior Advocates reflects a commitment to this work that goes beyond real estate.
      </>
    ),
  },
  {
    title: "Coordination With the Full Care Team",
    description: (
      <>
        David works alongside senior move managers, care coordinators, social workers, and placement specialists — aligning the real estate timeline with the broader transition plan. Real Property Planning has an established relationship with <Link to="/senior-transitions" className="text-accent hover:text-gold underline underline-offset-4">HB Move Management</Link> (a division of Hansen Bros. Moving &amp; Storage), one of the most experienced senior moving services in Western Washington.
      </>
    ),
  },
  {
    title: "Out-of-Area Family Coordination",
    description: "Many elder law clients have adult children managing the process from other states. David handles the property locally — with consistent updates to the family, the attorney, and the care team — so no one has to travel for every step.",
  },
];

const situations = [
  "A senior client is transitioning to assisted living, memory care, or independent senior living",
  "A property needs to be valued accurately for Medicaid planning or benefit eligibility purposes",
  "A guardian or conservator needs a trusted professional to manage an incapacitated client's property",
  "Adult children need help coordinating a parent's home sale from out of state",
  "A longtime family home needs preparation, cleanout, and sale management with sensitivity to the family's emotional situation",
];

const ForElderLawAttorneys = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Real Estate Support for Elder Law Attorneys in Washington State | Real Property Planning"
      description="Real Property Planning helps elder law attorneys and their clients navigate senior home sales, Medicaid planning property decisions, and estate transitions in Washington State."
    />
    <BreadcrumbSchema
      items={[
        { name: "For Attorneys", url: "/for-attorneys" },
        { name: "Elder Law Attorneys", url: "/for-elder-law-attorneys" },
      ]}
    />
    <Header />
    <main id="main-content">

    {/* Hero */}
    <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <img src={iconElderLaw} alt="Elder law attorney senior transition real estate Washington State" className="mx-auto max-w-[15rem] w-full h-auto object-contain mb-1.5" loading="lazy"/>
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">
            For Elder Law Attorneys
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            Real Estate Support for Elder Law Attorneys and Their Clients in Washington State
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-3">
            Patient, Coordinated Property Guidance for Clients Navigating Major Life Transitions
          </p>
          <Link to="/contact">
            <Button variant="gold" size="lg" className="px-7 py-4 h-auto rounded-lg">
              <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy"/>
              Schedule a Conversation
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Opening */}
    <section className="py-16 lg:py-20 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Elder law clients face some of the most emotionally and financially complex property decisions that exist. A senior moving to assisted living may be leaving a home they've lived in for 40 years. A family managing a Medicaid spend-down may need an accurate property valuation before any financial decisions can be made. An adult child navigating guardianship may need a professional to assess, prepare, and sell a parent's home while the parent is still emotionally connected to it.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Real Property Planning works alongside elder law attorneys throughout Washington State to provide patient, accurate, and fully coordinated real estate support — at the family's pace, with consistent communication to the attorney and care team.
          </p>
        </div>
      </div>
    </section>

    {/* Where Real Estate and Elder Law Intersect */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
            Where Real Estate and Elder Law Intersect
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Elder law clients and their families encounter real estate questions that require both legal and property expertise:
          </p>
          <div className="grid gap-4">
            {intersections.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <GoldCheck3D size={20} className="mt-0.5 shrink-0" />
                <span className="text-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* How We Support Your Clients */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-10">
            How We Support Your Clients
          </h2>
          <div className="grid gap-5">
            {services.map((s, i) => (
              <div key={i} className="bg-card border border-border rounded-xl px-7 py-6">
                <h3 className="font-serif text-xl text-foreground font-semibold mb-2">
                  {s.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Common Situations */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
            Common Situations
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Elder law attorneys refer clients to Real Property Planning when:
          </p>
          <ul className="space-y-4">
            {situations.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <GoldCheck3D size={20} className="mt-0.5 shrink-0" />
                <span className="text-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 lg:py-28 bg-primary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-5">
            Discuss a Client Situation
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-4">
            If you work with senior clients who will need to make property decisions as part of a life transition, Medicaid plan, or estate matter, David welcomes the conversation.
          </p>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
            Real Property Planning serves elder law attorneys and their clients throughout{" "}
            <Link to="/counties" className="text-gold hover:text-gold/80 underline underline-offset-4 transition-colors">King County, Snohomish County, Pierce County, Kitsap County</Link>, and across Washington State.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+12069003015">
              <Button variant="gold" size="lg" className="px-8 py-4 h-auto">
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" loading="lazy"/>
                Call (206) 900-3015
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="px-8 py-4 h-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Send a Message
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <RelatedServices currentPath="/for-elder-law-attorneys" />
    <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default ForElderLawAttorneys;
