import { defineField, defineType } from "sanity";

export const pageServiceItemType = defineType({
  name: "pageServiceItem",
  title: "Page Service Item",
  type: "object",
  fields: [
    defineField({
      name: "service",
      title: "Service Page",
      type: "reference",
      to: [{ type: "page" }],
      options: {
        filter: 'slug.current match "services/*"'
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "label",
      title: "Display Label (optional)",
      type: "string",
      description: "Override the visible name shown on the page. If empty, service title is used."
    })
  ],
  preview: {
    select: { title: "label", serviceTitle: "service.title" },
    prepare(selection) {
      return { title: selection.title || selection.serviceTitle || "Service item" };
    }
  }
});
