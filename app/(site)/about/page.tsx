import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { getSiteSettings } from "@/lib/content";
import { mapSeoToMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return mapSeoToMetadata(settings.seo, "/about");
}

export default async function AboutPage() {
  const settings = await getSiteSettings();

  return (
    <section className="section-block">
      <Container>
        <h1 className="section-title">About BGK Financial Planning</h1>
        <p className="section-intro">
          {settings.aboutIntro ||
            "BGK Financial Planning supports clients through each stage of their financial journey with clear, practical advice."}
        </p>

        <div className="grid grid-2">
          <article className="card">
            <h2>Our approach</h2>
            <p className="muted">
              {settings.aboutApproach ||
                "We prioritise transparency, consistency, and long-term relationships. Every recommendation is shaped around your personal circumstances and future goals."}
            </p>
          </article>
          <article className="card">
            <h2>What clients can expect</h2>
            <p className="muted">
              {settings.aboutExpectations ||
                "Structured guidance, clear next steps, and regular reviews to keep your plan aligned as life and markets change."}
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}
