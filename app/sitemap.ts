import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const staticRoutes = ["/", "/about", "/services", "/resources", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((route) => ({
    url: new URL(route, siteConfig.siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.6
  }));
}
