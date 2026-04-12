import { Link } from "react-router-dom";
import iconArrowRight3d from "@/assets/icons/property-guidance-arrow-icon-washington.webp";

interface NextStep {
  title: string;
  description: string;
  href: string;
}

interface NextStepBlockProps {
  heading?: string;
  steps: NextStep[];
  background?: "bg-background" | "bg-secondary";
}

const NextStepBlock = ({
  heading = "What to Read Next",
  steps,
  background = "bg-secondary",
}: NextStepBlockProps) => (
  <section className={`py-14 lg:py-20 ${background}`}>
    <div className="container px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-2xl text-foreground font-semibold mb-6">
          {heading}
        </h2>
        <div className="space-y-4">
          {steps.map((step) => (
            <Link
              key={step.href}
              to={step.href}
              className="card-3d group flex items-center justify-between gap-4 p-5"
            >
              <div>
                <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-gold transition-colors mb-1">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
              <img src={iconArrowRight3d} alt="" aria-hidden="true" className="w-6 h-6 object-contain shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" loading="lazy" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default NextStepBlock;
