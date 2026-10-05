import Image from "next/image";
import { BOOKING_URL, GOOGLE_REVIEW_COUNT, GOOGLE_RATING } from "@/lib/constants";
import { Price } from "@/components/Price";

const trustItems = [
  { key: "starting-price", content: <Price amountNpr={1100} /> },
  { key: "no-hidden-charges", content: "No hidden charges" },
  { key: "rating", content: `${GOOGLE_RATING}★` },
  { key: "review-count", content: `${GOOGLE_REVIEW_COUNT} Google Reviews` },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20 pb-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#050815]" aria-hidden />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />

      {/* Green radial glow — left */}
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #4caf50 0%, transparent 70%)", filter: "blur(80px)" }}
        aria-hidden
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-10 px-5 lg:flex-row lg:gap-16 lg:px-10">

        {/* ── Left column ── */}
        <div className="flex w-full flex-col lg:w-[54%]">
          {/* Location badge */}
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-green-500/25 bg-green-500/10 px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-green-400">
              Kusunti, Lalitpur · Nepal
            </span>
          </div>

          <p className="mb-4 text-[15px] uppercase tracking-[0.2em] text-green-300 text-white/70">
            Kathmandu&apos;s Trusted Two-Wheeler Rental
          </p>

          {/* H1 */}
          <h1 className="text-[36px] font-[900] leading-[1.1] tracking-tight text-white lg:text-[52px]">
  Scooter &amp; Bike Rental in Kathmandu &amp; Lalitpur
  <span className="mt-3 block text-[20px] font-semibold text-green-400 lg:text-[26px]">
    हाम्रो यात्रा, MeroRide सँग
  </span>
</h1>
          {/* Body copy */}
          <p
            className="mt-5 max-w-[460px] text-[16px] leading-[1.7] text-white/55"
          >
            Scooter and bike rental in Kathmandu and Lalitpur. Daily, weekly, and monthly plans with simple booking and transparent pricing.
          </p>

          {/* CTA buttons */}
          <div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-7 py-3.5 text-[14px] font-bold text-white shadow-[0_0_28px_rgba(74,222,128,0.3)] transition-all duration-200 hover:bg-green-400 hover:shadow-[0_0_36px_rgba(74,222,128,0.45)]"
            >
              Book Your Ride
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#fleet"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-[14px] font-semibold text-white/70 transition-all duration-200 hover:border-white/30 hover:text-white hover:bg-white/5"
            >
              View Our Fleet
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-12 border-t border-white/8 pt-7">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {trustItems.map(({ key, content }) => (
                <div key={key} className="flex items-center justify-center rounded-2xl bg-white/5 px-3 py-3 text-center">
                  <span className="text-[13px] font-semibold text-white/90 leading-tight">
                    {content}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right column — logo animation ── */}
        <div className="relative flex w-full items-center justify-center lg:w-[46%]">
          {/* Glow behind logo */}
          <div
            className="pointer-events-none absolute inset-0 rounded-full opacity-30"
            style={{
              background: "radial-gradient(circle at center, rgba(76,175,80,0.25) 0%, transparent 65%)",
              filter: "blur(40px)",
            }}
            aria-hidden
          />

          {/* Floating scooter */}
          <div className="relative z-10 animate-float motion-reduce:animate-none">
            <Image
              src="/meroridea.svg"
              alt="MeroRide scooter rental Kathmandu"
              width={390}
              height={295}
              className="h-auto w-full max-w-[400px] object-contain drop-shadow-2xl lg:max-w-[440px]"
              sizes="(max-width: 440px) calc(100vw - 2.5rem), (max-width: 1023px) 400px, 440px"
              preload
            />
          </div>

          {/* Floating price chip */}
          <div
            className="absolute bottom-4 left-0 z-20 rounded-2xl border border-white/10 bg-[#0a0f2e]/90 px-4 py-3 shadow-xl backdrop-blur-md lg:bottom-10 lg:left-4"
          >
            <p className="text-[22px] font-black text-white leading-none">
              From <span className="text-green-400"><Price amountNpr={1100} /></span>
              <span className="text-[13px] font-normal text-white/40">/day</span>
            </p>
            <p className="mt-0.5 text-[11px] text-white/40">No hidden charges</p>
          </div>

          {/* Floating review chip */}
          <div
            className="absolute -top-2 -right-6 z-20 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0a0f2e]/90 px-4 py-3 shadow-xl backdrop-blur-md lg:-top-4 lg:-right-8"
          >
            <div className="flex text-yellow-400 text-[13px] leading-none">
              {"★★★★★"}
            </div>
            <div>
              <p className="text-[12px] font-bold text-white leading-none">{GOOGLE_RATING} Rating</p>
              <p className="text-[10px] text-white/40">{GOOGLE_REVIEW_COUNT} reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}