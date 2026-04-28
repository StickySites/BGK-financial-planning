import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { fallbackTestimonials, getResources, getServices, getSiteSettings } from "@/lib/content";
import { mapSeoToMetadata } from "@/lib/seo";

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
      <section className="section-block">
        <Container>
          <div className="hero">
            <div>
              <h1>{settings.tagline || "Don't take any chances with your finances."}</h1>
              <p className="section-intro">
                We provide clear financial guidance built around your needs, with practical support across investing,
                retirement planning, protection, and mortgage decisions.
              </p>
              <Link href="/services" className="button-link">Explore Services</Link>
            </div>
            <div className="hero-media">Brand image placeholder</div>
          </div>
        </Container>
      </section>

      <section className="section-block">
        <Container>
          <h2 className="section-title">Our Services</h2>
          <p className="section-intro">Choose a service to learn more about how BGK can support your planning goals.</p>
          <div className="grid">
            {services.map((service) => (
              <article key={service.slug} className="card">
                <h3>{service.title}</h3>
                <p className="muted" style={{ marginBottom: "0.8rem" }}>{service.summary || "Service details coming soon."}</p>
                <Link className="pill-link" href={`/services/${service.slug}`}>View service</Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-block">
        <Container>
          <h2 className="section-title">Building Financial Futures Together</h2>
          <div className="grid grid-2">
            <article className="card">
              <h3>Personalised guidance</h3>
              <p className="muted">Advice shaped around your goals, timeline, and preferred level of risk.</p>
            </article>
            <article className="card">
              <h3>Reliable support</h3>
              <p className="muted">A straightforward process designed to help you make confident decisions over time.</p>
            </article>
          </div>
        </Container>
      </section>

      <section className="section-block">
        <Container>
          <h2 className="section-title">Client Feedback</h2>
          <div className="grid grid-2">
            {fallbackTestimonials.map((item) => (
              <article className="card" key={item.name}>
                <p style={{ marginBottom: "0.75rem" }}>&quot;{item.quote}&quot;</p>
                <p className="muted">{item.name} - {item.role}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-block">
        <Container>
          <h2 className="section-title">Latest Resources</h2>
          <div className="grid">
            {resources.slice(0, 3).map((resource) => (
              <article className="card" key={resource._id}>
                <h3>{resource.title}</h3>
                <p className="muted">{resource.excerpt}</p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "1rem" }}>
            <Link href="/resources" className="pill-link">Browse all resources</Link>
          </div>
        </Container>
      </section>
    </>
  );
}
