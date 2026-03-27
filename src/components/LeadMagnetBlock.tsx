import { Button } from "@/components/ui/button";
import { FileText, Users, MapPin, ClipboardList } from "lucide-react";
import GoldCheck3D from "@/components/GoldCheck3D";

const checklist = [
  "Understanding your role, legal authority, and first steps",
  "Securing the property and managing insurance and utilities",
  "Getting an honest valuation — not an inflated listing pitch",
  "Deciding whether to repair, clean out, or sell as-is",
  "Coordinating with attorneys, co-executors, and family members",
  "Managing the sale timeline alongside probate proceedings",
];

const whoItsFor = [
  { icon: ClipboardList, label: "Executors & personal representatives" },
  { icon: Users, label: "Trustees, heirs & beneficiaries" },
  { icon: MapPin, label: "Out-of-state family members managing WA property" },
];

const LeadMagnetBlock = () => (
  <section className="py-16 lg:py-20 bg-primary">
    <div className="container px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/20">
            <FileText className="h-8 w-8 text-gold" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-4">
            Free Guide: The Washington Executor's 10‑Step Checklist for Handling Real Estate
          </h2>
          <p className="text-primary-foreground/75 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Overwhelmed by the property side of estate administration? This practical, step-by-step checklist covers what most executors, trustees, and families wish they'd known from day one.
          </p>
        </div>

        {/* Who it's for */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {whoItsFor.map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2">
              <item.icon className="w-4 h-4 text-gold shrink-0" />
              <span className="text-primary-foreground/85 text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Checklist items */}
        <ul className="space-y-3 text-left max-w-lg mx-auto mb-10">
          {checklist.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <GoldCheck3D size={18} className="mt-1" />
              <span className="text-primary-foreground/90 text-[15px] leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        <div className="text-center">
          <Button
            variant="gold"
            size="lg"
            className="px-10 py-5 h-auto text-lg tracking-wide"
          >
            <FileText className="w-5 h-5 mr-2" />
            Download the Free Checklist
          </Button>
          <p className="text-primary-foreground/50 text-sm mt-4">
            No email required. Just a useful resource you can save and refer back to anytime.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default LeadMagnetBlock;
