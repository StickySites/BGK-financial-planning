import { defineField, defineType } from "sanity";

export const resourceSettingsType = defineType({
  name: "resourceSettings",
  title: "Resource Settings",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({ name: "intro", title: "Intro", type: "text", rows: 4 }),
    defineField({ name: "seo", title: "SEO", type: "seo" })
  ]
});
