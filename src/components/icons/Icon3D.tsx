import React from "react";

type IconProps = { className?: string; size?: number };

const Defs = ({ id, from, to }: { id: string; from: string; to: string }) => (
  <defs>
    <linearGradient id={`${id}-tile`} x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor={from} />
      <stop offset="100%" stopColor={to} />
    </linearGradient>
    <linearGradient id={`${id}-gloss`} x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
      <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
    </linearGradient>
    <radialGradient id={`${id}-shade`} cx="50%" cy="100%" r="80%">
      <stop offset="0%" stopColor="#000000" stopOpacity="0.25" />
      <stop offset="100%" stopColor="#000000" stopOpacity="0" />
    </radialGradient>
    <filter id={`${id}-shadow`} x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#000" floodOpacity="0.28" />
    </filter>
  </defs>
);

const Tile = ({ id }: { id: string }) => (
  <g filter={`url(#${id}-shadow)`}>
    <rect x="6" y="6" width="52" height="52" rx="14" fill={`url(#${id}-tile)`} />
    <rect x="6" y="38" width="52" height="20" rx="14" fill={`url(#${id}-shade)`} />
    <rect x="8" y="8" width="48" height="22" rx="12" fill={`url(#${id}-gloss)`} />
  </g>
);

export const Icon3DFamily = ({ className, size = 64 }: IconProps) => (
  <svg viewBox="0 0 64 64" width={size} height={size} className={className} aria-hidden="true">
    <Defs id="fam" from="#3b82f6" to="#1e3a8a" />
    <Tile id="fam" />
    {/* parent left */}
    <circle cx="22" cy="24" r="5" fill="#fff" />
    <path d="M14 42c0-5 4-8 8-8s8 3 8 8v6H14z" fill="#fff" />
    {/* parent right */}
    <circle cx="42" cy="24" r="5" fill="#fff" />
    <path d="M34 42c0-5 4-8 8-8s8 3 8 8v6H34z" fill="#fff" />
    {/* child */}
    <circle cx="32" cy="32" r="3.5" fill="#fff" />
    <path d="M26 48c0-3.5 2.7-6 6-6s6 2.5 6 6v3H26z" fill="#fff" />
  </svg>
);

export const Icon3DHome = ({ className, size = 64 }: IconProps) => (
  <svg viewBox="0 0 64 64" width={size} height={size} className={className} aria-hidden="true">
    <Defs id="home" from="#34d399" to="#065f46" />
    <Tile id="home" />
    <path
      d="M32 16 L50 32 L46 32 L46 48 L36 48 L36 38 L28 38 L28 48 L18 48 L18 32 L14 32 Z"
      fill="#fff"
    />
  </svg>
);

export const Icon3DHeart = ({ className, size = 64 }: IconProps) => (
  <svg viewBox="0 0 64 64" width={size} height={size} className={className} aria-hidden="true">
    <Defs id="heart" from="#fb7185" to="#9f1239" />
    <Tile id="heart" />
    <path
      d="M32 48 C 18 38, 16 28, 22 24 C 27 20, 31 24, 32 27 C 33 24, 37 20, 42 24 C 48 28, 46 38, 32 48 Z"
      fill="#fff"
    />
  </svg>
);
