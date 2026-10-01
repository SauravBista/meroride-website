import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Price } from "@/components/Price";
import { BOOKING_URL, WHATSAPP_URL } from "@/lib/constants";

const SITE = "https://meroride.com.np";
const URL = `${SITE}/bike-rental-kathmandu`;
const CLOUD = "https://res.cloudinary.com/dcgl3qfg2/image/upload";

export const metadata: Metadata = {
  title: { absolute: "Motorbike Rental in Kathmandu from NPR 2200/day | MeroRide" },
  description:
    "Rent a Yamaha FZ V2 150 or Bajaj Pulsar NS 200 in Kathmandu Valley. Category A licence required. Weekly, 15-day and monthly discounts available.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Motorbike Rental in Kathmandu Valley | MeroRide",
    description:
      "FZ V2 150 and NS 200 from NPR 2200/day. Category A licence required. Up to 25% off monthly rentals.",
    url: URL,
    type: "website",
    images: [`${SITE}/og-image.png`],
  },
};

type Bike = {
  name: string;
  engine: string;
  daily: number;
  img: string;
  alt: string;
  blurb: string;
};

const bikes: Bike[] = [
  {
    name: "Yamaha FZ V2 150",
    engine: "150cc, fuel-injected",
    daily: 2300,
    // TODO: replace with real Cloudinary URL
    img: `${CLOUD}/v1785412506/fz_v2_qu8uaa.jpg`,
    alt: "Yamaha FZ V2 150 motorbike for rent in Kathmandu and Lalitpur",
    blurb: "Fuel-injected and smooth, a reliable geared bike for city and valley rides.",
  },
  {
    name: "Bajaj Pulsar NS 200",
    engine: "200cc, carburetor",
    daily: 2200,
    // TODO: replace with real Cloudinary URL
    img: `${CLOUD}/v1790654435/ns200_uate2b.jpg`,
    alt: "Bajaj Pulsar NS 200 motorbike for rent in Lalitpur",
    blurb: "More power and a sportier ride, for riders who want a bigger engine.",
  },
];

// Discounts: 7 days 10%, 15 days 15%, 30 days 25%
const plans = [
  { days: 7, off: 0.1, label: "7 days" },
  { days: 15, off: 0.15, label: "15 days" },
  { days: 30, off: 0.25, label: "30 days" },
];
const total = (daily: number, days: number, off: number) => daily * days * (1 - off);

const faqs: {
  q: string;
  a: string;
  displayAnswer?: ReactNode;
}[] = [
  {
    q: "How much does it cost to rent a motorbike in Kathmandu?",
    a: "Bikes start from NPR 2200 per day for the Bajaj Pulsar NS 200 and NPR 2300 for the Yamaha FZ V2 150. Rentals of 7 days get 10% off, 15 days get 15% off and 30 days get 25% off.",
    displayAnswer: <>Bikes start from <Price amountNpr={2200} /> per day for the Bajaj Pulsar NS 200 and <Price amountNpr={2300} /> for the Yamaha FZ V2 150. Rentals of 7 days get 10% off, 15 days get 15% off and 30 days get 25% off.</>,
  },
  {
    q: "What licence do I need to rent a motorbike?",
    a: "Motorbikes above 125cc require a Category \"A\" licence in Nepal. We accept a valid Nepali Category A licence, or an international driving permit with the equivalent category, for both the FZ V2 150 and NS 200.",
  },
  {
    q: "What's the difference between the FZ V2 150 and the NS 200?",
    a: "The FZ V2 150 is fuel-injected and smoother for everyday riding. The NS 200 has a larger, carburetor engine with more power, better suited to riders who want a sportier feel or plan longer rides.",
  },
  {
    q: "Where do I pick up the bike?",
    a: "Pickup is at our shop in Kusunti-13, Lalitpur, on the Kathmandu–Lalitpur border. It is open 7:30 am to 7:30 pm every day.",
  },
  {
    q: "What's the deposit for a motorbike?",
    a: "Locals leave an original ID document plus a cheque or cash deposit. Foreign visitors leave their original passport, or pay a cash deposit of NPR 15,000 instead of leaving their passport.",
    displayAnswer: <>Locals leave an original ID document plus a cheque or cash deposit. Foreign visitors leave their original passport, or pay a cash deposit of <Price amountNpr={15000} /> instead of leaving their passport.</>,
  },
  {
    q: "Is fuel included?",
    a: "No. You receive the bike with a standard fuel level and return it at the same level.",
  },
  {
    q: "Can I rent a bike without a Category A licence?",
    a: "No. Nepali traffic law requires a valid Category A licence for bikes above 125cc, and we do not rent to riders without one.",
  },
  {
    q: "Can I ride outside Kathmandu Valley?",
    a: "Yes. Tell us before you book so we can note your route, especially for longer trips such as Nagarkot, Dhulikhel or Pokhara.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${URL}#service`,
      name: "Motorbike rental in Kathmandu Valley",
      serviceType: "Motorbike rental",
      provider: { "@id": `${SITE}/#business` },
      areaServed: ["Kathmandu", "Lalitpur", "Bhaktapur"].map((n) => ({
        "@type": "City",
        name: n,
      })),
      url: URL,
      offers: bikes.map((b) => ({
        "@type": "Offer",
        name: `${b.name} rental per day`,
        price: b.daily,
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
        { "@type": "ListItem", position: 2, name: "Motorbike rental in Kathmandu", item: URL },
      ],
    },
  ],
};

export default function BikeRentalKathmandu() {
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
          <span className="text-white/80">Motorbike rental in Kathmandu</span>
        </nav>
        <h1 className="text-4xl font-black leading-tight tracking-tight lg:text-5xl">
          Motorbike Rental in Kathmandu
          <span className="mt-3 block text-xl font-semibold text-green-400 lg:text-2xl">
            Starting from <Price amountNpr={2200} /> per day
          </span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
          Rent a Yamaha FZ V2 150 or Bajaj Pulsar NS 200 and ride across Kathmandu, Lalitpur
          and Bhaktapur, or further out on longer trips.
          Looking for an automatic instead?{" "}
          <Link href="/scooter-rental-kathmandu" className="text-green-400 underline">
            See our scooter rental
          </Link>
          .
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={BOOKING_URL}
            className="rounded-full bg-green-500 px-7 py-3.5 text-center text-sm font-bold text-white hover:bg-green-400"
          >
            Book your bike
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
        <h2 className="text-3xl font-bold tracking-tight">Choose your bike</h2>
        <p className="mt-3 max-w-2xl text-white/60">
          Prices are per day. Category A licence required for both models.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {bikes.map((b) => (
            <article
              key={b.name}
              className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f2e]"
            >
              <div className="relative aspect-[4/3] bg-[#070b1a]">
                <Image
                  src={b.img}
                  alt={b.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-sm text-green-400">{b.engine}</p>
                <h3 className="mt-1 text-xl font-bold">{b.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{b.blurb}</p>
                <p className="mt-4 text-2xl font-black">
                  <Price amountNpr={b.daily} />
                  <span className="text-sm font-normal text-white/50"> /day</span>
                </p>
              </div>
            </article>
          ))}
        </div>
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
                <th className="px-5 py-4 font-semibold">Bike</th>
                <th className="px-5 py-4 font-semibold">1 day</th>
                {plans.map((p) => (
                  <th key={p.days} className="px-5 py-4 font-semibold">
                    {p.label} ({p.off * 100}% off)
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bikes.map((b) => (
                <tr key={b.name} className="border-t border-white/10">
                  <th scope="row" className="px-5 py-4 font-semibold">{b.name}</th>
                  <td className="px-5 py-4"><Price amountNpr={b.daily} /></td>
                  {plans.map((p) => (
                    <td key={p.days} className="px-5 py-4">
                      <span className="font-semibold">
                        <Price amountNpr={total(b.daily, p.days, p.off)} />
                      </span>
                      <span className="block text-xs text-white/50">
                        <Price amountNpr={b.daily * (1 - p.off)} />/day
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-white/60">
          Fuel is not included.
        </p>
      </section>

      {/* Pickup */}
      <section className="mx-auto max-w-6xl px-5 py-14 lg:px-10">
        <h2 className="text-3xl font-bold tracking-tight">Pick up in Lalitpur</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-white/70">
          Our shop is in Kusunti-13, Lalitpur, right on the Kathmandu–Lalitpur border, so
          Patan, Thamel and Bhaktapur are a short ride away. It is open 7:30 am to 7:30 pm
          every day.
        </p>
      </section>

      {/* Requirements */}
      <section className="mx-auto max-w-6xl px-5 py-14 lg:px-10">
        <h2 className="text-3xl font-bold tracking-tight">What you need to rent</h2>
        <ul className="mt-5 max-w-3xl list-disc space-y-2 pl-5 text-white/70">
          <li>A valid Category &quot;A&quot; licence, or an international permit with the equivalent category</li>
          <li>A citizenship card or passport for locals</li>
          <li>
            Locals: original ID document plus a cheque or cash deposit. Foreigners: original
            passport, or a cash deposit of <Price amountNpr={15000} /> instead of leaving your passport.
            {/* TODO: confirm this is "or" (passport OR 15k cash) and not both required */}
          </li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-5 py-14 lg:px-10">
        <h2 className="text-3xl font-bold tracking-tight">Common questions</h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-xl border border-white/10 bg-[#0a0f2e]/60 p-6">
              <h3 className="text-lg font-semibold">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{f.displayAnswer ?? f.a}</p>
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
            Book your bike
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