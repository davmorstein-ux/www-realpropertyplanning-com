import { Link } from "react-router-dom";

import RppArrow from "@/components/RppArrow";
const HomepageWarmStatement = () => {
  return (
    <section className="py-14 lg:py-20 bg-cream">
      <div className="container px-6 lg:px-8">
        <div className="max-w-[820px] mx-auto text-center">
          <Link to="/about" className="gold-cta mx-auto">
            Learn how this works
            <RppArrow />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomepageWarmStatement;
