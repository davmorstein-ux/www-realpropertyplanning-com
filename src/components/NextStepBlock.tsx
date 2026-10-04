import { Link } from "react-router-dom";

interface NextStep {
  title: string;
  description: string;
  href: string;
}

interface NextStepBlockProps {
  heading?: string;
  steps: NextStep[];
  background?: "bg-background" | "bg-secondary";
  /** 2 = two tiles per row from tablet width up (used by NextQuestions). */
  columns?: 1 | 2;
}

const NextStepBlock = ({ heading = "What to Read Next", steps, background = "bg-secondary", columns = 1 }: NextStepBlockProps) => (
  <section className={`py-14 lg:py-20 ${background}`}>
    <div className="container px-6 lg:px-8">
      <div className="max-w-[1140px] mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-8 text-foreground">{heading}</h2>
        <div className={columns === 2 ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "grid grid-cols-1 gap-4"}>
          {steps.map((step) => (
            <Link
              key={step.href}
              to={step.href}
              className="interior-tile interior-tile--guide tile-white group block h-full no-underline"
            >
              <div className="tile-white__inner h-full">
                <div className="tile-white__face h-full">
                  <div className="flex h-full flex-col">
                    <h3 className="mb-3 font-serif text-xl font-extrabold leading-snug text-foreground transition-colors duration-300 group-hover:text-accent sm:text-[1.38rem]">
                      {step.title}
                    </h3>
                    <p className="text-[16px] leading-[1.6] text-muted-foreground mb-5">{step.description}</p>
                    <div className="mt-auto flex justify-start">
                      <span className="gold-cta">
                        Learn more
                        <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default NextStepBlock;
