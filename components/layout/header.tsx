import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
      <Container>
        <nav aria-label="Main navigation" style={{ alignItems: "center", display: "flex", gap: "1rem", justifyContent: "space-between", minHeight: "72px" }}>
          <Link href="/" style={{ fontSize: "1.05rem", fontWeight: 700 }}>{siteConfig.name}</Link>
          <ul style={{ display: "flex", gap: "1rem", listStyle: "none", margin: 0, padding: 0 }}>
            <li><Link href="/">Home</Link></li>
            <li>
              <details>
                <summary style={{ cursor: "pointer" }}>Services</summary>
                <ul style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "8px", listStyle: "none", margin: "0.5rem 0 0", padding: "0.5rem" }}>
                  {siteConfig.services.map((service) => (
                    <li key={service.slug} style={{ margin: "0.3rem 0" }}>
                      <Link href={`/services/${service.slug}`}>{service.title}</Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/resources">Resources</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
