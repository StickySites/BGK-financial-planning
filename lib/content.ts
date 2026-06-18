import {
  localPages,
  localResourceSettings,
  localResources,
  localServices,
  localServicesBySlug,
  localSiteSettings,
  localTestimonials
} from "@/lib/content/local";
import type {
  PageContent,
  ResourceItem,
  ResourceSettings,
  ServiceItem,
  SiteSettings
} from "@/lib/content/types";

export { getPageSection, parseColonItems, parseFaqs, parseTitledItems, sectionList } from "@/lib/content/helpers";
export type { TitledItem } from "@/lib/content/helpers";

export const fallbackTestimonials = localTestimonials;

export async function getSiteSettings(): Promise<SiteSettings> {
  return localSiteSettings;
}

export async function getResourceSettings(): Promise<ResourceSettings> {
  return localResourceSettings;
}

export async function getPageContent(slug: string): Promise<PageContent> {
  return localPages[slug] || localPages.home;
}

export async function getServices(): Promise<ServiceItem[]> {
  return localServices;
}

export async function getServiceBySlug(slug: string): Promise<ServiceItem | null> {
  return localServicesBySlug[slug] || null;
}

export async function getResources(): Promise<ResourceItem[]> {
  return localResources;
}
