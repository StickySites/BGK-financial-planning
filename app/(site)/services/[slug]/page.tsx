import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { getServiceBySlug, getServices } from "@/lib/content";
import { mapSeoToMetadata } from "@/lib/seo";
import { bgkBrandImage, serviceImageBySlug } from "@/lib/service-media";

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return mapSeoToMetadata(undefined, "/services");
  }

  return mapSeoToMetadata(service.seo, `/services/${service.slug}`);
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="section-shell">
        <Container>
          <Badge variant="secondary" className="mb-3">Service</Badge>
          <h1 className="section-title">{service.title}</h1>
          <p className="section-intro">{service.summary}</p>

          <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
            <Card>
              <CardContent className="pt-6">
                <div className="prose prose-slate max-w-none text-sm leading-relaxed text-muted-foreground">
                  {service.body.map((block) => (
                    <p key={block._key}>{block.children.map((child) => child.text).join("")}</p>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-52 bg-white">
                <Image
                  src={serviceImageBySlug[service.slug] || bgkBrandImage}
                  alt={service.title}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-contain p-6"
                />
              </div>
              <CardHeader>
                <CardTitle>Discuss this service</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>Book a conversation to explore whether this area of advice is right for you.</p>
                <Separator />
                <Button asChild>
                  <Link href="/contact">Contact BGK</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      <section className="section-shell bg-[#eef5fc]">
        <Container>
          <div className="accent-section bg-white">
            <h2 className="section-title">Related support</h2>
            <p className="section-intro">
              We provide joined-up planning across investments, retirement, mortgage, and protection so recommendations remain aligned with your wider goals.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
