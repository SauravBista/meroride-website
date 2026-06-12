"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="glass fixed bottom-24 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:bottom-28 lg:right-8"
    >
      <ArrowUp className="h-5 w-5" aria-hidden />
    </button>
  );
}
