import { Link } from "react-router-dom";

const FeaturedAttorneyPlaceholder = () => (
  <section className="py-16 lg:py-20 bg-background">
    <div className="container px-6 lg:px-8">
      <div className="max-w-[900px] mx-auto">
        <p className="text-gold font-bold tracking-[0.15em] uppercase mb-3 text-sm text-center">
          Featured Attorneys
        </p>
        <h2 className="font-serif text-3xl text-foreground font-semibold mb-8 text-center">
          Featured Attorneys
        </h2>
        <div className="bg-secondary border border-border rounded-xl p-8 text-center shadow-sm">
          <p className="text-foreground text-lg leading-relaxed mb-5">
            Interested in being featured? Contact us to learn more.
          </p>
          <Link
            to="/contact"
            className="inline-block text-accent hover:text-gold underline underline-offset-4 font-semibold"
          >
            Contact Us →
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedAttorneyPlaceholder;
