import { Suspense } from "react";
import { FleetGrid } from "@/components/sections/FleetGrid";
import { FleetSkeleton } from "@/components/ui/FleetSkeleton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Fleet() {
  return (
    <section id="fleet" className="section-dark py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <ScrollReveal className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
            Our Fleet
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
            Three tiers of well-maintained scooters for every rider and every
            journey in Lalitpur.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Suspense fallback={<FleetSkeleton count={3} />}>
            <FleetGrid />
          </Suspense>
        </ScrollReveal>
        
        
      </div>
    </section>
  );
}
