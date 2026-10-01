"use client";

import { formatAmount } from "@/lib/currency";
import { useCurrency } from "@/components/CurrencyProvider";

export function Price({ amountNpr }: { amountNpr: number }) {
  const { currency, rates } = useCurrency();

  if (currency !== "NPR" && !rates) {
    return (
      <span aria-label={`Price unavailable in ${currency}`}>
        {currency} rate unavailable
      </span>
    );
  }

  return <>{formatAmount(amountNpr, currency, rates)}</>;
}
