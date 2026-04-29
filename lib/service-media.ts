import type { ServiceItem } from "@/lib/sanity/types";

export const bgkBrandImage = "/media/bgk-logo-nobg.png";

export function getServiceImageSrc(service: Pick<ServiceItem, "heroImageUrl">): string {
  return service.heroImageUrl || bgkBrandImage;
}

export function isFallbackServiceImage(service: Pick<ServiceItem, "heroImageUrl">): boolean {
  return !service.heroImageUrl;
}
