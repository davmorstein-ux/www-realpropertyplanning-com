import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";
import GoldCheck3D from "@/components/GoldCheck3D";

const OutOfStateExecutorCaseStudy = () => {
  return (
    <div className="min-h-screen bg-cream">
      <SEOHead
        title="Case Study: Helping an Out-of-State Executor Sell a Family Home | Real Property Planning"
        description="How David Stein helped an out-of-state executor coordinate the sale of an inherited family home in Washington — managing property preparation, valuation, and family communication from start to close."
      />
      <Header />
      <main id="main-content">

      {/* Hero */}
      <section className="py-14 lg:py-20 bg-primary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-gold/80 bg-gold/10 rounded-full px-3 py-1 mb-5">
              Out-of-State Executor · Family Coordination
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] text-primary-foreground font-bold leading-[1.15] mb-5">
              Helping an Out-of-State Executor Manage and Sell a Family Home in Washington
            </h1>
            <p className="text-primary-foreground/70 text-lg leading-relaxed">
              A realistic look at how a complex inherited property situation was handled — step by step, with care and clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-14 lg:py-20 bg-cream">
        <div className="container px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-14">

            {/* Situation */}
            <div>
              <h2 className="font-serif text-2xl md:text-[1.7rem] text-foreground font-semibold mb-4">
                The Situation
              </h2>
              <p className="text-foreground/85 text-[17px] leading-[1.85] mb-3">
                After their mother passed away, two adult siblings were named co-executors of her estate. The estate included a single-family home in Snohomish County that had been in the family for over 30 years.
              </p>
              <p className="text-foreground/85 text-[17px] leading-[1.85]">
                One sibling lived in California. The other lived in Texas. Neither had been inside the home in over a year. They knew it needed attention, but they weren't sure where to start — or what the property was actually worth.
              </p>
            </div>

            {/* Challenge */}
            <div>
              <h2 className="font-serif text-2xl md:text-[1.7rem] text-foreground font-semibold mb-4">
                The Challenge
              </h2>
              <ul className="space-y-3">
                {[
                  "Both executors were out of state and couldn't easily visit the property",
                  "The home had deferred maintenance — aging roof, dated interior, and a cluttered garage",
                  "The siblings disagreed on whether to invest in repairs or sell as-is",
                  "They had no clear sense of the home's current market value",
                  "An estate attorney was involved, and the sale needed to align with probate timelines",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                    <span className="text-foreground/85 text-[17px] leading-[1.85]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How David Helped */}
            <div>
              <h2 className="font-serif text-2xl md:text-[1.7rem] text-foreground font-semibold mb-4">
                How David Helped
              </h2>
              <div className="space-y-4 text-foreground/85 text-[17px] leading-[1.85]">
                <p>
                  David started with a phone conversation with both siblings to understand the full picture — the property, the family dynamics, the probate timeline, and their goals.
                </p>
                <p>
                  He then visited the home and provided a detailed assessment, drawing on his background as a certified residential appraiser. Rather than guessing at value, he gave the family a clear, defensible pricing strategy based on the property's condition, comparable sales, and current market trends.
                </p>
                <p>
                  To address the repair question, David walked the siblings through a practical cost-versus-return analysis. Some improvements made sense. Others didn't. The family made an informed decision based on real numbers — not pressure.
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  "Coordinated a cleanout and targeted property preparation with local vendors",
                  "Kept both siblings informed with regular updates, photos, and clear summaries",
                  "Communicated directly with the estate attorney to stay aligned on timelines",
                  "Managed showings, offers, and negotiations on behalf of the family",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <GoldCheck3D size={20} className="mt-0.5" />
                    <span className="text-foreground/85 text-[17px] leading-[1.85]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcome */}
            <div>
              <h2 className="font-serif text-2xl md:text-[1.7rem] text-foreground font-semibold mb-4">
                The Outcome
              </h2>
              <div className="space-y-4 text-foreground/85 text-[17px] leading-[1.85]">
                <p>
                  The home sold within a reasonable timeframe at a price both siblings felt confident about. The process stayed on track with the probate timeline, and the estate attorney had what was needed at each step.
                </p>
                <p>
                  More importantly, the siblings didn't have to fly to Washington to manage the process. They had a single point of contact who understood the real estate, the valuation, and the emotional weight of selling a family home.
                </p>
                <p>
                  Both executors described the experience as far less stressful than they had expected.
                </p>
              </div>
            </div>

            {/* Related Pages */}
            <div className="border-t border-border pt-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Related Pages
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "For Executors", href: "/executors" },
                  { label: "Probate & Estate Sales", href: "/probate-estate-sales" },
                  { label: "Why Valuation Matters", href: "/why-valuation-matters" },
                  { label: "Out-of-State Families", href: "/insights/out-of-state-inherited-house" },
                  { label: "Snohomish County", href: "/counties/snohomish" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm text-accent hover:text-gold underline underline-offset-4 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 lg:py-20 bg-secondary">
        <div className="container px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="premium-divider mb-8">
              <span className="premium-divider-dot" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-4">
              A Clear Next Step
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              If you're dealing with a situation like this, a short conversation can help bring clarity.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="lg" className="px-10 py-4 h-auto text-base">
                <img
                  src={iconPhone3d}
                  alt=""
                  aria-hidden="true"
                  className="w-5 h-5 mr-2 object-contain shrink-0"
                 loading="lazy"/>
                Schedule a Consultation
              </Button>
            </Link>
            <p className="text-muted-foreground/70 text-sm mt-4">
              No pressure. Just practical guidance.
            </p>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
};

export default OutOfStateExecutorCaseStudy;
