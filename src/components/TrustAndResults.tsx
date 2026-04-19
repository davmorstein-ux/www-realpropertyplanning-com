import GoldCheck3D from "@/components/GoldCheck3D";
import { Quote, Star } from "lucide-react";
import { Link } from "react-router-dom";
import iconLicense3d from "@/assets/icons/real-estate-agent-license-icon-washington.webp";
import iconAppraiser3d from "@/assets/icons/real-estate-appraiser-3d-icon-washington.webp";
import AffiliationBadgeGrid from "@/components/AffiliationBadgeGrid";

const credentials = [
  "Licensed Real Estate Broker — WA #113972",
  "Certified Residential Appraiser — WA #1702080",
  "20+ Years of Real Estate Experience",
  "Dual Expertise in Brokerage & Valuation",
];

const testimonials = [
  {
    text: "Real Property Planning guided our family through a very difficult time with professionalism and genuine compassion. The valuation perspective and market knowledge were incredibly helpful.",
    attribution: "Estate Attorney, Seattle",
    tag: "Probate · Valuation",
  },
  {
    text: "We didn't know where to start. Real Property Planning made the entire process manageable and kept us informed every step of the way.",
    attribution: "Executor, Snohomish County",
    tag: "Estate Administration · Communication",
  },
  {
    text: "Real Property Planning's dual background in brokerage and appraisal gave us confidence that the property was priced correctly. They made a complicated situation feel manageable.",
    attribution: "Family Member, King County",
    tag: "Inherited Home · Pricing",
  },
];

const caseSnapshots = [
  {
    situation: "Out-of-state executor inherited a home filled with decades of belongings",
    challenge: "No local contacts, no idea where to start, property hadn't been updated in 30 years",
    howHelped: "Coordinated cleanout, managed repairs, handled the entire listing remotely with regular photo updates",
    outcome: "Home sold within three weeks at a price that exceeded expectations",
  },
  {
    situation: "Three siblings inherited their mother's home and disagreed on pricing",
    challenge: "One wanted to sell fast, one believed the home was worth far more than market data showed",
    howHelped: "Presented a detailed property assessment and comparable sales analysis grounded in appraisal methodology",
    outcome: "Family agreed on a data-driven price; home sold with minimal conflict",
  },
  {
    situation: "Trustee needed to sell a property with a failing roof and outdated electrical",
    challenge: "Two previous agents had declined the listing due to condition concerns",
    howHelped: "Evaluated each issue, estimated cost impact on value, recommended targeted preparation strategy",
    outcome: "Property attracted multiple offers and closed smoothly — fiduciary obligation fulfilled with documented support",
  },
];

const TrustAndResults = () => (
  <section className="py-20 lg:py-28 bg-secondary">
    <div className="container px-6 lg:px-8">
      <div className="max-w-[1100px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-base">
            Trust & Results
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-4">
            Why Clients and Professionals Trust Real Property Planning
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            What keeps clients coming back — and referring others — isn't a sales pitch. It's that Our team is thorough, honest about what a property is actually worth, and brings a level of valuation expertise that most brokers simply don't have.
          </p>
        </div>

        {/* Credentials + Affiliations row */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          {/* Credentials */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="font-serif text-xl text-foreground font-semibold mb-6">
              Professional Credentials
            </h3>
            <ul className="space-y-4 mb-6">
              {credentials.map((cred, i) => (
                <li key={i} className="flex items-center gap-3">
                  <GoldCheck3D size={18} />
                  <span className="text-foreground text-base font-medium">{cred}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <img src={iconLicense3d} alt="" aria-hidden="true" className="h-10 w-10 object-contain"  loading="lazy"/>
              <img src={iconAppraiser3d} alt="" aria-hidden="true" className="h-10 w-10 object-contain mix-blend-multiply"  loading="lazy"/>
              <span className="text-muted-foreground text-base">Broker & Appraiser — serving clients throughout Washington State</span>
            </div>
          </div>

          {/* Affiliations */}
          <div className="bg-card border border-border rounded-2xl p-8 flex flex-col">
            <h3 className="font-serif text-xl text-foreground font-semibold mb-6">
              Memberships & Affiliations
            </h3>
            <div className="flex-1 flex items-center justify-center">
              <AffiliationBadgeGrid />
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl text-foreground font-semibold mb-8 text-center">
            What Clients Are Saying
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border p-7 relative">
                <Quote className="w-8 h-8 text-gold/15 absolute top-6 right-6" />
                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-foreground text-base leading-relaxed italic mb-5 pr-6">
                  "{t.text}"
                </p>
                <div className="border-t border-border pt-3">
                  <p className="text-muted-foreground text-base font-medium">— {t.attribution}</p>
                  {t.tag && (
                    <span className="inline-block mt-1.5 text-xs font-semibold uppercase tracking-wider text-gold/70 bg-gold/5 rounded-full px-2.5 py-0.5">
                      {t.tag}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
             <Link to="/testimonials" className="text-base text-accent hover:text-gold underline underline-offset-4 transition-colors">
              Read more reviews →
            </Link>
            <a
              href="https://www.zillow.com/profile/dstein2112#reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-accent hover:text-gold underline underline-offset-4 transition-colors"
            >
              See reviews on Zillow →
            </a>
          </div>
        </div>

        {/* Case Snapshots */}
        <div>
          <h3 className="font-serif text-2xl text-foreground font-semibold mb-3 text-center">
            Real Situations, Real Results
          </h3>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            Every situation is different — different families, different properties, different pressures. Here's what a few of those situations actually looked like.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {caseSnapshots.map((snap, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6">
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gold mb-1">Situation</p>
                    <p className="text-foreground text-base leading-relaxed">{snap.situation}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gold mb-1">Challenge</p>
                    <p className="text-muted-foreground text-base leading-relaxed">{snap.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gold mb-1">How We Helped</p>
                    <p className="text-muted-foreground text-base leading-relaxed">{snap.howHelped}</p>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <p className="text-xs font-bold uppercase tracking-wider text-gold mb-1">Outcome</p>
                    <p className="text-foreground text-base leading-relaxed font-medium">{snap.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TrustAndResults;
