import type { ServiceItem } from "@/lib/content/types";

export const bgkBrandImage = "/media/bgk-logo-nobg.png";

type ServiceImageFields = Pick<
  ServiceItem,
  "heroImageUrl" | "overviewImageUrl" | "secondaryImageUrl"
>;

export function getServiceImageSrc(service: Pick<ServiceItem, "heroImageUrl">): string {
  return service.heroImageUrl || bgkBrandImage;
}

export function getServiceOverviewImageSrc(service: ServiceImageFields): string {
  return service.overviewImageUrl || service.heroImageUrl || bgkBrandImage;
}

export function getServiceSecondaryImageSrc(service: ServiceImageFields): string {
  return service.secondaryImageUrl || service.overviewImageUrl || service.heroImageUrl || bgkBrandImage;
}

export function isFallbackServiceImage(service: Pick<ServiceItem, "heroImageUrl">): boolean {
  return !service.heroImageUrl;
}

export function isFallbackOverviewImage(service: ServiceImageFields): boolean {
  return !service.overviewImageUrl && !service.heroImageUrl;
}
