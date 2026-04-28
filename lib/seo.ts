import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import type { SeoFields } from "@/lib/sanity/types";

export function buildCanonical(pathname = "/"): string {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return new URL(path, siteConfig.siteUrl).toString();
}

export function mapSeoToMetadata(seo: SeoFields | null | undefined, pathname = "/"): Metadata {
  const title = seo?.title || siteConfig.name;
  const description = seo?.description || siteConfig.description;
  const canonical = buildCanonical(pathname);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "en_GB",
      type: "website"
    },
    robots: { index: !seo?.noIndex, follow: !seo?.noIndex }
  };
}
