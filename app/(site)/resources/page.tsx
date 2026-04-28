import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { getResourceListSettings, getResources } from "@/lib/content";
import { mapSeoToMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getResourceListSettings();
  return mapSeoToMetadata(settings.seo, "/resources");
}

export default async function ResourcesPage() {
  const [resources, settings] = await Promise.all([getResources(), getResourceListSettings()]);

  return (
    <section className="section-shell">
      <Container>
        <h1 className="section-title">{settings.heading || "Resources"}</h1>
        <p className="section-intro">{settings.intro}</p>

        <div className="grid gap-5 md:grid-cols-2">
          {resources.map((resource) => (
            <Card key={resource._id}>
              <CardHeader>
                <CardTitle>{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3 text-sm text-muted-foreground">{resource.excerpt || "Resource summary coming soon."}</p>
                {resource.publishedAt ? (
                  <Badge variant="secondary" className="normal-case tracking-normal text-[#3E6992]">
                    {new Date(resource.publishedAt).toLocaleDateString("en-GB")}
                  </Badge>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
