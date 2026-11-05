/**
 * Renting a Room in a Shared Home (Nov 6, 2026, the owner's idea and "go").
 *
 * An independent-living option for older adults who can manage their own
 * daily care but want to leave the upkeep of a house behind and keep living
 * costs down, while staying near shopping, clinics and transit in King and
 * Snohomish counties. Same simplified layout as the guided paths: short
 * answer, three steps, the companies, the people-who-help box, then "More on
 * this" folded into <details> (every word stays in the HTML).
 *
 * Facts and their sources (check before changing):
 *   - Room prices: Bungalow Seattle listings and PadSplit Seattle listings as
 *     seen Nov 6, 2026. Prices move weekly; update the ROOM_PRICES_AS_OF date.
 *   - HomeShare Online: HomeShare Oregon (nonprofit) licensed Silvernest's
 *     platform and relaunched it as HomeShareOnline.org (PRWeb, Mar 26, 2024).
 *   - Co-living law: ESHB 1998 (2024), cities planning fully under the GMA
 *     must allow co-living where six or more multifamily units are allowed,
 *     from Dec 31, 2025.
 *   - No disclosure line about PadSplit on this page (owner, Nov 6, 2026).
 *
 * Voice: the site never speaks as "we" or "I". Class names start "apf-" or
 * "sh-" and must not contain card/cta/btn/tile/section (index.css restyles
 * those sitewide).
 */
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import DisclaimerSection from "@/components/DisclaimerSection";
import SimpleTopicTop from "@/components/SimpleTopicTop";
import TopicProfessionals from "@/components/TopicProfessionals";
import type { SimpleTopic } from "@/lib/simple-topics";

export const SHARED_HOUSING_PATH = "/senior-living/shared-housing";
const URL = `https://realpropertyplanning.com${SHARED_HOUSING_PATH}`;
const ROOM_PRICES_AS_OF = "November 2026";
const NAVY = "#1B3A6B";

const TOPIC: SimpleTopic = {
  title: "Renting a Room in a Shared Home",
  short:
    "A private bedroom in a shared house can let an older adult who still manages their own care live near shopping, clinics and transit for far less than an apartment, with no house to keep up. It suits people who are comfortable sharing a kitchen and living areas.",
  steps: [
    { title: "Decide if sharing suits you", text: "Think about privacy, daily routines, noise and sharing a kitchen with people you don't know yet." },
    { title: "Run the numbers", text: "Compare the room's monthly price with what the house costs now, and what selling it would free up." },
    { title: "Visit and check before signing", text: "See the house, meet the other residents, and read the rental agreement before you commit." },
  ],
};

interface Company {
  name: string;
  href: string;
  what: string;
  fit: string;
}

const COMPANIES: Company[] = [
  {
    name: "HomeShare Online",
    href: "https://homeshareonline.org",
    what: "Matches homeowners who have a spare room with compatible housemates. Run by the nonprofit HomeShare Oregon, which took over the older Silvernest service.",
    fit: "Built with older adults in mind. You live in someone's home, usually the owner's, and both sides are matched on habits and expectations.",
  },
  {
    name: "Bungalow",
    href: "https://bungalow.com/rooms-for-rent/seattle",
    what: "Private rooms in managed shared houses, with furnished living areas and kitchens. Several houses in Seattle neighborhoods such as Capitol Hill, Columbia City and Beacon Hill.",
    fit: `Seattle rooms listed from about $525 to just over $1,000 a month (${ROOM_PRICES_AS_OF}). Residents are mostly younger working adults.`,
  },
  {
    name: "PadSplit",
    href: "https://www.padsplit.com",
    what: "Furnished private rooms in shared houses, paid weekly, with utilities, laundry and Wi-Fi included. Rooms in Seattle and other Washington cities.",
    fit: `Seattle rooms listed at about $1,250 to $1,500 a month (${ROOM_PRICES_AS_OF}). The typical resident is in their mid-30s, and many rooms can be booked without the host approving each housemate.`,
  },
];

interface Fold {
  heading: string;
  body: React.ReactNode;
}

const FOLDS: Fold[] = [
  {
    heading: "Who this works for, and who it doesn't",
    body: (
      <>
        <p className="apf-fold-text">
          Shared housing is independent living with no services. It works for someone who is healthy, manages their own medications and
          appointments, and is at ease living with other people. It is a way to stay close to everything you need without paying for a whole
          apartment or keeping up a house.
        </p>
        <p className="apf-fold-text">
          It stops working once someone needs help with bathing, dressing, medications or moving around safely. A shared house has no staff, and
          housemates are not caregivers. At that point the choices are help at home, an{" "}
          <Link to="/senior-living/choosing-an-adult-family-home">adult family home</Link> or{" "}
          <Link to="/senior-living/assisted-living">assisted living</Link>.
        </p>
      </>
    ),
  },
  {
    heading: "What it costs in King and Snohomish counties",
    body: (
      <>
        <p className="apf-fold-text">
          Room prices in Seattle-area shared houses ran from about $525 to $1,500 a month in {ROOM_PRICES_AS_OF}, depending on the company, the
          neighborhood and whether the bathroom is shared. Utilities, internet and basic furnishings are usually included. A one-bedroom apartment
          in Seattle usually costs more than the top of that range.
        </p>
        <p className="apf-fold-text">
          A room in an owner's home, found through a matching service, is often the cheapest choice, and the rent is agreed between the two of you.
          Prices change often, so check the current listing and ask exactly what the monthly price includes.
        </p>
      </>
    ),
  },
  {
    heading: "The kinds of shared housing",
    body: (
      <>
        <p className="apf-fold-text">
          A room in someone's home: you rent a bedroom from a homeowner who lives there. Matching services screen both sides and help write the
          agreement.
        </p>
        <p className="apf-fold-text">
          A co-living house: a house run by a company, with each bedroom rented separately. The company handles the lease, repairs and rules.
        </p>
        <p className="apf-fold-text">
          A co-living building: newer buildings with small private rooms and shared kitchens. Since the end of 2025, Washington State law (ESHB
          1998) requires cities to allow co-living housing wherever buildings of six or more apartments are allowed, which usually means areas near
          transit, shopping and clinics.
        </p>
      </>
    ),
  },
  {
    heading: "How selling the house changes the math",
    body: (
      <>
        <p className="apf-fold-text">
          Most people considering this own a house that has become a lot of work. Selling it ends the property taxes, insurance, repairs and yard
          work, and turns the equity into savings. A lower monthly housing cost means those savings last longer.
        </p>
        <p className="apf-fold-text">
          Before deciding, find out what the house would sell for and what it needs first. A CPA can explain the taxes on the sale, and a
          financial advisor can show how long the proceeds would last at the new monthly cost.{" "}
          <Link to="/downsizing-preparing-for-transition">Downsizing and preparing the house</Link> covers the move itself.
        </p>
      </>
    ),
  },
  {
    heading: "Checklist: what to check before you sign",
    body: (
      <p className="apf-fold-text">
        {[
          "Stairs: can you reach your room, a bathroom and the kitchen without climbing?",
          "Bathroom: how many people share it, and does it have a grab bar or a walk-in shower?",
          "Housemates: who lives there now, and do you get to meet them first?",
          "House rules: guests, quiet hours, cleaning, pets and smoking.",
          "The agreement: length, notice to leave, how and when rent can go up, and the deposit.",
          "Screening: does the company or homeowner check backgrounds, and will they check yours?",
          "Location: how far is it to your doctor, a pharmacy, a grocery store and a bus stop?",
          "If your health changes: what happens if you need more help later?",
        ].join("\n")}
      </p>
    ),
  },
  {
    heading: "Trade-offs to weigh honestly",
    body: (
      <p className="apf-fold-text">
        Less privacy than an apartment. A shared kitchen and often a shared bathroom. Housemates change, and you may not choose who moves in.
        Agreements are often month to month, so the room is less secure than a long lease. No staff, meals or activities. For many people these
        are fair trade-offs for a lower cost and a better location, but they are worth thinking through before selling a house.
      </p>
    ),
  },
];

const SharedHousing = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Affordable Rooms for Rent for Seniors: Shared Housing in Washington State (WA) | Real Property Planning"
      description="Affordable senior housing near Seattle: rooms for rent in shared homes for independent older adults in Washington State (WA). What rooms cost in King and Snohomish counties, who offers them, and what to check before signing."
      canonical={URL}
    />
    <BreadcrumbSchema
      items={[
        { name: "Home", url: "https://realpropertyplanning.com/" },
        { name: "Independent Living", url: "https://realpropertyplanning.com/senior-living/independent-living" },
        { name: TOPIC.title, url: URL },
      ]}
    />
    <Header />
    <main id="main-content" className="apf">
      <HeroBandTitle as="h1">{TOPIC.title}</HeroBandTitle>

      <section className="py-8 md:py-12 bg-cream">
        <div className="container px-5 md:px-8">
          <div className="apf-topic">
            <SimpleTopicTop
              topic={TOPIC}
              next={{ to: "/helping-an-aging-parent/exploring-care-options/types-of-housing", label: "Back to senior housing, explained" }}
              talkHref="#people-who-help"
            />

            <h2 className="apf-h2">Companies that offer rooms</h2>
            <p className="apf-fold-text" style={{ padding: "0 0 14px" }}>
              Listed for information only, in order of how closely each fits older adults. Prices and coverage change, so check each company's
              current listings.
            </p>
            <ul className="sh-companies" style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 16 }}>
              {COMPANIES.map((c) => (
                <li
                  key={c.name}
                  style={{ background: "#ffffff", border: "1px solid #d9d2c7", borderLeft: `5px solid ${NAVY}`, borderRadius: 12, padding: "18px 20px" }}
                >
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rpp-heading-link"
                    style={{ fontSize: 21, fontWeight: 700, color: NAVY, textDecoration: "none" }}
                  >
                    {c.name}
                  </a>
                  <p className="apf-fold-text" style={{ padding: "8px 0 0" }}>{c.what}</p>
                  <p className="apf-fold-text" style={{ padding: "8px 0 0" }}>
                    <strong>For an older renter:</strong> {c.fit}
                  </p>
                </li>
              ))}
            </ul>

            <div id="people-who-help" style={{ scrollMarginTop: 96 }}>
              <TopicProfessionals path={SHARED_HOUSING_PATH} style={{ margin: "36px 0 0" }} />
            </div>

            <div className="apf-more">
              <h2 className="apf-h2">More on this</h2>
              {FOLDS.map((f) => (
                <details key={f.heading} className="apf-fold">
                  <summary>
                    {f.heading} <ChevronDown size={22} aria-hidden="true" />
                  </summary>
                  <div className="apf-fold-body">{f.body}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DisclaimerSection />
    </main>
    <Footer />
  </div>
);

export default SharedHousing;
