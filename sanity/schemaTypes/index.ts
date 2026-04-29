import { pageType } from "@/sanity/schemaTypes/documents/page";
import { resourceItemType } from "@/sanity/schemaTypes/documents/resourceItem";
import { resourceSettingsType } from "@/sanity/schemaTypes/documents/resourceListSettings";
import { pageServiceItemType } from "@/sanity/schemaTypes/objects/pageServiceItem";
import { pageSectionType } from "@/sanity/schemaTypes/objects/pageSection";
import { siteSettingsType } from "@/sanity/schemaTypes/documents/siteSettings";
import { seoType } from "@/sanity/schemaTypes/objects/seo";

export const schemaTypes = [seoType, pageServiceItemType, pageSectionType, pageType, siteSettingsType, resourceItemType, resourceSettingsType];
