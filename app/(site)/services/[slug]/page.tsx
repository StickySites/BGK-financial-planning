import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { getServiceBySlug, getServices } from "@/lib/content";
import { mapSeoToMetadata } from "@/lib/seo";

type ServiceDetailPageProps = { params: Promise<{ slug: string }> };

function detailBlocks(slug: string) {
  switch (slug) {
    case "investment-guidance":
      return {
        who: "Individuals and families looking to invest with structure and clarity.",
        cover: "Goal setting, risk alignment, portfolio approach, and review cadence.",
        outcomes: "A clear investment strategy built around your time horizon and priorities."
      };
    case "retirement-planning":
      return {
        who: "People preparing for retirement or reviewing retirement income options.",
        cover: "Pension planning, retirement timelines, and sustainable income strategy.",
        outcomes: "Greater confidence in what retirement could look like and how to fund it."
      };
    case "protection":
      return {
        who: "Families and individuals wanting to protect income, health, and dependants.",
        cover: "Life cover, income protection, and critical illness planning.",
        outcomes: "A resilient plan that helps reduce financial disruption during unexpected events."
      };
    case "mortgage-advice":
      return {
        who: "Buyers, movers, and remortgagers seeking suitable mortgage options.",
        cover: "Affordability context, lender options, structure comparisons, and planning implications.",
        outcomes: "A mortgage approach that supports your wider financial plan."
      };
    default:
      return {
        who: "Clients seeking practical financial planning support.",
        cover: "A clear process tailored to your specific priorities.",
        outcomes: "Confident decisions with a long-term plan in place."
      };
  }
}

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return mapSeoToMetadata(undefined, `/services/${slug}`);
  return mapSeoToMetadata(service.seo, `/services/${slug}`);
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) notFound();
  const detail = detailBlocks(slug);

  return (
    <section className="section-shell">
      <Container>
        <Badge className="mb-3" variant="secondary">Service overview</Badge>
        <h1 className="section-title">{service.title}</h1>
        <p className="section-intro">{service.summary || "Detailed service information will be added soon."}</p>

        <div className="grid gap-5 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Who this helps</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{detail.who}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>What we cover</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{detail.cover}</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-5">
          <CardHeader>
            <CardTitle>Expected outcomes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-muted-foreground">{detail.outcomes}</p>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>What happens first?</AccordionTrigger>
                <AccordionContent>
                  We begin with a conversation about your goals, current position, and priorities to shape the right approach.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How often is the plan reviewed?</AccordionTrigger>
                <AccordionContent>
                  Reviews are scheduled regularly and adjusted where needed to reflect market changes or personal circumstances.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}
