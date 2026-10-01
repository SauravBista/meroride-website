import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { BackToTop } from "@/components/layout/BackToTop";
import { CurrencyProvider } from "@/components/CurrencyProvider";
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
  title: {
    default: "Scooter & Bike Rental in Kathmandu & Lalitpur | MeroRide",
    template: "%s | MeroRide",
  },
  description:
    "Rent a scooter or bike in Kathmandu and Lalitpur from NPR 1100/day. Well-maintained fleet, transparent pricing, instant WhatsApp booking. Daily, weekly and monthly plans available.",
  alternates: { canonical: "/" },
  openGraph: {
    siteName: "MeroRide",
    locale: "en_NP",
    type: "website",
    url: "/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MeroRide scooter rental in Kathmandu and Lalitpur" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
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
        <CurrencyProvider>
          <SmoothScroll>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <FloatingWhatsApp />
            <BackToTop />
          </SmoothScroll>
        </CurrencyProvider>
      </body>
    </html>
  );
}
