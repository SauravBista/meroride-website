import { buildFleetTierCards } from "@/lib/fleet-tiers";
import { getFleetVehicles } from "@/lib/vehicles";
import { FleetTierCard } from "@/components/ui/FleetTierCard";

export async function FleetGrid() {
  let vehicles: Awaited<ReturnType<typeof getFleetVehicles>> = [];

  try {
    vehicles = await getFleetVehicles();
  } catch {
    vehicles = [];
  }

  const tiers = buildFleetTierCards(vehicles);

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {tiers.map((tier) => (
        <FleetTierCard key={tier.id} {...tier} />
      ))}
    </div>
  );
}
