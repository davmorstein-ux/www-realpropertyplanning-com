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
import ServicePageNav from "@/components/ServicePageNav";

const faqs = [
  { question: "Do buyers really care if the house has furniture in it?", answer: "Most traditional buyers do. A cluttered home makes rooms feel smaller, hides potential problems, and makes it harder for buyers to imagine their own life in the space. Investors and as-is buyers are generally less concerned about contents." },
  { question: "Can I leave items for the buyer to deal with?", answer: "You can negotiate this, but most buyers — especially traditional buyers — will expect the home to be delivered empty at closing. Leaving items behind often leads to renegotiation, credits, or deal complications." },
  { question: "How long does it take to empty a house?", answer: "For a typical estate home with decades of accumulated belongings, plan for 2–6 weeks. This includes time for family members to claim personal items, an estate sale if applicable, donation pickups, and final cleanout. Starting early is always better than rushing at the end." },
  { question: "What should I do with items that might have value?", answer: "Before disposing of anything, have a quick assessment done. Estate sale companies can identify items worth selling. Antiques, art, jewelry, and collectibles should be evaluated separately. Everything else can typically be donated or removed by a cleanout service." },
];

const jsonLd = articleSchema({
  headline: "Do You Need to Empty a House Before Selling It?",
  description: "When emptying a house before selling matters, when it doesn't, and a practical approach to the decision. Guidance for executors and families managing estate property.",
  url: "/insights/empty-house-before-selling",
  datePublished: "2026-03-27",
  dateModified: "2026-03-27",
  about: ["Estate property preparation", "House cleanout", "Selling inherited property", "Estate sale"],
});

const EmptyHouseBeforeSelling = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Do You Need to Empty a House Before Selling It? | Real Property Planning"
      description="When emptying a house before selling matters, when it doesn't, and how to approach the decision practically. Guidance for executors and families in Washington."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[
      { name: "Insights", url: "/insights" },
      { name: "Empty House Before Selling", url: "/insights/empty-house-before-selling" },
    ]} />
    <Header />

    <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">Insights</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            Do You Need to Empty a House Before Selling It?
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed mb-4">
            In most cases, yes — at least partially. A home that is clean, accessible, and free of excessive personal belongings will show better, appraise more accurately, and attract stronger offers. But "empty" does not always mean "completely bare."
          </p>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            This article covers when emptying matters most, when a lighter approach works, and how to think about the cost and effort involved.
          </p>
        </div>
      </div>
    </section>

    <TrustStrip />

    {/* When It Matters */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">When Emptying the House Matters</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            The impact of contents on a sale depends on who you are selling to and what impression the home makes:
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">For traditional buyers,</strong> presentation matters enormously. Rooms stuffed with furniture, closets full of clothing, and counters covered in personal items make the home feel smaller, older, and harder to envision. These buyers are often comparing your property to clean, staged homes — and cluttered spaces lose that comparison every time.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">For appraisals and inspections,</strong> access matters. An appraiser who cannot see the walls, floors, or systems may assign a lower value or flag concerns. An inspector who cannot access areas due to stored items may note limitations in their report — which can spook buyers.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">For photography and marketing,</strong> cleanliness matters. The listing photos are the first impression most buyers will have, and cluttered photos generate fewer showings.
          </p>
        </div>
      </div>
    </section>

    {/* When It Doesn't */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">When a Full Cleanout May Not Be Necessary</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Not every situation calls for a complete emptying of the home:
          </p>
          <ul className="space-y-4">
            {[
              "If you are marketing to investors or cash buyers who plan to renovate, contents are a minor consideration",
              "If the property is being sold well below market value to account for condition, buyers expect to handle things themselves",
              "If the home has minimal contents and is already reasonably presentable, a light cleaning may be sufficient",
              "If the estate budget is extremely limited and the cost of a full cleanout would not be recovered in a higher sale price",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span className="text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-6">
            The decision should be strategic, not emotional. Sometimes a partial cleanout — removing personal items and clearing key spaces — achieves most of the benefit at a fraction of the cost.
          </p>
        </div>
      </div>
    </section>

    <MidPageCTA />

    {/* Cost vs Value */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Weighing Cost Against Value</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Every dollar spent on preparation should be evaluated against what it returns. A $3,000 cleanout that enables a $20,000 higher sale price is a clear win. A $5,000 cleanout on a home being sold as-is to a flipper may not change the outcome at all.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            This calculation is easier to make when you have a professional assessment of the property's value in different conditions — as-is with contents, cleared and cleaned, or lightly improved. That comparison gives you the information you need to spend wisely.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Many families also find value in combining the cleanout with an estate sale. Items that have value can offset some of the cleanout costs, and professional estate sale companies handle the logistics.
          </p>
        </div>
      </div>
    </section>

    {/* Practical Approach */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">A Practical Approach</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Rather than treating the cleanout as one overwhelming project, break it into phases:
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Phase 1: Personal items.</strong> Give family members a deadline to remove anything they want to keep. Be specific about the timeline and communicate it clearly.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Phase 2: Items of value.</strong> Bring in an estate sale company or appraiser to identify anything worth selling separately. This recovers value and reduces volume.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Phase 3: Removal.</strong> Donate what can be donated, dispose of what cannot, and bring in a cleanout service for the remainder. Many services offer same-week turnaround.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Phase 4: Clean.</strong> A deep clean after the cleanout transforms the property. This is often the single most cost-effective step in the entire preparation process.
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
        { title: "Estate Property Cleanout Guidance", description: "When and how to approach cleaning out estate property.", href: "/insights/estate-property-cleanout-before-sale" },
        { title: "Probate & Estate Sales", description: "Comprehensive support for estate property decisions.", href: "/probate-estate-sales" },
        { title: "Tacoma Probate & Estate Real Estate", description: "Local support for Pierce County families.", href: "/tacoma-probate-estate-real-estate" },
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

    <RelatedServices currentPath="/insights/empty-house-before-selling" />
    <ServicePageNav />
    <DisclaimerSection />
    <Footer />
  </div>
);

export default EmptyHouseBeforeSelling;
