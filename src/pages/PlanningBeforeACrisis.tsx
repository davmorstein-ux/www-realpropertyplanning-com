import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PlanningBeforeACrisis = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Planning Before a Crisis | Real Property Planning"
        description="Most families wait until a health emergency or a loved one's passing to sort out housing and property. Learn what you can do now — while there's still time to plan calmly."
        canonical="https://realpropertyplanning.com/planning-before-a-crisis"
      />
      <BreadcrumbSchema items={[{ name: "Planning Before a Crisis", url: "/planning-before-a-crisis" }]} />
      <Header />
      <main id="main-content">
        {/* HERO */}
        <section className="bg-primary pt-12 pb-12 lg:pt-20 lg:pb-16">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-gold font-bold tracking-[0.2em] uppercase mb-4 text-sm">
                Planning Before a Crisis
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-primary-foreground font-semibold leading-tight mb-5">
                The Best Time to Plan Is Before You Have To
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-7 max-w-2xl">
                Most families don't think about housing, property, and legal decisions
                until a crisis forces them to. A little quiet planning now can spare
                your family enormous stress — and cost — later.
              </p>
              <Link to="/contact">
                <Button variant="gold" size="lg" className="px-8 h-[56px] text-base rounded-lg">
                  Start a Conversation
                  <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-12 lg:py-16 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-5 text-navy text-[18px] md:text-[19px] leading-[1.75]">
              <p>
                There's a moment many families know all too well: a phone call, a fall,
                a diagnosis — and suddenly decisions that could have been made
                thoughtfully over months need to be made in days. Where will Mom live?
                What happens to the house? Who has the authority to sign?
              </p>
              <p>
                When a loved one reaches their 70s or 80s, or when health begins to
                shift, these questions are no longer hypothetical. Yet most families
                put off discussing them — not out of indifference, but because the
                conversations feel heavy, and life feels busy.
              </p>
              <p>
                This page is about what you can do <em>now</em>, before a crisis
                arrives — so that if and when it does, your family already has a
                foundation in place.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 1 */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-5">
                Why Planning Early Makes Such a Difference
              </h2>
              <p className="text-navy text-[18px] md:text-[19px] leading-[1.75] mb-5">
                When decisions about housing and property are made under pressure —
                after a sudden hospitalization, or in the weeks following a death —
                families often face:
              </p>
              <ul className="space-y-4 mb-6">
                {[
                  ["Rushed real estate decisions", "selling a home quickly, without time to prepare it properly, often means leaving money on the table"],
                  ["Legal gaps", "if no one has authority to act on a parent's behalf, courts may need to get involved before anything can move forward"],
                  ["Family conflict", "when nothing has been discussed or documented, siblings and family members may disagree about what the right decision is, and who gets to make it"],
                  ["Missed options", "choices that would have been available with more lead time (downsizing thoughtfully, gifting property, coordinating with Medicaid planning) are no longer on the table"],
                ].map(([t, b]) => (
                  <li key={t} className="flex gap-3 text-navy text-[18px] md:text-[19px] leading-[1.75]">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span><strong>{t}</strong> — {b}</span>
                  </li>
                ))}
              </ul>
              <p className="text-navy text-[18px] md:text-[19px] leading-[1.75]">
                Planning ahead doesn't mean assuming the worst. It means giving
                yourself the time and mental space to make good decisions — on your
                terms, not the crisis's terms.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="py-12 lg:py-16 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-5">
                The Conversations Worth Having Now
              </h2>
              <p className="text-navy text-[18px] md:text-[19px] leading-[1.75] mb-6">
                These aren't legal documents yet — they're conversations. The goal is
                for the people closest to an aging loved one to have a shared
                understanding of their wishes.
              </p>
              {[
                ["Where do they want to live as they age?", "Many older adults have strong feelings about staying in their home, or strong preferences about where they'd want to move if they couldn't. Do you know what your parent or loved one actually wants? Have you asked?"],
                ["What's the plan if they can't live alone?", "This might mean in-home caregiving, moving in with family, or transitioning to assisted living. Each path has different implications for the home and finances. Knowing which direction feels right — even loosely — helps enormously when the time comes."],
                ["Who will manage things if they can't?", "Someone needs to be named — formally and legally — to make financial and healthcare decisions. Without the right documents in place, families can find themselves locked out of bank accounts, unable to sell property, or forced into costly court proceedings."],
                ["What are their wishes for the property?", "Do they want to leave the house to specific family members? Sell it and divide the proceeds? Use it to fund care? These are decisions that belong to them, and having them documented protects everyone."],
              ].map(([h, b]) => (
                <div key={h} className="mb-5">
                  <h3 className="font-serif text-xl md:text-2xl text-navy font-semibold mb-2">{h}</h3>
                  <p className="text-navy text-[18px] md:text-[19px] leading-[1.75]">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-5">
                The Legal Documents That Matter Most
              </h2>
              <p className="text-navy text-[18px] md:text-[19px] leading-[1.75] mb-6">
                This is not legal advice — and you'll want to work with a Washington
                State estate planning attorney for the specifics. But these are the
                documents that come up again and again when families are navigating a
                transition:
              </p>
              {[
                ["Durable Power of Attorney (Financial)", "Authorizes someone to manage financial matters — including real estate transactions — on behalf of the person if they become incapacitated. Without this, no one can legally sell or refinance a property if the owner cannot act for themselves."],
                ["Healthcare Power of Attorney / Healthcare Directive", "Designates who makes medical decisions and documents the person's own wishes about care. Separate from financial matters, but equally important."],
                ["A Current Will or Trust", "Clarifies what happens to property and assets after death, and who is responsible for carrying out those wishes. A trust can also help avoid the probate process, which simplifies things significantly for heirs."],
                ["Beneficiary Designations", "Often overlooked: life insurance, retirement accounts, and some bank accounts pass outside of a will — directly to whoever is named as beneficiary. It's worth reviewing these regularly to make sure they still reflect the person's wishes."],
              ].map(([h, b]) => (
                <div key={h} className="mb-5">
                  <h3 className="font-serif text-xl md:text-2xl text-navy font-semibold mb-2">{h}</h3>
                  <p className="text-navy text-[18px] md:text-[19px] leading-[1.75]">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 */}
        <section className="py-12 lg:py-16 bg-secondary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-5">
                The Property Questions to Think Through
              </h2>
              <p className="text-navy text-[18px] md:text-[19px] leading-[1.75] mb-6">
                As a real estate broker and certified residential appraiser, David
                Stein works with families at every stage of this process. Some of the
                most common property-related questions that come up in advance
                planning:
              </p>
              {[
                ["Should we talk to an appraiser before anything else?", "Getting a professional sense of what a home is worth — before any decisions are made — helps families plan realistically. It also establishes a baseline that can matter for tax purposes later."],
                ["Is the home in good enough condition to sell when the time comes?", "Many older homes need updating before they go on the market. Knowing what would be involved — and roughly what it would cost — helps families plan for that eventuality without scrambling at the last minute."],
                ["What if multiple family members will inherit the property?", "Co-ownership of inherited property can become complicated quickly, especially when family members disagree about what to do with it. Discussing this dynamic in advance — and potentially addressing it in estate planning documents — prevents a lot of heartache."],
                ["Are there tax implications we should understand?", "Washington State has its own estate tax, and there are federal considerations as well. Timing, stepped-up basis at death, and how property is titled all matter. These are conversations worth having with both an estate planning attorney and a financial advisor."],
              ].map(([h, b]) => (
                <div key={h} className="mb-5">
                  <h3 className="font-serif text-xl md:text-2xl text-navy font-semibold mb-2">{h}</h3>
                  <p className="text-navy text-[18px] md:text-[19px] leading-[1.75]">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-5">
                When a Move Seems Like It's Coming
              </h2>
              <p className="text-navy text-[18px] md:text-[19px] leading-[1.75] mb-4">
                Sometimes families aren't planning years ahead — they're planning
                months ahead, because they can see the signs. A parent is struggling
                to manage at home. A health event has changed things. The question is
                no longer "if" but "when."
              </p>
              <p className="text-navy text-[18px] md:text-[19px] leading-[1.75] mb-5">
                Even in this compressed timeframe, thoughtful preparation still makes
                a real difference:
              </p>
              <ul className="space-y-4">
                {[
                  ["Start looking at senior living options now", "before a health crisis forces a rushed decision. Understanding what's available, what it costs, and what the waitlists look like gives you real choices instead of whatever happens to have an opening."],
                  ["Have the home evaluated", "both for its condition and its likely market value. If you'll need to sell to fund care, knowing that number changes the financial picture immediately."],
                  ["Get legal documents updated or created", "before a diagnosis or health decline makes that harder. Cognitive changes can affect someone's legal capacity to sign documents, so timing matters."],
                  ["Talk to an experienced real estate broker", "who works specifically with senior transitions. The process of selling a family home — particularly one that has been lived in for decades — is different from a typical real estate transaction. It takes patience, coordination with family members, and often a willingness to work around the timeline of care decisions."],
                ].map(([t, b]) => (
                  <li key={t} className="flex gap-3 text-navy text-[18px] md:text-[19px] leading-[1.75]">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span><strong>{t}</strong> — {b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 6 */}
        <section className="py-12 lg:py-16 bg-cream">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-5">
                How Real Property Planning Can Help
              </h2>
              <p className="text-navy text-[18px] md:text-[19px] leading-[1.75] mb-5">
                David Stein works specifically with families navigating these
                transitions across Washington State. Whether you're thinking years
                ahead or months ahead, he can help you:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Understand what a property is worth today (as a Washington State Certified Residential Appraiser)",
                  "Think through the real estate side of a senior housing transition",
                  "Coordinate with the other professionals involved — estate planning attorneys, care managers, financial advisors",
                  "Navigate the sale of a family home thoughtfully, with calm guidance and realistic expectations",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-navy text-[18px] md:text-[19px] leading-[1.75]">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-navy text-[18px] md:text-[19px] leading-[1.75]">
                This isn't about pushing anyone to make decisions before they're
                ready. It's about having a knowledgeable, unhurried conversation —
                so that when the time comes, you already know who to call and what
                to expect.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-primary">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-4">
                Ready to Think This Through?
              </h2>
              <p className="text-primary-foreground/85 text-lg md:text-xl leading-relaxed mb-3">
                You don't need to have everything figured out to reach out. Many of
                the families David works with start with a simple phone call — just
                to understand what's involved and what their options are.
              </p>
              <p className="text-primary-foreground/85 text-lg md:text-xl leading-relaxed mb-6">
                There's no pressure, no sales pitch. Just a calm, experienced
                conversation.
              </p>
              <p className="text-primary-foreground text-lg md:text-xl mb-2">
                <strong>Phone:</strong>{" "}
                <a href="tel:+12069003015" className="underline underline-offset-4 hover:text-gold">
                  (206) 900-3015
                </a>
              </p>
              <p className="text-primary-foreground text-lg md:text-xl mb-7">
                <strong>Email:</strong>{" "}
                <a href="mailto:info@realpropertyplanning.com" className="underline underline-offset-4 hover:text-gold">
                  info@realpropertyplanning.com
                </a>
              </p>
              <Link to="/contact">
                <Button variant="gold" size="lg" className="px-8 h-[56px] text-base rounded-lg">
                  Schedule a Conversation
                  <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* RELATED LINKS */}
        <section className="py-10 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm font-semibold text-muted-foreground mb-3">Related</p>
              <div className="flex flex-wrap gap-3">
                <Link to="/estate-probate-inherited-property" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-base">
                  When a Loved One Passes Away
                </Link>
                <span className="text-muted-foreground/40">·</span>
                <Link to="/contact" className="text-accent hover:text-gold transition-colors underline underline-offset-4 text-base">
                  Contact David Stein
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="py-8 bg-background">
          <div className="container px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed italic">
                Real Property Planning provides real estate brokerage and appraisal
                services. The information on this page is intended for general
                guidance only and does not constitute legal, tax, or financial
                advice. Please consult a licensed Washington State attorney for
                estate planning documents and a qualified financial advisor for tax
                and financial planning.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PlanningBeforeACrisis;
