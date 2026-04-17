import GoldCheck3D from "@/components/GoldCheck3D";

const qualities = [
  {
    label: "Clear Communication",
    desc: "Regular updates and plain-language explanations — no jargon, no surprises.",
  },
  {
    label: "Defensible, Condition-Based Pricing",
    desc: "Pricing grounded in certified appraisal methodology, not inflated listing pitches.",
  },
  {
    label: "Calm Under Pressure",
    desc: "Steady guidance through emotional family dynamics, tight court timelines, and complex logistics.",
  },
  {
    label: "Reliable Coordination",
    desc: "Manages vendors, cleanout, repairs, inspections, and sale details from start to close.",
  },
  {
    label: "Out-of-State Accessibility",
    desc: "Serves as the local point of contact for remote executors, trustees, and family members.",
  },
  {
    label: "Fiduciary & Legal Alignment",
    desc: "Respects attorney workflows, court processes, and the documentation obligations of executors and trustees.",
  },
];

interface ProfessionalConfidenceProps {
  heading?: string;
  intro?: string;
  background?: "bg-secondary" | "bg-background" | "bg-cream";
}

const ProfessionalConfidence = ({
  heading = "Why Professionals and Families Trust This Process",
  intro = "Attorneys, executors, and families consistently describe the same qualities when recommending Real Property Planning:",
  background = "bg-secondary",
}: ProfessionalConfidenceProps) => (
  <section className={`py-16 lg:py-20 ${background}`}>
    <div className="container px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl text-foreground font-semibold mb-3">
          {heading}
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          {intro}
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {qualities.map((q, i) => (
            <div key={i} className="flex items-start gap-3">
              <GoldCheck3D size={18} className="mt-1 shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-base">{q.label}</p>
                <p className="text-muted-foreground text-base leading-relaxed">{q.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProfessionalConfidence;
