export type VehicleStatus = "For Sale" | "Part Out" | "Sold";

export type Vehicle = {
  id: number;
  slug: string;
  year: number;
  make: string;
  model: string;
  trim: string;
  mileage: number;
  price: number | null;
  status: VehicleStatus;
  stock: string;
  vin: string;
  engine: string;
  transmission: string;
  drivetrain: string;
  color: string;
  location: string;
  image: string;
  description: string;
  highlights: string[];
};

export type Part = {
  id: number;
  name: string;
  category: string;
  vehicle: string;
  condition: string;
  price: number;
  stock: string;
};
