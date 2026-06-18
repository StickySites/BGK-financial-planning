import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { localSiteSettings } from "@/lib/content/local/settings";

export const metadata: Metadata = {
  title: "Privacy Policy | BGK Financial Planning",
  description: "How BGK Financial Planning collects, uses, and protects your personal data.",
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section-shell">
      <Container>
        <div className="mx-auto w-full max-w-3xl">
          <h1 className="section-title mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: June 2025</p>

          <div className="prose prose-slate max-w-none space-y-8 text-sm leading-relaxed text-muted-foreground">

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">1. Who we are</h2>
              <p>
                BGK Financial Planning is a trading style of Bruce Kennedy, an Appointed Representative of
                2plan wealth management Ltd, which is authorised and regulated by the Financial Conduct
                Authority (FCA Register No: <strong>[FCA REGISTER NUMBER - TO BE CONFIRMED]</strong>).
              </p>
              <p className="mt-3">
                For the purposes of the UK General Data Protection Regulation (UK GDPR) and the Data
                Protection Act 2018, Bruce Kennedy is the data controller for personal data processed
                in connection with BGK Financial Planning.
              </p>
              <p className="mt-3">
                If you have any questions about how we handle your personal data, please contact us at:
              </p>
              <address className="not-italic mt-2 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm">
                Bruce Kennedy, BGK Financial Planning<br />
                <strong>{localSiteSettings.address}</strong><br />
                Email: <strong>{localSiteSettings.email}</strong><br />
                Phone: <strong>{localSiteSettings.phone}</strong>
              </address>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">2. What personal data we collect</h2>
              <p>We may collect and process the following categories of personal data:</p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li><strong>Identity data:</strong> name, date of birth, National Insurance number, passport or driving licence details.</li>
                <li><strong>Contact data:</strong> postal address, email address, telephone number.</li>
                <li><strong>Financial data:</strong> income, assets, liabilities, existing investments and pension arrangements, tax status.</li>
                <li><strong>Health and lifestyle data:</strong> where relevant to protection or retirement planning advice (e.g. medical history, smoking status).</li>
                <li><strong>Communications data:</strong> records of meetings, calls, letters, and emails between us.</li>
                <li><strong>Technical data:</strong> IP address, browser type, and usage data collected when you visit our website.</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">3. How we collect your data</h2>
              <p>We collect personal data:</p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li>Directly from you when you complete a contact form, attend a consultation, or correspond with us.</li>
                <li>From third parties such as product providers, credit reference agencies, or other advisers where we need it to provide advice.</li>
                <li>Automatically via cookies and analytics tools when you visit this website (see our <a href="/cookie-policy" className="text-primary underline">Cookie Policy</a>).</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">4. Why we use your data and our lawful basis</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse mt-3">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left p-3 font-semibold text-primary border border-slate-200">Purpose</th>
                      <th className="text-left p-3 font-semibold text-primary border border-slate-200">Lawful basis</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Providing financial planning advice and recommendations", "Performance of a contract / Legitimate interests"],
                      ["Complying with FCA regulatory requirements and record-keeping obligations", "Legal obligation"],
                      ["Anti-money laundering (AML) and Know Your Client (KYC) checks", "Legal obligation"],
                      ["Sending service-related communications", "Performance of a contract"],
                      ["Sending marketing communications about our services", "Consent (you may withdraw at any time)"],
                      ["Improving our website and services", "Legitimate interests"],
                      ["Handling complaints", "Legal obligation / Legitimate interests"],
                    ].map(([purpose, basis]) => (
                      <tr key={purpose} className="border border-slate-200">
                        <td className="p-3 align-top">{purpose}</td>
                        <td className="p-3 align-top">{basis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">5. Who we share your data with</h2>
              <p>We may share your personal data with:</p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li><strong>2plan wealth management Ltd</strong>, as our principal firm, they have oversight responsibilities and may access client records for compliance purposes.</li>
                <li><strong>Product providers</strong>, insurers, pension providers, mortgage lenders, and investment platforms, to implement recommendations you have agreed to.</li>
                <li><strong>Regulatory authorities</strong>, the FCA, HMRC, and other bodies as required by law.</li>
                <li><strong>IT and software providers</strong>, who process data on our behalf under data processing agreements (e.g. back-office software, email providers).</li>
              </ul>
              <p className="mt-3">We do not sell your personal data to third parties.</p>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">6. How long we keep your data</h2>
              <p>
                FCA rules require us to retain client records for a minimum of five years from the date of the
                last service provided, or longer in certain circumstances (e.g. pension transfer records are
                kept indefinitely). We will not retain data longer than necessary.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">7. Your rights</h2>
              <p>Under UK GDPR you have the right to:</p>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                <li><strong>Access</strong>: request a copy of the personal data we hold about you.</li>
                <li><strong>Rectification</strong>: ask us to correct inaccurate or incomplete data.</li>
                <li><strong>Erasure</strong>: request deletion of your data where there is no lawful reason to continue processing it.</li>
                <li><strong>Restriction</strong>: ask us to restrict processing in certain circumstances.</li>
                <li><strong>Portability</strong>: receive your data in a structured, machine-readable format.</li>
                <li><strong>Object</strong>: object to processing based on legitimate interests or for direct marketing.</li>
                <li><strong>Withdraw consent</strong>: where processing is based on consent, withdraw it at any time without affecting prior processing.</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us using the details in section 1. We will respond
                within one month. You also have the right to lodge a complaint with the Information
                Commissioner&apos;s Office (ICO) at{" "}
                <a href="https://ico.org.uk" className="text-primary underline" target="_blank" rel="noopener noreferrer">www.ico.org.uk</a>.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">8. Cookies</h2>
              <p>
                Our website uses cookies. Please see our{" "}
                <a href="/cookie-policy" className="text-primary underline">Cookie Policy</a>{" "}
                for full details of what cookies we use and how to manage them.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="font-heading text-lg font-semibold text-primary mb-3">9. Changes to this policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The date at the top of this page shows
                when it was last revised. Material changes will be communicated to existing clients directly.
              </p>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
