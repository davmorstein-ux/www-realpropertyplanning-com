import { CheckCircle } from "lucide-react";

const trustIndicators = [
  "David Stein — Washington Real Estate Broker",
  "Washington State Certified Residential Appraiser",
  "20+ Years of Experience",
  "Serving King, Snohomish, Pierce & Kitsap Counties",
];

const TrustStrip = () => (
  <section data-nosnippet className="bg-secondary border-y border-border py-5">
    <div className="container px-6 lg:px-8">
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
        {trustIndicators.map((indicator, index) => (
          <div key={index} className="flex items-center gap-2 text-base text-muted-foreground font-medium">
            <CheckCircle className="w-4 h-4 min-w-4 text-gold shrink-0" />
            <span>{indicator}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustStrip;
