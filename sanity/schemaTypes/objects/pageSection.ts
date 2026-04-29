import { defineField, defineType } from "sanity";

export const pageSectionType = defineType({
  name: "pageSection",
  title: "Page Section",
  type: "object",
  fields: [
    defineField({
      name: "key",
      title: "Section Key",
      type: "string",
      description: "Stable identifier used in code (e.g. hero, intro, process, cta).",
      validation: (rule) => rule.required()
    }),
    defineField({ name: "badge", title: "Badge", type: "string" }),
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({ name: "intro", title: "Intro", type: "text", rows: 3 }),
    defineField({ name: "body", title: "Body", type: "text", rows: 5 }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "imageAlt", title: "Image alt text", type: "string" }),
    defineField({ name: "ctaLabel", title: "CTA label", type: "string" }),
    defineField({ name: "ctaHref", title: "CTA link", type: "string" }),
    defineField({
      name: "services",
      title: "Service Subsections",
      type: "array",
      of: [{ type: "pageServiceItem" }],
      description: "Use for services layout hierarchy by referencing individual service pages."
    })
  ],
  preview: {
    select: { title: "heading", subtitle: "key" },
    prepare(selection) {
      return {
        title: selection.title || "Untitled section",
        subtitle: selection.subtitle || "No key"
      };
    }
  }
});
