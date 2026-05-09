import { Link } from "react-router-dom";

const HomepageWarmStatement = () => {
  return (
    <section className="py-14 lg:py-20 bg-cream">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[760px] mx-auto text-center">
          <p className="font-serif text-navy text-[24px] md:text-[30px] leading-snug mb-6 font-semibold">
            Real Property Planning helps families move forward — calmly, clearly, and with the right people around them.
          </p>
          <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8">
            Estate transitions and senior moves rarely follow a clean timeline. Our role is to bring structure, trusted guidance, and a coordinated team — so the next step always feels manageable.
          </p>
          <Link
            to="/about"
            className="inline-block text-gold-dark hover:text-gold underline-offset-4 hover:underline text-lg font-semibold"
          >
            Learn how we work →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomepageWarmStatement;
