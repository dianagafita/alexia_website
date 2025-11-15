"use client";
import Script from "next/script";

export default function SEOJsonLd({ siteUrl }) {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Alexia - Consultanță Achiziții Publice",
    url: siteUrl,
    logo: `${siteUrl}/images/img1.jpg`,
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Alexia",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Script
        id="ld-org"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <Script
        id="ld-website"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
    </>
  );
}


