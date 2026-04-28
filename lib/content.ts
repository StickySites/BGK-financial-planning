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
  heroIntro:
    "We help individuals and families make confident financial decisions through practical, long-term planning.",
  servicesIntro:
    "Explore our core advisory services designed to support the next stage of your financial journey.",
  trustHeading: "Why clients choose BGK",
  trustIntro:
    "Our approach combines professional expertise with clear communication and dependable long-term support.",
  trustPointOne: "Independent guidance aligned to your personal goals.",
  trustPointTwo: "Transparent advice and recommendations in plain English.",
  trustPointThree: "Ongoing reviews that keep your plan on track.",
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
      "Build a long-term investment strategy that reflects your goals, timeline, and comfort with risk."
  },
  {
    _id: "service-retirement",
    title: "Retirement Planning",
    slug: "retirement-planning",
    summary:
      "Create a clear retirement roadmap with realistic income planning and regular milestone reviews."
  },
  {
    _id: "service-protection",
    title: "Protection",
    slug: "protection",
    summary:
      "Protect your family and financial plan with insurance and risk-management recommendations."
  },
  {
    _id: "service-mortgage",
    title: "Mortgage Advice",
    slug: "mortgage-advice",
    summary:
      "Get mortgage guidance tailored to your current circumstances and longer-term plans."
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
    role: "Business Owner",
    quote:
      "BGK gave me a clear plan and helped me make financial decisions with far more confidence."
  },
  {
    name: "Rachel and Tom Smith",
    role: "Family Clients",
    quote:
      "Their practical advice made our long-term planning feel structured, realistic, and manageable."
  }
];
