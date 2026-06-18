import type { FaqItem, PageContent, PageSection, ServiceItem } from "@/lib/content/types";

export function getPageSection(page: PageContent, key: string): PageSection | undefined {
  return page.sections.find((section) => section.key === key);
}

export function sectionList(section?: PageSection): string[] | undefined {
  if (!section?.body) {
    return undefined;
  }

  const lines = section.body
    .split("\n")
    .map((line) => line.trim().replace(/^-+\s*/, ""))
    .filter(Boolean);

  return lines.length > 0 ? lines : undefined;
}

export type TitledItem = {
  title: string;
  body: string;
};

export function parseColonItems(items: string[], fallbackTitles?: string[]): TitledItem[] {
  return items.map((item, index) => {
    const [titlePart, ...rest] = item.split(":");
    if (rest.length > 0) {
      return { title: titlePart.trim(), body: rest.join(":").trim() };
    }
    return { title: fallbackTitles?.[index] || `Item ${index + 1}`, body: item };
  });
}

export function parseTitledItems(section?: PageSection): TitledItem[] {
  const lines = sectionList(section);
  if (!lines) {
    return [];
  }

  return parseColonItems(lines);
}

export function parseFaqs(items: (string | FaqItem)[]): FaqItem[] {
  return items.map((item) => {
    if (typeof item !== "string") {
      return item;
    }

    const [questionPart, ...rest] = item.split("?");
    if (rest.length > 0) {
      return { question: `${questionPart.trim()}?`, answer: rest.join("?").trim() };
    }

    return { question: item, answer: "We can cover this in your initial consultation." };
  });
}

export function serviceFromPage(servicePage: PageContent, slug: string): ServiceItem {
  const heroSection = servicePage.sections.find((section) => section.key === "hero");
  const detailsSection = servicePage.sections.find((section) => section.key === "details");
  const audienceSection = servicePage.sections.find(
    (section) => section.key === "audience" || section.key === "who-for"
  );
  const approachSection = servicePage.sections.find(
    (section) => section.key === "approach" || section.key === "pillars"
  );
  const timelineSection = servicePage.sections.find(
    (section) => section.key === "timeline" || section.key === "process"
  );
  const faqSection = servicePage.sections.find((section) => section.key === "faq");
  const ctaSection = servicePage.sections.find((section) => section.key === "cta");

  return {
    _id: servicePage._id,
    title: heroSection?.heading || servicePage.title,
    slug,
    summary: heroSection?.intro,
    heroImageUrl: heroSection?.imageUrl,
    audienceHeading: audienceSection?.heading,
    audienceItems: sectionList(audienceSection),
    approachHeading: approachSection?.heading,
    approachItems: sectionList(approachSection),
    timelineHeading: timelineSection?.heading,
    timelineItems: sectionList(timelineSection),
    faqHeading: faqSection?.heading,
    faqItems: sectionList(faqSection),
    ctaHeading: ctaSection?.heading,
    ctaBody: ctaSection?.intro || ctaSection?.body,
    body: detailsSection?.body
      ? [{ _key: "service-details", children: [{ text: detailsSection.body }] }]
      : [],
    seo: servicePage.seo
  };
}
