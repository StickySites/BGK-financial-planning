import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageFaqSection } from "@/components/faq/page-faq-section";
import { ProcessSteps } from "@/components/process/process-steps";
import { siteProcessSection } from "@/components/process/site-process";
import { Card, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { getPageContent, getPageSection, getServices, getSiteSettings, parseFaqs } from "@/lib/content";
import { localMedia } from "@/lib/content/local/media";
import { mapSeoToMetadata } from "@/lib/seo";
import { getServiceImageSrc, isFallbackServiceImage } from "@/lib/service-media";
import { cn } from "@/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  const [page, settings] = await Promise.all([getPageContent("services"), getSiteSettings()]);
  return mapSeoToMetadata(page.seo || settings.seo, "/services");
}

function ServiceRowCard({
  service,
  label,
  index
}: {
  service: Awaited<ReturnType<typeof getServices>>[number];
  label?: string;
  index: number;
}) {
  const imageOnRight = index % 2 === 1;

  return (
    <Card className="service-card-variant w-full min-w-0 overflow-hidden">
      <div
        className={cn(
          "grid w-full min-w-0 gap-0",
          imageOnRight ? "md:grid-cols-[1fr_minmax(240px,320px)]" : "md:grid-cols-[minmax(240px,320px)_1fr]"
        )}
      >
        <div
          className={cn(
            "relative aspect-[4/3] w-full overflow-hidden bg-white md:aspect-auto md:h-full md:min-h-56",
            imageOnRight && "md:order-2"
          )}
        >
          <Image
            src={getServiceImageSrc(service)}
            alt={`${service.title} image`}
            fill
            sizes="(min-width: 768px) 320px, 100vw"
            className={
              isFallbackServiceImage(service)
                ? "object-contain px-2 py-3 opacity-70"
                : "object-cover object-center"
            }
          />
        </div>
        <div
          className={cn(
            "flex min-w-0 flex-col justify-center gap-3 p-5 sm:p-7 md:p-10",
            imageOnRight && "md:order-1"
          )}
        >
          <CardTitle className="text-xl">{label || service.title}</CardTitle>
          <p className="text-body text-sm">{service.summary}</p>
          <Link
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#00509E] hover:underline"
            href={`/services/${service.slug}`}
          >
            View details <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Card>
  );
}

export default async function ServicesPage() {
  const [page, services] = await Promise.all([getPageContent("services"), getServices()]);
  const heroSection = getPageSection(page, "hero");
  const faqSection = getPageSection(page, "faq");
  const faqs = parseFaqs(faqSection?.faqItems || []);
  const sectionServices =
    heroSection?.services
      ?.map((item) => (item.service ? { service: item.service, label: item.label } : null))
      .filter((item): item is NonNullable<typeof item> => Boolean(item)) || [];
  const visibleServices: Array<{ service: (typeof services)[number]; label?: string }> =
    sectionServices.length > 0 ? sectionServices : services.map((service) => ({ service }));
  const [servicesRowOne, servicesRowTwo] = [
    visibleServices.slice(0, 2),
    visibleServices.slice(2, 4)
  ];

  const heroImageSrc = heroSection?.imageUrl || localMedia.services.indexHero;
  const heroImageAlt = heroSection?.imageAlt || "Financial planning services";

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
            <h1 className="section-title">{heroSection?.heading || "Services"}</h1>
            <p className="section-intro">
              {heroSection?.intro ||
                "Explore our core planning services. Each area is tailored to your circumstances and long-term goals."}
            </p>
          </div>
        </Container>
      </section>

      <section className="viewport-section section-shell--surface section-border">
        <Container className="w-full">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
            {servicesRowOne.map(({ service, label }, index) => (
              <ServiceRowCard key={service.slug} service={service} label={label} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {servicesRowTwo.length > 0 ? (
        <section
          className="viewport-section-continuation section-shell--surface section-border"
          aria-label="More services"
        >
          <Container className="w-full">
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
              {servicesRowTwo.map(({ service, label }, index) => (
                <ServiceRowCard key={service.slug} service={service} label={label} index={index + 2} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="viewport-section section-shell--alt section-border">
        <Container className="w-full">
          <div className="section-heading-block">
            <h2 className="section-title">{siteProcessSection.title}</h2>
            <p className="section-intro">{siteProcessSection.intro}</p>
          </div>
          <div className="mx-auto w-full max-w-6xl">
            <ProcessSteps steps={siteProcessSection.steps} />
          </div>
        </Container>
      </section>

      <PageFaqSection
        heading={faqSection?.heading}
        intro={
          faqSection?.intro || "Practical answers to questions clients often ask before booking a consultation."
        }
        faqs={faqs}
      />

      <section className="viewport-section">
        <Container className="w-full">
          <div className="section-cta mx-auto max-w-3xl text-center">
            <h2 className="section-cta-title">Not sure which service fits best?</h2>
            <p className="mx-auto mb-6 max-w-prose text-blue-100">
              We can help you identify the most relevant area and outline a clear first step.
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
