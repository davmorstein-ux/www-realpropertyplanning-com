// Config-driven flow for /helping-an-aging-parent/* pages.
// Each node is a "choice page": heading + short subtext + up to 5 child choices.
// Leaf nodes (no children) render a "Content coming soon" placeholder.

import {
  Home, HeartHandshake, Building2, Activity, Scale, DollarSign, ClipboardCheck, MessageCircle,
  ShieldAlert, Hospital, Users,
  HandHelping, Stethoscope, Wrench, Calendar,
  FileText, KeyRound, Landmark, Banknote,
  type LucideIcon,
} from "lucide-react";

// 3D WebP icons reused across the site for the 5 top-level cards
import housingOptionsHero from "@/assets/housing_options_hero.webp";

export interface FlowNode {
  path: string;          // full path e.g. "/helping-an-aging-parent/exploring-care-options"
  label: string;         // card label / page heading
  icon: LucideIcon;
  image?: string;        // optional richer 3D WebP icon (preferred when present)
  heroImage?: string;    // optional full-width hero image for this page
  heroAlt?: string;
  heroBandTitle?: string;
  subtext?: string;      // one-line context shown on the page
  content?: {
    intro: string;
    sections: { heading: string; body: string }[];
    closing: string;
  };
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
      
      heroBandTitle: "Living Independently",
      subtext: "What would you like to plan for next?",
      children: [
        {
          path: "/helping-an-aging-parent/living-independently/staying-safe-at-home",
          label: "Staying safe at home",
          icon: ShieldAlert,
          content: {
            intro: "Most families don't think about home safety until something happens — a fall, a close call, a neighbor who noticed something was off. The good news is that many risks can be reduced with simple, affordable changes, and planning ahead is always easier than reacting after the fact.",
            sections: [
              { heading: "What families typically look at", body: "Removing trip hazards like loose rugs and cluttered hallways\nAdding grab bars in bathrooms and handrails on stairs\nImproving lighting in hallways, stairways, and entry points\nInstalling a medical alert or personal emergency response system\nReviewing medication management — pill organizers or reminder systems\nConsidering whether the home layout still makes sense long-term" },
              { heading: "What to do first", body: "Walk through the home with fresh eyes, or ask someone else to do it. Look at the bathroom, the stairs, the entry, and the kitchen — these are where most incidents happen. Make a short list of what feels unsafe and start there." },
              { heading: "A note about next steps", body: "If safety concerns are pointing toward a bigger conversation about whether the home is still the right fit long-term, that's worth exploring separately. There's no rush — but it helps to understand the options before a crisis forces the decision." },
            ],
            closing: "Next step: the site's aging-in-place and housing guides cover what to plan for, and Real Property Planning's Find a Professional page lists independent professionals you can contact directly.",
          },
        },
        {
          path: "/helping-an-aging-parent/living-independently/early-planning",
          label: "Starting early planning conversations",
          icon: Calendar,
          content: {
            intro: "These conversations are rarely comfortable, but families who have them early are almost always glad they did. Waiting until there's a crisis means making important decisions under pressure — with less information, and sometimes without your parent's full input.",
            sections: [
              { heading: "What early planning typically covers", body: "What your parent wants if they can no longer live independently\nWhether they prefer staying home with help, moving in with family, or transitioning to a care community\nWhere key documents are kept — will, power of attorney, insurance policies, account information\nWho they want making decisions if they can't make them themselves\nWhat their financial picture looks like and whether it supports their preferences" },
              { heading: "How to start the conversation", body: "You don't have to cover everything at once. A simple opening — 'I want to make sure I understand what you'd want if things changed' — is enough to start. Most parents, when they understand this is about respecting their wishes rather than taking over, are more willing to talk than their children expected." },
              { heading: "What this isn't", body: "This isn't about convincing your parent to move or change anything. It's about understanding what they want so you can support them — and so the right people have the right authority if it's ever needed." },
            ],
            closing: "Next step: the site's planning-ahead guides cover what to discuss and which documents matter, and Real Property Planning's Find a Professional page lists independent professionals you can contact directly.",
          },
        },
        {
          path: "/helping-an-aging-parent/living-independently/home-modifications",
          label: "Home modifications & aging in place",
          icon: Wrench,
          content: {
            intro: "Many older adults want to stay in their home as long as possible — and with the right modifications, that's often realistic. The goal is to make the home work for changing physical needs without requiring a move.",
            sections: [
              { heading: "Common modifications Washington families consider", body: "Bathroom: Grab bars, walk-in shower conversion, raised toilet seat, non-slip flooring\nEntryways: Ramp or zero-step entry, lever door handles, keypad locks\nStairs: Stairlift, handrails on both sides, or relocating the primary bedroom to the main floor\nKitchen: Pull-out shelves, lever faucets, accessible storage\nLighting: Motion-activated lighting, brighter bulbs, night lights in key areas\nGeneral: Wider doorways for walker or wheelchair access, removing thresholds between rooms" },
              { heading: "What it typically costs", body: "Minor modifications — grab bars, lighting, hardware — can often be done for a few hundred dollars. Larger projects like stairlifts, ramps, or bathroom remodels cost much more — often several thousand dollars, and a full accessible bathroom remodel can run well into five figures. Get written bids before deciding. Some Washington residents may qualify for assistance through Area Agencies on Aging or local nonprofit housing programs." },
              { heading: "Who does this work", body: "A Certified Aging-in-Place Specialist (CAPS) is a contractor trained specifically in these modifications. Your local home health agency or senior services organization can often provide referrals." },
            ],
            closing: "Next step: the site's aging-in-place guides cover home modifications in more detail, and Real Property Planning's Find a Professional page lists independent professionals you can contact directly.",
          },
        },
        {
          path: "/helping-an-aging-parent/living-independently/long-term-financial-prep",
          label: "Long-term financial preparation",
          icon: DollarSign,
          content: {
            intro: "Senior care is expensive, and most families underestimate the costs until they're in the middle of it. Planning ahead — even imperfectly — puts you in a much stronger position than figuring it out under pressure.",
            sections: [
              { heading: "What care actually costs in Washington", body: "Washington medians (CareScout 2025 survey): in-home care about $45 an hour; assisted living about $7,550 a month; nursing home about $13,155 a month for a semi-private room. Memory care typically costs more than assisted living (an estimate: roughly $9,000–$10,000+ a month). Adult family home private-pay rates are set by each home. Actual prices vary widely by area and care level; Seattle-area prices run higher." },
              { heading: "What Medicare covers — and doesn't", body: "Medicare covers short-term skilled nursing and rehabilitation only after a formal inpatient hospital stay of at least three days in a row (observation days and ER time do not count): days 1–20 in full, days 21–100 with a $217-a-day coinsurance in 2026, and nothing after day 100. It does not cover long-term custodial care. Understanding this distinction prevents costly surprises." },
              { heading: "Washington Medicaid and other resources", body: "Washington's Medicaid program (Apple Health) covers long-term care for those who qualify financially and medically. Eligibility rules are strict and worth understanding early. Veterans and surviving spouses may also qualify for Aid & Attendance, an add-on to the VA pension (wartime service and the pension's income and net-worth limits apply)." },
              { heading: "What to do now", body: "Locate financial and legal documents. Understand the rough monthly cost of the care your parent may eventually need. Talk with an elder law attorney if there are questions about Medicaid planning or asset protection." },
            ],
            closing: "Next step: Real Property Planning's guides explain the financial picture, and Real Property Planning's Find a Professional page lists independent professionals you can contact directly.",
          },
        },
      ],
    },
    {
      path: "/helping-an-aging-parent/needs-help-at-home",
      label: "My parent needs more help at home",
      icon: HandHelping,
      
      heroBandTitle: "More Help at Home",
      subtext: "What kind of support are you looking into?",
      children: [
        {
          path: "/helping-an-aging-parent/needs-help-at-home/in-home-care",
          label: "In-home caregivers & support",
          icon: Stethoscope,
          content: {
            intro: "When a parent needs more help than family can provide but isn't ready — or doesn't want — to leave home, in-home care is often the right next step. Understanding what's available and how it's paid for makes this decision much easier.",
            sections: [
              { heading: "Types of in-home support", body: "Companion/homemaker care: Help with errands, meals, housekeeping, and companionship\nPersonal care aides: Assistance with bathing, dressing, grooming, and mobility\nHome health aides: Supervised by a nurse; can assist with some medical tasks\nSkilled nursing visits: Registered nurses for wound care, medication management, or monitoring\nTherapy services: Physical, occupational, or speech therapy provided at home" },
              { heading: "How to find care in Washington", body: "Home care agencies handle hiring, training, and backup coverage — simpler but more expensive. Independent caregivers cost less but require the family to manage hiring, taxes, and scheduling. DSHS Home and Community Services (part of the Home and Community Living Administration, formerly ALTSA) determines eligibility for Medicaid-paid in-home care through Community First Choice (CFC) and the COPES waiver." },
              { heading: "What it costs", body: "The Washington median for in-home care is about $45 an hour (CareScout 2025 survey) — about $8,580 a month at 44 hours a week. Agency rates commonly run about $40–$50 an hour; Seattle-area prices run higher, and costs vary by area and level of care." },
            ],
            closing: "Next step: your local Area Agency on Aging can explain in-home care programs in your county, and Real Property Planning's Find a Professional page lists independent professionals you can contact directly.",
          },
        },
        {
          path: "/helping-an-aging-parent/needs-help-at-home/family-coordination",
          label: "Coordinating family caregivers",
          icon: Users,
          content: {
            intro: "When multiple family members are involved in a parent's care, things can get complicated fast. Miscommunication, uneven workloads, and disagreements about decisions are common — and they add stress to an already hard situation. A little structure goes a long way.",
            sections: [
              { heading: "What good coordination looks like", body: "One person as primary contact and decision-maker — or a clear process for shared decisions\nA shared calendar or care log everyone can see\nClear agreements about who handles what: medical appointments, finances, daily check-ins, household tasks\nRegular family check-ins to adjust as needs change" },
              { heading: "Common friction points", body: "Siblings who disagree: Focus on what your parent wants, not individual preferences. A geriatric care manager or family mediator can help when disagreements are significant.\nLong-distance family members: Video calls, a shared app such as CaringBridge, and clear written updates keep everyone informed.\nOne person carrying too much: Name it early. Burnout affects the quality of care. Distributing tasks explicitly prevents resentment." },
              { heading: "Tools that help", body: "Google Calendar or a shared family calendar, a care-coordination app such as CaringBridge, and a simple shared document tracking medications, appointments, and contacts." },
            ],
            closing: "Next step: the site's caregiving guides cover family coordination in more detail, and Real Property Planning's Find a Professional page lists independent professionals you can contact directly.",
          },
        },
        {
          path: "/helping-an-aging-parent/needs-help-at-home/safety-modifications",
          label: "Safety & home modifications",
          icon: Wrench,
          content: {
            intro: "When a parent is receiving help at home, safety modifications become even more important. The goal is to reduce fall risk, support caregiver efficiency, and make the home work for changing physical needs.",
            sections: [
              { heading: "Priority areas to address", body: "Bathroom: Grab bars, walk-in shower or bench, non-slip mats, raised toilet seat\nBedroom: Appropriate bed height, clear path to the bathroom at night, accessible call systems\nEntry and exits: Ramp or zero-step entry, good lighting, easy-to-operate door hardware\nThroughout the home: Clear pathways, secured rugs, adequate lighting, accessible storage" },
              { heading: "When to call a professional", body: "Minor changes like grab bars and lighting can often be DIY. Larger modifications — ramps, stairlifts, bathroom remodels — should be handled by a contractor familiar with accessibility needs. A Certified Aging-in-Place Specialist (CAPS) is trained specifically for this work." },
              { heading: "Washington resources", body: "Some Washington seniors may qualify for home modification assistance through Area Agencies on Aging or community development programs. Your local senior center or DSHS office can point you toward available programs in your county." },
            ],
            closing: "Next step: your local Area Agency on Aging can explain home modification programs in your county, and Real Property Planning's Find a Professional page lists independent professionals you can contact directly.",
          },
        },
        {
          path: "/helping-an-aging-parent/needs-help-at-home/respite-options",
          label: "Respite & relief options",
          icon: HeartHandshake,
          content: {
            intro: "Caring for a parent is meaningful work — and it's exhausting. Caregiver burnout is one of the most common and least talked-about challenges families face. Respite care gives the primary caregiver a break while ensuring your parent is still well cared for.",
            sections: [
              { heading: "Types of respite care", body: "In-home respite: A paid caregiver comes to the home so the family caregiver can step away\nAdult day programs: Structured daytime programs with activities, meals, and supervision\nShort-term residential respite: Your parent stays temporarily at an adult family home or assisted living while you take a longer break\nVolunteer respite: Some nonprofits and faith communities offer free or low-cost respite support" },
              { heading: "Washington resources", body: "Washington's Family Caregiver Support Program, offered through local Area Agencies on Aging with DSHS funding, can help eligible caregivers pay for respite. The Alzheimer's Association offers respite resources for families caring for someone with dementia. Local Area Agencies on Aging can connect you with programs in your county." },
              { heading: "A note for caregivers", body: "Taking a break is not abandoning your parent. It's what makes it possible to keep showing up. Building respite into your routine before you're depleted is always better than waiting until you're in crisis." },
            ],
            closing: "Next step: your local Area Agency on Aging can explain respite programs in your county, and Real Property Planning's Find a Professional page lists independent professionals you can contact directly.",
          },
        },
      ],
    },
    {
      path: "/helping-an-aging-parent/exploring-care-options",
      label: "We're exploring care or housing options",
      icon: Building2,
      
      heroBandTitle: "Exploring Care & Housing Options",
      subtext: "What are you trying to figure out?",
      children: [
        {
          path: "/helping-an-aging-parent/exploring-care-options/types-of-housing",
          label: "What types of senior housing exist?",
          icon: Building2,
          
          heroImage: housingOptionsHero,
          heroAlt: "Types of senior housing — Real Property Planning",
          heroBandTitle: "What types of senior housing exist?",
          content: {
            intro: "The senior housing landscape can feel overwhelming — the terminology alone is confusing. Here's a plain-language overview of the main options available in Washington State.",
            sections: [
              { heading: "Independent Living", body: "For seniors who are largely self-sufficient but want community, convenience, and amenities. No care services included. Think apartment communities with dining options, activities, and maintenance-free living." },
              { heading: "Adult Family Homes", body: "Washington-specific. A licensed residential home caring for two to six residents (up to eight with DSHS approval). Often warmer and more personal than larger facilities. Private-pay rates are set by each home; see the adult family home costs guide for working ranges by area." },
              { heading: "Assisted Living", body: "Community-based care, licensed by DSHS for seven or more residents, with apartments and varying levels of personal care assistance. Staff available around the clock. Commonly about $6,000–$9,500 a month in Washington (median about $7,550, CareScout 2025 survey); Apple Health pays in facilities that hold a DSHS Medicaid contract." },
              { heading: "Memory Care", body: "Specialized care for people with Alzheimer's or other dementias. Secured environment, structured programming, staff trained in dementia care. Often co-located within assisted living communities." },
              { heading: "Skilled Nursing Facilities", body: "The highest level of residential care — for people who need ongoing medical oversight and skilled nursing. Medicare covers short-term skilled stays after a qualifying three-day inpatient hospital stay (up to 100 days, with a daily coinsurance from day 21); Apple Health (Medicaid) covers long-term stays for those who qualify. Commonly about $13,000–$16,000+ a month in Washington." },
            ],
            closing: "Next step: the site's housing and care guides compare each option in more detail, and Real Property Planning's Find a Professional page lists independent professionals you can contact directly.",
          },
        },
        {
          path: "/helping-an-aging-parent/exploring-care-options/comparing-costs",
          label: "How do I compare costs?",
          icon: DollarSign,
          
          heroImage: housingOptionsHero,
          heroAlt: "Comparing senior care costs — Real Property Planning",
          heroBandTitle: "How do I compare costs?",
          content: {
            intro: "Senior care costs vary widely — by type of care, by location, and by what's included in the base price. Understanding what you're actually comparing is the first step.",
            sections: [
              { heading: "Washington State average monthly costs", body: "Washington medians, CareScout 2025 survey (actual prices vary widely by area and care level; Seattle-area prices run higher):\nIn-home care: about $45/hour — about $8,580/month at 44 hours a week\nAdult day health: about $5,395/month\nAssisted living: about $7,550/month\nNursing home: about $13,155/month (semi-private) to $15,970/month (private)\nMemory care: no survey; an estimate of roughly $9,000–$10,000+/month\nAdult family homes: private-pay rates are set by each home" },
              { heading: "What to watch for when comparing", body: "Base rate vs. all-in cost: Many communities charge a base rate plus fees for care levels, medications, and transportation. Always ask for the all-in average.\nCare level tiers: Most assisted living communities charge more as care needs increase. Ask how costs change if your parent's needs grow.\nWhat's included: Meals, laundry, activities, transportation — what's covered and what costs extra?" },
              { heading: "How care is typically paid for", body: "Private pay (savings, retirement accounts, home equity)\nLong-term care insurance, if your parent has a policy\nVeterans benefits — Aid & Attendance for eligible veterans and surviving spouses\nWashington Medicaid (Apple Health) for those who qualify financially and medically" },
            ],
            closing: "Next step: the site's cost-of-care guides explain how families plan for these costs, and Real Property Planning's Find a Professional page lists independent professionals you can contact directly.",
          },
        },
        {
          path: "/helping-an-aging-parent/exploring-care-options/eligibility",
          label: "What does my parent qualify for?",
          icon: ClipboardCheck,
          
          heroImage: housingOptionsHero,
          heroAlt: "Senior care eligibility — Real Property Planning",
          heroBandTitle: "What does my parent qualify for?",
          content: {
            intro: "Eligibility for care programs depends on two things: medical need and financial situation. Understanding both helps you know which doors are open.",
            sections: [
              { heading: "Medical eligibility", body: "Most care programs assess 'activities of daily living' (ADLs) — bathing, dressing, eating, transferring, toileting, and continence. The more help your parent needs with these, the more likely they qualify for higher levels of care and publicly funded programs." },
              { heading: "Washington Medicaid (Apple Health)", body: "Washington's Medicaid program covers long-term care — including adult family homes, assisted living, and nursing facilities — for those who qualify. Countable assets must generally be $2,000 or less for a single person (WAC 182-513-1350); some assets, such as the home within limits, are exempt. Most income goes toward the cost of care. Gifts or transfers for less than fair value in the five years (60 months) before applying can cause a penalty period (WAC 182-513-1363). Medicaid planning with an elder law attorney can help families understand options before spending down assets." },
              { heading: "Veterans benefits", body: "The VA's Aid & Attendance benefit is an add-on to the VA pension for veterans and surviving spouses who need help with daily activities. Because it is part of the pension, wartime service and income and net-worth limits apply ($163,699 net worth limit through Nov. 30, 2026). It is worth exploring if your parent served." },
              { heading: "Washington programs", body: "Community First Choice (CFC) and the COPES waiver (Community Options Program Entry System): Apple Health programs that pay for in-home and residential care for adults who need nursing-home-level care and qualify financially. COPES is a federal Medicaid waiver run by DSHS.\nProgram of All-Inclusive Care for the Elderly (PACE): Comprehensive care for adults 55 and older in a PACE service area who need nursing-home-level care and want to remain in the community.\nSHIBA: Washington's free Medicare and benefits counseling program." },
            ],
            closing: "Next step: your local Area Agency on Aging or SHIBA can help you understand eligibility, and Real Property Planning's Find a Professional page lists independent professionals you can contact directly.",
          },
        },
        {
          path: "/helping-an-aging-parent/exploring-care-options/having-the-conversation",
          label: "How do I have this conversation with my parent?",
          icon: MessageCircle,
          
          heroImage: housingOptionsHero,
          heroAlt: "Having the conversation with an aging parent — Real Property Planning",
          heroBandTitle: "How do I have this conversation with my parent?",
          content: {
            intro: "This is the question most families ask — and avoid. The conversation about care and housing is hard because it touches on independence, mortality, and family dynamics all at once. But it's one of the most important conversations you can have.",
            sections: [
              { heading: "Start from their wishes, not your concerns", body: "'I want to make sure we understand what you'd want if things changed' lands better than 'I'm worried about you living alone.' This conversation is about respecting your parent's wishes, not overriding them." },
              { heading: "Pick the right moment", body: "Not during a crisis, not at a family gathering with an audience, not when either of you is tired or stressed. A quiet, unhurried conversation works best." },
              { heading: "Don't try to cover everything at once", body: "One conversation about what they'd want if they needed more help is enough to start. You don't have to solve everything today." },
              { heading: "Listen more than you talk", body: "Your parent may surprise you. Many older adults have thought about these things more than their children realize — they just haven't been asked." },
              { heading: "If it's not going well", body: "A geriatric care manager, social worker, or family mediator can facilitate these conversations when family dynamics make it difficult. This is a normal and legitimate resource." },
            ],
            closing: "Next step: the site's planning-ahead guides include more conversation starters, and Real Property Planning's Find a Professional page lists independent professionals you can contact directly.",
          },
        },
      ],
    },
    {
      path: "/helping-an-aging-parent/health-crisis",
      label: "There's been a health crisis or emergency",
      icon: Activity,
      
      heroBandTitle: "Health Crisis or Emergency",
      subtext: "What do you need help with right now?",
      children: [
        {
          path: "/helping-an-aging-parent/health-crisis/hospital-discharge",
          label: "Hospital discharge planning",
          icon: Hospital,
          content: {
            intro: "Hospital discharge happens fast — sometimes faster than families are ready for. Understanding the process and knowing what questions to ask can prevent a bad situation from getting worse.",
            sections: [
              { heading: "What you need to know", body: "Hospitals are required to plan for discharge. Medicare patients receive a notice called the 'Important Message from Medicare.' If you believe discharge is premature, you can request a fast review from Medicare's Quality Improvement Organization (BFCC-QIO) — the contact is on that notice — no later than the planned discharge day." },
              { heading: "The main discharge options", body: "Home with in-home services: Physical therapy, home health aides, and nursing visits through a home health agency.\nShort-term skilled nursing/rehab: For recovery requiring more intensive therapy or medical monitoring.\nAdult family home or assisted living: If the hospitalization revealed ongoing care needs that weren't previously in place." },
              { heading: "What to ask before discharge", body: "What is the recommended next level of care and why?\nWhat services will be arranged, and who coordinates them?\nWhat are the warning signs to watch for at home?\nIs Medicare covering this, and for how long?\nWho do we call if something goes wrong after discharge?" },
              { heading: "If you're not ready", body: "Say so. Ask for a care conference with the hospital social worker or discharge planner. You have more options than it may feel like in the moment." },
            ],
            closing: "Next step: the hospital's discharge planner or social worker is your first contact, and the site's housing and care guides explain each discharge option.",
          },
        },
        {
          path: "/helping-an-aging-parent/health-crisis/urgent-housing",
          label: "Urgent housing or care placement",
          icon: Building2,
          content: {
            intro: "Sometimes the timeline is very short — a hospitalization, a fall, a sudden cognitive change — and you need to find a place for your parent to go quickly. This is one of the hardest situations families face, and there are options even under pressure.",
            sections: [
              { heading: "What to do first", body: "Tell the hospital social worker or discharge planner you need help identifying placement options — this is their job and they have resources. Contact a senior placement advisor who has current knowledge of availability and can move quickly. Don't sign anything you don't understand, even in urgent situations." },
              { heading: "What to look for when time is short", body: "Current availability — many good facilities have waitlists, so ask specifically about immediate openings\nLevel of care that matches your parent's current needs\nLocation accessible for family visits\nWhether the facility accepts your parent's payment source" },
              { heading: "Adult family homes vs. larger facilities", body: "In urgent situations, adult family homes in Washington sometimes have openings when larger assisted living communities do not, so they are worth calling early in the search." },
              { heading: "A note on quality", body: "You may not find the ideal placement immediately. A short-term placement while you research more carefully is a reasonable approach — your parent can transition to a better fit once the immediate crisis is resolved." },
            ],
            closing: "Next step: the hospital social worker or discharge planner can help identify openings, and Real Property Planning's Find a Professional page lists independent professionals you can contact directly.",
          },
        },
        {
          path: "/helping-an-aging-parent/health-crisis/legal-authority",
          label: "Legal authority to act quickly",
          icon: Scale,
          content: {
            intro: "In a health crisis, the ability to make decisions on your parent's behalf — access medical records, talk to doctors, manage finances — depends entirely on having the right legal documents in place. Without them, family members may find themselves unable to help in the ways that matter most.",
            sections: [
              { heading: "Durable Power of Attorney (Financial)", body: "Authorizes a named person to manage financial matters — pay bills, access accounts, manage property — on behalf of your parent. 'Durable' means it remains valid even if your parent becomes incapacitated. In Washington a power of attorney is durable only if it says so; it must be signed and either notarized or witnessed by two qualified witnesses (RCW 11.125.050)." },
              { heading: "Healthcare Power of Attorney", body: "Authorizes a named person to make medical decisions if your parent cannot. In Washington, this is often accompanied by an advance directive. Without one, Washington law lets close family consent to medical care in a set priority order (RCW 7.70.065) — but money and property still need a power of attorney or a court-appointed guardian or conservator." },
              { heading: "Advance Directive and POLST", body: "Documents your parent's wishes regarding life-sustaining treatment and end-of-life care. The Physician Orders for Life-Sustaining Treatment (POLST) form is commonly used in Washington and travels with your parent between care settings." },
              { heading: "HIPAA Authorization", body: "Allows healthcare providers to share medical information with named family members. Without this, providers may refuse to discuss your parent's condition with you." },
              { heading: "If documents aren't in place", body: "Act now, while your parent still has capacity to sign. An elder law attorney can prepare these documents quickly — often within days. If your parent has already lost capacity, guardianship or conservatorship through the courts may be necessary." },
            ],
            closing: "Next step: Real Property Planning does not refer clients to attorneys; choose a Washington-licensed elder law attorney and confirm their license with the Washington State Bar Association (wsba.org).",
          },
        },
        {
          path: "/helping-an-aging-parent/health-crisis/managing-the-home",
          label: "Managing the home during a crisis",
          icon: Home,
          content: {
            intro: "When a parent is hospitalized or moves suddenly into care, the home doesn't take care of itself. Bills still need to be paid, mail piles up, and the property needs to be secured and maintained. This is often the task that falls through the cracks.",
            sections: [
              { heading: "Immediate steps", body: "Secure the property — make sure it's locked and a trusted person has a key\nForward or collect mail\nIdentify and pay time-sensitive bills: mortgage, utilities, insurance\nCancel or pause subscriptions and recurring services\nCheck on any pets that may have been left behind" },
              { heading: "If financial power of attorney is in place", body: "You can manage your parent's finances directly — pay bills, access accounts, handle ongoing expenses. Keep careful records of everything you do on their behalf." },
              { heading: "If documents aren't in place", body: "You may be limited in what you can access. Talk with an elder law attorney quickly about your options. Acting early prevents complications." },
              { heading: "Thinking longer term", body: "If your parent is unlikely to return home, decisions about the property will need to be made — whether to sell, rent, or maintain it. There's no need to rush these decisions immediately, but understanding the options early helps. Real estate decisions in this context often involve probate, trust, or title questions that benefit from professional guidance." },
            ],
            closing: "Next step: the site's guides explain the property options in more detail, and Real Property Planning's Find a Professional page lists independent professionals you can contact directly.",
          },
        },
      ],
    },
    {
      path: "/helping-an-aging-parent/finances-and-legal",
      label: "My parent's finances and legal documents need attention",
      icon: Scale,
      
      heroBandTitle: "Finances & Legal Documents",
      subtext: "What would you like to address first?",
      children: [
        {
          path: "/helping-an-aging-parent/finances-and-legal/power-of-attorney",
          label: "Power of attorney & legal documents",
          icon: KeyRound,
          content: {
            intro: "Legal documents are the foundation of everything else. Without them, family members who want to help may find themselves legally unable to — even in urgent situations. Getting these in place while your parent has capacity is one of the most important things you can do.",
            sections: [
              { heading: "Durable Power of Attorney (Financial)", body: "Names someone to manage financial matters on your parent's behalf. Covers banking, bill paying, property management, and more. 'Durable' means it remains valid if your parent becomes incapacitated; in Washington a power of attorney is durable only if it says so (RCW 11.125.040)." },
              { heading: "Healthcare Power of Attorney", body: "Names someone to make medical decisions if your parent cannot. This person should know your parent's values and wishes well." },
              { heading: "Advance Directive", body: "Documents your parent's wishes about life-sustaining treatment and end-of-life care. In Washington, often paired with a POLST form for people with serious illness." },
              { heading: "Will and Trust", body: "A will directs how assets are distributed after death. A revocable living trust allows assets — including real property — to pass to beneficiaries without going through probate." },
              { heading: "What to do", body: "Schedule an appointment with an elder law or estate planning attorney. Many can prepare a basic package of documents — POA, healthcare directive, and will — for a reasonable flat fee. Don't rely on online forms for documents this important." },
            ],
            closing: "Next step: Real Property Planning does not refer clients to attorneys; choose a Washington-licensed elder law attorney and confirm their license with the Washington State Bar Association (wsba.org).",
          },
        },
        {
          path: "/helping-an-aging-parent/finances-and-legal/wills-and-estate-plan",
          label: "Wills & estate planning",
          icon: FileText,
          content: {
            intro: "Estate planning isn't just for wealthy families — it's for anyone who wants their wishes honored and their family spared unnecessary difficulty. For aging parents, getting these documents in place sooner rather than later matters.",
            sections: [
              { heading: "What a basic estate plan includes", body: "Will: Who receives your parent's assets and who is responsible for carrying out those wishes\nBeneficiary designations: Life insurance, retirement accounts, and some bank accounts pass directly to named beneficiaries — outside of the will. These should be reviewed.\nPower of attorney: Financial authority while your parent is living\nHealthcare directive: Medical wishes and decision-maker\nTrust (if applicable): Avoids probate for assets held in the trust" },
              { heading: "Washington-specific considerations", body: "Washington is a community property state — how assets are titled matters for surviving spouses. Washington has its own estate tax, with an exclusion of $3,000,000 for deaths from July 1, 2026, per the Department of Revenue. Real property in the owner's name alone typically goes through probate unless it passes by a recorded transfer on death deed, joint tenancy with right of survivorship, a community property agreement, or a funded trust." },
              { heading: "When to involve an attorney", body: "Always. Estate planning documents are legal instruments and errors can cause real harm. An elder law or estate planning attorney in Washington will know the state-specific rules and can prepare documents that hold up." },
            ],
            closing: "Next step: Real Property Planning does not refer clients to attorneys; choose a Washington-licensed estate planning attorney and confirm their license with the Washington State Bar Association (wsba.org).",
          },
        },
        {
          path: "/helping-an-aging-parent/finances-and-legal/paying-for-care",
          label: "Paying for care",
          icon: Banknote,
          content: {
            intro: "Senior care is one of the largest expenses families face, and most people don't plan for it until they need it. Understanding the payment landscape early creates more options.",
            sections: [
              { heading: "Private pay", body: "Using savings, retirement accounts, investment accounts, or home equity. This is the most common starting point and gives the most flexibility in choosing care." },
              { heading: "Long-term care insurance", body: "If your parent has a policy, locate it now. Understand the elimination period (how long before benefits kick in), the daily benefit amount, and how to file a claim. Policies vary significantly." },
              { heading: "Veterans benefits — Aid & Attendance", body: "An add-on to the VA pension for veterans and surviving spouses who need help with daily activities; wartime service and the pension's income and net-worth limits apply. A VA-accredited representative, claims agent, or attorney can help with the application." },
              { heading: "Washington Medicaid (Apple Health)", body: "Covers long-term care — including adult family homes, assisted living, and nursing facilities — for those who qualify financially and medically. For long-term care, countable assets must generally be $2,000 or less for a single person, and gifts made in the five years before applying can cause a penalty period. Planning ahead with an elder law attorney can help families navigate Medicaid rules." },
              { heading: "Medicare", body: "Covers short-term skilled nursing and rehabilitation after a formal inpatient hospital stay of at least three days (up to 100 days, with a $217-a-day coinsurance for days 21–100 in 2026) — not long-term custodial care. Understanding this distinction prevents costly surprises." },
            ],
            closing: "Next step: Real Property Planning's guides explain the financial picture, and Real Property Planning's Find a Professional page lists independent professionals you can contact directly.",
          },
        },
        {
          path: "/helping-an-aging-parent/finances-and-legal/property-decisions",
          label: "Property & real estate decisions",
          icon: Landmark,
          content: {
            intro: "For many families, a parent's home is their largest asset — and decisions about it are rarely straightforward. Whether your parent is considering selling, you're managing a property during a health crisis, or you're dealing with an inherited home, understanding your options matters.",
            sections: [
              { heading: "Selling the home to fund care", body: "This is often the right decision, but timing and execution matter. A home sold well — properly prepared, accurately priced, and marketed effectively — can fund years of care. If your parent moved into a licensed care facility because they could no longer care for themselves, and owned and lived in the home at least one of the five years before the sale, the federal home-sale exclusion (up to $250,000 of gain per person) can still apply (IRC 121(d)(7)); once sold, the cash counts toward Apple Health's asset limit. A home sold poorly leaves money on the table when families can least afford it." },
              { heading: "Renting the home", body: "Some families prefer to keep the property and generate rental income to offset care costs. This works if the family has capacity to manage a rental or hire a property manager — and if the financial return justifies the complexity." },
              { heading: "Inherited property and probate", body: "If a parent passes away with property in their name alone — not in a funded trust, and not passing by a recorded transfer on death deed, joint tenancy with right of survivorship, or a community property agreement — the home typically goes through Washington's probate process before it can be sold or transferred. This takes time and involves specific legal steps. Understanding this early prevents surprises." },
              { heading: "Tax considerations", body: "The stepped-up basis at death (a federal rule) can significantly reduce capital gains for inherited property — worth understanding before selling. In Washington, community property generally receives a new basis on both halves when the first spouse dies. Proper pricing of an estate property is critical; many families underestimate what preparation and accurate valuation can add to the sale price." },
            ],
            closing: "Next step: the site's guides explain the sale, rental and probate options in more detail, and Real Property Planning's Find a Professional page lists independent professionals you can contact directly.",
          },
        },
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
