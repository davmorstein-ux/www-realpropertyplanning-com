import { Link } from "react-router-dom";

interface CaseStudy {
  title: string;
  situation: string;
  approach: string;
  outcome: string;
}

interface RealClientSituationsProps {
  studies: CaseStudy[];
  background?: "bg-background" | "bg-secondary";
}

const RealClientSituations = ({ studies, background = "bg-background" }: RealClientSituationsProps) => (
  <section className={`py-16 lg:py-24 ${background}`}>
    <div className="container px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl text-foreground font-semibold mb-4">
          Real Client Situations
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10">
          Every situation is different. Here are a few examples of how David has helped clients navigate complex property transitions.
        </p>
        <div className="space-y-6">
          {studies.map((study, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h3 className="font-serif text-xl text-foreground font-semibold mb-5">
                {study.title}
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-gold mb-1">Situation</p>
                  <p className="text-muted-foreground leading-relaxed">{study.situation}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-gold mb-1">Approach</p>
                  <p className="text-muted-foreground leading-relaxed">{study.approach}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-gold mb-1">Outcome</p>
                  <p className="text-foreground leading-relaxed font-medium">{study.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default RealClientSituations;
