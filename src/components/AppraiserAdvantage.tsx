import GoldCheck3D from "@/components/GoldCheck3D";
import iconAppraiser3d from "@/assets/icons/icon-appraiser-3d.png";

const advantages = [
  {
    title: "More Defensible Pricing",
    description:
      "When an attorney, co-executor, or beneficiary questions the price, it needs to hold up. Pricing built on appraisal methodology does that — it's not just an opinion, it's supported by data.",
  },
  {
    title: "Reduced Risk of Costly Mistakes",
    description:
      "Overpricing causes the property to sit. Underpricing means the estate loses money. David's valuation training helps avoid both — and that difference matters most in estate situations where there's no room for error.",
  },
  {
    title: "Stronger Guidance for Fiduciaries",
    description:
      "Executors and trustees are held to a fiduciary standard. When the pricing is backed by professional valuation methodology, it's easier to demonstrate that they acted in the estate's best interest.",
  },
  {
    title: "Informed Preparation Decisions",
    description:
      "Families often ask whether it's worth fixing up the house before selling. David's analysis looks at what improvements actually return value — so you're not spending money on things the market won't reward.",
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
            Most brokers price a property based on recent sales and experience — and that's a reasonable starting point. But David also brings formal appraisal training, which means his pricing is built on structured methodology. In estate and probate situations, that difference can be what prevents a dispute, protects a fiduciary, or keeps a deal from falling apart.
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
