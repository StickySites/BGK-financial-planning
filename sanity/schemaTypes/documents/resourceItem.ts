import { defineField, defineType } from "sanity";

export const resourceItemType = defineType({
  name: "resourceItem",
  title: "Resources",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3 }),
    defineField({ name: "publishedAt", title: "Published At", type: "datetime" }),
    defineField({ name: "externalUrl", title: "External URL", type: "url" }),
    defineField({ name: "seo", title: "SEO", type: "seo" })
  ]
});
