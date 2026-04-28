import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { getServices, getSiteSettings } from "@/lib/content";
import { mapSeoToMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return mapSeoToMetadata(settings.seo, "/services");
}

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <section className="section-block">
      <Container>
        <h1 className="section-title">Services</h1>
        <p className="section-intro">Explore our core advisory areas and choose the service that best matches your needs.</p>

        <div className="grid grid-2">
          {services.map((service) => (
            <article className="card" key={service.slug}>
              <h2>{service.title}</h2>
              <p className="muted" style={{ marginBottom: "0.75rem" }}>{service.summary || "Service details coming soon."}</p>
              <Link href={`/services/${service.slug}`} className="pill-link">Read more</Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
