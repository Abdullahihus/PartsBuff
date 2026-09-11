import Link from "next/link";

const links = [
  ["Inventory", "/inventory"],
  ["Used Parts", "/parts"],
  ["Services", "/services"],
  ["Contact", "/contact"],
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <Link href="/" className="brand" aria-label="PartsBuff home">
          <span className="brand-mark">PB</span>
          <span>PartsBuff</span>
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>
        <Link href="/contact" className="button button-small">Find a Part</Link>
      </div>
    </header>
  );
}
