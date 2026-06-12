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
  title: "MeroRide — Scooter Rental in Kathmandu | Scooty on Rent Near Me",
  description: "Affordable scooter rental in Kathmandu and Lalitpur. Book a petrol scooter or moped on rent near you. Daily, weekly, and monthly scooter rental available. MeroRide — Hamro Yatra MeroRide Sanga.",
  keywords: ["scooter rental Kathmandu", "scooty on rent near me", "scooter hire Kathmandu", "moped rental Kathmandu", "monthly scooter rental Nepal", "motorized scooter rental Kathmandu"],
  openGraph: {
    title: "MeroRide — Scooter Rental in Kathmandu",
    description: "Book a petrol scooter on rent in Kathmandu. Daily, weekly & monthly scooter hire available. Ride with MeroRide.",
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
