"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { CurrencyCode, Rates } from "@/lib/currency";

type CurrencyContextValue = {
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
  rates: Rates | null;
  loading: boolean;
};

const CurrencyContext = createContext<CurrencyContextValue>({
  currency: "NPR",
  setCurrency: () => {},
  rates: null,
  loading: true,
});

export function useCurrency() {
  return useContext(CurrencyContext);
}

const RATES_CACHE_KEY = "meroride_rates_cache";
const CURRENCY_KEY = "meroride_currency";

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("NPR");
  const [rates, setRates] = useState<Rates | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(CURRENCY_KEY) as CurrencyCode | null;
      if (saved && CURRENCY_KEY) setCurrencyState(saved);
    } catch {
      // localStorage unavailable, default to NPR
    }
  }, []);

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);

    try {
      const cached = localStorage.getItem(RATES_CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed.date === today && parsed.rates) {
          setRates(parsed.rates);
          setLoading(false);
          return;
        }
      }
    } catch {
      // ignore, fall through to fetch
    }

    fetch("/api/exchange-rates")
      .then((res) => {
        if (!res.ok) throw new Error("Rate fetch failed");
        return res.json();
      })
      .then((data) => {
        setRates(data.rates);
        try {
          localStorage.setItem(RATES_CACHE_KEY, JSON.stringify({ date: today, rates: data.rates }));
        } catch {
          // storage full, not critical
        }
      })
      .catch((err) => {
        console.error("Currency rates unavailable:", err);
        // rates stays null; formatAmount falls back to NPR automatically
      })
      .finally(() => setLoading(false));
  }, []);

  const setCurrency = (c: CurrencyCode) => {
    setCurrencyState(c);
    try {
      localStorage.setItem(CURRENCY_KEY, c);
    } catch {
      // ignore
    }
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, rates, loading }}>
      {children}
    </CurrencyContext.Provider>
  );
}