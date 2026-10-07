import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { CARE_CALCULATORS } from "@/lib/careCalculators";
import {
  EMBED_HEIGHT_MESSAGE, EMBED_SHARE_PATH, embedHeight, embedOptions, embedPath, embedSnippet, type EmbedChoice,
} from "@/lib/calculatorEmbed";

/**
 * /calculators/embed (Oct 6, 2026): how another website puts the Cost of Care
 * calculator on its own pages. Choose a version, see it live, copy the code.
 * The code and URLs come from src/lib/calculatorEmbed.ts; the embedded page is
 * src/pages/embed/CostOfCareEmbedPage.tsx.
 *
 * Audience: senior placement advisors, elder law and estate planning offices,
 * home care agencies, adult family homes, senior centers and churches. The
 * tool is free, with no sign-up and no ads, and nothing is collected from the
 * people who use it on another site.
 *
 * index.css traps avoided: no <label> elements (forced to 14px), no class
 * names containing card/tile/btn/cta/source, spacing set with !important.
 */

const NAVY = "#1B3A6B";
const INK = "#141210";
const FONT = "'DM Sans', 'DM Sans Fallback', system-ui, sans-serif";

const CSS = `
.rpp-emb { font-family: ${FONT}; color: ${INK}; }
.rpp-emb .rpp-emb-wrap { max-width: 980px; margin: 0 auto; padding: 36px 20px; }
.rpp-emb h1.rpp-emb-h1 { font-family: ${FONT} !important; font-size: clamp(30px, 4.2vw, 44px) !important; line-height: 1.15 !important; margin: 0 0 14px !important; color: ${INK} !important; }
.rpp-emb h2.rpp-emb-h2 { font-family: ${FONT} !important; font-size: clamp(23px, 2.6vw, 30px) !important; line-height: 1.25 !important; margin: 0 0 10px !important; color: ${INK} !important; }
.rpp-emb p.rpp-emb-p, .rpp-emb li.rpp-emb-li { font-size: 18px !important; line-height: 1.65 !important; color: ${INK} !important; }
.rpp-emb p.rpp-emb-p { margin: 0 0 16px !important; }
.rpp-emb li.rpp-emb-li { margin: 0 0 6px !important; list-style: disc !important; display: list-item !important; }
.rpp-emb ul.rpp-emb-ul { margin: 0 0 16px 22px !important; padding: 0 !important; }
.rpp-emb .rpp-emb-step { font-size: 14px !important; letter-spacing: .14em; text-transform: uppercase; font-weight: 700; color: ${NAVY}; margin: 0 0 6px !important; }
.rpp-emb .rpp-emb-choices { display: flex; flex-wrap: wrap; gap: 10px; margin: 6px 0 22px; }
.rpp-emb button.rpp-emb-choice.rpp-emb-choice { font-family: ${FONT} !important; font-size: 17px !important; font-weight: 600 !important; line-height: 1.25 !important; min-height: 46px; padding: 10px 16px !important; border-radius: 10px !important; border: 2px solid var(--cc) !important; background: #fff !important; color: var(--cc) !important; cursor: pointer !important; text-align: left; }
.rpp-emb button.rpp-emb-choice.rpp-emb-choice[aria-pressed="true"] { background: var(--cc) !important; color: #fff !important; }
.rpp-emb button.rpp-emb-choice.rpp-emb-choice:focus-visible { outline: 3px solid ${INK}; outline-offset: 2px; }
.rpp-emb .rpp-emb-preview { background: #eef2f5; border: 1px solid #d3dce4; border-radius: 14px; padding: 18px 10px; margin: 0 0 26px; }
.rpp-emb .rpp-emb-preview iframe { display: block; width: 100%; max-width: 780px; margin: 0 auto; border: 0; }
.rpp-emb textarea.rpp-emb-code { display: block; width: 100%; min-height: 190px; box-sizing: border-box; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace !important; font-size: 14px !important; line-height: 1.5 !important; color: ${INK} !important; background: #fff; border: 2px solid #b9c6d2; border-radius: 10px; padding: 12px 14px; resize: vertical; }
.rpp-emb .rpp-emb-row { display: flex; flex-wrap: wrap; align-items: center; gap: 12px 18px; margin: 12px 0 26px; }
.rpp-emb button.rpp-emb-copy.rpp-emb-copy { font-family: ${FONT} !important; font-size: 18px !important; font-weight: 700 !important; min-height: 50px; padding: 12px 22px !important; border-radius: 10px !important; border: 0 !important; background: ${NAVY} !important; color: #fff !important; cursor: pointer !important; }
.rpp-emb button.rpp-emb-copy.rpp-emb-copy:hover { background: #12294d !important; }
.rpp-emb button.rpp-emb-copy.rpp-emb-copy:focus-visible { outline: 3px solid #f0b429; outline-offset: 2px; }
.rpp-emb .rpp-emb-done { font-size: 17px !important; font-weight: 600 !important; color: #14663f !important; }
.rpp-emb a.rpp-emb-link { color: ${NAVY} !important; font-weight: 700; text-decoration: underline !important; text-underline-offset: 3px; font-size: inherit !important; }
.rpp-emb .rpp-emb-note { background: #faf8f4; border: 1px solid #e2ddd5; border-radius: 12px; padding: 18px 20px; }
`;

const EmbedCalculators = () => {
  const [choice, setChoice] = useState<EmbedChoice>("all");
  const [copied, setCopied] = useState(false);
  const [previewHeight, setPreviewHeight] = useState<number | null>(null);
  const frame = useRef<HTMLIFrameElement>(null);
  const code = useRef<HTMLTextAreaElement>(null);
  const snippet = embedSnippet(choice);

  /* Size the live preview the same way the snippet's script does. */
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== window.location.origin || e.data?.type !== EMBED_HEIGHT_MESSAGE) return;
      if (frame.current && e.source === frame.current.contentWindow) setPreviewHeight(Math.ceil(e.data.height));
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const pick = (c: EmbedChoice) => {
    setChoice(c);
    setCopied(false);
    setPreviewHeight(null);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
    } catch {
      code.current?.focus();
      code.current?.select();
    }
  };

  const colorFor = (c: EmbedChoice) => CARE_CALCULATORS.find((o) => o.slug === c)?.color ?? NAVY;

  return (
    <>
      <SEOHead
        title="Add the Cost of Care Calculator to Your Website | Real Property Planning"
        description="Put Real Property Planning's free Washington cost of care calculator on your own website: assisted living, memory care, adult family homes, in-home care, nursing homes and independent living. Copy one piece of code. No sign-up, no ads."
        canonical={`https://realpropertyplanning.com${EMBED_SHARE_PATH}`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://realpropertyplanning.com" },
          { name: "Calculators", url: "https://realpropertyplanning.com/calculators" },
          { name: "Add a calculator to your website", url: `https://realpropertyplanning.com${EMBED_SHARE_PATH}` },
        ]}
      />
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <Header />
      <main id="main-content" className="rpp-emb">
        <div style={{ background: "#faf8f4", borderBottom: `3px solid ${NAVY}` }}>
          <div className="rpp-emb-wrap" style={{ paddingTop: 44, paddingBottom: 30 }}>
            <h1 className="rpp-emb-h1">Add the Cost of Care Calculator to Your Website</h1>
            <p className="rpp-emb-p" style={{ maxWidth: 760 }}>
              Families ask what care will cost. If you work with them, as a placement advisor, an elder law or estate
              planning office, a home care agency, an adult family home, a senior center or a church, you can put this
              free Washington calculator on your own website. Copy one piece of code and paste it into a page.
            </p>
            <ul className="rpp-emb-ul">
              <li className="rpp-emb-li">Free, with no sign-up, no ads and nothing collected from the people who use it.</li>
              <li className="rpp-emb-li">The figures update on your site when they update here.</li>
              <li className="rpp-emb-li">The adult family home version includes a lookup of DSHS Medicaid rates and licensed homes by Washington city and county.</li>
            </ul>
          </div>
        </div>

        <div className="rpp-emb-wrap">
          <p className="rpp-emb-step">Step 1</p>
          <h2 className="rpp-emb-h2">Choose a version</h2>
          <div className="rpp-emb-choices" role="group" aria-label="Calculator version">
            {embedOptions().map((o) => (
              <button
                key={o.value}
                type="button"
                className="rpp-emb-choice"
                aria-pressed={choice === o.value}
                onClick={() => pick(o.value)}
                style={{ ["--cc" as string]: colorFor(o.value) }}
              >
                {o.label}
              </button>
            ))}
          </div>

          <p className="rpp-emb-step">Preview</p>
          <h2 className="rpp-emb-h2">How it will look on your page</h2>
          <div className="rpp-emb-preview">
            <iframe
              key={choice}
              ref={frame}
              src={embedPath(choice)}
              title="Preview of the embedded calculator"
              style={{ height: previewHeight ?? embedHeight(choice) }}
            />
          </div>

          <p className="rpp-emb-step">Step 2</p>
          <h2 className="rpp-emb-h2">Copy the code and paste it into your page</h2>
          <textarea
            ref={code}
            className="rpp-emb-code"
            readOnly
            value={snippet}
            aria-label="Code to paste into your website"
            onFocus={(e) => e.currentTarget.select()}
          />
          <div className="rpp-emb-row">
            <button type="button" className="rpp-emb-copy" onClick={copy}>Copy the code</button>
            {copied && <span className="rpp-emb-done" role="status">Copied. Paste it into your page.</span>}
          </div>

          <h2 className="rpp-emb-h2">Where to paste it</h2>
          <ul className="rpp-emb-ul">
            <li className="rpp-emb-li"><strong>WordPress:</strong> add a Custom HTML block and paste the code into it.</li>
            <li className="rpp-emb-li"><strong>Wix:</strong> Add, then Embed Code, then Embed HTML, and paste it in.</li>
            <li className="rpp-emb-li"><strong>Squarespace:</strong> add a Code block and paste it in.</li>
            <li className="rpp-emb-li"><strong>Anything else:</strong> wherever your site lets you add HTML.</li>
          </ul>
          <p className="rpp-emb-p">
            The code has three lines: the calculator, a one-line credit underneath it, and a short script that sizes the
            calculator to fit. Some website builders remove scripts; the calculator still works without it, at a fixed
            height.
          </p>

          <div className="rpp-emb-note">
            <h2 className="rpp-emb-h2">Using it</h2>
            <p className="rpp-emb-p">
              You are welcome to use it on any website. Please keep the credit line under the calculator, and don&apos;t
              change the figures or present them as your own. The calculator is general information for planning, not a
              quote from any provider. Real Property Planning provides no care services and is not paid by any care
              provider. Questions: <a className="rpp-emb-link" href="mailto:info@realpropertyplanning.com">info@realpropertyplanning.com</a>.
            </p>
            <p className="rpp-emb-p" style={{ marginBottom: 0 }}>
              See every calculator on the site: <Link className="rpp-emb-link" to="/calculators">Calculators</Link>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EmbedCalculators;
