// Config-driven flow for /helping-an-aging-parent/* pages.
// Each node is a "choice page": heading + short subtext + up to 5 child choices.
// Leaf nodes (no children) render a "Content coming soon" placeholder.

import {
  Home, HeartHandshake, Building2, Activity, Scale,
  HelpCircle, DollarSign, ClipboardCheck, MessageCircle,
  ShieldAlert, Hospital, ArrowRightLeft, Users,
  HandHelping, Stethoscope, Wrench, Calendar,
  FileText, KeyRound, Landmark, Banknote,
  type LucideIcon,
} from "lucide-react";

// 3D WebP icons reused across the site for the 5 top-level cards
import iconLivingIndependently from "@/assets/icons/senior-independent-living-icon-washington.webp";
import iconHelpAtHome from "@/assets/icons/senior-placement-advisor-icon-washington.webp";
import iconHousingOptions from "@/assets/icons/senior-adult-family-home-3d-washington.webp";
import iconHealthCrisis from "@/assets/icons/senior-nursing-care-icon-washington.webp";
import iconFinancesLegal from "@/assets/icons/estate-financial-planning-icon-washington.webp";

export interface FlowNode {
  path: string;          // full path e.g. "/helping-an-aging-parent/exploring-care-options"
  label: string;         // card label / page heading
  icon: LucideIcon;
  image?: string;        // optional richer 3D WebP icon (preferred when present)
  subtext?: string;      // one-line context shown on the page
  children?: FlowNode[];
}

export const AGING_PARENT_ROOT: FlowNode = {
  path: "/helping-an-aging-parent",
  label: "Helping an Aging Parent",
  icon: HeartHandshake,
  subtext: "Let's help you find the right guidance. Where are you in this journey?",
  children: [
    {
      path: "/helping-an-aging-parent/living-independently",
      label: "My parent is still living independently",
      icon: Home,
      image: iconLivingIndependently,
      subtext: "What would you like to plan for next?",
      children: [
        { path: "/helping-an-aging-parent/living-independently/staying-safe-at-home", label: "Staying safe at home", icon: ShieldAlert },
        { path: "/helping-an-aging-parent/living-independently/early-planning", label: "Starting early planning conversations", icon: Calendar },
        { path: "/helping-an-aging-parent/living-independently/home-modifications", label: "Home modifications & aging in place", icon: Wrench },
        { path: "/helping-an-aging-parent/living-independently/long-term-financial-prep", label: "Long-term financial preparation", icon: DollarSign },
      ],
    },
    {
      path: "/helping-an-aging-parent/needs-help-at-home",
      label: "My parent needs more help at home",
      icon: HandHelping,
      image: iconHelpAtHome,
      subtext: "What kind of support are you looking into?",
      children: [
        { path: "/helping-an-aging-parent/needs-help-at-home/in-home-care", label: "In-home caregivers & support", icon: Stethoscope },
        { path: "/helping-an-aging-parent/needs-help-at-home/family-coordination", label: "Coordinating family caregivers", icon: Users },
        { path: "/helping-an-aging-parent/needs-help-at-home/safety-modifications", label: "Safety & home modifications", icon: Wrench },
        { path: "/helping-an-aging-parent/needs-help-at-home/respite-options", label: "Respite & relief options", icon: HeartHandshake },
      ],
    },
    {
      path: "/helping-an-aging-parent/exploring-care-options",
      label: "We're exploring care or housing options",
      icon: Building2,
      image: iconHousingOptions,
      subtext: "What are you trying to figure out?",
      children: [
        { path: "/helping-an-aging-parent/exploring-care-options/types-of-housing", label: "What types of senior housing exist?", icon: Building2 },
        { path: "/helping-an-aging-parent/exploring-care-options/comparing-costs", label: "How do I compare costs?", icon: DollarSign },
        { path: "/helping-an-aging-parent/exploring-care-options/eligibility", label: "What does my parent qualify for?", icon: ClipboardCheck },
        { path: "/helping-an-aging-parent/exploring-care-options/having-the-conversation", label: "How do I have this conversation with my parent?", icon: MessageCircle },
      ],
    },
    {
      path: "/helping-an-aging-parent/health-crisis",
      label: "There's been a health crisis or emergency",
      icon: Activity,
      image: iconHealthCrisis,
      subtext: "What do you need help with right now?",
      children: [
        { path: "/helping-an-aging-parent/health-crisis/hospital-discharge", label: "Hospital discharge planning", icon: Hospital },
        { path: "/helping-an-aging-parent/health-crisis/urgent-housing", label: "Urgent housing or care placement", icon: Building2 },
        { path: "/helping-an-aging-parent/health-crisis/legal-authority", label: "Legal authority to act quickly", icon: Scale },
        { path: "/helping-an-aging-parent/health-crisis/managing-the-home", label: "Managing the home during a crisis", icon: Home },
      ],
    },
    {
      path: "/helping-an-aging-parent/finances-and-legal",
      label: "My parent's finances and legal documents need attention",
      icon: Scale,
      image: iconFinancesLegal,
      subtext: "What would you like to address first?",
      children: [
        { path: "/helping-an-aging-parent/finances-and-legal/power-of-attorney", label: "Power of attorney & legal documents", icon: KeyRound },
        { path: "/helping-an-aging-parent/finances-and-legal/wills-and-estate-plan", label: "Wills & estate planning", icon: FileText },
        { path: "/helping-an-aging-parent/finances-and-legal/paying-for-care", label: "Paying for care", icon: Banknote },
        { path: "/helping-an-aging-parent/finances-and-legal/property-decisions", label: "Property & real estate decisions", icon: Landmark },
      ],
    },
  ],
};

// Build a flat lookup map of path -> node, plus parent map for breadcrumbs/back links.
export interface FlowLookupEntry {
  node: FlowNode;
  parent: FlowNode | null;
  trail: FlowNode[]; // ancestors from root → this node
}

function buildLookup(root: FlowNode): Map<string, FlowLookupEntry> {
  const map = new Map<string, FlowLookupEntry>();
  const walk = (node: FlowNode, parent: FlowNode | null, trail: FlowNode[]) => {
    const newTrail = [...trail, node];
    map.set(node.path, { node, parent, trail: newTrail });
    node.children?.forEach((child) => walk(child, node, newTrail));
  };
  walk(root, null, []);
  return map;
}

export const AGING_PARENT_LOOKUP = buildLookup(AGING_PARENT_ROOT);
