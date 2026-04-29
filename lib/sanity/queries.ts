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

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    seo,
    sections[]{
      _key,
      key,
      badge,
      heading,
      intro,
      body,
      "imageUrl": image.asset->url,
      imageAlt,
      ctaLabel,
      ctaHref,
      services[]{
        _key,
        label,
        "service": service->{
          _id,
          title,
          "slug": slug.current,
          "summary": coalesce(sections[key == "hero"][0].intro, ""),
          "heroImageUrl": sections[key == "hero"][0].image.asset->url,
          "body": sections[key == "details"][0].body,
          seo
        }
      }
    }
  }
`;

export const servicePageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    seo,
    sections[]{
      _key,
      key,
      badge,
      heading,
      intro,
      body,
      "imageUrl": image.asset->url,
      imageAlt,
      ctaLabel,
      ctaHref
    }
  }
`;

export const servicePagesQuery = groq`
  *[_type == "page" && slug.current match "services/*"] | order(title asc) {
    _id,
    title,
    "slug": replace(slug.current, "services/", ""),
    "summary": coalesce(sections[key == "hero"][0].intro, ""),
    "heroImageUrl": sections[key == "hero"][0].image.asset->url,
    "body": sections[key == "details"][0].body,
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

export const resourceSettingsQuery = groq`
  coalesce(*[_type == "resourceSettings"][0], *[_type == "resourceListSettings"][0]) {
    heading,
    intro,
    seo
  }
`;
