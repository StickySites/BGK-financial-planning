export const siteConfig = {
  name: "BGK Financial Planning",
  description: "Professional financial planning guidance across investment, retirement, protection, and mortgage decisions.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  navItems: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" }
  ],
  services: [
    { title: "Investment Guidance", slug: "investment-guidance" },
    { title: "Retirement Planning", slug: "retirement-planning" },
    { title: "Protection", slug: "protection" },
    { title: "Mortgage Advice", slug: "mortgage-advice" }
  ]
};
