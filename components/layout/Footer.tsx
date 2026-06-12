import Image from "next/image";
import Link from "next/link";
import {
  APP_URL,
  BLOG_URL,
  BOOKING_URL,
  CONTACT_PHONES,
  WHATSAPP_URL,
  SITE_LOCATION,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#050815]">
      {/* ── Map strip ── */}
      <div className="relative w-full h-[420px] overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.8545754182182!2d85.30915347599094!3d27.659970676209813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4a875d8622c6bf0f%3A0xacb292edb838c062!2sMeroRide!5e0!3m2!1sen!2snp!4v1781153642440!5m2!1sen!2snp"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "brightness(0.85) saturate(0.9)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="MeroRide Location — Scooter Rental Lalitpur"
          className="absolute inset-0 w-full h-full"
        />
        {/* gradient fade into footer below */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-[#050815] pointer-events-none" />
        {/* location pill floating over map */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-[#050815]/90 backdrop-blur-md border border-white/10 rounded-full px-5 py-3 shadow-xl whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
          <span className="text-sm font-medium text-white">Kusunti-13, Lalitpur</span>
          <span className="text-white/30">·</span>
          <span className="text-sm text-white/60">7:30 am – 7:30 pm, everyday</span>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=MeroRide+Lalitpur`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 bg-green-600 hover:bg-green-500 transition-colors text-white text-xs font-semibold px-3 py-1.5 rounded-full"
          >
            Get Directions
          </a>
        </div>
      </div>

      {/* ── Main footer body ── */}
      <div className="mx-auto max-w-7xl px-5 lg:px-10 pt-10 pb-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/meroridea.svg"
                alt={`${SITE_NAME} logo`}
                width={38}
                height={38}
              />
              <span className="text-lg font-bold tracking-tight">
                <span className="text-white">Mero</span>
                <span className="text-green-400">Ride</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/55 max-w-xs mb-5">
              Scooter rental, scooty hire, and moped rental across Kathmandu
              and Lalitpur. Affordable daily, weekly &amp; monthly plans.
            </p>

            {/* Social + WhatsApp row */}
            <div className="flex items-center gap-3 flex-wrap">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 transition-colors text-white text-sm font-semibold px-4 py-2 rounded-full"
              >
                {/* WhatsApp icon inline SVG */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L0 24l6.335-1.505A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.878 9.878 0 01-5.031-1.371l-.361-.214-3.762.894.952-3.672-.235-.376A9.844 9.844 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z" />
                </svg>
                WhatsApp Us
              </a>
              <a
                href="https://www.facebook.com/meroridenepal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/8 hover:bg-white/15 border border-white/10 flex items-center justify-center transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
                  <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.931-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/meroridenepal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/8 hover:bg-white/15 border border-white/10 flex items-center justify-center transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/40">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Fleet", href: "#fleet" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Blog", href: "#blog" },
                { label: "Contact", href: "#contact" },
                { label: "Book on App", href: BOOKING_URL, external: true },
              ].map(({ label, href, external }) => (
                <li key={href}>
                  {external ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/50 hover:text-green-400 transition-colors"
                    >
                      {label}
                    </a>
                  ) : (
                    <Link href={href} className="text-white/50 hover:text-white transition-colors">
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/40">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              {CONTACT_PHONES.map((phone) => (
                <li key={phone.tel}>
                  <a
                    href={phone.tel}
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    {phone.display}
                  </a>
                </li>
              ))}
              <li className="text-white/50">{SITE_LOCATION}</li>
              <li className="text-white/50">7:30 am – 7:30 pm daily</li>
              <li>
                <a
                  href={BLOG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-green-400 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-green-400 transition-colors"
                >
                  {APP_URL.replace("https://", "")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/8 pt-7 text-xs text-white/30">
          <p>© 2024 {SITE_NAME}. All rights reserved.</p>
          <p className="text-white/20">Scooter rental in Kathmandu &amp; Lalitpur, Nepal</p>
        </div>
      </div>
    </footer>
  );
}