import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { getServiceBySlug, getServices } from "@/lib/content";
import { mapSeoToMetadata } from "@/lib/seo";

type ServiceDetailPageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return mapSeoToMetadata(undefined, `/services/${slug}`);
  return mapSeoToMetadata(service.seo, `/services/${slug}`);
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <section className="section-block">
      <Container>
        <h1 className="section-title">{service.title}</h1>
        <p className="section-intro">{service.summary || "Detailed service information will be added soon."}</p>

        <article className="card">
          <h2>How we help</h2>
          <p className="muted">
            We provide tailored guidance and clear recommendations based on your current position, goals, and comfort with risk.
          </p>
        </article>
      </Container>
    </section>
  );
}
