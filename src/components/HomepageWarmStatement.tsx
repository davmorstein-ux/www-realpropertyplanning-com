import { Link } from "react-router-dom";

const HomepageWarmStatement = () => {
  return (
    <section className="py-14 lg:py-20 bg-cream">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[820px] mx-auto text-center">
          <p className="font-serif text-navy text-[26px] md:text-[34px] leading-snug font-semibold mb-8">
            Real Property Planning helps families move forward with clear guidance, trusted connections, and a coordinated team.
          </p>
          <Link to="/about" className="gold-cta mx-auto">
            Learn how we work
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomepageWarmStatement;
