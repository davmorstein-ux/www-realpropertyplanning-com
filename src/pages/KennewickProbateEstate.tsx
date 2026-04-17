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
  {
    question: "What should I do first with an inherited home in Kennewick?",
    answer: "Secure the property, confirm your legal authority to act, and get an honest assessment of its condition and market value. Our team can walk through the home, identify what affects value, and help you understand your options before you commit to anything.",
  },
  {
    question: "How does our team's appraisal background help in Kennewick?",
    answer: "As both a licensed Washington State real estate broker and a state-certified residential appraiser, Our team provides pricing based on actual property condition and local comparable data — not automated estimates. In Kennewick, where condition varies widely and pricing is sensitive, this dual perspective prevents costly mistakes.",
  },
  {
    question: "Should I renovate a Kennewick inherited home before selling?",
    answer: "Not always. Our team evaluates which improvements are likely to return more than they cost — and which aren't worth the investment. Many Kennewick inherited homes benefit more from targeted preparation and honest pricing than from expensive renovations.",
  },
  {
    question: "What if family members disagree about selling?",
    answer: "This is common. Our team provides objective, condition-based information — realistic market value, preparation costs, and available options — so every family member is working from the same set of facts. That clarity often helps move conversations forward.",
  },
  {
    question: "Can David help if I don't live in Kennewick?",
    answer: "Yes. David regularly works with executors and family members who live outside the Tri-Cities. He coordinates property access, vendor management, and the sale process so you can make informed decisions without unnecessary travel.",
  },
  {
    question: "How long does it take to sell an inherited home in Kennewick?",
    answer: "Timelines depend on the probate or trust process, property condition, and market conditions. Once the home is ready and legal authority is established, well-priced Kennewick properties generally sell within a reasonable timeframe. Our team helps set realistic expectations from the start.",
  },
];

const KennewickProbateEstate = () => {
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    };
    const localSchema = {
      ...realEstateAgentSchema,
      "@context": "https://schema.org",
      areaServed: [
        { "@type": "City", name: "Kennewick", containedInPlace: { "@type": "State", name: "Washington" } },
        ...areaServed,
      ],
    };
    const s1 = document.createElement("script");
    s1.type = "application/ld+json";
    s1.setAttribute("data-page-jsonld", "faq");
    s1.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(s1);
    const s2 = document.createElement("script");
    s2.type = "application/ld+json";
    s2.setAttribute("data-page-jsonld", "local");
    s2.textContent = JSON.stringify(localSchema);
    document.head.appendChild(s2);
    return () => { document.querySelectorAll("script[data-page-jsonld]").forEach((s) => s.remove()); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Probate & Estate Real Estate in Kennewick, WA"
        description="Guidance for executors and families with inherited property in Kennewick, WA. Practical preparation, realistic pricing, and family coordination."
      />
      <BreadcrumbSchema items={[{ name: "Counties", url: "/counties" }, { name: "Kennewick", url: "/kennewick-probate-estate-real-estate" }]} />
      <Header />
      <main id="main-content">

      <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">Kennewick, Benton County</p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              Practical Guidance for Family-Held Property in Kennewick
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              When a family home in Kennewick passes to the next generation, the decisions that follow are often practical ones — what condition is the house really in, what's it worth, and what needs to happen next. Having honest guidance from the start makes the process easier for everyone.
            </p>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">When Kennewick Families Reach Out</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Most families who contact Real Property Planning about a Kennewick property are dealing with a home that's been in the family for years — sometimes decades. The situations vary, but the underlying questions are often the same:
            </p>
            <ul className="space-y-4">
              {["A home passed down after a parent's death, with years of accumulated belongings and deferred upkeep",
                "Family members living in different cities, trying to agree on what to do with the property",
                "Uncertainty about what the home is actually worth given its current condition",
                "Questions about whether to invest in repairs or sell as-is",
                "An executor or trustee looking for clear, practical guidance on next steps",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <GoldCheck3D size={22} className="mt-0.5 shrink-0" />
                  <span className="text-foreground text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">Why Preparation Decisions Matter in Kennewick</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Kennewick's housing stock includes a wide range of ages, styles, and conditions — from well-maintained homes in South Kennewick to older properties near downtown or along the Columbia. Inherited homes here often reflect decades of personal use, and the gap between what a family remembers and what a buyer sees can be significant.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              In a market where pricing is sensitive to condition, the preparation decisions you make before listing can meaningfully affect the outcome. Spending money on the wrong improvements wastes resources; skipping necessary preparation can lead to lower offers or extended time on market.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              As both a licensed Washington State real estate broker and a state-certified residential appraiser, Real Property Planning evaluates inherited properties based on their actual condition, not assumptions. This valuation-first approach helps families make preparation and pricing decisions grounded in facts rather than guesswork.
            </p>
          </div>
        </div>
      </section>

      <MidPageCTA heading="Questions About a Kennewick Property?" body="Our team provides confidential consultations for executors, trustees, and families handling inherited or estate property in Kennewick and the Tri-Cities area." buttonText="Schedule a Consultation" microcopy="No pressure. Just practical guidance for your situation." />

      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">Keeping the Process Organized for Families</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              When multiple family members are involved in an inherited property decision, things can stall. One person wants to move quickly. Another wants to wait. A third isn't sure what the house needs or what it's worth. Without a clear framework, these conversations can go in circles.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Our team provides objective, condition-based information that gives everyone a common starting point — what the property looks like today, what it's realistically worth, what preparation makes sense, and what the timeline looks like. That shared understanding often helps families move forward together.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From there, he manages the practical steps — coordinating cleanout crews, overseeing targeted repairs, and handling the logistics of getting the property ready and sold — so the family can focus on the decisions that matter most.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">How I Help Families Move Forward</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">Every inherited property is different, but the approach stays consistent — practical, honest, and focused on getting to a good outcome:</p>
            <ol className="space-y-6">
              {[
                { title: "Understanding the Situation", desc: "We start with a conversation about the property, the family, and what needs to happen. No assumptions — just listening and asking the right questions." },
                { title: "Evaluating the Property", desc: "I visit the home, assess its condition, and identify what actually affects its value. This includes deferred maintenance, structural concerns, and neighborhood context." },
                { title: "Developing a Pricing Strategy", desc: "Using my appraisal background and Kennewick-specific market data, I build a pricing strategy based on what the property is — not what someone hopes it might be." },
                { title: "Managing Preparation", desc: "I coordinate cleanout, targeted repairs, and vendor logistics so the property is positioned well without unnecessary expense or delay." },
                { title: "Guiding the Sale", desc: "From listing through closing, I handle the details and keep everyone informed. Clear communication, realistic timelines, and no surprises." },
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/15 text-gold font-semibold text-sm shrink-0 mt-0.5">{i + 1}</span>
                  <div>
                    <p className="text-foreground font-semibold text-[15px] mb-1">{step.title}</p>
                    <p className="text-muted-foreground text-[15px] leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <PageFAQ faqs={faqs} heading="Kennewick Probate & Estate Property FAQ" />

      <section className="py-12 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-muted-foreground mb-3">Related Resources</p>
            <div className="flex flex-wrap gap-3">
              {[{ to: "/executors", label: "For Executors" }, { to: "/probate-estate-sales", label: "Probate & Estate Sales" }, { to: "/senior-transitions", label: "Senior Transitions" }, { to: "/for-attorneys", label: "For Attorneys" }, { to: "/why-valuation-matters", label: "Why Valuation Matters" }, { to: "/how-the-process-works", label: "How the Process Works" }, { to: "/cities-we-serve", label: "All Cities" }].map((link, i) => (
                <span key={link.to} className="flex items-center gap-3">
                  {i > 0 && <span className="text-muted-foreground/40">·</span>}
                  <Link to={link.to} className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">{link.label}</Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-muted-foreground mb-3">Helpful Guides</p>
            <div className="flex flex-wrap gap-3">
              {[{ to: "/guides/how-probate-real-estate-works", label: "How Probate Sales Work" }, { to: "/guides/what-executors-should-do", label: "What Executors Should Do First" }, { to: "/guides/inherited-house-washington", label: "Inherited House Guide" }, { to: "/guides/out-of-state-families", label: "Out-of-State Families" }, { to: "/guides/appraisal-vs-cma", label: "Appraisal vs. CMA" }, { to: "/guides/senior-transition-differences", label: "Senior Transition Differences" }].map((link, i) => (
                <span key={link.to} className="flex items-center gap-3">
                  {i > 0 && <span className="text-muted-foreground/40">·</span>}
                  <Link to={link.to} className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">{link.label}</Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentPath="/kennewick-probate-estate-real-estate" />

      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">A Practical First Step</h2>
            <p className="text-primary-foreground/75 text-lg leading-relaxed mb-4">If you're handling an inherited property in Kennewick and want honest guidance about condition, pricing, and next steps, a short conversation can help you get organized.</p>
            <p className="text-primary-foreground/50 text-base mb-8">No pressure. Just practical guidance.</p>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button variant="gold" size="lg" className="px-10 py-4 h-auto text-base">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>
                  Schedule a Consultation
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

export default KennewickProbateEstate;

