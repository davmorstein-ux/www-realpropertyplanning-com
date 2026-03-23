import {
  Scale,
  FileText,
  Home,
  MapPin,
  Handshake,
  Users,
  BarChart3,
  ShieldCheck,
  BookOpen,
  Briefcase,
  TrendingUp,
  ClipboardList,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceTile {
  title: string;
  subtitle: string;
  href: string;
  icon: LucideIcon;
  hue: number;
}

export const serviceTiles: ServiceTile[] = [
  { title: "For Attorneys", subtitle: "Estate & Probate Support", href: "/for-attorneys", icon: Scale, hue: 220 },
  { title: "Personal Representatives", subtitle: "Guidance for Executors", href: "/executors", icon: FileText, hue: 210 },
  { title: "Trustees & Fiduciaries", subtitle: "Property Decision Support", href: "/executors", icon: ShieldCheck, hue: 200 },
  { title: "CPAs", subtitle: "Coordinating Real Estate Decisions", href: "/for-cpas", icon: Briefcase, hue: 215 },
  { title: "Financial Planners", subtitle: "Property & Wealth Strategy", href: "/for-financial-planners", icon: TrendingUp, hue: 185 },
  { title: "Senior Transitions", subtitle: "Downsizing & Housing Changes", href: "/senior-transitions", icon: Users, hue: 195 },
  { title: "Probate & Estate Sales", subtitle: "Selling Inherited Property", href: "/probate-estate-sales", icon: Home, hue: 205 },
  { title: "How the Process Works", subtitle: "Step-by-Step Overview", href: "/how-the-process-works", icon: ClipboardList, hue: 190 },
  { title: "Why Valuation Matters", subtitle: "Understanding Property Value", href: "/why-valuation-matters", icon: BarChart3, hue: 175 },
  { title: "Probate Terminology", subtitle: "Simple Definitions & Guidance", href: "/terminology", icon: BookOpen, hue: 225 },
  { title: "Service Areas", subtitle: "Western Washington Coverage", href: "/counties", icon: MapPin, hue: 170 },
  { title: "Professional Resources", subtitle: "Trusted Network & Partners", href: "/professional-referral-resource", icon: Handshake, hue: 200 },
];