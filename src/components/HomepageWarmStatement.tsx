import { Link } from "react-router-dom";

const HomepageWarmStatement = () => {
  return (
    <section className="py-14 lg:py-20 bg-cream">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[820px] mx-auto text-center">
          <p className="font-serif text-navy text-[26px] md:text-[34px] leading-snug font-semibold mb-8">
            Real Property Planning helps families move forward with clear guidance, trusted connections, and a coordinated team.
          </p>
          <Link
            to="/about"
            className="inline-block text-gold-dark hover:text-gold text-[20px] md:text-[22px] font-semibold underline-offset-4 hover:underline"
          >
            Learn how we work →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomepageWarmStatement;
