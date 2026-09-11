import VehicleCard from "@/components/VehicleCard";
import { vehicles } from "@/data/inventory";

export default function InventoryPage() {
  return <section className="section shell"><div className="page-hero"><div className="eyebrow">PARTSBUFF INVENTORY</div><h1>Vehicles & current part-outs</h1><p>Browse vehicles for sale and vehicles currently being dismantled for used parts.</p></div><div className="filter-bar"><span>All inventory</span><span>For sale</span><span>Part outs</span><span>{vehicles.length} listings</span></div><div className="card-grid">{vehicles.map(v => <VehicleCard key={v.id} vehicle={v} />)}</div></section>;
}
