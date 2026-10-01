"use client";

import { useState, useRef, useEffect } from "react";
import { CURRENCIES } from "@/lib/currency";
import { useCurrency } from "@/components/CurrencyProvider";

export function CurrencySelector() {
  const { currency, setCurrency, rates, loading } = useCurrency();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-white/70 transition-colors hover:border-white/30 hover:text-white"
      >
        {currency}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-xl border border-white/10 bg-[#0a0f2e] shadow-xl">
          {CURRENCIES.map((c) => (
            <button
              key={c.code}
              type="button"
              disabled={c.code !== "NPR" && !rates}
              onClick={() => {
                setCurrency(c.code);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors hover:bg-white/5 disabled:opacity-40 ${
                currency === c.code ? "text-green-400" : "text-white/80"
              }`}
            >
              <span>{c.label}</span>
              <span className="text-white/40">{c.symbol.trim()}</span>
            </button>
          ))}
          <p className="border-t border-white/10 px-4 py-2 text-[10px] leading-snug text-white/30">
            Estimates only — payment is in NPR. Rates by exchangerate-api.com.
          </p>
        </div>
      )}
    </div>
  );
}