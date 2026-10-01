"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  type Currency,
  type CurrencyRates,
} from "@/lib/currency";

const RATE_ENDPOINT = "https://open.er-api.com/v6/latest/NPR";

type CurrencyContextValue = {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  rates: CurrencyRates | null;
  isLoadingRates: boolean;
  rateError: string | null;
};

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

function parseRates(payload: unknown): CurrencyRates {
  if (
    !payload ||
    typeof payload !== "object" ||
    !("result" in payload) ||
    payload.result !== "success" ||
    !("base_code" in payload) ||
    payload.base_code !== "NPR" ||
    !("rates" in payload) ||
    !payload.rates ||
    typeof payload.rates !== "object"
  ) {
    throw new Error("The exchange-rate service returned an invalid response");
  }

  const sourceRates = payload.rates as Record<string, unknown>;
  function getRate(currency: Currency): number {
    const rate = sourceRates[currency];
    if (typeof rate !== "number" || !Number.isFinite(rate) || rate <= 0) {
      throw new Error(`The exchange-rate service did not return a valid ${currency} rate`);
    }
    return rate;
  }

  const rates: CurrencyRates = {
    NPR: getRate("NPR"),
    USD: getRate("USD"),
    INR: getRate("INR"),
    GBP: getRate("GBP"),
  };
  return rates;
}

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>("NPR");
  const [rates, setRates] = useState<CurrencyRates | null>(null);
  const [isLoadingRates, setIsLoadingRates] = useState(true);
  const [rateError, setRateError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadRates() {
      try {
        const response = await fetch(RATE_ENDPOINT, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`Exchange-rate service returned HTTP ${response.status}`);
        }

        const payload: unknown = await response.json();
        setRates(parseRates(payload));
        setRateError(null);
      } catch (error) {
        if (controller.signal.aborted) return;
        setRateError(
          error instanceof Error
            ? `Live exchange rates are unavailable: ${error.message}`
            : "Live exchange rates are unavailable because of an unknown error.",
        );
      } finally {
        if (!controller.signal.aborted) setIsLoadingRates(false);
      }
    }

    void loadRates();
    return () => controller.abort();
  }, []);

  const setCurrency = useCallback((nextCurrency: Currency) => {
    setCurrencyState(nextCurrency);
  }, []);

  const value = useMemo(
    () => ({
      currency,
      setCurrency,
      rates,
      isLoadingRates,
      rateError,
    }),
    [currency, setCurrency, rates, isLoadingRates, rateError],
  );

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency(): CurrencyContextValue {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used inside CurrencyProvider");
  }
  return context;
}
