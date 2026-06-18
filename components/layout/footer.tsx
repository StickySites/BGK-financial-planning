import Link from "next/link";
import { BrandLogo } from "@/components/brand/brand-logo";
import { Container } from "@/components/ui/container";
import { localSiteSettings } from "@/lib/content/local/settings";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" }
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Business", href: "/terms-of-business" },
  { label: "Complaints", href: "/complaints-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Vulnerable Clients", href: "/vulnerable-clients" }
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 w-full border-t border-slate-200 bg-primary text-primary-foreground sm:mt-16">
      <Container>
        {/* Zone 1 - Three-column grid */}
        <div className="grid gap-8 py-10 sm:py-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="min-w-0">
            <Link href="/" className="mb-3 inline-flex flex-wrap items-center gap-2.5 sm:gap-3">
              <BrandLogo size="md" />
              <span className="font-heading text-base font-semibold text-white sm:text-lg">BGK Financial Planning</span>
            </Link>
            <p className="max-w-2xl text-sm text-blue-100">
              Long-term financial planning support across investments, retirement, protection, and coordinated mortgage referrals.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:contents">
            <div>
              <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-wide text-white/90">Quick links</p>
              <div className="space-y-1 text-sm text-blue-100">
                {quickLinks.map((link) => (
                  <p key={link.href}>
                    <Link href={link.href} className="hover:text-white">
                      {link.label}
                    </Link>
                  </p>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-wide text-white/90">Legal</p>
              <div className="space-y-1 text-sm text-blue-100">
                {legalLinks.map((link) => (
                  <p key={link.href}>
                    <Link href={link.href} className="hover:text-white">
                      {link.label}
                    </Link>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & disclaimer statements */}
        <div className="border-t border-white/10 py-6">
          <div className="space-y-4">
            <p className="text-xs leading-relaxed text-blue-100/80">
              BGK Financial Planning is a trading style of Bruce Kennedy, who is an Appointed Representative of 2plan
              wealth management Ltd, which is authorised and regulated by the Financial Conduct Authority. FCA Register
              Number: [FCA REGISTER NUMBER].
            </p>
            <p className="text-xs leading-relaxed text-blue-100/80">
              If you wish to register a complaint, please contact us at{" "}
              <a href={`mailto:${localSiteSettings.email}`} className="underline hover:text-white">
                {localSiteSettings.email}
              </a>{" "}
              or call{" "}
              <a href={`tel:${localSiteSettings.phone?.replace(/\s/g, "")}`} className="underline hover:text-white">
                {localSiteSettings.phone}
              </a>
              . A summary
              of our internal complaints handling procedures is available on request. If you cannot settle your complaint
              with us, you may be entitled to refer it to the Financial Ombudsman Service at www.financial-ombudsman.org.uk
              or by calling 0800 023 4 567.
            </p>
            <p className="text-xs leading-relaxed text-blue-100/80">
              We are covered by the Financial Services Compensation Scheme (FSCS). The FSCS can pay compensation to
              eligible claimants if an authorised firm cannot meet its obligations. Most investment business is covered up
              to a maximum of £85,000 per eligible claim. Further information: www.fscs.org.uk | The value of investments
              can fall as well as rise. You may get back less than you invest.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-6">
          <p className="text-xs text-blue-100/80">© {year} BGK Financial Planning. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
