export const SITE_NAME = "MeroRide";
export const SITE_URL = "https://meroride.com.np";
export const SITE_TAGLINE = "Hamro Yatra, MeroRide Sanga";
export const SITE_LOCATION = "Kusunti-13, Lalitpur, Nepal";

export const BOOKING_URL = "https://app.meroride.com.np/book";
export const APP_URL = "https://app.meroride.com.np";
export const VEHICLES_API_URL =
  "https://app.meroride.com.np/api/vehicles/available";
export const BLOG_URL = "/blog";
export const BLOG_API_URL =
  "https://blog.meroride.com.np/wp-json/wp/v2/posts?_embed&per_page=6";

export const WHATSAPP_PHONE = "+9779705441746";
export const WHATSAPP_URL = "https://wa.me/9779705441746";
export const CONTACT_PHONES = [
  { display: "977-9705441746", tel: "tel:9779705441746" },
  { display: "977-9705441747", tel: "tel:9779705441747" },
] as const;
export const CONTACT_EMAIL = "meroridenepal@gmail.com";

export const GOOGLE_REVIEW_COUNT = 157;
export const GOOGLE_RATING = 4.9;
export const RELIABLE_RIDES_PERCENT = 99;
export const YEARS_IN_LALITPUR = "2+ Year in Lalitpur";

export const NAV_LINKS = [
  { href: "/#home", label: "Home" },
  { label: "Scooter Rental", href: "/scooter-rental-kathmandu" },
  { label: "Bike Rental", href: "/bike-rental-kathmandu" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
] as const;

export const HERO_TRUST_ITEMS = [
  `${GOOGLE_RATING} Stars · ${GOOGLE_REVIEW_COUNT} Google Reviews`,
  YEARS_IN_LALITPUR,
  `${RELIABLE_RIDES_PERCENT}% Reliable Rides`,
  "Instant WhatsApp Support",
] as const;

export const FALLBACK_SCOOTER_IMAGE = "/cheap-scooter-rental-nepal.svg";

export const OUTSIDE_VALLEY_NOTE = "Add NPR 100 for outside valley rides";

export function getPriceForVehicle(name: string): number {
  const lower = name.toLowerCase();
  if (lower.includes("dio")) return 1100;
  if (lower.includes("aviator")) return 1300;
  if (lower.includes("ntorq")) return 1500;
  if (lower.includes("ray zr")) return 1600;
  return 1500;
}

export type GoogleReview = {
  name: string;
  rating: 5;
  text: string;
  date: string;
};

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    name: "Luv",
    rating: 5,
    date: "2 weeks ago",
    text: "Had a great experience with Mero Ride. We rented two scooters and they were in excellent condition and rode perfectly. The service and flexible timing made the whole experience even better. The rental process was super smooth and hassle-free from start to finish. Highly recommend Mero Ride for a reliable and easy scooter rental!",
  },
  {
    name: "Sumit Thapa",
    rating: 5,
    date: "3 months ago",
    text: "Had a great experience with Mero Ride! We rented a scooty and rode all the way to Kulekhani Markhu and back without any issues. Very nice power, handled the hills easily, and impressive mileage. Excellent condition and reliable for long rides. Highly recommended for a smooth and worry-free rental in Kathmandu!",
  },
  {
    name: "Anurag Maharjan",
    rating: 5,
    date: "3 months ago",
    text: "Rented a scooter from Mero Ride. The scooter was in good condition, and the ride was fun. Thanks to Mero Ride — will be renting again.",
  },
  {
    name: "Rupesh Mahat",
    rating: 5,
    date: "6 months ago",
    text: "I had a really great experience renting a scooter from this company! The whole process was smooth and hassle-free. The team was very helpful, friendly, and considerate. The scooter was in good condition and ran perfectly throughout my rental period. Highly recommend for a reliable rental experience!",
  },
  {
    name: "Aadarsha Dotel",
    rating: 5,
    date: "5 months ago",
    text: "Best scooter conditioned rental in Kathmandu. The owners know their scooters very well. Went to Pokhara and came back, and the performance was never disappointing throughout. Will visit again and highly recommend this place for rental in Kathmandu.",
  },
  {
    name: "Amit Bhandari",
    rating: 5,
    date: "3 months ago",
    text: "Great ride overall. The brother was punctual and polite. The bike was clean and comfortable, and the trip was smooth from start to finish. Would definitely ride again and recommend to others.",
  },
  {
    name: "Brock Tuladhar",
    rating: 5,
    date: "4 months ago",
    text: "I recently rented a scooter from MeroRide in Lalitpur for a day and couldn't be more thrilled. Service exceeded every expectation zipping around Patan and Kathmandu Valley. Petrol was already fully tanked — we only needed to refill as it was when returning.",
  },
  {
    name: "Simran Bhujel",
    rating: 5,
    date: "7 months ago",
    text: "The team was very sweet and helpful from the beginning. The scooter was in great condition and super smooth to ride — even on off-road paths. Budget-friendly too. Highly recommend if you're looking for a stress-free rental!",
  },
  {
    name: "Sakshyam Baral",
    rating: 5,
    date: "6 months ago",
    text: "I rented a scooter for 6 days, and the experience was excellent. Very smooth to ride with absolutely no trouble throughout the trip. Well-maintained, comfortable, and perfect for getting around. Would definitely choose MeroRide again.",
  },
];

export function getWhatsAppUrl(message?: string) {
  const text =
    message ??
    "Hello MeroRide! I'd like to check scooter availability in Lalitpur.";
  return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;
}
