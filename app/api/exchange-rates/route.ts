import { NextResponse } from "next/server";

const SOURCE = "https://open.er-api.com/v6/latest/NPR";

export async function GET() {
  try {
    const res = await fetch(SOURCE, { next: { revalidate: 86400 } });
    if (!res.ok) throw new Error(`Rate API error: ${res.status}`);
    const data = await res.json();
    const r = data?.rates;
    if (!r?.USD || !r?.INR || !r?.GBP) throw new Error("Missing currencies in response");

    return NextResponse.json({
      rates: { USD: r.USD, INR: r.INR, GBP: r.GBP },
      updatedAt: data.time_last_update_utc ?? new Date().toISOString(),
    });
  } catch (err) {
    console.error("Exchange rate fetch failed:", err);
    return NextResponse.json({ error: "Unavailable" }, { status: 502 });
  }
}