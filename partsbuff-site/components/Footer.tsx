import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <div className="brand footer-brand"><span className="brand-mark">PB</span><span>PartsBuff</span></div>
          <p>Quality used auto parts, vehicle part-outs, and straightforward service for Colorado drivers.</p>
        </div>
        <div>
          <h4>Shop</h4>
          <Link href="/inventory">Vehicles</Link>
          <Link href="/parts">Used Parts</Link>
          <Link href="/services">Services</Link>
        </div>
        <div>
          <h4>PartsBuff</h4>
          <Link href="/contact">Contact</Link>
          <Link href="/admin">Admin</Link>
          <span>Denver Metro, Colorado</span>
        </div>
      </div>
      <div className="shell footer-bottom">© {new Date().getFullYear()} PartsBuff. All rights reserved.</div>
    </footer>
  );
}
