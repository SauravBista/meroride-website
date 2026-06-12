import {
  BOOKING_URL,
  CONTACT_EMAIL,
  SITE_LOCATION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  WHATSAPP_PHONE,
} from "@/lib/constants";

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MeroRide",
    description: "Petrol scooter rental in Kathmandu and Lalitpur, Nepal. Daily, weekly, and monthly scooter hire available.",
    url: "https://meroride.com",
    telephone: "+9779705441746",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressRegion: "Bagmati Province",
      addressCountry: "NP"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 27.7172,
      longitude: 85.3240
    },
    openingHours: "Mo-Su 08:00-20:00",
    priceRange: "NPR",
    serviceArea: { "@type": "City", "name": "Kathmandu" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Scooter Rental Plans",
      itemListElement: [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Daily Scooter Rental Kathmandu" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Weekly Scooter Rental Kathmandu" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Monthly Scooter Rental Kathmandu" } }
      ]
    }
  };
}
