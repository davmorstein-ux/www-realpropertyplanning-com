/**
 * "When the executor isn't acting" for /washington-probate-guide/heir
 * (Question Map step 6, Oct 4, 2026). Checked Oct 4, 2026 against the
 * statute text:
 *   - RCW 11.28.237  notice to heirs within 20 days of appointment
 *   - RCW 11.28.120  if those entitled don't petition for letters of
 *                    administration within 40 days of the death, the court may
 *                    appoint a principal creditor or another suitable person
 *   - RCW 11.68.065  a beneficiary not yet fully paid may petition for a
 *                    status report, one year after appointment or the last report
 *   - RCW 11.68.070  a party may petition when a nonintervention personal
 *                    representative breaches a duty, exceeds or abuses their
 *                    authority, or fails to execute the trust faithfully;
 *                    remedies include restricting powers and removal
 *   - RCW 11.28.250  letters may be revoked for waste, mismanagement, fraud,
 *                    incompetence, leaving the state, or wrongful neglect
 *   - RCW 11.68.110  30 days after a declaration of completion to petition,
 *                    including to compel closing the estate
 * Procedure is left to the heir's attorney; nothing here is framed as a
 * deadline the heir must meet except where the statute sets one.
 */
const rcw = (cite: string) => `https://app.leg.wa.gov/RCW/default.aspx?cite=${cite}`;
const R = ({ cite }: { cite: string }) => (
  <a href={rcw(cite)} target="_blank" rel="noopener noreferrer">
    RCW {cite}
  </a>
);

const CSS = `
.ena-sec { padding: 2.5rem 16px; background: #ffffff; }
.ena-in { max-width: 860px; margin: 0 auto; }
.ena-in p { font-size: 18px; line-height: 1.65; color: #1f2933; margin: 0 0 1rem; }
.ena-steps { list-style: none; counter-reset: s; margin: 1.25rem 0; padding: 0; display: grid; gap: 0.85rem; }
.ena-steps li { counter-increment: s; position: relative; background: #fff; border: 1px solid #e3d9cc; border-radius: 10px; padding: 1rem 1.25rem 1rem 3.4rem; font-size: 17px; line-height: 1.6; color: #1f2933; }
.ena-steps li::before { content: counter(s); position: absolute; left: 1rem; top: 1rem; width: 1.7rem; height: 1.7rem; border-radius: 999px; background: #25597e; color: #fff; font-weight: 700; font-size: 15px; display: flex; align-items: center; justify-content: center; }
.ena-note { background: #f7f4ef; border-left: 5px solid #25597e; border-radius: 8px; padding: 1rem 1.25rem; }
.ena-src.ena-src { font-size: 14px !important; color: #3d4a55 !important; }
.ena-sec a { color: #9e1f2b; font-weight: 600; text-decoration: underline; text-underline-offset: 3px; }
`;

const ExecutorNotActing = () => (
  <section className="ena-sec" aria-labelledby="executor-not-acting">
    <style dangerouslySetInnerHTML={{ __html: CSS }} />
    <div className="ena-in">
      <h2 id="executor-not-acting" className="prp-h2">When the executor isn't acting</h2>
      <p>
        Estates take time, and silence is not always neglect. But an heir has more options than waiting, and they
        escalate in a sensible order.
      </p>
      <ol className="ena-steps">
        <li>
          <strong>Check what has been filed.</strong> The superior court clerk in the county of the probate can tell
          you whether a probate was opened and who was appointed. A personal representative must send heirs written
          notice within 20 days of being appointed, so if you never received one, ask why.
        </li>
        <li>
          <strong>Ask in writing.</strong> A short, polite letter asking for the inventory, the plan for the house and a
          rough timeline is the cheapest first step. Keep copies of everything.
        </li>
        <li>
          <strong>Ask for a status report.</strong> In an estate with nonintervention powers, a beneficiary who has not
          been paid in full can ask the court to order a report on the estate's status once a year has passed since the
          appointment or the last report.
        </li>
        <li>
          <strong>Ask the court to step in.</strong> If the personal representative has breached a duty, abused their
          authority or wrongfully neglected the estate, an heir can petition the court, which can restrict their powers,
          remove them and appoint someone else, or order other relief.
        </li>
      </ol>
      <p className="ena-note">
        <strong>If no one has opened probate at all:</strong> where there is no will and the family members with
        priority do not petition within 40 days of the death, the court may appoint someone else, so an heir is not
        stuck waiting. With a will, the person named as executor has no authority until the court appoints them. In
        either case, a probate attorney can tell you how to get the estate opened.
      </p>
      <p>
        <strong>At the end:</strong> when the personal representative files a declaration of completion, you have 30
        days to ask the court to review the fees or to compel the personal representative to close the estate.
      </p>
      <p className="ena-src">
        Sources: <R cite="11.28.237" /> (notice to heirs); <R cite="11.28.120" /> (40-day rule);{" "}
        <R cite="11.68.065" /> (status report); <R cite="11.68.070" /> (petition against a nonintervention
        personal representative); <R cite="11.28.250" /> (removal); <R cite="11.68.110" /> (declaration of
        completion).
      </p>
    </div>
  </section>
);

export default ExecutorNotActing;
