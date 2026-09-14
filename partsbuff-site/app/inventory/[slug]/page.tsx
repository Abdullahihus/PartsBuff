import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import InquiryForm from "@/components/InquiryForm";
import { formatMileage, formatMoney } from "@/data/inventory";
import { getVehicle } from "@/lib/inventory";
export const dynamic = "force-dynamic";


export default async function VehicleDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vehicle = await getVehicle(slug);
  if (!vehicle) notFound();
  return <section className="section shell"><Link href="/inventory" className="text-link">← Back to inventory</Link><div className="detail-grid"><div><div className="detail-image"><Image src={vehicle.image} alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`} width={1100} height={700}/></div><div className="detail-copy"><div className="eyebrow">{vehicle.status} · {vehicle.stock}</div><h1>{vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim}</h1><p>{vehicle.description}</p><div className="spec-grid"><div><span>Mileage</span><strong>{formatMileage(vehicle.mileage)}</strong></div><div><span>Engine</span><strong>{vehicle.engine}</strong></div><div><span>Transmission</span><strong>{vehicle.transmission}</strong></div><div><span>Drivetrain</span><strong>{vehicle.drivetrain}</strong></div><div><span>Color</span><strong>{vehicle.color}</strong></div><div><span>VIN</span><strong>{vehicle.vin}</strong></div></div><h3>Highlights</h3><ul className="check-list">{vehicle.highlights.map(h => <li key={h}>✓ {h}</li>)}</ul></div></div><aside className="side-card"><div className="eyebrow">ASK PARTSBUFF</div><h2>{vehicle.price ? formatMoney(vehicle.price) : "Need a part?"}</h2><p>{vehicle.status === "Part Out" ? "Tell us which component you need from this vehicle." : "Ask a question or schedule a time to see this vehicle."}</p><InquiryForm subject={`${vehicle.year} ${vehicle.make} ${vehicle.model} - ${vehicle.stock}`} /></aside></div></section>;
}
