import { groq } from "next-sanity";

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteTitle,
    tagline,
    heroIntro,
    servicesIntro,
    trustHeading,
    trustIntro,
    trustPointOne,
    trustPointTwo,
    trustPointThree,
    email,
    phone,
    address,
    aboutIntro,
    aboutApproach,
    aboutExpectations,
    contactIntro,
    contactPanelBody,
    seo
  }
`;

export const servicesQuery = groq`
  *[_type == "service"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    summary,
    body,
    seo
  }
`;

export const serviceBySlugQuery = groq`
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    summary,
    body,
    seo
  }
`;

export const resourcesQuery = groq`
  *[_type == "resourceItem"] | order(publishedAt desc) {
    _id,
    title,
    excerpt,
    publishedAt,
    externalUrl
  }
`;

export const resourceListSettingsQuery = groq`
  *[_type == "resourceListSettings"][0] {
    heading,
    intro,
    seo
  }
`;
