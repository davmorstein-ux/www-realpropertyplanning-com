import type { ReactNode } from "react";
import { shade } from "@/lib/careCostMath";

/**
 * Premium calculator design kit (Oct 3, 2026), from the owner-approved Cost of
 * Care mockup: a header band in the tool's colour with a gold line icon, quiet
 * inputs, gold accents, and ONE hero result on a tinted panel.
 *
 * Colours: care-type calculators use their care-type colour
 * (src/lib/careCalculators.ts); every AFH Club tool uses AFH green (owner,
 * Oct 3, 2026). Gold is the shared accent.
 *
 * index.css forces font-size, weight and colour on bare div, span, p, label,
 * input and button with !important, so every rule here sits on a doubled
 * "ck-" class with !important. Class names avoid card, tile, btn, cta and
 * section (index.css pads anything whose class contains "section" by 32px).
 */

export const AFH_TOOL_COLOR = "#14663f";
export const CK_GOLD = "#B8862B";
export const CK_GOLD_TEXT = "#8A6110";
export const CK_GOLD_ICON = "#E3B85C";

export const ckVars = (color: string) =>
  ({ ["--c" as string]: color, ["--deep" as string]: shade(color, 0.38), ["--tint" as string]: shade(color, -0.9) }) as React.CSSProperties;

/* ---------- Icons (gold line art, 64×64) ---------- */
const S = { stroke: CK_GOLD_ICON, strokeWidth: 4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };
export const CK_ICONS: Record<string, ReactNode> = {
  chart: (
    <>
      <path {...S} d="M10 54 H54" />
      <path {...S} d="M16 44 L28 32 L36 38 L52 18" />
      <path {...S} d="M42 18 H52 V28" />
    </>
  ),
  scale: (
    <>
      <path {...S} d="M32 10 V54 M20 54 H44" />
      <path {...S} d="M14 18 H50" />
      <path {...S} d="M14 18 L6 36 H22 Z M50 18 L42 36 H58 Z" />
    </>
  ),
  key: (
    <>
      <circle {...S} cx="22" cy="32" r="11" />
      <path {...S} d="M33 32 H56 M48 32 V40 M54 32 V38" />
    </>
  ),
  check: (
    <>
      <path {...S} d="M12 10 H44 L52 18 V54 H12 Z" />
      <path {...S} d="M20 30 L26 36 L38 24 M20 46 H44" />
    </>
  ),
  pin: (
    <>
      <path {...S} d="M32 56 C20 42 14 33 14 25 A18 18 0 0 1 50 25 C50 33 44 42 32 56 Z" />
      <circle {...S} cx="32" cy="25" r="6" />
    </>
  ),
  house: (
    <>
      <path {...S} d="M8 30 L32 9 L56 30" />
      <path {...S} d="M14 26 V54 H50 V26" />
    </>
  ),
};

/* ---------- Shell ---------- */
export function CalcShell({
  color,
  icon,
  eyebrow,
  title,
  subtitle,
  children,
  width = 900,
}: {
  color: string;
  icon: keyof typeof CK_ICONS;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  width?: number;
}) {
  return (
    <div className="ck" style={{ ...ckVars(color), maxWidth: width }}>
      <style dangerouslySetInnerHTML={{ __html: CK_CSS }} />
      <div className="ck-head">
        <svg width="54" height="54" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
          {CK_ICONS[icon]}
        </svg>
        <div className="ck-headtext">
          <div className="ck-eyebrow">{eyebrow}</div>
          <h2 className="ck-title">{title}</h2>
          {subtitle && <div className="ck-sub">{subtitle}</div>}
        </div>
      </div>
      <div className="ck-body">{children}</div>
    </div>
  );
}

/** A titled group of inputs inside the shell. */
export function CalcSection({ title, children, aside }: { title: string; children: ReactNode; aside?: ReactNode }) {
  return (
    <div className="ck-group" role="group" aria-label={title}>
      <div className="ck-grouphead">
        <h3 className="ck-grouptitle">{title}</h3>
        {aside}
      </div>
      {children}
    </div>
  );
}

/** Label + control + optional hint. Put an <input className="ck-input"> or <select className="ck-input"> inside. */
export function CalcField({ label, htmlFor, hint, children, suffix }: { label: string; htmlFor: string; hint?: ReactNode; children: ReactNode; suffix?: ReactNode }) {
  return (
    <div className="ck-field">
      <label className="ck-label" htmlFor={htmlFor}>{label}</label>
      <div className="ck-control">
        {children}
        {suffix && <span className="ck-suffix">{suffix}</span>}
      </div>
      {hint && <div className="ck-hint">{hint}</div>}
    </div>
  );
}

/** Two-way toggle, e.g. % / $. */
export function CalcSegment<T extends string>({ value, options, onChange, label }: { value: T; options: { value: T; label: string }[]; onChange: (v: T) => void; label: string }) {
  return (
    <div className="ck-seg" role="group" aria-label={label}>
      {options.map((o) => (
        <button key={o.value} type="button" className={`ck-segopt${o.value === value ? " ck-on" : ""}`} aria-pressed={o.value === value} onClick={() => onChange(o.value)}>
          {o.label}
        </button>
      ))}
    </div>
  );
}

/** The one big answer, on the tinted panel. */
export function CalcHero({ label, value, sub, note, tone }: { label: string; value: string; sub?: ReactNode; note?: ReactNode; tone?: "good" | "bad" }) {
  return (
    <div className="ck-hero" aria-live="polite">
      <div className="ck-herolabel">{label}</div>
      <div className={`ck-heronum${tone === "bad" ? " ck-bad" : ""}`}>{value}</div>
      {sub && <div className="ck-herosub">{sub}</div>}
      {note && <div className="ck-heronote">{note}</div>}
    </div>
  );
}

/** Supporting figures under the hero. */
export function CalcStats({ items }: { items: { label: string; value: string; tone?: "bad" }[] }) {
  return (
    <div className="ck-stats">
      {items.map((s) => (
        <div key={s.label} className="ck-stat">
          <div className="ck-statlabel">{s.label}</div>
          <div className={`ck-statval${s.tone === "bad" ? " ck-bad" : ""}`}>{s.value}</div>
        </div>
      ))}
    </div>
  );
}

/** Horizontal bars; `pct` is 0–100 of the track. `gold` paints the bar gold. */
export function CalcBars({ items }: { items: { label: string; pct: number; value: string; gold?: boolean }[] }) {
  return (
    <div className="ck-bars">
      {items.map((b) => (
        <div key={b.label} className="ck-barrow">
          <div className="ck-barname">{b.label}</div>
          <div className="ck-track" aria-hidden="true">
            <div className="ck-bar" style={{ width: `${Math.max(0, Math.min(100, b.pct))}%`, background: b.gold ? CK_GOLD : "var(--c)" }} />
          </div>
          <div className={`ck-barval${b.gold ? " ck-goldtext" : ""}`}>{b.value}</div>
        </div>
      ))}
    </div>
  );
}

/** Empty state in place of the hero, before the required inputs are filled. */
export function CalcWaiting({ children }: { children: ReactNode }) {
  return <div className="ck-waiting">{children}</div>;
}

/** Source / disclaimer note with the thin dark-red rule, plus optional actions on the right. */
export function CalcFoot({ children, actions }: { children: ReactNode; actions?: ReactNode }) {
  return (
    <div className="ck-foot">
      <div className="ck-source">{children}</div>
      {actions && <div className="ck-actions">{actions}</div>}
    </div>
  );
}

export const CK_CSS = `
.ck.ck { background: #ffffff; border: 1px solid #d3dfe8; border-radius: 16px; overflow: hidden; box-shadow: 0 6px 24px rgba(20,40,58,0.08); margin: 0 auto; width: 100%; box-sizing: border-box; font-family: 'DM Sans', system-ui, sans-serif; color: #14283a; }
.ck .ck-head { display: flex; align-items: center; gap: 18px; background: var(--deep); padding: 22px 26px; }
.ck .ck-head svg { flex: 0 0 auto; }
.ck .ck-headtext { min-width: 0; }
.ck .ck-eyebrow.ck-eyebrow { font-size: 14px !important; font-weight: 700 !important; letter-spacing: 0.16em !important; text-transform: uppercase; color: #F0CB7A !important; margin: 0 0 4px !important; }
.ck h2.ck-title.ck-title { font-family: 'DM Sans', system-ui, sans-serif !important; font-size: clamp(24px, 3.4vw, 34px) !important; line-height: 1.15 !important; font-weight: 700 !important; color: #ffffff !important; margin: 0 !important; text-wrap: balance; }
.ck .ck-sub.ck-sub { font-size: 16px !important; color: rgba(255,255,255,0.88) !important; margin-top: 6px !important; line-height: 1.4 !important; }
.ck .ck-body { padding: 22px 26px 20px; }
.ck .ck-group.ck-group { padding: 0 0 18px !important; margin: 0 0 18px !important; border-bottom: 1px solid #e6ebef; }
.ck .ck-grouphead { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin: 0 0 12px; }
.ck h3.ck-grouptitle.ck-grouptitle { font-family: 'DM Sans', sans-serif !important; font-size: 13px !important; font-weight: 700 !important; letter-spacing: 0.16em !important; text-transform: uppercase; color: var(--deep) !important; margin: 0 !important; }
.ck .ck-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px 18px; }
.ck .ck-grid3 { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px 18px; }
.ck .ck-field { min-width: 0; }
.ck label.ck-label.ck-label { display: block; font-family: 'DM Sans', sans-serif !important; font-size: 15px !important; font-weight: 700 !important; color: #14283a !important; margin: 0 0 6px !important; letter-spacing: 0 !important; text-transform: none !important; }
.ck .ck-control { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 10px; }
.ck .ck-control > input.ck-input, .ck .ck-control > select.ck-input { flex: 1 1 140px; width: auto; }
.ck input.ck-input.ck-input, .ck select.ck-input.ck-input { width: 100%; min-height: 48px; box-sizing: border-box; padding: 10px 14px !important; font-family: 'DM Sans', sans-serif !important; font-size: 17px !important; font-weight: 500 !important; color: #14283a !important; background: #ffffff !important; border: 1px solid #c9d7e2 !important; border-radius: 10px !important; font-variant-numeric: tabular-nums; }
.ck input.ck-input.ck-input:focus, .ck select.ck-input.ck-input:focus { outline: none; border-color: var(--c) !important; box-shadow: 0 0 0 3px color-mix(in srgb, var(--c) 22%, transparent); }
.ck .ck-suffix.ck-suffix { flex: 0 0 auto; font-size: 15px !important; font-weight: 700 !important; color: var(--c) !important; white-space: nowrap; font-variant-numeric: tabular-nums; }
.ck .ck-hint.ck-hint { font-size: 14px !important; line-height: 1.45 !important; color: #2b3640 !important; margin-top: 6px !important; }
.ck .ck-seg { display: inline-flex; flex: 0 0 auto; border: 1px solid #c9d7e2; border-radius: 10px; overflow: hidden; }
.ck button.ck-segopt.ck-segopt { flex: 0 0 auto; width: 48px !important; min-width: 48px !important; min-height: 46px !important; padding: 0 14px !important; background: #eef3f7 !important; color: #1f2933 !important; font-family: 'DM Sans', sans-serif !important; font-size: 16px !important; font-weight: 700 !important; border: 0 !important; cursor: pointer !important; }
.ck button.ck-segopt.ck-segopt.ck-on { background: var(--deep) !important; color: #ffffff !important; }
.ck button.ck-segopt.ck-segopt:focus-visible { outline: 3px solid ${CK_GOLD}; outline-offset: -3px; }
.ck .ck-hero { background: var(--tint); border-radius: 14px; padding: 20px 18px 18px; text-align: center; margin: 4px 0 14px; }
.ck .ck-herolabel.ck-herolabel { font-size: 13px !important; font-weight: 700 !important; letter-spacing: 0.16em !important; text-transform: uppercase; color: var(--deep) !important; }
.ck .ck-heronum.ck-heronum { font-size: clamp(44px, 7.5vw, 66px) !important; font-weight: 800 !important; line-height: 1.05 !important; color: #14283a !important; font-variant-numeric: tabular-nums; margin: 6px 0 4px !important; letter-spacing: -0.01em; }
.ck .ck-herosub.ck-herosub { font-size: 17px !important; color: #1f2933 !important; font-weight: 500 !important; }
.ck .ck-heronote.ck-heronote { font-size: 16px !important; color: #14283a !important; margin-top: 8px !important; }
.ck .ck-bad.ck-bad { color: #9b1c1c !important; }
.ck .ck-stats { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; margin: 0 0 16px; }
.ck .ck-stat { border: 1px solid #e1e7ec; border-radius: 12px; padding: 12px 14px; text-align: center; background: #ffffff; }
.ck .ck-statlabel.ck-statlabel { font-size: 12px !important; font-weight: 700 !important; letter-spacing: 0.12em !important; text-transform: uppercase; color: #2b3640 !important; }
.ck .ck-statval.ck-statval { font-size: 22px !important; font-weight: 700 !important; color: var(--deep) !important; margin-top: 4px !important; font-variant-numeric: tabular-nums; }
.ck .ck-bars { margin: 0 0 16px; }
.ck .ck-barrow { display: grid; grid-template-columns: 170px minmax(0, 1fr) 104px; align-items: center; gap: 12px; margin-bottom: 8px; }
.ck .ck-barname.ck-barname { font-size: 15px !important; font-weight: 600 !important; color: #14283a !important; }
.ck .ck-track { height: 14px; background: #f1f4f6; border-radius: 4px; overflow: hidden; }
.ck .ck-bar { height: 100%; border-radius: 4px; transition: width 250ms ease; }
.ck .ck-barval.ck-barval { font-size: 15px !important; font-weight: 700 !important; color: var(--c) !important; text-align: right; white-space: nowrap; min-width: 64px; font-variant-numeric: tabular-nums; }
.ck .ck-goldtext.ck-goldtext { color: ${CK_GOLD_TEXT} !important; }
.ck ul.ck-notes { list-style: none !important; margin: 0 0 16px !important; padding: 14px 16px !important; background: #f6f8fa; border-radius: 12px; }
.ck ul.ck-notes li { display: block !important; font-size: 15px !important; font-weight: 500 !important; line-height: 1.5 !important; color: #1f2933 !important; padding: 3px 0 3px 18px; position: relative; }
.ck ul.ck-notes li::before { content: ""; position: absolute; left: 2px; top: 11px; width: 7px; height: 7px; border-radius: 50%; background: var(--c); }
.ck ul.ck-notes li strong { color: #14283a !important; font-size: 15px !important; }
.ck .ck-waiting.ck-waiting { background: #f6f8fa; border: 1px dashed #c9d7e2; border-radius: 14px; padding: 22px 18px; text-align: center; font-size: 16px !important; color: #1f2933 !important; margin: 4px 0 14px; }
.ck .ck-foot { display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 12px 20px; margin-top: 6px; padding-top: 14px; border-top: 1px solid #dfe5ea; }
.ck .ck-source.ck-source { flex: 1 1 340px; padding-left: 12px; border-left: 4px solid #8a1c2b; font-size: 14px !important; font-weight: 500 !important; line-height: 1.5 !important; color: #1f2933 !important; }
.ck .ck-source a { color: #1f2933 !important; font-size: 14px !important; text-decoration: underline; text-underline-offset: 2px; }
.ck .ck-actions { display: flex; flex-direction: column; align-items: flex-end; gap: 6px; }
.ck .ck-actions a, .ck .ck-actions button { background: none !important; border: 0 !important; padding: 4px 0 !important; min-height: 32px; font-family: 'DM Sans', sans-serif !important; font-size: 16px !important; font-weight: 600 !important; color: #1B3A6B !important; text-decoration: underline !important; text-underline-offset: 3px; cursor: pointer !important; }
@media (max-width: 640px) {
  .ck .ck-head { padding: 18px 16px; gap: 12px; }
  .ck .ck-head svg { width: 42px; height: 42px; }
  .ck .ck-body { padding: 18px 14px 16px; }
  .ck .ck-grid, .ck .ck-grid3 { grid-template-columns: minmax(0, 1fr); }
  .ck .ck-stats { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .ck .ck-barrow { grid-template-columns: 104px minmax(0, 1fr) 84px; gap: 8px; }
  .ck .ck-barname.ck-barname, .ck .ck-barval.ck-barval { font-size: 14px !important; line-height: 1.25 !important; }
  .ck .ck-actions { align-items: flex-start; }
}
@media (prefers-reduced-motion: reduce) { .ck .ck-bar { transition: none; } }
`;
