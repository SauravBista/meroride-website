"use client";

import { useCurrency } from "@/components/CurrencyProvider";
import { formatAmount } from "@/lib/currency";

export function Price({ amountNpr, className }: { amountNpr: number; className?: string }) {
  const { currency, rates } = useCurrency();
  return <span className={className}>{formatAmount(amountNpr, currency, rates)}</span>;
}