import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import BackToAFHClub from "@/components/BackToAFHClub";
import ArticleAudioPlayer from "@/components/ArticleAudioPlayer";
import audioAsset from "@/assets/afh-find-a-professional.mp3.asset.json";
import { AFH_FEATURED_SECTIONS, AFH_HEADSHOT_RING, type AFHProfessional } from "@/data/afhProfessionals";
import ArticleCover from "@/components/ArticleCover";

/**
 * One person on the directory grid. Deliberately compact so twelve fit on one
 * page: profession on top (so a visitor knows what the person does before
 * anything else), then headshot, name, license number, phone, email, website,
 * and the company logo. No bio — that lives on the person's own page where
 * there is one. The logo slot is always reserved so cards line up.
 */
/* One line per email address (David, Sept 28 2026; replaces the Sept 22 split at
   the "@"). The text starts at the card's normal 16px and steps down only as far as
   the card's width requires, never below 11px, so short addresses stay full size.
   setProperty(..., "important") because index.css forces every link in <main> to
   16px with !important. Re-fits when the card resizes. */
const FitEmail = ({ email }: { email: string }) => {
  const ref = useRef<HTMLAnchorElement | null>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    const box = el?.parentElement;
    if (!el || !box) return;
    const fit = () => {
      let size = 16;
      el.style.setProperty("font-size", `${size}px`, "important");
      while (el.scrollWidth > box.clientWidth && size > 11) {
        size -= 0.5;
        el.style.setProperty("font-size", `${size}px`, "important");
      }
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(box);
    return () => ro.disconnect();
  }, []);
  return (
    <a ref={ref} href={`mailto:${email}`} className="bg-transparent">
      {email}
    </a>
  );
};

const PersonCard = ({ person, professionLines }: { person: AFHProfessional; professionLines: [string, string] }) => {
  /* The card shows just the domain ("twomaidscleaning.com"); the link still goes to the full address. A path made it too long for the card. */
  const site = person.website?.replace(/^https?:\/\//, "").replace(/^www\./, "").split("/")[0];
  /* Every slot has a fixed height so the same row of every card lines up across the grid
     (David, Sept 22): profession, photo, name, license (kept open even when empty — most
     people will not have one), phone, email on one line (FitEmail), website, logo.
     div/span throughout, not <p>: the site's global p rules add margins. */
  return (
    <div className="rpp-afhpro-card">
      <div className="rpp-afhpro-card-profession">
        <span>{professionLines[0]}</span>
        <span>{professionLines[1]}</span>
      </div>
      <img src={person.photo} alt={person.photoAlt} width={76} height={76} loading="lazy" className="rpp-afhpro-card-photo" />
      <div className="rpp-afhpro-card-name">
        {person.morePath ? <Link to={person.morePath} className="bg-transparent">{person.name}</Link> : person.name}
      </div>
      <div className="rpp-afhpro-card-license">{person.license || "\u00a0"}</div>
      <div className="rpp-afhpro-card-line rpp-afhpro-card-phone">
        {person.phone ? <a href={`tel:${person.phone.replace(/[^\d+]/g, "")}`} className="bg-transparent">{person.phone}</a> : "\u00a0"}
      </div>
      <div className="rpp-afhpro-card-line rpp-afhpro-card-email">
        {person.email ? <FitEmail email={person.email} /> : "\u00a0"}
      </div>
      <div className="rpp-afhpro-card-line rpp-afhpro-card-site">
        {person.website && site ? <a href={person.website} target="_blank" rel="noopener noreferrer" className="bg-transparent">{site}</a> : "\u00a0"}
      </div>
      <div className="rpp-afhpro-card-logo">
        {/* The logo links to the same website as the line above (David, Sept 27 2026). The alt
            text names the destination, because for a linked image it is the link's name. */}
        {person.logo &&
          (person.website ? (
            <a href={person.website} target="_blank" rel="noopener noreferrer" className="bg-transparent rpp-afhpro-logo-link">
              <img src={person.logo} alt={`${person.company || person.name} website (opens in a new tab)`} loading="lazy" />
            </a>
          ) : (
            <img src={person.logo} alt={person.logoAlt || `${person.company} logo`} loading="lazy" />
          ))}
      </div>
    </div>
  );
};

const PROFESSIONAL_CATEGORIES = [
  {
    title: "Real Estate Brokers",
    icon: "🏡",
    description:
      "AFH transactions are unlike standard residential sales. A broker experienced in AFH properties understands DSHS requirements, CHOW procedures, how to value the business component alongside the real estate, and how to coordinate the sale timeline with the licensing process.",
    lookFor: [
      "Experience with CHOW transactions",
      "Understanding of DSHS licensing timelines",
      "Familiarity with AFH valuation beyond residential comps",
      "Network of AFH-related professionals",
    ],
    link: { label: "Real Property Planning — AFH Real Estate Services", href: "/afh-club/real-estate-broker" },
  },
  {
    title: "Bookkeepers",
    icon: "🧾",
    description:
      "An AFH is a small business with payroll, resident billing, Medicaid and private-pay receivables, and expenses that have to be tracked for DSHS, lenders, and tax time. A bookkeeper who already works with care homes keeps the books in a shape a buyer, a lender, or a CPA can rely on.",
    lookFor: [
      "Experience with adult family homes or other licensed care businesses",
      "Payroll and caregiver scheduling records kept alongside the books",
      "Resident billing and Medicaid/private-pay receivables tracking",
      "Monthly financials clean enough to hand to a CPA or a buyer",
    ],
    link: { label: "Bookkeeping for AFH owners", href: "/bookkeeping-services" },
  },
  {
    title: "Photographers",
    icon: "📷",
    description:
      "A care home sells on its rooms, its light and its condition as much as on its numbers. A photographer who has shot licensed homes shows the resident rooms, common areas, and required accessibility features without making the home look institutional, and works around residents and staff.",
    lookFor: [
      "Experience photographing care homes, senior living, or medical settings",
      "Comfortable working around residents and on a care schedule",
      "Interior and exterior sets sized for listing sites and print",
      "Quick turnaround so listing and CHOW timelines line up",
    ],
    link: null,
  },
  {
    title: "House Cleaning",
    icon: "🧹",
    description:
      "An operating home is cleaned around residents, on a schedule, to a standard an inspector or a buyer walking through will notice. A company used to care settings works quietly, on time, and with the products the home allows.",
    lookFor: [
      "Experience in care homes, clinics, or senior living",
      "Staff who are background-checked and consistent week to week",
      "Willing to follow the home's product and infection-control rules",
      "Deep-clean and move-out service for a sale or a room turnover",
    ],
    link: null,
  },
  {
    title: "Water Damage Restoration",
    icon: "💧",
    description:
      "A burst line or a slow leak in an operating home is an emergency twice over: residents cannot simply move out while it dries, and DSHS will expect the home to have stayed safe and sanitary. A restoration company that can dry, contain, and document the work around residents matters more here than in an ordinary house.",
    lookFor: [
      "24-hour response and the equipment to dry in place",
      "Containment that keeps residents' rooms usable during the work",
      "Moisture readings and photos documented for insurance and DSHS",
      "Experience in care homes, clinics, or other occupied buildings",
    ],
    link: null,
  },
  {
    title: "Business Insurance",
    icon: "🛡️",
    description:
      "An adult family home needs general and professional liability, property, workers' compensation for caregivers, and often abuse-and-molestation coverage. A buyer cannot take over the seller's policies, so coverage has to be placed before the CHOW date.",
    lookFor: [
      "Writes adult family homes or assisted living, not just homeowners",
      "Knows which carriers will bind care-home risk in Washington",
      "Can quote before closing so the CHOW is not delayed",
      "Explains what DSHS and lenders expect to see on the certificate",
    ],
    link: null,
  },
  {
    title: "SBA Loan Specialists",
    icon: "🏦",
    description:
      "Most AFH purchases that include the business are financed with an SBA 7(a) or 504 loan, which underwrites the home's income as well as the real estate. A lender who has closed AFH deals knows how to present resident revenue, the CHOW timeline, and the owner's role to underwriting.",
    lookFor: [
      "Closed SBA loans on adult family homes or similar care businesses",
      "Comfortable with income from Medicaid and private-pay residents",
      "Can sequence funding with the DSHS change-of-ownership approval",
      "Clear on down payment, guarantees, and what the appraisal must show",
    ],
    link: { label: "How to finance an AFH", href: "/afh-club/how-to-finance-an-afh" },
  },
  {
    title: "Commercial Business Brokers",
    icon: "🤝",
    description:
      "When the business changes hands separately from the building, or the buyer will lease, a commercial business broker values and markets the operation itself: the license, the resident census, the staff, and the contracts. That is different work from selling the real estate.",
    lookFor: [
      "Has sold care businesses, not only restaurants or retail",
      "Values the operation on its census and margins, not the house",
      "Coordinates with the real estate broker when both are sold",
      "Understands that the DSHS license does not transfer with the sale",
    ],
    link: null,
  },
  {
    title: "AFH Management Companies",
    icon: "🏢",
    description:
      "Management companies handle day-to-day operations, staffing, compliance, and administration for AFH owners who want to invest in the business without operating it directly. Services vary widely — some manage everything from licensing to caregiver hiring; others focus on compliance and record-keeping.",
    lookFor: [
      "Washington State operating experience",
      "DSHS compliance track record",
      "Staffing and caregiver management services",
      "Transparent fee structure",
    ],
    link: null,
  },
  {
    title: "CPAs Familiar with AFH Operations",
    icon: "📊",
    description:
      "AFH tax and accounting has unique considerations — business income mixed with residential property, Medicaid rate structures, depreciation on modifications, payroll for caregivers, and licensing fee deductibility. A CPA with AFH experience will save you money and help you avoid costly errors.",
    lookFor: [
      "Experience with Medicaid-contracted small businesses",
      "Understanding of AFH-specific deductions",
      "Payroll services for caregiving staff",
      "Estate and business transition planning",
    ],
    link: { label: "Find a CPA — Resources Page", href: "/resources/cpas-financial-advisors" },
  },
  {
    title: "AFH Inspectors & Compliance Consultants",
    icon: "🔍",
    description:
      "Independent consultants and former DSHS licensors can conduct pre-inspection walkthroughs to identify compliance gaps before an official DSHS inspection. They can also assist with corrective action plans, record-keeping systems, and staff training compliance.",
    lookFor: [
      "DSHS inspection or licensing background",
      "Current knowledge of WAC 388-76",
      "Pre-inspection audit services",
      "Corrective action plan support",
    ],
    link: null,
  },
];

const AFHFindProfessional = () => (
  <>
    <SEOHead
      title="Find an AFH Professional | AFH Club | Real Property Planning"
      description="Professionals who work with Washington adult family homes, each one met with personally: a real estate broker, a bookkeeper, an insurance broker, house cleaning, water damage restoration, and website design and marketing. No one pays to be listed. Plus what to look for when hiring a broker, appraiser, management company, CPA, attorney, or compliance consultant."
      canonical="https://realpropertyplanning.com/afh-club/find-a-professional"
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com" },
        { name: "AFH Club", url: "https://realpropertyplanning.com/afh-club" },
        { name: "Find a Professional", url: "https://realpropertyplanning.com/afh-club/find-a-professional" },
      ]}
    />
    <Header />
    <main id="main-content">
      {/* Hero */}
      <section style={{ background: "#edf0f3", padding: "64px 24px 56px", borderBottom: "3px solid #b13a44" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <ArticleCover src="/afh-professionals-cover.webp" alt="Cover art: AFH Professionals" width={1024} height={1365} />
          <p
            style={{
              fontSize: 15,
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#481216",
              margin: "0 0 14px",
            }}
          >
            AFH Club · Find a Professional
          </p>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 50px)",
              fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
              fontWeight: 700,
              color: "#292521",
              lineHeight: 1.15,
              margin: "0 0 20px",
            }}
          >
            Find an AFH Professional
          </h1>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
              fontWeight: 400,
              color: "#342e28",
              lineHeight: 1.85,
              margin: "0 0 16px",
              maxWidth: 680,
            }}
          >
            Running an Adult Family Home successfully requires a team of specialists who understand the unique
            intersection of residential real estate, small business operations, and DSHS regulation. This page
            introduces professionals met with personally, then explains what to look for when
            choosing each kind of specialist.
          </p>
          <p
            style={{
              fontSize: 18,
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
              fontWeight: 400,
              color: "#1c1917",
              lineHeight: 1.8,
              maxWidth: 680,
            }}
          >
            Listings here are a courtesy. No one pays to be featured, and Real Property Planning receives nothing
            if you hire them. The one exception is noted on the broker's listing below.
          </p>
        </div>
      </section>

      {/* FEATURED PROFESSIONALS (Sept 2026).
          Real people from src/data/afhProfessionals.ts, as one flat grid so a dozen fit
          on the page (David, Sept 22 2026): profession above the headshot, then name,
          phone, email, website. No bios here. Never an empty category, never a
          "coming soon".
          The guide further down (and its audio narration) is unchanged: it explains
          what to look for in each KIND of professional, which is a different job. */}
      <style dangerouslySetInnerHTML={{ __html: `
        .rpp-afhpro h2.rpp-afhpro-h2 { font-size: clamp(24px, 3vw, 32px) !important; line-height: 1.2 !important; margin: 0 0 10px !important; }
        .rpp-afhpro h3.rpp-afhpro-h3 { font-size: clamp(20px, 2.4vw, 24px) !important; line-height: 1.25 !important; margin: 0 0 8px !important; }
        .rpp-afhpro p.rpp-afhpro-p { font-size: 18px !important; line-height: 1.75 !important; margin: 0 0 22px !important; }
        /* Wordmark banner. main h2 is forced to 36px sitewide, hence the specificity. */
        .rpp-afhpro h2.rpp-afhpro-banner { display: flex !important; width: fit-content; max-width: 100%; flex-wrap: wrap; align-items: center; column-gap: 0.45em; row-gap: 0.15em; background: #192A19; color: #F3F0EA !important; border-radius: 10px; padding: 12px 22px !important; margin: 0 0 18px !important; font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important; font-size: clamp(24px, 3.6vw, 40px) !important; font-weight: 300 !important; line-height: 1.1 !important; }
        .rpp-afhpro .rpp-afhpro-banner-wm { display: inline-flex; align-items: center; gap: 0.08em; letter-spacing: 0.18em; white-space: nowrap; }
        .rpp-afhpro .rpp-afhpro-banner-glyph { height: 1.02em; width: auto; flex-shrink: 0; display: block; }
        .rpp-afhpro .rpp-afhpro-banner-fp { letter-spacing: 0.04em; white-space: nowrap; }
        /* Phones: the wordmark on the first line, the words beneath it, sized to fit the card width. */
        @media (max-width: 560px) {
          .rpp-afhpro h2.rpp-afhpro-banner { display: grid !important; grid-template-columns: max-content; justify-items: start; padding: 12px 16px !important; font-size: 30px !important; }
          .rpp-afhpro h2.rpp-afhpro-banner .rpp-afhpro-banner-fp { font-size: 0.7em !important; letter-spacing: 0.02em !important; }
        }
        .rpp-afhpro p.rpp-afhpro-note { font-size: 16px !important; line-height: 1.65 !important; margin: 14px 0 0 !important; }
        /* One card per row on phones (David, Sept 27): at two columns the names, emails and
           websites were cut off. Two columns from 480px, three from 768 and up — never four
           (David, Sept 27): a lone card on the last row is fine; every line must show. */
        .rpp-afhpro-grid { display: grid; gap: 12px; grid-template-columns: minmax(0, 1fr); margin-top: 8px; }
        @media (min-width: 480px) { .rpp-afhpro-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (min-width: 768px) { .rpp-afhpro-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        @media (min-width: 960px) { .rpp-afhpro-grid { gap: 16px; } }
        /* Four across ONLY for a section of exactly four, and only from 1100px (Oct 10, 2026):
           the owner asked for the Operate row as four boxes. This overrides the Sept 27
           "never four" rule for that row alone; at 1100+ each card is ~245px+ and every
           line still shows (Nicole's long email fits at 12-13px). Below 1100 it stays 2 x 2. */
        @media (min-width: 768px) and (max-width: 1099px) { .rpp-afhpro-grid[data-count="4"] { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (min-width: 1100px) { .rpp-afhpro-grid[data-count="4"] { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
        /* Row titles. Class names avoid the word "section": index.css gives any [class*="section"] 32px padding !important. Plain h3 (main h3 is forced to 28px sitewide, hence the specificity);
           no uppercase or letter-spacing, which index.css would shrink to 14px. */
        .rpp-afhpro .rpp-afhpro-row + .rpp-afhpro-row { margin-top: 40px; }
        .rpp-afhpro h3.rpp-afhpro-row-title { font-family: 'DM Sans', 'DM Sans Fallback', sans-serif !important; font-size: clamp(24px, 2.6vw, 28px) !important; font-weight: 700 !important; line-height: 1.2 !important; color: #0a5648 !important; margin: 0 0 4px !important; padding-left: 14px; border-left: 5px solid #0a5648; }
        .rpp-afhpro .rpp-afhpro-row-lead { font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; font-size: 18px; line-height: 1.5; color: #1c1917; margin: 0 0 14px 19px; }
        /* Fixed-height slots: the same row of every card lines up across the grid. */
        .rpp-afhpro .rpp-afhpro-card { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 14px 8px 12px; border: 1px solid #ddd6cc; border-radius: 12px; background: #fff; font-family: 'DM Sans', 'DM Sans Fallback', sans-serif; min-width: 0; line-height: 1.25; }
        .rpp-afhpro .rpp-afhpro-card > * { margin: 0 !important; flex: 0 0 auto; width: 100%; }
        /* Two fixed lines (David, Sept 25): every profession label is set as two lines in
           src/data/afhProfessionals.ts (professionLines), e.g. "Water Damage" / "Restoration",
           "Professional" / "Bookkeeper", so every card's label is the same height and the
           photos below line up. Each line stays on one line of its own. */
        /* index.css forces every <span> to 16px / weight 400, so the label rendered thin and
           crammed into a 15px line (owner: "odd color, thin, hard to read", Sept 30, 2026).
           The size, weight and color now sit on the spans themselves, with !important. */
        .rpp-afhpro .rpp-afhpro-card-profession { height: 36px; letter-spacing: 0.07em; text-transform: uppercase; margin-bottom: 8px !important; }
        .rpp-afhpro .rpp-afhpro-card-profession span { display: block; height: 18px; font-family: 'DM Sans', 'DM Sans Fallback', sans-serif !important; font-size: 13px !important; line-height: 18px !important; font-weight: 700 !important; color: #1c1917 !important; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        /* At two columns (480-767px) each label has ~200px: tighter tracking keeps "House Cleaning" and "Water Damage" whole. */
        @media (min-width: 480px) and (max-width: 767px) { .rpp-afhpro .rpp-afhpro-card-profession { letter-spacing: 0.03em; } }
        .rpp-afhpro .rpp-afhpro-card-photo { width: 76px !important; height: 76px !important; max-width: 76px; border-radius: 50%; object-fit: cover; border: 3px solid ${AFH_HEADSHOT_RING}; box-sizing: border-box; margin-bottom: 8px !important; }
        .rpp-afhpro .rpp-afhpro-card-name { height: 20px; font-size: 15px; font-weight: 700; color: #280a0c; line-height: 20px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .rpp-afhpro .rpp-afhpro-card-name a { color: inherit !important; text-decoration: none !important; }
        @media (hover: hover) { .rpp-afhpro .rpp-afhpro-card-name a:hover { color: #7f2028 !important; } }
        .rpp-afhpro .rpp-afhpro-card-license { height: 16px; font-size: 11px; line-height: 16px; color: #1c1917; margin-top: 2px !important; }
        .rpp-afhpro .rpp-afhpro-card-line { font-size: 12.5px; line-height: 17px; overflow-wrap: anywhere; }
        .rpp-afhpro .rpp-afhpro-card-phone { height: 17px; margin-top: 6px !important; white-space: nowrap; }
        .rpp-afhpro .rpp-afhpro-card-email { height: 20px; margin-top: 3px !important; white-space: nowrap; overflow: hidden; overflow-wrap: normal; }
        .rpp-afhpro .rpp-afhpro-card-email a { display: inline-block; line-height: 20px; white-space: nowrap; }
        .rpp-afhpro .rpp-afhpro-card-site { height: 17px; margin-top: 3px !important; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .rpp-afhpro .rpp-afhpro-card-line a { color: #1c1917; text-decoration: underline; text-underline-offset: 3px; text-decoration-color: #c9c0b4; }
        @media (hover: hover) { .rpp-afhpro .rpp-afhpro-card-line a:hover { color: #7f2028; text-decoration-color: #7f2028; } }
        .rpp-afhpro .rpp-afhpro-card-logo { height: 64px; margin-top: 12px !important; display: flex; align-items: center; justify-content: center; }
        .rpp-afhpro .rpp-afhpro-card-logo a.rpp-afhpro-logo-link { display: inline-flex; align-items: center; justify-content: center; height: 100%; text-decoration: none !important; border: 0 !important; background: none !important; padding: 0 !important; }
        .rpp-afhpro .rpp-afhpro-card-logo a.rpp-afhpro-logo-link::after { content: none !important; display: none !important; }
        @media (hover: hover) { .rpp-afhpro .rpp-afhpro-card-logo a.rpp-afhpro-logo-link:hover img { transform: scale(1.04); } }
        .rpp-afhpro .rpp-afhpro-card-logo img { transition: transform 0.15s ease; max-height: 64px; max-width: 170px; width: auto; height: auto; object-fit: contain; }
      ` }} />
      <section className="rpp-afhpro" style={{ background: "#ffffff", padding: "64px 24px 56px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          {/* Heading set as the AFH Club wordmark on its green, the green hugging the text only (David, Sept 28 2026): the
              red-door "A" glyph, white type. The visible letters are aria-hidden and the
              heading's name comes from the sr-only copy, so it reads "AFH Club Featured
              Professionals" rather than "FH Club...". */}
          <h2 className="rpp-afhpro-banner">
            <span className="sr-only">AFH Club Featured Professionals</span>
            <span aria-hidden="true" className="rpp-afhpro-banner-wm">
              <img src="/afh-club-glyph.webp" alt="" className="rpp-afhpro-banner-glyph" width={200} height={194} />
              <span>FH Club</span>
            </span>{" "}
            <span aria-hidden="true" className="rpp-afhpro-banner-fp">Featured Professionals</span>
          </h2>
          <p className="rpp-afhpro-p" style={{ fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif", color: "#1c1917", maxWidth: 720 }}>
            Independent professionals who can help your adult family home succeed.
          </p>
          {/* Three titled rows (owner, Oct 10, 2026): Buy & Sell, Operate, Maintain.
              Sections and their order live in src/data/afhProfessionals.ts. */}
          {AFH_FEATURED_SECTIONS.map((section) => (
            <div key={section.id} className="rpp-afhpro-row" aria-labelledby={`afhpro-${section.id}`}>
              <h3 id={`afhpro-${section.id}`} className="rpp-afhpro-row-title">{section.title}</h3>
              <div className="rpp-afhpro-row-lead">{section.lead}</div>
              <div className="rpp-afhpro-grid" data-count={section.entries.length}>
                {section.entries.map(({ person, professionLines }) => (
                  <PersonCard key={person.id} person={person} professionLines={professionLines} />
                ))}
              </div>
            </div>
          ))}
          {/* Caregiver board (Oct 5, 2026): staff are not listed as featured
              professionals, so the board is pointed to under the grid instead. */}
          <div style={{ height: 32 }} aria-hidden="true" />
          <p className="rpp-afhpro-p" style={{ fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif", color: "#1c1917", maxWidth: 720 }}>
            Looking for caregivers, or for adult family home work? Post or browse on the free{" "}
            <Link to="/afh-club/caregivers" style={{ color: "#0a5648", fontWeight: 700, textDecoration: "underline", textUnderlineOffset: 3 }}>
              AFH Caregiver Job Board
            </Link>
            .
          </p>
        </div>
      </section>

      {/* The guide: what to look for in each kind of professional. Narrated by the audio below. */}
      <section className="rpp-afhpro" style={{ background: "#edf0f3", padding: "56px 24px 0" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 className="rpp-afhpro-h2" style={{ fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif", fontWeight: 700, color: "#280a0c" }}>
            What to look for in each kind of professional
          </h2>
          <p className="rpp-afhpro-p" style={{ fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif", color: "#1c1917" }}>
            Whoever you hire, these are the questions that separate someone who knows adult family homes from someone who does not.
          </p>
        </div>
      </section>

      {/* Audio Player */}
      <section style={{ background: "#edf0f3", padding: "48px 24px 32px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <ArticleAudioPlayer audioSrc={audioAsset.url} />
        </div>
      </section>

      {/* Professional Categories */}
      <section style={{ background: "#f7f4ef", padding: "72px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {PROFESSIONAL_CATEGORIES.map((cat, i) => (
              <div
                key={cat.title}
                style={{
                  background: "#fff",
                  border: "1px solid #dccdce",
                  borderTop: "4px solid #3f3a35",
                  borderRadius: 6,
                  padding: "32px 28px",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 20, flexWrap: "wrap" }}>
                  <div style={{ fontSize: 36, flexShrink: 0 }}>{cat.icon}</div>
                  <div style={{ flex: 1, minWidth: 240 }}>
                    <h2
                      style={{
                        fontSize: "clamp(20px, 2.5vw, 26px)",
                        fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
                        fontWeight: 700,
                        color: "#280a0c",
                        margin: "0 0 14px",
                      }}
                    >
                      {cat.title}
                    </h2>
                    <p
                      style={{
                        fontSize: 18,
                        fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                        color: "#1c1917",
                        lineHeight: 1.8,
                        margin: "0 0 20px",
                      }}
                    >
                      {cat.description}
                    </p>
                    <p
                      style={{
                        fontSize: 15,
                        fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#481216",
                        margin: "0 0 10px",
                      }}
                    >
                      What to Look For
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: cat.link ? 20 : 0 }}>
                      {cat.lookFor.map((item, j) => (
                        <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                          <div
                            style={{
                              flexShrink: 0,
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              background: "#b13a44",
                              marginTop: 8,
                            }}
                          />
                          <p
                            style={{
                              fontSize: 16,
                              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                              color: "#1c1917",
                              lineHeight: 1.65,
                              margin: 0,
                            }}
                          >
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                    {cat.link &&
                      (cat.link.href.startsWith("/") ? (
                        <Link
                          to={cat.link.href}
                          style={{
                            fontSize: 16,
                            fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                            fontWeight: 700,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: "#481216",
                            textDecoration: "none",
                            borderBottom: "1px solid #b13a44",
                            paddingBottom: 2,
                          }}
                        >
                          {cat.link.label} →
                        </Link>
                      ) : (
                        <a
                          href={cat.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize: 16,
                            fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
                            fontWeight: 700,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: "#481216",
                            textDecoration: "none",
                            borderBottom: "1px solid #b13a44",
                            paddingBottom: 2,
                          }}
                        >
                          {cat.link.label} →
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Are You a Professional CTA */}
      <section style={{ background: "#edf0f3", padding: "64px 24px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              fontSize: 15,
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#481216",
              margin: "0 0 16px",
            }}
          >
            Are You a Professional?
          </p>
          <h2
            style={{
              fontSize: "clamp(22px, 3.5vw, 32px)",
              fontFamily: "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif",
              fontWeight: 700,
              color: "#280a0c",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            Join the Real Property Planning Network
          </h2>
          <div style={{ width: 40, height: 2, background: "#b13a44", margin: "0 auto 24px", borderRadius: 1 }} />
          <p
            style={{
              fontSize: 17,
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
              color: "#1c1917",
              lineHeight: 1.85,
              margin: "0 0 28px",
            }}
          >
            AFH Club lists independent professionals who serve adult family home owners, buyers, and operators
            throughout Washington State. If you work with Adult Family Homes and would like to be considered for a
            listing in this directory, contact us to learn more.
          </p>
          <Link
            to="/join-the-network"
            style={{
              display: "inline-block",
              fontSize: 16,
              fontFamily: "'DM Sans', 'DM Sans Fallback', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#fff",
              background: "#3f3a35",
              padding: "14px 28px",
              borderRadius: 4,
              textDecoration: "none",
            }}
          >
            Join the Network
          </Link>
        </div>
      </section>

      <BackToAFHClub />
      <CTASection />
      <DisclaimerSection />
    </main>
    <Footer />
  </>
);

export default AFHFindProfessional;
