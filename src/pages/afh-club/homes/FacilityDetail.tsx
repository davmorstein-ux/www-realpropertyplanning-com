import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HeroBandTitle from "@/components/HeroBandTitle";
import { CONTRACT_LABELS, SPECIALTY_LABELS, type AFHFacility } from "@/data/afh/types";
import { getCityIndexEntry, loadCity } from "@/data/afh/directory";
import { listingsForFacility } from "@/data/afhAddressMatch";
import { formatVerifiedDate, listingSlug, afhClassification, AFH_MARKET_STATUS_LABELS } from "@/data/afhListings";
import { dshsReportsUrl, inspectionStatus, INSPECTION_HEADING, REPORTS_LINK_TEXT, DOCUMENT_TYPES, INSPECTION_NOTES } from "@/data/afh/inspectionRecord";

const GREEN = "#0a5648";
const BORDER = "#d9dede";

const Row = ({ label, value }: { label: string; value: string }) => (
  <tr>
    <th
      scope="row"
      style={{
        textAlign: "left",
        verticalAlign: "top",
        padding: "12px 20px 12px 0",
        borderTop: `1px solid ${BORDER}`,
        fontSize: "16px",
        fontWeight: 600,
        color: "#374151",
        width: "42%",
      }}
    >
      {label}
    </th>
    <td
      style={{
        padding: "12px 0",
        borderTop: `1px solid ${BORDER}`,
        fontSize: "17px",
        color: "#111827",
      }}
    >
      {value}
    </td>
  </tr>
);

/**
 * Public-record profile for one licensed adult family home, keyed to its DSHS
 * license number. The license is the permanent identifier: names change,
 * ownership changes, homes come on and off the market, the number does not.
 *
 * Everything here comes from DSHS. Nothing is inferred, rated, or ranked.
 */
const FacilityDetail = () => {
  const { citySlug = "", segment: facilitySlug = "" } = useParams();
  const cityEntry = getCityIndexEntry(citySlug);
  const [facility, setFacility] = useState<AFHFacility | null | undefined>(undefined);
  const [sameName, setSameName] = useState(false);

  useEffect(() => {
    let active = true;
    setFacility(undefined);
    loadCity(citySlug).then((list) => {
      if (!active) return;
      const f = list.find((x) => x.slug === facilitySlug) ?? null;
      // Same-name homes in one city get the street in the title (mirrors prerender.ts).
      setSameName(!!f && list.filter((x) => x.displayName === f.displayName).length > 1);
      setFacility(f);
    });
    return () => {
      active = false;
    };
  }, [citySlug, facilitySlug]);

  if (facility === undefined) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main id="main-content">
          <section className="py-16">
            <div className="container px-5 md:px-8">
              <p className="max-w-3xl mx-auto text-[18px]" role="status">
                Loading home details…
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  if (facility === null) {
    return (
      <div className="min-h-screen bg-background">
        <SEOHead
          title="Home not found | Real Property Planning"
          description="This adult family home record was not found."
          noIndex
        />
        <Header />
        <main id="main-content">
          <HeroBandTitle as="h1">Home not found</HeroBandTitle>
          <section className="py-12 bg-cream">
            <div className="container px-5 md:px-8">
              <p className="max-w-3xl mx-auto text-[18px] text-foreground">
                We don't have a record for that home. It may have changed license
                status.{" "}
                <Link
                  to={cityEntry ? `/afh-club/homes/${citySlug}` : "/afh-club/homes"}
                  className="underline underline-offset-4 text-accent"
                >
                  {cityEntry
                    ? `Browse all licensed homes in ${cityEntry.city}`
                    : "Browse the directory"}
                </Link>
                .
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  const { address: a } = facility;
  const path = `/afh-club/homes/${citySlug}/${facility.slug}`;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${facility.displayName}${sameName ? `, ${a.street}` : ""} — Adult Family Home in ${a.city}, WA | Real Property Planning`}
        description={`DSHS licensing record for ${facility.displayName}, an adult family home at ${a.street}, ${a.city}, Washington. License ${facility.licenseNumber}, licensed for ${facility.licensedBeds} residents.`}
        canonical={`https://realpropertyplanning.com${path}`}
        schemaJson={{
          "@context": "https://schema.org",
          "@type": "ResidentialCareFacility" ,
          name: facility.displayName,
          identifier: facility.licenseNumber,
          url: `https://realpropertyplanning.com${path}`,
          telephone: facility.phone ?? undefined,
          address: {
            "@type": "PostalAddress",
            streetAddress: a.street,
            addressLocality: a.city,
            addressRegion: "WA",
            postalCode: a.zip,
            addressCountry: "US",
          },
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: "AFH Club", url: "/afh-club" },
          { name: "Adult Family Homes", url: "/afh-club/homes" },
          { name: a.city, url: `/afh-club/homes/${citySlug}` },
          { name: facility.displayName, url: path },
        ]}
      />
      <Header />
      <main id="main-content">
        <div style={{ background: GREEN, padding: "6px 24px 4px" }} />
        <HeroBandTitle as="h1">{facility.displayName}</HeroBandTitle>

        <section className="py-10 md:py-14 bg-cream">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto text-foreground text-[17px] md:text-[18px] leading-relaxed">
              <p>
                {facility.displayName} is a licensed adult family home at{" "}
                {a.street}, {a.city}, Washington, licensed by DSHS for{" "}
                {facility.licensedBeds}{" "}
                {facility.licensedBeds === 1 ? "resident" : "residents"}.
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14 bg-background">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">
                DSHS licensing record
              </p>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  <Row label="License number" value={facility.licenseNumber} />
                  <Row label="Licensed capacity" value={`${facility.licensedBeds} residents`} />
                  <Row
                    label="Specialty designations"
                    value={
                      facility.specialties.length > 0
                        ? facility.specialties.map((s) => SPECIALTY_LABELS[s]).join(", ")
                        : "None on file"
                    }
                  />
                  <Row
                    label="DSHS contracts"
                    value={
                      facility.contracts.length > 0
                        ? facility.contracts.map((c) => CONTRACT_LABELS[c]).join(", ")
                        : "No contract"
                    }
                  />
                  <Row
                    label="Medicaid"
                    value={facility.acceptsMedicaid ? "Accepted" : facility.contracts.length ? "Not accepted (no Medicaid contract)" : "Not accepted — private pay only"}
                  />
                  {facility.contactName && (
                    <Row label="Provider contact" value={facility.contactName} />
                  )}
                  {facility.phone && <Row label="Phone" value={facility.phone} />}
                  <Row label="Address" value={`${a.street}, ${a.city}, WA ${a.zip}`} />
                  <Row label="Record retrieved" value={facility.retrievedAt} />
                </tbody>
              </table>

              {/* Inspection record (Sept 30, 2026): a direct link to this license's
                  DSHS "Documents & Reports" page, plus how to read it. Words live in
                  src/data/afh/inspectionRecord.ts, shared with the prerender. */}
              <div
                className="rpp-afh-inspection"
                style={{ marginTop: 32, background: "#f3f6f4", border: "1px solid #d5e0da", borderLeft: `5px solid ${GREEN}`, borderRadius: 10, padding: "20px 22px" }}
              >
                <p className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-3">{INSPECTION_HEADING}</p>
                <p className="text-[17px] text-foreground leading-relaxed mb-4">
                  {inspectionStatus(facility.hasReports, formatVerifiedDate(facility.retrievedAt))}
                </p>
                <a
                  href={dshsReportsUrl(facility.licenseNumber)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-block", background: GREEN, color: "#ffffff", fontWeight: 700, padding: "10px 18px", borderRadius: 8, textDecoration: "none" }}
                >
                  {REPORTS_LINK_TEXT} (DSHS, opens in a new tab)
                </a>
                <p className="text-[16px] text-foreground leading-relaxed mt-5 mb-2">What you will find there:</p>
                <ul className="list-disc pl-6 text-[16px] leading-relaxed mb-4">
                  {DOCUMENT_TYPES.map((d) => (
                    <li key={d.name}>
                      <strong>{d.name}</strong>: {d.what}
                    </li>
                  ))}
                </ul>
                <ul className="list-disc pl-6 text-[16px] leading-relaxed mb-4">
                  {INSPECTION_NOTES.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
                <p className="text-[16px] mb-0">
                  <Link to="/afh-club/violation-history-lookup" className="underline underline-offset-4 text-accent">
                    How to read DSHS inspection and enforcement records
                  </Link>
                </p>
              </div>

              {listingsForFacility(facility).length > 0 && (
                <div className="mt-10">
                  <p className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-3">Sales and listing history</p>
                  <p className="text-[17px] text-foreground leading-relaxed mb-3">
                    This address has appeared in AFH Club's for-sale records. The DSHS license belongs to the provider,
                    not the house, so a sale means a new provider licensed the home through Change of Ownership or the
                    home left the licensed pool.
                  </p>
                  <ul className="list-disc pl-6 text-[17px] leading-relaxed">
                    {listingsForFacility(facility).map((l) => {
                      const when = l.soldDate ?? l.statusChanged ?? l.lastVerified;
                      const what =
                        l.marketStatus === "sold" && l.soldPrice
                          ? `Sold ${l.soldPrice} on ${formatVerifiedDate(when)} (listed at ${l.price})`
                          : `${AFH_MARKET_STATUS_LABELS[l.marketStatus]} at ${l.price} as of ${formatVerifiedDate(l.lastVerified)}`;
                      return (
                        <li key={l.id}>
                          <Link to={`/afh-club/listings/${listingSlug(l)}`} className="text-accent underline underline-offset-4">
                            {what}
                          </Link>{" "}
                          — {afhClassification(l)}, NWMLS #{l.mlsNum}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              <p className="mt-6 text-[17px]">
                <Link
                  to={`/afh-club/homes/${citySlug}`}
                  className="underline underline-offset-4 text-accent hover:text-gold transition-colors"
                >
                  All {cityEntry?.facilityCount ?? ""} licensed adult family homes in {a.city} →
                </Link>
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 bg-cream">
          <div className="container px-5 md:px-8">
            <div className="max-w-3xl mx-auto text-[15px] text-muted-foreground leading-relaxed">
              <p>
                Licensing information is sourced from Washington State DSHS public
                records and was retrieved on {facility.retrievedAt}. Specialty
                designations reflect provider training required by the state; they are
                not quality ratings and are not endorsements. Records may have changed
                since retrieval — verify current status directly with DSHS.
              </p>
              <p className="mt-3">
                Real Property Planning is an independent educational resource and does
                not operate, own, or manage any adult family home.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FacilityDetail;
