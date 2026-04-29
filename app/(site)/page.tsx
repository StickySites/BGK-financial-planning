import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { fallbackTestimonials, getResources, getServices, getSiteSettings } from "@/lib/content";
import { mapSeoToMetadata } from "@/lib/seo";
import { bgkBrandImage, serviceImageBySlug } from "@/lib/service-media";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return mapSeoToMetadata(settings.seo, "/");
}

export default async function HomePage() {
  const [settings, services, resources] = await Promise.all([
    getSiteSettings(),
    getServices(),
    getResources()
  ]);

  return (
    <>
      <section className="w-full">
        <div className="flex min-h-[88vh] flex-col">
          <div className="flex min-h-[74vh] flex-1 items-center bg-white">
            <Container>
              <div className="hero-panel">
            <div>
              <Badge variant="secondary" className="mb-3">Independent Financial Planning</Badge>
              <h1 className="mb-4 font-heading text-4xl font-semibold leading-tight md:text-6xl">
                {settings.tagline || "Don't take any chances with your finances."}
              </h1>
              <p className="mb-6 max-w-2xl text-base text-muted-foreground md:text-lg">
                {settings.heroIntro ||
                  "At BGK Financial Planning, we help individuals and families make informed financial decisions with practical, long-term advice across investments, retirement, protection, and mortgage planning."}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild><Link href="/services">Explore Services</Link></Button>
                <Button asChild variant="secondary"><Link href="/contact">Speak to BGK</Link></Button>
              </div>
            </div>
            <div className="hero-placeholder relative h-[250px] overflow-hidden md:h-full">
              <Image src={bgkBrandImage} alt="BGK logo" fill sizes="(min-width: 768px) 40vw, 100vw" className="object-contain p-6" />
            </div>
              </div>
            </Container>
          </div>
          <div className="flex min-h-[14vh] items-center bg-primary py-4">
            <Container>
              <div className="kpi-band m-0 bg-transparent p-0">
                <article>
                  <h3 className="kpi-title">Personalised</h3>
                  <p className="kpi-text">Advice tailored to your goals, timeline, and circumstances.</p>
                </article>
                <article>
                  <h3 className="kpi-title">Practical</h3>
                  <p className="kpi-text">Clear recommendations explained in plain English.</p>
                </article>
                <article>
                  <h3 className="kpi-title">Long-term</h3>
                  <p className="kpi-text">Ongoing reviews to keep your planning aligned over time.</p>
                </article>
              </div>
            </Container>
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#eef5fc]">
        <Container>
          <h2 className="section-title">Our Services</h2>
          <p className="section-intro">{settings.servicesIntro}</p>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <Card key={service.slug} className="service-card-variant overflow-hidden">
                <div className="relative h-32 bg-white">
                  <Image
                    src={serviceImageBySlug[service.slug] || bgkBrandImage}
                    alt={`${service.title} icon`}
                    fill
                    sizes="(min-width: 1280px) 22vw, (min-width: 768px) 45vw, 100vw"
                    className="object-contain p-4"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">{service.summary || "Service details coming soon."}</p>
                  <Link className="inline-flex items-center gap-1 text-sm font-semibold text-[#00509E] hover:underline" href={`/services/${service.slug}`}>
                    View service <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container>
          <div className="accent-section">
            <h2 className="section-title">{settings.trustHeading}</h2>
            <p className="section-intro">{settings.trustIntro}</p>
            <div className="grid gap-5 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Trusted guidance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>{settings.trustPointOne}</p>
                  <Separator />
                  <p>{settings.trustPointTwo}</p>
                  <Separator />
                  <p>{settings.trustPointThree}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>How we work</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We start with your priorities, build a clear plan, and provide regular reviews so decisions remain aligned to your life and goals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container>
          <h2 className="section-title">Client feedback</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {fallbackTestimonials.map((item) => (
              <Card key={item.name}>
                <CardContent className="pt-6">
                  <p className="mb-3 text-base text-foreground">&quot;{item.quote}&quot;</p>
                  <p className="text-sm text-muted-foreground">{item.name} - {item.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell bg-[#f7fbff]">
        <Container>
          <h2 className="section-title">Latest resources</h2>
          <p className="section-intro">Practical insights to support better financial decisions throughout the year.</p>
          <div className="grid gap-5 md:grid-cols-3">
            {resources.slice(0, 3).map((resource) => (
              <Card key={resource._id}>
                <CardHeader>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{resource.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-4">
            <Button asChild variant="link" className="px-0">
              <Link href="/resources">Browse all resources</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
