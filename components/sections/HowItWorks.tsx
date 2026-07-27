import { Bike, CalendarRange, CircleCheck, Wallet } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const steps = [
  {
    icon: CalendarRange,
    title: "Pick your dates",
    description:
      "Choose a daily, weekly, or monthly plan, with no hourly commitments and no hidden extras.",
    detail: "Daily · Weekly · Monthly",
  },
  {
    icon: Bike,
    title: "Choose your ride",
    description:
      "Browse live availability and pick from our well-maintained fleet of scooters and bikes.",
    detail: "Live availability",
  },
  {
    icon: Wallet,
    title: "Secure your booking",
    description:
      "Pre-pay a NPR 500 deposit online, or message us on WhatsApp to confirm your booking.",
    detail: "Online · WhatsApp",
    whatsapp: true,
  },
  {
    icon: CircleCheck,
    title: "Ride and return",
    description:
      "Collect from Kusunti, Lalitpur, ride across the valley with confidence, return on time.",
    detail: "Kusunti-13, Lalitpur",
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-primary py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">

        {/* Header */}
        <ScrollReveal className="mb-16 text-center">
          <span className="inline-block mb-3 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-green-400 bg-green-400/10 border border-green-400/20">
            Simple Process
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
            How to Rent a Scooter or Bike with MeroRide
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-[15px] leading-relaxed text-white/50">
            Four steps from browsing to riding. No complicated forms, no surprises.
          </p>
        </ScrollReveal>

        {/* Steps */}
        <ScrollReveal delay={0.08}>
          <ol className="relative grid gap-0 lg:grid-cols-4">

            {/* Connecting line — desktop only */}
            <div
              className="pointer-events-none absolute top-[52px] left-[12.5%] right-[12.5%] hidden h-px lg:block"
              aria-hidden
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(255,255,255,0.12) 15%, rgba(255,255,255,0.12) 85%, transparent)",
              }}
            />

            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLast = i === steps.length - 1;

              return (
                <li
                  key={step.title}
                  className="group relative flex flex-col items-center text-center px-4 pb-10 lg:pb-0"
                >
                  {/* Mobile connector line */}
                  {!isLast && (
                    <div
                      className="absolute left-1/2 top-[104px] -translate-x-1/2 w-px h-[calc(100%-104px)] bg-white/8 lg:hidden"
                      aria-hidden
                    />
                  )}

                  {/* Icon circle */}
                  <div className="relative z-10 mb-6">
                    {/* Outer glow ring on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-green-400/10 scale-90 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-400 blur-sm" />

                    <div className="relative flex h-[56px] w-[56px] items-center justify-center rounded-2xl bg-[#0d1235] border border-white/10 shadow-lg group-hover:border-green-400/30 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-green-400" strokeWidth={1.5} />
                    </div>

                    {/* Step number badge */}
                    <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-[10px] font-black text-white shadow-md">
                      {i + 1}
                    </span>
                  </div>

                  {/* Text */}
                  <h3 className="text-[15px] font-bold text-white leading-snug mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-white/50 max-w-[200px]">
                    {step.description}
                  </p>

                  {/* Detail chip */}
                  <div className="mt-3 inline-flex items-center gap-1.5">
                    {"whatsapp" in step && step.whatsapp && (
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="#25D366"
                        className="flex-shrink-0"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L0 24l6.335-1.505A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.878 9.878 0 01-5.031-1.371l-.361-.214-3.762.894.952-3.672-.235-.376A9.844 9.844 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z" />
                      </svg>
                    )}
                    <span className="text-[11px] font-medium text-white/25 tracking-wide">
                      {step.detail}
                    </span>
                  </div>
                </li>
              );
            })}
          </ol>
        </ScrollReveal>

        {/* Bottom CTA strip */}
        <ScrollReveal delay={0.18}>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.meroride.com.np/book"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 transition-colors text-white text-sm font-bold px-6 py-3 rounded-full shadow-lg"
            >
              Book your scooter →
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B9779705441746&text=Hello+MeroRide!+I'd+like+to+book+a+scooter.&type=phone_number"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/70 hover:text-white text-sm font-medium px-6 py-3 rounded-full transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.849L0 24l6.335-1.505A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.878 9.878 0 01-5.031-1.371l-.361-.214-3.762.894.952-3.672-.235-.376A9.844 9.844 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z" />
              </svg>
              Book via WhatsApp
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}