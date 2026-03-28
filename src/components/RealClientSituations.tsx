import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import iconPhone3d from "@/assets/icons/icon-phone-3d.png";

interface CaseStudy {
  title: string;
  label?: string;
  situation: string;
  challenge?: string;
  approach?: string;
  howHelped?: string;
  outcome: string;
}

interface RealClientSituationsProps {
  studies: CaseStudy[];
  heading?: string;
  subheading?: string;
  background?: "bg-background" | "bg-secondary" | "bg-cream";
  showCTA?: boolean;
}

const RealClientSituations = ({
  studies,
  heading = "Real Client Situations",
  subheading = "Every situation is different. Here are a few examples of how David has helped clients work through complex property transitions.",
  background = "bg-background",
  showCTA = false,
}: RealClientSituationsProps) => (
  <section className={`py-16 lg:py-24 ${background}`}>
    <div className="container px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
          {heading}
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10">
          {subheading}
        </p>
        <div className="space-y-6">
          {studies.map((study, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 md:p-8">
              <div className="flex items-start justify-between gap-4 mb-5">
                <h3 className="font-serif text-xl text-foreground font-semibold">
                  {study.title}
                </h3>
                {study.label && (
                  <span className="shrink-0 text-[11px] font-semibold uppercase tracking-wider text-gold/70 bg-gold/5 rounded-full px-2.5 py-0.5">
                    {study.label}
                  </span>
                )}
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-gold mb-1">Situation</p>
                  <p className="text-muted-foreground leading-relaxed">{study.situation}</p>
                </div>
                {study.challenge && (
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-gold mb-1">Challenge</p>
                    <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                  </div>
                )}
                {(study.howHelped || study.approach) && (
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-gold mb-1">
                      {study.howHelped ? "How David Helped" : "Approach"}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">{study.howHelped || study.approach}</p>
                  </div>
                )}
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-gold mb-1">Outcome</p>
                  <p className="text-foreground leading-relaxed font-medium">{study.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showCTA && (
          <div className="mt-14 text-center">
            <div className="premium-divider mb-8">
              <span className="premium-divider-dot" />
            </div>
            <h3 className="font-serif text-2xl md:text-[1.7rem] text-foreground font-semibold mb-4">
              A Clear Next Step
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              If you're dealing with a situation like this, a short conversation can help bring clarity.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="lg" className="px-10 py-4 h-auto text-base">
                <img src={iconPhone3d} alt="" aria-hidden="true" className="w-5 h-5 mr-2 object-contain shrink-0" />
                Schedule a Consultation
              </Button>
            </Link>
            <p className="text-muted-foreground/70 text-sm mt-4">
              No pressure. Just practical guidance.
            </p>
          </div>
        )}
      </div>
    </div>
  </section>
);

export default RealClientSituations;
