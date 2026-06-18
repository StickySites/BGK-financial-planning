import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { ProcessSteps } from "@/components/process/process-steps";
import { PageFaqSection } from "@/components/faq/page-faq-section";
import { ServicePartnerCard } from "@/components/services/service-partner-card";
import { ServiceRiskWarning } from "@/components/services/service-risk-warning";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { getServiceBySlug, getServices, parseColonItems, parseFaqs } from "@/lib/content";
import { mapSeoToMetadata } from "@/lib/seo";
import {
  getServiceImageSrc,
  getServiceOverviewImageSrc,
  getServiceSecondaryImageSrc,
  isFallbackOverviewImage,
  isFallbackServiceImage
} from "@/lib/service-media";

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return mapSeoToMetadata(undefined, "/services");
  }

  return mapSeoToMetadata(service.seo, `/services/${service.slug}`);
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [service, allServices] = await Promise.all([getServiceBySlug(slug), getServices()]);

  if (!service) {
    notFound();
  }

  const relatedServices = allServices.filter((item) => item.slug !== service.slug);
  const highlights = service.highlights || [];
  const benefits = parseColonItems(service.benefitsItems || []);
  const timelineSteps = parseColonItems(
    service.timelineItems || [
      "Initial review: We understand your priorities and current position in detail.",
      "Recommendation: You receive clear options with practical next steps.",
      "Implementation: We support execution and help coordinate required actions.",
      "Ongoing review: Your plan is revisited as life events and markets change."
    ]
  );
  const faqs = parseFaqs(
    service.faqItems || [
      "How do I know this is the right service for me? We begin with an initial conversation to understand your priorities and confirm whether this area is the right fit.",
      "What happens after the first meeting? You receive clear recommendations and an agreed plan for next steps, with support through implementation.",
      "Can this service link with other areas of planning? Yes, we provide joined-up advice so this service remains aligned with your wider financial goals."
    ]
  );
  const audiencePoints = service.audienceItems || [
    "People who want structured, professional guidance tailored to their goals.",
    "Individuals and families making important financial decisions in the near term.",
    "Anyone looking for practical advice explained clearly and reviewed regularly."
  ];
  const includedItems = service.includedItems || [];
  const overviewImageSrc = getServiceOverviewImageSrc(service);
  const secondaryImageSrc = getServiceSecondaryImageSrc(service);
  const overviewImageAlt =
    service.overviewImageAlt || `${service.title} — supporting illustration`;
  const secondaryImageAlt =
    service.secondaryImageAlt || `${service.title} — additional context`;

  return (
    <>
      <section className="page-hero-section section-shell--surface">
        <div className="service-hero-band">
          <div className="service-hero-band-image">
            <Image
              src={getServiceImageSrc(service)}
              alt={`${service.title} hero`}
              fill
              priority
              sizes="100vw"
              className={
                isFallbackServiceImage(service)
                  ? "object-contain bg-[#f0f4f8] px-8 py-10 opacity-80"
                  : "object-cover object-center"
              }
            />
          </div>
        </div>

        <Container className="page-hero-content">
          <div className="section-heading-block">
            <h1 className="section-title">{service.title}</h1>
            <p className="section-intro">{service.summary}</p>
          </div>

          {highlights.length > 0 ? (
            <ul className="mb-6 flex max-w-full flex-wrap justify-center gap-x-4 gap-y-2 px-1 text-sm font-medium text-primary sm:gap-x-5 md:text-base">
              {highlights.map((item) => (
                <li key={item} className="flex min-w-0 max-w-full items-center gap-2 text-pretty">
                  <Check className="h-4 w-4 shrink-0 text-[#00509E]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          ) : null}

          <div className="flex flex-wrap justify-center gap-3">
            {service.partner ? (
              <>
                <Button asChild>
                  <a
                    href={service.ctaExternalHref || service.partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {service.ctaExternalLabel || `Visit ${service.partner.name}`}
                  </a>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/contact">Discuss your wider plan</Link>
                </Button>
              </>
            ) : (
              <>
                <Button asChild>
                  <Link href="/contact">Book a consultation</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/services">All services</Link>
                </Button>
              </>
            )}
          </div>
        </Container>
      </section>

      <section className="viewport-section section-shell--surface section-border">
        <Container className="w-full">
          <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(260px,0.9fr)] lg:items-start lg:gap-12">
            <div className="min-w-0">
              <h2 className="section-title">{service.overviewHeading || "Overview"}</h2>
              <div className="prose prose-slate text-body max-w-none text-base leading-relaxed">
                {Array.isArray(service.body) && service.body.length > 0 ? (
                  service.body.map((block, index) => (
                    <p key={block._key || `block-${index}`} className={index > 0 ? "mt-4" : undefined}>
                      {(block.children || []).map((child) => child.text || "").join("")}
                    </p>
                  ))
                ) : (
                  <p>Service information coming soon.</p>
                )}
              </div>
            </div>

            <div className="relative min-w-0 lg:sticky lg:top-24">
              {service.partner ? (
                <ServicePartnerCard
                  partner={service.partner}
                  ctaLabel={service.ctaExternalLabel || `Visit ${service.partner.name}`}
                />
              ) : (
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={overviewImageSrc}
                    alt={overviewImageAlt}
                    fill
                    sizes="(min-width: 1024px) 360px, 100vw"
                    className={
                      isFallbackOverviewImage(service)
                        ? "object-contain bg-[#f7fafc] px-6 py-8 opacity-70"
                        : "object-cover object-center"
                    }
                  />
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className="viewport-section section-shell--alt section-border">
        <Container className="w-full">
          <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="section-title">{service.audienceHeading || "Who this is for"}</h2>
              <p className="section-intro">
                This service is designed for clients who want clear, professional guidance, not generic product sales.
              </p>
              <ul className="service-check-list">
                {audiencePoints.map((point) => (
                  <li key={point} className="service-check-list-item">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {includedItems.length > 0 ? (
              <div>
                <h2 className="section-title">{service.includedHeading || "What is included"}</h2>
                <p className="section-intro">
                  {service.partner
                    ? "BGK coordinates the referral; Hansard Owens provides regulated mortgage advice."
                    : "Scope varies by client; we confirm exactly what applies during your initial conversation."}
                </p>
                <ul className="service-check-list">
                  {includedItems.map((item) => (
                    <li key={item} className="service-check-list-item">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </Container>
      </section>

      {benefits.length > 0 ? (
        <section className="viewport-section section-shell--surface section-border">
          <Container className="w-full">
            <div className="section-heading-block">
              <h2 className="section-title">{service.benefitsHeading || "Key benefits"}</h2>
              <p className="section-intro">
                {service.partner
                  ? "How BGK coordinates with our partner so your property decisions support your wider financial goals."
                  : `Practical outcomes you can expect from working with BGK on ${service.title.toLowerCase()}.`}
              </p>
            </div>
            <div className="mx-auto grid w-full max-w-5xl gap-5 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="service-card-variant h-full border-[#d9e5f1] shadow-none">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-semibold">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-body text-base leading-relaxed">{benefit.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="viewport-section section-shell--alt section-border">
        <Container className="w-full">
          <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[minmax(260px,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-12">
            <div className="relative order-2 aspect-[4/3] w-full overflow-hidden rounded-2xl lg:order-1">
              <Image
                src={secondaryImageSrc}
                alt={secondaryImageAlt}
                fill
                sizes="(min-width: 1024px) 360px, 100vw"
                className={
                  !service.secondaryImageUrl && isFallbackServiceImage(service)
                    ? "object-contain bg-[#f7fafc] px-6 py-8 opacity-70"
                    : "object-cover object-center"
                }
              />
            </div>

            <div className="order-1 min-w-0 lg:order-2">
              <h2 className="section-title">{service.timelineHeading || "Path to completion"}</h2>
              <p className="section-intro">A straightforward journey from first conversation to ongoing support.</p>

              <ProcessSteps steps={timelineSteps} bodyClassName="text-base" />
            </div>
          </div>
        </Container>
      </section>

      <PageFaqSection
        heading={service.faqHeading}
        intro="Answers to questions clients often ask before booking a consultation."
        faqs={faqs}
      />

      <section className="viewport-section section-shell--alt section-border">
        <Container className="w-full">
          <div className="section-heading-block">
            <h2 className="section-title">{service.relatedHeading || "Related support"}</h2>
            <p className="section-intro">
              We provide joined-up planning across investments, retirement, mortgage referrals, and protection so
              recommendations stay aligned with your wider goals.
            </p>
          </div>
          <nav aria-label="Related services" className="mx-auto max-w-3xl">
            <ul className="service-related-links">
              {relatedServices.map((related) => (
                <li key={related.slug}>
                  <Link href={`/services/${related.slug}`} className="service-related-link">
                    {related.title}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </section>

      <ServiceRiskWarning slug={slug} />

      <section className="viewport-section">
        <Container className="w-full">
          <div className="section-cta mx-auto max-w-3xl text-center">
            <h2 className="section-cta-title">{service.ctaHeading || "Ready to move forward?"}</h2>
            <p className="mb-6 max-w-3xl text-base text-blue-100">
              {service.ctaBody || "Book a no-obligation consultation and we will help you define the right next step."}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {service.partner ? (
                <>
                  <Button asChild variant="secondary" className="h-11 px-6">
                    <a
                      href={service.ctaExternalHref || service.partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {service.ctaExternalLabel || `Visit ${service.partner.name}`}
                    </a>
                  </Button>
                  <Button asChild variant="ghost" className="h-11 px-6 text-white hover:bg-white/10">
                    <Link href="/contact">Discuss your wider plan</Link>
                  </Button>
                </>
              ) : (
                <Button asChild variant="secondary" className="h-11 px-6">
                  <Link href="/contact">Book a consultation</Link>
                </Button>
              )}
            </div>
          </div>
        </Container>
      </section>

      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer
                }
              }))
            })
          }}
        />
      )}
    </>
  );
}
