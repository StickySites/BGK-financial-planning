import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProcessSteps } from "@/components/process/process-steps";
import { siteProcessSection } from "@/components/process/site-process";
import { ServiceFaqAccordion } from "@/components/services/service-faq-accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import {
  fallbackTestimonials,
  getPageContent,
  getPageSection,
  getResources,
  getServices,
  getSiteSettings,
  parseFaqs
} from "@/lib/content";
import type { ServiceItem } from "@/lib/content/types";
import { mapSeoToMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { getServiceImageSrc, isFallbackServiceImage } from "@/lib/service-media";
import { cn } from "@/lib/utils";

const SERVICE_ACCENT_CLASSES = [
  "border-l-4 border-l-[#00509E]",
  "border-l-4 border-l-[#3E6992]",
  "border-l-4 border-l-[#E9C400]",
  "border-l-4 border-l-primary"
] as const;

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  return (
    <Card
      className={cn(
        "service-card-variant h-full w-full min-w-0 overflow-hidden",
        SERVICE_ACCENT_CLASSES[index % SERVICE_ACCENT_CLASSES.length]
      )}
    >
      <div className="relative h-40 overflow-hidden bg-white sm:h-48">
        <Image
          src={getServiceImageSrc(service)}
          alt={`${service.title} icon`}
          fill
          sizes="(min-width: 768px) 45vw, 100vw"
          className={
            isFallbackServiceImage(service)
              ? "object-contain px-2 py-3 opacity-70"
              : "object-cover object-center"
          }
        />
      </div>
      <CardHeader>
        <CardTitle>{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-body mb-4 text-sm">{service.summary || "Service details coming soon."}</p>
        <Link
          className="inline-flex items-center gap-1 text-sm font-semibold text-[#00509E] hover:underline"
          href={`/services/${service.slug}`}
        >
          View service <ArrowRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const [page, settings] = await Promise.all([getPageContent("home"), getSiteSettings()]);
  return mapSeoToMetadata(page.seo || settings.seo, "/");
}

export default async function HomePage() {
  const [page, services, resources, settings] = await Promise.all([
    getPageContent("home"),
    getServices(),
    getResources(),
    getSiteSettings()
  ]);
  const heroSection = getPageSection(page, "hero");
  const servicesSection = getPageSection(page, "services");
  const faqSection = getPageSection(page, "faq");
  const faqs = parseFaqs(faqSection?.faqItems || []);
  const [servicesRowOne, servicesRowTwo] = [services.slice(0, 2), services.slice(2, 4)];

  return (
    <>
      {/* Section 1: Hero — full viewport minus sticky header */}
      <section className="hero-section-backdrop hero-viewport-section">
        <Container className="hero-viewport-inner">
          <div className="hero-panel">
            <div className="min-w-0">
              <h1 className="mb-4 font-heading text-[1.75rem] font-semibold leading-tight sm:text-4xl md:text-6xl">
                {heroSection?.heading || "Plan your finances with confidence."}
              </h1>
              <p className="text-body mb-6 max-w-2xl text-base sm:text-lg">
                {heroSection?.intro ||
                  "At BGK Financial Planning, we help individuals and families make informed financial decisions with practical, long-term advice across investments, retirement, and protection."}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={heroSection?.ctaHref || "/services"}>
                    {heroSection?.ctaLabel || "Explore Services"}
                  </Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/contact">Speak to BGK</Link>
                </Button>
              </div>
            </div>
            {heroSection?.imageUrl ? (
              <div className="relative aspect-[4/3] w-full min-w-0 overflow-hidden rounded-2xl">
                <Image
                  src={heroSection.imageUrl}
                  alt={heroSection.imageAlt || "Financial adviser meeting with clients"}
                  fill
                  sizes="(min-width: 768px) 42vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            ) : null}
          </div>
          <div className="hero-kpi-strip hero-kpi-strip--backdrop">
            <article>
              <h3 className="hero-kpi-title hero-kpi-title--backdrop">Personalised</h3>
              <p className="hero-kpi-text hero-kpi-text--backdrop">
                Advice tailored to your goals, timeline, and circumstances.
              </p>
            </article>
            <article>
              <h3 className="hero-kpi-title hero-kpi-title--backdrop">Practical</h3>
              <p className="hero-kpi-text hero-kpi-text--backdrop">
                Clear recommendations explained in plain English.
              </p>
            </article>
            <article>
              <h3 className="hero-kpi-title hero-kpi-title--backdrop">Long-term</h3>
              <p className="hero-kpi-text hero-kpi-text--backdrop">
                Ongoing reviews to keep your planning aligned over time.
              </p>
            </article>
          </div>
        </Container>
      </section>

      {/* Section 2: Services — first row */}
      <section className="viewport-section section-shell--surface section-border">
        <Container className="w-full">
          <div className="section-heading-block">
            <h2 className="section-title">{servicesSection?.heading || "Our Services"}</h2>
            <p className="section-intro">
              {servicesSection?.intro ||
                "Explore our core advisory services designed to support the next stage of your financial journey."}
            </p>
          </div>
          <div className="mx-auto grid w-full max-w-5xl min-w-0 gap-5 md:grid-cols-2">
            {servicesRowOne.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* Section 3: Services — second row */}
      <section
        className="viewport-section-continuation section-shell--surface section-border"
        aria-label="More advisory services"
      >
        <Container className="w-full">
          <div className="mx-auto grid w-full max-w-5xl min-w-0 gap-5 md:grid-cols-2">
            {servicesRowTwo.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index + 2} />
            ))}
          </div>
        </Container>
      </section>

      {/* Section 4: Regulated & professional */}
      <section className="viewport-section section-shell--alt section-border">
        <Container className="w-full">
          <div className="section-heading-block">
            <h2 className="section-title">Regulated &amp; professional</h2>
            <p className="section-intro">
              The foundations behind every recommendation: clear regulatory standing and protections you can rely on.
            </p>
          </div>
          <div className="mx-auto grid w-full max-w-5xl gap-5 md:grid-cols-3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-base">FCA Regulated</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-body text-sm">
                  BGK Financial Planning is the trading style of Bruce Kennedy, an Appointed Representative of 2plan
                  wealth management Ltd, regulated by the FCA.
                </p>
                <a
                  href="https://register.fca.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#00509E] hover:underline"
                >
                  Check the FCA register <ArrowRight className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-base">Professional qualifications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body text-sm">
                  {"[BRUCE'S QUALIFICATIONS]"}: Bruce holds professional qualifications in financial planning and is
                  committed to continuing professional development.
                </p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-base">FSCS Protected</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-body text-sm">
                  Eligible investment claims are protected up to £85,000 through the Financial Services Compensation
                  Scheme.
                </p>
                <a
                  href="https://www.fscs.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#00509E] hover:underline"
                >
                  Learn about FSCS protection <ArrowRight className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Section 5: Our Process */}
      <section className="viewport-section section-shell--surface section-border">
        <Container className="w-full">
          <div className="section-heading-block">
            <h2 className="section-title">{siteProcessSection.title}</h2>
            <p className="section-intro">{siteProcessSection.intro}</p>
          </div>
          <div className="mx-auto w-full max-w-6xl">
            <ProcessSteps titleClassName="text-lg" steps={siteProcessSection.steps} />
          </div>
        </Container>
      </section>

      {/* Section 6: Client feedback */}
      <section className="viewport-section section-shell--alt section-border">
        <Container className="w-full">
          <div className="section-heading-block">
            <h2 className="section-title">Client feedback</h2>
          </div>
          <div className="mx-auto grid w-full max-w-4xl gap-5 md:grid-cols-2">
            {fallbackTestimonials.map((item) => (
              <Card key={item.name}>
                <CardContent className="pt-6">
                  <p className="mb-3 text-base text-foreground">&quot;{item.quote}&quot;</p>
                  <p className="text-sm text-muted-foreground">
                    {item.name} - {item.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 7: FAQ */}
      {faqs.length > 0 && (
        <section className="viewport-section section-shell--surface section-border">
          <Container className="w-full">
            <div className="section-heading-block">
              <h2 className="section-title">{faqSection?.heading || "Frequently asked questions"}</h2>
              <p className="section-intro">
                {faqSection?.intro ||
                  "Straightforward answers to common questions before you book an initial conversation."}
              </p>
            </div>
            <div className="accent-section mx-auto min-w-0 max-w-3xl">
              <ServiceFaqAccordion items={faqs} />
            </div>
          </Container>
        </section>
      )}

      {/* Section 8: Latest resources */}
      <section className="viewport-section section-shell--surface section-border">
        <Container className="w-full">
          <div className="section-heading-block">
            <h2 className="section-title">Latest resources</h2>
            <p className="section-intro">
              Practical insights to support better financial decisions throughout the year.
            </p>
          </div>
          <div className="mx-auto grid w-full max-w-5xl gap-5 md:grid-cols-3">
            {resources.slice(0, 3).map((resource) => (
              <Card key={resource._id}>
                <CardHeader>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-body text-sm">{resource.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button asChild variant="link" className="px-0">
              <Link href="/resources">Browse all resources</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Section 9: CTA */}
      <section className="viewport-section">
        <Container className="w-full">
          <div className="section-cta mx-auto max-w-3xl text-center">
            <h2 className="section-cta-title">Ready to plan with confidence?</h2>
            <p className="mx-auto mb-6 max-w-prose text-blue-100">
              Book an initial conversation and we will help you identify the most suitable next steps for your goals.
            </p>
            <Button asChild variant="secondary" className="h-11 px-6">
              <Link href="/contact">Book a first conversation</Link>
            </Button>
          </div>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            name: "BGK Financial Planning",
            description:
              "Regulated financial planning covering investments, retirement, protection, and mortgage referrals.",
            url: siteConfig.siteUrl,
            telephone: settings.phone,
            email: settings.email,
            address: {
              "@type": "PostalAddress",
              addressCountry: "GB",
              addressLocality: settings.address
            },
            founder: {
              "@type": "Person",
              name: "Bruce Kennedy"
            },
            areaServed: "GB",
            knowsAbout: ["Investment Planning", "Retirement Planning", "Protection Insurance", "Mortgage Referrals"]
          })
        }}
      />
    </>
  );
}
