import { safeSanityFetch } from "@/lib/sanity/fetch";
import {
  pageBySlugQuery,
  resourceSettingsQuery,
  resourcesQuery,
  servicePagesQuery,
  servicePageBySlugQuery,
  siteSettingsQuery
} from "@/lib/sanity/queries";
import type {
  PageContent,
  PageSection,
  ResourceItem,
  ResourceSettings,
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

const fallbackResourceSettings: ResourceSettings = {
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

const fallbackPageContent: Record<string, PageContent> = {
  home: {
    _id: "page-home",
    title: "Home",
    slug: "home",
    sections: [
      {
        _key: "home-hero",
        key: "hero",
        badge: "Independent Financial Planning",
        heading: "Don't take any chances with your finances.",
        intro:
          "At BGK Financial Planning, we help individuals and families make informed financial decisions with practical, long-term advice across investments, retirement, protection, and mortgage planning.",
        ctaLabel: "Explore Services",
        ctaHref: "/services"
      },
      {
        _key: "home-services",
        key: "services",
        heading: "Our Services",
        intro: "Explore our core advisory services designed to support the next stage of your financial journey."
      },
      {
        _key: "home-trust",
        key: "trust",
        heading: "Why clients choose BGK",
        intro: "Our approach combines professional expertise with clear communication and dependable long-term support."
      }
    ]
  },
  about: {
    _id: "page-about",
    title: "About",
    slug: "about",
    sections: [
      {
        _key: "about-hero",
        key: "hero",
        badge: "About us",
        heading: "About BGK Financial Planning",
        intro:
          "BGK Financial Planning supports clients through each stage of their financial journey with clear, practical advice."
      },
      {
        _key: "about-process",
        key: "process",
        heading: "Our planning process",
        intro: "A simple process designed to keep advice clear and actionable."
      },
      {
        _key: "about-commitment",
        key: "commitment",
        heading: "Our commitment"
      }
    ]
  },
  services: {
    _id: "page-services",
    title: "Services",
    slug: "services",
    sections: [
      {
        _key: "services-hero",
        key: "hero",
        badge: "Advice areas",
        heading: "Services",
        intro: "Explore our core planning services. Each area is tailored to your circumstances and long-term goals."
      },
      {
        _key: "services-help",
        key: "help",
        heading: "How we can help",
        intro:
          "Whether you are planning retirement, protecting your family, or organising long-term investments, we provide practical guidance that is easy to understand and act on."
      }
    ]
  },
  resources: {
    _id: "page-resources",
    title: "Resources",
    slug: "resources",
    sections: [
      {
        _key: "resources-hero",
        key: "hero",
        badge: "Insights",
        heading: "Resources",
        intro:
          "Helpful articles and guidance notes to support informed decisions around planning, investments, and protection."
      },
      {
        _key: "resources-why",
        key: "why",
        heading: "Why these resources matter",
        intro:
          "We publish concise, practical content to help you navigate common financial planning decisions with greater confidence."
      }
    ]
  },
  contact: {
    _id: "page-contact",
    title: "Contact",
    slug: "contact",
    sections: [
      {
        _key: "contact-hero",
        key: "hero",
        badge: "Get in touch",
        heading: "Contact",
        intro: "For general enquiries, please use the details below. We aim to respond as soon as possible."
      },
      {
        _key: "contact-work",
        key: "work",
        heading: "Working with BGK",
        intro:
          "BGK Financial Planning focuses on clear, long-term support to help clients make informed decisions across key financial areas."
      }
    ]
  }
};

export async function getSiteSettings(): Promise<SiteSettings> {
  const settings = await safeSanityFetch<SiteSettings>(siteSettingsQuery);
  return { ...fallbackSettings, ...(settings || {}) };
}

export async function getResourceSettings(): Promise<ResourceSettings> {
  const settings = await safeSanityFetch<ResourceSettings>(resourceSettingsQuery);
  return { ...fallbackResourceSettings, ...(settings || {}) };
}

export async function getResourceListSettings(): Promise<ResourceSettings> {
  return getResourceSettings();
}

export async function getPageContent(slug: string): Promise<PageContent> {
  const page = await safeSanityFetch<PageContent>(pageBySlugQuery, { slug });
  return page || fallbackPageContent[slug] || fallbackPageContent.home;
}

export function getPageSection(page: PageContent, key: string): PageSection | undefined {
  return page.sections.find((section) => section.key === key);
}

export async function getServices(): Promise<ServiceItem[]> {
  const services = await safeSanityFetch<ServiceItem[]>(servicePagesQuery);
  return services && services.length > 0 ? services : fallbackServices;
}

export async function getServiceBySlug(slug: string): Promise<ServiceItem | null> {
  const servicePage = await safeSanityFetch<PageContent>(servicePageBySlugQuery, { slug: `services/${slug}` });
  if (servicePage) {
    const heroSection = servicePage.sections.find((section) => section.key === "hero");
    const detailsSection = servicePage.sections.find((section) => section.key === "details");

    return {
      _id: servicePage._id,
      title: heroSection?.heading || servicePage.title,
      slug,
      summary: heroSection?.intro,
      heroImageUrl: heroSection?.imageUrl,
      body: detailsSection?.body ? [{ _key: "service-details", children: [{ text: detailsSection.body }] }] : [],
      seo: servicePage.seo
    };
  }
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
