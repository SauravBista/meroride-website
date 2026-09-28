"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BOOKING_URL } from "@/lib/constants";
import type { FleetTierCardData } from "@/lib/fleet-tiers";

export function FleetTierCard({
  title,
  description,
  images,
  placeholder,
  accent,
  tag,
}: FleetTierCardData) {
  const validImages = images && images.length > 0 ? images : [];
  const slides = validImages.length > 0 ? validImages : [placeholder];
  const [index, setIndex] = useState(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const currentSrc = slides[index];
  const isRemote = currentSrc.startsWith("http");
  const hasMultiple = slides.length > 1;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-[#0a0f2e] border border-white/8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-white/15">

      {/* ── Image area ── */}
      <div className="relative h-[260px] w-full overflow-hidden bg-[#070b1a]">

        {/* Accent top bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px] z-20"
          style={{ backgroundColor: accent }}
        />

        {/* Sliding images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSrc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]"
          >
            <Image
              src={currentSrc}
              alt={`${title} scooter for rent in Kathmandu — MeroRide`}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              sizes="(max-width: 768px) 100vw, 33vw"
              unoptimized={isRemote}
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Bottom gradient so image fades into card body */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#0a0f2e]" />

        {/* Tag pill — top-left */}
        <div className="absolute top-4 left-4 z-20">
          <span
            className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
            style={{ backgroundColor: accent + "22", color: accent, border: `1px solid ${accent}44` }}
          >
            {tag}
          </span>
        </div>

        {/* Prev / Next arrows */}
        {hasMultiple && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-black/80 backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft size={15} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-black/80 backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight size={15} />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className="h-1.5 rounded-full transition-all duration-200"
                  style={{
                    width: i === index ? "18px" : "6px",
                    backgroundColor: i === index ? accent : "rgba(255,255,255,0.3)",
                  }}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-col flex-1 p-5 pt-4">
        <h3 className="text-[18px] font-extrabold uppercase tracking-wide text-white leading-tight">
          {title}
        </h3>
        <p className="mt-2 text-[13px] leading-relaxed text-white/55 line-clamp-2 flex-1">
          {description}
        </p>

        {/* Divider */}
        <div className="my-4 h-px bg-white/8" />

        {/* Quick trust signals */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1.5 text-[11px] text-white/40">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Maintained
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-white/40">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Flexible duration
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-white/40">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.89 10.07 19.79 19.79 0 011.82 1.44 2 2 0 013.82 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 7.91a16 16 0 006.29 6.29l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            WhatsApp support
          </div>
        </div>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-3 rounded-xl text-center text-[13px] font-bold uppercase tracking-wider text-white transition-all duration-200 hover:brightness-110 hover:shadow-lg active:scale-[0.98]"
          style={{
            backgroundColor: accent,
            boxShadow: `0 4px 20px ${accent}40`,
          }}
        >
          Book Now
        </a>
      </div>
    </article>
  );
}