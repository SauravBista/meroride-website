import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BOOKING_URL, WHATSAPP_URL } from "@/lib/constants";

const SITE = "https://meroride.com.np";
const URL = `${SITE}/scooter-rental-kathmandu`;
const CLOUD = "https://res.cloudinary.com/dcgl3qfg2/image/upload";

export const metadata: Metadata = {
title: { absolute: "Scooter Rental in Kathmandu Valley from NPR 1100/day | MeroRide" },
  description:
    "Rent a Honda Dio, Aviator, TVS Ntorq or Ray ZR in Kathmandu Valley. Pick up in Lalitpur or get it delivered. Helmet included, weekly and monthly discounts.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Scooter Rental in Kathmandu Valley | MeroRide",
    description:
      "Dio, Aviator, Ntorq and Ray ZR from NPR 1100/day. Helmet included. Up to 25% off monthly rentals.",
    url: URL,
    type: "website",
    images: [`${SITE}/og-image.png`],
  },
};

type Scooter = {
  name: string;
  tier: string;
  daily: number;
  img: string;
  alt: string;
  blurb: string;
};

const scooters: Scooter[] = [
  {
    name: "Honda Dio",
    tier: "Budget",
    daily: 1100,
    img: `${CLOUD}/v1781500932/Dio97_1_jedrlb.jpg`,
    alt: "Honda Dio scooter for rent in Kathmandu and Lalitpur",
    blurb: "Light, easy and fuel-efficient. The best value for city riding.",
  },
  {
    name: "Honda Aviator",
    tier: "Standard",
    daily: 1300,
    img: `${CLOUD}/v1779777506/Aviator_5_1_cpino8.png`,
    alt: "Honda Aviator scooter for rent in Kathmandu",
    blurb: "A comfortable middle choice for city rides and valley trips.",
  },
  {
    name: "TVS Ntorq",
    tier: "Premium",
    daily: 1500,
    img: `${CLOUD}/v1781769134/ntorqred10_1_hbulty.jpg`,
    alt: "TVS Ntorq scooter for rent in Lalitpur",
    blurb: "More power for hills and longer rides, with a sportier feel.",
  },
  {
    name: "Yamaha Ray ZR",
    tier: "Premium",
    daily: 1600,
    img: `${CLOUD}/v1781260820/rayzr033_1_n2prxo.jpg`,
    alt: "Yamaha Ray ZR scooter for rent in Kathmandu",
    blurb: "A stylish premium scooter that is light and easy to handle.",
  },
];

// Discounts: 7 days 10%, 15 days 15%, 30 days 25%
const plans = [
  { days: 7, off: 0.1, label: "7 days" },
  { days: 15, off: 0.15, label: "15 days" },
  { days: 30, off: 0.25, label: "30 days" },
];
const npr = (n: number) => `NPR ${Math.round(n).toLocaleString("en-US")}`;
const total = (daily: number, days: number, off: number) => daily * days * (1 - off);

const faqs = [
  {
    q: "How much does it cost to rent a scooter in Kathmandu?",
    a: "Scooters start from NPR 1100 per day for the Honda Dio, NPR 1300 for the Aviator, NPR 1500 for the Ntorq and NPR 1600 for the Ray ZR. Rentals of 7 days get 10% off, 15 days get 15% off and 30 days get 25% off. A helmet is included.",
  },
  {
    q: "Where do I pick up the scooter?",
    a: "Pickup is at our shop in Kusunti-13, Lalitpur, on the Kathmandu–Lalitpur border. It is open 7:30 am to 7:30 pm every day.",
  },
  {
    q: "Do you deliver in Kathmandu Valley?",
    a: "Yes. We deliver within the valley for a delivery charge. Delivery must be booked at least 24 hours ahead and depends on when our delivery person is available. Message us on WhatsApp to confirm the charge and time for your location.",
  },
  {
    q: "Is a helmet included?",
    a: "Yes. A helmet is included free with every rental.",
  },
  {
    q: "What documents do I need?",
    a: "A valid two-wheeler driving licence and a government ID (citizenship card or passport). Foreign visitors must also carry an international driving permit with their home licence. If you can't leave original documents, a deposit is taken at pickup and returned in full when you bring the scooter back in its original condition.",
  },
  {
    q: "Is fuel included?",
    a: "No. You receive the scooter with a standard fuel level and return it at the same level.",
  },
  {
    q: "Can I rent a scooter without a licence?",
    a: "No. Nepali traffic law requires a valid two-wheeler licence, and we do not rent to unlicensed riders.",
  },
  {
    q: "Can I ride outside Kathmandu Valley?",
    a: "Yes. Riding outside Kathmandu, Lalitpur and Bhaktapur costs NPR 100 extra per day on scooters. Tell us before you book so we can note your route, especially for places such as Nagarkot, Dhulikhel or Godavari.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${URL}#service`,
      name: "Scooter rental in Kathmandu Valley",
      serviceType: "Scooter rental",
      provider: { "@id": `${SITE}/#business` },
      areaServed: ["Kathmandu", "Lalitpur", "Bhaktapur"].map((n) => ({
        "@type": "City",
        name: n,
      })),
      url: URL,
      offers: scooters.map((s) => ({
        "@type": "Offer",
        name: `${s.name} rental per day`,
        price: s.daily,
        priceCurrency: "NPR",
        url: URL,
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Scooter rental in Kathmandu", item: URL },
      ],
    },
  ],
};

export default function ScooterRentalKathmandu() {
  return (
    <div className="bg-[#050815] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-5 pb-14 pt-32 lg:px-10">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/50">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white/80">Scooter rental in Kathmandu</span>
        </nav>
        <h1 className="text-4xl font-black leading-tight tracking-tight lg:text-5xl">
          Scooter Rental in Kathmandu
          <span className="mt-3 block text-xl font-semibold text-green-400 lg:text-2xl">
            Starting from NPR 1100 per day
          </span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
          Rent a Honda Dio, Honda Aviator, TVS Ntorq or Yamaha Ray ZR and ride across
          Kathmandu, Lalitpur and Bhaktapur. Every rental includes a helmet, and the
          longer you rent, the less you pay per day.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={BOOKING_URL}
            className="rounded-full bg-green-500 px-7 py-3.5 text-center text-sm font-bold text-white hover:bg-green-400"
          >
            Book your scooter
          </a>
          <a
            href={WHATSAPP_URL}
            className="rounded-full border border-white/20 px-7 py-3.5 text-center text-sm font-semibold text-white/80 hover:border-white/40 hover:text-white"
          >
            Ask on WhatsApp
          </a>
        </div>
      </section>

      {/* Models */}
      <section className="mx-auto max-w-6xl px-5 py-14 lg:px-10">
        <h2 className="text-3xl font-bold tracking-tight">Choose your scooter</h2>
        <p className="mt-3 max-w-2xl text-white/60">
          Prices are per day. Helmet included with every scooter.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {scooters.map((s) => (
            <article
              key={s.name}
              className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f2e]"
            >
              <div className="relative aspect-[4/3] bg-[#070b1a]">
                <Image
                  src={s.img}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-sm text-green-400">{s.tier}</p>
                <h3 className="mt-1 text-xl font-bold">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{s.blurb}</p>
                <p className="mt-4 text-2xl font-black">
                  {npr(s.daily)}
                  <span className="text-sm font-normal text-white/50"> /day</span>
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-white/60">
          Not sure which to pick? Read our{" "}
          <Link href="/blog/honda-dio-vs-tvs-ntorq" className="text-green-400 underline">
            Honda Dio vs TVS Ntorq comparison
          </Link>
          .
        </p>
      </section>

      {/* Pricing table */}
      <section className="mx-auto max-w-6xl px-5 py-14 lg:px-10">
        <h2 className="text-3xl font-bold tracking-tight">Weekly and monthly prices</h2>
        <p className="mt-3 max-w-2xl text-white/60">
          Rent for 7 days and save 10%, 15 days and save 15%, or 30 days and save 25%.
          Totals below are the full price for the period, with the per-day rate under each.
        </p>
        <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-white/5 text-white/70">
              <tr>
                <th className="px-5 py-4 font-semibold">Scooter</th>
                <th className="px-5 py-4 font-semibold">1 day</th>
                {plans.map((p) => (
                  <th key={p.days} className="px-5 py-4 font-semibold">
                    {p.label} ({p.off * 100}% off)
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {scooters.map((s) => (
                <tr key={s.name} className="border-t border-white/10">
                  <th scope="row" className="px-5 py-4 font-semibold">{s.name}</th>
                  <td className="px-5 py-4">{npr(s.daily)}</td>
                  {plans.map((p) => (
                    <td key={p.days} className="px-5 py-4">
                      <span className="font-semibold">
                        {npr(total(s.daily, p.days, p.off))}
                      </span>
                      <span className="block text-xs text-white/50">
                        {npr(s.daily * (1 - p.off))}/day
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-white/60">
          Fuel is not included. Riding outside Kathmandu, Lalitpur and Bhaktapur adds NPR 100 per day. Thinking of a longer stay? See{" "}
          <Link href="/blog/monthly-scooter-rental-guide" className="text-green-400 underline">
            whether monthly rental is worth it
          </Link>{" "}
          and{" "}
          <Link href="/blog/scooter-rental-cost-kathmandu" className="text-green-400 underline">
            what scooter rental costs in Kathmandu
          </Link>
          .
        </p>
      </section>

      {/* Pickup & delivery */}
      <section className="mx-auto max-w-6xl px-5 py-14 lg:px-10">
        <h2 className="text-3xl font-bold tracking-tight">
          Pick up in Lalitpur, or get it delivered
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-white/70">
          Our shop is in Kusunti-13, Lalitpur, right on the Kathmandu–Lalitpur border, so
          Patan, Thamel and Bhaktapur are a short ride away. It is open 7:30 am to 7:30 pm
          every day.
        </p>
        <p className="mt-4 max-w-3xl leading-relaxed text-white/70">
          We also deliver within Kathmandu Valley for a delivery charge. Book delivery at
          least 24 hours ahead. The time depends on when our delivery person is available,
          so message us on WhatsApp with your location and we will confirm the charge and
          the slot. Trips outside Kathmandu, Lalitpur and Bhaktapur cost NPR 100 extra per
          day on scooters.
        </p>
        <p className="mt-4 max-w-3xl text-sm text-white/60">
          New to renting here? Follow our{" "}
          <Link href="/blog/how-to-rent-scooty-lalitpur" className="text-green-400 underline">
            step-by-step guide to renting a scooty in Lalitpur
          </Link>
          .
        </p>
      </section>

      {/* Requirements */}
      <section className="mx-auto max-w-6xl px-5 py-14 lg:px-10">
        <h2 className="text-3xl font-bold tracking-tight">What you need to rent</h2>
        <ul className="mt-5 max-w-3xl list-disc space-y-2 pl-5 text-white/70">
          <li>A valid two-wheeler driving licence</li>
          <li>A citizenship card or passport</li>
          <li>An international driving permit, if you are a foreign visitor</li>
          <li>A deposit at pickup if you can&apos;t leave original documents (refunded in full)</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-5 py-14 lg:px-10">
        <h2 className="text-3xl font-bold tracking-tight">Common questions</h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-xl border border-white/10 bg-[#0a0f2e]/60 p-6">
              <h3 className="text-lg font-semibold">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-24 pt-14 text-center lg:px-10">
        <h2 className="text-3xl font-bold tracking-tight">Ready to ride?</h2>
        <p className="mt-3 text-white/60">
          Book online, or message us to check availability. Rated 4.9 from 157 Google reviews.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={BOOKING_URL}
            className="rounded-full bg-green-500 px-8 py-3.5 text-sm font-bold text-white hover:bg-green-400"
          >
            Book your scooter
          </a>
          <a
            href={WHATSAPP_URL}
            className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white/80 hover:border-white/40 hover:text-white"
          >
            Ask on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
