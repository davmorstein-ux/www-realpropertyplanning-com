/**
 * Two sections for /sell-house-fund-senior-living (Question Map step 6, Oct 4,
 * 2026; brief priorities #1 and #2):
 *   - Move first, or sell first?  (a decision guide)
 *   - Paying for care until the house sells  (with a worked example)
 *
 * Sources: the IRC 121 and WAC 182-513-1350 points repeat this page's own FAQ,
 * which cites them; the reverse-mortgage 12-month point is on
 * /lenders-and-financing-specialists; care costs come from careTypes.ts.
 * Financing options are described generally, without rates or promises.
 */
import { Link } from "react-router-dom";
import { CARE_TYPES, formatCurrency } from "@/lib/careTypes";

const AL = CARE_TYPES.find((c) => c.id === "assisted-living")!;

const CSS = `
.mos-sec { padding: 3.75rem 0; }
.mos-sec.alt { background: #faf8f4; }
.mos-in { max-width: 960px; margin: 0 auto; padding: 0 1.5rem; }
.mos-h2.mos-h2 { font-family: 'DM Sans', system-ui, sans-serif; font-size: clamp(28px, 3vw, 38px) !important; font-weight: 700; color: #1c1917 !important; margin: 0 0 0.75rem !important; text-align: center; line-height: 1.2; }
.mos-lead.mos-lead { font-size: 18px !important; line-height: 1.65 !important; color: #1f2933 !important; max-width: 760px; margin: 0 auto 2rem !important; text-align: center; }
.mos-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
@media (max-width: 760px) { .mos-grid { grid-template-columns: 1fr; } }
.mos-card { background: #fff; border: 1px solid #e3d9cc; border-top: 5px solid var(--c); border-radius: 12px; padding: 1.4rem 1.5rem; }
.mos-card h3.mos-h3 { font-family: 'DM Sans', system-ui, sans-serif; font-size: 22px !important; font-weight: 700; color: #1c1917 !important; margin: 0 0 0.8rem !important; }
/* Each reason is its own framed tile so the points don't run together
   (owner, Oct 4, 2026). */
.mos-card ul { margin: 0; padding: 0; list-style: none !important; display: grid; gap: 0.7rem; }
.mos-card li { font-size: 17px; line-height: 1.55; color: #1f2933; margin: 0; padding: 0.8rem 1rem 0.8rem 1.1rem;
  background: color-mix(in srgb, var(--c) 6%, #ffffff); border: 1px solid color-mix(in srgb, var(--c) 28%, #ffffff);
  border-left: 4px solid var(--c); border-radius: 8px; }
.mos-both { margin-top: 1.5rem; background: #fff; border: 1px solid #e3d9cc; border-radius: 12px; padding: 1.4rem 1.5rem; }
.mos-both h3.mos-h3 { font-family: 'DM Sans', system-ui, sans-serif; font-size: 20px !important; font-weight: 700; color: #1c1917 !important; margin: 0 0 0.7rem !important; }
.mos-both p { font-size: 17px; line-height: 1.6; color: #1f2933; margin: 0 0 0.7rem; }
.mos-list { display: grid; gap: 0.9rem; }
.mos-opt { background: #fff; border: 1px solid #e3d9cc; border-left: 5px solid #1f4058; border-radius: 10px; padding: 1.1rem 1.35rem; }
.mos-opt h3.mos-h3 { font-family: 'DM Sans', system-ui, sans-serif; font-size: 19px !important; font-weight: 700; color: #1c1917 !important; margin: 0 0 0.35rem !important; }
.mos-opt p { font-size: 17px; line-height: 1.6; color: #1f2933; margin: 0; }
.mos-ex { margin-top: 1.5rem; background: #fff; border: 2px solid #c9a24a; border-radius: 14px; padding: 1.5rem 1.6rem; }
.mos-ex p { font-size: 17.5px; line-height: 1.65; color: #1c1917; margin: 0 0 0.7rem; }
.mos-ex p:last-child { margin-bottom: 0; }
.mos-src { font-size: 14px !important; color: #3d4a55 !important; margin-top: 0.8rem !important; }
.mos-sec a { color: #9e1f2b; font-weight: 600; text-decoration: underline; text-underline-offset: 3px; }
`;

export const MoveOrSellFirst = () => (
  <>
    <style dangerouslySetInnerHTML={{ __html: CSS }} />
    <section className="mos-sec alt" aria-labelledby="move-or-sell-first">
      <div className="mos-in">
        <h2 id="move-or-sell-first" className="mos-h2">Move first, or sell first?</h2>
        <p className="mos-lead">
          There is no single right order. It turns on three things: how safe your parent is at home today, whether
          the move can be paid for before the house sells, and how hard a sale would be on them while they still
          live there.
        </p>
        <div className="mos-grid">
          <div className="mos-card" style={{ ["--c" as string]: "#1f4058" }}>
            <h3 className="mos-h3">Move first when…</h3>
            <ul>
              <li>Staying home is no longer safe, or a hospital discharge or an opening at the right place sets the date.</li>
              <li>The first months of care can be paid for without the sale: savings, income, or one of the options below.</li>
              <li>Showings and a for-sale sign would upset your parent. An empty house is also easier to clear, repair and show.</li>
            </ul>
          </div>
          <div className="mos-card" style={{ ["--c" as string]: "#8a4214" }}>
            <h3 className="mos-h3">Sell first when…</h3>
            <ul>
              <li>The proceeds are needed to pay for the move or the first months of care.</li>
              <li>Your parent can live safely at home in the meantime, with help if needed.</li>
              <li>
                A short rent-back can be negotiated with the buyer, so your parent stays a few weeks after closing and
                moves once, straight to the new home.
              </li>
            </ul>
          </div>
        </div>
        <div className="mos-both">
          <h3 className="mos-h3">Two things to check either way</h3>
          <p>
            <strong>Capital gains.</strong> The federal exclusion of up to $250,000 of gain ($500,000 for a married
            couple) requires living in the home two of the five years before the sale, or one of those five years for
            a parent who moved into a licensed care facility because they could no longer care for themselves. Moving
            out first does not lose it, as long as the sale closes while those years still fall inside the five-year
            window. A CPA can confirm the dates.
          </p>
          <p>
            <strong>Medicaid.</strong> While your parent intends to return home, the house is usually an exempt asset
            for Apple Health long-term care; once it sells, the cash counts toward the asset limit. If Medicaid is
            likely in the next few years, talk to an elder law attorney before listing.
          </p>
          <p className="mos-src">Sources: 26 U.S.C. § 121, including § 121(d)(7); WAC 182-513-1350. Both are covered in this page's questions below.</p>
        </div>
      </div>
    </section>

    <section className="mos-sec" aria-labelledby="paying-until-it-sells">
      <div className="mos-in">
        <h2 id="paying-until-it-sells" className="mos-h2">Paying for care until the house sells</h2>
        <p className="mos-lead">
          When the move comes first, there is a gap of a few months between move-in and closing. These are the usual
          ways families cover it. Each has costs; compare them with a financial planner or lender before choosing.
        </p>
        <div className="mos-list">
          <div className="mos-opt">
            <h3 className="mos-h3">Savings and income first</h3>
            <p>Social Security, pensions and savings often cover the gap on their own. Ask the community what it needs up front; many want the first month and a move-in fee before the move.</p>
          </div>
          <div className="mos-opt">
            <h3 className="mos-h3">A bridge loan</h3>
            <p>A short-term loan secured by the house and repaid from the sale at closing. It is quick, but costs more in interest and fees than a mortgage, and the lender will look closely at how and when the house will sell.</p>
          </div>
          <div className="mos-opt">
            <h3 className="mos-h3">A home equity line of credit</h3>
            <p>Usually cheaper than a bridge loan, but lenders generally open one only on a home the owner lives in, so it has to be set up before the move, not after.</p>
          </div>
          <div className="mos-opt">
            <h3 className="mos-h3">A loan from family</h3>
            <p>A child lends the money and is repaid from the sale. Write it down, with the amount and repayment terms, so it is clearly a loan. If Medicaid may be needed later, ask an elder law attorney how to set it up.</p>
          </div>
          <div className="mos-opt">
            <h3 className="mos-h3">A reverse mortgage? Usually not for this</h3>
            <p>
              A reverse mortgage generally comes due once the last borrower has been away from the home for more than
              12 consecutive months in a care facility, so it suits a parent staying home rather than one moving out.{" "}
              <Link to="/retirement-reverse-mortgage">How reverse mortgages work</Link>.
            </p>
          </div>
        </div>

        <div className="mos-ex">
          <p>
            <strong>Example.</strong> Mom owns a $900,000 house with no mortgage and has $75,000 in savings. At the
            Washington assisted living median of about {formatCurrency(AL.waMonthly)} a month, her savings alone cover
            about {Math.round(75000 / AL.waMonthly)} months, before counting her Social Security. That is usually enough
            to move first and sell without hurrying.
          </p>
          <p>
            After selling costs, the proceeds would pay for most of a decade of assisted living at that median. For her
            family the real question is less whether she can afford care than how the money should be held and spent,
            and whether Medicaid is ever likely. That is a conversation for a financial planner and, if Medicaid may
            come into it, an elder law attorney.
          </p>
          <p className="mos-src">Illustrative only. Care cost: CareScout Cost of Care Survey, 2025 Washington median.</p>
        </div>
      </div>
    </section>
  </>
);

export default MoveOrSellFirst;
