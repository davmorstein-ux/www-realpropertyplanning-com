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
  { question: "What should I do first with an inherited home in Kent?", answer: "Secure the property, confirm your legal authority, and get an honest assessment of its condition and value. David can visit the home, evaluate what affects its marketability, and outline your options clearly before you make any decisions." },
  { question: "How does David's appraisal background help in Kent?", answer: "As both a licensed Washington State real estate broker and a state-certified residential appraiser, David provides pricing based on actual property condition and comparable sales — not automated estimates. In Kent, where home ages and conditions vary block by block, this dual perspective is especially valuable." },
  { question: "What if siblings disagree about selling?", answer: "This happens often. David provides objective, condition-based information — realistic value, preparation costs, and available options — so every family member works from the same facts. Clear data usually helps conversations move forward." },
  { question: "Should I fix up a Kent inherited home before selling?", answer: "It depends on the property. David evaluates which improvements are likely to pay for themselves and which aren't worth the cost or delay. Many Kent inherited homes sell well with targeted preparation rather than major renovation." },
  { question: "Can David help if I live outside Kent?", answer: "Yes. David works with families managing properties from across Washington, out of state, and overseas. He coordinates property access, vendor management, and the sale process so you don't need to make repeated trips." },
  { question: "How long does it take to sell an inherited home in Kent?", answer: "Timelines vary based on the legal process, condition, and preparation. Once the property is ready and authority is established, well-priced Kent homes typically attract interest within a few weeks. David helps set realistic expectations from the beginning." },
];

const KentProbateEstate = () => {
  useEffect(() => {
    const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })) };
    const localSchema = { ...realEstateAgentSchema, "@context": "https://schema.org", areaServed: [{ "@type": "City", name: "Kent", containedInPlace: { "@type": "State", name: "Washington" } }, ...realEstateAgentSchema.areaServed] };
    const s1 = document.createElement("script"); s1.type = "application/ld+json"; s1.setAttribute("data-page-jsonld", "faq"); s1.textContent = JSON.stringify(faqSchema); document.head.appendChild(s1);
    const s2 = document.createElement("script"); s2.type = "application/ld+json"; s2.setAttribute("data-page-jsonld", "local"); s2.textContent = JSON.stringify(localSchema); document.head.appendChild(s2);
    return () => { document.querySelectorAll("script[data-page-jsonld]").forEach((s) => s.remove()); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Probate & Estate Real Estate in Kent, Washington | Real Property Planning" description="Guidance for executors and families handling inherited property in Kent. Straightforward support for family coordination, realistic pricing, and practical next steps." />
      <BreadcrumbSchema items={[{ name: "King County", url: "/king-county" }, { name: "Kent", url: "/kent-probate-estate-real-estate" }]} />
      <Header />

      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">Kent, King County</p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">Straightforward Guidance for Inherited Property in Kent</h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">Inherited homes in Kent are usually family homes — lived in for years, sometimes decades. When it's time to figure out what comes next, having someone who can give you straight answers about condition, value, and options makes a real difference.</p>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">When Kent Families Reach Out</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">Kent is a working community, and the inherited property situations here tend to be practical. Families aren't looking for flash — they want honest guidance and a clear path forward:</p>
            <ul className="space-y-4">
              {["A family home inherited after a parent's passing, with years of belongings and deferred upkeep", "Siblings or family members trying to agree on whether to sell, rent, or hold", "Property condition that's unclear — no one has lived there recently or maintained it consistently", "Concerns about what the home is actually worth versus what online estimates suggest", "An executor or trustee who needs to move through the process efficiently and fairly"].map((item, i) => (
                <li key={i} className="flex items-start gap-3"><GoldCheck3D size={22} className="mt-0.5 shrink-0" /><span className="text-foreground text-[15px] leading-relaxed">{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">Why Straight Talk Matters in Kent</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">Kent's housing stock covers a broad range — from East Hill ramblers and split-levels to newer construction in the West Hill area and older homes near downtown. Property values can shift meaningfully within a few blocks, and condition is often the biggest variable in inherited home pricing.</p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">Families dealing with a Kent inherited home need to know what they're actually working with — not what an algorithm estimates from satellite photos. Is the roof near end of life? Are there plumbing or electrical issues? Does the layout work for today's buyers? These are the questions that drive real pricing decisions.</p>
            <p className="text-muted-foreground text-lg leading-relaxed">As both a licensed Washington State real estate broker and a state-certified residential appraiser, David Stein provides that honest, condition-based assessment. The result is pricing you can trust and preparation advice that makes practical sense for your situation.</p>
          </div>
        </div>
      </section>

      <MidPageCTA heading="Questions About a Kent Property?" body="David provides confidential consultations for executors, trustees, and families handling inherited or estate property in Kent and South King County." buttonText="Schedule a Consultation" microcopy="No pressure. Just practical guidance for your situation." />

      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">Getting Everyone on the Same Page</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">When an inherited home involves multiple family members, the biggest obstacle is often not the property itself — it's getting everyone aligned. Different opinions, different timelines, and different levels of knowledge about the home's condition can create friction that stalls the process.</p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">David provides a neutral, fact-based foundation. He assesses the property, presents realistic value and preparation options, and gives every family member the same clear picture to work from. That shared understanding is usually what unlocks forward progress.</p>
            <p className="text-muted-foreground text-lg leading-relaxed">From there, he handles the execution — coordinating cleanout, managing contractors, and guiding the sale process — so the family can step back from the day-to-day logistics.</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">How I Help Keep Things Simple</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">The approach is straightforward — designed to give families clarity and keep the process moving without unnecessary complexity:</p>
            <ol className="space-y-6">
              {[{ title: "Listening to Your Situation", desc: "We start by understanding the property, the people involved, and what's driving the timeline. Every family is different." }, { title: "Evaluating the Property", desc: "I visit the home, assess its condition honestly, and identify what matters for pricing and marketability in Kent's specific market." }, { title: "Pricing It Right", desc: "Using my appraisal background and local comparable data, I develop pricing that reflects reality — not hopes or algorithms." }, { title: "Managing the Preparation", desc: "I coordinate cleanout, targeted improvements, and vendor logistics so the property is ready without wasted effort or money." }, { title: "Handling the Sale", desc: "From listing through closing, I manage the process with clear communication and no surprises. Straightforward from start to finish." }].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/15 text-gold font-semibold text-sm shrink-0 mt-0.5">{i + 1}</span>
                  <div><p className="text-foreground font-semibold text-[15px] mb-1">{step.title}</p><p className="text-muted-foreground text-[15px] leading-relaxed">{step.desc}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <PageFAQ faqs={faqs} heading="Kent Probate & Estate Property FAQ" />

      <section className="py-12 bg-background"><div className="container px-6 lg:px-8"><div className="max-w-3xl mx-auto"><p className="text-sm font-semibold text-muted-foreground mb-3">Related Resources</p><div className="flex flex-wrap gap-3">{[{ to: "/executors", label: "For Executors" }, { to: "/probate-estate-sales", label: "Probate & Estate Sales" }, { to: "/senior-transitions", label: "Senior Transitions" }, { to: "/for-attorneys", label: "For Attorneys" }, { to: "/why-valuation-matters", label: "Why Valuation Matters" }, { to: "/how-the-process-works", label: "How the Process Works" }, { to: "/cities-we-serve", label: "All Cities" }].map((link, i) => (<span key={link.to} className="flex items-center gap-3">{i > 0 && <span className="text-muted-foreground/40">·</span>}<Link to={link.to} className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">{link.label}</Link></span>))}</div></div></div></section>
      <section className="py-10 bg-background"><div className="container px-6 lg:px-8"><div className="max-w-3xl mx-auto"><p className="text-sm font-semibold text-muted-foreground mb-3">Helpful Guides</p><div className="flex flex-wrap gap-3">{[{ to: "/guides/how-probate-real-estate-works", label: "How Probate Sales Work" }, { to: "/guides/what-executors-should-do", label: "What Executors Should Do First" }, { to: "/guides/inherited-house-washington", label: "Inherited House Guide" }, { to: "/guides/out-of-state-families", label: "Out-of-State Families" }, { to: "/guides/appraisal-vs-cma", label: "Appraisal vs. CMA" }, { to: "/guides/senior-transition-differences", label: "Senior Transition Differences" }].map((link, i) => (<span key={link.to} className="flex items-center gap-3">{i > 0 && <span className="text-muted-foreground/40">·</span>}<Link to={link.to} className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">{link.label}</Link></span>))}</div></div></div></section>

      <RelatedServices currentPath="/kent-probate-estate-real-estate" />

      <section className="py-20 lg:py-28 bg-primary"><div className="container px-6 lg:px-8"><div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">A Straightforward First Step</h2>
        <p className="text-primary-foreground/75 text-lg leading-relaxed mb-4">If you're dealing with an inherited home in Kent and want honest answers about condition, value, and next steps, a short conversation can help you get started.</p>
        <p className="text-primary-foreground/50 text-base mb-8">No pressure. Just practical guidance.</p>
        <div className="flex justify-center"><Link to="/contact"><Button variant="gold" size="lg" className="px-10 py-4 h-auto text-base"><img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />Schedule a Consultation</Button></Link></div>
      </div></div></section>

      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default KentProbateEstate;
