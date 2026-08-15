import { useState, useRef, useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import ProviderVideoTrigger from "./ProviderVideoTrigger";

/**
 * ProviderHoverPanel
 *
 * Wraps any provider card and adds the hover bio panel that ProviderTile
 * already provides on the nine dedicated provider pages. Extracted so the
 * directory pages (/featured-professionals, /medicare-providers,
 * /mortgage-lenders, /for-divorce-attorneys) can gain the same behavior
 * WITHOUT having to adopt ProviderTile's full tile layout, which is built
 * for wide provider pages and would break the compact directory grids.
 *
 * Behavior is intentionally identical to ProviderTile:
 *   - hover the wrapped region (the "top portion" of a card) to open
 *   - fixed-position centered panel, so it is not constrained by tile width
 *   - the mousemove watcher checks BOTH the trigger rect and the overlay
 *     rect, so moving the pointer toward the panel (e.g. to reach its
 *     scrollbar) does not dismiss it
 *   - renders nothing extra when `bio` is absent, so cards without a bio
 *     degrade cleanly to their normal appearance
 *
 * The overlay is rendered through a portal to document.body. This matters:
 * on the directory pages the entire card is an <a>/<Link>, and a panel
 * rendered inside that anchor would make every word of the bio behave as
 * part of the link (and nest interactive content inside an anchor). The
 * portal lifts it out of the anchor entirely.
 *
 * VIDEO SUPPORT
 * Pass `videoUrl` to add a "Watch introduction" button to the panel body.
 * While that video modal is open, every close path is suppressed — the
 * delayed close timer, the mousemove watcher, and the window mouseleave
 * handler. This is required, not optional: ProviderVideoTrigger lives
 * inside this component's portal, so if the panel unmounted the modal
 * would unmount with it and the video would vanish mid-playback. A portal
 * relocates the DOM node but does not detach it from the React tree.
 *
 * IMPORTANT: the wrapped children must NOT include the card's contact
 * links. Keep the trigger scoped to the presentational top portion, matching
 * ProviderTile, or the panel will open when someone reaches for a phone
 * number.
 */
export interface ProviderHoverPanelProps {
  name: string;
  title?: string;
  company?: string;
  photo?: string;
  photoAlt?: string;
  /** Second person, for paired providers such as Ginny's Girls. */
  photo2?: string;
  photoAlt2?: string;
  name2?: string;
  logo?: string;
  logoAlt?: string;
  bio?: string;
  specialty?: string;
  /**
   * Full YouTube URL for this provider's introduction video.
   * When present, a "Watch introduction" button appears below the bio.
   * When absent, nothing is rendered and the panel is unchanged.
   */
  videoUrl?: string;
  children: ReactNode;
  /** Optional style overrides for the trigger wrapper. */
  style?: React.CSSProperties;
}

export default function ProviderHoverPanel({
  name,
  title,
  company,
  photo,
  photoAlt,
  photo2,
  photoAlt2,
  name2,
  logo,
  logoAlt,
  bio,
  specialty,
  videoUrl,
  children,
  style,
}: ProviderHoverPanelProps) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  /**
   * Ref rather than state, because the mousemove listener is registered once
   * per hover and would otherwise close over a stale value.
   */
  const videoOpenRef = useRef(false);

  const handleEnter = () => {
    if (!bio) return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setHovered(true);
    setTimeout(() => setVisible(true), 10);
  };

  const handleLeave = () => {
    if (!bio) return;
    if (videoOpenRef.current) return;
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setVisible(false);
      closeTimer.current = setTimeout(() => setHovered(false), 400);
    }, 150);
  };

  const handleVideoOpenChange = (isOpen: boolean) => {
    videoOpenRef.current = isOpen;
    if (isOpen) {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
        closeTimer.current = null;
      }
    } else {
      // Modal dismissed. The pointer is almost certainly no longer over the
      // panel, so hand control back to the normal delayed-close path.
      handleLeave();
    }
  };

  useEffect(() => {
    if (!hovered || !bio) return;
    const onMove = (e: MouseEvent) => {
      if (videoOpenRef.current) return;
      const el = wrapperRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const insideTile = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;

      let insideOverlay = false;
      const overlayEl = overlayRef.current;
      if (overlayEl) {
        const or = overlayEl.getBoundingClientRect();
        insideOverlay = e.clientX >= or.left && e.clientX <= or.right && e.clientY >= or.top && e.clientY <= or.bottom;
      }

      if (insideTile || insideOverlay) {
        if (closeTimer.current) {
          clearTimeout(closeTimer.current);
          closeTimer.current = null;
        }
      } else {
        handleLeave();
      }
    };
    const onLeaveWindow = () => {
      if (videoOpenRef.current) return;
      handleLeave();
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeaveWindow);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeaveWindow);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hovered, bio]);

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    [],
  );

  const hasTwoPeople = !!(photo2 && name2);

  return (
    <>
      {hovered &&
        bio &&
        typeof document !== "undefined" &&
        createPortal(
          <>
            <div
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 2147483646,
                background: "rgba(10,22,40,0.5)",
                opacity: visible ? 1 : 0,
                transition: "opacity 1.4s ease",
                pointerEvents: "none",
              }}
            />
            <div
              ref={overlayRef}
              className="rpp-provider-bio-scroll"
              role="dialog"
              aria-label={`About ${name}`}
              style={{
                position: "fixed",
                top: "80px",
                left: "50%",
                transform: visible ? "translateX(-50%) scale(1)" : "translateX(-50%) scale(0.97)",
                zIndex: 2147483647,
                background: "#fff",
                borderRadius: 8,
                maxWidth: 1000,
                width: "92vw",
                maxHeight: "calc(100vh - 160px)",
                overflowY: "auto",
                boxShadow: "0 24px 80px rgba(10,22,40,0.5)",
                opacity: visible ? 1 : 0,
                filter: visible ? "blur(0px)" : "blur(8px)",
                transition:
                  "opacity 1.4s cubic-bezier(0.16,1,0.3,1), transform 1.4s cubic-bezier(0.16,1,0.3,1), filter 1.4s cubic-bezier(0.16,1,0.3,1)",
                pointerEvents: "auto",
              }}
            >
              {/* Panel header */}
              <div
                style={{
                  background: "#280a0c",
                  padding: "20px 24px",
                  borderRadius: "8px 8px 0 0",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <div style={{ display: "flex", gap: 12, flexShrink: 0 }}>
                  {photo && (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                      <img
                        src={photo}
                        alt={photoAlt || name}
                        style={{
                          width: 64,
                          height: 64,
                          borderRadius: "50%",
                          objectFit: "cover",
                          border: "2px solid #c3525c",
                        }}
                        decoding="async"
                      />
                      {hasTwoPeople && (
                        <span
                          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.7)" }}
                        >
                          {name}
                        </span>
                      )}
                    </div>
                  )}
                  {hasTwoPeople && photo2 && (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                      <img
                        src={photo2}
                        alt={photoAlt2 || name2}
                        style={{
                          width: 64,
                          height: 64,
                          borderRadius: "50%",
                          objectFit: "cover",
                          border: "2px solid #c3525c",
                        }}
                        decoding="async"
                      />
                      <span
                        style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.7)" }}
                      >
                        {name2}
                      </span>
                    </div>
                  )}
                </div>

                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#fff",
                      marginBottom: 3,
                    }}
                  >
                    {name}
                  </div>
                  {name2 && (
                    <div
                      style={{
                        fontFamily: "'DM Sans', system-ui, sans-serif",
                        fontSize: 18,
                        fontWeight: 700,
                        color: "#fff",
                        marginBottom: 3,
                      }}
                    >
                      {name2}
                    </div>
                  )}
                  {title && (
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 11,
                        letterSpacing: "0.12em",
                        color: "#e0828a",
                        textTransform: "uppercase",
                      }}
                    >
                      {title}
                    </div>
                  )}
                  {company && (
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 11,
                        color: "rgba(255,255,255,0.65)",
                        marginTop: 2,
                      }}
                    >
                      {company}
                    </div>
                  )}
                </div>

                {/*
                White chip behind the logo. Several partner logos are dark
                burgundy on transparent (ALLSTAR Financial Insurance in
                particular), which is invisible against the #280a0c header.
                The chip guarantees contrast for every logo regardless of its
                own colors, so no per-provider special-casing is needed.
              */}
                {logo && (
                  <div
                    style={{
                      background: "#fff",
                      borderRadius: 6,
                      padding: "8px 12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      maxWidth: 200,
                    }}
                  >
                    <img
                      src={logo}
                      alt={logoAlt || company || ""}
                      style={{
                        height: 40,
                        width: "auto",
                        maxWidth: "100%",
                        objectFit: "contain",
                        display: "block",
                      }}
                      decoding="async"
                    />
                  </div>
                )}
              </div>

              {/* Panel body */}
              <div style={{ padding: "20px 24px" }}>
                {/*
                Bios are authored with blank lines between paragraphs. Rendering
                them with whiteSpace: "pre-line" turned each blank line into a
                full empty line box (~25px at this line-height) that could not be
                tuned. Splitting into real <p> elements gives exact control over
                the gap and lets assistive technology announce paragraph
                boundaries instead of one undifferentiated block of text.
              */}
                <div style={{ marginBottom: specialty || videoUrl ? 16 : 0 }}>
                  {bio
                    .split(/\n\s*\n/)
                    .map((para) => para.trim())
                    .filter(Boolean)
                    .map((para, i, arr) => (
                      <p
                        key={i}
                        style={{
                          fontFamily: "'DM Sans', system-ui, sans-serif",
                          fontSize: 14,
                          color: "#5e5954",
                          lineHeight: 1.6,
                          margin: 0,
                          marginBottom: i === arr.length - 1 ? 0 : 10,
                          whiteSpace: "pre-line",
                        }}
                      >
                        {para}
                      </p>
                    ))}
                </div>
                {specialty && (
                  <div
                    style={{
                      padding: "12px 14px",
                      background: "#f7f4ef",
                      borderLeft: "3px solid #7f2028",
                      borderRadius: "0 4px 4px 0",
                      marginBottom: videoUrl ? 16 : 0,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "#7f2028",
                        marginBottom: 5,
                      }}
                    >
                      Specialties
                    </div>
                    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: 13, color: "#5e5954", lineHeight: 1.6 }}>
                      {specialty}
                    </div>
                  </div>
                )}

                <ProviderVideoTrigger
                  videoUrl={videoUrl}
                  providerName={name}
                  providerRole={[title, company].filter(Boolean).join(", ")}
                  onOpenChange={handleVideoOpenChange}
                />
              </div>
            </div>
          </>,
          document.body,
        )}

      {/* Hover trigger — wrap ONLY the presentational top portion of a card */}
      <div
        ref={wrapperRef}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        style={{
          position: "relative",
          width: "100%",
          cursor: bio ? "pointer" : "default",
          ...style,
        }}
      >
        {children}
      </div>
    </>
  );
}
