import type { FleetVehicle, VehicleApiRecord } from "@/types/vehicle";

function extractVehicleList(payload: unknown): VehicleApiRecord[] {
  if (Array.isArray(payload)) return payload as VehicleApiRecord[];
  if (payload && typeof payload === "object") {
    const obj = payload as Record<string, unknown>;
    for (const key of ["vehicles", "data", "results", "items"]) {
      if (Array.isArray(obj[key])) return obj[key] as VehicleApiRecord[];
    }
  }
  return [];
}

function toAbsoluteUrl(raw: string): string {
  let url = raw;

  if (url.startsWith("//")) {
    url = `https:${url}`;
  }

  if (url.startsWith("http://res.cloudinary.com")) {
    url = url.replace("http://", "https://");
  }

  if (!url.startsWith("http") && !url.startsWith("/") && url.includes("res.cloudinary.com")) {
    url = `https://${url}`;
  }

  if (url.startsWith("http")) return url;
  if (url.startsWith("/")) return `https://app.meroride.com.np${url}`;
  return url;
}

function resolveImageUrl(record: VehicleApiRecord): string | null {
  const imageUrl = record.imageUrl ?? record.image_url ?? record.image;
  if (imageUrl && typeof imageUrl === "string" && imageUrl.trim()) {
    return toAbsoluteUrl(imageUrl.trim());
  }

  const photoUrl = record.photoUrl ?? record.photo_url;
  if (photoUrl && typeof photoUrl === "string" && photoUrl.trim()) {
    return toAbsoluteUrl(photoUrl.trim());
  }

  return null;
}

function normalizeVehicle(record: VehicleApiRecord): FleetVehicle | null {
  const id = record.id ?? record._id;
  const name =
    record.name ?? record.title ?? record.model ?? (id ? `Scooter ${id}` : null);
  if (!name) return null;

  let imageUrl2: string | null = null;
  const rawImage2 = record.imageUrl2 ?? record.image_url_2;
  if (rawImage2 && typeof rawImage2 === "string" && rawImage2.trim()) {
    imageUrl2 = toAbsoluteUrl(rawImage2.trim());
  }

  return {
    id: String(id ?? name),
    name: String(name),
    image: resolveImageUrl(record),
    imageUrl2,
    description:
      record.description ??
      record.shortDescription ??
      record.short_description ??
      "Well-maintained scooter from the MeroRide Lalitpur fleet.",
  };
}

export async function getFleetVehicles(): Promise<FleetVehicle[]> {
  const headers: HeadersInit = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const token = process.env.VEHICLES_API_TOKEN;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL 
    || 'https://app.meroride.com.np'

  const res = await fetch(`${appUrl}/api/vehicles/available`, {
    headers,
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Vehicles API responded with ${res.status}`);
  }

  const payload: unknown = await res.json();
  return extractVehicleList(payload)
    .map(normalizeVehicle)
    .filter((v): v is FleetVehicle => v !== null);
}
