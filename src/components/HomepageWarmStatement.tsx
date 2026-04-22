import { Link } from "react-router-dom";

const HomepageWarmStatement = () => {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[680px] mx-auto text-center">
          <h2 className="font-serif text-red-900 mb-8 font-bold text-xl">
            This Is More Than a Real Estate Transaction
          </h2>
          <p className="text-[19px] md:text-[20px] text-foreground/80 leading-[1.75] mb-6">
            When a family is navigating the loss of a loved one — or helping an aging parent through one of life's biggest decisions — the last thing they need is pressure or a process that feels rushed.
          </p>
          <p className="text-[19px] md:text-[20px] text-foreground/80 leading-[1.75] mb-10">
            Real Property Planning was built around a simple belief: families deserve calm, clear, honest guidance at every step.
          </p>

          {/* Pullquote */}
          <div className="bg-card border-l-4 border-gold rounded-lg p-8 mb-10 text-left">
            <p className="font-serif leading-relaxed mb-3 opacity-100 not-italic text-slate-800 font-bold text-center text-4xl md:text-5xl">
              "We don't just sell homes. We help families move forward."
            </p>
            <p className="text-muted-foreground text-base">
              — David Stein, Real Property Planning
            </p>
          </div>

          <Link to="/contact">
            <button className="inline-flex items-center justify-center h-[54px] px-10 rounded-lg bg-gold text-primary font-bold text-lg shadow-md hover:brightness-110 transition-all">
              Contact Us Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomepageWarmStatement;
