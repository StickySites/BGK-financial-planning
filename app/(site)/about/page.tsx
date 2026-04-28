import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getSiteSettings } from "@/lib/content";
import { mapSeoToMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return mapSeoToMetadata(settings.seo, "/about");
}

export default async function AboutPage() {
  const settings = await getSiteSettings();

  return (
    <section className="section-shell">
      <Container>
        <h1 className="section-title">About BGK Financial Planning</h1>
        <p className="section-intro">
          {settings.aboutIntro ||
            "BGK Financial Planning supports clients through each stage of their financial journey with clear, practical advice."}
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Our approach</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{settings.aboutApproach}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>What clients can expect</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{settings.aboutExpectations}</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-5">
          <CardHeader>
            <CardTitle>Our commitment</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              We focus on building lasting relationships through professionalism, clarity, and practical support that helps
              clients make informed decisions over the long term.
            </p>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}
