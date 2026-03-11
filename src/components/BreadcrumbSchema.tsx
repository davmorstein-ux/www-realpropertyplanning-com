import { useEffect } from "react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

const SITE_URL = "https://realpropertyplanning.com";

const BreadcrumbSchema = ({ items }: { items: BreadcrumbItem[] }) => {
  useEffect(() => {
    const existing = document.querySelector('script[data-breadcrumb-jsonld]');
    if (existing) existing.remove();

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        ...items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 2,
          name: item.name,
          item: `${SITE_URL}${item.url}`,
        })),
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-breadcrumb-jsonld", "true");
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      const s = document.querySelector('script[data-breadcrumb-jsonld]');
      if (s) s.remove();
    };
  }, [items]);

  return null;
};

export default BreadcrumbSchema;
