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
    "Probate real estate, inherited property sales, estate appraisals, and senior housing transitions in Western Washington.",
  telephone: "(206) 900-3015",
  email: "david@realpropertyplanning.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1455 NW Leary Way",
    addressLocality: "Seattle",
    addressRegion: "WA",
    postalCode: "98107",
    addressCountry: "US",
  },
  founder: {
    ...davidSteinPerson,
  },
  areaServed: ["King County", "Snohomish County", "Pierce County", "Skagit County", "Kitsap County"],
  hasCredential: ["Licensed Real Estate Broker", "Washington State Certified Residential Appraiser"],
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

/** Homepage FAQ schema */
export const homepageFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a probate real estate agent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A probate real estate agent specializes in selling homes that are part of a deceased person's estate. They understand the legal requirements, court timelines, and family sensitivities involved — and work alongside attorneys and executors to get the property sold properly.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a special agent to sell an inherited home in Washington State?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not legally required, but strongly recommended. Probate sales have specific legal steps, documentation requirements, and timelines. An agent with probate experience — especially one who is also a certified appraiser — can save families significant time, money, and stress.",
      },
    },
    {
      "@type": "Question",
      name: "What is a senior transition specialist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A senior transition specialist is a real estate professional trained to support older adults and their families when it's time to move from a longtime home. They coordinate the process thoughtfully — from decluttering and downsizing support to finding appropriate housing and selling the home.",
      },
    },
    {
      "@type": "Question",
      name: "What is an estate appraisal and why does it matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An estate appraisal is a certified valuation of a property at the time of the owner's death. It's used to set a fair listing price, satisfy court requirements in probate, calculate estate taxes, and ensure heirs are treated fairly. Courts and the IRS have specific requirements — a certified appraiser ensures your appraisal holds up.",
      },
    },
    {
      "@type": "Question",
      name: "How is David Stein different from a regular real estate agent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "David holds two credentials most agents don't: he is both a licensed real estate broker and a Washington State Certified Residential Appraiser. This means he can value a home with professional appraisal standards AND help sell it — providing families with integrated guidance they can trust.",
      },
    },
    {
      "@type": "Question",
      name: "What areas does Real Property Planning serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve all of Western Washington and the Puget Sound region, including King, Snohomish, Pierce, Skagit, and Kitsap Counties — cities like Seattle, Bellevue, Everett, Tacoma, Bainbridge Island, and many more.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simply call (206) 900-3015 or send an email to david@realpropertyplanning.com. There's no pressure — just a calm, honest conversation about your situation.",
      },
    },
  ],
};
