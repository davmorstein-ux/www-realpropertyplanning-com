import GoldCheck3D from "@/components/GoldCheck3D";

interface JourneyOrientationProps {
  items: string[];
  title?: string;
  className?: string;
}

/**
 * "This Journey May Help If…" orientation block.
 * Placed below the hero on Journey Hub pages so visitors can quickly self-identify.
 */
const JourneyOrientation = ({
  items,
  title = "This Journey May Help If…",
  className = "",
}: JourneyOrientationProps) => {
  return (
    <section className={`py-10 lg:py-14 bg-cream ${className}`}>
      <div className="container px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-[28px] md:text-[34px] lg:text-[38px] text-navy font-semibold mb-7 md:mb-9 text-center leading-tight">
            {title}
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 bg-card rounded-2xl border border-border/60 shadow-sm px-5 py-4 md:px-6 md:py-5"
              >
                <GoldCheck3D size={26} className="mt-1" />
                <span className="text-navy text-[18px] md:text-[20px] leading-[1.55] font-medium">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default JourneyOrientation;
