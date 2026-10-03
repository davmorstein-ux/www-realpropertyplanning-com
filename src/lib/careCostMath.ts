/**
 * Cost-of-care projections (Oct 3, 2026).
 *
 * The calculator used to take the monthly cost in the year care begins and
 * multiply it by the number of years, so a 3-year stay ignored the increase in
 * years two and three while the caption said costs rise every year. Example,
 * assisted living at $7,546 a month starting now, 3.5% a year, 3 years:
 *   old: 7,546 × 12 × 3                         = $271,656
 *   new: 7,546 × 12 × (1 + 1.035 + 1.035²)      = $281,275
 * Each year of care is priced at that year's cost.
 */

/** Monthly cost in a given year from now, growing at `ratePct` a year. */
export const monthlyIn = (monthlyToday: number, ratePct: number, yearsFromNow: number) =>
  monthlyToday * Math.pow(1 + ratePct / 100, yearsFromNow);

/** Total cost of `years` years of care starting `yearsOut` years from now. */
export const totalCareCost = (monthlyToday: number, ratePct: number, yearsOut: number, years: number) => {
  let total = 0;
  for (let i = 0; i < years; i++) total += monthlyIn(monthlyToday, ratePct, yearsOut + i) * 12;
  return total;
};

/** Mix a #rrggbb colour toward black (amount > 0) or white (amount < 0). */
export const shade = (hex: string, amount: number) => {
  const n = parseInt(hex.replace("#", ""), 16);
  const ch = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) =>
    Math.round(amount >= 0 ? c * (1 - amount) : c + (255 - c) * -amount)
  );
  return `#${ch.map((c) => c.toString(16).padStart(2, "0")).join("")}`;
};
