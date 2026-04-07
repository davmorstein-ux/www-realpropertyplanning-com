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
import ServicePageNav from "@/components/ServicePageNav";

const faqs = [
  {
    question: "Can David help with a property in Pasco?",
    answer: "Yes. David works with executors, trustees, and families handling inherited and estate property throughout Washington State, including Pasco and the broader Tri-Cities region. He provides property assessment, pricing guidance, and coordination support whether you're local or managing from a distance.",
  },
  {
    question: "What if the inherited property needs significant work?",
    answer: "Many Pasco inherited homes have deferred maintenance or condition issues. David assesses the property honestly and helps you understand which repairs are worth the investment and which aren't. The goal is a realistic strategy that accounts for the property's actual condition — not an idealized version of it.",
  },
  {
    question: "How does David price a property in varied condition?",
    answer: "As both a licensed Washington State real estate broker and a state-certified residential appraiser, David evaluates the property based on its actual condition, location, and local comparable sales. This approach produces defensible pricing that reflects what the market will realistically pay — which is especially important when condition varies significantly.",
  },
  {
    question: "What if I'm not sure whether to sell or keep the property?",
    answer: "That's a common starting point. David can provide an honest assessment of the property's condition, realistic market value, and the costs associated with holding versus selling. Having clear data often makes the decision easier — whatever direction the family ultimately chooses.",
  },
  {
    question: "How does David help coordinate the process?",
    answer: "David manages the practical steps — property access, cleanout coordination, contractor oversight, and communication with attorneys and family members. He keeps the process organized and moving forward so you're not left figuring out logistics on your own.",
  },
  {
    question: "How long does it take to sell an inherited home in Pasco?",
    answer: "Timelines vary based on the legal process, property condition, and preparation needs. Once the home is ready and authority is established, well-priced Pasco properties typically sell within a reasonable timeframe. David helps set clear expectations from the beginning.",
  },
];

const PascoProbateEstate = () => {
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
        { "@type": "City", name: "Pasco", containedInPlace: { "@type": "State", name: "Washington" } },
        ...realEstateAgentSchema.areaServed,
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
        title="Probate & Estate Real Estate in Pasco, Washington | Real Property Planning"
        description="Guidance for executors and families handling inherited property in Pasco. Clear support for diverse property conditions, realistic pricing, and coordinated next steps."
      />
      <BreadcrumbSchema items={[{ name: "Counties", url: "/counties" }, { name: "Pasco", url: "/pasco-probate-estate-real-estate" }]} />
      <Header />

      <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">Pasco, Franklin County</p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              Clear Guidance for Inherited Property in Pasco
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Inherited properties in Pasco come in all conditions — from newer construction to older homes that need significant attention. Whatever the situation, clear guidance and honest assessment can help families make confident decisions about what comes next.
            </p>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">When Pasco Families Reach Out</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Pasco's growth over the past two decades means inherited properties here span a wide range — from recently built homes to older properties with years of deferred maintenance. The families reaching out often share similar questions:
            </p>
            <ul className="space-y-4">
              {["Inherited a property with unclear condition or unresolved maintenance issues",
                "Not sure what the home is realistically worth in today's market",
                "Family members in different locations trying to coordinate a decision",
                "Need to understand whether repairs make financial sense before selling",
                "Looking for someone to provide honest assessment and manage the process",
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
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">Why Clear Assessment Matters in Pasco</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Pasco's real estate landscape is diverse. Newer developments on the west side sit alongside older homes closer to downtown, and property condition can vary dramatically from one block to the next. For inherited properties, this variation makes accurate assessment essential — automated estimates rarely capture the full picture.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Condition is often the defining factor in Pasco estate sales. A home with a sound roof and updated systems sits in a very different pricing category than one with deferred mechanical work or structural concerns. Families who don't have an honest assessment of where the property falls on that spectrum risk either overpricing and waiting, or underpricing and leaving value behind.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              As both a licensed Washington State real estate broker and a state-certified residential appraiser, David Stein provides condition-based pricing grounded in what the property actually is today. This clarity gives families the foundation they need to make sound decisions — whether that means investing in preparation or pricing the home to sell in its current state.
            </p>
          </div>
        </div>
      </section>

      <MidPageCTA heading="Have Questions About a Pasco Property?" body="David provides confidential consultations for executors, trustees, and families handling inherited or estate property in Pasco and the Tri-Cities region. A short conversation can help clarify your options." buttonText="Schedule a Consultation" microcopy="No pressure. Just practical guidance for your situation." />

      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">Coordination and Clarity Through the Process</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              When an inherited property needs attention — whether that's a cleanout, targeted repairs, or just an honest evaluation — someone needs to manage the details. For families who aren't local or who are managing multiple responsibilities, that coordination can feel like a full-time job on its own.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              David steps into that role. He manages property access, works with cleanout crews and contractors, communicates with attorneys and other professionals, and provides clear updates so the family always knows where things stand. The process stays organized and moves forward without depending on anyone making repeated trips to Pasco.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The goal is straightforward: take the logistical weight off the family so they can focus on the decisions that matter — not the day-to-day details of getting a property ready to sell.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">How I Help Bring Clarity to the Process</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">Every property and family is different, but the framework is designed to provide structure and reduce uncertainty from the start:</p>
            <ol className="space-y-6">
              {[
                { title: "Listening First", desc: "We start with a conversation about the property, the people involved, and what you're dealing with. No agenda — just understanding where things stand." },
                { title: "Honest Property Assessment", desc: "I visit the property and evaluate its actual condition — structural, mechanical, and cosmetic. This isn't about finding problems; it's about understanding what affects value." },
                { title: "Condition-Based Pricing", desc: "Using my appraisal background and Pasco-specific data, I develop pricing that reflects the property's real condition and location — not inflated expectations or algorithmic guesses." },
                { title: "Managing the Details", desc: "I coordinate cleanout, preparation, and vendor logistics so the property is positioned appropriately without unnecessary expense or delay." },
                { title: "Guiding the Sale", desc: "From listing through closing, I keep the process organized and everyone informed. Clear timelines, honest updates, and a straightforward path to completion." },
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

      <PageFAQ faqs={faqs} heading="Pasco Probate & Estate Property FAQ" />

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

      <RelatedServices currentPath="/pasco-probate-estate-real-estate" />

      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">A Clear First Step</h2>
            <p className="text-primary-foreground/75 text-lg leading-relaxed mb-4">If you're dealing with an inherited property in Pasco and want an honest assessment of where things stand, a short conversation can help you understand your options and move forward.</p>
            <p className="text-primary-foreground/50 text-base mb-8">No pressure. Just practical guidance.</p>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button variant="gold" size="lg" className="px-10 py-4 h-auto text-base">
                  <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServicePageNav />
      <DisclaimerSection />
      <Footer />
    </div>
  );
};

export default PascoProbateEstate;
