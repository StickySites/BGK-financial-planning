import type { ResourceSettings, SiteSettings } from "@/lib/content/types";

export const localSiteSettings: SiteSettings = {
  siteTitle: "BGK Financial Planning",
  email: "bruce@bgk-fp.com",
  phone: "01442 260 613",
  address: "Hemel Hempstead, Hertfordshire",
  seo: {
    title: "BGK Financial Planning",
    description:
      "Professional financial planning guidance across investment, retirement, protection, and coordinated mortgage referrals.",
    noIndex: false
  }
};

export const localResourceSettings: ResourceSettings = {
  heading: "Resources",
  intro:
    "Helpful articles and guidance notes to support informed decisions around planning, investments, and protection.",
  seo: {
    title: "Resources | BGK Financial Planning",
    description: "Practical financial planning articles and guidance from BGK Financial Planning."
  }
};
