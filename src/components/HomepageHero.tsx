import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HeroBandTitle from "@/components/HeroBandTitle";

/**
 * Homepage hero — floating island header + full-viewport Pine Ridge photo + trust bar.
 * This component is rendered on `/` only (see src/pages/Index.tsx). The site-wide
 * <Header /> is intentionally still rendered above it; this floating header sits on
 * top of the hero photo as a homepage-only visual treatment.
 */
type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Probate & Estate", href: "/probate-estate-sales" },
  {
    label: "Senior Transitions",
    href: "/senior-transitions",
    children: [
      { label: "Senior Transitions", href: "/senior-transitions" },
      { label: "Downsizing", href: "/sell-house-fund-senior-living" },
    ],
  },
  { label: "Property Valuation", href: "/why-valuation-matters" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
      { label: "Probate Sales", href: "/probate-estate-sales" },
      { label: "Senior & Estate Services", href: "/senior-estate-services" },
      { label: "Senior Living Advisors", href: "/senior-living-advisors" },
      { label: "For Executors", href: "/executors" },
      { label: "How the Process Works", href: "/how-the-process-works" },
      { label: "Professional Referral Resource", href: "/professional-referral-resource" },
      { label: "Gray Divorce", href: "/gray-divorce" },
    ],
  },
  { label: "Resources", href: "/resources" },

  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const HomepageHero = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(() => (typeof window !== "undefined" ? window.innerWidth < 769 : false));
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (label: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpenDropdown(label);
  };
  const scheduleClose = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };
  const { pathname } = useLocation();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 769);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const id = "rpp-preview-fonts";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap";
      document.head.appendChild(link);
    }
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Parallax: translateY only via --parallax-offset. Desktop (>=1024px) only.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const parallaxImages = document.querySelectorAll<HTMLElement>(".no-parallax-crop");
    if (parallaxImages.length === 0) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let rafId = 0;
    let cancelled = false;

    const updateParallax = () => {
      if (cancelled) return;
      const desktop = window.innerWidth >= 1024 && !reduceMotion;
      parallaxImages.forEach((img) => {
        if (!desktop) {
          img.style.setProperty("--parallax-offset", "0px");
          return;
        }
        const scrolled = window.scrollY;
        const rate = 0.3;
        const offset = scrolled * rate;
        img.style.setProperty("--parallax-offset", `-${offset}px`);
      });
      rafId = requestAnimationFrame(updateParallax);
    };
    rafId = requestAnimationFrame(updateParallax);
    return () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const fontBody = { fontFamily: "'DM Sans', system-ui, sans-serif" };
  const fontHead = { fontFamily: "'DM Sans', 'DM Sans', sans-serif" };

  return (
    <div style={{ ...fontBody, background: "#FFFFFF", color: "#1E3A5F", margin: 0, padding: 0 }}>


      {/* ===== Hero ===== */}
      <style>{`@keyframes rppHeroFadeIn { from { opacity: 0 } to { opacity: 1 } }`}</style>
      <section
        className="hero-panorama"
        style={{
          position: "relative",
          width: "100%",
          background: "transparent",
          overflow: "hidden",
          margin: 0,
          padding: 0,
        }}
      >
        <img
          src="/homepage-hero.webp"
          alt="Senior couple by a red convertible on a coastal road with a SOLD Real Property Planning sign and Next Chapter moving truck"
          className="no-parallax-crop"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          style={{
            display: "block",
            background: "transparent",
            opacity: 0,
            animation: "rppHeroFadeIn 1.2s ease forwards",
            margin: 0,
            padding: 0,
          }}
        />

      </section>
      <HeroBandTitle>
        Welcome to Real Property Planning
      </HeroBandTitle>
    </div>
  );
};

export default HomepageHero;
