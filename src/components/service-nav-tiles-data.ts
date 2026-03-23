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
  { title: "Attorneys", subtitle: "", href: "/for-attorneys", icon: Scale, hue: 220 },
  { title: "Executors", subtitle: "", href: "/executors", icon: FileText, hue: 210 },
  { title: "Trustees", subtitle: "", href: "/executors", icon: ShieldCheck, hue: 200 },
  { title: "CPAs", subtitle: "", href: "/for-cpas", icon: Briefcase, hue: 215 },
  { title: "Financial Planning", subtitle: "", href: "/for-financial-planners", icon: TrendingUp, hue: 185 },
  { title: "Senior Moves", subtitle: "", href: "/senior-transitions", icon: Users, hue: 195 },
  { title: "Probate Sales", subtitle: "", href: "/probate-estate-sales", icon: Home, hue: 205 },
  { title: "The Process", subtitle: "", href: "/how-the-process-works", icon: ClipboardList, hue: 190 },
  { title: "Home Value", subtitle: "", href: "/why-valuation-matters", icon: BarChart3, hue: 175 },
  { title: "Probate Terms", subtitle: "", href: "/terminology", icon: BookOpen, hue: 225 },
  { title: "Service Areas", subtitle: "", href: "/counties", icon: MapPin, hue: 170 },
  { title: "Resources", subtitle: "", href: "/professional-referral-resource", icon: Handshake, hue: 200 },
];