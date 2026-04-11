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
import { realEstateAgentSchema } from "@/lib/schema";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";

const faqs = [
  { question: "What should I do first with an inherited home in Federal Way?", answer: "Secure the property, confirm your legal authority, and get an honest assessment of condition and value. David can walk through the home, identify what affects its marketability, and help you understand your options before making commitments." },
  { question: "How does David's appraisal background help in Federal Way?", answer: "As both a licensed Washington State real estate broker and a state-certified residential appraiser, David provides pricing based on actual property condition and local comparable data. In Federal Way, where homes range from well-maintained to significantly deferred, this dual expertise ensures pricing reflects reality." },
  { question: "Is it better to sell quickly or take time to prepare?", answer: "It depends on the property's condition, your timeline, and the transition situation. David evaluates the trade-offs honestly — sometimes targeted preparation yields a strong return; other times, pricing the home to sell in current condition is the smarter path. He'll help you weigh both options." },
  { question: "Can David coordinate the process if I'm not local?", answer: "Yes. David regularly works with executors and families managing Federal Way properties from other parts of Washington, out of state, or internationally. He handles property access, vendor coordination, and communication so you can participate in decisions without managing logistics." },
  { question: "What if the sale is tied to a parent's move to care?", answer: "This is common in Federal Way. David coordinates sale timelines with care transitions, working with families, senior living communities, and other professionals to keep everything aligned. The goal is to reduce pressure during an already stressful time." },
  { question: "How long does it take to sell an inherited home in Federal Way?", answer: "Timelines depend on the legal process, property condition, and preparation scope. Once the home is ready and authority is in place, well-priced Federal Way properties typically sell within a few weeks. David helps set realistic expectations based on your specific situation." },
];

const FederalWayProbateEstate = () => {
  useEffect(() => {
    const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };
    const localSchema = { ...realEstateAgentSchema, "@context": "https://schema.org", areaServed: [{ "@type": "City", name: "Federal Way", containedInPlace: { "@type": "State", name: "Washington" } }, ...realEstateAgentSchema.areaServed] };
    const s1 = document.createElement("script"); s1.type = "application/ld+json"; s1.setAttribute("data-page-jsonld", "faq"); s1.textContent = JSON.stringify(faqSchema); document.head.appendChild(s1);
    const s2 = document.createElement("script"); s2.type = "application/ld+json"; s2.setAttribute("data-page-jsonld", "local"); s2.textContent = JSON.stringify(localSchema); document.head.appendChild(s2);
    return () => { document.querySelectorAll("script[data-page-jsonld]").forEach((s) => s.remove()); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Probate & Estate Real Estate in Federal Way, Washington | Real Property Planning" description="Guidance for executors and families handling inherited property in Federal Way. Support for timing decisions, transition situations, and practical preparation." />
      <BreadcrumbSchema items={[{ name: "King County", url: "/king-county" }, { name: "Federal Way", url: "/federal-way-probate-estate-real-estate" }]} />
      <Header />

      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">Federal Way, King County</p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">Guidance for Inherited Property Decisions in Federal Way</h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">Property decisions in Federal Way often come during transitions — a parent moving to care, an estate that needs to be settled, or a family working through timing and preparation questions. Having clear guidance on what to do and when to do it simplifies the entire process.</p>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">When Federal Way Families Reach Out</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">Federal Way sits between Seattle and Tacoma, and families here face property situations that often intersect with broader life changes. These are the circumstances that typically start a conversation:</p>
            <ul className="space-y-4">
              {["A parent transitioning to assisted living or memory care while the family home sits empty", "Inherited property that needs decisions about timing — sell now, prepare first, or wait", "Multiple family members with different perspectives on what to do with the home", "A property that hasn't been maintained consistently and needs honest evaluation", "Executor or trustee trying to understand realistic value and manage the process efficiently"].map((item, i) => (
                <li key={i} className="flex items-start gap-3"><GoldCheck3D size={22} className="mt-0.5 shrink-0" /><span className="text-foreground text-[15px] leading-relaxed">{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">Why Timing and Preparation Matter in Federal Way</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">Federal Way's market includes a mix of 1970s–90s construction, newer developments near the Town Center, and older properties scattered throughout established neighborhoods. Inherited homes often fall somewhere in the middle — livable but dated, with condition issues that affect how buyers perceive value.</p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">When a sale is connected to a life transition — a move to care, a relocation, or settling an estate with a deadline — timing becomes a critical factor. Rushing to market without preparation can leave money behind, but over-investing in renovations delays the process and may not pay off. Finding the right balance requires honest assessment and local knowledge.</p>
            <p className="text-muted-foreground text-lg leading-relaxed">As both a licensed Washington State real estate broker and a state-certified residential appraiser, David Stein evaluates Federal Way properties based on their actual condition, neighborhood positioning, and realistic buyer expectations. This means a pricing and preparation strategy that fits both the property and your timeline.</p>
          </div>
        </div>
      </section>

      <MidPageCTA heading="Facing a Timing Decision in Federal Way?" body="David provides confidential consultations for executors, trustees, and families managing inherited or transition-related property decisions in Federal Way and South King County." buttonText="Schedule a Consultation" microcopy="No pressure. Just practical guidance for your situation." />

      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">Simplifying Decisions During Transitions</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">Many Federal Way property situations involve more than just a house. A parent may be moving to care while the family figures out what to do with a home full of decades of possessions. An executor may be managing an estate from another city while juggling their own responsibilities. The property decision sits on top of everything else.</p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">David helps reduce that weight. He provides a clear assessment of the property, outlines practical options with realistic timelines, and then manages the execution — cleanout coordination, targeted preparation, vendor oversight, and the sale itself. The family stays informed and involved in decisions without carrying the logistical burden.</p>
            <p className="text-muted-foreground text-lg leading-relaxed">When timing matters, having someone who can keep the process moving calmly and efficiently makes a meaningful difference.</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">How I Help Navigate Transition-Driven Decisions</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">The framework is designed to bring structure to situations that often feel uncertain:</p>
            <ol className="space-y-6">
              {[{ title: "Understanding the Full Picture", desc: "We start with a conversation about the property, the transition, and the people involved. What's the timeline? What are the priorities? What's driving the urgency?" }, { title: "Assessing the Property", desc: "I visit the home, evaluate its condition, and identify the factors that affect its value and marketability in Federal Way's current market." }, { title: "Aligning Strategy With Timing", desc: "I develop a pricing and preparation plan that accounts for your timeline — whether that's moving quickly or taking a more measured approach." }, { title: "Coordinating the Details", desc: "I manage cleanout, preparation, vendor logistics, and communication with all parties. The process moves forward without anyone scrambling." }, { title: "Guiding the Sale to Completion", desc: "From listing through closing, I keep things organized and everyone informed. A calm, steady process with clear updates throughout." }].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/15 text-gold font-semibold text-sm shrink-0 mt-0.5">{i + 1}</span>
                  <div><p className="text-foreground font-semibold text-[15px] mb-1">{step.title}</p><p className="text-muted-foreground text-[15px] leading-relaxed">{step.desc}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <PageFAQ faqs={faqs} heading="Federal Way Probate & Estate Property FAQ" />

      <section className="py-12 bg-background"><div className="container px-6 lg:px-8"><div className="max-w-3xl mx-auto"><p className="text-sm font-semibold text-muted-foreground mb-3">Related Resources</p><div className="flex flex-wrap gap-3">{[{ to: "/executors", label: "For Executors" }, { to: "/probate-estate-sales", label: "Probate & Estate Sales" }, { to: "/senior-transitions", label: "Senior Transitions" }, { to: "/for-attorneys", label: "For Attorneys" }, { to: "/why-valuation-matters", label: "Why Valuation Matters" }, { to: "/how-the-process-works", label: "How the Process Works" }, { to: "/cities-we-serve", label: "All Cities" }].map((link, i) => (<span key={link.to} className="flex items-center gap-3">{i > 0 && <span className="text-muted-foreground/40">·</span>}<Link to={link.to} className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">{link.label}</Link></span>))}</div></div></div></section>
      <section className="py-10 bg-background"><div className="container px-6 lg:px-8"><div className="max-w-3xl mx-auto"><p className="text-sm font-semibold text-muted-foreground mb-3">Helpful Guides</p><div className="flex flex-wrap gap-3">{[{ to: "/guides/how-probate-real-estate-works", label: "How Probate Sales Work" }, { to: "/guides/what-executors-should-do", label: "What Executors Should Do First" }, { to: "/guides/inherited-house-washington", label: "Inherited House Guide" }, { to: "/guides/out-of-state-families", label: "Out-of-State Families" }, { to: "/guides/appraisal-vs-cma", label: "Appraisal vs. CMA" }, { to: "/guides/senior-transition-differences", label: "Senior Transition Differences" }].map((link, i) => (<span key={link.to} className="flex items-center gap-3">{i > 0 && <span className="text-muted-foreground/40">·</span>}<Link to={link.to} className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">{link.label}</Link></span>))}</div></div></div></section>

      <RelatedServices currentPath="/federal-way-probate-estate-real-estate" />

      <section className="py-20 lg:py-28 bg-primary"><div className="container px-6 lg:px-8"><div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">A Calm First Step</h2>
        <p className="text-primary-foreground/75 text-lg leading-relaxed mb-4">If you're managing a property transition in Federal Way and want clarity on timing, preparation, and next steps, a short conversation can help you move forward with confidence.</p>
        <p className="text-primary-foreground/50 text-base mb-8">No pressure. Just practical guidance.</p>
        <div className="flex justify-center"><Link to="/contact"><Button variant="gold" size="lg" className="px-10 py-4 h-auto text-base"><img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>Schedule a Consultation</Button></Link></div>
      </div></div></section>

      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default FederalWayProbateEstate;
