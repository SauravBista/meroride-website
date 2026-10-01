export type CurrencyCode = "NPR" | "USD" | "INR" | "GBP";

export const CURRENCIES: { code: CurrencyCode; label: string; symbol: string }[] = [
  { code: "NPR", label: "NPR", symbol: "NPR " },
  { code: "USD", label: "USD", symbol: "$" },
  { code: "INR", label: "INR", symbol: "₹" },
  { code: "GBP", label: "GBP", symbol: "£" },
];

export type Rates = Record<Exclude<CurrencyCode, "NPR">, number>; // 1 NPR = rates[CODE] units

function convert(amountNpr: number, currency: CurrencyCode, rates: Rates | null): number {
  if (currency === "NPR" || !rates) return amountNpr;
  return amountNpr * rates[currency];
}

// Foreign amounts are prefixed with "~" since the actual charge is always in NPR
// and the live rate is an estimate, not what the bank will apply.
export function formatAmount(amountNpr: number, currency: CurrencyCode, rates: Rates | null): string {
  if (currency === "NPR" || !rates) {
    return `NPR ${Math.round(amountNpr).toLocaleString("en-US")}`;
  }
  const value = convert(amountNpr, currency, rates);
  const symbol = CURRENCIES.find((c) => c.code === currency)?.symbol ?? "";
  return `~${symbol}${Math.round(value).toLocaleString("en-US")}`;
}