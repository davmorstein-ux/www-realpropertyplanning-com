import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerSection from "@/components/DisclaimerSection";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/schema";
import TrustStrip from "@/components/TrustStrip";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import RelatedServices from "@/components/RelatedServices";
import { Link } from "react-router-dom";
import { Phone, BookOpen } from "lucide-react";

const jsonLd = articleSchema({
  headline: "How to Move Elderly Parents Safely and Respectfully",
  description: "A compassionate, practical guide for adult children helping an aging parent leave their longtime home in Washington State. What to expect, how to prepare, and how to protect everyone involved.",
  url: "/insights-guidance/how-to-move-elderly-parents-safely-and-respectfully",
  datePublished: "2026-04-13",
  dateModified: "2026-04-13",
  about: ["Senior transitions", "Elderly parent relocation", "Senior housing", "Washington State real estate", "Family caregiving"],
});

const sectionBase = "py-14 md:py-20";
const contentWrap = "container px-6 lg:px-8";
const proseWrap = "max-w-3xl mx-auto";
const h2Class = "font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6";
const pClass = "text-muted-foreground text-[17px] md:text-lg leading-[1.8] mb-5 last:mb-0";

const relatedArticles = [
  {
    title: "How Do Senior Transition Sales Differ From Ordinary Home Sales?",
    href: "/guides/senior-transition-differences",
  },
  {
    title: "Do I Need an Appraisal Before Selling Inherited Property?",
    href: "/guides/appraisal-before-selling-inherited-property",
  },
  {
    title: "How Can an Out-of-State Family Manage a Washington Property Sale?",
    href: "/guides/out-of-state-families",
  },
];

const HowToMoveElderlyParents = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="How to Move Elderly Parents Safely and Respectfully | Real Property Planning"
      description="A compassionate, practical guide for adult children helping an aging parent leave their longtime home in Washington State. What to expect, how to prepare, and how to protect everyone involved."
      jsonLd={jsonLd}
    />
    <BreadcrumbSchema items={[
      { name: "Insights", url: "/insights" },
      { name: "How to Move Elderly Parents Safely and Respectfully", url: "/insights-guidance/how-to-move-elderly-parents-safely-and-respectfully" },
    ]} />
    <Header />
    <main id="main-content">

    {/* Hero */}
    <section className="bg-primary pt-16 pb-14 md:pt-[84px] md:pb-[72px] lg:pt-[112px] lg:pb-24">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-gold font-bold tracking-[0.2em] uppercase mb-3.5 text-base">Insights & Guidance</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold leading-tight mb-6">
            How to Move Elderly Parents Safely and Respectfully
          </h1>
          <p className="text-xl md:text-[22px] text-primary-foreground/80 leading-[1.75] mb-5">
            Helping a parent leave the home they have lived in for decades is one of the most emotionally complex things an adult child will ever do.
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/70 leading-[1.75] mb-8">
            It involves logistics, family dynamics, financial decisions, and deeply personal emotions — often all at once. This guide is written for families in the middle of that process, or just beginning to think about it.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-gold px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-gold-dark transition-colors min-h-[52px]"
          >
            Talk to Someone Who Understands
          </Link>
        </div>
      </div>
    </section>

    <TrustStrip />

    {/* Start With Listening */}
    <section className={sectionBase}>
      <div className={contentWrap}>
        <div className={proseWrap}>
          <h2 className={h2Class}>Start With Listening, Not Planning</h2>
          <p className={pClass}>
            Before any decisions are made about the home, the move, or the timeline — listen. Understand what your parent fears most. Understand what matters to them.
          </p>
          <p className={pClass}>
            A parent who feels heard and included in decisions will navigate the transition far more gracefully than one who feels like things are being done to them rather than with them.
          </p>
          <p className={pClass}>
            Whenever possible, move at their pace.
          </p>
        </div>
      </div>
    </section>

    {/* Recognize the Signs */}
    <section className={`${sectionBase} bg-secondary`}>
      <div className={contentWrap}>
        <div className={proseWrap}>
          <h2 className={h2Class}>Recognize the Signs That It's Time</h2>
          <p className={pClass}>
            Families often struggle with knowing when to start the conversation. Some signs that a transition may be needed include:
          </p>
          <ul className="text-muted-foreground text-[17px] md:text-lg leading-[1.8] space-y-3 mb-6 pl-5 list-disc">
            <li>Increasing difficulty with daily tasks</li>
            <li>Safety concerns in the home</li>
            <li>Isolation or loneliness</li>
            <li>Declining health that requires more support</li>
            <li>A parent's own expressed desire for a simpler living situation</li>
          </ul>
          <p className={pClass}>
            There is no perfect moment — but earlier conversations are almost always easier than later ones.
          </p>
        </div>
      </div>
    </section>

    {/* Housing Options */}
    <section className={sectionBase}>
      <div className={contentWrap}>
        <div className={proseWrap}>
          <h2 className={h2Class}>Understand the Housing Options Available</h2>
          <p className={pClass}>
            Washington State has a wide range of senior living options, and understanding them early helps families make informed decisions without rushing.
          </p>

          <div className="space-y-8 mt-8">
            <div>
              <h3 className="font-serif text-xl md:text-[22px] font-semibold text-foreground mb-2">Independent Living</h3>
              <p className={pClass}>
                For active seniors who want community, amenities, and freedom from home maintenance, without needing daily care.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl md:text-[22px] font-semibold text-foreground mb-2">Assisted Living</h3>
              <p className={pClass}>
                For seniors who need help with daily activities like bathing, dressing, medication management, or meals, while still maintaining as much independence as possible.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl md:text-[22px] font-semibold text-foreground mb-2">Memory Care</h3>
              <p className={pClass}>
                Specialized communities for seniors living with Alzheimer's or other forms of dementia, with secure environments and trained staff.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl md:text-[22px] font-semibold text-foreground mb-2">Adult Family Homes</h3>
              <p className={pClass}>
                Smaller, residential-style care settings that offer a more intimate alternative to larger facilities, common throughout Washington State.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl md:text-[22px] font-semibold text-foreground mb-2">Aging in Place</h3>
              <p className={pClass}>
                With the right modifications and support services, some seniors can safely remain in their own home longer than expected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* What Happens to the Family Home */}
    <section className={`${sectionBase} bg-secondary`}>
      <div className={contentWrap}>
        <div className={proseWrap}>
          <h2 className={h2Class}>What Happens to the Family Home</h2>
          <p className={pClass}>
            For most families, the home is the largest financial asset involved in a senior transition — and decisions about it directly affect what options are available for care.
          </p>
          <p className={pClass}>
            Key questions to address early include: What is the home currently worth? Will the proceeds fund assisted living costs? Are there siblings who have a stake in the outcome? Is there a mortgage or other debt on the property?
          </p>
          <p className={pClass}>
            Getting a certified appraisal early in the process answers the most important of these questions and gives the family a foundation for every other decision that follows.
          </p>
        </div>
      </div>
    </section>

    {/* Preparing the Home */}
    <section className={sectionBase}>
      <div className={contentWrap}>
        <div className={proseWrap}>
          <h2 className={h2Class}>Preparing the Home for Sale</h2>
          <p className={pClass}>
            Many family homes need some level of attention before going on the market — but not always as much as families fear.
          </p>
          <p className={pClass}>
            A real estate professional experienced in senior transitions can walk through the home and give practical, honest guidance on what is worth doing and what can be skipped.
          </p>
          <p className={pClass}>
            The goal is always to maximize the outcome for the family without creating unnecessary work or expense during an already demanding time.
          </p>
        </div>
      </div>
    </section>

    {/* Timing */}
    <section className={`${sectionBase} bg-secondary`}>
      <div className={contentWrap}>
        <div className={proseWrap}>
          <h2 className={h2Class}>Timing the Move and the Sale Together</h2>
          <p className={pClass}>
            One of the most common sources of stress in senior transitions is the timing gap between when a parent moves and when the home sells.
          </p>
          <p className={pClass}>
            Moving too quickly can be traumatic for the parent. Waiting too long can create financial strain, especially if assisted living costs are accumulating while the home sits unsold.
          </p>
          <p className={pClass}>
            An experienced senior transition real estate professional helps families think through this sequence carefully and build a realistic plan.
          </p>
        </div>
      </div>
    </section>

    {/* Support Team */}
    <section className={sectionBase}>
      <div className={contentWrap}>
        <div className={proseWrap}>
          <h2 className={h2Class}>Build Your Support Team Early</h2>
          <p className={pClass}>
            No family should navigate a senior transition alone. The right support team typically includes:
          </p>
          <ul className="text-muted-foreground text-[17px] md:text-lg leading-[1.8] space-y-3 mb-6 pl-5 list-disc">
            <li>A senior care coordinator or geriatric care manager</li>
            <li>An elder law attorney</li>
            <li>A real estate professional who specializes in senior transitions</li>
            <li>A senior move manager to help with packing and logistics</li>
            <li>A financial advisor familiar with elder care costs</li>
          </ul>
          <p className={pClass}>
            Real Property Planning maintains relationships with trusted professionals in each of these areas throughout Washington State and can help connect families with the right people.
          </p>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-16 md:py-24 bg-warm-bg">
      <div className={contentWrap}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-5">
            You Don't Have to Figure This Out Alone
          </h2>
          <p className="text-muted-foreground text-[17px] md:text-lg leading-[1.8] mb-5 max-w-2xl mx-auto">
            If your family is beginning to think about a parent's housing transition — or is already in the middle of one — a single conversation can bring enormous clarity.
          </p>
          <p className="text-muted-foreground text-[17px] md:text-lg leading-[1.8] mb-10 max-w-2xl mx-auto">
            There is no obligation and no pressure. Just a practical talk about your situation and what options might make sense.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+12069003015"
              className="inline-flex items-center justify-center gap-2.5 rounded-md bg-gold px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-gold-dark transition-colors min-h-[52px]"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call (206) 900-3015
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md border-2 border-gold px-8 py-3.5 text-base font-semibold text-gold shadow-sm hover:bg-gold/10 transition-colors min-h-[52px]"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Related Articles */}
    <section className={sectionBase}>
      <div className={contentWrap}>
        <div className="max-w-3xl mx-auto">
          <h2 className={h2Class}>Related Articles</h2>
          <div className="grid gap-5">
            {relatedArticles.map((article) => (
              <Link
                key={article.href}
                to={article.href}
                className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:border-gold/40 hover:shadow-md transition-all duration-200"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 mt-0.5">
                  <BookOpen className="h-5 w-5 text-gold" aria-hidden="true" />
                </div>
                <span className="text-foreground text-[17px] md:text-lg font-medium leading-snug">
                  {article.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>

    <RelatedServices currentPath="/insights-guidance/how-to-move-elderly-parents-safely-and-respectfully" />
    <DisclaimerSection />

    </main>
    <Footer />
  </div>
);

export default HowToMoveElderlyParents;
