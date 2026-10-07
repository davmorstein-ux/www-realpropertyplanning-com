/**
 * Worksheet for /senior-transitions/can-parent-afford-to-stay-home. Starts
 * filled with the page's worked example (src/data/stayHomeCost.ts) so the
 * first view shows a real result; every number is editable. No storage, no
 * network; state starts deterministic so the prerender and hydration match.
 */
import { useState } from "react";
import { EXAMPLE, HOURLY_RATE, WEEKS_PER_MONTH, ASSISTED, AFH } from "@/data/stayHomeCost";
import { COST_SOURCE_LINE } from "@/lib/careTypes";

type Field = keyof typeof EXAMPLE | "rate";

const CSS = `
.shw { background: #fff; border: 1px solid #d3dfe8; border-radius: 14px; padding: 22px; box-shadow: 0 2px 10px rgba(20,40,58,0.06); }
.shw-grid { display: grid; gap: 22px; grid-template-columns: 1fr; }
@media (min-width: 860px) { .shw-grid { grid-template-columns: 1fr 1fr; } }
.shw fieldset { border: 0; margin: 0; padding: 0; min-width: 0; }
.shw legend { font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #25597e; margin: 0 0 10px; }
.shw-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin: 0 0 10px; }
.shw-row label { font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-size: 16px; color: #1c1917; flex: 1 1 auto; }
.shw-in { display: inline-flex; align-items: center; border: 1px solid #b9c9d6; border-radius: 8px; background: #fff; flex: 0 0 130px; }
.shw-in span { padding: 0 0 0 10px; color: #4b5563; font-size: 16px; }
.shw-in input { width: 100%; border: 0; background: transparent; padding: 9px 10px; font-size: 16px; font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-variant-numeric: tabular-nums; color: #14283a; outline: none; }
.shw-in:focus-within { border-color: #25597e; box-shadow: 0 0 0 3px rgba(37,89,126,0.18); }
.shw-out { margin-top: 22px; border-top: 1px solid #e2e8ee; padding-top: 18px; display: grid; gap: 10px; grid-template-columns: repeat(2, minmax(0,1fr)); }
@media (min-width: 860px) { .shw-out { grid-template-columns: repeat(4, minmax(0,1fr)); } }
.shw-fig { background: #f4f8fb; border-radius: 10px; padding: 12px 14px; }
.shw-fig.gap { background: #fbf1ee; }
.shw-fig.ok { background: #eef7f0; }
.shw-n { font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-size: clamp(22px, 2.6vw, 28px); font-weight: 700; color: #14283a; font-variant-numeric: tabular-nums; line-height: 1.15; }
.shw-l { font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-size: 14px; color: #2b2825; margin-top: 4px; line-height: 1.35; }
.shw-say { font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-size: 17px; line-height: 1.6; color: #1c1917; margin: 16px 0 0; }
.shw-note { font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-size: 13.5px; color: #3f3a35; margin: 10px 0 0; }
.shw-reset { margin-top: 12px; background: none; border: 1px solid #b9c9d6; border-radius: 8px; padding: 7px 14px; font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-size: 14px; color: #14283a; cursor: pointer; }
`;

const usd = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;

const START: Record<Field, number> = { ...EXAMPLE, rate: HOURLY_RATE };

const StayHomeWorksheet = () => {
  const [v, setV] = useState<Record<Field, number>>(START);
  const set = (k: Field) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const n = Number(e.target.value.replace(/[^0-9.]/g, ""));
    setV((old) => ({ ...old, [k]: Number.isFinite(n) ? n : 0 }));
  };
  const housing = v.mortgage + v.propertyTax + v.insurance + v.utilities + v.upkeep;
  const care = v.hoursPerDay * Math.min(v.daysPerWeek, 7) * WEEKS_PER_MONTH * v.rate;
  const total = housing + care;
  const gap = total - v.income;
  const months = gap > 0 ? Math.floor(v.savings / gap) : Infinity;

  const input = (k: Field, label: string, prefix = "$") => (
    <div className="shw-row">
      <label htmlFor={`shw-${k}`}>{label}</label>
      <span className="shw-in">
        {prefix && <span aria-hidden="true">{prefix}</span>}
        <input id={`shw-${k}`} inputMode="decimal" value={String(v[k])} onChange={set(k)} />
      </span>
    </div>
  );

  let verdict: string;
  if (gap <= 0) verdict = `Income covers the monthly cost with about ${usd(-gap)} to spare.`;
  else if (!Number.isFinite(months) || months >= 120)
    verdict = `There is a gap of ${usd(gap)} a month, but savings would cover it for 10 years or more.`;
  else
    verdict = `There is a gap of ${usd(gap)} a month. Savings would cover it for about ${months} months (${(months / 12).toFixed(1)} years).`;

  return (
    <div className="shw">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="shw-grid">
        <div>
        <fieldset>
          <legend>Monthly income and savings</legend>
          {input("income", "Income each month (Social Security, pension, other)")}
          {input("savings", "Savings and investments available")}
        </fieldset>
        <fieldset style={{ marginTop: 18 }}>
          <legend>Housing costs each month</legend>
          {input("mortgage", "Mortgage or rent")}
          {input("propertyTax", "Property tax (yearly bill ÷ 12)")}
          {input("insurance", "Homeowners insurance")}
          {input("utilities", "Utilities")}
          {input("upkeep", "Repairs, yard, upkeep")}
        </fieldset>
        </div>
        <fieldset>
          <legend>Care</legend>
          {input("hoursPerDay", "Hours of paid care a day", "")}
          {input("daysPerWeek", "Days a week", "")}
          {input("rate", "Hourly rate")}
          <p className="shw-note">
            The rate starts at the Washington median, about {usd(HOURLY_RATE)} an hour. Use an agency's quote if you have one.
          </p>
          <button type="button" className="shw-reset" onClick={() => setV(START)}>
            Reset to the example
          </button>
        </fieldset>
      </div>
      <div className="shw-out" aria-live="polite">
        <div className="shw-fig"><div className="shw-n">{usd(care)}</div><div className="shw-l">Care a month</div></div>
        <div className="shw-fig"><div className="shw-n">{usd(housing)}</div><div className="shw-l">Housing a month</div></div>
        <div className="shw-fig"><div className="shw-n">{usd(total)}</div><div className="shw-l">Total to stay home</div></div>
        <div className={`shw-fig ${gap > 0 ? "gap" : "ok"}`}>
          <div className="shw-n">{gap > 0 ? usd(gap) : usd(0)}</div>
          <div className="shw-l">Monthly gap after income</div>
        </div>
      </div>
      <p className="shw-say">
        {verdict} For comparison, Washington's assisted living median is about {usd(ASSISTED.waMonthly)} a month, and this
        site's adult family home estimate is about {usd(AFH.waMonthly)}.
      </p>
      <p className="shw-note">
        Example figures to start; replace them with your parent's own. {COST_SOURCE_LINE}
      </p>
    </div>
  );
};

export default StayHomeWorksheet;
