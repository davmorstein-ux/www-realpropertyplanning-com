import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import NextStepBlock from "@/components/NextStepBlock";
import PageFAQ from "@/components/PageFAQ";
import MidPageCTA from "@/components/MidPageCTA";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqs = [
  { question: "Do I need to do anything with the house immediately?", answer: "The most important first steps are securing the property, maintaining insurance, and notifying relevant parties. You do not need to make any major decisions right away — but taking small protective steps early prevents larger problems later." },
  { question: "Should I change the locks?", answer: "If there is any concern about unauthorized access, yes. The executor or personal representative has a duty to protect estate assets, and securing the property is part of that responsibility." },
  { question: "When should I get a professional assessment of the property?", answer: "As early as practical. Understanding the property's condition and approximate value helps inform every downstream decision — whether you plan to sell, rent, or keep the home." },
  { question: "Can I start cleaning out the house before probate?", answer: "In most cases, yes — you can begin organizing, removing perishable items, and securing valuables. However, avoid disposing of items that may have value to the estate or other heirs until there is agreement or legal direction." },
];

const jsonLd = articleSchema({
  headline: "What Should You Do First After Inheriting a House in Washington?",
  description: "Practical first steps for families who have just inherited a house in Washington State. Covers immediate priorities, common mistakes, and how to think through next steps.",
  url: "/insights/first-steps-inherited-house-washington",
  datePublished: "2026-03-27",
  dateModified: "2026-03-27",
  about: ["Inherited property", "Estate planning", "Washington real estate", "Executor responsibilities", "Property management"],
});

const FirstStepsInheritedHouse = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="What Should You Do First After Inheriting a House in Washington? | Real Property Planning"
      description="Practical first steps for families who have just inherited a house in Washington State. Immediate priorities, common mistakes to avoid, and how to think through what comes next."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[
      { name: "Insights", url: "/insights" },
      { name: "First Steps After Inheriting a House", url: "/insights/first-steps-inherited-house-washington" },
    ]} />
    <Header />
    <main id="main-content">

    <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">Insights</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            What Should You Do First After Inheriting a House in Washington?
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed mb-4">
            The most important thing to do right away is protect the property and give yourself time to make informed decisions. You do not need to rush into selling, renting, or renovating — but a few early steps can prevent costly problems.
          </p>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            This article walks through the immediate priorities, the mistakes families commonly make, and a practical way to think through what comes next.
          </p>
        </div>
      </div>
    </section>

    <TrustStrip />

    {/* Immediate Priorities */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Immediate Priorities</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            In the first days and weeks after inheriting a property, focus on these foundational steps:
          </p>
          <ul className="space-y-4">
            {[
              "Secure the property — check that doors and windows lock, and consider changing locks if needed",
              "Verify that homeowner's insurance is active and notify the insurer about the change in ownership status",
              "Locate key documents — the will, trust, deed, mortgage statements, property tax records, and any HOA information",
              "Communicate with other heirs or family members about the situation and next steps",
              "Walk through the property and document its condition with photos and notes",
              "Set up mail forwarding and check for any time-sensitive obligations like utility payments or property taxes",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span className="text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-6">
            These steps are not about making big decisions. They are about creating a stable foundation so you can take the time you need to decide what to do next.
          </p>
        </div>
      </div>
    </section>

    {/* Common Mistakes */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Common Mistakes to Avoid</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Inheriting a house often comes with emotional weight and pressure from multiple directions. Families frequently make decisions too quickly — or delay important steps too long. Here are some of the most common missteps:
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Listing immediately without understanding value.</strong> Rushing to sell before getting a professional assessment can mean leaving significant money on the table — or pricing the home so high it sits on the market and loses credibility.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Making expensive repairs without a strategy.</strong> Not every improvement adds value. Some repairs are essential for sale readiness; others are a poor use of estate funds. A valuation-informed approach helps distinguish between the two.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Letting insurance lapse.</strong> If the property is vacant, standard homeowner policies may not provide full coverage. A gap in insurance while the estate is being settled can create serious financial exposure.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Ignoring the property while waiting for probate.</strong> Even if you cannot sell yet, neglecting maintenance, yard care, or utility management can reduce value and create liability.
          </p>
        </div>
      </div>
    </section>

    <MidPageCTA />

    {/* Thinking Through Next Steps */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">How to Think Through Next Steps</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Once the property is secure and you have a clearer picture of the documents and obligations involved, the next phase is about understanding your options. There is no single right answer — it depends on your family's situation, financial picture, and timeline.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Start by asking practical questions: Is anyone going to live in the property? Is there a mortgage? Are there multiple heirs who need to agree? Is the property in a condition that allows a straightforward sale, or does it need work?
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Getting a professional property assessment early — even before you have decided what to do — gives you a factual foundation for conversations with family, attorneys, and financial advisors. It removes guesswork and helps everyone work from the same set of facts.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether you ultimately sell, rent, or keep the property, the decisions you make in the first few weeks set the tone for everything that follows.
          </p>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <PageFAQ faqs={faqs} />
        </div>
      </div>
    </section>

    {/* Next Steps Block */}
    <NextStepBlock
      steps={[
        { title: "What Should an Executor Do Before Selling?", description: "Practical first steps for executors and personal representatives.", href: "/guides/what-executors-should-do" },
        { title: "Inherited House Options in Washington", description: "Options and decision factors when you inherit property.", href: "/guides/inherited-house-washington" },
        { title: "Why Valuation Matters", description: "How professional valuation protects your interests.", href: "/why-valuation-matters" },
      ]}
    />

    {/* CTA */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">A Clear Next Step</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            If you're working through a situation like this and want help thinking through your options, a short conversation can often bring clarity.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-primary font-semibold px-8 py-4 text-lg rounded-lg">
              Schedule a Consultation
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-3">No pressure. Just practical guidance.</p>
        </div>
      </div>
    </section>

    <RelatedServices currentPath="/insights/first-steps-inherited-house-washington" />
    <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default FirstStepsInheritedHouse;
