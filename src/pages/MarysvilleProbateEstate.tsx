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
import { realEstateAgentSchema, areaServed, areaServed } from "@/lib/schema";
import iconPhone3d from "@/assets/icons/real-estate-phone-contact-icon-washington.webp";

const faqs = [
  { question: "What should I do first with an inherited home in Marysville?", answer: "Secure the property, confirm your legal authority to act, and get an honest assessment of its condition and value. David can visit the home, identify what affects its marketability, and outline your options before you make any decisions." },
  { question: "How does David's appraisal background help in Marysville?", answer: "As both a licensed Washington State real estate broker and a state-certified residential appraiser, David provides pricing based on actual property condition and local sales data — not automated estimates. In Marysville, where property ages and conditions range widely, this dual perspective helps families avoid pricing missteps." },
  { question: "Should I fix up the home before selling?", answer: "It depends on the property's condition and your timeline. David evaluates which improvements are likely to pay for themselves and which aren't worth the expense. Many Marysville inherited homes benefit from targeted cleanup and cosmetic work rather than major renovation." },
  { question: "What if family members have different opinions about selling?", answer: "This is common. David provides objective, condition-based information — realistic value, preparation options, and practical tradeoffs — so every family member has the same clear picture to work from. Shared facts usually help conversations move forward." },
  { question: "Can David help if I don't live in Marysville?", answer: "Yes. David works with executors and families managing Snohomish County properties from other parts of the state and beyond. He handles property access, vendor coordination, and the sale process so decisions can move forward without requiring repeated trips." },
  { question: "How long does it take to sell an inherited home in Marysville?", answer: "Timelines depend on the legal process, property condition, and preparation scope. Once the home is ready and authority is established, appropriately priced Marysville properties generally sell within a reasonable timeframe. David helps set clear expectations from the start." },
];

const MarysvilleProbateEstate = () => {
  useEffect(() => {
    const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };
    const localSchema = { ...realEstateAgentSchema, "@context": "https://schema.org", areaServed: [{ "@type": "City", name: "Marysville", containedInPlace: { "@type": "State", name: "Washington" } }, ...areaServed] };
    const s1 = document.createElement("script"); s1.type = "application/ld+json"; s1.setAttribute("data-page-jsonld", "faq"); s1.textContent = JSON.stringify(faqSchema); document.head.appendChild(s1);
    const s2 = document.createElement("script"); s2.type = "application/ld+json"; s2.setAttribute("data-page-jsonld", "local"); s2.textContent = JSON.stringify(localSchema); document.head.appendChild(s2);
    return () => { document.querySelectorAll("script[data-page-jsonld]").forEach((s) => s.remove()); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Probate & Estate Real Estate in Marysville, Washington | Real Property Planning" description="Guidance for executors and families handling inherited property in Marysville. Practical support for family-led decisions, property preparation, and realistic pricing." />
      <BreadcrumbSchema items={[{ name: "Snohomish County", url: "/snohomish-county" }, { name: "Marysville", url: "/marysville-probate-estate-real-estate" }]} />
      <Header />
      <main id="main-content">

      <section className="bg-primary pt-3 md:pt-4 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">Marysville, Snohomish County</p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">Helping Marysville Families Work Through Inherited Property Decisions</h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">When a family home in Marysville passes to the next generation, the decisions ahead are usually practical — what shape is the property in, what's it worth, and how do we move forward together. Clear, grounded guidance makes the difference between a stressful process and a manageable one.</p>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">When Marysville Families Reach Out</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">Marysville has grown steadily over the past two decades, and many of the inherited properties here were purchased during earlier phases of that growth. The families handling them now are dealing with practical realities:</p>
            <ul className="space-y-4">
              {["A family home that's been lived in for 20 or 30 years and reflects that level of wear", "Adult children who grew up in the area but have since moved to other parts of the state", "Uncertainty about whether the home's value has kept pace with the neighborhood", "Questions about cleanout, preparation, and whether updates are worth the investment", "A family trying to reach consensus on what to do with the property"].map((item, i) => (
                <li key={i} className="flex items-start gap-3"><GoldCheck3D size={22} className="mt-0.5 shrink-0" /><span className="text-foreground text-[15px] leading-relaxed">{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">Why Local Awareness Matters in Marysville</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">Marysville's neighborhoods range from established areas near downtown and along State Avenue to newer developments in the Smokey Point corridor and toward Lake Goodwin. Property values reflect this diversity — and inherited homes don't always fit neatly into the averages that online tools produce.</p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">Many inherited Marysville homes were built in the 1990s and early 2000s. They're typically solid construction but may have dated finishes, aging systems, or landscaping that's gotten ahead of the owner. Understanding how these factors affect buyer perception — and whether addressing them is worth the cost — requires someone willing to walk the property and give honest feedback.</p>
            <p className="text-muted-foreground text-lg leading-relaxed">As both a licensed Washington State real estate broker and a state-certified residential appraiser, David Stein provides that ground-level assessment. His pricing reflects the property's actual condition and position within Marysville's market — giving families a reliable foundation for decision-making.</p>
          </div>
        </div>
      </section>

      <MidPageCTA heading="Questions About a Marysville Property?" body="David provides confidential consultations for executors, trustees, and families handling inherited or estate property in Marysville and Snohomish County." buttonText="Schedule a Consultation" microcopy="No pressure. Just practical guidance for your situation." />

      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">Supporting Family-Led Decisions</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">Inherited property decisions in Marysville are usually family decisions — and that means balancing different perspectives, schedules, and levels of involvement. One person may be ready to move forward while another needs more information. Someone may live locally while others are hours away.</p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">David provides the information that helps everyone get aligned — a clear picture of the property's condition, a realistic sense of value, and a practical outline of what needs to happen next. From there, he manages the logistics so the family can focus on the decisions rather than the details.</p>
            <p className="text-muted-foreground text-lg leading-relaxed">Whether it's coordinating a cleanout, getting the property ready for market, or managing communication with attorneys and other parties, David keeps things moving at a pace that works for the family.</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">How I Help Families Get From Questions to Answers</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">The approach is grounded, practical, and designed to give families what they need to make good decisions:</p>
            <ol className="space-y-6">
              {[{ title: "Understanding Your Situation", desc: "We start with a conversation about the property, the family, and what everyone is working toward. No pressure — just a clear starting point." }, { title: "Assessing the Property", desc: "I visit the home and evaluate its condition — structure, systems, finishes, and grounds — in the context of Marysville's current market expectations." }, { title: "Developing a Realistic Strategy", desc: "Using my appraisal background and local data, I build a pricing and preparation plan that reflects the home's actual condition and the family's goals." }, { title: "Coordinating the Work", desc: "I manage cleanout, targeted preparation, and vendor coordination so the property is positioned well without unnecessary expense." }, { title: "Guiding the Sale", desc: "From listing through closing, I keep the process organized and everyone informed. Clear communication, practical timelines, and a steady path to resolution." }].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/15 text-gold font-semibold text-sm shrink-0 mt-0.5">{i + 1}</span>
                  <div><p className="text-foreground font-semibold text-[15px] mb-1">{step.title}</p><p className="text-muted-foreground text-[15px] leading-relaxed">{step.desc}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <PageFAQ faqs={faqs} heading="Marysville Probate & Estate Property FAQ" />

      <section className="py-12 bg-background"><div className="container px-6 lg:px-8"><div className="max-w-3xl mx-auto"><p className="text-sm font-semibold text-muted-foreground mb-3">Related Resources</p><div className="flex flex-wrap gap-3">{[{ to: "/executors", label: "For Executors" }, { to: "/probate-estate-sales", label: "Probate & Estate Sales" }, { to: "/senior-transitions", label: "Senior Transitions" }, { to: "/for-attorneys", label: "For Attorneys" }, { to: "/why-valuation-matters", label: "Why Valuation Matters" }, { to: "/how-the-process-works", label: "How the Process Works" }, { to: "/cities-we-serve", label: "All Cities" }].map((link, i) => (<span key={link.to} className="flex items-center gap-3">{i > 0 && <span className="text-muted-foreground/40">·</span>}<Link to={link.to} className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">{link.label}</Link></span>))}</div></div></div></section>
      <section className="py-10 bg-background"><div className="container px-6 lg:px-8"><div className="max-w-3xl mx-auto"><p className="text-sm font-semibold text-muted-foreground mb-3">Helpful Guides</p><div className="flex flex-wrap gap-3">{[{ to: "/guides/how-probate-real-estate-works", label: "How Probate Sales Work" }, { to: "/guides/what-executors-should-do", label: "What Executors Should Do First" }, { to: "/guides/inherited-house-washington", label: "Inherited House Guide" }, { to: "/guides/out-of-state-families", label: "Out-of-State Families" }, { to: "/guides/appraisal-vs-cma", label: "Appraisal vs. CMA" }, { to: "/guides/senior-transition-differences", label: "Senior Transition Differences" }].map((link, i) => (<span key={link.to} className="flex items-center gap-3">{i > 0 && <span className="text-muted-foreground/40">·</span>}<Link to={link.to} className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">{link.label}</Link></span>))}</div></div></div></section>

      <RelatedServices currentPath="/marysville-probate-estate-real-estate" />

      <section className="py-20 lg:py-28 bg-primary"><div className="container px-6 lg:px-8"><div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">A Grounded First Step</h2>
        <p className="text-primary-foreground/75 text-lg leading-relaxed mb-4">If your family is working through decisions about a Marysville property, a short conversation can help you understand the home's condition, its realistic value, and what practical steps come next.</p>
        <p className="text-primary-foreground/50 text-base mb-8">No pressure. Just practical guidance.</p>
        <div className="flex justify-center"><Link to="/contact"><Button variant="gold" size="lg" className="px-10 py-4 h-auto text-base"><img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>Schedule a Consultation</Button></Link></div>
      </div></div></section>

      <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default MarysvilleProbateEstate;
