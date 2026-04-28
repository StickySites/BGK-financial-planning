import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "siteTitle", title: "Site Title", type: "string" }),
    defineField({ name: "tagline", title: "Homepage Tagline", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "address", title: "Address", type: "text", rows: 3 }),
    defineField({
      name: "aboutIntro",
      title: "About Page Intro",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "aboutApproach",
      title: "About Page: Our Approach",
      type: "text",
      rows: 4
    }),
    defineField({
      name: "aboutExpectations",
      title: "About Page: What Clients Can Expect",
      type: "text",
      rows: 4
    }),
    defineField({
      name: "contactIntro",
      title: "Contact Page Intro",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "contactPanelBody",
      title: "Contact Page: Working With BGK",
      type: "text",
      rows: 4
    }),
    defineField({ name: "seo", title: "Default SEO", type: "seo" })
  ]
});
