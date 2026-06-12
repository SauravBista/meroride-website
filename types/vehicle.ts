/** Raw vehicle shape from booking app API (fields may vary). */
export type VehicleApiRecord = {
  id?: string | number;
  _id?: string | number;
  name?: string;
  title?: string;
  model?: string;
  image?: string;
  imageUrl?: string;
  image_url?: string;
  photoUrl?: string;
  photo_url?: string;
  photo?: string;
  thumbnail?: string;
  pricePerDay?: number;
  price_per_day?: number;
  dailyRate?: number;
  daily_rate?: number;
  price?: number;
  rate?: number;
  description?: string;
  shortDescription?: string;
  short_description?: string;
  status?: string;
  availability?: string;
  imageUrl2?: string;
  image_url_2?: string;
};

export type FleetVehicle = {
  id: string;
  name: string;
  image: string | null;
  imageUrl2: string | null;
  description: string;
};
