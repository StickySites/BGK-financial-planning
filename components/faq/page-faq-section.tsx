import { ServiceFaqAccordion } from "@/components/services/service-faq-accordion";
import { Container } from "@/components/ui/container";
import type { FaqItem } from "@/lib/content/types";

type PageFaqSectionProps = {
  heading?: string;
  intro?: string;
  faqs: FaqItem[];
};

export function PageFaqSection({
  heading = "Frequently asked questions",
  intro = "Practical answers to questions clients often ask before booking a consultation.",
  faqs
}: PageFaqSectionProps) {
  if (faqs.length === 0) {
    return null;
  }

  return (
    <section className="viewport-section section-shell--surface section-border">
      <Container className="w-full">
        <div className="section-heading-block">
          <h2 className="section-title">{heading}</h2>
          <p className="section-intro">{intro}</p>
        </div>
        <div className="accent-section mx-auto min-w-0 max-w-3xl">
          <ServiceFaqAccordion items={faqs} />
        </div>
      </Container>
    </section>
  );
}
