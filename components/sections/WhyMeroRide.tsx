import {
  Clock,
  MapPin,
  MessageCircle,
  Receipt,
  Users,
  Wrench,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const benefits = [
  {
    icon: Wrench,
    title: "Well Maintained Scooters",
    description: "Every unit serviced and inspected before it reaches you.",
  },
  {
    icon: MessageCircle,
    title: "Instant WhatsApp Support",
    description: "Direct line to our Lalitpur team—no call centres.",
  },
  {
    icon: Clock,
    title: "Flexible Rental Duration",
    description: "Hourly, daily, and long-term options for any schedule.",
  },
  {
    icon: MapPin,
    title: "Based in Lalitpur — Know the Roads",
    description: "Local expertise for Patan, Kathmandu Valley, and beyond.",
  },
  {
    icon: Receipt,
    title: "Transparent Pricing, No Hidden Fees",
    description: "Clear rates and NPR 500 deposit—no surprises at pickup.",
  },
  {
    icon: Users,
    title: "119+ Google Reviews",
    description: "4.9-star rating from riders across Lalitpur and Kathmandu Valley.",
  },
] as const;

export function WhyMeroRide() {
  return (
    <section id="why-us" className="section-elevated py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <ScrollReveal className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-green-light">
            Why Choose Us
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
            Why MeroRide
          </h2>
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.05}>
              <div className="glass-card glass-card-static h-full rounded-xl p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-navy-dark/80">
                  <item.icon
                    className="h-5 w-5 text-green-light"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
