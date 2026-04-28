export type SeoFields = {
  title?: string;
  description?: string;
  noIndex?: boolean;
};

export type SiteSettings = {
  siteTitle?: string;
  tagline?: string;
  heroIntro?: string;
  servicesIntro?: string;
  trustHeading?: string;
  trustIntro?: string;
  trustPointOne?: string;
  trustPointTwo?: string;
  trustPointThree?: string;
  email?: string;
  phone?: string;
  address?: string;
  aboutIntro?: string;
  aboutApproach?: string;
  aboutExpectations?: string;
  contactIntro?: string;
  contactPanelBody?: string;
  seo?: SeoFields;
};

export type ServiceItem = {
  _id: string;
  title: string;
  slug: string;
  summary?: string;
  body?: Array<unknown>;
  seo?: SeoFields;
};

export type ResourceItem = {
  _id: string;
  title: string;
  excerpt?: string;
  publishedAt?: string;
  externalUrl?: string;
};

export type ResourceListSettings = {
  heading?: string;
  intro?: string;
  seo?: SeoFields;
};
