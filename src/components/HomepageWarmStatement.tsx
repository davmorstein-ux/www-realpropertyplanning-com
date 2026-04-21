import { Link } from "react-router-dom";

const HomepageWarmStatement = () => {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[680px] mx-auto text-center">
          <h2 className="font-serif text-4xl text-foreground font-semibold mb-8">
            This Is More Than a Real Estate Transaction
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-10">
            When a family is navigating the loss of a loved one — or helping an aging parent make one of the biggest decisions of their life — the last thing they need is confusion, pressure, or a process that feels rushed.
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed mb-10">
            Real Property Planning was built around a simple belief: that families deserve calm, clear, honest guidance at every step.
          </p>

          {/* Pullquote */}
          <div className="bg-card border-l-4 border-gold rounded-lg p-8 mb-10 text-left">
            <p className="text-xl text-foreground font-serif italic leading-relaxed mb-3">
              "We don't just sell homes. We help families move forward."
            </p>
            <p className="text-muted-foreground text-base">
              — Real Property Planning
            </p>
          </div>

          <Link to="/contact">
            <button className="inline-flex items-center justify-center h-[54px] px-10 rounded-lg bg-gold text-primary font-bold text-lg shadow-md hover:brightness-110 transition-all">
              Talk to our team
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomepageWarmStatement;
