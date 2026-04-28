import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getSiteSettings } from "@/lib/content";
import { mapSeoToMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return mapSeoToMetadata(settings.seo, "/contact");
}

export default async function ContactPage() {
  const settings = await getSiteSettings();

  return (
    <section className="section-shell">
      <Container>
        <h1 className="section-title">Contact</h1>
        <p className="section-intro">{settings.contactIntro}</p>

        <div className="grid gap-5 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Contact details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p><span className="font-semibold text-primary">Email:</span> {settings.email}</p>
              <p><span className="font-semibold text-primary">Phone:</span> {settings.phone}</p>
              <p><span className="font-semibold text-primary">Location:</span> {settings.address}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Working with BGK</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-sm text-muted-foreground">{settings.contactPanelBody}</p>
              <p className="text-sm text-muted-foreground">We currently provide support through direct consultation and ongoing review.</p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
