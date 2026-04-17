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
  { question: "What should I do first with an inherited home in Renton?", answer: "Secure the property, confirm your legal authority to act, and get an honest assessment of condition and market value. Our team can walk through the property, identify what affects value, and help you understand your options before committing to anything." },
  { question: "How does our team's appraisal background help in Renton?", answer: "As both a licensed Washington State real estate broker and a state-certified residential appraiser, Our team provides pricing based on actual property condition and local comparable data — not automated estimates. In Renton, where neighborhoods and conditions vary widely, this dual perspective prevents costly pricing mistakes." },
  { question: "Should I renovate before selling an inherited Renton home?", answer: "Not always. Our team evaluates which improvements are likely to return more than they cost — and which aren't worth the investment. Many inherited homes benefit more from targeted preparation and honest pricing than from expensive renovations." },
  { question: "What if family members live in different places?", answer: "This is common. Our team coordinates with family members across locations, provides clear information everyone can review, and manages the local logistics so decisions can move forward without requiring everyone to be present." },
  { question: "Can our team help if I don't live in Renton?", answer: "Yes. Our team regularly works with executors and families managing properties remotely. He handles property access, vendor coordination, and the sale process so you can make informed decisions without unnecessary travel." },
  { question: "How long does it take to sell an inherited home in Renton?", answer: "Timelines depend on the probate or trust process, property condition, and preparation needs. Once the home is ready and authority is established, well-priced Renton properties generally sell within a reasonable timeframe. Our team sets realistic expectations from the start." },
];

const RentonProbateEstate = () => {
  useEffect(() => {
    const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };
    const localSchema = { ...realEstateAgentSchema, "@context": "https://schema.org", areaServed: [{ "@type": "City", name: "Renton", containedInPlace: { "@type": "State", name: "Washington" } }, ...areaServed] };
    const s1 = document.createElement("script"); s1.type = "application/ld+json"; s1.setAttribute("data-page-jsonld", "faq"); s1.textContent = JSON.stringify(faqSchema); document.head.appendChild(s1);
    const s2 = document.createElement("script"); s2.type = "application/ld+json"; s2.setAttribute("data-page-jsonld", "local"); s2.textContent = JSON.stringify(localSchema); document.head.appendChild(s2);
    return () => { document.querySelectorAll("script[data-page-jsonld]").forEach((s) => s.remove()); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Probate & Estate Real Estate in Renton, WA" description="Guidance for executors and families with inherited property in Renton, WA. Neighborhood-specific pricing and coordinated next steps." />
      <BreadcrumbSchema items={[{ name: "King County", url: "/king-county" }, { name: "Renton", url: "/renton-probate-estate-real-estate" }]} />
      <Header />
      <main id="main-content">

      <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">Renton, King County</p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">Helping Families Make Clear Decisions About Renton Property</h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">Renton's neighborhoods span a wide range — from the Highlands to Benson Hill to the Landing — and inherited properties here come with equally varied conditions. Getting clarity on pricing, preparation, and next steps makes the process far more manageable.</p>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">When Renton Families Reach Out</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">Renton sits at a crossroads between Seattle, the Eastside, and South King County — and families here often face inherited property decisions that reflect that diversity. These are the situations that typically lead to a conversation:</p>
            <ul className="space-y-4">
              {["Inherited a home in a neighborhood they're not familiar with and need pricing clarity", "Property has been in the family for years but condition has declined", "Adult children living in different areas trying to coordinate a shared decision", "Executor weighing whether to prepare the home or sell in current condition", "Questions about how Renton's neighborhood differences affect value"].map((item, i) => (
                <li key={i} className="flex items-start gap-3"><GoldCheck3D size={22} className="mt-0.5 shrink-0" /><span className="text-foreground text-[15px] leading-relaxed">{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">Why Neighborhood Context Matters in Renton</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">Renton's real estate market doesn't move as one unit. The Highlands, Kennydale, and areas near the waterfront command different price points and attract different buyers than homes in Benson Hill or near downtown. For inherited properties, understanding where the home sits in this landscape is essential to making sound pricing and preparation decisions.</p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">Many inherited Renton homes reflect decades of personal use — outdated finishes, deferred maintenance, or layouts that don't match current buyer expectations. The question isn't whether the home has issues — it's which issues actually affect value and which ones the market will accept.</p>
            <p className="text-muted-foreground text-lg leading-relaxed">As both a licensed Washington State real estate broker and a state-certified residential appraiser, Real Property Planning evaluates inherited properties based on their actual condition and neighborhood context. This means pricing grounded in facts — not assumptions — which helps families avoid the cost of overpricing or the regret of underpricing.</p>
          </div>
        </div>
      </section>

      <MidPageCTA heading="Questions About a Renton Property?" body="Our team provides confidential consultations for executors, trustees, and families handling inherited or estate property in Renton and South King County." buttonText="Schedule a Consultation" microcopy="No pressure. Just practical guidance for your situation." />

      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">Helping Families Stay Organized Through the Process</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">Inherited property decisions in Renton often involve multiple people with different schedules, perspectives, and levels of involvement. Without a clear framework, the process can stall or create unnecessary tension.</p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">Our team provides the structure — an honest property assessment, a realistic pricing strategy, and a clear sequence of next steps that everyone can understand. From there, he manages the preparation logistics, vendor coordination, and communication so the family can focus on making decisions rather than managing details.</p>
            <p className="text-muted-foreground text-lg leading-relaxed">Whether the transition involves a straightforward sale or a more complex situation — like a parent moving to care while the home is prepared — our team keeps the process organized and on track.</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">How I Help Families Move Forward With Confidence</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">The approach is consistent, practical, and designed to reduce uncertainty from the start:</p>
            <ol className="space-y-6">
              {[{ title: "Understanding Your Situation", desc: "We start with a conversation about the property, the family dynamics, and what needs to happen. No assumptions — just listening." }, { title: "Evaluating the Property", desc: "I visit the home, assess its condition in the context of Renton's neighborhood-level market, and identify what genuinely affects its value." }, { title: "Building a Pricing Strategy", desc: "Using my appraisal background and local data, I develop pricing that reflects the property's actual condition and location — not wishful thinking." }, { title: "Coordinating Preparation", desc: "I manage cleanout, targeted repairs, and vendor logistics so the property is positioned well without unnecessary cost or delay." }, { title: "Guiding the Sale", desc: "From listing through closing, I keep the process organized with clear communication and realistic timelines. No surprises." }].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/15 text-gold font-semibold text-sm shrink-0 mt-0.5">{i + 1}</span>
                  <div><p className="text-foreground font-semibold text-[15px] mb-1">{step.title}</p><p className="text-muted-foreground text-[15px] leading-relaxed">{step.desc}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <PageFAQ faqs={faqs} heading="Renton Probate & Estate Property FAQ" />

      <section className="py-12 bg-background"><div className="container px-6 lg:px-8"><div className="max-w-3xl mx-auto"><p className="text-sm font-semibold text-muted-foreground mb-3">Related Resources</p><div className="flex flex-wrap gap-3">{[{ to: "/executors", label: "For Executors" }, { to: "/probate-estate-sales", label: "Probate & Estate Sales" }, { to: "/senior-transitions", label: "Senior Transitions" }, { to: "/for-attorneys", label: "For Attorneys" }, { to: "/why-valuation-matters", label: "Why Valuation Matters" }, { to: "/how-the-process-works", label: "How the Process Works" }, { to: "/cities-we-serve", label: "All Cities" }].map((link, i) => (<span key={link.to} className="flex items-center gap-3">{i > 0 && <span className="text-muted-foreground/40">·</span>}<Link to={link.to} className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">{link.label}</Link></span>))}</div></div></div></section>
      <section className="py-10 bg-background"><div className="container px-6 lg:px-8"><div className="max-w-3xl mx-auto"><p className="text-sm font-semibold text-muted-foreground mb-3">Helpful Guides</p><div className="flex flex-wrap gap-3">{[{ to: "/guides/how-probate-real-estate-works", label: "How Probate Sales Work" }, { to: "/guides/what-executors-should-do", label: "What Executors Should Do First" }, { to: "/guides/inherited-house-washington", label: "Inherited House Guide" }, { to: "/guides/out-of-state-families", label: "Out-of-State Families" }, { to: "/guides/appraisal-vs-cma", label: "Appraisal vs. CMA" }, { to: "/guides/senior-transition-differences", label: "Senior Transition Differences" }].map((link, i) => (<span key={link.to} className="flex items-center gap-3">{i > 0 && <span className="text-muted-foreground/40">·</span>}<Link to={link.to} className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">{link.label}</Link></span>))}</div></div></div></section>

      <RelatedServices currentPath="/renton-probate-estate-real-estate" />

      <section className="py-20 lg:py-28 bg-primary"><div className="container px-6 lg:px-8"><div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">A Clear First Step</h2>
        <p className="text-primary-foreground/75 text-lg leading-relaxed mb-4">If you're handling inherited property in Renton and want clarity on pricing, condition, and next steps, a short conversation can help you get organized and move forward.</p>
        <p className="text-primary-foreground/50 text-base mb-8">No pressure. Just practical guidance.</p>
        <div className="flex justify-center"><Link to="/contact"><Button variant="gold" size="lg" className="px-10 py-4 h-auto text-base"><img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>Schedule a Consultation</Button></Link></div>
      </div></div></section>

      <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default RentonProbateEstate;

