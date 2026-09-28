const SITE = "https://meroride.com.np";

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    "@id": `${SITE}/#business`,
    name: "MeroRide",
    description:
      "Scooter and bike rental in Kathmandu and Lalitpur, Nepal. Daily, weekly and monthly plans with transparent pricing and WhatsApp booking.",
    url: SITE,
    telephone: "+9779705441746",
    image: `${SITE}/meroridea.svg`,
    logo: `${SITE}/meroridea.svg`,
    priceRange: "NPR 1100-1700",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kusunti-13",
      addressLocality: "Lalitpur",
      addressRegion: "Bagmati Province",
      addressCountry: "NP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 27.65997,
      longitude: 85.30915,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:30",
        closes: "19:30",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Lalitpur" },
      { "@type": "City", name: "Kathmandu" },
      { "@type": "City", name: "Bhaktapur" },
    ],
    sameAs: [
      "https://www.facebook.com/meroridenepal/",
      "https://www.instagram.com/meroridenepal/",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Scooter and Bike Rental Plans",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Daily scooter rental in Kathmandu and Lalitpur",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Weekly scooter rental in Kathmandu and Lalitpur",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Monthly scooter rental in Kathmandu and Lalitpur",
          },
        },
      ],
    },
  };
}