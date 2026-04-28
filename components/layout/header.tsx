import Link from "next/link";
import { Container } from "@/components/ui/container";
import { getServices } from "@/lib/content";

export async function Header() {
  const services = await getServices();

  return (
    <header className="site-header">
      <Container>
        <nav aria-label="Main navigation" className="site-nav">
          <Link href="/" className="brand-title">BGK Financial Planning</Link>

          <ul className="nav-list">
            <li><Link href="/">Home</Link></li>
            <li className="service-menu" style={{ position: "relative" }}>
              <details>
                <summary>Services</summary>
                <ul className="service-dropdown">
                  <li><Link href="/services">All Services</Link></li>
                  {services.map((service) => (
                    <li key={service.slug}>
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
