"use client";

import { CURRENCIES, isCurrency } from "@/lib/currency";
import { useCurrency } from "@/components/CurrencyProvider";
import { useId } from "react";

const CURRENCY_FLAGS = {
  NPR: "🇳🇵",
  USD: "🇺🇸",
  INR: "🇮🇳",
  GBP: "🇬🇧",
} as const;

export function CurrencySelector() {
  const {
    currency,
    setCurrency,
    isLoadingRates,
    rateError,
  } = useCurrency();
  const selectId = useId();

  return (
    <div className="flex flex-col items-start gap-1">
      <label className="sr-only" htmlFor={selectId}>
        Display currency
      </label>
      <select
        id={selectId}
        value={currency}
        onChange={(event) => {
          if (isCurrency(event.target.value)) setCurrency(event.target.value);
        }}
        className="rounded-full border border-white/15 bg-[#0a0f2e] px-3 py-2 text-[13px] font-semibold text-white outline-none focus:border-green-400"
      >
        {CURRENCIES.map((option) => (
          <option key={option} value={option}>
            {CURRENCY_FLAGS[option]} {option}
          </option>
        ))}
      </select>
      {isLoadingRates && (
        <span role="status" className="sr-only">
          Loading live exchange rates
        </span>
      )}
      {rateError && (
        <span role="status" className="max-w-56 text-xs text-amber-300">
          {rateError}
        </span>
      )}
    </div>
  );
}
