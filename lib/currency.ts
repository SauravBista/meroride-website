export const CURRENCIES = ["NPR", "USD", "INR", "GBP"] as const;

export type Currency = (typeof CURRENCIES)[number];
export type CurrencyRates = Record<Currency, number>;

export function isCurrency(value: unknown): value is Currency {
  return typeof value === "string" && CURRENCIES.some((currency) => currency === value);
}

const LOCALES: Record<Currency, string> = {
  NPR: "en-NP",
  USD: "en-US",
  INR: "en-IN",
  GBP: "en-GB",
};

export function formatAmount(
  amountNpr: number,
  currency: Currency,
  rates: CurrencyRates | null,
): string {
  if (!Number.isFinite(amountNpr)) {
    throw new RangeError("Amount must be a finite number");
  }

  const rate = currency === "NPR" ? 1 : rates?.[currency];
  if (rate === undefined || !Number.isFinite(rate) || rate <= 0) {
    throw new Error(`Exchange rate for ${currency} is unavailable`);
  }

  return new Intl.NumberFormat(LOCALES[currency], {
    style: "currency",
    currency,
    maximumFractionDigits: currency === "NPR" ? 0 : 2,
  }).format(amountNpr * rate);
}
