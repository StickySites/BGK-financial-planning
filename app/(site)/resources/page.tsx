import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { getPageContent, getPageSection, getResourceSettings, getResources } from "@/lib/content";
import { localMedia } from "@/lib/content/local/media";
import { mapSeoToMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const [page, settings] = await Promise.all([getPageContent("resources"), getResourceSettings()]);
  return mapSeoToMetadata(page.seo || settings.seo, "/resources");
}

export default async function ResourcesPage() {
  const [page, resourceSettings, resources] = await Promise.all([
    getPageContent("resources"),
    getResourceSettings(),
    getResources()
  ]);
  const heroSection = getPageSection(page, "hero");
  const whySection = getPageSection(page, "why");

  const heroImageSrc = heroSection?.imageUrl || localMedia.resources.hero;
  const heroImageAlt = heroSection?.imageAlt || "Signing financial planning documents";

  return (
    <>
      <section className="page-hero-section section-shell--surface">
        <div className="service-hero-band">
          <div className="service-hero-band-image">
            <Image
              src={heroImageSrc}
              alt={heroImageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
        <Container className="page-hero-content">
          <div className="section-heading-block">
            <h1 className="section-title">{heroSection?.heading || resourceSettings.heading}</h1>
            <p className="section-intro">{heroSection?.intro || resourceSettings.intro}</p>
          </div>
        </Container>
      </section>

      <section className="viewport-section section-shell--surface section-border">
        <Container className="w-full">
          <div className="mx-auto grid w-full max-w-6xl gap-5 md:grid-cols-2 xl:grid-cols-3">
            {resources.map((resource) => (
              <Card key={resource._id} className="service-card-variant">
                <CardHeader>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-body mb-4 text-sm">{resource.excerpt}</p>
                  {resource.externalUrl ? (
                    <Button asChild variant="link" className="h-auto px-0 text-[#00509E]">
                      <Link href={resource.externalUrl} target="_blank" rel="noreferrer">
                        Read resource <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  ) : (
                    <p className="text-xs text-muted-foreground">Full article coming soon.</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="viewport-section section-shell--alt section-border">
        <Container className="w-full">
          <div className="section-heading-block">
            <h2 className="section-title">{whySection?.heading || "Why these resources matter"}</h2>
            <p className="section-intro">
              {whySection?.intro ||
                "We publish concise, practical content to help you navigate common financial planning decisions with greater confidence."}
            </p>
          </div>
        </Container>
      </section>

      <section className="viewport-section">
        <Container className="w-full">
          <div className="section-cta mx-auto max-w-3xl text-center">
            <h2 className="section-cta-title">Need guidance on a topic covered here?</h2>
            <p className="mx-auto mb-6 max-w-prose text-blue-100">
              We can help translate these ideas into practical recommendations based on your circumstances.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-blue-50"
            >
              Speak to BGK
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
