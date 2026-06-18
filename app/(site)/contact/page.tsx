import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { getPageContent, getPageSection, getSiteSettings } from "@/lib/content";
import { localMedia } from "@/lib/content/local/media";
import { mapSeoToMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const [page, settings] = await Promise.all([getPageContent("contact"), getSiteSettings()]);
  return mapSeoToMetadata(page.seo || settings.seo, "/contact");
}

export default async function ContactPage() {
  const [page, settings] = await Promise.all([getPageContent("contact"), getSiteSettings()]);
  const heroSection = getPageSection(page, "hero");
  const workSection = getPageSection(page, "work");

  const heroImageSrc = heroSection?.imageUrl || localMedia.contact.hero;
  const heroImageAlt = heroSection?.imageAlt || "Professional financial advice meeting";

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
            <h1 className="section-title">{heroSection?.heading || "Contact"}</h1>
            <p className="section-intro">
              {heroSection?.intro ||
                "For general enquiries, please use the details below. We aim to respond as soon as possible."}
            </p>
          </div>
        </Container>
      </section>

      <section className="viewport-section section-shell--alt section-border">
        <Container className="w-full">
          <div className="mx-auto grid w-full max-w-5xl gap-5 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Contact details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>
                  <span className="font-semibold text-primary">Email:</span>{" "}
                  <a href={`mailto:${settings.email}`} className="text-[#00509E] hover:underline">
                    {settings.email}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-primary">Phone:</span>{" "}
                  <a href={`tel:${settings.phone?.replace(/\s/g, "")}`} className="text-[#00509E] hover:underline">
                    {settings.phone}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-primary">Location:</span> {settings.address}
                </p>
                <p className="text-body text-sm">
                  We are available for meetings in person and by video call. A dedicated advisor will review your
                  enquiry and come back with a recommended next step.
                </p>
                <Separator />
                <p className="text-body text-sm">General enquiries are typically handled during standard UK business hours.</p>
                <p className="text-body text-sm">Typical response time: within 24 business hours.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{workSection?.heading || "Working with BGK"}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body mb-3 text-sm">
                  {workSection?.intro ||
                    "BGK Financial Planning focuses on clear, long-term support to help clients make informed decisions across key financial areas."}
                </p>
                <p className="text-body text-sm">
                  We currently provide support through direct consultation and ongoing review.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      <section className="viewport-section section-shell--surface section-border">
        <Container className="w-full">
          <div className="mx-auto grid w-full max-w-5xl gap-5 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Initial conversation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body text-sm">
                  A short conversation to understand your goals and current position.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Next steps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body text-sm">
                  Clear guidance on the most suitable path forward for your circumstances.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Ongoing support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body text-sm">Periodic reviews to keep your strategy aligned over time.</p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      <section className="viewport-section">
        <Container className="w-full">
          <div className="section-cta mx-auto max-w-3xl text-center">
            <h2 className="section-cta-title">Ready to start the conversation?</h2>
            <p className="mx-auto max-w-prose text-blue-100">
              Send us your enquiry and we will guide you through the most suitable next step.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
