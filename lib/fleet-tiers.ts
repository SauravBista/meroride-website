import { FALLBACK_SCOOTER_IMAGE } from "@/lib/constants";
import type { FleetVehicle } from "@/types/vehicle";

export type FleetTierConfig = {
  id: string;
  title: string;
  description: string;
  accent: string;
  tag: string;
  matches: (nameLower: string) => boolean;
};

export const FLEET_TIERS: FleetTierConfig[] = [
  {
    id: "budget",
    title: "Budget Ride",
    description:
      "Perfect for short trips and daily commutes around Lalitpur. Lightweight, fuel-efficient, and easy to ride.",
    accent: "#3b82f6",
    tag: "ECONOMY",
    matches: (name) => name.includes("dio"),
  },
  {
    id: "comfort",
    title: "Comfortable Ride",
    description:
      "Smooth and comfortable for city exploration and valley trips. A great fit for all riders.",
    accent: "#10b981",
    tag: "STANDARD",
    matches: (name) => name.includes("aviator"),
  },
  {
    id: "premium",
    title: "Premium Ride",
    description:
      "Powerful and stylish, built for riders who want performance across Kathmandu Valley and beyond.",
    accent: "#f59e0b",
    tag: "PREMIUM",
    matches: (name) => name.includes("ntorq") || name.includes("ray zr"),
  },

];

export type FleetTierCardData = {
  id: string;
  title: string;
  description: string;
  images: string[];
  placeholder: string;
  accent: string;
  tag: string;
};

export function buildFleetTierCards(
  vehicles: FleetVehicle[]
): FleetTierCardData[] {
  return FLEET_TIERS.map((tier) => {
    const images = vehicles
      .filter((v) => tier.matches(v.name.toLowerCase()))
      .flatMap((v) => [v.image, v.imageUrl2])
      .filter((url): url is string => Boolean(url));

    return {
      id: tier.id,
      title: tier.title,
      description: tier.description,
      images,
      placeholder: FALLBACK_SCOOTER_IMAGE,
      accent: tier.accent,
      tag: tier.tag,
    };
  });
}
