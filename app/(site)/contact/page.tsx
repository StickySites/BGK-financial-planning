import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { getSiteSettings } from "@/lib/content";
import { mapSeoToMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return mapSeoToMetadata(settings.seo, "/contact");
}

export default async function ContactPage() {
  const settings = await getSiteSettings();

  return (
    <>
      <section className="section-shell">
        <Container>
          <Badge variant="secondary" className="mb-3">Get in touch</Badge>
          <h1 className="section-title">Contact</h1>
          <p className="section-intro">{settings.contactIntro}</p>

          <div className="grid gap-5 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Contact details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p><span className="font-semibold text-primary">Email:</span> {settings.email}</p>
                <p><span className="font-semibold text-primary">Phone:</span> {settings.phone}</p>
                <p><span className="font-semibold text-primary">Location:</span> {settings.address}</p>
                <Separator />
                <p className="text-muted-foreground">General enquiries are typically handled during standard UK business hours.</p>
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

      <section className="section-shell bg-[#eef5fc]">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            <Card>
              <CardHeader><CardTitle>Initial conversation</CardTitle></CardHeader>
              <CardContent><p className="text-sm text-muted-foreground">A short conversation to understand your goals and current position.</p></CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Next steps</CardTitle></CardHeader>
              <CardContent><p className="text-sm text-muted-foreground">Clear guidance on the most suitable path forward for your circumstances.</p></CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Ongoing support</CardTitle></CardHeader>
              <CardContent><p className="text-sm text-muted-foreground">Periodic reviews to keep your strategy aligned over time.</p></CardContent>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
