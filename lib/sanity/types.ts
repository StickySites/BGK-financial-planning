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

export type ServiceItem = {
  _id: string;
  title: string;
  slug: string;
  summary?: string;
  heroImageUrl?: string;
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
