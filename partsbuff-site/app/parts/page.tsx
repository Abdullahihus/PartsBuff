import Link from "next/link";
import { formatMoney } from "@/data/inventory";
import { getParts } from "@/lib/inventory";
import EmptyInventory from "@/components/EmptyInventory";
export const dynamic = "force-dynamic";
export default async function PartsPage(){const parts = await getParts(); return <section className="section shell"><div className="page-hero"><div className="eyebrow">USED PARTS</div><h1>Find quality used auto parts</h1><p>Browse available parts or send us a request for what you need.</p></div>{parts.length === 0 && <EmptyInventory />}<div className="table-card"><div className="parts-table parts-head"><span>Part</span><span>Vehicle</span><span>Condition</span><span>Price</span></div>{parts.map(p=><div className="parts-table" key={p.id}><span><strong>{p.name}</strong><small>{p.category} · {p.stock}</small></span><span>{p.vehicle}</span><span>{p.condition}</span><span><strong>{p.price === null ? "Ask for price" : formatMoney(p.price)}</strong></span></div>)}</div><div className="center-cta"><h2>Don’t see your part?</h2><p>Send us your vehicle information and what you need.</p><Link href="/contact" className="button">Request a part</Link></div></section>}
