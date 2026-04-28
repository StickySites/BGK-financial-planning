import { resourceItemType } from "@/sanity/schemaTypes/documents/resourceItem";
import { resourceListSettingsType } from "@/sanity/schemaTypes/documents/resourceListSettings";
import { serviceType } from "@/sanity/schemaTypes/documents/service";
import { siteSettingsType } from "@/sanity/schemaTypes/documents/siteSettings";
import { seoType } from "@/sanity/schemaTypes/objects/seo";

export const schemaTypes = [seoType, siteSettingsType, serviceType, resourceItemType, resourceListSettingsType];
