import { Link } from "react-router-dom";
import { privatePayBandForPlace } from "@/data/afhPrivatePayRanges";
import { medicaidRange, monthly, rateRegionForCounty } from "@/data/afhMedicaidRates";

/**
 * A short card that points a buyer or seller from a listing, city page, or the
 * sold page into the ROI calculator and valuation estimator, with the market
 * (and licensed bed count, when known) carried in the URL so the revenue
 * builder opens pre-filled. Shows the local per-resident rate context so the
 * link is a natural next step rather than a bare "see calculators".
 */

const money = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

interface Props {
  /** City the visitor is looking at, if any; drives King County submarkets. */
  city?: string | null;
  /** County for DSHS purposes. */
  county: string;
  /** Licensed bed count when known (from the DSHS record), 1–8. */
  beds?: number | null;
  /** Which calculator to lead with. */
  lead?: "buyer" | "seller" | "both";
  /** Override the eyebrow/heading for the page it sits on. */
  heading?: string;
}

const AFHRunTheNumbers = ({ city, county, beds, lead = "both", heading }: Props) => {
  const band = privatePayBandForPlace(city, county);
  const region = rateRegionForCounty(county);
  const med = medicaidRange(region);
  const qs = new URLSearchParams();
  if (band.confirmed) qs.set("market", band.market);
  if (beds && beds >= 1 && beds <= 8) qs.set("beds", String(beds));
  const q = qs.toString() ? `?${qs.toString()}` : "";
  const where = band.confirmed ? band.label : `${county} County`;

  return (
    <div className="rounded-xl border-2 border-[#0a5648]/30 bg-white px-6 py-6 md:px-8 md:py-7 shadow-sm">
      <p className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-2">Run the numbers</p>
      <h2 className="font-serif text-[24px] md:text-[28px] font-semibold text-navy leading-tight mb-3">
        {heading ?? `What an adult family home ${city ? `in ${city}` : `in ${county} County`} can earn`}
      </h2>
      <p className="text-foreground text-[17px] md:text-[18px] leading-relaxed mb-4">
        {band.confirmed ? (
          <>
            A private-pay resident in {where} typically pays{" "}
            <strong>
              {money(band.low)} – {money(band.high)}
            </strong>{" "}
            a month for a private room with moderate care; heavier care runs above that.{" "}
          </>
        ) : (
          <>Private-pay ranges for {where} are not yet published; ask each home for its rate sheet. </>
        )}
        DSHS pays a Medicaid home in {county} County {money(monthly(med.minDaily))} – {money(monthly(med.maxDaily))} a
        month depending on care level. The calculators below turn a bed mix into gross revenue{beds ? ` for ${beds} licensed beds` : ""},
        then into cash flow or a value estimate.
      </p>
      <div className="flex flex-wrap gap-x-6 gap-y-3 text-[17px] md:text-[18px]">
        {lead !== "seller" && (
          <Link to={`/afh-club/afh-roi-calculator${q}`} className="text-accent underline underline-offset-4 font-semibold">
            Buying? Model cash-on-cash return →
          </Link>
        )}
        {lead !== "buyer" && (
          <Link to={`/afh-club/afh-valuation-estimator${q}`} className="text-accent underline underline-offset-4 font-semibold">
            Selling? Estimate what it's worth →
          </Link>
        )}
        <Link to="/afh-club/cost-by-location" className="text-accent underline underline-offset-4 font-semibold">
          Full rate lookup by city and county →
        </Link>
      </div>
    </div>
  );
};

export default AFHRunTheNumbers;
