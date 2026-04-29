import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { getPageContent, getPageSection, getResourceListSettings, getResources } from "@/lib/content";
import { mapSeoToMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const [page, settings] = await Promise.all([getPageContent("resources"), getResourceListSettings()]);
  return mapSeoToMetadata(page.seo || settings.seo, "/resources");
}

export default async function ResourcesPage() {
  const [page, resourceSettings, resources] = await Promise.all([getPageContent("resources"), getResourceListSettings(), getResources()]);
  const heroSection = getPageSection(page, "hero");
  const whySection = getPageSection(page, "why");

  return (
    <>
      <section className="section-shell bg-[#f7fbff]">
        <Container>
          <Badge variant="secondary" className="mb-3">{heroSection?.badge || "Insights"}</Badge>
          <h1 className="section-title">{heroSection?.heading || resourceSettings.heading}</h1>
          <p className="section-intro">{heroSection?.intro || resourceSettings.intro}</p>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {resources.map((resource) => (
              <Card key={resource._id} className="service-card-variant">
                <CardHeader>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">{resource.excerpt}</p>
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

      <section className="section-shell">
        <Container>
          <div className="accent-section">
            <h2 className="section-title">{whySection?.heading || "Why these resources matter"}</h2>
            <p className="section-intro">
              {whySection?.intro ||
                "We publish concise, practical content to help you navigate common financial planning decisions with greater confidence."}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
