"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BOOKING_URL, NAV_LINKS, SITE_NAME, WHATSAPP_URL } from "@/lib/constants";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  const filteredLinks = NAV_LINKS.filter(
  (l) => l.href !== "/#why-us" && l.href !== "/#contact"
);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-[#050815]/90 backdrop-blur-xl border-b border-white/8 shadow-[0_1px_32px_rgba(0,0,0,0.4)]"
        : "bg-transparent border-b border-transparent"
        }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-10">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 flex-shrink-0"
          onClick={closeMobile}
        >
          <Image
            src="/meroridea.svg"
            alt={`${SITE_NAME} logo`}
            width={34}
            height={34}
            className="h-[34px] w-auto"
            priority
          />
          <span className="text-[18px] font-extrabold tracking-tight">
            <span className="text-white">Mero</span>
            <span className="text-green-400">Ride</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 xl:flex">
          {filteredLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-[13.5px] font-medium text-white/60 transition-colors duration-200 hover:text-white rounded-lg hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 xl:flex">
          {/* WhatsApp ghost button */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[13px] font-medium text-white/70 transition-all duration-200 hover:border-white/30 hover:text-white"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L0 24l6.335-1.505A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.878 9.878 0 01-5.031-1.371l-.361-.214-3.762.894.952-3.672-.235-.376A9.844 9.844 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z" />
            </svg>
            WhatsApp
          </a>

          {/* Book Now primary */}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-green-500 px-5 py-2 text-[13px] font-bold text-white shadow-[0_0_20px_rgba(74,222,128,0.25)] transition-all duration-200 hover:bg-green-400 hover:shadow-[0_0_24px_rgba(74,222,128,0.4)]"
          >
            Book Now
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex items-center justify-center rounded-lg p-2 text-white/70 hover:text-white hover:bg-white/8 transition-colors xl:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="border-t border-white/8 bg-[#050815] px-5 pt-4 pb-6">
          <div className="flex flex-col gap-0.5 mb-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-3 text-[14px] font-medium text-white/65 hover:bg-white/6 hover:text-white transition-colors"
                onClick={closeMobile}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile CTA buttons */}
          <div className="flex flex-col gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-green-500 py-3 text-center text-[14px] font-bold text-white shadow-[0_0_20px_rgba(74,222,128,0.2)] hover:bg-green-400 transition-colors"
              onClick={closeMobile}
            >
              Book Now
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border border-white/15 py-3 text-center text-[14px] font-medium text-white/70 hover:border-white/30 hover:text-white transition-all flex items-center justify-center gap-2"
              onClick={closeMobile}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L0 24l6.335-1.505A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.878 9.878 0 01-5.031-1.371l-.361-.214-3.762.894.952-3.672-.235-.376A9.844 9.844 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}