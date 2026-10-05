/**
 * "What Happens to the Mortgage When Someone Dies in Washington"
 * (Question Map step 7, Oct 4, 2026; audit questions Q046, Q047, Q050–Q053).
 *
 * Checked Oct 4, 2026 against the primary sources:
 *   12 U.S.C. 1701j-3(d) and 12 CFR 591.5(b)  due-on-sale clauses may not be
 *        enforced on: a transfer on the death of a joint tenant; a transfer to a
 *        relative resulting from the borrower's death, where the relative
 *        occupies or will occupy the home; a transfer where the spouse or
 *        children become owners; a transfer into a living trust where the
 *        borrower remains beneficiary and occupant
 *   12 CFR 1024.38(b)(1)(vi)  on notice of a death or of a potential successor
 *        in interest, the servicer must promptly communicate, say which
 *        documents it needs, and promptly confirm (or not)
 *   Successor need not assume the loan to be confirmed; a confirmed successor
 *        can apply for loss mitigation (2016 CFPB amendments; secondary
 *        summary checked, Jimerson Birr, May 2021)
 *   CFPB Ask CFPB #242 and HUD "Inheriting a Home Secured by an FHA-insured
 *        HECM" (Sept 2019)  reverse mortgage: pay off and keep, sell and keep
 *        the difference, sell for at least 95% of appraised value when
 *        underwater (insurance covers the rest), or deed in lieu; 30 days
 *        after the due-and-payable notice, extensions possible (HUD: 90-day
 *        extensions while actively selling or refinancing; CFPB: possibly up
 *        to six months); taxes and insurance stay the estate's job until title
 *        transfers
 * Personal liability and community property are framed as questions for an
 * attorney, not as rules. Used by the page and by vite.config.ts (prerender),
 * so no React and no "@/" imports.
 */
import { rcw } from "./probateGlossary";

export const MORTGAGE_AFTER_DEATH = {
  PATH: "/guides/mortgage-after-death-washington",
  TITLE: "What Happens to the Mortgage When Someone Dies in Washington",
  SHORT_TITLE: "The Mortgage After a Death",
  DESCRIPTION:
    "The loan does not end at death. Who keeps paying it, how to become a successor in interest with the servicer, when a family member can keep the existing loan, who is personally responsible, and what happens to a reverse mortgage. For Washington executors, heirs and surviving spouses.",
  PUBLISHED: "2026-10-04",
  REVIEWED: "2026-10-04",
  SHORT_ANSWER:
    "The mortgage does not go away when the owner dies. It stays a lien on the house, and the payments need to keep being made, usually by the estate, until the house is sold or the loan is paid off at closing. Tell the servicer about the death and ask to be confirmed as a successor in interest, so it will talk to you about the account. Federal law generally stops the lender from calling the loan due because the house passed to a spouse, a child, or a relative who lives in it, so that person can often keep the existing loan.",
};

const CFPB_242 = {
  label: "CFPB: reverse mortgages after death",
  href: "https://www.consumerfinance.gov/ask-cfpb/with-a-reverse-mortgage-loan-can-my-heirs-keep-or-sell-my-home-after-i-die-en-242/",
};
const HUD_HECM = {
  label: "HUD: inheriting a home with a HECM",
  href: "https://www.hud.gov/sites/dfiles/SFH/documents/inheriting_hecm_09-23-19.pdf",
};
const REG_X = { label: "12 CFR 1024.38", href: "https://www.consumerfinance.gov/rules-policy/regulations/1024/38/" };
const GARN = { label: "12 U.S.C. § 1701j-3", href: "https://www.law.cornell.edu/uscode/text/12/1701j-3" };
const CFR_591 = { label: "12 CFR 591.5", href: "https://www.ecfr.gov/current/title-12/chapter-V/part-591/section-591.5" };

export interface MadSection {
  id: string;
  heading: string;
  paras: string[];
  cites: { label: string; href: string }[];
}

export const MAD_SECTIONS: MadSection[] = [
  {
    id: "the-loan-continues",
    heading: "The loan does not end at death",
    paras: [
      "A mortgage (in Washington, usually a deed of trust) is secured by the house, so it stays attached to the house after the owner dies. Nothing is forgiven, and interest keeps running.",
      "While the estate is open, the personal representative normally keeps the payments current from estate funds, along with the property taxes and insurance. When the house sells, the escrow company pays the loan off from the sale proceeds at closing, and what is left goes to the estate.",
      "If the payments stop, the loan falls behind like any other: late fees first, and eventually foreclosure, which can cost the family the equity. That is why the mortgage belongs on the executor's first-week list, next to securing and insuring the house.",
    ],
    cites: [],
  },
  {
    id: "successor-in-interest",
    heading: "Tell the servicer, and ask to be confirmed as a successor in interest",
    paras: [
      "Servicers will not discuss a loan with just anyone, so the first call is to say the borrower has died and that you now own, or will own, the house. Federal servicing rules require the servicer to communicate promptly with a potential successor in interest, tell you which documents it needs to confirm your identity and ownership (usually a death certificate plus the will, letters, deed or trust that shows how the house passed), and then promptly tell you whether you have been confirmed.",
      "Once confirmed, a successor in interest can get information about the account and apply for help, such as a repayment plan or a loan modification, if the payments become hard to keep up. You do not have to take over the loan to be confirmed.",
      "Send documents in a way you can track, keep copies, and write down the date and name of everyone you speak with.",
    ],
    cites: [REG_X],
  },
  {
    id: "keeping-the-loan",
    heading: "Can the bank call the loan due, or can the family keep it?",
    paras: [
      "Most mortgages have a due-on-sale clause that lets the lender demand full payment when the house changes hands. A federal law, the Garn-St Germain Act, bars lenders from using that clause for certain transfers of a home with fewer than five units, including when the house passes on the death of a joint owner, to a relative because of the borrower's death (when that relative lives or will live in the house), to the borrower's spouse or children who become owners, or into a living trust the borrower still lives in and benefits from.",
      "In practice, a surviving spouse, or a child who inherits the house and moves in, can usually keep the existing loan by continuing the payments instead of refinancing. When the existing interest rate is lower than today's, that can be worth a great deal, including in a buyout where one sibling keeps the house.",
      "The protection is narrower when no family member will live there, for example when heirs plan to rent the house out. Then the lender may be able to call the loan due, and selling or refinancing is the usual path. Ask the servicer before deciding.",
    ],
    cites: [GARN, CFR_591],
  },
  {
    id: "who-is-responsible",
    heading: "Who is personally responsible for the debt?",
    paras: [
      "The mortgage is a debt of the person who died, and it is paid from the estate and secured by the house. Children and other heirs are generally not personally responsible for it unless they signed the loan themselves, as a co-borrower or co-signer.",
      "A surviving spouse should ask an attorney. In Washington, a community property state, a debt taken on during the marriage may be a community debt, and how the house passes (a community property agreement, a survivorship deed or probate) changes the answer.",
      "The personal representative is not personally liable for the loan either, but must pay the estate's debts before distributing to heirs. Handing out estate assets first can make the personal representative personally responsible.",
    ],
    cites: [],
  },
  {
    id: "no-cash",
    heading: "When the estate has no cash to make the payments",
    paras: [
      "It is common: the house is the estate's main asset, and the account the payments came from is frozen or empty. Call the servicer early, before a payment is missed if possible, and ask what options it offers while the estate is being settled, such as a short forbearance or a repayment plan.",
      "Heirs sometimes cover the payments themselves to protect the equity. If you do, put it in writing as an advance or loan to the estate, keep proof of every payment, and ask the estate's attorney how it will be repaid from the sale.",
      "The fastest relief is usually a sale. A personal representative with nonintervention powers can sell without a court order once appointed, and the loan is paid off at closing.",
    ],
    cites: [{ label: "RCW 11.68.090", href: rcw("11.68.090") }],
  },
  {
    id: "reverse-mortgage",
    heading: "If there is a reverse mortgage",
    paras: [
      "A reverse mortgage generally becomes due and payable when the last borrower dies. The servicer sends a due-and-payable notice, and the heirs then have 30 days to buy the house, sell it, or turn it over to the lender. The lender may approve 90-day extensions while the family is actively selling or arranging a loan, so call the servicer as soon as the notice arrives.",
      "Heirs can pay off the loan and keep the house, or sell it, repay the loan and keep the difference. If the house is worth less than the loan balance, the loan is satisfied by selling for at least 95 percent of the appraised value; for the federally insured loan (a HECM), the mortgage insurance covers the rest, so the heirs do not owe the shortfall. Another option is to sign the house over to the lender with a deed in lieu of foreclosure.",
      "Until title passes, the property taxes and insurance are still the estate's responsibility.",
    ],
    cites: [CFPB_242, HUD_HECM],
  },
];

export const MAD_CHECKLIST: string[] = [
  "Find the latest mortgage statement: the servicer's name and phone number, the loan number, the payment amount and whether taxes and insurance are paid through escrow.",
  "Call the servicer, report the death and ask what documents it needs to confirm you as a successor in interest. Send them in a trackable way and keep copies.",
  "Keep the payments current from estate funds if possible. If not, call the servicer before a payment is missed and ask about forbearance or a repayment plan.",
  "Keep the homeowners insurance in force, and tell the insurer the owner has died.",
  "Decide with the family whether anyone will live in the house and keep the loan, or whether it will be sold.",
  "If there is a reverse mortgage, watch for the due-and-payable notice and respond within 30 days.",
];

export const MAD_FAQS = [
  {
    question: "Do I have to pay my parent's mortgage after they die?",
    answer:
      "Not personally, unless you signed the loan. The estate pays it, and the loan is secured by the house. But if no one keeps up the payments, the lender can eventually foreclose, so the estate or the heir who wants the house usually keeps paying until it is sold or refinanced. A surviving spouse should ask an attorney, because Washington's community property rules can change the answer.",
  },
  {
    question: "Can I keep my mom's mortgage if I inherit the house?",
    answer:
      "Usually, if you will live in it. Federal law generally bars the lender from calling the loan due because the house passed to the borrower's spouse or children, or to a relative because of the borrower's death when that relative lives in the house. Keep the payments current and ask the servicer to confirm you as a successor in interest. If no family member will live there, the lender may be able to require payoff.",
  },
  {
    question: "Will the mortgage company talk to me if the loan is not in my name?",
    answer:
      "It must, once you show you are a successor in interest. Federal servicing rules require the servicer to tell you which documents it needs, such as the death certificate and the will, letters or deed, and to promptly confirm your status. A confirmed successor can get account information and apply for help with payments without first taking over the loan.",
  },
  {
    question: "What happens to a reverse mortgage when the borrower dies?",
    answer:
      "It becomes due. After the servicer's due-and-payable notice, heirs have 30 days to pay it off and keep the house, sell it, or give it to the lender, and extensions are possible while they actively sell. If the house is worth less than the balance on a federally insured reverse mortgage, selling for at least 95 percent of the appraised value satisfies the loan.",
  },
];

/** Plain-text version for the prerender (vite.config.ts). */
export const MAD_PRERENDER_SECTIONS: string[] = [
  ...MAD_SECTIONS.map((s) => `${s.heading} — ${s.paras.join(" ")}`),
  `Checklist — ${MAD_CHECKLIST.join(" ")}`,
  "General information, not legal or financial advice. Real Property Planning does not refer clients to attorneys.",
];
