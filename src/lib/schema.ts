const SITE_URL = "https://www.realpropertyplanning.com";
const LOGO_URL = `${SITE_URL}/logo.png`;
const BUSINESS_NAME = "Real Property Planning";

const areaServed = [
  { "@type": "State", name: "Washington" },
  { "@type": "AdministrativeArea", name: "King County", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "AdministrativeArea", name: "Snohomish County", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "AdministrativeArea", name: "Pierce County", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "AdministrativeArea", name: "Kitsap County", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "AdministrativeArea", name: "Skagit County", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "Place", name: "Western Washington" },
  { "@type": "Place", name: "Puget Sound region, Washington" },
  { "@type": "City", name: "Seattle", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "City", name: "Bellevue", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "City", name: "Everett", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "City", name: "Tacoma", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "City", name: "Bremerton", containedInPlace: { "@type": "State", name: "Washington" } },
];

/** Person schema for David Stein — reusable entity across the site */
export const davidSteinPerson = {
  "@type": "Person",
  "@id": `${SITE_URL}/#david-stein`,
  name: "David Stein",
  jobTitle: "Real Estate Broker and State Certified Residential Appraiser",
  url: `${SITE_URL}/about`,
  worksFor: {
    "@type": "RealEstateAgent",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS_NAME,
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: "Washington State Real Estate Broker License",
      recognizedBy: { "@type": "Organization", name: "Washington State Department of Licensing" },
      identifier: "113972",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "Washington State Certified Residential Appraiser",
      recognizedBy: { "@type": "Organization", name: "Washington State Department of Licensing" },
      identifier: "1702080",
    },
  ],
  memberOf: [
    { "@type": "Organization", name: "Aging Life Care Association", url: "https://www.aginglifecare.org" },
    { "@type": "Organization", name: "National Association of Senior Advocates", url: "https://www.naosa.org" },
    { "@type": "Organization", name: "National Association of Estate Planners & Councils", url: "https://www.naepc.org" },
  ],
  knowsAbout: [
    "Probate real estate",
    "Estate property sales",
    "Senior housing transitions",
    "Inherited property",
    "Residential real estate appraisal",
    "Trust-owned real estate",
    "Fiduciary property coordination",
  ],
};

export const realEstateAgentSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": `${SITE_URL}/#organization`,
  name: BUSINESS_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
    width: 400,
    height: 400,
  },
  image: LOGO_URL,
  description:
    "Washington State real estate broker with eXp Realty, specializing in senior relocation, estate and inherited property sales, and trust & probate real estate. Deep experience across Western Washington and the Puget Sound region, with the ability to connect clients to trusted brokers nationwide and internationally through eXp Realty's referral network.",
  telephone: "(206) 900-3015",
  email: "david@realpropertyplanning.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "PO Box 1462",
    addressLocality: "Woodinville",
    addressRegion: "WA",
    postalCode: "98072",
    addressCountry: "US",
  },
  founder: {
    ...davidSteinPerson,
  },
  areaServed,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "(206) 900-3015",
    contactType: "customer service",
    areaServed: "US",
    availableLanguage: "English",
  },
  sameAs: [],
};

const publisher = {
  "@type": "Organization",
  name: BUSINESS_NAME,
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: LOGO_URL },
};

export function articleSchema({
  headline,
  description,
  url,
  image,
  datePublished,
  dateModified,
  about,
}: {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  about?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: `${SITE_URL}${url}`,
    ...(image ? { image } : {}),
    author: davidSteinPerson,
    publisher,
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    ...(about && about.length > 0
      ? {
          about: about.map((topic) => ({
            "@type": "Thing",
            name: topic,
          })),
        }
      : {}),
    inLanguage: "en-US",
    isAccessibleForFree: true,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${url}`,
    },
  };
}
