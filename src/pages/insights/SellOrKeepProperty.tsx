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
  { question: "Is it better financially to sell or rent an inherited property?", answer: "It depends on the property's condition, location, rental demand, and your ability to manage it. Renting can provide ongoing income, but it also means ongoing responsibility — maintenance, tenant management, and tax implications. Selling provides a clean resolution and immediate proceeds. There is no universally right answer." },
  { question: "What are the tax implications of keeping vs. selling?", answer: "Inherited property typically receives a stepped-up tax basis to the date-of-death value, which can significantly reduce capital gains tax if you sell relatively soon. Keeping the property and selling later may result in higher capital gains. Consult a CPA or tax advisor for guidance specific to your situation." },
  { question: "Can I keep the property and let a family member live in it?", answer: "Yes, but this creates a landlord-tenant relationship with its own legal and financial implications. Consider whether the family member will pay rent, who is responsible for maintenance, and how this arrangement affects other heirs' shares. Formalizing the arrangement in writing protects everyone." },
  { question: "What if I'm not sure what to do?", answer: "That is completely normal. The most important step is getting objective information — a professional property assessment, clarity on the financial picture, and an understanding of your options. You do not need to decide immediately, but you do need to protect the property while you think it through." },
];

const jsonLd = articleSchema({
  headline: "How Do You Decide Whether to Sell or Keep an Inherited Property?",
  description: "A practical framework for deciding whether to sell or keep inherited property. Covers financial considerations, emotional factors, and long-term implications.",
  url: "/insights/sell-or-keep-inherited-property",
  datePublished: "2026-03-27",
  dateModified: "2026-03-27",
  about: ["Inherited property decisions", "Sell vs keep property", "Estate planning", "Financial decision-making"],
});

const SellOrKeepProperty = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="How Do You Decide Whether to Sell or Keep an Inherited Property? | Real Property Planning"
      description="A practical framework for deciding whether to sell or keep inherited property. Financial considerations, emotional factors, and long-term implications for families."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[
      { name: "Insights", url: "/insights" },
      { name: "Sell or Keep Inherited Property", url: "/insights/sell-or-keep-inherited-property" },
    ]} />
    <Header />
    <main id="main-content">

    <section className="bg-primary pt-3 md:pt-4 pb-12 md:pb-14">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">Insights</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            How Do You Decide Whether to Sell or Keep an Inherited Property?
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed mb-4">
            There is no single right answer. The decision depends on your financial situation, the property's condition and location, your family dynamics, and what you are realistically able to manage. What matters most is making the decision deliberately — based on facts rather than pressure or emotion alone.
          </p>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            This article provides a practical framework to help you think through the decision clearly.
          </p>
        </div>
      </div>
    </section>

    <TrustStrip />

    {/* Financial Considerations */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Financial Considerations</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Start with the numbers — not because money is the only factor, but because understanding the financial picture clarifies everything else.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">What is the property worth?</strong> A professional assessment gives you a factual starting point. Without it, every other calculation is built on assumptions.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">What does it cost to hold?</strong> Property taxes, insurance, utilities, maintenance, and potential HOA fees add up quickly — especially on a vacant property. Calculate the monthly carrying cost and multiply it by how long you expect to hold.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Is there a mortgage?</strong> If the property carries debt, the carrying costs are even higher. Understand what is owed and whether the estate can continue making payments.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">What are the tax implications?</strong> Inherited property usually receives a stepped-up basis, which can significantly reduce capital gains tax if you sell soon. Holding the property longer may change that calculation. A CPA or tax advisor can help you understand your specific situation.
          </p>
        </div>
      </div>
    </section>

    {/* Emotional Factors */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Emotional Factors</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Inherited property carries memories, identity, and often a sense of obligation. These feelings are valid — and they deserve acknowledgment. But they should inform the decision, not drive it exclusively.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Keeping a home because it feels wrong to sell it — without a clear plan for how to use or maintain it — often leads to years of financial drain and emotional guilt. The house becomes a burden rather than a blessing.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Conversely, selling a home too quickly — before you have had time to grieve and process — can create regret that lingers long after the proceeds have been distributed.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The healthiest approach is usually to separate the emotional processing from the practical decision-making. Give yourself permission to grieve the home while also evaluating whether keeping it serves your life going forward.
          </p>
        </div>
      </div>
    </section>

    <MidPageCTA />

    {/* Long-Term Implications */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Long-Term Implications</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Both selling and keeping have consequences that extend well beyond the immediate decision:
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">If you sell,</strong> you have a clean resolution. The proceeds can be distributed, debts can be paid, and the estate can be closed. But the home is gone — and with it, a physical connection to the person who lived there.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">If you keep as a rental,</strong> you have an ongoing income stream — but also an ongoing responsibility. Property management, tenant issues, maintenance, and tax filing all become part of your life. If you live far away, this is especially demanding.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">If you keep and do not use it,</strong> the property deteriorates. Vacant homes are vulnerable to weather damage, vandalism, and neglect. Carrying costs continue indefinitely. And the decision you are avoiding today becomes harder tomorrow.
          </p>
        </div>
      </div>
    </section>

    {/* Decision Framework */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">A Simple Decision Framework</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Ask yourself these questions honestly:
          </p>
          <ul className="space-y-4">
            {[
              "Do I have a specific, realistic plan for using this property?",
              "Can I afford the carrying costs for the foreseeable future?",
              "Am I prepared to manage the property — or hire someone to do it?",
              "Do all heirs agree on the plan, or is keeping the property creating family conflict?",
              "Would the proceeds from a sale serve my life better than the property itself?",
              "Am I keeping this property because I want to — or because I feel guilty about letting it go?",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span className="text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-6">
            If most of your answers point toward selling, that is worth taking seriously. If you have a clear plan for keeping the property and the resources to support it, that can work too. The worst outcome is indecision — holding the property without a plan while costs accumulate.
          </p>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <PageFAQ faqs={faqs} />
        </div>
      </div>
    </section>

    <NextStepBlock
      steps={[
        { title: "First Steps After Inheriting a House", description: "Immediate priorities and common mistakes to avoid.", href: "/insights/first-steps-inherited-house-washington" },
        { title: "Inherited House Options in Washington", description: "Options and decision factors for inherited property.", href: "/guides/inherited-house-washington" },
        { title: "Bellevue Probate & Estate Real Estate", description: "Local support for Eastside families.", href: "/bellevue-probate-estate-real-estate" },
      ]}
    />

    {/* CTA */}
    <section className="py-16 lg:py-24 bg-secondary">
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

    <RelatedServices currentPath="/insights/sell-or-keep-inherited-property" />
    <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default SellOrKeepProperty;
