import { safeSanityFetch } from "@/lib/sanity/fetch";
import {
  resourceListSettingsQuery,
  resourcesQuery,
  serviceBySlugQuery,
  servicesQuery,
  siteSettingsQuery
} from "@/lib/sanity/queries";
import type {
  ResourceItem,
  ResourceListSettings,
  ServiceItem,
  SiteSettings
} from "@/lib/sanity/types";

const fallbackSettings: SiteSettings = {
  siteTitle: "BGK Financial Planning",
  tagline: "Don't take any chances with your finances.",
  email: "hello@bgkfinancialplanning.co.uk",
  phone: "+44 (0)20 1234 5678",
  address: "London, United Kingdom",
  aboutIntro:
    "BGK Financial Planning supports clients through each stage of their financial journey with clear, practical advice.",
  aboutApproach:
    "We prioritise transparency, consistency, and long-term relationships. Every recommendation is shaped around your personal circumstances and future goals.",
  aboutExpectations:
    "Structured guidance, clear next steps, and regular reviews to keep your plan aligned as life and markets change.",
  contactIntro:
    "For general enquiries, please use the details below. We aim to respond as soon as possible.",
  contactPanelBody:
    "BGK Financial Planning focuses on clear, long-term support to help clients make informed decisions across key financial areas."
};

const fallbackResourceListSettings: ResourceListSettings = {
  heading: "Resources",
  intro:
    "Helpful articles and guidance notes to support informed decisions around planning, investments, and protection."
};

const fallbackServices: ServiceItem[] = [
  {
    _id: "service-investment",
    title: "Investment Guidance",
    slug: "investment-guidance",
    summary:
      "Tailored guidance to help you invest with confidence while keeping risk aligned to your goals."
  },
  {
    _id: "service-retirement",
    title: "Retirement Planning",
    slug: "retirement-planning",
    summary:
      "Clear retirement strategies designed around your timeline, lifestyle expectations, and income needs."
  },
  {
    _id: "service-protection",
    title: "Protection",
    slug: "protection",
    summary:
      "Protection planning to safeguard your family and long-term financial stability against uncertainty."
  },
  {
    _id: "service-mortgage",
    title: "Mortgage Advice",
    slug: "mortgage-advice",
    summary:
      "Mortgage guidance to help you compare options and choose the right structure for your circumstances."
  }
];

const fallbackResources: ResourceItem[] = [
  {
    _id: "resource-1",
    title: "Planning for Retirement in Phases",
    excerpt: "A practical framework for setting retirement targets and reviewing them each year.",
    publishedAt: new Date().toISOString()
  },
  {
    _id: "resource-2",
    title: "How to Review Your Protection Cover",
    excerpt: "A checklist for making sure your life and income protection still match your needs.",
    publishedAt: new Date().toISOString()
  },
  {
    _id: "resource-3",
    title: "Investment Risk: What It Really Means",
    excerpt: "A plain-English explanation of volatility, time horizon, and appropriate risk levels.",
    publishedAt: new Date().toISOString()
  }
];

export async function getSiteSettings(): Promise<SiteSettings> {
  const settings = await safeSanityFetch<SiteSettings>(siteSettingsQuery);
  return { ...fallbackSettings, ...(settings || {}) };
}

export async function getResourceListSettings(): Promise<ResourceListSettings> {
  const settings = await safeSanityFetch<ResourceListSettings>(resourceListSettingsQuery);
  return { ...fallbackResourceListSettings, ...(settings || {}) };
}

export async function getServices(): Promise<ServiceItem[]> {
  const services = await safeSanityFetch<ServiceItem[]>(servicesQuery);
  return services && services.length > 0 ? services : fallbackServices;
}

export async function getServiceBySlug(slug: string): Promise<ServiceItem | null> {
  const service = await safeSanityFetch<ServiceItem>(serviceBySlugQuery, { slug });
  if (service) return service;
  return fallbackServices.find((item) => item.slug === slug) || null;
}

export async function getResources(): Promise<ResourceItem[]> {
  const resources = await safeSanityFetch<ResourceItem[]>(resourcesQuery);
  return resources && resources.length > 0 ? resources : fallbackResources;
}

export const fallbackTestimonials = [
  {
    name: "Emily Carter",
    role: "Marketing Manager",
    quote:
      "BGK Financial Planning transformed my approach to savings and long-term planning."
  },
  {
    name: "Rachel and Tom Smith",
    role: "Clients",
    quote:
      "Their guidance gave us confidence and clarity around our family financial goals."
  }
];
