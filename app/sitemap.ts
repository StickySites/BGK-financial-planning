import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const staticRoutes = ["/", "/services", "/about", "/resources", "/contact"];

const serviceRoutes = siteConfig.services.map((service) => `/services/${service.slug}`);

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...staticRoutes, ...serviceRoutes];

  return routes.map((route) => ({
    url: new URL(route, siteConfig.siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: route === "/resources" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/services") ? 0.9 : 0.7
  }));
}
