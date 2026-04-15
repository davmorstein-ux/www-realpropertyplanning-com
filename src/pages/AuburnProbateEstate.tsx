import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PageFAQ from "@/components/PageFAQ";
import MidPageCTA from "@/components/MidPageCTA";
import GoldCheck3D from "@/components/GoldCheck3D";
import RelatedServices from "@/components/RelatedServices";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { realEstateAgentSchema, areaServed } from "@/lib/schema";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";

const faqs = [
  { question: "What should I do first with an inherited home in Auburn?", answer: "Secure the property, confirm your legal authority, and get an honest assessment of its condition and realistic market value. David can visit the home, document what affects its value, and walk you through your options before you make any commitments." },
  { question: "How does David's appraisal background help in Auburn?", answer: "As both a licensed Washington State real estate broker and a state-certified residential appraiser, David provides pricing grounded in actual property condition and local comparable sales. In Auburn, where condition is often the biggest variable in estate sales, this dual perspective prevents pricing mistakes that cost families time and money." },
  { question: "Should I clean out and fix up the home before listing?", answer: "It depends on the property. David evaluates what the home needs, what improvements are worth the investment, and what buyers in Auburn's market will accept as-is. The goal is to invest where it counts and avoid spending money on things that won't move the needle." },
  { question: "What if the property has significant deferred maintenance?", answer: "Many Auburn inherited homes do. David assesses the scope honestly — separating cosmetic issues from structural or mechanical concerns — and helps you understand how condition affects pricing. Sometimes a lower price with transparent disclosure is better than sinking money into repairs that won't fully recoup." },
  { question: "Can David help if I live outside Auburn?", answer: "Yes. David works with families managing Auburn properties from across the state and out of state. He coordinates property access, cleanout crews, contractors, and the sale process so you don't need to make repeated trips." },
  { question: "How long does it take to sell an inherited home in Auburn?", answer: "Timelines depend on the legal process, condition, and preparation needs. Once the property is ready and authority is established, honestly priced Auburn homes typically sell within a reasonable timeframe. David helps set clear expectations from the start." },
];

const AuburnProbateEstate = () => {
  useEffect(() => {
    const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };
    const localSchema = { ...realEstateAgentSchema, "@context": "https://schema.org", areaServed: [{ "@type": "City", name: "Auburn", containedInPlace: { "@type": "State", name: "Washington" } }, ...areaServed] };
    const s1 = document.createElement("script"); s1.type = "application/ld+json"; s1.setAttribute("data-page-jsonld", "faq"); s1.textContent = JSON.stringify(faqSchema); document.head.appendChild(s1);
    const s2 = document.createElement("script"); s2.type = "application/ld+json"; s2.setAttribute("data-page-jsonld", "local"); s2.textContent = JSON.stringify(localSchema); document.head.appendChild(s2);
    return () => { document.querySelectorAll("script[data-page-jsonld]").forEach((s) => s.remove()); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Probate & Estate Real Estate in Auburn, Washington | Real Property Planning" description="Guidance for executors and families handling inherited property in Auburn. Honest assessment, realistic pricing, and practical preparation support for homes in any condition." />
      <BreadcrumbSchema items={[{ name: "King County", url: "/king-county" }, { name: "Auburn", url: "/auburn-probate-estate-real-estate" }]} />
      <Header />
      <main id="main-content">

      <section className="bg-primary pt-3 md:pt-4 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">Auburn, King County</p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">Honest Guidance for Inherited Property in Auburn</h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">Inherited homes in Auburn often come with real condition questions — deferred maintenance, years of accumulated belongings, and uncertainty about what the property is actually worth. An honest assessment is the best place to start.</p>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">When Auburn Families Reach Out</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">Auburn inherited property situations tend to be hands-on. These aren't pristine homes waiting for a listing — they're real houses that need real decisions:</p>
            <ul className="space-y-4">
              {["A home with years of deferred maintenance and no clear picture of what it needs", "Accumulated belongings that require cleanout before the property can be assessed or shown", "Family members unsure whether to invest in repairs or sell in current condition", "Uncertainty about realistic market value given the property's state", "An executor looking for someone willing to walk the property and give honest feedback"].map((item, i) => (
                <li key={i} className="flex items-start gap-3"><GoldCheck3D size={22} className="mt-0.5 shrink-0" /><span className="text-foreground text-[15px] leading-relaxed">{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">Why Honest Assessment Matters Most in Auburn</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">Auburn's housing stock includes older homes near downtown, mid-century properties in Lea Hill and Lakeland Hills, and newer construction toward the edges. Inherited properties here often sit at the older end of that range — homes built in the 1960s through 1980s that may not have been updated in decades.</p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">For these properties, condition isn't a minor detail — it's the primary factor that determines value. A roof nearing end of life, outdated electrical, aging plumbing, or foundation concerns can shift a home's realistic price by tens of thousands of dollars. Families who rely on automated estimates or optimistic assumptions often find themselves surprised when offers come in lower than expected.</p>
            <p className="text-muted-foreground text-lg leading-relaxed">As both a licensed Washington State real estate broker and a state-certified residential appraiser, David Stein assesses inherited properties based on what they actually are — not what they used to be or what someone hopes they might be. That honesty is the foundation of every good decision that follows.</p>
          </div>
        </div>
      </section>

      <MidPageCTA heading="Have Questions About an Auburn Property?" body="David provides confidential consultations for executors, trustees, and families handling inherited or estate property in Auburn. Whether the home is in great shape or needs significant work, a conversation can help clarify your path." buttonText="Schedule a Consultation" microcopy="No pressure. Just practical guidance for your situation." />

      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">From Cleanup to Closing — Practical Coordination</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">When an inherited Auburn home needs work, someone has to manage the details — organizing a cleanout, getting contractor bids, making decisions about what to fix and what to leave. For families who aren't local or who are already managing other responsibilities, this can feel overwhelming.</p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">David takes on that coordination. He manages the cleanout process, oversees targeted repairs, works with vendors, and keeps the family updated on progress. Everything is documented, communicated clearly, and aligned with the pricing and preparation strategy.</p>
            <p className="text-muted-foreground text-lg leading-relaxed">The goal is to get the property positioned well for market without wasting the estate's resources on improvements that won't pay for themselves.</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">How I Help Get Properties From Here to Sold</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">The process is designed to be practical, direct, and focused on outcomes:</p>
            <ol className="space-y-6">
              {[{ title: "Starting With Honesty", desc: "We talk about the property, the situation, and what you're dealing with. I ask direct questions and listen carefully — because every property starts in a different place." }, { title: "Walking the Property", desc: "I assess the home in person — roof, structure, systems, cosmetics, grounds. I document what I find and explain how each factor affects the home's realistic value." }, { title: "Building a Realistic Plan", desc: "Using my appraisal background and Auburn-specific data, I develop a pricing and preparation strategy that fits the property's actual condition and the family's goals." }, { title: "Managing the Work", desc: "I coordinate cleanout, preparation, and any targeted improvements — overseeing vendors and keeping costs aligned with expected return." }, { title: "Selling the Property", desc: "From listing through closing, I manage the process with transparent communication and no surprises. Practical, steady, and professional." }].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/15 text-gold font-semibold text-sm shrink-0 mt-0.5">{i + 1}</span>
                  <div><p className="text-foreground font-semibold text-[15px] mb-1">{step.title}</p><p className="text-muted-foreground text-[15px] leading-relaxed">{step.desc}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <PageFAQ faqs={faqs} heading="Auburn Probate & Estate Property FAQ" />

      <section className="py-12 bg-background"><div className="container px-6 lg:px-8"><div className="max-w-3xl mx-auto"><p className="text-sm font-semibold text-muted-foreground mb-3">Related Resources</p><div className="flex flex-wrap gap-3">{[{ to: "/executors", label: "For Executors" }, { to: "/probate-estate-sales", label: "Probate & Estate Sales" }, { to: "/senior-transitions", label: "Senior Transitions" }, { to: "/for-attorneys", label: "For Attorneys" }, { to: "/why-valuation-matters", label: "Why Valuation Matters" }, { to: "/how-the-process-works", label: "How the Process Works" }, { to: "/cities-we-serve", label: "All Cities" }].map((link, i) => (<span key={link.to} className="flex items-center gap-3">{i > 0 && <span className="text-muted-foreground/40">·</span>}<Link to={link.to} className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">{link.label}</Link></span>))}</div></div></div></section>
      <section className="py-10 bg-background"><div className="container px-6 lg:px-8"><div className="max-w-3xl mx-auto"><p className="text-sm font-semibold text-muted-foreground mb-3">Helpful Guides</p><div className="flex flex-wrap gap-3">{[{ to: "/guides/how-probate-real-estate-works", label: "How Probate Sales Work" }, { to: "/guides/what-executors-should-do", label: "What Executors Should Do First" }, { to: "/guides/inherited-house-washington", label: "Inherited House Guide" }, { to: "/guides/out-of-state-families", label: "Out-of-State Families" }, { to: "/guides/appraisal-vs-cma", label: "Appraisal vs. CMA" }, { to: "/guides/senior-transition-differences", label: "Senior Transition Differences" }].map((link, i) => (<span key={link.to} className="flex items-center gap-3">{i > 0 && <span className="text-muted-foreground/40">·</span>}<Link to={link.to} className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">{link.label}</Link></span>))}</div></div></div></section>

      <RelatedServices currentPath="/auburn-probate-estate-real-estate" />

      <section className="py-20 lg:py-28 bg-primary"><div className="container px-6 lg:px-8"><div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">An Honest First Step</h2>
        <p className="text-primary-foreground/75 text-lg leading-relaxed mb-4">If you're dealing with an inherited property in Auburn — whatever its condition — a short conversation can help you understand where things stand and what makes sense next.</p>
        <p className="text-primary-foreground/50 text-base mb-8">No pressure. Just practical guidance.</p>
        <div className="flex justify-center"><Link to="/contact"><Button variant="gold" size="lg" className="px-10 py-4 h-auto text-base"><img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>Schedule a Consultation</Button></Link></div>
      </div></div></section>

      <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default AuburnProbateEstate;
