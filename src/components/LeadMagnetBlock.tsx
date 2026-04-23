import { Button } from "@/components/ui/button";
import { FileText, Users, MapPin, ClipboardList } from "lucide-react";
import GoldCheck3D from "@/components/GoldCheck3D";
import { Link } from "react-router-dom";

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

const LeadMagnetBlock = () => {

  return (
    <section className="py-16 lg:py-20 bg-primary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            {/* Premium 3D icon + badge */}
            <div
              className="mx-auto mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-full relative overflow-hidden"
              style={{
                background: "linear-gradient(to bottom, #f5c842 0%, #c49a1a 100%)",
                border: "1px solid rgba(255,255,255,0.2)",
                boxShadow: "0 8px 16px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.3)",
              }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-2 top-1 h-3 rounded-full"
                style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.45), rgba(255,255,255,0))" }}
              />
              <FileText className="h-8 w-8 text-primary drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] relative z-10" />
            </div>

            <div className="inline-flex items-center justify-center mb-4">
              <span className="inline-block px-5 py-1.5 rounded-full text-gold font-bold tracking-[0.18em] uppercase text-xs bg-gradient-to-b from-gold/15 to-gold/5 border border-gold/25 shadow-[0_2px_8px_rgba(201,168,76,0.12),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.08)]">
                Free Resource
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-4">
              The Washington Executor's 10‑Step Checklist for Handling Real Estate
            </h2>
            <p className="text-primary-foreground/75 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
              The property side of estate administration catches most people off guard. This step-by-step checklist covers the things executors, trustees, and families tell us they wish someone had explained from the beginning.
            </p>

            {/* Primary CTA button */}
            <Link to="/resources/washington-executors-10-step-checklist" className="inline-block mb-8">
              <Button variant="gold" size="lg" className="px-8 py-4 h-auto text-base tracking-wide">
                <FileText className="w-5 h-5 mr-2" />
                Get the Free Checklist
              </Button>
            </Link>
          </div>

          {/* Who it's for */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {whoItsFor.map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-primary-foreground/10 rounded-full pl-1.5 pr-4 py-1.5">
                <span
                  aria-hidden="true"
                  className="relative flex h-7 w-7 items-center justify-center rounded-full overflow-hidden shrink-0"
                  style={{
                    background: "linear-gradient(to bottom, #f5c842 0%, #c49a1a 100%)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.3)",
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-1 top-0.5 h-1.5 rounded-full"
                    style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(255,255,255,0))" }}
                  />
                  <item.icon className="w-3.5 h-3.5 text-primary relative z-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]" />
                </span>
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

          {/* Related guides */}
          <div className="mt-10 pt-8 border-t border-primary-foreground/10">
            <p className="text-primary-foreground/50 text-xs font-bold uppercase tracking-widest mb-4 text-center">Related Guides</p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              <Link to="/guides/what-executors-should-do" className="text-primary-foreground/70 hover:text-gold text-sm underline underline-offset-4 transition-colors">What Executors Should Do First</Link>
              <Link to="/guides/inherited-house-washington" className="text-primary-foreground/70 hover:text-gold text-sm underline underline-offset-4 transition-colors">Inherited House Guide</Link>
              <Link to="/guides/how-probate-real-estate-works" className="text-primary-foreground/70 hover:text-gold text-sm underline underline-offset-4 transition-colors">How Probate Sales Work</Link>
              <Link to="/guides/out-of-state-families" className="text-primary-foreground/70 hover:text-gold text-sm underline underline-offset-4 transition-colors">Out-of-State Coordination</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetBlock;
