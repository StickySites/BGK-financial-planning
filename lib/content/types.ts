export type SeoFields = {
  title?: string;
  description?: string;
  noIndex?: boolean;
};

export type SiteSettings = {
  siteTitle?: string;
  email?: string;
  phone?: string;
  address?: string;
  seo?: SeoFields;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ServicePartner = {
  name: string;
  url: string;
  tagline?: string;
  description: string;
};

export type ServiceItem = {
  _id: string;
  title: string;
  slug: string;
  summary?: string;
  heroImageUrl?: string;
  overviewImageUrl?: string;
  overviewImageAlt?: string;
  secondaryImageUrl?: string;
  secondaryImageAlt?: string;
  highlights?: string[];
  overviewHeading?: string;
  benefitsHeading?: string;
  benefitsItems?: string[];
  includedHeading?: string;
  includedItems?: string[];
  audienceHeading?: string;
  audienceItems?: string[];
  approachHeading?: string;
  approachItems?: string[];
  timelineHeading?: string;
  timelineItems?: string[];
  faqHeading?: string;
  faqItems?: (string | FaqItem)[];
  relatedHeading?: string;
  ctaHeading?: string;
  ctaBody?: string;
  partner?: ServicePartner;
  ctaExternalHref?: string;
  ctaExternalLabel?: string;
  body?: Array<{
    _key?: string;
    children?: Array<{ text?: string }>;
  }>;
  seo?: SeoFields;
};

export type PageServiceItem = {
  _key: string;
  label?: string;
  service?: ServiceItem;
};

export type PageSection = {
  _key: string;
  key: string;
  badge?: string;
  heading?: string;
  intro?: string;
  body?: string;
  imageUrl?: string;
  imageAlt?: string;
  ctaLabel?: string;
  ctaHref?: string;
  services?: PageServiceItem[];
  faqItems?: (string | FaqItem)[];
};

export type PageContent = {
  _id: string;
  title: string;
  slug: string;
  seo?: SeoFields;
  sections: PageSection[];
};

export type ResourceItem = {
  _id: string;
  title: string;
  excerpt?: string;
  publishedAt?: string;
  externalUrl?: string;
};

export type ResourceSettings = {
  heading?: string;
  intro?: string;
  seo?: SeoFields;
};
