import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { getResourceListSettings, getResources } from "@/lib/content";
import { mapSeoToMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getResourceListSettings();
  return mapSeoToMetadata(settings.seo, "/resources");
}

export default async function ResourcesPage() {
  const [resources, settings] = await Promise.all([getResources(), getResourceListSettings()]);

  return (
    <section className="section-block">
      <Container>
        <h1 className="section-title">{settings.heading || "Resources"}</h1>
        <p className="section-intro">
          {settings.intro ||
            "Helpful articles and guidance notes to support informed decisions around planning, investments, and protection."}
        </p>

        <div className="grid grid-2">
          {resources.map((resource) => (
            <article className="card" key={resource._id}>
              <h2>{resource.title}</h2>
              <p className="muted" style={{ marginBottom: "0.5rem" }}>{resource.excerpt || "Resource summary coming soon."}</p>
              {resource.publishedAt ? (
                <p className="muted">{new Date(resource.publishedAt).toLocaleDateString("en-GB")}</p>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
