import { Link } from "react-router-dom";

const HomepageWarmStatement = () => {
  return (
    <section className="py-12 lg:py-16 bg-cream">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[640px] mx-auto text-center">
          <p className="font-serif italic text-navy text-[22px] md:text-[26px] leading-snug mb-4">
            "We don't just sell homes. We help families move forward."
          </p>
          <p className="text-muted-foreground text-base mb-6">
            — David Stein, Real Property Planning
          </p>
          <Link
            to="/about"
            className="inline-block text-gold-dark hover:text-gold underline-offset-4 hover:underline text-base font-medium"
          >
            Learn how we work →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomepageWarmStatement;
