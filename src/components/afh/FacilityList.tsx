import { Link } from "react-router-dom";
import type { AFHFacility } from "@/data/afh/types";
import { SPECIALTY_LABELS } from "@/data/afh/types";

const GREEN = "#0a5648";
const BORDER = "#d9dede";

/**
 * One facility row.
 *
 * Deliberately not a "card grid". Families reading these are comparing homes on
 * a handful of concrete attributes — capacity, who the home is licensed to
 * serve, whether it takes Medicaid — and a scannable stacked list beats a grid
 * of boxes for that. Type is set large because the audience is elderly and
 * their families.
 */
const FacilityRow = ({ facility }: { facility: AFHFacility }) => {
  const { address: a } = facility;

  return (
    <li
      style={{
        borderTop: `1px solid ${BORDER}`,
        padding: "22px 0",
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 16px", alignItems: "baseline" }}>
        <h3 style={{ margin: 0, flex: "1 1 260px" }}>
          <Link
            to={`/afh-club/homes/${a.citySlug}/${facility.slug}`}
            className="underline underline-offset-4 hover:text-gold transition-colors"
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: "20px",
              fontWeight: 600,
              color: "#111827",
              lineHeight: 1.3,
            }}
          >
            {facility.displayName}
          </Link>
        </h3>
        <p style={{ margin: 0, fontSize: "16px", color: "#4b5563", whiteSpace: "nowrap" }}>
          Licensed for {facility.licensedBeds}
        </p>
      </div>

      <p style={{ margin: "6px 0 0", fontSize: "17px", color: "#374151" }}>
        {a.street}, {a.city}, WA {a.zip}
      </p>

      <p style={{ margin: "8px 0 0", fontSize: "16px", color: "#4b5563" }}>
        {facility.specialties.length > 0
          ? facility.specialties.map((s) => SPECIALTY_LABELS[s]).join(" · ")
          : "No specialty designations on file"}
        {" — "}
        {facility.acceptsMedicaid ? "accepts Medicaid" : "private pay only"}
      </p>

      <p style={{ margin: "4px 0 0", fontSize: "15px", color: "#6b7280" }}>
        DSHS license {facility.licenseNumber}
        {facility.hasReports ? " · inspection reports on file" : ""}
      </p>
    </li>
  );
};

interface FacilityListProps {
  facilities: AFHFacility[];
  /** Message shown when a filter returns nothing. */
  emptyMessage: string;
}

export const FacilityList = ({ facilities, emptyMessage }: FacilityListProps) => {
  if (facilities.length === 0) {
    return (
      <p
        style={{
          fontSize: "18px",
          color: "#374151",
          borderLeft: `4px solid ${GREEN}`,
          paddingLeft: "16px",
        }}
      >
        {emptyMessage}
      </p>
    );
  }

  return (
    <ul
      style={{
        listStyle: "none",
        margin: 0,
        padding: 0,
        borderBottom: `1px solid ${BORDER}`,
      }}
    >
      {facilities.map((f) => (
        <FacilityRow key={f.licenseNumber} facility={f} />
      ))}
    </ul>
  );
};

export default FacilityList;
