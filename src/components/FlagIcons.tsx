// Simple, clean SVG flag icons — built inline rather than pulling in a
// flag-icon library or relying on emoji flags, which render inconsistently
// across older devices and Windows versions. All flags share a common
// viewBox and rounded-rect clip for a consistent look in the switcher.

interface FlagProps {
  size?: number;
}

const clipId = (name: string) => `flag-clip-${name}`;

const FlagWrapper = ({ id, size = 20, children }: { id: string; size?: number; children: React.ReactNode }) => (
  <svg width={size} height={(size * 3) / 4} viewBox="0 0 24 18" aria-hidden="true" style={{ flexShrink: 0, borderRadius: 3 }}>
    <clipPath id={clipId(id)}>
      <rect width="24" height="18" rx="2" />
    </clipPath>
    <g clipPath={`url(#${clipId(id)})`}>{children}</g>
  </svg>
);

export const FlagUS = ({ size }: FlagProps) => (
  <FlagWrapper id="us" size={size}>
    <rect width="24" height="18" fill="#fff" />
    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
      <rect key={i} y={i * (18 / 13)} width="24" height={18 / 13} fill="#B22234" />
    ))}
    <rect width="10.5" height={9 * (18 / 13)} fill="#3C3B6E" />
  </FlagWrapper>
);

export const FlagMX = ({ size }: FlagProps) => (
  <FlagWrapper id="mx" size={size}>
    <rect width="8" height="18" fill="#006847" />
    <rect x="8" width="8" height="18" fill="#fff" />
    <rect x="16" width="8" height="18" fill="#CE1126" />
    <circle cx="12" cy="9" r="2.4" fill="#a0522d" opacity="0.85" />
  </FlagWrapper>
);

export const FlagTW = ({ size }: FlagProps) => (
  <FlagWrapper id="tw" size={size}>
    <rect width="24" height="18" fill="#FE0000" />
    <rect width="12" height="9" fill="#000095" />
    <circle cx="6" cy="4.5" r="3" fill="#000095" />
    <circle cx="6" cy="4.5" r="2.1" fill="#fff" />
    <circle cx="6" cy="4.5" r="1.1" fill="#000095" />
  </FlagWrapper>
);

export const FlagCN = ({ size }: FlagProps) => (
  <FlagWrapper id="cn" size={size}>
    <rect width="24" height="18" fill="#DE2910" />
    <polygon points="4,2 5,5 8,5 5.5,7 6.5,10 4,8 1.5,10 2.5,7 0,5 3,5" fill="#FFDE00" transform="translate(1,0) scale(0.9)" />
    <circle cx="9" cy="2" r="0.6" fill="#FFDE00" />
    <circle cx="11" cy="4.2" r="0.6" fill="#FFDE00" />
    <circle cx="11" cy="7" r="0.6" fill="#FFDE00" />
    <circle cx="9" cy="8.8" r="0.6" fill="#FFDE00" />
  </FlagWrapper>
);

export const FlagPH = ({ size }: FlagProps) => (
  <FlagWrapper id="ph" size={size}>
    <rect width="24" height="9" fill="#0038A8" />
    <rect y="9" width="24" height="9" fill="#CE1126" />
    <polygon points="0,0 0,18 8,9" fill="#fff" />
    <circle cx="3.2" cy="9" r="1.6" fill="#FCD116" />
  </FlagWrapper>
);

export const FlagVN = ({ size }: FlagProps) => (
  <FlagWrapper id="vn" size={size}>
    <rect width="24" height="18" fill="#DA251D" />
    <polygon
      points="12,4 13.05,7.2 16.4,7.2 13.68,9.15 14.7,12.35 12,10.4 9.3,12.35 10.32,9.15 7.6,7.2 10.95,7.2"
      fill="#FFFF00"
    />
  </FlagWrapper>
);

export const FLAG_COMPONENTS: Record<string, React.FC<FlagProps>> = {
  en: FlagUS,
  es: FlagMX,
  "zh-TW": FlagTW,
  "zh-CN": FlagCN,
  tl: FlagPH,
  vi: FlagVN,
};
