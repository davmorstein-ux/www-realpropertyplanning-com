import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
                <h3 className="font-serif text-base font-medium text-foreground group-hover:text-gold transition-colors mb-1">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-gold shrink-0 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default NextStepBlock;
