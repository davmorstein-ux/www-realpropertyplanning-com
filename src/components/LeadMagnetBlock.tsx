import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Users, MapPin, ClipboardList, CheckCircle2, Mail } from "lucide-react";
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
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-16 lg:py-20 bg-primary">
      <div className="container px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            {/* Premium 3D icon + badge */}
            <div className="mx-auto mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-gradient-to-b from-gold/25 to-gold/10 border border-gold/30 shadow-[0_4px_16px_rgba(201,168,76,0.18),inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.1)]">
              <FileText className="h-8 w-8 text-gold drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]" />
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
              Overwhelmed by the property side of estate administration? This practical, step-by-step checklist covers what most executors, trustees, and families wish they'd known from day one.
            </p>

            {/* Primary CTA button */}
            <Button
              variant="gold"
              size="lg"
              className="px-8 py-4 h-auto text-base tracking-wide mb-8"
              asChild
            >
              <Link to="/resources/washington-executors-10-step-checklist">
                <FileText className="w-5 h-5 mr-2" />
                Get the Free Checklist
              </Link>
            </Button>
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

          {/* Form / Download area */}
          <div id="checklist-form" className="max-w-md mx-auto">
            {submitted ? (
              <div className="text-center bg-primary-foreground/10 rounded-xl p-8">
                <CheckCircle2 className="w-10 h-10 text-gold mx-auto mb-4" />
                <p className="text-primary-foreground font-serif text-xl font-semibold mb-2">
                  Check your inbox
                </p>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  The checklist is on its way. While you wait, explore our{" "}
                  <Link to="/guides/what-executors-should-do" className="text-gold underline underline-offset-4">executor guide</Link>{" "}
                  for additional step-by-step help.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-foreground/40" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      required
                      className="w-full rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 pl-10 pr-4 py-3.5 text-primary-foreground text-[15px] placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/50 transition"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    className="px-6 py-3.5 h-auto text-base tracking-wide shrink-0"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Send Checklist
                  </Button>
                </div>
                <p className="text-primary-foreground/45 text-xs text-center leading-relaxed">
                  Free and instant. No spam — just a practical resource from a broker who works with executors every day.
                </p>
              </form>
            )}
          </div>

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
