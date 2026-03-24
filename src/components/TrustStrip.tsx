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
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
        {trustIndicators.map((indicator, index) => (
          <div key={index} className="flex w-full items-center gap-2 text-base font-medium text-muted-foreground">
            <CheckCircle className="h-4 w-4 min-w-4 shrink-0 text-gold" />
            <span>{indicator}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustStrip;
