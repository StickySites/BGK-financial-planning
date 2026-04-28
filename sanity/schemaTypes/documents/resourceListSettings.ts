import { defineField, defineType } from "sanity";

export const resourceListSettingsType = defineType({
  name: "resourceListSettings",
  title: "Resource List Settings",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({ name: "intro", title: "Intro", type: "text", rows: 4 }),
    defineField({ name: "seo", title: "SEO", type: "seo" })
  ]
});
