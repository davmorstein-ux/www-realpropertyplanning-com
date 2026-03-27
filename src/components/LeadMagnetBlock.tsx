import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import GoldCheck3D from "@/components/GoldCheck3D";

const checklist = [
  "Understanding your role and legal authority",
  "Securing and assessing the property",
  "Getting an honest valuation — not an inflated listing pitch",
  "Deciding whether to repair, clean out, or sell as-is",
  "Coordinating with attorneys, co-executors, and family members",
];

const LeadMagnetBlock = () => (
  <section className="py-16 lg:py-20 bg-primary">
    <div className="container px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/20">
          <FileText className="h-8 w-8 text-gold" />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-4">
          Free Guide: The Washington Executor's 10‑Step Checklist for Handling Real Estate
        </h2>
        <p className="text-primary-foreground/75 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          Overwhelmed by the property side of estate administration? This practical checklist covers what most executors, trustees, and families wish they'd known from the start — including:
        </p>

        <ul className="space-y-3 text-left max-w-lg mx-auto mb-10">
          {checklist.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <GoldCheck3D size={18} className="mt-1" />
              <span className="text-primary-foreground/90 text-[15px] leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        <Button
          variant="gold"
          size="lg"
          className="px-10 py-5 h-auto text-lg tracking-wide"
        >
          <FileText className="w-5 h-5 mr-2" />
          Download the Free Checklist
        </Button>
        <p className="text-primary-foreground/50 text-sm mt-4">
          No spam. Just a useful resource you can refer back to anytime.
        </p>
      </div>
    </div>
  </section>
);

export default LeadMagnetBlock;
