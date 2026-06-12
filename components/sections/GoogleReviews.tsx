"use client";

import { Star } from "lucide-react";
import {
  GOOGLE_REVIEWS,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
} from "@/lib/constants";
import type { GoogleReview } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <div className="glass-card glass-card-static mx-3 w-[340px] shrink-0 rounded-xl p-5 sm:w-[380px]">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="font-semibold text-white">{review.name}</span>
        <span className="text-xs text-text-muted">{review.date}</span>
      </div>
      <div className="mb-3 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
            aria-hidden
          />
        ))}
      </div>
      <p className="line-clamp-4 text-sm leading-relaxed text-text-secondary">
        {review.text}
      </p>
    </div>
  );
}

function MarqueeRow({
  reviews,
  direction,
}: {
  reviews: GoogleReview[];
  direction: "left" | "right";
}) {
  const doubled = [...reviews, ...reviews];
  const animation =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="marquee-row py-3">
      <div className={`marquee-track ${animation}`}>
        {doubled.map((review, i) => (
          <ReviewCard key={`${review.name}-${i}`} review={review} />
        ))}
      </div>
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg
      className="h-7 w-7"
      viewBox="0 0 24 24"
      aria-hidden
      fill="none"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export function GoogleReviews() {
  const rowA = GOOGLE_REVIEWS.slice(0, 5);
  const rowB = GOOGLE_REVIEWS.slice(5);

  return (
    <section id="reviews" className="section-dark overflow-hidden py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <ScrollReveal className="mb-10 flex flex-col items-center text-center">
          <div className="mb-4 flex items-center gap-3">
            <GoogleLogo />
            <h2 className="text-2xl font-bold text-white lg:text-3xl">
              {GOOGLE_RATING} stars across {GOOGLE_REVIEW_COUNT} reviews on
              Google
            </h2>
          </div>
          <p className="max-w-xl text-sm text-text-secondary">
            Real feedback from riders across Lalitpur and Kathmandu Valley.
          </p>
        </ScrollReveal>
      </div>

      <div className="space-y-1">
        <MarqueeRow reviews={rowA} direction="left" />
        <MarqueeRow reviews={rowB.length ? rowB : rowA} direction="right" />
      </div>
    </section>
  );
}
