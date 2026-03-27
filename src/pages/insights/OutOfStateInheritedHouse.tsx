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
  { question: "Do I need to travel to Washington to sell inherited property?", answer: "Not necessarily. Many steps — including assessments, vendor coordination, and even closings — can be handled remotely with the right local support. Some families make one trip for personal items and leave the rest to trusted professionals on the ground." },
  { question: "How do I manage a property I've never seen?", answer: "Start with a professional property assessment. This gives you a clear picture of condition, value, and what needs to happen — without guessing from a distance. Photos, reports, and regular updates from a local coordinator can keep you informed." },
  { question: "What if I can't afford to maintain the property while it's being sold?", answer: "Talk to the estate attorney about using estate funds for necessary maintenance. In most cases, reasonable property preservation costs are an allowable estate expense." },
  { question: "Can I sell the property without going through probate?", answer: "It depends on how the property is titled. If it was held in a trust or with survivorship rights, probate may not be required. If probate is needed, you'll need court authority before a sale can close." },
];

const jsonLd = articleSchema({
  headline: "How to Handle an Inherited House When You Live Out of State",
  description: "Practical strategies for managing and selling inherited Washington property when you live in another state. Covers coordination, remote management, and minimizing travel.",
  url: "/insights/out-of-state-inherited-house-help",
  datePublished: "2026-03-27",
  dateModified: "2026-03-27",
  about: ["Out-of-state property management", "Inherited property", "Remote estate coordination", "Washington real estate"],
});

const OutOfStateInheritedHouse = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="How to Handle an Inherited House When You Live Out of State | Real Property Planning"
      description="Practical strategies for managing inherited property in Washington when you live far away. Coordination tips, remote management approaches, and how to minimize travel."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[
      { name: "Insights", url: "/insights" },
      { name: "Out-of-State Inherited House", url: "/insights/out-of-state-inherited-house-help" },
    ]} />
    <Header />

    <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">Insights</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            How to Handle an Inherited House When You Live Out of State
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed mb-4">
            Managing an inherited property from another state is challenging — but it does not have to be overwhelming. With the right local coordination and a clear plan, most of the process can be handled without constant travel.
          </p>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            This article covers the real challenges of distance, practical coordination strategies, and how to protect the property while decisions are being made.
          </p>
        </div>
      </div>
    </section>

    <TrustStrip />

    {/* Challenges of Distance */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">The Real Challenges of Distance</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            When you inherit property in a state where you do not live, nearly every aspect of the process becomes harder — not because the steps are more complex, but because you cannot simply drive over and handle things yourself.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            You may not know the local market. You may not have a clear sense of the property's condition. Finding reliable vendors, understanding local timelines, and coordinating across time zones all add friction to an already stressful process.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            There is also the emotional dimension. Walking through a parent's home for the last time is difficult enough — doing it under time pressure with a return flight booked makes thoughtful decisions even harder.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The good news is that most of the practical work can be coordinated remotely when you have someone local you trust to be your eyes, ears, and hands on the ground.
          </p>
        </div>
      </div>
    </section>

    {/* Coordination Strategies */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Coordination Strategies That Work</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Successful remote property management comes down to three things: reliable local contacts, clear communication, and a structured timeline.
          </p>
          <ul className="space-y-4">
            {[
              "Identify a single point of coordination locally — someone who can manage vendors, access the property, and provide regular updates",
              "Get a professional property assessment early so you are making decisions based on facts rather than assumptions",
              "Set up a simple communication rhythm — weekly updates, shared photo documentation, and clear decision points",
              "Use the estate attorney as a hub for legal questions rather than trying to research Washington-specific rules on your own",
              "Plan your travel strategically — one well-organized trip focused on personal items and key decisions is often more productive than multiple rushed visits",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                <span className="text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <MidPageCTA />

    {/* Managing Property Condition */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Managing Property Condition Remotely</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            A vacant property can deteriorate quickly — especially through a Washington winter. Even small issues like a leaking gutter or an overgrown yard can signal neglect and reduce perceived value.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Set up basic property maintenance: yard care, periodic check-ins, and seasonal preparation. If the property will be vacant for more than a few weeks, consider having someone check on it regularly and confirm that utilities, heat, and water are functioning.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            A professional assessment can also identify condition issues that might not be visible in photos — things like deferred maintenance, aging systems, or code concerns that affect value or sale readiness.
          </p>
        </div>
      </div>
    </section>

    {/* Minimizing Travel */}
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">Minimizing Travel Without Losing Control</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Many out-of-state families worry that they need to be physically present for every step. In practice, most of the process — from assessments and cleanouts to listing and closing — can be managed with the right local coordination.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Remote notarization, digital document signing, and video walkthroughs have made it easier than ever to participate meaningfully without being on-site. The key is having a trusted professional who understands your situation and keeps you informed.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If you do plan a trip, make it count. Prioritize removing personal items, reviewing the property in person, and meeting with key professionals face to face. Then let the local team handle the rest.
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
      links={[
        { label: "Out-of-State Family Coordination Guide", href: "/guides/out-of-state-families" },
        { label: "Spokane: Remote Ownership Support", href: "/spokane-probate-estate-real-estate" },
        { label: "Executor Responsibilities", href: "/executors" },
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

    <RelatedServices currentPath="/insights/out-of-state-inherited-house-help" />
    <DisclaimerSection />
    <Footer />
  </div>
);

export default OutOfStateInheritedHouse;
