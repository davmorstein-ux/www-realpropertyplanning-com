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

export const FlagUS = ({ size }: FlagProps) => {
  const stripeHeight = 18 / 13;
  return (
    <FlagWrapper id="us" size={size}>
      <rect width="24" height="18" fill="#fff" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect key={i} y={i * 2 * stripeHeight} width="24" height={stripeHeight} fill="#B22234" />
      ))}
      <rect width="10.5" height={7 * stripeHeight} fill="#3C3B6E" />
    </FlagWrapper>
  );
};

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
    <polygon points="4.70,2.40 5.17,3.85 6.70,3.85 5.46,4.75 5.93,6.20 4.70,5.30 3.47,6.20 3.94,4.75 2.70,3.85 4.23,3.85" fill="#FFDE00" />
    <polygon points="8.20,1.30 8.34,1.71 8.77,1.71 8.42,1.97 8.55,2.39 8.20,2.13 7.85,2.39 7.98,1.97 7.63,1.71 8.06,1.71" fill="#FFDE00" />
    <polygon points="9.40,3.40 9.54,3.81 9.97,3.81 9.62,4.07 9.75,4.49 9.40,4.23 9.05,4.49 9.18,4.07 8.83,3.81 9.26,3.81" fill="#FFDE00" />
    <polygon points="9.00,5.90 9.14,6.31 9.57,6.31 9.22,6.57 9.35,6.99 9.00,6.73 8.65,6.99 8.78,6.57 8.43,6.31 8.86,6.31" fill="#FFDE00" />
    <polygon points="7.40,7.50 7.54,7.91 7.97,7.91 7.62,8.17 7.75,8.59 7.40,8.33 7.05,8.59 7.18,8.17 6.83,7.91 7.26,7.91" fill="#FFDE00" />
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
      points="12.00,4.80 12.94,7.71 15.99,7.70 13.52,9.49 14.47,12.40 12.00,10.60 9.53,12.40 10.48,9.49 8.01,7.70 11.06,7.71"
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
