## Update bottom navigation pill

Edit `src/components/SiteBottomNav.tsx`:

1. **Pill padding** — Change `.sbn-bar` padding from `6px 28px` to `12px 28px 8px` and remove the fixed `height: 82px` so it auto-grows. Do the same for the mobile `@media (max-width: 639px)` override (remove fixed 82px height, padding `12px 10px 8px`).

2. **Restore labels** — Replace the zero-width-space `​` in each of the six `<span className="sbn-label">` with the proper text:
   - Home → `HOME`
   - Back / Forward gear → `BACK / FORWARD`
   - Site Map → `SITE MAP`
   - Search → `SEARCH`
   - Contact → `CONTACT`
   - Chat → `CHAT`

3. **Label style** — Existing `.sbn-label` already uses uppercase, 9px, weight 700, color `#1B2B4B`, centered. Force the mobile override to also stay at 9px (currently 10px) to match the request. Keep `white-space: nowrap`.

No icon sizes, colors, borders, or other styling change.
