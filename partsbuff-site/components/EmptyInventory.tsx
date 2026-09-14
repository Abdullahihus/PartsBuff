import Link from "next/link";

export default function EmptyInventory() {
  return <div className="center-cta">
    <h2>Inventory is coming soon</h2>
    <p>We are getting our inventory ready. Tell us which vehicle or part you need.</p>
    <Link href="/contact" className="button">Request a part</Link>
  </div>;
}
