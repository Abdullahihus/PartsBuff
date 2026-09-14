import Link from "next/link";
import VehicleCard from "@/components/VehicleCard";
import { getVehicles } from "@/lib/inventory";
import EmptyInventory from "@/components/EmptyInventory";
export const dynamic = "force-dynamic";

export default async function Home() {
  const vehicles = await getVehicles();
  const featured = vehicles.slice(0, 3);
  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="pill">Colorado auto parts, made simpler</div>
            <h1>Find the right part.<br/><span>Get back on the road.</span></h1>
            <p>Search quality used parts, browse current part-out vehicles, or ask PartsBuff to help locate exactly what your car needs.</p>
            <div className="hero-actions">
              <Link href="/parts" className="button">Search used parts</Link>
              <Link href="/inventory" className="button button-ghost">Browse vehicles</Link>
            </div>
            <div className="trust-row">
              <span>✓ Tested used parts</span><span>✓ Local Colorado inventory</span><span>✓ Straightforward help</span>
            </div>
          </div>
          <div className="hero-panel">
            <div className="search-card">
              <div className="eyebrow">PART FINDER</div>
              <h2>What are you working on?</h2>
              <p>Tell us your vehicle year, make, model, and the part you need.</p><Link href="/contact" className="button button-wide">Request a part</Link>
              <p className="microcopy">Send a request and we will help check availability.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading split-heading">
          <div><div className="eyebrow">INVENTORY</div><h2>What’s available now</h2></div>
          <Link href="/inventory" className="text-link">View all inventory →</Link>
        </div>
        {featured.length === 0 && <EmptyInventory />}<div className="card-grid">{featured.map(vehicle => <VehicleCard key={vehicle.id} vehicle={vehicle} />)}</div>
      </section>

      <section className="section soft-section">
        <div className="shell">
          <div className="section-heading centered"><div className="eyebrow">HOW IT WORKS</div><h2>Built around the part you actually need</h2><p>No giant catalog maze. Start with your vehicle and we’ll narrow it down.</p></div>
          <div className="steps-grid">
            <div className="step-card"><span>01</span><h3>Tell us the vehicle</h3><p>Year, make, model, trim, VIN, or even a photo if you are not sure.</p></div>
            <div className="step-card"><span>02</span><h3>We match the part</h3><p>Check current stock, part-out vehicles, compatibility, and condition.</p></div>
            <div className="step-card"><span>03</span><h3>Pick up or arrange delivery</h3><p>Confirm the price and get clear next steps from PartsBuff.</p></div>
          </div>
        </div>
      </section>

      <section className="section shell two-col-callout">
        <div>
          <div className="eyebrow">CURRENT PART-OUTS</div>
          <h2>A whole vehicle can be your parts catalog.</h2>
          <p>Browse vehicles currently being dismantled and ask about engines, doors, lights, interior pieces, suspension, electronics, and more.</p>
          <Link href="/inventory" className="button">See part-out vehicles</Link>
        </div>
        <div className="stats-card">
          <div><strong>1</strong><span>Place to search</span></div>
          <div><strong>3</strong><span>Ways to find a match</span></div>
          <div><strong>0</strong><span>Guesswork needed</span></div>
        </div>
      </section>
    </>
  );
}
