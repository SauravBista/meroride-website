import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { BackToTop } from "@/components/layout/BackToTop";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { getOrganizationJsonLd } from "@/lib/json-ld";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meroride.com.np"),
  title: "MeroRide — Scooter & Bike Rental in Kathmandu | Scooty on Rent Lalitpur",
  description:
    "Rent a scooter or bike in Kathmandu and Lalitpur from NPR 1100/day. Well-maintained fleet, transparent pricing, instant WhatsApp booking. Daily, weekly and monthly plans available.",
  keywords: ["scooter rental Kathmandu", "bike rental Kathmandu", "scooty on rent Lalitpur", "motorbike rental Kathmandu", "monthly scooter rental Nepal"],
  openGraph: {
    title: "MeroRide — Scooter & Bike Rental in Kathmandu",
    description:
      "Rent a scooter or bike in Kathmandu and Lalitpur from NPR 1100/day. Well-maintained fleet, transparent pricing, instant WhatsApp booking. Daily, weekly and monthly plans available.",
    url: "https://meroride.com",
    siteName: "MeroRide",
    locale: "en_NP",
    type: "website",
  },
};

const jsonLd = getOrganizationJsonLd();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full bg-white dark:bg-navy-dark font-sans antialiased text-gray-900 dark:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <BackToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
