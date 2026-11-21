import { Link } from "react-router-dom";
import RppArrow from "@/components/RppArrow";
import mvmArt from "@/assets/perf/mvm-banner.webp";
import mvmArtPhone from "@/assets/perf/mvm-banner-phone.webp";
/* Oct 27, 2026 (performance): these images moved from public/ into src/assets so the build
   names them by content and browsers can cache them long-term (public/ files were served with
   no cache lifetime); the four object pictures also have 320px copies for their ~150px slot. */
import popClipboard from "@/assets/perf/popular-clipboard-v3.webp";
import popClipboard320 from "@/assets/perf/popular-clipboard-v3-400.webp";
import popScale from "@/assets/perf/popular-scale-v3.webp";
import popScale320 from "@/assets/perf/popular-scale-v3-400.webp";
import popHouse from "@/assets/perf/popular-house-v3.webp";
import popHouse320 from "@/assets/perf/popular-house-v3-400.webp";
import popKeys from "@/assets/perf/popular-keys-v3.webp";
import popKeys320 from "@/assets/perf/popular-keys-v3-400.webp";

/* Popular resources (Oct 26, 2026). David: the old icon tiles "look weak" and
   "appear as one large image versus 4 separate selections". Rebuilt with his
   choices after mock-ups:
   - Each tile leads with the visitor's situation ("We inherited a house").
     People find themselves faster than they find a guide title, and four
     identical "Read Guide" buttons were part of why the tiles blurred
     together. The guide's name was an underlined link line under it; David
     said it cluttered the tile, so it was replaced by a circled arrow in the
     bottom-right corner, like the homepage tiles. The guide name stays in the
     link's aria-label for screen readers.
   - Oct 31, 2026: PHOTOS, not cut-out objects. David's four ChatGPT scenes
     (clipboard, scale, wooden house, key) on a warm desk by a window, shown
     whole and square, uncropped (src/assets/perf/popular-*-v3.webp, 800w and
     400w; Oct 31 evening, David: the 5:4 crop cut too much off). Each card is now photo on top, cream label below, like the
     "What brings you here today?" tiles; phones show a row with the photo on
     the left. Replacements should be square.
   - White tiles with a 2px border in each tile's own colour (David: "a cleaner
     look" than tinted fills): navy, bronze, garnet, teal, all already used on
     the site.
   - Desktop: object and words centred. Phones: four stacked rows, object left.
   Class names avoid "btn"/"cta" (index.css forces maroon on those). */
const resources = [
  { situation: "I'm the executor. Where do I start?", guide: "Executor's 10-step checklist", href: "/resources/washington-executors-10-step-checklist", img: popClipboard, img320: popClipboard320, w: 800, h: 800, c: "#1B3A6B" },
  { situation: "The house has to go through probate", guide: "How probate sales work", href: "/guides/how-probate-real-estate-works", img: popScale, img320: popScale320, w: 800, h: 800, c: "#8a5212" },
  { situation: "Mom or Dad needs more care", guide: "Senior housing & care options", href: "/understanding-housing-care-options", img: popHouse, img320: popHouse320, w: 800, h: 800, c: "#9E1F3A" },
  { situation: "We inherited a house", guide: "What to do with it", href: "/guides/inherited-house-washington", img: popKeys, img320: popKeys320, w: 800, h: 800, c: "#0f6b56" },
];

const HomepagePopularResources = () => {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "3.5rem 0 4rem" }}>
      <style dangerouslySetInnerHTML={{ __html: `
      .rpp-pr-eyebrow {
        font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important;
        font-size: 21px !important;
        font-weight: 700 !important;
        letter-spacing: 0.14em !important;
        text-transform: uppercase !important;
        color: #272421 !important;
        margin: 0 0 0.5rem 0 !important;
        display: block !important;
      }
      .rpp-pr-heading {
        font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important;
        font-size: clamp(32px, 3vw, 48px) !important;
        font-weight: 700 !important;
        color: #272421 !important;
        margin: 0 !important;
        line-height: 1.2 !important;
      }
      .rpp-pr-grid.rpp-pr-grid {
        display: grid !important;
        grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
        gap: 1.5rem !important;
        list-style: none !important;
        margin: 0 !important;
        padding: 0 !important;
      }
      .rpp-pr-grid li { display: flex !important; margin: 0 !important; }
      .rpp-pr-grid li::before, .rpp-pr-grid li::marker { content: none !important; display: none !important; }
      .rpp-pr-tile.rpp-pr-tile {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        text-align: center !important;
        width: 100% !important;
        background: #ffffff !important;
        border: 2px solid var(--pr-c) !important;
        border-radius: 16px !important;
        position: relative !important;
        padding: 1.5rem 1.25rem 3.6rem !important;
        text-decoration: none !important;
        box-shadow: 0 4px 14px -10px color-mix(in srgb, var(--pr-c) 60%, transparent) !important;
        transition: transform 0.18s ease, box-shadow 0.18s ease !important;
      }
      .rpp-pr-tile.rpp-pr-tile:hover, .rpp-pr-tile.rpp-pr-tile:focus-visible {
        transform: translateY(-3px) !important;
        box-shadow: 0 16px 30px -14px color-mix(in srgb, var(--pr-c) 60%, transparent) !important;
      }
      .rpp-pr-tile.rpp-pr-tile:focus-visible { outline: 3px solid var(--pr-c) !important; outline-offset: 3px !important; }
      .rpp-pr-tile img.rpp-pr-object.rpp-pr-object {
        display: block !important;
        width: auto !important;
        max-width: 150px !important;
        height: 130px !important;
        object-fit: contain !important;
        margin: 0 0 1rem !important;
        border-radius: 0 !important;
        filter: drop-shadow(0 8px 8px rgba(0, 0, 0, 0.16));
        transition: transform 0.18s ease;
      }
      .rpp-pr-tile:hover img.rpp-pr-object.rpp-pr-object { transform: translateY(-2px) scale(1.03); }
      .rpp-pr-body.rpp-pr-body {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        flex: 1 !important;
        width: 100% !important;
      }
      /* Spans inside links are forced to 16px regular by index.css; these
         restate their own size and weight. */
      .rpp-pr-tile span.rpp-pr-situation.rpp-pr-situation {
        font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important;
        font-size: 22px !important;
        font-weight: 800 !important;
        line-height: 1.25 !important;
        color: #272421 !important;
        margin: 0 !important;
      }
      /* Circled arrow, bottom-right corner: the site's one arrow (RppArrow,
         a solid disc with a heavy chevron cut out) in the tile's colour
         (David, Oct 26, 2026); on hover it darkens a little and nudges right. */
      .rpp-pr-tile span.rpp-pr-arrow.rpp-pr-arrow {
        position: absolute !important;
        right: 14px !important;
        bottom: 14px !important;
        width: 28px !important;
        height: 28px !important;
        margin: 0 !important;
        padding: 0 !important;
        box-sizing: border-box;
        border-radius: 999px !important;
        border: 0 !important;
        color: var(--pr-c) !important;
        background: transparent !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        transition: background-color 0.18s ease, color 0.18s ease, transform 0.18s ease;
      }
      .rpp-pr-tile:hover span.rpp-pr-arrow.rpp-pr-arrow,
      .rpp-pr-tile:focus-visible span.rpp-pr-arrow.rpp-pr-arrow {
        color: color-mix(in srgb, var(--pr-c) 82%, #000000) !important;
        transform: translateX(2px);
      }

      /* Browse all — a solid button, so it reads as the primary next step
         rather than another text link among many. */
      .rpp-pr-browse.rpp-pr-browse {
        display: inline-flex !important;
        align-items: center !important;
        gap: 10px !important;
        font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif !important;
        font-size: 16px !important;
        font-weight: 700 !important;
        color: #1c1917 !important;
        background-color: #ffffff !important;
        border: 2px solid #3d3833 !important;
        border-radius: 8px !important;
        /* Padding and min-height are set inline on the <Link> instead of
           here: Lovable's preview serves stale CSS from <style> blocks
           while .tsx markup updates reliably, so sizing that needs to
           land goes in the markup. 44px is the WCAG 2.2 AAA tap-target
           floor — don't trim below it. */
        box-shadow: 0 3px 12px rgba(26,39,68,0.14) !important;
        transition: background-color 150ms ease, border-color 150ms ease !important;
      }
      .rpp-pr-browse.rpp-pr-browse,
      .rpp-pr-browse.rpp-pr-browse * {
        text-decoration: none !important;
      }
      .rpp-pr-browse:hover,
      .rpp-pr-browse:focus-visible {
        color: #ffffff !important;
        background-color: #3d3833 !important;
        border-color: #3d3833 !important;
      }

      /* Medicare vs. Medicaid banner (Nov 20, 2026, David). Several boxed
         versions were rejected that evening ("cheapens the look of the
         page"; "NO MORE NAVY" fills). Final: David's ChatGPT banner art
         (cards on a desk on the RIGHT, cream space on the left: David put the
         picture on the right because the calculator block below has its
         picture on the left) with the words set in real HTML on the cream side. The government eagle seal was painted
         out of the Medicare card on purpose; do not put it back.
         Words: "Medicare" navy, "vs." garnet #9E1F3A, "Medicaid" green
         #0f6b56; flat garnet "Compare them" button. DM Sans only.
         Laptops: picture fills the banner, words on the left 57%.
         Under 860px: the cards picture on top, words below. */
      .rpp-mvm-strip.rpp-mvm-strip {
        position: relative;
        display: block;
        width: 100%;
        max-width: 980px;
        margin: 2rem auto 0;
        border-radius: 16px;
        overflow: hidden;
        border: 1px solid #e4ddd2;
        background: #fbf6ee;
        box-shadow: 0 10px 28px rgba(28, 25, 23, 0.10);
        aspect-ratio: 1600 / 449;
        text-align: left;
      }
      .rpp-mvm-strip.rpp-mvm-strip,
      .rpp-mvm-strip.rpp-mvm-strip * { text-decoration: none !important; }
      .rpp-mvm-strip img.rpp-mvm-art { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block; }
      .rpp-mvm-strip img.rpp-mvm-art-phone { display: none; }
      .rpp-mvm-text {
        position: absolute;
        top: 0; bottom: 0; left: 0;
        right: 43%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 12px;
        padding: 0 16px 0 44px;
      }
      .rpp-mvm-strip span.rpp-mvm-title.rpp-mvm-title {
        font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif;
        font-size: 40px !important;
        font-weight: 800 !important;
        line-height: 1.1;
        letter-spacing: -0.01em;
        white-space: normal;
      }
      .rpp-mvm-strip span.rpp-mvm-medicare.rpp-mvm-medicare { font-weight: 800 !important; font-size: inherit !important; color: #1B3A6B !important; }
      .rpp-mvm-strip span.rpp-mvm-vs.rpp-mvm-vs { font-weight: 800 !important; font-size: inherit !important; color: #9E1F3A !important; }
      .rpp-mvm-strip span.rpp-mvm-medicaid.rpp-mvm-medicaid { font-weight: 800 !important; font-size: inherit !important; color: #0f6b56 !important; }
      .rpp-mvm-strip span.rpp-mvm-sub.rpp-mvm-sub {
        font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif;
        font-size: 20px !important;
        font-weight: 500;
        color: #3d3833 !important;
        line-height: 1.4;
        white-space: normal;
      }
      .rpp-mvm-strip span.rpp-mvm-go.rpp-mvm-go {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        margin-top: 4px;
        font-family: 'DM Sans', 'DM Sans Fallback', system-ui, sans-serif;
        font-size: 19px !important;
        font-weight: 800;
        color: #ffffff !important;
        background: #9E1F3A;
        border-radius: 10px;
        padding: 11px 22px;
        min-height: 50px;
        white-space: nowrap;
        transition: background-color 150ms ease;
      }
      .rpp-mvm-strip:hover span.rpp-mvm-go.rpp-mvm-go,
      .rpp-mvm-strip:focus-visible span.rpp-mvm-go.rpp-mvm-go { background: #84182F; }
      @media (max-width: 1000px) {
        .rpp-mvm-strip span.rpp-mvm-title.rpp-mvm-title { font-size: 32px !important; }
        .rpp-mvm-strip span.rpp-mvm-sub.rpp-mvm-sub { font-size: 18px !important; }
      }
      @media (max-width: 859px) {
        .rpp-mvm-strip.rpp-mvm-strip { aspect-ratio: auto; max-width: 560px; }
        .rpp-mvm-strip img.rpp-mvm-art { display: none; }
        .rpp-mvm-strip img.rpp-mvm-art-phone { display: block; position: static; width: 100%; height: auto; aspect-ratio: 808 / 444; object-fit: cover; }
        .rpp-mvm-text { position: static; align-items: center; text-align: center; padding: 18px 18px 22px; gap: 10px; }
        .rpp-mvm-strip span.rpp-mvm-title.rpp-mvm-title { font-size: 30px !important; }
        .rpp-mvm-strip span.rpp-mvm-go.rpp-mvm-go { align-self: stretch; justify-content: center; }
      }
      @media (max-width: 420px) {
        .rpp-mvm-strip span.rpp-mvm-title.rpp-mvm-title { font-size: 26px !important; white-space: nowrap; }
        .rpp-mvm-strip span.rpp-mvm-sub.rpp-mvm-sub { font-size: 17px !important; }
      }

      @media (max-width: 1000px) {
        .rpp-pr-grid.rpp-pr-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
      }
      /* PHONES (under 640px): four stacked rows, object left and words right,
         left-aligned, so each choice is its own clearly separate tap target
         (was a cramped 2 x 2 that read as one block). */
      @media (max-width: 639px) {
        .rpp-pr-grid.rpp-pr-grid { grid-template-columns: minmax(0, 1fr) !important; gap: 0.9rem !important; }
        .rpp-pr-tile.rpp-pr-tile {
          flex-direction: row !important;
          align-items: center !important;
          /* Oct 27, 2026 (David): words centred in the space beside the picture, both ways,
             like the desktop tiles (were left-aligned and pushed to the top by extra bottom
             padding for the arrow). Right padding keeps the words clear of the arrow. */
          text-align: center !important;
          gap: 0.75rem !important;
          padding: 1rem 3.1rem 1rem 0.75rem !important;
        }
        .rpp-pr-tile img.rpp-pr-object.rpp-pr-object { width: 88px !important; max-width: 88px !important; height: 88px !important; flex: 0 0 88px; margin: 0 !important; }
        .rpp-pr-body.rpp-pr-body { align-items: center !important; justify-content: center !important; text-align: center !important; }
        .rpp-pr-tile span.rpp-pr-situation.rpp-pr-situation { text-align: center !important; }
        .rpp-pr-tile span.rpp-pr-situation.rpp-pr-situation { font-size: 20px !important; }
        .rpp-pr-tile span.rpp-pr-arrow.rpp-pr-arrow { right: 12px !important; bottom: 12px !important; width: 26px !important; height: 26px !important; }
        .rpp-pr-tile span.rpp-pr-arrow.rpp-pr-arrow svg { width: 26px; height: 26px; }
      }

      /* PHOTO CARDS (Oct 31, 2026). Photo across the top, cream label below
         with the situation in the serif, ring arrow bottom-right in the
         card's colour, as on the journey tiles. */
      html body main a.rpp-pr-tile.rpp-pr-tile.rpp-pr-tile { padding: 0 !important; overflow: hidden !important; align-items: stretch !important; text-align: left !important; border-radius: 16px !important; }
      .rpp-pr-tile span.rpp-pr-photo.rpp-pr-photo { display: block !important; width: 100% !important; line-height: 0; }
      .rpp-pr-tile img.rpp-pr-photo-img.rpp-pr-photo-img { display: block !important; width: 100% !important; height: auto !important; aspect-ratio: 1 / 1; object-fit: cover; margin: 0 !important; border-radius: 0 !important; transition: transform 0.35s ease; }
      @media (hover: hover) { .rpp-pr-tile:hover img.rpp-pr-photo-img.rpp-pr-photo-img { transform: scale(1.03); } }
      .rpp-pr-tile span.rpp-pr-body.rpp-pr-body { align-items: flex-start !important; text-align: left !important; padding: 14px 16px 50px !important; box-sizing: border-box; }
      html body main a.rpp-pr-tile span.rpp-pr-situation.rpp-pr-situation.rpp-pr-situation.rpp-pr-situation { text-align: left !important; font-size: clamp(19px, 1.6vw, 22px) !important; }
      html body main a.rpp-pr-tile span.rpp-pr-arrow.rpp-pr-arrow.rpp-pr-arrow.rpp-pr-arrow { background: transparent !important; color: var(--pr-c) !important; box-shadow: none !important; }
      html body main a.rpp-pr-tile span.rpp-pr-arrow.rpp-pr-arrow svg circle { stroke: currentColor !important; }
      @media (max-width: 639px) {
        html body main a.rpp-pr-tile.rpp-pr-tile.rpp-pr-tile { flex-direction: row !important; align-items: stretch !important; padding: 0 !important; gap: 0 !important; min-height: 104px; }
        .rpp-pr-tile span.rpp-pr-photo.rpp-pr-photo { flex: 0 0 120px !important; width: 120px !important; align-self: center; }
        .rpp-pr-tile img.rpp-pr-photo-img.rpp-pr-photo-img { width: 120px !important; height: 120px !important; aspect-ratio: 1 / 1; }
        .rpp-pr-tile span.rpp-pr-body.rpp-pr-body { justify-content: center !important; padding: 12px 56px 12px 14px !important; }
        html body main a.rpp-pr-tile span.rpp-pr-situation.rpp-pr-situation.rpp-pr-situation.rpp-pr-situation { font-size: 19px !important; }
      }
    ` }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2.25rem" }}>
          <span className="rpp-pr-eyebrow">Popular Resources</span>
          <h2 className="rpp-pr-heading">The guides people open most</h2>
        </div>

        {/* Cards */}
        <ul className="rpp-pr-grid">
          {resources.map((r) => (
            <li key={r.href}>
              <Link
                to={r.href}
                className="rpp-pr-tile marquee-hover"
                style={{ ["--pr-c" as string]: r.c }}
                aria-label={`${r.situation}: ${r.guide}`}
              >
                <span className="rpp-pr-photo"><img className="rpp-pr-photo-img" src={r.img320} srcSet={`${r.img320} 400w, ${r.img} 800w`} sizes="(max-width: 639px) 120px, (max-width: 1000px) 46vw, 280px" alt="" width={r.w} height={r.h} loading="lazy" decoding="async" /></span>
                <span className="rpp-pr-body">
                  <span className="rpp-pr-situation">{r.situation}</span>
                </span>
                <span className="rpp-pr-arrow" aria-hidden="true">
                  <RppArrow size={28} />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Browse all — primary next step. Oct 27, 2026 (David): was "Browse all resources"
            to /resources, which is the Find a Professional page, under a heading about
            guides. Now it opens the guide library the section is about. */}
        <div style={{ textAlign: "center", marginTop: "2.25rem" }}>
          <Link to="/guides-and-resources" className="rpp-pr-browse" style={{ padding: "11px 22px", minHeight: 44 }}>
            Browse all guides &amp; articles
          </Link>
        </div>

        {/* Medicare vs. Medicaid (Nov 20, 2026, David): the questions he hears most
            about paying for senior living. Sits where the AFH Club strip was. */}
        <Link to="/medicare-vs-medicaid" className="rpp-mvm-strip" aria-label="Medicare vs. Medicaid: compare them">
          <img src={mvmArt} alt="" aria-hidden="true" className="rpp-mvm-art" width={1600} height={449} loading="lazy" decoding="async" />
          <img src={mvmArtPhone} alt="" aria-hidden="true" className="rpp-mvm-art-phone" width={808} height={444} loading="lazy" decoding="async" />
          <span className="rpp-mvm-text">
            <span className="rpp-mvm-title">
              <span className="rpp-mvm-medicare">Medicare</span> <span className="rpp-mvm-vs">vs.</span>{" "}
              <span className="rpp-mvm-medicaid">Medicaid</span>
            </span>
            <span className="rpp-mvm-sub">What each pays for, who qualifies, and which one covers senior living.</span>
            <span className="rpp-mvm-go">
              Compare them <RppArrow size={24} />
            </span>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default HomepagePopularResources;
