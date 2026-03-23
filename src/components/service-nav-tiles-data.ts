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
  { title: "Attorneys", subtitle: "Estate & Probate Support", href: "/for-attorneys", icon: Scale, hue: 220 },
  { title: "Executors", subtitle: "Guidance & Next Steps", href: "/executors", icon: FileText, hue: 210 },
  { title: "Trustees", subtitle: "Property Decisions", href: "/executors", icon: ShieldCheck, hue: 200 },
  { title: "CPAs", subtitle: "Real Estate Coordination", href: "/for-cpas", icon: Briefcase, hue: 215 },
  { title: "Financial Planning", subtitle: "Property & Wealth", href: "/for-financial-planners", icon: TrendingUp, hue: 185 },
  { title: "Senior Moves", subtitle: "Downsizing Help", href: "/senior-transitions", icon: Users, hue: 195 },
  { title: "Probate Sales", subtitle: "Selling Inherited Property", href: "/probate-estate-sales", icon: Home, hue: 205 },
  { title: "Process", subtitle: "Step-by-Step Overview", href: "/how-the-process-works", icon: ClipboardList, hue: 190 },
  { title: "Valuation", subtitle: "Understanding Value", href: "/why-valuation-matters", icon: BarChart3, hue: 175 },
  { title: "Probate Terms", subtitle: "Simple Definitions", href: "/terminology", icon: BookOpen, hue: 225 },
  { title: "Service Areas", subtitle: "Western Washington", href: "/counties", icon: MapPin, hue: 170 },
  { title: "Resources", subtitle: "Trusted Partners", href: "/professional-referral-resource", icon: Handshake, hue: 200 },
];