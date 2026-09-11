import Image from "next/image";
import Link from "next/link";
import type { Vehicle } from "@/lib/types";
import { formatMileage, formatMoney } from "@/data/inventory";

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <article className="vehicle-card">
      <Link href={`/inventory/${vehicle.slug}`} className="vehicle-image-wrap">
        <Image className="vehicle-image" src={vehicle.image} alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`} width={760} height={480} />
        <span className={`status-badge ${vehicle.status === "Part Out" ? "status-part" : ""}`}>{vehicle.status}</span>
      </Link>
      <div className="vehicle-card-body">
        <div className="eyebrow">Stock {vehicle.stock}</div>
        <h3><Link href={`/inventory/${vehicle.slug}`}>{vehicle.year} {vehicle.make} {vehicle.model}</Link></h3>
        <p className="vehicle-subtitle">{vehicle.trim} · {formatMileage(vehicle.mileage)} miles</p>
        <div className="vehicle-card-bottom">
          <strong>{vehicle.price ? formatMoney(vehicle.price) : "Parts available"}</strong>
          <Link href={`/inventory/${vehicle.slug}`} className="text-link">View details →</Link>
        </div>
      </div>
    </article>
  );
}
