const SITE_URL = "https://www.realpropertyplanning.com";
const LOGO_URL = `${SITE_URL}/logo.png`;
const BUSINESS_NAME = "Real Property Planning";

export const areaServed = [
  { "@type": "State", name: "Washington" },
  { "@type": "AdministrativeArea", name: "King County", containedInPlace: { "@type": "State", name: "Washington" } },
  {
    "@type": "AdministrativeArea",
    name: "Snohomish County",
    containedInPlace: { "@type": "State", name: "Washington" },
  },
  { "@type": "AdministrativeArea", name: "Pierce County", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "AdministrativeArea", name: "Kitsap County", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "AdministrativeArea", name: "Skagit County", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "Place", name: "Western Washington" },
  { "@type": "Place", name: "Puget Sound region, Washington" },
  { "@type": "City", name: "Seattle", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "City", name: "Bellevue", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "City", name: "Kirkland", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "City", name: "Redmond", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "City", name: "Bothell", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "City", name: "Woodinville", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "City", name: "Issaquah", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "City", name: "Sammamish", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "City", name: "Mercer Island", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "City", name: "Shoreline", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "City", name: "Renton", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "City", name: "Everett", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "City", name: "Edmonds", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "City", name: "Lynnwood", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "City", name: "Mukilteo", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "City", name: "Mill Creek", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "City", name: "Marysville", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "City", name: "Tacoma", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "City", name: "Puyallup", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "City", name: "Gig Harbor", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "City", name: "Lakewood", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "City", name: "Bremerton", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "City", name: "Silverdale", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "City", name: "Poulsbo", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "City", name: "Bainbridge Island", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "City", name: "Port Orchard", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "City", name: "Mount Vernon", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "City", name: "Burlington", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "City", name: "Anacortes", containedInPlace: { "@type": "State", name: "Washington" } },
  { "@type": "City", name: "La Conner", containedInPlace: { "@type": "State", name: "Washington" } },
];

/** Person schema for David Stein — reusable entity across the site */
export const davidSteinPerson = {
  "@type": "Person",
  "@id": `${SITE_URL}/#david-stein`,
  name: "David Stein",
  jobTitle: "Real Estate Broker and State Certified Residential Appraiser",
  url: `${SITE_URL}/about-david-stein`,
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
    {
      "@type": "Organization",
      name: "National Association of Estate Planners & Councils",
      url: "https://www.naepc.org",
    },
    { "@type": "Organization", name: "National Association of Realtors", url: "https://www.nar.realtor" },
  ],
  knowsAbout: [
    "Probate real estate",
    "Estate property sales",
    "Senior housing transitions",
    "Inherited property",
    "Residential real estate appraisal",
    "Trust-owned real estate",
    "Fiduciary property coordination",
    "Estate appraisals",
    "Date of death valuations",
    "Out-of-state executor coordination",
    "Senior downsizing",
    "Adult family homes",
    "Assisted living transitions",
    "Washington State probate law",
    "Puget Sound real estate market",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kirkland",
    addressRegion: "WA",
    addressCountry: "US",
  },
};

/** Service schema — reusable for each core service */
export const serviceSchemas = [
  {
    "@type": "Service",
    "@id": `${SITE_URL}/#service-probate-sales`,
    name: "Probate Real Estate Sales",
    description:
      "Full-service real estate guidance for executors, trustees, and families selling estate property during probate in Washington State. Includes property assessment, valuation-informed pricing, preparation coordination, listing, and sale management.",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: areaServed,
    url: `${SITE_URL}/probate-estate-sales`,
    serviceType: "Probate Real Estate",
  },
  {
    "@type": "Service",
    "@id": `${SITE_URL}/#service-estate-appraisals`,
    name: "Estate & Probate Appraisals",
    description:
      "Washington State Certified Residential Appraiser providing defensible valuations for probate, trust administration, estate settlements, date of death valuations, and financial planning purposes throughout the Puget Sound region.",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: areaServed,
    url: `${SITE_URL}/real-estate-appraiser`,
    serviceType: "Real Estate Appraisal",
  },
  {
    "@type": "Service",
    "@id": `${SITE_URL}/#service-senior-transitions`,
    name: "Senior Housing Transitions",
    description:
      "Patient, coordinated real estate guidance for seniors and families navigating the sale of a longtime home — whether moving to assisted living, downsizing, or relocating closer to family. Includes coordination with senior move managers, care teams, and advisors throughout Washington State.",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: areaServed,
    url: `${SITE_URL}/senior-move-managers`,
    serviceType: "Senior Real Estate Transition",
  },
  {
    "@type": "Service",
    "@id": `${SITE_URL}/#service-inherited-property`,
    name: "Inherited Home Sales",
    description:
      "Comprehensive real estate guidance for families and executors selling inherited property in Washington State. Includes honest condition assessment, valuation-informed pricing, cleanout coordination, and full sale management.",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: areaServed,
    url: `${SITE_URL}/executors`,
    serviceType: "Inherited Property Sales",
  },
  {
    "@type": "Service",
    "@id": `${SITE_URL}/#service-professional-network`,
    name: "Professional Resource Network",
    description:
      "Real Property Planning connects families, executors, attorneys, CPAs, and financial planners with trusted professionals throughout Washington State — including senior move managers, adult family home operators, estate liquidators, and more.",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: areaServed,
    url: `${SITE_URL}/about`,
    serviceType: "Professional Referral Network",
  },
];

export const realEstateAgentSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["RealEstateAgent", "LocalBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: BUSINESS_NAME,
      alternateName: "Real Property Planning — Probate & Estate Real Estate Washington State",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
        width: 400,
        height: 400,
      },
      image: LOGO_URL,
      description:
        "Real Property Planning is Washington State's professional resource hub for probate real estate, inherited property sales, estate appraisals, and senior housing transitions. Led by David Stein — a licensed real estate broker and Washington State Certified Residential Appraiser — serving families, executors, attorneys, and professionals throughout the Puget Sound region.",
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
      founder: davidSteinPerson,
      employee: davidSteinPerson,
      areaServed: areaServed,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Real Property Planning Services",
        itemListElement: serviceSchemas,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "08:00",
          closes: "20:00",
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "(206) 900-3015",
        email: "david@realpropertyplanning.com",
        contactType: "customer service",
        areaServed: "US-WA",
        availableLanguage: "English",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "08:00",
          closes: "20:00",
        },
      },
      memberOf: [
        {
          "@type": "Organization",
          name: "Aging Life Care Association",
          url: "https://www.aginglifecare.org",
        },
        {
          "@type": "Organization",
          name: "National Association of Senior Advocates",
          url: "https://www.naosa.org",
        },
        {
          "@type": "Organization",
          name: "National Association of Estate Planners & Councils",
          url: "https://www.naepc.org",
        },
        {
          "@type": "Organization",
          name: "eXp Realty",
          url: "https://www.exprealty.com",
        },
      ],
      knowsAbout: [
        "Probate real estate Washington State",
        "Inherited property sales",
        "Estate appraisals",
        "Senior housing transitions",
        "Executor real estate guidance",
        "Trust-owned real estate",
        "Date of death valuations",
        "Senior downsizing Puget Sound",
        "Out-of-state executor coordination",
        "Estate property preparation",
        "Valuation-informed pricing",
        "Probate sales King County",
        "Probate sales Snohomish County",
        "Probate sales Pierce County",
        "Probate sales Kitsap County",
        "Probate sales Skagit County",
      ],
      sameAs: ["https://www.zillow.com/profile/DavidSteinRPP"],
      priceRange: "$$",
      currenciesAccepted: "USD",
      paymentAccepted: "Check, Wire Transfer",
    },
    davidSteinPerson,
    ...serviceSchemas,
  ],
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

/** Breadcrumb schema — use on inner pages */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

/** Local business schema for county pages */
export function countyPageSchema(countyName: string, url: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: `Real Property Planning — ${countyName}`,
    url: `${SITE_URL}${url}`,
    description,
    telephone: "(206) 900-3015",
    email: "david@realpropertyplanning.com",
    areaServed: {
      "@type": "AdministrativeArea",
      name: countyName,
      containedInPlace: { "@type": "State", name: "Washington" },
    },
    employee: davidSteinPerson,
    parentOrganization: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

/** FAQ schema — reusable for any page with FAQs */
export function faqSchema(questions: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
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
        text: "We serve all of Western Washington and the Puget Sound region, including King, Snohomish, Pierce, Skagit, and Kitsap Counties — cities like Seattle, Bellevue, Kirkland, Everett, Tacoma, Bainbridge Island, and many more.",
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
    {
      "@type": "Question",
      name: "Can Real Property Planning help out-of-state executors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — this is one of the most common situations we work with. David manages the full property process locally, including assessment, cleanout coordination, repairs, listing, and sale, with regular updates so out-of-state executors never need to be present for every step.",
      },
    },
    {
      "@type": "Question",
      name: "What professional organizations is Real Property Planning affiliated with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Real Property Planning is a Corporate Partner of the Aging Life Care Association (ALCA), a recognized member of the National Association of Senior Advocates, and a member of the National Association of Estate Planners & Councils.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a cost to consult with Real Property Planning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Initial consultations are free and carry no obligation. David typically responds within one business day. Call (206) 900-3015 or visit realpropertyplanning.com to get started.",
      },
    },
  ],
};
