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
import ProofCallout from "@/components/ProofCallout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";

const keyDifferences = [
  { title: "The Emotional Weight Is Different", text: "A conventional seller is usually excited about the next chapter — a bigger home, a new city, a fresh start. Senior transition sellers are often processing loss of independence, health changes, grief, or family tension. The emotional context affects every decision and communication." },
  { title: "The Timeline Is Rarely Simple", text: "Senior transitions often involve coordinating with assisted living waitlists, care transitions, health events, and family schedules. The real estate timeline needs to align with — not conflict with — these other moving parts." },
  { title: "The Property Typically Needs More Preparation", text: "A home lived in for 30 or 40 years usually has decades of accumulated belongings, deferred maintenance, outdated finishes, and condition issues that affect both presentation and value. Preparation requires sensitivity, planning, and experienced vendor coordination." },
  { title: "Multiple Decision-Makers Are Involved", text: "Adult children, spouses, care coordinators, attorneys, and financial advisors may all have input. Clear communication with multiple stakeholders — while respecting the senior's autonomy and dignity — is essential." },
  { title: "Patience Is Not Optional", text: "Some families need weeks or months to process the decision before the home can be listed. Rushing the timeline to meet a sales quota creates anxiety and damages trust. David works at the family's pace." },
];

const faqs = [
  { question: "How early should we start planning a senior home sale?", answer: "As early as possible. Even if a move is months away, early planning allows time for a property assessment, conversations about preparation, and realistic expectation-setting. Starting early reduces pressure and gives the family more control over timing." },
  { question: "Can David work with our senior move manager or care coordinator?", answer: "Absolutely. David regularly collaborates with senior move managers, care coordinators, social workers, and placement specialists to ensure the real estate timeline supports the broader transition plan." },
  { question: "What if the senior is resistant to selling?", answer: "This is common and understandable. David does not pressure anyone. He provides information, answers questions, and helps families understand their options — so the senior can participate in the decision at their own pace." },
  { question: "How does the home's condition affect the sale approach?", answer: "David evaluates the property's condition and recommends a preparation strategy that balances cost, timeline, and likely return. Some homes benefit from targeted updates; others are better sold in their current condition to specific buyer pools." },
];

const jsonLd = articleSchema({
  headline: "How Senior Transition Sales Differ From Ordinary Home Sales",
  description: "Understanding the emotional, logistical, and practical differences between selling a longtime family home during a senior transition versus a conventional real estate transaction.",
  url: "/guides/senior-transition-differences",
  datePublished: "2026-03-27",
  dateModified: "2026-03-27",
  about: ["Senior transitions", "Downsizing", "Assisted living", "Family home sale", "Senior real estate"],
});

const SeniorTransitionDifferences = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="How Senior Transition Sales Differ From Ordinary Home Sales | Real Property Planning"
      description="Understanding the emotional, logistical, and practical differences between selling a longtime family home during a senior transition and a conventional real estate transaction."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[
      { name: "Resources", url: "/resources" },
      { name: "Senior Transition Differences", url: "/guides/senior-transition-differences" },
    ]} />
    <Header />
    <main id="main-content">

    <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">Educational Guide</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            How Senior Transition Sales Differ From Ordinary Home Sales
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed mb-4">
            When a senior is moving out of a longtime family home — whether to assisted living, a smaller residence, or closer to family — the sale process looks and feels fundamentally different from a conventional home transaction. Understanding these differences helps families plan realistically and choose the right professional support.
          </p>
        </div>
      </div>
    </section>

    <TrustStrip />

    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">What Makes Senior Transition Sales Different?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            These are not simply old houses being sold. They are the center of a family's history, and the sale happens during one of the most emotionally difficult periods a family faces:
          </p>
          <div className="space-y-6">
            {keyDifferences.map((diff, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-serif text-lg text-foreground font-semibold mb-2">{diff.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{diff.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Proof callout */}
    <section className="py-10 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <ProofCallout
            quote="We appreciated David's patience, thoughtful communication, and realistic guidance throughout the sale of our family property."
            attribution="Family Member"
            context="Senior transition home sale"
            variant="accent"
          />
        </div>
      </div>
    </section>

    <MidPageCTA
      heading="Planning a Senior Housing Transition?"
      body="David works at the family's pace — with patience, clear communication, and experienced coordination throughout Washington State."
      buttonText="Schedule a Consultation"
      microcopy="No pressure. Just practical guidance for your family's situation."
    />

    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Why Does Choosing the Right Broker Matter More in Senior Transitions?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            A conventional listing agent focuses on getting the home sold quickly. A broker experienced in senior transitions understands that the timeline, communication style, and preparation process need to account for the family's emotional and logistical reality.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            David's dual credentials as a broker and certified appraiser mean the family gets accurate pricing grounded in the property's actual condition — not an inflated number designed to win the listing. His experience with senior transitions means he knows how to communicate with empathy, coordinate with care professionals, and manage the practical details so the family can focus on the people who matter most.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Learn more about David's approach to <Link to="/senior-transitions" className="text-accent hover:text-gold underline underline-offset-4">senior transition real estate</Link> or read about how families have described the experience on the <Link to="/testimonials" className="text-accent hover:text-gold underline underline-offset-4">testimonials page</Link>.
          </p>
        </div>
      </div>
    </section>

    <section className="py-12 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-muted-foreground mb-3">Related Resources</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/senior-transitions" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Senior Transitions</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/how-to-move-elderly-parents" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">How to Move Elderly Parents</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/resources/senior-move-managers" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Senior Move Managers</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/resources/senior-living-communities" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">Senior Living Communities</Link>
            <span className="text-muted-foreground/40">·</span>
            <Link to="/how-the-process-works" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-sm">How the Process Works</Link>
          </div>
        </div>
      </div>
    </section>

    <PageFAQ faqs={faqs} heading="Senior Transition FAQs" />

    <NextStepBlock
      heading="Continue Learning"
      steps={[
        { title: "How Probate Real Estate Works", description: "A step-by-step overview of the probate property sale process in Washington State.", href: "/guides/how-probate-real-estate-works" },
        { title: "Inherited House Guide", description: "What to do with an inherited house — sell, keep, rent, or buy out co-inheritors.", href: "/guides/inherited-house-washington" },
        { title: "Out-of-State Family Guide", description: "Managing a Washington property transition when you live far away.", href: "/guides/out-of-state-families" },
      ]}
    />

    <RelatedServices currentPath="/guides/senior-transition-differences" />

    <section className="py-20 lg:py-28 bg-primary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-6">Need Help With a Senior Housing Transition?</h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">David welcomes confidential conversations with families, care professionals, and their trusted advisors.</p>
          <Link to="/contact"><Button variant="gold" size="lg"><img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0"  loading="lazy"/>Schedule a Consultation</Button></Link>
        </div>
      </div>
    </section>

    <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default SeniorTransitionDifferences;
