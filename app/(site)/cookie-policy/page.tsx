import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { localSiteSettings } from "@/lib/content/local/settings";

export const metadata: Metadata = {
  title: "Cookie Policy | BGK Financial Planning",
  description: "Information about the cookies used on the BGK Financial Planning website.",
  robots: { index: false },
};

export default function CookiePolicyPage() {
  return (
    <section className="section-shell">
      <Container>
        <div className="mx-auto w-full max-w-3xl">
          <h1 className="section-title mb-2">Cookie Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: June 2025</p>

          <div className="prose prose-slate max-w-none space-y-8 text-sm leading-relaxed text-muted-foreground">

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">1. What are cookies?</h2>
              <p>
                Cookies are small text files that are stored on your device when you visit a website.
                They allow the site to recognise your device on subsequent visits and can store
                preferences and usage data. Cookies cannot run programmes or deliver viruses to your
                device.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">2. How we use cookies</h2>
              <p>We use cookies on this website for the following purposes:</p>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left p-3 font-semibold text-primary border border-slate-200">Category</th>
                      <th className="text-left p-3 font-semibold text-primary border border-slate-200">Purpose</th>
                      <th className="text-left p-3 font-semibold text-primary border border-slate-200">Consent required?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "Strictly necessary",
                        "Essential for the website to function. These cannot be disabled. Examples: session management, security tokens, cookie consent preferences.",
                        "No",
                      ],
                      [
                        "Analytics",
                        "Help us understand how visitors use the site so we can improve it (e.g. Google Analytics). These cookies collect anonymous, aggregated data.",
                        "Yes",
                      ],
                      [
                        "Functional",
                        "Remember your preferences (e.g. language or region settings) to improve your experience.",
                        "Yes",
                      ],
                    ].map(([cat, purpose, consent]) => (
                      <tr key={cat} className="border border-slate-200">
                        <td className="p-3 align-top font-medium text-foreground">{cat}</td>
                        <td className="p-3 align-top">{purpose}</td>
                        <td className="p-3 align-top">{consent}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-4">
                We do not currently use advertising or targeting cookies.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">3. Third-party cookies</h2>
              <p>
                Where we use third-party tools such as Google Analytics, those providers may set their
                own cookies. We require them to process data only in accordance with our instructions
                and applicable data protection law. Google&apos;s privacy policy is available at{" "}
                <a href="https://policies.google.com/privacy" className="text-primary underline" target="_blank" rel="noopener noreferrer">
                  policies.google.com/privacy
                </a>.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">4. Your choices</h2>
              <p>
                When you first visit our website, you will be asked to consent to non-essential cookies.
                You can change your preferences at any time by clicking the cookie settings link in the
                footer of this page.
              </p>
              <p className="mt-3">
                You can also manage cookies through your browser settings. Below are links to guidance
                for common browsers:
              </p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li>
                  <a href="https://support.google.com/chrome/answer/95647" className="text-primary underline" target="_blank" rel="noopener noreferrer">
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" className="text-primary underline" target="_blank" rel="noopener noreferrer">
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" className="text-primary underline" target="_blank" rel="noopener noreferrer">
                    Apple Safari
                  </a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-primary underline" target="_blank" rel="noopener noreferrer">
                    Microsoft Edge
                  </a>
                </li>
              </ul>
              <p className="mt-3">
                Please be aware that blocking cookies may affect the functionality of this website and
                some features may not work as expected.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">5. More information</h2>
              <p>
                For more information about how we use your personal data, please read our{" "}
                <a href="/privacy-policy" className="text-primary underline">Privacy Policy</a>.
                If you have any questions about this Cookie Policy, contact us at{" "}
                <strong>{localSiteSettings.email}</strong>.
              </p>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
