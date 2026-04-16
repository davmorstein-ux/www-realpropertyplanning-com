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
    question: "What makes Richland different from other Tri-Cities markets?",
    answer: "Richland tends to have more stable, established neighborhoods with homes that reflect long-term ownership — many tied to careers at Hanford or Pacific Northwest National Laboratory. Property conditions are often well-maintained but dated, and buyer expectations around presentation can be higher than in neighboring cities.",
  },
  {
    question: "How does David's appraisal background help with Richland properties?",
    answer: "As both a licensed Washington State real estate broker and a state-certified residential appraiser, David provides pricing grounded in actual condition assessment and local comparable data. In Richland, where homes tend to be well-built but may need cosmetic updating, this dual perspective ensures pricing reflects reality rather than outdated assumptions.",
  },
  {
    question: "Should I update a Richland home before selling?",
    answer: "It depends on the home's condition relative to buyer expectations in the neighborhood. David evaluates which updates are likely to return more than they cost and which aren't necessary. In Richland's more established neighborhoods, targeted cosmetic improvements can make a meaningful difference — but not every update is worth the investment.",
  },
  {
    question: "Can David help if I live outside the Tri-Cities?",
    answer: "Yes. David works with executors and families who live outside the area — whether across the state or out of state. He coordinates property access, vendor management, preparation, and the sale process so you can make decisions without unnecessary travel.",
  },
  {
    question: "What if the estate involves a long-term family home?",
    answer: "Long-term ownership is common in Richland. These homes often carry sentimental value alongside practical considerations. David provides an honest, respectful assessment of the property's condition and market position, giving families the facts they need to make decisions at their own pace.",
  },
  {
    question: "How long does it take to sell an estate property in Richland?",
    answer: "Timelines depend on the legal process, property condition, and preparation needs. Once the home is ready and authority is established, well-priced Richland properties typically attract interest within a reasonable timeframe. David helps set realistic expectations based on your specific situation.",
  },
];

const RichlandProbateEstate = () => {
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
        { "@type": "City", name: "Richland", containedInPlace: { "@type": "State", name: "Washington" } },
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
        title="Probate & Estate Real Estate in Richland, WA"
        description="Guidance for executors and families with inherited property in Richland, WA. Orderly transitions, realistic pricing, thoughtful decisions."
      />
      <BreadcrumbSchema items={[{ name: "Counties", url: "/counties" }, { name: "Richland", url: "/richland-probate-estate-real-estate" }]} />
      <Header />
      <main id="main-content">

      <section className="bg-primary pt-1.5 md:pt-2 pb-12 md:pb-14">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">Richland, Benton County</p>
            <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-[22px]">
              Thoughtful Guidance for Estate Property in Richland
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Richland homes often reflect long careers, deep roots, and decades of careful ownership. When it's time to transition that property, having someone who respects both the history and the process makes the path forward clearer.
            </p>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">When Richland Families Reach Out</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Richland estate situations often involve homes that were well cared for over many years — but the family handling them now may not live nearby or may be working through the process for the first time:
            </p>
            <ul className="space-y-4">
              {["Long-term family home transitioning after a parent's passing or move to care",
                "Well-maintained property that may need cosmetic updating to meet current buyer expectations",
                "Adult children coordinating from different locations with different timelines",
                "Questions about whether the home's value has kept pace with the neighborhood",
                "Executor or trustee seeking an orderly, well-managed sale process",
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
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">Why Richland Properties Benefit From a Measured Approach</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Richland's neighborhoods — from the tree-lined streets near The Parkway to the established areas of South Richland and the homes along the Columbia — tend to attract buyers who value stability, presentation, and well-maintained properties. That means the gap between a "good enough" listing and a well-positioned one can be meaningful.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Many inherited Richland homes are structurally sound but cosmetically dated. Flooring, paint, fixtures, and landscaping may reflect the owner's preferences from twenty years ago. Understanding which updates matter to today's buyers — and which don't — requires honest assessment, not guesswork.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              As both a licensed Washington State real estate broker and a state-certified residential appraiser, David Stein brings a valuation-first perspective that accounts for condition, location, and realistic buyer expectations. This means pricing that's defensible and preparation advice that's practical.
            </p>
          </div>
        </div>
      </section>

      <MidPageCTA heading="Handling an Estate Property in Richland?" body="David provides confidential consultations for executors, trustees, and families managing inherited or estate property in Richland and the Tri-Cities area." buttonText="Schedule a Consultation" microcopy="No pressure. Just practical guidance for your situation." />

      <section className="py-20 lg:py-28 bg-background">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">Support for Orderly, Well-Managed Transitions</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Richland families often want the sale process to feel organized, respectful, and well-paced. They're not looking for pressure — they want clarity about what the home needs, what it's worth, and how the timeline works.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              David provides that structure. He coordinates with family members, manages vendors and preparation logistics, communicates with attorneys when needed, and keeps everyone informed with clear, consistent updates. The goal is a process that feels steady and well-managed from start to finish.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              For families where the home carries significant sentimental value, this measured approach matters. Decisions don't need to be rushed — but they do need to be informed.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground font-semibold mb-6">How I Help Guide an Orderly Process</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">Each situation has its own timeline and priorities, but the framework stays consistent — organized, transparent, and focused on a sound outcome:</p>
            <ol className="space-y-6">
              {[
                { title: "Understanding the Situation", desc: "We begin with a conversation about the property, the family's goals, and the legal and personal context. No rushing — just a clear picture of where things stand." },
                { title: "Assessing the Property", desc: "I visit the home, evaluate its condition against current market standards, and identify what genuinely affects its value and marketability." },
                { title: "Recommending a Strategy", desc: "Based on the property's condition, the neighborhood, and your timeline, I develop a pricing and preparation plan that balances cost, effort, and expected return." },
                { title: "Coordinating Preparation", desc: "I manage the logistics — cleanout, cosmetic updates, staging if appropriate — keeping things on track without adding unnecessary expense." },
                { title: "Managing the Sale", desc: "From listing through closing, I oversee the process with clear communication and consistent updates. An orderly process with no surprises." },
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

      <PageFAQ faqs={faqs} heading="Richland Probate & Estate Property FAQ" />

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

      <RelatedServices currentPath="/richland-probate-estate-real-estate" />

      <section className="py-20 lg:py-28 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">A Measured First Step</h2>
            <p className="text-primary-foreground/75 text-lg leading-relaxed mb-4">If you're managing an estate property in Richland and want a clear, well-organized approach, a short conversation can help you understand the property's position and your options.</p>
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

export default RichlandProbateEstate;

