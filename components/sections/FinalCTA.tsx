import { BOOKING_URL, getWhatsAppUrl } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-primary py-24 lg:py-32">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(46,125,50,0.08),transparent_70%)]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center lg:px-10">
        <ScrollReveal>
          <h2 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
            Ready to Ride?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-text-secondary">
            Book your scooter today. Available across Lalitpur with instant
            WhatsApp confirmation.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href={BOOKING_URL}
              variant="primary"
              external
              className="!min-w-[200px] !px-10 !py-4"
            >
              Book Now
            </Button>
            <Button
              href={getWhatsAppUrl()}
              variant="ghost"
              external
              className="!min-w-[200px] !px-10 !py-4"
            >
              WhatsApp Us
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
