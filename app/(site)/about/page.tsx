import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProcessSteps } from "@/components/process/process-steps";
import { siteProcessSection } from "@/components/process/site-process";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { fallbackTestimonials, getPageContent, getPageSection, getSiteSettings, parseTitledItems } from "@/lib/content";
import { localMedia } from "@/lib/content/local/media";
import { mapSeoToMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const [page, settings] = await Promise.all([getPageContent("about"), getSiteSettings()]);
  return mapSeoToMetadata(page.seo || settings.seo, "/about");
}

export default async function AboutPage() {
  const page = await getPageContent("about");
  const heroSection = getPageSection(page, "hero");
  const storySection = getPageSection(page, "story");
  const pillarsSection = getPageSection(page, "pillars");
  const ctaSection = getPageSection(page, "cta");
  const pillars = parseTitledItems(pillarsSection);

  const heroImageSrc = heroSection?.imageUrl || localMedia.about.hero;
  const heroImageAlt = heroSection?.imageAlt || "About BGK Financial Planning";

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
            <h1 className="section-title">{heroSection?.heading || "About BGK Financial Planning"}</h1>
            <p className="section-intro">
              {heroSection?.intro ||
                "BGK Financial Planning supports clients through each stage of their financial journey with clear, practical advice."}
            </p>
          </div>
        </Container>
      </section>

      <section className="viewport-section section-shell--alt section-border">
        <Container className="w-full">
          <div className="section-heading-block">
            <h2 className="section-title">{storySection?.heading || "Our story"}</h2>
          </div>
          <p className="text-body mx-auto max-w-3xl text-center text-base leading-relaxed md:text-lg">
            {storySection?.intro ||
              "BGK has grown through long-term relationships and a consistent focus on clear, professional guidance. Our work is built on helping clients make practical decisions they can feel confident about."}
          </p>
        </Container>
      </section>

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

      <section className="viewport-section section-shell--alt section-border">
        <Container className="w-full">
          <div className="section-heading-block">
            <h2 className="section-title">{pillarsSection?.heading || "The pillars of BGK"}</h2>
            <p className="section-intro">
              {pillarsSection?.intro || "Values that shape the way we advise and support our clients."}
            </p>
          </div>
          <div className="mx-auto grid w-full max-w-5xl gap-5 md:grid-cols-3">
            {pillars.map((pillar) => (
              <Card key={pillar.title} className="service-card-variant">
                <CardHeader>
                  <CardTitle>{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-body text-sm">{pillar.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="viewport-section section-shell--surface section-border">
        <Container className="w-full">
          <div className="section-heading-block">
            <h2 className="section-title">Meet Bruce Kennedy</h2>
            <p className="section-intro">
              The adviser you work with directly, from first conversation through to ongoing review.
            </p>
          </div>
          <div className="mx-auto grid w-full max-w-4xl gap-6 md:grid-cols-[minmax(0,220px)_1fr] md:items-start">
            <div className="relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-2xl md:mx-0">
              <Image
                src={localMedia.about.bruce}
                alt="Bruce Kennedy, Financial Planner and Founder of BGK Financial Planning"
                fill
                sizes="220px"
                className="object-cover"
              />
            </div>
            <div className="space-y-3">
              <div>
                <h3 className="font-heading text-xl font-semibold text-primary">Bruce Kennedy</h3>
                <p className="text-sm font-medium text-muted-foreground">
                  Financial Planner &amp; Founder, BGK Financial Planning
                </p>
                <p className="text-sm text-muted-foreground">{"[BRUCE'S QUALIFICATIONS]"}</p>
              </div>
              <p className="text-body text-sm leading-relaxed">
                Bruce Kennedy founded BGK Financial Planning to provide straightforward, long-term financial guidance
                to individuals and families. With a background spanning investment planning, retirement advice,
                protection, and coordinated mortgage referrals, Bruce takes a practical approach focused on clear
                recommendations that clients can act on with confidence. [YEAR ESTABLISHED] years of experience working
                with clients across Hertfordshire and the surrounding areas have shaped an advice style built around
                honesty, clarity, and long-term relationships.
              </p>
            </div>
          </div>
        </Container>
      </section>

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

      <section className="viewport-section">
        <Container className="w-full">
          <div className="section-cta mx-auto max-w-3xl text-center">
            <h2 className="section-cta-title">{ctaSection?.heading || "Plan your future with precision"}</h2>
            <p className="mx-auto mb-6 max-w-prose text-blue-100">
              {ctaSection?.intro || "If you want a clear roadmap and practical next steps, we are here to help."}
            </p>
            <Link
              href={ctaSection?.ctaHref || "/contact"}
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-blue-50"
            >
              {ctaSection?.ctaLabel || "Book a consultation"}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
