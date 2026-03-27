import GoldCheck3D from "@/components/GoldCheck3D";
import iconAppraiser3d from "@/assets/icons/icon-appraiser-3d.png";

const advantages = [
  {
    title: "More Defensible Pricing",
    description:
      "Pricing grounded in appraisal methodology means the list price can withstand scrutiny from attorneys, courts, co-executors, and beneficiaries.",
  },
  {
    title: "Reduced Risk of Costly Mistakes",
    description:
      "Overpricing leads to stale listings. Underpricing leaves money on the table. David's valuation background minimizes both risks.",
  },
  {
    title: "Stronger Guidance for Fiduciaries",
    description:
      "Executors and trustees have a legal obligation to act in the estate's best interest. A broker who understands appraisal standards provides the data they need to meet that duty.",
  },
  {
    title: "Informed Preparation Decisions",
    description:
      "Should you renovate, make targeted repairs, or sell as-is? David's analysis focuses on which improvements actually return value — not guesswork.",
  },
];

const AppraiserAdvantage = () => (
  <section className="py-16 lg:py-24 bg-cream">
    <div className="container px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold-dark font-bold tracking-[0.15em] uppercase mb-3 text-base">
            Why It Matters
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-semibold mb-4">
            The Appraiser Advantage
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Most real estate brokers estimate value. David measures it. As both a licensed broker and a Washington State certified residential appraiser, he brings a level of pricing confidence that protects families, satisfies fiduciary obligations, and reduces risk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {advantages.map((item, i) => (
            <div key={i} className="bg-card rounded-xl border border-border p-7">
              <div className="flex items-start gap-4">
                <GoldCheck3D size={22} className="mt-1 shrink-0" />
                <div>
                  <h3 className="font-serif text-lg text-foreground font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 text-muted-foreground text-[15px]">
          <img
            src={iconAppraiser3d}
            alt=""
            aria-hidden="true"
            className="h-8 w-8 object-contain mix-blend-multiply"
          />
          <span>WA Certified Residential Appraiser — License #1702080</span>
        </div>
      </div>
    </div>
  </section>
);

export default AppraiserAdvantage;
