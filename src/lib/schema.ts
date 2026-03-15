const SITE_URL = "https://realpropertyplanning.com";
const LOGO_URL = `${SITE_URL}/logo.png`;
const BUSINESS_NAME = "Real Property Planning";

const areaServed = [
  { "@type": "AdministrativeArea", name: "King County", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "AdministrativeArea", name: "Snohomish County", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "AdministrativeArea", name: "Pierce County", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "AdministrativeArea", name: "Kitsap County", containedInPlace: { "@type": "State", name: "Washington" } },
];

export const realEstateAgentSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: BUSINESS_NAME,
  url: SITE_URL,
  logo: LOGO_URL,
  image: LOGO_URL,
  description:
    "Real Property Planning provides experienced real estate guidance for probate property, inherited homes, estate sales, trust-owned real estate, and senior housing transitions throughout Western Washington.",
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
    "@type": "Person",
    name: "David Stein",
    jobTitle: "Real Estate Broker and State Certified Residential Appraiser",
  },
  areaServed,
  serviceType: [
    "Probate real estate services",
    "Inherited property sales",
    "Trust-owned home sales",
    "Estate property guidance",
    "Senior housing transitions",
  ],
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "(206) 900-3015",
    contactType: "customer service",
    areaServed: "US",
    availableLanguage: "English",
  },
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
    author: {
      "@type": "Person",
      name: "David Stein",
      jobTitle: "Real Estate Broker and State Certified Residential Appraiser",
    },
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
