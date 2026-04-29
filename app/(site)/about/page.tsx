import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { getPageContent, getPageSection, getSiteSettings } from "@/lib/content";
import { mapSeoToMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const [page, settings] = await Promise.all([getPageContent("about"), getSiteSettings()]);
  return mapSeoToMetadata(page.seo || settings.seo, "/about");
}

export default async function AboutPage() {
  const [page, settings] = await Promise.all([getPageContent("about"), getSiteSettings()]);
  const heroSection = getPageSection(page, "hero");
  const processSection = getPageSection(page, "process");
  const commitmentSection = getPageSection(page, "commitment");

  return (
    <>
      <section className="section-shell bg-[#f7fbff]">
        <Container>
          <Badge variant="secondary" className="mb-3">{heroSection?.badge || "About us"}</Badge>
          <h1 className="section-title">{heroSection?.heading || "About BGK Financial Planning"}</h1>
          <p className="section-intro">
            {heroSection?.intro ||
              settings.aboutIntro ||
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
        </Container>
      </section>

      <section className="section-shell">
        <Container>
          <div className="accent-section">
            <h2 className="section-title">{processSection?.heading || "Our planning process"}</h2>
            <p className="section-intro">{processSection?.intro || "A simple process designed to keep advice clear and actionable."}</p>

            <div className="grid gap-5 md:grid-cols-3">
              <Card>
                <CardHeader><CardTitle>1. Discovery</CardTitle></CardHeader>
                <CardContent><p className="text-sm text-muted-foreground">We understand your goals, concerns, and priorities in detail.</p></CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>2. Strategy</CardTitle></CardHeader>
                <CardContent><p className="text-sm text-muted-foreground">We build practical recommendations aligned to your circumstances.</p></CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>3. Ongoing review</CardTitle></CardHeader>
                <CardContent><p className="text-sm text-muted-foreground">We review and adjust your plan as your life and finances evolve.</p></CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell bg-[#eef5fc]">
        <Container>
          <Card>
            <CardHeader>
              <CardTitle>{commitmentSection?.heading || "Our commitment"}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {commitmentSection?.intro ||
                  "We focus on building lasting relationships through professionalism, clarity, and practical support that helps clients make informed decisions over the long term."}
              </p>
              <Separator />
              <p className="text-sm text-muted-foreground">
                {commitmentSection?.body ||
                  "Our advice is designed to reduce complexity and help you move forward with greater confidence."}
              </p>
            </CardContent>
          </Card>
        </Container>
      </section>
    </>
  );
}
