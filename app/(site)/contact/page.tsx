import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { getSiteSettings } from "@/lib/content";
import { mapSeoToMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return mapSeoToMetadata(settings.seo, "/contact");
}

export default async function ContactPage() {
  const settings = await getSiteSettings();

  return (
    <section className="section-block">
      <Container>
        <h1 className="section-title">Contact</h1>
        <p className="section-intro">
          {settings.contactIntro ||
            "For general enquiries, please use the details below. We aim to respond as soon as possible."}
        </p>

        <div className="grid grid-2">
          <article className="card">
            <h2>Contact details</h2>
            <p><strong>Email:</strong> {settings.email || "hello@bgkfinancialplanning.co.uk"}</p>
            <p><strong>Phone:</strong> {settings.phone || "+44 (0)20 1234 5678"}</p>
            <p><strong>Location:</strong> {settings.address || "London, United Kingdom"}</p>
          </article>

          <article className="card">
            <h2>Working with BGK</h2>
            <p className="muted">
              {settings.contactPanelBody ||
                "BGK Financial Planning focuses on clear, long-term support to help clients make informed decisions across key financial areas."}
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}
