import { pageType } from "./documents/page";
import { resourceItemType } from "./documents/resourceItem";
import { resourceSettingsType } from "./documents/resourceSettings";
import { pageServiceItemType } from "./objects/pageServiceItem";
import { pageSectionType } from "./objects/pageSection";
import { siteSettingsType } from "./documents/siteSettings";
import { seoType } from "./objects/seo";

export const schemaTypes = [seoType, pageServiceItemType, pageSectionType, pageType, siteSettingsType, resourceItemType, resourceSettingsType];
