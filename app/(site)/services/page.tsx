import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { getPageContent, getPageSection, getServices, getSiteSettings } from "@/lib/content";
import { mapSeoToMetadata } from "@/lib/seo";
import { getServiceImageSrc, isFallbackServiceImage } from "@/lib/service-media";

export async function generateMetadata(): Promise<Metadata> {
  const [page, settings] = await Promise.all([getPageContent("services"), getSiteSettings()]);
  return mapSeoToMetadata(page.seo || settings.seo, "/services");
}

export default async function ServicesPage() {
  const [page, services] = await Promise.all([getPageContent("services"), getServices()]);
  const heroSection = getPageSection(page, "hero");
  const helpSection = getPageSection(page, "help");
  const sectionServices =
    heroSection?.services
      ?.map((item) => (item.service ? { service: item.service, label: item.label } : null))
      .filter((item): item is NonNullable<typeof item> => Boolean(item)) || [];
  const visibleServices = sectionServices.length > 0 ? sectionServices : services.map((service) => ({ service }));

  return (
    <>
      <section className="section-shell">
        <Container>
          <Badge variant="secondary" className="mb-3">{heroSection?.badge || "Advice areas"}</Badge>
          <h1 className="section-title">{heroSection?.heading || "Services"}</h1>
          <p className="section-intro">
            {heroSection?.intro || "Explore our core planning services. Each area is tailored to your circumstances and long-term goals."}
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            {visibleServices.map(({ service, label }) => (
              <Card key={service.slug} className="service-card-variant overflow-hidden">
                <div className="relative h-40 bg-white">
                  <Image
                    src={getServiceImageSrc(service)}
                    alt={`${service.title} image`}
                    fill
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className={`object-contain p-4 ${isFallbackServiceImage(service) ? "opacity-70" : ""}`}
                  />
                </div>
                <CardHeader>
                  <CardTitle>{label || service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">{service.summary}</p>
                  <Link className="inline-flex items-center gap-1 text-sm font-semibold text-[#00509E] hover:underline" href={`/services/${service.slug}`}>
                    View details <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell bg-[#eef5fc]">
        <Container>
          <div className="accent-section bg-white">
            <h2 className="section-title">{helpSection?.heading || "How we can help"}</h2>
            <p className="section-intro">
              {helpSection?.intro ||
                "Whether you are planning retirement, protecting your family, or organising long-term investments, we provide practical guidance that is easy to understand and act on."}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
