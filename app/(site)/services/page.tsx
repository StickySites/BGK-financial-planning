import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getServices, getSiteSettings } from "@/lib/content";
import { mapSeoToMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return mapSeoToMetadata(settings.seo, "/services");
}

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <section className="section-shell">
      <Container>
        <h1 className="section-title">Financial planning services</h1>
        <p className="section-intro">
          Our services are designed to provide practical guidance, clear options, and long-term confidence as your
          financial needs evolve.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.slug}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">{service.summary || "Service details coming soon."}</p>
                <Link href={`/services/${service.slug}`} className="text-sm font-semibold text-[#00509E] hover:underline">
                  Read full overview
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
